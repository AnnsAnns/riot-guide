---
title: api-cpu_sam0_common_usb.md
description: api-cpu_sam0_common_usb.md
---
# group `cpu_sam0_common_usb` 

USB interface functions for the sam0 class devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SAM_USB_NUM_EP`](#group__cpu__sam0__common__usb_1ga7565e330e248636617ac1d7e8c74454c)            | Number of USB IN and OUT endpoints.
`struct `[`sam0_common_usb_t`](#structsam0__common__usb__t) | sam0 usb peripheral device context

## Members

#### `define `[`SAM_USB_NUM_EP`](#group__cpu__sam0__common__usb_1ga7565e330e248636617ac1d7e8c74454c) 

Number of USB IN and OUT endpoints.

# struct `sam0_common_usb_t` 

sam0 usb peripheral device context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structsam0__common__usb__t_1a6d514d456b26f0d6a663a0fd58e023d4) | Inherited usbdev struct.
`public const `[`sam0_common_usb_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsam0__common__usb__config__t)` * `[`config`](#structsam0__common__usb__t_1ab275d019b254d14e3b4fe8e51d95af26) | USB peripheral config
`public UsbDeviceDescBank `[`banks`](#structsam0__common__usb__t_1a146cbd028026deb81101f4d15cfc4b79) | Device descriptor banks.
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`endpoints`](#structsam0__common__usb__t_1a738e197e4f5b14f3abfd1818fc5fc705) | Endpoints
`public bool `[`suspended`](#structsam0__common__usb__t_1acbd0d48d63f5b95a6b8a684b7d3063ea) | Suspend active

## Members

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structsam0__common__usb__t_1a6d514d456b26f0d6a663a0fd58e023d4) 

Inherited usbdev struct.

#### `public const `[`sam0_common_usb_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsam0__common__usb__config__t)` * `[`config`](#structsam0__common__usb__t_1ab275d019b254d14e3b4fe8e51d95af26) 

USB peripheral config

#### `public UsbDeviceDescBank `[`banks`](#structsam0__common__usb__t_1a146cbd028026deb81101f4d15cfc4b79) 

Device descriptor banks.

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`endpoints`](#structsam0__common__usb__t_1a738e197e4f5b14f3abfd1818fc5fc705) 

Endpoints

#### `public bool `[`suspended`](#structsam0__common__usb__t_1acbd0d48d63f5b95a6b8a684b7d3063ea) 

Suspend active

