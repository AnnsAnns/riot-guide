---
title: api-net_cord_config.md
description: api-net_cord_config.md
---
# group `net_cord_config` 

Configuration options for CoRE RD endpoints and lookup clients.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_CORD_LT`](#group__net__cord__config_1ga2900835016f353280a366e470efd90dd)            | Default lifetime in seconds (the default is 1 day)
`define `[`CONFIG_CORD_UPDATE_INTERVAL`](#group__net__cord__config_1ga0ae8f68af56e8322d1d10e98cb940cc0)            | Default client update interval (default is 3/4 the lifetime)
`define `[`CORD_STARTUP_DELAY`](#group__net__cord__config_1ga6165c00520a510d634f20fc0eb2ec850)            | Delay until the RD client starts to try registering (in seconds)
`define `[`CONFIG_CORD_EXTRAARGS`](#group__net__cord__config_1ga8771a7958ddd659eb98a03be69155308)            | Extra query parameters added during registration.

## Members

#### `define `[`CONFIG_CORD_LT`](#group__net__cord__config_1ga2900835016f353280a366e470efd90dd) 

Default lifetime in seconds (the default is 1 day)

#### `define `[`CONFIG_CORD_UPDATE_INTERVAL`](#group__net__cord__config_1ga0ae8f68af56e8322d1d10e98cb940cc0) 

Default client update interval (default is 3/4 the lifetime)

#### `define `[`CORD_STARTUP_DELAY`](#group__net__cord__config_1ga6165c00520a510d634f20fc0eb2ec850) 

Delay until the RD client starts to try registering (in seconds)

#### `define `[`CONFIG_CORD_EXTRAARGS`](#group__net__cord__config_1ga8771a7958ddd659eb98a03be69155308) 

Extra query parameters added during registration.

Must be suitable for constructing a static array out of them. Each item of the array is turned as a Uri-Query option. The [IANA RD Parameters subregistry](https://www.iana.org/assignments/core-parameters/core-parameters.xhtml#rd-parameters) contains usable keys and their descriptions in entries that have an "R" in their "Use" column. Other keys can be used with known RD implementations.

The `ep` and `lt` parameters are *not* to be set through this mechanism, but through [CONFIG_CORD_EP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__config_1ga9ede3f5ba87ac976e0b440e90a06ff7e) and [CONFIG_CORD_LT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__config_1ga2900835016f353280a366e470efd90dd), respectively.

Example:

```cpp
CFLAGS += '-DCONFIG_CORD_EXTRAARGS="proxy=on","et=tag:riot-os.org,2020:board"'
```

