import type { ModData, ModPlatform } from "./mods";

export interface ModSubmission {
    platform: ModPlatform;
    modId: string;
    year: number;
    resubmission: boolean;
    mod?: ModData;
}
