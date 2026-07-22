-- LmWhatsapp SDK error

local LmWhatsappError = {}
LmWhatsappError.__index = LmWhatsappError


function LmWhatsappError.new(code, msg, ctx)
  local self = setmetatable({}, LmWhatsappError)
  self.is_sdk_error = true
  self.sdk = "LmWhatsapp"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function LmWhatsappError:error()
  return self.msg
end


function LmWhatsappError:__tostring()
  return self.msg
end


return LmWhatsappError
