# LmWhatsapp Python SDK Reference

Complete API reference for the LmWhatsapp Python SDK.


## LmWhatsappSDK

### Constructor

```python
from lmwhatsapp_sdk import LmWhatsappSDK

client = LmWhatsappSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LmWhatsappSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = LmWhatsappSDK.test()
```


### Instance Methods

#### `ManageTemplate(data=None)`

Create a new `ManageTemplateEntity` instance. Pass `None` for no initial data.

#### `Media(data=None)`

Create a new `MediaEntity` instance. Pass `None` for no initial data.

#### `SendMessage(data=None)`

Create a new `SendMessageEntity` instance. Pass `None` for no initial data.

#### `Template(data=None)`

Create a new `TemplateEntity` instance. Pass `None` for no initial data.

#### `WhatsAppTemplateGetV2(data=None)`

Create a new `WhatsAppTemplateGetV2Entity` instance. Pass `None` for no initial data.

#### `WhatsAppTemplateGetV2Pagination(data=None)`

Create a new `WhatsAppTemplateGetV2PaginationEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ManageTemplateEntity

```python
manage_template = client.ManageTemplate()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ManageTemplate().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ManageTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MediaEntity

```python
media = client.Media()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Media().create({
    "phone_number": "example_phone_number",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SendMessageEntity

```python
send_message = client.SendMessage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SendMessage().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SendMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TemplateEntity

```python
template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_category_change` | `bool` | No |  |
| `category` | `str` | No |  |
| `components` | `list` | Yes |  |
| `createdDate` | `str` | No |  |
| `id` | `str | None` | No |  |
| `language` | `str` | No |  |
| `library_template_body_inputs` | `dict` | No |  |
| `library_template_button_inputs` | `list | None` | No |  |
| `library_template_name` | `str | None` | No |  |
| `message_send_ttl_seconds` | `int` | No |  |
| `modifiedDate` | `str | None` | No |  |
| `name` | `str | None` | No |  |
| `parameter_format` | `str` | No |  |
| `status` | `str` | No |  |
| `sub_category` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Template().create({
    "components": [],  # list
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Template().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhatsAppTemplateGetV2Entity

```python
whats_app_template_get_v2 = client.WhatsAppTemplateGetV2()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WhatsAppTemplateGetV2().load({"id": "whats_app_template_get_v2_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsAppTemplateGetV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhatsAppTemplateGetV2PaginationEntity

```python
whats_app_template_get_v2_pagination = client.WhatsAppTemplateGetV2Pagination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentPage` | `int` | No |  |
| `items` | `list | None` | No |  |
| `pages` | `int` | No |  |
| `results` | `int` | No |  |
| `resultsPerPage` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WhatsAppTemplateGetV2Pagination().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsAppTemplateGetV2PaginationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = LmWhatsappSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

