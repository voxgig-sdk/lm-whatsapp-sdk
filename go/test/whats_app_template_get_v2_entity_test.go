package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/lm-whatsapp-sdk/go"
	"github.com/voxgig-sdk/lm-whatsapp-sdk/go/core"

	vs "github.com/voxgig-sdk/lm-whatsapp-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const whats_app_template_get_v2EntityLiveStrict = true


func TestWhatsAppTemplateGetV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WhatsAppTemplateGetV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil WhatsAppTemplateGetV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.WhatsAppTemplateGetV2(nil).Load(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.LmWhatsappError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := whats_app_template_get_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "whats_app_template_get_v2." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, whats_app_template_get_v2EntityLiveStrict, "Live entity test blocked: %s", "the flow loads a whats_app_template_get_v2 record it has no list to find")
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		whatsAppTemplateGetV2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.whats_app_template_get_v2")))
		var whatsAppTemplateGetV2Ref01Data map[string]any
		if len(whatsAppTemplateGetV2Ref01DataRaw) > 0 {
			whatsAppTemplateGetV2Ref01Data = core.ToMapAny(whatsAppTemplateGetV2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = whatsAppTemplateGetV2Ref01Data

		// LOAD
		whatsAppTemplateGetV2Ref01Ent := client.WhatsAppTemplateGetV2(nil)
		whatsAppTemplateGetV2Ref01MatchDt0 := map[string]any{
			"id": whatsAppTemplateGetV2Ref01Data["id"],
		}
		whatsAppTemplateGetV2Ref01DataDt0Loaded, err := whatsAppTemplateGetV2Ref01Ent.Load(whatsAppTemplateGetV2Ref01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		whatsAppTemplateGetV2Ref01DataDt0LoadResult := core.ToMapAny(entityData(whatsAppTemplateGetV2Ref01DataDt0Loaded))
		if whatsAppTemplateGetV2Ref01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if whatsAppTemplateGetV2Ref01DataDt0LoadResult["id"] != whatsAppTemplateGetV2Ref01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func whats_app_template_get_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "whats_app_template_get_v2", "WhatsAppTemplateGetV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read whats_app_template_get_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse whats_app_template_get_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"whats_app_template_get_v201", "whats_app_template_get_v202", "whats_app_template_get_v203"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID": idmap,
		"LM_WHATSAPP_TEST_LIVE":      "FALSE",
		"LM_WHATSAPP_TEST_EXPLAIN":   "FALSE",
		"LM_WHATSAPP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LM_WHATSAPP_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["LM_WHATSAPP_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewLmWhatsappSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LM_WHATSAPP_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LM_WHATSAPP_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
