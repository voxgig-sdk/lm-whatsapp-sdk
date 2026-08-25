export interface ManageTemplate {
    id?: string;
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
}
export interface SendMessageCreateData {
}
export interface Template {
    allow_category_change?: boolean;
    category?: string;
    components: any[];
    createdDate?: string;
    id?: string | null;
    language?: string;
    library_template_body_inputs?: Record<string, any>;
    library_template_button_inputs?: any[] | null;
    library_template_name?: string | null;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    parameter_format?: string;
    status?: string;
    sub_category?: string;
}
export interface TemplateCreateData {
    allow_category_change?: boolean;
    category?: string;
    components: any[];
    createdDate?: string;
    id?: string | null;
    language?: string;
    library_template_body_inputs?: Record<string, any>;
    library_template_button_inputs?: any[] | null;
    library_template_name?: string | null;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    parameter_format?: string;
    status?: string;
    sub_category?: string;
}
export interface TemplateUpdateData {
    id: string;
    allow_category_change?: boolean;
    category?: string;
    components?: any[];
    createdDate?: string;
    language?: string;
    library_template_body_inputs?: Record<string, any>;
    library_template_button_inputs?: any[] | null;
    library_template_name?: string | null;
    message_send_ttl_seconds?: number;
    modifiedDate?: string | null;
    name?: string | null;
    parameter_format?: string;
    status?: string;
    sub_category?: string;
}
export interface WhatsAppTemplateGetV2 {
    id?: string;
}
export interface WhatsAppTemplateGetV2LoadMatch {
    id: string;
}
export interface WhatsAppTemplateGetV2Pagination {
    currentPage?: number;
    items?: any[] | null;
    pages?: number;
    results?: number;
    resultsPerPage?: number;
}
export interface WhatsAppTemplateGetV2PaginationLoadMatch {
    currentPage?: number;
    items?: any[] | null;
    pages?: number;
    results?: number;
    resultsPerPage?: number;
}
