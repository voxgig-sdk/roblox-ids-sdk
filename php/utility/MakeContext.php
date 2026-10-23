<?php
declare(strict_types=1);

// RobloxIds SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RobloxIdsMakeContext
{
    public static function call(array $ctxmap, ?RobloxIdsContext $basectx): RobloxIdsContext
    {
        return new RobloxIdsContext($ctxmap, $basectx);
    }
}
