---
title: api-usbus_cdc_ecm.md
description: api-usbus_cdc_ecm.md
---
# group `usbus_cdc_ecm` 

USBUS CDC ECM interface module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_USBUS_CDC_ECM_CONFIG_SPEED`](#group__usbus__cdc__ecm_1ga70fd152e64ec3b449c1b0539eba44fe7)            | Link throughput as reported by the peripheral.
`define `[`CONFIG_USBUS_CDC_ECM_CONFIG_SPEED_DOWNSTREAM`](#group__usbus__cdc__ecm_1ga2d0713d776e5effe7bdfb1cfb03746b0)            | Link download speed as reported by the peripheral.
`define `[`CONFIG_USBUS_CDC_ECM_CONFIG_SPEED_UPSTREAM`](#group__usbus__cdc__ecm_1ga424f2e3ae5a47ada3599fe989b7df512)            | Link upload speed as reported by the peripheral.
`define `[`USBUS_CDCECM_EP_CTRL_SIZE`](#group__usbus__cdc__ecm_1ga54e3abe1429f747ace7dde6b1972da34)            | CDC ECM interrupt endpoint size.
`define `[`USBUS_CDCECM_EP_DATA_SIZE`](#group__usbus__cdc__ecm_1ga66117434eb5762ea279e7daf55884231)            | CDC ECM bulk data endpoint size.
`define `[`USBUS_ETHERNET_FRAME_BUF`](#group__usbus__cdc__ecm_1ga8e331ded7588dfb1ed23c893a51e4c70)            | Full ethernet frame rounded up to a whole number of transfers.
`define `[`USBUS_CDC_ECM_EP_IN_REQUIRED_NUMOF`](#group__usbus__cdc__ecm_1gacdf7bd13739736bf3312ec413bc925a5)            | Number of IN EPs required for the CDC ECM interface.
`define `[`USBUS_CDC_ECM_EP_OUT_REQUIRED_NUMOF`](#group__usbus__cdc__ecm_1ga7f550b1ec8253999f798713e7e0fcffc)            | Number of Out EPs required for the CDC ECM interface.
`enum `[`usbus_cdcecm_notif_t`](#group__usbus__cdc__ecm_1ga76d14441c853f99f12d25b8b2af97221)            | notification state, used to track which information must be send to the host
`public void `[`usbus_cdcecm_init`](#group__usbus__cdc__ecm_1gac16f068f133d82425afd852bc352940d)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_cdcecm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__ecm_1gacc7d251e4621ec877ebe2508e6596271)` * handler)`            | CDC ECM initialization function.
`struct `[`usbus_cdcecm_device`](#structusbus__cdcecm__device) | USBUS CDC ECM device interface context.

## Members

#### `define `[`CONFIG_USBUS_CDC_ECM_CONFIG_SPEED`](#group__usbus__cdc__ecm_1ga70fd152e64ec3b449c1b0539eba44fe7) 

Link throughput as reported by the peripheral.

This defines a common up and down link throughput in bits/second. The USB peripheral will report this to the host. This doesn't affect the actual throughput, only what the peripheral reports to the host.

#### `define `[`CONFIG_USBUS_CDC_ECM_CONFIG_SPEED_DOWNSTREAM`](#group__usbus__cdc__ecm_1ga2d0713d776e5effe7bdfb1cfb03746b0) 

Link download speed as reported by the peripheral.

#### `define `[`CONFIG_USBUS_CDC_ECM_CONFIG_SPEED_UPSTREAM`](#group__usbus__cdc__ecm_1ga424f2e3ae5a47ada3599fe989b7df512) 

Link upload speed as reported by the peripheral.

#### `define `[`USBUS_CDCECM_EP_CTRL_SIZE`](#group__usbus__cdc__ecm_1ga54e3abe1429f747ace7dde6b1972da34) 

CDC ECM interrupt endpoint size.

Used by the device to report events to the host.

Must be at least 16B to allow for reporting the link throughput

#### `define `[`USBUS_CDCECM_EP_DATA_SIZE`](#group__usbus__cdc__ecm_1ga66117434eb5762ea279e7daf55884231) 

CDC ECM bulk data endpoint size.

Used for the transfer of network frames.

#### `define `[`USBUS_ETHERNET_FRAME_BUF`](#group__usbus__cdc__ecm_1ga8e331ded7588dfb1ed23c893a51e4c70) 

Full ethernet frame rounded up to a whole number of transfers.

#### `define `[`USBUS_CDC_ECM_EP_IN_REQUIRED_NUMOF`](#group__usbus__cdc__ecm_1gacdf7bd13739736bf3312ec413bc925a5) 

Number of IN EPs required for the CDC ECM interface.

#### `define `[`USBUS_CDC_ECM_EP_OUT_REQUIRED_NUMOF`](#group__usbus__cdc__ecm_1ga7f550b1ec8253999f798713e7e0fcffc) 

Number of Out EPs required for the CDC ECM interface.

#### `enum `[`usbus_cdcecm_notif_t`](#group__usbus__cdc__ecm_1ga76d14441c853f99f12d25b8b2af97221) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_CDCECM_NOTIF_NONE            | Nothing notified so far.
USBUS_CDCECM_NOTIF_LINK_UP            | Link status is notified.
USBUS_CDCECM_NOTIF_SPEED            | Link speed is notified.

notification state, used to track which information must be send to the host

#### `public void `[`usbus_cdcecm_init`](#group__usbus__cdc__ecm_1gac16f068f133d82425afd852bc352940d)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_cdcecm_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__ecm_1gacc7d251e4621ec877ebe2508e6596271)` * handler)` 

CDC ECM initialization function.

#### Parameters
* `usbus` USBUS thread to use 

* `handler` CDCECM device struct

# struct `usbus_cdcecm_device` 

USBUS CDC ECM device interface context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__cdcecm__device_1a8b020aa6589adfb40bf8324124b47d5a) | Control interface handler.
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_data`](#structusbus__cdcecm__device_1a3094f42b89f6c249ea482c99a4cbe37a) | Data interface.
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_ctrl`](#structusbus__cdcecm__device_1a706c185533f56a0b717d92a763be87aa) | Control interface.
`public `[`usbus_interface_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga16469c8bc2bc42190f9cd98bef9f4aa5)` `[`iface_data_alt`](#structusbus__cdcecm__device_1ae669a8d940841f584ce77dcd48e9a72d) | Data alternative (active) interface.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_in`](#structusbus__cdcecm__device_1ab9b2083fe2d9956471fd101dc71120f0) | Data endpoint in.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_out`](#structusbus__cdcecm__device_1a9729439aa76167eb04f301c2789a9a98) | Data endpoint out.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_ctrl`](#structusbus__cdcecm__device_1a3face714b1eb165b42c791f9e959d6c0) | Control endpoint.
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`ecm_descr`](#structusbus__cdcecm__device_1a655f586e925e108880c1e93ad0b60963) | ECM descriptor generator.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`rx_flush`](#structusbus__cdcecm__device_1acf40a994623e4f58b1e0493185b09311) | Receive flush event.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`tx_xmit`](#structusbus__cdcecm__device_1a6721b289783443dd872c54ef68a5939e) | Transmit ready event.
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structusbus__cdcecm__device_1a6335b1e557b93b7eb25e63b1c014f153) | Netdev context struct.
`public uint8_t `[`mac_netdev`](#structusbus__cdcecm__device_1ae62afe988fba61cf42b1c67594fa6a6f) | this device's MAC address
`public char `[`mac_host`](#structusbus__cdcecm__device_1aa112df868f1f20a6a26a59a3d616ba67) | host side's MAC address as string
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`mac_str`](#structusbus__cdcecm__device_1afa4540d988076c6a62e711790a5c5185) | String context for the host side mac address.
`public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__cdcecm__device_1aeac0ac60103b0bbc35f00fa57edcdac7) | Ptr to the USBUS context.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`out_lock`](#structusbus__cdcecm__device_1aa14e537239df4fec0b09fb88f56947de) | mutex used for locking netif/USBUS send
`public size_t `[`tx_len`](#structusbus__cdcecm__device_1a76a548f5a96d7773d4cd857337a84aea) | Length of the current tx frame.
`public `[`usbus_cdcecm_notif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__ecm_1ga76d14441c853f99f12d25b8b2af97221)` `[`notif`](#structusbus__cdcecm__device_1a16afa9b25109cf5eac396918c827321c) | Startup message notification tracker.
`public unsigned `[`active_iface`](#structusbus__cdcecm__device_1a72214a8e0e79a00ae4bbb941bd4b9dbc) | Current active data interface.
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`data_out`](#structusbus__cdcecm__device_1a358a267c00d54d07c46c30525496e48e) | Buffer for received frames from the host.
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`data_in`](#structusbus__cdcecm__device_1a2b6acabc065c2659fb81856808345d95) | Host in device out data buffer.
`public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`control_in`](#structusbus__cdcecm__device_1a204649c99d3767ad374369ac3a0db3fe) | Host out device in control buffer.
`public `[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` `[`out_urb`](#structusbus__cdcecm__device_1acde0fe7786cbadb24e855a9b6a1bad70) | Host out device in reception URB.

## Members

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__cdcecm__device_1a8b020aa6589adfb40bf8324124b47d5a) 

Control interface handler.

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_data`](#structusbus__cdcecm__device_1a3094f42b89f6c249ea482c99a4cbe37a) 

Data interface.

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface_ctrl`](#structusbus__cdcecm__device_1a706c185533f56a0b717d92a763be87aa) 

Control interface.

#### `public `[`usbus_interface_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga16469c8bc2bc42190f9cd98bef9f4aa5)` `[`iface_data_alt`](#structusbus__cdcecm__device_1ae669a8d940841f584ce77dcd48e9a72d) 

Data alternative (active) interface.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_in`](#structusbus__cdcecm__device_1ab9b2083fe2d9956471fd101dc71120f0) 

Data endpoint in.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_out`](#structusbus__cdcecm__device_1a9729439aa76167eb04f301c2789a9a98) 

Data endpoint out.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep_ctrl`](#structusbus__cdcecm__device_1a3face714b1eb165b42c791f9e959d6c0) 

Control endpoint.

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`ecm_descr`](#structusbus__cdcecm__device_1a655f586e925e108880c1e93ad0b60963) 

ECM descriptor generator.

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`rx_flush`](#structusbus__cdcecm__device_1acf40a994623e4f58b1e0493185b09311) 

Receive flush event.

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`tx_xmit`](#structusbus__cdcecm__device_1a6721b289783443dd872c54ef68a5939e) 

Transmit ready event.

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structusbus__cdcecm__device_1a6335b1e557b93b7eb25e63b1c014f153) 

Netdev context struct.

#### `public uint8_t `[`mac_netdev`](#structusbus__cdcecm__device_1ae62afe988fba61cf42b1c67594fa6a6f) 

this device's MAC address

#### `public char `[`mac_host`](#structusbus__cdcecm__device_1aa112df868f1f20a6a26a59a3d616ba67) 

host side's MAC address as string

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`mac_str`](#structusbus__cdcecm__device_1afa4540d988076c6a62e711790a5c5185) 

String context for the host side mac address.

#### `public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__cdcecm__device_1aeac0ac60103b0bbc35f00fa57edcdac7) 

Ptr to the USBUS context.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`out_lock`](#structusbus__cdcecm__device_1aa14e537239df4fec0b09fb88f56947de) 

mutex used for locking netif/USBUS send

#### `public size_t `[`tx_len`](#structusbus__cdcecm__device_1a76a548f5a96d7773d4cd857337a84aea) 

Length of the current tx frame.

#### `public `[`usbus_cdcecm_notif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__ecm_1ga76d14441c853f99f12d25b8b2af97221)` `[`notif`](#structusbus__cdcecm__device_1a16afa9b25109cf5eac396918c827321c) 

Startup message notification tracker.

#### `public unsigned `[`active_iface`](#structusbus__cdcecm__device_1a72214a8e0e79a00ae4bbb941bd4b9dbc) 

Current active data interface.

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`data_out`](#structusbus__cdcecm__device_1a358a267c00d54d07c46c30525496e48e) 

Buffer for received frames from the host.

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`data_in`](#structusbus__cdcecm__device_1a2b6acabc065c2659fb81856808345d95) 

Host in device out data buffer.

#### `public `[`usbdev_ep_buf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)` `[`control_in`](#structusbus__cdcecm__device_1a204649c99d3767ad374369ac3a0db3fe) 

Host out device in control buffer.

#### `public `[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` `[`out_urb`](#structusbus__cdcecm__device_1acde0fe7786cbadb24e855a9b6a1bad70) 

Host out device in reception URB.

