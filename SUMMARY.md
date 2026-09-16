# MyLINK WhatsApp API

&lt;div&gt; &lt;h2&gt;Purpose and functionality&lt;/h2&gt; MyLINK WhatsApp API is a REST-based API that supports sending WhatsApp messages to the recipients you want to reach. &lt;h2&gt;Current supported functionality&lt;/h2&gt; &lt;ul style=&quot;list-style:disc inside;&quot;&gt; &lt;li&gt;Send WhatsApp messages&lt;ul style=&quot;list-style:circle;&quot;&gt;&lt;li&gt;Send a text WhatsApp message&lt;/li&gt;&lt;li&gt;Send a WhatsApp message with media (image, video, document, sticker, location)&lt;/li&gt;&lt;li&gt;Send an interactive WhatsApp message (containing list, catalogue, flow, carousel and more)&lt;/li&gt;&lt;li&gt;Send a WhatsApp template message (authentication, marketing or utility)&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;Receive WhatsApp messages &lt;/li&gt;&lt;li&gt;Receive Delivery reports for sent messages&lt;/li&gt;&lt;li&gt;Create/Update/Delete and Retrieve templates via API&lt;/li&gt;&lt;/ul&gt; In order to start sending on WhatsApp you must first create a template message. This process is mandated by Meta to improve the relevancy and trust consumers have in their inbox messages; ultimately filtering out potential spam content that reduces that channel&#39;s popularity amongst consumers. LINK can help you create templates. You can also follow this documentation on how to do it. &lt;h2&gt;Getting started&lt;/h2&gt; To maximise the deliverability of your WhatsApp messages first you need to make sure that your configuration is correctly set up. The following steps are crucial for the success of your integration: &lt;ul style=&quot;list-style:disc inside;&quot;&gt;&lt;li&gt;Get in touch with us to get a demo or sign up for the product: &lt;a href=&quot;https://www.linkmobility.com/contact-us&quot;&gt;Click here&lt;/a&gt;&lt;/li&gt;&lt;li&gt;Accept your invitation to the MyLINK portal to generate your API secrets - simply go to the Messaging APIs page in the navigation menu, select the myLINK WhatsApp API product and generate your credentials(clientId and secret)&lt;/li&gt;&lt;li&gt;Revisit the developer portal for how to send a WhatsApp message&lt;/li&gt;&lt;/ul&gt; All needed values for the configuration can be found on the Messaging APIs page in MyLINK. Once ready, revisit the developer portal for how to send WhatsApp messages. &lt;/div&gt;

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 6 entities and 7 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ManageTemplate](docs/api/manage_template.html)

Results: Success.

SDK operations: `remove`.

### [Media](docs/api/media.html)

Results: OK.

SDK operations: `create`.

### [SendMessage](docs/api/send_message.html)

Results: Accepted.

SDK operations: `create`.

### [Template](docs/api/template.html)

Results: Success.

SDK operations: `create`, `update`.

Key fields to recognise:

- `allow_category_change`: Set to true to allow to assign a category based on template guidelines and the template&#39;s contents.
- `components`: Array of components that make up the template.
- `id`: ID
- `library_template_button_inputs`: Optional data during creation of a template from a library template.
- `library_template_name`: Library template name

### [WhatsAppTemplateGetV2](docs/api/whats_app_template_get_v2.html)

Results: Success.

SDK operations: `load`.

### [WhatsAppTemplateGetV2Pagination](docs/api/whats_app_template_get_v2_pagination.html)

Results: Success.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ManageTemplate](docs/api/manage_template.html) | `remove` | `DELETE /whatsapp/v2/templates/{id}` | Required |
| [Media](docs/api/media.html) | `create` | `POST /whatsapp/v2/{phoneNumber}/media` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /whatsapp/v2/messages` | Required |
| [Template](docs/api/template.html) | `create` | `POST /whatsapp/v2/templates` | Required |
| [Template](docs/api/template.html) | `update` | `PUT /whatsapp/v2/templates/{id}` | Required |
| [WhatsAppTemplateGetV2](docs/api/whats_app_template_get_v2.html) | `load` | `GET /whatsapp/v2/templates/{id}` | Required |
| [WhatsAppTemplateGetV2Pagination](docs/api/whats_app_template_get_v2_pagination.html) | `load` | `GET /whatsapp/v2/templates` | Required |

## Connect to the API

- LINK Mobility MyLINK (base shared with the sibling SMS/Email APIs): `https://api.linkmobility.com`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Bearer token

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `lm-whatsapp_list`: List records for an entity. No active entity supports this operation.
- `lm-whatsapp_load`: Load one record for an entity. Supported entities: `whats_app_template_get_v2`, `whats_app_template_get_v2_pagination`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

