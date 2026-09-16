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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "media", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_link_upload_filename", "orig": "x_link_upload_filename", "reqd": true, "type": "`$STRING`" }], "params": [{ "active": true, "example": "+15551234567 or %2b15551234567 or %2B15551234567", "kind": "param", "name": "phone_number", "orig": "phone_number", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /whatsapp/v2/{phoneNumber}/media", "json": "{\"parameters\":[{\"description\":\"The uploaded file's name.\",\"in\":\"header\",\"name\":\"X-Link-Upload-Filename\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The sender's phone number. Should start with + sign or its URL-encoded equivalent - %2B | %2b\",\"example\":\"+15551234567 or %2b15551234567 or %2B15551234567\",\"in\":\"path\",\"name\":\"phoneNumber\",\"required\":true,\"schema\":{\"pattern\":\"^(?:\\\\+|%2[bB])\\\\d+$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/msword\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/pdf\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/vnd.ms-excel\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/vnd.ms-powerpoint\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/vnd.openxmlformats-officedocument.presentationml.presentation\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"audio/aac\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"audio/amr\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"audio/mp4\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"audio/mpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"audio/ogg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"audio/opus\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/webp\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"text/plain\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"video/3gp\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"video/mp4\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}}},\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"1455590888989863\",\"type\":\"string\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"correlationId\":{\"format\":\"uuid\",\"type\":\"string\"},\"error\":{\"description\":\"Status code\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"Unauthorized\",\"type\":\"string\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"You do not have the correct permissions to access the resource.\",\"type\":\"string\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"The server encountered an internal error and was unable to complete your request.\",\"type\":\"string\"}}},\"description\":\"Server Error\"}},\"security\":[{\"Bearer\":[]}],\"securitySchemes\":{\"Bearer\":{\"description\":\"Bearer token\",\"flows\":{\"clientCredentials\":{\"scopes\":{},\"tokenUrl\":\"https://sso.linkmobility.com/auth/realms/CPaaS/protocol/openid-connect/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/whatsapp/v2/{phoneNumber}/media", "rename": { "param": { "phoneNumber": "phone_number" } }, "segments": [{ "lit": "whatsapp" }, { "lit": "v2" }, { "var": "phone_number" }, { "lit": "media" }], "select": { "exist": ["phone_number", "x_link_upload_filename"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["v2"]] }, "key$": "media", "name__orig": "media", "Name": "Media", "name_": "media", "name-": "media", "NAME": "MEDIA", "index$": 1 }, { "active": true, "entity": "media", "key$": "BasicMediaFlow", "kind": "basic", "name": "BasicMediaFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "media_ref01" }, "match": { "phone_number": "phone_number01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Media');
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
    let idmap = transform(['media01', 'media02', 'media03', 'v201', 'v202', 'v203'], {
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