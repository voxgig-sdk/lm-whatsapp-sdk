# Template entity test

require "minitest/autorun"
require "json"
require_relative "../LmWhatsapp_sdk"
require_relative "runner"

class TemplateEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LmWhatsappSDK.test(nil, nil)
    ent = testsdk.Template(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LmWhatsappConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LmWhatsappSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Template(nil).update({ "id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = template_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "template." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      Runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow updates a template record it did not create")
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    template_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.template")))
    template_ref01_data = nil
    if template_ref01_data_raw.length > 0
      template_ref01_data = Helpers.to_map(template_ref01_data_raw[0][1])
    end

    # UPDATE
    template_ref01_ent = client.Template(nil)
    template_ref01_data_up0_up = {
      "id" => template_ref01_data["id"],
    }

    template_ref01_markdef_up0_name = "category"
    template_ref01_markdef_up0_value = "Mark01-template_ref01_#{setup[:now]}"
    template_ref01_data_up0_up[template_ref01_markdef_up0_name] = template_ref01_markdef_up0_value

    template_ref01_resdata_up0_result = template_ref01_ent.update(template_ref01_data_up0_up, nil)
    template_ref01_resdata_up0 = Helpers.to_map(template_ref01_resdata_up0_result.respond_to?(:data_get) ? template_ref01_resdata_up0_result.data_get : template_ref01_resdata_up0_result)
    assert !template_ref01_resdata_up0.nil?
    assert_equal template_ref01_resdata_up0["id"], template_ref01_data_up0_up["id"]
    assert_equal template_ref01_resdata_up0[template_ref01_markdef_up0_name], template_ref01_markdef_up0_value

  end
end

def template_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "template", "TemplateTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LmWhatsappSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["template01", "template02", "template03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LM_WHATSAPP_TEST_TEMPLATE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LM_WHATSAPP_TEST_TEMPLATE_ENTID" => idmap,
    "LM_WHATSAPP_TEST_LIVE" => "FALSE",
    "LM_WHATSAPP_TEST_EXPLAIN" => "FALSE",
    "LM_WHATSAPP_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LM_WHATSAPP_TEST_TEMPLATE_ENTID"])
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
