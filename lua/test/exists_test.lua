-- RobloxIds SDK exists test

local sdk = require("roblox-ids_sdk")

describe("RobloxIdsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
