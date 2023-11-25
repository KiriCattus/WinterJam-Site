import type { ModSubmission } from "$lib/submissions";
import cloudflare from "./cloudflare"
import curseforge from "./curseforge";

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
            mod.logoSize = 400; //hardcoded for curseforge CDN
            const submission = submissions.find(s => s.modId === mod.modId);
            if (submission) {
                submission.mod = mod;
            }
        });
    });
}

export default {
    getSubmissions,
}
