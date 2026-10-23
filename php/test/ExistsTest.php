<?php
declare(strict_types=1);

// RobloxIds SDK exists test

require_once __DIR__ . '/../robloxids_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RobloxIdsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
