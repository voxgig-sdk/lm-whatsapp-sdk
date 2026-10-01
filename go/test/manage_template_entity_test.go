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

func TestManageTemplateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ManageTemplate(nil)
		if ent == nil {
			t.Fatal("expected non-nil ManageTemplateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := manage_templateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "manage_template." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		manageTemplateRef01Ent := client.ManageTemplate(nil)
		manageTemplateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "manage_template"}), "manage_template_ref01"))

		manageTemplateRef01DataResult, err := manageTemplateRef01Ent.Create(manageTemplateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		manageTemplateRef01Data = core.ToMapAny(entityData(manageTemplateRef01DataResult))
		if manageTemplateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if manageTemplateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		manageTemplateRef01MatchDt0 := map[string]any{
			"id": manageTemplateRef01Data["id"],
		}
		manageTemplateRef01DataDt0Loaded, err := manageTemplateRef01Ent.Load(manageTemplateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		manageTemplateRef01DataDt0LoadResult := core.ToMapAny(entityData(manageTemplateRef01DataDt0Loaded))
		if manageTemplateRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if manageTemplateRef01DataDt0LoadResult["id"] != manageTemplateRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		manageTemplateRef01MatchRm0 := map[string]any{
			"id": manageTemplateRef01Data["id"],
		}
		_, err = manageTemplateRef01Ent.Remove(manageTemplateRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func manage_templateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "manage_template", "ManageTemplateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read manage_template test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse manage_template test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"manage_template01", "manage_template02", "manage_template03"},
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
	entidEnvRaw := os.Getenv("LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID": idmap,
		"LM_WHATSAPP_TEST_LIVE":      "FALSE",
		"LM_WHATSAPP_TEST_EXPLAIN":   "FALSE",
		"LM_WHATSAPP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID"])
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
