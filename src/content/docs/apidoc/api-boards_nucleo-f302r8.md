---
title: api-boards_nucleo-f302r8.md
description: api-boards_nucleo-f302r8.md
---
# group `boards_nucleo-f302r8` 

Support for the STM32 Nucleo-F302R8.

OverviewThe [Nucleo-F302R8](http://www.st.com/en/evaluation-tools/nucleo-f302r8.html) is a board from ST's Nucleo family supporting a ARM Cortex-M4 [STM32F302R8](http://www.st.com/en/microcontrollers/stm32f302r8.html) microcontroller with 16KiB of RAM and 64KiB of Flash.

Hardware

PinoutPinout for the nucleo-f302r8

MCU
MCU   |STM32F302R8
--------- | ---------
Family   |ARM Cortex-M4
Vendor   |ST Microelectronics
RAM   |16KiB
Flash   |64KiB
Frequency   |up to 72MHz
FPU   |yes
Timers   |9 (5x 16-bit, 1x 32-bit [TIM2], 2x watchdog, 1x systick)
ADCs   |1 with selectable resolution (6,8,10,12-bit)
UARTs   |3
SPIs   |2
I2Cs   |3
RTC   |1
CAN   |1
USB   |1
Vcc   |2.0V - 3.6V
Datasheet   |[Datasheet](http://www.st.com/resource/en/datasheet/stm32f302r8.pdf)
Reference Manual   |[Reference Manual](http://www.st.com/resource/en/reference_manual/dm00094349.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/resource/en/programming_manual/dm00046982.pdf)
Board Manual   |[Board Manual](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/user_manual/DM00105823.pdf)

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |STM32F302R8   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |one PWM (D5)   |
|UART   |three UART   |
|I2C   |no   |
|SPI   |one SPI (SPI2)   |
|USB   |no   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|one 32 timer (TIM2)   |

Flashing the deviceFlashing the Board Using OpenOCDThe ST Nucleo-F302R8 board includes an on-board ST-LINK V2-1 programmer. The easiest way to program the board is to use OpenOCD. Once you have installed OpenOCD (look [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for installation instructions), you can flash the board simply by typing

```cpp
make BOARD=nucleo-f302r8 flash
```
 and debug via GDB by simply typing 
```cpp
make BOARD=nucleo-f302r8 debug
```

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f302r8 PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

Supported ToolchainsFor using the ST Nucleo-F302R8 board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

