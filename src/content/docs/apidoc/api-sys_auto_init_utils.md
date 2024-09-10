---
title: api-sys_auto_init_utils.md
description: api-sys_auto_init_utils.md
---
# group `sys_auto_init_utils` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_AUTO_INIT_ENABLE_DEBUG`](#group__sys__auto__init__utils_1ga76d14cf6c187e38c19aba5ff856ef0bb)            | Print a debug message before a module is initialized.
`define `[`AUTO_INIT`](#group__sys__auto__init__utils_1ga972d856f54f36f337f25934c265f4db2)            | Add a module to the auto-initialization array.
`define `[`AUTO_INIT_PRIORITY_AFTER`](#group__sys__auto__init__utils_1ga344b5c24d67621e418a82d5175994207)            | Construct a priority value equal to `priority` + 1, to be used with [AUTO_INIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1ga972d856f54f36f337f25934c265f4db2).
`struct `[`auto_init_module_t`](#structauto__init__module__t) | Type to represent a module to be auto-initialized.

## Members

#### `define `[`CONFIG_AUTO_INIT_ENABLE_DEBUG`](#group__sys__auto__init__utils_1ga76d14cf6c187e38c19aba5ff856ef0bb) 

Print a debug message before a module is initialized.

#### `define `[`AUTO_INIT`](#group__sys__auto__init__utils_1ga972d856f54f36f337f25934c265f4db2) 

Add a module to the auto-initialization array.

#### Parameters
* `function` Function to be called on initialization [auto_init_fn_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1ga2e643d5dd6d8b518a7062a80d4d7e3fb)

* `priority` Priority level [auto_init_prio_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1gaf32f3d3aee54717322effd50a50ce77f)

#### `define `[`AUTO_INIT_PRIORITY_AFTER`](#group__sys__auto__init__utils_1ga344b5c24d67621e418a82d5175994207) 

Construct a priority value equal to `priority` + 1, to be used with [AUTO_INIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1ga972d856f54f36f337f25934c265f4db2).

# struct `auto_init_module_t` 

Type to represent a module to be auto-initialized.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`auto_init_fn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1ga2e643d5dd6d8b518a7062a80d4d7e3fb)` `[`init`](#structauto__init__module__t_1ad7ed0dc52b412cf8d763c82fa8212dca) | Function to initialize the module.
`public `[`auto_init_prio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1gaf32f3d3aee54717322effd50a50ce77f)` `[`prio`](#structauto__init__module__t_1a02e4a554289c9773ae47fefe61bbf946) | Module priority.
`public const char * `[`name`](#structauto__init__module__t_1a0e238bef2c53bfae43849d0541d4b874) | Module auto-init function name.

## Members

#### `public `[`auto_init_fn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1ga2e643d5dd6d8b518a7062a80d4d7e3fb)` `[`init`](#structauto__init__module__t_1ad7ed0dc52b412cf8d763c82fa8212dca) 

Function to initialize the module.

#### `public `[`auto_init_prio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__utils_1gaf32f3d3aee54717322effd50a50ce77f)` `[`prio`](#structauto__init__module__t_1a02e4a554289c9773ae47fefe61bbf946) 

Module priority.

#### `public const char * `[`name`](#structauto__init__module__t_1a0e238bef2c53bfae43849d0541d4b874) 

Module auto-init function name.

