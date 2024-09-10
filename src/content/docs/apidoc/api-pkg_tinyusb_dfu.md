---
title: api-pkg_tinyusb_dfu.md
description: api-pkg_tinyusb_dfu.md
---
# group `pkg_tinyusb_dfu` 

Overview`riotboot_tinyusb_dfu` is a variation of [riotboot](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__bootloader__riotboot) that adds USB device firmware upgrade (DFU) based on the tinyUSB device stack package. It uses a board's USB interface to allow firmware upgrades from inside the bootloader.

At startup, the DFU mode is entered when either

* none of the slots contains a valid firmware image, or

* the first button was pressed when the board started (configurable at board level using [BTN_BOOTLOADER_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bootloader__selection_8h_1a323ce5c8a5067b0432cbdfc1cbf0c5dd)), or

* the last running firmware asked the bootloader to go to DFU mode by using a magic number (see [RIOTBOOT_MAGIC_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#magic_8h_1ad09578e99ce9367530b82cf74f0d74d2)).

Prerequisites

* The board must have functional USB support and has to support the `tinyusb_device` feature.

* The board must have functional `riotboot` support, see [riotboot](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__bootloader__riotboot).

Flashing riotboot_tinyusb_dfuThe `riotboot_tinyusb_dfu` bootloader can be flashed using a regular programmer like any other application:

```cpp
$ make -C bootloaders/riotboot_tinyusb_dfu BOARD=... all flash
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

When the device is attached and in DFU mode (or the current firmware uses the `tinyusb_dfu` module), new firmware can be flashed to slot 0 using:

```cpp
$ FEATURES_REQUIRED+=riotboot USEMODULE+=tinyusb_dfu make -C examples/saul BOARD=particle-xenon \
  PROGRAMMER=dfu-util USB_VID=1209 USB_PID=7d02 all riotboot/flash-slot0
```

Instead of setting `USB_VID` and `USB_PID`, the variable `DFU_USB_ID` could also be used to specify the DFU device to be used.

```cpp
$ FEATURES_REQUIRED+=riotboot USEMODULE+=tinyusb_dfu make -C examples/saul BOARD=particle-xenon \
  PROGRAMMER=dfu-util DFU_USB_ID=1209:7d02 all riotboot/flash-slot0
```

Note that when building and flashing a different slot (e.g. `flash-slot1`), not only is the image built for that slot, but also `dfu-util` gets passed `--alt 1` (via the `DFU_ALT` build variable) to store it in the right place.

Entering DFU modeWhen RIOT applications are built with `USEMODULE=tinyusb_dfu`, they implement what is called "runtime mode" in DFU.

In runtime mode, it is visible to the `dfu-util` that they are upgradable. On firmware upgrades, the build system can send a command via USB to enter DFU mode. This can also be done manually using `dfu-util -e`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

