---
title: api-boards_esp32s2-wemos-mini.md
description: api-boards_esp32s2-wemos-mini.md
---
# group `boards_esp32s2-wemos-mini` 

Support for Wemos S2 mini Board.

Benjamin Valentin [benjamin.valentin@ml-pa.com](mailto:benjamin.valentin@ml-pa.com)

Wemos S2 miniOverviewWemos S2 mini

Documentation for the board can be found on the vendor page:

* [Wemos S2 mini](https://www.wemos.cc/en/latest/s2/s2_mini.html)

* [Schematic](https://www.wemos.cc/en/latest/_static/files/sch_s2_mini_v1.0.0.pdf)

Flashing the DeviceFlashing RIOT is quite easy. The board has a Micro-USB connector with reset/boot/flash logic. Just connect the board to your host computer and type using the programming port: 
```cpp
BOARD=esp32s2-wemos-mini make flash
```

If RIOT is already on the device, it should automatically enter bootloader mode. If this does not work or the device is stuck in some other mode, you can force it into bootloader mode by pressing the Reset (RST) button while holding the BOOT (0) button.

For detailed information about ESP32-S2 as well as configuring and compiling RIOT for ESP32-S2 boards, see [RIOT-OS on ESP32 SoC Series Boards](#group__cpu__esp32_1esp32_riot).

[Back to table of contents](#esp32s2-wemos-mini_toc)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

