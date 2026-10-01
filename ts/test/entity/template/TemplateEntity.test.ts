

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


describe('TemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
  afterEach(liveDelay('LM_WHATSAPP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LmWhatsappSDK.test()
    const ent = testsdk.Template()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":0},"components":{"a":true,"h":"Components","n":"components","r":false,"sh":"The array containing all the content of the message template","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"components","index$":1},"createdDate":{"a":true,"fo":"date-time","h":"Created Date","n":"createdDate","r":false,"t":"`$STRING`","key$":"createdDate","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"ID","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"id","index$":3},"language":{"a":true,"h":"Language","n":"language","r":false,"t":"`$STRING`","key$":"language","index$":4},"message_send_ttl_seconds":{"a":true,"fo":"int32","h":"Message Send Ttl Seconds","n":"message_send_ttl_seconds","r":false,"sh":"Template message delivery retry time-to-live (TTL) override value.","t":"`$INTEGER`","key$":"message_send_ttl_seconds","index$":5},"modifiedDate":{"a":true,"fo":"date-time","h":"Modified Date","n":"modifiedDate","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"modifiedDate","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The message template name","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"name","index$":7},"parameter_format":{"a":true,"h":"Parameter Format","n":"parameter_format","r":false,"t":"`$STRING`","key$":"parameter_format","index$":8},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":9}},"id":{"field":"id","name":"id"},"name":"template","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /whatsapp/v2/templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/whatsapp/v2/templates/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"},{"var":"id"}],"t":{"req":{"category":"`reqdata.category`","components":"`reqdata.component`","message_send_ttl_seconds":"`reqdata.message_send_ttl_second`","parameter_format":"`reqdata.parameter_format`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"template","name__orig":"template","Name":"Template","name_":"template","name-":"template","NAME":"TEMPLATE","index$":3}, {"active":true,"entity":"template","key$":"BasicTemplateFlow","kind":"basic","name":"BasicTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"template_ref01","srcdatavar":"template_ref01_data","suffix":"_up0","textfield":"category"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-template_ref01"}}],"v":[],"index$":0}]}, 'Template', {"PUT /whatsapp/v2/templates/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","allOf":[{"type":"object","additionalProperties":false,"x-ref":"#/components/schemas/TemplateMessagePut"}],"properties":{"category":{"enum":["AUTHENTICATION","MARKETING","UTILITY"],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateCategoryV2","key$":"category"},"components":{"type":["array","null"],"items":{"type":"object","properties":{"type":{"enum":[],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateComponentTypeV2"},"format":{"enum":[],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateComponentFormatV2"},"text":{"type":[],"description":"Component text.\r\nRequired for components with type HEADER, BODY or FOOTER."},"buttons":{"type":[],"items":{},"description":"Button components to be used in the template."},"examples":{"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateComponentExampleV2"}},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateComponentV2"},"description":"The array containing all the content of the message template","key$":"components"},"message_send_ttl_seconds":{"type":"integer","description":"Template message delivery retry time-to-live (TTL) override value.\r\nIf we are unable to deliver a message to a WhatsApp user, we will retry the delivery for a period of time known as a time-to-live, TTL, or the message validity period.\r\nTTL can be configured for certain message types.","format":"int32","key$":"message_send_ttl_seconds"},"parameter_format":{"enum":["NAMED","POSITIONAL"],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateParameterFormatV2","key$":"parameter_format"}},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplatePutV2","index$":1}}}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let template_ref01_data = Object.values(setup.data.existing.template)[0] as any

    // UPDATE
    const template_ref01_ent = client.Template()
    const template_ref01_data_up0: any = {}
    template_ref01_data_up0.id = template_ref01_data.id

    const template_ref01_markdef_up0 = { name: 'category', value: 'Mark01-template_ref01_' + setup.now }
    ;(template_ref01_data_up0 as any)[template_ref01_markdef_up0.name] = template_ref01_markdef_up0.value

    const template_ref01_resdata_up0 = (await template_ref01_ent.update(template_ref01_data_up0)).data()
    assert(template_ref01_resdata_up0.id === template_ref01_data_up0.id)

    assert((template_ref01_resdata_up0 as any)[template_ref01_markdef_up0.name] === template_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/template/TemplateTestData.json')

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
    ['template01','template02','template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LM_WHATSAPP_TEST_TEMPLATE_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': '',
  })

  idmap = env['LM_WHATSAPP_TEST_TEMPLATE_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LM_WHATSAPP_TEST_TEMPLATE_ENTID']
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
  
