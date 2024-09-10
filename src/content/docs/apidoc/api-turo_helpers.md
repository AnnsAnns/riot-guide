---
title: api-turo_helpers.md
description: api-turo_helpers.md
---
# group `turo_helpers` 

Common functions and helpers that all implementations can use.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`turo_array_u8`](#group__turo__helpers_1ga04da4549285d01dff94608ac86ec949d)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint8_t * vals,size_t size)`            | Outputs a formatted uint8 array result.
`public void `[`turo_array_s32`](#group__turo__helpers_1ga032e6f9b77dab9b916e81d96a143a9f4)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t * vals,size_t size)`            | Outputs a int32 array result.
`public void `[`turo_dict_string`](#group__turo__helpers_1ga5e8f3aa081b9c63061e6bb7ab459c8ad)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,const char * val)`            | Outputs a dict with string data.
`public void `[`turo_dict_s32`](#group__turo__helpers_1gaf7089c59c633cf465002a4000751675b)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,int32_t val)`            | Outputs a dict with integer data.
`public void `[`turo_simple_s32`](#group__turo__helpers_1ga3f811232ef92201e4c1b62cea35fa56a)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t val)`            | Outputs a full successful int32 turo result.
`public void `[`turo_simple_array_u8`](#group__turo__helpers_1gaefaabdf54f06f46f33a7b5dbe89fabc7)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint8_t * vals,size_t size)`            | Outputs a full successful uint8 array turo result.
`public void `[`turo_simple_array_s32`](#group__turo__helpers_1gac082bcbcd84ffe0ff1ae28d12b29185c)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t * vals,size_t size)`            | Outputs a full successful int32 array turo result.
`public void `[`turo_simple_dict_string`](#group__turo__helpers_1ga585cb3e154dda787005b79c4fcb8c1df)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,const char * val)`            | Outputs a full successful dict with string turo result.
`public void `[`turo_simple_dict_s32`](#group__turo__helpers_1gab2ad4d892e65ede672ad348ba6693ff2)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,int32_t val)`            | Outputs a full successful dict with an integer turo result.
`public void `[`turo_simple_exit_status`](#group__turo__helpers_1ga4590c531d23536a406cca8a04e83ef69)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int exit_status)`            | Outputs a full turo result with exit code.

## Members

#### `public void `[`turo_array_u8`](#group__turo__helpers_1ga04da4549285d01dff94608ac86ec949d)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint8_t * vals,size_t size)` 

Outputs a formatted uint8 array result.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `vals` A buffer of data to output. 

* `size` The amount of elements to output.

#### `public void `[`turo_array_s32`](#group__turo__helpers_1ga032e6f9b77dab9b916e81d96a143a9f4)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t * vals,size_t size)` 

Outputs a int32 array result.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `vals` A buffer of data to output. 

* `size` The amount of elements to output.

#### `public void `[`turo_dict_string`](#group__turo__helpers_1ga5e8f3aa081b9c63061e6bb7ab459c8ad)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,const char * val)` 

Outputs a dict with string data.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `key` A dictionary key. 

* `val` A string value of the dictionary

#### `public void `[`turo_dict_s32`](#group__turo__helpers_1gaf7089c59c633cf465002a4000751675b)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,int32_t val)` 

Outputs a dict with integer data.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `key` A dictionary key. 

* `val` The integer value of the dictionary.

#### `public void `[`turo_simple_s32`](#group__turo__helpers_1ga3f811232ef92201e4c1b62cea35fa56a)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t val)` 

Outputs a full successful int32 turo result.

This includes all opening and closing of turo elements.

turo ctx initialized

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_simple_array_u8`](#group__turo__helpers_1gaefaabdf54f06f46f33a7b5dbe89fabc7)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint8_t * vals,size_t size)` 

Outputs a full successful uint8 array turo result.

This includes all opening and closing of turo elements.

turo ctx initialized

#### Parameters
* `ctx` The implementation specific turo context. 

* `vals` The buffer of the integers. 

* `size` Number of elements in the array.

#### `public void `[`turo_simple_array_s32`](#group__turo__helpers_1gac082bcbcd84ffe0ff1ae28d12b29185c)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t * vals,size_t size)` 

Outputs a full successful int32 array turo result.

This includes all opening and closing of turo elements.

turo ctx initialized

#### Parameters
* `ctx` The implementation specific turo context. 

* `vals` The buffer of the integers. 

* `size` Number of elements in the array.

#### `public void `[`turo_simple_dict_string`](#group__turo__helpers_1ga585cb3e154dda787005b79c4fcb8c1df)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,const char * val)` 

Outputs a full successful dict with string turo result.

This includes all opening and closing of turo elements.

turo ctx initialized

#### Parameters
* `ctx` The implementation specific turo context. 

* `key` The dictionary key. 

* `val` The string value.

#### `public void `[`turo_simple_dict_s32`](#group__turo__helpers_1gab2ad4d892e65ede672ad348ba6693ff2)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key,int32_t val)` 

Outputs a full successful dict with an integer turo result.

This includes all opening and closing of turo elements.

turo ctx initialized

#### Parameters
* `ctx` The implementation specific turo context. 

* `key` The dictionary key. 

* `val` The integer value.

#### `public void `[`turo_simple_exit_status`](#group__turo__helpers_1ga4590c531d23536a406cca8a04e83ef69)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int exit_status)` 

Outputs a full turo result with exit code.

This includes all opening and closing of turo elements.

turo ctx initialized

#### Parameters
* `ctx` The implementation specific turo context. 

* `exit_status` The exit status to output.

