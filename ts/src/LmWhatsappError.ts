
import { Context } from './Context'


class LmWhatsappError extends Error {

  isLmWhatsappError = true

  sdk = 'LmWhatsapp'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  LmWhatsappError
}

