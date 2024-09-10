---
title: api-net_someip.md
description: api-net_someip.md
---
# group `net_someip` 

Provides SOME/IP header and field defines.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SOMEIP_HDR_LENGTH`](#group__net__someip_1gae0d8fd2fb7cf8056c58c65cc609177c8)            | SOME/IP header length size, excluding payload.
`define `[`SOMEIP_FULL_HDR_SIZE`](#group__net__someip_1ga76e23ad7c830cbb0cc5765c066524091)            | SOME/IP full header size, including all field expect for the payload.
`struct `[`someip_message_id_t`](#structsomeip__message__id__t) | Structure of the Message ID.
`struct `[`someip_request_id_t`](#structsomeip__request__id__t) | Structure of the Request ID.
`struct `[`someip_hdr_t`](#structsomeip__hdr__t) | SOME/IP header.

## Members

#### `define `[`SOMEIP_HDR_LENGTH`](#group__net__someip_1gae0d8fd2fb7cf8056c58c65cc609177c8) 

SOME/IP header length size, excluding payload.

#### `define `[`SOMEIP_FULL_HDR_SIZE`](#group__net__someip_1ga76e23ad7c830cbb0cc5765c066524091) 

SOME/IP full header size, including all field expect for the payload.

# struct `someip_message_id_t` 

Structure of the Message ID.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`service_id`](#structsomeip__message__id__t_1a373a4392c469bfd14728923e99ed6a3a) | Service ID.
`public uint16_t `[`method_id`](#structsomeip__message__id__t_1a812a329b79d94a20c0e7cde276f055f5) | Method ID.

## Members

#### `public uint16_t `[`service_id`](#structsomeip__message__id__t_1a373a4392c469bfd14728923e99ed6a3a) 

Service ID.

#### `public uint16_t `[`method_id`](#structsomeip__message__id__t_1a812a329b79d94a20c0e7cde276f055f5) 

Method ID.

# struct `someip_request_id_t` 

Structure of the Request ID.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`client_id`](#structsomeip__request__id__t_1a43b7cdefb229be5db696f282bb98b470) | Client ID.
`public uint16_t `[`session_id`](#structsomeip__request__id__t_1abdc9bc58ae6b962119e340a4ab18167c) | Session ID.

## Members

#### `public uint16_t `[`client_id`](#structsomeip__request__id__t_1a43b7cdefb229be5db696f282bb98b470) 

Client ID.

#### `public uint16_t `[`session_id`](#structsomeip__request__id__t_1abdc9bc58ae6b962119e340a4ab18167c) 

Session ID.

# struct `someip_hdr_t` 

SOME/IP header.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`someip_message_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_someip.md#structsomeip__message__id__t)` `[`message_id`](#structsomeip__hdr__t_1ad63e7f1f232d0393e640aa0c7836842b) | Message ID.
`public uint32_t `[`length`](#structsomeip__hdr__t_1a2cd03f65f86411047b697fa2d7ca3c2c) | Length.
`public `[`someip_request_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_someip.md#structsomeip__request__id__t)` `[`request_id`](#structsomeip__hdr__t_1a6441806a3b943fb8efc71d1fa7be1a2a) | Request ID.
`public uint8_t `[`protocol_version`](#structsomeip__hdr__t_1a49e76f7a44a1e0d48b9b56b9756c9efe) | Protocol Version.
`public uint8_t `[`interface_version`](#structsomeip__hdr__t_1aa36bc9f2572f51dcf0b36c0e8f68378e) | Interface Version.
`public uint8_t `[`msg_type`](#structsomeip__hdr__t_1af40a902a81e079799a68e8a9f712f3c1) | Message Type.
`public uint8_t `[`return_code`](#structsomeip__hdr__t_1ac7acf42eeb3c03639674af331dad4616) | Return Code.

## Members

#### `public `[`someip_message_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_someip.md#structsomeip__message__id__t)` `[`message_id`](#structsomeip__hdr__t_1ad63e7f1f232d0393e640aa0c7836842b) 

Message ID.

#### `public uint32_t `[`length`](#structsomeip__hdr__t_1a2cd03f65f86411047b697fa2d7ca3c2c) 

Length.

#### `public `[`someip_request_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_someip.md#structsomeip__request__id__t)` `[`request_id`](#structsomeip__hdr__t_1a6441806a3b943fb8efc71d1fa7be1a2a) 

Request ID.

#### `public uint8_t `[`protocol_version`](#structsomeip__hdr__t_1a49e76f7a44a1e0d48b9b56b9756c9efe) 

Protocol Version.

#### `public uint8_t `[`interface_version`](#structsomeip__hdr__t_1aa36bc9f2572f51dcf0b36c0e8f68378e) 

Interface Version.

#### `public uint8_t `[`msg_type`](#structsomeip__hdr__t_1af40a902a81e079799a68e8a9f712f3c1) 

Message Type.

#### `public uint8_t `[`return_code`](#structsomeip__hdr__t_1ac7acf42eeb3c03639674af331dad4616) 

Return Code.

