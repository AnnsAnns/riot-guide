---
title: api-boards_sensebox_samd21.md
description: api-boards_sensebox_samd21.md
---
# group `boards_sensebox_samd21` 

Support for the SenseBox MCU with SAMD21 board.

General information[SenseBox](https://www.sensebox.de/) is a do-it-yourself kit for stationary and mobile sensor stations.

SenseBox board is based on the Atmel SAMD21G18A microcontroller. See [Atmel SAMD10/SAMD20/SAMD21/SAMR21](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__samd21).

Flash the board* Put the board in bootloader mode by double tapping the reset button.
 When the board is in bootloader mode, the user led (red) oscillates smoothly.

* Use `BOARD=sensebox_samd21` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=sensebox_samd21 -C examples/hello-world flash
```

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situation.

On I2C portI2C port is enabled by default. To disable it use `I2C_DISABLE`. To re-enable use `I2C_ENABLE`.

On XBEE portsXBEE1 and XBEE2 ports are enabled by default. To disable any of them use `XBEEn_DISABLE`. To re-enable use `XBEEn_ENABLE`.

On the board there is a reset circuit for this ports that delays the reset signal from the enable signal for about 300ms. Because of that a delay has been introduced in the `board_init` function, so that any SPI device connected to the ports is reset before use.

SX127X radioThe pin configuration for the SX127X radio on the [boards/sensebox_samd21/include/board.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#sensebox__samd21_2include_2board_8h)** file assumes that it will be connected to the XBEE1 port. If a different configuration is needed please modify this file.

SD cardThe pin configuration for the mSD-Bee module radio on the [boards/sensebox_samd21/include/sdcard_spi_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2sensebox__samd21_2include_2sdcard__spi__params_8h)** file assumes that it will be connected to the XBEE2 port. If a different configuration is needed please modify this file.

LimitationsThere is only one interrupt pin on the XBEE headers. This means that interrupt pins DIO0 and DIO1 from the LoRa Bee are multiplexed through an OR gate.

This has the following limitations:

* FSK mode is not possible

* The interrupt pins can have different configurations, so caution is required when making changes.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

