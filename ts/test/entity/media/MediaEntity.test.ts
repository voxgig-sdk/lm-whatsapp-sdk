

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


describe('MediaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
  afterEach(liveDelay('LM_WHATSAPP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LmWhatsappSDK.test()
    const ent = testsdk.Media()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'media.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"media","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /whatsapp/v2/{phoneNumber}/media","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_link_upload_filename","or":"x_link_upload_filename","r":true,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"+15551234567 or %2b15551234567 or %2B15551234567","k":"param","n":"phone_number","or":"phone_number","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/whatsapp/v2/{phoneNumber}/media","q":{"exist":["phone_number","x_link_upload_filename"]},"r":{"param":{"phoneNumber":"phone_number"}},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"var":"phone_number"},{"lit":"media"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"media","name__orig":"media","Name":"Media","name_":"media","name-":"media","NAME":"MEDIA","index$":1}, {"active":true,"entity":"media","key$":"BasicMediaFlow","kind":"basic","name":"BasicMediaFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"media_ref01"},"m":{"phone_number":"phone_number01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Media', {"POST /whatsapp/v2/{phoneNumber}/media":{"protocol":"http","requestBody":{"content":{"text/plain":{"schema":{"type":"string","format":"binary"}},"application/pdf":{"schema":{"type":"string","format":"binary"}},"application/vnd.ms-powerpoint":{"schema":{"type":"string","format":"binary"}},"application/msword":{"schema":{"type":"string","format":"binary"}},"application/vnd.ms-excel":{"schema":{"type":"string","format":"binary"}},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"schema":{"type":"string","format":"binary"}},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"schema":{"type":"string","format":"binary"}},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"schema":{"type":"string","format":"binary"}},"image/png":{"schema":{"type":"string","format":"binary"}},"image/jpeg":{"schema":{"type":"string","format":"binary"}},"image/webp":{"schema":{"type":"string","format":"binary"}},"audio/aac":{"schema":{"type":"string","format":"binary"}},"audio/mp4":{"schema":{"type":"string","format":"binary"}},"audio/mpeg":{"schema":{"type":"string","format":"binary"}},"audio/amr":{"schema":{"type":"string","format":"binary"}},"audio/ogg":{"schema":{"type":"string","format":"binary"}},"audio/opus":{"schema":{"type":"string","format":"binary"}},"video/mp4":{"schema":{"type":"string","format":"binary"}},"video/3gp":{"schema":{"type":"string","format":"binary"}}}},"parameters":[{"name":"X-Link-Upload-Filename","in":"header","description":"The uploaded file's name.","required":true,"schema":{"type":"string"},"index$":0},{"name":"phoneNumber","in":"path","description":"The sender's phone number. Should start with + sign or its URL-encoded equivalent - %2B | %2b","required":true,"schema":{"type":"string","pattern":"^(?:\\+|%2[bB])\\d+$"},"example":"+15551234567 or %2b15551234567 or %2B15551234567","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const media_ref01_ent = client.Media()
    let media_ref01_data = setup.data.new.media['media_ref01']
    media_ref01_data['phone_number'] = setup.idmap['phone_number01']

    media_ref01_data = (await media_ref01_ent.create(media_ref01_data)).data()
    assert(null != media_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/media/MediaTestData.json')

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
    ['media01','media02','media03','phone_number01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LM_WHATSAPP_TEST_MEDIA_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': '',
  })

  idmap = env['LM_WHATSAPP_TEST_MEDIA_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LM_WHATSAPP_TEST_MEDIA_ENTID']
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
  
