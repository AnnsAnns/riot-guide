---
title: api-utils.md
description: api-utils.md
---
# group `utils` 

Utilities and helper functionality.

Additional scripts and configuration options to ease RIOT
   development.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DEVELHELP`](#group__utils_1ga8dac5ebebf5f229a9fca90dcdf37e913)            | This global macro activates functionality to help developers.
`define `[`CONFIG_THREAD_NAMES`](#group__utils_1gaa55ed7288e242cd4b2a8872f912dae96)            | This global macro enable storage of thread names to help developers.
`define `[`TEST_SUITES`](#group__utils_1gae90eaff98dfad549cb524063b2277272)            | This global macro activates functionality that is needed for automated testing but not needed otherwise.

## Members

#### `define `[`DEVELHELP`](#group__utils_1ga8dac5ebebf5f229a9fca90dcdf37e913) 

This global macro activates functionality to help developers.

To activate it set environment variable `DEVELHELP=1`, or disable explicitly with `DEVELHELP=0`.

The following list of what `DEVELHELP=1` enables is not comprehensive, but should give a rough impression of what to expect:

* Many runtime checks are enabled (stack overflow protection by means of [mpu_stack_guard](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pseudomodule__mpu__stack__guard) or [SCHED_TEST_STACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gab20069ca40d71219c706e79c7cf7216d), warnings when sending messages to invalid PIDs, …), some of which just log errors to stdout, some even halt the system.

* Some structures contain additional information, e.g. threads store their names and stack sizes.

* Some error paths that are active even at `DEVELHELP=0` perform more complex tasks to give useful output.

* The [assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53) function is only evaluated with `DEVELHELP=1` (or when `FORCE_ASSERTS=1`). Otherwise, the build system sets `NDEBUG` and thus skips assertions entirely.

* On a panic, the system halts (or enters the bootloader) instead of restarting.

#### `define `[`CONFIG_THREAD_NAMES`](#group__utils_1gaa55ed7288e242cd4b2a8872f912dae96) 

This global macro enable storage of thread names to help developers.

To activate it set environment variable `THREAD_NAMES=1`, or use Kconfig.
     It is automatically enabled if `DEVELHELP` is.

#### `define `[`TEST_SUITES`](#group__utils_1gae90eaff98dfad549cb524063b2277272) 

This global macro activates functionality that is needed for automated testing but not needed otherwise.

