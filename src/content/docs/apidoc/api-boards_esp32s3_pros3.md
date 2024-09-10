---
title: api-boards_esp32s3_pros3.md
description: api-boards_esp32s3_pros3.md
---
# group `boards_esp32s3_pros3` 

Support for the ESP32 ProS3 board.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32 ProS3Table of Contents* [Overview](#esp32s3_pros3_overview)

* [Hardware](#esp32s3_pros3_hardware)* [MCU](#esp32s3_pros3_mcu)

* [Board Configuration](#esp32s3_pros3_board_configuration)

* [Board Pinout](#esp32s3_pros3_pinout)

* [Flashing the Device](#esp32s3_pros3_flashing)

* [Using STDIO](#esp32s3_pros3_stdio)

OverviewThe ESP32 ProS3 is one of the ESP32-S3 boards from Unexpected Maker. ESP32 ProS3

The main features of the board are:

* ESP32-S3 SoC with 2.4 GHz WiFi 802.11b/g/n and Bluetooth5, BLE

* 16 MByte Flash

* 8 MByte QSPI RAM

* RGB LED WS2812B

* Native USB and USB Serial JTAG

* LiPo Battery Charging and PicoBlade connector

* VBAT and 5V Sensing Pins

* 3D High Gain Antenna

[Back to table of contents](#esp32s3_pros3_toc)

HardwareThis section describes

* the [MCU](#esp32s3_pros3_mcu),

* the default [board configuration](#esp32s3_pros3_board_configuration),

* the [board pinout](#esp32s3_pros3_pinout).

[Back to table of contents](#esp32s3_pros3_toc)

MCUMost features of the board are provided by the ESP32-S3 SoC. For detailed information about the ESP32-S3 SoC variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32s3_pros3_toc)

Board ConfigurationESP32 ProS3 boards have no special hardware on board with the exception of a single pin RGB-LED WS2812B that uses a special bit-oriented protocol to control the RGB-LED by 24-bit RGB values which is not supported yet.

Most GPIOs are broken out on the board for flexibility. The default board configuration provides:

* 10 x ADC channels at maximum

* 1 x SPI

* 1 x I2C

* 1 x UART

* 2 x PWM, 4 channels each

* 1 x RGB-LED

For flexibility, some GPIOs are used in different peripheral configurations, but they can only be used for one peripheral at a time. For example, GPIO9 is used in the ADC channel definition and the definition of the SCL signal for [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb).

This is possible because GPIOs are only used for a specific peripheral interface when either

* the corresponding peripheral module is used, e.g. `periph_i2c`, or

* the corresponding init function is called, e.g. `adc_init`.

That is, the purpose for which a GPIO is used depends on which module or function is used first.

For example, if module `periph_i2c` is not used, the GPIOs listed in I2C configuration can be used for the other purposes, that is, GPIO9 can be used as ADC channel.

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BTN0   |GPIO0   |labeled as BOOT button   |
[ADC_LINE(n)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|GPIO1, GPIO2, GPIO3, GPIO4, GPIO5, GPIO6, GPIO7, GPIO8, GPIO9, GPIO10   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO12, GPIO13, GPIO14, GPIO15, GPIO16   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO6, GPIO7, GPIO21, GPIO38   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |GPIO9   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |GPIO8   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CLK   |GPIO36   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |GPIO37   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |GPIO35   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS0   |GPIO34   |SPI2_HOST (FSPI) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TxD   |GPIO43   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RxD   |GPIO44   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
 For detailed information about the peripheral configurations of ESP32-S3 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32s3_pros3_toc)

Board PinoutThe following figure shows the pinout as configured by board definition.

ESP32 ProS3C-1 Pinout

The corresponding board schematic can be found [here](https://github.com/UnexpectedMaker/esp32s3/raw/main/schematics/schematic-pros3.pdf)

[Back to table of contents](#esp32s3_pros3_toc)

Flashing the DeviceSince the board does not have a USB-to-Serial chip, the easiest way to flash the board is using the USB Serial/JTAG interface. Just connect the board to your host computer and use the following command: 
```cpp
BOARD=esp32s3-pros3 make flash ...
```

Usually the make system resets the board before flashing to enable the USB Serial/JTAG interface. In some special cases this reset does not work so that the programmer cannot connect to the board and the flashing is aborted with a timeout: 
```cpp
Serial port /dev/ttyACM0
Connecting...
...
serial.serialutil.SerialTimeoutException: Write timeout
```
 This can happen for example if the board is not yet flashed with RIOT or the USB interface is used for another purpose. In this case, restart the board manually in download mode by pressing and releasing the RESET button while holding down the BOOT button. In download mode, the USB Serial/JTAG interface is always available.

Alternatively, an external USB-to-Serial adapter can be used. In this case, the USB-to-Serial adapter has to be connected to TxD (GPIO43) and RxD (GPIO44) of the UART0 interface. Before RIOT can be flashed, the board has to be switched to download mode. To do this, press and release the RESET button while holding down the BOOT button. Once the board is in download mode, use the following command to flash RIOT: 
```cpp
BOARD=esp32s3-pros3 make flash ...
```

For detailed information about ESP32-S3 as well as configuring and compiling RIOT for ESP32-S3 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32s3_pros3_toc)

Using STDIOSince the board does not have a USB-to-Serial chip, the USB Serial/JTAG interface is used by default for the STDIO (module `stdio_usb_serial_jtag`) which provides an USB CDC ACM interface.

If the USB port is used by the USBUS stack or the tinyUSB stack, implicitly the module `stdio_cdc_acm` or `stdio_tinyusb_cdc_acm` is used for the STDIO via the USB CDC ACM interface.

Alternatively, the UART interface could be used with an external USB-to-Serial adapter. Simply add `stdio_uart` to the list of used modules for this purpose: 
```cpp
BOARD=esp32s3-pros3 USEMODULE=stdio_uart make flash ...
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

