<?php
declare(strict_types=1);

// LmWhatsapp SDK utility: prepare_body

class LmWhatsappPrepareBody
{
    public static function call(LmWhatsappContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
