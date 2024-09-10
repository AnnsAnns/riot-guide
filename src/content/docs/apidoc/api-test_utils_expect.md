---
title: api-test_utils_expect.md
description: api-test_utils_expect.md
---
# group `test_utils_expect` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`expect`](#group__test__utils__expect_1gadd37fb477fadd68ccc0f938027ba132e)            | abort the program if condition is false
`public inline static `[`NORETURN`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#compiler__hints_8h_1aa1728270d73c5d1598de1fd691762eb1)` void `[`_expect_failure`](#group__test__utils__expect_1gafc15db835caad3ec252d916a14d84d26)`(const char * file,unsigned line)`            | Function to handle failed expectation.

## Members

#### `define `[`expect`](#group__test__utils__expect_1gadd37fb477fadd68ccc0f938027ba132e) 

abort the program if condition is false

This is similar to [assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53), but will not be excluded from a build even if NDEBUG is set. Use e.g., in test application to "assert" conditions, in order to prevent a different compilation mode (a release build?) from making the test non-functional.

Otherwise, the macro [expect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__test__utils__expect_1gadd37fb477fadd68ccc0f938027ba132e) prints an error message to standard error and terminates the application by calling [core_panic()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#panic_8h_1a1f6114cc82aa8f5be5ebc2d601313c2f).

The purpose of this macro is to help programmers find bugs in their programs.

A failed condition generates output similar to: 0x89abcdef
*** RIOT kernel panic:
FAILED CONDITION.

...
 Where 0x89abcdef is an address. This address can be used with tools like `addr2line` (or e.g. `arm-none-eabi-addr2line` for ARM-based code), `objdump`, or `gdb` (with the command `info line *(0x89abcdef)`) to identify the line the condition failed in.

#### `public inline static `[`NORETURN`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#compiler__hints_8h_1aa1728270d73c5d1598de1fd691762eb1)` void `[`_expect_failure`](#group__test__utils__expect_1gafc15db835caad3ec252d916a14d84d26)`(const char * file,unsigned line)` 

Function to handle failed expectation.

This function was introduced for memory size optimization

this function **NEVER** returns!

#### Parameters
* `file` The file name of the file the expectation failed in 

* `line` The code line of `file` the expectation failed in

