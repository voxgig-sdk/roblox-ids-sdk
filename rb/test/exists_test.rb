# RobloxIds SDK exists test

require "minitest/autorun"
require_relative "../RobloxIds_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RobloxIdsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
