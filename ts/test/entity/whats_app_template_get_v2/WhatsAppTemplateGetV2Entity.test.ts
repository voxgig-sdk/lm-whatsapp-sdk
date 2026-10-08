

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LmWhatsappSDK, BaseFeature, config, stdutil } from '../../..'

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


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LmWhatsappSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WhatsAppTemplateGetV2().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'whats_app_template_get_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":0},"components":{"a":true,"h":"Components","n":"components","r":false,"sh":"An array of JSON objects describing the message template components.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"components","index$":1},"correct_category":{"a":true,"h":"Correct Category","n":"correct_category","r":false,"t":"`$STRING`","key$":"correct_category","index$":2},"createdDate":{"a":true,"fo":"date-time","h":"Created Date","n":"createdDate","r":false,"t":"`$STRING`","key$":"createdDate","index$":3},"cta_url_link_tracking_opted_out":{"a":true,"h":"Cta Url Link Tracking Opted Out","n":"cta_url_link_tracking_opted_out","r":false,"sh":"Optional boolean field for opting out/in of link tracking at template level","t":"`$BOOLEAN`","key$":"cta_url_link_tracking_opted_out","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"ID","t":"`$STRING`","key$":"id","index$":5},"language":{"a":true,"h":"Language","n":"language","r":false,"t":"`$STRING`","key$":"language","index$":6},"library_template_name":{"a":true,"h":"Library Template Name","n":"library_template_name","r":false,"sh":"Template Library name that this HSM is clone from","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"library_template_name","index$":7},"message_send_ttl_seconds":{"a":true,"fo":"int32","h":"Message Send Ttl Seconds","n":"message_send_ttl_seconds","r":false,"sh":"Template message delivery retry time-to-live (TTL) override value.","t":"`$INTEGER`","key$":"message_send_ttl_seconds","index$":8},"modifiedDate":{"a":true,"fo":"date-time","h":"Modified Date","n":"modifiedDate","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"modifiedDate","index$":9},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The message template name","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"name","index$":10},"parameter_format":{"a":true,"h":"Parameter Format","n":"parameter_format","r":false,"t":"`$STRING`","key$":"parameter_format","index$":11},"previous_category":{"a":true,"h":"Previous Category","n":"previous_category","r":false,"t":"`$STRING`","key$":"previous_category","index$":12},"quality_score":{"a":true,"h":"Quality Score","n":"quality_score","r":false,"t":"`$OBJECT`","key$":"quality_score","index$":13},"rejected_reason":{"a":true,"h":"Rejected Reason","n":"rejected_reason","r":false,"t":"`$STRING`","key$":"rejected_reason","index$":14},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":15},"sub_category":{"a":true,"h":"Sub Category","n":"sub_category","r":false,"t":"`$STRING`","key$":"sub_category","index$":16}},"id":{"field":"id","name":"id"},"name":"whats_app_template_get_v2","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /whatsapp/v2/templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/whatsapp/v2/templates/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whats_app_template_get_v2","name__orig":"whats_app_template_get_v2","Name":"WhatsAppTemplateGetV2","name_":"whats_app_template_get_v2","name-":"whats-app-template-get-v2","NAME":"WHATS_APP_TEMPLATE_GET_V2","index$":4}, {"active":true,"entity":"whats_app_template_get_v2","key$":"BasicWhatsAppTemplateGetV2Flow","kind":"basic","name":"BasicWhatsAppTemplateGetV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"whats_app_template_get_v2_ref01","srcdatavar":"whats_app_template_get_v2_ref01_data","suffix":"_dt0"},"m":{"id":"whats_app_template_get_v201"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whats_app_template_get_v2_ref01"}}],"index$":0}]}, 'WhatsAppTemplateGetV2', {"GET /whatsapp/v2/templates/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]}}, { strict: LIVE_STRICT, t })
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



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

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
  
