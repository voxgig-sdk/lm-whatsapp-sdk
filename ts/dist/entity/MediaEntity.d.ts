import { LmWhatsappEntityBase } from '../LmWhatsappEntityBase';
import type { LmWhatsappSDK } from '../LmWhatsappSDK';
import type { Control } from '../types';
import type { Media, MediaCreateData } from '../LmWhatsappTypes';
declare class MediaEntity extends LmWhatsappEntityBase<Media> {
    constructor(client: LmWhatsappSDK, entopts: any);
    make(this: MediaEntity): MediaEntity;
    create(this: any, reqdata?: MediaCreateData, ctrl?: Control): Promise<Media>;
}
export { MediaEntity };
