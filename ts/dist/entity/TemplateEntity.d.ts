import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { Template, TemplateCreateData, TemplateUpdateData } from '../LmWhatsappTypes';
declare class TemplateEntity extends LmWhatsappEntityBase<Template> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    create(this: any, reqdata?: TemplateCreateData, ctrl?: Control): Promise<Template>;
    update(this: any, reqdata?: TemplateUpdateData, ctrl?: Control): Promise<Template>;
}
export { TemplateEntity };
