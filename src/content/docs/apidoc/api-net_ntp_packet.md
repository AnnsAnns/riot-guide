---
title: api-net_ntp_packet.md
description: api-net_ntp_packet.md
---
# group `net_ntp_packet` 

The NTP packet module provides functionality to manipulate the NTP header.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NTP_VERSION`](#group__net__ntp__packet_1ga3a838d0270346563136a9f9cee273c08)            | NTP version.
`define `[`NTP_PORT`](#group__net__ntp__packet_1ga3b01aa9ccfd4ae46ff6998d3c5c6135d)            | NTP port number.
`define `[`NTP_UNIX_OFFSET`](#group__net__ntp__packet_1ga5380e495dabfa668fa6181f842b84cd7)            | Offset in seconds of NTP timestamp (seconds from 1990-01-01 00:00:00 UTC) to UNIX timestamp (seconds from 1970-01-01 00:00:00 UTC).
`enum `[`ntp_mode_t`](#group__net__ntp__packet_1ga45d11d3b7c06292d5fb0470772855205)            | NTP modes.
`public inline static void `[`ntp_packet_set_li`](#group__net__ntp__packet_1ga7421813086e97e6bafb767f13032c582)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet,uint8_t li)`            | Set leap indicator in a NTP packet.
`public inline static void `[`ntp_packet_set_vn`](#group__net__ntp__packet_1gab944818396346ec81291681b158b4449)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)`            | Set version in a NTP packet.
`public inline static void `[`ntp_packet_set_mode`](#group__net__ntp__packet_1ga4a1fd60d3a59c311a0b48ed7530f9158)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet,`[`ntp_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ntp__packet_1ga45d11d3b7c06292d5fb0470772855205)` mode)`            | Set mode in a NTP packet.
`public inline static uint8_t `[`ntp_packet_get_li`](#group__net__ntp__packet_1ga3a994ae4bcc214999c3b764164581f0d)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)`            | Get leap indicator from a NTP packet.
`public inline static uint8_t `[`ntp_packet_get_vn`](#group__net__ntp__packet_1gafe2100031587b478bfda5e8d2f577d01)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)`            | Get version from a NTP packet.
`public inline static `[`ntp_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ntp__packet_1ga45d11d3b7c06292d5fb0470772855205)` `[`ntp_packet_get_mode`](#group__net__ntp__packet_1ga874eb589b082abf627c196654588f3f4)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)`            | Get mode from a NTP packet.
`struct `[`ntp_timestamp_t`](#structntp__timestamp__t) | NTP timestamp.
`struct `[`ntp_packet_t`](#structntp__packet__t) | NTP packet.

## Members

#### `define `[`NTP_VERSION`](#group__net__ntp__packet_1ga3a838d0270346563136a9f9cee273c08) 

NTP version.

#### `define `[`NTP_PORT`](#group__net__ntp__packet_1ga3b01aa9ccfd4ae46ff6998d3c5c6135d) 

NTP port number.

#### `define `[`NTP_UNIX_OFFSET`](#group__net__ntp__packet_1ga5380e495dabfa668fa6181f842b84cd7) 

Offset in seconds of NTP timestamp (seconds from 1990-01-01 00:00:00 UTC) to UNIX timestamp (seconds from 1970-01-01 00:00:00 UTC).

#### `enum `[`ntp_mode_t`](#group__net__ntp__packet_1ga45d11d3b7c06292d5fb0470772855205) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NTP_MODE_RESERVED            | reserved
NTP_MODE_SYM_ACTIVE            | symmetric active
NTP_MODE_SYM_PASSIVE            | symmetric passive
NTP_MODE_CLIENT            | client
NTP_MODE_SERVER            | server
NTP_MODE_BROADCAST            | broadcast
NTP_MODE_PRIV            | reserved for private use

NTP modes.

#### `public inline static void `[`ntp_packet_set_li`](#group__net__ntp__packet_1ga7421813086e97e6bafb767f13032c582)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet,uint8_t li)` 

Set leap indicator in a NTP packet.

#### Parameters
* `packet` The NTP packet 

* `li` Leap indicator

#### `public inline static void `[`ntp_packet_set_vn`](#group__net__ntp__packet_1gab944818396346ec81291681b158b4449)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)` 

Set version in a NTP packet.

#### Parameters
* `packet` The NTP packet

#### `public inline static void `[`ntp_packet_set_mode`](#group__net__ntp__packet_1ga4a1fd60d3a59c311a0b48ed7530f9158)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet,`[`ntp_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ntp__packet_1ga45d11d3b7c06292d5fb0470772855205)` mode)` 

Set mode in a NTP packet.

#### Parameters
* `packet` The NTP packet 

* `mode` Mode

#### `public inline static uint8_t `[`ntp_packet_get_li`](#group__net__ntp__packet_1ga3a994ae4bcc214999c3b764164581f0d)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)` 

Get leap indicator from a NTP packet.

#### Parameters
* `packet` The NTP packet

#### Returns
The leap indicator of `packet`

#### `public inline static uint8_t `[`ntp_packet_get_vn`](#group__net__ntp__packet_1gafe2100031587b478bfda5e8d2f577d01)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)` 

Get version from a NTP packet.

#### Parameters
* `packet` The NTP packet

#### Returns
The version of `packet`

#### `public inline static `[`ntp_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ntp__packet_1ga45d11d3b7c06292d5fb0470772855205)` `[`ntp_packet_get_mode`](#group__net__ntp__packet_1ga874eb589b082abf627c196654588f3f4)`(`[`ntp_packet_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__packet__t)` * packet)` 

Get mode from a NTP packet.

#### Parameters
* `packet` The NTP packet

#### Returns
The version of `packet`

# struct `ntp_timestamp_t` 

NTP timestamp.

**See also**: [RFC 5905, Section 6](https://tools.ietf.org/html/rfc5905#section-6)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seconds`](#structntp__timestamp__t_1a1b470e22a0717c911d28caa3d5961c65) | seconds since 1 January 1900 00:00 UTC
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`fraction`](#structntp__timestamp__t_1ac36a5c0ce573f46276727e097b7f52d8) | fraction of seconds in 232 picoseconds

## Members

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seconds`](#structntp__timestamp__t_1a1b470e22a0717c911d28caa3d5961c65) 

seconds since 1 January 1900 00:00 UTC

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`fraction`](#structntp__timestamp__t_1ac36a5c0ce573f46276727e097b7f52d8) 

fraction of seconds in 232 picoseconds

# struct `ntp_packet_t` 

NTP packet.

**See also**: [RFC 5905, Section 7.3](https://tools.ietf.org/html/rfc5905#section-7.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`li_vn_mode`](#structntp__packet__t_1a257226713db72815a44c71c950adab99) | leap indicator, version and mode
`public uint8_t `[`stratum`](#structntp__packet__t_1a5ff4f087dcc3db847a2bae3025958b55) | stratum
`public uint8_t `[`poll`](#structntp__packet__t_1a5f9d4ce1dbc5fcd46d0432e6b7b7e43f) | poll in log2 seconds
`public uint8_t `[`precision`](#structntp__packet__t_1a4fa1590f93ecee8f3e34e418cd30635e) | precision in log2 seconds
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`root_delay`](#structntp__packet__t_1af5ebbb65158032cbb667526679a915c1) | root delay in NTP short format
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`root_dispersion`](#structntp__packet__t_1ac9c798a8a7ed3ec244536563f0723572) | root dispersion in NTP short format
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`reference_id`](#structntp__packet__t_1ad3e2dbc8e5a2183f021dfcc8097dc53d) | reference ID
`public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`reference`](#structntp__packet__t_1a2c6a83b7a3257c307e10e78c4d840902) | reference timestamp
`public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`origin`](#structntp__packet__t_1acad689448dd91dffe96637a2f74f3a76) | origin timesptamp
`public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`receive`](#structntp__packet__t_1a17dfcd02a397548f812e2ff937dd316c) | receive timestamp
`public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`transmit`](#structntp__packet__t_1aa6b729191074ed8d8eef3d2a418d4ac1) | transmit timestamp

## Members

#### `public uint8_t `[`li_vn_mode`](#structntp__packet__t_1a257226713db72815a44c71c950adab99) 

leap indicator, version and mode

#### `public uint8_t `[`stratum`](#structntp__packet__t_1a5ff4f087dcc3db847a2bae3025958b55) 

stratum

#### `public uint8_t `[`poll`](#structntp__packet__t_1a5f9d4ce1dbc5fcd46d0432e6b7b7e43f) 

poll in log2 seconds

#### `public uint8_t `[`precision`](#structntp__packet__t_1a4fa1590f93ecee8f3e34e418cd30635e) 

precision in log2 seconds

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`root_delay`](#structntp__packet__t_1af5ebbb65158032cbb667526679a915c1) 

root delay in NTP short format

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`root_dispersion`](#structntp__packet__t_1ac9c798a8a7ed3ec244536563f0723572) 

root dispersion in NTP short format

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`reference_id`](#structntp__packet__t_1ad3e2dbc8e5a2183f021dfcc8097dc53d) 

reference ID

#### `public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`reference`](#structntp__packet__t_1a2c6a83b7a3257c307e10e78c4d840902) 

reference timestamp

#### `public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`origin`](#structntp__packet__t_1acad689448dd91dffe96637a2f74f3a76) 

origin timesptamp

#### `public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`receive`](#structntp__packet__t_1a17dfcd02a397548f812e2ff937dd316c) 

receive timestamp

#### `public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`transmit`](#structntp__packet__t_1aa6b729191074ed8d8eef3d2a418d4ac1) 

transmit timestamp

