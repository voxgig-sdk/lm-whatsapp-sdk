package sdktest

import (
	"encoding/json"
	"fmt"
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
const templateEntityLiveStrict = true


func TestTemplateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Template(nil)
		if ent == nil {
			t.Fatal("expected non-nil TemplateEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Template(nil).Update(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.LmWhatsappError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := templateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "template." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, templateEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a template record it did not create")
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		templateRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.template")))
		var templateRef01Data map[string]any
		if len(templateRef01DataRaw) > 0 {
			templateRef01Data = core.ToMapAny(templateRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = templateRef01Data

		// UPDATE
		templateRef01Ent := client.Template(nil)
		templateRef01DataUp0Up := map[string]any{
			"id": templateRef01Data["id"],
		}

		templateRef01MarkdefUp0Name := "category"
		templateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-template_ref01_%d", setup.now)
		templateRef01DataUp0Up[templateRef01MarkdefUp0Name] = templateRef01MarkdefUp0Value

		templateRef01ResdataUp0Result, err := templateRef01Ent.Update(templateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		templateRef01ResdataUp0 := core.ToMapAny(entityData(templateRef01ResdataUp0Result))
		if templateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if templateRef01ResdataUp0["id"] != templateRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if templateRef01ResdataUp0[templateRef01MarkdefUp0Name] != templateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", templateRef01MarkdefUp0Name, templateRef01ResdataUp0[templateRef01MarkdefUp0Name])
		}

	})
}

func templateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "template", "TemplateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read template test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse template test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"template01", "template02", "template03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LM_WHATSAPP_TEST_TEMPLATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LM_WHATSAPP_TEST_TEMPLATE_ENTID": idmap,
		"LM_WHATSAPP_TEST_LIVE":      "FALSE",
		"LM_WHATSAPP_TEST_EXPLAIN":   "FALSE",
		"LM_WHATSAPP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LM_WHATSAPP_TEST_TEMPLATE_ENTID"])
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
