---
title: api-boards_sodaq-autonomo.md
description: api-boards_sodaq-autonomo.md
---
# group `boards_sodaq-autonomo` 

Support for the SODAQ Autonomo board.

OverviewThe `SODAQ Autonomo` is a board by SODAQ featuring a ATSAMD21J18A. The SAMD21 is a ARM Cortex-M0+ micro-controller. It has 256Kb of flash memory and 32Kb of RAM.

The Autonomo is available from the SODAQ [shop](http://shop.sodaq.com/).

Hardware

MCU
MCU   |ATSAMD21J18A
--------- | ---------
Family   |ARM Cortex-M0+
Vendor   |Atmel
RAM   |32Kb
Flash   |256Kb
Frequency   |up to 48MHz
FPU   |no
Timers   |6 (1x 16-bit, 2x 24-bit, 3x 32-bit)
ADCs   |1x 12-bit (8 channels)
UARTs   |max 6 (SERCOMs shared with SPI and I2C)
SPIs   |max 6 (see UART)
I2Cs   |max 6 (see UART)
Vcc   |1.8V - 3.6V
Datasheet   |[Datasheet](http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf)

User Interface1 LED:

Device   |PIN
--------- | ---------
LED0   |PA19

Implementation StatusPlease refer to [this tracker](https://github.com/RIOT-OS/RIOT/issues/1646) to see which projects are work in progress and who is the contact person for this. Notice that the initial support for the Autonomo was based on samr21-xpro. At some point we will add a separate issue to track changes for this board.

Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |samd21   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |yes   |
|UART   |yes   |two UARTs by now
|I2C   |yes   |
|SPI   |yes   |
|ADC   |yes   |PA04 & PA05 disabled by default due to EDBG's use of them for UART, can be enabled from `periph_conf.h`
|USB   |no   |
|RTT   |yes   |
|RTC   |yes   |
|RNG   |no   |no HW module
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|yes   |

Features of the boardBesides the SAMD21 the board has the following features:

Feature   |Description
--------- | ---------
Compatibility   |Arduino M0 compatible
Size   |58.5 x 33.5 mm
Operating Voltage   |3.3V
Digital I/O Pins   |16, with 12 PWM, UART, SPI and TWI (I2C)
Analog Input Pins   |6, 12-bit ADC channels
Analog Output Pins   |10-bit DAC
External Interrupts   |Available on all pins except pin 4
DC Current per I/O pin   |7 mA
EEPROM   |Up to 16KB by emulation
Clock Speed   |48 MHz
Debug   |Serial Wire Interface
Communications   |Bee compatible slot for communication modules with software switchable power
Storage   |16Mbit Dataflash Module and Micro SD card holder
Power   |5V USB power and/or 3.7V LiPo battery
Power switch   |Software switchable power for connected devices up to 1A
Charging   |Solar charge controller, up to 500mA charge current
LED's   |Yellow charge LED and green LED on pin 13

Flashing the deviceUse `BOARD=sodaq-autonomo` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=sodaq-autonomo -C examples/hello-world flash
```

If the application crashes, automatic reflashing via USB, as explained above won't be possible. In this case, the board must be set in bootloader mode by double tapping the reset button before running the flash command.

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situation.

Supported ToolchainsTo build software for the autonomo board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

Known Issues / ProblemsStack sizesThe default stack sizes have not been tuned properly yet. If in doubt why your application crashes try increasing the default stack sizes and use `ps` to find out how much stack is being used. Tracked in [https://github.com/RIOT-OS/RIOT/issues/2228](https://github.com/RIOT-OS/RIOT/issues/2228)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

