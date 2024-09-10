---
title: api-net_dns.md
description: api-net_dns.md
---
# group `net_dns` 

Generic DNS values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static int `[`dns_query`](#group__net__dns_1ga56b25c59965f72c76a3473d58f6c9395)`(const char * domain_name,void * addr_out,int family)`            | Get IP address for DNS name.

## Members

#### `public inline static int `[`dns_query`](#group__net__dns_1ga56b25c59965f72c76a3473d58f6c9395)`(const char * domain_name,void * addr_out,int family)` 

Get IP address for DNS name.

This function will synchronously try to resolve a DNS A or AAAA record by contacting the DNS server specified in the global variable [sock_dns_server](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns_1ga99ea302f97897ac95d47f1cb83b2ac91).

By supplying AF_INET, AF_INET6 or AF_UNSPEC in `family` requesting of A records (IPv4), AAAA records (IPv6) or both can be selected.

This function will return the first DNS record it receives. IF both A and AAAA are requested, AAAA will be preferred.

`addr_out` needs to provide space for any possible result! (4byte when family==AF_INET, 16byte otherwise)

#### Parameters
* `domain_name` DNS name to resolve into address 

* `addr_out` buffer to write result into 

* `family` Either AF_INET, AF_INET6 or AF_UNSPEC

#### Returns
the size of the resolved address on success 

#### Returns
< 0 otherwise

