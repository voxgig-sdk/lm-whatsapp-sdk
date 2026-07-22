-- LmWhatsapp SDK configuration

local function make_config()
  return {
    main = {
      name = "LmWhatsapp",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.linkmobility.com",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["manage_template"] = {},
        ["media"] = {},
        ["send_message"] = {},
        ["template"] = {},
        ["whats_app_template_get_v2"] = {},
        ["whats_app_template_get_v2_pagination"] = {},
      },
    },
    entity = {
      ["manage_template"] = {
        ["fields"] = {},
        ["name"] = "manage_template",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "DELETE",
                ["orig"] = "/whatsapp/v2/templates/{id}",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "templates",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "remove",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["media"] = {
        ["fields"] = {},
        ["name"] = "media",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "x_link_upload_filename",
                      ["orig"] = "x_link_upload_filename",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "+15551234567 or %2b15551234567 or %2B15551234567",
                      ["kind"] = "param",
                      ["name"] = "phone_number",
                      ["orig"] = "phone_number",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "POST",
                ["orig"] = "/whatsapp/v2/{phoneNumber}/media",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "{phone_number}",
                  "media",
                },
                ["rename"] = {
                  ["param"] = {
                    ["phoneNumber"] = "phone_number",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "phone_number",
                    "x_link_upload_filename",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "v2",
            },
          },
        },
      },
      ["send_message"] = {
        ["fields"] = {},
        ["name"] = "send_message",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "POST",
                ["orig"] = "/whatsapp/v2/messages",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "messages",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["template"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "allow_category_change",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "category",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "component",
            ["op"] = {
              ["update"] = {
                ["req"] = false,
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$ARRAY`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["req"] = true,
            ["type"] = "`$ARRAY`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "created_date",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "language",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "library_template_body_input",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "library_template_button_input",
            ["req"] = false,
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "library_template_name",
            ["req"] = false,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "message_send_ttl_second",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "modified_date",
            ["req"] = false,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = false,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "parameter_format",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "status",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "sub_category",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
        },
        ["name"] = "template",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "POST",
                ["orig"] = "/whatsapp/v2/templates",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "templates",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "PUT",
                ["orig"] = "/whatsapp/v2/templates/{id}",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "templates",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "update",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["whats_app_template_get_v2"] = {
        ["fields"] = {},
        ["name"] = "whats_app_template_get_v2",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/whatsapp/v2/templates/{id}",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "templates",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["whats_app_template_get_v2_pagination"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "current_page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "item",
            ["req"] = false,
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "result",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "results_per_page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
        },
        ["name"] = "whats_app_template_get_v2_pagination",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 25,
                      ["kind"] = "query",
                      ["name"] = "size",
                      ["orig"] = "size",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/whatsapp/v2/templates",
                ["parts"] = {
                  "whatsapp",
                  "v2",
                  "templates",
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "size",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
