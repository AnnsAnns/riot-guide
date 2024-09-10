---
title: api-fido2_ctap_transport_hid.md
description: api-fido2_ctap_transport_hid.md
---
# group `fido2_ctap_transport_hid` 

FIDO2 CTAP USB_HID transport binding.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CTAP_HID_PROTOCOL_VERSION`](#group__fido2__ctap__transport__hid_1ga72aedb045406f319a55c8d0888b961c4)            | CTAP_HID protocol version.
`define `[`CTAP_HID_INIT_NONCE_SIZE`](#group__fido2__ctap__transport__hid_1ga38d95d18f114e147b937894d9c880a34)            | CTAP_HID size of nonce for init request.
`define `[`CTAP_HID_TRANSACTION_TIMEOUT_MS`](#group__fido2__ctap__transport__hid_1gafe7c15dad8f8398dd28576d1f18d46ed)            | CTAP_HID transaction timeout in microseconds.
`define `[`CTAP_HID_BUFFER_SIZE`](#group__fido2__ctap__transport__hid_1ga1ea33e1d261bb9945a585dbcdc33ee23)            | CTAP_HID max message payload size.
`define `[`CTAP_HID_CIDS_MAX`](#group__fido2__ctap__transport__hid_1ga05410fd58ec34b1049c9c3c2fe59d7ee)            | CTAP_HID max number of channels.
`define `[`CTAP_HID_WINK_DELAY`](#group__fido2__ctap__transport__hid_1gae53244e47408cb00ce1047754a2f7f3b)            | CTAP_HID animation delay in milliseconds for wink command.
`define `[`CTAP_HID_BROADCAST_CID`](#group__fido2__ctap__transport__hid_1ga88475bf65a9873f64db47a432440d629)            | CTAP_HID broadcast channel identifier.
`public void `[`fido2_ctap_transport_hid_init`](#group__fido2__ctap__transport__hid_1ga799cb64a3758b8552e5fd1ad6e530c1f)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Initialize CTAPHID.
`public void `[`fido2_ctap_transport_hid_handle_packet`](#group__fido2__ctap__transport__hid_1gafe74aa64dc75b231b135f59e04fabd86)`(void * pkt_raw)`            | Handle CTAP_HID packet.
`public void `[`fido2_ctap_transport_hid_check_timeouts`](#group__fido2__ctap__transport__hid_1gae307b44cb7da7b2bcf4dc912a1b90e41)`(void)`            | Check logical channels for timeouts.
`public bool `[`fido2_ctap_transport_hid_should_cancel`](#group__fido2__ctap__transport__hid_1gad6efefc053ad07ffc8345607f6061e0c)`(void)`            | Check if CTAPHID layer has received CANCEL command.
`struct `[`ctap_hid_init_pkt_t`](#structctap__hid__init__pkt__t) | CTAP_HID initialization packet struct.
`struct `[`ctap_hid_cont_pkt_t`](#structctap__hid__cont__pkt__t) | CTAP_HID continuation packet struct.
`struct `[`ctap_hid_pkt_t`](#structctap__hid__pkt__t) | CTAP_HID packet struct.
`struct `[`ctap_hid_init_resp_t`](#structctap__hid__init__resp__t) | CTAP_HID initialization response struct.
`struct `[`ctap_hid_cid_t`](#structctap__hid__cid__t) | CTAP_HID channel identifier struct.

## Members

#### `define `[`CTAP_HID_PROTOCOL_VERSION`](#group__fido2__ctap__transport__hid_1ga72aedb045406f319a55c8d0888b961c4) 

CTAP_HID protocol version.

#### `define `[`CTAP_HID_INIT_NONCE_SIZE`](#group__fido2__ctap__transport__hid_1ga38d95d18f114e147b937894d9c880a34) 

CTAP_HID size of nonce for init request.

#### `define `[`CTAP_HID_TRANSACTION_TIMEOUT_MS`](#group__fido2__ctap__transport__hid_1gafe7c15dad8f8398dd28576d1f18d46ed) 

CTAP_HID transaction timeout in microseconds.

#### `define `[`CTAP_HID_BUFFER_SIZE`](#group__fido2__ctap__transport__hid_1ga1ea33e1d261bb9945a585dbcdc33ee23) 

CTAP_HID max message payload size.

CTAP specification (version 20190130) section 8.2.4.

#### `define `[`CTAP_HID_CIDS_MAX`](#group__fido2__ctap__transport__hid_1ga05410fd58ec34b1049c9c3c2fe59d7ee) 

CTAP_HID max number of channels.

#### `define `[`CTAP_HID_WINK_DELAY`](#group__fido2__ctap__transport__hid_1gae53244e47408cb00ce1047754a2f7f3b) 

CTAP_HID animation delay in milliseconds for wink command.

#### `define `[`CTAP_HID_BROADCAST_CID`](#group__fido2__ctap__transport__hid_1ga88475bf65a9873f64db47a432440d629) 

CTAP_HID broadcast channel identifier.

#### `public void `[`fido2_ctap_transport_hid_init`](#group__fido2__ctap__transport__hid_1ga799cb64a3758b8552e5fd1ad6e530c1f)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Initialize CTAPHID.

#### Parameters
* `queue` CTAP transport layer event queue

#### `public void `[`fido2_ctap_transport_hid_handle_packet`](#group__fido2__ctap__transport__hid_1gafe74aa64dc75b231b135f59e04fabd86)`(void * pkt_raw)` 

Handle CTAP_HID packet.

#### Parameters
* `pkt_raw` raw CTAP_HID packet

#### `public void `[`fido2_ctap_transport_hid_check_timeouts`](#group__fido2__ctap__transport__hid_1gae307b44cb7da7b2bcf4dc912a1b90e41)`(void)` 

Check logical channels for timeouts.

This function is used to prevent one channel from locking the authenticator. E.g. if a device starts a transaction that does not fit in one packet and sends a CTAPHID initialization packet but not continuation packet the authenticator will keep waiting. This function will prevent this by cancelling a transaction if it takes longer than

CTAP specification (version 20190130) section 5.6

[CTAP_HID_TRANSACTION_TIMEOUT_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__transport__hid_1gafe7c15dad8f8398dd28576d1f18d46ed)

#### `public bool `[`fido2_ctap_transport_hid_should_cancel`](#group__fido2__ctap__transport__hid_1gad6efefc053ad07ffc8345607f6061e0c)`(void)` 

Check if CTAPHID layer has received CANCEL command.

#### Returns
true if CANCEL command has been received 

#### Returns
false otherwise

# struct `ctap_hid_init_pkt_t` 

CTAP_HID initialization packet struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`cmd`](#structctap__hid__init__pkt__t_1aba41261474770d64a94478d4ed12e125) | CTAP_HID command.
`public uint8_t `[`bcnth`](#structctap__hid__init__pkt__t_1acb92b763cefb51f63ea53e7d9cd20f93) | higher byte
`public uint8_t `[`bcntl`](#structctap__hid__init__pkt__t_1aba7f8ee65143cfbd38a2f8d3c2d6ed5b) | lower byte
`public uint8_t `[`payload`](#structctap__hid__init__pkt__t_1a0b6251c8b5613ca30c83a3627312f810) | packet payload

## Members

#### `public uint8_t `[`cmd`](#structctap__hid__init__pkt__t_1aba41261474770d64a94478d4ed12e125) 

CTAP_HID command.

#### `public uint8_t `[`bcnth`](#structctap__hid__init__pkt__t_1acb92b763cefb51f63ea53e7d9cd20f93) 

higher byte

#### `public uint8_t `[`bcntl`](#structctap__hid__init__pkt__t_1aba7f8ee65143cfbd38a2f8d3c2d6ed5b) 

lower byte

#### `public uint8_t `[`payload`](#structctap__hid__init__pkt__t_1a0b6251c8b5613ca30c83a3627312f810) 

packet payload

# struct `ctap_hid_cont_pkt_t` 

CTAP_HID continuation packet struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`seq`](#structctap__hid__cont__pkt__t_1ab6776cb03054308cdbe64423dfaa44c1) | packet sequence number
`public uint8_t `[`payload`](#structctap__hid__cont__pkt__t_1a55e9c9cc8c3fd2fd47bc010568549319) | packet payload

## Members

#### `public uint8_t `[`seq`](#structctap__hid__cont__pkt__t_1ab6776cb03054308cdbe64423dfaa44c1) 

packet sequence number

#### `public uint8_t `[`payload`](#structctap__hid__cont__pkt__t_1a55e9c9cc8c3fd2fd47bc010568549319) 

packet payload

# struct `ctap_hid_pkt_t` 

CTAP_HID packet struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`cid`](#structctap__hid__pkt__t_1acd9be7965987f3aa2b690e28b462d7cb) | channel identifier
`public `[`ctap_hid_init_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_transport_hid.md#structctap__hid__init__pkt__t)` `[`init`](#structctap__hid__pkt__t_1ac39072acb8ef8433313fa2380fde3d1e) | initialization packet
`public `[`ctap_hid_cont_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_transport_hid.md#structctap__hid__cont__pkt__t)` `[`cont`](#structctap__hid__pkt__t_1a52c8952dba9aed225b19d6939e89a6a2) | continuation packet
`public union ctap_hid_pkt_t::@340 `[`@341`](#structctap__hid__pkt__t_1a0ea381bfe054d6af44bb80a61666f3ec) | 

## Members

#### `public uint32_t `[`cid`](#structctap__hid__pkt__t_1acd9be7965987f3aa2b690e28b462d7cb) 

channel identifier

#### `public `[`ctap_hid_init_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_transport_hid.md#structctap__hid__init__pkt__t)` `[`init`](#structctap__hid__pkt__t_1ac39072acb8ef8433313fa2380fde3d1e) 

initialization packet

#### `public `[`ctap_hid_cont_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_transport_hid.md#structctap__hid__cont__pkt__t)` `[`cont`](#structctap__hid__pkt__t_1a52c8952dba9aed225b19d6939e89a6a2) 

continuation packet

#### `public union ctap_hid_pkt_t::@340 `[`@341`](#structctap__hid__pkt__t_1a0ea381bfe054d6af44bb80a61666f3ec) 

# struct `ctap_hid_init_resp_t` 

CTAP_HID initialization response struct.

CTAP specification (version 20190130) 8.1.9.1.3

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`nonce`](#structctap__hid__init__resp__t_1a73b0feb6da20006dedccf08d08d87976) | nonce
`public uint32_t `[`cid`](#structctap__hid__init__resp__t_1ab46321759772303c3ea20236ad06edb2) | channel identifier
`public uint8_t `[`protocol_version`](#structctap__hid__init__resp__t_1a93a97fdd882e070640b44042ada5c538) | CTAP_HID protocol version.
`public uint8_t `[`version_major`](#structctap__hid__init__resp__t_1aaf09bbec001edc0ef48037ac58e16994) | major device version
`public uint8_t `[`version_minor`](#structctap__hid__init__resp__t_1a9413b5852153190c277fc5470dcff7ff) | minor device version
`public uint8_t `[`build_version`](#structctap__hid__init__resp__t_1abadef98c950e4215cea197d5693debc5) | build device version
`public uint8_t `[`capabilities`](#structctap__hid__init__resp__t_1af691c492dd3b7b0131fba471bed05919) | capabilities flags

## Members

#### `public uint8_t `[`nonce`](#structctap__hid__init__resp__t_1a73b0feb6da20006dedccf08d08d87976) 

nonce

#### `public uint32_t `[`cid`](#structctap__hid__init__resp__t_1ab46321759772303c3ea20236ad06edb2) 

channel identifier

#### `public uint8_t `[`protocol_version`](#structctap__hid__init__resp__t_1a93a97fdd882e070640b44042ada5c538) 

CTAP_HID protocol version.

#### `public uint8_t `[`version_major`](#structctap__hid__init__resp__t_1aaf09bbec001edc0ef48037ac58e16994) 

major device version

#### `public uint8_t `[`version_minor`](#structctap__hid__init__resp__t_1a9413b5852153190c277fc5470dcff7ff) 

minor device version

#### `public uint8_t `[`build_version`](#structctap__hid__init__resp__t_1abadef98c950e4215cea197d5693debc5) 

build device version

#### `public uint8_t `[`capabilities`](#structctap__hid__init__resp__t_1af691c492dd3b7b0131fba471bed05919) 

capabilities flags

# struct `ctap_hid_cid_t` 

CTAP_HID channel identifier struct.

Used to keep state information about logical channels

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`taken`](#structctap__hid__cid__t_1a6dcdea2d823ec6e9de2efcecd23ce5d3) | is cid taken?
`public uint32_t `[`cid`](#structctap__hid__cid__t_1aa3e4aa4c666479e1ffdfcd71d2f0da14) | channel identifier
`public uint64_t `[`last_used`](#structctap__hid__cid__t_1a3a7078da07c973feebefa04c7ebb3073) | timestamp of last usage

## Members

#### `public bool `[`taken`](#structctap__hid__cid__t_1a6dcdea2d823ec6e9de2efcecd23ce5d3) 

is cid taken?

#### `public uint32_t `[`cid`](#structctap__hid__cid__t_1aa3e4aa4c666479e1ffdfcd71d2f0da14) 

channel identifier

#### `public uint64_t `[`last_used`](#structctap__hid__cid__t_1a3a7078da07c973feebefa04c7ebb3073) 

timestamp of last usage

