---
title: api-boards_esp8266_olimex-mod.md
description: api-boards_esp8266_olimex-mod.md
---
# group `boards_esp8266_olimex-mod` 

Support for the Olimex MOD-WIFI-ESP8266-DEV board.

OverviewOlimex MOD-WIFI-ESP8266-DEV is a tiny development board that is available as open-source hardware at [GitHub](https://github.com/OLIMEX/ESP8266/tree/master/HARDWARE/MOD-WIFI-ESP8266-DEV). It uses Espressif's ESP8266EX SoC and was originally designed to add WiFi capabilities to existing boards.

Olimex MOD-WIFI-ESP8266-DEV belongs to the class of general purpose boards where all ESP8266EX pins are broken out for easier access. The board can either be soldered directly to a PCB or it can be used with a breadboard.

Olimex MOD-WIFI-ESP8266-DEV
 The board provides some pads for an UEXT interface. UEXT interface (introduced by Olimex) can be used to connect different peripherals to the board. This UEXT interface comprises the 3 serial interfaces UART, SPI and I2C. For more information about UEXT, see [UEXT](https://www.olimex.com/Products/Modules/UEXT).

Together with the Olimex ESP8266-EVB evaluation board, a development platform for IoT devices is available.

Olimex ESP8266-EVB

HardwareMCUMost features of the board are provided by the ESP8266EX SoC. 
MCU   |ESP8266EX
--------- | ---------
Family   |Tensilica Xtensa LX106
Vendor   |Espressif
RAM   |80 kByte
Flash   |2 MByte
Frequency   |80 / 160 MHz
FPU   |no
Timers   |1 x 32 bit
ADCs   |1 x 10 bit (1 channel)
LEDs   |1 x GPIO1
I2Cs   |2 (software implementation)
SPIs   |1
UARTs   |1 (console)
WiFi   |built in
Vcc   |2.5 - 3.6 V
Datasheet   |[Datasheet](https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf)
Technical Reference   |[Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf)
Board Schematic   |[Board Schematic](https://github.com/OLIMEX/ESP8266/blob/master/HARDWARE/MOD-WIFI-ESP8266-DEV/MOD-WiFi-ESP8266-DEV%20revision%20B1/MOD-WiFi-ESP8266-DEV_Rev_B1.pdf)

For detailed information about ESP8266, see [RIOT-OS on ESP8266 and ESP8285 boards](#group__cpu__esp8266_1esp8266_riot).

RIOT Pin MappingOlimex MOD-WIFI-ESP8266-DEV has 22 pin holes that can be soldered to PCB or used with a breadboard. The following figure shows the mapping of these pin holes to RIOT pins.

Olimex MOD-WIFI-ESP8266-DEV pin mapping
 Since GPIOs 6, 7, 8, and 11 are used for flash memory, they cannot be used for other purposes. Furthermore, when flash mode `qout` or `qio` is used for flash memory, GPIOs 9 and 10 are used for flash memory additionally and cannot be used for other purposes, see section Flash Modes in [RIOT-OS on ESP8266 and ESP8285 boards](#group__cpu__esp8266_1esp8266_riot).

Flashing the DeviceTo flash the RIOT image, the device must be connected to the host computer through an FTDI USB to Serial adapter/cable connected to the device's UART interface, GPIO1 (TxD) and GPIO3 (RxD) ,

Please make sure the FTDI USB to Serial adapter/cable uses 3.3 V.

Once the device is connected to the host computer, it must be booted into UART mode where the firmware can be downloaded via the UART interface. For this purpose, GPIO15 (MTD0) and GPIO0 must be pulled down and GPIO2 must be pulled up while the device is restarted using the RSTB pin. Since GPIO15 (MTDO) is pulled down and GPIO0 as well as GPIO2 are pulled up by solder bridges, only GPIO0 needs to be pulled down while the device is being reset with the RSTB pin.

To flash the RIOT image just type: 
```cpp
make flash BOARD=esp8266-olimex-mod ...
```

For detailed information about ESP8266 as well as configuring and compiling RIOT for ESP8266 boards, see [RIOT-OS on ESP8266 and ESP8285 boards](#group__cpu__esp8266_1esp8266_riot).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

