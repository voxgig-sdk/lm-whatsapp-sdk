export interface ManageTemplate {
    allow_category_change?: boolean;
    category?: string;
    components: any[];
    createdDate?: string;
    currentPage?: number;
    id?: string | null;
    items?: any[] | null;
    language?: string;
    library_template_body_inputs?: Record<string, any>;
    library_template_button_inputs?: any[] | null;
    library_template_name?: string | null;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    pages?: number;
    parameter_format?: string;
    results?: number;
    resultsPerPage?: number;
    status?: string;
    sub_category?: string;
}
export interface ManageTemplateLoadMatch {
    page?: number;
    size?: number;
    sort?: any[];
}
export interface ManageTemplateCreateData {
    allow_category_change?: boolean;
    category?: string;
    components: any[];
    createdDate?: string;
    currentPage?: number;
    id?: string | null;
    items?: any[] | null;
    language?: string;
    library_template_body_inputs?: Record<string, any>;
    library_template_button_inputs?: any[] | null;
    library_template_name?: string | null;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    pages?: number;
    parameter_format?: string;
    results?: number;
    resultsPerPage?: number;
    status?: string;
    sub_category?: string;
}
export interface ManageTemplateRemoveMatch {
    id: string;
}
export interface Media {
}
export interface MediaCreateData {
    phone_number: string;
}
export interface SendMessage {
    messages: any[];
    requestId: string;
}
export interface SendMessageCreateData {
    messages: any[];
    requestId: string;
}
export interface Template {
    category?: string;
    components?: any[] | null;
    createdDate?: string;
    id?: string | null;
    language?: string;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    parameter_format?: string;
    status?: string;
}
export interface TemplateUpdateData {
    id: string;
    category?: string;
    components?: any[] | null;
    createdDate?: string;
    language?: string;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    parameter_format?: string;
    status?: string;
}
export interface WhatsAppTemplateGetV2 {
    id?: string;
}
export interface WhatsAppTemplateGetV2LoadMatch {
    id: string;
}
