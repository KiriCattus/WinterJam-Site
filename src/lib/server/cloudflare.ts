import type { D1Database } from '@cloudflare/workers-types';
import { binding } from 'cf-bindings-proxy';

export function getBinding<T>(platform: App.Platform | undefined, name: string): T {
    return binding<T>(name, { fallback: platform?.env || process?.env });
}

export function getDatabase(platform: App.Platform | undefined): D1Database {
    return getBinding<D1Database>(platform, 'DB');
}

export function parseDbDate(input: string): Date {
    return new Date(`${input}Z`);
}

export default {
    getBinding,
    getDatabase,
}
