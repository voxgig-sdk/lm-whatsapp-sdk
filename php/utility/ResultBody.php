<?php
declare(strict_types=1);

// LmWhatsapp SDK utility: result_body

class LmWhatsappResultBody
{
    public static function call(LmWhatsappContext $ctx): ?LmWhatsappResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
