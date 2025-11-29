import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const env = process.env;

function firstDefined<T>(...params: Array<T | undefined>): T {
  for (const p of params) {
    if (p !== undefined) {
      return p;
    }
  }

  throw new Error("All elements were undefined!");
}

export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],
	extensions: ['.svelte', '.svx'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		prerender: {
			origin: firstDefined(
				env.CF_PAGES_URL,
				env.FRONTEND_URL,
				'http://localhost:5173'
			)
		},

		alias: {
			'$components/*': 'src/components/*',
			'$assets/*': 'src/assets/*',
		}
	}
};
