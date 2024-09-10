---
title: api-boards_nucleo-l011k4.md
description: api-boards_nucleo-l011k4.md
---
# group `boards_nucleo-l011k4` 

Support for the STM32 Nucleo-L011K4.

OverviewThe Nucleo-L011K4 is a board from ST's Nucleo family supporting ARM-Cortex-M0+ STM32L011K4 microcontroller with 2KiB of RAM and 16KiB of Flash.

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-l011k4 PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates can be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

