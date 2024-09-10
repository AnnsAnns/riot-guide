---
title: api-boards_nucleo-f410rb.md
description: api-boards_nucleo-f410rb.md
---
# group `boards_nucleo-f410rb` 

Support for the STM32 Nucleo-F410RB.

OverviewThe Nucleo-F410RB is a board from ST's Nucleo family supporting a ARM Cortex-M4 STM32F410RB microcontroller with 32KiB of RAM and 128KiB of Flash.

Hardware

PinoutPinout for the nucleo-f410rb

MCU
MCU   |STM32F410RBT
--------- | ---------
Family   |ARM Cortex-M4
Vendor   |ST Microelectronics
RAM   |32KiB
Flash   |128KiB
Frequency   |up to 100MHz
FPU   |yes
Timers   |9 (2x watchdog, 1x SysTick, 4x 16-bit, 1x 32-bit [TIM2] and 1 low power timer)
ADCs   |1x 12-bit (16 channels)
UARTs   |3
SPIs   |3
I2Cs   |3
RTC   |1
Vcc   |1.8V - 3.6V
Datasheet   |[Datasheet](http://www.st.com/resource/en/datasheet/stm32f410rb.pdf)
Reference Manual   |[Reference Manual](http://www.st.com/resource/en/reference_manual/dm00180366.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/resource/en/programming_manual/dm00046982.pdf)
Board Manual   |[Board Manual](http://www.st.com/resource/en/user_manual/dm00105823.pdf)

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |STM32F410RB   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |yes (no pin configured)   |
|UART   |2 UARTs   |USART2 via STLink/USB or D0(RX)/D1(TX) and USART1 on PA10(RX)/PA9(TX)
|I2C   |1 I2C   |
|SPI   |1 SPI   |
|USB   |no   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|2 32 bit timers   |

Flashing the deviceFlashing the Board Using OpenOCDThe ST Nucleo-F410RB board includes an on-board ST-LINK V2 programmer. The easiest way to program the board is to use OpenOCD. You need OpenOCD in version 0.10 minimum. Once you have installed OpenOCD (look [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for installation instructions), you can flash the board simply by typing

```cpp
make BOARD=nucleo-f410rb flash
```
 and debug via GDB by simply typing 
```cpp
make BOARD=nucleo-f410rb debug
```

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f410rb PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

Supported ToolchainsFor using the ST Nucleo-F410RB board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

