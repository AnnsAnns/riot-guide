---
title: api-drivers_enc28j60.md
description: api-drivers_enc28j60.md
---
# group `drivers_enc28j60` 

Driver for the ENC28J60 Ethernet Adapter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`enc28j60_setup`](#group__drivers__enc28j60_1gae87ec196bb371fed9e3f5edc4129ec97)`(`[`enc28j60_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_enc28j60.md#structenc28j60__t)` * dev,const `[`enc28j60_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_enc28j60.md#structenc28j60__params__t)` * params,uint8_t index)`            | Ready the device for initialization through it's netdev interface.
`struct `[`enc28j60_params_t`](#structenc28j60__params__t) | Struct containing the needed peripheral configuration.
`struct `[`enc28j60_t`](#structenc28j60__t) | ENC28J60 device descriptor.

## Members

#### `public void `[`enc28j60_setup`](#group__drivers__enc28j60_1gae87ec196bb371fed9e3f5edc4129ec97)`(`[`enc28j60_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_enc28j60.md#structenc28j60__t)` * dev,const `[`enc28j60_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_enc28j60.md#structenc28j60__params__t)` * params,uint8_t index)` 

Ready the device for initialization through it's netdev interface.

#### Parameters
* `dev` device descriptor 

* `params` peripheral configuration to use 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

# struct `enc28j60_params_t` 

Struct containing the needed peripheral configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structenc28j60__params__t_1a476957c7761dd296c6490dc187b0fdae) | If I drink.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structenc28j60__params__t_1a1ca7cd6a120efe891cfab728f6c7f316) | beer in the evening,
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structenc28j60__params__t_1ac8cf51031a819004957fd77a6b8e2e19) | I will be most certainly.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structenc28j60__params__t_1af08ef0ed06f4226910b1586418108be4) | drunk in the morning?!

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structenc28j60__params__t_1a476957c7761dd296c6490dc187b0fdae) 

If I drink.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structenc28j60__params__t_1a1ca7cd6a120efe891cfab728f6c7f316) 

beer in the evening,

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structenc28j60__params__t_1ac8cf51031a819004957fd77a6b8e2e19) 

I will be most certainly.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structenc28j60__params__t_1af08ef0ed06f4226910b1586418108be4) 

drunk in the morning?!

# struct `enc28j60_t` 

ENC28J60 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structenc28j60__t_1af0eb1e2204b768c92b36de0b0f1fe500) | pull in the netdev fields
`public `[`enc28j60_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_enc28j60.md#structenc28j60__params__t)` `[`p`](#structenc28j60__t_1ae5c137ccdd3e298135cd39780ff3f685) | SPI and pin confiuration.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structenc28j60__t_1a95db7563abd44bf46db4b8a0d5334046) | lock the device on access
`public uint32_t `[`tx_time`](#structenc28j60__t_1a22ec488ccaa22d486378170f939f3983) | last transmission time for timeout handling

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structenc28j60__t_1af0eb1e2204b768c92b36de0b0f1fe500) 

pull in the netdev fields

#### `public `[`enc28j60_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_enc28j60.md#structenc28j60__params__t)` `[`p`](#structenc28j60__t_1ae5c137ccdd3e298135cd39780ff3f685) 

SPI and pin confiuration.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structenc28j60__t_1a95db7563abd44bf46db4b8a0d5334046) 

lock the device on access

#### `public uint32_t `[`tx_time`](#structenc28j60__t_1a22ec488ccaa22d486378170f939f3983) 

last transmission time for timeout handling

