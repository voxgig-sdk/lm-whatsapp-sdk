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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
				"whats_app_template_get_v2_pagination": map[string]any{},
			},
		},
		"entity": map[string]any{
			"manage_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "manage_template",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/whatsapp/v2/templates/{id}",
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_link_upload_filename",
											"orig": "x_link_upload_filename",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "+15551234567 or %2b15551234567 or %2B15551234567",
											"kind": "param",
											"name": "phone_number",
											"orig": "phone_number",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/whatsapp/v2/{phoneNumber}/media",
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
								"select": map[string]any{
									"exist": []any{
										"phone_number",
										"x_link_upload_filename",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"v2",
						},
					},
				},
			},
			"send_message": map[string]any{
				"fields": []any{},
				"name": "send_message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/whatsapp/v2/messages",
								"parts": []any{
									"whatsapp",
									"v2",
									"messages",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
						"name": "allow_category_change",
						"short": "Set to true to allow to assign a category based on template guidelines and the template's contents.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "category",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "components",
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$ARRAY`",
										"`$NULL`",
									},
								},
							},
						},
						"req": true,
						"short": "Array of components that make up the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "createdDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "ID",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "language",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "library_template_body_inputs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "library_template_button_inputs",
						"short": "Optional data during creation of a template from a library template.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "library_template_name",
						"short": "Library template name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "message_send_ttl_seconds",
						"short": "Time to live for message template sent.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "modifiedDate",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The message template name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "parameter_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sub_category",
						"type": "`$STRING`",
					},
				},
				"name": "template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/whatsapp/v2/templates",
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
								},
								"select": map[string]any{},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/whatsapp/v2/templates/{id}",
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"category": "`reqdata.category`",
										"components": "`reqdata.component`",
										"message_send_ttl_seconds": "`reqdata.message_send_ttl_second`",
										"parameter_format": "`reqdata.parameter_format`",
									},
									"res": "`body`",
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
						"type": "`$STRING`",
					},
				},
				"name": "whats_app_template_get_v2",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/whatsapp/v2/templates/{id}",
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"whats_app_template_get_v2_pagination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "currentPage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "items",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "pages",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "results",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "resultsPerPage",
						"type": "`$INTEGER`",
					},
				},
				"name": "whats_app_template_get_v2_pagination",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 25,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/whatsapp/v2/templates",
								"parts": []any{
									"whatsapp",
									"v2",
									"templates",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"size",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
