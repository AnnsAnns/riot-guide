---
title: api-sys_ztimer.md
description: api-sys_ztimer.md
---
# group `sys_ztimer` 

High level timer abstraction layer.

Introductionztimer provides a high level abstraction of hardware timers for application timing needs.

The basic functions of the ztimer module are [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8), [ztimer_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360), [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c) and [ztimer_remove()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50).

They all take a pointer to a clock device (or virtual timer device) as first parameter.

RIOT provides ZTIMER_USEC, ZTIMER_MSEC, ZTIMER_SEC by default, which can be used in an application by depending on the modules ztimer_usec, ztimer_msec or ztimer_sec. They will then automatically get configured.

Every ztimer clock allows multiple timeouts to be scheduled. They all provide unsigned 32bit range. In this documentation, a timeout or its corresponding struct will be called `timer`, and when the time out has passed, it has `triggered`.

As ztimer can use arbitrarily configurable backends, a ztimer clock instance can run at configurable frequencies. Throughout this documentation, one clock step is called `tick`. For the pre-defined clocks ZTIMER_USEC, ZTIMER_MSEC and ZTIMER_SEC, one clock tick corresponds to one microsecond, one millisecond or one second, respectively.

[ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) returns the current clock tick count as uint32_t.

[ztimer_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360) pauses the current thread for the passed amount of clock ticks. E.g., `ztimer_sleep(ZTIMER_SEC, 5);` will suspend the currently running thread for five seconds.

[ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c) takes a [ztimer_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t) object (containing a function pointer and void * argument) and an interval as arguments. After at least the interval (in number of ticks for the corresponding clock) has passed, the callback will be called in interrupt context. A timer can be cancelled using [ztimer_remove()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50).

Example:

```cpp
#include "ztimer.h"

static void callback(void *arg)
{
   puts(arg);
}

int main()
{
    ztimer_t timeout = { .callback=callback, .arg="Hello ztimer!" };
    ztimer_set(ZTIMER_SEC, &timeout, 2);

    ztimer_sleep(ZTIMER_SEC, 5);
}
```

ztimer best practices* Don't use ZTIMER_USEC unless the increased resolution is really needed. ZTIMER_USEC will, on most platforms, prevent low-power sleep modes.

* Clear [ztimer_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t) structs before use. Example: ztimer_t foo = { 0 };
 This ensures ztimer knows the timer is not already set, possibly preventing an unnecessary full ztimer list traversal. (ztimer will ensure that a removed timer is sufficiently cleared.)

* Don't compare [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) values from different clocks. The clocks are almost certainly not synchronized.

Designclocks, virtual timers, chainingThe system is composed of clocks (virtual ztimer devices) which can be chained to create an abstract view of a hardware timer/counter device. Each ztimer clock acts as a operation on the next clock in the chain. At the end of each ztimer chain there is always some kind of counter device object.

Each clock device handles multiplexing (allowing multiple timers to be set) and extension to full 32bit.

Hardware interface submodules:

* [ztimer_periph_rtt](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer__periph__rtt_1ga8a621eeefd4bb3ca67c914c1dd12a997) interface for periph_rtt

* [ztimer_periph_rtc](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer__periph__rtc_1ga2614a7e5cd1c5e9f792d6c4b675fa01e) interface for periph_rtc

* [ztimer_periph_timer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer__periph__timer_1gabe9575e40a44642a4ce743ed4b563fef) interface for periph_timer

Filter submodules:

* [ztimer_convert_frac](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer__convert__frac_1gae5236d7f947ab29a467a91c60600acd6) for fast frequency conversion using the frac library

* [ztimer_convert_muldiv64](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer__convert__muldiv64_1ga436d01676d7383cccb86df744068db1c) for accurate but slow frequency conversion using 64bit division

A common chain could be:

* ztimer_periph_timer (e.g., on top of an 1024Hz 16bit hardware timer)

* ztimer_convert_frac (to convert 1024 to 1000Hz)

This is how e.g., the clock ZTIMER_MSEC might be configured on a specific system.

Every clock in the chain can always be used on its own. E.g. in the example above, the ztimer_periph object can be used as ztimer clock with 1024Hz ticks in addition to the ztimer_convert_frac with 1000Hz.

Timer handlingTimers in ztimer are stored in a clock using a linked list for which each entry stores the difference to the previous entry in the timer (T[n]). The clock also stores the absolute time on which the relative offsets are based (B), effectively storing the absolute target time for each entry (as B + sum(T[0-n])). Storing the entries in this way allows all entries to use the full width of the used uint32_t, compared to storing the absolute time.

In order to prevent timer processing offset to add up, whenever a timer triggers, the list's absolute base time is set to the *expected* trigger time (B + T[0]). The underlying clock is then set to alarm at ([now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) + ([now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) - B) + T[1]). Thus even though the list is keeping relative offsets, the time keeping is done by keeping track of the absolute times.

Currently, a sorted singly linked list is used for storing the timers. This choice has some implications:

* only one pointer needed per timer object (for "next" element)

* simple implementation

* acceptable runtime for expected number of active timers (<50)

* constant get_min() (important for timer triggering)

* O(n) insertion / removal of timer objects

By making the list doubly-linked, removal of timer objects could be easily made a constant operation, at the price of another pointer per timer object (for "previous" element).

If deemed necessary, the linked list can be exchanged our augmented with another data structure providing better algorithmic guarantees. It remains to be shown whether the increased complexity would lead to better performance for any reasonable amount of active timers.

Clock extensionThe API always allows setting full 32bit relative offsets for every clock.

In some cases (e.g., a hardware timer only allowing getting/setting smaller values or a conversion which would overflow uint32_t for large intervals), ztimer takes care of extending timers. This is enabled automatically for every ztimer clock that has a "max_value" setting smaller than 2**32-1. If a [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c) would overflow that value, intermediate intervals of length (max_value / 2) are set until the remaining interval fits into max_value. If extension is enabled for a clock, [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) uses interval checkpointing, storing the current time and corresponding clock tick value on each call and using that information to calculate the current time. This ensures correct [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) values if [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) is called at least once every "max_value" ticks. This is ensured by scheduling intermediate callbacks every (max_value / 2) ticks (even if no timeout is configured).

ReliabilityCare has been taken to avoid any unexpected behaviour of ztimer. In particular, ztimer tries hard to avoid underflows (setting a backend timer to a value at or behind the current time, causing the timer interrupt to trigger one whole timer period too late). This is done by always setting relative timeouts to backend timers, with interrupts disabled and ensuring that very small values don't cause underflows.

Configuration and conventionAs timer hardware and capabilities is diverse and ztimer allows configuring and using arbitrary clock backends and conversions, it is envisioned to provide default configurations that application developers can assume to be available.

These are implemented by using pointers to ztimer clocks using default names.

For now, there are:

ZTIMER_USEC: clock providing microsecond ticks, always uses a basic timer (ztimer_periph_timer)

ZTIMER_MSEC: clock providing millisecond ticks, using a low power timer (ztimer_periph_rtt) if it is available on the platform and it running at 1kHz or above else it uses the same basic timer as ZTIMER_USEC does.

ZTIMER_SEC: clock providing second time, possibly using epoch semantics, it will use a low power timer (ztimer_periph_rtt) if it is available on the platform alternately it uses ztimer_periph_rtc if it is available and configured if if these are missing it will use same basic timer as ZTIMER_USEC does.

If `periph_rtt` is required with direct access by another MODULE or application, `ztimer_no_periph_rtt` can be included to avoid automatic selection of `ztimer_periph_rtt` as a backend for ZTIMER_SEC and ZTIMER_MSEC. i.e.: `USEMODULE += ztimer_no_periph_rtt`.

These pointers are defined in `[ztimer.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ztimer_8h)` and can be used like this: ztimer_now(ZTIMER_USEC);
 They also need to be added to USEMODULE using the names `ztimer_usec`, `ztimer_msec` and `ztimer_sec`.

Some notes on ztimer's accuracy* ztimer *should* wait "at least" the specified timeout

* due to its implementation details, expect +-1 clock tick systemic inaccuracy for all clocks.

* for the predefined clocks (ZTIMER_USEC, ZTIMER_MSEC, ZTIMER_SEC), tick conversion might be applied using ztimer_convert_*, causing errors due to integer conversion and rounding. In particular, most RTT's closest match for milliseconds are 1024Hz, which will be converted using convert_frac to provide the 1ms clock.

* Some platforms don't have any timer that can be configured to 1us. E.g., the fe310 (hifive1/b) only supports a 32kHz timer, and most atmegas only support 250kHz. In order to not completely break all applications using ZTIMER_USEC, that clock will only provide ~30.5ms respectively 4us maximum accuracy on those boards. With DEVELHELP=1, a warning will be printed at boot time.

* Due to +-1 systemic inaccuracies, it is advisable to use ZTIMER_MSEC for second timers up to 49 days (instead of ZTIMER_SEC).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ZTIMER_CLOCK_NO_REQUIRED_PM_MODE`](#group__sys__ztimer_1ga31826ee80148499098015ed01ce503d6)            | Disables interaction with pm_layered for a clock.
`define `[`MSG_ZTIMER`](#group__sys__ztimer_1ga85289624f0c958bc0174f61bd728b582)            | msg type used by ztimer_msg_receive_timeout
`public void `[`ztimer_handler`](#group__sys__ztimer_1gae2432e9f2e227fce4a4730afdbe59cb6)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | main ztimer callback handler
`public bool `[`ztimer_acquire`](#group__sys__ztimer_1gaaff51039476f11e6969da09493e7ccb0)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | Acquire a clock.
`public bool `[`ztimer_release`](#group__sys__ztimer_1ga1d5dd6ad693ee8c1aac3460b3cf25b08)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | Release a clock.
`public uint32_t `[`ztimer_set`](#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t val)`            | Set a timer on a clock.
`public unsigned `[`ztimer_is_set`](#group__sys__ztimer_1gad4fc759a7f9d5baf8c5390378efdf59a)`(const `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,const `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer)`            | Check if a timer is currently active.
`public bool `[`ztimer_remove`](#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer)`            | Remove a timer from a clock.
`public void `[`ztimer_set_msg`](#group__sys__ztimer_1ga595ba6d03ea9052dd3e67d55b0b0dcf7)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Post a message after a delay.
`public int `[`ztimer_msg_receive_timeout`](#group__sys__ztimer_1gabe88b7f7076d2b48bb17912b78bdc336)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint32_t timeout)`            | receive a message (blocking, with timeout)
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`_ztimer_now_extend`](#group__sys__ztimer_1gae2f7c7499bb59b188ad910063ee881fe)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) for extending timers
`public void `[`_ztimer_assert_clock_active`](#group__sys__ztimer_1gaedabe84f72efbbed84b39a62e62c1eb9)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | asserts the given clock to be active
`public inline static `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`ztimer_now`](#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | Get the current time from a clock.
`public void `[`ztimer_periodic_wakeup`](#group__sys__ztimer_1ga40107ed3e27898606f8bfc69d01fb39e)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t * last_wakeup,uint32_t period)`            | Suspend the calling thread until the time (`last_wakeup` + `period`)
`public void `[`ztimer_sleep`](#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t duration)`            | Put the calling thread to sleep for the specified number of ticks.
`public inline static void `[`ztimer_spin`](#group__sys__ztimer_1ga9de3d9e3290746b856bb23eb2dccaa7c)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t duration)`            | Busy-wait specified duration.
`public void `[`ztimer_set_wakeup`](#group__sys__ztimer_1ga50b1929e8ff4a920020e3111bbd8050e)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Set a timer that wakes up a thread.
`public void `[`ztimer_set_timeout_flag`](#group__sys__ztimer_1gaf3b87b65d13b41cdaacde7385afd4a60)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t timeout)`            | Set timeout thread flag after `timeout`.
`public void `[`ztimer_mutex_unlock`](#group__sys__ztimer_1gae755859e6cab00acec7e5fdf03a5dffd)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t timeout,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Unlock mutex after `timeout`.
`public int `[`ztimer_mutex_lock_timeout`](#group__sys__ztimer_1gaf418c7bedd6246adfdcb1399aa72a75b)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint32_t timeout)`            | Try to lock the given mutex, but give up after `timeout`.
`public int `[`ztimer_rmutex_lock_timeout`](#group__sys__ztimer_1gad56130f45acd5b415674935910bb269d)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint32_t timeout)`            | Try to lock the given rmutex, but give up after `timeout`.
`public void `[`ztimer_init`](#group__sys__ztimer_1ga0774ba6e5613bad33dc855c0f73565cc)`(void)`            | Initialize the board-specific default ztimer configuration.
`public inline static void `[`ztimer_init_extend`](#group__sys__ztimer_1gacdd4826cb78f398402a587718254b141)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)`            | Initialize possible ztimer extension intermediate timer.
`struct `[`ztimer_base`](#structztimer__base) | Minimum information for each timer.
`struct `[`ztimer_t`](#structztimer__t) | ztimer structure
`struct `[`ztimer_ops_t`](#structztimer__ops__t) | ztimer backend method structure
`struct `[`ztimer_clock`](#structztimer__clock) | ztimer device structure

## Members

#### `define `[`ZTIMER_CLOCK_NO_REQUIRED_PM_MODE`](#group__sys__ztimer_1ga31826ee80148499098015ed01ce503d6) 

Disables interaction with pm_layered for a clock.

#### `define `[`MSG_ZTIMER`](#group__sys__ztimer_1ga85289624f0c958bc0174f61bd728b582) 

msg type used by ztimer_msg_receive_timeout

#### `public void `[`ztimer_handler`](#group__sys__ztimer_1gae2432e9f2e227fce4a4730afdbe59cb6)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

main ztimer callback handler

This gets called by clock implementations, and must only be called by them with interrupts disabled.

#### `public bool `[`ztimer_acquire`](#group__sys__ztimer_1gaaff51039476f11e6969da09493e7ccb0)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

Acquire a clock.

This will indicate the the underlying clock is required to be running. If time differences are measured using [ztimer_now](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) this will make sure ztimer won't turn of the clock source.

#### Parameters
* `clock` ztimer clock to operate on

#### Returns
true if this was the first acquisition on this this clock

#### `public bool `[`ztimer_release`](#group__sys__ztimer_1ga1d5dd6ad693ee8c1aac3460b3cf25b08)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

Release a clock.

This will indicate the the underlying clock isn't required to be running anymore and may be turned off.

#### Parameters
* `clock` ztimer clock to operate on

#### Returns
true if this was the last clock user

#### `public uint32_t `[`ztimer_set`](#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t val)` 

Set a timer on a clock.

This will place `timer` in the timer targets queue of `clock`.

The memory pointed to by `timer` is not copied and must remain in scope until the callback is fired or the timer is removed via [ztimer_remove](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50)

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` timer entry to set 

* `val` timer target (relative ticks from now)

#### Returns
The value of [ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) that `timer` was set against (`[now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) + @p val = absolute trigger time`).

#### `public unsigned `[`ztimer_is_set`](#group__sys__ztimer_1gad4fc759a7f9d5baf8c5390378efdf59a)`(const `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,const `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer)` 

Check if a timer is currently active.

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` timer to check

#### Returns
> 0 if timer is active 

#### Returns
0 if timer is not active

#### `public bool `[`ztimer_remove`](#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer)` 

Remove a timer from a clock.

This will remove `timer` from the timer targets queue for `clock`.

This function does nothing if `timer` is not found in the timer queue of `clock`.

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` timer entry to remove

#### Parameters
* `true` The timer was removed (and thus its callback neither was nor will be called by ztimer). 

* `false` The timer fired previously or is not set on the `clock` at all.

#### `public void `[`ztimer_set_msg`](#group__sys__ztimer_1ga595ba6d03ea9052dd3e67d55b0b0dcf7)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t offset,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Post a message after a delay.

This function sets a timer that will send a message `offset` ticks from now.

The memory pointed to by `timer` and `msg` will not be copied, i.e. `*timer` and `*msg` needs to remain valid until the timer has triggered.

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` ztimer timer struct to use 

* `offset` ticks from now 

* `msg` pointer to msg that will be sent 

* `target_pid` pid the message will be sent to

#### `public int `[`ztimer_msg_receive_timeout`](#group__sys__ztimer_1gabe88b7f7076d2b48bb17912b78bdc336)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,uint32_t timeout)` 

receive a message (blocking, with timeout)

Similar to [msg_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a), but with a timeout parameter. The function will return after waiting at most `timeout` ticks.

: This might function might leave a message with type MSG_ZTIMER in the thread's message queue, which must be handled (ignored).

#### Parameters
* `clock` ztimer clock to operate on 

* `msg` pointer to buffer which will be filled if a message is received 

* `timeout` relative timeout, in `clock` time units

#### Returns
>=0 if a message was received 

#### Returns
-ETIME on timeout

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`_ztimer_now_extend`](#group__sys__ztimer_1gae2f7c7499bb59b188ad910063ee881fe)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

[ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8) for extending timers

#### `public void `[`_ztimer_assert_clock_active`](#group__sys__ztimer_1gaedabe84f72efbbed84b39a62e62c1eb9)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

asserts the given clock to be active

#### `public inline static `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`ztimer_now`](#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

Get the current time from a clock.

There are several caveats to consider when using values returned by `[ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8)` (or comparing those values to results of [ztimer_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c), which are compatible):

* A single value has no meaning of its own. Meaningful results are only ever produced when subtracting values from each other (in the wrapping fashion implied by the use of unsigned integers in C).

For example, even though it may be the case in some scenarios, the value does **not** indicate time since system startup.

* Only values obtained from the same clock can be compared.

* Two values can only be compared when the clock has been continuously active between the first and the second reading.

Calling [ztimer_acquire](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gaaff51039476f11e6969da09493e7ccb0) before using `[ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8)` is the preferred way to guarantee that a clock is continuously active. Make sure to call the corresponding [ztimer_release](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga1d5dd6ad693ee8c1aac3460b3cf25b08) after the last `[ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8)` call.

A clock is also guaranteed to be active from the time any timer is set (the first opportunity to get a "now" value from it is the return value of [ztimer_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c)) until the time the timer's callback returns. The clock also stays active when timers are set back-to-back (which is the case when the first timer's callback sets the second timer), or when they overlap (which can be known by starting the second timer and afterwards observing that [ztimer_is_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gad4fc759a7f9d5baf8c5390378efdf59a) or [ztimer_remove](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50) returns true in a low-priority context).

In contrast, the clock is not guaranteed to be active if a timer is removed and then a second one is started (even if the thread does not block between these events), or when an expiring timer wakes up a thread that then sets the second timer.

If the clock was active, then the difference between the second value and the first is then the elapsed time in the clock's unit, **modulo 2³² ticks**.

* A difference between two values (calculated in the usual wrapping way) is guaranteed to be exactly the elapsed time (not just modulo 2³²) if there exists a single timer that is continuously set while both readings are taken (which in particular means that the clock was continuously active), **and** the timer is observed to be still set when after the second reading an execution context with lower priority than the ZTimer interrupt has run. (In particular, this is the case in a thread context when interrupts are enabled).

For example, this sequence of events will return usable values:

* In a thread, a timer is set.

* Some interrupt fires, and `start = ztimer_now(ZTIMER_MSEC)` is set in the handler.

* The interrupt fires again, and `duration = start - ztimer_now(ZTIMER_MSEC)` is stored.

* Back in the thread context, [ztimer_remove](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50) on the timer returns true.

Only now, `duration` can be known to be a duration in milliseconds.

(By comparison, if the timer were removed right inside the second interrupt, then duration might either be correct, or it might be 5 milliseconds when really 2³² + 5 milliseconds have elapsed)

The requirement of the execution contexts can be **dispensed with, if** the set timer is shorter than the wrap-around time of the clock by at least the maximum duration the full system is allowed to spend between interrupt servicing opportunities. That time varies by setup, but an upper bound of 1 minute is conservative enough for system modules to use.

For example, this sequence of events will also return usable values:

* A mutex is locked, and a timer is set to unlock it on the millisecond timer after 1 hour. (This is way less than the wrap-around time of around 50 days).

* The return value of setting the timer is noted as start time.

* Some interrupt fires, and `[ztimer_now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gabcd8174ea28626e102b40143075ed9c8)` is taken. Then (still inside the ISR), [mutex_trylock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe) is used to test for whether the interrupt is still locked (indicating that the timer has not been processed). If locking failed, the difference is valid and can be used immediately. Otherwise, the mutex needs to be freed again, and the difference is discarded (it can be stored as "longer than 1 hour").

* To compare two values T1 and T2 without additional knowledge (eg. of a maximum time difference between them), it has to be known which value was read earlier, so that the earlier can be subtracted from the later.

If that is not known, an easy solution is to store a base value T0 inside the same single-timer window as T1 and T2, and then compare (T2 - T0) and (T1 - T0) to see which of the events occurred earlier.

The above criteria are conservative API guarantees of `ztimer_now`. There can be additional properties of a system that allow additional usage patterns; these need to be evaluated case-by-case. (For example, a ZTimer backed by a timer that never stops might be comparable even without a running timer.)

All the above need to be considered before using the results of this function. Not considering them may give results that appear to be valid, but that can change without prior warning, e.g. when unrelated components are altered that change the systems's power management behavior.

Make sure to call [ztimer_acquire](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gaaff51039476f11e6969da09493e7ccb0)(`clock`) before fetching the clock's current time.

#### Parameters
* `clock` ztimer clock to operate on

#### Returns
Current count on `clock`

#### `public void `[`ztimer_periodic_wakeup`](#group__sys__ztimer_1ga40107ed3e27898606f8bfc69d01fb39e)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t * last_wakeup,uint32_t period)` 

Suspend the calling thread until the time (`last_wakeup` + `period`)

This function can be used to create periodic wakeups.

When the function returns, `last_wakeup` is set to (`last_wakeup` + `period`).

`last_wakeup` should be set to ztimer_now(`clock`) before first call of the function.

If the time (`last_wakeup` + `period`) has already passed, the function sets `last_wakeup` to `last_wakeup` + `period` and returns immediately.

Make sure to call [ztimer_acquire](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gaaff51039476f11e6969da09493e7ccb0)(`clock`) before making use of [ztimer_periodic_wakeup](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga40107ed3e27898606f8bfc69d01fb39e). After usage [ztimer_release](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga1d5dd6ad693ee8c1aac3460b3cf25b08)(`clock`) should be called.

#### Parameters
* `clock` ztimer clock to operate on 

* `last_wakeup` base time stamp for the wakeup 

* `period` time in ticks that will be added to `last_wakeup`

#### `public void `[`ztimer_sleep`](#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t duration)` 

Put the calling thread to sleep for the specified number of ticks.

#### Parameters
* `clock` ztimer clock to use 

* `duration` duration of sleep, in `ztimer` time units

#### `public inline static void `[`ztimer_spin`](#group__sys__ztimer_1ga9de3d9e3290746b856bb23eb2dccaa7c)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t duration)` 

Busy-wait specified duration.

: This blocks lower priority threads. Use only for *very* short delays.

#### Parameters
* `clock` ztimer clock to use 

* `duration` duration to spin, in `clock` time units

#### `public void `[`ztimer_set_wakeup`](#group__sys__ztimer_1ga50b1929e8ff4a920020e3111bbd8050e)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t offset,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Set a timer that wakes up a thread.

This function sets a timer that will wake up a thread when the timer has expired.

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` timer struct to work with. 

* `offset` clock ticks from now 

* `pid` pid of the thread that will be woken up

#### `public void `[`ztimer_set_timeout_flag`](#group__sys__ztimer_1gaf3b87b65d13b41cdaacde7385afd4a60)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t timeout)` 

Set timeout thread flag after `timeout`.

This function will set THREAD_FLAG_TIMEOUT on the current thread after `timeout` usec have passed.

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` timer struct to use 

* `timeout` timeout in [ztimer_clock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__clock)'s ticks

#### `public void `[`ztimer_mutex_unlock`](#group__sys__ztimer_1gae755859e6cab00acec7e5fdf03a5dffd)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` * timer,uint32_t timeout,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Unlock mutex after `timeout`.

This function will unlock the given mutex after the timeout has passed.

#### Parameters
* `clock` ztimer clock to operate on 

* `timer` timer struct to use 

* `timeout` timeout in [ztimer_clock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__clock)'s ticks 

* `mutex` mutex to unlock after timeout

#### `public int `[`ztimer_mutex_lock_timeout`](#group__sys__ztimer_1gaf418c7bedd6246adfdcb1399aa72a75b)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,uint32_t timeout)` 

Try to lock the given mutex, but give up after `timeout`.

#### Parameters
* `clock` ztimer clock to operate on 

* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to lock 

* `timeout` timeout after which to give up

#### Parameters
* `0` Success, caller has the mutex 

* `-ECANCELED` Failed to obtain mutex within `timeout`

#### `public int `[`ztimer_rmutex_lock_timeout`](#group__sys__ztimer_1gad56130f45acd5b415674935910bb269d)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex,uint32_t timeout)` 

Try to lock the given rmutex, but give up after `timeout`.

#### Parameters
* `clock` ztimer clock to operate on 

* `rmutex` rmutex object to lock 

* `timeout` timeout after which to give up

#### Parameters
* `0` Success, caller has the rmutex 

* `-ECANCELED` Failed to obtain rmutex within `timeout`

#### `public void `[`ztimer_init`](#group__sys__ztimer_1ga0774ba6e5613bad33dc855c0f73565cc)`(void)` 

Initialize the board-specific default ztimer configuration.

#### `public inline static void `[`ztimer_init_extend`](#group__sys__ztimer_1gacdd4826cb78f398402a587718254b141)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock)` 

Initialize possible ztimer extension intermediate timer.

This will basically just set a timer to (clock->max_value >> 1), *if* max_value is not UINT32_MAX.

This is called automatically by all ztimer backends and extension modules.

# struct `ztimer_base` 

Minimum information for each timer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` * `[`next`](#structztimer__base_1af9ca0bd6f1090b707305dbe5bf0e4248) | next timer in list
`public uint32_t `[`offset`](#structztimer__base_1a0a28e56dc5330bce1e3817613d8f6a02) | offset from last timer in list

## Members

#### `public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` * `[`next`](#structztimer__base_1af9ca0bd6f1090b707305dbe5bf0e4248) 

next timer in list

#### `public uint32_t `[`offset`](#structztimer__base_1a0a28e56dc5330bce1e3817613d8f6a02) 

offset from last timer in list

# struct `ztimer_t` 

ztimer structure

This type represents an instance of a timer, which is set on an underlying clock object

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` `[`base`](#structztimer__t_1ab47dbc435e6337c35cb1102796167be8) | clock list entry
`public `[`ztimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga2c485e19ecdf4252512a8128b3b3eeac)` `[`callback`](#structztimer__t_1a320594a37924b7d784242ff75ada6f92) | timer callback function pointer
`public void * `[`arg`](#structztimer__t_1a52767f45b4f55dd93dbfb2a3d730f5e7) | timer callback argument

## Members

#### `public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` `[`base`](#structztimer__t_1ab47dbc435e6337c35cb1102796167be8) 

clock list entry

#### `public `[`ztimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga2c485e19ecdf4252512a8128b3b3eeac)` `[`callback`](#structztimer__t_1a320594a37924b7d784242ff75ada6f92) 

timer callback function pointer

#### `public void * `[`arg`](#structztimer__t_1a52767f45b4f55dd93dbfb2a3d730f5e7) 

timer callback argument

# struct `ztimer_ops_t` 

ztimer backend method structure

This table contains pointers to the virtual methods for a ztimer clock.

These functions used by ztimer core to interact with the underlying clock.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`set`](#structztimer__ops__t_1ab342807fdefc48319eb4f7e10e45f89d) | Set a new timer target.
`public uint32_t(* `[`now`](#structztimer__ops__t_1a2401cc2bb473bcf221d7c6a672f50a7c) | Get the current count of the timer.
`public void(* `[`cancel`](#structztimer__ops__t_1a9acfb7ec1a979f9c1b073ed71a7d98c4) | Cancel any set target.
`public void(* `[`start`](#structztimer__ops__t_1a4807b0359ed669170e8fdf84ca03f4a3) | Starts the underlying timer.
`public void(* `[`stop`](#structztimer__ops__t_1a8129bdd76ad8e258fbd71d3abfb1abf4) | Stops the underlying timer.

## Members

#### `public void(* `[`set`](#structztimer__ops__t_1ab342807fdefc48319eb4f7e10e45f89d) 

Set a new timer target.

#### Parameters
* `clock` ztimer clock to set the new target 

* `val` Relative target (e.g. fire at value `[now()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a2401cc2bb473bcf221d7c6a672f50a7c) + val`)

#### `public uint32_t(* `[`now`](#structztimer__ops__t_1a2401cc2bb473bcf221d7c6a672f50a7c) 

Get the current count of the timer.

#### Parameters
* `clock` ztimer clock to get the current time from

#### `public void(* `[`cancel`](#structztimer__ops__t_1a9acfb7ec1a979f9c1b073ed71a7d98c4) 

Cancel any set target.

#### Parameters
* `clock` ztimer clock to cancel a pending alarm, if any

#### `public void(* `[`start`](#structztimer__ops__t_1a4807b0359ed669170e8fdf84ca03f4a3) 

Starts the underlying timer.

#### Parameters
* `clock` ztimer clock to start

#### `public void(* `[`stop`](#structztimer__ops__t_1a8129bdd76ad8e258fbd71d3abfb1abf4) 

Stops the underlying timer.

#### Parameters
* `clock` ztimer clock to stop

# struct `ztimer_clock` 

ztimer device structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` `[`list`](#structztimer__clock_1a8506de4fcdf3199fbf0da0cc698ee097) | list of active timers
`public const `[`ztimer_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t)` * `[`ops`](#structztimer__clock_1aeb750a73a6b7f05d02b10d22c70a8761) | pointer to methods structure
`public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` * `[`last`](#structztimer__clock_1a6bebc8a5498e3ff4f316e13e05655307) | last timer in queue, for _is_set()
`public uint16_t `[`adjust_set`](#structztimer__clock_1adadb01ab9076c3f88d5a505fd323eaec) | will be subtracted on every set()
`public uint16_t `[`adjust_sleep`](#structztimer__clock_1a3851442c485d3f761205a89854231bc5) | will be subtracted on every sleep(), in addition to adjust_set
`public uint16_t `[`adjust_clock_start`](#structztimer__clock_1aa9be74634baf05710c556d92353c8ac0) | will be subtracted on every set(), if the underlying periph is in stopped state
`public uint16_t `[`users`](#structztimer__clock_1a76db8b7ef477f47121f03518665ea22d) | user count of this clock
`public uint32_t `[`max_value`](#structztimer__clock_1a573b0416803d364c843558f58dea27f5) | maximum relative timer value
`public uint32_t `[`lower_last`](#structztimer__clock_1a4c1ab91200109112c91304d30185680b) | timer value at last [now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) call
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`checkpoint`](#structztimer__clock_1a637ef98236482db411ab9aa2f22e610a) | cumulated time at last [now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) call
`public uint8_t `[`block_pm_mode`](#structztimer__clock_1afb6702849c39cf679007958e53b99fa6) | min.

## Members

#### `public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` `[`list`](#structztimer__clock_1a8506de4fcdf3199fbf0da0cc698ee097) 

list of active timers

#### `public const `[`ztimer_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t)` * `[`ops`](#structztimer__clock_1aeb750a73a6b7f05d02b10d22c70a8761) 

pointer to methods structure

#### `public `[`ztimer_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga0f3984c505b85ddf76049771c0bd6222)` * `[`last`](#structztimer__clock_1a6bebc8a5498e3ff4f316e13e05655307) 

last timer in queue, for _is_set()

#### `public uint16_t `[`adjust_set`](#structztimer__clock_1adadb01ab9076c3f88d5a505fd323eaec) 

will be subtracted on every set()

#### `public uint16_t `[`adjust_sleep`](#structztimer__clock_1a3851442c485d3f761205a89854231bc5) 

will be subtracted on every sleep(), in addition to adjust_set

#### `public uint16_t `[`adjust_clock_start`](#structztimer__clock_1aa9be74634baf05710c556d92353c8ac0) 

will be subtracted on every set(), if the underlying periph is in stopped state

#### `public uint16_t `[`users`](#structztimer__clock_1a76db8b7ef477f47121f03518665ea22d) 

user count of this clock

#### `public uint32_t `[`max_value`](#structztimer__clock_1a573b0416803d364c843558f58dea27f5) 

maximum relative timer value

#### `public uint32_t `[`lower_last`](#structztimer__clock_1a4c1ab91200109112c91304d30185680b) 

timer value at last [now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) call

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`checkpoint`](#structztimer__clock_1a637ef98236482db411ab9aa2f22e610a) 

cumulated time at last [now()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#namespaceriot_1a9b88c54f8020b254c8791325c525634e) call

#### `public uint8_t `[`block_pm_mode`](#structztimer__clock_1afb6702849c39cf679007958e53b99fa6) 

min.

pm mode to block for the clock to run don't use in combination with ztimer_ondemand!

