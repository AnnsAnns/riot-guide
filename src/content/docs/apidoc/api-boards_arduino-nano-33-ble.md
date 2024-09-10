---
title: api-boards_arduino-nano-33-ble.md
description: api-boards_arduino-nano-33-ble.md
---
# group `boards_arduino-nano-33-ble` 

Support for the Arduino Nano 33 BLE.

General informationThe [Arduino Nano 33 BLE](https://store.arduino.cc/arduino-nano-33-ble) board is an opensource, micro development kit using the nRF52840 SoC. This board provides 802.15.4 and BLE connectivity.

Pinout

Flash the boardUse `BOARD=arduino-nano-33-ble` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=arduino-nano-33-ble -C examples/hello-world flash
```

Accessing STDIO via UARTThe STDIO is directly accessible via the USB port. On a Linux host, it's generally mapped to `/dev/ttyACM0`.

Use the `term` target to connect to the board serial port
```cpp
make BOARD=arduino-nano-33-ble -C examples/hello-world term
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

