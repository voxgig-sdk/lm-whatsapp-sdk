import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { Template, TemplateUpdateData } from '../LmWhatsappTypes';
declare class TemplateEntity extends LmWhatsappEntityBase<Template> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    update(this: any, reqdata?: TemplateUpdateData, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
