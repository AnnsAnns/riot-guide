---
title: api-boards_adafruit-grand-central-m4-express.md
description: api-boards_adafruit-grand-central-m4-express.md
---
# group `boards_adafruit-grand-central-m4-express` 

Support for the Adafruit Grand Central M4 Express.

General information

The main features of the board are:

* ATSAMD51 Cortex M4 running at 120 MHz

* Hardware DSP and floating point support

* 1MB Flash

* 256 KB RAM

* external 8 MB QSPI Flash storage

* 32-bit, 3.3V logic and power

* Micro SD Card slot connected to SPI

* native USB

Links

* [Overview](https://learn.adafruit.com/adafruit-grand-central)

* [Schematics](https://learn.adafruit.com/assets/69175)

Flash the boardThe board is flashed using its on-board [boot loader](https://github.com/adafruit/uf2-samdx1).

The process is automated in the usual `make flash` target.

If RIOT is already running on the board, it will automatically reset the CPU and enter the bootloader. If some other firmware is running or RIOT crashed, you need to enter the bootloader manually by double tapping the board's reset button.

Readiness of the bootloader is indicated by LED pulsing in red.

Accessing STDIOThe usual way to obtain a console on this board is using an emulated USB serial port.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

