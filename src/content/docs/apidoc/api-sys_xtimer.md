---
title: api-sys_xtimer.md
description: api-sys_xtimer.md
---
# group `sys_xtimer` 

Provides a high level timer module to register timers, get current system time, and let a thread sleep for a certain amount of time.

The implementation takes one low-level timer and multiplexes it.

Insertion and removal of timers has O(n) complexity with (n) being the number of active timers. The reason for this is that multiplexing is realized by next-first singly linked lists.

> Deprecated: xtimer has been deprecated in favor of the [ztimer high level timer abstraction layer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer)

With [ztimer_xtimer_compat: xtimer wrapper](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer__xtimer__compat) a compatibility wrapper is provided that in the vast majority of cases can function as a drop-in replacement. This compatibility wrapper is expected to replace `xtimer` in the near future and ensure that code still depending on the `xtimer` API continues to function.

Note that at least for long running timers, using [ztimer high level timer abstraction layer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer) instead of the compatibility layer can yield lower clock drift and lower power consumption compared to using the compatibility layer. For details on how to achieve lower clock drift and lower power consumption please consult the [ztimer high level timer abstraction layer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer) documentation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`XTIMER_BACKOFF`](#group__sys__xtimer_1ga370b9e9a079c4cb4f54fd947b67b9f41)            | xtimer backoff value
`define `[`XTIMER_ISR_BACKOFF`](#group__sys__xtimer_1gaa1be564fc21297d7c1c8be267cbd36f6)            | xtimer IRQ backoff time, in hardware ticks
`define `[`XTIMER_DEV`](#group__sys__xtimer_1ga5e48bb301c732e044b08f336fb851d5e)            | Underlying hardware timer device to assign to xtimer.
`define `[`XTIMER_CHAN`](#group__sys__xtimer_1ga8b747b85d4d5f2e1be910cdbc72a01de)            | Underlying hardware timer channel to assign to xtimer.
`define `[`XTIMER_WIDTH`](#group__sys__xtimer_1gafea1be2406d45b8fbb1dca1a318ac2dc)            | xtimer timer width
`define `[`XTIMER_MASK`](#group__sys__xtimer_1gadd0c4edd647ba5e0142a62ff001c86d9)            | xtimer timer mask
`define `[`XTIMER_HZ_BASE`](#group__sys__xtimer_1ga2c5a353cdbad8cc3198b4ef88e919fcd)            | Base frequency of xtimer is 1 MHz.
`define `[`XTIMER_HZ`](#group__sys__xtimer_1gaf68fde6b7d5b362834e6a8d382c6c0d7)            | Frequency of the underlying hardware timer.
`define `[`XTIMER_SHIFT`](#group__sys__xtimer_1gafd8fce8e5a8b0042399523706cfb6f60)            | xtimer prescaler value
`public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_now`](#group__sys__xtimer_1gaf3dbc76790c2beedce25bc1ba61faf33)`(void)`            | get the current system time as 32bit time stamp value
`public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_now64`](#group__sys__xtimer_1ga4064fa62ba625bb103fa836f78fc6ed9)`(void)`            | get the current system time as 64bit time stamp
`public void `[`xtimer_now_timex`](#group__sys__xtimer_1ga9b60f150213948c651c7c7ad2c98e140)`(`[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` * out)`            | get the current system time into a [timex_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)
`public inline static uint32_t `[`xtimer_now_usec`](#group__sys__xtimer_1ga149e11e56e687ffbdf60eb7a826e0607)`(void)`            | get the current system time in microseconds since start
`public inline static uint64_t `[`xtimer_now_usec64`](#group__sys__xtimer_1gacc0c29679b49269c5638ef2a2ccc3e88)`(void)`            | get the current system time in microseconds since start
`public void `[`xtimer_init`](#group__sys__xtimer_1gabc079c5c696d02451bc3610391d177e6)`(void)`            | xtimer initialization function
`public inline static void `[`xtimer_sleep`](#group__sys__xtimer_1ga5b74aa22cfd14b95f7faf2bee69bd505)`(uint32_t seconds)`            | Pause the execution of a thread for some seconds.
`public inline static void `[`xtimer_msleep`](#group__sys__xtimer_1ga5529cb95c1f02e5b5a4a92b6d38c4e30)`(uint32_t milliseconds)`            | Pause the execution of a thread for some milliseconds.
`public inline static void `[`xtimer_usleep`](#group__sys__xtimer_1ga01ded1a98b76eea8a1c4c45975781989)`(uint32_t microseconds)`            | Pause the execution of a thread for some microseconds.
`public inline static void `[`xtimer_usleep64`](#group__sys__xtimer_1ga9a54a4401bc1e4e770ef8d4110bdaed4)`(uint64_t microseconds)`            | Pause the execution of a thread for some microseconds.
`public inline static void `[`xtimer_nanosleep`](#group__sys__xtimer_1gab14b0ed7032e0d0f06e1a98fa894e2f6)`(uint32_t nanoseconds)`            | Stop execution of a thread for some time.
`public inline static void `[`xtimer_tsleep32`](#group__sys__xtimer_1ga5431404c94fff4478075807f16bbba35)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` ticks)`            | Stop execution of a thread for some time, 32bit version.
`public inline static void `[`xtimer_tsleep64`](#group__sys__xtimer_1ga9c6c5f34150bdb433ccc3016f090c0f5)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` ticks)`            | Stop execution of a thread for some time, 64bit version.
`public inline static void `[`xtimer_spin`](#group__sys__xtimer_1gac1254c900c6826fc76c638d5d70bcb9b)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` ticks)`            | Stop execution of a thread for some time, blocking.
`public inline static void `[`xtimer_periodic_wakeup`](#group__sys__xtimer_1ga77ff235d491f651378348a46519d9dba)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` * last_wakeup,uint32_t period)`            | will cause the calling thread to be suspended until the absolute time (`last_wakeup` + `period`).
`public inline static void `[`xtimer_set_wakeup`](#group__sys__xtimer_1gab46b49ec5cf112476c83ca727bb77f67)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint32_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Set a timer that wakes up a thread.
`public inline static void `[`xtimer_set_wakeup64`](#group__sys__xtimer_1ga31b5a43639e91d1ef511040a33be25d5)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint64_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Set a timer that wakes up a thread, 64bit version.
`public inline static void `[`xtimer_set`](#group__sys__xtimer_1gadcc4acdd5b781fe1e8760503cfb635bb)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint32_t offset)`            | Set a timer to execute a callback at some time in the future.
`public inline static void `[`xtimer_set64`](#group__sys__xtimer_1ga44debbdb75375d7b727fa460d4f27fe9)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint64_t offset_us)`            | Set a timer to execute a callback at some time in the future, 64bit version.
`public void `[`xtimer_remove`](#group__sys__xtimer_1ga2b6666a277679ca79aaa27db957057ab)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer)`            | remove a timer
`public inline static bool `[`xtimer_is_set`](#group__sys__xtimer_1gaf580c1e17c944f6acea5f371abce8062)`(const `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer)`            | state if an xtimer is currently set (waiting to be expired)
`public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_ticks_from_usec`](#group__sys__xtimer_1gae457bf7ed1f4ec0f4f6767a35a4fd181)`(uint32_t usec)`            | Convert microseconds to xtimer ticks.
`public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_ticks_from_usec64`](#group__sys__xtimer_1ga2322a5a456e7a161501e3eadfe72ecea)`(uint64_t usec)`            | Convert microseconds to xtimer ticks, 64 bit version.
`public inline static uint32_t `[`xtimer_usec_from_ticks`](#group__sys__xtimer_1ga8c61899aeac7574e5c49fa6923b9a3c6)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` ticks)`            | Convert xtimer ticks to microseconds.
`public inline static uint64_t `[`xtimer_usec_from_ticks64`](#group__sys__xtimer_1gaf6503b61ff26a435ea04825aded9f063)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` ticks)`            | Convert xtimer ticks to microseconds, 64 bit version.
`public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_ticks`](#group__sys__xtimer_1gaf102bfcea911afe876c4658c5afa4747)`(uint32_t ticks)`            | Create an xtimer time stamp.
`public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_ticks64`](#group__sys__xtimer_1ga76c108030605873cdf7191facc943c8b)`(uint64_t ticks)`            | Create an xtimer time stamp, 64 bit version.
`public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_diff`](#group__sys__xtimer_1ga0cd366d557de02930b6bef0378c198d9)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` a,`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` b)`            | Compute difference between two xtimer time stamps.
`public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_diff64`](#group__sys__xtimer_1ga925936dc1549a9eee0a216799ae3d0e0)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` a,`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` b)`            | Compute difference between two xtimer time stamps, 64 bit version.
`public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_diff32_64`](#group__sys__xtimer_1ga6146cc0b4d0e6ba9c2b3bff7967e40ac)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` a,`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` b)`            | Compute 32 bit difference between two 64 bit xtimer time stamps.
`public inline static bool `[`xtimer_less`](#group__sys__xtimer_1ga82da2a7788ea7a937aaa1e9c4e104be3)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` a,`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` b)`            | Compare two xtimer time stamps.
`public inline static bool `[`xtimer_less64`](#group__sys__xtimer_1ga36d45604e809c97910ab3b708409103f)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` a,`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` b)`            | Compare two xtimer time stamps, 64 bit version.
`public int `[`xtimer_mutex_lock_timeout`](#group__sys__xtimer_1ga9440cd58d5420e61bcd6ec4c9e265eb3)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint64_t us)`            | lock a mutex but with timeout
`public int `[`xtimer_rmutex_lock_timeout`](#group__sys__xtimer_1ga6f00bd32c0a8bc00a83721946a5662bd)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint64_t us)`            | lock a rmutex but with timeout
`public void `[`xtimer_set_timeout_flag`](#group__sys__xtimer_1ga9c34d184d0dc742ff052c096a647abfe)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * t,uint32_t timeout)`            | Set timeout thread flag after `timeout`.
`public void `[`xtimer_set_timeout_flag64`](#group__sys__xtimer_1ga01446e9f287586f7dea0364278defd9c)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * t,uint64_t timeout)`            | Set timeout thread flag after `timeout`.
`public uint64_t `[`xtimer_left_usec`](#group__sys__xtimer_1gaf9c6ba98a9e205b8bfad61459f48a886)`(const `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer)`            | Get remaining time of timer.
`public inline static void `[`xtimer_set_msg`](#group__sys__xtimer_1ga799389809547e799decc615d7203811a)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint32_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Set a timer that sends a message.
`public inline static void `[`xtimer_set_msg64`](#group__sys__xtimer_1ga234532dba9440b18911b2fbf0dca7528)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint64_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Set a timer that sends a message, 64bit version.
`public inline static int `[`xtimer_msg_receive_timeout`](#group__sys__xtimer_1ga9a8ab2f8bedb8e849ad9b168943a4dd5)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint32_t timeout)`            | receive a message blocking but with timeout
`public inline static int `[`xtimer_msg_receive_timeout64`](#group__sys__xtimer_1gaf7a92a792c25cb6fdd24f5ab3a880b68)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint64_t timeout)`            | receive a message blocking but with timeout, 64bit version
`struct `[`xtimer_ticks64_t`](#structxtimer__ticks64__t) | xtimer timestamp (64 bit)
`struct `[`xtimer_ticks32_t`](#structxtimer__ticks32__t) | xtimer timestamp (32 bit)
`struct `[`xtimer`](#structxtimer) | xtimer timer structure

## Members

#### `define `[`XTIMER_BACKOFF`](#group__sys__xtimer_1ga370b9e9a079c4cb4f54fd947b67b9f41) 

xtimer backoff value

All timers that are less than XTIMER_BACKOFF ticks in the future will just spin.

This is supposed to be defined per-device in e.g., periph_conf.h.

#### `define `[`XTIMER_ISR_BACKOFF`](#group__sys__xtimer_1gaa1be564fc21297d7c1c8be267cbd36f6) 

xtimer IRQ backoff time, in hardware ticks

When scheduling the next IRQ, if it is less than the backoff time in the future, just spin.

This is supposed to be defined per-device in e.g., periph_conf.h.

#### `define `[`XTIMER_DEV`](#group__sys__xtimer_1ga5e48bb301c732e044b08f336fb851d5e) 

Underlying hardware timer device to assign to xtimer.

#### `define `[`XTIMER_CHAN`](#group__sys__xtimer_1ga8b747b85d4d5f2e1be910cdbc72a01de) 

Underlying hardware timer channel to assign to xtimer.

#### `define `[`XTIMER_WIDTH`](#group__sys__xtimer_1gafea1be2406d45b8fbb1dca1a318ac2dc) 

xtimer timer width

This value specifies the width (in bits) of the hardware timer used by xtimer. Default is 32.

#### `define `[`XTIMER_MASK`](#group__sys__xtimer_1gadd0c4edd647ba5e0142a62ff001c86d9) 

xtimer timer mask

This value specifies the mask relative to 0xffffffff that the used timer counts to, e.g., 0xffffffff & ~TIMER_MAXVALUE.

For a 16bit timer, the mask would be 0xFFFF0000, for a 24bit timer, the mask would be 0xFF000000.

#### `define `[`XTIMER_HZ_BASE`](#group__sys__xtimer_1ga2c5a353cdbad8cc3198b4ef88e919fcd) 

Base frequency of xtimer is 1 MHz.

#### `define `[`XTIMER_HZ`](#group__sys__xtimer_1gaf68fde6b7d5b362834e6a8d382c6c0d7) 

Frequency of the underlying hardware timer.

#### `define `[`XTIMER_SHIFT`](#group__sys__xtimer_1gafd8fce8e5a8b0042399523706cfb6f60) 

xtimer prescaler value

If the underlying hardware timer is running at a power of two multiple of 15625, XTIMER_SHIFT can be used to adjust the difference.

For a 1 MHz hardware timer, set XTIMER_SHIFT to 0. For a 2 MHz or 500 kHz, set XTIMER_SHIFT to 1. For a 4 MHz or 250 kHz, set XTIMER_SHIFT to 2. For a 8 MHz or 125 kHz, set XTIMER_SHIFT to 3. For a 16 MHz or 62.5 kHz, set XTIMER_SHIFT to 4. and for 32 MHz, set XTIMER_SHIFT to 5.

The direction of the shift is handled by the macros in [tick_conversion.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tick__conversion_8h)

#### `public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_now`](#group__sys__xtimer_1gaf3dbc76790c2beedce25bc1ba61faf33)`(void)` 

get the current system time as 32bit time stamp value

Overflows 2**32 ticks, thus returns [xtimer_now64()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga4064fa62ba625bb103fa836f78fc6ed9) % 32, but is cheaper.

#### Returns
current time as 32bit time stamp

#### `public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_now64`](#group__sys__xtimer_1ga4064fa62ba625bb103fa836f78fc6ed9)`(void)` 

get the current system time as 64bit time stamp

#### Returns
current time as 64bit time stamp

#### `public void `[`xtimer_now_timex`](#group__sys__xtimer_1ga9b60f150213948c651c7c7ad2c98e140)`(`[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` * out)` 

get the current system time into a [timex_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)

#### Parameters
* `out` pointer to [timex_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t) the time will be written to

#### `public inline static uint32_t `[`xtimer_now_usec`](#group__sys__xtimer_1ga149e11e56e687ffbdf60eb7a826e0607)`(void)` 

get the current system time in microseconds since start

This is a convenience function for `xtimer_usec_from_ticks(xtimer_now())`

#### `public inline static uint64_t `[`xtimer_now_usec64`](#group__sys__xtimer_1gacc0c29679b49269c5638ef2a2ccc3e88)`(void)` 

get the current system time in microseconds since start

This is a convenience function for `xtimer_usec_from_ticks64(xtimer_now64())`

#### `public void `[`xtimer_init`](#group__sys__xtimer_1gabc079c5c696d02451bc3610391d177e6)`(void)` 

xtimer initialization function

This sets up xtimer. Has to be called once at system boot. If [auto_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#auto__init_8h_1a923fd92ea17c7891c288f1ddc135f112) is enabled, it will call this for you.

#### `public inline static void `[`xtimer_sleep`](#group__sys__xtimer_1ga5b74aa22cfd14b95f7faf2bee69bd505)`(uint32_t seconds)` 

Pause the execution of a thread for some seconds.

When called from an ISR, this function will spin and thus block the MCU in interrupt context for the specified amount in *seconds*, so don't *ever* use it there.

#### Parameters
* `seconds` the amount of seconds the thread should sleep

#### `public inline static void `[`xtimer_msleep`](#group__sys__xtimer_1ga5529cb95c1f02e5b5a4a92b6d38c4e30)`(uint32_t milliseconds)` 

Pause the execution of a thread for some milliseconds.

#### Parameters
* `milliseconds` the amount of milliseconds the thread should sleep

#### `public inline static void `[`xtimer_usleep`](#group__sys__xtimer_1ga01ded1a98b76eea8a1c4c45975781989)`(uint32_t microseconds)` 

Pause the execution of a thread for some microseconds.

When called from an ISR, this function will spin and thus block the MCU for the specified amount in microseconds, so only use it there for *very* short periods, e.g., less than XTIMER_BACKOFF converted to µs.

#### Parameters
* `microseconds` the amount of microseconds the thread should sleep

#### `public inline static void `[`xtimer_usleep64`](#group__sys__xtimer_1ga9a54a4401bc1e4e770ef8d4110bdaed4)`(uint64_t microseconds)` 

Pause the execution of a thread for some microseconds.

See [xtimer_usleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga01ded1a98b76eea8a1c4c45975781989) for more information.

#### Parameters
* `microseconds` the amount of microseconds the thread should sleep

#### `public inline static void `[`xtimer_nanosleep`](#group__sys__xtimer_1gab14b0ed7032e0d0f06e1a98fa894e2f6)`(uint32_t nanoseconds)` 

Stop execution of a thread for some time.

> Deprecated: This function is deprecated as no XTIMER backend is currently configured to run at more than 1 MHz, making nanoseconds accuracy impossible to achieve.

Don't expect nanosecond accuracy. As of now, this function just calls xtimer_usleep(nanoseconds/1000).

When called from an ISR, this function will spin-block, so only use it there for *very* short periods.

#### Parameters
* `nanoseconds` the amount of nanoseconds the thread should sleep

#### `public inline static void `[`xtimer_tsleep32`](#group__sys__xtimer_1ga5431404c94fff4478075807f16bbba35)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` ticks)` 

Stop execution of a thread for some time, 32bit version.

When called from an ISR, this function will spin and thus block the MCU for the specified amount, so only use it there for *very* short periods, e.g. less than XTIMER_BACKOFF.

#### Parameters
* `ticks` number of ticks the thread should sleep

#### `public inline static void `[`xtimer_tsleep64`](#group__sys__xtimer_1ga9c6c5f34150bdb433ccc3016f090c0f5)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` ticks)` 

Stop execution of a thread for some time, 64bit version.

When called from an ISR, this function will spin and thus block the MCU for the specified amount, so only use it there for *very* short periods, e.g. less than XTIMER_BACKOFF.

#### Parameters
* `ticks` number of ticks the thread should sleep

#### `public inline static void `[`xtimer_spin`](#group__sys__xtimer_1gac1254c900c6826fc76c638d5d70bcb9b)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` ticks)` 

Stop execution of a thread for some time, blocking.

This function will spin-block, so only use it *very* short periods.

#### Parameters
* `ticks` the number of xtimer ticks the thread should spin for

#### `public inline static void `[`xtimer_periodic_wakeup`](#group__sys__xtimer_1ga77ff235d491f651378348a46519d9dba)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` * last_wakeup,uint32_t period)` 

will cause the calling thread to be suspended until the absolute time (`last_wakeup` + `period`).

When the function returns, `last_wakeup` is set to (`last_wakeup` + `period`).

This function can be used to create periodic wakeups. `last_wakeup` should be set to [xtimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gaf3dbc76790c2beedce25bc1ba61faf33) before first call of the function.

If the result of (`last_wakeup` + `period`) would be in the past, the function sets `last_wakeup` to `last_wakeup` + `period` and returns immediately.

#### Parameters
* `last_wakeup` base time stamp for the wakeup 

* `period` time in microseconds that will be added to last_wakeup

#### `public inline static void `[`xtimer_set_wakeup`](#group__sys__xtimer_1gab46b49ec5cf112476c83ca727bb77f67)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint32_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Set a timer that wakes up a thread.

This function sets a timer that will wake up a thread when the timer has expired.

#### Parameters
* `timer` timer struct to work with. 

* `offset` microseconds from now 

* `pid` pid of the thread that will be woken up

#### `public inline static void `[`xtimer_set_wakeup64`](#group__sys__xtimer_1ga31b5a43639e91d1ef511040a33be25d5)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint64_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Set a timer that wakes up a thread, 64bit version.

This function sets a timer that will wake up a thread when the timer has expired.

#### Parameters
* `timer` timer struct to work with. 

* `offset` microseconds from now 

* `pid` pid of the thread that will be woken up

#### `public inline static void `[`xtimer_set`](#group__sys__xtimer_1gadcc4acdd5b781fe1e8760503cfb635bb)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint32_t offset)` 

Set a timer to execute a callback at some time in the future.

Expects timer->callback to be set.

The callback specified in the timer struct will be executed `offset` ticks in the future.

BEWARE! Callbacks from [xtimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gadcc4acdd5b781fe1e8760503cfb635bb) are being executed in interrupt context (unless offset < XTIMER_BACKOFF converted to µs). DON'T USE THIS FUNCTION unless you know *exactly* what that means.

#### Parameters
* `timer` the timer structure to use. 

* `offset` time in microseconds from now specifying that timer's callback's execution time

#### `public inline static void `[`xtimer_set64`](#group__sys__xtimer_1ga44debbdb75375d7b727fa460d4f27fe9)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint64_t offset_us)` 

Set a timer to execute a callback at some time in the future, 64bit version.

Expects timer->callback to be set.

The callback specified in the timer struct will be executed `offset_usec` microseconds in the future.

BEWARE! Callbacks from [xtimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gadcc4acdd5b781fe1e8760503cfb635bb) are being executed in interrupt context (unless offset < XTIMER_BACKOFF converted to µs). DON'T USE THIS FUNCTION unless you know *exactly* what that means.

#### Parameters
* `timer` the timer structure to use. 

* `offset_us` time in microseconds from now specifying that timer's callback's execution time

#### `public void `[`xtimer_remove`](#group__sys__xtimer_1ga2b6666a277679ca79aaa27db957057ab)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer)` 

remove a timer

this function runs in O(n) with n being the number of active timers

#### Parameters
* `timer` ptr to timer structure that will be removed

#### `public inline static bool `[`xtimer_is_set`](#group__sys__xtimer_1gaf580c1e17c944f6acea5f371abce8062)`(const `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer)` 

state if an xtimer is currently set (waiting to be expired)

#### Parameters
* `timer` ptr to timer structure to work on

#### `public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_ticks_from_usec`](#group__sys__xtimer_1gae457bf7ed1f4ec0f4f6767a35a4fd181)`(uint32_t usec)` 

Convert microseconds to xtimer ticks.

#### Parameters
* `usec` microseconds

#### Returns
xtimer time stamp

#### `public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_ticks_from_usec64`](#group__sys__xtimer_1ga2322a5a456e7a161501e3eadfe72ecea)`(uint64_t usec)` 

Convert microseconds to xtimer ticks, 64 bit version.

#### Parameters
* `usec` microseconds

#### Returns
xtimer time stamp

#### `public inline static uint32_t `[`xtimer_usec_from_ticks`](#group__sys__xtimer_1ga8c61899aeac7574e5c49fa6923b9a3c6)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` ticks)` 

Convert xtimer ticks to microseconds.

#### Parameters
* `ticks` xtimer time stamp

#### Returns
microseconds

#### `public inline static uint64_t `[`xtimer_usec_from_ticks64`](#group__sys__xtimer_1gaf6503b61ff26a435ea04825aded9f063)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` ticks)` 

Convert xtimer ticks to microseconds, 64 bit version.

#### Parameters
* `ticks` xtimer time stamp

#### Returns
microseconds

#### `public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_ticks`](#group__sys__xtimer_1gaf102bfcea911afe876c4658c5afa4747)`(uint32_t ticks)` 

Create an xtimer time stamp.

#### Parameters
* `ticks` number of xtimer ticks

#### Returns
xtimer time stamp

#### `public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_ticks64`](#group__sys__xtimer_1ga76c108030605873cdf7191facc943c8b)`(uint64_t ticks)` 

Create an xtimer time stamp, 64 bit version.

#### Parameters
* `ticks` number of xtimer ticks

#### Returns
xtimer time stamp

#### `public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_diff`](#group__sys__xtimer_1ga0cd366d557de02930b6bef0378c198d9)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` a,`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` b)` 

Compute difference between two xtimer time stamps.

#### Parameters
* `a` left operand 

* `b` right operand

#### Returns
`a` - `b`

#### `public inline static `[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` `[`xtimer_diff64`](#group__sys__xtimer_1ga925936dc1549a9eee0a216799ae3d0e0)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` a,`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` b)` 

Compute difference between two xtimer time stamps, 64 bit version.

#### Parameters
* `a` left operand 

* `b` right operand

#### Returns
`a` - `b`

#### `public inline static `[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` `[`xtimer_diff32_64`](#group__sys__xtimer_1ga6146cc0b4d0e6ba9c2b3bff7967e40ac)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` a,`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` b)` 

Compute 32 bit difference between two 64 bit xtimer time stamps.

#### Parameters
* `a` left operand 

* `b` right operand

#### Returns
`a` - `b` cast truncated to 32 bit

#### `public inline static bool `[`xtimer_less`](#group__sys__xtimer_1ga82da2a7788ea7a937aaa1e9c4e104be3)`(`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` a,`[`xtimer_ticks32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks32__t)` b)` 

Compare two xtimer time stamps.

#### Parameters
* `a` left operand 

* `b` right operand

#### Returns
`a` < `b`

#### `public inline static bool `[`xtimer_less64`](#group__sys__xtimer_1ga36d45604e809c97910ab3b708409103f)`(`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` a,`[`xtimer_ticks64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_xtimer.md#structxtimer__ticks64__t)` b)` 

Compare two xtimer time stamps, 64 bit version.

#### Parameters
* `a` left operand 

* `b` right operand

#### Returns
`a` < `b`

#### `public int `[`xtimer_mutex_lock_timeout`](#group__sys__xtimer_1ga9440cd58d5420e61bcd6ec4c9e265eb3)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint64_t us)` 

lock a mutex but with timeout

#### Parameters
* `mutex` mutex to lock 

* `us` timeout in microseconds relative

#### Returns
0, when returned after mutex was locked 

#### Returns
-1, when the timeout occurred

#### `public int `[`xtimer_rmutex_lock_timeout`](#group__sys__xtimer_1ga6f00bd32c0a8bc00a83721946a5662bd)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint64_t us)` 

lock a rmutex but with timeout

#### Parameters
* `rmutex` rmutex to lock 

* `us` timeout in microseconds relative

#### Returns
0, when returned after rmutex was locked 

#### Returns
-1, when the timeout occurred

#### `public void `[`xtimer_set_timeout_flag`](#group__sys__xtimer_1ga9c34d184d0dc742ff052c096a647abfe)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * t,uint32_t timeout)` 

Set timeout thread flag after `timeout`.

This function will set THREAD_FLAG_TIMEOUT on the current thread after `timeout` usec have passed.

#### Parameters
* `t` timer struct to use 

* `timeout` timeout in usec

#### `public void `[`xtimer_set_timeout_flag64`](#group__sys__xtimer_1ga01446e9f287586f7dea0364278defd9c)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * t,uint64_t timeout)` 

Set timeout thread flag after `timeout`.

See [xtimer_set_timeout_flag()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga9c34d184d0dc742ff052c096a647abfe) for more information.

#### Parameters
* `t` timer struct to use 

* `timeout` timeout in usec

#### `public uint64_t `[`xtimer_left_usec`](#group__sys__xtimer_1gaf9c6ba98a9e205b8bfad61459f48a886)`(const `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer)` 

Get remaining time of timer.

#### Parameters
* `timer` timer struct to use

#### Returns
time in usec until timer triggers 

#### Returns
0 if timer is not set (or has already passed)

#### `public inline static void `[`xtimer_set_msg`](#group__sys__xtimer_1ga799389809547e799decc615d7203811a)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint32_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Set a timer that sends a message.

This function sets a timer that will send a message `offset` ticks from now.

The message struct specified by msg parameter will not be copied, e.g., it needs to point to valid memory until the message has been delivered.

#### Parameters
* `timer` timer struct to work with. 

* `offset` microseconds from now 

* `msg` ptr to msg that will be sent 

* `target_pid` pid the message will be sent to

#### `public inline static void `[`xtimer_set_msg64`](#group__sys__xtimer_1ga234532dba9440b18911b2fbf0dca7528)`(`[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` * timer,uint64_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Set a timer that sends a message, 64bit version.

This function sets a timer that will send a message `offset` microseconds from now.

The message struct specified by msg parameter will not be copied, e.g., it needs to point to valid memory until the message has been delivered.

#### Parameters
* `timer` timer struct to work with. 

* `offset` microseconds from now 

* `msg` ptr to msg that will be sent 

* `target_pid` pid the message will be sent to

#### `public inline static int `[`xtimer_msg_receive_timeout`](#group__sys__xtimer_1ga9a8ab2f8bedb8e849ad9b168943a4dd5)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint32_t timeout)` 

receive a message blocking but with timeout

#### Parameters
* `msg` pointer to a [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) which will be filled in case of no timeout 

* `timeout` timeout in microseconds relative

#### Returns
< 0 on error, other value otherwise

#### `public inline static int `[`xtimer_msg_receive_timeout64`](#group__sys__xtimer_1gaf7a92a792c25cb6fdd24f5ab3a880b68)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint64_t timeout)` 

receive a message blocking but with timeout, 64bit version

#### Parameters
* `msg` pointer to a [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) which will be filled in case of no timeout 

* `timeout` timeout in microseconds relative

#### Returns
< 0 on error, other value otherwise

# struct `xtimer_ticks64_t` 

xtimer timestamp (64 bit)

This is a struct in order to make the xtimer API type strict

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint64_t `[`ticks64`](#structxtimer__ticks64__t_1a6507dc7d2da4e90b4abe267c6ed219d0) | Tick count.

## Members

#### `public uint64_t `[`ticks64`](#structxtimer__ticks64__t_1a6507dc7d2da4e90b4abe267c6ed219d0) 

Tick count.

# struct `xtimer_ticks32_t` 

xtimer timestamp (32 bit)

This is a struct in order to make the xtimer API type strict

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`ticks32`](#structxtimer__ticks32__t_1a19445cfc5325eefbfefcfc90f4839abe) | Tick count.

## Members

#### `public uint32_t `[`ticks32`](#structxtimer__ticks32__t_1a19445cfc5325eefbfefcfc90f4839abe) 

Tick count.

# struct `xtimer` 

xtimer timer structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`xtimer`](#structxtimer)` * `[`next`](#structxtimer_1a5937c338371e90331628a13b1c4fdc08) | reference to next timer in timer lists
`public uint32_t `[`offset`](#structxtimer_1afe19dde77b81d0b21bf16805b005fe5b) | lower 32bit offset time
`public uint32_t `[`long_offset`](#structxtimer_1a359a5cddeb9099fcc6d9077f36f21ccd) | upper 32bit offset time
`public uint32_t `[`start_time`](#structxtimer_1aa4d9e4f3ae1768cd21acbaced35c13b5) | lower 32bit absolute start time
`public uint32_t `[`long_start_time`](#structxtimer_1ae0cd5f264a827ca89a987db7f8e35852) | upper 32bit absolute start time
`public `[`xtimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga4b6fbbe697fce5154ddd111575e6c4c7)` `[`callback`](#structxtimer_1af99fa0f4caa9719556bf4a00f5c0e79a) | callback function to call when timer expires
`public void * `[`arg`](#structxtimer_1a9ddcfff91e0608da24e088d47caca1e1) | argument to pass to callback function

## Members

#### `public struct `[`xtimer`](#structxtimer)` * `[`next`](#structxtimer_1a5937c338371e90331628a13b1c4fdc08) 

reference to next timer in timer lists

#### `public uint32_t `[`offset`](#structxtimer_1afe19dde77b81d0b21bf16805b005fe5b) 

lower 32bit offset time

#### `public uint32_t `[`long_offset`](#structxtimer_1a359a5cddeb9099fcc6d9077f36f21ccd) 

upper 32bit offset time

#### `public uint32_t `[`start_time`](#structxtimer_1aa4d9e4f3ae1768cd21acbaced35c13b5) 

lower 32bit absolute start time

#### `public uint32_t `[`long_start_time`](#structxtimer_1ae0cd5f264a827ca89a987db7f8e35852) 

upper 32bit absolute start time

#### `public `[`xtimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga4b6fbbe697fce5154ddd111575e6c4c7)` `[`callback`](#structxtimer_1af99fa0f4caa9719556bf4a00f5c0e79a) 

callback function to call when timer expires

#### `public void * `[`arg`](#structxtimer_1a9ddcfff91e0608da24e088d47caca1e1) 

argument to pass to callback function

