---
title: api-net_ipv4_addr.md
description: api-net_ipv4_addr.md
---
# group `net_ipv4_addr` 

IPv4 address types and helper function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`IPV4_ADDR_MAX_STR_LEN`](#group__net__ipv4__addr_1gaf174a4416a48d74279b85cc4f6fce97e)            | Maximum length of an IPv4 address as string.
`define `[`IPV4_ADDR_INIT`](#group__net__ipv4__addr_1gaa1cf435b286640dbc9ae8c9d9891385e)            | Static initializer for an IPv4 address.
`public inline static bool `[`ipv4_addr_equal`](#group__net__ipv4__addr_1gaa6abcffd0926eb3a79e9ca126e67afdd)`(const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * a,const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * b)`            | Checks if two IPv4 addresses are equal.
`public inline static bool `[`ipv4_addr_is_multicast`](#group__net__ipv4__addr_1gaa3ef0f901b2bf50a91e9c104aff85b0b)`(const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr)`            | Check if `addr` is a multicast address.
`public char * `[`ipv4_addr_to_str`](#group__net__ipv4__addr_1ga746a395627e22a3a0c57940d0cd13f36)`(char * result,const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr,uint8_t result_len)`            | Converts an IPv4 address to its string representation.
`public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * `[`ipv4_addr_from_str`](#group__net__ipv4__addr_1gaddd4d56dd883cf318502e83041a48f4d)`(`[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * result,const char * addr)`            | Converts an IPv4 address string representation to a byte-represented IPv4 address.
`public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * `[`ipv4_addr_from_buf`](#group__net__ipv4__addr_1ga7d05d3d492d4f769d7e29b398f28d51f)`(`[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * result,const char * addr,size_t addr_len)`            | Converts an IPv4 address from a buffer of characters to a byte-represented IPv4 address.
`public void `[`ipv4_addr_print`](#group__net__ipv4__addr_1ga4fab9bd324008a393b77265d3193c29c)`(const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr)`            | Print IPv4 address to stdout.
`union `[`ipv4_addr_t`](#unionipv4__addr__t) | Data type to represent an IPv4 address.

## Members

#### `define `[`IPV4_ADDR_MAX_STR_LEN`](#group__net__ipv4__addr_1gaf174a4416a48d74279b85cc4f6fce97e) 

Maximum length of an IPv4 address as string.

#### `define `[`IPV4_ADDR_INIT`](#group__net__ipv4__addr_1gaa1cf435b286640dbc9ae8c9d9891385e) 

Static initializer for an IPv4 address.

#### Parameters
* `a` 1st octet 

* `b` 2nd octet 

* `c` 3rd octet 

* `d` 4th octet

#### Returns
initialized IPv4 address

#### `public inline static bool `[`ipv4_addr_equal`](#group__net__ipv4__addr_1gaa6abcffd0926eb3a79e9ca126e67afdd)`(const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * a,const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * b)` 

Checks if two IPv4 addresses are equal.

#### Parameters
* `a` An IPv4 address. 

* `b` Another IPv4 address.

#### Returns
true, if `a` and `b` are equal 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv4_addr_is_multicast`](#group__net__ipv4__addr_1gaa3ef0f901b2bf50a91e9c104aff85b0b)`(const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr)` 

Check if `addr` is a multicast address.

**See also**: [RFC 1112, section 4 ](https://www.rfc-editor.org/rfc/rfc1112.html#section-4)

#### Parameters
* `addr` An IPv4 address.

#### Returns
true, if `addr` is multicast address, 

#### Returns
false, otherwise.

#### `public char * `[`ipv4_addr_to_str`](#group__net__ipv4__addr_1ga746a395627e22a3a0c57940d0cd13f36)`(char * result,const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr,uint8_t result_len)` 

Converts an IPv4 address to its string representation.

#### Parameters
* `result` The resulting string representation of at least [IPV4_ADDR_MAX_STR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__addr_1gaf174a4416a48d74279b85cc4f6fce97e). 

* `addr` An IPv4 address 

* `result_len` Length of `result`

#### Returns
`result`, on success 

#### Returns
NULL, if `result_len` was lesser than IPV4_ADDR_MAX_STR_LEN 

#### Returns
NULL, if `result` or `addr` was NULL

#### `public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * `[`ipv4_addr_from_str`](#group__net__ipv4__addr_1gaddd4d56dd883cf318502e83041a48f4d)`(`[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * result,const char * addr)` 

Converts an IPv4 address string representation to a byte-represented IPv4 address.

#### Parameters
* `result` The resulting byte representation 

* `addr` An IPv4 address string representation

#### Returns
`result`, on success 

#### Returns
NULL, if `addr` was malformed 

#### Returns
NULL, if `result` or `addr` was NULL

#### `public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * `[`ipv4_addr_from_buf`](#group__net__ipv4__addr_1ga7d05d3d492d4f769d7e29b398f28d51f)`(`[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * result,const char * addr,size_t addr_len)` 

Converts an IPv4 address from a buffer of characters to a byte-represented IPv4 address.

`addr_len` should be between 0 and IPV4_ADDR_MAX_STR_LEN

#### Parameters
* `result` The resulting byte representation 

* `addr` An IPv4 address string representation 

* `addr_len` The amount of characters to parse

#### Returns
`result`, on success 

#### Returns
NULL, if `addr` was malformed 

#### Returns
NULL, if `result` or `addr` was NULL

#### `public void `[`ipv4_addr_print`](#group__net__ipv4__addr_1ga4fab9bd324008a393b77265d3193c29c)`(const `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr)` 

Print IPv4 address to stdout.

#### Parameters
* `addr` Pointer to [ipv4_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t) to print

