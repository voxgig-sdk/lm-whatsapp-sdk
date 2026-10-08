<?php
declare(strict_types=1);

// Typed models for the LmWhatsapp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ManageTemplate entity data model. */
class ManageTemplate
{
    public ?bool $allow_category_change = null;
    public ?string $category = null;
    public array $components;
    public ?string $createdDate = null;
    public ?int $currentPage = null;
    public mixed $id = null;
    public mixed $items = null;
    public ?string $language = null;
    public ?array $library_template_body_inputs = null;
    public mixed $library_template_button_inputs = null;
    public mixed $library_template_name = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?int $pages = null;
    public ?string $parameter_format = null;
    public ?int $results = null;
    public ?int $resultsPerPage = null;
    public ?string $status = null;
    public ?string $sub_category = null;
}

/** Request payload for ManageTemplate#load. */
class ManageTemplateLoadMatch
{
    public ?int $page = null;
    public ?int $size = null;
    public ?array $sort = null;
}

/** Request payload for ManageTemplate#create. */
class ManageTemplateCreateData
{
    public ?bool $allow_category_change = null;
    public ?string $category = null;
    public array $components;
    public ?string $createdDate = null;
    public ?int $currentPage = null;
    public mixed $id = null;
    public mixed $items = null;
    public ?string $language = null;
    public ?array $library_template_body_inputs = null;
    public mixed $library_template_button_inputs = null;
    public mixed $library_template_name = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?int $pages = null;
    public ?string $parameter_format = null;
    public ?int $results = null;
    public ?int $resultsPerPage = null;
    public ?string $status = null;
    public ?string $sub_category = null;
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
    public array $messages;
    public string $requestId;
}

/** Request payload for SendMessage#create. */
class SendMessageCreateData
{
    public array $messages;
    public string $requestId;
}

/** Template entity data model. */
class Template
{
    public ?string $category = null;
    public mixed $components = null;
    public ?string $createdDate = null;
    public mixed $id = null;
    public ?string $language = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?string $parameter_format = null;
    public ?string $status = null;
}

/** Request payload for Template#update. */
class TemplateUpdateData
{
    public string $id;
    public ?string $category = null;
    public mixed $components = null;
    public ?string $createdDate = null;
    public ?string $language = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?string $parameter_format = null;
    public ?string $status = null;
}

/** WhatsAppTemplateGetV2 entity data model. */
class WhatsAppTemplateGetV2
{
    public ?string $category = null;
    public mixed $components = null;
    public ?string $correct_category = null;
    public ?string $createdDate = null;
    public ?bool $cta_url_link_tracking_opted_out = null;
    public ?string $id = null;
    public ?string $language = null;
    public mixed $library_template_name = null;
    public ?int $message_send_ttl_seconds = null;
    public mixed $modifiedDate = null;
    public mixed $name = null;
    public ?string $parameter_format = null;
    public ?string $previous_category = null;
    public ?array $quality_score = null;
    public ?string $rejected_reason = null;
    public ?string $status = null;
    public ?string $sub_category = null;
}

/** Request payload for WhatsAppTemplateGetV2#load. */
class WhatsAppTemplateGetV2LoadMatch
{
    public string $id;
}

