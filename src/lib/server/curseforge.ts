import { CURSEFORGE_API_KEY, USER_AGENT } from '$env/static/private';
import type { ModData, ModLoader } from "$lib/mods";

const API_ENDPOINT = 'https://api.curseforge.com';

async function getMod(modId: string): Promise<ModData | undefined> {

    const result = await fetch(new URL(`/v1/mods/${modId}`, API_ENDPOINT), {
        method: 'GET',
        headers: headers(),
    });
    if (!result.ok) throw new Error(`Failed to fetch mod ${modId} from Curseforge: ${result.status} - ${result.statusText}`);

    const mod = (await result.json()).data as CurseforgeMod;
    return mapToModData(mod);
}

async function getMods(modIds: string[]): Promise<ModData[]> {
    const result = await fetch(new URL(`/v1/mods`, API_ENDPOINT), {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
            modIds: modIds,
        }),
    });
    if (!result.ok) throw new Error(`Failed to fetch mods from Curseforge: ${result.status} - ${result.statusText}`);

    const data = (await result.json()).data as CurseforgeMod[];
    return data.map(mod => mapToModData(mod)).filter(mod => mod !== undefined) as ModData[];
}

function headers(): HeadersInit {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json')
    requestHeaders.set('Accept', 'application/json');
    requestHeaders.set('X-Api-Key', CURSEFORGE_API_KEY);
    requestHeaders.set('User-Agent', USER_AGENT);
    return requestHeaders;
}

function mapToModData(mod: CurseforgeMod): ModData | undefined {
    if (!mod || mod.status !== CurseforgeModStatus.Approved) return undefined;

    const modLoaders: ModLoader[] = mod.latestFilesIndexes.filter(file => file.releaseType !== CurseforgeFileReleaseType.Alpha).map(file => file.modLoader).map(loader => {
        switch (loader) {
            case CurseforgeModLoader.Forge:
                return 'forge';
            case CurseforgeModLoader.Fabric:
                return 'fabric';
            case CurseforgeModLoader.Quilt:
                return 'quilt';
            case CurseforgeModLoader.NeoForged:
                return 'neoforged';
            default:
                return undefined;
        }
    }).filter(loader => loader !== undefined).map(loader => loader as ModLoader);

    return <ModData>{
        platform: 'curseforge',
        modId: mod.id.toString(),

        name: mod.name,
        summary: mod.summary,

        logoUrl: mod.logo.url,
        url: mod.links.websiteUrl,

        authors: mod.authors.map((author) => ({
            name: author.name,
            profileUrl: author.url,
        })),

        loaders: modLoaders,

        created: new Date(mod.dateCreated),
        released: new Date(mod.dateReleased),
        updated: new Date(mod.dateModified),

        downloads: mod.downloadCount,
    }
}

interface CurseforgeMod {
    id: number,
    name: string,
    slug: string,
    links: CurseforgeModLinks,
    summary: string,
    status: CurseforgeModStatus | number,
    downloadCount: number,
    authors: CurseforgeModAuthor[],
    logo: CurseforgeModAsset,
    latestFilesIndexes: CurseforgeFileIndex[],
    dateCreated: string,
    dateModified: string,
    dateReleased: string,
    allowModDistribution: boolean | null | undefined,
    isAvailable: boolean,
}

enum CurseforgeModStatus {
    New = 1,
    ChangesRequired = 2,
    UnderSoftReview = 3,
    Approved = 4,
    Rejected = 5,
    ChangesMade = 6,
    Inactive = 7,
    Abandoned = 8,
    Deleted = 9,
    UnderReview = 10,
}

interface CurseforgeModLinks {
    websiteUrl: string,
    wikiUrl: string,
    issuesUrl: string,
    sourceUrl: string,
}

interface CurseforgeModAsset {
    id: number,
    modId: number,
    title: string,
    description: string,
    thumbnailUrl?: string,
    url: string,
}

interface CurseforgeModAuthor {
    id: number,
    name: string,
    url: string,
}

interface CurseforgeFileIndex {
    gameVersion: string,
    fileId: number,
    filename: string,
    releaseType: CurseforgeFileReleaseType | number,
    gameVersionTypeId: number | null | undefined,
    modLoader: CurseforgeModLoader | number,
}

enum CurseforgeFileReleaseType {
    Release = 1,
    Beta = 2,
    Alpha = 3,
}

enum CurseforgeModLoader {
    Any = 0,
    Forge = 1,
    Cauldron = 2,
    LiteLoader = 3,
    Fabric = 4,
    Quilt = 5,
    NeoForged = 6,
}

export default {
    getMod,
    getMods,
}
