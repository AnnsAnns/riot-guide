---
title: api-boards_nucleo-l412kb.md
description: api-boards_nucleo-l412kb.md
---
# group `boards_nucleo-l412kb` 

Support for the STM32 Nucleo-L412KB.

OverviewThe Nucleo-L412KB is a board from ST's Nucleo family supporting ARM-Cortex-M4 STM32L412KB microcontroller with 40KiB of RAM and 128KiB of Flash.

Flashing the Board Using ST-LINK Removable MediaOn-board ST-LINK programmer provides via composite USB device removable media. Copying the HEX file causes reprogramming of the board. This task could be performed manually; however, the cpy2remed (copy to removable media) PROGRAMMER script does this automatically. To program board in this manner, use the command: 
```cpp
make BOARD=nucleo-l412kb PROGRAMMER=cpy2remed flash
```
This PROGRAMMER was tested using ST-LINK firmware 2.37.26. Firmware updates can be found on [this STM webpage](https://www.st.com/en/development-tools/stsw-link007.html).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

