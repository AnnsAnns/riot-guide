---
title: api-sys_ztimer_periph_timer.md
description: api-sys_ztimer_periph_timer.md
---
# group `sys_ztimer_periph_timer` 

ztimer periph/timer backend

This ztimer module implements a ztimer virtual clock on top of periph/timer.

This module has two tuning values: "adjust": will be subtracted from every timer set. "min": Every timer will be set to max("min", value).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`ztimer_periph_timer_init`](#group__sys__ztimer__periph__timer_1gabe9575e40a44642a4ce743ed4b563fef)`(`[`ztimer_periph_timer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_periph_timer.md#structztimer__periph__timer__t)` * clock,`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,uint32_t freq,uint32_t max_val)`            | ztimer periph initialization
`struct `[`ztimer_periph_timer_t`](#structztimer__periph__timer__t) | ztimer periph context structure

## Members

#### `public void `[`ztimer_periph_timer_init`](#group__sys__ztimer__periph__timer_1gabe9575e40a44642a4ce743ed4b563fef)`(`[`ztimer_periph_timer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_periph_timer.md#structztimer__periph__timer__t)` * clock,`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,uint32_t freq,uint32_t max_val)` 

ztimer periph initialization

Initializes the given periph timer and sets up the ztimer device.

#### Parameters
* `clock` ztimer periph device to initialize 

* `dev` periph timer to use 

* `freq` frequency to configure 

* `max_val` maximum value this timer supports

# struct `ztimer_periph_timer_t` 

ztimer periph context structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` `[`super`](#structztimer__periph__timer__t_1a4fffd601c5700342c985873b223cf086) | super class
`public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`dev`](#structztimer__periph__timer__t_1a1b98503a445c101d21881c2f99d91c66) | periph timer device
`public uint16_t `[`min`](#structztimer__periph__timer__t_1a1852d98a985f1959dc2c60489bf5ac0d) | optional minimum value

## Members

#### `public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` `[`super`](#structztimer__periph__timer__t_1a4fffd601c5700342c985873b223cf086) 

super class

#### `public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`dev`](#structztimer__periph__timer__t_1a1b98503a445c101d21881c2f99d91c66) 

periph timer device

#### `public uint16_t `[`min`](#structztimer__periph__timer__t_1a1852d98a985f1959dc2c60489bf5ac0d) 

optional minimum value

