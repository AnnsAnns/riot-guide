---
title: api-boards_common_particle-mesh.md
description: api-boards_common_particle-mesh.md
---
# group `boards_common_particle-mesh` 

Common support for the Particle Mesh boards family (Xenon, Argon, Boron)

General information[Particle Mesh](https://www.particle.io/mesh/) are mesh-ready development kits. Depending on the board type (Xenon, Argon, Boron), it provides access to multiple communication protocols: BLE, 802.15.4, WiFi, LTE.

Flash the boardUsing the [Particle Mesh debugger](https://docs.particle.io/datasheets/accessories/mesh-accessories/#debugger), the board can be flashed with PyOCD programmer via a DAPLink.

PyOCD can be installed using Python package manager: 
```cpp
pip install pyocd --user -U
```

To flash the board, use `BOARD=<board name>` (with board name in {particle-argon, particle-boron, particle-xenon}) with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=particle-xenon -C examples/hello-world flash
```

In this case, OpenOCD can also be used. For the moment, the latest stable version of OpenOCD (0.10) doesn't contain any support for nrf52 but versions built against the actual development version can be used.

To flash the board with OpenOCD, use the `PROGRAMMER` variable: 
```cpp
PROGRAMMER=openocd make BOARD=<board name> -C examples/hello-world flash
```

Alternative flashing procedure: Particle bootloader and DFU-UtilAs an alternative to using the Particle Mesh debugger, the USB DFU mode bootloader shipped with Particle Mesh devices can be used. That mode can be entered by keeping the SETUP/MODE button pressed after power-up or reset until the RGB LED **blinks yellow fast**.

In this mode, the bootloader and Soft Device are kept in place, reducing the available flash memory to 784kB, but in turn, devices can easily be switched back to using Particle software.

In order to use this mode, set `PARTICLE_MONOFIRMWARE=1` wherever you set the `BOARD`. This will trigger the use of the appropriate linker script, and switch in [`dfu-util`](http://dfu-util.sourceforge.net/) as the default programmer, which needs to be installed.

On Linux hosts, devices for the DFU mode are frequently only accessible to root, causing error messages like dfu-util: Cannot open DFU device 2b04:d00e
dfu-util: No DFU capable USB device available
 To make Particle devices writable for all users, follow [Particle's instructions](https://docs.particle.io/support/particle-tools-faq/installing-dfu-util/) on setting up dfu-util.

The Particle bootloader checks the firmware's checksum at startup time. As these checks would be frustrated by flash writes inside RIOT (typically using the [Flash page driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage)), the CFLAG [-DPARTICLE_MONOFIRMWARE_CHECKSUMLIMIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#common_2particle-mesh_2include_2board_8h_1a5488bec84d59fabc84e4b61dd3f2ce06) can be set. Then, the checksum is only calculated over the memory region that contains the interrupt vector and the bootloader manifest.

Reset the boardThe on-board reset button doesn't work, so to trigger a reset of the board, use the `reset` target with `make`: 
```cpp
make BOARD=<board name> -C examples/hello-world reset
```

STDIO configurationBy default, the board uses USB to expose a serial terminal. Other stdio options can be enabled as modules to replace that.

When the `stdio_uart` module is used, it defaults to using UART0, which is configured for the board's RX/TX pin pair.

nRF antenna selectionThe Particle Mesh boards all have two antenna choices for their nRF (Bluetooth / 802.15.4) radios, a on-board antenna and a U.FL connector for an external antenna.

By default, the on-board antenna is selected at startup. That choice can be overridden by setting `BOARD_NRFANTENNA_DEFAULT = EXTERNAL` (as opposed to the default `BUILTIN`) in a project's `Makefile`, or at runtime using [board_nrfantenna_select](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#common_2particle-mesh_2include_2board_8h_1a256a868fbdd26f23b010090d1b37c437) function.

The external antenna connection should only be enabled if a suitable antenna is connected.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

