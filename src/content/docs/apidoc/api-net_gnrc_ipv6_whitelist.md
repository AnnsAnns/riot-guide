---
title: api-net_gnrc_ipv6_whitelist.md
description: api-net_gnrc_ipv6_whitelist.md
---
# group `net_gnrc_ipv6_whitelist` 

This allows you to only accept IPv6 addresses that are defined in this list.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_ipv6_whitelist_add`](#group__net__gnrc__ipv6__whitelist_1gac13b50e971a07c14558a96adb37b098c)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Adds an IPv6 address to the whitelist.
`public void `[`gnrc_ipv6_whitelist_del`](#group__net__gnrc__ipv6__whitelist_1gac85641a3907f394c5411b317c172f02a)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Removes an IPv6 address from the whitelist.
`public bool `[`gnrc_ipv6_whitelisted`](#group__net__gnrc__ipv6__whitelist_1ga8e30aec14fa81a255431d16e5322afe9)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if an IPv6 address is whitelisted.
`public void `[`gnrc_ipv6_whitelist_print`](#group__net__gnrc__ipv6__whitelist_1gaa2996d49c49094e52800942b10e84004)`(void)`            | Prints the whitelist.

## Members

#### `public int `[`gnrc_ipv6_whitelist_add`](#group__net__gnrc__ipv6__whitelist_1gac13b50e971a07c14558a96adb37b098c)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Adds an IPv6 address to the whitelist.

#### Parameters
* `addr` An IPv6 address.

#### Returns
0, on success. 

#### Returns
-1, if whitelist is full.

#### `public void `[`gnrc_ipv6_whitelist_del`](#group__net__gnrc__ipv6__whitelist_1gac85641a3907f394c5411b317c172f02a)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Removes an IPv6 address from the whitelist.

Addresses not in the whitelist will be ignored.

#### Parameters
* `addr` An IPv6 address.

#### `public bool `[`gnrc_ipv6_whitelisted`](#group__net__gnrc__ipv6__whitelist_1ga8e30aec14fa81a255431d16e5322afe9)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if an IPv6 address is whitelisted.

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is whitelisted. 

#### Returns
false, if `addr` is not whitelisted.

#### `public void `[`gnrc_ipv6_whitelist_print`](#group__net__gnrc__ipv6__whitelist_1gaa2996d49c49094e52800942b10e84004)`(void)` 

Prints the whitelist.

