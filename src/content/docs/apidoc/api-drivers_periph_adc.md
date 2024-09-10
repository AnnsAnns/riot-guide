---
title: api-drivers_periph_adc.md
description: api-drivers_periph_adc.md
---
# group `drivers_periph_adc` 

Low-level ADC peripheral driver interface.

This is a very simple ADC interface to allow platform independent access to a MCU's ADC unit(s). This interface is intentionally designed as simple as possible, to allow for very easy implementation and maximal portability.

As of now, the interface does not allow for any advanced ADC concepts (e.g. continuous mode, scan sequences, injections). It is to be determined, if these features will ever be integrated in this interface, or if it does make more sense to create a second, advanced ADC interface for this.

The ADC driver interface is built around the concept of ADC lines. An ADC line in this context is a tuple consisting out of a hardware ADC device (an ADC functional unit on the MCU) and an ADC channel connected to pin.

If a MCU has more than one hardware ADC unit, the ADC lines can be mapped in a way, that it is possible to sample multiple lines in parallel, given that the ADC implementation allows for interruption of the program flow while waiting for the result of a conversion (e.g. through putting the calling thread to sleep while waiting for the conversion results).

(Low-) Power ImplicationsThe ADC peripheral(s) **should** only be powered on while [adc_sample()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4) is active. For implementing [adc_sample()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4) this means, that the peripheral should be powered on (i.e. through peripheral clock gating) at the beginning of the function and it should be powered back off at the end of the function.

If the [adc_sample()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4) function is implemented in a way, that it will put the active thread to sleep for a certain amount of time, the implementation might need to block certain power states.

> Todo: Extend interface for continuous mode?

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ADC_UNDEF`](#group__drivers__periph__adc_1ga569737617c998468eb63b5af8191c33e)            | Default ADC undefined value.
`define `[`ADC_LINE`](#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)            | Default ADC line access macro.
`enum `[`adc_res_t`](#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)            | Possible ADC resolution settings.
`public int `[`adc_init`](#group__drivers__periph__adc_1ga259a7b0176a8a6f5a5e61aabce3574f0)`(`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` line)`            | Initialize the given ADC line.
`public int32_t `[`adc_sample`](#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4)`(`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` line,`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res)`            | Sample a value from the given ADC line.
`public void `[`adc_continuous_begin`](#group__drivers__periph__adc_1gad197950bd51d642a013ce33e0d85720e)`(`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res)`            | Configure the ADC with a given resolution for continuous sampling.
`public int32_t `[`adc_continuous_sample`](#group__drivers__periph__adc_1ga59426dab0d095c69c6013330a666f078)`(`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` line)`            | Sample an ADC line without powering off the ADC afterward.
`public void `[`adc_continuous_stop`](#group__drivers__periph__adc_1ga5d07dd015dea76371902e97095482c9a)`(void)`            | Disable the ADC to save power.

## Members

#### `define `[`ADC_UNDEF`](#group__drivers__periph__adc_1ga569737617c998468eb63b5af8191c33e) 

Default ADC undefined value.

#### `define `[`ADC_LINE`](#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888) 

Default ADC line access macro.

#### `enum `[`adc_res_t`](#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADC_RES_6BIT            | ADC resolution: 6 bit.
ADC_RES_8BIT            | ADC resolution: 8 bit.
ADC_RES_10BIT            | ADC resolution: 10 bit.
ADC_RES_12BIT            | ADC resolution: 12 bit.
ADC_RES_14BIT            | ADC resolution: 14 bit.
ADC_RES_16BIT            | ADC resolution: 16 bit.

Possible ADC resolution settings.

#### `public int `[`adc_init`](#group__drivers__periph__adc_1ga259a7b0176a8a6f5a5e61aabce3574f0)`(`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` line)` 

Initialize the given ADC line.

The ADC line is initialized in synchronous, blocking mode.

#### Parameters
* `line` line to initialize

#### Returns
0 on success 

#### Returns
-1 on invalid ADC line

#### `public int32_t `[`adc_sample`](#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4)`(`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` line,`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res)` 

Sample a value from the given ADC line.

This function blocks until the conversion has finished. Please note, that if more than one line share the same ADC device, and if these lines are sampled at the same time (e.g. from different threads), the one called secondly waits for the first to finish before its conversion starts.

#### Parameters
* `line` line to sample 

* `res` resolution to use for conversion

#### Returns
the sampled value on success 

#### Returns
-1 if resolution is not applicable

#### `public void `[`adc_continuous_begin`](#group__drivers__periph__adc_1gad197950bd51d642a013ce33e0d85720e)`(`[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` res)` 

Configure the ADC with a given resolution for continuous sampling.

requires the `periph_adc_continuous` feature

#### Parameters
* `res` resolution to use for conversion

#### `public int32_t `[`adc_continuous_sample`](#group__drivers__periph__adc_1ga59426dab0d095c69c6013330a666f078)`(`[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` line)` 

Sample an ADC line without powering off the ADC afterward.

requires the `periph_adc_continuous` feature

Sample a value from the given ADC line

#### Returns
the sampled value on success

#### `public void `[`adc_continuous_stop`](#group__drivers__periph__adc_1ga5d07dd015dea76371902e97095482c9a)`(void)` 

Disable the ADC to save power.

requires the `periph_adc_continuous` feature

