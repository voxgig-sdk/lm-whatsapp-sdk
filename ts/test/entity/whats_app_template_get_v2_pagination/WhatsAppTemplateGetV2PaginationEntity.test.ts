
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { LmWhatsappSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


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
      if (maybeSkipControl(t, 'entityOp', 'whats_app_template_get_v2_pagination.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID JSON to run live')
      return
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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': 'NONE',
  })

  idmap = env['LM_WHATSAPP_TEST_WHATS_APP_TEMPLATE_GET_V2_PAGINATION_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  if (live) {
    client = new LmWhatsappSDK(merge([
      {
        apikey: env.LM_WHATSAPP_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
