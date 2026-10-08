import { ManageTemplateEntity } from './entity/ManageTemplateEntity';
import { MediaEntity } from './entity/MediaEntity';
import { SendMessageEntity } from './entity/SendMessageEntity';
import { TemplateEntity } from './entity/TemplateEntity';
import { WhatsAppTemplateGetV2Entity } from './entity/WhatsAppTemplateGetV2Entity';
export type * from './LmWhatsappTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { LmWhatsappEntityBase } from './LmWhatsappEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
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
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    ManageTemplate(entopts?: Record<string, any>): ManageTemplateEntity;
    Media(entopts?: Record<string, any>): MediaEntity;
    SendMessage(entopts?: Record<string, any>): SendMessageEntity;
    Template(entopts?: Record<string, any>): TemplateEntity;
    WhatsAppTemplateGetV2(entopts?: Record<string, any>): WhatsAppTemplateGetV2Entity;
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
export type { DirectResult };
