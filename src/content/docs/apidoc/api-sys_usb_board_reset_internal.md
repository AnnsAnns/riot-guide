---
title: api-sys_usb_board_reset_internal.md
description: api-sys_usb_board_reset_internal.md
---
# group `sys_usb_board_reset_internal` 

Callbacks provided by the USB_BOARD_RESET to the ACM subsystem.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`usb_board_reset_coding_cb`](#group__sys__usb__board__reset__internal_1gaa7ac353545fd66c84286e9733908129f)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,uint32_t baud,uint8_t bits,uint8_t parity,uint8_t stop)`            | USB coding callback used to trigger the board reset.

## Members

#### `public int `[`usb_board_reset_coding_cb`](#group__sys__usb__board__reset__internal_1gaa7ac353545fd66c84286e9733908129f)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,uint32_t baud,uint8_t bits,uint8_t parity,uint8_t stop)` 

USB coding callback used to trigger the board reset.

#### Parameters
* `cdcacm` Pointer to the cdcacm device 

* `baud` Baudrate used by the client. Only 1200 baud is taken into account 

* `bits` Number of bit mode used by the client 

* `parity` Parity mode used by the client 

* `stop` Stop bit mode used by the client

#### Returns
Always return 0

