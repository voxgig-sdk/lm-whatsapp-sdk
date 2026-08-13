import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { ManageTemplate, ManageTemplateRemoveMatch } from '../LmWhatsappTypes';
declare class ManageTemplateEntity extends LmWhatsappEntityBase<ManageTemplate> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: ManageTemplateEntity): ManageTemplateEntity;
    remove(this: any, reqmatch?: ManageTemplateRemoveMatch, ctrl?: Control): Promise<ManageTemplate>;
}
export { ManageTemplateEntity };
