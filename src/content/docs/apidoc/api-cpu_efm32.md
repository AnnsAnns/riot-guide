---
title: api-cpu_efm32.md
description: api-cpu_efm32.md
---
# group `cpu_efm32` 

Silicon Labs's EFM32/EFR32/EZR32 MCUs implementation.

This module contains all code and definitions for the Silicon Labs EFM32/EFR32/EZR32 MCUs. It uses the Gecko SDK (vendor library) for the peripheral drivers.

Supported PeripheralsThe following peripherals are supported (depends on microcontroller):

* ADC

* CPUID

* DAC

* Flash page

* GPIO

* HW RNG

* I2C

* Power Management

* PWM

* RTC

* RTT

* SPI

* [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)

* UART (including low-power)

Clock ConfigurationBy default the microcontroller will run on the internal RC-oscillator. If an external crystal is available, you can configure it to use by setting `CLOCK_HF=cmuSelect_HFXO`. The same applies for `CLOCK_LFA`, `CLOCK_LFB` and `CLOCK_LFE` using `cmuSelect_LFXO`.

If the internal RC-oscillator is not used, it will be disabled.

Refer to the reference manual of the specific microcontroller for the specifics.

EMU and CMU ConfigurationThe Energy Management Unit (EMU) and Clock Management Unit (CMU) are initialized using default values provided by the Gecko SDK. You can override any of the following defaults to use other values:

* `CMU_HFXOINIT`

* `CMU_LFXOINIT`

* `EMU_DCDCINIT`

* `EMU_EM23INIT`

* `EMU_EM4INIT`

Refer to the Gecko SDK for more information about these values.

Low-power ConfigurationThe EFM32/EFR32/EZR32 MCUs have support for low-power peripherals. Support is enabled by default, but can be disabled if not used.

* Setting `EFM32_LEUART_ENABLED=0` will disable support for the LEUART in the UART driver peripheral and save approximately 400 bytes.

Refer to `cpu/efm32/efm32-features.mk` for more options.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

