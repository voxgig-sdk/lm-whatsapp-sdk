

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


describe('WhatsAppTemplateGetV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
  afterEach(liveDelay('LM_WHATSAPP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LmWhatsappSDK.test()
    const ent = testsdk.WhatsAppTemplateGetV2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'whats_app_template_get_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"whats_app_template_get_v2","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /whatsapp/v2/templates/{id}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"allOf\":[{\"additionalProperties\":false,\"type\":\"object\"}],\"properties\":{\"category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"components\":{\"description\":\"An array of JSON objects describing the message template components.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"buttons\":{\"description\":\"Button components to be used in the template.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"examples\":{\"description\":\"Example\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"flow_action\":{\"enum\":[\"NAVIGATE\",\"DATA_EXCHANGE\"],\"type\":\"string\"},\"flow_id\":{\"description\":\"Flow ID\",\"format\":\"int64\",\"type\":\"integer\"},\"navigate_screen\":{\"description\":\"Navigate screen\",\"type\":[\"string\",\"null\"]},\"phone_number\":{\"description\":\"Phone number\",\"type\":[\"string\",\"null\"]},\"supported_apps\":{\"description\":\"Supported apps\",\"items\":{\"additionalProperties\":false,\"properties\":{\"package_name\":{\"description\":\"Package name\",\"minLength\":1,\"type\":\"string\"},\"signature_hash\":{\"description\":\"Signature hash\",\"minLength\":1,\"type\":\"string\"}},\"required\":[\"package_name\",\"signature_hash\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"text\":{\"description\":\"Button text.\",\"type\":[\"string\",\"null\"]},\"type\":{\"enum\":[\"QUICK_REPLY\",\"URL\",\"PHONE_NUMBER\",\"OTP\",\"MPM\",\"CATALOG\",\"FLOW\",\"VOICE_CALL\",\"APP\",\"POSTBACK\"],\"type\":\"string\"},\"url\":{\"description\":\"URL\",\"type\":[\"string\",\"null\"]},\"zero_tap_terms_accepted\":{\"description\":\"Zero tap terms accepted\",\"type\":\"boolean\"}},\"required\":[\"type\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"examples\":{\"additionalProperties\":false,\"properties\":{\"body_text\":{\"description\":\"Body text\",\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":[\"array\",\"null\"]},\"header_handle\":{\"description\":\"Header handle\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"header_text\":{\"description\":\"Header text\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]}},\"type\":\"object\"},\"format\":{\"enum\":[\"TEXT\",\"IMAGE\",\"DOCUMENT\",\"VIDEO\",\"LOCATION\"],\"type\":\"string\"},\"text\":{\"description\":\"Component text.\\r\\nRequired for components with type HEADER, BODY or FOOTER.\",\"type\":[\"string\",\"null\"]},\"type\":{\"enum\":[\"GREETING\",\"HEADER\",\"BODY\",\"FOOTER\",\"BUTTONS\",\"CAROUSEL\",\"LIMITED_TIME_OFFER\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"correct_category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"createdDate\":{\"format\":\"date-time\",\"type\":\"string\"},\"cta_url_link_tracking_opted_out\":{\"description\":\"Optional boolean field for opting out/in of link tracking at template level\",\"type\":\"boolean\"},\"id\":{\"description\":\"ID\",\"type\":\"string\"},\"language\":{\"enum\":[\"af\",\"sq\",\"ar\",\"az\",\"bn\",\"bg\",\"ca\",\"zh_CN\",\"zh_HK\",\"zh_TW\",\"hr\",\"cs\",\"da\",\"nl\",\"en\",\"en_GB\",\"en_US\",\"et\",\"fil\",\"fi\",\"fr\",\"de\",\"el\",\"gu\",\"ha\",\"he\",\"hi\",\"hu\",\"id\",\"ga\",\"it\",\"ja\",\"kn\",\"kk\",\"ko\",\"lo\",\"lv\",\"lt\",\"mk\",\"ms\",\"ml\",\"mr\",\"nb\",\"fa\",\"pl\",\"pt_BR\",\"pt_PT\",\"pa\",\"ro\",\"ru\",\"sr\",\"sk\",\"sl\",\"es\",\"es_AR\",\"es_ES\",\"es_MX\",\"sw\",\"sv\",\"ta\",\"te\",\"th\",\"tr\",\"uk\",\"ur\",\"uz\",\"vi\",\"zu\"],\"type\":\"string\"},\"library_template_name\":{\"description\":\"Template Library name that this HSM is clone from\",\"type\":[\"string\",\"null\"]},\"message_send_ttl_seconds\":{\"description\":\"Template message delivery retry time-to-live (TTL) override value.\\r\\nIf we are unable to deliver a message to a WhatsApp user, we will retry the delivery for a period of time known as a time-to-live, TTL, or the message validity period.\\r\\nTTL can be configured for certain message types.\",\"format\":\"int32\",\"type\":\"integer\"},\"modifiedDate\":{\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"The message template name\",\"type\":[\"string\",\"null\"]},\"parameter_format\":{\"enum\":[\"NAMED\",\"POSITIONAL\"],\"type\":\"string\"},\"previous_category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"quality_score\":{\"additionalProperties\":false,\"properties\":{\"date\":{\"description\":\"Timestamp of the quality score\",\"type\":[\"string\",\"null\"]},\"reasons\":{\"description\":\"List of reasons for the score of the HSM\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"score\":{\"description\":\"Quality score of the HSM\",\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},\"rejected_reason\":{\"enum\":[\"ABUSIVE_CONTENT\",\"INVALID_FORMAT\",\"NONE\",\"PROMOTIONAL\",\"TAG_CONTENT_MISMATCH\",\"SCAM\"],\"type\":\"string\"},\"status\":{\"enum\":[\"APPROVED\",\"IN_APPEAL\",\"PENDING\",\"REJECTED\",\"PENDING_DELETION\",\"DELETED\",\"DISABLED\",\"PAUSED\",\"LIMIT_EXCEEDED\"],\"type\":\"string\"},\"sub_category\":{\"enum\":[\"ORDER_DETAILS\",\"ORDER_STATUS\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Forbidden\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Too Many Requests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"}},\"security\":[{\"Bearer\":[]}],\"securitySchemes\":{\"Bearer\":{\"description\":\"Bearer token\",\"flows\":{\"clientCredentials\":{\"scopes\":{},\"tokenUrl\":\"https://sso.linkmobility.com/auth/realms/CPaaS/protocol/openid-connect/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/whatsapp/v2/templates/{id}","segments":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whats_app_template_get_v2","name__orig":"whats_app_template_get_v2","Name":"WhatsAppTemplateGetV2","name_":"whats_app_template_get_v2","name-":"whats-app-template-get-v2","NAME":"WHATS_APP_TEMPLATE_GET_V2","index$":4}, {"active":true,"entity":"whats_app_template_get_v2","key$":"BasicWhatsAppTemplateGetV2Flow","kind":"basic","name":"BasicWhatsAppTemplateGetV2Flow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"whats_app_template_get_v2_ref01","srcdatavar":"whats_app_template_get_v2_ref01_data","suffix":"_dt0"},"match":{"id":"whats_app_template_get_v201"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whats_app_template_get_v2_ref01"}}],"index$":0}]}, 'WhatsAppTemplateGetV2')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let whats_app_template_get_v2_ref01_data = Object.values(setup.data.existing.whats_app_template_get_v2)[0] as any

    // LOAD
    const whats_app_template_get_v2_ref01_ent = client.WhatsAppTemplateGetV2()
    const whats_app_template_get_v2_ref01_match_dt0: any = {}
    whats_app_template_get_v2_ref01_match_dt0.id = whats_app_template_get_v2_ref01_data.id
    const whats_app_template_get_v2_ref01_data_dt0 = (await whats_app_template_get_v2_ref01_ent.load(whats_app_template_get_v2_ref01_match_dt0)).data()
    assert(whats_app_template_get_v2_ref01_data_dt0.id === whats_app_template_get_v2_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/whats_app_template_get_v2/WhatsAppTemplateGetV2TestData.json')

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
    ['whats_app_template_get_v201','whats_app_template_get_v202','whats_app_template_get_v203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': '',
  })

  idmap = env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_ENTID']
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
  
