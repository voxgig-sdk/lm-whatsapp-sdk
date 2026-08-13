# frozen_string_literal: true

# Typed models for the LmWhatsapp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ManageTemplate entity data model.
class ManageTemplate
end

# Request payload for ManageTemplate#remove.
#
# @!attribute [rw] id
#   @return [String]
ManageTemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Media entity data model.
class Media
end

# Request payload for Media#create.
#
# @!attribute [rw] phone_number
#   @return [String]
MediaCreateData = Struct.new(
  :phone_number,
  keyword_init: true
)

# SendMessage entity data model.
class SendMessage
end

# Request payload for SendMessage#create.
class SendMessageCreateData
end

# Template entity data model.
#
# @!attribute [rw] allow_category_change
#   @return [Boolean, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] components
#   @return [Array]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Object, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] library_template_body_inputs
#   @return [Hash, nil]
#
# @!attribute [rw] library_template_button_inputs
#   @return [Object, nil]
#
# @!attribute [rw] library_template_name
#   @return [Object, nil]
#
# @!attribute [rw] message_send_ttl_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] modifiedDate
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [Object, nil]
#
# @!attribute [rw] parameter_format
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sub_category
#   @return [String, nil]
Template = Struct.new(
  :allow_category_change,
  :category,
  :components,
  :createdDate,
  :id,
  :language,
  :library_template_body_inputs,
  :library_template_button_inputs,
  :library_template_name,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :parameter_format,
  :status,
  :sub_category,
  keyword_init: true
)

# Request payload for Template#create.
#
# @!attribute [rw] allow_category_change
#   @return [Boolean, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] components
#   @return [Array]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Object, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] library_template_body_inputs
#   @return [Hash, nil]
#
# @!attribute [rw] library_template_button_inputs
#   @return [Object, nil]
#
# @!attribute [rw] library_template_name
#   @return [Object, nil]
#
# @!attribute [rw] message_send_ttl_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] modifiedDate
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [Object, nil]
#
# @!attribute [rw] parameter_format
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sub_category
#   @return [String, nil]
TemplateCreateData = Struct.new(
  :allow_category_change,
  :category,
  :components,
  :createdDate,
  :id,
  :language,
  :library_template_body_inputs,
  :library_template_button_inputs,
  :library_template_name,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :parameter_format,
  :status,
  :sub_category,
  keyword_init: true
)

# Request payload for Template#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] allow_category_change
#   @return [Boolean, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] components
#   @return [Array, nil]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] library_template_body_inputs
#   @return [Hash, nil]
#
# @!attribute [rw] library_template_button_inputs
#   @return [Object, nil]
#
# @!attribute [rw] library_template_name
#   @return [Object, nil]
#
# @!attribute [rw] message_send_ttl_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] modifiedDate
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [Object, nil]
#
# @!attribute [rw] parameter_format
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sub_category
#   @return [String, nil]
TemplateUpdateData = Struct.new(
  :id,
  :allow_category_change,
  :category,
  :components,
  :createdDate,
  :language,
  :library_template_body_inputs,
  :library_template_button_inputs,
  :library_template_name,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :parameter_format,
  :status,
  :sub_category,
  keyword_init: true
)

# WhatsAppTemplateGetV2 entity data model.
class WhatsAppTemplateGetV2
end

# Request payload for WhatsAppTemplateGetV2#load.
#
# @!attribute [rw] id
#   @return [String]
WhatsAppTemplateGetV2LoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# WhatsAppTemplateGetV2Pagination entity data model.
#
# @!attribute [rw] currentPage
#   @return [Integer, nil]
#
# @!attribute [rw] items
#   @return [Object, nil]
#
# @!attribute [rw] pages
#   @return [Integer, nil]
#
# @!attribute [rw] results
#   @return [Integer, nil]
#
# @!attribute [rw] resultsPerPage
#   @return [Integer, nil]
WhatsAppTemplateGetV2Pagination = Struct.new(
  :currentPage,
  :items,
  :pages,
  :results,
  :resultsPerPage,
  keyword_init: true
)

# Request payload for WhatsAppTemplateGetV2Pagination#load.
#
# @!attribute [rw] currentPage
#   @return [Integer, nil]
#
# @!attribute [rw] items
#   @return [Object, nil]
#
# @!attribute [rw] pages
#   @return [Integer, nil]
#
# @!attribute [rw] results
#   @return [Integer, nil]
#
# @!attribute [rw] resultsPerPage
#   @return [Integer, nil]
WhatsAppTemplateGetV2PaginationLoadMatch = Struct.new(
  :currentPage,
  :items,
  :pages,
  :results,
  :resultsPerPage,
  keyword_init: true
)

