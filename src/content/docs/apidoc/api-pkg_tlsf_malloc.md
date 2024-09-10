---
title: api-pkg_tlsf_malloc.md
description: api-pkg_tlsf_malloc.md
---
# group `pkg_tlsf_malloc` 

TLSF-based global memory allocator.

This is a malloc/free implementation built on top of the TLSF allocator. It defines a global tlsf_control block and performs allocations on that block. This implementation replaces the system malloc

Additionally, the calls to TLSF are wrapped in [irq_disable()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1ga7cb620d77da293d98ccc1715d6cb9a02)/irq_restore(), to make it thread-safe.

If this module is used as the system memory allocator, then the global memory control block should be initialized as the first thing before the stdlib is used. Boards should use [tlsf_add_global_pool()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tlsf__malloc_1ga66c0db8f9341cb9daabef2d4b08b035a) at startup to add all the memory regions they want to make available for dynamic allocation via [malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`tlsf_size_walker`](#group__pkg__tlsf__malloc_1gafaa46b185f45af50d5f8be034ab5d4a3)`(void * ptr,size_t size,int used,void * user)`            | Walk the memory pool to print all block sizes and to calculate the total amount of free and used block sizes.
`public int `[`tlsf_add_global_pool`](#group__pkg__tlsf__malloc_1ga66c0db8f9341cb9daabef2d4b08b035a)`(void * mem,size_t bytes)`            | Add an area of memory to the global allocator pool.
`public tlsf_t `[`_tlsf_get_global_control`](#group__pkg__tlsf__malloc_1gae543b38e2f4916ed72ba6c0219663441)`(void)`            | Get a pointer to the global tlsf_control block.
`struct `[`tlsf_size_container_t`](#structtlsf__size__container__t) | Struct to hold the total sizes of free and used blocks Used for [tlsf_size_walker()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tlsf__malloc_1gafaa46b185f45af50d5f8be034ab5d4a3)

## Members

#### `public void `[`tlsf_size_walker`](#group__pkg__tlsf__malloc_1gafaa46b185f45af50d5f8be034ab5d4a3)`(void * ptr,size_t size,int used,void * user)` 

Walk the memory pool to print all block sizes and to calculate the total amount of free and used block sizes.

This function is passed to tlsf_walk_pool()

#### Parameters
* `ptr` Pointer to the current block. 

* `size` Size of the current block at `ptr`. 

* `used` Shows whether the current block is used or free. 

* `user` Custom data expected to be of type `pointer to [tlsf_size_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_tlsf_malloc.md#structtlsf__size__container__t)`

#### `public int `[`tlsf_add_global_pool`](#group__pkg__tlsf__malloc_1ga66c0db8f9341cb9daabef2d4b08b035a)`(void * mem,size_t bytes)` 

Add an area of memory to the global allocator pool.

The first time this function is called, it will automatically perform a tlsf_create() on the global tlsf_control block.

If this module is used, then this function MUST be called at least once, before any allocations take place.

#### Parameters
* `mem` Pointer to memory area. Should be aligned to 4 bytes. 

* `bytes` Size in bytes of the memory area.

#### Returns
0 on success, nonzero on failure.

#### `public tlsf_t `[`_tlsf_get_global_control`](#group__pkg__tlsf__malloc_1gae543b38e2f4916ed72ba6c0219663441)`(void)` 

Get a pointer to the global tlsf_control block.

Use for debugging purposes only.

# struct `tlsf_size_container_t` 

Struct to hold the total sizes of free and used blocks Used for [tlsf_size_walker()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tlsf__malloc_1gafaa46b185f45af50d5f8be034ab5d4a3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`free`](#structtlsf__size__container__t_1a688a0caee90fbb4d47bced2c8e85b908) | total free size
`public unsigned `[`used`](#structtlsf__size__container__t_1a9a239b42283c860962b2558f9da244be) | total used size

## Members

#### `public unsigned `[`free`](#structtlsf__size__container__t_1a688a0caee90fbb4d47bced2c8e85b908) 

total free size

#### `public unsigned `[`used`](#structtlsf__size__container__t_1a9a239b42283c860962b2558f9da244be) 

total used size

