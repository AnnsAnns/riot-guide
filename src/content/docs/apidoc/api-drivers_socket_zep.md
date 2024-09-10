---
title: api-drivers_socket_zep.md
description: api-drivers_socket_zep.md
---
# group `drivers_socket_zep` 

UDP socket-based IEEE 802.15.4 device over ZEP.

**See also**: [ZigBee Encapsulation Protocol](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__zep) for protocol definitions

This ZEP implementation can send a dummy HELLO packet on startup. This is used to make dispatchers aware of the node. To enable this behavior, add

```cpp
USEMODULE += socket_zep_hello
```

to your Makefile.

A ZEP dispatcher can just drop those packets (ZEP type 0xFF) if it chooses to parse the ZEP header.

The header of the HELLO packet will look like this: +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Preamble (EX)         |  Version (2)  |  Type  (255)  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                         Reserved (0)                         +
|                                                               |
+                                                               +
|                                                               |
+               +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|               |      'H'      |      'E'      |      'L'      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|      'L'      |      'O'      |       0       |       0       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|       0       |       0       |       0       |       0       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`socket_zep_setup`](#group__drivers__socket__zep_1ga923938308545d6cf32ec9e2f9c7d24e0)`(`[`socket_zep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t)` * dev,const `[`socket_zep_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__params__t)` * params)`            | Setup [socket_zep_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t) structure.
`public void `[`socket_zep_cleanup`](#group__drivers__socket__zep_1ga65823b7cd584ca501e7c2c5cad1874ba)`(`[`socket_zep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t)` * dev)`            | Cleanup socket resources.
`public void `[`socket_zep_hal_setup`](#group__drivers__socket__zep_1gacb495f445382dda9a8c9e6088fb410f8)`(`[`socket_zep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t)` * dev,`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal)`            | Setup socket ZEP in order to be used with the IEEE 802.15.4 Radio HAL.
`struct `[`socket_zep_params_t`](#structsocket__zep__params__t) | ZEP device initialization parameters.
`struct `[`socket_zep_t`](#structsocket__zep__t) | ZEP device state.

## Members

#### `public void `[`socket_zep_setup`](#group__drivers__socket__zep_1ga923938308545d6cf32ec9e2f9c7d24e0)`(`[`socket_zep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t)` * dev,const `[`socket_zep_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__params__t)` * params)` 

Setup [socket_zep_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t) structure.

#### Parameters
* `dev` the preallocated [socket_zep_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t) device handle to setup 

* `params` initialization parameters

#### `public void `[`socket_zep_cleanup`](#group__drivers__socket__zep_1ga65823b7cd584ca501e7c2c5cad1874ba)`(`[`socket_zep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t)` * dev)` 

Cleanup socket resources.

#### Parameters
* `dev` the socket_zep device handle to cleanup

#### `public void `[`socket_zep_hal_setup`](#group__drivers__socket__zep_1gacb495f445382dda9a8c9e6088fb410f8)`(`[`socket_zep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__t)` * dev,`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal)` 

Setup socket ZEP in order to be used with the IEEE 802.15.4 Radio HAL.

#### Parameters
* `dev` pointer to the socket ZEP instance 

* `hal` pointer to the HAL descriptor associated to the device

# struct `socket_zep_params_t` 

ZEP device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char * `[`local_addr`](#structsocket__zep__params__t_1ab17f2388be84025473b4bbeb5f345efd) | local address string
`public char * `[`local_port`](#structsocket__zep__params__t_1a75d849a6f746123a777f48c50fb0e76c) | local address string
`public char * `[`remote_addr`](#structsocket__zep__params__t_1a2bc3e86c52ca867a6ffe9ab29450ec2e) | remote address string
`public char * `[`remote_port`](#structsocket__zep__params__t_1a3e4d0b6e82fb3d02fc22d51e7350ecc7) | local address string

## Members

#### `public char * `[`local_addr`](#structsocket__zep__params__t_1ab17f2388be84025473b4bbeb5f345efd) 

local address string

#### `public char * `[`local_port`](#structsocket__zep__params__t_1a75d849a6f746123a777f48c50fb0e76c) 

local address string

#### `public char * `[`remote_addr`](#structsocket__zep__params__t_1a2bc3e86c52ca867a6ffe9ab29450ec2e) 

remote address string

#### `public char * `[`remote_port`](#structsocket__zep__params__t_1a3e4d0b6e82fb3d02fc22d51e7350ecc7) 

local address string

# struct `socket_zep_t` 

ZEP device state.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`socket_zep_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__params__t)` * `[`params`](#structsocket__zep__t_1a5742df402bc78b194fe9bf98a504d49b) | command line parameters
`public int `[`sock_fd`](#structsocket__zep__t_1a6671ce84793e3ed58ba78e0302a11edd) | socket fd
`public uint32_t `[`seq`](#structsocket__zep__t_1a231112b98d3582ad28065d4f85d96ed6) | ZEP sequence number.
`public uint8_t `[`rcv_buf`](#structsocket__zep__t_1adcdaf276e4a1715af243a19388c3c03c) | Receive buffer.
`public uint8_t `[`snd_buf`](#structsocket__zep__t_1a6489b5b1e2e1e38966aaef900c42570f) | Send buffer.
`public uint8_t `[`snd_len`](#structsocket__zep__t_1aec6b41283426aaafdf8c1123ad8d4b01) | bytes to send
`public uint16_t `[`pan_id`](#structsocket__zep__t_1acfea2f19adf3d9161d94b09d90fce114) | PAN ID of the ZEP network.
`public uint16_t `[`chan`](#structsocket__zep__t_1a9082824be383619d1ac541eec66d13e5) | virtual radio channel
`public uint8_t `[`addr_short`](#structsocket__zep__t_1abba332139f72af1b2f842e39aed65b48) | Short address of the virtual radio.
`public uint8_t `[`addr_long`](#structsocket__zep__t_1a71e8afe8481feb2c2355b483508f694b) | Long address of the virtual radio.
`public `[`ieee802154_filter_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gabee47f608ac702caf9160aba3bb686d3)` `[`filter_mode`](#structsocket__zep__t_1a14fc4fa0cb0ecdf9ac30ceb47be4d2cf) | frame filter mode
`public bool `[`rx`](#structsocket__zep__t_1ab5993204ab797be6899a056401526a91) | whether the radio is listening for packets
`public bool `[`send_hello`](#structsocket__zep__t_1aba63340b46e9e2fe6c2a8ecb6f51bc9c) | send HELLO packet on connect

## Members

#### `public const `[`socket_zep_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_socket_zep.md#structsocket__zep__params__t)` * `[`params`](#structsocket__zep__t_1a5742df402bc78b194fe9bf98a504d49b) 

command line parameters

#### `public int `[`sock_fd`](#structsocket__zep__t_1a6671ce84793e3ed58ba78e0302a11edd) 

socket fd

#### `public uint32_t `[`seq`](#structsocket__zep__t_1a231112b98d3582ad28065d4f85d96ed6) 

ZEP sequence number.

#### `public uint8_t `[`rcv_buf`](#structsocket__zep__t_1adcdaf276e4a1715af243a19388c3c03c) 

Receive buffer.

#### `public uint8_t `[`snd_buf`](#structsocket__zep__t_1a6489b5b1e2e1e38966aaef900c42570f) 

Send buffer.

#### `public uint8_t `[`snd_len`](#structsocket__zep__t_1aec6b41283426aaafdf8c1123ad8d4b01) 

bytes to send

#### `public uint16_t `[`pan_id`](#structsocket__zep__t_1acfea2f19adf3d9161d94b09d90fce114) 

PAN ID of the ZEP network.

#### `public uint16_t `[`chan`](#structsocket__zep__t_1a9082824be383619d1ac541eec66d13e5) 

virtual radio channel

#### `public uint8_t `[`addr_short`](#structsocket__zep__t_1abba332139f72af1b2f842e39aed65b48) 

Short address of the virtual radio.

#### `public uint8_t `[`addr_long`](#structsocket__zep__t_1a71e8afe8481feb2c2355b483508f694b) 

Long address of the virtual radio.

#### `public `[`ieee802154_filter_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gabee47f608ac702caf9160aba3bb686d3)` `[`filter_mode`](#structsocket__zep__t_1a14fc4fa0cb0ecdf9ac30ceb47be4d2cf) 

frame filter mode

#### `public bool `[`rx`](#structsocket__zep__t_1ab5993204ab797be6899a056401526a91) 

whether the radio is listening for packets

#### `public bool `[`send_hello`](#structsocket__zep__t_1aba63340b46e9e2fe6c2a8ecb6f51bc9c) 

send HELLO packet on connect

