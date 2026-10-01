"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "manage_template",
        "accessor": "ManageTemplate",
        "op": "create",
        "method": "POST",
        "path": "/whatsapp/v2/templates",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "manage_template",
        "accessor": "ManageTemplate",
        "op": "load",
        "method": "GET",
        "path": "/whatsapp/v2/templates",
        "args": [],
        "select": {
            "page": "v1",
            "size": "v1",
            "sort": "v1"
        },
        "headers": [],
        "query": [
            "sort",
            "page",
            "size"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": 1,
            "resultsPerPage": 1,
            "pages": 1,
            "currentPage": 1,
            "items": [
                {}
            ]
        },
        "idField": "id"
    },
    {
        "entity": "manage_template",
        "accessor": "ManageTemplate",
        "op": "remove",
        "method": "DELETE",
        "path": "/whatsapp/v2/templates/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "media",
        "accessor": "Media",
        "op": "create",
        "method": "POST",
        "path": "/whatsapp/v2/{phoneNumber}/media",
        "args": [
            {
                "name": "phone_number",
                "wire": "phoneNumber",
                "value": "+15551234567 or %2b15551234567 or %2B15551234567"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_link_upload_filename",
                "wire": "X-Link-Upload-Filename",
                "value": "h1"
            }
        ],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "send_message",
        "accessor": "SendMessage",
        "op": "create",
        "method": "POST",
        "path": "/whatsapp/v2/messages",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 202,
        "sample": {
            "requestId": "x",
            "messages": [
                {
                    "messageId": "x",
                    "referenceId": "x",
                    "recipient": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "update",
        "method": "PUT",
        "path": "/whatsapp/v2/templates/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "whats_app_template_get_v2",
        "accessor": "WhatsAppTemplateGetV2",
        "op": "load",
        "method": "GET",
        "path": "/whatsapp/v2/templates/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map