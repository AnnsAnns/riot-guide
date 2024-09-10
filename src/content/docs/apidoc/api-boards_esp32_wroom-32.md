---
title: api-boards_esp32_wroom-32.md
description: api-boards_esp32_wroom-32.md
---
# group `boards_esp32_wroom-32` 

Support for generic ESP32-WROOM-32 boards.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32-WROOM-32 based boardsTable of Contents* [Overview](#esp32_wroom_32_overview)

* [Hardware](#esp32_wroom_32_hardware)* [MCU](#esp32_wroom_32_mcu)

* [Board Configuration](#esp32_wroom_32_board_configuration)

* [Board Pinout](#esp32_wroom_32_pinout)

* [Optional Hardware Configurations](#esp32_wroom_32_optional_hardware)

* [Flashing the Device](#esp32_wroom_32_flashing)

OverviewThis board definition covers not just a single board, but rather a large set of generic boards that use an ESP32-WROOM-32 module and simply break out all GPIOs to external pads without having any special hardware or interfaces on-board. Examples are Espressif's ESP32-DevKitC or NodeMCU-ESP32S and a large number of clones.

Espressif ESP32-DevKitC V4

[Back to table of contents](#esp32_wroom_32_toc)

HardwareThis section describes

* the [MCU](#esp32_wroom_32_mcu),

* the default [board configuration](#esp32_wroom_32_board_configuration),

* [optional hardware configurations](#esp32_wroom_32_optional_hardware),

* the [board pinout](#esp32_wroom_32_pinout).

[Back to table of contents](#esp32_wroom_32_toc)

MCUMost features of the board are provided by the ESP32 SoC. For detailed information about the ESP32, see section [MCU ESP32](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32_wroom_32_toc)

Board ConfigurationGeneric ESP32-WROOM-32 boards do not have special hardware on board and all GPIOs are simply broken out for flexibility. Therefore, the board configuration is the most flexible one with provides:

18 x ADC channels at maximum 2 x DAC channels at maximum 2 x SPI at maximum 1 x I2C at maximum 2 x UART

Since all GPIOs have broken out, GPIOs can be used for different purposes in different applications. For flexibility, GPIOs can be listed in various peripheral configurations. For example, GPIO13 is used in the ADC channel definition and the definition of the MOSI signal of [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9).

This is possible because GPIOs are only used for a specific peripheral interface when

* the corresponding peripheral module is used, e.g. `periph_i2c`, or

* a corresponding init function is called z. `adc_init`, `dac_init` and `pwm_init` or

* The corresponding peripheral interface is used for the first time, e.g. `spi_aqcuire.

That is, the purpose for which a GPIO is used depends on which module or function is used first.

For example, if module periph_i2c is not used, the GPIOs listed in I2C configuration can be used for the other purposes.

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Function   |GPIOs   |Remarks   |Configuration
--------- | --------- | --------- | ---------
BUTTON0   |GPIO0   ||
ADC   |GPIO0, GPIO2, GPIO4, GPIO12, GPIO13,<br/> GPIO14, GPIO15, GPIO25, GPIO26, GPIO27,<br/> GPIO32, GPIO33, GPIO34, GPIO35, GPIO36,<br/> GPIO39   ||see [ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
DAC   |GPIO25, GPIO26   ||[refer](#group__cpu__esp32_1esp32_dac_channels)
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO0, GPIO2, GPIO4, GPIO16, GPIO17   |-   |[DAC Channels](#group__cpu__esp32_1esp32_pwm_channels)
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)|GPIO27, GPIO32, GPIO33   |-   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |GPIO21   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |GPIO22   ||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO18   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO19   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO23   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO5   |VSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK   |GPIO14   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |GPIO12   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |GPIO13   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |GPIO15   |HSPI is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO1   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO3   |Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |GPIO10   |not available in **qout** and **qio** flash mode   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |GPIO9   |not available in **qout** and **qio** flash mode   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)

* The configuration of ADC channels contains all ESP32 GPIOs that can be used as ADC channels.

* The configuration of DAC channels contains all ESP32 GPIOs that can be used as DAC channels.

* GPIO9 and GIOP10 can only be used in **dout** and **dio**[flash modes](#group__cpu__esp32_1esp32_flash_modes).

For detailed information about the configuration of ESP32 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32_wroom_32_toc)

Optional Hardware ConfigurationsMRF24J40-based IEEE 802.15.4 radio modules and ENC28J60-based Ethernet network interface modules have been tested with the board. You could use the following code in your [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations) to use such modules:

```cpp
#ifdef BOARD_ESP32_WROOM-32

#if MODULE_MRF24J40
#define MRF24J40_PARAM_CS       GPIO16       /* MRF24J40 CS signal    */
#define MRF24J40_PARAM_RESET    GPIO17       /* MRF24J40 RESET signal */
#define MRF24J40_PARAM_INT      GPIO34       /* MRF24J40 INT signal   */
#define MRF24J40_PARAM_SPI_CLK  SPI_CLK_1MHZ /* SPI clock frequency */
#endif

#if MODULE_ENC28J80
#define ENC28J80_PARAM_CS       GPIO32      /* ENC28J80 CS signal    */
#define ENC28J80_PARAM_RESET    GPIO33      /* ENC28J80 RESET signal */
#define ENC28J80_PARAM_INT      GPIO35      /* ENC28J80 INT signal   */
#endif

#endif
```
 For other parameters, the default values defined by the drivers can be used.

The **RESET** signal of MRF24J40 and ENC28J60 based modules can also be connected to the **RST** pin of the board (see [pinout](#group__boards__esp32__wroom-32_1esp32_wroom_32_pinout)) to keep the configured GPIO free for other purposes.

[Back to table of contents](#esp32_wroom_32_toc)

Board PinoutThe following figure shows the pinout of the defined default configuration for the EPS32-DevKitC board as an example of generic ESP32-WROOM-32 boards. The light green GPIOs are not used by configured on-board hardware components and can be used for any purpose. However, if optional off-board hardware modules are used, these GPIOs may also be occupied, see section [Board Configuration](#group__boards__esp32__wroom-32_1esp32_wroom_32_board_configuration) for more information.

The corresponding board schematics can be found [here](https://dl.espressif.com/dl/schematics/esp32_devkitc_v4-sch-20180607a.pdf)

EPS32-DevKitC V4 Pinout

[Back to table of contents](#esp32_wroom_32_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
make flash BOARD=esp32-wroom-32 ...
```
 For detailed information about ESP32 as well as configuring and compiling RIOT for ESP32 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_wroom_32_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

