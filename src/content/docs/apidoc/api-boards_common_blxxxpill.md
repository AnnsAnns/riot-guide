---
title: api-boards_common_blxxxpill.md
description: api-boards_common_blxxxpill.md
---
# group `boards_common_blxxxpill` 

Support for cheap stm32f103c8 based boards such as bluepill and blackpill.

OverviewThe bluepill and the blackpill are STM32F103 based board which can be bought for around 2€ on sides like AliExpress, eBay and others. Although the STM32F130C8 MCU nominally has 64 KiB flash, most [actually have 128 KiB flash](https://web.archive.org/web/20190428082446/http://wiki.stm32duino.com/index.php?title=Blue_Pill#128_KB_flash_on_C8_version).

There are also versions that only report to have 32 KiB, but actually have 64 KiB.

Pinoutpinoutpinoutpinoutpinout

MCU
MCU   |STM32F103C8 / STM32F103CB
--------- | ---------
Family   |ARM Cortex-M3
Vendor   |STMicroelectronics
RAM   |20 KiB
Flash   |32 KiB / 64 KiB / 128 KiB
Frequency   |up to 72 MHz
[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|3x 16-Bit
ADC   |2x 12-bit, 10 channels
UART   |3
SPI   |2
I2C   |2
CAN   |1
Vcc   |2.0 to 3.6 V
Datasheet   |[Datasheet](http://www.st.com/content/ccc/resource/technical/document/datasheet/33/d4/6f/1d/df/0b/4c/6d/CD00161566.pdf/files/CD00161566.pdf/jcr:content/translations/en.CD00161566.pdf)

Implementation Status
ID   |Supported
--------- | ---------
GPIO   |yes
PWM   |yes
UART   |yes
ADC   |yes
I2C   |yes
SPI   |yes
USB   |no
[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|yes
CAN   |no

FlashingTo program and debug the board you need a SWD capable debugger. The easiest way is using [OpenOCD](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD). By default RIOT uses the hardware reset signal and connects to the chip under reset for flashing. This is required to reliably connect to the device even when the MCU is in a low power mode. Therefore not only SWDIO and SWCLK, but also the RST pin of your debugger need to be connected to the board. Once the device is connected to the debugger and OpenOCD is installed, you can flash the device with: $ make BOARD=bluepill-stm32f103c8 flash
 Or for the blackpill with: $ make BOARD=blackpill-stm32f103c8 flash

Additional FlashTypically, the STM32F103C8 does actually have 128 KiB flash. To make use of this, just flash with $ make BOARD=bluepill-stm32f103cb flash
 Or for the blackpill with: $ make BOARD=blackpill-stm32f103cb flash
 This sets the `CPU_MODEL` make variable to `stm32f103cb`, the default value is `stm32f103c8`. These two CPU models basically only have one major difference, the former has 128 KiB flash while the latter has 64 KiB.

In order to flash the *cb variant onto *c8 hardware requires OpenOCD in version 0.11 or later.

Connecting via SerialThe default UART port used is UART1, which uses pins A9 (TX) and A10 (RX). To use it, configure your UART to operate at a symbol rate of 115200 baud, 1 stop bit and no parity (8N1).

Using PWMPWM is available at pins A8 to A11.

Known IssuesUSB connectorThe Micro-USB port is sometimes not soldered properly. Also, it is usually equipped with an incorrect resistor. [This can be fixed multiple ways](https://web.archive.org/web/20190428082446/http://wiki.stm32duino.com/index.php?title=Blue_Pill#Hardware_installation).

Flashing failsPlease check whether the debugger is properly connected, including the hardware reset signal pin.

Pin on Debugger   |Pin on Blue Pill
--------- | ---------
SWDIO   |DIO
SWCLK   |DCLK
NRST   |R
GND   |GND
VDD (3.3V) (*)   |3.3
Target VCC (**)   |3.3

* (*) Most debuggers have a 3.3V supply voltage to power the board. You can alternatively power the board using the TTL-Adapter or via Micro-USB.

* (**) Some debuggers monitor the voltage of the target MCU. Their target VCC pin needs to be connected to one of the 3.3V pins of the boards.

Most very cheap SWD debuggers (especially those imported for about 2€ from far east) do not have a Target VCC pin; they will still work just fine. On these cheap debuggers the pin to send the reset signal to the board is often either not present or defunct. You can work around this by pressing the reset button when OpenOCD wants to connect to the Blue Pill. Hit the reset button again after flashing in order to boot the newly flashed image.

Where to buyThe board is sold under different names. On some sites it is called `bluepill` or `blue pill`. On others you might find it by searching for `stm32f103c8` or `stm32f103c8t6`.

Try [eBay](https://www.ebay.com/sch/i.html?_nkw=stm32f103c8) or [AliExpress](https://www.aliexpress.com/wholesale?SearchText=STM32F103C8T6).

Further reading

* [Blue Pill Wiki](https://web.archive.org/web/20190428082446/http://wiki.stm32duino.com/index.php?title=Blue_Pill)

* [Maple Mini Wiki](https://web.archive.org/web/20190428082446/http://wiki.stm32duino.com/index.php?title=Maple_Mini#Clones)

* [STM32F103C8 Datasheet](http://www.st.com/content/st_com/en/products/microcontrollers/stm32-32-bit-arm-cortex-mcus/stm32-mainstream-mcus/stm32f1-series/stm32f103/stm32f103c8.html)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

