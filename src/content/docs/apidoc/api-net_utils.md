---
title: api-net_utils.md
description: api-net_utils.md
---
# group `net_utils` 

Common network helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`netutils_get_ipv4`](#group__net__utils_1gaed60f4894d97cdbae753216a307567d8)`(`[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr,const char * hostname)`            | Parse an IPv4 address / hostname string.
`public int `[`netutils_get_ipv6`](#group__net__utils_1ga602ddb0b10821c5e6ae592abca644fdb)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` ** netif,const char * hostname)`            | Parse an IPv6 address / hostname string.

## Members

#### `public int `[`netutils_get_ipv4`](#group__net__utils_1gaed60f4894d97cdbae753216a307567d8)`(`[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` * addr,const char * hostname)` 

Parse an IPv4 address / hostname string.

If the [DNS sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns) module is used, this will attempt to resolve hostnames via DNS to IPv4 addresses.

#### Parameters
* `addr` IPv4 address of the host 

* `hostname` IPv4 address string or hostname

#### Returns
0 on success, error otherwise

#### `public int `[`netutils_get_ipv6`](#group__net__utils_1ga602ddb0b10821c5e6ae592abca644fdb)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` ** netif,const char * hostname)` 

Parse an IPv6 address / hostname string.

If the [DNS sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns) module is used, this will attempt to resolve hostnames via DNS to IPv6 addresses.

#### Parameters
* `addr` IPv6 address of the host 

* `netif` Interface if address is link-local 

* `hostname` IPv6 address string or hostname

#### Returns
0 on success, error otherwise

