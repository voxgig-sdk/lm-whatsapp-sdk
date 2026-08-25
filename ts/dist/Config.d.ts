import { BaseFeature } from './feature/base/BaseFeature';
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
            transport: string;
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            manage_template: {};
            media: {};
            send_message: {};
            template: {};
            whats_app_template_get_v2: {};
            whats_app_template_get_v2_pagination: {};
        };
    };
    entity: {
        manage_template: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        media: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            header: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                phoneNumber: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        send_message: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        template: {
            fields: ({
                name: string;
                short: string;
                type: string;
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                };
                type: string;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: (string | string[])[];
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                type: string;
                short?: undefined;
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                short: string;
                type: (string | string[])[];
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                type: (string | string[])[];
                short?: undefined;
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                };
                short: string;
                type: (string | string[])[];
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                allow_category_change: string;
                                category: string;
                                components: string;
                                language: string;
                                library_template_body_inputs: string;
                                library_template_button_inputs: string;
                                library_template_name: string;
                                message_send_ttl_seconds: string;
                                name: string;
                                parameter_format: string;
                                sub_category: string;
                            };
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                category: string;
                                components: string;
                                message_send_ttl_seconds: string;
                                parameter_format: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        whats_app_template_get_v2: {
            fields: never[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        whats_app_template_get_v2_pagination: {
            fields: ({
                name: string;
                type: string;
            } | {
                name: string;
                type: (string | string[])[];
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: ({
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config };
