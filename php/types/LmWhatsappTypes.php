<?php
declare(strict_types=1);

// Typed models for the LmWhatsapp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ManageTemplate entity data model. */
class ManageTemplate
{
    public ?string $id = null;
}

/** Request payload for ManageTemplate#remove. */
class ManageTemplateRemoveMatch
{
    public string $id;
}

/** Media entity data model. */
class Media
{
}

/** Request payload for Media#create. */
class MediaCreateData
{
    public string $phone_number;
}

/** SendMessage entity data model. */
class SendMessage
{
}

/** Request payload for SendMessage#create. */
class SendMessageCreateData
{
}

/** Template entity data model. */
class Template
{
    public ?bool $allow_category_change = null;
    public ?string $category = null;
    public array $components;
    public ?string $createdDate = null;
    public mixed $id = null;
    public ?string $language = null;
    public ?array $library_template_body_inputs = null;
    public mixed $library_template_button_inputs = null;
    public mixed $library_template_name = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?string $parameter_format = null;
    public ?string $status = null;
    public ?string $sub_category = null;
}

/** Request payload for Template#create. */
class TemplateCreateData
{
    public ?bool $allow_category_change = null;
    public ?string $category = null;
    public array $components;
    public ?string $createdDate = null;
    public mixed $id = null;
    public ?string $language = null;
    public ?array $library_template_body_inputs = null;
    public mixed $library_template_button_inputs = null;
    public mixed $library_template_name = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?string $parameter_format = null;
    public ?string $status = null;
    public ?string $sub_category = null;
}

/** Request payload for Template#update. */
class TemplateUpdateData
{
    public string $id;
    public ?bool $allow_category_change = null;
    public ?string $category = null;
    public ?array $components = null;
    public ?string $createdDate = null;
    public ?string $language = null;
    public ?array $library_template_body_inputs = null;
    public mixed $library_template_button_inputs = null;
    public mixed $library_template_name = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?string $parameter_format = null;
    public ?string $status = null;
    public ?string $sub_category = null;
}

/** WhatsAppTemplateGetV2 entity data model. */
class WhatsAppTemplateGetV2
{
    public ?string $id = null;
}

/** Request payload for WhatsAppTemplateGetV2#load. */
class WhatsAppTemplateGetV2LoadMatch
{
    public string $id;
}

/** WhatsAppTemplateGetV2Pagination entity data model. */
class WhatsAppTemplateGetV2Pagination
{
    public ?int $currentPage = null;
    public mixed $items = null;
    public ?int $pages = null;
    public ?int $results = null;
    public ?int $resultsPerPage = null;
}

/** Request payload for WhatsAppTemplateGetV2Pagination#load. */
class WhatsAppTemplateGetV2PaginationLoadMatch
{
    public ?int $currentPage = null;
    public mixed $items = null;
    public ?int $pages = null;
    public ?int $results = null;
    public ?int $resultsPerPage = null;
}

