---
title: api-drivers_periph_ptp.md
description: api-drivers_periph_ptp.md
---
# group `drivers_periph_ptp` 

Low-level PTP clock peripheral driver.

IntroductionThe [Precision Time Protocol (PTP)](https://standards.ieee.org/content/ieee-standards/en/standard/1588-2019.html) can be used to synchronize clocks with hardware support in an Ethernet PHY, that allows to precisely estimate (and, thus, compensate) network delay between time server and client. This allows PTP synchronization to be highly accurate (<< 1 µs offset between server and client), but requires hardware support on each synchronized node and the PTP server, all nodes to be connected to the same* Ethernet network, and (for best results) hardware support in all intermediate switches.

(No) Synchronization Using This APIThis API is intended to provide basic access to a PTP hardware clock. This does not cover any synchronization. Some PTP hardware clocks (e.g. on the STM32) can be used without synchronization by manually setting the time. Thus, the PTP clock can be useful even without synchronization implemented.

It is intended that the actual synchronization is implemented externally later on. The functions [ptp_clock_adjust](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__ptp_1gadf6f865c88a6ed893bd77ae813ef892b) and [ptp_clock_adjust_speed](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__ptp_1ga70461154180e423d2084ee56a0b42be9) are specified with the needs of a synchronization solution in mind.

Clock vs TimerThis API provides both `ptp_clock_*()` and `ptp_timer_*()` functions, to distinguish between the feature set being used. A PTP peripheral might only support the feature `periph_ptp`, but not `periph_ptp_timer`.

(Lack of) Power ConsiderationsIt is assumed that a board connected to a wired network is also powered from mains. Additionally, a high-resolution high-accuracy clock that is periodically synced over network is just not going to play well with low-power application scenarios.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static int `[`ptp_cmp`](#group__drivers__periph__ptp_1ga60a2ab67c2548ab8242be3c6d6e7f3a8)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * a,const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * b)`            | Compare two PTP timestamps.
`public inline static void `[`ptp_add`](#group__drivers__periph__ptp_1ga06210d644b7a481f711a611889cb314b)`(`[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * t,int64_t offset)`            | Add a given offset onto the given timestamp.
`public inline static void `[`ptp_ns2ts`](#group__drivers__periph__ptp_1ga1040816d3338330c53b7ea13068d4fd7)`(`[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * dest,uint64_t ns_since_epoch)`            | Convert time from nanoseconds since epoch to [ptp_timestamp_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t) format.
`public inline static uint64_t `[`ptp_ts2ns`](#group__drivers__periph__ptp_1gaf7cff5f666a78aac1d5a7e35f9ee5f59)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * t)`            | Convert time from nanoseconds since epoch to [ptp_timestamp_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t) format.
`public void `[`ptp_init`](#group__drivers__periph__ptp_1gae18f652fb2102235587eef7a2be224ee)`(void)`            | Initialize the given PTP peripheral.
`public void `[`ptp_clock_adjust_speed`](#group__drivers__periph__ptp_1ga70461154180e423d2084ee56a0b42be9)`(int32_t correction)`            | Adjust the PTP clock speed as given.
`public void `[`ptp_clock_adjust`](#group__drivers__periph__ptp_1gadf6f865c88a6ed893bd77ae813ef892b)`(int64_t offset)`            | Adjust the PTP clock as given.
`public inline void `[`ptp_clock_read`](#group__drivers__periph__ptp_1ga78d7d848fa18998720db93750cf1ec05)`(`[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * timestamp)`            | Get the current system time as PTP timestamp.
`public inline uint64_t `[`ptp_clock_read_u64`](#group__drivers__periph__ptp_1ga67e73d24477af86c0d43a0c65702d233)`(void)`            | Get the current system time in nanosecond since UNIX epoch.
`public inline void `[`ptp_clock_set`](#group__drivers__periph__ptp_1ga96cfad272a14a69e8a2a21f4feb1aed9)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * time)`            | Set the current system time.
`public inline void `[`ptp_clock_set_u64`](#group__drivers__periph__ptp_1ga2b65b08d8ec490a1ca8914a17494b7d0)`(uint64_t ns_since_epoch)`            | Set the current system time in nanosecond since UNIX epoch.
`public void `[`ptp_timer_cb`](#group__drivers__periph__ptp_1gaa4816153268e3ab3d4e4ff2ee8ab8425)`(void)`            | External function to call when the PTP clock timer fired.
`public inline void `[`ptp_timer_set_absolute`](#group__drivers__periph__ptp_1ga7aca6b37425dc052ccf12a4bdf6b054a)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * target)`            | Set an absolute timeout value, possibly overwriting an existing timeout.
`public inline void `[`ptp_timer_set_absolute_u64`](#group__drivers__periph__ptp_1ga6b7b74bc434a5ec96f439d22697c74b5)`(uint64_t target)`            | Set an absolute timeout value, possibly overwriting an existing timeout.
`public void `[`ptp_timer_set_u64`](#group__drivers__periph__ptp_1ga03812aa5adece70e82398147fce1d517)`(uint64_t target)`            | Set an relative timeout value, possibly overwriting an existing timeout.
`public void `[`ptp_timer_clear`](#group__drivers__periph__ptp_1gadb883c9c10b6593f3c0e377f45cbe8da)`(void)`            | Clears any pending timeout on the PTP timer.
`struct `[`ptp_timestamp_t`](#structptp__timestamp__t) | A PTP timestamp in seconds + nanoseconds since UNIX epoch.

## Members

#### `public inline static int `[`ptp_cmp`](#group__drivers__periph__ptp_1ga60a2ab67c2548ab8242be3c6d6e7f3a8)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * a,const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * b)` 

Compare two PTP timestamps.

#### Parameters
* `a` First timestamp 

* `b` Second timestamp

#### Parameters
* `-1` `a` < `b`

* `0` `a` == `b`

* `1` `a` > `b`

#### `public inline static void `[`ptp_add`](#group__drivers__periph__ptp_1ga06210d644b7a481f711a611889cb314b)`(`[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * t,int64_t offset)` 

Add a given offset onto the given timestamp.

#### Parameters
* `t` Timestamp to add offset to 

* `offset` Offset to apply

#### `public inline static void `[`ptp_ns2ts`](#group__drivers__periph__ptp_1ga1040816d3338330c53b7ea13068d4fd7)`(`[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * dest,uint64_t ns_since_epoch)` 

Convert time from nanoseconds since epoch to [ptp_timestamp_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t) format.

#### Parameters
* `dest` The timestamp will be written here 

* `ns_since_epoch` Time in nanoseconds since epoch to convert

#### `public inline static uint64_t `[`ptp_ts2ns`](#group__drivers__periph__ptp_1gaf7cff5f666a78aac1d5a7e35f9ee5f59)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * t)` 

Convert time from nanoseconds since epoch to [ptp_timestamp_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t) format.

#### Parameters
* `t` Time to convert to nanoseconds since epoch

#### Returns
The time specified by `t` in nanoseconds since epoch

#### `public void `[`ptp_init`](#group__drivers__periph__ptp_1gae18f652fb2102235587eef7a2be224ee)`(void)` 

Initialize the given PTP peripheral.

Implementations of this functions have to use `[assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53)` to make the configuration is valid.

This function must be called at most once

After calling this, the PTP clock (and the PTP timer, if the feature `periph_ptp_timer` is used in addition to `periph_ptp_clock`) can be used.

#### `public void `[`ptp_clock_adjust_speed`](#group__drivers__periph__ptp_1ga70461154180e423d2084ee56a0b42be9)`(int32_t correction)` 

Adjust the PTP clock speed as given.

#### Parameters
* `correction` Specification of the clock speed adjustment

This implies feature `periph_ptp_speed_adjustment`

The clock speed is adjusted in regard to its nominal clock speed. This means that calls with the same value in `correction` are idempotent.

* A call with `correction` set to `0` restores the nominal clock speed.

* A call with a positive value for `correction` speeds the clock up by `correction / (1 << 32)` (so up to ~50% for `INT32_MAX`).

* A call with a negative value for `correction` slows the clock down by `-correction / (1 << 32)` (so up to 50% for `INT32_MIN`).

This allows the clock speed to be adjusted in steps ± 2.3284E-08 % in relation to its nominal clock speed, thus, allowing to counter systematic clock drift. In addition, this is intended to "smoothly" synchronize the clock over time to avoid jumps in the system time. (Especially calling [ptp_clock_adjust](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__ptp_1gadf6f865c88a6ed893bd77ae813ef892b) with negative values might be something to avoid, when applications are not prepared with clocks going backwards.)

#### `public void `[`ptp_clock_adjust`](#group__drivers__periph__ptp_1gadf6f865c88a6ed893bd77ae813ef892b)`(int64_t offset)` 

Adjust the PTP clock as given.

#### Parameters
* `offset` Offset to add onto current system time

Same as `ptp_clock_set_u64([ptp_clock_read_u64()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__ptp_1ga67e73d24477af86c0d43a0c65702d233) + offset)`, but implemented to introduce as little error as possible while setting the offset. This is intended to be used by clock synchronization implementations.

#### `public inline void `[`ptp_clock_read`](#group__drivers__periph__ptp_1ga78d7d848fa18998720db93750cf1ec05)`(`[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * timestamp)` 

Get the current system time as PTP timestamp.

#### Parameters
* `timestamp` The timestamp will be written here 

The PTP clock is initialized

#### `public inline uint64_t `[`ptp_clock_read_u64`](#group__drivers__periph__ptp_1ga67e73d24477af86c0d43a0c65702d233)`(void)` 

Get the current system time in nanosecond since UNIX epoch.

#### Returns
Nanoseconds since 1. 1. 1970 0:00:00 UTC

The PTP clock is initialized

An `uint64_t` allows nanosecond timestamps within 1970-01-01 and 2554-07-21 to be represented.

#### `public inline void `[`ptp_clock_set`](#group__drivers__periph__ptp_1ga96cfad272a14a69e8a2a21f4feb1aed9)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * time)` 

Set the current system time.

#### Parameters
* `time` The new system time

The PTP clock is initialized

#### `public inline void `[`ptp_clock_set_u64`](#group__drivers__periph__ptp_1ga2b65b08d8ec490a1ca8914a17494b7d0)`(uint64_t ns_since_epoch)` 

Set the current system time in nanosecond since UNIX epoch.

#### Parameters
* `ns_since_epoch` New time to set

The PTP clock is initialized

#### `public void `[`ptp_timer_cb`](#group__drivers__periph__ptp_1gaa4816153268e3ab3d4e4ff2ee8ab8425)`(void)` 

External function to call when the PTP clock timer fired.

This function needs to be implemented by the *user* of this API 

This function implies feature `periph_ptp_timer`

Since at most one PTP clock is expected on each board, we can avoid the overhead of indirect function calls here and let users of this API just implement this function.

#### `public inline void `[`ptp_timer_set_absolute`](#group__drivers__periph__ptp_1ga7aca6b37425dc052ccf12a4bdf6b054a)`(const `[`ptp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_ptp.md#structptp__timestamp__t)` * target)` 

Set an absolute timeout value, possibly overwriting an existing timeout.

#### Parameters
* `target` Timestamp when the timeout should fire

Only a single timeout is supported by the PTP timer 

This function implies feature `periph_ptp_timer`

If the target time is in the past or equal to the current time, the IRQ should trigger right away.

#### `public inline void `[`ptp_timer_set_absolute_u64`](#group__drivers__periph__ptp_1ga6b7b74bc434a5ec96f439d22697c74b5)`(uint64_t target)` 

Set an absolute timeout value, possibly overwriting an existing timeout.

#### Parameters
* `target` Timestamp when the timeout should fire (ns since epoch)

Only a single timeout is supported by the PTP timer 

This function implies feature `periph_ptp_timer`

If the target time is in the past or equal to the current time, the IRQ should trigger right away.

#### `public void `[`ptp_timer_set_u64`](#group__drivers__periph__ptp_1ga03812aa5adece70e82398147fce1d517)`(uint64_t target)` 

Set an relative timeout value, possibly overwriting an existing timeout.

#### Parameters
* `target` Number of nanoseconds after which the timeout should fire

Only a single timeout is supported by the PTP timer 

This function implies feature `periph_ptp_timer`

#### `public void `[`ptp_timer_clear`](#group__drivers__periph__ptp_1gadb883c9c10b6593f3c0e377f45cbe8da)`(void)` 

Clears any pending timeout on the PTP timer.

This function implies feature `periph_ptp_timer`

# struct `ptp_timestamp_t` 

A PTP timestamp in seconds + nanoseconds since UNIX epoch.

According to IEEE 1588-2019 specification in section "5.3.3 Timestamp", timestamps are represented as seconds and nanoseconds since epoch. For the seconds parts an 48 bit unsigned integer is used in the protocol and a 32 bit unsigned integer for the nanoseconds.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ptp_seconds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__ptp_1ga18326e1117400ac2e3fbedff671d3339)` `[`seconds`](#structptp__timestamp__t_1a39c0d44d87cf2b27caddf8c7697886d9) | Seconds since UNIX epoch.
`public uint32_t `[`nanoseconds`](#structptp__timestamp__t_1a1a958b918827ccc7a40e86f0cc468a27) | Nanoseconds part.

## Members

#### `public `[`ptp_seconds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__ptp_1ga18326e1117400ac2e3fbedff671d3339)` `[`seconds`](#structptp__timestamp__t_1a39c0d44d87cf2b27caddf8c7697886d9) 

Seconds since UNIX epoch.

#### `public uint32_t `[`nanoseconds`](#structptp__timestamp__t_1a1a958b918827ccc7a40e86f0cc468a27) 

Nanoseconds part.

