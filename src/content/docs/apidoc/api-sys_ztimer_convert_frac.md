---
title: api-sys_ztimer_convert_frac.md
description: api-sys_ztimer_convert_frac.md
---
# group `sys_ztimer_convert_frac` 

Translates between clock tick rates.

Translates the ticks of an underlying clock into virtual ticks at a different frequency. This module makes use of frac for calculating fractions using multiplicative inversions, avoiding integer divisions. frac trades accuracy for speed. Please see the documentation of frac for more details.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`ztimer_convert_frac_init`](#group__sys__ztimer__convert__frac_1gae5236d7f947ab29a467a91c60600acd6)`(`[`ztimer_convert_frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_frac.md#structztimer__convert__frac__t)` * self,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,uint32_t freq_self,uint32_t freq_lower)`            | [ztimer_convert_frac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_frac.md#structztimer__convert__frac__t) constructor
`public void `[`ztimer_convert_frac_change_rate`](#group__sys__ztimer__convert__frac_1ga896ff6c81dc447346c15bf01d3b26495)`(`[`ztimer_convert_frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_frac.md#structztimer__convert__frac__t)` * self,uint32_t freq_self,uint32_t freq_lower)`            | Change the scaling without affecting the current count.
`struct `[`ztimer_convert_frac_t`](#structztimer__convert__frac__t) | ztimer_convert_frac frequency conversion layer class

## Members

#### `public void `[`ztimer_convert_frac_init`](#group__sys__ztimer__convert__frac_1gae5236d7f947ab29a467a91c60600acd6)`(`[`ztimer_convert_frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_frac.md#structztimer__convert__frac__t)` * self,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,uint32_t freq_self,uint32_t freq_lower)` 

[ztimer_convert_frac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_frac.md#structztimer__convert__frac__t) constructor

#### Parameters
* `self` pointer to instance being initialized 

* `lower` pointer to underlying clock 

* `freq_self` desired frequency of this clock 

* `freq_lower` frequency of the underlying clock

#### `public void `[`ztimer_convert_frac_change_rate`](#group__sys__ztimer__convert__frac_1ga896ff6c81dc447346c15bf01d3b26495)`(`[`ztimer_convert_frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert_frac.md#structztimer__convert__frac__t)` * self,uint32_t freq_self,uint32_t freq_lower)` 

Change the scaling without affecting the current count.

#### Parameters
* `self` pointer to instance being initialized 

* `freq_self` desired frequency of this clock 

* `freq_lower` frequency of the underlying clock

# struct `ztimer_convert_frac_t` 

ztimer_convert_frac frequency conversion layer class

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` `[`super`](#structztimer__convert__frac__t_1a3b143c8a0433ff3b2d9e7d889824f7fa) | Superclass instance.
`public `[`frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfrac__t)` `[`scale_now`](#structztimer__convert__frac__t_1a96db997470a4443720d6c0024fe608ec) | Frequency conversion scaling constant from lower to self.
`public `[`frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfrac__t)` `[`scale_set`](#structztimer__convert__frac__t_1a78e88cf6a437c4d95cb0325bf0d97579) | Frequency conversion scaling constant from self to lower.
`public uint32_t `[`round`](#structztimer__convert__frac__t_1a34163dd2f7d7014844a6f55a30eab712) | Rounding value, will be added to all lower set().

## Members

#### `public `[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` `[`super`](#structztimer__convert__frac__t_1a3b143c8a0433ff3b2d9e7d889824f7fa) 

Superclass instance.

#### `public `[`frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfrac__t)` `[`scale_now`](#structztimer__convert__frac__t_1a96db997470a4443720d6c0024fe608ec) 

Frequency conversion scaling constant from lower to self.

#### `public `[`frac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfrac__t)` `[`scale_set`](#structztimer__convert__frac__t_1a78e88cf6a437c4d95cb0325bf0d97579) 

Frequency conversion scaling constant from self to lower.

#### `public uint32_t `[`round`](#structztimer__convert__frac__t_1a34163dd2f7d7014844a6f55a30eab712) 

Rounding value, will be added to all lower set().

E.g., 1000000/32768== ~30.5. `round` will be set to 30.

