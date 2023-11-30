import submissions from "$lib/server/submissions";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ platform }) => {
    const mods = await submissions.getSubmissions(platform, 2021);

    return {
        mods,
    }
}
