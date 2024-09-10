---
title: api-sys_imath.md
description: api-sys_imath.md
---
# group `sys_imath` 

This modules provides some integer-only math functions.

They can be used when no FPU is available or no exact precision is needed.

Karl Fessel [karl.fessel@ovgu.de](mailto:karl.fessel@ovgu.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SINI_PERIOD`](#group__sys__imath_1gaebacd65e71872233b9b23524cfc68636)            | Period of the [fast_sini()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857) function.
`define `[`SINI_MAX`](#group__sys__imath_1ga12dccb11b26d5dda58ce88d1fab1be90)            | Max value of the [fast_sini()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857) function.
`define `[`SINI_MIN`](#group__sys__imath_1ga08d8f3ce500c16595f23f39358588c2e)            | Min value of the [fast_sini()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857) function.
`public inline static int32_t `[`_ihelp`](#group__sys__imath_1ga976926d90a6696ce373265b7f00ccb12)`(int32_t x)`            | Internal fast_sini/fast_cosi helper function.
`public inline static int32_t `[`fast_sini`](#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857)`(int32_t x)`            | A sine approximation via a fourth-order cosine approx.
`public inline static int32_t `[`fast_cosi`](#group__sys__imath_1gaf9238948bb52056923e603390885dd39)`(int32_t x)`            | A a fourth-order cosine approx.
`public inline static unsigned `[`sqrti`](#group__sys__imath_1ga8219dbc9fd66507e026394a68061a08a)`(unsigned x)`            | Square root of an integer.
`public inline static uint32_t `[`powi`](#group__sys__imath_1ga35c44282a3d1d52a9785252170d4c686)`(unsigned x,unsigned y)`            | Returns the value of x to the power of y.

## Members

#### `define `[`SINI_PERIOD`](#group__sys__imath_1gaebacd65e71872233b9b23524cfc68636) 

Period of the [fast_sini()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857) function.

#### `define `[`SINI_MAX`](#group__sys__imath_1ga12dccb11b26d5dda58ce88d1fab1be90) 

Max value of the [fast_sini()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857) function.

#### `define `[`SINI_MIN`](#group__sys__imath_1ga08d8f3ce500c16595f23f39358588c2e) 

Min value of the [fast_sini()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857) function.

#### `public inline static int32_t `[`_ihelp`](#group__sys__imath_1ga976926d90a6696ce373265b7f00ccb12)`(int32_t x)` 

Internal fast_sini/fast_cosi helper function.

#### `public inline static int32_t `[`fast_sini`](#group__sys__imath_1ga21b234bb3e19d2adb0ae9bc2aecc6857)`(int32_t x)` 

A sine approximation via a fourth-order cosine approx.

source: [https://www.coranac.com/2009/07/sines/](https://www.coranac.com/2009/07/sines/)

#### Parameters
* `x` angle (with 2^15 units/circle) 

#### Returns
sine value (-2^12 ≤ y ≤ 2^12)

#### `public inline static int32_t `[`fast_cosi`](#group__sys__imath_1gaf9238948bb52056923e603390885dd39)`(int32_t x)` 

A a fourth-order cosine approx.

source: [https://www.coranac.com/2009/07/sines/](https://www.coranac.com/2009/07/sines/)

#### Parameters
* `x` angle (with 2^15 units/circle) 

#### Returns
sine value (-2^12 ≤ y ≤ 2^12)

#### `public inline static unsigned `[`sqrti`](#group__sys__imath_1ga8219dbc9fd66507e026394a68061a08a)`(unsigned x)` 

Square root of an integer.

#### Parameters
* `x` unsigned integer value 

#### Returns
square root of `x`

#### `public inline static uint32_t `[`powi`](#group__sys__imath_1ga35c44282a3d1d52a9785252170d4c686)`(unsigned x,unsigned y)` 

Returns the value of x to the power of y.

#### Parameters
* `x` base 

* `y` exponent

#### Returns
x^y

