// See https://kit.svelte.dev/docs/types#app

import type { D1Database } from "@cloudflare/workers-types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: {
				DB: D1Database,
				CURSEFORGE_API_KEY: string,
				USER_AGENT: string,
				DISCORD_WEBHOOK_URL: string,
			}
		}
	}
}

export {};
