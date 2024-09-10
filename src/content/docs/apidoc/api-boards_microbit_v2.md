---
title: api-boards_microbit_v2.md
description: api-boards_microbit_v2.md
---
# group `boards_microbit_v2` 

Support for the BBC micro:bit v2.

OverviewThe [micro:bit v2](https://www.microbit.co.uk/) was designed by the BBC and released in 2020.

The board is based on the Nordic nRF52833 SoC, featuring 128KiB of RAM, 512KiB of ROM, and a 2.4GHz radio, that supports Bluetooth Low Energy (BLE), 802.15.4 as well as a Nordic proprietary radio mode.

Additionally the boards features 2 buttons, a 5x5 LED matrix, a speaker, a microphone, an accelerometer and a magnetometer.

Links

* [Website](https://www.microbit.co.uk/)

* [Schematics](https://github.com/microbit-foundation/microbit-v2-hardware/blob/main/V2/MicroBit_V2.0.0_S_schematic.PDF)

* [Pinout list, detailed descriptions and data sheets](https://tech.microbit.org/hardware/schematic/)

Flashing and DebuggingThe board can be flashed using OpenOCD and PyOCD. Debugger is also available with both programmers.

```cpp
BOARD=microbit make flash
```

STDIOThe programmer chip provides access to STDIO via USB. On Linux, stdio is usually available on /dev/ttyACM0. Use the `term` target to access stdio:

```cpp
BOARD=microbit make term
```

DisplayThe 5x5 LED matrix display can be driven using the [Common microbit LED handling](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__common__microbit).

Button setupThe Microbit logo and the rings are configured in resistive mode, and expressed as buttons by default when SAUL is enabled (through [saul_gpio_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsaul__gpio__params__t)). Note that to press them, you have to touch the GND pin at the same time, and may need to press hard if you have dry fingers. See [the micro:bit documentation on touch](https://support.microbit.org/support/solutions/articles/19000116318-touch-sensing-on-the-micro-bit) for more information. Capacitive mode is currently not supported.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

