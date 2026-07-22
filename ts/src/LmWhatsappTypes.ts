// Typed models for the LmWhatsapp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ManageTemplate {
}

export interface ManageTemplateRemoveMatch {
  id: string
}

export interface Media {
}

export interface MediaCreateData {
  phone_number: string
}

export interface SendMessage {
}

export interface SendMessageCreateData {
}

export interface Template {
  allow_category_change?: boolean
  category?: string
  component: any[]
  created_date?: string
  id?: any
  language?: string
  library_template_body_input?: Record<string, any>
  library_template_button_input?: any
  library_template_name?: any
  message_send_ttl_second?: number
  modified_date?: any
  name?: any
  parameter_format?: string
  status?: string
  sub_category?: string
}

export interface TemplateCreateData {
  allow_category_change?: boolean
  category?: string
  component: any[]
  created_date?: string
  id?: any
  language?: string
  library_template_body_input?: Record<string, any>
  library_template_button_input?: any
  library_template_name?: any
  message_send_ttl_second?: number
  modified_date?: any
  name?: any
  parameter_format?: string
  status?: string
  sub_category?: string
}

export interface TemplateUpdateData {
  id: string
}

export interface WhatsAppTemplateGetV2 {
}

export interface WhatsAppTemplateGetV2LoadMatch {
  id: string
}

export interface WhatsAppTemplateGetV2Pagination {
  current_page?: number
  item?: any
  page?: number
  result?: number
  results_per_page?: number
}

export interface WhatsAppTemplateGetV2PaginationLoadMatch {
  current_page?: number
  item?: any
  page?: number
  result?: number
  results_per_page?: number
}

