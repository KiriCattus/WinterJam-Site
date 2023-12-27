import curseforge from "$lib/server/curseforge";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const workshopsOfDoom = await curseforge.getMod('426387');
    const winterjamPack = await curseforge.getMod('952466');

    return {
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
