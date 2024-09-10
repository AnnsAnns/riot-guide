---
title: api-boards_esp32c3_devkit.md
description: api-boards_esp32c3_devkit.md
---
# group `boards_esp32c3_devkit` 

Support for generic ESP32-C3 boards.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32-C3-DevKitTable of Contents* [Overview](#esp32c3_devkit_overview)

* [Hardware](#esp32c3_devkit_hardware)* [MCU](#esp32c3_devkit_mcu)

* [Board Configuration](#esp32c3_devkit_board_configuration)

* [Board Pinout](#esp32c3_devkit_pinout)

* [Flashing the Device](#esp32c3_devkit_flashing)

OverviewThe Espressif ESP32-C3-DevKit boards are a couple of boards that use one of the following modules:

* ESP32-C3-MINI-1x module (ESP32-C3-DevKitM-1 board)

* ESP32-C3-WROOM-02x module (ESP32-C3-DevKitC-02 board)

Since the number of GPIOs and their possible uses on the ESP32-C3 are quite limited, the ESP32-C3-DevKit should also work for most other ESP32-C3 boards. Any modifications required for specific applications could be overridden by [application-specific board configuration](#group__cpu__esp32_1esp32_application_specific_configurations).

Espressif ESP32-C3-DevKitM-1

[Back to table of contents](#esp32c3_devkit_toc)

HardwareThis section describes

* the [MCU](#esp32c3_devkit_mcu),

* the default [board configuration](#esp32c3_devkit_board_configuration),

* [optional hardware configurations](#esp32c3_devkit_optional_hardware),

* the [board pinout](#esp32c3_devkit_pinout).

[Back to table of contents](#esp32c3_devkit_toc)

MCUMost features of the board are provided by the ESP32-C3 SoC. For detailed information about the ESP32-C3 variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32c3_devkit_toc)

Board ConfigurationESP32-C3-DevKit boards have no special hardware on board with the exception of a single pin RGB-LED.

All GPIOs are simply broken out for flexibility. Therefore, the board configuration is the most flexible one which provides:

* 6 x ADC channels at maximum

* 1 x SPI

* 1 x I2C

* 2 x UART

* 1 RGB-LED

Since all GPIOs have broken out, GPIOs can be used for different purposes in different applications. For flexibility, GPIOs can be listed in multiple peripheral configurations, but they can only be used for one peripheral at a time. For example, GPIO4 is used in the ADC channel definition, the PWM channel definition and the definition of the SCL signal for [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb).

This is possible because GPIOs are only used for a specific peripheral interface when either

* the corresponding peripheral module is used, e.g. `periph_i2c` and `periph_spi`, or

* the corresponding init function is called, e.g. `adc_init` and `pwm_init`.

That is, the purpose for which a GPIO is used depends on which module or function is used first.

For example, if module `periph_i2c` is not used, the GPIOs listed in I2C configuration can be used for the other purposes, that is, GPIO4 can be used as ADC channel or PWM channel.

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BUTTON0   |GPIO9   ||
ADC   |GPIO0, GPIO1, GPIO2, GPIO3, GPIO4, GPIO5   ||see [ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO3, GPIO4   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |GPIO4   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |GPIO5   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
RGB-LED   |GPIO8   |supported by driver module `ws281x`|
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO6   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO2   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO7   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO10   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO21   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO20   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)The configuration of ADC channels contains all ESP32-C3 GPIOs that could be used as ADC channels.

For detailed information about the peripheral configurations of ESP32-C3 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32c3_devkit_toc)

Board PinoutThe following figures show the pinouts as configured by default board definition.

EPS32-C3-DevKitM-1x PinoutEPS32-C3-DevKitC-02x Pinout

The corresponding board schematics can be found:

* [ESP32-C3-DevKitM-1](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITM-1_V1_20200915A.pdf)

* [ESP32-C3-DevKitC-02](https://dl.espressif.com/dl/schematics/SCH_ESP32-C3-DEVKITC-02_V1_1_20210126A.pdf)

[Back to table of contents](#esp32c3_devkit_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
make flash BOARD=esp32c3-devkit ...
```
 For detailed information about ESP32-C3 as well as configuring and compiling RIOT for ESP32-C3 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32c3_devkit_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

