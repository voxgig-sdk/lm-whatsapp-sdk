

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LmWhatsappSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('WhatsAppTemplateGetV2PaginationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
  afterEach(liveDelay('LM_WHATSAPP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LmWhatsappSDK.test()
    const ent = testsdk.WhatsAppTemplateGetV2Pagination()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'whats_app_template_get_v2_pagination.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"currentPage","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"items","req":false,"type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":1},{"active":true,"format":"int32","name":"pages","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"format":"int32","name":"results","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"format":"int32","name":"resultsPerPage","req":false,"type":"`$INTEGER`","index$":4}],"name":"whats_app_template_get_v2_pagination","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":25,"kind":"query","name":"size","orig":"size","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":2}]},"contract":{"id":"GET /whatsapp/v2/templates","json":"{\"parameters\":[{\"description\":\"List of fields used to sort results\",\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},{\"description\":\"Requested page\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Number of items per page\",\"in\":\"query\",\"name\":\"size\",\"schema\":{\"default\":25,\"format\":\"int32\",\"maximum\":100,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"currentPage\":{\"format\":\"int32\",\"type\":\"integer\"},\"items\":{\"items\":{\"oneOf\":[{\"additionalProperties\":false,\"allOf\":[{\"additionalProperties\":false,\"type\":\"object\"}],\"properties\":{\"category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"createdDate\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"ID\",\"type\":[\"string\",\"null\"]},\"language\":{\"enum\":[\"af\",\"sq\",\"ar\",\"az\",\"bn\",\"bg\",\"ca\",\"zh_CN\",\"zh_HK\",\"zh_TW\",\"hr\",\"cs\",\"da\",\"nl\",\"en\",\"en_GB\",\"en_US\",\"et\",\"fil\",\"fi\",\"fr\",\"de\",\"el\",\"gu\",\"ha\",\"he\",\"hi\",\"hu\",\"id\",\"ga\",\"it\",\"ja\",\"kn\",\"kk\",\"ko\",\"lo\",\"lv\",\"lt\",\"mk\",\"ms\",\"ml\",\"mr\",\"nb\",\"fa\",\"pl\",\"pt_BR\",\"pt_PT\",\"pa\",\"ro\",\"ru\",\"sr\",\"sk\",\"sl\",\"es\",\"es_AR\",\"es_ES\",\"es_MX\",\"sw\",\"sv\",\"ta\",\"te\",\"th\",\"tr\",\"uk\",\"ur\",\"uz\",\"vi\",\"zu\"],\"type\":\"string\"},\"modifiedDate\":{\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"The message template name\",\"type\":[\"string\",\"null\"]},\"status\":{\"enum\":[\"APPROVED\",\"IN_APPEAL\",\"PENDING\",\"REJECTED\",\"PENDING_DELETION\",\"DELETED\",\"DISABLED\",\"PAUSED\",\"LIMIT_EXCEEDED\"],\"type\":\"string\"}},\"type\":\"object\"},{\"type\":\"null\"}]},\"type\":[\"array\",\"null\"]},\"pages\":{\"format\":\"int32\",\"type\":\"integer\"},\"results\":{\"format\":\"int32\",\"type\":\"integer\"},\"resultsPerPage\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Forbidden\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Too Many Requests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"}},\"security\":[{\"Bearer\":[]}],\"securitySchemes\":{\"Bearer\":{\"description\":\"Bearer token\",\"flows\":{\"clientCredentials\":{\"scopes\":{},\"tokenUrl\":\"https://sso.linkmobility.com/auth/realms/CPaaS/protocol/openid-connect/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/whatsapp/v2/templates","segments":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"}],"select":{"exist":["page","size","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whats_app_template_get_v2_pagination","name__orig":"whats_app_template_get_v2_pagination","Name":"WhatsAppTemplateGetV2Pagination","name_":"whats_app_template_get_v2_pagination","name-":"whats-app-template-get-v2-pagination","NAME":"WHATS_APP_TEMPLATE_GET_V2_PAGINATION","index$":5}, {"active":true,"entity":"whats_app_template_get_v2_pagination","key$":"BasicWhatsAppTemplateGetV2PaginationFlow","kind":"basic","name":"BasicWhatsAppTemplateGetV2PaginationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"whats_app_template_get_v2_pagination_ref01","srcdatavar":"whats_app_template_get_v2_pagination_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whats_app_template_get_v2_pagination_ref01"}}],"index$":0}]}, 'WhatsAppTemplateGetV2Pagination')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let whats_app_template_get_v2_pagination_ref01_data = Object.values(setup.data.existing.whats_app_template_get_v2_pagination)[0] as any

    // LOAD
    const whats_app_template_get_v2_pagination_ref01_ent = client.WhatsAppTemplateGetV2Pagination()
    const whats_app_template_get_v2_pagination_ref01_match_dt0: any = {}
    const whats_app_template_get_v2_pagination_ref01_data_dt0 = (await whats_app_template_get_v2_pagination_ref01_ent.load(whats_app_template_get_v2_pagination_ref01_match_dt0)).data()
    assert(null != whats_app_template_get_v2_pagination_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/whats_app_template_get_v2_pagination/WhatsAppTemplateGetV2PaginationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LmWhatsappSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['whats_app_template_get_v2_pagination01','whats_app_template_get_v2_pagination02','whats_app_template_get_v2_pagination03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': '',
  })

  idmap = env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LmWhatsappSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
