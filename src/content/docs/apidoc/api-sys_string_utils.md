---
title: api-sys_string_utils.md
description: api-sys_string_utils.md
---
# group `sys_string_utils` 

This header provides utility functions that the standard C libs `string.h` lacks, such as [explicit_bzero](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__string__utils_1gab3f938798fad99cd9a23c585b03f24e5).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`explicit_bzero`](#group__sys__string__utils_1gab3f938798fad99cd9a23c585b03f24e5)`(void * dest,size_t n_bytes)`            | Like `memset(dest, 0, n_bytes)`, but secure.
`public ssize_t `[`strscpy`](#group__sys__string__utils_1ga211d69aebc6717c5ec61bb721ff73d3f)`(char * dest,const char * src,size_t count)`            | Copy the string, or as much of it as fits, into the dest buffer.
`public const void * `[`memchk`](#group__sys__string__utils_1ga8130627d9c621af1243ad70aba592acd)`(const void * data,uint8_t c,size_t len)`            | Check if the entire buffer is filled with the same byte.

## Members

#### `public inline static void `[`explicit_bzero`](#group__sys__string__utils_1gab3f938798fad99cd9a23c585b03f24e5)`(void * dest,size_t n_bytes)` 

Like `memset(dest, 0, n_bytes)`, but secure.

Unlike `memset(dest, 0, n_bytes)`, this will zero out the memory even in cases the compiler would optimize out the call to `memset()`.

This is only sensible to use for sensitive data. For non-sensitive data, keep using `memset()` for performance reasons.

#### Parameters
* `dest` Memory to clear 

* `n_bytes` Size of memory to clear in bytes

#### `public ssize_t `[`strscpy`](#group__sys__string__utils_1ga211d69aebc6717c5ec61bb721ff73d3f)`(char * dest,const char * src,size_t count)` 

Copy the string, or as much of it as fits, into the dest buffer.

Preferred to `strncpy` since it always returns a valid string, and doesn't unnecessarily force the tail of the destination buffer to be zeroed. If the zeroing is desired, it's likely cleaner to use `strscpy` with an overflow test, then just memset the tail of the dest buffer.

#### Parameters
* `dest` Where to copy the string to 

* `src` Where to copy the string from 

* `count` Size of destination buffer

The destination buffer is at least one byte large, as otherwise the terminating zero byte won't fit

#### Returns
the number of characters copied (not including the trailing zero) 

#### Parameters
* `-E2BIG` the destination buffer wasn't big enough

#### `public const void * `[`memchk`](#group__sys__string__utils_1ga8130627d9c621af1243ad70aba592acd)`(const void * data,uint8_t c,size_t len)` 

Check if the entire buffer is filled with the same byte.

#### Parameters
* `data` The buffer to probe 

* `c` The byte to check of 

* `len` Size of the buffer

#### Returns
NULL if the entire buffer is filled with `c`

#### Returns
pointer to the first non-matching byte

