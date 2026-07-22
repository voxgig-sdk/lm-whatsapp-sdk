-- LmWhatsapp SDK exists test

local sdk = require("lm-whatsapp_sdk")

describe("LmWhatsappSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
