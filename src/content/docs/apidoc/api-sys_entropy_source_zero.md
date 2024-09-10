---
title: api-sys_entropy_source_zero.md
description: api-sys_entropy_source_zero.md
---
# group `sys_entropy_source_zero` 

Zero Entropy Source for testing.

This module produces zeros only and should be used for testing purposes only.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`entropy_source_zero_init`](#group__sys__entropy__source__zero_1ga70c23b7f1ae305c53a46fd69cc321ac7)`(void)`            | Initializes test structures, if tests are enabled.
`public int `[`entropy_source_zero_get`](#group__sys__entropy__source__zero_1ga1b70d6c73700ab33b25923a2e07fd71b)`(uint8_t * buf,size_t len)`            | Generates zeros.

## Members

#### `public int `[`entropy_source_zero_init`](#group__sys__entropy__source__zero_1ga70c23b7f1ae305c53a46fd69cc321ac7)`(void)` 

Initializes test structures, if tests are enabled.

#### Returns
ENTROPY_SOURCE_OK always

#### `public int `[`entropy_source_zero_get`](#group__sys__entropy__source__zero_1ga1b70d6c73700ab33b25923a2e07fd71b)`(uint8_t * buf,size_t len)` 

Generates zeros.

#### Parameters
* `buf` pointer to write zeros to 

* `len` number of bytes to generate

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
negative [entropy_source_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga403490f8fc59992806050b17172988f8) code on error

