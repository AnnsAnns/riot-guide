---
title: api-boards_sodaq-sara-aff.md
description: api-boards_sodaq-sara-aff.md
---
# group `boards_sodaq-sara-aff` 

Support for the SODAQ SARA AFF boards.

General informationGeneral information about this board can be found on the [SODAQ support](http://support.sodaq.com/sodaq-one/sodaq-sara-r410m/) website. 

Flash the boardUse `BOARD=sodaq-sara-aff` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=sodaq-sara-aff -C examples/hello-world flash
```

If the application crashes, automatic reflashing via USB, as explained above won't be possible. In this case, the board must be set in bootloader mode by double tapping the reset button before running the flash command.

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

