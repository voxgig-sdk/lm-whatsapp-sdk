

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


describe('SendMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
  afterEach(liveDelay('LM_WHATSAPP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LmWhatsappSDK.test()
    const ent = testsdk.SendMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'send_message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":0},"requestId":{"a":true,"fo":"uuid","h":"Request Id","n":"requestId","r":true,"sh":"Unique Id of the request made towards LINK Mobility.","t":"`$STRING`","key$":"requestId","index$":1}},"name":"send_message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /whatsapp/v2/messages","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/whatsapp/v2/messages","q":{},"r":{},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"messages"}],"t":{"req":"`reqdata.messages`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"send_message","name__orig":"send_message","Name":"SendMessage","name_":"send_message","name-":"send-message","NAME":"SEND_MESSAGE","index$":2}, {"active":true,"entity":"send_message","key$":"BasicSendMessageFlow","kind":"basic","name":"BasicSendMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"send_message_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'SendMessage', {"POST /whatsapp/v2/messages":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"required":["content","recipient"],"type":"object","properties":{"recipient":{"minLength":1,"type":"string"},"content":{"type":"object","required":["media","options"],"properties":{"media":{"oneOf":[]},"options":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/MessageOptions"}},"additionalProperties":false,"x-ref":"#/components/schemas/MessageContent"},"expiration":{"type":"object","properties":{"relative":{"type":"integer","format":"int32","maximum":172800000,"minimum":1,"description":"Time specified in milliseconds of how long the message is supposed to live. The maximum value is 48 hours (172800000 milliseconds), which is also the default."},"absolute":{"type":"string","format":"date-time","description":"Absolute time specified of when this message should expire. ISO8601 formatted string in UTC."}},"additionalProperties":false,"x-ref":"#/components/schemas/MessageExpiration"},"callback":{"type":"object","properties":{"mode":{"type":"string","enum":[],"description":"The mode for DLR delivery is determined by the profile: Callback (default callback configuration from myLINK portal), URL (using provided list), Gate (callback configuration from myLINK portal), or None (no DLR).","x-ref":"#/components/schemas/MessageCallbackMode"},"urls":{"type":[],"items":{},"description":"List of URLs to override default settings."},"gateId":{"type":[],"description":"The ID of the delivery gate to be used. Can be found in myLINK portal as callbacks."},"ttl":{"type":"integer","format":"int32","maximum":28800000,"minimum":0,"description":"Time specified in milliseconds of how long the delivery report is supposed to live. Max value: 28800000. Default value: 14400000."}},"additionalProperties":false,"x-ref":"#/components/schemas/MessageCallback"},"priority":{"enum":["Low","Normal","High"],"type":"string","description":"Set priority on your own messages. Priority only affects your own queue.","x-ref":"#/components/schemas/MessagePriority"},"referenceId":{"maxLength":500,"type":"string","description":"Your own internal transaction ID. Not used for anything except as a reference. Optional."}},"additionalProperties":false,"x-ref":"#/components/schemas/MessageRequest"},"index$":1}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const send_message_ref01_ent = client.SendMessage()
    let send_message_ref01_data = setup.data.new.send_message['send_message_ref01']

    send_message_ref01_data = (await send_message_ref01_ent.create(send_message_ref01_data)).data()
    assert(null != send_message_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/send_message/SendMessageTestData.json')

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
    ['send_message01','send_message02','send_message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LM_WHATSAPP_TEST_SEND_MESSAGE_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': '',
  })

  idmap = env['LM_WHATSAPP_TEST_SEND_MESSAGE_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LM_WHATSAPP_TEST_SEND_MESSAGE_ENTID']
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
  
