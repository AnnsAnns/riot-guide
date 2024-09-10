---
title: api-boards_arduino-mkrwan1300.md
description: api-boards_arduino-mkrwan1300.md
---
# group `boards_arduino-mkrwan1300` 

Support for the Arduino MKR WAN 1300 board.

General informationThe [Arduino MKR WAN 1300](https://store.arduino.cc/mkr-wan-1300) board is a learning and development board that provides LoRa connectivity and is powered by an Atmel SAMD21 microcontroller.

Pinout

Flash the boardUse `BOARD=arduino-mkrwan1300` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=arduino-mkrwan1300 -C examples/hello-world flash
```

If the application crashes, automatic reflashing via USB, as explained above won't be possible. In this case, the board must be set in bootloader mode by double tapping the reset button before running the flash command.

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

