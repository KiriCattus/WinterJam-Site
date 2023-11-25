export interface ModData {
    platform: ModPlatform;
    modId: string;

    name: string;
    summary?: string;

    logoUrl: string;
    url: string;

    authors: ModAuthor[];

    loaders: ModLoader[];

    created: Date;
    released?: Date;
    updated?: Date;

    downloads: number;
}

export type ModPlatform = 'curseforge' | 'modrinth' | 'github';
export type ModLoader = 'forge' | 'fabric' | 'quilt' | 'neoforged' | string;

export interface ModAuthor {
    name: string;
    profileUrl?: string;
    avatarUrl?: string;
}
