---
title: api-sys_entropy_source_adc.md
description: api-sys_entropy_source_adc.md
---
# group `sys_entropy_source_adc` 

Entropy Source based on LSB of ADC samples.

This module provides entropy from ADC samples. Thereby, only the LSB is considered for generation of output values. The available resolution as well as internal sampling rates, specific driver settings and device inaccuracies may lead to different behavior between different platforms. The configured ADC pin might be unconnected and floating, it can be exposed as an I/O pin or internally connected to a thermal noise source, an avalanche diode circuit or the receive path of an antenna. The possibilities are manifold, thus, configuration and deployment properties of this module need to be thoroughly validated.

It is worth noting that ADC pins are typically vulnerable when physically accessible. Developers should consider additional tamper detection concepts and enclosures.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`entropy_source_adc_init`](#group__sys__entropy__source__adc_1gad8b2d20aa5337f94730afd9e5c7f59c2)`(void)`            | Initialize ADC and test structures, if tests are enabled.
`public int `[`entropy_source_adc_get`](#group__sys__entropy__source__adc_1gaf1b0edbe12ea0f689db1cea95bb90e2c)`(uint8_t * buf,size_t len)`            | Generates bytes from ADC noise.
`public inline static uint32_t `[`entropy_source_adc_entropy_per_sample`](#group__sys__entropy__source__adc_1gaa63077f79b2528a44af61cf63c73173a)`(void)`            | Static entropy per sample value for this source [bit/sample * 2^16].

## Members

#### `public int `[`entropy_source_adc_init`](#group__sys__entropy__source__adc_1gad8b2d20aa5337f94730afd9e5c7f59c2)`(void)` 

Initialize ADC and test structures, if tests are enabled.

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
ENTROPY_SOURCE_ERR_INIT on ADC initialization failure

#### `public int `[`entropy_source_adc_get`](#group__sys__entropy__source__adc_1gaf1b0edbe12ea0f689db1cea95bb90e2c)`(uint8_t * buf,size_t len)` 

Generates bytes from ADC noise.

#### Parameters
* `buf` pointer to write noisy bytes to 

* `len` number of bytes to generate

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
negative [entropy_source_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga403490f8fc59992806050b17172988f8) code on error

#### `public inline static uint32_t `[`entropy_source_adc_entropy_per_sample`](#group__sys__entropy__source__adc_1gaa63077f79b2528a44af61cf63c73173a)`(void)` 

Static entropy per sample value for this source [bit/sample * 2^16].

#### Returns
entropy per sample

