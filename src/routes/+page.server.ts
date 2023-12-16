import curseforge from "$lib/server/curseforge";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const workshopsOfDoom = await curseforge.getMod('426387');

    return {
        workshopsOfDoom: {
            name: workshopsOfDoom?.name ?? 'Workshops of Doom',
            url: workshopsOfDoom?.url ?? 'https://www.curseforge.com/projects/426387',
        }
    }
}
