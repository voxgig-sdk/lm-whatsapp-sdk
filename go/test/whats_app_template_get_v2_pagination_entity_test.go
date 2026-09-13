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

func TestWhatsAppTemplateGetV2PaginationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WhatsAppTemplateGetV2Pagination(nil)
		if ent == nil {
			t.Fatal("expected non-nil WhatsAppTemplateGetV2PaginationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := whats_app_template_get_v2_paginationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "whats_app_template_get_v2_pagination." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		whatsAppTemplateGetV2PaginationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.whats_app_template_get_v2_pagination")))
		var whatsAppTemplateGetV2PaginationRef01Data map[string]any
		if len(whatsAppTemplateGetV2PaginationRef01DataRaw) > 0 {
			whatsAppTemplateGetV2PaginationRef01Data = core.ToMapAny(whatsAppTemplateGetV2PaginationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = whatsAppTemplateGetV2PaginationRef01Data

		// LOAD
		whatsAppTemplateGetV2PaginationRef01Ent := client.WhatsAppTemplateGetV2Pagination(nil)
		whatsAppTemplateGetV2PaginationRef01MatchDt0 := map[string]any{}
		whatsAppTemplateGetV2PaginationRef01DataDt0Loaded, err := whatsAppTemplateGetV2PaginationRef01Ent.Load(whatsAppTemplateGetV2PaginationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if whatsAppTemplateGetV2PaginationRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func whats_app_template_get_v2_paginationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "whats_app_template_get_v2_pagination", "WhatsAppTemplateGetV2PaginationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read whats_app_template_get_v2_pagination test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse whats_app_template_get_v2_pagination test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"whats_app_template_get_v2_pagination01", "whats_app_template_get_v2_pagination02", "whats_app_template_get_v2_pagination03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID": idmap,
		"LM_WHATSAPP_TEST_LIVE":      "FALSE",
		"LM_WHATSAPP_TEST_EXPLAIN":   "FALSE",
		"LM_WHATSAPP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID"])
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
