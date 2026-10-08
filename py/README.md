# LmWhatsapp Python SDK

LINK Mobility MyLINK WhatsApp API clients in TypeScript, Python, PHP, Go, Ruby and Lua, plus a CLI and an MCP server for AI agents. All generated from LINK Mobility's public OpenAPI definition, so every surface stays in sync with the API.

The Python SDK for the LmWhatsapp API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ManageTemplate()` — each
carrying a small, uniform set of operations (`load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/lm-whatsapp-sdk/tags)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from lmwhatsapp_sdk import LmWhatsappSDK

client = LmWhatsappSDK({
    "apikey": os.environ.get("LM_WHATSAPP_APIKEY"),
})
```

### 3. Load a managetemplate

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    managetemplate = client.ManageTemplate().load()
    print(managetemplate.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.ManageTemplate().create({"components": []})

# Remove
client.ManageTemplate().remove({"id": "example_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    managetemplate = client.ManageTemplate().load()
    print(managetemplate.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = LmWhatsappSDK.test()

# Entity ops return the entity, and list one per record; they raise on error.
managetemplate = client.ManageTemplate().load()
# data_get() on an entity reads its mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = LmWhatsappSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### LmWhatsappSDK

```python
from lmwhatsapp_sdk import LmWhatsappSDK

client = LmWhatsappSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = LmWhatsappSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### LmWhatsappSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `ManageTemplate` | `(data) -> ManageTemplateEntity` | Create a ManageTemplate entity instance. |
| `Media` | `(data) -> MediaEntity` | Create a Media entity instance. |
| `SendMessage` | `(data) -> SendMessageEntity` | Create a SendMessage entity instance. |
| `Template` | `(data) -> TemplateEntity` | Create a Template entity instance. |
| `WhatsAppTemplateGetV2` | `(data) -> WhatsAppTemplateGetV2Entity` | Create a WhatsAppTemplateGetV2 entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` a `list` of entities, one
per record; an entity's `data_get()` reads its record (a `dict`). They raise
on error, so wrap calls in `try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### ManageTemplate

| Field | Description |
| --- | --- |
| `allow_category_change` | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` |  |
| `components` | Array of components that make up the template. |
| `createdDate` |  |
| `currentPage` |  |
| `id` | ID |
| `items` |  |
| `language` |  |
| `library_template_body_inputs` |  |
| `library_template_button_inputs` | Optional data during creation of a template from a library template. |
| `library_template_name` | Library template name |
| `message_send_ttl_seconds` | Time to live for message template sent. |
| `modifiedDate` |  |
| `name` | The message template name |
| `pages` |  |
| `parameter_format` |  |
| `results` |  |
| `resultsPerPage` |  |
| `status` |  |
| `sub_category` |  |

Operations: Create, Load, Remove.

API path: `/whatsapp/v2/templates`

#### Media

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/whatsapp/v2/{phoneNumber}/media`

#### SendMessage

| Field | Description |
| --- | --- |
| `messages` |  |
| `requestId` | Unique Id of the request made towards LINK Mobility. |

Operations: Create.

API path: `/whatsapp/v2/messages`

#### Template

| Field | Description |
| --- | --- |
| `category` |  |
| `components` | The array containing all the content of the message template |
| `createdDate` |  |
| `id` | ID |
| `language` |  |
| `message_send_ttl_seconds` | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` |  |
| `name` | The message template name |
| `parameter_format` |  |
| `status` |  |

Operations: Update.

API path: `/whatsapp/v2/templates/{id}`

#### WhatsAppTemplateGetV2

| Field | Description |
| --- | --- |
| `category` |  |
| `components` | An array of JSON objects describing the message template components. |
| `correct_category` |  |
| `createdDate` |  |
| `cta_url_link_tracking_opted_out` | Optional boolean field for opting out/in of link tracking at template level |
| `id` | ID |
| `language` |  |
| `library_template_name` | Template Library name that this HSM is clone from |
| `message_send_ttl_seconds` | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` |  |
| `name` | The message template name |
| `parameter_format` |  |
| `previous_category` |  |
| `quality_score` |  |
| `rejected_reason` |  |
| `status` |  |
| `sub_category` |  |

Operations: Load.

API path: `/whatsapp/v2/templates/{id}`



## Entities


### ManageTemplate

Create an instance: `manage_template = client.ManageTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_category_change` | `bool` | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` | `str` |  |
| `components` | `list` | Array of components that make up the template. |
| `createdDate` | `str` |  |
| `currentPage` | `int` |  |
| `id` | `str | None` | ID |
| `items` | `list | None` |  |
| `language` | `str` |  |
| `library_template_body_inputs` | `dict` |  |
| `library_template_button_inputs` | `list | None` | Optional data during creation of a template from a library template. |
| `library_template_name` | `str | None` | Library template name |
| `message_send_ttl_seconds` | `int` | Time to live for message template sent. |
| `modifiedDate` | `str | None` |  |
| `name` | `str | None` | The message template name |
| `pages` | `int` |  |
| `parameter_format` | `str` |  |
| `results` | `int` |  |
| `resultsPerPage` | `int` |  |
| `status` | `str` |  |
| `sub_category` | `str` |  |

#### Example: Load

```python
manage_template = client.ManageTemplate().load()
```

#### Example: Create

```python
manage_template = client.ManageTemplate().create({
    "components": [],  # list
})
```


### Media

Create an instance: `media = client.Media()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
media = client.Media().create({
    "phone_number": "example_phone_number",  # str
})
```


### SendMessage

Create an instance: `send_message = client.SendMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `messages` | `list` |  |
| `requestId` | `str` | Unique Id of the request made towards LINK Mobility. |

#### Example: Create

```python
send_message = client.SendMessage().create({
    "messages": [],  # list
    "requestId": "example_requestId",  # str
})
```


### Template

Create an instance: `template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` |  |
| `components` | `list | None` | The array containing all the content of the message template |
| `createdDate` | `str` |  |
| `id` | `str | None` | ID |
| `language` | `str` |  |
| `message_send_ttl_seconds` | `int` | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` | `str | None` |  |
| `name` | `str | None` | The message template name |
| `parameter_format` | `str` |  |
| `status` | `str` |  |


### WhatsAppTemplateGetV2

Create an instance: `whats_app_template_get_v2 = client.WhatsAppTemplateGetV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` |  |
| `components` | `list | None` | An array of JSON objects describing the message template components. |
| `correct_category` | `str` |  |
| `createdDate` | `str` |  |
| `cta_url_link_tracking_opted_out` | `bool` | Optional boolean field for opting out/in of link tracking at template level |
| `id` | `str` | ID |
| `language` | `str` |  |
| `library_template_name` | `str | None` | Template Library name that this HSM is clone from |
| `message_send_ttl_seconds` | `int` | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` | `str | None` |  |
| `name` | `str | None` | The message template name |
| `parameter_format` | `str` |  |
| `previous_category` | `str` |  |
| `quality_score` | `dict` |  |
| `rejected_reason` | `str` |  |
| `status` | `str` |  |
| `sub_category` | `str` |  |

#### Example: Load

```python
whats_app_template_get_v2 = client.WhatsAppTemplateGetV2().load({"id": "whats_app_template_get_v2_id"})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── lmwhatsapp_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`lmwhatsapp_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
managetemplate = client.ManageTemplate()
managetemplate.load()

# managetemplate.data_get() now returns the managetemplate data from the last load
# managetemplate.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
