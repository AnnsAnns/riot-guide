---
title: api-drivers_periph_cpuid.md
description: api-drivers_periph_cpuid.md
---
# group `drivers_periph_cpuid` 

Low-level CPU ID peripheral driver.

Provides access the CPU's serial number

(Low-) Power ImplicationsThe implementation **should** make sure, that calling [cpuid_get()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__cpuid_1ga562e64bc300b062ac82dac98b8af7cf2) does not introduce any long-term power usage penalties. If e.g. some peripheral has to be powered on for the CPU ID to be read, the implementation **should** take care to disable the peripheral again after the read is finished.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`cpuid_get`](#group__drivers__periph__cpuid_1ga562e64bc300b062ac82dac98b8af7cf2)`(void * id)`            | Gets the serial number of the CPU.

## Members

#### `public void `[`cpuid_get`](#group__drivers__periph__cpuid_1ga562e64bc300b062ac82dac98b8af7cf2)`(void * id)` 

Gets the serial number of the CPU.

#### Parameters
* `id` The serial number of the CPU of length CPUID_LEN (must be defined in the CPU's cpu_conf.h)

