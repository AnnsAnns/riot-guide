---
title: api-boards_generic_cc2538_cc2592_dk.md
description: api-boards_generic_cc2538_cc2592_dk.md
---
# group `boards_generic_cc2538_cc2592_dk` 

Support for the 3rd party CC2538-CC2592-DK board.

OverviewFront side of the CC2538-CC2592-DK boardBack side of the CC2538-CC2592-DK board

The generic CC2538-CC2592-DK board can obtained from various vendors in the typical [online](https://www.aliexpress.com/wholesale?SearchText=CC2538+CC2592+development+board)[shops](https://www.ebay.com/sch/i.html?_nkw=CC2538+CC2592+development+board). There are currently few options for readily available and affordable boards featuring a legacy CC2538 MCU; this is one of them.

The boards seem to be based on the schematics provided by [`@knowic`](https://github.com/knowic) via [the CC2538_CC2592_DK repo](https://github.com/knowic/CC2538_CC2592_DK).

Hardware
MCU   |CC2538SF53
--------- | ---------
Family   |ARM Cortex-M3
Vendor   |Texas Instruments
RAM   |32 KiB
Flash   |512 KiB
Frequency   |32 MHz
FPU   |no
Timers   |4
ADCs   |1x 12-bit (8 channels)
UARTs   |2
SPIs   |2
I2Cs   |1
Vcc   |3.6 V - 5 V (MCU powered @ 3.3 V via LDO)
Schematics   |[Board Schematics](https://github.com/knowic/CC2538_CC2592_DK/blob/main/CC2538_CC2592_DK_1V3.pdf)

Schematics

[Download schematics from author's repo](https://github.com/knowic/CC2538_CC2592_DK/blob/main/CC2538_CC2592_DK_1V3.pdf).

FlashingPrior to flashing the bootloader needs to be entered. For this, hold the "SELECT" button, press the "RESET" button, then release the "SELECT" button. Now run

```cpp
make BOARD=generic-cc2538-cc2592-dk flash
```

Flashing via J-Link would also be possible by passing `PROGRAMMER=jlink`, but requires attaching a J-Link programmer/debugger.

Accessing the terminalThe board features an CP2102 USB to UART bridge that is used for stdio by default. Just use

```cpp
make BOARD=generic-cc2538-cc2592-dk term
```

DebuggingAssuming an J-Link (e.g. the J-Link EDU Mini) debugger is connected, debugging is as simple as:

```cpp
make BOARD=generic-cc2538-cc2592-dk debug
```

By default OpenOCD is used for debugging. While debugging works fine with OpenOCD, flashing is only supported via the bootloader or `jlink`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

