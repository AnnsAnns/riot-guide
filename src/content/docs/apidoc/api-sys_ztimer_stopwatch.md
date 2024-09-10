---
title: api-sys_ztimer_stopwatch.md
description: api-sys_ztimer_stopwatch.md
---
# group `sys_ztimer_stopwatch` 

Measure time with ztimer.

Benjamin Valentin [benjamin.valentin@ml-pa.com](mailto:benjamin.valentin@ml-pa.com)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`ztimer_stopwatch_init`](#group__sys__ztimer__stopwatch_1ga41094254ccf07a1a547731a8c2d39b39)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)`            | Initialize a ztimer stop watch The stop watch is not running yet.
`public inline static void `[`ztimer_stopwatch_start`](#group__sys__ztimer__stopwatch_1ga001fef1d5d53a18ecd524025a79a2f7d)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)`            | Start the stop watch timer.
`public inline static uint32_t `[`ztimer_stopwatch_measure`](#group__sys__ztimer__stopwatch_1ga6826e2b18444618b071903c06220a238)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)`            | Take a measurement from the stop watch timer.
`public inline static uint32_t `[`ztimer_stopwatch_reset`](#group__sys__ztimer__stopwatch_1ga25e5d00fe43c9a1dde6025b501feacbd)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)`            | Reset the stop watch start time.
`public inline static void `[`ztimer_stopwatch_stop`](#group__sys__ztimer__stopwatch_1gad66841864ad6e2206457f4a4dd2c76da)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)`            | Stop the stop watch.
`struct `[`ztimer_stopwatch_t`](#structztimer__stopwatch__t) | ztimer stop watch struct

## Members

#### `public inline static void `[`ztimer_stopwatch_init`](#group__sys__ztimer__stopwatch_1ga41094254ccf07a1a547731a8c2d39b39)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)` 

Initialize a ztimer stop watch The stop watch is not running yet.

#### Parameters
* `clock` The clock to use for the stopwatch 

* `timer` The stop watch clock to initialize

#### `public inline static void `[`ztimer_stopwatch_start`](#group__sys__ztimer__stopwatch_1ga001fef1d5d53a18ecd524025a79a2f7d)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)` 

Start the stop watch timer.

#### Parameters
* `timer` The stop watch timer to start

#### `public inline static uint32_t `[`ztimer_stopwatch_measure`](#group__sys__ztimer__stopwatch_1ga6826e2b18444618b071903c06220a238)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)` 

Take a measurement from the stop watch timer.

#### Parameters
* `timer` The stop watch timer to take a measurement of

#### Returns
[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) ticks since the stop watch was started / reset

#### `public inline static uint32_t `[`ztimer_stopwatch_reset`](#group__sys__ztimer__stopwatch_1ga25e5d00fe43c9a1dde6025b501feacbd)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)` 

Reset the stop watch start time.

The Stop Watch will start counting from 0 again.

#### Parameters
* `timer` The stop watch timer to reset

#### Returns
[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) ticks since the last reset / start of the watch

#### `public inline static void `[`ztimer_stopwatch_stop`](#group__sys__ztimer__stopwatch_1gad66841864ad6e2206457f4a4dd2c76da)`(`[`ztimer_stopwatch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_stopwatch.md#structztimer__stopwatch__t)` * timer)` 

Stop the stop watch.

The stop watch will no longer run.

#### Parameters
* `timer` The stop watch timer to stop

# struct `ztimer_stopwatch_t` 

ztimer stop watch struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * `[`clock`](#structztimer__stopwatch__t_1aaff737b4afe3b4445bc8eb80f3050354) | the clock to use
`public uint32_t `[`start_time`](#structztimer__stopwatch__t_1a748e681e380d637523513095c91ba4e2) | start of measurement

## Members

#### `public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * `[`clock`](#structztimer__stopwatch__t_1aaff737b4afe3b4445bc8eb80f3050354) 

the clock to use

#### `public uint32_t `[`start_time`](#structztimer__stopwatch__t_1a748e681e380d637523513095c91ba4e2) 

start of measurement

