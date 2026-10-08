# LmWhatsapp Lua SDK Reference

Complete API reference for the LmWhatsapp Lua SDK.


## LmWhatsappSDK

### Constructor

```lua
local sdk = require("lm-whatsapp_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ManageTemplate(data)`

Create a new `ManageTemplate` entity instance. Pass `nil` for no initial data.

#### `Media(data)`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `SendMessage(data)`

Create a new `SendMessage` entity instance. Pass `nil` for no initial data.

#### `Template(data)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `WhatsAppTemplateGetV2(data)`

Create a new `WhatsAppTemplateGetV2` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ManageTemplateEntity

```lua
local manage_template = client:ManageTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_category_change` | `boolean` | No | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` | `string` | No |  |
| `components` | `table` | Yes | Array of components that make up the template. |
| `createdDate` | `string` | No |  |
| `currentPage` | `number` | No |  |
| `id` | `string|nil` | No | ID |
| `items` | `table|nil` | No |  |
| `language` | `string` | No |  |
| `library_template_body_inputs` | `table` | No |  |
| `library_template_button_inputs` | `table|nil` | No | Optional data during creation of a template from a library template. |
| `library_template_name` | `string|nil` | No | Library template name |
| `message_send_ttl_seconds` | `number` | No | Time to live for message template sent. |
| `modifiedDate` | `string|nil` | No |  |
| `name` | `string|nil` | No | The message template name |
| `pages` | `number` | No |  |
| `parameter_format` | `string` | No |  |
| `results` | `number` | No |  |
| `resultsPerPage` | `number` | No |  |
| `status` | `string` | No |  |
| `sub_category` | `string` | No |  |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `allow_category_change` | - | - | - |
| `category` | - | Yes | - |
| `components` | - | - | - |
| `createdDate` | - | - | - |
| `currentPage` | - | - | - |
| `id` | - | - | - |
| `items` | - | - | - |
| `language` | - | Yes | - |
| `library_template_body_inputs` | - | - | - |
| `library_template_button_inputs` | - | - | - |
| `library_template_name` | - | - | - |
| `message_send_ttl_seconds` | - | - | - |
| `modifiedDate` | - | - | - |
| `name` | - | Yes | - |
| `pages` | - | - | - |
| `parameter_format` | - | - | - |
| `results` | - | - | - |
| `resultsPerPage` | - | - | - |
| `status` | - | - | - |
| `sub_category` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ManageTemplate():create({
  components = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ManageTemplate():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:ManageTemplate():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ManageTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MediaEntity

```lua
local media = client:Media(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Media():create({
  phone_number = --[[ string ]],
})
```

Sends its body unencoded, as `application/msword`: pass it as `$body`, a string. The operation also accepts `application/pdf`, `application/vnd.ms-excel`, `application/vnd.ms-powerpoint`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `audio/aac`, `audio/amr`, `audio/mp4`, `audio/mpeg`, `audio/ogg`, `audio/opus`, `image/jpeg`, `image/png`, `image/webp`, `text/plain`, `video/3gp`, `video/mp4`: a `content-type` header option that is not JSON replaces the declared one.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SendMessageEntity

```lua
local send_message = client:SendMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `messages` | `table` | Yes |  |
| `requestId` | `string` | Yes | Unique Id of the request made towards LINK Mobility. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `messages` | Yes |
| `requestId` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SendMessage():create({
  messages = --[[ table ]],
  requestId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateEntity

```lua
local template = client:Template(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `components` | `table|nil` | No | The array containing all the content of the message template |
| `createdDate` | `string` | No |  |
| `id` | `string|nil` | No | ID |
| `language` | `string` | No |  |
| `message_send_ttl_seconds` | `number` | No | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` | `string|nil` | No |  |
| `name` | `string|nil` | No | The message template name |
| `parameter_format` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Template():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WhatsAppTemplateGetV2Entity

```lua
local whats_app_template_get_v2 = client:WhatsAppTemplateGetV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `components` | `table|nil` | No | An array of JSON objects describing the message template components. |
| `correct_category` | `string` | No |  |
| `createdDate` | `string` | No |  |
| `cta_url_link_tracking_opted_out` | `boolean` | No | Optional boolean field for opting out/in of link tracking at template level |
| `id` | `string` | No | ID |
| `language` | `string` | No |  |
| `library_template_name` | `string|nil` | No | Template Library name that this HSM is clone from |
| `message_send_ttl_seconds` | `number` | No | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` | `string|nil` | No |  |
| `name` | `string|nil` | No | The message template name |
| `parameter_format` | `string` | No |  |
| `previous_category` | `string` | No |  |
| `quality_score` | `table` | No |  |
| `rejected_reason` | `string` | No |  |
| `status` | `string` | No |  |
| `sub_category` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:WhatsAppTemplateGetV2():load({ id = "whats_app_template_get_v2_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsAppTemplateGetV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

