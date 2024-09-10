---
title: api-net_dns_cache.md
description: api-net_dns_cache.md
---
# group `net_dns_cache` 

DNS cache.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DNS_CACHE_SIZE`](#group__net__dns__cache_1gae08b225e8b9a42abb08e22fce0ae5eed)            | Maximum number of DNS cache entries.
`define `[`CONFIG_DNS_CACHE_A`](#group__net__dns__cache_1ga3ffb16cddf2a98dc4df4b8041ad7b02d)            | Handle to cache A records.
`define `[`CONFIG_DNS_CACHE_AAAA`](#group__net__dns__cache_1ga430d072ba920284789f59d96b445faf4)            | Handle to cache AAAA records.
`public int `[`dns_cache_query`](#group__net__dns__cache_1ga166ca56d0177dd05c85fff7f988088f0)`(const char * domain_name,void * addr_out,int family)`            | Get IP address for a DNS name from the DNS cache.
`public void `[`dns_cache_add`](#group__net__dns__cache_1gad7aa44a41a5c1b4687fd56724801fc73)`(const char * domain_name,const void * addr,int addr_len,uint32_t ttl)`            | Add an IP address for a DNS name to the DNS cache.

## Members

#### `define `[`CONFIG_DNS_CACHE_SIZE`](#group__net__dns__cache_1gae08b225e8b9a42abb08e22fce0ae5eed) 

Maximum number of DNS cache entries.

#### `define `[`CONFIG_DNS_CACHE_A`](#group__net__dns__cache_1ga3ffb16cddf2a98dc4df4b8041ad7b02d) 

Handle to cache A records.

#### `define `[`CONFIG_DNS_CACHE_AAAA`](#group__net__dns__cache_1ga430d072ba920284789f59d96b445faf4) 

Handle to cache AAAA records.

#### `public int `[`dns_cache_query`](#group__net__dns__cache_1ga166ca56d0177dd05c85fff7f988088f0)`(const char * domain_name,void * addr_out,int family)` 

Get IP address for a DNS name from the DNS cache.

#### Parameters
* `domain_name` DNS name to resolve into address 

* `addr_out` buffer to write result into 

* `family` Either AF_INET, AF_INET6 or AF_UNSPEC

#### Returns
the size of the resolved address on success 

#### Returns
<= 0 otherwise

#### `public void `[`dns_cache_add`](#group__net__dns__cache_1gad7aa44a41a5c1b4687fd56724801fc73)`(const char * domain_name,const void * addr,int addr_len,uint32_t ttl)` 

Add an IP address for a DNS name to the DNS cache.

#### Parameters
* `domain_name` DNS name to resolve into address 

* `addr` buffer containing the address 

* `addr_len` length of the address in bytes 

* `ttl` lifetime of the entry in seconds

