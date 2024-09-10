---
title: api-boards_sodaq-sara-sff.md
description: api-boards_sodaq-sara-sff.md
---
# group `boards_sodaq-sara-sff` 

Support for the SODAQ SARA SFF boards.

General informationGeneral information about this board can be found on the [SODAQ support](https://support.sodaq.com/Boards/Sara_SFF/) website. Schematic can be found [here](https://learn.sodaq.com/Boards/Sara_SFF/sodaq_sara_sff_r2.pdf) )

Flash the boardUse `BOARD=sodaq-one` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=sodaq-one -C examples/hello-world flash
```

If the application crashes, automatic reflashing via USB, as explained above won't be possible. In this case, the board must be set in bootloader mode by double tapping the reset button before running the flash command.

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

