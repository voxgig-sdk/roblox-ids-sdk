<?php
declare(strict_types=1);

// RobloxIds SDK utility: result_headers

class RobloxIdsResultHeaders
{
    public static function call(RobloxIdsContext $ctx): ?RobloxIdsResult
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
