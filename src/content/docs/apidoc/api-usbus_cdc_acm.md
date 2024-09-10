---
title: api-usbus_cdc_acm.md
description: api-usbus_cdc_acm.md
---
# group `usbus_cdc_acm` 

USBUS CDC ACM interface module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USBUS_CDC_ACM_INT_EP_SIZE`](#group__usbus__cdc__acm_1gae7f21779d32ca20abb3229f0b4205d7b)            | USBUS CDC ACM interrupt endpoint size.
`define `[`USBUS_CDC_ACM_EP_IN_REQUIRED_NUMOF`](#group__usbus__cdc__acm_1ga8924c0facae3b4603b05ed48d23b4d5d)            | Number of IN EPs required for the CDC ACM interface.
`define `[`USBUS_CDC_ACM_EP_OUT_REQUIRED_NUMOF`](#group__usbus__cdc__acm_1ga91c0f6ddeb4bd6c2edd04ac86a0e41fa)            | Number of Out EPs required for the CDC ACM interface.
`enum `[`usbus_cdcacm_line_state_t`](#group__usbus__cdc__acm_1ga00305af294a84012971732d7b3b62e6c)            | CDC ACM line state as reported by the host computer.
`public void `[`usbus_cdc_acm_init`](#group__usbus__cdc__acm_1ga46f04a6cc7362504d6319f1fcadca400)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,`[`usbus_cdcacm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga3a713164e3ee50a7f3e2dae079392dad)` cb,`[`usbus_cdcacm_coding_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga858955682a87febb014609ecd5ac6995)` coding_cb,uint8_t * buf,size_t len)`            | Initialize an USBUS CDC ACM interface.
`public size_t `[`usbus_cdc_acm_submit`](#group__usbus__cdc__acm_1ga552c2de35ff35a8e8536da7c72723eca)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,const uint8_t * buf,size_t len)`            | Submit bytes to the CDC ACM handler.
`public void `[`usbus_cdc_acm_flush`](#group__usbus__cdc__acm_1ga6b66598e22c5bc551a5c61896d74b6e9)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm)`            | Flush the buffer to the USB host.
`public void `[`usbus_cdc_acm_set_coding_cb`](#group__usbus__cdc__acm_1ga4f5f0c11b1fe815398cbd03dd6c76eaf)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,`[`usbus_cdcacm_coding_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga858955682a87febb014609ecd5ac6995)` coding_cb)`            | Set the callback for control settings.
`struct `[`usbus_cdcacm_device`](#structusbus__cdcacm__device) | USBUS CDC ACM context struct.

## Members

#### `define `[`USBUS_CDC_ACM_INT_EP_SIZE`](#group__usbus__cdc__acm_1gae7f21779d32ca20abb3229f0b4205d7b) 

USBUS CDC ACM interrupt endpoint size.

#### `define `[`USBUS_CDC_ACM_EP_IN_REQUIRED_NUMOF`](#group__usbus__cdc__acm_1ga8924c0facae3b4603b05ed48d23b4d5d) 

Number of IN EPs required for the CDC ACM interface.

#### `define `[`USBUS_CDC_ACM_EP_OUT_REQUIRED_NUMOF`](#group__usbus__cdc__acm_1ga91c0f6ddeb4bd6c2edd04ac86a0e41fa) 

Number of Out EPs required for the CDC ACM interface.

#### `enum `[`usbus_cdcacm_line_state_t`](#group__usbus__cdc__acm_1ga00305af294a84012971732d7b3b62e6c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_CDC_ACM_LINE_STATE_DISCONNECTED            | No DTE connected.
USBUS_CDC_ACM_LINE_STATE_DTE            | DTE (e.g.

CDC ACM line state as reported by the host computer.

#### `public void `[`usbus_cdc_acm_init`](#group__usbus__cdc__acm_1ga46f04a6cc7362504d6319f1fcadca400)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,`[`usbus_cdcacm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga3a713164e3ee50a7f3e2dae079392dad)` cb,`[`usbus_cdcacm_coding_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga858955682a87febb014609ecd5ac6995)` coding_cb,uint8_t * buf,size_t len)` 

Initialize an USBUS CDC ACM interface.

#### Parameters
* `usbus` USBUS context to register with 

* `cdcacm` USBUS CDC ACM handler 

* `cb` Callback for data from the USB interface 

* `coding_cb` Callback for control settings 

* `buf` Buffer for data to the USB interface 

* `len` Size in bytes of the buffer

#### `public size_t `[`usbus_cdc_acm_submit`](#group__usbus__cdc__acm_1ga552c2de35ff35a8e8536da7c72723eca)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,const uint8_t * buf,size_t len)` 

Submit bytes to the CDC ACM handler.

#### Parameters
* `cdcacm` USBUS CDC ACM handler context 

* `buf` buffer to submit 

* `len` length of the submitted buffer

#### Returns
Number of bytes added to the CDC ACM ring buffer

#### `public void `[`usbus_cdc_acm_flush`](#group__usbus__cdc__acm_1ga6b66598e22c5bc551a5c61896d74b6e9)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm)` 

Flush the buffer to the USB host.

#### Parameters
* `cdcacm` USBUS CDC ACM handler context

#### `public void `[`usbus_cdc_acm_set_coding_cb`](#group__usbus__cdc__acm_1ga4f5f0c11b1fe815398cbd03dd6c76eaf)`(`[`usbus_cdcacm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1gab8aee4067d283fc8bc170ba8cef552cc)` * cdcacm,`[`usbus_cdcacm_coding_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga858955682a87febb014609ecd5ac6995)` coding_cb)` 

Set the callback for control settings.

Interrupts are disabled during update to ensure thread safety

#### Parameters
* `cdcacm` USBUS CDC ACM handler context 

* `coding_cb` Callback for control settings

# struct `usbus_cdcacm_device` 

USBUS CDC ACM context struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__cdcacm__device_1a5d2f1be1e062541c0a29226e5c45d79a) | control handler
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_ctrl`](#structusbus__cdcacm__device_1a683707f5252e294e386b5052e87fde5a) | CDC control interface
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_data`](#structusbus__cdcacm__device_1a74a395bfb8aa686681af4cb6e77c06ff) | CDC data interface
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`cdcacm_descr`](#structusbus__cdcacm__device_1ae781de715c62a43a6f9dc63a4703b3d8) | CDC descriptor generator
`public `[`usbus_cdcacm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga3a713164e3ee50a7f3e2dae079392dad)` `[`cb`](#structusbus__cdcacm__device_1ab3eec9c09f4ec61ae6017afc025a0736) | Callback for data handlers
`public `[`usbus_cdcacm_coding_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga858955682a87febb014609ecd5ac6995)` `[`coding_cb`](#structusbus__cdcacm__device_1a03324158e60f4a258a392fce7972a48a) | Callback for ACM coding changes.
`public `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` `[`tsrb`](#structusbus__cdcacm__device_1a4bcbf1a49c007718a12445ff5af772e7) | TSRB for data to the host
`public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__cdcacm__device_1a5a077271cfecc9d4e5d6c41cc6a78d6b) | USBUS reference
`public size_t `[`occupied`](#structusbus__cdcacm__device_1a6fe7a4cea510b95b5525b9942a3470fb) | Number of bytes for the host
`public `[`usbus_cdcacm_line_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga00305af294a84012971732d7b3b62e6c)` `[`state`](#structusbus__cdcacm__device_1a5bb3ee009a5d7c03830d0bb4832f1d98) | Current line state
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`flush`](#structusbus__cdcacm__device_1a5a200af6adf36fe13c7d4eeec6cf58a2) | device2host forced flush event
`public `[`usb_req_cdcacm_coding_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_cdc.md#structusb__req__cdcacm__coding__t)` `[`coding`](#structusbus__cdcacm__device_1a67998acaf619a4a32d1c7e849de0e683) | Current coding configuration
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`out_buf`](#structusbus__cdcacm__device_1aa4ae7e4cda995efd884c49be38d55a9c) | Host to device data buffer.
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`in_buf`](#structusbus__cdcacm__device_1aed72a916d24ccd78c10f539e51acb416) | Device to host data buffer.

## Members

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__cdcacm__device_1a5d2f1be1e062541c0a29226e5c45d79a) 

control handler

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_ctrl`](#structusbus__cdcacm__device_1a683707f5252e294e386b5052e87fde5a) 

CDC control interface

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_data`](#structusbus__cdcacm__device_1a74a395bfb8aa686681af4cb6e77c06ff) 

CDC data interface

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`cdcacm_descr`](#structusbus__cdcacm__device_1ae781de715c62a43a6f9dc63a4703b3d8) 

CDC descriptor generator

#### `public `[`usbus_cdcacm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga3a713164e3ee50a7f3e2dae079392dad)` `[`cb`](#structusbus__cdcacm__device_1ab3eec9c09f4ec61ae6017afc025a0736) 

Callback for data handlers

#### `public `[`usbus_cdcacm_coding_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga858955682a87febb014609ecd5ac6995)` `[`coding_cb`](#structusbus__cdcacm__device_1a03324158e60f4a258a392fce7972a48a) 

Callback for ACM coding changes.

#### `public `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` `[`tsrb`](#structusbus__cdcacm__device_1a4bcbf1a49c007718a12445ff5af772e7) 

TSRB for data to the host

#### `public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__cdcacm__device_1a5a077271cfecc9d4e5d6c41cc6a78d6b) 

USBUS reference

#### `public size_t `[`occupied`](#structusbus__cdcacm__device_1a6fe7a4cea510b95b5525b9942a3470fb) 

Number of bytes for the host

#### `public `[`usbus_cdcacm_line_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm_1ga00305af294a84012971732d7b3b62e6c)` `[`state`](#structusbus__cdcacm__device_1a5bb3ee009a5d7c03830d0bb4832f1d98) 

Current line state

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`flush`](#structusbus__cdcacm__device_1a5a200af6adf36fe13c7d4eeec6cf58a2) 

device2host forced flush event

#### `public `[`usb_req_cdcacm_coding_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_cdc.md#structusb__req__cdcacm__coding__t)` `[`coding`](#structusbus__cdcacm__device_1a67998acaf619a4a32d1c7e849de0e683) 

Current coding configuration

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`out_buf`](#structusbus__cdcacm__device_1aa4ae7e4cda995efd884c49be38d55a9c) 

Host to device data buffer.

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`in_buf`](#structusbus__cdcacm__device_1aed72a916d24ccd78c10f539e51acb416) 

Device to host data buffer.

