---
title: api-drivers_mq3.md
description: api-drivers_mq3.md
---
# group `drivers_mq3` 

Device driver for the MQ-3 alcohol sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MQ3_MAX_RAW_VALUE`](#group__drivers__mq3_1gab6550fe6e1d2ab1abd20c516975fab86)            | maximum unprocessed value fetched form the sensor
`public int `[`mq3_init`](#group__drivers__mq3_1ga565ec4c73cd412afb391b409e6d4e902)`(`[`mq3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mq3.md#structmq3__t)` * dev,`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` adc_line)`            | Initialize a MQ-3 alcohol sensor.
`public int16_t `[`mq3_read_raw`](#group__drivers__mq3_1ga4b2b227195fb3f5da9b444719483405b)`(const `[`mq3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mq3.md#structmq3__t)` * dev)`            | Read the RAW sensor value, can be between 0 and MQ3_MAX_RAW_VALUE.
`public int16_t `[`mq3_read`](#group__drivers__mq3_1ga3c36c25c9d5f3cfc6286aa6248b69851)`(const `[`mq3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mq3.md#structmq3__t)` * dev)`            | Read the scaled sensor value of PPM of alcohol.
`struct `[`mq3_t`](#structmq3__t) | device descriptor for a MQ-3 sensor

## Members

#### `define `[`MQ3_MAX_RAW_VALUE`](#group__drivers__mq3_1gab6550fe6e1d2ab1abd20c516975fab86) 

maximum unprocessed value fetched form the sensor

#### `public int `[`mq3_init`](#group__drivers__mq3_1ga565ec4c73cd412afb391b409e6d4e902)`(`[`mq3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mq3.md#structmq3__t)` * dev,`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` adc_line)` 

Initialize a MQ-3 alcohol sensor.

The MQ-3 sensor is interfaced by a single ADC pin, specified by `adc` and `channel`.

The sensor needs about a minute to heat up before meaningful measurements can be made.

#### Parameters
* `dev` device descriptor of an MQ-3 sensor 

* `adc_line` the ADC device the sensor is connected to

#### Parameters
* `0` success 

* `-1` failure

#### `public int16_t `[`mq3_read_raw`](#group__drivers__mq3_1ga4b2b227195fb3f5da9b444719483405b)`(const `[`mq3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mq3.md#structmq3__t)` * dev)` 

Read the RAW sensor value, can be between 0 and MQ3_MAX_RAW_VALUE.

#### Parameters
* `dev` device descriptor of the MQ-3 sensor to read from

#### Returns
the raw sensor value, between 0 and MQ3_MAX_RAW_VALUE

#### `public int16_t `[`mq3_read`](#group__drivers__mq3_1ga3c36c25c9d5f3cfc6286aa6248b69851)`(const `[`mq3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mq3.md#structmq3__t)` * dev)` 

Read the scaled sensor value of PPM of alcohol.

#### Parameters
* `dev` device descriptor of the MQ-3 sensor to read from

#### Returns
the scaled sensor value in PPM of alcohol

# struct `mq3_t` 

device descriptor for a MQ-3 sensor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` `[`adc_line`](#structmq3__t_1a15c0e9b94cafa68bd52e428e6d6f6f74) | the used ADC line

## Members

#### `public `[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` `[`adc_line`](#structmq3__t_1a15c0e9b94cafa68bd52e428e6d6f6f74) 

the used ADC line

