---
title: api-bootloader_riotboot_dfu.md
description: api-bootloader_riotboot_dfu.md
---
# group `bootloader_riotboot_dfu` 

Overview`riotboot_dfu` is a variation on [riotboot](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__bootloader__riotboot) that adds USB device firmware upgrade (DFU). In addition to the (otherwise small) slot selection, it uses a board's USB interface to allow firmware upgrades from inside the bootloader.

At startup, the DFU mode is entered when either

* none of the slots contains a valid firmware image, or

* the first button was pressed when the board started (configurable at board level using [BTN_BOOTLOADER_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bootloader__selection_8h_1a323ce5c8a5067b0432cbdfc1cbf0c5dd)), or

* the last running firmware asked the bootloader to go to DFU mode by using a magic number (see [RIOTBOOT_MAGIC_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#magic_8h_1ad09578e99ce9367530b82cf74f0d74d2)).

Prerequisites

* The board must have functional USB support, easily tested using the `examples/usbus_minimal/` example.

* The board must have functional riotboot support, see [riotboot](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__bootloader__riotboot).

Flashing riotboot_dfuThe `riotboot_dfu` bootloader can be flashed using a regular programmer like any other application:

```cpp
$ make -C bootloaders/riotboot_dfu BOARD=particle-xenon all flash
```

Depending on your setup, you may need to select the right `PROGRAMMER` (and its details) in addition to your board.

DFU modeA device in riotboot DFU mode can be recognized in the USB device list by its VID/PID pair 1209:7d02:

```cpp
$ lsusb
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 005: ID 138a:003f [...]
Bus 001 Device 004: ID 8087:0a2b [...]
Bus 001 Device 045: ID 1209:7d02 Generic USB device
Bus 001 Device 001: ID 1d6b:0002 [...]
```

When running in DFU mode, the bootloader allows writing to either of the two firmware slots.

When the device is attached and in DFU mode (or the current firmware uses the `usbus_dfu` module), new firmware can be flashed to slot 0 using:

```cpp
$ FEATURES_REQUIRED+=riotboot USEMODULE+=usbus_dfu make -C examples/saul BOARD=particle-xenon \
  PROGRAMMER=dfu-util all riotboot/flash-slot0
```

By default, the VID/PID pair 1209:7d02 is used for the device to be flashed in riotboot DFU mode. If necessary, this VID/PID pair can be overwritten with the variable `DFU_USB_ID`, e.g. if the RIOT DFU bootloader was compiled for a different VID/PID pair.

```cpp
$ FEATURES_REQUIRED+=riotboot USEMODULE+=usbus_dfu make -C examples/saul BOARD=particle-xenon \
  PROGRAMMER=dfu-util DFU_USB_ID=1209:7d02 all riotboot/flash-slot0
```

Note that when building and flashing a different slot (eg. `flash-slot1`), not only is the image built for that slot, but also dfu-util gets passed `--alt 1` (via the `DFU_ALT` build variable) to store it in the right place.

Entering DFU modeWhen RIOT applications are built with `USEMODULE+=usbus_dfu`, they implement what is called "runtime mode" in DFU.

In runtime mode, it is visible to dfu-util that they are upgradable. On firmware upgrades, the build system can send a command via USB to enter DFU mode. This can also be done manually using `dfu-util -e`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

