---
title: api-sys_ztimer_convert_shift.md
description: api-sys_ztimer_convert_shift.md
---
# group `sys_ztimer_convert_shift` 

Translates between clock tick rates.

Translates the ticks of an underlying clock into virtual ticks at a different frequency, by using bit shifts. Thus it works only for fractions that are powers of 2.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`ztimer_convert_shift_up_init`](#group__sys__ztimer__convert__shift_1gad71d3971c51ea0da5cf18519a31f53c8)`(`[`ztimer_convert_shift_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_shift.md#structztimer__convert__shift__t)` * clock,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,unsigned shift)`            | ztimer_convert_shift init() for (fake) increasing timer frequency
`struct `[`ztimer_convert_shift_t`](#structztimer__convert__shift__t) | ztimer_convert_shift frequency conversion layer class

## Members

#### `public void `[`ztimer_convert_shift_up_init`](#group__sys__ztimer__convert__shift_1gad71d3971c51ea0da5cf18519a31f53c8)`(`[`ztimer_convert_shift_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_shift.md#structztimer__convert__shift__t)` * clock,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,unsigned shift)` 

ztimer_convert_shift init() for (fake) increasing timer frequency

Will cause every lower [now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) to be left-shifted and every set() to be right-shifted.

#### Parameters
* `clock` pointer to instance being initialized 

* `lower` pointer to underlying clock 

* `shift` shift value to use

# struct `ztimer_convert_shift_t` 

ztimer_convert_shift frequency conversion layer class

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` `[`super`](#structztimer__convert__shift__t_1a22cd397d02c4f90c1a6549478818defc) | Superclass instance.
`public unsigned `[`shift`](#structztimer__convert__shift__t_1ae5b85728d8dc0ff117cebe22ebe75c3b) | Frequency conversion scaling constant from lower to self.

## Members

#### `public `[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` `[`super`](#structztimer__convert__shift__t_1a22cd397d02c4f90c1a6549478818defc) 

Superclass instance.

#### `public unsigned `[`shift`](#structztimer__convert__shift__t_1ae5b85728d8dc0ff117cebe22ebe75c3b) 

Frequency conversion scaling constant from lower to self.

This value is saved as positive integer. The functions within the "ops" struct decides whether to left or right shift.

