---
title: api-lwm2m_client_config.md
description: api-lwm2m_client_config.md
---
# group `lwm2m_client_config` 

Configuration options for the LwM2M client implementation based on the Wakaama package.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_LWM2M_STANDARD_PORT`](#group__lwm2m__client__config_1ga2df158b85e7b28db972bf322f5b9f6f1)            | CoAP default port of the LwM2M server.
`define `[`CONFIG_LWM2M_DTLS_PORT`](#group__lwm2m__client__config_1gaf20d3ba9ef4bf28752933d05037d91d7)            | CoAPS default port of the LwM2M server.
`define `[`CONFIG_LWM2M_BSSERVER_PORT`](#group__lwm2m__client__config_1ga25ed43e548d23e99349eacfea5cb21ec)            | CoAP default port of the LwM2M bootstrap server.
`define `[`CONFIG_LWM2M_LOCAL_PORT`](#group__lwm2m__client__config_1ga235719717a839fc54ef894e4c98772b4)            | Default port for the local LwM2M instance.
`define `[`CONFIG_LWM2M_LOCAL_DTLS_PORT`](#group__lwm2m__client__config_1ga94f003fb90a56526bae2df76fbde35e1)            | Default port for the local LwM2M CoAPs server.
`define `[`CONFIG_LWM2M_DEVICE_TTL`](#group__lwm2m__client__config_1gad11a3c875f5a688dad541aca7e137b27)            | Lifetime of the device object on the LwM2M server.
`define `[`CONFIG_LWM2M_ALT_PATH`](#group__lwm2m__client__config_1ga4e28bea1420f4fa20848bf810d5d4f82)            | Alternate path to place LwM2M resources.
`define `[`CONFIG_LWM2M_BOOTSTRAP`](#group__lwm2m__client__config_1ga07410379593643a6e07f42feec1ca01d)            | Define to 1 to add bootstrap server support.
`define `[`CONFIG_LWM2M_CREDMAN_TAG_BASE`](#group__lwm2m__client__config_1gae9fce0aa93ff571c389b9ce9b1c95310)            | Number to use as base for assigning tags to [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) credentials.
`define `[`CONFIG_LWM2M_URI_MAX_SIZE`](#group__lwm2m__client__config_1ga08ce4da746da732402a031a4dd825bdb)            | Maximum length of an URI allowed.

## Members

#### `define `[`CONFIG_LWM2M_STANDARD_PORT`](#group__lwm2m__client__config_1ga2df158b85e7b28db972bf322f5b9f6f1) 

CoAP default port of the LwM2M server.

#### `define `[`CONFIG_LWM2M_DTLS_PORT`](#group__lwm2m__client__config_1gaf20d3ba9ef4bf28752933d05037d91d7) 

CoAPS default port of the LwM2M server.

#### `define `[`CONFIG_LWM2M_BSSERVER_PORT`](#group__lwm2m__client__config_1ga25ed43e548d23e99349eacfea5cb21ec) 

CoAP default port of the LwM2M bootstrap server.

#### `define `[`CONFIG_LWM2M_LOCAL_PORT`](#group__lwm2m__client__config_1ga235719717a839fc54ef894e4c98772b4) 

Default port for the local LwM2M instance.

#### `define `[`CONFIG_LWM2M_LOCAL_DTLS_PORT`](#group__lwm2m__client__config_1ga94f003fb90a56526bae2df76fbde35e1) 

Default port for the local LwM2M CoAPs server.

#### `define `[`CONFIG_LWM2M_DEVICE_TTL`](#group__lwm2m__client__config_1gad11a3c875f5a688dad541aca7e137b27) 

Lifetime of the device object on the LwM2M server.

#### `define `[`CONFIG_LWM2M_ALT_PATH`](#group__lwm2m__client__config_1ga4e28bea1420f4fa20848bf810d5d4f82) 

Alternate path to place LwM2M resources.

#### `define `[`CONFIG_LWM2M_BOOTSTRAP`](#group__lwm2m__client__config_1ga07410379593643a6e07f42feec1ca01d) 

Define to 1 to add bootstrap server support.

To define just add it to your `CFLAGS` in your application's Makefile:

```cpp
CFLAGS += -DCONFIG_LWM2M_BOOTSTRAP=1
```

#### `define `[`CONFIG_LWM2M_CREDMAN_TAG_BASE`](#group__lwm2m__client__config_1gae9fce0aa93ff571c389b9ce9b1c95310) 

Number to use as base for assigning tags to [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) credentials.

#### `define `[`CONFIG_LWM2M_URI_MAX_SIZE`](#group__lwm2m__client__config_1ga08ce4da746da732402a031a4dd825bdb) 

Maximum length of an URI allowed.

