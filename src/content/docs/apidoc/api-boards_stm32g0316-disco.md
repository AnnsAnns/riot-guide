---
title: api-boards_stm32g0316-disco.md
description: api-boards_stm32g0316-disco.md
---
# group `boards_stm32g0316-disco` 

Support for the STM32G0316-DISCO board.

General informationThe ST [STM32G0316-DISCO](https://www.st.com/en/evaluation-tools/stm32g0316-disco.html) is an evaluation board supporting a ARM Cortex-M0 STM32G031J6 microcontroller with 8KB of RAM and 32KB of ROM Flash.

PinoutIn an SO8 package, this MCU uses multi-bonding to run multiple ports to the same pins. See [this application note as reference](https://www.st.com/resource/en/application_note/dm00443870-getting-started-with-stm32g0-series-hardware-development-stmicroelectronics.pdf). This means the responsibility is on the firmware configurer to take special care when configured IO, ensuring that ports are not conflicting on each pin.

Flash the boardThe STM32G0316-DISCO board includes an on-board ST-LINK programmer and can be flashed using OpenOCD.

To flash this board, just use the following command:

```cpp
make BOARD=stm32g0316-disco flash -C examples/hello-world
```

UART Terminal InteractionDue to the limited number of pins, to get stdio UART traffic, use a USB->UART adapter like the CP2104 from Adafruit ([http://adafru.it/954](http://adafru.it/954)). Connect the adapter's TX line to the MCU RX pin (PB6, Pin 8) and the adapter's RX line to the MCU's TX pin - (PB7, pin 1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

