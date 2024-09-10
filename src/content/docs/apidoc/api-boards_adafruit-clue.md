---
title: api-boards_adafruit-clue.md
description: api-boards_adafruit-clue.md
---
# group `boards_adafruit-clue` 

Support for the Adafruit Clue.

General informationThe [Adafruit Clue](https://www.adafruit.com/clue) board is an opensource, micro development kit using the nRF52840 SoC. This board provides 802.15.4 and BLE connectivity.

SchematicsThe board detailed description and schematic is available [here](https://github.com/adafruit/Adafruit-CLUE-PCB).

Flash the boardThe board is flashed using the `adafruit-nrfutil` Python package: 
```cpp
$ pip install --user adafruit-nrfutil
```

Example with `hello-world` application: 
```cpp
make BOARD=adafruit-clue -C examples/hello-world flash
```

Accessing STDIO via UARTThe STDIO is directly accessible via the USB port. On a Linux host, it's generally mapped to `/dev/ttyACM0`.

Use the `term` target to connect to the board serial port
```cpp
make BOARD=adafruit-clue -C examples/hello-world term
```

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situations.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

