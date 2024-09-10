---
title: api-boards_nrf52840dk.md
description: api-boards_nrf52840dk.md
---
# group `boards_nrf52840dk` 

Support for the nRF52840 DK.

RESET pin configurationOn many (all?) nrf52840dk boards, the reset pin is not configured out-of-the box. This means, that simply nothing happens if the RESET pin is pressed. To change this, RIOT provides a little tool in `dist/tools/nrf52_resetpin_cfg`.

Simply compile, flash, and run that tool on your board, and the reset pin should work for the time being.

Flash the boardSee the `Flashing` section in [nRF52 common](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__common__nrf52).

Accessing STDIO via UARTThe STDIO is directly accessible via the USB port. On a Linux host, it's generally mapped to `/dev/ttyACM0`.

Use the `term` target to connect to the board serial port
```cpp
make BOARD=nrf52840dk -C examples/hello-world term
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

