---
title: api-sys_util_zptr.md
description: api-sys_util_zptr.md
---
# group `sys_util_zptr` 

Provides 32bit -> 16bit pointer compression.

On many platforms, some pointers may have to be aligned, e.g., to 4 byte boundaries. On 32bit platforms, that makes it possible to store all possible aligned 32bit pointers in a 16bit value as long as the total memory is small (e.g., with 4 byte alignment, all pointers within 256kb RAM can be represented by a 16bit value). This can save memory, at the cost of some instructions for compression/decompression.

In order to use pointer compression, ZPTR_BASE needs to be defined to a (4 byte aligned) base address.

A printf format macro (PRIzptr) is provided.

You can then use zptr_t instead of a pointer type, using the supplied functions to compress / decompress, e.g., void func(void *ptr) {
    printf("%"PRIzptr"\n", ptr);
    ...
    free(ptr);
 }

... would become void func(zptr_t zptr);
    printf("%"PRIzptr"\n", zptr);
    ...
    free(zptrd(zptr));
}

If ZPTR_BASE is unset, [zptr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1gafae15584f6356f9392f4cd7459dc61ea) / [zptrc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1ga0d776532fbf73f97f4e1c1d8b6ee6b9c) / [zptrd()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1gada85e1164d5503d9b9572dcef1bc8afd) will transparently and without overhead compile to normal (uncompressed) pointer operations.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PRIzptr`](#group__sys__util__zptr_1ga21a367287af6d549c5a235669a0addf4)            | zptr printf format definition
`define `[`ZPTR_MAX_ADDR`](#group__sys__util__zptr_1gab85ed2300b8181d3caadffd431b8c38d)            | zptr highest compressible address
`public inline static int `[`zptr_check`](#group__sys__util__zptr_1ga9f9c7408243cbbe4df3251351420c2d1)`(void * pointer)`            | Determine if a pointer is compressible by [zptrc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1ga0d776532fbf73f97f4e1c1d8b6ee6b9c)
`public inline static `[`zptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1gafae15584f6356f9392f4cd7459dc61ea)` `[`zptrc`](#group__sys__util__zptr_1ga0d776532fbf73f97f4e1c1d8b6ee6b9c)`(void * pointer)`            | Compress a pointer (if possible)
`public inline static void * `[`zptrd`](#group__sys__util__zptr_1gada85e1164d5503d9b9572dcef1bc8afd)`(`[`zptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1gafae15584f6356f9392f4cd7459dc61ea)` zptr)`            | Decompress a pointer.

## Members

#### `define `[`PRIzptr`](#group__sys__util__zptr_1ga21a367287af6d549c5a235669a0addf4) 

zptr printf format definition

#### `define `[`ZPTR_MAX_ADDR`](#group__sys__util__zptr_1gab85ed2300b8181d3caadffd431b8c38d) 

zptr highest compressible address

#### `public inline static int `[`zptr_check`](#group__sys__util__zptr_1ga9f9c7408243cbbe4df3251351420c2d1)`(void * pointer)` 

Determine if a pointer is compressible by [zptrc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1ga0d776532fbf73f97f4e1c1d8b6ee6b9c)

#### Parameters
* `pointer` pointer to check 

#### Returns
1 if pointer can be compressed, 0 if not

#### `public inline static `[`zptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1gafae15584f6356f9392f4cd7459dc61ea)` `[`zptrc`](#group__sys__util__zptr_1ga0d776532fbf73f97f4e1c1d8b6ee6b9c)`(void * pointer)` 

Compress a pointer (if possible)

Subtracts ZPTR_BASE, then right-shifts `pointer` by two.

#### Parameters
* `pointer` pointer to compress 

#### Returns
compressed pointer

#### `public inline static void * `[`zptrd`](#group__sys__util__zptr_1gada85e1164d5503d9b9572dcef1bc8afd)`(`[`zptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__util__zptr_1gafae15584f6356f9392f4cd7459dc61ea)` zptr)` 

Decompress a pointer.

Left-shifts zptr_t by two, then adds ZPTR_BASE.

#### Parameters
* `zptr` compressed pointer 

#### Returns
decompressed pointer

