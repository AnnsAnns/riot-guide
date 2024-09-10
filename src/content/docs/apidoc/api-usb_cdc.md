---
title: api-usb_cdc.md
description: api-usb_cdc.md
---
# group `usb_cdc` 

Generic USB CDC defines and helpers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USB_TYPE_DESCRIPTOR_CDC`](#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0)            | USB CDC type descriptor.
`define `[`USB_CDC_VERSION_BCD`](#group__usb__cdc_1gac959f16f51edf6defdcb724c294c0bb4)            | USB CDC version in BCD.
`struct `[`usb_desc_ecm_t`](#structusb__desc__ecm__t) | USB CDC ECM descriptor.
`struct `[`usb_desc_acm_t`](#structusb__desc__acm__t) | USB CDC ACM descriptor.
`struct `[`usb_desc_cdc_t`](#structusb__desc__cdc__t) | Generic USB CDC descriptor.
`struct `[`usb_desc_union_t`](#structusb__desc__union__t) | USB union descriptor.
`struct `[`usb_desc_call_mngt_t`](#structusb__desc__call__mngt__t) | USB CDC call management functional descriptor.
`struct `[`usb_desc_cdcecm_speed_t`](#structusb__desc__cdcecm__speed__t) | USB CDC ECM connection speed change notification.
`struct `[`usb_req_cdcacm_coding_t`](#structusb__req__cdcacm__coding__t) | USB CDC ACM line coding setup content.

## Members

#### `define `[`USB_TYPE_DESCRIPTOR_CDC`](#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0) 

USB CDC type descriptor.

#### `define `[`USB_CDC_VERSION_BCD`](#group__usb__cdc_1gac959f16f51edf6defdcb724c294c0bb4) 

USB CDC version in BCD.

# struct `usb_desc_ecm_t` 

USB CDC ECM descriptor.

**See also**: USB CDC 1.2 ECM spec table 3

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__ecm__t_1a5a2d296a5e95b22d41c29a1f9f9e3544) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__desc__ecm__t_1ae0a9dcc669489090f26a7b44178fe431) | Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))
`public uint8_t `[`subtype`](#structusb__desc__ecm__t_1a8918f369bc09ea480906bef4aa136e83) | Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_ETH_NET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1gad26e98bce9e5ac7c52dedd832e70b992))
`public uint8_t `[`macaddress`](#structusb__desc__ecm__t_1a4e0fbcb7986c6e795b26147bbcd06013) | Index of the string containing the ethernet MAC address.
`public uint32_t `[`ethernetstatistics`](#structusb__desc__ecm__t_1ae0c261f49d9e0a9bac177198560603a9) | Bitmap indicating the statistics caps.
`public uint16_t `[`maxsegmentsize`](#structusb__desc__ecm__t_1a0b1d0468c2f5d190e32d1a3f52578dbc) | Maximum segment size of the interface.
`public uint16_t `[`numbermcfilters`](#structusb__desc__ecm__t_1ab7c9acf3849a355ee0fe9dbddc2c17f9) | Number of configurable multicast filters.
`public uint8_t `[`numberpowerfilters`](#structusb__desc__ecm__t_1ac147fe1de5a920470e15d9ceef46f678) | Number of pattern filters for host wake-up.

## Members

#### `public uint8_t `[`length`](#structusb__desc__ecm__t_1a5a2d296a5e95b22d41c29a1f9f9e3544) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__desc__ecm__t_1ae0a9dcc669489090f26a7b44178fe431) 

Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))

#### `public uint8_t `[`subtype`](#structusb__desc__ecm__t_1a8918f369bc09ea480906bef4aa136e83) 

Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_ETH_NET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1gad26e98bce9e5ac7c52dedd832e70b992))

#### `public uint8_t `[`macaddress`](#structusb__desc__ecm__t_1a4e0fbcb7986c6e795b26147bbcd06013) 

Index of the string containing the ethernet MAC address.

#### `public uint32_t `[`ethernetstatistics`](#structusb__desc__ecm__t_1ae0c261f49d9e0a9bac177198560603a9) 

Bitmap indicating the statistics caps.

#### `public uint16_t `[`maxsegmentsize`](#structusb__desc__ecm__t_1a0b1d0468c2f5d190e32d1a3f52578dbc) 

Maximum segment size of the interface.

#### `public uint16_t `[`numbermcfilters`](#structusb__desc__ecm__t_1ab7c9acf3849a355ee0fe9dbddc2c17f9) 

Number of configurable multicast filters.

#### `public uint8_t `[`numberpowerfilters`](#structusb__desc__ecm__t_1ac147fe1de5a920470e15d9ceef46f678) 

Number of pattern filters for host wake-up.

# struct `usb_desc_acm_t` 

USB CDC ACM descriptor.

**See also**: USB CDC 1.2 PTSN spec table 4

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__acm__t_1a95a1e2b775ee33f46d44ab188f0950a7) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__desc__acm__t_1a806cadac218f83ba4b31b046d5c3c6fa) | Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))
`public uint8_t `[`subtype`](#structusb__desc__acm__t_1a0c951ea33785854959ec4b19568fab0a) | Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_ACM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga9a417604bfe4b96c64a7267e35f32bc7))
`public uint8_t `[`capabilities`](#structusb__desc__acm__t_1af37258457f059939de89cfb2e0f669d1) | Bitmap indicating the capabilities.

## Members

#### `public uint8_t `[`length`](#structusb__desc__acm__t_1a95a1e2b775ee33f46d44ab188f0950a7) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__desc__acm__t_1a806cadac218f83ba4b31b046d5c3c6fa) 

Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))

#### `public uint8_t `[`subtype`](#structusb__desc__acm__t_1a0c951ea33785854959ec4b19568fab0a) 

Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_ACM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga9a417604bfe4b96c64a7267e35f32bc7))

#### `public uint8_t `[`capabilities`](#structusb__desc__acm__t_1af37258457f059939de89cfb2e0f669d1) 

Bitmap indicating the capabilities.

# struct `usb_desc_cdc_t` 

Generic USB CDC descriptor.

**See also**: USB CDC 1.2 spec table 15

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__cdc__t_1a482c31179426328ffd3fa0d45fa13774) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__desc__cdc__t_1acd511eae41b4797c3a6ccfdf90bddc8d) | Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))
`public uint8_t `[`subtype`](#structusb__desc__cdc__t_1a3265db85ecd20d66af20d279131b1222) | Descriptor subtype ([usb_cdc_subtype](#group__usb__cdc_1usb_cdc_subtype))
`public uint16_t `[`bcd_cdc`](#structusb__desc__cdc__t_1afbf6e2812317322dfad6a01f5a9ca8c2) | CDC release number in bcd ([USB_CDC_VERSION_BCD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1gac959f16f51edf6defdcb724c294c0bb4))

## Members

#### `public uint8_t `[`length`](#structusb__desc__cdc__t_1a482c31179426328ffd3fa0d45fa13774) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__desc__cdc__t_1acd511eae41b4797c3a6ccfdf90bddc8d) 

Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))

#### `public uint8_t `[`subtype`](#structusb__desc__cdc__t_1a3265db85ecd20d66af20d279131b1222) 

Descriptor subtype ([usb_cdc_subtype](#group__usb__cdc_1usb_cdc_subtype))

#### `public uint16_t `[`bcd_cdc`](#structusb__desc__cdc__t_1afbf6e2812317322dfad6a01f5a9ca8c2) 

CDC release number in bcd ([USB_CDC_VERSION_BCD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1gac959f16f51edf6defdcb724c294c0bb4))

# struct `usb_desc_union_t` 

USB union descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__union__t_1a315840117d3adc17534a422a20c2e94a) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__desc__union__t_1aea95c5c22ed706c4d16fe7a88ed41bb0) | Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))
`public uint8_t `[`subtype`](#structusb__desc__union__t_1a89861794807e43c1502418a27646d33b) | Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_UNION](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga88fad1d6d55f07eb7e8630caf74a0896))
`public uint8_t `[`master_if`](#structusb__desc__union__t_1a223b9fbaad3b6def5cf1f1e0591e9273) | Master/controlling interface number.
`public uint8_t `[`slave_if`](#structusb__desc__union__t_1a32a34d6fe49fed1f779ca58d1bd146e8) | Slave/subordinate interface number.

## Members

#### `public uint8_t `[`length`](#structusb__desc__union__t_1a315840117d3adc17534a422a20c2e94a) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__desc__union__t_1aea95c5c22ed706c4d16fe7a88ed41bb0) 

Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))

#### `public uint8_t `[`subtype`](#structusb__desc__union__t_1a89861794807e43c1502418a27646d33b) 

Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_UNION](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga88fad1d6d55f07eb7e8630caf74a0896))

#### `public uint8_t `[`master_if`](#structusb__desc__union__t_1a223b9fbaad3b6def5cf1f1e0591e9273) 

Master/controlling interface number.

#### `public uint8_t `[`slave_if`](#structusb__desc__union__t_1a32a34d6fe49fed1f779ca58d1bd146e8) 

Slave/subordinate interface number.

# struct `usb_desc_call_mngt_t` 

USB CDC call management functional descriptor.

**See also**: USB CDC 1.2 PSTN spec table 13

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__call__mngt__t_1a0f83de72fd594ad6d9554882a99a3bb5) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__desc__call__mngt__t_1a9248cdf6bc373c7bccb3c64c4ce90e07) | Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))
`public uint8_t `[`subtype`](#structusb__desc__call__mngt__t_1af6f3ceb24f427736bea467e92c76300c) | Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_CALL_MGMT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga8b340971a35fddd629b3db1e4ee5c691))
`public uint8_t `[`capabilities`](#structusb__desc__call__mngt__t_1a4fa08cd8e4a6b3790866631f8287694c) | Supported capabilities.
`public uint8_t `[`data_if`](#structusb__desc__call__mngt__t_1ac057dd91e4615a2c5b0637e6b9e0abb2) | Interface number used for the call management.

## Members

#### `public uint8_t `[`length`](#structusb__desc__call__mngt__t_1a0f83de72fd594ad6d9554882a99a3bb5) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__desc__call__mngt__t_1a9248cdf6bc373c7bccb3c64c4ce90e07) 

Descriptor type ([USB_TYPE_DESCRIPTOR_CDC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga804e8c911505254d69210273295d9bd0))

#### `public uint8_t `[`subtype`](#structusb__desc__call__mngt__t_1af6f3ceb24f427736bea467e92c76300c) 

Descriptor subtype ([USB_CDC_DESCR_SUBTYPE_CALL_MGMT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__cdc_1ga8b340971a35fddd629b3db1e4ee5c691))

#### `public uint8_t `[`capabilities`](#structusb__desc__call__mngt__t_1a4fa08cd8e4a6b3790866631f8287694c) 

Supported capabilities.

#### `public uint8_t `[`data_if`](#structusb__desc__call__mngt__t_1ac057dd91e4615a2c5b0637e6b9e0abb2) 

Interface number used for the call management.

# struct `usb_desc_cdcecm_speed_t` 

USB CDC ECM connection speed change notification.

**See also**: USB CDC 1.2 spec section 6.3.3

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usb_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_descriptor.md#structusb__setup__t)` `[`setup`](#structusb__desc__cdcecm__speed__t_1acca17cc67f8dc7103ea6cb78092e9d6d) | Setup request header for the notification.
`public uint32_t `[`down`](#structusb__desc__cdcecm__speed__t_1a772fb1761262144fbf431755af007a89) | Downlink bit rate.
`public uint32_t `[`up`](#structusb__desc__cdcecm__speed__t_1aa24eba9581bcbb1f83b27bbe93b79cc5) | Uplink bit rate.

## Members

#### `public `[`usb_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_descriptor.md#structusb__setup__t)` `[`setup`](#structusb__desc__cdcecm__speed__t_1acca17cc67f8dc7103ea6cb78092e9d6d) 

Setup request header for the notification.

#### `public uint32_t `[`down`](#structusb__desc__cdcecm__speed__t_1a772fb1761262144fbf431755af007a89) 

Downlink bit rate.

#### `public uint32_t `[`up`](#structusb__desc__cdcecm__speed__t_1aa24eba9581bcbb1f83b27bbe93b79cc5) 

Uplink bit rate.

# struct `usb_req_cdcacm_coding_t` 

USB CDC ACM line coding setup content.

**See also**: USB CDC 1.2 PSTN subclass spec section 6.3.11

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`baud`](#structusb__req__cdcacm__coding__t_1aa91e86c8f52dd2e4dbd2472d96fc6959) | Requested baud rate
`public uint8_t `[`format`](#structusb__req__cdcacm__coding__t_1a4c3f47aaeef68b56a3009b64975f34cf) | Stop bits settings
`public uint8_t `[`parity`](#structusb__req__cdcacm__coding__t_1a34a82653887f72ac355107734792ebc4) | Parity settings
`public uint8_t `[`databits`](#structusb__req__cdcacm__coding__t_1a7d6aac17ac712d845a30a598abddbecf) | Number of data bits (5, 6, 7, 8 or 16)

## Members

#### `public uint32_t `[`baud`](#structusb__req__cdcacm__coding__t_1aa91e86c8f52dd2e4dbd2472d96fc6959) 

Requested baud rate

#### `public uint8_t `[`format`](#structusb__req__cdcacm__coding__t_1a4c3f47aaeef68b56a3009b64975f34cf) 

Stop bits settings

#### `public uint8_t `[`parity`](#structusb__req__cdcacm__coding__t_1a34a82653887f72ac355107734792ebc4) 

Parity settings

#### `public uint8_t `[`databits`](#structusb__req__cdcacm__coding__t_1a7d6aac17ac712d845a30a598abddbecf) 

Number of data bits (5, 6, 7, 8 or 16)

