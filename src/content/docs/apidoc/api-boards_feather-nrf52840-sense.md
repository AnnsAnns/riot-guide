---
title: api-boards_feather-nrf52840-sense.md
description: api-boards_feather-nrf52840-sense.md
---
# group `boards_feather-nrf52840-sense` 

Support for the Adafruit Feather nRF52840 Sense.

General informationThe [Feather nRF52840 Sense](https://learn.adafruit.com/adafruit-feather-sense) is a development board from Adafruits Feather board family. It is very similar to the [Feather nRF52840 Express](https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/) but comes with more sensors.

It provides native USB support, Bluetooth Low Energy and IEEE 802.15.4 support via the nRF52840 MCU.

Flashing, Bootloader, and TerminalRefer to the [Feather nRF52840 Express documentation](https://doc.riot-os.org/group__boards__feather-nrf52840.html) for further details. Both use the same flasher, bootloader, and terminal settings.

Example with `hello-world` application: 
```cpp
make BOARD=feather-nrf52840-sense -C examples/hello-world flash term
```

On "fresh" boards the [bootloader may need to be updated](https://learn.adafruit.com/adafruit-feather-sense/update-bootloader).

Updating Old BootloadersIn some cases the bootloader may be too old to even mount on startup. Double tap the reset button to get into bootloader mode and check the `INFO_UF2.TXT` for bootloader information. If the version is less than `0.4.0` then one can use the [Adafruit_nRF52_Bootloader](https://github.com/adafruit/Adafruit_nRF52_Bootloader) tool to update.

For example, one can run the following if `arm-none-eabi-gcc` and `adafruit-nrfutil` are installed: 
```cpp
git clone https://github.com/adafruit/Adafruit_nRF52_Bootloader.git
cd Adafruit_nRF52_Bootloader
git submodule update --init
make BOARD=feather_nrf52840_sense SERIAL=/dev/ttyACM0 flash-dfu
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

