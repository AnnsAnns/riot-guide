---
title: api-pkg_tinyusb_netdev.md
description: api-pkg_tinyusb_netdev.md
---
# group `pkg_tinyusb_netdev` 

TinyUSB netdev driver for CDC ECM, CDC NCM and RNDIS protocol.

The tinyUSB netdev driver is part of the [tinyUSB package](#group__pkg__tinyusb_1pkg_tinyusb) and is enabled by module `tinyusb_netdev`. It is available for boards that provide the `tinyusb_device` feature.

Since the tinyUSB package is distinct from (and incompatible with) the USB stack provided around USBUS in RIOT (see USB), the tinyUSB netdev driver cannot be used together with with any USBUS device class.

The tinyUSB netdev driver uses Ethernet over USB and supports the following protocols:

* CDC ECM (Ethernet Control Model)

* CDC NCM ([Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Control Model)

* RNDIS (Microsoft Remote NDIS)

While Linux and macOS support all these protocols, Microsoft Windows only supports the RNDIS protocol and since Windows version 11 also the CDC NCM protocol. macOS supports the RNDIS protocol since version 10.15 (Catalina).

Which protocol is used is selected by the corresponding pseudomodules `tinyusb_class_net_cdc_ecm`, `tinyusb_class_net_cdc_ncm` and `tinyusb_class_net_rndis`.

The CDC ECM protocol (`tinyusb_class_net_cdc_ecm`) and the RNDIS protocol (`tinyusb_class_net_rndis`) can be used simultaneously to support all operating systems, for example : 
```cpp
USEMODULE='tinyusb_netdev tinyusb_class_net_rndis tinyusb_class_net_cdc_ecm' \
BOARD=... make -C ... flash
```
 In this case, the CDC ECM protocol is the default protocol and the RNDIS protocol the alternative protocol defined as second device configuration.

The CDC NCM protocol cannot be used together with the CDC ECM or the RNDIS protocol.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`tinyusb_netdev_t`](#structtinyusb__netdev__t) | Device descriptor for tinyUSB CDC ECM network devices.

# struct `tinyusb_netdev_t` 

Device descriptor for tinyUSB CDC ECM network devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structtinyusb__netdev__t_1abec675ed0475ef8dd400db66f527bc92) | netdev parent struct
`public uint8_t `[`mac_addr`](#structtinyusb__netdev__t_1a2e8771ab18e98a993077caf5f8695640) | device MAC address
`public uint8_t `[`mac_host`](#structtinyusb__netdev__t_1a15102d295e6982c9ce8835e1568ce657) | host MAC address
`public uint16_t `[`rx_len`](#structtinyusb__netdev__t_1aeb4ec8de6ed85f27ea4aa892250c5d85) | number of bytes received
`public uint16_t `[`tx_len`](#structtinyusb__netdev__t_1a21c3c4266c83264978cdc922b66dbe1b) | number of bytes in transmit buffer
`public const uint8_t * `[`rx_buf`](#structtinyusb__netdev__t_1a61df69069067558bd3b16fbc1ab7da70) | receive buffer in tinyUSB stack
`public uint8_t `[`tx_buf`](#structtinyusb__netdev__t_1a0314794f8e1fb3ecc86c65955391ff45) | transmit buffer
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structtinyusb__netdev__t_1a86b5756ee0b43223fbea6d3b81f7f69f) | device is already in use

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structtinyusb__netdev__t_1abec675ed0475ef8dd400db66f527bc92) 

netdev parent struct

#### `public uint8_t `[`mac_addr`](#structtinyusb__netdev__t_1a2e8771ab18e98a993077caf5f8695640) 

device MAC address

#### `public uint8_t `[`mac_host`](#structtinyusb__netdev__t_1a15102d295e6982c9ce8835e1568ce657) 

host MAC address

#### `public uint16_t `[`rx_len`](#structtinyusb__netdev__t_1aeb4ec8de6ed85f27ea4aa892250c5d85) 

number of bytes received

#### `public uint16_t `[`tx_len`](#structtinyusb__netdev__t_1a21c3c4266c83264978cdc922b66dbe1b) 

number of bytes in transmit buffer

#### `public const uint8_t * `[`rx_buf`](#structtinyusb__netdev__t_1a61df69069067558bd3b16fbc1ab7da70) 

receive buffer in tinyUSB stack

#### `public uint8_t `[`tx_buf`](#structtinyusb__netdev__t_1a0314794f8e1fb3ecc86c65955391ff45) 

transmit buffer

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structtinyusb__netdev__t_1a86b5756ee0b43223fbea6d3b81f7f69f) 

device is already in use

