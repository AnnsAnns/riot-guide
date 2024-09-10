---
title: api-boards_nrf52840-mdk.md
description: api-boards_nrf52840-mdk.md
---
# group `boards_nrf52840-mdk` 

Support for the nRF52840-MDK.

General informationThe Makerdiary [nRF52840-MDK](https://github.com/makerdiary/nrf52840-mdk) board is an opensource, micro development kit using the nRF52840 SoC. This board provides 802.15.4 and BLE connectivity.

Pinout

Flash the boardBy default, the board is flashed with PyOCD programmer via a DAPLink.

PyOCD can be installed using Python package manager: 
```cpp
pip install pyocd --user -U
```

See the `Flashing` section in [nRF52 common](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__common__nrf52).

Accessing STDIO via UARTThe STDIO is directly accessible via the USB port. On a Linux host, it's generally mapped to `/dev/ttyACM0`.

Use the `term` target to connect to the board serial port
```cpp
make BOARD=nrf52840-mdk -C examples/hello-world term
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

