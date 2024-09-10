---
title: api-boards_teensy31.md
description: api-boards_teensy31.md
---
# group `boards_teensy31` 

Support for the Teensy3.1 & 3.2.

General informationTeensy3.1 & 3.2 boards are development boards made by [PJRC](https://www.pjrc.com/teensy/teensy31.html).

Teensy3.1 & 3.2 boards are built based on the Freescale MK20DX256VLH7 microcontroller. See [Datasheet](http://cache.freescale.com/files/32bit/doc/data_sheet/K20P64M72SF1.pdf).

Pinout

Flash the board* Put the board in bootloader mode by tapping the reset button.
 The board should remain in bootloader mode until flashed.

* Use `BOARD=teensy31` with the `make` command. This works for Teensy 3.1 & 3.2
 Example with `hello-world` application: 
```cpp
make BOARD=teensy31 -C examples/hello-world flash
```

Accessing STDIO via UARTTo access the STDIO of RIOT, a FTDI to USB converter needs to be plugged to the RX/TX pins on the board (pins 0 and 1 of the board).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

