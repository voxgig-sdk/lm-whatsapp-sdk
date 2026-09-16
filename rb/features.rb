# LmWhatsapp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LmWhatsappFeatures
  def self.make_feature(name)
    case name
    when "base"
      LmWhatsappBaseFeature.new
    when "debug"
      LmWhatsappDebugFeature.new
    when "idempotency"
      LmWhatsappIdempotencyFeature.new
    when "metrics"
      LmWhatsappMetricsFeature.new
    when "paging"
      LmWhatsappPagingFeature.new
    when "ratelimit"
      LmWhatsappRatelimitFeature.new
    when "retry"
      LmWhatsappRetryFeature.new
    when "test"
      LmWhatsappTestFeature.new
    when "timeout"
      LmWhatsappTimeoutFeature.new
    else
      LmWhatsappBaseFeature.new
    end
  end
end
