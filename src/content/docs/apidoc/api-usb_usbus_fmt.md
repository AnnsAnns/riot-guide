---
title: api-usb_usbus_fmt.md
description: api-usb_usbus_fmt.md
---
# group `usb_usbus_fmt` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`usbus_fmt_descriptor_conf`](#group__usb__usbus__fmt_1ga45b31385a647aeb8e0b19fd65d78fd8c)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)`            | generator for the USB configuration descriptor
`public size_t `[`usbus_fmt_descriptor_dev`](#group__usb__usbus__fmt_1gaf5034b5b205c0c96f1a155b734ac46ca)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)`            | generator for the USB device descriptor

## Members

#### `public size_t `[`usbus_fmt_descriptor_conf`](#group__usb__usbus__fmt_1ga45b31385a647aeb8e0b19fd65d78fd8c)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)` 

generator for the USB configuration descriptor

#### Parameters
* `usbus` USBUS context

#### Returns
the generated descriptor size in bytes

#### `public size_t `[`usbus_fmt_descriptor_dev`](#group__usb__usbus__fmt_1gaf5034b5b205c0c96f1a155b734ac46ca)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)` 

generator for the USB device descriptor

#### Parameters
* `usbus` USBUS context

#### Returns
the generated descriptor size in bytes

