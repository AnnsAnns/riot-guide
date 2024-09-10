---
title: api-boards_nucleo-f334r8.md
description: api-boards_nucleo-f334r8.md
---
# group `boards_nucleo-f334r8` 

Support for the STM32 Nucleo-F334R8.

OverviewThe Nucleo-F334R8 is a board from ST's Nucleo family supporting a ARM Cortex-M4 STM32F334R8 microcontroller with 12KiB of RAM and 64KiB or Flash.

Hardware

PinoutPinout for the nucleo-f334r8

MCU
MCU   |STM32F334R8
--------- | ---------
Family   |ARM Cortex-M4
Vendor   |ST Microelectronics
RAM   |12KiB
Flash   |64KiB
Frequency   |up to 72MHz
FPU   |yes
Timers   |12 (8x 16-bit, 1x 32-bit [TIM2], 1x Systick, 2x watchdog)
ADCs   |2x 12-bit (21 channels)
UARTs   |3
SPIs   |1
I2Cs   |1
RTC   |1
CAN   |1
Vcc   |2.0V - 3.6V
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32f334r8.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/dm00093941.pdf)
Programming Manual   |[Programming Manual](https://www.st.com/resource/en/programming_manual/dm00046982.pdf)
Board Manual   |[Board Manual](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/user_manual/DM00105823.pdf)

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |STM32F334R8   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |no   |
|UART   |one UART   |
|I2C   |no   |
|SPI   |one SPI   |
|USB   |no   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|one 32 timer   |

Flashing the deviceFlashing the Board Using OpenOCDThe ST Nucleo-F334R8 board includes an on-board ST-LINK V2 programmer. The easiest way to program the board is to use OpenOCD. Once you have installed OpenOCD (look [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for installation instructions), you can flash the board simply by typing

```cpp
BOARD=nucleo-f334r8 make flash
```
 and debug via GDB by simply typing 
```cpp
BOARD=nucleo-f334r8 make debug
```

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f334r8 PROGRAMMER=cpy2remed flash
```
This PROGRAMMER requires ST-LINK firmware 2.37.26 or newer. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

Accessing RIOT shellDefault RIOT shell access utilize VCP (Virtual COM Port) via USB interface, provided by integrated ST-LINK programmer. ST-LINK is connected to the microcontroller USART2.

The default baud rate is 115200.

Supported ToolchainsFor using the ST Nucleo-F334R8 board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

