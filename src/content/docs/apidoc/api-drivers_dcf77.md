---
title: api-drivers_dcf77.md
description: api-drivers_dcf77.md
---
# group `drivers_dcf77` 

Device driver long wave receiver with 77,5 kHz.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@169`](#group__drivers__dcf77_1ga5efefa44b296976f2147b8acbed1752c)            | Possible return codes.
`public int `[`dcf77_init`](#group__drivers__dcf77_1gac18eb7b9d1de520c1398c972b6f5f200)`(`[`dcf77_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gadff06d21bbebd9d138920f1656b772d0)` * dev,const `[`dcf77_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dcf77.md#structdcf77__params__t)` * params)`            | Initialize a new DCF77 device.
`public int `[`dcf77_get_time`](#group__drivers__dcf77_1gaf0ca305effc77484b2186947a06590b4)`(`[`dcf77_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gadff06d21bbebd9d138920f1656b772d0)` * dev,struct tm * time)`            | get a new timestamp from the device.
`public void `[`dcf77_set_tick_cb`](#group__drivers__dcf77_1ga8e73a87c9d00c24401970b23d9b5df8d)`(`[`dcf77_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gadff06d21bbebd9d138920f1656b772d0)` * dev,`[`dcf77_tick_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gad272e487d6466ec1d74e93fb763c3e62)` cb,void * arg)`            | Set a tick callback for DCF77.
`struct `[`dcf77_params_t`](#structdcf77__params__t) | Configuration parameters for DCF77 devices.
`struct `[`dcf77`](#structdcf77) | Device descriptor for DCF77 sensor devices.

## Members

#### `enum `[`@169`](#group__drivers__dcf77_1ga5efefa44b296976f2147b8acbed1752c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DCF77_OK            | all good
DCF77_NOCSUM            | checksum error
DCF77_TIMEOUT            | communication timed out
DCF77_INIT_ERROR            | Initialization error.

Possible return codes.

#### `public int `[`dcf77_init`](#group__drivers__dcf77_1gac18eb7b9d1de520c1398c972b6f5f200)`(`[`dcf77_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gadff06d21bbebd9d138920f1656b772d0)` * dev,const `[`dcf77_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dcf77.md#structdcf77__params__t)` * params)` 

Initialize a new DCF77 device.

#### Parameters
* `dev` device descriptor of a DCF device 

* `params` configuration parameters

#### Parameters
* `<tt>DCF77_OK</tt>` Success 

* `<tt>DCF77_INIT_ERROR</tt>` Error in initialization

#### `public int `[`dcf77_get_time`](#group__drivers__dcf77_1gaf0ca305effc77484b2186947a06590b4)`(`[`dcf77_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gadff06d21bbebd9d138920f1656b772d0)` * dev,struct tm * time)` 

get a new timestamp from the device.

if reading fails or checksum is invalid, last_vaules will be unwritten

#### Parameters
* `dev` device descriptor of a DCF device 

* `time` datastruct for timeinformation

#### Parameters
* `<tt>DCF77_OK</tt>` Success 

* `<tt>DCF77_NOCSUM</tt>` Checksum error

#### `public void `[`dcf77_set_tick_cb`](#group__drivers__dcf77_1ga8e73a87c9d00c24401970b23d9b5df8d)`(`[`dcf77_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gadff06d21bbebd9d138920f1656b772d0)` * dev,`[`dcf77_tick_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gad272e487d6466ec1d74e93fb763c3e62)` cb,void * arg)` 

Set a tick callback for DCF77.

The registered callback function will be called for every new minute.

#### Parameters
* `dev` device descriptor of a DCF device 

* `cb` Callback executed when a new minute starts. 

* `arg` Argument passed to callback.

# struct `dcf77_params_t` 

Configuration parameters for DCF77 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structdcf77__params__t_1a546273f7519bcab3046aee79d4f81e2a) | GPIO pin of the device's data pin.
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`in_mode`](#structdcf77__params__t_1a5b0a171ca6105161e0983ea2ea425570) | input pin configuration from the device, without pull resistor

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structdcf77__params__t_1a546273f7519bcab3046aee79d4f81e2a) 

GPIO pin of the device's data pin.

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`in_mode`](#structdcf77__params__t_1a5b0a171ca6105161e0983ea2ea425570) 

input pin configuration from the device, without pull resistor

# struct `dcf77` 

Device descriptor for DCF77 sensor devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`dcf77_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dcf77.md#structdcf77__params__t)` `[`params`](#structdcf77_1a7c513d22b8d96234c6e393b8a7d5f058) | Device parameters.
`public `[`dcf77_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#uniondcf77__bits__t)` `[`bitseq`](#structdcf77_1a7ccf4ccb3bd498fb796b66d399e8a732) | contains all Bits from a current cycle
`public `[`dcf77_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#uniondcf77__bits__t)` `[`last_bitseq`](#structdcf77_1a23cf26daec9803d7673de858a7b450f9) | contains all Bits from a last cycle
`public uint32_t `[`startTime`](#structdcf77_1aaf8292b73064ca4e79efffe70399e988) | Timestamp to measure the term of the level.
`public uint8_t `[`internal_state`](#structdcf77_1acaa5d6d3ef1a9c65fbb47b53e0e2eeec) | internal States
`public uint8_t `[`bitCounter`](#structdcf77_1a8e1a74834c70f95f97b99933658f4157) | Counter of the Bits in a Bitsequenz.
`public `[`dcf77_tick_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gad272e487d6466ec1d74e93fb763c3e62)` `[`tick_cb`](#structdcf77_1a6f289487fe01183b59f627df7c9df874) | Callback to be called if a new minute starts.
`public void * `[`tick_cb_args`](#structdcf77_1a39980d7519293be4364ed0b84b62ffaa) | Arguments for the tick callback.

## Members

#### `public `[`dcf77_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dcf77.md#structdcf77__params__t)` `[`params`](#structdcf77_1a7c513d22b8d96234c6e393b8a7d5f058) 

Device parameters.

#### `public `[`dcf77_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#uniondcf77__bits__t)` `[`bitseq`](#structdcf77_1a7ccf4ccb3bd498fb796b66d399e8a732) 

contains all Bits from a current cycle

#### `public `[`dcf77_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#uniondcf77__bits__t)` `[`last_bitseq`](#structdcf77_1a23cf26daec9803d7673de858a7b450f9) 

contains all Bits from a last cycle

#### `public uint32_t `[`startTime`](#structdcf77_1aaf8292b73064ca4e79efffe70399e988) 

Timestamp to measure the term of the level.

#### `public uint8_t `[`internal_state`](#structdcf77_1acaa5d6d3ef1a9c65fbb47b53e0e2eeec) 

internal States

#### `public uint8_t `[`bitCounter`](#structdcf77_1a8e1a74834c70f95f97b99933658f4157) 

Counter of the Bits in a Bitsequenz.

#### `public `[`dcf77_tick_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dcf77_1gad272e487d6466ec1d74e93fb763c3e62)` `[`tick_cb`](#structdcf77_1a6f289487fe01183b59f627df7c9df874) 

Callback to be called if a new minute starts.

#### `public void * `[`tick_cb_args`](#structdcf77_1a39980d7519293be4364ed0b84b62ffaa) 

Arguments for the tick callback.

