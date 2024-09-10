---
title: api-boards_arduino-zero.md
description: api-boards_arduino-zero.md
---
# group `boards_arduino-zero` 

Support for the Arduino Zero board.

OverviewThe `Arduino Zero` is a board by Arduino/Genuino featuring a ATSAMD21G18A. The SAMD21 is a ARM Cortex-M0+ micro-controller. It has 256KiB of flash memory and 32KiB of RAM.

This board is available [here](https://store.arduino.cc/product/GBX00003).

Hardware

MCU
MCU   |ATSAMD21G18A
--------- | ---------
Family   |ARM Cortex-M0+
Vendor   |Atmel
RAM   |32KiB
Flash   |256KiB
Frequency   |up to 48MHz
FPU   |no
Timers   |6 (1x 16-bit, 2x 24-bit, 3x 32-bit)
ADCs   |6x 12-bit channels)
UARTs   |2
SPIs   |max 6 (see UART)
I2Cs   |max 6 (see UART)
Vcc   |1.8V - 3.6V
Datasheet   |[Datasheet](http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf)

User Interface1 LED:

Device   |PIN
--------- | ---------
LED0   |PA17

Implementation StatusNotice that the initial support for the Arduino Zero was based on samr21-xpro and Sodaq Autonomo.

Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |samd21   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |to be tested   |
|UART   |yes   |two UARTs
|I2C   |yes   |
|SPI   |yes   |
|ADC   |not implemented   |
|USB   |no   |
|RTT   |yes   |
|RTC   |yes   |
|RNG   |no   |no HW module
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|yes   |

Detailed information on the board can be found on [the official web page](https://www.arduino.cc/en/Main/ArduinoBoardZero).

Flashing the deviceThe standard method for flashing RIOT to the Arduino Zero is using OpenOCD. For this to work properly, **you have to make sure to use a very recent version of OpenOCD**. Arduino-IDE comes with openocd v0.9.0 which is known to work. Also Ubuntu 16.04 has openocd v0.9.0.

Refer to [https://github.com/RIOT-OS/RIOT/wiki/OpenOCD](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for building OpenOCD and make sure "cmsis-dap" and "hidapi-libusb" are enabled.

Supported ToolchainsTo build software for the Arduino Zero board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

Known Issues / ProblemsStack sizesThe default stack sizes have not been tuned properly yet. If in doubt why your application crashes try increasing the default stack sizes and use `ps` to find out how much stack is being used. Tracked in [https://github.com/RIOT-OS/RIOT/issues/2228](https://github.com/RIOT-OS/RIOT/issues/2228)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

