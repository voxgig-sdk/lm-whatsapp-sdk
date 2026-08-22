import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { WhatsAppTemplateGetV2, WhatsAppTemplateGetV2LoadMatch } from '../LmWhatsappTypes';
declare class WhatsAppTemplateGetV2Entity extends LmWhatsappEntityBase<WhatsAppTemplateGetV2> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: WhatsAppTemplateGetV2Entity): WhatsAppTemplateGetV2Entity;
    load(this: any, reqmatch?: WhatsAppTemplateGetV2LoadMatch, ctrl?: Control): Promise<WhatsAppTemplateGetV2Entity>;
}
export { WhatsAppTemplateGetV2Entity };
