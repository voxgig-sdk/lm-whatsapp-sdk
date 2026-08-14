# LmWhatsapp SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
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
              },
            ],
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
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "x_link_upload_filename",
                      "orig": "x_link_upload_filename",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "example": "+15551234567 or %2b15551234567 or %2B15551234567",
                      "kind": "param",
                      "name": "phone_number",
                      "orig": "phone_number",
                      "reqd": True,
                      "type": "`$STRING`",
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
              },
            ],
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "template": {
        "fields": [
          {
            "name": "allow_category_change",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "category",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "components",
            "op": {
              "update": {
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
          },
          {
            "name": "createdDate",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "language",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "library_template_body_inputs",
            "type": "`$OBJECT`",
          },
          {
            "name": "library_template_button_inputs",
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "library_template_name",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "message_send_ttl_seconds",
            "type": "`$INTEGER`",
          },
          {
            "name": "modifiedDate",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "name",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "parameter_format",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
          {
            "name": "sub_category",
            "type": "`$STRING`",
          },
        ],
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
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
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
              },
            ],
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "whats_app_template_get_v2_pagination": {
        "fields": [
          {
            "name": "currentPage",
            "type": "`$INTEGER`",
          },
          {
            "name": "items",
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "pages",
            "type": "`$INTEGER`",
          },
          {
            "name": "results",
            "type": "`$INTEGER`",
          },
          {
            "name": "resultsPerPage",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 25,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
