---
title: api-sys_flash_utils.md
description: api-sys_flash_utils.md
---
# group `sys_flash_utils` 

read-only memory

This modules adds utility functions, macros, and functions for read-only memory. The goal is to hide the differences between modified architectures that map flash into the data address space (e.g. ARM) and those which doesn't (e.g. most AVR, Xtensa).

Usage
```cpp
#include "[flash_utils.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#flash__utils_8h)"
```

No module needs to be selected, this is a header-only implementation that is always available.

Porting Code to Use <tt>flash_utils</tt>This is mainly targeting applications developers to ease developing apps that work well on both legacy modified Harvard architectures (e.g. ATmega) and modern modified Harvard architectures (e.g. ARM, ATtiny, ...) as well as von-Neumann machines.

The intention is to limit in-tree use to a very small number of modules that yield the most "bang for the buck" and not leak the use of `flash_utils` through the API. Specifically, reverting to not using `flash_utils` should not be noticed by any user (unless looking at memory consumption).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`FLASH_ATTR`](#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)            | C type qualifier required to place a variable in flash.
`define `[`PRIsflash`](#group__sys__flash__utils_1ga03d3a3d9f0e2c56344cc5773edf59ed1)            | Format specifier for printing `FLASH CONST char *`
`define `[`TO_FLASH`](#group__sys__flash__utils_1ga04035c94001df85bb7ed5c24d3e6257b)            | Macro to allocate a string literal on flash and return a `FLASH_ATTR const char *` pointer to it Usage:
`define `[`FLASH_PUTS`](#group__sys__flash__utils_1ga39a1a2e42dd44ab7f64836183f52668d)            | A convenience wrapper for `flash_puts(TO_FLASH("str literal"))`
`public int `[`flash_strcmp`](#group__sys__flash__utils_1ga73b91c7dc9190b55abd2996aeedc5847)`(const char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)`            | Like `strcmp()`, but the second string resides in flash.
`public int `[`flash_strncmp`](#group__sys__flash__utils_1ga3c989264c8f44c899f54a4b22344f3ea)`(const char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,size_t n)`            | Like `strncmp()`, but the first string resides in flash.
`public size_t `[`flash_strlen`](#group__sys__flash__utils_1gae26e20d6cb6b9626a8cf4fef9960ee61)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)`            | Like `strlen()`, but the string resides in flash.
`public char * `[`flash_strcpy`](#group__sys__flash__utils_1ga2f2734aeb61b48b5d48c069c7cd23cdc)`(char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)`            | Like `strcpy()`, but the source flash resides in flash.
`public char * `[`flash_strncpy`](#group__sys__flash__utils_1ga1bb045c1d8b29eb2e678bbbae51d8826)`(char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,size_t n)`            | Like `strncpy()`, but the source flash resides in flash.
`public int `[`flash_printf`](#group__sys__flash__utils_1gac52c4e2c8557542bc7c0b05707c02837)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,...)`            | Like `[printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)`, but the format string resides in flash.
`public int `[`flash_vprintf`](#group__sys__flash__utils_1ga786c1fe92f7cbed8e4c9fdbd75d93a85)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,va_list args)`            | Like `vprintf()`, but the format string resides in flash.
`public int `[`flash_fprintf`](#group__sys__flash__utils_1gaaf4143091f8bf5c9a408d1961f79034c)`(FILE * stream,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,...)`            | Like `fprintf()`, but the format string resides in flash.
`public int `[`flash_vfprintf`](#group__sys__flash__utils_1ga1b7492913dd9d3a362d8da1d64bbdaec)`(FILE * stream,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,va_list args)`            | Like `vfprintf()`, but the format string resides in flash.
`public int `[`flash_snprintf`](#group__sys__flash__utils_1ga1415448138a652b4cc728a6831e6694a)`(char * buf,size_t buf_len,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,...)`            | Like `snprintf()`, but the format string resides in flash.
`public int `[`flash_vsnprintf`](#group__sys__flash__utils_1gad9cc79147675fcd5fb80d391c3ba1510)`(char * buf,size_t buf_len,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,va_list args)`            | Like `vsnprintf()`, but the format string resides in flash.
`public void `[`flash_puts`](#group__sys__flash__utils_1gaee2a02e74e608ac3cc669a411b80fcc4)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)`            | Like `puts()`, but the string resides in flash.
`public void * `[`flash_memcpy`](#group__sys__flash__utils_1ga9fe953f7c3abbd13b33c1d3c8edc2017)`(void * dest,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const void * src,size_t n)`            | Like `memcpy()`, but `src` resides in flash.
`public inline static void `[`flash_print_str`](#group__sys__flash__utils_1gace95cb109c48a69e04ca4c1ca6180c78)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)`            | Like [flash_puts](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1gaee2a02e74e608ac3cc669a411b80fcc4) but without line break.

## Members

#### `define `[`FLASH_ATTR`](#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a) 

C type qualifier required to place a variable in flash.

#### `define `[`PRIsflash`](#group__sys__flash__utils_1ga03d3a3d9f0e2c56344cc5773edf59ed1) 

Format specifier for printing `FLASH CONST char *`

Usage:

```cpp
[FLASH_ATTR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a) const char fmt[] = "I am printing \"%" [PRIsflash](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga03d3a3d9f0e2c56344cc5773edf59ed1) "\" from flash\n";
[FLASH_ATTR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a) const char msg[] = "message from flash";
[flash_printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1gac52c4e2c8557542bc7c0b05707c02837)(fmt, msg);
```

#### `define `[`TO_FLASH`](#group__sys__flash__utils_1ga04035c94001df85bb7ed5c24d3e6257b) 

Macro to allocate a string literal on flash and return a `FLASH_ATTR const char *` pointer to it Usage:

```cpp
[flash_puts](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1gaee2a02e74e608ac3cc669a411b80fcc4)([TO_FLASH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga04035c94001df85bb7ed5c24d3e6257b)("Hello world"));
```

#### `define `[`FLASH_PUTS`](#group__sys__flash__utils_1ga39a1a2e42dd44ab7f64836183f52668d) 

A convenience wrapper for `flash_puts(TO_FLASH("str literal"))`

Usage: 
```cpp
FLASH_PUTS("Hello world!");
```

#### `public int `[`flash_strcmp`](#group__sys__flash__utils_1ga73b91c7dc9190b55abd2996aeedc5847)`(const char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)` 

Like `strcmp()`, but the second string resides in flash.

This will be a zero-overhead wrapper on top of `strcmp()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_strncmp`](#group__sys__flash__utils_1ga3c989264c8f44c899f54a4b22344f3ea)`(const char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,size_t n)` 

Like `strncmp()`, but the first string resides in flash.

This will be a zero-overhead wrapper on top of `strncmp()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public size_t `[`flash_strlen`](#group__sys__flash__utils_1gae26e20d6cb6b9626a8cf4fef9960ee61)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)` 

Like `strlen()`, but the string resides in flash.

This will be a zero-overhead wrapper on top of `strlen()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public char * `[`flash_strcpy`](#group__sys__flash__utils_1ga2f2734aeb61b48b5d48c069c7cd23cdc)`(char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)` 

Like `strcpy()`, but the source flash resides in flash.

This will be a zero-overhead wrapper on top of `strcpy()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public char * `[`flash_strncpy`](#group__sys__flash__utils_1ga1bb045c1d8b29eb2e678bbbae51d8826)`(char * ram,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,size_t n)` 

Like `strncpy()`, but the source flash resides in flash.

This will be a zero-overhead wrapper on top of `strncpy()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_printf`](#group__sys__flash__utils_1gac52c4e2c8557542bc7c0b05707c02837)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,...)` 

Like `[printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)`, but the format string resides in flash.

This will be a zero-overhead wrapper on top of `[printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_vprintf`](#group__sys__flash__utils_1ga786c1fe92f7cbed8e4c9fdbd75d93a85)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,va_list args)` 

Like `vprintf()`, but the format string resides in flash.

This will be a zero-overhead wrapper on top of `vprintf()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_fprintf`](#group__sys__flash__utils_1gaaf4143091f8bf5c9a408d1961f79034c)`(FILE * stream,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,...)` 

Like `fprintf()`, but the format string resides in flash.

This will be a zero-overhead wrapper on top of `fprintf()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_vfprintf`](#group__sys__flash__utils_1ga1b7492913dd9d3a362d8da1d64bbdaec)`(FILE * stream,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,va_list args)` 

Like `vfprintf()`, but the format string resides in flash.

This will be a zero-overhead wrapper on top of `vfprintf()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_snprintf`](#group__sys__flash__utils_1ga1415448138a652b4cc728a6831e6694a)`(char * buf,size_t buf_len,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,...)` 

Like `snprintf()`, but the format string resides in flash.

This will be a zero-overhead wrapper on top of `snprintf()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public int `[`flash_vsnprintf`](#group__sys__flash__utils_1gad9cc79147675fcd5fb80d391c3ba1510)`(char * buf,size_t buf_len,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash,va_list args)` 

Like `vsnprintf()`, but the format string resides in flash.

This will be a zero-overhead wrapper on top of `vsnprintf()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public void `[`flash_puts`](#group__sys__flash__utils_1gaee2a02e74e608ac3cc669a411b80fcc4)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)` 

Like `puts()`, but the string resides in flash.

This will be a zero-overhead wrapper on top of `puts()` for von-Neumann architectures or Harvard architectures that also map their flash into the data address space.

#### `public void * `[`flash_memcpy`](#group__sys__flash__utils_1ga9fe953f7c3abbd13b33c1d3c8edc2017)`(void * dest,`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const void * src,size_t n)` 

Like `memcpy()`, but `src` resides in flash.

#### Parameters
* `dest` buffer to copy into 

* `src` flash data to copy 

* `n` number of bytes to copy

#### `public inline static void `[`flash_print_str`](#group__sys__flash__utils_1gace95cb109c48a69e04ca4c1ca6180c78)`(`[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * flash)` 

Like [flash_puts](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1gaee2a02e74e608ac3cc669a411b80fcc4) but without line break.

