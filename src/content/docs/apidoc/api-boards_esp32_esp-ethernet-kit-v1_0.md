---
title: api-boards_esp32_esp-ethernet-kit-v1_0.md
description: api-boards_esp32_esp-ethernet-kit-v1_0.md
---
# group `boards_esp32_esp-ethernet-kit-v1_0` 

Support for for Espressif ESP32-Ethernet-Kit v1.0.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Erik Ekman [eekman@google.com](mailto:eekman@google.com)

Espressif ESP32-Ethernet-Kit V1.0Table of Contents* [Overview](#esp32_ethernet_kit_v1_0_overview)

* [Hardware](#esp32_ethernet_kit_v1_0_hardware)* [Board Configuration](#esp32_ethernet_kit_v1_0_board_configuration)

* [Board Pinout](#esp32_ethernet_kit_v1_0_pinout)

* [Other Documentation Resources](#esp32_ethernet_kit_v1_0_other-resources)

OverviewThe Espressif [ESP32-Ethernet-Kit](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-ethernet-kit-v1.0.html) is a development board that uses the ESP32-WROVER-B module. Most important features of the board are

* 100 Mbps Ethernet via IP101G PHY

* USB bridge with JTAG interface

Furthermore, some GPIOs are broken out for extension. The USB bridge based on FDI FT2232HL provides a JTAG interface for OCD debugging through the USB interface. For flashing and debugging the board, see [ESP32-Ethernet-Kit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__esp32__esp-ethernet-kit) common board documentation.

ESP32-Ethernet-Kit V1.0

[Back to table of contents](#esp32_ethernet_kit_v1_0_toc)

HardwareThis section describes

* the default [board configuration](#esp32_ethernet_kit_v1_0_board_configuration),

* the [board pinout](#esp32_ethernet_kit_v1_0_pinout).

[Back to table of contents](#esp32_ethernet_kit_v1_0_toc)

Board ConfigurationESP32-Ethernet-Kit v1.0 has the following on-board components

* 100 Mbps Ethernet via IP101G PHY

* USB bridge with JTAG interface

For detailed information about the configuration of ESP32 boards, see section Peripherals in [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

Only a few GPIOs are broken out and available for external hardware on ESP32-Ethernet-Kit boards. Which GPIOs are available as peripherals depends on used modules.

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BTN0   |GPIO0   |not available if `esp_eth` is used   |
ADC   |GPIO34, GPIO35, GPIO36, GPIO39   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
DAC   |-   ||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO4   ||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |GPIO32   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |GPIO33   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO14   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO12   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO13   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO15   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO1   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO3   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)

* GPIO4 only works properly on the board if the function switch for GPIO4 (DIP SW 5) is OFF.

* [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) is not available if module `esp_jtag` is used. For the [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) pins to work properly, the function switches (DIP switches) for the JTAG signals must be set to OFF.

[Back to table of contents](#esp32_ethernet_kit_v1_0_toc)

Board PinoutThe board schematic can be found [here](https://dl.espressif.com/dl/schematics/SCH_ESP32-ETHERNET-KIT_A_V1.0_20190517.pdf).

By default, only 3 bidirectional GPIO pins are unused: GPIO4, GPIO32, GPIO33. The suggested configuration is for PWM and I2C, but they can also be used for SPI or another serial port. By disabling the JTAG interface on the board, another 4 GPIOs can be made available (GPIO12, GPIO13, GPIO14, GPIO15).

[Back to table of contents](#esp32_ethernet_kit_v1_0_toc)

Other Documentation ResourcesThere is a comprehensive [Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-ethernet-kit-v1.0.html) for the ESP32-Ethernet-Kit with a lot information about hardware configuration.

[Back to table of contents](#esp32_ethernet_kit_v1_0_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

