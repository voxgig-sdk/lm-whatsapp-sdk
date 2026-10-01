package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "LmWhatsapp",
			"slug": "lm-whatsapp",
			"version": "0.1.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.linkmobility.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"manage_template": map[string]any{},
				"media": map[string]any{},
				"send_message": map[string]any{},
				"template": map[string]any{},
				"whats_app_template_get_v2": map[string]any{},
			},
		},
		"entity": map[string]any{
			"manage_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_category_change",
						"title": "Allow Category Change",
						"type": "`$BOOLEAN`",
						"short": "Set to true to allow to assign a category based on template guidelines and the template's contents.",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "components",
						"title": "Components",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of components that make up the template.",
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "currentPage",
						"title": "Current Page",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "ID",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "library_template_body_inputs",
						"title": "Library Template Body Inputs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "library_template_button_inputs",
						"title": "Library Template Button Inputs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Optional data during creation of a template from a library template.",
					},
					map[string]any{
						"name": "library_template_name",
						"title": "Library Template Name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Library template name",
					},
					map[string]any{
						"name": "message_send_ttl_seconds",
						"title": "Message Send Ttl Seconds",
						"type": "`$INTEGER`",
						"short": "Time to live for message template sent.",
						"format": "int64",
					},
					map[string]any{
						"name": "modifiedDate",
						"title": "Modified Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The message template name",
					},
					map[string]any{
						"name": "pages",
						"title": "Pages",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "parameter_format",
						"title": "Parameter Format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "resultsPerPage",
						"title": "Results Per Page",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sub_category",
						"title": "Sub Category",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "manage_template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/whatsapp/v2/templates",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "templates",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"allow_category_change": "`reqdata.allow_category_change`",
										"category": "`reqdata.category`",
										"components": "`reqdata.component`",
										"language": "`reqdata.language`",
										"library_template_body_inputs": "`reqdata.library_template_body_input`",
										"library_template_button_inputs": "`reqdata.library_template_button_input`",
										"library_template_name": "`reqdata.library_template_name`",
										"message_send_ttl_seconds": "`reqdata.message_send_ttl_second`",
										"name": "`reqdata.name`",
										"parameter_format": "`reqdata.parameter_format`",
										"sub_category": "`reqdata.sub_category`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/whatsapp/v2/templates",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "templates",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"size",
										"sort",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/whatsapp/v2/templates/{id}",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"media": map[string]any{
				"fields": []any{},
				"name": "media",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/whatsapp/v2/{phoneNumber}/media",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"var": "phone_number",
									},
									map[string]any{
										"lit": "media",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"{phone_number}",
									"media",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"phoneNumber": "phone_number",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_link_upload_filename",
											"orig": "X-Link-Upload-Filename",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "phone_number",
											"orig": "phoneNumber",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "+15551234567 or %2b15551234567 or %2B15551234567",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"phone_number",
										"x_link_upload_filename",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"send_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique Id of the request made towards LINK Mobility.",
						"format": "uuid",
					},
				},
				"name": "send_message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/whatsapp/v2/messages",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"messages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata.messages`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "components",
						"title": "Components",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "The array containing all the content of the message template",
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "ID",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message_send_ttl_seconds",
						"title": "Message Send Ttl Seconds",
						"type": "`$INTEGER`",
						"short": "Template message delivery retry time-to-live (TTL) override value.",
						"format": "int32",
					},
					map[string]any{
						"name": "modifiedDate",
						"title": "Modified Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The message template name",
					},
					map[string]any{
						"name": "parameter_format",
						"title": "Parameter Format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "template",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/whatsapp/v2/templates/{id}",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"category": "`reqdata.category`",
										"components": "`reqdata.component`",
										"message_send_ttl_seconds": "`reqdata.message_send_ttl_second`",
										"parameter_format": "`reqdata.parameter_format`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"whats_app_template_get_v2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "whats_app_template_get_v2",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/whatsapp/v2/templates/{id}",
								"segments": []any{
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
