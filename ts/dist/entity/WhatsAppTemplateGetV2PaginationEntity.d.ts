import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { WhatsAppTemplateGetV2Pagination, WhatsAppTemplateGetV2PaginationLoadMatch } from '../LmWhatsappTypes';
declare class WhatsAppTemplateGetV2PaginationEntity extends LmWhatsappEntityBase<WhatsAppTemplateGetV2Pagination> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: WhatsAppTemplateGetV2PaginationEntity): WhatsAppTemplateGetV2PaginationEntity;
    load(this: any, reqmatch?: WhatsAppTemplateGetV2PaginationLoadMatch, ctrl?: Control): Promise<WhatsAppTemplateGetV2Pagination>;
}
export { WhatsAppTemplateGetV2PaginationEntity };
