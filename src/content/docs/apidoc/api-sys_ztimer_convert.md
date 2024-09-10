---
title: api-sys_ztimer_convert.md
description: api-sys_ztimer_convert.md
---
# group `sys_ztimer_convert` 

ztimer frequency conversion modules

ztimer provides multiple conversion modules:

* ztimer_convert_shift: should be used if the fraction is a power of two.

* ztimer_convert_frac: should be used if the fraction is not a power of two. rounding might be a bit off for some fractions.

* ztimer_convert_muldiv64: can be used instead of ztimer_convert_frac, if 64bit division is cheap on the target board.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`ztimer_convert_init`](#group__sys__ztimer__convert_1ga5dbbead6d76414d4925b03790304824d)`(`[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` * ztimer_convert,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,uint32_t max_value)`            | Initialization function for [ztimer_convert_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t).
`public void `[`ztimer_convert_cancel`](#group__sys__ztimer__convert_1gadaa462c0d8e8128852aa52ec1b7e40a2)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | ztimer_convert common cancel() op
`public void `[`ztimer_convert_start`](#group__sys__ztimer__convert_1gad25f3704cb636227e8dcfd413a550f19)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | ztimer_convert common start() op
`public void `[`ztimer_convert_stop`](#group__sys__ztimer__convert_1gaf8e615075c514a77face03898f11724f)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | ztimer_convert common stop() op
`struct `[`ztimer_convert_t`](#structztimer__convert__t) | base type for ztimer convert modules

## Members

#### `public void `[`ztimer_convert_init`](#group__sys__ztimer__convert_1ga5dbbead6d76414d4925b03790304824d)`(`[`ztimer_convert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t)` * ztimer_convert,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * lower,uint32_t max_value)` 

Initialization function for [ztimer_convert_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_convert.md#structztimer__convert__t).

`max_value` needs to be set to the maximum value that can be converted without overflowing. E.g., if the conversion module slows down a lower clock by factor X, max_value needs to be set to UINT32_MAX / X.

#### Parameters
* `ztimer_convert` object to initialize 

* `lower` lower ztimer clock 

* `max_value` maximum value for this clock's set()

#### `public void `[`ztimer_convert_cancel`](#group__sys__ztimer__convert_1gadaa462c0d8e8128852aa52ec1b7e40a2)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

ztimer_convert common cancel() op

Used by some conversion modules as ztimer_clock_t::ops.cancel().

#### Parameters
* `clock` ztimer clock to operate on

#### `public void `[`ztimer_convert_start`](#group__sys__ztimer__convert_1gad25f3704cb636227e8dcfd413a550f19)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

ztimer_convert common start() op

Used by some conversion modules as ztimer_clock_t::ops.start().

#### Parameters
* `clock` ztimer clock to operate on

#### `public void `[`ztimer_convert_stop`](#group__sys__ztimer__convert_1gaf8e615075c514a77face03898f11724f)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

ztimer_convert common stop() op

Used by some conversion modules as ztimer_clock_t::ops.stop().

#### Parameters
* `clock` ztimer clock to operate on

# struct `ztimer_convert_t` 

base type for ztimer convert modules

This type is supposed to be extended. It provides common fields for a ztimer clock that has a parent clock.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` `[`super`](#structztimer__convert__t_1abf1ca0abb7668b24d667e13c35cc8cd6) | [ztimer_clock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__clock) super class
`public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * `[`lower`](#structztimer__convert__t_1a3baac322b7806a1d8fc4da2bd3fe076b) | lower clock device
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`lower_entry`](#structztimer__convert__t_1abbaa5e5e1adb17f4e52520ea6466ca4f) | timer entry in parent clock

## Members

#### `public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` `[`super`](#structztimer__convert__t_1abf1ca0abb7668b24d667e13c35cc8cd6) 

[ztimer_clock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__clock) super class

#### `public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * `[`lower`](#structztimer__convert__t_1a3baac322b7806a1d8fc4da2bd3fe076b) 

lower clock device

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`lower_entry`](#structztimer__convert__t_1abbaa5e5e1adb17f4e52520ea6466ca4f) 

timer entry in parent clock

