"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WhatsAppTemplateGetV2PaginationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LM_WHATSAPP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LmWhatsappSDK.test();
        const ent = testsdk.WhatsAppTemplateGetV2Pagination();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'whats_app_template_get_v2_pagination.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "currentPage": { "a": true, "fo": "int32", "h": "Current Page", "n": "currentPage", "r": false, "t": "`$INTEGER`", "key$": "currentPage", "index$": 0 }, "items": { "a": true, "h": "Items", "n": "items", "r": false, "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "items", "index$": 1 }, "pages": { "a": true, "fo": "int32", "h": "Pages", "n": "pages", "r": false, "t": "`$INTEGER`", "key$": "pages", "index$": 2 }, "results": { "a": true, "fo": "int32", "h": "Results", "n": "results", "r": false, "t": "`$INTEGER`", "key$": "results", "index$": 3 }, "resultsPerPage": { "a": true, "fo": "int32", "h": "Results Per Page", "n": "resultsPerPage", "r": false, "t": "`$INTEGER`", "key$": "resultsPerPage", "index$": 4 } }, "name": "whats_app_template_get_v2_pagination", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /whatsapp/v2/templates", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ARRAY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/whatsapp/v2/templates", "q": { "exist": ["page", "size", "sort"] }, "r": {}, "s": [{ "lit": "whatsapp" }, { "lit": "v2" }, { "lit": "templates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "whats_app_template_get_v2_pagination", "name__orig": "whats_app_template_get_v2_pagination", "Name": "WhatsAppTemplateGetV2Pagination", "name_": "whats_app_template_get_v2_pagination", "name-": "whats-app-template-get-v2-pagination", "NAME": "WHATS_APP_TEMPLATE_GET_V2_PAGINATION", "index$": 5 }, { "active": true, "entity": "whats_app_template_get_v2_pagination", "key$": "BasicWhatsAppTemplateGetV2PaginationFlow", "kind": "basic", "name": "BasicWhatsAppTemplateGetV2PaginationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "whats_app_template_get_v2_pagination_ref01", "srcdatavar": "whats_app_template_get_v2_pagination_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-whats_app_template_get_v2_pagination_ref01" } }], "index$": 0 }] }, 'WhatsAppTemplateGetV2Pagination', { "GET /whatsapp/v2/templates": { "protocol": "http", "parameters": [{ "name": "sort", "in": "query", "description": "List of fields used to sort results", "schema": { "type": "array", "items": { "type": "string" } }, "index$": 0 }, { "name": "page", "in": "query", "description": "Requested page", "schema": { "type": "integer", "format": "int32", "default": 1 }, "index$": 1 }, { "name": "size", "in": "query", "description": "Number of items per page", "schema": { "maximum": 100, "minimum": 0, "type": "integer", "format": "int32", "default": 25 }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let whats_app_template_get_v2_pagination_ref01_data = Object.values(setup.data.existing.whats_app_template_get_v2_pagination)[0];
        // LOAD
        const whats_app_template_get_v2_pagination_ref01_ent = client.WhatsAppTemplateGetV2Pagination();
        const whats_app_template_get_v2_pagination_ref01_match_dt0 = {};
        const whats_app_template_get_v2_pagination_ref01_data_dt0 = (await whats_app_template_get_v2_pagination_ref01_ent.load(whats_app_template_get_v2_pagination_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != whats_app_template_get_v2_pagination_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/whats_app_template_get_v2_pagination/WhatsAppTemplateGetV2PaginationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LmWhatsappSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['whats_app_template_get_v2_pagination01', 'whats_app_template_get_v2_pagination02', 'whats_app_template_get_v2_pagination03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID': idmap,
        'LM_WHATSAPP_TEST_LIVE': 'FALSE',
        'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
        'LM_WHATSAPP_APIKEY': '',
    });
    idmap = env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID'];
    const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LmWhatsappSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.LM_WHATSAPP_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.LM_WHATSAPP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WhatsAppTemplateGetV2PaginationEntity.test.js.map