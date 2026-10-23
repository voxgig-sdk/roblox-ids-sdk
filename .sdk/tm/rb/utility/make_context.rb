# RobloxIds SDK utility: make_context
require_relative '../core/context'
module RobloxIdsUtilities
  MakeContext = ->(ctxmap, basectx) {
    RobloxIdsContext.new(ctxmap, basectx)
  }
end
