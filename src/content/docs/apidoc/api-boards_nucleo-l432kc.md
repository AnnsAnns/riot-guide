---
title: api-boards_nucleo-l432kc.md
description: api-boards_nucleo-l432kc.md
---
# group `boards_nucleo-l432kc` 

Support for the STM32 Nucleo-L432KC.

OverviewThe Nucleo-L432KC is a board from ST's Nucleo family supporting ARM Cortex-M4 STM32L432KCU6 microcontroller with 64KiB of RAM and 256KiB of Flash.

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-l432kc PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates can be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

