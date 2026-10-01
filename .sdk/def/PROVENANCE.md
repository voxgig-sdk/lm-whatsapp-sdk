# Provenance of the API definition

`whatsapp-openapi.json` is LINK Mobility's published definition of the MyLINK
WhatsApp API, copied byte for byte. Nothing in it has been changed.

| | |
|---|---|
| Vendor file | `MyLINK-WhatsApp-API.json` |
| Source URL | https://docs.linkmobility.com/api/specs/file/MyLINK-WhatsApp-API.json |
| Rendered at | https://docs.linkmobility.com/api-reference/mylink-whatsapp-api (the page's current version is this file) |
| Retrieved | 2026-10-01T18:39:51Z |
| Portal upload time | 2026-04-26T09:11:31Z (`updatedAt` in the docs portal's spec listing) |
| SHA-256 | `40b6b7dab99f4de104914c9e5f0ecaca23def62d95c1c0e79a7270112c9561cd` |
| Size | 322,818 bytes |
| Format | OpenAPI 3.1.0, title "MyLINK WhatsApp API", version `v2` |
| Counts | 4 paths, 7 operations, 203 component schemas |
| Server | none declared (see below) |
| Auth | OAuth2 client credentials; token URL `https://sso.linkmobility.com/auth/realms/CPaaS/protocol/openid-connect/token` |
| Licence | The definition declares none (`info.license` is absent). It is published openly on LINK Mobility's developer portal. Publishing this SDK was approved by Richard Rodger on 2026-10-01. |

## Changes

None to the file. The copy this replaced had a `servers` entry added by hand;
that edit is gone, and the file is now the vendor's exactly.

## The base URL, and where it comes from

The definition declares no `servers`, and its code samples address
`http://undefinedundefined/whatsapp/v2/...`, which looks like a host variable
that was never filled in when the file was exported. The reference page renders
this same file and names no host either.

The SDK uses `https://api.linkmobility.com`. It is set as apidef's `server`
build option in `.sdk/build/apidef.js`, which apidef applies only when a
definition names no server. The evidence:

1. The sibling MyLINK definitions uploaded to the portal in the same batch on
   2026-04-26, SMS (`MyLINK-SMS-API-1.json`), Email (`MyLINK-Email-API.json`)
   and RCS (`MyLINK-RCS-API.json`), all declare `https://api.linkmobility.com`,
   and all share this definition's OAuth2 token URL.
2. Checked live without credentials on 2026-10-01 against
   `https://api.linkmobility.com`: `GET /whatsapp/v2/templates` and
   `POST /whatsapp/v2/messages` answer 401 with
   `WWW-Authenticate: Bearer realm="sso.linkmobility.com"`, the same answer
   the Email API's routes give. Paths this definition does not declare, such
   as `/whatsapp/v9/templates` or `GET /whatsapp/v2/messages`, answer 404
   "no Route matched".

The older LINK "WhatsApp Message API" (v1.4 PDF documentation, hosts such as
`n-eu.linkmobility.io/whatsapp-message`) is a different product and does not
serve these `/whatsapp/v2` paths.
