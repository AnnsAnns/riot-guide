---
title: api-boards_nucleo-f439zi.md
description: api-boards_nucleo-f439zi.md
---
# group `boards_nucleo-f439zi` 

Support for the STM32 Nucleo-F439ZI.

OverviewThe Nucleo-F439ZI is a board from ST's Nucleo family supporting ARM Cortex-M4 STM32F439ZI microcontroller with, 256KiB of RAM and 2MiB of Flash.

PinoutPinout for the nucleo-f439zi (from STM board manual)

MCU
MCU   |STM32F439ZI
--------- | ---------
Family   |ARM Cortex-M4
Vendor   |ST Microelectronics
RAM   |256KiB
Flash   |2MiB
Frequency   |up to 180 MHz
FPU   |yes
Ethernet   |10/100 Mbps
Timers   |17 (2x watchdog, 1 SysTick, 2x 32bit, 12x 16bit)
ADCs   |3x 12 bit (up to 24 channels)
UARTs   |4
I2Cs   |3
SPIs   |6
CAN   |2
RTC   |1
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32f439zi.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/rm0090-stm32f405415-stm32f407417-stm32f427437-and-stm32f429439-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)
Programming Manual   |[Programming Manual](https://www.st.com/resource/en/programming_manual/pm0214-stm32-cortexm4-mcus-and-mpus-programming-manual-stmicroelectronics.pdf)
Board Manual   |[Board Manual](https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo-144-boards-stmicroelectronics.pdf)

Flashing the deviceFlashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f439zi PROGRAMMER=cpy2remed flash
```
This PROGRAMMER requires ST-LINK firmware 2.37.26 or newer. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

Accessing RIOT shellDefault RIOT shell access utilize VCP (Virtual COM Port) via USB interface, provided by integrated ST-LINK programmer. ST-LINK is connected to the microcontroller USART3.

The default baud rate is 115200.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

