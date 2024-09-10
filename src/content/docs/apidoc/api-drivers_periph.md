---
title: api-drivers_periph.md
description: api-drivers_periph.md
---
# group `drivers_periph` 

Low-level peripheral driver interface for vendor and platform independent access to MCU peripherals as UART, SPI, etc.

The module contains the low-level peripheral driver interface. This interface defines a standardized interface to access MCU peripherals that is not tied to any specific vendor, platform or architecture.

Initialization and Thread SafetyPeripheral drivers fall into three categories regarding to their initialization:

* Drivers that do not need to be initialized (e.g. [EEPROM driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__eeprom))

* Drivers that are automatically initialized by the module `periph_init` at boot, (see [Common peripheral initialization](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__init) for details)

* Drivers that require manual initialization (e.g. [UART](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart) or [ADC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc))

The initialization code of drivers initialized at boot up is *not* thread safe. This code is run sequentially anyway and never called by the user, so the overhead of thread safety would not be justified.

All other peripheral APIs (including the initialization functions of drivers that are not initialized with `periph_init`) are fully or partially thread safe. Partially thread safe drivers require the user to make sure that the same peripheral entity (e.g. one UART device) is exclusively used by one thread. So two threads may concurrently use two *distinct* UART devices without any synchronization, but they *must* synchronize explicitly to access the same UART device.

Fully thread safe are all bus peripherals: A call to e.g. [spi_acquire](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042) will start a period of exclusive access to the given SPI bus by the calling thread until that calls [spi_release](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga9e36100f2b58917366872fca2f9f3bc6).

Peripheral Driver   |Initialized By   |[Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety
--------- | --------- | ---------
`periph_adc`|user / driver   |Partial (no concurrent use of the same ADC line allowed)
`periph_can`|user / driver   |Partial (no concurrent use of the same CAN device allowed)
`periph_cpuid`|not needed   |Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety
`periph_dac`|user / driver   |Partial (no concurrent use of the same DAC line allowed)
`periph_eeprom`|not needed   |None (no concurrency whatsoever)
`periph_flashpage`|not needed   |None (no concurrency whatsoever)
`periph_gpio`|not needed   |Limited (reads are fine, concurrent writes to pins on distinct ports work)
`periph_gpio_ll`|not needed   |Yes, except for concurrent initialization of the GPIO pin
`periph_hwrng`|`periph_init`|None (no concurrency whatsoever)
`periph_i2c`|`periph_init`|Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety (except for initialization)
`periph_pio`|`periph_init`|Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety (except for initialization)
`periph_pm`|not needed   |Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety
`periph_ptp`|`periph_init`|Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety (except for initialization)
`periph_pwm`|user / driver   |Partial (no concurrent use of the same PWM device)
`periph_qdec`|user / driver   |Partial (no concurrent use of the same QDEC device)
`periph_rtc`|`periph_init`|None (no concurrency whatsoever)
`periph_rtt`|`periph_init`|None (no concurrency whatsoever)
`periph_spi`|`periph_init`|Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety (except for initialization)
`periph_timer`|user / driver   |Yes, except for concurrent initialization of the same timer
`periph_uart`|user / driver   |Partial (no concurrent use of the same UART device allowed)
`periph_usbdev`|user / driver (*)   |Full [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Safety (except for initialization)
`periph_vbat`|`periph_init`|None (no concurrency whatsoever)
`periph_wdt`|`periph_init`|Only `[wdt_kick()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga17282fdbc67f2150ddb989b910f751a1)` is thread-safe

`periph_usbdev` requires a low level initialization ([usbdev_init_lowlevel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga124dc4fde43e3a5df575e812ef64cd77)) that is done by `periph_init`. A per device initialization is needed in addition by the user.

> Todo: describe concept in detail 

link to driver model 

describe/link implementation guide 

list best practices

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

