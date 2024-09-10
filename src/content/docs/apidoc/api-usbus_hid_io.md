---
title: api-usbus_hid_io.md
description: api-usbus_hid_io.md
---
# group `usbus_hid_io` 

USBUS HID IO interface module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`usb_hid_io_set_rx_cb`](#group__usbus__hid__io_1gad7318707805469efa79bace6145a48cb)`(`[`usb_hid_io_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid__io_1gab912ecdb5066cc79a541c2a39175aea0)` cb,void * arg)`            | Set USBUS HID IO RX callback.
`public void `[`usb_hid_io_write`](#group__usbus__hid__io_1ga8331383eb65ef806480c176cd22fb7f1)`(const void * buffer,size_t len)`            | Write data to USB HID IN endpoint buffer.
`public int `[`usb_hid_io_read`](#group__usbus__hid__io_1gaee9d92a570ab8b585c49a3e4067a929d)`(void * buffer,size_t len)`            | Read data from USB HID OUT endpoint (blocking)
`public int `[`usb_hid_io_read_timeout`](#group__usbus__hid__io_1ga5352276d3223d68ac6cb06d4d2615644)`(void * buffer,size_t len,uint32_t timeout)`            | Read data from USB HID OUT endpoint (with timeout, blocking)
`public void `[`usb_hid_io_init`](#group__usbus__hid__io_1ga8f0c23c66d559be0368708e8da207516)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,const uint8_t * report_desc,size_t report_desc_size)`            | Initialize an USB HID IO interface.

## Members

#### `public void `[`usb_hid_io_set_rx_cb`](#group__usbus__hid__io_1gad7318707805469efa79bace6145a48cb)`(`[`usb_hid_io_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__hid__io_1gab912ecdb5066cc79a541c2a39175aea0)` cb,void * arg)` 

Set USBUS HID IO RX callback.

#### Parameters
* `cb` callback function to use 

* `arg` argument that will be passed to `cb`

#### `public void `[`usb_hid_io_write`](#group__usbus__hid__io_1ga8331383eb65ef806480c176cd22fb7f1)`(const void * buffer,size_t len)` 

Write data to USB HID IN endpoint buffer.

`buffer != NULL`

#### Parameters
* `buffer` buffer containing data to write 

* `len` length of buffer

#### `public int `[`usb_hid_io_read`](#group__usbus__hid__io_1gaee9d92a570ab8b585c49a3e4067a929d)`(void * buffer,size_t len)` 

Read data from USB HID OUT endpoint (blocking)

Wrapper for [isrpipe_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__isr__pipe_1gaf066dd71aef275a690ed0ed8419e3332)

`buffer != NULL`

#### Parameters
* `buffer` buffer to read data into 

* `len` length of buffer

#### Returns
Number of bytes read

#### `public int `[`usb_hid_io_read_timeout`](#group__usbus__hid__io_1ga5352276d3223d68ac6cb06d4d2615644)`(void * buffer,size_t len,uint32_t timeout)` 

Read data from USB HID OUT endpoint (with timeout, blocking)

Wrapper for [isrpipe_read_timeout](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__isr__pipe__read__timeout_1ga5d26043d8420d2d9fc4bbeef804319a0)

`buffer != NULL`

#### Parameters
* `buffer` buffer to read data into 

* `len` length of buffer 

* `timeout` timeout in microseconds

#### Returns
Number of bytes read

#### `public void `[`usb_hid_io_init`](#group__usbus__hid__io_1ga8f0c23c66d559be0368708e8da207516)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,const uint8_t * report_desc,size_t report_desc_size)` 

Initialize an USB HID IO interface.

#### Parameters
* `usbus` USBUS context 

* `report_desc` USB_HID report descriptor 

* `report_desc_size` size of USB_HID report descriptor

