---
title: api-boards_esp32c3_wemos_mini.md
description: api-boards_esp32c3_wemos_mini.md
---
# group `boards_esp32c3_wemos_mini` 

Support for generic ESP32-C3 boards.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Wemos ESP32-C3 miniTable of Contents* [Overview](#esp32c3_wemos_mini_overview)

* [Hardware](#esp32c3_wemos_mini_hardware)* [MCU](#esp32c3_wemos_mini_mcu)

* [Board Configuration](#esp32c3_wemos_mini_board_configuration)

* [Board Pinout](#esp32c3_wemos_mini_pinout)

* [Flashing the Device](#esp32c3_wemos_mini_flashing)

OverviewThe Wemos ESP32-C3 mini board is an interesting development kit as it uses in the stackable Wemos LOLIN D1 Mini format. Thus, all [shields for Wemos D1 mini](https://docs.wemos.cc/en/latest/d1_mini_shield/index.html) for ESP8266 can also be used with ESP32-C3. Examples for such shields are:

* Micro SD-Card Shield

* MRF24J40 IEEE 802.15.4 radio Shield

* Button Shield

* RGB LED Shield

* OLED Display Shield

* ...

This makes it possible to create different hardware configurations without the need for a soldering iron or a breadboard.

Wemos ESP32-C3 mini board

This stackable platform was tested in an RIOT application with:

* MRF24J40 IEEE 802.15.4 radio Shield (contact [gunar@schorcht.net](mailto:gunar@schorcht.net) for more information)

* [BMP180 Pressure Sensor Shield](http://www.esp8266learning.com/wemos-mini-bmp180-shield.php)

This application is a good example how easy it is with this board to create different hardware applications.

RIOT application with MRF24J40 Radio and a BMP180 Pressure Sensor

[Back to table of contents](#esp32c3_wemos_mini_toc)

HardwareThis section describes

* the [MCU](#esp32c3_wemos_mini_mcu),

* the default [board configuration](#esp32c3_wemos_mini_board_configuration),

* the [board pinout](#esp32c3_wemos_mini_pinout).

[Back to table of contents](#esp32c3_wemos_mini_toc)

MCUMost features of the board are provided by the ESP32-C3 SoC. For detailed information about the ESP32-C3 variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32c3_wemos_mini_toc)

Board ConfigurationThe Wemos ESP32-C3 mini board has no special hardware on board with the exception of a single pin RGB-LED.

There are two board versions available on the market with a different pinout of the ADC channels and the SPI interface. Which version is used is determined by activating a pseudo module for the corresponding version:

* v1.0.0, module `esp32c3_wemos_mini_v1_0_0`

* v2.1.0, module `esp32c3_wemos_mini_v2_1_0` (default)

To specify which board version is used, simply add the variable definition `USEMODULE=...` to the make command line, for example: 
```cpp
USEMODULE=esp32c3_wemos_mini_v1_0_0 BOARD=esp32c3-wemos-min make ...
```
 If the board version is not specified, version v2.1.0 is used by default.

Almost all GPIOs are broken out and can be used for different peripherals:

* 6 x ADC channels at maximum

* 1 x SPI

* 1 x I2C

* 1 x UART

* 2 x PWM channels

However, since the number of GPIOs of the ESP32-C3 SoC is very limited, some GPIOs are used in multiple peripheral configurations but can only be used for one peripheral at a time. For example, GPIO4 is used in the ADC channel configuration and in the MOSI signal configuration for [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9). This is possible because GPIOs are only used for a specific peripheral interface when either

* the corresponding peripheral module is used, e.g. `periph_spi` or

* the corresponding init function is called, e.g. `adc_init`

That is, the purpose for which a GPIO is used depends on which module or function is used first. For example, if module `periph_spi` is not used, the GPIOs listed in SPI configuration can be used for other purposes, that is, GPIO4 can be used as ADC channel.

The following table shows the default board configuration depending on used board version, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Function   |v1.0.0   |v2.1.0   |Remarks   |Configuration
--------- | --------- | --------- | --------- | ---------
BUTTON0   |GPIO9   |GPIO9   ||
ADC   |GPIO0 ... GPIO5   |GPIO0 ... GPIO5   ||see [ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |GPIO10   |GPIO10   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |GPIO8   |GPIO8   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
LED0   |GPIO7   |-   ||
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO1, GPIO6, GPIO7   |GPIO2, GPIO6   ||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
RGB-LED   |-   |GPIO7   |supported by driver module `ws281x`|
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO2   |GPIO1   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO3   |GPIO0   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO4   |GPIO4   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO5   |GPIO5   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO21   |GPIO21   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO20   |GPIO20   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)The configuration of ADC channels contains all ESP32-C3 GPIOs that could be used as ADC channels.

For detailed information about the peripheral configurations of ESP32-C3 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32c3_wemos_mini_toc)

Board PinoutThe following figures show the pinouts as configured by default board definition.

Wemos EPS32-C3 mini Pinout

The corresponding board schematics can be found:

* [Wemos ESP32-C3 mini v1.0.0](https://www.wemos.cc/en/latest/_static/files/sch_c3_mini_v1.0.0.pdf)

* [Wemos ESP32-C3 mini v2.1.0](https://www.wemos.cc/en/latest/_static/files/sch_c3_mini_v2.1.0.pdf)

[Back to table of contents](#esp32c3_wemos_mini_toc)

Flashing the DeviceThe USB-C connector of the board is directly connected to the USB Serial/JTAG interface of the ESP32-C3 SoC. It can be used to program the board and to debug the application. Just connect the board to your host computer and use the following command: 
```cpp
make flash BOARD=esp32c3-devkit ...
```

The make system will resets the board to restart the board into download mode. In some special cases this reset does not work so that the programmer cannot connect to the board and the flashing is aborted with a timeout: 
```cpp
Serial port /dev/ttyACM0
Connecting...
...
serial.serialutil.SerialTimeoutException: Write timeout
```
 In this case, restart the board manually in download mode by pressing and releasing the RESET button while holding down the BOOT button.

After flashing the board, it will still be in download mode. You have to press the reset button (RST) to start your application.

For detailed information about ESP32-C3 as well as configuring and compiling RIOT for ESP32-C3 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32c3_wemos_mini_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

