---
title: api-boards_nrf52832-mdk.md
description: api-boards_nrf52832-mdk.md
---
# group `boards_nrf52832-mdk` 

Support for the nRF52832-MDK.

General informationThe Makerdiary [nRF52832-MDK](https://github.com/makerdiary/nrf52832-mdk) board is an opensource, micro development kit using the nRF52832 SoC. This board provides BLE connectivity.

The nRF52832-MDK v2 version provides a convenient USB dongle form factor.

PinoutFor nRF52832-MDK v1:

For nRF52832-MDK v2:

Flash the boardBy default, the board is flashed with PyOCD programmer via a DAPLink.

PyOCD can be installed using Python package manager: 
```cpp
pip install pyocd --user -U
```

See the `Flashing` section in [nRF52 common](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__common__nrf52).

Accessing STDIO via UARTThe STDIO is directly accessible via the USB port. On a Linux host, it's generally mapped to `/dev/ttyACM0`.

Use the `term` target to connect to the board serial port
```cpp
make BOARD=nrf52832-mdk -C examples/hello-world term
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

