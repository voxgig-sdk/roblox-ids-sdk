// Typed models for the RobloxIds SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Decal {
  id?: string
  name?: string
  themes?: any[]
  thumbnailUrl?: string
  upVotes?: number
  url?: string
}

export interface DecalListMatch {
  limit?: number
  q?: string
  theme?: string
}

export interface Song {
  artist?: string
  durationSec?: number
  genre?: string
  id?: string
  isWorking?: boolean
  name?: string
  upVotes?: number
  url?: string
  verifiedAt?: string
}

export interface SongListMatch {
  genre?: string
  limit?: number
  q?: string
  working?: boolean
}

