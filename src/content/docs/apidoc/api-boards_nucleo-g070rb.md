---
title: api-boards_nucleo-g070rb.md
description: api-boards_nucleo-g070rb.md
---
# group `boards_nucleo-g070rb` 

Support for the STM32 Nucleo-G070RB.

OverviewThe Nucleo-G070RB is a board from ST's Nucleo family supporting a ARM Cortex-M0+ STM32G070RB microcontroller with 36KiB of RAM and 128KiB of Flash.

PinoutPinout for the nucleo-g070rg (from STM board manual)

MCU
MCU   |STM32G070RB
--------- | ---------
Family   |ARM Cortex-M0+
Vendor   |ST Microelectronics
RAM   |36KiB
Flash   |128KiB
Frequency   |up to 64 MHz
Timers   |11 (2x watchdog, 1 SysTick, 8x 16-bit)
ADCs   |1x 12 bit (up to 16 channels)
UARTs   |4 USARTs
I2Cs   |2
SPIs   |2
RTC   |1
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32g070rb.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/reference_manual/rm0454-stm32g0x0-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)
Programming Manual   |[Programming Manual](https://www.st.com/resource/en/programming_manual/pm0223-stm32-cortexm0-mcus-programming-manual-stmicroelectronics.pdf)
Board Manual   |[Board Manual](https://www.st.com/resource/en/user_manual/um2324-stm32-nucleo64-boards-mb1360-stmicroelectronics.pdf)

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command:

```cpp
make BOARD=nucleo-g070rb PROGRAMMER=cpy2remed flash
```

This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

