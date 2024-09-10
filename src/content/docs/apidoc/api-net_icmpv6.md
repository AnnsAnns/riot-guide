---
title: api-net_icmpv6.md
description: api-net_icmpv6.md
---
# group `net_icmpv6` 

Provides types related to ICMPv6.

**See also**: [RFC 4443 ](https://tools.ietf.org/html/rfc4443)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`icmpv6_hdr_print`](#group__net__icmpv6_1gaa078d6fa9ef389df41911b4b2309fd68)`(`[`icmpv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_icmpv6.md#structicmpv6__hdr__t)` * hdr)`            | Print the given ICMPv6 header to STDOUT.
`struct `[`icmpv6_hdr_t`](#structicmpv6__hdr__t) | General ICMPv6 message format.
`struct `[`icmpv6_error_dst_unr_t`](#structicmpv6__error__dst__unr__t) | Destination unreachable message format.
`struct `[`icmpv6_error_pkt_too_big_t`](#structicmpv6__error__pkt__too__big__t) | Packet too big message format.
`struct `[`icmpv6_error_time_exc_t`](#structicmpv6__error__time__exc__t) | Time exceeded message format.
`struct `[`icmpv6_error_param_prob_t`](#structicmpv6__error__param__prob__t) | Parameter problem message format.
`struct `[`icmpv6_echo_t`](#structicmpv6__echo__t) | Echo request and response message format.

## Members

#### `public void `[`icmpv6_hdr_print`](#group__net__icmpv6_1gaa078d6fa9ef389df41911b4b2309fd68)`(`[`icmpv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_icmpv6.md#structicmpv6__hdr__t)` * hdr)` 

Print the given ICMPv6 header to STDOUT.

#### Parameters
* `hdr` ICMPv6 header to print

# struct `icmpv6_hdr_t` 

General ICMPv6 message format.

**See also**: [RFC 4443, section 2.1 ](https://tools.ietf.org/html/rfc4443#section-2.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmpv6__hdr__t_1abc50268dd5fba39a0411fe2ae1da2076) | message type
`public uint8_t `[`code`](#structicmpv6__hdr__t_1ae8a0653604d9cb55be03dcf20d0c8c38) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__hdr__t_1a296c4c6d741c0b4c5a62560f75f35364) | checksum

## Members

#### `public uint8_t `[`type`](#structicmpv6__hdr__t_1abc50268dd5fba39a0411fe2ae1da2076) 

message type

#### `public uint8_t `[`code`](#structicmpv6__hdr__t_1ae8a0653604d9cb55be03dcf20d0c8c38) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__hdr__t_1a296c4c6d741c0b4c5a62560f75f35364) 

checksum

# struct `icmpv6_error_dst_unr_t` 

```
struct icmpv6_error_dst_unr_t
  : public icmpv6_hdr_t
```  

Destination unreachable message format.

**See also**: [RFC 4443, section 3.1 ](https://tools.ietf.org/html/rfc4443#section-3.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmpv6__error__dst__unr__t_1a94a6b8e2599214da7c21af8beed992e7) | message type
`public uint8_t `[`code`](#structicmpv6__error__dst__unr__t_1a533ea50e73c447ef6dbccc2511b00e70) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__dst__unr__t_1a212d156ecec756adb0f8078a11f38ad0) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`unused`](#structicmpv6__error__dst__unr__t_1aa5b0393d2b2f8b513b8d4dccda50f698) | unused field

## Members

#### `public uint8_t `[`type`](#structicmpv6__error__dst__unr__t_1a94a6b8e2599214da7c21af8beed992e7) 

message type

#### `public uint8_t `[`code`](#structicmpv6__error__dst__unr__t_1a533ea50e73c447ef6dbccc2511b00e70) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__dst__unr__t_1a212d156ecec756adb0f8078a11f38ad0) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`unused`](#structicmpv6__error__dst__unr__t_1aa5b0393d2b2f8b513b8d4dccda50f698) 

unused field

# struct `icmpv6_error_pkt_too_big_t` 

```
struct icmpv6_error_pkt_too_big_t
  : public icmpv6_hdr_t
```  

Packet too big message format.

**See also**: [RFC 4443, section 3.2 ](https://tools.ietf.org/html/rfc4443#section-3.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmpv6__error__pkt__too__big__t_1a51efbd63227932c4157e93e91223a021) | message type
`public uint8_t `[`code`](#structicmpv6__error__pkt__too__big__t_1a0e54d9ccef4d38f9d9f68eafc689cb7e) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__pkt__too__big__t_1a691d533bb6507d26370744e117144c1e) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`mtu`](#structicmpv6__error__pkt__too__big__t_1a913a42013781ea201dbee3a94ac89f75) | MTU.

## Members

#### `public uint8_t `[`type`](#structicmpv6__error__pkt__too__big__t_1a51efbd63227932c4157e93e91223a021) 

message type

#### `public uint8_t `[`code`](#structicmpv6__error__pkt__too__big__t_1a0e54d9ccef4d38f9d9f68eafc689cb7e) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__pkt__too__big__t_1a691d533bb6507d26370744e117144c1e) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`mtu`](#structicmpv6__error__pkt__too__big__t_1a913a42013781ea201dbee3a94ac89f75) 

MTU.

# struct `icmpv6_error_time_exc_t` 

```
struct icmpv6_error_time_exc_t
  : public icmpv6_hdr_t
```  

Time exceeded message format.

**See also**: [RFC 4443, section 3.3 ](https://tools.ietf.org/html/rfc4443#section-3.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmpv6__error__time__exc__t_1a1f3c0536226627bcc2e95fbcf6ee8ce4) | message type
`public uint8_t `[`code`](#structicmpv6__error__time__exc__t_1ac8dcb5a475efe6d4f1aac057519e3f58) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__time__exc__t_1af64e0306e94112cafb0a064ab9a15761) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`unused`](#structicmpv6__error__time__exc__t_1a1b87feb4661a6b5fcc59b996584a3c12) | unused field

## Members

#### `public uint8_t `[`type`](#structicmpv6__error__time__exc__t_1a1f3c0536226627bcc2e95fbcf6ee8ce4) 

message type

#### `public uint8_t `[`code`](#structicmpv6__error__time__exc__t_1ac8dcb5a475efe6d4f1aac057519e3f58) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__time__exc__t_1af64e0306e94112cafb0a064ab9a15761) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`unused`](#structicmpv6__error__time__exc__t_1a1b87feb4661a6b5fcc59b996584a3c12) 

unused field

# struct `icmpv6_error_param_prob_t` 

```
struct icmpv6_error_param_prob_t
  : public icmpv6_hdr_t
```  

Parameter problem message format.

**See also**: [RFC 4443, section 3.3 ](https://tools.ietf.org/html/rfc4443#section-3.4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmpv6__error__param__prob__t_1a37fb767ba16be844755c7bdf3bc09d46) | message type
`public uint8_t `[`code`](#structicmpv6__error__param__prob__t_1a8c1e922432aad6e0635210c90978bdb5) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__param__prob__t_1af827b0fdeafaf4a134c4d5f3e9a82bad) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ptr`](#structicmpv6__error__param__prob__t_1a982ff3ed7aa29c0489e983ee1a9cf8f1) | pointer

## Members

#### `public uint8_t `[`type`](#structicmpv6__error__param__prob__t_1a37fb767ba16be844755c7bdf3bc09d46) 

message type

#### `public uint8_t `[`code`](#structicmpv6__error__param__prob__t_1a8c1e922432aad6e0635210c90978bdb5) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__error__param__prob__t_1af827b0fdeafaf4a134c4d5f3e9a82bad) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ptr`](#structicmpv6__error__param__prob__t_1a982ff3ed7aa29c0489e983ee1a9cf8f1) 

pointer

# struct `icmpv6_echo_t` 

```
struct icmpv6_echo_t
  : public icmpv6_hdr_t
```  

Echo request and response message format.

**See also**: [RFC 4443, section 4.1 ](https://tools.ietf.org/html/rfc4443#section-4.1)

**See also**: [RFC 4443, section 4.2 ](https://tools.ietf.org/html/rfc4443#section-4.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmpv6__echo__t_1a65fde9eb4af6d18e7f6e02c9cc1a5f55) | message type
`public uint8_t `[`code`](#structicmpv6__echo__t_1a711fa68c6905cb5ef80769d054459400) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__echo__t_1ac64a31d93cab3a870f2bdd6a2f25144b) | checksum
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`id`](#structicmpv6__echo__t_1a874966b17cf14c08e683e0013c9a358d) | identifier
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`seq`](#structicmpv6__echo__t_1ae077b9a9865df12e1100e583c96d77eb) | Sequence number.

## Members

#### `public uint8_t `[`type`](#structicmpv6__echo__t_1a65fde9eb4af6d18e7f6e02c9cc1a5f55) 

message type

#### `public uint8_t `[`code`](#structicmpv6__echo__t_1a711fa68c6905cb5ef80769d054459400) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmpv6__echo__t_1ac64a31d93cab3a870f2bdd6a2f25144b) 

checksum

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`id`](#structicmpv6__echo__t_1a874966b17cf14c08e683e0013c9a358d) 

identifier

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`seq`](#structicmpv6__echo__t_1ae077b9a9865df12e1100e583c96d77eb) 

Sequence number.

