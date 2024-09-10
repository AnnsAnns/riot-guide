---
title: api-drivers_grove_ledbar.md
description: api-drivers_grove_ledbar.md
---
# group `drivers_grove_ledbar` 

Driver for the Grove ledbar.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GROVE_LEDBAR_MAX`](#group__drivers__grove__ledbar_1gaa815e75e8c2edda30674b85cffeb39c3)            | Maximum value for ledbar level.
`public int `[`grove_ledbar_init`](#group__drivers__grove__ledbar_1gadf84cba4c8df19333523a1e19f6fa9a8)`(`[`grove_ledbar_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1ga89e668b7f4a5b3ee1c2ce6ee13d8182d)` * dev,const `[`grove_ledbar_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1gaf6aa60c78ac6e130e77bb5b5095b2ad9)` * params)`            | Initialize the given driver.
`public void `[`grove_ledbar_set`](#group__drivers__grove__ledbar_1ga22e63caa0fb0b02520f554413b5e7f1c)`(`[`grove_ledbar_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1ga89e668b7f4a5b3ee1c2ce6ee13d8182d)` * dev,uint8_t level)`            | Set overall (brightness) level distributed over all LEDs.
`public void `[`grove_ledbar_clear`](#group__drivers__grove__ledbar_1ga5d44ff20423c91614c22d7f8f9590ac5)`(`[`grove_ledbar_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1ga89e668b7f4a5b3ee1c2ce6ee13d8182d)` * dev)`            | Clear ledbar, i.e.

## Members

#### `define `[`GROVE_LEDBAR_MAX`](#group__drivers__grove__ledbar_1gaa815e75e8c2edda30674b85cffeb39c3) 

Maximum value for ledbar level.

#### `public int `[`grove_ledbar_init`](#group__drivers__grove__ledbar_1gadf84cba4c8df19333523a1e19f6fa9a8)`(`[`grove_ledbar_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1ga89e668b7f4a5b3ee1c2ce6ee13d8182d)` * dev,const `[`grove_ledbar_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1gaf6aa60c78ac6e130e77bb5b5095b2ad9)` * params)` 

Initialize the given driver.

`dev != NULL` and `params != NULL`

#### Parameters
* `dev` device descriptor grove ledbar 

* `params` configuration parameters

#### Returns
0 on success, otherwise error

#### `public void `[`grove_ledbar_set`](#group__drivers__grove__ledbar_1ga22e63caa0fb0b02520f554413b5e7f1c)`(`[`grove_ledbar_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1ga89e668b7f4a5b3ee1c2ce6ee13d8182d)` * dev,uint8_t level)` 

Set overall (brightness) level distributed over all LEDs.

`dev != NULL`

#### Parameters
* `dev` device descriptor grove ledbar 

* `level` overall brightness level

#### `public void `[`grove_ledbar_clear`](#group__drivers__grove__ledbar_1ga5d44ff20423c91614c22d7f8f9590ac5)`(`[`grove_ledbar_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__grove__ledbar_1ga89e668b7f4a5b3ee1c2ce6ee13d8182d)` * dev)` 

Clear ledbar, i.e.

set all LEDs off

`dev != NULL`

#### Parameters
* `dev` device descriptor grove ledbar

