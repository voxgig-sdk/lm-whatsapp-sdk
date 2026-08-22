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
        "test" => {
          "options" => {
            "active" => false,
          },
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
          "whats_app_template_get_v2_pagination" => {},
        },
      },
      "entity" => {
        "manage_template" => {
          "fields" => [],
          "name" => "manage_template",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/whatsapp/v2/templates/{id}",
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
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
                  "args" => {
                    "header" => [
                      {
                        "kind" => "header",
                        "name" => "x_link_upload_filename",
                        "orig" => "x_link_upload_filename",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "params" => [
                      {
                        "example" => "+15551234567 or %2b15551234567 or %2B15551234567",
                        "kind" => "param",
                        "name" => "phone_number",
                        "orig" => "phone_number",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/whatsapp/v2/{phoneNumber}/media",
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
                  "select" => {
                    "exist" => [
                      "phone_number",
                      "x_link_upload_filename",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "v2",
              ],
            ],
          },
        },
        "send_message" => {
          "fields" => [],
          "name" => "send_message",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/whatsapp/v2/messages",
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "messages",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
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
              "name" => "allow_category_change",
              "short" => "Set to true to allow to assign a category based on template guidelines and the template's contents.",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "category",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "type" => "`$STRING`",
            },
            {
              "name" => "components",
              "op" => {
                "update" => {
                  "type" => [
                    "`$ONE`",
                    [
                      "`$ARRAY`",
                      "`$NULL`",
                    ],
                  ],
                },
              },
              "req" => true,
              "short" => "Array of components that make up the template.",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "createdDate",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "ID",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "language",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "type" => "`$STRING`",
            },
            {
              "name" => "library_template_body_inputs",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "library_template_button_inputs",
              "short" => "Optional data during creation of a template from a library template.",
              "type" => [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "library_template_name",
              "short" => "Library template name",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "message_send_ttl_seconds",
              "short" => "Time to live for message template sent.",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "modifiedDate",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "name",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "The message template name",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "parameter_format",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
            {
              "name" => "sub_category",
              "type" => "`$STRING`",
            },
          ],
          "name" => "template",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/whatsapp/v2/templates",
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                  ],
                  "select" => {},
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
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/whatsapp/v2/templates/{id}",
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => {
                      "category" => "`reqdata.category`",
                      "components" => "`reqdata.component`",
                      "message_send_ttl_seconds" => "`reqdata.message_send_ttl_second`",
                      "parameter_format" => "`reqdata.parameter_format`",
                    },
                    "res" => "`body`",
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
          "fields" => [],
          "name" => "whats_app_template_get_v2",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/whatsapp/v2/templates/{id}",
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "whats_app_template_get_v2_pagination" => {
          "fields" => [
            {
              "name" => "currentPage",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "items",
              "type" => [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "pages",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "results",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "resultsPerPage",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "whats_app_template_get_v2_pagination",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 25,
                        "kind" => "query",
                        "name" => "size",
                        "orig" => "size",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$ARRAY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/whatsapp/v2/templates",
                  "parts" => [
                    "whatsapp",
                    "v2",
                    "templates",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                      "size",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
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
