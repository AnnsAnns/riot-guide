---
title: api-boards_nrf51dk.md
description: api-boards_nrf51dk.md
---
# group `boards_nrf51dk` 

Support for the Nordic nRF51DK Development Kit.

Overview:The nRF51 DK is a low-cost, versatile single-board development kit for Bluetooth low energy, ANT and 2.4GHz proprietary applications using the nRF51 Series SoC.

Flashing the Device:The nRF51DK board is shipped with an on-board JLink debugger that doesn't work well with UART: the shell is only working on RX but not TX.

Thus, we recommend to update the flasher ship with DAPLink as described [here](https://armmbed.github.io/DAPLink/?board=Nordic-nRF51-DK):* Download and extract [this release package](https://github.com/ARMmbed/DAPLink/releases/download/v0251/0251_release_package_9295000c.zip)

* While holding down the boards reset button, connect the boards USB debug port to the computer. It should enumerate as `BOOTLOADER`

* Using a filesystem browser, drag-n-drop the firmware `0251_sam3u2c_mkit_dk_dongle_nrf5x_0x5000.bin` file to the `BOOTLOADER` folder

* Power-cycle the board, a new DAPLink mount point should appear

The programmer used to flash this board is OpenOCD.

To flash the board, use the following command: 
```cpp
$ make BOARD=nrf51dk flash
```
 from any application directory.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

