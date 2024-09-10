---
title: api-boards_seeduino_arch-pro.md
description: api-boards_seeduino_arch-pro.md
---
# group `boards_seeduino_arch-pro` 

Support for the Seeeduino Arch Pro board.

OverviewThe Seeeduino Arch Pro is an 32-bit ARM Cortex M3 microprocessor development board, featuring an Arduino-compatible shield interface and a RJ-45 network interface.

Hardware

MCU
MCU   |LPC1768
--------- | ---------
Family   |ARM Cortex-M3
Vendor   |NXP
RAM   |64KB
Flash   |512KB
EEPROM   |no
Frequency   |up to 100 MHz
FPU   |no
DMA   |8 channels
Timers   |4 x 32-bit
ADCs   |12-bit ADC
UARTs   |3x USART
SPIs   |2x USART
I2Cs   |2x
Vcc   |2.4V - 3.6V
Datasheet   |[Datasheet](https://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf)
Manual   |[Manual](http://www.nxp.com/documents/user_manual/UM10360.pdf)
Board Manual   |[Board Manual](http://www.seeedstudio.com/wiki/Arch_Pro)
Board Schematic   |[Board Schematic](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/res/Arch_Pro_V1.0_Schematic.pdf)

PinoutUser interface
Peripheral   |Mapped to   |Hardware   |Pin   |Comments
--------- | --------- | --------- | --------- | ---------
LED   |LED0   |LED1   |P1_18   |Green LED
|LED1   |LED2   |P1_20   |Red LED
|LED2   |LED3   |P1_21   |Blue LED
|LED3   |LED4   |P1_23   |Yellow LED

Board configurationVirtual serial portThe first UART device is mapped to stdout.

Note: the board controller always configures the virtual serial port at 115200 baud with 8 bits, no parity and one stop bit. This also means that it expects data from the MCU with the same settings.

Note: to use the virtual serial port, ensure you have the latest board controller firmware installed.

Flashing the deviceTo flash, the [OpenOCD Software](http://openocd.org/) is required.

Flashing is supported by RIOT-OS by the command below:

```cpp
make flash
```

To run the GDB debugger, use the command:

```cpp
make debug
```

Or, to connect with your own debugger:

```cpp
make debug-server
```

Image checksumLPC ARM Cortext MCUs need a [flash image checksum](https://community.nxp.com/thread/389046). When running `make flash`, this checksum is automatically generated and inserted into the firmware image right before flashing.

It depends on the [lpc_checksum](https://pypi.python.org/pypi/lpc_checksum) command-line utility, which can be installed using using `pip install lpc_checksum` or `pip3 install lpc_checksum`. After installing this utility, it should be available on your command-line.

Supported toolchainsFor using the Seeeduino Arch Pro development kit we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

License informationImage: taken from Seeeduino website.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

