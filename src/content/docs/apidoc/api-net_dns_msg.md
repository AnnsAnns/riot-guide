---
title: api-net_dns_msg.md
description: api-net_dns_msg.md
---
# group `net_dns_msg` 

Parsing and composition of DNS messages.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`dns_msg_compose_query`](#group__net__dns__msg_1ga6493549104bd07a8155b0cc9469a449c)`(void * dns_buf,const char * domain_name,uint16_t id,int family)`            | Composes a DNS query message.
`public int `[`dns_msg_parse_reply`](#group__net__dns__msg_1gabe72cc991fb112f266d5ae4780947042)`(const uint8_t * buf,size_t len,int family,void * addr_out,uint32_t * ttl)`            | Parses a DNS response message.
`struct `[`dns_hdr_t`](#structdns__hdr__t) | DNS internal structure.

## Members

#### `public size_t `[`dns_msg_compose_query`](#group__net__dns__msg_1ga6493549104bd07a8155b0cc9469a449c)`(void * dns_buf,const char * domain_name,uint16_t id,int family)` 

Composes a DNS query message.

The query will request an A or AAAA IN record for `domain_name` depending on `family:`

* When `family` is `AF_INET` or `AF_UNSPEC` a query for an A record will be added

* When `family` is `AF_INET6` or `AF_UNSPEC` a query for an AAAA record will be added

#### Parameters
* `dns_buf` A buffer of length [CONFIG_DNS_MSG_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dns__msg__conf_1ga9530cd696fa9efb6052c27fcdf76020f)

* `domain_name` The domain name to query. 

* `id` The ID for the query. 

* `family` Either `AF_UNSPEC`, `AF_INET`, or `AF_INET6`. Determines the address records for `domain_name` queried.

#### Returns
Size of the composed query in bytes.

#### `public int `[`dns_msg_parse_reply`](#group__net__dns__msg_1gabe72cc991fb112f266d5ae4780947042)`(const uint8_t * buf,size_t len,int family,void * addr_out,uint32_t * ttl)` 

Parses a DNS response message.

#### Parameters
* `buf` The message to parse. 

* `len` Length of `buf`. 

* `family` The address family used to compose the query for this response (see [dns_msg_compose_query()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dns__msg_1ga6493549104bd07a8155b0cc9469a449c)) 

* `addr_out` The IP address returned by the response. 

* `ttl` The live time of the entry in seconds

#### Returns
Length of the `addr_out` on success. 

#### Returns
-EBADMSG, when an address corresponding to `family` can not be found in `buf`.

# struct `dns_hdr_t` 

DNS internal structure.

**See also**: [RFC 1035, section 4.1.1](https://tools.ietf.org/html/rfc1035#section-4.1.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`id`](#structdns__hdr__t_1a1612573313f4d9245116e2e0cdc81f8e) | identifier
`public uint16_t `[`flags`](#structdns__hdr__t_1a50a727c45aecc9405b2e1f2a2f84f16e) | flags
`public uint16_t `[`qdcount`](#structdns__hdr__t_1a9201ec38c27766c65b6f0963412c8f7f) | number of question entries
`public uint16_t `[`ancount`](#structdns__hdr__t_1acf8be503d2dc858a1ea31275a6002cb6) | number of answer resource records
`public uint16_t `[`nscount`](#structdns__hdr__t_1a91304b53a9eaa153c5d7cbc5a319b9de) | number of name server resource records
`public uint16_t `[`arcount`](#structdns__hdr__t_1a0559446a0536a4ad9188caa14d6a41af) | number of additional records
`public uint8_t `[`payload`](#structdns__hdr__t_1a574670e3c9ebce87c52624c381d8bad9) | payload

## Members

#### `public uint16_t `[`id`](#structdns__hdr__t_1a1612573313f4d9245116e2e0cdc81f8e) 

identifier

#### `public uint16_t `[`flags`](#structdns__hdr__t_1a50a727c45aecc9405b2e1f2a2f84f16e) 

flags

+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|QR|   Opcode  |AA|TC|RD|RA|Z |AD|CD|   RCODE   |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

* QR: Query (0) or Response (1)

* Opcode: Kind of query

* AA: Authoritative Answer

* TC: Truncated

* RD: Recursion Desired

* RA: Recursion Available

* Z: Reserved

* AD: Authentic Data (see [RFC 4035](https://tools.ietf.org/html/4035))

* CD: Checking Disabled (see [RFC 4035](https://tools.ietf.org/html/4035))

* RCODE: Response Code

#### `public uint16_t `[`qdcount`](#structdns__hdr__t_1a9201ec38c27766c65b6f0963412c8f7f) 

number of question entries

#### `public uint16_t `[`ancount`](#structdns__hdr__t_1acf8be503d2dc858a1ea31275a6002cb6) 

number of answer resource records

#### `public uint16_t `[`nscount`](#structdns__hdr__t_1a91304b53a9eaa153c5d7cbc5a319b9de) 

number of name server resource records

#### `public uint16_t `[`arcount`](#structdns__hdr__t_1a0559446a0536a4ad9188caa14d6a41af) 

number of additional records

#### `public uint8_t `[`payload`](#structdns__hdr__t_1a574670e3c9ebce87c52624c381d8bad9) 

payload

