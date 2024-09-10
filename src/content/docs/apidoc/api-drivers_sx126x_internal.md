---
title: api-drivers_sx126x_internal.md
description: api-drivers_sx126x_internal.md
---
# group `drivers_sx126x_internal` 

Internal functions for the SX1261/2/8 and LLCC68.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static bool `[`sx126x_is_sx1261`](#group__drivers__sx126x__internal_1ga981b9bcf1895aed0b6ddf2a969549f91)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Check whether the device model is sx1261.
`public inline static bool `[`sx126x_is_sx1262`](#group__drivers__sx126x__internal_1gac97cab462c9ae2246c5c0b55841d70bc)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Check whether the device model is sx1262.
`public inline static bool `[`sx126x_is_llcc68`](#group__drivers__sx126x__internal_1ga88153426d253d6b6964ce86480ff0bd3)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Check whether the device model is llcc68.
`public inline static bool `[`sx126x_is_sx1268`](#group__drivers__sx126x__internal_1ga11b36d61981374b2d1d0dddec5070e30)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Check whether the device model is sx1268.
`public inline static bool `[`sx126x_is_stm32wl`](#group__drivers__sx126x__internal_1ga23740bf9c7bc6c6a462b23330a0ae4e6)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Check whether the device model is stm32wl (onboard radio)

## Members

#### `public inline static bool `[`sx126x_is_sx1261`](#group__drivers__sx126x__internal_1ga981b9bcf1895aed0b6ddf2a969549f91)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Check whether the device model is sx1261.

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `true` if the device is sx1261 

* `false` otherwise

#### `public inline static bool `[`sx126x_is_sx1262`](#group__drivers__sx126x__internal_1gac97cab462c9ae2246c5c0b55841d70bc)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Check whether the device model is sx1262.

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `true` if the device is sx1262 

* `false` otherwise

#### `public inline static bool `[`sx126x_is_llcc68`](#group__drivers__sx126x__internal_1ga88153426d253d6b6964ce86480ff0bd3)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Check whether the device model is llcc68.

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `true` if the device is llcc68 

* `false` otherwise

#### `public inline static bool `[`sx126x_is_sx1268`](#group__drivers__sx126x__internal_1ga11b36d61981374b2d1d0dddec5070e30)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Check whether the device model is sx1268.

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `true` if the device is sx1268 

* `false` otherwise

#### `public inline static bool `[`sx126x_is_stm32wl`](#group__drivers__sx126x__internal_1ga23740bf9c7bc6c6a462b23330a0ae4e6)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Check whether the device model is stm32wl (onboard radio)

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `true` if the device is stm32wl 

* `false` otherwise

