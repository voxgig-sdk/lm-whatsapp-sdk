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
---@field components table
---@field createdDate? string
---@field id? string|nil
---@field language? string
---@field library_template_body_inputs? table
---@field library_template_button_inputs? table|nil
---@field library_template_name? string|nil
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field parameter_format? string
---@field status? string
---@field sub_category? string

---@class TemplateCreateData
---@field allow_category_change? boolean
---@field category? string
---@field components table
---@field createdDate? string
---@field id? string|nil
---@field language? string
---@field library_template_body_inputs? table
---@field library_template_button_inputs? table|nil
---@field library_template_name? string|nil
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field parameter_format? string
---@field status? string
---@field sub_category? string

---@class TemplateUpdateData
---@field id string
---@field allow_category_change? boolean
---@field category? string
---@field components? table
---@field createdDate? string
---@field language? string
---@field library_template_body_inputs? table
---@field library_template_button_inputs? table|nil
---@field library_template_name? string|nil
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field parameter_format? string
---@field status? string
---@field sub_category? string

---@class WhatsAppTemplateGetV2

---@class WhatsAppTemplateGetV2LoadMatch
---@field id string

---@class WhatsAppTemplateGetV2Pagination
---@field currentPage? number
---@field items? table|nil
---@field pages? number
---@field results? number
---@field resultsPerPage? number

---@class WhatsAppTemplateGetV2PaginationLoadMatch
---@field currentPage? number
---@field items? table|nil
---@field pages? number
---@field results? number
---@field resultsPerPage? number

local M = {}

return M
