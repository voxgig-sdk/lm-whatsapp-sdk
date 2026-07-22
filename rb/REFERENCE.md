# LmWhatsapp Ruby SDK Reference

Complete API reference for the LmWhatsapp Ruby SDK.


## LmWhatsappSDK

### Constructor

```ruby
require_relative 'LmWhatsapp_sdk'

client = LmWhatsappSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LmWhatsappSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = LmWhatsappSDK.test
```


### Instance Methods

#### `ManageTemplate(data = nil)`

Create a new `ManageTemplate` entity instance. Pass `nil` for no initial data.

#### `Media(data = nil)`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `SendMessage(data = nil)`

Create a new `SendMessage` entity instance. Pass `nil` for no initial data.

#### `Template(data = nil)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `WhatsAppTemplateGetV2(data = nil)`

Create a new `WhatsAppTemplateGetV2` entity instance. Pass `nil` for no initial data.

#### `WhatsAppTemplateGetV2Pagination(data = nil)`

Create a new `WhatsAppTemplateGetV2Pagination` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ManageTemplateEntity

```ruby
manage_template = client.ManageTemplate
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ManageTemplate.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ManageTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MediaEntity

```ruby
media = client.Media
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Media.create({
  "phone_number" => "example_phone_number", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SendMessageEntity

```ruby
send_message = client.SendMessage
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SendMessage.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateEntity

```ruby
template = client.Template
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_category_change` | `Boolean` | No |  |
| `category` | `String` | No |  |
| `component` | `Array` | Yes |  |
| `created_date` | `String` | No |  |
| `id` | `Object` | No |  |
| `language` | `String` | No |  |
| `library_template_body_input` | `Hash` | No |  |
| `library_template_button_input` | `Object` | No |  |
| `library_template_name` | `Object` | No |  |
| `message_send_ttl_second` | `Integer` | No |  |
| `modified_date` | `Object` | No |  |
| `name` | `Object` | No |  |
| `parameter_format` | `String` | No |  |
| `status` | `String` | No |  |
| `sub_category` | `String` | No |  |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `allow_category_change` | - | - |
| `category` | Yes | - |
| `component` | - | Yes |
| `created_date` | - | - |
| `id` | - | - |
| `language` | Yes | - |
| `library_template_body_input` | - | - |
| `library_template_button_input` | - | - |
| `library_template_name` | - | - |
| `message_send_ttl_second` | - | - |
| `modified_date` | - | - |
| `name` | Yes | - |
| `parameter_format` | - | - |
| `status` | - | - |
| `sub_category` | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Template.create({
  "component" => [], # Array
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Template.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WhatsAppTemplateGetV2Entity

```ruby
whats_app_template_get_v2 = client.WhatsAppTemplateGetV2
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WhatsAppTemplateGetV2.load({ "id" => "whats_app_template_get_v2_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WhatsAppTemplateGetV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WhatsAppTemplateGetV2PaginationEntity

```ruby
whats_app_template_get_v2_pagination = client.WhatsAppTemplateGetV2Pagination
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_page` | `Integer` | No |  |
| `item` | `Object` | No |  |
| `page` | `Integer` | No |  |
| `result` | `Integer` | No |  |
| `results_per_page` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WhatsAppTemplateGetV2Pagination.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WhatsAppTemplateGetV2PaginationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = LmWhatsappSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

