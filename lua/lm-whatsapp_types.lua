-- Typed models for the LmWhatsapp SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ManageTemplate

---@class ManageTemplateRemoveMatch
---@field id string

---@class Media

---@class MediaCreateData
---@field phone_number string

---@class SendMessage

---@class SendMessageCreateData

---@class Template
---@field allow_category_change? boolean
---@field category? string
---@field component table
---@field created_date? string
---@field id? any
---@field language? string
---@field library_template_body_input? table
---@field library_template_button_input? any
---@field library_template_name? any
---@field message_send_ttl_second? number
---@field modified_date? any
---@field name? any
---@field parameter_format? string
---@field status? string
---@field sub_category? string

---@class TemplateCreateData
---@field allow_category_change? boolean
---@field category? string
---@field component table
---@field created_date? string
---@field id? any
---@field language? string
---@field library_template_body_input? table
---@field library_template_button_input? any
---@field library_template_name? any
---@field message_send_ttl_second? number
---@field modified_date? any
---@field name? any
---@field parameter_format? string
---@field status? string
---@field sub_category? string

---@class TemplateUpdateData
---@field id string

---@class WhatsAppTemplateGetV2

---@class WhatsAppTemplateGetV2LoadMatch
---@field id string

---@class WhatsAppTemplateGetV2Pagination
---@field current_page? number
---@field item? any
---@field page? number
---@field result? number
---@field results_per_page? number

---@class WhatsAppTemplateGetV2PaginationLoadMatch
---@field current_page? number
---@field item? any
---@field page? number
---@field result? number
---@field results_per_page? number

local M = {}

return M
