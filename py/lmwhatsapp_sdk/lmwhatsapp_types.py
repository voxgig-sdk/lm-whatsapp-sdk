# Typed models for the LmWhatsapp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ManageTemplate(TypedDict, total=False):
    id: str


class ManageTemplateRemoveMatch(TypedDict):
    id: str


class Media(TypedDict):
    pass


class MediaCreateData(TypedDict):
    phone_number: str


class SendMessage(TypedDict):
    pass


class SendMessageCreateData(TypedDict):
    pass


class TemplateRequired(TypedDict):
    components: list


class Template(TemplateRequired, total=False):
    allow_category_change: bool
    category: str
    createdDate: str
    id: str | None
    language: str
    library_template_body_inputs: dict
    library_template_button_inputs: list | None
    library_template_name: str | None
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    parameter_format: str
    status: str
    sub_category: str


class TemplateCreateDataRequired(TypedDict):
    components: list


class TemplateCreateData(TemplateCreateDataRequired, total=False):
    allow_category_change: bool
    category: str
    createdDate: str
    id: str | None
    language: str
    library_template_body_inputs: dict
    library_template_button_inputs: list | None
    library_template_name: str | None
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    parameter_format: str
    status: str
    sub_category: str


class TemplateUpdateDataRequired(TypedDict):
    id: str


class TemplateUpdateData(TemplateUpdateDataRequired, total=False):
    allow_category_change: bool
    category: str
    components: list
    createdDate: str
    language: str
    library_template_body_inputs: dict
    library_template_button_inputs: list | None
    library_template_name: str | None
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    parameter_format: str
    status: str
    sub_category: str


class WhatsAppTemplateGetV2(TypedDict, total=False):
    id: str


class WhatsAppTemplateGetV2LoadMatch(TypedDict):
    id: str


class WhatsAppTemplateGetV2Pagination(TypedDict, total=False):
    currentPage: int
    items: list | None
    pages: int
    results: int
    resultsPerPage: int


class WhatsAppTemplateGetV2PaginationLoadMatch(TypedDict, total=False):
    currentPage: int
    items: list | None
    pages: int
    results: int
    resultsPerPage: int
