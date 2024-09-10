---
title: api-net_ppphdr.md
description: api-net_ppphdr.md
---
# group `net_ppphdr` 

PPP header abstraction type and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`ppp_hdr_t`](#structppp__hdr__t) | Header of a PPP packet.

# struct `ppp_hdr_t` 

Header of a PPP packet.

A PPP packet is transmitted as a payload of an HDLC packet. PPP packets only carry information about control protocol of a PPP stack (Link Control Protocol, IP Control Protocol, etc). IP packets encapsulated in HDLC frame are not considered PPP packet.

The format of PPP header plus payload is:

0 1 2 3 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ | Code | Identifier | Length | +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ | Payload ... +-+-+-+-+

**See also**: [RFC 1661, section 5 ](https://tools.ietf.org/html/rfc1661#section-5)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`code`](#structppp__hdr__t_1ac90321c4a1667372e13a5ab2c96de848) | Code of PPP packet.
`public uint8_t `[`id`](#structppp__hdr__t_1ad96dd88e800b7ac2bda046e0db8f2d60) | Identifier PPP of packet.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`length`](#structppp__hdr__t_1a652bbf43771ed936972801622ba0fcf8) | Length of PPP packet including payload.

## Members

#### `public uint8_t `[`code`](#structppp__hdr__t_1ac90321c4a1667372e13a5ab2c96de848) 

Code of PPP packet.

#### `public uint8_t `[`id`](#structppp__hdr__t_1ad96dd88e800b7ac2bda046e0db8f2d60) 

Identifier PPP of packet.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`length`](#structppp__hdr__t_1a652bbf43771ed936972801622ba0fcf8) 

Length of PPP packet including payload.

