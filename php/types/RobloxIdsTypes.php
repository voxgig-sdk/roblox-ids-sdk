<?php
declare(strict_types=1);

// Typed models for the RobloxIds SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Decal entity data model. */
class Decal
{
    public ?string $id = null;
    public ?string $name = null;
    public ?array $themes = null;
    public ?string $thumbnailUrl = null;
    public ?int $upVotes = null;
    public ?string $url = null;
}

/** Request payload for Decal#list. */
class DecalListMatch
{
    public ?int $limit = null;
    public ?string $q = null;
    public ?string $theme = null;
}

/** Song entity data model. */
class Song
{
    public ?string $artist = null;
    public ?int $durationSec = null;
    public ?string $genre = null;
    public ?string $id = null;
    public ?bool $isWorking = null;
    public ?string $name = null;
    public ?int $upVotes = null;
    public ?string $url = null;
    public ?string $verifiedAt = null;
}

/** Request payload for Song#list. */
class SongListMatch
{
    public ?string $genre = null;
    public ?int $limit = null;
    public ?string $q = null;
    public ?bool $working = null;
}

