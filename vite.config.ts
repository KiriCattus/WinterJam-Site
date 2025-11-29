import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import devToolsJson from 'vite-plugin-devtools-json';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
        tailwindcss(),
        enhancedImages(),
        sveltekit(),
        devToolsJson()
    ],
	ssr: {
        noExternal: ["@tsparticles/engine", "@tsparticles/slim", "@tsparticles/svelte"], // add all tsparticles libraries here, they're not made for SSR, they're client only
    }
});
