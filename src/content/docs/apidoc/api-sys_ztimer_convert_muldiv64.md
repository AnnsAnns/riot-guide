---
title: api-sys_ztimer_convert_muldiv64.md
description: api-sys_ztimer_convert_muldiv64.md
---
# group `sys_ztimer_convert_muldiv64` 

ztimer frequency conversion module (64bit arithmetic)

This ztimer module allows converting a lower-level ztimer clockwith a given frequency to another frequency.

It is configured by passing two parameters (div, mul). Given a lower clock frequency f_low and a desired upper frequency f_upper, div and mul must be chosen such that (f_upper * mul / div) == f_lower
 A div or mul value of 0 is treated as 1 (no multiplication or division by 0 is done).

On every [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c), the target offset is first multiplied by mul and then divided by div, before passing it to the lower ztimer's [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c).

On every [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8), the value from the lower ztimer is first multiplied by div and then divided by mul.

Multiplication and division is done using 64bit multiplication / division, thus its use should be avoided in favour of more optimized conversion modules.

Example:

* if a ztimer_periph_timer with 250kHz is to be "sped up" to 1MHz, use div=4, mul=0

* if a ztimer with 1024Hz is to be converted to 1000Hz, use div=125, mul=128

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`ztimer_convert_muldiv64_init`](#group__sys__ztimer__convert__muldiv64_1ga436d01676d7383cccb86df744068db1c)`(`[`ztimer_convert_muldiv64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_muldiv64.md#structztimer__convert__muldiv64__t)` * ztimer_convert_muldiv64,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,unsigned div,unsigned mul)`            | ztimer_convert_muldiv64 initialization function
`struct `[`ztimer_convert_muldiv64_t`](#structztimer__convert__muldiv64__t) | ztimer_convert_muldiv64 structure

## Members

#### `public void `[`ztimer_convert_muldiv64_init`](#group__sys__ztimer__convert__muldiv64_1ga436d01676d7383cccb86df744068db1c)`(`[`ztimer_convert_muldiv64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_muldiv64.md#structztimer__convert__muldiv64__t)` * ztimer_convert_muldiv64,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,unsigned div,unsigned mul)` 

ztimer_convert_muldiv64 initialization function

#### Parameters
* `ztimer_convert_muldiv64` instance to initialize 

* `lower` lower timer to convert 

* `div` see module doc 

* `mul` see module doc

# struct `ztimer_convert_muldiv64_t` 

ztimer_convert_muldiv64 structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` `[`super`](#structztimer__convert__muldiv64__t_1a2640fb2e24035165865804b7723a9073) | super class
`public uint16_t `[`mul`](#structztimer__convert__muldiv64__t_1a58f13dae128915631d5c109bbae558c7) | please read
`public uint16_t `[`div`](#structztimer__convert__muldiv64__t_1a4877888680db5543b5068a0694e8de7c) | module docs

## Members

#### `public `[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` `[`super`](#structztimer__convert__muldiv64__t_1a2640fb2e24035165865804b7723a9073) 

super class

#### `public uint16_t `[`mul`](#structztimer__convert__muldiv64__t_1a58f13dae128915631d5c109bbae558c7) 

please read

#### `public uint16_t `[`div`](#structztimer__convert__muldiv64__t_1a4877888680db5543b5068a0694e8de7c) 

module docs

