---
title: api-boards_esp32_mh-et-live-minikit.md
description: api-boards_esp32_mh-et-live-minikit.md
---
# group `boards_esp32_mh-et-live-minikit` 

Support for MH-ET LIVE MiniKit for ESP32.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

MH-ET LIVE MiniKit for ESP32Table of Contents* [Overview](#esp32_mh_et_live_minikit_overview)

* [Hardware](#esp32_mh_et_live_minikit_hardware)* [MCU](#esp32_mh_et_live_minikit_mcu)

* [Board Configuration](#esp32_mh_et_live_minikit_board_configuration)

* [Board Pinout](#esp32_mh_et_live_minikit_pinout)

* [Optional Hardware Configurations](#esp32_mh_et_live_minikit_optional_hardware)

* [Flashing the Device](#esp32_mh_et_live_minikit_flashing)

OverviewThe MH-ET LIVE MiniKit for ESP32 uses the ESP32-WROOM-32 module. It is a very interesting development kit as it uses in the stackable Wemos D1 Mini format. Thus, all [shields for Wemos D1 mini](https://docs.wemos.cc/en/latest/d1_mini_shield/index.html) for ESP8266 can also be used with ESP32. Examples for such shields are:

* Micro SD-Card Shield (enable module `sdcard_spi` to use it)

* MRF24J40 IEEE 802.15.4 radio Shield

* Button Shield

* RGB LED Shield

* ...

This makes it possible to create different hardware configurations without the need for a soldering iron or a breadboard.

MH-ET LIVE MiniKit for ESP32 belongs to the class of general purpose boards where most ESP32 pins are broken out for easier access.

MH-ET LIVE MiniKit for ESP32

This stackable platform was tested in an RIOT application with:

* [Micro SD-Card Shield](https://docs.wemos.cc/en/latest/d1_mini_shield/micro_sd.html)

* MRF24J40 IEEE 802.15.4 radio Shield (contact [gunar@schorcht.net](mailto:gunar@schorcht.net) for more information)

* BMP180 Pressure Sensor Shield

This application is a good example how easy it is with this board to create different hardware applications.

RIOT application with SD-Card, MRF24J40 Radio, and BMP180 Pressure Sensor

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

HardwareThis section describes

* the [MCU](#esp32_mh_et_live_minikit_mcu),

* the default [board configuration](#esp32_mh_et_live_minikit_board_configuration),

* [optional hardware configurations](#esp32_mh_et_live_minikit_optional_hardware),

* the [board pinout](#esp32_mh_et_live_minikit_pinout).

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

MCUMost features of the board are provided by the ESP32 SoC. For detailed information about the ESP32, see section [MCU ESP32](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

Board ConfigurationThe following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by an [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations).

Pin   |Default Configuration*   |Optional Modules   |Remarks / Prerequisites   |Configuration
--------- | --------- | --------- | --------- | ---------
GPIO2   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0 / LED blue   |||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO0   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1   |||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO4   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):2   |||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO15   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):3   |||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO22   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
GPIO21   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
GPIO18   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO19   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO23   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO5   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |SD Card CS   |when module [sdcard_spi](#group__drivers__sdcard__spi_1drivers_sdcard_spi) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO1   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   ||Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO3   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   ||Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO9   |[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |||[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO10   |[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |||[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO34   |[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO35   |[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO36   |[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO39   |[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO25   |[DAC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
GPIO13   |-   |||
GPIO12   |-   |||
GPIO14   |-   |||
GPIO16   |-   |MRF24J40 RESET   |when module [mrf24j40](#mrf24j40_8h_1drivers_mrf24j40) is used   |
GPIO17   |-   |MRF24J40 INT   |when module [mrf24j40](#mrf24j40_8h_1drivers_mrf24j40) is used   |
GPIO26   |-   |MRF24J40 CS   |when module [mrf24j40](#mrf24j40_8h_1drivers_mrf24j40) is used   |
GPIO27   |-   |||
GPIO32   |-   |||
GPIO33   |-   |||

***** Default configuration cannot be used or is not available at all when optional hardware is used.

* GPIO9 and GIOP10 can only be used in **dout** and **dio**[flash modes](#group__cpu__esp32_1esp32_flash_modes).

* The **RESET** signal of MRF24J40 shield can be connected to the RST **pin** of the board (see [pinout](#group__boards__esp32__mh-et-live-minikit_1esp32_mh_et_live_minikit_pinout_img)) to keep the configured GPIO free for other purposes.

For detailed information about the configuration of ESP32 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

Optional Hardware ConfigurationsENC28J60-based Ethernet network interface modules have been tested with the board. You could use the following code in your [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations) to use such a module:

```cpp
#if MODULE_ENC28J80 && BOARD_ESP32_MH_ET_LIVE_MINIKIT
#define ENC28J80_PARAM_CS       GPIO14      /* ENC28J80 CS signal    */
#define ENC28J80_PARAM_INT      GPIO33      /* ENC28J80 INT signal   */
#define ENC28J80_PARAM_RESET    GPIO12      /* ENC28J80 RESET signal */
#endif
```
 For **ENC28J80_PARAM_SPI** the default parameter defined by the driver can be used.

The **RESET** signal of ENC28J60 based modules can also be connected to the **RST** pin of the board (see [pinout](#group__boards__esp32__mh-et-live-minikit_1esp32_mh_et_live_minikit_pinout_img)) to keep the configured GPIO free for other purposes.

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

Board PinoutThe following picture shows the pinout of MH-ET LIVE MiniKit for ESP32 board as defined by the default board configuration. The light green GPIOs are not used by configured on-board hardware components and can be used for any purpose. However, if optional off-board hardware modules are used, these GPIOs may also be occupied, see section [Board Configuration](#group__boards__esp32__mh-et-live-minikit_1esp32_mh_et_live_minikit_board_configuration) for more information.

The corresponding board schematic can be found [here](https://i.imgur.com/EpE4dGj.jpg)

MH-ET LIVE MiniKit for ESP32 pinout

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with a reset/boot/flash logic. Just connect the board to your host computer using the programming port and type: 
```cpp
make flash BOARD=esp32-mh-et-live-minikit ...
```
 For detailed information about ESP32 as well as configuring and compiling RIOT for ESP32 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_mh_et_live_minikit_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

