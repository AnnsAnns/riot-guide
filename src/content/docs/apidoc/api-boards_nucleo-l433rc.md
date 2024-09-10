---
title: api-boards_nucleo-l433rc.md
description: api-boards_nucleo-l433rc.md
---
# group `boards_nucleo-l433rc` 

Support for the STM32 Nucleo-L433RC.

OverviewThe Nucleo-L433RC is a board from ST's Nucleo family supporting a ARM Cortex-M4 STM32L433RC microcontroller with 64KiB of RAM and 256KiB of Flash.

Hardware

MCU
MCU   |STM32L476RG
--------- | ---------
Family   |ARM Cortex-M4
Vendor   |ST Microelectronics
RAM   |64KiB
Flash   |256KiB
Frequency   |up to 80MHz
FPU   |yes
Timers   |11 (2x watchdog, 1 SysTick, 7x 16-bit, 1x 32-bit)
ADCs   |1x 12-bit
UARTs   |5 (four USARTs and one Low-Power UART)
SPIs   |3
I2Cs   |3
RTC   |1
CAN   |1
Vcc   |1.71 V - 3.6V
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32l433rc.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/rm0394-stm32l41xxx42xxx43xxx44xxx45xxx46xxx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/content/ccc/resource/technical/document/programming_manual/6c/3a/cb/e7/e4/ea/44/9b/DM00046982.pdf/files/DM00046982.pdf/jcr:content/translations/en.DM00046982.pdf)
Board Manual   |[Board Manual](http://www.st.com/resource/en/user_manual/um2206-stm32-nucleo64p-boards-mb1319-stmicroelectronics.pdf)

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-l433rc PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

