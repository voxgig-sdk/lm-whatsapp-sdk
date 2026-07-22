// Typed models for the LmWhatsapp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// ManageTemplate is the typed data model for the manage_template entity.
type ManageTemplate struct {
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
	Component []any `json:"component"`
	CreatedDate *string `json:"created_date,omitempty"`
	Id *any `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	LibraryTemplateBodyInput *map[string]any `json:"library_template_body_input,omitempty"`
	LibraryTemplateButtonInput *any `json:"library_template_button_input,omitempty"`
	LibraryTemplateName *any `json:"library_template_name,omitempty"`
	MessageSendTtlSecond *int `json:"message_send_ttl_second,omitempty"`
	ModifiedDate *any `json:"modified_date,omitempty"`
	Name *any `json:"name,omitempty"`
	ParameterFormat *string `json:"parameter_format,omitempty"`
	Status *string `json:"status,omitempty"`
	SubCategory *string `json:"sub_category,omitempty"`
}

// TemplateCreateData is the typed request payload for Template.CreateTyped.
type TemplateCreateData struct {
	AllowCategoryChange *bool `json:"allow_category_change,omitempty"`
	Category *string `json:"category,omitempty"`
	Component []any `json:"component"`
	CreatedDate *string `json:"created_date,omitempty"`
	Id *any `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	LibraryTemplateBodyInput *map[string]any `json:"library_template_body_input,omitempty"`
	LibraryTemplateButtonInput *any `json:"library_template_button_input,omitempty"`
	LibraryTemplateName *any `json:"library_template_name,omitempty"`
	MessageSendTtlSecond *int `json:"message_send_ttl_second,omitempty"`
	ModifiedDate *any `json:"modified_date,omitempty"`
	Name *any `json:"name,omitempty"`
	ParameterFormat *string `json:"parameter_format,omitempty"`
	Status *string `json:"status,omitempty"`
	SubCategory *string `json:"sub_category,omitempty"`
}

// TemplateUpdateData is the typed request payload for Template.UpdateTyped.
type TemplateUpdateData struct {
	Id string `json:"id"`
}

// WhatsAppTemplateGetV2 is the typed data model for the whats_app_template_get_v2 entity.
type WhatsAppTemplateGetV2 struct {
}

// WhatsAppTemplateGetV2LoadMatch is the typed request payload for WhatsAppTemplateGetV2.LoadTyped.
type WhatsAppTemplateGetV2LoadMatch struct {
	Id string `json:"id"`
}

// WhatsAppTemplateGetV2Pagination is the typed data model for the whats_app_template_get_v2_pagination entity.
type WhatsAppTemplateGetV2Pagination struct {
	CurrentPage *int `json:"current_page,omitempty"`
	Item *any `json:"item,omitempty"`
	Page *int `json:"page,omitempty"`
	Result *int `json:"result,omitempty"`
	ResultsPerPage *int `json:"results_per_page,omitempty"`
}

// WhatsAppTemplateGetV2PaginationLoadMatch is the typed request payload for WhatsAppTemplateGetV2Pagination.LoadTyped.
type WhatsAppTemplateGetV2PaginationLoadMatch struct {
	CurrentPage *int `json:"current_page,omitempty"`
	Item *any `json:"item,omitempty"`
	Page *int `json:"page,omitempty"`
	Result *int `json:"result,omitempty"`
	ResultsPerPage *int `json:"results_per_page,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
