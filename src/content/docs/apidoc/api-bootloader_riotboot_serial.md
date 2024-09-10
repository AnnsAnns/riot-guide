---
title: api-bootloader_riotboot_serial.md
description: api-bootloader_riotboot_serial.md
---
# group `bootloader_riotboot_serial` 

Overview`riotboot_serial` is a variation on [riotboot](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__bootloader__riotboot) that adds the capability to flash a new firmware using a serial (UART) connection.

After reset, riotboot will wait for `RIOTBOOT_DELAY_MS` ms, if within that time no command is received it will automatically start the application.

If it reads the `B` character, it will enter bootloader mode where flash sectors can be erased and written.

The application in `dist/tools/riotboot_serial` is used to talk to the bootloader and to flash `.hex` files using the bootloader's serial protocol.

Flashing a deviceTo flash a device that is equipped with the riotboot serial bootloader, set the `PROGRAMMER` variable to `riotboot_serial` and chose the `PORT` accordingly.

e.g. make BOARD=same54-xpro PORT=/dev/ttyACM0 PROGRAMMER=riotboot_serial flash

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

