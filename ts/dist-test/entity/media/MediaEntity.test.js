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
(0, node_test_1.describe)('MediaEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LM_WHATSAPP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LmWhatsappSDK.test();
        const ent = testsdk.Media();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'media.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "media", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /whatsapp/v2/{phoneNumber}/media", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_link_upload_filename", "or": "x_link_upload_filename", "r": true, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "+15551234567 or %2b15551234567 or %2B15551234567", "k": "param", "n": "phone_number", "or": "phone_number", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/whatsapp/v2/{phoneNumber}/media", "q": { "exist": ["phone_number", "x_link_upload_filename"] }, "r": { "param": { "phoneNumber": "phone_number" } }, "s": [{ "lit": "whatsapp" }, { "lit": "v2" }, { "var": "phone_number" }, { "lit": "media" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "media", "name__orig": "media", "Name": "Media", "name_": "media", "name-": "media", "NAME": "MEDIA", "index$": 1 }, { "active": true, "entity": "media", "key$": "BasicMediaFlow", "kind": "basic", "name": "BasicMediaFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "media_ref01" }, "m": { "phone_number": "phone_number01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Media', { "POST /whatsapp/v2/{phoneNumber}/media": { "protocol": "http", "requestBody": { "content": { "text/plain": { "schema": { "type": "string", "format": "binary" } }, "application/pdf": { "schema": { "type": "string", "format": "binary" } }, "application/vnd.ms-powerpoint": { "schema": { "type": "string", "format": "binary" } }, "application/msword": { "schema": { "type": "string", "format": "binary" } }, "application/vnd.ms-excel": { "schema": { "type": "string", "format": "binary" } }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { "schema": { "type": "string", "format": "binary" } }, "application/vnd.openxmlformats-officedocument.presentationml.presentation": { "schema": { "type": "string", "format": "binary" } }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { "schema": { "type": "string", "format": "binary" } }, "image/png": { "schema": { "type": "string", "format": "binary" } }, "image/jpeg": { "schema": { "type": "string", "format": "binary" } }, "image/webp": { "schema": { "type": "string", "format": "binary" } }, "audio/aac": { "schema": { "type": "string", "format": "binary" } }, "audio/mp4": { "schema": { "type": "string", "format": "binary" } }, "audio/mpeg": { "schema": { "type": "string", "format": "binary" } }, "audio/amr": { "schema": { "type": "string", "format": "binary" } }, "audio/ogg": { "schema": { "type": "string", "format": "binary" } }, "audio/opus": { "schema": { "type": "string", "format": "binary" } }, "video/mp4": { "schema": { "type": "string", "format": "binary" } }, "video/3gp": { "schema": { "type": "string", "format": "binary" } } } }, "parameters": [{ "name": "X-Link-Upload-Filename", "in": "header", "description": "The uploaded file's name.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "phoneNumber", "in": "path", "description": "The sender's phone number. Should start with + sign or its URL-encoded equivalent - %2B | %2b", "required": true, "schema": { "type": "string", "pattern": "^(?:\\+|%2[bB])\\d+$" }, "example": "+15551234567 or %2b15551234567 or %2B15551234567", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const media_ref01_ent = client.Media();
        let media_ref01_data = setup.data.new.media['media_ref01'];
        media_ref01_data['phone_number'] = setup.idmap['phone_number01'];
        media_ref01_data = (await media_ref01_ent.create(media_ref01_data)).data();
        (0, node_assert_1.default)(null != media_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/media/MediaTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LmWhatsappSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['media01', 'media02', 'media03', 'phone_number01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LM_WHATSAPP_TEST_MEDIA_ENTID': idmap,
        'LM_WHATSAPP_TEST_LIVE': 'FALSE',
        'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
        'LM_WHATSAPP_APIKEY': '',
    });
    idmap = env['LM_WHATSAPP_TEST_MEDIA_ENTID'];
    const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LM_WHATSAPP_TEST_MEDIA_ENTID'];
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
//# sourceMappingURL=MediaEntity.test.js.map