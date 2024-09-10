---
title: api-sys_analog_util.md
description: api-sys_analog_util.md
---
# group `sys_analog_util` 

Utility functions for converting analog data samples.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`adc_util_map`](#group__sys__analog__util_1gae93da54e4f622b28b9e0192780468ad6)`(int sample,`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res,int32_t min,int32_t max)`            | Map a sampled ADC value to a given range.
`public float `[`adc_util_mapf`](#group__sys__analog__util_1ga91f815c1f563fd57ba13b4f73cd55b14)`(int sample,`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res,float min,float max)`            | Map a sampled ADC value to a given range (using floating point arithmetic)
`public uint16_t `[`dac_util_map`](#group__sys__analog__util_1gad7f0c8921d362b14466bc39c33a9ad8f)`(int value,int min,int max)`            | Map a value out of the given range to a 16-bit unsigned int.
`public uint16_t `[`dac_util_mapf`](#group__sys__analog__util_1ga194064ed114d6d7eba738dd250c3413d)`(float value,float min,float max)`            | Helper function to map a given float value range to a valid DAC value.

## Members

#### `public int32_t `[`adc_util_map`](#group__sys__analog__util_1gae93da54e4f622b28b9e0192780468ad6)`(int sample,`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res,int32_t min,int32_t max)` 

Map a sampled ADC value to a given range.

This function is useful for converting sampled ADC values into their physical representation.

#### Parameters
* `sample` sampled ADC value 

* `res` ADC resolution 

* `min` the lower bound of the target interval 

* `max` the upper bound of the target interval

#### Returns
the mapped value

#### `public float `[`adc_util_mapf`](#group__sys__analog__util_1ga91f815c1f563fd57ba13b4f73cd55b14)`(int sample,`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res,float min,float max)` 

Map a sampled ADC value to a given range (using floating point arithmetic)

**See also**: [adc_util_map](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__analog__util_1gae93da54e4f622b28b9e0192780468ad6)

#### Parameters
* `sample` sampled ADC value 

* `res` ADC resolution 

* `min` the lower bound of the target interval 

* `max` the upper bound of the target interval

#### Returns
the mapped value

#### `public uint16_t `[`dac_util_map`](#group__sys__analog__util_1gad7f0c8921d362b14466bc39c33a9ad8f)`(int value,int min,int max)` 

Map a value out of the given range to a 16-bit unsigned int.

The min value is assumed to be smaller than max value and value is assumed to be between min and max.

#### Parameters
* `value` value to map to a DAC set value 

* `min` the lower bound of the source interval 

* `max` the upper bound of the source interval

#### Returns
the mapped value

#### `public uint16_t `[`dac_util_mapf`](#group__sys__analog__util_1ga194064ed114d6d7eba738dd250c3413d)`(float value,float min,float max)` 

Helper function to map a given float value range to a valid DAC value.

**See also**: [dac_util_map](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__analog__util_1gad7f0c8921d362b14466bc39c33a9ad8f)

#### Parameters
* `value` value to map to a DAC set value 

* `min` the lower bound of the source interval 

* `max` the upper bound of the source interval

#### Returns
the mapped value

