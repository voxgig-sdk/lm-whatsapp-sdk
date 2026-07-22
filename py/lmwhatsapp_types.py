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


class ManageTemplate(TypedDict):
    pass


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
    component: list


class Template(TemplateRequired, total=False):
    allow_category_change: bool
    category: str
    created_date: str
    id: Any
    language: str
    library_template_body_input: dict
    library_template_button_input: Any
    library_template_name: Any
    message_send_ttl_second: int
    modified_date: Any
    name: Any
    parameter_format: str
    status: str
    sub_category: str


class TemplateCreateDataRequired(TypedDict):
    component: list


class TemplateCreateData(TemplateCreateDataRequired, total=False):
    allow_category_change: bool
    category: str
    created_date: str
    id: Any
    language: str
    library_template_body_input: dict
    library_template_button_input: Any
    library_template_name: Any
    message_send_ttl_second: int
    modified_date: Any
    name: Any
    parameter_format: str
    status: str
    sub_category: str


class TemplateUpdateData(TypedDict):
    id: str


class WhatsAppTemplateGetV2(TypedDict):
    pass


class WhatsAppTemplateGetV2LoadMatch(TypedDict):
    id: str


class WhatsAppTemplateGetV2Pagination(TypedDict, total=False):
    current_page: int
    item: Any
    page: int
    result: int
    results_per_page: int


class WhatsAppTemplateGetV2PaginationLoadMatch(TypedDict, total=False):
    current_page: int
    item: Any
    page: int
    result: int
    results_per_page: int
