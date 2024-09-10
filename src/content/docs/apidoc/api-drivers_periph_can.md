---
title: api-drivers_periph_can.md
description: api-drivers_periph_can.md
---
# group `drivers_periph_can` 

Low-level CAN peripheral driver interface.

This is a basic abstract peripheral to be used with candev.

The `can_t` type should be compatible with `candev_t` to be used by the candev interface.

See auto init for more details how the can_t is used.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`can_init`](#group__drivers__periph__can_1ga2396570920bae47d00a402c97c55eca6)`(`[`can_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__esp32__esp__can_1ga61345f5fff169e11c88d5166bb7632a1)` * dev,const `[`can_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t)` * conf)`            | Initialize a periph CAN device with the given configuration.

## Members

#### `public void `[`can_init`](#group__drivers__periph__can_1ga2396570920bae47d00a402c97c55eca6)`(`[`can_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__esp32__esp__can_1ga61345f5fff169e11c88d5166bb7632a1)` * dev,const `[`can_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t)` * conf)` 

Initialize a periph CAN device with the given configuration.

#### Parameters
* `dev` device descriptor 

* `conf` device vonfiguration

