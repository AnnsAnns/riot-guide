---
title: api-net_dhcpv6_client.md
description: api-net_dhcpv6_client.md
---
# group `net_dhcpv6_client` 

DHCPv6 client implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DHCPV6_CLIENT_DUID_LEN`](#group__net__dhcpv6__client_1gab5bcfb8454182730c2fc81a0529d3a16)            | Static length of the DUID.
`define `[`DHCPV6_CLIENT_BUFLEN`](#group__net__dhcpv6__client_1gaa20940d718b546747a4fc82b5f919d04)            | default length for send and receive buffer
`public int `[`dhcpv6_client_req_ia_na`](#group__net__dhcpv6__client_1ga14dc44b48ce78c734cca1462c3ece03c)`(unsigned netif)`            | Configures the client to request non-temporary addresses for a network interface from a server.
`struct `[`dhcpv6_duid_l2_t`](#structdhcpv6__duid__l2__t) | DUID based on link-layer address plus time.

## Members

#### `define `[`DHCPV6_CLIENT_DUID_LEN`](#group__net__dhcpv6__client_1gab5bcfb8454182730c2fc81a0529d3a16) 

Static length of the DUID.

#### `define `[`DHCPV6_CLIENT_BUFLEN`](#group__net__dhcpv6__client_1gaa20940d718b546747a4fc82b5f919d04) 

default length for send and receive buffer

#### `public int `[`dhcpv6_client_req_ia_na`](#group__net__dhcpv6__client_1ga14dc44b48ce78c734cca1462c3ece03c)`(unsigned netif)` 

Configures the client to request non-temporary addresses for a network interface from a server.

For multi-hop WPAN meshes a DHCPv6 relay (which is not implemented in RIOT yet) is required, as DHCPv6 only acts in link scope.

#### Parameters
* `netif` The interface to request non-temporaty addresses for.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is no lease entry available anymore 

* `-ENOTSUP` when module `dhcpv6_client_ia_na` is not being used

# struct `dhcpv6_duid_l2_t` 

DUID based on link-layer address plus time.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`type`](#structdhcpv6__duid__l2__t_1adcb58ff9567ce8c5d5cf856634bc5b1f) | [DHCPV6_DUID_TYPE_L2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dhcpv6_1gae3de5e88eed265ebdce1bb95eda2c7d5)
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`l2type`](#structdhcpv6__duid__l2__t_1a1615d4dcf53de92dce6985c7ed384f54) | [hardware type](#group__net__arp_1net_arp_hwtype))

## Members

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`type`](#structdhcpv6__duid__l2__t_1adcb58ff9567ce8c5d5cf856634bc5b1f) 

[DHCPV6_DUID_TYPE_L2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dhcpv6_1gae3de5e88eed265ebdce1bb95eda2c7d5)

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`l2type`](#structdhcpv6__duid__l2__t_1a1615d4dcf53de92dce6985c7ed384f54) 

[hardware type](#group__net__arp_1net_arp_hwtype))

