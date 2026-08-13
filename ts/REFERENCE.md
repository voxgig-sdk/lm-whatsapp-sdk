# LmWhatsapp TypeScript SDK Reference

Complete API reference for the LmWhatsapp TypeScript SDK.


## LmWhatsappSDK

### Constructor

```ts
new LmWhatsappSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LmWhatsappSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = LmWhatsappSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `LmWhatsappSDK` instance in test mode.


### Instance Methods

#### `ManageTemplate(data?: object)`

Create a new `ManageTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ManageTemplateEntity` instance.

#### `Media(data?: object)`

Create a new `Media` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MediaEntity` instance.

#### `SendMessage(data?: object)`

Create a new `SendMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SendMessageEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `WhatsAppTemplateGetV2(data?: object)`

Create a new `WhatsAppTemplateGetV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhatsAppTemplateGetV2Entity` instance.

#### `WhatsAppTemplateGetV2Pagination(data?: object)`

Create a new `WhatsAppTemplateGetV2Pagination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhatsAppTemplateGetV2PaginationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `LmWhatsappSDK.test()`.

**Returns:** `LmWhatsappSDK` instance in test mode.


---

## ManageTemplateEntity

```ts
const manage_template = client.ManageTemplate()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ManageTemplate().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ManageTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LmWhatsappSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MediaEntity

```ts
const media = client.Media()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Media().create({
  phone_number: 'example_phone_number',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MediaEntity` instance with the same client and
options.

#### `client()`

Return the parent `LmWhatsappSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SendMessageEntity

```ts
const send_message = client.SendMessage()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SendMessage().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LmWhatsappSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_category_change` | `boolean` | No |  |
| `category` | `string` | No |  |
| `components` | `any[]` | Yes |  |
| `createdDate` | `string` | No |  |
| `id` | `string | null` | No |  |
| `language` | `string` | No |  |
| `library_template_body_inputs` | `Record<string, any>` | No |  |
| `library_template_button_inputs` | `any[] | null` | No |  |
| `library_template_name` | `string | null` | No |  |
| `message_send_ttl_seconds` | `number` | No |  |
| `modifiedDate` | `string | null` | No |  |
| `name` | `string | null` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Template().create({
  components: [],
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Template().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LmWhatsappSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhatsAppTemplateGetV2Entity

```ts
const whats_app_template_get_v2 = client.WhatsAppTemplateGetV2()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WhatsAppTemplateGetV2().load({ id: 'whats_app_template_get_v2_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhatsAppTemplateGetV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `LmWhatsappSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhatsAppTemplateGetV2PaginationEntity

```ts
const whats_app_template_get_v2_pagination = client.WhatsAppTemplateGetV2Pagination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentPage` | `number` | No |  |
| `items` | `any[] | null` | No |  |
| `pages` | `number` | No |  |
| `results` | `number` | No |  |
| `resultsPerPage` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WhatsAppTemplateGetV2Pagination().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhatsAppTemplateGetV2PaginationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LmWhatsappSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new LmWhatsappSDK({
  feature: {
    test: { active: true },
  }
})
```

