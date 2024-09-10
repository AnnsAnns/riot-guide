---
title: api-drivers_periph_rtt.md
description: api-drivers_periph_rtt.md
---
# group `drivers_periph_rtt` 

Low-level RTT (Real Time [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)) peripheral driver.

(Low-) Power ImplicationsAfter the RTT has been initialized (i.e. after calling [rtt_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga3e16bf1873240a35b0cb2791ae90aeaf)), the RTT should be powered on and running. The RTT can then be powered off manually at a later point in time by calling the [rtt_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga751b330bc1bf39518cb13b8950fd9cca) function. When the RTT is powered back on using the [rtt_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga3a36637034462b2ce440f407f1090957) function, it **should** transparently continue its previously configured operation.

On many CPUs, certain power states might need to be blocked in [rtt_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga3e16bf1873240a35b0cb2791ae90aeaf), so that it is ensured that the RTT will function properly while it is enabled.

This module will be automatically be used as a backend for ZTIMER_SEC and ZTIMER_MSEC. If direct access to RTT is needed then include `ztimer_no_periph_rtt` to avoid auto-selection, i.e.: `USEMODULE += ztimer_no_periph_rtt`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`RTT_FREQUENCY`](#group__drivers__periph__rtt_1gafec7c948b8c70db3c9394fc3dc145a99)            | The desired frequency for the RTT.
`define `[`RTT_MAX_VALUE`](#group__drivers__periph__rtt_1ga57f384110fe2e8f4b3c4b9ba246517c6)            | The maximum value for the RTT counter, must be (2^n - 1)
`define `[`RTT_MIN_OFFSET`](#group__drivers__periph__rtt_1gad34d7bc806339ce586e8a942913cdb6f)            | The minimum offset to correctly set an rtt callback.
`define `[`RTT_US_TO_TICKS`](#group__drivers__periph__rtt_1gab4f026969e13c4111fdbbf56ad5e1fde)            | Convert microseconds to rtt ticks.
`define `[`RTT_MS_TO_TICKS`](#group__drivers__periph__rtt_1gabe99532e65885ef807b6a241cb4217d8)            | Convert milliseconds to rtt ticks.
`define `[`RTT_SEC_TO_TICKS`](#group__drivers__periph__rtt_1gaabe307cf7fc39553e3d0aa5c9bc348bf)            | Convert seconds to rtt ticks.
`define `[`RTT_MIN_TO_TICKS`](#group__drivers__periph__rtt_1ga04693a09e25f42a9269d112b3721e003)            | Convert minutes to rtt ticks.
`define `[`RTT_TICKS_TO_US`](#group__drivers__periph__rtt_1gae653b0039b81d7c774c370f1e35e7232)            | Convert rtt ticks to microseconds.
`define `[`RTT_TICKS_TO_MS`](#group__drivers__periph__rtt_1gaeb0e2dd6cd004e110a26267779e79c18)            | Convert rtt ticks to milliseconds.
`define `[`RTT_TICKS_TO_SEC`](#group__drivers__periph__rtt_1gac6777c08b04548b02659dc65986c15f2)            | Convert rtt ticks to seconds.
`define `[`RTT_TICKS_TO_MIN`](#group__drivers__periph__rtt_1gadf40fd557943deb0d5a977ed3d77edef)            | Convert rtt ticks to minutes.
`public void `[`rtt_init`](#group__drivers__periph__rtt_1ga3e16bf1873240a35b0cb2791ae90aeaf)`(void)`            | Initialize RTT module.
`public void `[`rtt_set_overflow_cb`](#group__drivers__periph__rtt_1ga62e773896457a4c2551d968e0aec8e64)`(`[`rtt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga6dbaceff1e27e05d49a9c32c57834771)` cb,void * arg)`            | Set a callback for the counter overflow event.
`public void `[`rtt_clear_overflow_cb`](#group__drivers__periph__rtt_1gaf67b2f3b3cca594f6243948d13315f14)`(void)`            | Clear the overflow callback.
`public uint32_t `[`rtt_get_counter`](#group__drivers__periph__rtt_1ga4fa1ca89e1fbff111acdd8de7b919742)`(void)`            | Get the current RTT counter.
`public void `[`rtt_set_counter`](#group__drivers__periph__rtt_1gaf426556b117f882b4990b2351c5026df)`(uint32_t counter)`            | Set the RTT counter to a specified value.
`public void `[`rtt_set_alarm`](#group__drivers__periph__rtt_1ga8176d2b794267719f7ed3d27f07050d6)`(uint32_t alarm,`[`rtt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga6dbaceff1e27e05d49a9c32c57834771)` cb,void * arg)`            | Set an alarm for RTT to the specified absolute target time.
`public uint32_t `[`rtt_get_alarm`](#group__drivers__periph__rtt_1ga071559a05056c2d0f4f94e8e1872cdb2)`(void)`            | Get the value of a set alarm.
`public void `[`rtt_clear_alarm`](#group__drivers__periph__rtt_1gac819760a14e55325c2ee901bf92b6d83)`(void)`            | Clear any set alarm, do nothing if nothing set.
`public void `[`rtt_poweron`](#group__drivers__periph__rtt_1ga3a36637034462b2ce440f407f1090957)`(void)`            | Turn the RTT hardware module on.
`public void `[`rtt_poweroff`](#group__drivers__periph__rtt_1ga751b330bc1bf39518cb13b8950fd9cca)`(void)`            | Turn the RTT hardware module off.

## Members

#### `define `[`RTT_FREQUENCY`](#group__drivers__periph__rtt_1gafec7c948b8c70db3c9394fc3dc145a99) 

The desired frequency for the RTT.

#### `define `[`RTT_MAX_VALUE`](#group__drivers__periph__rtt_1ga57f384110fe2e8f4b3c4b9ba246517c6) 

The maximum value for the RTT counter, must be (2^n - 1)

#### `define `[`RTT_MIN_OFFSET`](#group__drivers__periph__rtt_1gad34d7bc806339ce586e8a942913cdb6f) 

The minimum offset to correctly set an rtt callback.

If the callback is taking into account [rtt_get_counter()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga4fa1ca89e1fbff111acdd8de7b919742) then the rtt might advance right between the call to [rtt_get_counter()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga4fa1ca89e1fbff111acdd8de7b919742) and [rtt_set_alarm()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga8176d2b794267719f7ed3d27f07050d6). If that happens with val==1, the alarm would be set to the current time, which would then underflow. To avoid this, the alarm should be set at least two ticks in the future.

This value can vary depending on the platform.

#### `define `[`RTT_US_TO_TICKS`](#group__drivers__periph__rtt_1gab4f026969e13c4111fdbbf56ad5e1fde) 

Convert microseconds to rtt ticks.

#### Parameters
* `us` number of microseconds 

#### Returns
rtt ticks

#### `define `[`RTT_MS_TO_TICKS`](#group__drivers__periph__rtt_1gabe99532e65885ef807b6a241cb4217d8) 

Convert milliseconds to rtt ticks.

#### Parameters
* `ms` number of milliseconds 

#### Returns
rtt ticks

#### `define `[`RTT_SEC_TO_TICKS`](#group__drivers__periph__rtt_1gaabe307cf7fc39553e3d0aa5c9bc348bf) 

Convert seconds to rtt ticks.

#### Parameters
* `sec` number of seconds 

#### Returns
rtt ticks

#### `define `[`RTT_MIN_TO_TICKS`](#group__drivers__periph__rtt_1ga04693a09e25f42a9269d112b3721e003) 

Convert minutes to rtt ticks.

#### Parameters
* `min` number of minutes 

#### Returns
rtt ticks

#### `define `[`RTT_TICKS_TO_US`](#group__drivers__periph__rtt_1gae653b0039b81d7c774c370f1e35e7232) 

Convert rtt ticks to microseconds.

#### Parameters
* `ticks` rtt ticks 

#### Returns
number of microseconds

#### `define `[`RTT_TICKS_TO_MS`](#group__drivers__periph__rtt_1gaeb0e2dd6cd004e110a26267779e79c18) 

Convert rtt ticks to milliseconds.

#### Parameters
* `ticks` rtt ticks 

#### Returns
number of milliseconds

#### `define `[`RTT_TICKS_TO_SEC`](#group__drivers__periph__rtt_1gac6777c08b04548b02659dc65986c15f2) 

Convert rtt ticks to seconds.

#### Parameters
* `ticks` rtt ticks 

#### Returns
number of seconds

#### `define `[`RTT_TICKS_TO_MIN`](#group__drivers__periph__rtt_1gadf40fd557943deb0d5a977ed3d77edef) 

Convert rtt ticks to minutes.

#### Parameters
* `ticks` rtt ticks 

#### Returns
number of minutes

#### `public void `[`rtt_init`](#group__drivers__periph__rtt_1ga3e16bf1873240a35b0cb2791ae90aeaf)`(void)` 

Initialize RTT module.

#### `public void `[`rtt_set_overflow_cb`](#group__drivers__periph__rtt_1ga62e773896457a4c2551d968e0aec8e64)`(`[`rtt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga6dbaceff1e27e05d49a9c32c57834771)` cb,void * arg)` 

Set a callback for the counter overflow event.

#### Parameters
* `cb` Callback to execute on overflow 

* `arg` Argument passed to the callback

#### `public void `[`rtt_clear_overflow_cb`](#group__drivers__periph__rtt_1gaf67b2f3b3cca594f6243948d13315f14)`(void)` 

Clear the overflow callback.

#### `public uint32_t `[`rtt_get_counter`](#group__drivers__periph__rtt_1ga4fa1ca89e1fbff111acdd8de7b919742)`(void)` 

Get the current RTT counter.

#### Returns
Current value of the RTT counter

#### `public void `[`rtt_set_counter`](#group__drivers__periph__rtt_1gaf426556b117f882b4990b2351c5026df)`(uint32_t counter)` 

Set the RTT counter to a specified value.

#### Parameters
* `counter` The value to set the RTT to.

This function is only provided when the feature `periph_rtt_set_counter` is provided

#### `public void `[`rtt_set_alarm`](#group__drivers__periph__rtt_1ga8176d2b794267719f7ed3d27f07050d6)`(uint32_t alarm,`[`rtt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1ga6dbaceff1e27e05d49a9c32c57834771)` cb,void * arg)` 

Set an alarm for RTT to the specified absolute target time.

#### Parameters
* `alarm` The value to trigger an alarm when hit 

* `cb` Callback executed when alarm is hit 

* `arg` Argument passed to callback when alarm is hit

#### `public uint32_t `[`rtt_get_alarm`](#group__drivers__periph__rtt_1ga071559a05056c2d0f4f94e8e1872cdb2)`(void)` 

Get the value of a set alarm.

If no alarm is set, the return value is arbitrary.

#### Returns
Value the alarm is set to

#### `public void `[`rtt_clear_alarm`](#group__drivers__periph__rtt_1gac819760a14e55325c2ee901bf92b6d83)`(void)` 

Clear any set alarm, do nothing if nothing set.

#### `public void `[`rtt_poweron`](#group__drivers__periph__rtt_1ga3a36637034462b2ce440f407f1090957)`(void)` 

Turn the RTT hardware module on.

#### `public void `[`rtt_poweroff`](#group__drivers__periph__rtt_1ga751b330bc1bf39518cb13b8950fd9cca)`(void)` 

Turn the RTT hardware module off.

