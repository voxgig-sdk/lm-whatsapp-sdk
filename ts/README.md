# LmWhatsapp TypeScript SDK



The TypeScript SDK for the LmWhatsapp API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ManageTemplate()` — each with a small set of operations (`load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/lm-whatsapp-sdk/releases](https://github.com/voxgig-sdk/lm-whatsapp-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { LmWhatsappSDK } from '@voxgig-sdk/lm-whatsapp'

const client = new LmWhatsappSDK({
  apikey: process.env.LM_WHATSAPP_APIKEY,
})
```

### 4. Create, update, and remove

```ts
// Remove
await client.ManageTemplate().remove({
  id: 'example_id',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const whatsapptemplategetv2 = await client.WhatsAppTemplateGetV2().load({ id: "example_id" })
  console.log(whatsapptemplategetv2)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = LmWhatsappSDK.test()

const whatsapptemplategetv2 = await client.WhatsAppTemplateGetV2().load({ id: 'test01' })
// whatsapptemplategetv2 is the entity, populated with mock response data
// — call whatsapptemplategetv2.data() for the record itself
console.log(whatsapptemplategetv2)
```

You can also use the instance method:

```ts
const client = new LmWhatsappSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.WhatsAppTemplateGetV2()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new LmWhatsappSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### LmWhatsappSDK

#### Constructor

```ts
new LmWhatsappSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ManageTemplate(data?)` | `ManageTemplateEntity` | Create a ManageTemplate entity instance. |
| `Media(data?)` | `MediaEntity` | Create a Media entity instance. |
| `SendMessage(data?)` | `SendMessageEntity` | Create a SendMessage entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `WhatsAppTemplateGetV2(data?)` | `WhatsAppTemplateGetV2Entity` | Create a WhatsAppTemplateGetV2 entity instance. |
| `WhatsAppTemplateGetV2Pagination(data?)` | `WhatsAppTemplateGetV2PaginationEntity` | Create a WhatsAppTemplateGetV2Pagination entity instance. |
| `tester(testopts?, sdkopts?)` | `LmWhatsappSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `LmWhatsappSDK.test(testopts?, sdkopts?)` | `LmWhatsappSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): LmWhatsappSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### ManageTemplate

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/whatsapp/v2/templates/{id}`

#### Media

| Field | Description |
| --- | --- |

Operations: create.

API path: `/whatsapp/v2/{phoneNumber}/media`

#### SendMessage

| Field | Description |
| --- | --- |

Operations: create.

API path: `/whatsapp/v2/messages`

#### Template

| Field | Description |
| --- | --- |
| `allow_category_change` | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` |  |
| `components` | Array of components that make up the template. |
| `createdDate` |  |
| `id` | ID |
| `language` |  |
| `library_template_body_inputs` |  |
| `library_template_button_inputs` | Optional data during creation of a template from a library template. |
| `library_template_name` | Library template name |
| `message_send_ttl_seconds` | Time to live for message template sent. |
| `modifiedDate` |  |
| `name` | The message template name |
| `parameter_format` |  |
| `status` |  |
| `sub_category` |  |

Operations: create, update.

API path: `/whatsapp/v2/templates`

#### WhatsAppTemplateGetV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/whatsapp/v2/templates/{id}`

#### WhatsAppTemplateGetV2Pagination

| Field | Description |
| --- | --- |
| `currentPage` |  |
| `items` |  |
| `pages` |  |
| `results` |  |
| `resultsPerPage` |  |

Operations: load.

API path: `/whatsapp/v2/templates`



## Entities


### ManageTemplate

Create an instance: `const manage_template = client.ManageTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Media

Create an instance: `const media = client.Media()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const media = await client.Media().create({
  phone_number: 'example_phone_number',
})
```


### SendMessage

Create an instance: `const send_message = client.SendMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const send_message = await client.SendMessage().create({
})
```


### Template

Create an instance: `const template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_category_change` | `boolean` | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` | `string` |  |
| `components` | `any[]` | Array of components that make up the template. |
| `createdDate` | `string` |  |
| `id` | `string | null` | ID |
| `language` | `string` |  |
| `library_template_body_inputs` | `Record<string, any>` |  |
| `library_template_button_inputs` | `any[] | null` | Optional data during creation of a template from a library template. |
| `library_template_name` | `string | null` | Library template name |
| `message_send_ttl_seconds` | `number` | Time to live for message template sent. |
| `modifiedDate` | `string | null` |  |
| `name` | `string | null` | The message template name |
| `parameter_format` | `string` |  |
| `status` | `string` |  |
| `sub_category` | `string` |  |

#### Example: Create

```ts
const template = await client.Template().create({
  components: [],
})
```


### WhatsAppTemplateGetV2

Create an instance: `const whats_app_template_get_v2 = client.WhatsAppTemplateGetV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const whats_app_template_get_v2 = await client.WhatsAppTemplateGetV2().load({ id: 'whats_app_template_get_v2_id' })
```


### WhatsAppTemplateGetV2Pagination

Create an instance: `const whats_app_template_get_v2_pagination = client.WhatsAppTemplateGetV2Pagination()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currentPage` | `number` |  |
| `items` | `any[] | null` |  |
| `pages` | `number` |  |
| `results` | `number` |  |
| `resultsPerPage` | `number` |  |

#### Example: Load

```ts
const whats_app_template_get_v2_pagination = await client.WhatsAppTemplateGetV2Pagination().load()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
lm-whatsapp/
├── src/
│   ├── LmWhatsappSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { LmWhatsappSDK } from '@voxgig-sdk/lm-whatsapp'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const whatsapptemplategetv2 = client.WhatsAppTemplateGetV2()
await whatsapptemplategetv2.load({ id: "example_id" })

// whatsapptemplategetv2.data() now returns the whatsapptemplategetv2 data from the last `load`
// whatsapptemplategetv2.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
