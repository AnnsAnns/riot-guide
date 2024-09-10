---
title: api-turo_API.md
description: api-turo_API.md
---
# group `turo_API` 

The turo API that must have an implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`turo_init`](#group__turo__API_1gad6f7d6f64cf2181a04ae0fab2139784b)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)`            | Provides initial values for the turo context.
`public void `[`turo_container_open`](#group__turo__API_1ga50bd3f1d3e16ab1def95f1abe5f25f3a)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)`            | Outputs a container open.
`public void `[`turo_s32`](#group__turo__API_1ga8f73a249a36c2001ef0ea7c39239c009)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t val)`            | Outputs a signed 32 bit integer.
`public void `[`turo_u32`](#group__turo__API_1gae4a4d749e946f254b116db6fff8ffa18)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint32_t val)`            | Outputs an unsigned 32 bit integer.
`public void `[`turo_s64`](#group__turo__API_1ga3ae61886404dc3654fa345a563e2c1f8)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int64_t val)`            | Outputs a signed 64 bit integer.
`public void `[`turo_u64`](#group__turo__API_1gaf5e130f1dca3f88d80242e2bff917c27)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint64_t val)`            | Outputs a formatted result unsigned 64 bit integer.
`public void `[`turo_float`](#group__turo__API_1ga29fd80b595fb3f6800055ce8e8a841a4)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,float val)`            | Outputs a formatted float result of varied precision.
`public void `[`turo_string`](#group__turo__API_1ga07db98325201962a237b20db94c28b38)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * str)`            | Outputs a formatted string string.
`public void `[`turo_bool`](#group__turo__API_1ga3649efdbee64d0586655c9834112cf9b)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,bool val)`            | Outputs a formatted boolean result.
`public void `[`turo_dict_open`](#group__turo__API_1gacdd87eb764c27438d10e663526ea6595)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)`            | Outputs a formatted open of a dictionary result.
`public void `[`turo_dict_key`](#group__turo__API_1gaadf303572083e1899b7705bd67cdf1e3)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key)`            | Outputs a formatted open of a dictionary result.
`public void `[`turo_dict_close`](#group__turo__API_1gaf49822b1174345f2319908e5a1720069)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)`            | Outputs a formatted close of a dictionary result.
`public void `[`turo_array_open`](#group__turo__API_1ga4a6e822950a4a7de4a6a11e07fcaf0d8)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)`            | Outputs a formatted open of an array result.
`public void `[`turo_array_close`](#group__turo__API_1ga1597ad37ccaadb89a90d8dce84ca7b9f)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)`            | Outputs a formatted close of an array result.
`public void `[`turo_container_close`](#group__turo__API_1ga526af58e44f1b9f5085f1eee253976e4)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int exit_status)`            | Outputs a formatted close of a container result.

## Members

#### `public void `[`turo_init`](#group__turo__API_1gad6f7d6f64cf2181a04ae0fab2139784b)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)` 

Provides initial values for the turo context.

#### Parameters
* `ctx` The implementation specific turo context.

#### `public void `[`turo_container_open`](#group__turo__API_1ga50bd3f1d3e16ab1def95f1abe5f25f3a)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)` 

Outputs a container open.

Must be used when starting formatted result output.

#### Parameters
* `ctx` The implementation specific turo context.

#### `public void `[`turo_s32`](#group__turo__API_1ga8f73a249a36c2001ef0ea7c39239c009)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int32_t val)` 

Outputs a signed 32 bit integer.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_u32`](#group__turo__API_1gae4a4d749e946f254b116db6fff8ffa18)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint32_t val)` 

Outputs an unsigned 32 bit integer.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_s64`](#group__turo__API_1ga3ae61886404dc3654fa345a563e2c1f8)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int64_t val)` 

Outputs a signed 64 bit integer.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_u64`](#group__turo__API_1gaf5e130f1dca3f88d80242e2bff917c27)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,uint64_t val)` 

Outputs a formatted result unsigned 64 bit integer.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_float`](#group__turo__API_1ga29fd80b595fb3f6800055ce8e8a841a4)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,float val)` 

Outputs a formatted float result of varied precision.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_string`](#group__turo__API_1ga07db98325201962a237b20db94c28b38)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * str)` 

Outputs a formatted string string.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `str` The string to output.

#### `public void `[`turo_bool`](#group__turo__API_1ga3649efdbee64d0586655c9834112cf9b)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,bool val)` 

Outputs a formatted boolean result.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `val` The value to output.

#### `public void `[`turo_dict_open`](#group__turo__API_1gacdd87eb764c27438d10e663526ea6595)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)` 

Outputs a formatted open of a dictionary result.

A `turo_dict_close` must match.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context.

#### `public void `[`turo_dict_key`](#group__turo__API_1gaadf303572083e1899b7705bd67cdf1e3)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,const char * key)` 

Outputs a formatted open of a dictionary result.

A turo value must follow.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `key` The key of the dictionary.

#### `public void `[`turo_dict_close`](#group__turo__API_1gaf49822b1174345f2319908e5a1720069)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)` 

Outputs a formatted close of a dictionary result.

`turo_container_open` called 

`turo_dict_open` called

#### Parameters
* `ctx` The implementation specific turo context.

#### `public void `[`turo_array_open`](#group__turo__API_1ga4a6e822950a4a7de4a6a11e07fcaf0d8)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)` 

Outputs a formatted open of an array result.

A `turo_array_close` must match.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context.

#### `public void `[`turo_array_close`](#group__turo__API_1ga1597ad37ccaadb89a90d8dce84ca7b9f)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx)` 

Outputs a formatted close of an array result.

`turo_container_open` called 

`turo_array_open` called

#### Parameters
* `ctx` The implementation specific turo context.

#### `public void `[`turo_container_close`](#group__turo__API_1ga526af58e44f1b9f5085f1eee253976e4)`(`[`turo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__turo__API_1ga98db6a1bc1e6bf9b723f31c73bdf46b4)` * ctx,int exit_status)` 

Outputs a formatted close of a container result.

`turo_container_open` called

#### Parameters
* `ctx` The implementation specific turo context. 

* `exit_status` Exit status code for the result, 0 is success.

