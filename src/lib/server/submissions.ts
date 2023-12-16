import type { ModSubmission, SubmissionRequest } from "$lib/submissions";
import cloudflare from "./cloudflare"
import curseforge from "./curseforge";
import discord from '$lib/server/discordWebhook';

async function getSubmissions(platform: App.Platform | undefined, year: number): Promise<ModSubmission[]> {
    const db = cloudflare.getDatabase(platform);

    const { results } = await db.prepare(`SELECT platform, modId, resubmission FROM submissions WHERE year = ?`).bind(year).all();
    const submissions: ModSubmission[] = results.map(row => {
        return <ModSubmission>{
            platform: row.platform,
            modId: row.modId,
            year: year,
            resubmission: row.resubmission,
        }
    }).sort((a, b) => {
        if (a.resubmission && !b.resubmission) return 1;
        if (!a.resubmission && b.resubmission) return -1;

        const first = a.mod?.name || 'null';
        const second = b.mod?.name || 'null';
        return first.localeCompare(second);
    });
    await hydrateSubmissions(submissions);
    return submissions;
}

async function hydrateSubmissions(submissions: ModSubmission[]): Promise<void> {
    await curseforge.getMods(submissions.map(s => s.modId)).then(mods => {
        mods.forEach(mod => {
            const submission = submissions.find(s => s.modId === mod.modId);
            if (submission) {
                submission.mod = mod;
            }
        });
    });
}

async function putSubmission(submission: SubmissionRequest, origin: string): Promise<void> {
    await discord.sendSubmission(submission, new URL('/images/util/webhook-logo.png', origin));
}

export default {
    getSubmissions,
    putSubmission,
}
