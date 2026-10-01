# LmWhatsapp SDK configuration

module LmWhatsappConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "LmWhatsapp",
        "slug" => "lm-whatsapp",
        "version" => "0.1.1",
        "target" => "rb",
      },
      "feature" => {
        "debug" => {
          "options" => {
            "active" => false,
            "max" => 100,
            "redact" => [
              "authorization",
              "cookie",
              "set-cookie",
              "api-key",
              "apikey",
              "x-api-key",
              "idempotency-key",
            ],
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "onEntry" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "idempotency" => {
          "options" => {
            "active" => false,
            "header" => "Idempotency-Key",
            "methods" => [
              "POST",
              "PUT",
              "PATCH",
              "DELETE",
            ],
            "ops" => [
              "create",
              "update",
              "remove",
            ],
          },
          "optspec" => {
            "keygen" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "metrics" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "paging" => {
          "options" => {
            "active" => false,
            "afterVar" => "after",
            "cursorParam" => "cursor",
            "firstVar" => "first",
            "limitParam" => "limit",
            "pageParam" => "page",
            "startPage" => 1,
          },
          "optspec" => {
            "limit" => "`$NUMBER`",
            "ops" => "`$LIST`",
          },
          "strict" => false,
          "transport" => "none",
        },
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.linkmobility.com",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "manage_template" => {},
          "media" => {},
          "send_message" => {},
          "template" => {},
          "whats_app_template_get_v2" => {},
        },
      },
      "entity" => {
        "manage_template" => {
          "fields" => [
            {
              "name" => "allow_category_change",
              "title" => "Allow Category Change",
              "type" => "`$BOOLEAN`",
              "short" => "Set to true to allow to assign a category based on template guidelines and the template's contents.",
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "components",
              "title" => "Components",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "Array of components that make up the template.",
            },
            {
              "name" => "createdDate",
              "title" => "Created Date",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
            {
              "name" => "currentPage",
              "title" => "Current Page",
              "type" => "`$INTEGER`",
              "format" => "int32",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "ID",
            },
            {
              "name" => "items",
              "title" => "Items",
              "type" => [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "language",
              "title" => "Language",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "library_template_body_inputs",
              "title" => "Library Template Body Inputs",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "library_template_button_inputs",
              "title" => "Library Template Button Inputs",
              "type" => [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`",
                ],
              ],
              "short" => "Optional data during creation of a template from a library template.",
            },
            {
              "name" => "library_template_name",
              "title" => "Library Template Name",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "Library template name",
            },
            {
              "name" => "message_send_ttl_seconds",
              "title" => "Message Send Ttl Seconds",
              "type" => "`$INTEGER`",
              "short" => "Time to live for message template sent.",
              "format" => "int64",
            },
            {
              "name" => "modifiedDate",
              "title" => "Modified Date",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "format" => "date-time",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "The message template name",
            },
            {
              "name" => "pages",
              "title" => "Pages",
              "type" => "`$INTEGER`",
              "format" => "int32",
            },
            {
              "name" => "parameter_format",
              "title" => "Parameter Format",
              "type" => "`$STRING`",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$INTEGER`",
              "format" => "int32",
            },
            {
              "name" => "resultsPerPage",
              "title" => "Results Per Page",
              "type" => "`$INTEGER`",
              "format" => "int32",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "sub_category",
              "title" => "Sub Category",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "manage_template",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/whatsapp/v2/templates",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "lit" => "templates",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "allow_category_change" => "`reqdata.allow_category_change`",
                      "category" => "`reqdata.category`",
                      "components" => "`reqdata.component`",
                      "language" => "`reqdata.language`",
                      "library_template_body_inputs" => "`reqdata.library_template_body_input`",
                      "library_template_button_inputs" => "`reqdata.library_template_button_input`",
                      "library_template_name" => "`reqdata.library_template_name`",
                      "message_send_ttl_seconds" => "`reqdata.message_send_ttl_second`",
                      "name" => "`reqdata.name`",
                      "parameter_format" => "`reqdata.parameter_format`",
                      "sub_category" => "`reqdata.sub_category`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/whatsapp/v2/templates",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "lit" => "templates",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                      {
                        "name" => "size",
                        "orig" => "size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 25,
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$ARRAY`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                      "size",
                      "sort",
                    ],
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/whatsapp/v2/templates/{id}",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "media" => {
          "fields" => [],
          "name" => "media",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/whatsapp/v2/{phoneNumber}/media",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "var" => "phone_number",
                    },
                    {
                      "lit" => "media",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "{phone_number}",
                    "media",
                  ],
                  "rename" => {
                    "param" => {
                      "phoneNumber" => "phone_number",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_link_upload_filename",
                        "orig" => "X-Link-Upload-Filename",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                    "params" => [
                      {
                        "name" => "phone_number",
                        "orig" => "phoneNumber",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "+15551234567 or %2b15551234567 or %2B15551234567",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "phone_number",
                      "x_link_upload_filename",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "send_message" => {
          "fields" => [
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "requestId",
              "title" => "Request Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique Id of the request made towards LINK Mobility.",
              "format" => "uuid",
            },
          ],
          "name" => "send_message",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/whatsapp/v2/messages",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "lit" => "messages",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "messages",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata.messages`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "template" => {
          "fields" => [
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "components",
              "title" => "Components",
              "type" => [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`",
                ],
              ],
              "short" => "The array containing all the content of the message template",
            },
            {
              "name" => "createdDate",
              "title" => "Created Date",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "ID",
            },
            {
              "name" => "language",
              "title" => "Language",
              "type" => "`$STRING`",
            },
            {
              "name" => "message_send_ttl_seconds",
              "title" => "Message Send Ttl Seconds",
              "type" => "`$INTEGER`",
              "short" => "Template message delivery retry time-to-live (TTL) override value.",
              "format" => "int32",
            },
            {
              "name" => "modifiedDate",
              "title" => "Modified Date",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "format" => "date-time",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "The message template name",
            },
            {
              "name" => "parameter_format",
              "title" => "Parameter Format",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "template",
          "op" => {
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/whatsapp/v2/templates/{id}",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "category" => "`reqdata.category`",
                      "components" => "`reqdata.component`",
                      "message_send_ttl_seconds" => "`reqdata.message_send_ttl_second`",
                      "parameter_format" => "`reqdata.parameter_format`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "whats_app_template_get_v2" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "whats_app_template_get_v2",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/whatsapp/v2/templates/{id}",
                  "segments" => [
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "v2",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    LmWhatsappFeatures.make_feature(name)
  end
end
