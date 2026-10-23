# RobloxIds SDK utility: prepare_body
require_relative 'media'
module RobloxIdsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RobloxIdsUtilities.raw_body(ctx.reqdata) if RobloxIdsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
