---
title: api-busy_wait.md
description: api-busy_wait.md
---
# group `busy_wait` 

This modules provides helper functions for busy waiting on short intervals before timers are initialized, e.g.

in `[board_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__init__config_1ga916f2adc2080b4fe88034086d107a8dc)`.

Benjamin Valentin [benjamin.valentin@ml-pa.com](mailto:benjamin.valentin@ml-pa.com)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CPU_CYCLES_PER_LOOP`](#group__busy__wait_1gaa39609ca78463e2f63f038cb8693f296)            | CPU cycles per busy wait loop iteration.
`public inline static void `[`busy_wait`](#group__busy__wait_1ga67b34fdc2614588b4db42bb9c332a019)`(unsigned loops)`            | Spin for a number of cycles.
`public inline static void `[`busy_wait_us`](#group__busy__wait_1ga047350dbf15b7134f9b691a27b4cac95)`(unsigned usec)`            | Spin for a number of microseconds.

## Members

#### `define `[`CPU_CYCLES_PER_LOOP`](#group__busy__wait_1gaa39609ca78463e2f63f038cb8693f296) 

CPU cycles per busy wait loop iteration.

This can be used to roughly estimate the number of cycles for a given wait time.

#### `public inline static void `[`busy_wait`](#group__busy__wait_1ga67b34fdc2614588b4db42bb9c332a019)`(unsigned loops)` 

Spin for a number of cycles.

This will not take into account cycles spent on interrupts if they are enabled and occur.

#### Parameters
* `loops` Number of loop iterations to take

#### `public inline static void `[`busy_wait_us`](#group__busy__wait_1ga047350dbf15b7134f9b691a27b4cac95)`(unsigned usec)` 

Spin for a number of microseconds.

This will roughly try to match the requested delay time, but don't expect high accuracy.

This will not take into account cycles spent on interrupts if they are enabled and occur.

#### Parameters
* `usec` Number of µs to spin for.

