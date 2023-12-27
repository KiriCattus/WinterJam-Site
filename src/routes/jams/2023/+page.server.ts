import curseforge from "$lib/server/curseforge";
import submissions from "$lib/server/submissions";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ platform }) => {
    const mods = await submissions.getSubmissions(platform, 2023);
    const winterjamPack = await curseforge.getMod('952466');

    return {
        mods,
        winterjamPack: {
            name: winterjamPack?.name ?? 'Winterjam 2023',
            url: winterjamPack?.url ?? 'https://www.curseforge.com/projects/952466',
        },
    }
}
