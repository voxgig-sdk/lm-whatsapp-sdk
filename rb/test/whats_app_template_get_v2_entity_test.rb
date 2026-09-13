# WhatsAppTemplateGetV2 entity test

require "minitest/autorun"
require "json"
require_relative "../LmWhatsapp_sdk"
require_relative "runner"

class WhatsAppTemplateGetV2EntityTest < Minitest::Test
  def test_create_instance
    testsdk = LmWhatsappSDK.test(nil, nil)
    ent = testsdk.WhatsAppTemplateGetV2(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = whats_app_template_get_v2_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "whats_app_template_get_v2." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    whats_app_template_get_v2_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.whats_app_template_get_v2")))
    whats_app_template_get_v2_ref01_data = nil
    if whats_app_template_get_v2_ref01_data_raw.length > 0
      whats_app_template_get_v2_ref01_data = Helpers.to_map(whats_app_template_get_v2_ref01_data_raw[0][1])
    end

    # LOAD
    whats_app_template_get_v2_ref01_ent = client.WhatsAppTemplateGetV2(nil)
    whats_app_template_get_v2_ref01_match_dt0 = {
      "id" => whats_app_template_get_v2_ref01_data["id"],
    }
    whats_app_template_get_v2_ref01_data_dt0_loaded = whats_app_template_get_v2_ref01_ent.load(whats_app_template_get_v2_ref01_match_dt0, nil)
    whats_app_template_get_v2_ref01_data_dt0_load_result = Helpers.to_map(whats_app_template_get_v2_ref01_data_dt0_loaded.respond_to?(:data_get) ? whats_app_template_get_v2_ref01_data_dt0_loaded.data_get : whats_app_template_get_v2_ref01_data_dt0_loaded)
    assert !whats_app_template_get_v2_ref01_data_dt0_load_result.nil?
    assert_equal whats_app_template_get_v2_ref01_data_dt0_load_result["id"], whats_app_template_get_v2_ref01_data["id"]

  end
end

def whats_app_template_get_v2_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "whats_app_template_get_v2", "WhatsAppTemplateGetV2TestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LmWhatsappSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["whats_app_template_get_v201", "whats_app_template_get_v202", "whats_app_template_get_v203"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID" => idmap,
    "LM_WHATSAPP_TEST_LIVE" => "FALSE",
    "LM_WHATSAPP_TEST_EXPLAIN" => "FALSE",
    "LM_WHATSAPP_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["LM_WHATSAPP_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["LM_WHATSAPP_APIKEY"],
      },
      extra || {},
    ])
    client = LmWhatsappSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["LM_WHATSAPP_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["LM_WHATSAPP_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
