# LmWhatsapp SDK configuration


def make_config():
    return {
        "main": {
            "name": "LmWhatsapp",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.linkmobility.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "manage_template": {},
                "media": {},
                "send_message": {},
                "template": {},
                "whats_app_template_get_v2": {},
                "whats_app_template_get_v2_pagination": {},
            },
        },
        "entity": {
      "manage_template": {
        "fields": [],
        "name": "manage_template",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/whatsapp/v2/templates/{id}",
                "parts": [
                  "whatsapp",
                  "v2",
                  "templates",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_link_upload_filename",
                      "orig": "x_link_upload_filename",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "+15551234567 or %2b15551234567 or %2B15551234567",
                      "kind": "param",
                      "name": "phone_number",
                      "orig": "phone_number",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/whatsapp/v2/{phoneNumber}/media",
                "parts": [
                  "whatsapp",
                  "v2",
                  "{phone_number}",
                  "media",
                ],
                "rename": {
                  "param": {
                    "phoneNumber": "phone_number",
                  },
                },
                "select": {
                  "exist": [
                    "phone_number",
                    "x_link_upload_filename",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "v2",
            ],
          ],
        },
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
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/whatsapp/v2/messages",
                "parts": [
                  "whatsapp",
                  "v2",
                  "messages",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "template": {
        "fields": [
          {
            "active": True,
            "name": "allow_category_change",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "category",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "components",
            "op": {
              "update": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$ARRAY`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "createdDate",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "language",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "library_template_body_inputs",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "library_template_button_inputs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "library_template_name",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "message_send_ttl_seconds",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "modifiedDate",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "parameter_format",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "sub_category",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
        ],
        "name": "template",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/whatsapp/v2/templates",
                "parts": [
                  "whatsapp",
                  "v2",
                  "templates",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/whatsapp/v2/templates/{id}",
                "parts": [
                  "whatsapp",
                  "v2",
                  "templates",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "whats_app_template_get_v2": {
        "fields": [],
        "name": "whats_app_template_get_v2",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/whatsapp/v2/templates/{id}",
                "parts": [
                  "whatsapp",
                  "v2",
                  "templates",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "whats_app_template_get_v2_pagination": {
        "fields": [
          {
            "active": True,
            "name": "currentPage",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "items",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "pages",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "resultsPerPage",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
        ],
        "name": "whats_app_template_get_v2_pagination",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/whatsapp/v2/templates",
                "parts": [
                  "whatsapp",
                  "v2",
                  "templates",
                ],
                "select": {
                  "exist": [
                    "page",
                    "size",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
