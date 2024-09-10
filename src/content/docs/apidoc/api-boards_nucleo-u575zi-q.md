---
title: api-boards_nucleo-u575zi-q.md
description: api-boards_nucleo-u575zi-q.md
---
# group `boards_nucleo-u575zi-q` 

Support for the STM32 Nucleo-U575ZI-Q.

OverviewThe Nucleo-U575ZI-Q is a board from ST's Nucleo family supporting the ARM Cortex-M33 STM32U575ZIT6Q ultra-low-power microcontroller with TrustZone, 768KiB of RAM and 2MiB of Flash.

Hardware

MCU
MCU   |STM32U575ZIT6Q
--------- | ---------
Family   |ARM Cortex-M33
Vendor   |ST Microelectronics
RAM   |786KiB
Flash   |2MiB
Frequency   |up tp 160MHz
FPU   |yes
TrustZone   |yes
Timers   |17
UARTs   |6 (3xUSART, 2xUART, 1xLPUART)
I2Cs   |4
SPIs   |3
CAN   |1
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32u575zi.pdf)
Programming Manual   |[Programming Manual](https://www.st.com/resource/en/programming_manual/pm0264-stm32-cortexm33-mcus-programming-manual-stmicroelectronics.pdf)
Board Manual   |[Board Manual](https://www.st.com/resource/en/user_manual/um2861-stm32u5-nucleo144-board-mb1549-stmicroelectronics.pdf)

Flashing the deviceFlashing the Board Using OpenOCDThe ST Nucleo-U575ZI-Q board includes an on-board ST-LINK programmer and can be flashed using OpenOCD.

Once OpenOCD is installed, you can flash the board simply by typing

```cpp
make BOARD=nucleo-u575zi-q flash
```

and debug via GDB by simply typing 
```cpp
make BOARD=nucleo-u575zi-q debug
```

Accessing RIOT shellDefault RIOT shell access utilize VCP (Virtual COM Port) via USB interface, provided by integrated ST-LINK programmer. ST-LINK is connected to the microcontroller USART1.

The default baud rate is 115 200.

If a physical connection to USART1 is needed, connect UART interface to pins PA9 (USART1 TX) and PA10 (USART1 RX).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

