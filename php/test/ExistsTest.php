<?php
declare(strict_types=1);

// LmWhatsapp SDK exists test

require_once __DIR__ . '/../lmwhatsapp_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = LmWhatsappSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
