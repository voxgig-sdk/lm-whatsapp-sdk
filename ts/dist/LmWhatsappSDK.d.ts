import { ManageTemplateEntity } from './entity/ManageTemplateEntity';
import { MediaEntity } from './entity/MediaEntity';
import { SendMessageEntity } from './entity/SendMessageEntity';
import { TemplateEntity } from './entity/TemplateEntity';
import { WhatsAppTemplateGetV2Entity } from './entity/WhatsAppTemplateGetV2Entity';
import { WhatsAppTemplateGetV2PaginationEntity } from './entity/WhatsAppTemplateGetV2PaginationEntity';
export type * from './LmWhatsappTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { LmWhatsappEntityBase } from './LmWhatsappEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class LmWhatsappSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    ManageTemplate(data?: any): ManageTemplateEntity;
    Media(data?: any): MediaEntity;
    SendMessage(data?: any): SendMessageEntity;
    Template(data?: any): TemplateEntity;
    WhatsAppTemplateGetV2(data?: any): WhatsAppTemplateGetV2Entity;
    WhatsAppTemplateGetV2Pagination(data?: any): WhatsAppTemplateGetV2PaginationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): LmWhatsappSDK;
    tester(testopts?: any, sdkopts?: any): LmWhatsappSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof LmWhatsappSDK;
export { stdutil, config, BaseFeature, LmWhatsappEntityBase, LmWhatsappSDK, SDK, };
