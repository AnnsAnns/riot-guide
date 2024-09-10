---
title: api-net_gnrc_ipv6_blacklist.md
description: api-net_gnrc_ipv6_blacklist.md
---
# group `net_gnrc_ipv6_blacklist` 

This refuses IPv6 addresses that are defined in this list.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_ipv6_blacklist_add`](#group__net__gnrc__ipv6__blacklist_1ga62a5f7559021cf2eaa78d6423b3248b3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Adds an IPv6 address to the blacklist.
`public void `[`gnrc_ipv6_blacklist_del`](#group__net__gnrc__ipv6__blacklist_1ga7130ec7243f7690c45cb03f506c26eaf)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Removes an IPv6 address from the blacklist.
`public bool `[`gnrc_ipv6_blacklisted`](#group__net__gnrc__ipv6__blacklist_1ga2e33f9c71b5b2c5085080c493a152ed5)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if an IPv6 address is blacklisted.
`public void `[`gnrc_ipv6_blacklist_print`](#group__net__gnrc__ipv6__blacklist_1ga7ed485369ae58efff4510b4ae3d1034b)`(void)`            | Prints the blacklist.

## Members

#### `public int `[`gnrc_ipv6_blacklist_add`](#group__net__gnrc__ipv6__blacklist_1ga62a5f7559021cf2eaa78d6423b3248b3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Adds an IPv6 address to the blacklist.

#### Parameters
* `addr` An IPv6 address.

#### Returns
0, on success. 

#### Returns
-1, if blacklist is full.

#### `public void `[`gnrc_ipv6_blacklist_del`](#group__net__gnrc__ipv6__blacklist_1ga7130ec7243f7690c45cb03f506c26eaf)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Removes an IPv6 address from the blacklist.

Addresses not in the blacklist will be ignored.

#### Parameters
* `addr` An IPv6 address.

#### `public bool `[`gnrc_ipv6_blacklisted`](#group__net__gnrc__ipv6__blacklist_1ga2e33f9c71b5b2c5085080c493a152ed5)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if an IPv6 address is blacklisted.

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is blacklisted. 

#### Returns
false, if `addr` is not blacklisted.

#### `public void `[`gnrc_ipv6_blacklist_print`](#group__net__gnrc__ipv6__blacklist_1ga7ed485369ae58efff4510b4ae3d1034b)`(void)` 

Prints the blacklist.

