---
title: api-boards_stm32f723e-disco.md
description: api-boards_stm32f723e-disco.md
---
# group `boards_stm32f723e-disco` 

Support for the STM32F723E-DISCO board.

OverviewThe ST [STM32F723E-DISCO](https://www.st.com/en/evaluation-tools/32f723ediscovery.html) is an evaluation board supporting a ARM Cortex-M7 STM32F723IE microcontroller with 256KB of RAM and 523KB of ROM Flash.

Flashing the deviceThe STM32F723E-DISCO board includes an on-board ST-LINK programmer and can be flashed using OpenOCD.

To flash this board, just use the following command:

```cpp
make BOARD=stm32f723e-disco flash -C examples/hello-world
```

STDIOSTDIO is available via the ST-Link programmer.

Use the `term` target to open a terminal: make BOARD=stm32f723e-disco -C examples/hello-world term

USB OTG Peripheral Device DriverBy default, the USB OTG FS port is used. To use the USB OTG HS port with the internal UTMI+ HS PHY, enable the module `periph_usbdev_hs_utmi`: make BOARD=stm32f723e-disco USEMODULE=periph_usbdev_hs_utmi -C examples/usbus_minimal

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

