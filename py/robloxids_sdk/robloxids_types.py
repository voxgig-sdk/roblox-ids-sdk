# Typed models for the RobloxIds SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Decal(TypedDict, total=False):
    id: str
    name: str
    themes: list
    thumbnailUrl: str
    upVotes: int
    url: str


class DecalListMatch(TypedDict, total=False):
    limit: int
    q: str
    theme: str


class Song(TypedDict, total=False):
    artist: str
    durationSec: int
    genre: str
    id: str
    isWorking: bool
    name: str
    upVotes: int
    url: str
    verifiedAt: str


class SongListMatch(TypedDict, total=False):
    genre: str
    limit: int
    q: str
    working: bool
