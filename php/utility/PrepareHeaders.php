<?php
declare(strict_types=1);

// LmWhatsapp SDK utility: prepare_headers

class LmWhatsappPrepareHeaders
{
    public static function call(LmWhatsappContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
