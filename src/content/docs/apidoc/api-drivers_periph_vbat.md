---
title: api-drivers_periph_vbat.md
description: api-drivers_periph_vbat.md
---
# group `drivers_periph_vbat` 

Driver to monitor the internal backup battery status.

The backup battery must be connected with the VBAT pin and GND. On most development boards you will have to remove a solder bridge that connects VDD with VBAT. The battery is used to retain the backup domain register and RTC register content while power (VDD) is off.

The actual driver is implemented as a CPU feature. A board that supports backup battery monitoring via ADC, must `#define VBAT_ADC [ADC_LINE(x)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)`, where `x` is the index of the internal VBAT ADC line in `adc_config[]` in periph_conf.h.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`vbat_init`](#group__drivers__periph__vbat_1gaeb3ca5b3b22f381adde3f34656f338d6)`(void)`            | Initialize backup battery monitoring.
`public int32_t `[`vbat_sample_mv`](#group__drivers__periph__vbat_1ga50c6bdbf6c8a42b620a7eed9ec641f79)`(void)`            | Sample backup battery.
`public bool `[`vbat_is_empty`](#group__drivers__periph__vbat_1ga55fef9a170942ce40c9f47311e9fb753)`(void)`            | Sample the backup battery and compare the result with the minimum value required to power the backup domain.

## Members

#### `public int `[`vbat_init`](#group__drivers__periph__vbat_1gaeb3ca5b3b22f381adde3f34656f338d6)`(void)` 

Initialize backup battery monitoring.

#### Parameters
* `!=` 0: Failure 

* `0` Success

#### `public int32_t `[`vbat_sample_mv`](#group__drivers__periph__vbat_1ga50c6bdbf6c8a42b620a7eed9ec641f79)`(void)` 

Sample backup battery.

#### Returns
Backup battery load in mV

#### `public bool `[`vbat_is_empty`](#group__drivers__periph__vbat_1ga55fef9a170942ce40c9f47311e9fb753)`(void)` 

Sample the backup battery and compare the result with the minimum value required to power the backup domain.

#### Parameters
* `true` empty 

* `false` not empty

