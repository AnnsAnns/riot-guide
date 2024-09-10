---
title: api-boards_esp32_wemos-lolin-d32-pro.md
description: api-boards_esp32_wemos-lolin-d32-pro.md
---
# group `boards_esp32_wemos-lolin-d32-pro` 

Support for Wemos LOLIN D32 Pro.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Wemos LOLIN D32 ProTable of Contents* [Overview](#esp32_wemos_lolin_d32_pro_overview)

* [Hardware](#esp32_wemos_lolin_d32_pro_hardware)* [MCU](#esp32_wemos_lolin_d32_pro_mcu)

* [Board Configuration](#esp32_wemos_lolin_d32_pro_board_configuration)

* [Board Pinout](#esp32_wemos_lolin_d32_pro_pinout)

* [Optional Hardware Configurations](#esp32_wemos_lolin_d32_pro_optional_hardware)

* [Flashing the Device](#esp32_wemos_lolin_d32_pro_flashing)

OverviewWemos LOLIN D32 Pro is a development board that uses the ESP32-WROVER module which has a built-in 4 MByte SPI RAM. Most important features of the board are

* Micro-SD card interface

* TFT display interface

* SPI RAM 4 MByte

Wemos LOLIN D32 Pro belongs to the class of general purpose boards where most ESP32 pins are broken out for easier access.

Wemos LOLIN D32 PRO

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

HardwareThis section describes

* the [MCU](#esp32_wemos_lolin_d32_pro_mcu),

* the default [board configuration](#esp32_wemos_lolin_d32_pro_board_configuration),

* [optional hardware configurations](#esp32_wemos_lolin_d32_pro_optional_hardware),

* the [board pinout](#esp32_wemos_lolin_d32_pro_pinout).

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

MCUMost features of the board are provided by the ESP32 SoC. For detailed information about the ESP32, see section [MCU ESP32](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

Board ConfigurationThe board for the Wemos LOLIN D32 Pro has the following on-board components:

* 1 x LED

* 1 x Micro SD card interface

* 1 x TFT display connector

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by an [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations).

Pin   |Default Configuration*   |Optional Configuration   |Remarks / Prerequisites   |Configuration
--------- | --------- | --------- | --------- | ---------
GPIO22   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
GPIO21   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |||[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
GPIO18   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):SCK   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO19   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO23   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO5   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0 / LED0   |||[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO4   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS1   |SD Card CS   |when module [sdcard_spi](#group__drivers__sdcard__spi_1drivers_sdcard_spi) is used   |[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO1   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   ||Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO3   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   ||Console (configuration is fixed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO36   |[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO39   |[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO34   |[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO35   |[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)||VBat measurement (GPIO is not broken out)   |[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO32   |[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|TFT_LED   |when TFT is connected   |[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO33   |[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|TFT_RESET   |when TFT is connected   |[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO25   |[DAC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
GPIO26   |[DAC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|||[DAC Channels](#group__cpu__esp32_1esp32_dac_channels)
GPIO0   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0   |MRF24J40/ENC28J60 RESET   |when module [mrf24j40](#mrf24j40_8h_1drivers_mrf24j40)/[enc28j60](#enc28j60_8h_1drivers_enc28j60) is used   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO2   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1   |MRF24J40/ENC28J60 CS   |when module [mrf24j40](#mrf24j40_8h_1drivers_mrf24j40)/[enc28j60](#enc28j60_8h_1drivers_enc28j60) is used   |[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO13   |-   |MRF24J40/ENC28J60 INT   |when module [mrf24j40](#mrf24j40_8h_1drivers_mrf24j40)/[enc28j60](#enc28j60_8h_1drivers_enc28j60) is used   |
GPIO15   |-   |||
GPIO12   |-   |TS_CS   |when TFT is connected   |
GPIO14   |-   |TFT_CS   |when TFT is connected   |
GPIO27   |-   |TFT_DC   |when TFT is connected   |

***** Default configuration cannot be used or is not available at all when optional configuration is used. For example, when the TFT is connected, GPIO32 is used as **TFT_LED** signal and [ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888) is not available.

When the TFT display is connected, add the following line to the makefile of the application to enable the according default board and peripheral configuration: 
```cpp
USEMODULE += esp_lolin_tft
```

For detailed information about the configuration of ESP32 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

Optional Hardware ConfigurationsMRF24J40-based IEEE 802.15.4 radio modules and ENC28J60-based Ethernet network interface modules have been tested with the board. You could use the following code in your [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations) to use such modules:

```cpp
#ifdef BOARD_ESP32_WEMOS_LOLIN_D32_PRO

#if MODULE_MRF24J40
#define MRF24J40_PARAM_CS       GPIO15      /* MRF24J40 CS signal    */
#define MRF24J40_PARAM_RESET    GPIO2       /* MRF24J40 RESET signal */
#define MRF24J40_PARAM_INT      GPIO13      /* MRF24J40 INT signal   */
#endif

#if MODULE_ENC28J80
#define ENC28J80_PARAM_CS       GPIO15      /* ENC28J80 CS signal    */
#define ENC28J80_PARAM_RESET    GPIO2       /* ENC28J80 RESET signal */
#define ENC28J80_PARAM_INT      GPIO13      /* ENC28J80 INT signal   */
#endif

#endif
```
 For other parameters, the default values defined by the drivers can be used.

* Only a few GPIOs are available for external hardware on the Wemos LOLIN D32 PRO. Therefore, MRF24J40 and ENC28J60 based modules use the same GPIOs and only one of these modules can be used simultaneously.

* The **RESET** signal of MRF24J40 and ENC28J60 based modules can also be connected to the **RST** pin of the board (see [pinout](#group__boards__esp32__wemos-lolin-d32-pro_1esp32_wemos_lolin_d32_pro_pinout_img)) to keep the configured GPIO free for other purposes.

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

Board PinoutThe following picture shows the pinout of WEMOS LOLIN D32 PRO board as defined by the default board configuration. The light green GPIOs are not used by configured on-board hardware components and can be used for any purpose. However, if optional off-board hardware modules are used, these GPIOs may also be occupied, see section [Board Configuration](#group__boards__esp32__wemos-lolin-d32-pro_1esp32_wemos_lolin_d32_pro_board_configuration) for more information.

The corresponding board schematic can be found [here](https://docs.wemos.cc/en/latest/_static/files/sch_d32_pro_v2.0.0.pdf).

Wemos LOLIN D32 PRO pinout

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer using the programming port and type: 
```cpp
make flash BOARD=esp32-wemos-lolin-d32-pro ...
```
 For detailed information about ESP32 as well as configuring and compiling RIOT for ESP32 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_wemos_lolin_d32_pro_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

