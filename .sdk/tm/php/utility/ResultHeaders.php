<?php
declare(strict_types=1);

// LmWhatsapp SDK utility: result_headers

class LmWhatsappResultHeaders
{
    public static function call(LmWhatsappContext $ctx): ?LmWhatsappResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
