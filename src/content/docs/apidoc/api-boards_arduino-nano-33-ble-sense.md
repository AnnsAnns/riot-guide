---
title: api-boards_arduino-nano-33-ble-sense.md
description: api-boards_arduino-nano-33-ble-sense.md
---
# group `boards_arduino-nano-33-ble-sense` 

Support for the Arduino Nano 33 BLE Sense.

General informationThe [Arduino Nano 33 BLE sense](https://store.arduino.cc/arduino-nano-33-ble-sense) board is an opensource, micro development kit using the nRF52840 SoC. This board provides 802.15.4 and BLE connectivity.

Pinout

Flash the boardUse `BOARD=arduino-nano-33-ble-sense` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=arduino-nano-33-ble-sense -C examples/hello-world flash
```

Accessing STDIO via UARTThe STDIO is directly accessible via the USB port. On a Linux host, it's generally mapped to `/dev/ttyACM0`.

Use the `term` target to connect to the board serial port
```cpp
make BOARD=arduino-nano-33-ble-sense -C examples/hello-world term
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

