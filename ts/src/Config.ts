
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'LmWhatsapp',
        slug: "lm-whatsapp",
    version: "0.1.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.linkmobility.com",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      manage_template: {
      },

      media: {
      },

      send_message: {
      },

      template: {
      },

      whats_app_template_get_v2: {
      },

      whats_app_template_get_v2_pagination: {
      },

    }
  }


  entity = {
    "manage_template": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "manage_template",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/whatsapp/v2/templates/{id}",
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "templates",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "media": {
      "fields": [],
      "name": "media",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "x_link_upload_filename",
                    "orig": "x_link_upload_filename",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "+15551234567 or %2b15551234567 or %2B15551234567",
                    "kind": "param",
                    "name": "phone_number",
                    "orig": "phone_number",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/whatsapp/v2/{phoneNumber}/media",
              "rename": {
                "param": {
                  "phoneNumber": "phone_number"
                }
              },
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "var": "phone_number"
                },
                {
                  "lit": "media"
                }
              ],
              "select": {
                "exist": [
                  "phone_number",
                  "x_link_upload_filename"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "{phone_number}",
                "media"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "v2"
          ]
        ]
      }
    },
    "send_message": {
      "fields": [],
      "name": "send_message",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/whatsapp/v2/messages",
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "messages"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "messages"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "template": {
      "fields": [
        {
          "name": "allow_category_change",
          "short": "Set to true to allow to assign a category based on template guidelines and the template's contents.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "category",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "type": "`$STRING`"
        },
        {
          "name": "components",
          "op": {
            "update": {
              "type": [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "req": true,
          "short": "Array of components that make up the template.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "createdDate",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "ID",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "language",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "type": "`$STRING`"
        },
        {
          "name": "library_template_body_inputs",
          "type": "`$OBJECT`"
        },
        {
          "name": "library_template_button_inputs",
          "short": "Optional data during creation of a template from a library template.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "library_template_name",
          "short": "Library template name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "int64",
          "name": "message_send_ttl_seconds",
          "short": "Time to live for message template sent.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "modifiedDate",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The message template name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "parameter_format",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "type": "`$STRING`"
        },
        {
          "name": "sub_category",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "template",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/whatsapp/v2/templates",
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "templates"
                }
              ],
              "select": {},
              "transform": {
                "req": {
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
                  "sub_category": "`reqdata.sub_category`"
                },
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "templates"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/whatsapp/v2/templates/{id}",
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "category": "`reqdata.category`",
                  "components": "`reqdata.component`",
                  "message_send_ttl_seconds": "`reqdata.message_send_ttl_second`",
                  "parameter_format": "`reqdata.parameter_format`"
                },
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "templates",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "whats_app_template_get_v2": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "whats_app_template_get_v2",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/whatsapp/v2/templates/{id}",
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "templates",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "whats_app_template_get_v2_pagination": {
      "fields": [
        {
          "format": "int32",
          "name": "currentPage",
          "type": "`$INTEGER`"
        },
        {
          "name": "items",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "int32",
          "name": "pages",
          "type": "`$INTEGER`"
        },
        {
          "format": "int32",
          "name": "results",
          "type": "`$INTEGER`"
        },
        {
          "format": "int32",
          "name": "resultsPerPage",
          "type": "`$INTEGER`"
        }
      ],
      "name": "whats_app_template_get_v2_pagination",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 25,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/whatsapp/v2/templates",
              "segments": [
                {
                  "lit": "whatsapp"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "templates"
                }
              ],
              "select": {
                "exist": [
                  "page",
                  "size",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "whatsapp",
                "v2",
                "templates"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

