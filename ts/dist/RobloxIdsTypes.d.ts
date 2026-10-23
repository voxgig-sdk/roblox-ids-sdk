export interface Decal {
    id?: string;
    name?: string;
    themes?: any[];
    thumbnailUrl?: string;
    upVotes?: number;
    url?: string;
}
export interface DecalListMatch {
    limit?: number;
    q?: string;
    theme?: string;
}
export interface Song {
    artist?: string;
    durationSec?: number;
    genre?: string;
    id?: string;
    isWorking?: boolean;
    name?: string;
    upVotes?: number;
    url?: string;
    verifiedAt?: string;
}
export interface SongListMatch {
    genre?: string;
    limit?: number;
    q?: string;
    working?: boolean;
}
