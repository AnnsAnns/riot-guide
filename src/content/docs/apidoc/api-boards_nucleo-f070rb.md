---
title: api-boards_nucleo-f070rb.md
description: api-boards_nucleo-f070rb.md
---
# group `boards_nucleo-f070rb` 

Support for the STM32 Nucleo-F070RB.

OverviewThe Nucleo-F070RB is a board from ST's Nucleo family supporting a ARM Cortex-M0 STM32F070RB microcontroller with 16KiB of RAM and 128KiB of Flash.

Hardware

PinoutPinout for the nucleo-f070rb

MCU
MCU   |STM32F070RB
--------- | ---------
Family   |ARM Cortex-M0
Vendor   |ST Microelectronics
RAM   |16KiB
Flash   |128KiB
Frequency   |up to 48MHz
FPU   |no
Timers   |11 (2x watchdog, 1 SysTick, 8x 16-bit)
ADCs   |1x 12-bit (16 channels)
UARTs   |4
SPIs   |2
I2Cs   |2
RTC   |1
USB   |1
Vcc   |2.4V - 3.6V
Datasheet   |[Datasheet](http://www.st.com/resource/en/datasheet/stm32f070rb.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/dm00091010.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/resource/en/programming_manual/dm00051352.pdf)
Board Manual   |[Board Manual](http://www.st.com/resource/en/user_manual/dm00105823.pdf)

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |STM32F070RB   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |yes (4 pins available)   |
|UART   |3 UARTs   |USART2 via STLink/USB or D0(RX)/D1(TX), USART1 on PA10(RX)/PA09(TX) and USART3 on PC11(RX)/PC10(TX)
|ADC   |6 pins   |
|I2C   |no   |
|SPI   |no   |
|USB   |no   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|3 16 bit timers   |

Flashing the deviceFlashing the Board Using OpenOCDThe ST Nucleo-F070RB board includes an on-board ST-LINK V2 programmer. The easiest way to program the board is to use OpenOCD. Once you have installed OpenOCD (look [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for installation instructions), you can flash the board simply by typing

```cpp
make BOARD=nucleo-f070rb flash
```
 and debug via GDB by simply typing 
```cpp
make BOARD=nucleo-f070rb debug
```

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f070rb PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

Supported ToolchainsFor using the ST Nucleo-F070RB board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

