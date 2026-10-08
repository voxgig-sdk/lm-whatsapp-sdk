# WhatsAppTemplateGetV2 entity test

import json
import os
import time

import pytest

from lmwhatsapp_sdk.utility.voxgig_struct import voxgig_struct as vs
from lmwhatsapp_sdk import LmWhatsappSDK
from lmwhatsapp_sdk.core import helpers
from lmwhatsapp_sdk.config import shared_config
from lmwhatsapp_sdk.feature.base_feature import LmWhatsappBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestWhatsAppTemplateGetV2Entity:

    def test_should_create_instance(self):
        testsdk = LmWhatsappSDK.test(None, None)
        ent = testsdk.WhatsAppTemplateGetV2(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LmWhatsappSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.WhatsAppTemplateGetV2(None).load({"id": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _whats_app_template_get_v2_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "whats_app_template_get_v2." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow loads a whats_app_template_get_v2 record it has no list to find")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        whats_app_template_get_v2_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.whats_app_template_get_v2")))
        whats_app_template_get_v2_ref01_data = None
        if len(whats_app_template_get_v2_ref01_data_raw) > 0:
            whats_app_template_get_v2_ref01_data = helpers.to_map(whats_app_template_get_v2_ref01_data_raw[0][1])

        # LOAD
        whats_app_template_get_v2_ref01_ent = client.WhatsAppTemplateGetV2(None)
        whats_app_template_get_v2_ref01_match_dt0 = {
            "id": whats_app_template_get_v2_ref01_data["id"],
        }
        whats_app_template_get_v2_ref01_data_dt0_loaded = whats_app_template_get_v2_ref01_ent.load(whats_app_template_get_v2_ref01_match_dt0, None)
        whats_app_template_get_v2_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(whats_app_template_get_v2_ref01_data_dt0_loaded))
        assert whats_app_template_get_v2_ref01_data_dt0_load_result is not None
        assert whats_app_template_get_v2_ref01_data_dt0_load_result["id"] == whats_app_template_get_v2_ref01_data["id"]



def _whats_app_template_get_v2_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/whats_app_template_get_v2/WhatsAppTemplateGetV2TestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LmWhatsappSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["whats_app_template_get_v201", "whats_app_template_get_v202", "whats_app_template_get_v203"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID": idmap,
        "LM_WHATSAPP_TEST_LIVE": "FALSE",
        "LM_WHATSAPP_TEST_EXPLAIN": "FALSE",
        "LM_WHATSAPP_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("LM_WHATSAPP_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("LM_WHATSAPP_APIKEY"),
            },
            extra or {},
        ])
        client = LmWhatsappSDK(helpers.to_map(merged_opts))

    _live = env.get("LM_WHATSAPP_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("LM_WHATSAPP_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
