# LmWhatsapp SDK utility: make_context
require_relative '../core/context'
module LmWhatsappUtilities
  MakeContext = ->(ctxmap, basectx) {
    LmWhatsappContext.new(ctxmap, basectx)
  }
end
