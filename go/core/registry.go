package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewManageTemplateEntityFunc func(client *LmWhatsappSDK, entopts map[string]any) LmWhatsappEntity

var NewMediaEntityFunc func(client *LmWhatsappSDK, entopts map[string]any) LmWhatsappEntity

var NewSendMessageEntityFunc func(client *LmWhatsappSDK, entopts map[string]any) LmWhatsappEntity

var NewTemplateEntityFunc func(client *LmWhatsappSDK, entopts map[string]any) LmWhatsappEntity

var NewWhatsAppTemplateGetV2EntityFunc func(client *LmWhatsappSDK, entopts map[string]any) LmWhatsappEntity

var NewWhatsAppTemplateGetV2PaginationEntityFunc func(client *LmWhatsappSDK, entopts map[string]any) LmWhatsappEntity

