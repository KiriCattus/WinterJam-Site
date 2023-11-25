import type { D1Database } from '@cloudflare/workers-types';
import { binding } from 'cf-bindings-proxy';

export function getBinding<T>(platform: App.Platform, name: string): T {
    return binding<T>(name, { fallback: platform.env! });
}

export function getDatabase(platform: App.Platform): D1Database {
    return getBinding<D1Database>(platform, 'DB');
}

export default {
    getBinding,
    getDatabase,
}
