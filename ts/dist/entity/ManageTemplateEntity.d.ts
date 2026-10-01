import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { ManageTemplate, ManageTemplateLoadMatch, ManageTemplateCreateData, ManageTemplateRemoveMatch } from '../LmWhatsappTypes';
declare class ManageTemplateEntity extends LmWhatsappEntityBase<ManageTemplate> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: ManageTemplateEntity): ManageTemplateEntity;
    load(this: any, reqmatch?: ManageTemplateLoadMatch, ctrl?: Control): Promise<ManageTemplateEntity>;
    create(this: any, reqdata?: ManageTemplateCreateData, ctrl?: Control): Promise<ManageTemplateEntity>;
    remove(this: any, reqmatch?: ManageTemplateRemoveMatch, ctrl?: Control): Promise<ManageTemplateEntity>;
}
export { ManageTemplateEntity };
