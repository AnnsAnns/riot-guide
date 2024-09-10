---
title: api-boards_nucleo-f030r8.md
description: api-boards_nucleo-f030r8.md
---
# group `boards_nucleo-f030r8` 

Support for the STM32 Nucleo-F030R8.

OverviewThe Nucleo-F030R8 is a board from ST's Nucleo family supporting a ARM Cortex-M0 STM32F030R8 microcontroller with 8KiB of RAM and 64KiB of Flash.

Hardware

PinoutPinout for the nucleo-f030r8

MCU
MCU   |STM32F030R8
--------- | ---------
Family   |ARM Cortex-M0
Vendor   |ST Microelectronics
RAM   |8KiB
Flash   |64KiB
Frequency   |up to 48MHz
FPU   |no
Timers   |10 (2x watchdog, 1 SysTick, 7x 16-bit)
ADCs   |1x 12-bit
UARTs   |2
SPIs   |2
I2Cs   |2
RTC   |1
Vcc   |2.4V - 3.6V
Datasheet   |[Datasheet](http://www.st.com/resource/en/datasheet/stm32f030r8.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/dm00091010.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/resource/en/programming_manual/dm00051352.pdf)
Board Manual   |[Board Manual](http://www.st.com/resource/en/user_manual/dm00105823.pdf)

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |STM32F030R8   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |yes (4 pins available)   |
|UART   |2 UARTs   |USART2 via STLink/USB or D0(RX)/D1(TX) and USART1 on PA10(RX)/PA09(TX)
|ADC   |6 pins   |
|I2C   |no   |
|SPI   |no   |
|USB   |no   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|3 16 bit timers   |

Flashing the deviceFlashing the Board Using OpenOCDThe ST Nucleo-F030R8 board includes an on-board ST-LINK V2 programmer. The easiest way to program the board is to use OpenOCD. Once you have installed OpenOCD (look [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for installation instructions), you can flash the board simply by typing

```cpp
make BOARD=nucleo-f030r8 flash
```
 and debug via GDB by simply typing 
```cpp
make BOARD=nucleo-f030r8 debug
```

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f030r8 PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

Supported ToolchainsFor using the ST Nucleo-F030R8 board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

