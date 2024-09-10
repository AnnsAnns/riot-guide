---
title: api-boards_nucleo-c031c6.md
description: api-boards_nucleo-c031c6.md
---
# group `boards_nucleo-c031c6` 

Support for the STM32 Nucleo-C031C6.

OverviewThe Nucleo-C031C6 is a board from ST's Nucleo family supporting a ARM Cortex-M0+ STM32C031C6 microcontroller with 12KiB of RAM and 32KiB of Flash.

PinoutPinout for the Nucleo-C031C6 (from STM board manual)

MCU
MCU   |STM32C031C6
--------- | ---------
Family   |ARM Cortex-M0+
Vendor   |ST Microelectronics
RAM   |12KiB
Flash   |32KiB
Frequency   |up to 48MHz
FPU   |no
Timers   |12 (2x watchdog, 1 SysTick, 5x 16-bit)
ADCs   |1x 12-bit (up to 19 channels)
UARTs   |2
SPIs   |1
I2Cs   |1
RTC   |1
Vcc   |2.0V - 3.6V
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32c031c6.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/rm0490-stm32c0x1-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)
Programming Manual   |[Programming Manual](https://www.st.com/resource/en/programming_manual/pm0223-stm32-cortexm0-mcus-programming-manual-stmicroelectronics.pdf)
Board Manual   |[Board Manual](https://www.st.com/resource/en/user_manual/um2953-stm32-nucleo64-board-mb1717-stmicroelectronics.pdf)

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command:

```cpp
make BOARD=nucleo-c031c6 PROGRAMMER=cpy2remed flash
```

This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

