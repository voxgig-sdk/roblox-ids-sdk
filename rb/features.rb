# RobloxIds SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RobloxIdsFeatures
  def self.make_feature(name)
    case name
    when "base"
      RobloxIdsBaseFeature.new
    when "ratelimit"
      RobloxIdsRatelimitFeature.new
    when "retry"
      RobloxIdsRetryFeature.new
    when "test"
      RobloxIdsTestFeature.new
    when "timeout"
      RobloxIdsTimeoutFeature.new
    else
      RobloxIdsBaseFeature.new
    end
  end
end
