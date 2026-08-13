"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmWhatsappError = void 0;
class LmWhatsappError extends Error {
    isLmWhatsappError = true;
    sdk = 'LmWhatsapp';
    code;
    ctx;
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.LmWhatsappError = LmWhatsappError;
//# sourceMappingURL=LmWhatsappError.js.map