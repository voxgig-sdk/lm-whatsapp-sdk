import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { SendMessage, SendMessageCreateData } from '../LmWhatsappTypes';
declare class SendMessageEntity extends LmWhatsappEntityBase<SendMessage> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: SendMessageEntity): SendMessageEntity;
    create(this: any, reqdata?: SendMessageCreateData, ctrl?: Control): Promise<SendMessageEntity>;
}
export { SendMessageEntity };
