---
title: api-boards_nucleo-f413zh.md
description: api-boards_nucleo-f413zh.md
---
# group `boards_nucleo-f413zh` 

Support for the STM32 Nucleo-F413ZH.

OverviewThe Nucleo-F413ZH is a board from ST's Nucleo family supporting ARM Cortex-M4 STM32F413ZH microcontroller with 256KiB of RAM and 1MiB of Flash.

PinoutPinout for the nucleo-f413zh (from STM board manual)

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-f413zh PROGRAMMER=cpy2remed flash
```
This PROGRAMMER requires ST-LINK firmware 2.37.26 or newer. Firmware updates could be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

