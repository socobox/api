define({ "api": [
  {
    "type": "post",
    "url": "/data/v1/row/find",
    "title": "find data",
    "name": "findData",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "row_model",
            "description": "<p>Name of the model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pruebajs/example.js",
    "groupTitle": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app-key",
            "description": "<p>App key of Archivo Digital.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>&quot;application/json&quot;.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>&quot;Bearer TOKEN&quot;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept-encoding",
            "description": "<p>&quot;gzip&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>If the request was success or not</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "model",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "row_count",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_pages",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/data/v1/row",
    "title": "insert data",
    "name": "insertData",
    "group": "Data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>if the request was success or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "keys",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"keys\": [\n  \"cba502e5-2108-4eb1-b2c5-208f8ab80662\"\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pruebajs/example.js",
    "groupTitle": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "row_model",
            "description": "<p>Name of the model</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>Array of json object with the key-value for this model. The name of the keys must be the same that the fields on the model</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app-key",
            "description": "<p>App key of Archivo Digital.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>&quot;application/json&quot;.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>&quot;Bearer TOKEN&quot;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept-encoding",
            "description": "<p>&quot;gzip&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/data/v1/row/update",
    "title": "update data",
    "name": "updateData",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_KEY",
            "description": "<p>the of objetc to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "row_model",
            "description": "<p>Name of the model</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>Array of json object with the key-value for this model. The name of the keys must be the same that the fields on the model</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pruebajs/example.js",
    "groupTitle": "Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app-key",
            "description": "<p>App key of Archivo Digital.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>&quot;application/json&quot;.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>&quot;Bearer TOKEN&quot;</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept-encoding",
            "description": "<p>&quot;gzip&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/v1/login",
    "title": "login user",
    "name": "loginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username for login</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pruebajs/example.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>if the request was success or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user general data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"token\": \"211ac1c4-6f06-8768-aac7-asdf76e\",\n  \"user\": {\n  \"id\": 417, \n  \"name\": \"my name\",\n  \"code\": null,\n  \"email\": \"myemail@email.com\",\n  \"login\": \"myusername\",\n  \"role\": \"CUSTOMER\",\n  \"domain\": \"root\",\n  \"display_name\": \"Carpeta Personal\",\n  \"domain_id\": 0,\n  \"membership_role\": \"USER\",\n  \"member_of\": [\n    {\n      \"domain_id\": 12,\n      \"domain\": \"mydominio\",\n      \"display_name\": \"mydominio\",\n      \"role\": \"USER\",\n      \"name\": \"mydominio\",\n      \"home\": null,\n      \"config\": {},\n      \"app\": 16\n    },\n    {\n      \"domain_id\": 0,\n      \"domain\": \"root\",\n      \"display_name\": \"Carpeta Personal\",\n      \"role\": \"USER\"\n    }\n  ],\n  \"following\": [],\n  \"home_folder_key\": \"ef64abce-763b-9d8d-8e92-ad76d7abb37e\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/v1/register",
    "title": "new user",
    "name": "registUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username for login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "domain",
            "description": "<p>Id domain of Archivo Digital</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app-key",
            "description": "<p>App key of Archivo Digital.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pruebajs/example.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>if the request was success or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user general data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"token\": \"211ac1c4-6f06-8768-aac7-asdf76e\",\n  \"user\": {\n  \"id\": 417, \n  \"name\": \"my name\",\n  \"code\": null,\n  \"email\": \"myemail@email.com\",\n  \"login\": \"myusername\",\n  \"role\": \"CUSTOMER\",\n  \"domain\": \"root\",\n  \"display_name\": \"Carpeta Personal\",\n  \"domain_id\": 0,\n  \"membership_role\": \"USER\",\n  \"member_of\": [\n    {\n      \"domain_id\": 12,\n      \"domain\": \"mydominio\",\n      \"display_name\": \"mydominio\",\n      \"role\": \"USER\",\n      \"name\": \"mydominio\",\n      \"home\": null,\n      \"config\": {},\n      \"app\": 16\n    },\n    {\n      \"domain_id\": 0,\n      \"domain\": \"root\",\n      \"display_name\": \"Carpeta Personal\",\n      \"role\": \"USER\"\n    }\n  ],\n  \"following\": [],\n  \"home_folder_key\": \"ef64abce-763b-9d8d-8e92-ad76d7abb37e\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
