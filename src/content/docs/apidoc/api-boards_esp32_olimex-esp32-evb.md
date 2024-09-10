---
title: api-boards_esp32_olimex-esp32-evb.md
description: api-boards_esp32_olimex-esp32-evb.md
---
# group `boards_esp32_olimex-esp32-evb` 

Support for Olimex ESP32-EVB and ESP32-GATEWAY.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Olimex ESP32-EVB and ESP32-GATEWAYTable of Contents* [Overview](#esp32_olimex_esp32_evb_overview)

* [Hardware](#esp32_olimex_esp32_evb_hardware)* [MCU](#esp32_olimex_esp32_evb_mcu)

* [Board Configuration](#esp32_olimex_esp32_evb_board_configuration)

* [Board Pinout](#esp32_olimex_esp32_evb_pinout)

* [Optional Hardware Configurations](#esp32_olimex_esp32_evb_optional_hardware)

* [Flashing the Device](#esp32_olimex_esp32_evb_flashing)

Overview[Olimex ESP32-EVB](https://github.com/OLIMEX/ESP32-EVB) and [Olimex ESP32-GATEWAY](https://github.com/OLIMEX/ESP32-GATEWAY) are open source hardware boards which use the ESP32-WROOM module. The key features of the boards are:

* Ethernet LAN interface

* MicroSD card interface

* IR interface (Olimex ESP32-EVB only)

* CAN interface (Olimex ESP32-EVB only)

* two Relais (Olimex ESP32-EVB only)

* [UEXT](https://www.olimex.com/Products/Modules/UEXT/) connector with I2C, SPI and UART interfaces (Olimex ESP32-EVB only)

Using the UEXT connector, a lot of [off-board hardware modules](https://www.olimex.com/Products/Modules/) can be connected to Olimex ESP32-EVB to extend the hardware without the need for soldering iron or breadboards.

Because of the differences in the on-board hardware, it is necessary to add the following line to the makefile of the application to use the according configuration for Olimex ESP32-GATEWAY: 
```cpp
USEMODULE += olimex_esp32_gateway
```

Olimex ESP32-EVB (left) and Olimex ESP32-GATEWAY (right)

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

HardwareThis section describes

* the [MCU](#esp32_olimex_esp32_evb_mcu),

* the default [board configuration](#esp32_olimex_esp32_evb_board_configuration),

* [optional hardware configurations](#esp32_olimex_esp32_evb_optional_hardware),

* the [board pinout](#esp32_olimex_esp32_evb_pinout).

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

MCUMost features of the board are provided by the ESP32 SoC. For detailed information about the ESP32, see section [MCU ESP32](#group__cpu__esp32_1esp32_mcu_esp32).

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

Board ConfigurationOlimex ESP32-EVB and Olimex ESP32-GATEWAY have the following on-board components:

* Ethernet LAN interface

* MicroSD card interface

* IR interface (Olimex ESP32-EVB only)

* CAN interface (Olimex ESP32-EVB only)

* two Relais (Olimex ESP32-EVB only)

* [UEXT](https://www.olimex.com/Products/Modules/UEXT/) connector with I2C, SPI and UART interfaces (Olimex ESP32-EVB only)

The following table shows the default board configuration, which is sorted according to the defined functionality of GPIOs. This configuration can be overridden by [application-specific configurations](#group__cpu__esp32_1esp32_application_specific_configurations).

Pin   |Configuration<br/> ESP32-EVB   |Configuration<br/> ESP32-GATEWAY   |Remarks / Prerequisites   |Configuration
--------- | --------- | --------- | --------- | ---------
GPIO13   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT3   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces), [SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
GPIO16   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SCL   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[I2C Interfaces](#group__cpu__esp32_1esp32_i2c_interfaces)
GPIO14   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CLK, [SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CLK   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CLK   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces), [SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
GPIO2   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MISO, [SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT0   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT0   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces), [SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
GPIO15   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):MOSI, [SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CMD   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):CMD   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces), [SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
GPIO17   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9):CS0   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb):SDA   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[SPI Interfaces](#group__cpu__esp32_1esp32_spi_interfaces)
GPIO1   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |Console (cannot be changed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO3   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |Console (cannot be changed)   |[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO4   |[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):TxD   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT1   |on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces), [SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
GPIO36   |[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294):RxD   |[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|on ESP32-EVB available at [UEXT1](https://www.olimex.com/Products/Modules/UEXT)|[UART interfaces](#group__cpu__esp32_1esp32_uart_interfaces)
GPIO32   |Relais 1   |[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO33   |Relais 2   |LED0   ||
GPIO34   |BUTTON0   |BUTTON0   ||
GPIO9   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):0   ||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO10   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db):1   ||[PWM Channels](#group__cpu__esp32_1esp32_pwm_channels)
GPIO5   |CAN_DEV(0):TX   |||[CAN Interfaces](#group__cpu__esp32_1esp32_can_interfaces)
GPIO35   |CAN_DEV(0):RX   |[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)||[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO12   |IR_DEV(0):TX   |[SDMMC_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga6219af4ef8b19abd605f9258703dbff4):DAT2   |IR is not yet supported   |[SDMMC Interfaces](#group__cpu__esp32_1esp32_sdmmc_interfaces)
GPIO39   |IR_DEV(0):RX   |[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|IR is not yet supported   |[ADC Channels](#group__cpu__esp32_1esp32_adc_channels)
GPIO18   |EMAC_SMI:MDIO   |EMAC_SMI:MDIO   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO23   |EMAC_SMI:MDC   |EMAC_SMI:MDC   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO0   |EMAC_RMII:TX_CLK   |EMAC_RMII:TX_CLK   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO21   |EMAC_RMII:TX_EN   |EMAC_RMII:TX_EN   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO19   |EMAC_RMII:TXD0   |EMAC_RMII:TXD0   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO22   |EMAC_RMII:TXD1   |EMAC_RMII:TXD1   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO25   |EMAC_RMII:RXD0   |EMAC_RMII:RXD0   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO26   |EMAC_RMII:RXD1   |EMAC_RMII:RXD1   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)
GPIO27   |EMAC_RMII:RX_DV   |EMAC_RMII:RX_DV   |LAN interface   |[Ethernet MAC](#group__cpu__esp32_1esp32_ethernet_network_interface)To use the board configuration for Olimex-ESP32-GATEWAY, it is necessary to add the following line to makefile of the application: 
```cpp
USEMODULE += olimex_esp32_gateway
```

* GPIO9 and GIOP10 can only be used in **dout** and **dio**[flash modes](#group__cpu__esp32_1esp32_flash_modes).

* It might be necessary to remove the SD card or the peripheral hardware attached to the [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) interface for flashing RIOT. Reason is that the **[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)** interface uses the HSPI interface with the GPIO2 pin as the MISO signal, which has bootstrapping functionality.

For detailed information about the configuration of ESP32 boards, see section [Common Peripherals](#group__cpu__esp32_1esp32_peripherals).

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

Optional Hardware ConfigurationsMRF24J40-based IEEE 802.15.4 radio modules have been tested with the board. You could use the following code in your [application-specific configuration](#group__cpu__esp32_1esp32_application_specific_configurations) to use such modules:

```cpp
#ifdef BOARD_ESP32_OLIMEX_EVB && !MODULE_ESP32_OLIMEX_GATEWAY

#if MODULE_MRF24J40
#define MRF24J40_PARAM_CS       GPIO9       /* MRF24J40 CS signal    */
#define MRF24J40_PARAM_RESET    GPIO10      /* MRF24J40 RESET signal */
#define MRF24J40_PARAM_INT      GPIO34      /* MRF24J40 INT signal   */
#endif

#endif
```
 For other parameters, the default values defined by the drivers can be used.

* Since the Olimex-ESP32-GATEWAY does not break out the GPIO of the HSPI interface [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9), it is not possible to connect such module to Olimex-ESP32-GATEWAY.

* Since the Olimex-ESP32-EVB has a lot of on-board hardware, only a few GPIOs are available for external hardware.

* The **RESET** signal of MRF24J40 based modules can also be connected to the **RST** pin of the board (see [pinout](#group__boards__esp32__olimex-esp32-evb_1esp32_olimex_esp32_evb_pinout_img)) to keep the configured GPIO free for other purposes.

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

Board PinoutThe following pictures shows the pinout of Olimex ESP32-EVB and Olimex ESP32-GATEWAY boards as defined by the default board configuration. The light green GPIOs are not used by configured on-board hardware components and can be used for any purpose. However, if optional off-board hardware modules are used, these GPIOs may also be occupied, see section [Board Configuration](#group__boards__esp32__olimex-esp32-evb_1esp32_olimex_esp32_evb_board_configuration) for more information.

The corresponding board schematics can be found on GitHub for [Olimex ESP32-EVB board](https://github.com/OLIMEX/ESP32-EVB/raw/master/HARDWARE/REV-D/ESP32-EVB_Rev_D.pdf) and for [Olimex ESP32-GATEWAY](https://github.com/OLIMEX/ESP32-GATEWAY/raw/master/HARDWARE/Hardware%20revision%20C/ESP32-GATEWAY_Rev_C.pdf).

Olimex ESP32-EVB pinoutOlimex ESP32-GATEWAY pinout

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
make flash BOARD=esp32-olimex-evb ...
```
 For detailed information about ESP32 as well as configuring and compiling RIOT for ESP32 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32_olimex_esp32_evb_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

