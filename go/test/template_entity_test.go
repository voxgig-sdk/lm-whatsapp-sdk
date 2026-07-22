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

func TestTemplateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Template(nil)
		if ent == nil {
			t.Fatal("expected non-nil TemplateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := templateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "template." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LMWHATSAPP_TEST_TEMPLATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		templateRef01Ent := client.Template(nil)
		templateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "template"}, setup.data), "template_ref01"))

		templateRef01DataResult, err := templateRef01Ent.Create(templateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		templateRef01Data = core.ToMapAny(templateRef01DataResult)
		if templateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if templateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
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
		templateRef01ResdataUp0 := core.ToMapAny(templateRef01ResdataUp0Result)
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
	idmap := vs.Transform(
		[]any{"template01", "template02", "template03"},
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
	entidEnvRaw := os.Getenv("LMWHATSAPP_TEST_TEMPLATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LMWHATSAPP_TEST_TEMPLATE_ENTID": idmap,
		"LMWHATSAPP_TEST_LIVE":      "FALSE",
		"LMWHATSAPP_TEST_EXPLAIN":   "FALSE",
		"LMWHATSAPP_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["LMWHATSAPP_TEST_TEMPLATE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LMWHATSAPP_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["LMWHATSAPP_APIKEY"],
			},
			extra,
		})
		client = sdk.NewLmWhatsappSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LMWHATSAPP_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LMWHATSAPP_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
