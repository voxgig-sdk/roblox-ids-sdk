<?php
declare(strict_types=1);

// RobloxIds SDK base feature

class RobloxIdsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RobloxIdsContext $ctx, array $options): void {}
    public function PostConstruct(RobloxIdsContext $ctx): void {}
    public function PostConstructEntity(RobloxIdsContext $ctx): void {}
    public function SetData(RobloxIdsContext $ctx): void {}
    public function GetData(RobloxIdsContext $ctx): void {}
    public function GetMatch(RobloxIdsContext $ctx): void {}
    public function SetMatch(RobloxIdsContext $ctx): void {}
    public function PrePoint(RobloxIdsContext $ctx): void {}
    public function PreSpec(RobloxIdsContext $ctx): void {}
    public function PreRequest(RobloxIdsContext $ctx): void {}
    public function PreResponse(RobloxIdsContext $ctx): void {}
    public function PreResult(RobloxIdsContext $ctx): void {}
    public function PreDone(RobloxIdsContext $ctx): void {}
    public function PreUnexpected(RobloxIdsContext $ctx): void {}
}
