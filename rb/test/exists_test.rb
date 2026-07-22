# LmWhatsapp SDK exists test

require "minitest/autorun"
require_relative "../LmWhatsapp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LmWhatsappSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
