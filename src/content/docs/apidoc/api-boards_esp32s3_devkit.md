---
title: api-boards_esp32s3_devkit.md
description: api-boards_esp32s3_devkit.md
---
# group `boards_esp32s3_devkit` 

Support for generic ESP32S3 boards.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32-S3-DevKitTable of Contents* [Overview](#esp32s3_devkit_overview)

* [Hardware](#esp32s3_devkit_hardware)* [MCU](#esp32s3_devkit_mcu)

* [Board Configuration](#esp32s3_devkit_board_configuration)

* [Board Pinout](#esp32s3_devkit_pinout)

* [Flashing the Device](#esp32s3_devkit_flashing)

OverviewThe Espressif ESP32-S3-DevKit boards are a couple of boards that use one of the following modules:

* ESP32-S3-MINI-1x module (ESP32-S3-DevKitM-1 board)

* ESP32-S3-WROOM-1x module (ESP32-S3-DevKitC-1 board)

* ESP32-S3-WROOM-2 module (ESP32-S3-DevKitC-1 board)

Espressif ESP32-S3-DevKitM-1

 Due to the different modules used, the available versions of the ESP32-S3-DevKit board differ regarding the Flash size, the integrated SPI RAM and the SPI voltage. To be able to use all these different versions of the board with a single board definition, used board version can be specified by the variable `BOARD_VERSION` during compilation, for example: 
```cpp
BOARD=esp32s3-devkit BOARD_VERSION=esp32s3-devkitc-1-n8 make ...
```

The following table shows the available board versions, the size of the Flash and the SPI RAM as well as the value of the variable `BOARD_VERSION` that is used to specify the board version.

Board Version   |Flash (Mode)   |SPI RAM (Mode)   |`BOARD_VERSION`
--------- | --------- | --------- | ---------
**ESP32-S3-DevKitC-1-N8   **|** 8 MB (Quad)   **|** -   **|**`esp32s3-devkitc-1-n8` (default)**
ESP32-S3-DevKitC-1-N8R2   |8 MB (Quad)   |2 MB (Quad)   |`esp32s3-devkitc-1-n8r2`
ESP32-S3-DevKitC-1-N8R8   |8 MB (Quad)   |8 MB (Octal)   |`esp32s3-devkitc-1-n8r8`
ESP32-S3-DevKitC-1-N16R8V   |16 MB (Octal)   |8 MB (Octal)   |`esp32s3-devkitc-1-n16r8v`
ESP32-S3-DevKitC-1-N32R8V   |32 MB (Octal)   |8 MB (Octal)   |`esp32s3-devkitc-1-n32r8v`
ESP32-S3-DevKitC-1U-N8   |8 MB (Quad)   |-   |`esp32s3-devkitc-1u-n8`
ESP32-S3-DevKitC-1U-N8R2   |8 MB (Quad)   |2 MB (Quad)   |`esp32s3-devkitc-1u-n8r2`
ESP32-S3-DevKitC-1U-N8R8   |8 MB (Quad)   |8 MB (Octal)   |`esp32s3-devkitc-1u-n8r8`
ESP32-S3-DevKitM-1-N8   |8 MB (Quad)   |-   |`esp32s3-devkitm-1-n8`
ESP32-S3-DevKitM-1U-N8   |8 MB (Quad)   |-   |`esp32s3-devkitm-1u-n8`

* If the board version is not specified, **ESP32-S3-DevKitC-1-N8 with 8 MByte Flash** is assumed and `BOARD_VERSION` is set to **`esp32s3-devkitc-1-n8`** by default.

* Using a board version with embedded SPI RAM (`BOARD_VERSION` is any of **`esp32s3-devkitx-1x-*r*`** values) enables the [esp_spi_ram](#group__cpu__esp32_1esp32_spi_ram) feature. The SPI RAM can then be used as heap by enabling the [esp_spi_ram](#group__cpu__esp32_1esp32_spi_ram) pseudomodule.

* Depending on the specified board version, one of the following modes is used for the SPI RAM:

* **Quad SPI mode**: If `BOARD_VERSION` is one of the values **`esp32s3_devkitx-1x-*r2`**, the Quad SPI mode is used. In this mode, GPIO26 ... GPIO32** are occupied and are not available for other purposes.

* **Octal SPI mode**: If `BOARD_VERSION` is one of the values **`esp32s3_devkitx-1x-*r8x`**, the Octal-SPI mode is used and the feature [esp_spi_oct](#group__cpu__esp32_1esp32_spi_ram) is additionally enabled. If then the SPI RAM is activated by using the pseudomodule [esp_spi_ram](#group__cpu__esp32_1esp32_spi_ram), **GPIO33 ... GPIO37** are occupied and are not available for other purposes. Conflicts may then occur when using these GPIOs.

[Back to table of contents](#esp32s3_devkit_toc)

HardwareThis section describes

* the [MCU](#esp32s3_devkit_mcu),

* the default [board configuration](#esp32s3_devkit_board_configuration),

* [optional hardware configurations](#esp32s3_devkit_optional_hardware),

* the [board pinout](#esp32s3_devkit_pinout).

[Back to table of contents](#esp32s3_devkit_toc)

MCUMost features of the board are provided by the ESP32-S3 SoC. For detailed information about the ESP32-S3 SoC variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32s3_devkit_toc)

Board ConfigurationESP32-S3-DevKit boards have no special hardware on board with the exception of a single pin RGB-LED.

All GPIOs are simply broken out for flexibility. Therefore, the board configuration is the most flexible one which provides:

* 20 x ADC channels at maximum

* 2 x SPI

* 1 x I2C

* 2 x UART

* 1 RGB-LED

Since almost GPIOs have broken out, GPIOs can be used for different purposes in different applications. Following GPIOs are not broken out:

* ESP32-S3-DevKitC-1x: GPIO26..GPIO34

* ESP32-S3-DevKitM-1x: GPIO27..GPIO32

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
[ADC_LINE(n)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|GPIO1, GPIO2, GPIO4, GPIO5, GPIO6, GPIO7, GPIO8, GPIO9   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO14, GPIO17, GPIO18, GPIO21   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO15, GPIO16   |if module `esp_rtc_timer_32k` is not used   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |GPIO9   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |GPIO8   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
RGB-LED   |GPIO48   |supported by driver module `ws281x`|
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CLK   |GPIO12   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |GPIO13   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |GPIO11   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS0   |GPIO10   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TxD   |GPIO43   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RxD   |GPIO44   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)The RGB-LED is connected to GPIO38 on ESP32-S3-DevKitC-1 revision 1.1 boards.

For detailed information about the peripheral configurations of ESP32-S3 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32s3_devkit_toc)

Board PinoutThe following figures show the pinouts as configured by default board definition.

ESP32-S3-DevKitC-1 PinoutESP32-S3-DevKitM-1 Pinout

The corresponding board schematics can be found:

* [ESP32-S3-DevKitC-1](https://dl.espressif.com/dl/SCH_ESP32-S3-DEVKITC-1_V1_20210312C.pdf)

* [ESP32-S3-DevKitM-1](https://dl.espressif.com/dl/schematics/SCH_ESP32-S3-DEVKITM-1_V1_20210310A.pdf)

[Back to table of contents](#esp32s3_devkit_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
BOARD=esp32s3-devkit make flash ...
```
 For detailed information about ESP32-S3 as well as configuring and compiling RIOT for ESP32-S3 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32s3_devkit_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

