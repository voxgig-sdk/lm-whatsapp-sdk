# LmWhatsapp PHP SDK Reference

Complete API reference for the LmWhatsapp PHP SDK.


## LmWhatsappSDK

### Constructor

```php
require_once __DIR__ . '/lmwhatsapp_sdk.php';

$client = new LmWhatsappSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LmWhatsappSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = LmWhatsappSDK::test();
```


### Instance Methods

#### `ManageTemplate($data = null)`

Create a new `ManageTemplateEntity` instance. Pass `null` for no initial data.

#### `Media($data = null)`

Create a new `MediaEntity` instance. Pass `null` for no initial data.

#### `SendMessage($data = null)`

Create a new `SendMessageEntity` instance. Pass `null` for no initial data.

#### `Template($data = null)`

Create a new `TemplateEntity` instance. Pass `null` for no initial data.

#### `WhatsAppTemplateGetV2($data = null)`

Create a new `WhatsAppTemplateGetV2Entity` instance. Pass `null` for no initial data.

#### `WhatsAppTemplateGetV2Pagination($data = null)`

Create a new `WhatsAppTemplateGetV2PaginationEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): LmWhatsappUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ManageTemplateEntity

```php
$manage_template = $client->ManageTemplate();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ManageTemplate()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ManageTemplateEntity`

Create a new `ManageTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MediaEntity

```php
$media = $client->Media();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Media()->create([
  "phone_number" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MediaEntity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SendMessageEntity

```php
$send_message = $client->SendMessage();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SendMessage()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SendMessageEntity`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateEntity

```php
$template = $client->Template();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_category_change` | `bool` | No | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` | `string` | No |  |
| `components` | `array` | Yes | Array of components that make up the template. |
| `createdDate` | `string` | No |  |
| `id` | `mixed` | No | ID |
| `language` | `string` | No |  |
| `library_template_body_inputs` | `array` | No |  |
| `library_template_button_inputs` | `mixed` | No | Optional data during creation of a template from a library template. |
| `library_template_name` | `mixed` | No | Library template name |
| `message_send_ttl_seconds` | `int` | No | Time to live for message template sent. |
| `modifiedDate` | `mixed` | No |  |
| `name` | `mixed` | No | The message template name |
| `parameter_format` | `string` | No |  |
| `status` | `string` | No |  |
| `sub_category` | `string` | No |  |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `allow_category_change` | - | - |
| `category` | Yes | - |
| `components` | - | Yes |
| `createdDate` | - | - |
| `id` | - | - |
| `language` | Yes | - |
| `library_template_body_inputs` | - | - |
| `library_template_button_inputs` | - | - |
| `library_template_name` | - | - |
| `message_send_ttl_seconds` | - | - |
| `modifiedDate` | - | - |
| `name` | Yes | - |
| `parameter_format` | - | - |
| `status` | - | - |
| `sub_category` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Template()->create([
  "components" => null, // array
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Template()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateEntity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WhatsAppTemplateGetV2Entity

```php
$whats_app_template_get_v2 = $client->WhatsAppTemplateGetV2();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WhatsAppTemplateGetV2()->load(["id" => "whats_app_template_get_v2_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WhatsAppTemplateGetV2Entity`

Create a new `WhatsAppTemplateGetV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WhatsAppTemplateGetV2PaginationEntity

```php
$whats_app_template_get_v2_pagination = $client->WhatsAppTemplateGetV2Pagination();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentPage` | `int` | No |  |
| `items` | `mixed` | No |  |
| `pages` | `int` | No |  |
| `results` | `int` | No |  |
| `resultsPerPage` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WhatsAppTemplateGetV2Pagination()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WhatsAppTemplateGetV2PaginationEntity`

Create a new `WhatsAppTemplateGetV2PaginationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new LmWhatsappSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

