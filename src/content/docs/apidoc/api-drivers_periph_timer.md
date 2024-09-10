---
title: api-drivers_periph_timer.md
description: api-drivers_periph_timer.md
---
# group `drivers_periph_timer` 

Low-level timer peripheral driver.

(Low-) Power ImplicationsAfter calling [timer_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga63a0c3bdcc4c2f1a93e725614b116da7), the underlying hardware timer **should** be powered on and running. When a timer is explicitly stopped by calling [timer_stop()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga995bb5527183eacd8bb4b835be143613), the timer **should** be stopped and powered down (e.g. by peripheral clock gating). Once the timer is started again (by calling [timer_start()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gafe70538411bdcd344b2f663b1c6073b0)), it should transparently continue its previously configured operation.

While the timer is active, the implementation might need to block certain power modes on specific CPU implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`TIMER_DEV`](#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e)            | Default timer definition macro.
`define `[`TIMER_UNDEF`](#group__drivers__periph__timer_1gaa0c84c20a11f7659548d09b0c786dd23)            | Default value for timer not defined.
`define `[`TIM_FLAG_RESET_ON_SET`](#group__drivers__periph__timer_1ga72fc3393d44eae2e22fd2c17579e7141)            | Reset the timer when the set() function is called.
`define `[`TIM_FLAG_RESET_ON_MATCH`](#group__drivers__periph__timer_1gaef1d63a43a0267ef0fb0f1a87b233f24)            | Reset the timer on match.
`define `[`TIM_FLAG_SET_STOPPED`](#group__drivers__periph__timer_1gab2f7b175f4ecd14b65df688016677a8c)            | Keep the timer stopped after setting alarm.
`public int `[`timer_init`](#group__drivers__periph__timer_1ga63a0c3bdcc4c2f1a93e725614b116da7)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,uint32_t freq,`[`timer_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga2afe9f4ce8c01fc4253a17ffebc552cc)` cb,void * arg)`            | Initialize the given timer.
`public int `[`timer_set`](#group__drivers__periph__timer_1gaccff2ca33cca64411015f808369cb919)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel,unsigned int timeout)`            | Set a given timer channel for the given timer device.
`public int `[`timer_set_absolute`](#group__drivers__periph__timer_1ga2b440fa3b789669204f659de9238d752)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel,unsigned int value)`            | Set an absolute timeout value for the given channel of the given timer.
`public int `[`timer_set_periodic`](#group__drivers__periph__timer_1ga7eb1614ab09450a5b3e0d9f5a7d409d2)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel,unsigned int value,uint8_t flags)`            | Set an absolute timeout value for the given channel of the given timer.
`public int `[`timer_clear`](#group__drivers__periph__timer_1ga3ef6a48915b57707513ff17c0463a277)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel)`            | Clear the given channel of the given timer device.
`public unsigned int `[`timer_read`](#group__drivers__periph__timer_1ga02217bf29c1e76c795a0b197408b91b7)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)`            | Read the current value of the given timer device.
`public void `[`timer_start`](#group__drivers__periph__timer_1gafe70538411bdcd344b2f663b1c6073b0)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)`            | Start the given timer.
`public void `[`timer_stop`](#group__drivers__periph__timer_1ga995bb5527183eacd8bb4b835be143613)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)`            | Stop the given timer.
`public `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`timer_query_freqs_numof`](#group__drivers__periph__timer_1ga021f0bfaf910279c6f4a3fdbc3128003)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)`            | Get the number of different frequencies supported by the given timer.
`public `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`timer_query_channel_numof`](#group__drivers__periph__timer_1gab83052b1d38817c5f687767c09b94434)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)`            | Get the number of timer channels for the given timer.
`public uint32_t `[`timer_query_freqs`](#group__drivers__periph__timer_1ga66e1edfd6d61cede4b005ff45f03caa3)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` index)`            | Iterate over supported frequencies.
`public bool `[`timer_poll_channel`](#group__drivers__periph__timer_1ga07898c80f7f0e38362b8d5dcd99c9641)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel)`            | Check whether a compare channel has matched.
`struct `[`timer_isr_ctx_t`](#structtimer__isr__ctx__t) | Default interrupt context entry holding callback and argument.

## Members

#### `define `[`TIMER_DEV`](#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e) 

Default timer definition macro.

Overwrite this in your CPUs periph_cpu.h file if needed

#### `define `[`TIMER_UNDEF`](#group__drivers__periph__timer_1gaa0c84c20a11f7659548d09b0c786dd23) 

Default value for timer not defined.

#### `define `[`TIM_FLAG_RESET_ON_SET`](#group__drivers__periph__timer_1ga72fc3393d44eae2e22fd2c17579e7141) 

Reset the timer when the set() function is called.

When set, calling the [timer_set_periodic()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga7eb1614ab09450a5b3e0d9f5a7d409d2) function resets the timer count value.

#### `define `[`TIM_FLAG_RESET_ON_MATCH`](#group__drivers__periph__timer_1gaef1d63a43a0267ef0fb0f1a87b233f24) 

Reset the timer on match.

When set, a match on this channel will reset the timer count value. When set on multiple channels, only the channel with the lowest match value will be reached.

#### `define `[`TIM_FLAG_SET_STOPPED`](#group__drivers__periph__timer_1gab2f7b175f4ecd14b65df688016677a8c) 

Keep the timer stopped after setting alarm.

When set, the timer will remained stopped after a [timer_set_periodic()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga7eb1614ab09450a5b3e0d9f5a7d409d2) and can be started manually with [timer_start()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gafe70538411bdcd344b2f663b1c6073b0).

#### `public int `[`timer_init`](#group__drivers__periph__timer_1ga63a0c3bdcc4c2f1a93e725614b116da7)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,uint32_t freq,`[`timer_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga2afe9f4ce8c01fc4253a17ffebc552cc)` cb,void * arg)` 

Initialize the given timer.

Each timer device is running with the given speed. Each can contain one or more channels as defined in periph_conf.h. The timer is configured in up-counting mode and will count until TIMER_x_MAX_VALUE as defined in used board's periph_conf.h until overflowing.

The timer will be started automatically after initialization with interrupts enabled.

#### Parameters
* `dev` the timer to initialize 

* `freq` requested number of ticks per second 

* `cb` this callback is called in interrupt context, the emitting channel is passed as argument 

* `arg` argument to the callback

#### Returns
0 on success 

#### Returns
-1 if speed not applicable or unknown device given

#### `public int `[`timer_set`](#group__drivers__periph__timer_1gaccff2ca33cca64411015f808369cb919)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel,unsigned int timeout)` 

Set a given timer channel for the given timer device.

The callback given during initialization is called when timeout ticks have passed after calling this function

#### Parameters
* `dev` the timer device to set 

* `channel` the channel to set 

* `timeout` timeout in ticks after that the registered callback is executed

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`timer_set_absolute`](#group__drivers__periph__timer_1ga2b440fa3b789669204f659de9238d752)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel,unsigned int value)` 

Set an absolute timeout value for the given channel of the given timer.

Timers that are less wide than `unsigned int` accept and truncate overflown values.

#### Parameters
* `dev` the timer device to set 

* `channel` the channel to set 

* `value` the absolute compare value when the callback will be triggered

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`timer_set_periodic`](#group__drivers__periph__timer_1ga7eb1614ab09450a5b3e0d9f5a7d409d2)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel,unsigned int value,uint8_t flags)` 

Set an absolute timeout value for the given channel of the given timer.

The timeout will be called periodically for each iteration.

Only one channel with `TIM_FLAG_RESET_ON_MATCH` can be active. Some platforms (Atmel) only allow to use the first channel as TOP value.

Needs to be enabled with `FEATURES_REQUIRED += periph_timer_periodic`.

#### Parameters
* `dev` the timer device to set 

* `channel` the channel to set 

* `value` the absolute compare value when the callback will be triggered 

* `flags` options

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`timer_clear`](#group__drivers__periph__timer_1ga3ef6a48915b57707513ff17c0463a277)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel)` 

Clear the given channel of the given timer device.

#### Parameters
* `dev` the timer device to clear 

* `channel` the channel on the given device to clear

#### Returns
0 on success 

#### Returns
-1 on error

#### `public unsigned int `[`timer_read`](#group__drivers__periph__timer_1ga02217bf29c1e76c795a0b197408b91b7)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)` 

Read the current value of the given timer device.

#### Parameters
* `dev` the timer to read the current value from

#### Returns
the timers current value

#### `public void `[`timer_start`](#group__drivers__periph__timer_1gafe70538411bdcd344b2f663b1c6073b0)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)` 

Start the given timer.

This function is only needed if the timer was stopped manually before.

#### Parameters
* `dev` the timer device to start

#### `public void `[`timer_stop`](#group__drivers__periph__timer_1ga995bb5527183eacd8bb4b835be143613)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)` 

Stop the given timer.

This will effect all of the timer's channels.

When the timer is stopped, the underlying timer peripheral should be completely powered off.

#### Parameters
* `dev` the timer to stop

#### `public `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`timer_query_freqs_numof`](#group__drivers__periph__timer_1ga021f0bfaf910279c6f4a3fdbc3128003)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)` 

Get the number of different frequencies supported by the given timer.

If calling [timer_query_freqs_numof](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga021f0bfaf910279c6f4a3fdbc3128003) for the same timer with an index smaller this number, it hence MUST return a frequency (and not zero).

This function is marked with attribute pure to tell the compiler that this function has no side affects and will return the same value when called with the same parameter. (E.g. to not call this function in every loop iteration when iterating over all supported frequencies.)

#### `public `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`timer_query_channel_numof`](#group__drivers__periph__timer_1gab83052b1d38817c5f687767c09b94434)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev)` 

Get the number of timer channels for the given timer.

This function is marked with attribute pure to tell the compiler that this function has no side affects and will return the same value when called with the same timer as parameter.

There is a weak default implementation that returns the value of `TIMER_CHANNEL_NUMOF`. For some MCUs the number of supported channels depends on `dev` - those are expected to provide there own implementation of this function.

#### `public uint32_t `[`timer_query_freqs`](#group__drivers__periph__timer_1ga66e1edfd6d61cede4b005ff45f03caa3)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` index)` 

Iterate over supported frequencies.

#### Parameters
* `dev` [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) to get the next supported frequency of 

* `index` Index of the frequency to get 

#### Returns
The `index` highest frequency supported by the timer 

#### Parameters
* `0` `index` is too high

Add `FEATURES_REQUIRED += periph_timer_query_freqs` to your `Makefile`.

When called with a value of 0 for `index`, the highest supported frequency is returned. For a value 1 the second highest is returned, and so on. For values out of range, 0 is returned. A program hence can iterate over all supported frequencies using:

```cpp
uint32_t freq:
for ([uword_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d) i; (freq = [timer_query_freqs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga66e1edfd6d61cede4b005ff45f03caa3)(dev, i)); i++) {
    work_with_frequency(freq);
}
```

Or alternatively:

```cpp
for ([uword_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d) i; i < [timer_query_freqs_numof](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga021f0bfaf910279c6f4a3fdbc3128003)(dev); i++) {
    work_with_frequency([timer_query_freqs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga66e1edfd6d61cede4b005ff45f03caa3)(dev, i));
}
```

#### `public bool `[`timer_poll_channel`](#group__drivers__periph__timer_1ga07898c80f7f0e38362b8d5dcd99c9641)`(`[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` dev,int channel)` 

Check whether a compare channel has matched.

#### Returns
true once after the channel has matched.

It is currently not defined whether this keeps returning true after a channel has been polled until that channel is set, or whether later calls return false.

This is typically used in spin loops that wait for a timer's completion:

```cpp
while (!timer_poll_channel(tim, chan)) {};
```

This function is only available on platforms that implement the `periph_timer_poll` peripheral in addition to `periph_timer`.

# struct `timer_isr_ctx_t` 

Default interrupt context entry holding callback and argument.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`timer_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga2afe9f4ce8c01fc4253a17ffebc552cc)` `[`cb`](#structtimer__isr__ctx__t_1a97512a7e1cdd590d3534abe2e6d4d1bf) | callback executed from timer interrupt
`public void * `[`arg`](#structtimer__isr__ctx__t_1a60e83c0293c251fc5821c59f210cc1f4) | optional argument given to that callback

## Members

#### `public `[`timer_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga2afe9f4ce8c01fc4253a17ffebc552cc)` `[`cb`](#structtimer__isr__ctx__t_1a97512a7e1cdd590d3534abe2e6d4d1bf) 

callback executed from timer interrupt

#### `public void * `[`arg`](#structtimer__isr__ctx__t_1a60e83c0293c251fc5821c59f210cc1f4) 

optional argument given to that callback

