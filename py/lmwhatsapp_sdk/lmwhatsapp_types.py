# Typed models for the LmWhatsapp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
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


class ManageTemplateRequired(TypedDict):
    components: list


class ManageTemplate(ManageTemplateRequired, total=False):
    allow_category_change: bool
    category: str
    createdDate: str
    currentPage: int
    id: str | None
    items: list | None
    language: str
    library_template_body_inputs: dict
    library_template_button_inputs: list | None
    library_template_name: str | None
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    pages: int
    parameter_format: str
    results: int
    resultsPerPage: int
    status: str
    sub_category: str


class ManageTemplateLoadMatch(TypedDict, total=False):
    page: int
    size: int
    sort: list


class ManageTemplateCreateDataRequired(TypedDict):
    components: list


class ManageTemplateCreateData(ManageTemplateCreateDataRequired, total=False):
    allow_category_change: bool
    category: str
    createdDate: str
    currentPage: int
    id: str | None
    items: list | None
    language: str
    library_template_body_inputs: dict
    library_template_button_inputs: list | None
    library_template_name: str | None
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    pages: int
    parameter_format: str
    results: int
    resultsPerPage: int
    status: str
    sub_category: str


class ManageTemplateRemoveMatch(TypedDict):
    id: str


class Media(TypedDict):
    pass


class MediaCreateData(TypedDict):
    phone_number: str


class SendMessage(TypedDict):
    messages: list
    requestId: str


class SendMessageCreateData(TypedDict):
    messages: list
    requestId: str


class Template(TypedDict, total=False):
    category: str
    components: list | None
    createdDate: str
    id: str | None
    language: str
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    parameter_format: str
    status: str


class TemplateUpdateDataRequired(TypedDict):
    id: str


class TemplateUpdateData(TemplateUpdateDataRequired, total=False):
    category: str
    components: list | None
    createdDate: str
    language: str
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    parameter_format: str
    status: str


class WhatsAppTemplateGetV2(TypedDict, total=False):
    category: str
    components: list | None
    correct_category: str
    createdDate: str
    cta_url_link_tracking_opted_out: bool
    id: str
    language: str
    library_template_name: str | None
    message_send_ttl_seconds: int
    modifiedDate: str | None
    name: str | None
    parameter_format: str
    previous_category: str
    quality_score: dict
    rejected_reason: str
    status: str
    sub_category: str


class WhatsAppTemplateGetV2LoadMatch(TypedDict):
    id: str
