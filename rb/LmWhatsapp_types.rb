# frozen_string_literal: true

# Typed models for the LmWhatsapp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ManageTemplate entity data model.
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
# @!attribute [rw] currentPage
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Object, nil]
#
# @!attribute [rw] items
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
# @!attribute [rw] pages
#   @return [Integer, nil]
#
# @!attribute [rw] parameter_format
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Integer, nil]
#
# @!attribute [rw] resultsPerPage
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sub_category
#   @return [String, nil]
ManageTemplate = Struct.new(
  :allow_category_change,
  :category,
  :components,
  :createdDate,
  :currentPage,
  :id,
  :items,
  :language,
  :library_template_body_inputs,
  :library_template_button_inputs,
  :library_template_name,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :pages,
  :parameter_format,
  :results,
  :resultsPerPage,
  :status,
  :sub_category,
  keyword_init: true
)

# Request payload for ManageTemplate#load.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [Array, nil]
ManageTemplateLoadMatch = Struct.new(
  :page,
  :size,
  :sort,
  keyword_init: true
)

# Request payload for ManageTemplate#create.
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
# @!attribute [rw] currentPage
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Object, nil]
#
# @!attribute [rw] items
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
# @!attribute [rw] pages
#   @return [Integer, nil]
#
# @!attribute [rw] parameter_format
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Integer, nil]
#
# @!attribute [rw] resultsPerPage
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sub_category
#   @return [String, nil]
ManageTemplateCreateData = Struct.new(
  :allow_category_change,
  :category,
  :components,
  :createdDate,
  :currentPage,
  :id,
  :items,
  :language,
  :library_template_body_inputs,
  :library_template_button_inputs,
  :library_template_name,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :pages,
  :parameter_format,
  :results,
  :resultsPerPage,
  :status,
  :sub_category,
  keyword_init: true
)

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
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] requestId
#   @return [String]
SendMessage = Struct.new(
  :messages,
  :requestId,
  keyword_init: true
)

# Request payload for SendMessage#create.
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] requestId
#   @return [String]
SendMessageCreateData = Struct.new(
  :messages,
  :requestId,
  keyword_init: true
)

# Template entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] components
#   @return [Object, nil]
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
Template = Struct.new(
  :category,
  :components,
  :createdDate,
  :id,
  :language,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :parameter_format,
  :status,
  keyword_init: true
)

# Request payload for Template#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] components
#   @return [Object, nil]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
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
TemplateUpdateData = Struct.new(
  :id,
  :category,
  :components,
  :createdDate,
  :language,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :parameter_format,
  :status,
  keyword_init: true
)

# WhatsAppTemplateGetV2 entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] components
#   @return [Object, nil]
#
# @!attribute [rw] correct_category
#   @return [String, nil]
#
# @!attribute [rw] createdDate
#   @return [String, nil]
#
# @!attribute [rw] cta_url_link_tracking_opted_out
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
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
# @!attribute [rw] previous_category
#   @return [String, nil]
#
# @!attribute [rw] quality_score
#   @return [Hash, nil]
#
# @!attribute [rw] rejected_reason
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sub_category
#   @return [String, nil]
WhatsAppTemplateGetV2 = Struct.new(
  :category,
  :components,
  :correct_category,
  :createdDate,
  :cta_url_link_tracking_opted_out,
  :id,
  :language,
  :library_template_name,
  :message_send_ttl_seconds,
  :modifiedDate,
  :name,
  :parameter_format,
  :previous_category,
  :quality_score,
  :rejected_reason,
  :status,
  :sub_category,
  keyword_init: true
)

# Request payload for WhatsAppTemplateGetV2#load.
#
# @!attribute [rw] id
#   @return [String]
WhatsAppTemplateGetV2LoadMatch = Struct.new(
  :id,
  keyword_init: true
)

