# LmWhatsapp SDK utility: prepare_body
require_relative 'media'
module LmWhatsappUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LmWhatsappUtilities.raw_body(ctx.reqdata) if LmWhatsappUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
