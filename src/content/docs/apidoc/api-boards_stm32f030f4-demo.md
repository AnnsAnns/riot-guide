---
title: api-boards_stm32f030f4-demo.md
description: api-boards_stm32f030f4-demo.md
---
# group `boards_stm32f030f4-demo` 

Support for the STM32F030F4 Demo Board.

OverviewThe STM32F030F4 Demo Board is a very cheap breakout board for the STM32F030F4 MCU.

Hardware

MCU
MCU   |STM32F030R4
--------- | ---------
Family   |ARM Cortex-M0
Vendor   |ST Microelectronics
RAM   |4Kb
Flash   |16Kb
Frequency   |up to 48MHz
FPU   |no
Timers   |8 (2x watchdog, 1 SysTick, 5x 16-bit)
ADCs   |1x 12-bit
UARTs   |6
SPIs   |1
I2Cs   |1
RTC   |1
Vcc   |2.0V - 3.6V
Datasheet   |[Datasheet](https://www.st.com/en/microcontrollers-microprocessors/stm32f030f4.html)
Reference Manual   |[Reference Manual](https://www.st.com/resource/en/datasheet/stm32f030f4.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/resource/en/programming_manual/dm00051352.pdf)

Flashing the deviceThe STM32F030F4 Demo Board board does not include a programmer. You have to connect a separate ST-Link programmer to the (SW)DIO, (SW)CLK, GND and NRST pins on the board.

If you want a serial terminal, you have to connect a separate USB-Serial adapter to the RX and TX pins on the board.

The easiest way to program the board is to use OpenOCD. Once you have installed OpenOCD (look [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD) for installation instructions), you can flash the board simply by typing

```cpp
make BOARD=stm32f030f4-demo flash
```
 and debug via GDB by simply typing 
```cpp
make BOARD=stm32f030f4-demo debug
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

