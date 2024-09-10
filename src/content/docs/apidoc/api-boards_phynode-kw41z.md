---
title: api-boards_phynode-kw41z.md
description: api-boards_phynode-kw41z.md
---
# group `boards_phynode-kw41z` 

Support for the Phytec PhyNODE KW41Z Board.

OverviewThe [Phytec PhyNODE-KW41Z](https://www.phytec.de/fileadmin/user_upload/downloads/Manuals/L-847e_0.pdf) board is a development platform based on the PhyWAVE-KW41z wireless module (populated with NXP Semiconductor Kinetis KW41Z microcontroller).

It provides a radio device with Bluetooth Low Energy and/or IEEE 802.15.4.

There's also available an HDL1010 High Accuracy Digital Humidity sensor, a CCS811 IAQ gas sensor, a MMA8652FC accelerometer and a TCS37727 RGB Light sensor.

There board also provides an SSD1673 Active Matrix EPD 150x200 Display Driver with Controller on board.

Flash the boardTo flash the board using OpenOCD:

* Use `BOARD=phynode-kw41z` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=phynode-kw41z -C examples/hello-world flash term
```

Current supportThe TCS37727 RGB Light sensor, the MMA8652FC accelerometer and the CCS811 digital gas sensor are supported. There's ongoing work on [IEEE802.15.4 radio support for KW41Z](https://github.com/RIOT-OS/RIOT/pull/7107)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

