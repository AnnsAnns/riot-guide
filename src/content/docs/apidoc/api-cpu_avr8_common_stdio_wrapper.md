---
title: api-cpu_avr8_common_stdio_wrapper.md
description: api-cpu_avr8_common_stdio_wrapper.md
---
# group `cpu_avr8_common_stdio_wrapper` 

This module a wrapper for the [stdio.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#stdio_8h) header intended to make use of [flash_utils.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#flash__utils_8h) in [printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2) automatically.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`printf`](#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)            | A wrapper for the `[printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)` function that passes arguments through unmodified, but fails to compile if the first argument is not a string literal.

## Members

#### `define `[`printf`](#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2) 

A wrapper for the `[printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)` function that passes arguments through unmodified, but fails to compile if the first argument is not a string literal.

See e.g. `man 3 printf` or [https://linux.die.net/man/3/printf](https://linux.die.net/man/3/printf) for documentation the printf function. This applies fully here, as it passes through the arguments unmodified.

The motivation for enforcing the first argument to be a string literal is three-fold:

* It prevents security issues due format strings controlled by adversaries.

* It makes sure that modern C compilers that do understand format specifiers have knowledge of the format string and can verify that the other arguments match what is given via format string specifiers

* It allows to force the format string to flash even for Harvard architectures transparently

Similar wrappers are also in place for `vprintf()`, `fprintf()`, `vfprintf()`, `snprintf()`, `vsnprintf()`.

