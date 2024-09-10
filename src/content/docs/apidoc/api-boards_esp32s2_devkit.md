---
title: api-boards_esp32s2_devkit.md
description: api-boards_esp32s2_devkit.md
---
# group `boards_esp32s2_devkit` 

Support for generic ESP32S2 boards.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32-S2-DevKitTable of Contents* [Overview](#esp32s2_devkit_overview)

* [Hardware](#esp32s2_devkit_hardware)* [MCU](#esp32s2_devkit_mcu)

* [Board Configuration](#esp32s2_devkit_board_configuration)

* [Board Pinout](#esp32s2_devkit_pinout)

* [Flashing the Device](#esp32s2_devkit_flashing)

OverviewThe Espressif ESP32-S2-DevKit boards are a couple of boards that use one of the following modules:

* ESP32-S2-MINI-1x-N4 module (ESP32-S2-DevKitM-1 board)

* ESP32-S2-MINI-1x-N4R2 module (ESP32-S2-DevKitM-1R board)

* ESP32-S2-SOLO-N4 module (ESP32-S2-DevKitC-1 board)

* ESP32-S2-SOLO-N4R2 module (ESP32-S2-DevKitC-1R board)

* ESP32-S2-WROOM module (ESP32-S2-Saola-1 board)

* ESP32-S2-WROVER-N4R2 module (ESP32-S2-Saola-1R board)

Espressif ESP32-S2-DevKitM-1

 Due to the different modules used, the available versions of the ESP32-S2-DevKit board differ regarding the Flash size, the integrated SPI RAM and the SPI voltage. To be able to use all these different versions of the board with a single board definition, used board version can be specified by the variable `BOARD_VERSION` during compilation, for example: 
```cpp
BOARD=esp32s2-devkit BOARD_VERSION=esp32s2-devkitc-1r make ...
```

The following table shows the available board versions, the size of the Flash and the SPI RAM as well as the value of the variable `BOARD_VERSION` that is used to specify the board version.

Board Version   |Flash (Mode)   |SPI RAM (Mode)   |`BOARD_VERSION`
--------- | --------- | --------- | ---------
**ESP32-S2-DevKitM-1   **|** 4 MB (Quad)   **|** -   **|**`esp32s2-devkitm-1` (default)**
ESP32-S2-DevKitM-1U   |4 MB (Quad)   |-   |`esp32s2-devkitm-1u`
ESP32-S2-DevKitM-1R   |4 MB (Quad)   |2 MB (Quad)   |`esp32s2-devkitm-1r`
ESP32-S2-DevKitM-1RU   |4 MB (Quad)   |2 MB (Quad)   |`esp32s2-devkitm-1ru`
ESP32-S2-DevKitC-1   |4 MB (Quad)   |-   |`esp32s2-devkitc-1`
ESP32-S2-DevKitC-1U   |4 MB (Quad)   |-   |`esp32s2-devkitc-1u`
ESP32-S2-DevKitC-1R   |4 MB (Quad)   |2 MB (Quad)   |`esp32s2-devkitc-1r`
ESP32-S2-DevKitC-1RU   |4 MB (Quad)   |2 MB (Quad)   |`esp32s2-devkitc-1ru`
ESP32-S2-Saola-1M   |4 MB (Quad)   |-   |`esp32s2-saola-1m`
ESP32-S2-Saola-1MI   |4 MB (Quad)   |-   |`esp32s2-saola-1mi`
ESP32-S2-Saola-1R   |4 MB (Quad)   |2 MB (Quad)   |`esp32s2-saola-1r`
ESP32-S2-Saola-1RI   |4 MB (Quad)   |2 MB (Quad)   |`esp32s2-saola-1ri`

* If the board version is not specified, **ESP32-S2-DevKitM-1 with 4 MByte Flash** is assumed and `BOARD_VERSION` is set to **`esp32s2-devkitm-1`** by default.

* Using a board version with embedded SPI RAM (`BOARD_VERSION` is any of **`esp32s2-*-1r*`** values) enables the [esp_spi_ram](#group__cpu__esp32_1esp32_spi_ram) feature. The SPI RAM can then be used as heap by enabling the [esp_spi_ram](#group__cpu__esp32_1esp32_spi_ram) pseudomodule.

[Back to table of contents](#esp32s2_devkit_toc)

HardwareThis section describes

* the [MCU](#esp32s2_devkit_mcu),

* the default [board configuration](#esp32s2_devkit_board_configuration),

* [optional hardware configurations](#esp32s2_devkit_optional_hardware),

* the [board pinout](#esp32s2_devkit_pinout).

[Back to table of contents](#esp32s2_devkit_toc)

MCUMost features of the board are provided by the ESP32-S2 SoC. For detailed information about the ESP32-S2 SoC variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32s2_devkit_toc)

Board ConfigurationESP32-S2-DevKit boards have no special hardware on board with the exception of a single pin RGB-LED.

All GPIOs are simply broken out for flexibility. Therefore, the board configuration is the most flexible one which provides:

* 20 x ADC channels at maximum

* 2 x SPI

* 1 x I2C

* 2 x UART

* 1 RGB-LED

Since almost GPIOs have broken out, GPIOs can be used for different purposes in different applications. Following GPIOs are used for Flash and SPI RAM and are not broken out:

* ESP32-S2-DevKitC-1x: GPIO27..GPIO32

* ESP32-S2-DevKitM-1x: GPIO26..GPIO32

* ESP32-S2-Saola-1x: GPIO26..GPIO32

For flexibility, GPIOs can be used in multiple peripheral configurations, but they can only be used for one peripheral at a time. For example, GPIO9 is used in the ADC channel definition and the definition of the SCL signal for [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb).

This is possible because GPIOs are only used for a specific peripheral interface when either

* the corresponding peripheral module is used, e.g. `periph_i2c`, or

* the corresponding init function is called, e.g. `adc_init`.

That is, the purpose for which a GPIO is used depends on which module or function is used first.

For example, if module `periph_i2c` is not used, the GPIOs listed in I2C configuration can be used for the other purposes, that is, GPIO9 can be used as ADC channel.

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BUTTON0   |GPIO0   ||
[ADC_LINE(n)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|GPIO1 ... GPIO10   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[DAC_LINE(n)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|GPIO17, GPIO18   |GPIO18 is connected to RGB-LED   |[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |GPIO9   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |GPIO8   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO11, GPIO12, GPIO13, GPIO14   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO15, GPIO16   |if module `esp_rtc_timer_32k` is not used   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
RGB-LED   |GPIO18   |supported by driver module `ws281x`|
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CLK   |GPIO12   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |GPIO13   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |GPIO11   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS0   |GPIO10   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TxD   |GPIO43   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RxD   |GPIO44   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
 For detailed information about the peripheral configurations of ESP32-S2 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32s2_devkit_toc)

Board PinoutThe following figures show the pinouts as configured by default board definition.

ESP32-S2-DevKitM-1x PinoutESP32-S2-DevKitC-1x PinoutESP32-S2-Saola-1x Pinout

The corresponding board schematics can be found:

* [ESP32-S2-DevKitM-1x](https://dl.espressif.com/dl/schematics/ESP32-S2-DevKitM-1_V1_Schematics.pdf)

* [ESP32-S2-DevKitC-1x](https://dl.espressif.com/dl/schematics/SCH_ESP32-S2-DEVKITC-1_V1_20210508.pdf)

* [ESP32-S2-Saola-1x](https://dl.espressif.com/dl/schematics/ESP32-S2-SAOLA-1_V1.1_schematics.pdf)

[Back to table of contents](#esp32s2_devkit_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
BOARD=esp32s2-devkit make flash ...
```
 For detailed information about ESP32-S2 as well as configuring and compiling RIOT for ESP32-S2 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32s2_devkit_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

