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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_category_change` | `bool` | No | Set to true to allow to assign a category based on template guidelines and the template's contents. |
| `category` | `string` | No |  |
| `components` | `array` | Yes | Array of components that make up the template. |
| `createdDate` | `string` | No |  |
| `currentPage` | `int` | No |  |
| `id` | `mixed` | No | ID |
| `items` | `mixed` | No |  |
| `language` | `string` | No |  |
| `library_template_body_inputs` | `array` | No |  |
| `library_template_button_inputs` | `mixed` | No | Optional data during creation of a template from a library template. |
| `library_template_name` | `mixed` | No | Library template name |
| `message_send_ttl_seconds` | `int` | No | Time to live for message template sent. |
| `modifiedDate` | `mixed` | No |  |
| `name` | `mixed` | No | The message template name |
| `pages` | `int` | No |  |
| `parameter_format` | `string` | No |  |
| `results` | `int` | No |  |
| `resultsPerPage` | `int` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ManageTemplate()->create([
  "components" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ManageTemplate()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

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

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Media()->create([
  "phone_number" => null, // string
]);
```

Sends its body unencoded, as `application/msword`: pass it as `$body`, a string or a stream resource. A stream resource is read in full before the request is sent, so that a retry sends the same bytes. The operation also accepts `application/pdf`, `application/vnd.ms-excel`, `application/vnd.ms-powerpoint`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `audio/aac`, `audio/amr`, `audio/mp4`, `audio/mpeg`, `audio/ogg`, `audio/opus`, `image/jpeg`, `image/png`, `image/webp`, `text/plain`, `video/3gp`, `video/mp4`: a `content-type` header option that is not JSON replaces the declared one.

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `messages` | `array` | Yes |  |
| `requestId` | `string` | Yes | Unique Id of the request made towards LINK Mobility. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `messages` | Yes |
| `requestId` | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SendMessage()->create([
  "messages" => null, // array
  "requestId" => null, // string
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
| `category` | `string` | No |  |
| `components` | `mixed` | No | The array containing all the content of the message template |
| `createdDate` | `string` | No |  |
| `id` | `mixed` | No | ID |
| `language` | `string` | No |  |
| `message_send_ttl_seconds` | `int` | No | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` | `mixed` | No |  |
| `name` | `mixed` | No | The message template name |
| `parameter_format` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `components` | `mixed` | No | An array of JSON objects describing the message template components. |
| `correct_category` | `string` | No |  |
| `createdDate` | `string` | No |  |
| `cta_url_link_tracking_opted_out` | `bool` | No | Optional boolean field for opting out/in of link tracking at template level |
| `id` | `string` | No | ID |
| `language` | `string` | No |  |
| `library_template_name` | `mixed` | No | Template Library name that this HSM is clone from |
| `message_send_ttl_seconds` | `int` | No | Template message delivery retry time-to-live (TTL) override value. |
| `modifiedDate` | `mixed` | No |  |
| `name` | `mixed` | No | The message template name |
| `parameter_format` | `string` | No |  |
| `previous_category` | `string` | No |  |
| `quality_score` | `array` | No |  |
| `rejected_reason` | `string` | No |  |
| `status` | `string` | No |  |
| `sub_category` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

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

```php
$client = new LmWhatsappSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

