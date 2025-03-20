import curseforge from "$lib/server/curseforge";
import submissions from "$lib/server/submissions";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ platform }) => {
    const workshopsOfDoom = await curseforge.getMod('426387');
    const winterjamPack = await curseforge.getMod('952466');

    const entries23 = await submissions.getSubmissions(platform, 2023);
    const entries24 = await submissions.getSubmissions(platform, 2024);

    return {
        wj2023Entries: entries23,
        wj2024Entries: entries24,
        workshopsOfDoom: {
            name: workshopsOfDoom?.name ?? 'Workshops of Doom',
            url: workshopsOfDoom?.url ?? 'https://www.curseforge.com/projects/426387',
        },
        winterjamPack: {
            name: winterjamPack?.name ?? 'Winterjam 2023',
            url: winterjamPack?.url ?? 'https://www.curseforge.com/projects/952466',
        },
    }
}
