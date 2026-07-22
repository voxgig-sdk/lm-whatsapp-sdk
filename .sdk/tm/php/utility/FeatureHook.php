<?php
declare(strict_types=1);

// LmWhatsapp SDK utility: feature_hook

class LmWhatsappFeatureHook
{
    public static function call(LmWhatsappContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
