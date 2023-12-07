import type { ModData, ModPlatform } from "./mods";

export interface ModSubmission {
    platform: ModPlatform;
    modId: string;
    year: number;
    resubmission: boolean;
    mod?: ModData;
}

export interface SubmissionRequest {
    year: number,
    name: string;
    url: string;
    source: string;
    contact: string;
    teamMembers?: string;
    modpackPermission: boolean;
    feedback?: string;
    time: Date;
}
