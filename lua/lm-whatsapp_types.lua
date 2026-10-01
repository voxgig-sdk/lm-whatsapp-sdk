-- Typed models for the LmWhatsapp SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ManageTemplate
---@field allow_category_change? boolean
---@field category? string
---@field components table
---@field createdDate? string
---@field currentPage? number
---@field id? string|nil
---@field items? table|nil
---@field language? string
---@field library_template_body_inputs? table
---@field library_template_button_inputs? table|nil
---@field library_template_name? string|nil
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field pages? number
---@field parameter_format? string
---@field results? number
---@field resultsPerPage? number
---@field status? string
---@field sub_category? string

---@class ManageTemplateLoadMatch
---@field page? number
---@field size? number
---@field sort? table

---@class ManageTemplateCreateData
---@field allow_category_change? boolean
---@field category? string
---@field components table
---@field createdDate? string
---@field currentPage? number
---@field id? string|nil
---@field items? table|nil
---@field language? string
---@field library_template_body_inputs? table
---@field library_template_button_inputs? table|nil
---@field library_template_name? string|nil
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field pages? number
---@field parameter_format? string
---@field results? number
---@field resultsPerPage? number
---@field status? string
---@field sub_category? string

---@class ManageTemplateRemoveMatch
---@field id string

---@class Media

---@class MediaCreateData
---@field phone_number string

---@class SendMessage
---@field messages table
---@field requestId string

---@class SendMessageCreateData
---@field messages table
---@field requestId string

---@class Template
---@field category? string
---@field components? table|nil
---@field createdDate? string
---@field id? string|nil
---@field language? string
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field parameter_format? string
---@field status? string

---@class TemplateUpdateData
---@field id string
---@field category? string
---@field components? table|nil
---@field createdDate? string
---@field language? string
---@field message_send_ttl_seconds? number
---@field modifiedDate? string|nil
---@field name? string|nil
---@field parameter_format? string
---@field status? string

---@class WhatsAppTemplateGetV2
---@field id? string

---@class WhatsAppTemplateGetV2LoadMatch
---@field id string

local M = {}

return M
