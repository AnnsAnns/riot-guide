---
title: api-boards_cc1312_launchpad.md
description: api-boards_cc1312_launchpad.md
---
# group `boards_cc1312_launchpad` 

Texas Instruments SimpleLink(TM) CC1312 Wireless MCU LaunchPad(TM) Kit.

OverviewThe [LAUNCHXL-CC1312R1](http://www.ti.com/tool/LAUNCHXL-CC1312R1) is a Texas Instrument's development kit for the CC1312R1 SoC MCU which combines a Cortex-M4F microcontroller alongside a dedicated Cortex-M0 to control radio.

Hardware

MCU   |CC1312R1
--------- | ---------
Family   |ARM Cortex-M4F
Vendor   |Texas Instruments
RAM   |80KiB
Flash   |352KiB
Frequency   |48MHz
FPU   |yes
Timers   |4
ADCs   |1x 12-bit (channels)
UARTs   |2
SPIs   |2
I2Cs   |1
Vcc   |1.8V - 3.8V
Datasheet   |[Datasheet](http://www.ti.com/lit/ds/symlink/cc1312r.pdf) (pdf file)
Reference Manual   |[Reference Manual](http://www.ti.com/lit/ug/swcu185d/swcu185d.pdf)

Board pinoutThe [LAUNXHL-CC1312R Quick Start Guide](http://www.ti.com/lit/ml/swru535c/swru535c.pdf) provides the default pinout for the board.

Flashing the DeviceFlashing RIOT is quite straight forward. The board comes with an XDS110 on-board debug probe that provides programming, flashing and debugging capabilities through the USB Micro-USB connector. Once either TI Uniflash or OpenOCD are installed just connect the board using the Micro-USB port to your computer and type:

```cpp
make flash BOARD=cc1312-launchpad
```

To use OpenOCD instead of uniflash we need to set the `PROGRAMMER` environment variable, this is to enable OpenOCD instead of Uniflash.

```cpp
export PROGRAMMER=openocd
```

Now we can just do `make flash` and `make debug`, this all using OpenOCD.

For detailed information about CC1312 MCUs as well as configuring, compiling RIOT and installation of flashing tools for CC1312 boards, see [RIOT-OS on CC26xx/CC13xx boards](#group__cpu__cc26xx__cc13xx_1cc26xx_cc13xx_riot).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

