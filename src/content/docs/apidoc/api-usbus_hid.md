---
title: api-usbus_hid.md
description: api-usbus_hid.md
---
# group `usbus_hid` 

USBUS HID interface module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_USBUS_HID_INTERRUPT_EP_SIZE`](#group__usbus__hid_1ga3aab50d597bf0ac47f04120068bb065a)            | USB HID interrupt endpoint size.
`public void `[`usbus_hid_init`](#group__usbus__hid_1gad5e24edc6406b2af74baf5c21e8d8a03)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_hid_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid_1gac534ea6605d6d2d844ed6efe31335b1c)` * hid,`[`usbus_hid_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid_1ga346dc005f8e8430a83ff6da8fc205a46)` cb,const uint8_t * report_desc,size_t report_desc_size)`            | Initialize an USBUS HID interface.
`struct `[`usbus_hid_device`](#structusbus__hid__device) | USBUS HID context struct.

## Members

#### `define `[`CONFIG_USBUS_HID_INTERRUPT_EP_SIZE`](#group__usbus__hid_1ga3aab50d597bf0ac47f04120068bb065a) 

USB HID interrupt endpoint size.

#### `public void `[`usbus_hid_init`](#group__usbus__hid_1gad5e24edc6406b2af74baf5c21e8d8a03)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_hid_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid_1gac534ea6605d6d2d844ed6efe31335b1c)` * hid,`[`usbus_hid_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid_1ga346dc005f8e8430a83ff6da8fc205a46)` cb,const uint8_t * report_desc,size_t report_desc_size)` 

Initialize an USBUS HID interface.

#### Parameters
* `usbus` USBUS context to register with 

* `hid` USBUS HID handler 

* `cb` Callback for data from the USB interface 

* `report_desc` USB_HID report descriptor 

* `report_desc_size` Size of USB_HID report descriptor

# struct `usbus_hid_device` 

USBUS HID context struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__hid__device_1a99b1fc8ba7ece3cde3cf8e4c9147a8d0) | control handler
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface`](#structusbus__hid__device_1aa222155742a3e699ebdedad6258be787) | HID interface.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_out`](#structusbus__hid__device_1afe0fcea4190e99397959c0295ed2fccd) | OUT endpoint.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_in`](#structusbus__hid__device_1a2fc392ee4edde597a8b00f13a659dcda) | IN endpoint.
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`hid_descr`](#structusbus__hid__device_1a00d39a3349c1263d3c8f3cab1ce6301f) | HID descriptor generator.
`public const uint8_t * `[`report_desc`](#structusbus__hid__device_1af1156621d8aac28cf9e710eb788fc802) | report descriptor reference
`public size_t `[`report_desc_size`](#structusbus__hid__device_1a52b22692f9aae4f49596dee8908a3013) | report descriptor size
`public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__hid__device_1ac09b3b55adfbc1b3703771fcdfcd0748) | USBUS reference.
`public size_t `[`occupied`](#structusbus__hid__device_1acaa5349177ee321d0457c873ddfb452a) | Number of bytes for the host.
`public `[`usbus_hid_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid_1ga346dc005f8e8430a83ff6da8fc205a46)` `[`cb`](#structusbus__hid__device_1a5dc887e64e99d61f03393b058ecebf34) | Callback for data handlers.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`tx_ready`](#structusbus__hid__device_1a10dbae948b8362666150b3f7e449fdf7) | Transmit ready event.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`in_lock`](#structusbus__hid__device_1af8fcf99678c296584816e80c0b5ae9b4) | mutex used for locking hid send
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`out_buf`](#structusbus__hid__device_1affac9b3d73a44c501ac4229ed58c9773) | Host to device data buffer.
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`in_buf`](#structusbus__hid__device_1afed74a703173894d84784b43d3f32dd7) | Device to host data buffer.

## Members

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__hid__device_1a99b1fc8ba7ece3cde3cf8e4c9147a8d0) 

control handler

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface`](#structusbus__hid__device_1aa222155742a3e699ebdedad6258be787) 

HID interface.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_out`](#structusbus__hid__device_1afe0fcea4190e99397959c0295ed2fccd) 

OUT endpoint.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_in`](#structusbus__hid__device_1a2fc392ee4edde597a8b00f13a659dcda) 

IN endpoint.

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`hid_descr`](#structusbus__hid__device_1a00d39a3349c1263d3c8f3cab1ce6301f) 

HID descriptor generator.

#### `public const uint8_t * `[`report_desc`](#structusbus__hid__device_1af1156621d8aac28cf9e710eb788fc802) 

report descriptor reference

#### `public size_t `[`report_desc_size`](#structusbus__hid__device_1a52b22692f9aae4f49596dee8908a3013) 

report descriptor size

#### `public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__hid__device_1ac09b3b55adfbc1b3703771fcdfcd0748) 

USBUS reference.

#### `public size_t `[`occupied`](#structusbus__hid__device_1acaa5349177ee321d0457c873ddfb452a) 

Number of bytes for the host.

#### `public `[`usbus_hid_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid_1ga346dc005f8e8430a83ff6da8fc205a46)` `[`cb`](#structusbus__hid__device_1a5dc887e64e99d61f03393b058ecebf34) 

Callback for data handlers.

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`tx_ready`](#structusbus__hid__device_1a10dbae948b8362666150b3f7e449fdf7) 

Transmit ready event.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`in_lock`](#structusbus__hid__device_1af8fcf99678c296584816e80c0b5ae9b4) 

mutex used for locking hid send

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`out_buf`](#structusbus__hid__device_1affac9b3d73a44c501ac4229ed58c9773) 

Host to device data buffer.

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`in_buf`](#structusbus__hid__device_1afed74a703173894d84784b43d3f32dd7) 

Device to host data buffer.

