---
title: api-boards_esp32_ttgo-t-beam.md
description: api-boards_esp32_ttgo-t-beam.md
---
# group `boards_esp32_ttgo-t-beam` 

Support for TTGO T-Beam boards.

Yegor Yefremov [yegorslists@googlemail.com](mailto:yegorslists@googlemail.com)

TTGO T-BeamTable of Contents* [Overview](#esp32_ttgo_t_beam_overview)

* [Hardware](#esp32_ttgo_t_beam_hardware)* [MCU](#esp32_ttgo_t_beam_mcu)

* [Board Configuration](#esp32_ttgo_t_beam_board_configuration)

* [Board Pinout](#esp32_ttgo_t_beam_pinout)

* [Optional Hardware Configurations](#esp32_ttgo_t_beam_optional_hardware)

* [Flashing the Device](#esp32_ttgo_t_beam_flashing)

OverviewTTGO T-Beam is an ESP32 development board with 4 MB Flash that uses the EPS32 chip directly. It integrates:

* a SemTech SX1276 or SX1278 for LoRaWAN communication

* a U-Blox Neo-6M GPS receiver

There are at least three board types: rev0, rev1, and V1.0. Versions rev0 and rev1 are very similar, the only difference is that rev1 has an additional LED connected to GPIO14. The pinout of V1.0 has more changes thus it is necessary to add the following line to the makefile of the application to use the according configuration for TTGO T-Beam V1.0: 
```cpp
USEMODULE += esp32_ttgo_t_beam_v1_0
```

[Back to table of contents](#esp32_ttgo_t_beam_toc)

HardwareThis section describes

* the [MCU](#esp32_ttgo_t_beam_mcu),

* the default [board configuration](#esp32_ttgo_t_beam_board_configuration),

* [optional hardware configurations](#esp32_ttgo_t_beam_optional_hardware),

* the [board pinout](#esp32_ttgo_t_beam_pinout).

[Back to table of contents](#esp32_ttgo_t_beam_toc)

MCUMost features of the board are provided by the ESP32 SoC. For detailed information about the ESP32, see section [MCU ESP32](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32_ttgo_t_beam_toc)

Board ConfigurationTTGO T-Beam has the following on-board components:

* SemTech SX1276 or SX1278 for LoRaWAN communication

* U-Blox Neo-6M GPS receiver

There are two hardware versions of the board:

* SemTech SX1278 for LoRaWAN communication in the 433 MHz band

* SemTech SX1276 for LoRaWAN communication in the 868/915 MHz band

Since many GPIOs are broken out, they can be used for different purposes in different applications. For flexibility, some GPIOs might be listed in various peripheral configurations. For example, GPIO0 is used in the ADC channel definition [ADC_GPIOS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2esp32s3-usb-otg_2include_2periph__conf_8h_1ac93ef90877386721589730c2219fde48) and the PWM channel definition [PWM0_GPIOS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2esp8266-sparkfun-thing_2include_2periph__conf_8h_1a6d98f0e073d8b7dee809df091e612d0e).

This is possible because GPIOs are only used for a specific peripheral interface when

* the corresponding peripheral module is used, e.g., module `periph_i2c`, or

* a corresponding init function is called e.g., [adc_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga259a7b0176a8a6f5a5e61aabce3574f0), [dac_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gabc514d1757c59929f653c64085d3fd5d) and [pwm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1ga205eedf5331e5646b330d986f2b691f9), or

* the corresponding peripheral interface is used for the first time, e.g., [spi_acquire](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042).

That is, the purpose for which a GPIO is actually used depends on which module or function is used first.

GPIOs 5, 12, 15, 16, 17, 18, 19, 26, and 27 are used for board control functions and should not be used for other purposes unless you exactly know what you are doing.

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

TTGO- T-Beam rev1

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BUTTON0   |GPIO39   |low active   |
LED0   |GPIO14   |high active   |
ADC   |GPIO0, GPIO2, GPIO4, GPIO13,<br/> GPIO25, GPIO32, GPIO33, GPIO34,<br/> GPIO35   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
DAC   |GPIO25   ||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO0, GPIO2, GPIO25   ||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |GPIO21   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |GPIO22   |I2C_SPEED_FAST is used   |[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO5   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO19   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO27   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO18   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO1   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO3   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO15   |GPS (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO12   |GPS (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)

TTGO- T-Beam V1.0

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BUTTON0   |GPIO38   |low active   |
ADC   |GPIO0, GPIO2, GPIO4, GPIO13,<br/> GPIO25, GPIO32, GPIO33, GPIO35   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
DAC   |GPIO25   ||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO0, GPIO2, GPIO25   ||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |GPIO21   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |GPIO22   |I2C_SPEED_FAST is used   |[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO5   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO19   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO27   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO18   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO1   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO3   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO34   |GPS (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO12   |GPS (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)

* The configuration of ADC channels contains all ESP32 GPIOs that can be used as ADC channels.

For detailed information about the configuration of ESP32 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32_ttgo_t_beam_toc)

Board PinoutThe following figures show the pinout of the defined default configurations for TTGO T-Beam boards.

TTGO T-Beam rev1 Pintout Diagram

TTGO T-Beam V1.0 Pintout Diagram

The corresponding board schematics can be found on TinyMicros.com for [TTGO T-Beam rev0](http://tinymicros.com/mediawiki/images/b/b9/TTGO_T-Beam_Schematic.pdf) and GitHub for [TTGO T-Beam V1.0](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_TBeam_V1.0.pdf)

[Back to table of contents](#esp32_ttgo_t_beam_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
make flash BOARD=esp32-ttgo-t-beam ...
```
 For detailed information about ESP32 as well as configuring and compiling RIOT for ESP32 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_ttgo_t_beam_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

