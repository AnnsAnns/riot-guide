---
title: api-fido2_ctap_mem.md
description: api-fido2_ctap_mem.md
---
# group `fido2_ctap_mem` 

FIDO2 CTAP flash memory helper.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_FIDO2_CTAP_NUM_FLASHPAGES`](#group__fido2__ctap__mem_1ga4e118a518c6fc532ed84a2264eb7c748)            | Default amount of flashpages to use.
`define `[`CTAP_FLASH_ALIGN_PAD`](#group__fido2__ctap__mem_1gae681eb1217ec83798b86392d01fad341)            | Calculate padding needed to align struct size for saving to flash.
`define `[`CTAP_FLASH_RK_SZ`](#group__fido2__ctap__mem_1ga6b64601f4be3b8f4053fbc4d886fa8f1)            | Resident key size with alignment padding.
`define `[`CTAP_FLASH_STATE_SZ`](#group__fido2__ctap__mem_1ga1e3560bb99cc415fe7e58a6c6bdac78d)            | State struct size with alignment padding.
`define `[`CTAP_FLASH_MAX_NUM_RKS`](#group__fido2__ctap__mem_1ga2b1dc8498b7bb9f076263d4b69716b33)            | Max amount of resident keys that can be stored on device.
`define `[`CTAP_FLASH_MIN_SECTOR_SZ`](#group__fido2__ctap__mem_1gaa6f392ce0b601b2c6b853b6cc6a0f69a)            | Minimum flash sector size needed to hold CTAP related data.
`define `[`CTAP_FLASH_PAGES_PER_SECTOR`](#group__fido2__ctap__mem_1ga9139ea70d5adfb521e47998103c69d92)            | Pages per sector needed.
`define `[`CTAP_FLASH_RK_OFF`](#group__fido2__ctap__mem_1ga1db4ff38f5067650f426d1122fb42788)            | Offset of flashpage for storing resident keys.
`public int `[`fido2_ctap_mem_init`](#group__fido2__ctap__mem_1ga4be96de49decc47e22fed989edea4bd5)`(void)`            | Initialize memory helper.
`public int `[`fido2_ctap_mem_read`](#group__fido2__ctap__mem_1gaf410ac156462bc4a7e35fd3a880e5ec9)`(void * buf,uint32_t page,uint32_t offset,uint32_t len)`            | Read from flash memory.
`public int `[`fido2_ctap_mem_erase_flash`](#group__fido2__ctap__mem_1ga99b31a78116d5cc03e43dfc86483b56a)`(void)`            | Erase all flashpages containing CTAP data.
`public int `[`fido2_ctap_mem_read_state_from_flash`](#group__fido2__ctap__mem_1ga28e0127d10746f58a2a6f6503a67e909)`(`[`ctap_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)` * state)`            | Read authenticator state from flash.
`public int `[`fido2_ctap_mem_write_state_to_flash`](#group__fido2__ctap__mem_1gae75696dca5859332134ec957f0299a97)`(`[`ctap_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)` * state)`            | Write authenticator state to flash.
`public int `[`fido2_ctap_mem_read_rk_from_flash`](#group__fido2__ctap__mem_1gafabc37733b5371d3a53f476b8fba689b)`(`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * key,uint8_t * rp_id_hash,uint32_t * addr)`            | Find resident credential for `rp_id_hash` in flash.
`public int `[`fido2_ctap_mem_write_rk_to_flash`](#group__fido2__ctap__mem_1ga0dbad74326227325f7f528a354782fc2)`(`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk)`            | Write resident credential to flash.

## Members

#### `define `[`CONFIG_FIDO2_CTAP_NUM_FLASHPAGES`](#group__fido2__ctap__mem_1ga4e118a518c6fc532ed84a2264eb7c748) 

Default amount of flashpages to use.

#### `define `[`CTAP_FLASH_ALIGN_PAD`](#group__fido2__ctap__mem_1gae681eb1217ec83798b86392d01fad341) 

Calculate padding needed to align struct size for saving to flash.

#### `define `[`CTAP_FLASH_RK_SZ`](#group__fido2__ctap__mem_1ga6b64601f4be3b8f4053fbc4d886fa8f1) 

Resident key size with alignment padding.

#### `define `[`CTAP_FLASH_STATE_SZ`](#group__fido2__ctap__mem_1ga1e3560bb99cc415fe7e58a6c6bdac78d) 

State struct size with alignment padding.

#### `define `[`CTAP_FLASH_MAX_NUM_RKS`](#group__fido2__ctap__mem_1ga2b1dc8498b7bb9f076263d4b69716b33) 

Max amount of resident keys that can be stored on device.

#### `define `[`CTAP_FLASH_MIN_SECTOR_SZ`](#group__fido2__ctap__mem_1gaa6f392ce0b601b2c6b853b6cc6a0f69a) 

Minimum flash sector size needed to hold CTAP related data.

This is needed to ensure that the MTD work_area buffer is big enough

#### `define `[`CTAP_FLASH_PAGES_PER_SECTOR`](#group__fido2__ctap__mem_1ga9139ea70d5adfb521e47998103c69d92) 

Pages per sector needed.

#### `define `[`CTAP_FLASH_RK_OFF`](#group__fido2__ctap__mem_1ga1db4ff38f5067650f426d1122fb42788) 

Offset of flashpage for storing resident keys.

The offset is in units of flashpages from the beginning of the flash memory area dedicated for storing CTAP data.

#### `public int `[`fido2_ctap_mem_init`](#group__fido2__ctap__mem_1ga4be96de49decc47e22fed989edea4bd5)`(void)` 

Initialize memory helper.

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_mem_read`](#group__fido2__ctap__mem_1gaf410ac156462bc4a7e35fd3a880e5ec9)`(void * buf,uint32_t page,uint32_t offset,uint32_t len)` 

Read from flash memory.

#### Parameters
* `buf` buffer to fil in 

* `page` page to read from 

* `offset` offset from the start of the page (in bytes) 

* `len` number of bytes to write

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_mem_erase_flash`](#group__fido2__ctap__mem_1ga99b31a78116d5cc03e43dfc86483b56a)`(void)` 

Erase all flashpages containing CTAP data.

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_mem_read_state_from_flash`](#group__fido2__ctap__mem_1ga28e0127d10746f58a2a6f6503a67e909)`(`[`ctap_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)` * state)` 

Read authenticator state from flash.

#### Parameters
* `state` pointer to authenticator state

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_mem_write_state_to_flash`](#group__fido2__ctap__mem_1gae75696dca5859332134ec957f0299a97)`(`[`ctap_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)` * state)` 

Write authenticator state to flash.

#### Parameters
* `state` pointer to authenticator state

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_mem_read_rk_from_flash`](#group__fido2__ctap__mem_1gafabc37733b5371d3a53f476b8fba689b)`(`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * key,uint8_t * rp_id_hash,uint32_t * addr)` 

Find resident credential for `rp_id_hash` in flash.

The function stores the flash address of the next credential in `addr`. This allows for consecutive calls of the function in order to find all stored credentials stored for the relying party identified by `rp_id_hash`.

#### Parameters
* `key` pointer to authenticator state 

* `rp_id_hash` pointer to hash of rp domain string 

* `addr` pointer to address where to read from

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_mem_write_rk_to_flash`](#group__fido2__ctap__mem_1ga0dbad74326227325f7f528a354782fc2)`(`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk)` 

Write resident credential to flash.

#### Parameters
* `rk` pointer to resident credential

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

