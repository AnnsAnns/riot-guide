---
title: api-boards_mega-xplained.md
description: api-boards_mega-xplained.md
---
# group `boards_mega-xplained` 

Support for the Mega1284P-Xplained board.

General informationThe [Mega1284P-Xplained](http://www.microchip.com/DevelopmentTools/ProductDetails.aspx?PartNO=atmega1284p-xpld) is an evaluation kit by Atmel (now Microchip) for their ATmega1284P microcontroller.

Flash the boardYou can change the fuses and flash the board using an SPI ISP programmer such as the Bus Pirate, or using a JTAG programmer such as the Atmel-ICE with a JTAG adapter.

If using the Atmel-ICE as a JTAG programmer, connect the adapter with the square pin on the adapter connecting with the square pin on the board.

* First, make sure the default fuse settings are correct.

WARNING: setting the fuses incorrectly can brick your board!

If using the Buspirate: 
```cpp
avrdude -p m1284p -c buspirate -P /dev/ttyUSB0 -U efuse:w:0xFF:m
avrdude -p m1284p -c buspirate -P /dev/ttyUSB0 -U hfuse:w:0x99:m
avrdude -p m1284p -c buspirate -P /dev/ttyUSB0 -U lfuse:w:0xE2:m
```

If using the Atmel-ICE: 
```cpp
avrdude -p m1284p -c atmelice -U efuse:w:0xFF:m
avrdude -p m1284p -c atmelice -U hfuse:w:0x99:m
avrdude -p m1284p -c atmelice -U lfuse:w:0xE2:m
```

* After the fuses are set, flash the application.

If using the Buspirate: 
```cpp
BOARD=mega-xplained make -C examples/hello-world flash
```

If using the Atmel-ICE: 
```cpp
BOARD=mega-xplained PROGRAMMER=atmelice make -C examples/hello-world flash
```

Accessing STDIO via UARTSTDIO can be accessed through the USB connector. The on-board UART-USB adapter is not affected by flashing. It shows up as /dev/ttyACM0 on Linux. It will be used automatically with `make term`: 
```cpp
BOARD=mega-xplained make -C examples/hello-world term
```

Pin Change InterruptsMore pins can be used for hardware interrupts using the Pin Change Interrupt feature. See [ATmega common](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__common__atmega) for details.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

