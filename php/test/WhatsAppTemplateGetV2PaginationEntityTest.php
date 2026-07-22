<?php
declare(strict_types=1);

// WhatsAppTemplateGetV2Pagination entity test

require_once __DIR__ . '/../lmwhatsapp_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class WhatsAppTemplateGetV2PaginationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LmWhatsappSDK::test(null, null);
        $ent = $testsdk->WhatsAppTemplateGetV2Pagination(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = whats_app_template_get_v2_pagination_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "whats_app_template_get_v2_pagination." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LMWHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V__PAGINATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $whats_app_template_get_v2_pagination_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.whats_app_template_get_v2_pagination")));
        $whats_app_template_get_v2_pagination_ref01_data = null;
        if (count($whats_app_template_get_v2_pagination_ref01_data_raw) > 0) {
            $whats_app_template_get_v2_pagination_ref01_data = Helpers::to_map($whats_app_template_get_v2_pagination_ref01_data_raw[0][1]);
        }

        // LOAD
        $whats_app_template_get_v2_pagination_ref01_ent = $client->WhatsAppTemplateGetV2Pagination(null);
        $whats_app_template_get_v2_pagination_ref01_match_dt0 = [];
        $whats_app_template_get_v2_pagination_ref01_data_dt0_loaded = $whats_app_template_get_v2_pagination_ref01_ent->load($whats_app_template_get_v2_pagination_ref01_match_dt0, null);
        $this->assertNotNull($whats_app_template_get_v2_pagination_ref01_data_dt0_loaded);

    }
}

function whats_app_template_get_v2_pagination_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/whats_app_template_get_v2_pagination/WhatsAppTemplateGetV2PaginationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LmWhatsappSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["whats_app_template_get_v2_pagination01", "whats_app_template_get_v2_pagination02", "whats_app_template_get_v2_pagination03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LMWHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V__PAGINATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LMWHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V__PAGINATION_ENTID" => $idmap,
        "LMWHATSAPP_TEST_LIVE" => "FALSE",
        "LMWHATSAPP_TEST_EXPLAIN" => "FALSE",
        "LMWHATSAPP_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LMWHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V__PAGINATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["LMWHATSAPP_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["LMWHATSAPP_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new LmWhatsappSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["LMWHATSAPP_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["LMWHATSAPP_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
