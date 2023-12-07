import { DISCORD_WEBHOOK_URL } from '$env/static/private';
import type { SubmissionRequest } from '$lib/submissions';

async function sendSubmission(submission: SubmissionRequest, iconUrl: URL | undefined = undefined): Promise<void> {

    const embedFields = [
        {
            name: 'Project Name',
            value: submission.name,
        },
        {
            name: 'Project URL',
            value: submission.url,
            urL: submission.url,
        },
        {
            name: 'Source Code URL',
            value: submission.source,
            urL: submission.source,
        },
        {
            name: 'Contact',
            value: submission.contact,
        },
        submission.teamMembers ? {
            name: 'Team Members',
            value: submission.teamMembers,
        }: undefined,
        {
            name: 'Modpack Permission',
            value: ':ballot_box_with_check:'
        },
        submission.feedback ? {
            name: 'Feedback',
            value: submission.feedback,
        } : undefined,
        {
            name: 'Submission Timestamp',
            value: `\`${submission.time.toISOString()}\``
        }
    ];

    const embed = {
        title: `WinterJam ${submission.year} Submission`,
        color: 8246268,
        fields: embedFields.filter(field => field !== undefined),
        timestamp: submission.time.toISOString(),
    };

    const body = {
        username: 'WinterJam',
        avatar_url: iconUrl?.toString(),
        embeds: [embed],
    };

    const result = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!result.ok) throw new Error(`Failed to send submission to Discord: ${result.status} - ${result.statusText}`);
}

export default {
    sendSubmission,
};
