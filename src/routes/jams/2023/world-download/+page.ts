import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(303, 'https://github.com/KiriCattus/WinterJam-Site/releases/download/wj23-world-download/winterjam-2023-world.7z');
}
