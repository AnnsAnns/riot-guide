---
title: api-boards_esp32_esp-wrover-kit.md
description: api-boards_esp32_esp-wrover-kit.md
---
# group `boards_esp32_esp-wrover-kit` 

Support for for Espressif ESP-WROVER-KIT V3.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP-WROVER-KIT V3Table of Contents* [Overview](#esp32_wrover_kit_overview)

* [Hardware](#esp32_wrover_kit_hardware)* [MCU](#esp32_wrover_kit_mcu)

* [Board Configuration](#esp32_wrover_kit_board_configuration)

* [Board Pinout](#esp32_wrover_kit_pinout)

* [Optional Hardware Configurations](#esp32_wrover_kit_optional_hardware)

* [Flashing the Device](#esp32_wrover_kit_flashing)

* [On-Chip Debugging with the device](#esp32_wrover_kit_debugging)

* [Other Documentation Resources](#esp32_wrover_kit_other-resources)

OverviewThe Espressif ESP-WROVER-KIT is a development board that uses the ESP32-WROVER module which includes a built-in 4 MByte SPI RAM. Most important features of the board are

* Micro-SD card interface

* OV7670 camera interface

* 3.2" SPI LCD panel

* RGB LED

* USB bridge with JTAG interface

* external 32.768 kHz crystal for RTC

Furthermore, many GPIOs are broken out for extension. The USB bridge based on FDI FT2232HL provides a JTAG interface for OCD debugging through the USB interface.

ESP-WROVER-KIT V3

[Back to table of contents](#esp32_wrover_kit_toc)

HardwareThis section describes

* the [MCU](#esp32_wrover_kit_mcu),

* the default [board configuration](#esp32_wrover_kit_board_configuration),

* [optional hardware configurations](#esp32_wrover_kit_optional_hardware),

* the [board pinout](#esp32_wrover_kit_pinout).

[Back to table of contents](#esp32_wrover_kit_toc)

MCUMost features of the board are provided by the ESP32 SoC. For detailed information about the ESP32, see section [MCU ESP32](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32_wrover_kit_toc)

Board ConfigurationESP-WROVER-KIT has the following on-board components

* Micro-SD card interface

* OV7670 camera interface

* 3.2" SPI LCD panel

* RGB LED

* USB bridge with JTAG interface

* external 32.768 kHz crystal for RTC

The following table shows the default board configuration sorted according to the defined functionality of GPIOs for different hardware options. This configuration can be overridden by [Application-Specific Configurations](#group__cpu__esp32_1esp32_application_specific_configurations) .

These abbreviations are used in subsequent tables:

SDC* = SD-Card interface is used (module **periph_sdmmc** is enabled)
 CAM* = Camera is plugged in/used

Function   |None   |SDC   |CAM   |SDC + CAM   |Remarks   |Configuration
--------- | --------- | --------- | --------- | --------- | --------- | ---------
`[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)`|`GPIO34`|`GPIO34`|-   |-   |`CAMERA_D6`|[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
`[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)`|`GPIO35`|`GPIO35`|-   |-   |`CAMERA_D7`|[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
`[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)`|`GPIO36`|`GPIO36`|-   |-   |`CAMERA_D4`|[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
`[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)`|`GPIO39`|`GPIO39`|-   |-   |`CAMERA_D5`|[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
`[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0 / LED0`|`GPIO0`|`GPIO0`|-   |-   |`LED_RED` / `CAMERA_RESET`|[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
`[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1 / LED2`|`GPIO4`|`GPIO4`|-   |-   |`LED_BLUE` / `CAMERA_D0`|[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
`LED1`|`GPIO2`|`GPIO2`|`GPIO2`|`GPIO2`|`LED_GREEN`|
`[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL`|`GPIO27`|`GPIO27`|`GPIO27`|`GPIO27`|`CAMERA_SIO_C`|[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
`[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA`|`GPIO26`|`GPIO26`|`GPIO26`|`GPIO26`|`CAMERA_SIO_D`|[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
`[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TX`|`GPIO1`|`GPIO1`|`GPIO1`|`GPIO1`||[UART Interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
`[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RX`|`GPIO3`|`GPIO3`|`GPIO3`|`GPIO3`||[UART Interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
`[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CLK`|`GPIO14`|`GPIO14`|-   |-   |SD-Card   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
`[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CMD`|`GPIO15`|`GPIO`|-   |-   |SD-Card   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
`[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT0`|`GPIO2`|`GPIO2`|-   |-   |SD-Card   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
`[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT1`|`GPIO4`|`GPIO4`|-   |-   |SD-Card   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
`[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT2`|`GPIO12`|`GPIO`|-   |-   |SD-Card   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
`[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT3`|`GPIO13`|`GPIO`|-   |-   |SD-Card   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
`[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK`|`GPIO14`|`GPIO14`|`GPIO14`|`GPIO14`|HSPI: SD-Card / Peripherals   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI`|`GPIO15`|`GPIO15`|`GPIO15`|`GPIO15`|HSPI: SD-Card / Peripherals   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0`|`GPIO13`|`GPIO13`|`GPIO13`|`GPIO13`|HSPI: SD-Card CS   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:SCK`|`GPIO19`|`GPIO19`|-   |-   |VSPI: LCD / `CAMERA_D3`|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MOSI`|`GPIO23`|`GPIO23`|-   |-   |VSPI: LCD / `CAMERA_HREF`|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MISO`|`GPIO25`|`GPIO25`|-   |-   |VSPI: LCD / `CAMERA_VSYNC`|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:CS0`|`GPIO22`|`GPIO22`|-   |-   |VSPI: LCD / `CAMERA_PCLK`|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
`LCD_LED`|`GPIO5`|`GPIO5`|-   |-   |`CAMERA_D1`|
`LCD_SCL`|`GPIO19`|`GPIO19`|-   |-   |`CAMERA_D3`|
`LCD_MOSI`|`GPIO23`|`GPIO23`|-   |-   |`CAMERA_HREF`|
`LCD_MISO`|`GPIO25`|`GPIO25`|-   |-   |`CAMERA_VSYNC`|
`LCD_CS`|`GPIO22`|`GPIO22`|-   |-   |`CAMERA_PCLK`|
`LCD_D/C`|`GPIO21`|`GPIO21`|-   |-   |`CAMERA_XCLK`|
`LCD_RESET`|`GPIO18`|`GPIO18`|-   |-   |`CAMERA_D2`|
`CAMERA_D0`|-   |-   |`GPIO4`|`GPIO4`||
`CAMERA_D1`|-   |-   |`GPIO5`|`GPIO5`||
`CAMERA_D2`|-   |-   |`GPIO18`|`GPIO18`||
`CAMERA_D3`|-   |-   |`GPIO19`|`GPIO19`||
`CAMERA_D4`|-   |-   |`GPIO36`|`GPIO36`||
`CAMERA_D5`|-   |-   |`GPIO39`|`GPIO39`||
`CAMERA_D6`|-   |-   |`GPIO34`|`GPIO34`||
`CAMERA_D7`|-   |-   |`GPIO35`|`GPIO35`||
`CAMERA_XCLK`|-   |-   |`GPIO21`|`GPIO21`||
`CAMERA_PCLK`|-   |-   |`GPIO22`|`GPIO22`||
`CAMERA_HREF`|-   |-   |`GPIO23`|`GPIO23`||
`CAMERA_VSYNC`|-   |-   |`GPIO25`|`GPIO25`||
`CAMERA_SIO_D`|-   |-   |`GPIO26`|`GPIO26`||
`CAMERA_SIO_C`|-   |-   |`GPIO27`|`GPIO27`||
`CAMERA_RESET`|-   |-   |`GPIO0`|`GPIO0`||

Following table shows the default board configuration sorted by GPIOs depending on used hardware.

Pin   |None   |SDC 4-bit   |CAM   |SDC 1-bit + CAM   |Remarks
--------- | --------- | --------- | --------- | --------- | ---------
GPIO0   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0 / LED0   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0 / LED0   |CAMERA_RESET   |CAMERA_RESET   |
GPIO1   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TX   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TX   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TX   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TX   |
GPIO2   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO / LED1   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT0   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT0   |HSPI
GPIO3   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RX   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RX   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RX   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RX   |
GPIO4   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1 / LED2   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT1   |CAMERA_D0   |CAMERA_D0   |
GPIO5   |LCD LED   |LCD_LED   |CAMERA_D1   |CAMERA_D1   |
GPIO6   |Flash CLK   |Flash CLK   |Flash CLK   |Flash CLK   |
GPIO7   |Flash SD0   |Flash SD0   |Flash SD0   |Flash SD0   |
GPIO8   |Flash SD1   |Flash SD1   |Flash SD1   |Flash SD1   |
GPIO9   |||||
GPIO10   |||||
GPIO11   |Flash CMD   |Flash CMD   |Flash CMD   |Flash CMD   |
GPIO12   ||[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT2   |||
GPIO13   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT3   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   ||HSPI / SPI SD-Card CS
GPIO14   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CLK   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK   ||HSPI
GPIO15   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CMD   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   ||HSPI
GPIO16   |N/A   |N/A   |N/A   |N/A   |see below
GPIO17   |N/A   |N/A   |N/A   |N/A   |see below
GPIO18   |LCD_RESET   |LCD_RESET   |LCD_RESET   |CAMERA_D2   |
GPIO19   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:SCK   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:SCK   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:SCK   |CAMERA_D3   |VSPI
GPIO21   |LCD_D/C   |LCD_D/C   |LCD_D/C   |CAMERA_XCLK   |
GPIO22   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:CS   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:CS0   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:CS0   |CAMERA_PCLK   |VSPI
GPIO23   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MOSI   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MOSI   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MOSI   |CAMERA_HREF   |VSPI
GPIO25   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MISO   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MISO   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)/LCD:MISO   |CAMERA_VSYNC   |VSPI
GPIO26   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)/CAMERASIO_D:SDA   |
GPIO27   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)/CAMERASIO_C:SCL   |
GPIO32   |N/A   |N/A   |N/A   |N/A   |see below
GPIO33   |N/A   |N/A   |N/A   |N/A   |see below
GPIO34   |[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|CAMERA_D6   |
GPIO35   |[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|CAMERA_D7   |
GPIO36   |[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|CAMERA_D4   |
GPIO39   |[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|CAMERA_D5   |

* [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) uses the HSPI interface with the GPIO2 pin as the MISO signal. Since GPIO2 has bootstrapping functionality, it might be necessary to to press the **Boot** button for flashing RIOT when the SD card or the peripheral hardware is attached to this SPI interface.

* GPIO0 cannot be used as SPI CS signal for external hardware connected to [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9). The reason for this is that the LEDs on this board are high-active and the default state of the LEDs after power-up causes a low level on the corresponding GPIO outputs.

* GPIO2 cannot be used as [PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) channel 1 / LED0 when [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) is used in any way. Reason is that GPIO2 is the MISO signal when [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) is used and is therefore an input. PWM channels are outputs.

* It might be necessary to remove the SD card or the peripheral hardware attached to the [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) interface for flashing RIOT. Reason is that the [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)** interface uses the HSPI interface with the GPIO2 pin as the MISO signal, which has bootstrapping functionality.

* GPIO16 and GPIO17 are used for the built-in SPI RAM and are not available on the I/O expansion connector, even though they are labeled there.

* GPIO32 and GPIO33 are attached to a 32 kHz crystal by default. To make them available as a GPIO on the I/O expansion connector, SMD resistors would need to be removed and soldered. Module `esp_rtc_timer_32k` is enabled by default.

For detailed information about the configuration of ESP32 boards, see section Peripherals in [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_wrover_kit_toc)

Optional Hardware ConfigurationsMRF24J40-based IEEE 802.15.4 radio modules and ENC28J60-based Ethernet network interface modules have been tested with the board. You could use the following code in your [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations) to use such modules:

```cpp
#ifdef BOARD_ESP32_WROVER_KIT

#if MODULE_MRF24J40
#define MRF24J40_PARAM_CS       GPIO9       /* MRF24J40 CS signal    */
#define MRF24J40_PARAM_INT      GPIO10      /* MRF24J40 INT signal   */
#define MRF24J40_PARAM_RESET    GPIO12      /* MRF24J40 RESET signal */
#endif

#if MODULE_ENC28J80
#define ENC28J80_PARAM_CS       GPIO9       /* ENC28J80 CS signal    */
#define ENC28J80_PARAM_INT      GPIO10      /* ENC28J80 INT signal   */
#define ENC28J80_PARAM_RESET    GPIO12      /* ENC28J80 RESET signal */
#endif

#endif
```
 For other parameters, the default values defined by the drivers can be used.

* Only a few GPIOs are available for external hardware on ESP-WROVER-KIT boards. Therefore, MRF24J40 and ENC28J60 based modules use the same GPIOs and only one of these modules can be used simultaneously.

* The **RESET** signal of MRF24J40 and ENC28J60 based modules can also be connected to the **RST** pin of the board (see [pinout](#group__boards__esp32__esp-wrover-kit_1esp32_wrover_kit_pinout)) to keep the configured GPIO free for other purposes.

[Back to table of contents](#esp32_wrover_kit_toc)

Board PinoutThe following picture shows the pinout of the ESP-WROVER-KIT V3 boards as defined by the default board configuration. The light green GPIOs are not used by configured on-board hardware components and can be used for any purpose. However, if optional off-board hardware modules are used, these GPIOs may also be occupied, see section [Board Configuration](#group__boards__esp32__esp-wrover-kit_1esp32_wrover_kit_board_configuration) for more information.

The corresponding board schematic can be found [here](https://dl.espressif.com/dl/schematics/ESP-WROVER-KIT_SCH-3.pdf).

ESP32-WROVER-KIT V3 Pinout

Flashing the DeviceFlashing RIOT is quite straight forward. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board using the programming port to your host computer and type:

```cpp
make flash BOARD=esp32-wrover-kit ...
```

The USB bridge is based on FDI FT2232HL and offers two USB interfaces:

* the first interface is the JTAG interface for [On-Chip debugging](#esp32_wrover_kit_debugging)

* the second interface is the console interface, which is also used for flashing

Therefore, you have to declare the USB interface in the make command. For example, if the ESP32-WROVER-KIT is connected to the host computer through the USB interfaces `/dev/ttyUSB0` and `/dev/ttyUSB1`, the make command would be used as following: 
```cpp
make flash BOARD=esp32-wrover-kit PORT=/dev/ttyUSB1 ...
```

For detailed information about ESP32 as well as configuring and compiling RIOT for ESP32 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_wrover_kit_toc)

On-Chip Debugging with the DeviceSince the USB bridge based on FDI FT2232HL provides a JTAG interface for debugging through an USB interface, using ESP-WROVER-Kit V3 is the easiest and most convenient way for On-Chip debugging. Please refer the [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html) for details on how to setup and how to use ESP-WROVER-Kit V3 and OpenOCD.

To use the JTAG interface, the `esp_jtag` module has to be enabled for compilation. 
```cpp
USEMODULE=esp_jtag make flash BOARD=esp32-wrover-kit ...
```

To flash and debug using OpenOCD, the precompiled version of OpenOCD for ESP32 has to be installed using the install script while being in RIOT's root directory, see also section [Using Local Toolchain Installation](#esp32_local_toolchain_installation). 
```cpp
dist/tools/esptool/install.sh openocd
```

Before OpenOCD can then be used, the `PATH` variable has to be set correctly and the `OPENOCD` variable has to be exported using the following command. 
```cpp
. dist/tools/esptool/export.sh openocd
```

Once the `PATH` variable and the `OPENOCD` variable are set, OpenOCD can be used

* to flash the application using command 
```cpp
PROGRAMMER=openocd USEMODULE=esp_jtag make flash BOARD=esp32-wrover-kit ...
```

* to start a debugging session (the board will be reset, but not flashed) using command 
```cpp
PROGRAMMER=openocd USEMODULE=esp_jtag make debug BOARD=esp32-wrover-kit ...
```

by setting the `PROGRAMMER` variable to `openocd`.

Even if the JTAG interface is used for debugging, the ESP32 standard method for flashing with `esptool.py` can still be used. In that case, the `flash` target is made without setting the `PROGRAMMER` variable.

[Back to table of contents](#esp32_wrover_kit_toc)

Other Documentation ResourcesThere is a comprehensive [Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-wrover-kit-v3.html) for the ESP-WROVER-KIT with a lot information about hardware configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

