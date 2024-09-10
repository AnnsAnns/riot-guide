---
title: api-boards_esp32s3_usb_otg.md
description: api-boards_esp32s3_usb_otg.md
---
# group `boards_esp32s3_usb_otg` 

Support for the ESP32-S3-USB-OTG board.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32-S3-USB-OTGTable of Contents* [Overview](#esp32s3_usb_otg_overview)

* [Hardware](#esp32s3_usb_otg_hardware)* [MCU](#esp32s3_usb_otg_mcu)

* [Board Configuration](#esp32s3_usb_otg_board_configuration)

* [Flashing the Device](#esp32s3_usb_otg_flashing)

* [Using STDIO](#esp32s3_usb_otg_stdio)

OverviewThe Espressif ESP32-S3-USB-OTG is a development board designed for the development of applications that use the USB interface. For this purpose it is equipped with two USB type A ports:

* `USB_DEV` male port that is used to connect the board as a USB device to a host.

* `USB_HOST` female port that is used to connect other USB devices to the board.

Espressif ESP32-S3-USB-OTG

RIOT-OS does only support the `USB_DEV` port, that is the board can only be used as USB device.

The main features of the board are:

Feature   |Support
--------- | ---------
ESP32-S3 SoC   |yes (1 core)
2.4 GHz WiFi 802.11b/g/n   |yes
Bluetooth5, BLE   |yes
8 MByte Flash   |yes
USB Type-A Host Interface   |no
USB Type-A Device Interface   |yes
SD Card Slot   |yes (SPI mode)
LCD Color Display 240 x 240   |yes

HardwareThis section describes

* the [MCU](#esp32s3_usb_otg_mcu),

* the default [board configuration](#esp32s3_usb_otg_board_configuration),

[Back to table of contents](#esp32s3_usb_otg_toc)

MCUMost features of the board are provided by the ESP32-S3 SoC. For detailed information about the ESP32-S3 SoC variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32s3_usb_otg_toc)

Board ConfigurationThe Espressif ESP32-S3-USB-OTG is a development board that uses the ESP32-S3-MINI-1 module. Most important features of the board are

* Micro-SD Card interface

* 1.3" Color LCD display with ST7789 display controller

* USB-to-UART bridge

* `USB_DEV` Type-A male port

* `USB_HOST` Type-A female port

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BTN0   |GPIO0   |OK Button   |
BTN1   |GPIO14   |MENU Button   |
BTN2   |GPIO11   |DW- Button   |
BTN3   |GPIO10   |UP+ active   |
LED0   |GPIO15   |Green LED   |
LED1   |GPIO16   |Yellow LED   |
LCD_DC   |GPIO4   ||
LCD_EN   |GPIO5   ||
LCD_RST   |GPIO8   ||
LCD_BL   |GPIO9   |LCD Backlight   |
[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|GPIO1   |USB_HOST Voltage   |[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|GPIO2   |Battery Voltage   |[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0   |GPIO15   |LED0   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1   |GPIO16   |LED1   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK   |GPIO6   |LCD_SCLK   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO7   |LCD_SDA   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO3   |no used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO5   |LCD_EN   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK   |GPIO36   |SD_CLK   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO35   |SD_CMD   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO37   |SD_DATA0   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO34   |SD_DATA3   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO43   |USB-to-UART bridge   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO44   |USB-to-UART bridge   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
 For detailed information about the peripheral configurations of ESP32-S3 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

The corresponding board schematic can be found [here](https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/_static/esp32-s3-usb-otg/schematics/SCH_ESP32-S3_USB_OTG.pdf)

[Back to table of contents](#esp32s3_usb_otg_toc)

Flashing the DeviceThere are two options to flash the board:

* USB Serial/JTAG interface using the `USB_DEV` port (default)

* UART-to-UART bridge

Flashing the device using the USB Serial/JTAG interface (<tt>USB_DEV</tt> port)To flash the board via the USB Serial/JTAG interface just connect the board with the `USB_DEV` port to your host computer and use the following command: 
```cpp
BOARD=esp32s3_usb_otg make flash ...
```

Usually the make system resets the board before flashing to enable the USB Serial/JTAG controller and to reboot the ESP32-S3 in download mode.

In some very special cases this reset does not work and the programmer cannot connect to the card, so the flashing is aborted with a timeout: 
```cpp
Serial port /dev/ttyACM0
Connecting...
...
serial.serialutil.SerialTimeoutException: Write timeout
```
 This can happen either if RIOT is not yet installed or if the USB port was previously used with the USB OTG controller, for example with USBUS or tinyUSB. In this case, restart the board manually into download mode by pressing and releasing the RESET button while holding down the BOOT button. In download mode, the USB Serial/JTAG interface is always available.

If the USB port was previously used with the USB OTG controller, an automatic restart of the ESP32-S3 with the flashed application is not possible. In this case the board must be reset manually using the RESET button. In all other cases the ESP32-S3 automatically restarts with the flashed application.

Flashing the device using USB-to-UART bridgeFlashing RIOT using the USB-to-UART bridge is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port:

```cpp
BOARD=esp32s3-usb-otg make flash ... PORT=/dev/ttyUSB0
```

For detailed information about ESP32-S3 as well as configuring and compiling RIOT for ESP32-S3 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32s3_usb_otg_toc)

Using STDIOBy default, the `USB_DEV` port and the USB Serial/JTAG interface are used for the STDIO (module `stdio_usb_serial_jtag`). If the USB port is used by the USBUS stack or the tinyUSB stack, implicitly the module `stdio_cdc_acm` or `stdio_tinyusb_cdc_acm` is used for the STDIO via the USB CDC ACM interface.

Alternatively, the USB-to-UART bridge and `[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)` could be used for the STDIO. Simply add `stdio_uart` to the list of used modules for this purpose: 
```cpp
BOARD=esp32s3-usb-otg USEMODULE=stdio_uart make flash ...
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

