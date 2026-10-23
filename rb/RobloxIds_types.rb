# frozen_string_literal: true

# Typed models for the RobloxIds SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Decal entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] themes
#   @return [Array, nil]
#
# @!attribute [rw] thumbnailUrl
#   @return [String, nil]
#
# @!attribute [rw] upVotes
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Decal = Struct.new(
  :id,
  :name,
  :themes,
  :thumbnailUrl,
  :upVotes,
  :url,
  keyword_init: true
)

# Request payload for Decal#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
DecalListMatch = Struct.new(
  :limit,
  :q,
  :theme,
  keyword_init: true
)

# Song entity data model.
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] durationSec
#   @return [Integer, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isWorking
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] upVotes
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] verifiedAt
#   @return [String, nil]
Song = Struct.new(
  :artist,
  :durationSec,
  :genre,
  :id,
  :isWorking,
  :name,
  :upVotes,
  :url,
  :verifiedAt,
  keyword_init: true
)

# Request payload for Song#list.
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] working
#   @return [Boolean, nil]
SongListMatch = Struct.new(
  :genre,
  :limit,
  :q,
  :working,
  keyword_init: true
)

