---
title: api-sys_ztimer64.md
description: api-sys_ztimer64.md
---
# group `sys_ztimer64` 

ztimer 64bit version

IntroductionThis module implements a 64bit version of the ztimer API. All ztimer_* functions have a ztimer64_* equivalent that behaves the same, but allowing offsets >= 2^32.

In addition to that, ztimer64 offers functions taking absolute target times as parameter. If the absolute target time is in the past, a timer would trigger right away.

Here's a table for absolute variants:

relative version   |absolute version
--------- | ---------
[ztimer64_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga87b08fe883badce9337e9602190bf054)|[ztimer64_set_at()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1gaa9f4911ef27bfddbbb44243714d774fb)
[ztimer64_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1gaac757c41341971b2b09c5e2ec6aebb4e)|[ztimer64_sleep_until()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga4efd1bbe6819b641c49aa6c0367e289b)
[ztimer64_set_msg()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga64d04d679dff7c117109c80086a0e70e)|[ztimer64_set_msg_at()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1gae116fad9c3b25b9a16588439b91266ad)
[ztimer64_set_wakeup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga2bca591fcf1d1b1bd8d9909ad90b582f)|[ztimer64_set_wakeup_at()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga0a3ef706a76680957efba00b881f87f1)
[ztimer64_set_timeout_flag()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga3b40cc6cefd8fc220519d4c306f79157)|[ztimer64_set_timeout_flag_at()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga9f5c3be3d2f5f0b4683786ef38d9307b)
[ztimer64_msg_receive_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga76a3062ce65e9a9f3a19700f71ecb0a5)|[ztimer64_msg_receive_until()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1gaad2d699f7881c484651ba6a5ce2c03a0)
[ztimer64_mutex_lock_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga7ecbcf7731ee8dc3cbb5b36e60468178)|[ztimer64_mutex_lock_until()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga462c0009a38ce5e0f8069ba7d30ad96a)
[ztimer64_rmutex_lock_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1gac115b8099a7be028ad30f44718c50ea5)|[ztimer64_rmutex_lock_until()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1gaf9a884d307ac738e8d0980a74007fb50)

ztimer64 clocksztimer64 provides automatic setup of ZTIMER64_SEC, ZTIMER64_MSEC and ZTIMER64_USEC, using the ztimer(32) clocks as base clocks. Enable them by depending on ztimer64_sec, ztimer64_msec and / or ztimer64_usec.

ztimer64 always keeps a timer running on the base clock. Depending on the base clock, this blocks low-power sleep modes. If the hardware supports it, the msec and sec timers should be using a low-power capable timer (e.g., periph_rtt). ztimer64_usec will almost certainly block low-power sleep.

TODO:

* some explicit power management

* implement adjust_set and adjust_sleep API

* implement setting a 64bit reference time (epoch)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MSG_ZTIMER64`](#group__sys__ztimer64_1ga83c37dbd894d60ac4a5424fa71850530)            | msg type used by ztimer64_msg_receive_timeout
`public uint64_t `[`ztimer64_now`](#group__sys__ztimer64_1ga620ac7277ccde1f21a78fa3b70f8dfcf)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock)`            | Get the current time from a clock.
`public inline static uint64_t `[`ztimer64_offset2absolute`](#group__sys__ztimer64_1gaa60e84488651941e347c30ef180df68b)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t offset)`            | Get absolute target time for a clock given offset.
`public void `[`ztimer64_set_at`](#group__sys__ztimer64_1gaa9f4911ef27bfddbbb44243714d774fb)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target)`            | Set a timer on a clock (absolute version)
`public inline static void `[`ztimer64_set`](#group__sys__ztimer64_1ga87b08fe883badce9337e9602190bf054)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t offset)`            | Set a timer on a clock (relative version)
`public unsigned `[`ztimer64_is_set`](#group__sys__ztimer64_1ga2177b5593c18643bbd2ff30de4ed4620)`(const `[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer)`            | Check if a timer is currently active.
`public void `[`ztimer64_remove`](#group__sys__ztimer64_1ga3333be06edbf7e1a8388058035b1da51)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer)`            | Remove a timer from a clock.
`public void `[`ztimer64_set_msg_at`](#group__sys__ztimer64_1gae116fad9c3b25b9a16588439b91266ad)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Post a message at a specified time.
`public inline static void `[`ztimer64_set_msg`](#group__sys__ztimer64_1ga64d04d679dff7c117109c80086a0e70e)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Post a message after a delay (relative version)
`public int `[`ztimer64_msg_receive_until`](#group__sys__ztimer64_1gaad2d699f7881c484651ba6a5ce2c03a0)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint64_t target)`            | receive a message (blocking, with absolute timeout)
`public inline static int `[`ztimer64_msg_receive_timeout`](#group__sys__ztimer64_1ga76a3062ce65e9a9f3a19700f71ecb0a5)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint64_t timeout)`            | receive a message (blocking, with relative timeout)
`public void `[`ztimer64_periodic_wakeup`](#group__sys__ztimer64_1ga8fbc89cf1754dcb53feb5a1db042e090)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t * last_wakeup,uint64_t period)`            | Suspend the calling thread until the time (`last_wakeup` + `period`)
`public void `[`ztimer64_sleep_until`](#group__sys__ztimer64_1ga4efd1bbe6819b641c49aa6c0367e289b)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t target)`            | Put the calling thread to sleep until the specified time.
`public inline static void `[`ztimer64_sleep`](#group__sys__ztimer64_1gaac757c41341971b2b09c5e2ec6aebb4e)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t duration)`            | Put the calling thread to sleep for the specified number of ticks.
`public inline static void `[`ztimer64_spin_until`](#group__sys__ztimer64_1gaed7b712e83c2159cfe31d96cea054641)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t target)`            | Busy-wait until specified target time.
`public void `[`ztimer64_set_wakeup_at`](#group__sys__ztimer64_1ga0a3ef706a76680957efba00b881f87f1)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Set a timer that wakes up a thread (absolute version)
`public inline static void `[`ztimer64_set_wakeup`](#group__sys__ztimer64_1ga2bca591fcf1d1b1bd8d9909ad90b582f)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Set a timer that wakes up a thread (relative version)
`public void `[`ztimer64_set_timeout_flag_at`](#group__sys__ztimer64_1ga9f5c3be3d2f5f0b4683786ef38d9307b)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target)`            | Set timeout thread flag at `target` time.
`public inline static void `[`ztimer64_set_timeout_flag`](#group__sys__ztimer64_1ga3b40cc6cefd8fc220519d4c306f79157)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t timeout)`            | Set timeout thread flag after `timeout`.
`public int `[`ztimer64_mutex_lock_until`](#group__sys__ztimer64_1ga462c0009a38ce5e0f8069ba7d30ad96a)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint64_t target)`            | Try to lock the given mutex, but give up at `target` time.
`public inline static int `[`ztimer64_mutex_lock_timeout`](#group__sys__ztimer64_1ga7ecbcf7731ee8dc3cbb5b36e60468178)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint64_t timeout)`            | Try to lock the given mutex, but give up after `timeout`.
`public int `[`ztimer64_rmutex_lock_until`](#group__sys__ztimer64_1gaf9a884d307ac738e8d0980a74007fb50)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint64_t target)`            | Try to lock the given rmutex, but give up at `time`.
`public inline static int `[`ztimer64_rmutex_lock_timeout`](#group__sys__ztimer64_1gac115b8099a7be028ad30f44718c50ea5)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint64_t timeout)`            | Try to lock the given rmutex, but give up after `timeout`.
`public void `[`ztimer64_update_head_offset`](#group__sys__ztimer64_1ga5af6c1df6ece5ed5b3a62fc03f7fece4)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock)`            | Update ztimer clock head list offset.
`public void `[`ztimer64_init`](#group__sys__ztimer64_1ga001a08f2ce6b26aeab6411cfa95787a9)`(void)`            | Initialize the board-specific default ztimer configuration.
`public void `[`ztimer64_clock_init`](#group__sys__ztimer64_1ga1fbec3365c03bf865e09d2f6f08a87a6)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * base_clock)`            | Initialize `clock` to be run from `base_clock`.
`public int64_t `[`ztimer64_overhead`](#group__sys__ztimer64_1gadcac20d33b75da36269c546ea6bf70eb)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t base)`            | Measure ztimer64 overhead.
`struct `[`ztimer64_base`](#structztimer64__base) | Minimum information for each timer.
`struct `[`ztimer64_t`](#structztimer64__t) | ztimer64 structure
`struct `[`ztimer64_clock`](#structztimer64__clock) | ztimer64 clock structure

## Members

#### `define `[`MSG_ZTIMER64`](#group__sys__ztimer64_1ga83c37dbd894d60ac4a5424fa71850530) 

msg type used by ztimer64_msg_receive_timeout

#### `public uint64_t `[`ztimer64_now`](#group__sys__ztimer64_1ga620ac7277ccde1f21a78fa3b70f8dfcf)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock)` 

Get the current time from a clock.

#### Parameters
* `clock` ztimer clock to operate on

#### Returns
Current count on `clock`

#### `public inline static uint64_t `[`ztimer64_offset2absolute`](#group__sys__ztimer64_1gaa60e84488651941e347c30ef180df68b)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t offset)` 

Get absolute target time for a clock given offset.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `offset` relative target time

#### Returns
absolute target time

#### `public void `[`ztimer64_set_at`](#group__sys__ztimer64_1gaa9f4911ef27bfddbbb44243714d774fb)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target)` 

Set a timer on a clock (absolute version)

This will place `timer` in the timer targets queue of `clock`.

The memory pointed to by `timer` is not copied and must remain in scope until the callback is fired or the timer is removed via [ztimer64_remove](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga3333be06edbf7e1a8388058035b1da51)

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer entry to set 

* `target` absolute target time

#### `public inline static void `[`ztimer64_set`](#group__sys__ztimer64_1ga87b08fe883badce9337e9602190bf054)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t offset)` 

Set a timer on a clock (relative version)

This will place `timer` in the timer targets queue of `clock`.

The memory pointed to by `timer` is not copied and must remain in scope until the callback is fired or the timer is removed via [ztimer64_remove](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga3333be06edbf7e1a8388058035b1da51)

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer entry to set 

* `offset` relative target time

#### `public unsigned `[`ztimer64_is_set`](#group__sys__ztimer64_1ga2177b5593c18643bbd2ff30de4ed4620)`(const `[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer)` 

Check if a timer is currently active.

#### Parameters
* `timer` timer to check

#### Returns
1 if timer is active 

#### Returns
0 if timer is not active

#### `public void `[`ztimer64_remove`](#group__sys__ztimer64_1ga3333be06edbf7e1a8388058035b1da51)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer)` 

Remove a timer from a clock.

This will place `timer` in the timer targets queue for `clock`.

This function does nothing if `timer` is not found in the timer queue of `clock`.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer entry to remove

#### `public void `[`ztimer64_set_msg_at`](#group__sys__ztimer64_1gae116fad9c3b25b9a16588439b91266ad)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Post a message at a specified time.

This function sets a timer that will send a message at time `target`.

The memory pointed to by `timer` and `msg` will not be copied, i.e. `*timer` and `*msg` needs to remain valid until the timer has triggered.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` ztimer64 timer struct to use 

* `target` absolute target time 

* `msg` pointer to msg that will be sent 

* `target_pid` pid the message will be sent to

#### `public inline static void `[`ztimer64_set_msg`](#group__sys__ztimer64_1ga64d04d679dff7c117109c80086a0e70e)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Post a message after a delay (relative version)

This function sets a timer that will send a message `offset` ticks from now.

The memory pointed to by `timer` and `msg` will not be copied, i.e. `*timer` and `*msg` needs to remain valid until the timer has triggered.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` ztimer64 timer struct to use 

* `offset` relative target time 

* `msg` pointer to msg that will be sent 

* `target_pid` pid the message will be sent to

#### `public int `[`ztimer64_msg_receive_until`](#group__sys__ztimer64_1gaad2d699f7881c484651ba6a5ce2c03a0)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint64_t target)` 

receive a message (blocking, with absolute timeout)

Similar to [msg_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a), but with a timeout parameter. The function will return after waiting at most until `target`.

: This might function might leave a message with type MSG_ZTIMER64 in the thread's message queue, which must be handled (ignored).

#### Parameters
* `clock` ztimer64 clock to operate on 

* `msg` pointer to buffer which will be filled if a message is received 

* `target` absolute target, in `clock` time

#### Returns
>=0 if a message was received 

#### Returns
-ETIME on timeout

#### `public inline static int `[`ztimer64_msg_receive_timeout`](#group__sys__ztimer64_1ga76a3062ce65e9a9f3a19700f71ecb0a5)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint64_t timeout)` 

receive a message (blocking, with relative timeout)

Similar to [msg_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a), but with a timeout parameter. The function will return after waiting at most `timeout` ticks.

: This might function might leave a message with type MSG_ZTIMER64 in the thread's message queue, which must be handled (ignored).

#### Parameters
* `clock` ztimer64 clock to operate on 

* `msg` pointer to buffer which will be filled if a message is received 

* `timeout` relative timeout, in `clock` time units

#### Returns
>=0 if a message was received 

#### Returns
-ETIME on timeout

#### `public void `[`ztimer64_periodic_wakeup`](#group__sys__ztimer64_1ga8fbc89cf1754dcb53feb5a1db042e090)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t * last_wakeup,uint64_t period)` 

Suspend the calling thread until the time (`last_wakeup` + `period`)

This function can be used to create periodic wakeups.

When the function returns, `last_wakeup` is set to (`last_wakeup` + `period`).

`last_wakeup` should be set to ztimer64_now(`clock`) before first call of the function.

If the time (`last_wakeup` + `period`) has already passed, the function sets `last_wakeup` to `last_wakeup` + `period` and returns immediately.

if you period is smaller than 2^32 ticks, consider using the 32bit version.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `last_wakeup` base time stamp for the wakeup 

* `period` time in ticks that will be added to `last_wakeup`

#### `public void `[`ztimer64_sleep_until`](#group__sys__ztimer64_1ga4efd1bbe6819b641c49aa6c0367e289b)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t target)` 

Put the calling thread to sleep until the specified time.

#### Parameters
* `clock` ztimer64 clock to use 

* `target` wakeup time, in `clock` time

#### `public inline static void `[`ztimer64_sleep`](#group__sys__ztimer64_1gaac757c41341971b2b09c5e2ec6aebb4e)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t duration)` 

Put the calling thread to sleep for the specified number of ticks.

#### Parameters
* `clock` ztimer64 clock to use 

* `duration` duration of sleep, in `ztimer` time units

#### `public inline static void `[`ztimer64_spin_until`](#group__sys__ztimer64_1gaed7b712e83c2159cfe31d96cea054641)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t target)` 

Busy-wait until specified target time.

: This blocks lower priority threads. Use only for *very* short delays.

#### Parameters
* `clock` ztimer64 clock to use 

* `target` time when spinning should end, in `clock` time

#### `public void `[`ztimer64_set_wakeup_at`](#group__sys__ztimer64_1ga0a3ef706a76680957efba00b881f87f1)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Set a timer that wakes up a thread (absolute version)

This function sets a timer that will wake up a thread when the timer has expired.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer struct to work with. 

* `target` wakeup time 

* `pid` pid of the thread that will be woken up

#### `public inline static void `[`ztimer64_set_wakeup`](#group__sys__ztimer64_1ga2bca591fcf1d1b1bd8d9909ad90b582f)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Set a timer that wakes up a thread (relative version)

This function sets a timer that will wake up a thread when the timer has expired.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer struct to work with. 

* `offset` clock ticks from now 

* `pid` pid of the thread that will be woken up

#### `public void `[`ztimer64_set_timeout_flag_at`](#group__sys__ztimer64_1ga9f5c3be3d2f5f0b4683786ef38d9307b)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t target)` 

Set timeout thread flag at `target` time.

This function will set THREAD_FLAG_TIMEOUT on the current thread at time `target`.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer struct to use 

* `target` target in `clock` time

#### `public inline static void `[`ztimer64_set_timeout_flag`](#group__sys__ztimer64_1ga3b40cc6cefd8fc220519d4c306f79157)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__t)` * timer,uint64_t timeout)` 

Set timeout thread flag after `timeout`.

This function will set THREAD_FLAG_TIMEOUT on the current thread after `timeout` usec have passed.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `timer` timer struct to use 

* `timeout` timeout in [ztimer64_clock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer64.md#structztimer64__clock)'s ticks

#### `public int `[`ztimer64_mutex_lock_until`](#group__sys__ztimer64_1ga462c0009a38ce5e0f8069ba7d30ad96a)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint64_t target)` 

Try to lock the given mutex, but give up at `target` time.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to lock 

* `target` time after which to give up

#### Parameters
* `0` Success, caller has the mutex 

* `-ECANCELED` Failed to obtain mutex within `timeout`

#### `public inline static int `[`ztimer64_mutex_lock_timeout`](#group__sys__ztimer64_1ga7ecbcf7731ee8dc3cbb5b36e60468178)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint64_t timeout)` 

Try to lock the given mutex, but give up after `timeout`.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to lock 

* `timeout` timeout after which to give up

#### Parameters
* `0` Success, caller has the mutex 

* `-ECANCELED` Failed to obtain mutex within `timeout`

#### `public int `[`ztimer64_rmutex_lock_until`](#group__sys__ztimer64_1gaf9a884d307ac738e8d0980a74007fb50)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint64_t target)` 

Try to lock the given rmutex, but give up at `time`.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `rmutex` rmutex object to lock 

* `target` time after which to give up

#### Parameters
* `0` Success, caller has the rmutex 

* `-ECANCELED` Failed to obtain rmutex before `time`

#### `public inline static int `[`ztimer64_rmutex_lock_timeout`](#group__sys__ztimer64_1gac115b8099a7be028ad30f44718c50ea5)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint64_t timeout)` 

Try to lock the given rmutex, but give up after `timeout`.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `rmutex` rmutex object to lock 

* `timeout` timeout after which to give up

#### Parameters
* `0` Success, caller has the rmutex 

* `-ECANCELED` Failed to obtain rmutex within `timeout`

#### `public void `[`ztimer64_update_head_offset`](#group__sys__ztimer64_1ga5af6c1df6ece5ed5b3a62fc03f7fece4)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock)` 

Update ztimer clock head list offset.

#### `public void `[`ztimer64_init`](#group__sys__ztimer64_1ga001a08f2ce6b26aeab6411cfa95787a9)`(void)` 

Initialize the board-specific default ztimer configuration.

#### `public void `[`ztimer64_clock_init`](#group__sys__ztimer64_1ga1fbec3365c03bf865e09d2f6f08a87a6)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * base_clock)` 

Initialize `clock` to be run from `base_clock`.

#### Parameters
* `clock` Clock to initialize 

* `base_clock` Base clock to use

#### `public int64_t `[`ztimer64_overhead`](#group__sys__ztimer64_1gadcac20d33b75da36269c546ea6bf70eb)`(`[`ztimer64_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga95ac72231de5011aad72394127d1dd31)` * clock,uint64_t base)` 

Measure ztimer64 overhead.

This function can be used to measure the overhead incurred by ztimer64. It will configure a callback to trigger after `base` ticks, then return the number of ticks that have passed, minus `base`.

#### Parameters
* `clock` ztimer64 clock to operate on 

* `base` base interval to use 

#### Returns
(time from [ztimer64_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga87b08fe883badce9337e9602190bf054) until callback) - base

# struct `ztimer64_base` 

Minimum information for each timer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer64_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga428da0199c8afea15acc6c30af24e88a)` * `[`next`](#structztimer64__base_1a5be0e824cab65543a29b1fdf322f3157) | next timer in list
`public uint64_t `[`target`](#structztimer64__base_1aa3dce4cfeaa331d1a7216d4c8aa27794) | absolute target time

## Members

#### `public `[`ztimer64_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga428da0199c8afea15acc6c30af24e88a)` * `[`next`](#structztimer64__base_1a5be0e824cab65543a29b1fdf322f3157) 

next timer in list

#### `public uint64_t `[`target`](#structztimer64__base_1aa3dce4cfeaa331d1a7216d4c8aa27794) 

absolute target time

# struct `ztimer64_t` 

ztimer64 structure

This type represents an instance of a timer, which is set on an underlying clock object

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer64_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga428da0199c8afea15acc6c30af24e88a)` `[`base`](#structztimer64__t_1a4a25691418b1b79ae7819f63ee6671be) | clock list entry
`public void(* `[`callback`](#structztimer64__t_1aa1b7bd76d74a05a7f9229a5c35a7c87e) | timer callback function pointer
`public void * `[`arg`](#structztimer64__t_1a640a7d44c089f46b3ab123c5748e0d59) | timer callback argument

## Members

#### `public `[`ztimer64_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga428da0199c8afea15acc6c30af24e88a)` `[`base`](#structztimer64__t_1a4a25691418b1b79ae7819f63ee6671be) 

clock list entry

#### `public void(* `[`callback`](#structztimer64__t_1aa1b7bd76d74a05a7f9229a5c35a7c87e) 

timer callback function pointer

#### `public void * `[`arg`](#structztimer64__t_1a640a7d44c089f46b3ab123c5748e0d59) 

timer callback argument

# struct `ztimer64_clock` 

ztimer64 clock structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer64_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga428da0199c8afea15acc6c30af24e88a)` * `[`first`](#structztimer64__clock_1ad719bf750ec0786d78236ade3fe5cb5f) | list of active timers
`public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * `[`base_clock`](#structztimer64__clock_1aead8cc349bb33e2fc8ab3e02bfd60337) | 32bit clock backend
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`base_timer`](#structztimer64__clock_1a406fc5a5dd03d24a88abbe02008c105b) | 32bit backend timer
`public uint64_t `[`checkpoint`](#structztimer64__clock_1ab4d0384ea80d40b25f79d85cf19b8557) | lower timer checkpoint offset
`public uint16_t `[`adjust_set`](#structztimer64__clock_1ab780e6c961e84fdcd252b1c14d2ae092) | will be subtracted on every set()
`public uint16_t `[`adjust_sleep`](#structztimer64__clock_1a6527ec3ca4197e9aefe41dbfa3c5c9c1) | will be subtracted on every sleep(), in addition to adjust_set
`public uint8_t `[`block_pm_mode`](#structztimer64__clock_1a8139d56212ae4edf3f798172bbc68ad7) | min.

## Members

#### `public `[`ztimer64_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer64_1ga428da0199c8afea15acc6c30af24e88a)` * `[`first`](#structztimer64__clock_1ad719bf750ec0786d78236ade3fe5cb5f) 

list of active timers

#### `public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * `[`base_clock`](#structztimer64__clock_1aead8cc349bb33e2fc8ab3e02bfd60337) 

32bit clock backend

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`base_timer`](#structztimer64__clock_1a406fc5a5dd03d24a88abbe02008c105b) 

32bit backend timer

#### `public uint64_t `[`checkpoint`](#structztimer64__clock_1ab4d0384ea80d40b25f79d85cf19b8557) 

lower timer checkpoint offset

#### `public uint16_t `[`adjust_set`](#structztimer64__clock_1ab780e6c961e84fdcd252b1c14d2ae092) 

will be subtracted on every set()

#### `public uint16_t `[`adjust_sleep`](#structztimer64__clock_1a6527ec3ca4197e9aefe41dbfa3c5c9c1) 

will be subtracted on every sleep(), in addition to adjust_set

#### `public uint8_t `[`block_pm_mode`](#structztimer64__clock_1a8139d56212ae4edf3f798172bbc68ad7) 

min.

pm mode to block for the clock to run

