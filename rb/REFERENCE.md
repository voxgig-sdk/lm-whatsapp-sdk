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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

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
| `allow_category_change` | `Boolean` | No | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` | `String` | No |  |
| `components` | `Array` | Yes | Array of components that make up the template. |
| `createdDate` | `String` | No |  |
| `id` | `Object` | No | ID |
| `language` | `String` | No |  |
| `library_template_body_inputs` | `Hash` | No |  |
| `library_template_button_inputs` | `Object` | No | Optional data during creation of a template from a library template. |
| `library_template_name` | `Object` | No | Library template name |
| `message_send_ttl_seconds` | `Integer` | No | Time to live for message template sent. |
| `modifiedDate` | `Object` | No |  |
| `name` | `Object` | No | The message template name |
| `parameter_format` | `String` | No |  |
| `status` | `String` | No |  |
| `sub_category` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Template.create({
  "components" => [], # Array
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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

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
| `currentPage` | `Integer` | No |  |
| `items` | `Object` | No |  |
| `pages` | `Integer` | No |  |
| `results` | `Integer` | No |  |
| `resultsPerPage` | `Integer` | No |  |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

