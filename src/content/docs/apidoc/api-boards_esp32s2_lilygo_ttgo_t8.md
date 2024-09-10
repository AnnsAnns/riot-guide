---
title: api-boards_esp32s2_lilygo_ttgo_t8.md
description: api-boards_esp32s2_lilygo_ttgo_t8.md
---
# group `boards_esp32s2_lilygo_ttgo_t8` 

Support for LILYGO TTGO T8 ESP32-S2 Board.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

LILYGO TTGO T8 ESP32-S2Table of Contents* [Overview](#esp32s2_lilygo_ttgo_t8_overview)

* [Hardware](#esp32s2_lilygo_ttgo_t8_hardware)* [MCU](#esp32s2_lilygo_ttgo_t8_mcu)

* [Board Configuration](#esp32s2_lilygo_ttgo_t8_board_configuration)

* [Board Pinout](#esp32s2_lilygo_ttgo_t8_pinout)

* [Flashing the Device](#esp32s2_lilygo_ttgo_t8_flashing)

OverviewThe Espressif LILYGO TTGO T8 ESP32-S2 (also known as LilyGo T-Display S2) is a ESP32-S2 board with an OLED Display and a TF Card slot.

LILYGO TTGO T8 ESP32-S2

The board has following main features:

Feature   |Support
--------- | ---------
ESP32-S2 SoC   |yes
4 MB Flash   |yes
8 MB QSPI RAM   |yes
SD Card slot   |yes
32.768KHz Crystal   |yes
OLED display ST77789   |yes

[Back to table of contents](#esp32s2_lilygo_ttgo_t8_toc)

HardwareThis section describes

* the [MCU](#esp32s2_lilygo_ttgo_t8_mcu),

* the default [board configuration](#esp32s2_lilygo_ttgo_t8_board_configuration),

* the [board pinout](#esp32s2_lilygo_ttgo_t8_pinout).

[Back to table of contents](#esp32s2_lilygo_ttgo_t8_toc)

MCUMost features of the board are provided by the ESP32-S2 SoC. For detailed information about the ESP32-S2 SoC variant (family) and ESP32x SoCs, see section [ESP32 SoC Series](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32s2_lilygo_ttgo_t8_toc)

Board ConfigurationThe LILYGO TTGO T8 ESP32-S2 board uses the `[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)` (FSPI) for the OLED Display. The GPIOs of `[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)` are therefore not broken out. [SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) is used for the SD Card slot. These GPIOs are broken out and can also be used by other devices.

The LILYGO TTGO T8 ESP32-S2 has a USB-to-UART bridge on board. The USB D-/D+ signals of the USB-C connector are connected via DIP switches either to this USB-to-UART bridge (default) or to GPIO19/GPIO20 of the ESP32-S2. To use the USB OTG interface of the ESP32-S2, the USB D-/D+ signals must be connected to GPIO19 and GPIO20, see section [Pinout](#group__boards__esp32s2__lilygo__ttgo__t8_1esp32s2_lilygo_ttgo_t8_pinout). To use the USB OTG interface also for the console in this case, either the `stdio_cdc_acm` or the `stdio_tinyusb_cdc_acm` module must be enabled. This is automatically the case if the USBUS or tinyUSB stack is used.

The LILYGO TTGO T8 ESP32-S2 has a 32.768 kHz crystal on the board, which is connected to GPIO15 and GPIO16 via DIP switches (default). The crystal can be switched off via the DIP switches so that GPIO15 and GPIO16 become available at the headers, see section [Pinout](#group__boards__esp32s2__lilygo__ttgo__t8_1esp32s2_lilygo_ttgo_t8_pinout).

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BUTTON0   |GPIO0   ||
[ADC_LINE(n)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|GPIO1 ... GPIO9   ||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
[DAC_LINE(n)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|GPIO17, GPIO18   ||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
GPIO38   |GPIO38   |OLED RESET (not broken out)   |
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |GPIO7   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |GPIO8   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO39, GPIO40, GPIO41, GPIO42   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO15, GPIO16   |if module `esp_rtc_timer_32k` is not used   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CLK   |GPIO36   |OLED CLK (not broken out)   |
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |GPIO37   |OLED MISO (not broken out)   |
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |GPIO35   |OLED MOSI (not broken out)   |
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS0   |GPIO34   |OLED CS0 (not broken out)   |
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CLK   |GPIO12   |SD Card CLK   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |GPIO37   |SD Card MISO   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |GPIO35   |SD Card MOSI   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS0   |GPIO34   |SD Card CS   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TxD   |GPIO43   |Console   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RxD   |GPIO44   |Console   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
USB D-   |GPIO19   |if USB-to-UART bridge is not used   |
USB D+   |GPIO20   |if USB-to-UART bridge is not used   |
 For detailed information about the peripheral configurations of ESP32-S2 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32s2_lilygo_ttgo_t8_toc)

Board PinoutThe following figure shows the pinout as configured by the board definition.

LILYGO TTGO T8 ESP32-S2 Pinout

The corresponding board schematics can be found [here](https://github.com/Xinyuan-LilyGO/LilyGo-T-Display-S2/raw/master/schematic/ESP32_S2-Display.pdf)

[Back to table of contents](#esp32s2_lilygo_ttgo_t8_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has an USB-C connector which is either connected to the USB-to-UART bridge (default) with a built-in reset/boot/flash logic or to the USB signals of the ESP32-S2 SoC. The flash method depends on the configuration of the DIP switches, see section [Pinout](#group__boards__esp32s2__lilygo__ttgo__t8_1esp32s2_lilygo_ttgo_t8_pinout).

USB-C connector is connected to the USB-to-UART bridge (default)Just connect the board to your host computer and type using the programming port: 
```cpp
BOARD=esp32s2-liligo-ttgo-t8 make flash ...
```

For detailed information about ESP32-S2 as well as configuring and compiling RIOT for ESP32-S2 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

USB-C connector is connected to the USB signals of the ESP32-S2 SoCIn this configuration the integrated USB-to-JTAG bridge can be used to flash the board. The USB-to-JTAG bridge is automatically activated in the download mode of the bootloader, provided that the eFuses `JTAG_SEL_ENABLE` and `DIS_USB_JTAG` are not burned (see also section [JTAG Interface](#group__cpu__esp32__esp32s2_1esp32_jtag_interface_esp32s2) strapping pin GPIO3).

For this purpose, connect the board to your host computer and enter the following command using the programming port:

```cpp
USEMODULE=esp32s2-lilygo-ttgo-t8-usb BOARD=esp32s2-liligo-ttgo-t8 make flash ...
```

If RIOT is already on the device, it should automatically reset the device and enter the bootloader download mode. If

* RIOT is not already on the device or

* automatic reset does not work or

* the device is stuck in some other mode,

the download mode has to be forced before by pressing the Reset (RST) button while holding the BOOT (BOT) button.

[Back to table of contents](#esp32s2_lilygo_ttgo_t8_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

