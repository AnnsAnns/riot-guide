---
title: api-cpu_efm32_drivers_coretemp.md
description: api-cpu_efm32_drivers_coretemp.md
---
# group `cpu_efm32_drivers_coretemp` 

Driver for the EFM32 internal temperature sensor.

All EFM32 chips have an internal ADC input channel that reads the internal temperature sensor. This EFM32-specific driver provides an interface for reading this value, compensated using factory-calibrated values.

The board must define `CORETEMP_ADC` to point to the ADC line that connects to the right ADC input channel.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`coretemp_init`](#group__cpu__efm32__drivers__coretemp_1gac80aa693780b3d94751c90d0c59c8b18)`(void)`            | Initialize the sensor.
`public int16_t `[`coretemp_read`](#group__cpu__efm32__drivers__coretemp_1gab6032dacd10e347812d8d9a5a8ce8b26)`(void)`            | Read the current temperature from the sensor.

## Members

#### `public int `[`coretemp_init`](#group__cpu__efm32__drivers__coretemp_1gac80aa693780b3d94751c90d0c59c8b18)`(void)` 

Initialize the sensor.

#### Returns
0 on successful initialization 

#### Returns
-EIO on ADC initialization error

This driver assumes that the `CORETEMP_ADC` is defined and points to the ADC input channel that is connected to the internal temperature sensor.

#### `public int16_t `[`coretemp_read`](#group__cpu__efm32__drivers__coretemp_1gab6032dacd10e347812d8d9a5a8ce8b26)`(void)` 

Read the current temperature from the sensor.

#### Returns
current temperature in centi-degrees Celsius (times 100)

Temperature readings are compensated using the factory-calibration values.

