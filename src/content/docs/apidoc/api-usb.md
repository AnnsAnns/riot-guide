---
title: api-usb.md
description: api-usb.md
---
# group `usb` 

Configuration defines for USB peripheral devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USB_ENDPOINT_INTERRUPT_FS_MAX_SIZE`](#group__usb_1ga5f4cbdb91326f13edaae37679caa96c1)            | Maximum transfer size for interrupt endpoints at full speed.
`define `[`USB_ENDPOINT_INTERRUPT_HS_MAX_SIZE`](#group__usb_1ga19945c4284766cbd309a429961840495)            | Maximum transfer size for interrupt endpoints at high speed.
`define `[`USB_ENDPOINT_BULK_FS_MAX_SIZE`](#group__usb_1ga0186aed92a36d998724fad4ea2b999cb)            | Maximum transfer size for bulk endpoints at full speed.
`define `[`USB_ENDPOINT_BULK_HS_MAX_SIZE`](#group__usb_1ga15ba82086619c33ab0cc50c8f2327aa8)            | Maximum transfer size for bulk endpoints at high speed.
`enum `[`usb_version_t`](#group__usb_1ga02f6e9541bb9b44876a9886b1b19857b)            | USB version definitions.
`enum `[`usb_speed_t`](#group__usb_1ga624cde5d2f6383faa35fd05108285a23)            | USB speed definitions.
`enum `[`usb_ep_type_t`](#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)            | USB endpoint types.
`enum `[`usb_ep_dir_t`](#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)            | USB endpoint directions.

## Members

#### `define `[`USB_ENDPOINT_INTERRUPT_FS_MAX_SIZE`](#group__usb_1ga5f4cbdb91326f13edaae37679caa96c1) 

Maximum transfer size for interrupt endpoints at full speed.

#### `define `[`USB_ENDPOINT_INTERRUPT_HS_MAX_SIZE`](#group__usb_1ga19945c4284766cbd309a429961840495) 

Maximum transfer size for interrupt endpoints at high speed.

#### `define `[`USB_ENDPOINT_BULK_FS_MAX_SIZE`](#group__usb_1ga0186aed92a36d998724fad4ea2b999cb) 

Maximum transfer size for bulk endpoints at full speed.

#### `define `[`USB_ENDPOINT_BULK_HS_MAX_SIZE`](#group__usb_1ga15ba82086619c33ab0cc50c8f2327aa8) 

Maximum transfer size for bulk endpoints at high speed.

#### `enum `[`usb_version_t`](#group__usb_1ga02f6e9541bb9b44876a9886b1b19857b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USB_VERSION_1x            | 
USB_VERSION_20            | 

USB version definitions.

#### `enum `[`usb_speed_t`](#group__usb_1ga624cde5d2f6383faa35fd05108285a23) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USB_SPEED_LOW            | 
USB_SPEED_FULL            | 
USB_SPEED_HIGH            | 

USB speed definitions.

#### `enum `[`usb_ep_type_t`](#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USB_EP_TYPE_NONE            | Unused endpoint
USB_EP_TYPE_CONTROL            | Control type
USB_EP_TYPE_INTERRUPT            | Interrupt type
USB_EP_TYPE_BULK            | Bulk type
USB_EP_TYPE_ISOCHRONOUS            | Isochronous type

USB endpoint types.

#### `enum `[`usb_ep_dir_t`](#group__usb_1ga1f43c18c4881219e5578ade7dec43afe) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USB_EP_DIR_OUT            | Host out, device in.
USB_EP_DIR_IN            | Host in, device out.

USB endpoint directions.

