---
title: api-sys_malloc_monitor_internals.md
description: api-sys_malloc_monitor_internals.md
---
# group `sys_malloc_monitor_internals` 

internals for monitoring heap memory usage (calls to malloc/calloc/realloc/free)

Mikolai Gütschow [mikolai.guetschow@tu-dresden.de](mailto:mikolai.guetschow@tu-dresden.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`malloc_monitor_add`](#group__sys__malloc__monitor__internals_1ga82e9005a5d8fb9c3e2f7236644e51099)`(void * ptr,size_t size,`[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` pc,char * func_prefix)`            | Record malloc/calloc/realloc call increasing heap usage.
`public void `[`malloc_monitor_rm`](#group__sys__malloc__monitor__internals_1gafe19eeede325cb0f5c054f9d6f49ed1e)`(void * ptr,`[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` pc)`            | Record free/realloc call decreasing heap usage.
`public void `[`malloc_monitor_mv`](#group__sys__malloc__monitor__internals_1gaaca422c1a96ce39362a6dee116812448)`(void * ptr_old,void * ptr_new,size_t size_new,`[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` pc)`            | Record realloc call either increasing or decreasing heap usage.

## Members

#### `public void `[`malloc_monitor_add`](#group__sys__malloc__monitor__internals_1ga82e9005a5d8fb9c3e2f7236644e51099)`(void * ptr,size_t size,`[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` pc,char * func_prefix)` 

Record malloc/calloc/realloc call increasing heap usage.

#### Parameters
* `ptr` pointer to newly allocated memory 

* `size` size of newly allocated memory 

* `pc` PC of calling function 

* `func_prefix` prefix identifying memory function, one of "m","c","re"

#### `public void `[`malloc_monitor_rm`](#group__sys__malloc__monitor__internals_1gafe19eeede325cb0f5c054f9d6f49ed1e)`(void * ptr,`[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` pc)` 

Record free/realloc call decreasing heap usage.

#### Parameters
* `ptr` pointer to memory that is being freed 

* `pc` PC of calling function

#### `public void `[`malloc_monitor_mv`](#group__sys__malloc__monitor__internals_1gaaca422c1a96ce39362a6dee116812448)`(void * ptr_old,void * ptr_new,size_t size_new,`[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` pc)` 

Record realloc call either increasing or decreasing heap usage.

#### Parameters
* `ptr_old` pointer to previously allocated memory 

* `ptr_new` pointer to newly allocated memory 

* `size_new` size of newly allocated memory 

* `pc` PC of calling function

