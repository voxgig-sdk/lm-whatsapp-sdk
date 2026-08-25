<?php
declare(strict_types=1);

// LmWhatsapp SDK configuration

class LmWhatsappConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "LmWhatsapp",
                "slug" => "lm-whatsapp",
                "version" => "0.1.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.linkmobility.com",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "manage_template" => [],
                    "media" => [],
                    "send_message" => [],
                    "template" => [],
                    "whats_app_template_get_v2" => [],
                    "whats_app_template_get_v2_pagination" => [],
                ],
            ],
            "entity" => [
        'manage_template' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'manage_template',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/whatsapp/v2/templates/{id}',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    'templates',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'media' => [
          'fields' => [],
          'name' => 'media',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_link_upload_filename',
                        'orig' => 'x_link_upload_filename',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => '+15551234567 or %2b15551234567 or %2B15551234567',
                        'kind' => 'param',
                        'name' => 'phone_number',
                        'orig' => 'phone_number',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/whatsapp/v2/{phoneNumber}/media',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    '{phone_number}',
                    'media',
                  ],
                  'rename' => [
                    'param' => [
                      'phoneNumber' => 'phone_number',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'phone_number',
                      'x_link_upload_filename',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'v2',
              ],
            ],
          ],
        ],
        'send_message' => [
          'fields' => [],
          'name' => 'send_message',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/whatsapp/v2/messages',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    'messages',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'template' => [
          'fields' => [
            [
              'name' => 'allow_category_change',
              'short' => 'Set to true to allow to assign a category based on template guidelines and the template\'s contents.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'category',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'type' => '`$STRING`',
            ],
            [
              'name' => 'components',
              'op' => [
                'update' => [
                  'type' => [
                    '`$ONE`',
                    [
                      '`$ARRAY`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => true,
              'short' => 'Array of components that make up the template.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'createdDate',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'ID',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'language',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'type' => '`$STRING`',
            ],
            [
              'name' => 'library_template_body_inputs',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'library_template_button_inputs',
              'short' => 'Optional data during creation of a template from a library template.',
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'library_template_name',
              'short' => 'Library template name',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'message_send_ttl_seconds',
              'short' => 'Time to live for message template sent.',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'modifiedDate',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'name',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The message template name',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'parameter_format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sub_category',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'template',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/whatsapp/v2/templates',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    'templates',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'allow_category_change' => '`reqdata.allow_category_change`',
                      'category' => '`reqdata.category`',
                      'components' => '`reqdata.component`',
                      'language' => '`reqdata.language`',
                      'library_template_body_inputs' => '`reqdata.library_template_body_input`',
                      'library_template_button_inputs' => '`reqdata.library_template_button_input`',
                      'library_template_name' => '`reqdata.library_template_name`',
                      'message_send_ttl_seconds' => '`reqdata.message_send_ttl_second`',
                      'name' => '`reqdata.name`',
                      'parameter_format' => '`reqdata.parameter_format`',
                      'sub_category' => '`reqdata.sub_category`',
                    ],
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/whatsapp/v2/templates/{id}',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    'templates',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'category' => '`reqdata.category`',
                      'components' => '`reqdata.component`',
                      'message_send_ttl_seconds' => '`reqdata.message_send_ttl_second`',
                      'parameter_format' => '`reqdata.parameter_format`',
                    ],
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'whats_app_template_get_v2' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'whats_app_template_get_v2',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/whatsapp/v2/templates/{id}',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    'templates',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'whats_app_template_get_v2_pagination' => [
          'fields' => [
            [
              'name' => 'currentPage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'items',
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'pages',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'results',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'resultsPerPage',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'whats_app_template_get_v2_pagination',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/whatsapp/v2/templates',
                  'parts' => [
                    'whatsapp',
                    'v2',
                    'templates',
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'size',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return LmWhatsappFeatures::make_feature($name);
    }
}
