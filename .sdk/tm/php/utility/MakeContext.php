<?php
declare(strict_types=1);

// LmWhatsapp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LmWhatsappMakeContext
{
    public static function call(array $ctxmap, ?LmWhatsappContext $basectx): LmWhatsappContext
    {
        return new LmWhatsappContext($ctxmap, $basectx);
    }
}
