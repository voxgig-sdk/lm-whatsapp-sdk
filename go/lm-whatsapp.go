package voxgiglmwhatsappsdk

import (
	"github.com/voxgig-sdk/lm-whatsapp-sdk/go/core"
	"github.com/voxgig-sdk/lm-whatsapp-sdk/go/entity"
	"github.com/voxgig-sdk/lm-whatsapp-sdk/go/feature"
	_ "github.com/voxgig-sdk/lm-whatsapp-sdk/go/utility"
)

// Type aliases preserve external API.
type LmWhatsappSDK = core.LmWhatsappSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LmWhatsappEntity = core.LmWhatsappEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LmWhatsappError = core.LmWhatsappError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewManageTemplateEntityFunc = func(client *core.LmWhatsappSDK, entopts map[string]any) core.LmWhatsappEntity {
		return entity.NewManageTemplateEntity(client, entopts)
	}
	core.NewMediaEntityFunc = func(client *core.LmWhatsappSDK, entopts map[string]any) core.LmWhatsappEntity {
		return entity.NewMediaEntity(client, entopts)
	}
	core.NewSendMessageEntityFunc = func(client *core.LmWhatsappSDK, entopts map[string]any) core.LmWhatsappEntity {
		return entity.NewSendMessageEntity(client, entopts)
	}
	core.NewTemplateEntityFunc = func(client *core.LmWhatsappSDK, entopts map[string]any) core.LmWhatsappEntity {
		return entity.NewTemplateEntity(client, entopts)
	}
	core.NewWhatsAppTemplateGetV2EntityFunc = func(client *core.LmWhatsappSDK, entopts map[string]any) core.LmWhatsappEntity {
		return entity.NewWhatsAppTemplateGetV2Entity(client, entopts)
	}
	core.NewWhatsAppTemplateGetV2PaginationEntityFunc = func(client *core.LmWhatsappSDK, entopts map[string]any) core.LmWhatsappEntity {
		return entity.NewWhatsAppTemplateGetV2PaginationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLmWhatsappSDK = core.NewLmWhatsappSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLmWhatsappSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LmWhatsappSDK  { return NewLmWhatsappSDK(nil) }
func Test() *LmWhatsappSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
