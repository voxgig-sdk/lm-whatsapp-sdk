

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


describe('ManageTemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LM_WHATSAPP_TEST_LIVE=TRUE.
  afterEach(liveDelay('LM_WHATSAPP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LmWhatsappSDK.test()
    const ent = testsdk.ManageTemplate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LM_WHATSAPP_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'manage_template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_category_change":{"a":true,"h":"Allow Category Change","n":"allow_category_change","r":false,"sh":"Set to true to allow to assign a category based on template guidelines and the template's contents.","t":"`$BOOLEAN`","key$":"allow_category_change","index$":0},"category":{"a":true,"h":"Category","n":"category","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"category","index$":1},"components":{"a":true,"h":"Components","n":"components","r":true,"sh":"Array of components that make up the template.","t":"`$ARRAY`","key$":"components","index$":2},"createdDate":{"a":true,"fo":"date-time","h":"Created Date","n":"createdDate","r":false,"t":"`$STRING`","key$":"createdDate","index$":3},"currentPage":{"a":true,"fo":"int32","h":"Current Page","n":"currentPage","r":false,"t":"`$INTEGER`","key$":"currentPage","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"ID","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"id","index$":5},"items":{"a":true,"h":"Items","n":"items","r":false,"t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"items","index$":6},"language":{"a":true,"h":"Language","n":"language","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"language","index$":7},"library_template_body_inputs":{"a":true,"h":"Library Template Body Inputs","n":"library_template_body_inputs","r":false,"t":"`$OBJECT`","key$":"library_template_body_inputs","index$":8},"library_template_button_inputs":{"a":true,"h":"Library Template Button Inputs","n":"library_template_button_inputs","r":false,"sh":"Optional data during creation of a template from a library template.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"library_template_button_inputs","index$":9},"library_template_name":{"a":true,"h":"Library Template Name","n":"library_template_name","r":false,"sh":"Library template name","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"library_template_name","index$":10},"message_send_ttl_seconds":{"a":true,"fo":"int64","h":"Message Send Ttl Seconds","n":"message_send_ttl_seconds","r":false,"sh":"Time to live for message template sent.","t":"`$INTEGER`","key$":"message_send_ttl_seconds","index$":11},"modifiedDate":{"a":true,"fo":"date-time","h":"Modified Date","n":"modifiedDate","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"modifiedDate","index$":12},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The message template name","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"name","index$":13},"pages":{"a":true,"fo":"int32","h":"Pages","n":"pages","r":false,"t":"`$INTEGER`","key$":"pages","index$":14},"parameter_format":{"a":true,"h":"Parameter Format","n":"parameter_format","r":false,"t":"`$STRING`","key$":"parameter_format","index$":15},"results":{"a":true,"fo":"int32","h":"Results","n":"results","r":false,"t":"`$INTEGER`","key$":"results","index$":16},"resultsPerPage":{"a":true,"fo":"int32","h":"Results Per Page","n":"resultsPerPage","r":false,"t":"`$INTEGER`","key$":"resultsPerPage","index$":17},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":18},"sub_category":{"a":true,"h":"Sub Category","n":"sub_category","r":false,"t":"`$STRING`","key$":"sub_category","index$":19}},"id":{"field":"id","name":"id"},"name":"manage_template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /whatsapp/v2/templates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/whatsapp/v2/templates","q":{},"r":{},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"}],"t":{"req":{"allow_category_change":"`reqdata.allow_category_change`","category":"`reqdata.category`","components":"`reqdata.component`","language":"`reqdata.language`","library_template_body_inputs":"`reqdata.library_template_body_input`","library_template_button_inputs":"`reqdata.library_template_button_input`","library_template_name":"`reqdata.library_template_name`","message_send_ttl_seconds":"`reqdata.message_send_ttl_second`","name":"`reqdata.name`","parameter_format":"`reqdata.parameter_format`","sub_category":"`reqdata.sub_category`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /whatsapp/v2/templates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":25,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":2}]},"k":"http","m":"GET","o":"/whatsapp/v2/templates","q":{"exist":["page","size","sort"]},"r":{},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /whatsapp/v2/templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/whatsapp/v2/templates/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"manage_template","name__orig":"manage_template","Name":"ManageTemplate","name_":"manage_template","name-":"manage-template","NAME":"MANAGE_TEMPLATE","index$":0}, {"active":true,"entity":"manage_template","key$":"BasicManageTemplateFlow","kind":"basic","name":"BasicManageTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"manage_template_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"manage_template_ref01","srcdatavar":"manage_template_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-manage_template_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"manage_template_ref01","suffix":"_rm0"},"m":{"id":"manage_template01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'ManageTemplate', {"POST /whatsapp/v2/templates":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["category","components","language","name"],"type":"object","allOf":[{"type":"object","additionalProperties":false,"x-ref":"#/components/schemas/TemplateMessagePost"}],"properties":{"allow_category_change":{"type":"boolean","description":"Set to true to allow to assign a category based on template guidelines and the template's contents.\r\nThis can prevent the template status from immediately being set to REJECTED upon creation due to miscategorization.\r\nIf omitted, template will not be auto-assigned a category and its status may be set to REJECTED if determined to be miscategorized.","key$":"allow_category_change"},"category":{"enum":["AUTHENTICATION","MARKETING","UTILITY"],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateCategoryV2","key$":"category"},"components":{"type":"array","items":{"type":"object","properties":{"type":{"enum":[],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateComponentTypeV2"},"format":{"enum":[],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateComponentFormatV2"},"text":{"type":[],"description":"Component text.\r\nRequired for components with type HEADER, BODY or FOOTER."},"buttons":{"type":[],"items":{},"description":"Button components to be used in the template."},"examples":{"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateComponentExampleV2"}},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateComponentV2"},"description":"Array of components that make up the template.","key$":"components"},"language":{"enum":["af","sq","ar","az","bn","bg","ca","zh_CN","zh_HK","zh_TW","hr","cs","da","nl","en","en_GB","en_US","et","fil","fi","fr","de","el","gu","ha","he","hi","hu","id","ga","it","ja","kn","kk","ko","lo","lv","lt","mk","ms","ml","mr","nb","fa","pl","pt_BR","pt_PT","pa","ro","ru","sr","sk","sl","es","es_AR","es_ES","es_MX","sw","sv","ta","te","th","tr","uk","ur","uz","vi","zu"],"type":"string","x-ref":"#/components/schemas/Language","key$":"language"},"library_template_body_inputs":{"type":"object","properties":{"add_contact_number":{"type":"boolean","description":"Add contact number"},"add_learn_more_link":{"type":"boolean","description":"Add learn more link"},"add_security_recommendation":{"type":"boolean","description":"Add security recommendation"},"add_track_package_link":{"type":"boolean","description":"Add track package link"},"code_expiration_minutes":{"type":"integer","description":"Code expiration minutes","format":"int64"}},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateBodyInputV2","key$":"library_template_body_inputs"},"library_template_button_inputs":{"type":["array","null"],"items":{"type":"object","properties":{"type":{"enum":[],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateInputTypeV2"},"phone_number":{"type":[],"description":"Phone number"},"url":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateButtonInputUrlV2"},"otp_type":{"enum":[],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateButtonInputOtpTypeV2"},"zero_tap_terms_accepted":{"type":"boolean","description":"Zero tap terms accepted"},"supported_apps":{"type":[],"items":{},"description":"Supported apps"}},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplateButtonInputV2"},"description":"Optional data during creation of a template from a library template.\r\nThese are optional fields for the button component.","key$":"library_template_button_inputs"},"library_template_name":{"type":["string","null"],"description":"Library template name","key$":"library_template_name"},"message_send_ttl_seconds":{"type":"integer","description":"Time to live for message template sent.\r\nIf users are offline for more than TTL duration after message template is sent, we will retry the delivery for a period of time known as a time-to-live, TTL, or the message validity period.\r\nTTL can be configured for certain message types.","format":"int64","key$":"message_send_ttl_seconds"},"name":{"minLength":1,"type":"string","description":"Template name","key$":"name"},"parameter_format":{"enum":["NAMED","POSITIONAL"],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateParameterFormatV2","key$":"parameter_format"},"sub_category":{"enum":["ORDER_DETAILS","ORDER_STATUS"],"type":"string","x-ref":"#/components/schemas/WhatsAppTemplateSubCategoryV2","key$":"sub_category"}},"additionalProperties":false,"x-ref":"#/components/schemas/WhatsAppTemplatePostV2","index$":1}}}},"parameters":[]},"GET /whatsapp/v2/templates":{"protocol":"http","parameters":[{"name":"sort","in":"query","description":"List of fields used to sort results","schema":{"type":"array","items":{"type":"string"}},"index$":0},{"name":"page","in":"query","description":"Requested page","schema":{"type":"integer","format":"int32","default":1},"index$":1},{"name":"size","in":"query","description":"Number of items per page","schema":{"maximum":100,"minimum":0,"type":"integer","format":"int32","default":25},"index$":2}]},"DELETE /whatsapp/v2/templates/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const manage_template_ref01_ent = client.ManageTemplate()
    let manage_template_ref01_data = setup.data.new.manage_template['manage_template_ref01']

    manage_template_ref01_data = (await manage_template_ref01_ent.create(manage_template_ref01_data)).data()
    assert(null != manage_template_ref01_data.id)


    // LOAD
    const manage_template_ref01_match_dt0: any = {}
    manage_template_ref01_match_dt0.id = manage_template_ref01_data.id
    const manage_template_ref01_data_dt0 = (await manage_template_ref01_ent.load(manage_template_ref01_match_dt0)).data()
    assert(manage_template_ref01_data_dt0.id === manage_template_ref01_data.id)


    // REMOVE
    const manage_template_ref01_match_rm0: any = { id: manage_template_ref01_data.id }
    await manage_template_ref01_ent.remove(manage_template_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/manage_template/ManageTemplateTestData.json')

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
    ['manage_template01','manage_template02','manage_template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID': idmap,
    'LM_WHATSAPP_TEST_LIVE': 'FALSE',
    'LM_WHATSAPP_TEST_EXPLAIN': 'FALSE',
    'LM_WHATSAPP_APIKEY': '',
  })

  idmap = env['LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID']

  const live = 'TRUE' === env.LM_WHATSAPP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LM_WHATSAPP_TEST_MANAGE_TEMPLATE_ENTID']
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
  
