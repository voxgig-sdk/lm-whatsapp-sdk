// Typed models for the LmWhatsapp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/lm-whatsapp-sdk/go/core"
)

// ManageTemplate is the typed data model for the manage_template entity.
type ManageTemplate struct {
	Id *string `json:"id,omitempty"`
}

// ManageTemplateRemoveMatch is the typed request payload for ManageTemplate.RemoveTyped.
type ManageTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// Media is the typed data model for the media entity.
type Media struct {
}

// MediaCreateData is the typed request payload for Media.CreateTyped.
type MediaCreateData struct {
	PhoneNumber string `json:"phone_number"`
}

// SendMessage is the typed data model for the send_message entity.
type SendMessage struct {
}

// SendMessageCreateData is the typed request payload for SendMessage.CreateTyped.
type SendMessageCreateData struct {
}

// Template is the typed data model for the template entity.
type Template struct {
	AllowCategoryChange *bool `json:"allow_category_change,omitempty"`
	Category *string `json:"category,omitempty"`
	Components []any `json:"components"`
	CreatedDate *string `json:"createdDate,omitempty"`
	Id *any `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	LibraryTemplateBodyInputs *map[string]any `json:"library_template_body_inputs,omitempty"`
	LibraryTemplateButtonInputs *any `json:"library_template_button_inputs,omitempty"`
	LibraryTemplateName *any `json:"library_template_name,omitempty"`
	MessageSendTtlSeconds *int `json:"message_send_ttl_seconds,omitempty"`
	ModifiedDate *any `json:"modifiedDate,omitempty"`
	Name *any `json:"name,omitempty"`
	ParameterFormat *string `json:"parameter_format,omitempty"`
	Status *string `json:"status,omitempty"`
	SubCategory *string `json:"sub_category,omitempty"`
}

// TemplateCreateData is the typed request payload for Template.CreateTyped.
type TemplateCreateData struct {
	AllowCategoryChange *bool `json:"allow_category_change,omitempty"`
	Category *string `json:"category,omitempty"`
	Components []any `json:"components"`
	CreatedDate *string `json:"createdDate,omitempty"`
	Id *any `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	LibraryTemplateBodyInputs *map[string]any `json:"library_template_body_inputs,omitempty"`
	LibraryTemplateButtonInputs *any `json:"library_template_button_inputs,omitempty"`
	LibraryTemplateName *any `json:"library_template_name,omitempty"`
	MessageSendTtlSeconds *int `json:"message_send_ttl_seconds,omitempty"`
	ModifiedDate *any `json:"modifiedDate,omitempty"`
	Name *any `json:"name,omitempty"`
	ParameterFormat *string `json:"parameter_format,omitempty"`
	Status *string `json:"status,omitempty"`
	SubCategory *string `json:"sub_category,omitempty"`
}

// TemplateUpdateData is the typed request payload for Template.UpdateTyped.
type TemplateUpdateData struct {
	Id string `json:"id"`
	AllowCategoryChange *bool `json:"allow_category_change,omitempty"`
	Category *string `json:"category,omitempty"`
	Components *[]any `json:"components,omitempty"`
	CreatedDate *string `json:"createdDate,omitempty"`
	Language *string `json:"language,omitempty"`
	LibraryTemplateBodyInputs *map[string]any `json:"library_template_body_inputs,omitempty"`
	LibraryTemplateButtonInputs *any `json:"library_template_button_inputs,omitempty"`
	LibraryTemplateName *any `json:"library_template_name,omitempty"`
	MessageSendTtlSeconds *int `json:"message_send_ttl_seconds,omitempty"`
	ModifiedDate *any `json:"modifiedDate,omitempty"`
	Name *any `json:"name,omitempty"`
	ParameterFormat *string `json:"parameter_format,omitempty"`
	Status *string `json:"status,omitempty"`
	SubCategory *string `json:"sub_category,omitempty"`
}

// WhatsAppTemplateGetV2 is the typed data model for the whats_app_template_get_v2 entity.
type WhatsAppTemplateGetV2 struct {
	Id *string `json:"id,omitempty"`
}

// WhatsAppTemplateGetV2LoadMatch is the typed request payload for WhatsAppTemplateGetV2.LoadTyped.
type WhatsAppTemplateGetV2LoadMatch struct {
	Id string `json:"id"`
}

// WhatsAppTemplateGetV2Pagination is the typed data model for the whats_app_template_get_v2_pagination entity.
type WhatsAppTemplateGetV2Pagination struct {
	CurrentPage *int `json:"currentPage,omitempty"`
	Items *any `json:"items,omitempty"`
	Pages *int `json:"pages,omitempty"`
	Results *int `json:"results,omitempty"`
	ResultsPerPage *int `json:"resultsPerPage,omitempty"`
}

// WhatsAppTemplateGetV2PaginationLoadMatch is the typed request payload for WhatsAppTemplateGetV2Pagination.LoadTyped.
type WhatsAppTemplateGetV2PaginationLoadMatch struct {
	CurrentPage *int `json:"currentPage,omitempty"`
	Items *any `json:"items,omitempty"`
	Pages *int `json:"pages,omitempty"`
	Results *int `json:"results,omitempty"`
	ResultsPerPage *int `json:"resultsPerPage,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
