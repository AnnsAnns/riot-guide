---
title: api-usb_usbus_conf.md
description: api-usb_usbus_conf.md
---
# group `usb_usbus_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USBUS_STACKSIZE`](#group__usb__usbus__conf_1ga716388f05520c1a4c867879f43f62cff)            | USBUS thread stack size.
`define `[`USBUS_PRIO`](#group__usb__usbus__conf_1ga2624d46a655f464083481e55f5faa756)            | USBUS thread priority.
`define `[`CONFIG_USBUS_AUTO_ATTACH`](#group__usb__usbus__conf_1ga8b5f3b3794045ba18e9d2f2f8f24c643)            | USBUS auto attach setting.
`define `[`CONFIG_USBUS_MSC_AUTO_MTD`](#group__usb__usbus__conf_1ga8a681c7d01b49625a5dbc7d70cdb6e68)            | USBUS MSC auto MTD setting.
`define `[`CONFIG_USBUS_EP0_SIZE`](#group__usb__usbus__conf_1ga1fb95fe07ea93ba49f960ed592f4293b)            | USBUS endpoint 0 buffer size.

## Members

#### `define `[`USBUS_STACKSIZE`](#group__usb__usbus__conf_1ga716388f05520c1a4c867879f43f62cff) 

USBUS thread stack size.

#### `define `[`USBUS_PRIO`](#group__usb__usbus__conf_1ga2624d46a655f464083481e55f5faa756) 

USBUS thread priority.

#### `define `[`CONFIG_USBUS_AUTO_ATTACH`](#group__usb__usbus__conf_1ga8b5f3b3794045ba18e9d2f2f8f24c643) 

USBUS auto attach setting.

When set to 1, the USBUS thread will automatically enable the USB pull-up resistor after initializing the thread. This will signal to the host that the USB peripheral is ready for use.

#### `define `[`CONFIG_USBUS_MSC_AUTO_MTD`](#group__usb__usbus__conf_1ga8a681c7d01b49625a5dbc7d70cdb6e68) 

USBUS MSC auto MTD setting.

When set to 1, the USBUS MSC module will automatically create a LUN for each MTD device defined in `board.h`.

#### `define `[`CONFIG_USBUS_EP0_SIZE`](#group__usb__usbus__conf_1ga1fb95fe07ea93ba49f960ed592f4293b) 

USBUS endpoint 0 buffer size.

This configures the buffer size of the control endpoint. Unless you transfer large amount of data often over the control endpoint, a minimal size should be sufficient

