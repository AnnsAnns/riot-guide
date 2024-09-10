---
title: api-boards_common_nrf52.md
description: api-boards_common_nrf52.md
---
# group `boards_common_nrf52` 

Common files and configuration for nRF52 boards.

Flashing nrf52 boardsBy default, nrf52 boards are flashed using Jlink. [nRF52840-MDK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__nrf52840-mdk) uses PyOCD by default.

To flash the board, use `BOARD=<nrf52 board>` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=<nrf52 board> -C examples/hello-world flash
```

OpenOCD can also be used to flash nrf52 boards (except thingy52 and ruuvitag because they are hardly coupled with JLink segger_rtt stdio). For the moment, the latest stable version of OpenOCD (0.10) doesn't contain any support for nrf52 but versions built against the current development version can be used.

To flash the board with OpenOCD, use the `PROGRAMMER` variable: 
```cpp
PROGRAMMER=openocd make BOARD=<nrf52 board> -C examples/hello-world flash
```

It is also possible to use the SWD interface of a ST-LINK/V2 in-circuit debugger/programmer with OpenOCD to flash a nrf52 board: 
```cpp
PROGRAMMER=openocd OPENOCD_DEBUG_ADAPTER=stlink make BOARD=<nrf52 board> -C examples/hello-world flash
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

