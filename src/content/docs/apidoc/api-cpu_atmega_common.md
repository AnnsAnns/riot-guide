---
title: api-cpu_atmega_common.md
description: api-cpu_atmega_common.md
---
# group `cpu_atmega_common` 

AVR Atmega specific code.

This is header file provides `[strings.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#strings_8h)` that is missing in AVR libc for compatibility.

Pin Change InterruptsPin Change Interrupts (PCINTs) can be enabled using pseudo modules. To provide a low-memory overhead implementation, the PCINTs are grouped into **banks**. Each banks corresponds to one PCINT on the ATmega (PCINT0, ..., PCINT3).

To enable only a specific bank, simply add `USEMODULE += atmega_pcintN` to your Makefile. To enable all interrupts you can use `USEMODULE += atmega_pcint`.

In case you want to add a new CPU, simply provide an `atmega_pcint.h` with your CPU and adapt your Makefile.dep and Makefile.features files.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PRIo64`](#group__cpu__atmega__common_1ga792491e417d837fc693122428460bcba)            | Format string for octal 64-bit number.
`define `[`PRIx64`](#group__cpu__atmega__common_1gaba38357387a474f439428dee1984fc5a)            | Format string for hexadecimal 64-bit number.
`define `[`PRIu64`](#group__cpu__atmega__common_1gac582131d7a7c8ee57e73180d1714f9d5)            | Format string for unsigned 64-bit number.
`define `[`PRId64`](#group__cpu__atmega__common_1gae372e90b62c1e8b51dc5d95bf7f5ba48)            | Format string for signed 64-bit number.
`public inline static void `[`bzero`](#group__cpu__atmega__common_1ga93e183ede81d2c4f35cd4980920140c2)`(void * dest,size_t n_bytes)`            | Same as `memset(dest, 0, n_bytes)`, use `memset()` instead.
`public inline static int `[`bcmp`](#group__cpu__atmega__common_1ga1b26e57fcff202e3aa6023c98fe269d2)`(const void * s1,const void * s2,size_t n)`            | Same as `memcmp()`, use `memcmp` instead.
`public inline static void `[`bcopy`](#group__cpu__atmega__common_1ga15c250da9065b95f28dd39b239ef7bee)`(const void * src,void * dest,size_t n)`            | Same as `memmove()`, use `memmove()` or `memcpy()` instead.

## Members

#### `define `[`PRIo64`](#group__cpu__atmega__common_1ga792491e417d837fc693122428460bcba) 

Format string for octal 64-bit number.

#### `define `[`PRIx64`](#group__cpu__atmega__common_1gaba38357387a474f439428dee1984fc5a) 

Format string for hexadecimal 64-bit number.

#### `define `[`PRIu64`](#group__cpu__atmega__common_1gac582131d7a7c8ee57e73180d1714f9d5) 

Format string for unsigned 64-bit number.

#### `define `[`PRId64`](#group__cpu__atmega__common_1gae372e90b62c1e8b51dc5d95bf7f5ba48) 

Format string for signed 64-bit number.

#### `public inline static void `[`bzero`](#group__cpu__atmega__common_1ga93e183ede81d2c4f35cd4980920140c2)`(void * dest,size_t n_bytes)` 

Same as `memset(dest, 0, n_bytes)`, use `memset()` instead.

#### Parameters
* `dest` Memory to clear 

* `n_bytes` Size of memory to clear in bytes

#### `public inline static int `[`bcmp`](#group__cpu__atmega__common_1ga1b26e57fcff202e3aa6023c98fe269d2)`(const void * s1,const void * s2,size_t n)` 

Same as `memcmp()`, use `memcmp` instead.

#### Parameters
* `s1` first memory chunk to compare 

* `s2` second memory chunk to compare 

* `n` number of bytes to compare

#### Parameters
* `<tt>0</tt>` The first `n` bytes of `s1` and `s2` are equal 

* `<tt>!=0</tt>` The first `n` bytes of `s1` and `s2` differ in at least one bit

#### `public inline static void `[`bcopy`](#group__cpu__atmega__common_1ga15c250da9065b95f28dd39b239ef7bee)`(const void * src,void * dest,size_t n)` 

Same as `memmove()`, use `memmove()` or `memcpy()` instead.

#### Parameters
* `src` memory to copy from 

* `dest` memory to copy to 

* `n` number of bytes to copy

`src` and `dest` may overlap

It is preferred to use the standardize function `memcpy()` for non-overlapping memory regions and `memmove()` for overlapping memory regions instead of this obsolete function.

