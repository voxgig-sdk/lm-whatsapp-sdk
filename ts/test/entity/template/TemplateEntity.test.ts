

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
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allow_category_change","req":false,"short":"Set to true to allow to assign a category based on template guidelines and the template's contents.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"category","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"components","op":{"update":{"req":false,"type":["`$ONE`",["`$ARRAY`","`$NULL`"]]}},"req":true,"short":"Array of components that make up the template.","type":"`$ARRAY`","index$":2},{"active":true,"format":"date-time","name":"createdDate","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"ID","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":4},{"active":true,"name":"language","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"library_template_body_inputs","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"library_template_button_inputs","req":false,"short":"Optional data during creation of a template from a library template.","type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":7},{"active":true,"name":"library_template_name","req":false,"short":"Library template name","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":8},{"active":true,"format":"int64","name":"message_send_ttl_seconds","req":false,"short":"Time to live for message template sent.","type":"`$INTEGER`","index$":9},{"active":true,"format":"date-time","name":"modifiedDate","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":10},{"active":true,"name":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The message template name","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":11},{"active":true,"name":"parameter_format","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"sub_category","req":false,"type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"template","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /whatsapp/v2/templates","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"allOf\":[{\"additionalProperties\":false,\"type\":\"object\"}],\"properties\":{\"allow_category_change\":{\"description\":\"Set to true to allow to assign a category based on template guidelines and the template's contents.\\r\\nThis can prevent the template status from immediately being set to REJECTED upon creation due to miscategorization.\\r\\nIf omitted, template will not be auto-assigned a category and its status may be set to REJECTED if determined to be miscategorized.\",\"type\":\"boolean\"},\"category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"components\":{\"description\":\"Array of components that make up the template.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"buttons\":{\"description\":\"Button components to be used in the template.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"examples\":{\"description\":\"Example\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"flow_action\":{\"enum\":[\"NAVIGATE\",\"DATA_EXCHANGE\"],\"type\":\"string\"},\"flow_id\":{\"description\":\"Flow ID\",\"format\":\"int64\",\"type\":\"integer\"},\"navigate_screen\":{\"description\":\"Navigate screen\",\"type\":[\"string\",\"null\"]},\"phone_number\":{\"description\":\"Phone number\",\"type\":[\"string\",\"null\"]},\"supported_apps\":{\"description\":\"Supported apps\",\"items\":{\"additionalProperties\":false,\"properties\":{\"package_name\":{\"description\":\"Package name\",\"minLength\":1,\"type\":\"string\"},\"signature_hash\":{\"description\":\"Signature hash\",\"minLength\":1,\"type\":\"string\"}},\"required\":[\"package_name\",\"signature_hash\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"text\":{\"description\":\"Button text.\",\"type\":[\"string\",\"null\"]},\"type\":{\"enum\":[\"QUICK_REPLY\",\"URL\",\"PHONE_NUMBER\",\"OTP\",\"MPM\",\"CATALOG\",\"FLOW\",\"VOICE_CALL\",\"APP\",\"POSTBACK\"],\"type\":\"string\"},\"url\":{\"description\":\"URL\",\"type\":[\"string\",\"null\"]},\"zero_tap_terms_accepted\":{\"description\":\"Zero tap terms accepted\",\"type\":\"boolean\"}},\"required\":[\"type\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"examples\":{\"additionalProperties\":false,\"properties\":{\"body_text\":{\"description\":\"Body text\",\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":[\"array\",\"null\"]},\"header_handle\":{\"description\":\"Header handle\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"header_text\":{\"description\":\"Header text\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]}},\"type\":\"object\"},\"format\":{\"enum\":[\"TEXT\",\"IMAGE\",\"DOCUMENT\",\"VIDEO\",\"LOCATION\"],\"type\":\"string\"},\"text\":{\"description\":\"Component text.\\r\\nRequired for components with type HEADER, BODY or FOOTER.\",\"type\":[\"string\",\"null\"]},\"type\":{\"enum\":[\"GREETING\",\"HEADER\",\"BODY\",\"FOOTER\",\"BUTTONS\",\"CAROUSEL\",\"LIMITED_TIME_OFFER\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"language\":{\"enum\":[\"af\",\"sq\",\"ar\",\"az\",\"bn\",\"bg\",\"ca\",\"zh_CN\",\"zh_HK\",\"zh_TW\",\"hr\",\"cs\",\"da\",\"nl\",\"en\",\"en_GB\",\"en_US\",\"et\",\"fil\",\"fi\",\"fr\",\"de\",\"el\",\"gu\",\"ha\",\"he\",\"hi\",\"hu\",\"id\",\"ga\",\"it\",\"ja\",\"kn\",\"kk\",\"ko\",\"lo\",\"lv\",\"lt\",\"mk\",\"ms\",\"ml\",\"mr\",\"nb\",\"fa\",\"pl\",\"pt_BR\",\"pt_PT\",\"pa\",\"ro\",\"ru\",\"sr\",\"sk\",\"sl\",\"es\",\"es_AR\",\"es_ES\",\"es_MX\",\"sw\",\"sv\",\"ta\",\"te\",\"th\",\"tr\",\"uk\",\"ur\",\"uz\",\"vi\",\"zu\"],\"type\":\"string\"},\"library_template_body_inputs\":{\"additionalProperties\":false,\"properties\":{\"add_contact_number\":{\"description\":\"Add contact number\",\"type\":\"boolean\"},\"add_learn_more_link\":{\"description\":\"Add learn more link\",\"type\":\"boolean\"},\"add_security_recommendation\":{\"description\":\"Add security recommendation\",\"type\":\"boolean\"},\"add_track_package_link\":{\"description\":\"Add track package link\",\"type\":\"boolean\"},\"code_expiration_minutes\":{\"description\":\"Code expiration minutes\",\"format\":\"int64\",\"type\":\"integer\"}},\"type\":\"object\"},\"library_template_button_inputs\":{\"description\":\"Optional data during creation of a template from a library template.\\r\\nThese are optional fields for the button component.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"otp_type\":{\"enum\":[\"COPY_CODE\",\"ONE_TAP\",\"ZERO_TAP\"],\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number\",\"type\":[\"string\",\"null\"]},\"supported_apps\":{\"description\":\"Supported apps\",\"items\":{\"additionalProperties\":false,\"properties\":{\"package_name\":{\"description\":\"Package name\",\"minLength\":1,\"type\":\"string\"},\"signature_hash\":{\"description\":\"Signature hash\",\"minLength\":1,\"type\":\"string\"}},\"required\":[\"package_name\",\"signature_hash\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"type\":{\"enum\":[\"QUICK_REPLY\",\"URL\",\"PHONE_NUMBER\",\"OTP\",\"MPM\",\"CATALOG\",\"FLOW\",\"VOICE_CALL\",\"APP\",\"POSTBACK\"],\"type\":\"string\"},\"url\":{\"additionalProperties\":false,\"properties\":{\"base_url\":{\"description\":\"Base URL\",\"minLength\":1,\"type\":\"string\"},\"url_suffix_example\":{\"description\":\"URL suffix example\",\"type\":[\"string\",\"null\"]}},\"required\":[\"base_url\"],\"type\":\"object\"},\"zero_tap_terms_accepted\":{\"description\":\"Zero tap terms accepted\",\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"library_template_name\":{\"description\":\"Library template name\",\"type\":[\"string\",\"null\"]},\"message_send_ttl_seconds\":{\"description\":\"Time to live for message template sent.\\r\\nIf users are offline for more than TTL duration after message template is sent, we will retry the delivery for a period of time known as a time-to-live, TTL, or the message validity period.\\r\\nTTL can be configured for certain message types.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"Template name\",\"minLength\":1,\"type\":\"string\"},\"parameter_format\":{\"enum\":[\"NAMED\",\"POSITIONAL\"],\"type\":\"string\"},\"sub_category\":{\"enum\":[\"ORDER_DETAILS\",\"ORDER_STATUS\"],\"type\":\"string\"}},\"required\":[\"category\",\"components\",\"language\",\"name\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"allOf\":[{\"additionalProperties\":false,\"type\":\"object\"}],\"properties\":{\"category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"createdDate\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"ID\",\"type\":[\"string\",\"null\"]},\"language\":{\"enum\":[\"af\",\"sq\",\"ar\",\"az\",\"bn\",\"bg\",\"ca\",\"zh_CN\",\"zh_HK\",\"zh_TW\",\"hr\",\"cs\",\"da\",\"nl\",\"en\",\"en_GB\",\"en_US\",\"et\",\"fil\",\"fi\",\"fr\",\"de\",\"el\",\"gu\",\"ha\",\"he\",\"hi\",\"hu\",\"id\",\"ga\",\"it\",\"ja\",\"kn\",\"kk\",\"ko\",\"lo\",\"lv\",\"lt\",\"mk\",\"ms\",\"ml\",\"mr\",\"nb\",\"fa\",\"pl\",\"pt_BR\",\"pt_PT\",\"pa\",\"ro\",\"ru\",\"sr\",\"sk\",\"sl\",\"es\",\"es_AR\",\"es_ES\",\"es_MX\",\"sw\",\"sv\",\"ta\",\"te\",\"th\",\"tr\",\"uk\",\"ur\",\"uz\",\"vi\",\"zu\"],\"type\":\"string\"},\"modifiedDate\":{\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"The message template name\",\"type\":[\"string\",\"null\"]},\"status\":{\"enum\":[\"APPROVED\",\"IN_APPEAL\",\"PENDING\",\"REJECTED\",\"PENDING_DELETION\",\"DELETED\",\"DISABLED\",\"PAUSED\",\"LIMIT_EXCEEDED\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Forbidden\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Too Many Requests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"}},\"security\":[{\"Bearer\":[]}],\"securitySchemes\":{\"Bearer\":{\"description\":\"Bearer token\",\"flows\":{\"clientCredentials\":{\"scopes\":{},\"tokenUrl\":\"https://sso.linkmobility.com/auth/realms/CPaaS/protocol/openid-connect/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/whatsapp/v2/templates","segments":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"}],"select":{},"transform":{"req":{"allow_category_change":"`reqdata.allow_category_change`","category":"`reqdata.category`","components":"`reqdata.component`","language":"`reqdata.language`","library_template_body_inputs":"`reqdata.library_template_body_input`","library_template_button_inputs":"`reqdata.library_template_button_input`","library_template_name":"`reqdata.library_template_name`","message_send_ttl_seconds":"`reqdata.message_send_ttl_second`","name":"`reqdata.name`","parameter_format":"`reqdata.parameter_format`","sub_category":"`reqdata.sub_category`"},"res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /whatsapp/v2/templates/{id}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"allOf\":[{\"additionalProperties\":false,\"type\":\"object\"}],\"properties\":{\"category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"components\":{\"description\":\"The array containing all the content of the message template\",\"items\":{\"additionalProperties\":false,\"properties\":{\"buttons\":{\"description\":\"Button components to be used in the template.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"examples\":{\"description\":\"Example\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"flow_action\":{\"enum\":[\"NAVIGATE\",\"DATA_EXCHANGE\"],\"type\":\"string\"},\"flow_id\":{\"description\":\"Flow ID\",\"format\":\"int64\",\"type\":\"integer\"},\"navigate_screen\":{\"description\":\"Navigate screen\",\"type\":[\"string\",\"null\"]},\"phone_number\":{\"description\":\"Phone number\",\"type\":[\"string\",\"null\"]},\"supported_apps\":{\"description\":\"Supported apps\",\"items\":{\"additionalProperties\":false,\"properties\":{\"package_name\":{\"description\":\"Package name\",\"minLength\":1,\"type\":\"string\"},\"signature_hash\":{\"description\":\"Signature hash\",\"minLength\":1,\"type\":\"string\"}},\"required\":[\"package_name\",\"signature_hash\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"text\":{\"description\":\"Button text.\",\"type\":[\"string\",\"null\"]},\"type\":{\"enum\":[\"QUICK_REPLY\",\"URL\",\"PHONE_NUMBER\",\"OTP\",\"MPM\",\"CATALOG\",\"FLOW\",\"VOICE_CALL\",\"APP\",\"POSTBACK\"],\"type\":\"string\"},\"url\":{\"description\":\"URL\",\"type\":[\"string\",\"null\"]},\"zero_tap_terms_accepted\":{\"description\":\"Zero tap terms accepted\",\"type\":\"boolean\"}},\"required\":[\"type\"],\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"examples\":{\"additionalProperties\":false,\"properties\":{\"body_text\":{\"description\":\"Body text\",\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":[\"array\",\"null\"]},\"header_handle\":{\"description\":\"Header handle\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"header_text\":{\"description\":\"Header text\",\"items\":{\"type\":\"string\"},\"type\":[\"array\",\"null\"]}},\"type\":\"object\"},\"format\":{\"enum\":[\"TEXT\",\"IMAGE\",\"DOCUMENT\",\"VIDEO\",\"LOCATION\"],\"type\":\"string\"},\"text\":{\"description\":\"Component text.\\r\\nRequired for components with type HEADER, BODY or FOOTER.\",\"type\":[\"string\",\"null\"]},\"type\":{\"enum\":[\"GREETING\",\"HEADER\",\"BODY\",\"FOOTER\",\"BUTTONS\",\"CAROUSEL\",\"LIMITED_TIME_OFFER\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":[\"array\",\"null\"]},\"message_send_ttl_seconds\":{\"description\":\"Template message delivery retry time-to-live (TTL) override value.\\r\\nIf we are unable to deliver a message to a WhatsApp user, we will retry the delivery for a period of time known as a time-to-live, TTL, or the message validity period.\\r\\nTTL can be configured for certain message types.\",\"format\":\"int32\",\"type\":\"integer\"},\"parameter_format\":{\"enum\":[\"NAMED\",\"POSITIONAL\"],\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"allOf\":[{\"additionalProperties\":false,\"type\":\"object\"}],\"properties\":{\"category\":{\"enum\":[\"AUTHENTICATION\",\"MARKETING\",\"UTILITY\"],\"type\":\"string\"},\"createdDate\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"ID\",\"type\":[\"string\",\"null\"]},\"language\":{\"enum\":[\"af\",\"sq\",\"ar\",\"az\",\"bn\",\"bg\",\"ca\",\"zh_CN\",\"zh_HK\",\"zh_TW\",\"hr\",\"cs\",\"da\",\"nl\",\"en\",\"en_GB\",\"en_US\",\"et\",\"fil\",\"fi\",\"fr\",\"de\",\"el\",\"gu\",\"ha\",\"he\",\"hi\",\"hu\",\"id\",\"ga\",\"it\",\"ja\",\"kn\",\"kk\",\"ko\",\"lo\",\"lv\",\"lt\",\"mk\",\"ms\",\"ml\",\"mr\",\"nb\",\"fa\",\"pl\",\"pt_BR\",\"pt_PT\",\"pa\",\"ro\",\"ru\",\"sr\",\"sk\",\"sl\",\"es\",\"es_AR\",\"es_ES\",\"es_MX\",\"sw\",\"sv\",\"ta\",\"te\",\"th\",\"tr\",\"uk\",\"ur\",\"uz\",\"vi\",\"zu\"],\"type\":\"string\"},\"modifiedDate\":{\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"name\":{\"description\":\"The message template name\",\"type\":[\"string\",\"null\"]},\"status\":{\"enum\":[\"APPROVED\",\"IN_APPEAL\",\"PENDING\",\"REJECTED\",\"PENDING_DELETION\",\"DELETED\",\"DISABLED\",\"PAUSED\",\"LIMIT_EXCEEDED\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Forbidden\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Too Many Requests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Unique Link Message ID generated as part of the processing the request.\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Recipient of the message as submitted in the corresponding Message.\",\"type\":[\"string\",\"null\"]}}}}},\"description\":\"Server Error\"}},\"security\":[{\"Bearer\":[]}],\"securitySchemes\":{\"Bearer\":{\"description\":\"Bearer token\",\"flows\":{\"clientCredentials\":{\"scopes\":{},\"tokenUrl\":\"https://sso.linkmobility.com/auth/realms/CPaaS/protocol/openid-connect/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/whatsapp/v2/templates/{id}","segments":[{"lit":"whatsapp"},{"lit":"v2"},{"lit":"templates"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":{"category":"`reqdata.category`","components":"`reqdata.component`","message_send_ttl_seconds":"`reqdata.message_send_ttl_second`","parameter_format":"`reqdata.parameter_format`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"template","name__orig":"template","Name":"Template","name_":"template","name-":"template","NAME":"TEMPLATE","index$":3}, {"active":true,"entity":"template","key$":"BasicTemplateFlow","kind":"basic","name":"BasicTemplateFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"template_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"template_ref01","srcdatavar":"template_ref01_data","suffix":"_up0","textfield":"category"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-template_ref01"}}],"valid":[],"index$":1}]}, 'Template')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const template_ref01_ent = client.Template()
    let template_ref01_data = setup.data.new.template['template_ref01']

    template_ref01_data = (await template_ref01_ent.create(template_ref01_data)).data()
    assert(null != template_ref01_data.id)


    // UPDATE
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
  
