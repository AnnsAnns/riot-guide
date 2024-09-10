---
title: api-boards_cc2650_launchpad.md
description: api-boards_cc2650_launchpad.md
---
# group `boards_cc2650_launchpad` 

Texas Instruments SimpleLink(TM) CC2650 Wireless MCU LaunchPad(TM) Kit.

OverviewThe [LAUNCHXL-CC2650](https://www.ti.com/tool/LAUNCHXL-CC2650) is a Texas Instrument's development kit for the CC2650 SoC MCU which combines a Cortex-M3 microcontroller alonside a dedicated Cortex-M0 to control the radio.

Hardware

MCU   |CC2650
--------- | ---------
Family   |ARM Cortex-M3
Vendor   |Texas Instruments
RAM   |20KiB
Flash   |128KiB
Frequency   |48MHz
FPU   |no
Timers   |4
ADCs   |1x 12-bit (channels)
UARTs   |1
SPIs   |2
I2Cs   |1
Vcc   |1.8V - 3.8V
Datasheet   |[Datasheet](https://www.ti.com/lit/ds/symlink/cc2650.pdf)
Reference Manual   |[Reference Manual](https://www.ti.com/lit/ug/swcu117i/swcu117i.pdf)

Board pinoutThe [CC2650 Quick Start Guide](https://www.ti.com/lit/ml/swru451/swru451.pdf) provides the default pinout for the board.

Flashing the DeviceFlashing RIOT is quite straight forward. The board comes with an XDS110 on-board debug probe that provides programming, flashing and debugging capabilities through the USB Micro-USB connector. Once either TI Uniflash or OpenOCD are installed just connect the board using the Micro-USB port to your computer and type:

```cpp
make flash BOARD=cc2650-launchpad
```

To use OpenOCD instead of uniflash we need to set the `PROGRAMMER` environment variable, this is to enable OpenOCD instead of Uniflash.

```cpp
export PROGRAMMER=openocd
```

Now we can just do `make flash` and `make debug`, this all using OpenOCD.

For detailed information about CC2650 MCUs as well as configuring, compiling RIOT and installation of flashing tools for CC2650 boards, see [RIOT-OS on CC26xx/CC13xx boards](#group__cpu__cc26xx__cc13xx_1cc26xx_cc13xx_riot).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

