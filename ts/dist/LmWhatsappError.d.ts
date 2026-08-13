import { Context } from './Context';
declare class LmWhatsappError extends Error {
    isLmWhatsappError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    constructor(code: string, msg: string, ctx: Context);
}
export { LmWhatsappError };
