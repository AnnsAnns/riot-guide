---
title: api-boards_weact-f401cc.md
description: api-boards_weact-f401cc.md
---
# group `boards_weact-f401cc` 

Support for the WeAct-F401CC Board.

OverviewWeAct-F401CC is a board with the same form-factor as the blue/blackpill, but with an STM32F401CCU6 and a USB-C connector.

It is available on sites like AliExpress for less than 3€.

Hardware

MCU
MCU   |STM32F401CCU6
--------- | ---------
Family   |ARM Cortex-M4F
Vendor   |ST Microelectronics
RAM   |64KiB
Flash   |256KiB
Frequency   |up to 84MHz
FPU   |yes
Timers   |8 (2x watchdog, 1 SysTick, 6x 16-bit)
ADCs   |1x 12-bit
UARTs   |3
SPIs   |4
I2Cs   |3
RTC   |1
Vcc   |2.0V - 3.6V
Datasheet   |[Datasheet](https://www.st.com/resource/en/datasheet/stm32f401cc.pdf)
Reference Manual   |[Reference Manual](https://www.st.com/content/ccc/resource/technical/document/reference_manual/9b/53/39/1c/f7/01/4a/79/DM00119316.pdf/files/DM00119316.pdf/jcr:content/translations/en.DM00119316.pdf)

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |STM32F401CC   |partly   |Energy saving modes not fully utilized
Low-level driver   |GPIO   |yes   |
|PWM   |yes (4 pins available))   |
|UART   |2 UARTs   |USART2 via PA3(RX)/PA2(TX), USART1 on PA10(RX)/PA9(TX)
|I2C   |1 I2C   |
|SPI   |1 SPI   |
|USB   |yes   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|1 32 bit timer (TIM5)   |

Flashing the deviceThe device comes with a bootloader that allows flashing via `dfu-util`.

If RIOT is already running on the board, you can upload your RIOT-firmware by typing

```cpp
make BOARD=weact-f401cc flash
```

RIOT will make sure to enter the bootloader automatically.

If RIOT crashed or you have the plain board with the stock firmware, you have to enter the bootloader manually.

There are two buttons on the board labeled `BOOT0` and `NRST`.

* Hold down `BOOT0`

* Shortly press `NRST` to reset the CPU while keeping `BOOT0` held down

The board will now show up as `0483:df11` - `STM32 BOOTLOADER` and will accept firmware using the DFU protocol.

Note:* You need to have write permissions to the device. On Linux you could add yourself to the `plugdev` group and store the following as `/etc/udev/rules.d/99-weact-f401cc.rules`:

```cpp
SUBSYSTEMS=="usb", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="df11", GROUP="plugdev", MODE="660"
```

UARTstdio is provided through USB CDC ACM so the board can be used without any extra hardware, save for a USB-C cable.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

