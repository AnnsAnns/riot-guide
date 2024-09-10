---
title: api-boards_usb-kw41z.md
description: api-boards_usb-kw41z.md
---
# group `boards_usb-kw41z` 

Support for the USB-KW41Z.

OverviewThe [NXP USB-KW41Z](https://www.nxp.com/products/wireless/bluetooth-low-energy-ble/bluetooth-low-energy-ieee-802.15.4-packet-sniffer-usb-dongle:USB-KW41Z) board a development platform with a convenient USB dongle form factor.

The USB-KW41Z provides a radio device with Bluetooth Low Energy and/or IEEE 802.15.4.

Flash the boardTo flash the board using OpenOCD, it needs to be changed from the factory programmed sniffer application to an OpenSDA application used for flashing and debugging.

* Follow the [Quick Start Guide at NXP.com][[quick-start-guide](https://www.nxp.com/products/wireless/bluetooth-low-energy-ble/bluetooth-low-energy-ieee-802.15.4-packet-sniffer-usb-dongle:USB-KW41Z?&tab=In-Depth_Tab&tid=van/usb-kw41z/startnow)]:

* click on "2. Get Software" -> "Choose a Development Path: USB-KW41Z Development Platform"

* scroll down to "2.3 Load Segger JLink OpenSDA App"

* follow the instructions

* Use `BOARD=usb-kw41z` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=usb-kw41z -C examples/hello-world flash term
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

