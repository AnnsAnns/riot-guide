---
title: api-boards_arduino-mkrfox1200.md
description: api-boards_arduino-mkrfox1200.md
---
# group `boards_arduino-mkrfox1200` 

Support for the Arduino MKRFOX1200 board.

General informationThe [Arduino MKRFOX1200](https://www.arduino.cc/en/Main.ArduinoBoardMKRFox1200) board is a learning and development board that provides Sigfox connectivity and is powered by an Atmel SAMD21 microcontroller.

Pinout

Flash the boardUse `BOARD=arduino-mkrfox1200` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=arduino-mkrfox1200 -C examples/hello-world flash
```

If the application crashes, automatic reflashing via USB, as explained above won't be possible. In this case, the board must be set in bootloader mode by double tapping the reset button before running the flash command.

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

