<?php
declare(strict_types=1);

// LmWhatsapp SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class LmWhatsappFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new LmWhatsappBaseFeature();
            case "test":
                return new LmWhatsappTestFeature();
            default:
                return new LmWhatsappBaseFeature();
        }
    }
}
