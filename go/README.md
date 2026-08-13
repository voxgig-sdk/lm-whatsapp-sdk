# LmWhatsapp Golang SDK



The Golang SDK for the LmWhatsapp API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ManageTemplate(nil)` — each with the same small set of operations (`Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/lm-whatsapp-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/lm-whatsapp-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/lm-whatsapp-sdk/go=../lm-whatsapp-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/lm-whatsapp-sdk/go"
)

func main() {
    client := sdk.NewLmWhatsappSDK(map[string]any{
        "apikey": os.Getenv("LM_WHATSAPP_APIKEY"),
    })

    // Remove a manageTemplate.
    removed, err := client.ManageTemplate(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
whatsapptemplategetv2, err := client.WhatsAppTemplateGetV2(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = whatsapptemplategetv2
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

whatsAppTemplateGetV2, err := client.WhatsAppTemplateGetV2(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(whatsAppTemplateGetV2) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewLmWhatsappSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewLmWhatsappSDK

```go
func NewLmWhatsappSDK(options map[string]any) *LmWhatsappSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *LmWhatsappSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LmWhatsappSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ManageTemplate` | `(data map[string]any) LmWhatsappEntity` | Create a ManageTemplate entity instance. |
| `Media` | `(data map[string]any) LmWhatsappEntity` | Create a Media entity instance. |
| `SendMessage` | `(data map[string]any) LmWhatsappEntity` | Create a SendMessage entity instance. |
| `Template` | `(data map[string]any) LmWhatsappEntity` | Create a Template entity instance. |
| `WhatsAppTemplateGetV2` | `(data map[string]any) LmWhatsappEntity` | Create a WhatsAppTemplateGetV2 entity instance. |
| `WhatsAppTemplateGetV2Pagination` | `(data map[string]any) LmWhatsappEntity` | Create a WhatsAppTemplateGetV2Pagination entity instance. |

### Entity interface (LmWhatsappEntity)

All entities implement the `LmWhatsappEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    manageTemplate, err := client.ManageTemplate(nil).Remove(nil, nil)
    if err != nil { /* handle */ }
    // manageTemplate is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"allow_category_change"` |  |
| `"category"` |  |
| `"components"` |  |
| `"createdDate"` |  |
| `"id"` |  |
| `"language"` |  |
| `"library_template_body_inputs"` |  |
| `"library_template_button_inputs"` |  |
| `"library_template_name"` |  |
| `"message_send_ttl_seconds"` |  |
| `"modifiedDate"` |  |
| `"name"` |  |
| `"parameter_format"` |  |
| `"status"` |  |
| `"sub_category"` |  |

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
| `"currentPage"` |  |
| `"items"` |  |
| `"pages"` |  |
| `"results"` |  |
| `"resultsPerPage"` |  |

Operations: Load.

API path: `/whatsapp/v2/templates`



## Entities


### ManageTemplate

Create an instance: `manageTemplate := client.ManageTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Media

Create an instance: `media := client.Media(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Media(nil).Create(map[string]any{
    "phone_number": "example_phone_number",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SendMessage

Create an instance: `sendMessage := client.SendMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.SendMessage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Template

Create an instance: `template := client.Template(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_category_change` | `bool` |  |
| `category` | `string` |  |
| `components` | `[]any` |  |
| `createdDate` | `string` |  |
| `id` | `any` |  |
| `language` | `string` |  |
| `library_template_body_inputs` | `map[string]any` |  |
| `library_template_button_inputs` | `any` |  |
| `library_template_name` | `any` |  |
| `message_send_ttl_seconds` | `int` |  |
| `modifiedDate` | `any` |  |
| `name` | `any` |  |
| `parameter_format` | `string` |  |
| `status` | `string` |  |
| `sub_category` | `string` |  |

#### Example: Create

```go
result, err := client.Template(nil).Create(map[string]any{
    "components": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WhatsAppTemplateGetV2

Create an instance: `whatsAppTemplateGetV2 := client.WhatsAppTemplateGetV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
whatsAppTemplateGetV2, err := client.WhatsAppTemplateGetV2(nil).Load(map[string]any{"id": "whats_app_template_get_v2_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(whatsAppTemplateGetV2) // the loaded record
```


### WhatsAppTemplateGetV2Pagination

Create an instance: `whatsAppTemplateGetV2Pagination := client.WhatsAppTemplateGetV2Pagination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currentPage` | `int` |  |
| `items` | `any` |  |
| `pages` | `int` |  |
| `results` | `int` |  |
| `resultsPerPage` | `int` |  |

#### Example: Load

```go
whatsAppTemplateGetV2Pagination, err := client.WhatsAppTemplateGetV2Pagination(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(whatsAppTemplateGetV2Pagination) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/lm-whatsapp-sdk/go/
├── lm-whatsapp.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/lm-whatsapp-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
whatsapptemplategetv2 := client.WhatsAppTemplateGetV2(nil)
whatsapptemplategetv2.Load(map[string]any{"id": "example_id"}, nil)

// whatsapptemplategetv2.Data() now returns the whatsapptemplategetv2 data from the last load
// whatsapptemplategetv2.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
