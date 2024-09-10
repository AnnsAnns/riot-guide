---
title: api-oneway_malloc.md
description: api-oneway_malloc.md
---
# group `oneway_malloc` 

A malloc implementation without free for boards where the toolchain does not implement dynamic memory allocation.

The toolchain of MSP-430, for example, does not contain [malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392) and friends. These functions provide the same interface as the stdlib functions, but the option to free memory.

You should prefer statically allocated memory whenever possible.

**See also**: [Two-Level Segregated Fit memory allocator](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tlsf)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void * `[`malloc`](#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392)`(size_t size)`            | Allocation a block of memory.
`public void * `[`realloc`](#group__oneway__malloc_1ga1a6b5e8d2f1c37e5b43e4345586075be)`(void * ptr,size_t size)`            | Allocated a new block of memory and move the existing content.
`public void * `[`calloc`](#group__oneway__malloc_1ga57ec1f2580107f2f42684e77bf2a6d7c)`(size_t size,size_t cnt)`            | Allocate a memory block and set all its content to zeroes.
`public void `[`free`](#group__oneway__malloc_1gafbedc913aa4651b3c3b4b3aecd9b4711)`(void * ptr)`            | This is a no-op.

## Members

#### `public void * `[`malloc`](#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392)`(size_t size)` 

Allocation a block of memory.

#### Parameters
* `size` Size of the block to allocate in bytes. 

#### Returns
The new memory block. `NULL` if the "heap" is exhausted.

#### `public void * `[`realloc`](#group__oneway__malloc_1ga1a6b5e8d2f1c37e5b43e4345586075be)`(void * ptr,size_t size)` 

Allocated a new block of memory and move the existing content.

This function allocates a new block of memory and memcpy()s the content of the one `ptr` there.          We do not know the size of the old block, so illegal reads would be likely,
         if it was not for the fact that the memory heap up.

#### Parameters
* `ptr` Old memory block that was allocated with [malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392), [calloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga57ec1f2580107f2f42684e77bf2a6d7c) or [realloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga1a6b5e8d2f1c37e5b43e4345586075be). 

* `size` Size of the new block to allocated in bytes. 

#### Returns
The new memory block. `NULL` if the "heap" is exhausted.

#### `public void * `[`calloc`](#group__oneway__malloc_1ga57ec1f2580107f2f42684e77bf2a6d7c)`(size_t size,size_t cnt)` 

Allocate a memory block and set all its content to zeroes.

Please see [malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392) for more information. This implementation of [calloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga57ec1f2580107f2f42684e77bf2a6d7c) does not catch integer overflows 

#### Parameters
* `size` One factor of the number of bytes to allocated. 

* `cnt` The other factor of the number of bytes to allocated. 

#### Returns
The new memory block. `NULL` if the "heap" is exhausted.

#### `public void `[`free`](#group__oneway__malloc_1gafbedc913aa4651b3c3b4b3aecd9b4711)`(void * ptr)` 

This is a no-op.

You read correctly: This function does noting. Keep in mind that this function does not free the memory. It does nothing. 

#### Parameters
* `ptr` The ignored argument.

