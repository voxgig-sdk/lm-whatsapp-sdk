# Media entity test

require "minitest/autorun"
require "json"
require_relative "../LmWhatsapp_sdk"
require_relative "runner"

class MediaEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LmWhatsappSDK.test(nil, nil)
    ent = testsdk.Media(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LmWhatsappConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LmWhatsappSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Media(nil).create({ "phone_number" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = media_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "media." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["phone_number01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LM_WHATSAPP_TEST_MEDIA_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    media_ref01_ent = client.Media(nil)
    media_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.media"), "media_ref01"))
    media_ref01_data["phone_number"] = setup[:idmap]["phone_number01"]

    media_ref01_data_result = media_ref01_ent.create(media_ref01_data, nil)
    media_ref01_data = Helpers.to_map(media_ref01_data_result.respond_to?(:data_get) ? media_ref01_data_result.data_get : media_ref01_data_result)
    assert !media_ref01_data.nil?

  end
end

def media_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "media", "MediaTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LmWhatsappSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["media01", "media02", "media03", "phone_number01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LM_WHATSAPP_TEST_MEDIA_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LM_WHATSAPP_TEST_MEDIA_ENTID" => idmap,
    "LM_WHATSAPP_TEST_LIVE" => "FALSE",
    "LM_WHATSAPP_TEST_EXPLAIN" => "FALSE",
    "LM_WHATSAPP_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LM_WHATSAPP_TEST_MEDIA_ENTID"])
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
