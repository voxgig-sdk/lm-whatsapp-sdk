# LmWhatsapp Ruby SDK



The Ruby SDK for the LmWhatsapp API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ManageTemplate` — with named operations (`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/lm-whatsapp-sdk/releases](https://github.com/voxgig-sdk/lm-whatsapp-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "LmWhatsapp_sdk"

client = LmWhatsappSDK.new({
  "apikey" => ENV["LM_WHATSAPP_APIKEY"],
})
```

### 4. Create, update, and remove

```ruby
# Remove
client.ManageTemplate.remove({ "id" => "example_id" })
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  whatsapptemplategetv2 = client.WhatsAppTemplateGetV2.load({ "id" => "example_id" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = LmWhatsappSDK.test({
  "entity" => { "whatsapptemplategetv2" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
whatsapptemplategetv2 = client.WhatsAppTemplateGetV2.load({ "id" => "test01" })
puts whatsapptemplategetv2
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = LmWhatsappSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LM_WHATSAPP_TEST_LIVE=TRUE
LM_WHATSAPP_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### LmWhatsappSDK

```ruby
require_relative "LmWhatsapp_sdk"
client = LmWhatsappSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = LmWhatsappSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LmWhatsappSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `ManageTemplate` | `(data) -> ManageTemplateEntity` | Create a ManageTemplate entity instance. |
| `Media` | `(data) -> MediaEntity` | Create a Media entity instance. |
| `SendMessage` | `(data) -> SendMessageEntity` | Create a SendMessage entity instance. |
| `Template` | `(data) -> TemplateEntity` | Create a Template entity instance. |
| `WhatsAppTemplateGetV2` | `(data) -> WhatsAppTemplateGetV2Entity` | Create a WhatsAppTemplateGetV2 entity instance. |
| `WhatsAppTemplateGetV2Pagination` | `(data) -> WhatsAppTemplateGetV2PaginationEntity` | Create a WhatsAppTemplateGetV2Pagination entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `LmWhatsappError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### ManageTemplate

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/whatsapp/v2/templates/{id}`

#### Media

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/whatsapp/v2/{phoneNumber}/media`

#### SendMessage

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/whatsapp/v2/messages`

#### Template

| Field | Description |
| --- | --- |
| `allow_category_change` |  |
| `category` |  |
| `components` |  |
| `createdDate` |  |
| `id` |  |
| `language` |  |
| `library_template_body_inputs` |  |
| `library_template_button_inputs` |  |
| `library_template_name` |  |
| `message_send_ttl_seconds` |  |
| `modifiedDate` |  |
| `name` |  |
| `parameter_format` |  |
| `status` |  |
| `sub_category` |  |

Operations: Create, Update.

API path: `/whatsapp/v2/templates`

#### WhatsAppTemplateGetV2

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/whatsapp/v2/templates/{id}`

#### WhatsAppTemplateGetV2Pagination

| Field | Description |
| --- | --- |
| `currentPage` |  |
| `items` |  |
| `pages` |  |
| `results` |  |
| `resultsPerPage` |  |

Operations: Load.

API path: `/whatsapp/v2/templates`



## Entities


### ManageTemplate

Create an instance: `manage_template = client.ManageTemplate`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Media

Create an instance: `media = client.Media`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
media = client.Media.create({
  "phone_number" => "example_phone_number", # String
})
```


### SendMessage

Create an instance: `send_message = client.SendMessage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
send_message = client.SendMessage.create({
})
```


### Template

Create an instance: `template = client.Template`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_category_change` | `Boolean` |  |
| `category` | `String` |  |
| `components` | `Array` |  |
| `createdDate` | `String` |  |
| `id` | `Object` |  |
| `language` | `String` |  |
| `library_template_body_inputs` | `Hash` |  |
| `library_template_button_inputs` | `Object` |  |
| `library_template_name` | `Object` |  |
| `message_send_ttl_seconds` | `Integer` |  |
| `modifiedDate` | `Object` |  |
| `name` | `Object` |  |
| `parameter_format` | `String` |  |
| `status` | `String` |  |
| `sub_category` | `String` |  |

#### Example: Create

```ruby
template = client.Template.create({
  "components" => [], # Array
})
```


### WhatsAppTemplateGetV2

Create an instance: `whats_app_template_get_v2 = client.WhatsAppTemplateGetV2`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WhatsAppTemplateGetV2 record (raises on error).
whats_app_template_get_v2 = client.WhatsAppTemplateGetV2.load({ "id" => "whats_app_template_get_v2_id" })
```


### WhatsAppTemplateGetV2Pagination

Create an instance: `whats_app_template_get_v2_pagination = client.WhatsAppTemplateGetV2Pagination`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currentPage` | `Integer` |  |
| `items` | `Object` |  |
| `pages` | `Integer` |  |
| `results` | `Integer` |  |
| `resultsPerPage` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WhatsAppTemplateGetV2Pagination record (raises on error).
whats_app_template_get_v2_pagination = client.WhatsAppTemplateGetV2Pagination.load()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── LmWhatsapp_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`LmWhatsapp_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
whatsapptemplategetv2 = client.WhatsAppTemplateGetV2
whatsapptemplategetv2.load({ "id" => "example_id" })

# whatsapptemplategetv2.data_get now returns the whatsapptemplategetv2 data from the last load
# whatsapptemplategetv2.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
