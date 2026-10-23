-- Typed models for the RobloxIds SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Decal
---@field id? string
---@field name? string
---@field themes? table
---@field thumbnailUrl? string
---@field upVotes? number
---@field url? string

---@class DecalListMatch
---@field limit? number
---@field q? string
---@field theme? string

---@class Song
---@field artist? string
---@field durationSec? number
---@field genre? string
---@field id? string
---@field isWorking? boolean
---@field name? string
---@field upVotes? number
---@field url? string
---@field verifiedAt? string

---@class SongListMatch
---@field genre? string
---@field limit? number
---@field q? string
---@field working? boolean

local M = {}

return M
