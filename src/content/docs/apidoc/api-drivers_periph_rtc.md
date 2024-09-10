---
title: api-drivers_periph_rtc.md
description: api-drivers_periph_rtc.md
---
# group `drivers_periph_rtc` 

Low-level RTC (Real Time Clock) peripheral driver.

The values used for setting and getting the time/alarm should conform to the `struct tm` specification. Compare: [http://pubs.opengroup.org/onlinepubs/7908799/xsh/time.h.html](http://pubs.opengroup.org/onlinepubs/7908799/xsh/time.h.html)

(Low-) Power ImplicationsAfter the RTC has been initialized (i.e. after calling [rtc_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gacf9024748b942a7ae375cf75951afa9c)), the RTC should be powered on and running. The RTC can then be powered off manually at a later point in time by calling the [rtc_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1ga7defd322ead9dfeb19f180f5bfb505b3) function. When the RTC is powered back on using the [rtc_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gad3669c9b1d0a3033898465d993198f11) function, it **should** transparently continue its previously configured operation.

On many CPUs, certain power states might need to be blocked in [rtc_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gacf9024748b942a7ae375cf75951afa9c), so that it is ensured that the RTC will function properly while it is enabled.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`RIOT_EPOCH`](#group__drivers__periph__rtc_1gae6d6a8215f604e1907b4df059179ea1c)            | Earliest year of the RTC.
`public void `[`rtc_init`](#group__drivers__periph__rtc_1gacf9024748b942a7ae375cf75951afa9c)`(void)`            | Initialize RTC module.
`public int `[`rtc_set_time`](#group__drivers__periph__rtc_1gaa2d60ad372a3712b875a15e07c517843)`(struct tm * time)`            | Set RTC to given time.
`public int `[`rtc_get_time`](#group__drivers__periph__rtc_1gaba123afe49d9a86a78d021979a652e88)`(struct tm * time)`            | Get current RTC time.
`public int `[`rtc_get_time_ms`](#group__drivers__periph__rtc_1gad9b3420e92fe06d9af51b89afa6eadc4)`(struct tm * time,uint16_t * ms)`            | Get current RTC time with sub-second component.
`public int `[`rtc_set_alarm`](#group__drivers__periph__rtc_1ga28e3abca989cf1fcb76bdf6ffbb5ce62)`(struct tm * time,`[`rtc_alarm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1ga236005f42cd58827ca616cc5e808dc12)` cb,void * arg)`            | Set an alarm for RTC to the specified value.
`public int `[`rtc_get_alarm`](#group__drivers__periph__rtc_1ga5913b153d940f810fb176ff5ac62fc39)`(struct tm * time)`            | Gets the current alarm setting.
`public void `[`rtc_clear_alarm`](#group__drivers__periph__rtc_1gaaa9abfe68e09bce58c86a55f2427dcd1)`(void)`            | Clear any set alarm, do nothing if nothing set.
`public void `[`rtc_poweron`](#group__drivers__periph__rtc_1gad3669c9b1d0a3033898465d993198f11)`(void)`            | Turns the RTC hardware module on.
`public void `[`rtc_poweroff`](#group__drivers__periph__rtc_1ga7defd322ead9dfeb19f180f5bfb505b3)`(void)`            | Turns the RTC hardware module off.

## Members

#### `define `[`RIOT_EPOCH`](#group__drivers__periph__rtc_1gae6d6a8215f604e1907b4df059179ea1c) 

Earliest year of the RTC.

01.01.$RIOT_EPOCH will be the reset value of the RTC if supported.

Internal RTC helper functions such as [rtc_mktime](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__rtc__utils_1gab6f0603c079200652d000c83a4a0b1b4) and [rtc_localtime](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__rtc__utils_1gaa5e4a2c2c6a2786092b0740750403a17) will not work on dates earlier than that.

#### `public void `[`rtc_init`](#group__drivers__periph__rtc_1gacf9024748b942a7ae375cf75951afa9c)`(void)` 

Initialize RTC module.

#### `public int `[`rtc_set_time`](#group__drivers__periph__rtc_1gaa2d60ad372a3712b875a15e07c517843)`(struct tm * time)` 

Set RTC to given time.

#### Parameters
* `time` Pointer to the struct holding the time to set.

#### Returns
0 for success 

#### Returns
-1 an error occurred

#### `public int `[`rtc_get_time`](#group__drivers__periph__rtc_1gaba123afe49d9a86a78d021979a652e88)`(struct tm * time)` 

Get current RTC time.

#### Parameters
* `time` Pointer to the struct to write the time to.

#### Returns
0 for success 

#### Returns
-1 an error occurred

#### `public int `[`rtc_get_time_ms`](#group__drivers__periph__rtc_1gad9b3420e92fe06d9af51b89afa6eadc4)`(struct tm * time,uint16_t * ms)` 

Get current RTC time with sub-second component.

Requires the `periph_rtc_ms` feature.

#### Parameters
* `time` Pointer to the struct to write the time to. 

* `ms` Pointer to a variable to hold the microsecond component of the current RTC time.

#### Returns
0 for success 

#### Returns
-1 an error occurred

#### `public int `[`rtc_set_alarm`](#group__drivers__periph__rtc_1ga28e3abca989cf1fcb76bdf6ffbb5ce62)`(struct tm * time,`[`rtc_alarm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1ga236005f42cd58827ca616cc5e808dc12)` cb,void * arg)` 

Set an alarm for RTC to the specified value.

Any already set alarm will be overwritten.

#### Parameters
* `time` The value to trigger an alarm when hit. 

* `cb` Callback executed when alarm is hit. 

* `arg` Argument passed to callback when alarm is hit.

The driver must be prepared to work with denormalized time values (e.g. seconds > 60). The driver may normalize the value, or just keep it denormalized. In either case, the timeout should occur at the equivalent normalized time.

#### Parameters
* `0` success 

#### Returns
-EINVAL `time` was invalid (e.g. in the past, out of range) 

#### Returns
<0 other error (negative errno code to indicate cause)

#### `public int `[`rtc_get_alarm`](#group__drivers__periph__rtc_1ga5913b153d940f810fb176ff5ac62fc39)`(struct tm * time)` 

Gets the current alarm setting.

#### Parameters
* `time` Pointer to structure to receive alarm time

#### Returns
0 for success 

#### Returns
-1 an error occurred

#### `public void `[`rtc_clear_alarm`](#group__drivers__periph__rtc_1gaaa9abfe68e09bce58c86a55f2427dcd1)`(void)` 

Clear any set alarm, do nothing if nothing set.

#### `public void `[`rtc_poweron`](#group__drivers__periph__rtc_1gad3669c9b1d0a3033898465d993198f11)`(void)` 

Turns the RTC hardware module on.

#### `public void `[`rtc_poweroff`](#group__drivers__periph__rtc_1ga7defd322ead9dfeb19f180f5bfb505b3)`(void)` 

Turns the RTC hardware module off.

