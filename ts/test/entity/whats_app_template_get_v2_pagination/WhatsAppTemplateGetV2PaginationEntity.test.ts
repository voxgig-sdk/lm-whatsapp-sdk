

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"currentPage":{"a":true,"fo":"int32","h":"Current Page","n":"currentPage","r":false,"t":"`$INTEGER`","key$":"currentPage","index$":0},"items":{"a":true,"h":"Items","n":"items","r":false,"t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"items","index$":1},"pages":{"a":true,"fo":"int32","h":"Pages","n":"pages","r":false,"t":"`$INTEGER`","key$":"pages","index$":2},"results":{"a":true,"fo":"int32","h":"Results","n":"results","r":false,"t":"`$INTEGER`","key$":"results","index$":3},"resultsPerPage":{"a":true,"fo":"int32","h":"Results Per Page","n":"resultsPerPage","r":false,"t":"`$INTEGER`","key$":"resultsPerPage","index$":4}},"name":"whats_app_template_get_v2_pagination","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /whatsapp/v2/templates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":25,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":2}]},"k":"http","m":"GET","o":"/whatsapp/v2/templates","q":{"exist":["page","size","sort"]},"r":{},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whats_app_template_get_v2_pagination","name__orig":"whats_app_template_get_v2_pagination","Name":"WhatsAppTemplateGetV2Pagination","name_":"whats_app_template_get_v2_pagination","name-":"whats-app-template-get-v2-pagination","NAME":"WHATS_APP_TEMPLATE_GET_V2_PAGINATION","index$":5}, {"active":true,"entity":"whats_app_template_get_v2_pagination","key$":"BasicWhatsAppTemplateGetV2PaginationFlow","kind":"basic","name":"BasicWhatsAppTemplateGetV2PaginationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"whats_app_template_get_v2_pagination_ref01","srcdatavar":"whats_app_template_get_v2_pagination_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whats_app_template_get_v2_pagination_ref01"}}],"index$":0}]}, 'WhatsAppTemplateGetV2Pagination', {"GET /whatsapp/v2/templates":{"protocol":"http","parameters":[{"name":"sort","in":"query","description":"List of fields used to sort results","schema":{"type":"array","items":{"type":"string"}},"index$":0},{"name":"page","in":"query","description":"Requested page","schema":{"type":"integer","format":"int32","default":1},"index$":1},{"name":"size","in":"query","description":"Number of items per page","schema":{"maximum":100,"minimum":0,"type":"integer","format":"int32","default":25},"index$":2}]}})
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
  
