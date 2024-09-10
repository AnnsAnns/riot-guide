---
title: api-net_dhcpv6_client_simple_pd.md
description: api-net_dhcpv6_client_simple_pd.md
---
# group `net_dhcpv6_client_simple_pd` 

simple prefix delegation

DHCPv6 client bootstrapping for prefix deligation with routers & 6LoWPAN border routers

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_UPSTREAM`](#group__net__dhcpv6__client__simple__pd_1gab5a0f96151310a9c3a12fb3b4fbdd354)            | Identifier of the upstream interface.
`define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_UPSTREAM_TYPE`](#group__net__dhcpv6__client__simple__pd_1ga6ab4930c0cc099de3e665ccfa36822c4)            | Interface type of the upstream interface.
`define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_UPSTREAM_IDX`](#group__net__dhcpv6__client__simple__pd_1ga947652643586f88f6bc49326bc72198c)            | Interface index of the upstream interface.
`define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_6LO_CTX_MIN`](#group__net__dhcpv6__client__simple__pd_1gaeef4d77c57183f49eee549d3413ec367)            | 6LoWPAN compression context lifetime for configured prefixes in minutes
`define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_STATIC_ROUTE`](#group__net__dhcpv6__client__simple__pd_1ga89753e534d920adc42b0fc220587a1b4)            | Use static routes to upstream router.
`public void `[`gnrc_dhcpv6_client_simple_pd_init`](#group__net__dhcpv6__client__simple__pd_1ga227790f671b655d3d3a6969c75d9325f)`(void)`            | Initializes the DHCPv6 client for simple prefix delegation.

## Members

#### `define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_UPSTREAM`](#group__net__dhcpv6__client__simple__pd_1gab5a0f96151310a9c3a12fb3b4fbdd354) 

Identifier of the upstream interface.

Leave 0 (default) to let the client pick the first non-6LoWPAN interface it finds

#### `define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_UPSTREAM_TYPE`](#group__net__dhcpv6__client__simple__pd_1ga6ab4930c0cc099de3e665ccfa36822c4) 

Interface type of the upstream interface.

See [netdev_type_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb) for possible values

#### `define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_UPSTREAM_IDX`](#group__net__dhcpv6__client__simple__pd_1ga947652643586f88f6bc49326bc72198c) 

Interface index of the upstream interface.

If there are multiple interfaces of the same type, set this to select which one to use for the upstream.

#### `define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_6LO_CTX_MIN`](#group__net__dhcpv6__client__simple__pd_1gaeef4d77c57183f49eee549d3413ec367) 

6LoWPAN compression context lifetime for configured prefixes in minutes

Must be between 1 and 255

**See also**: [RFC 6775, section 4.2](https://tools.ietf.org/html/rfc6775#section-4.2)

#### `define `[`CONFIG_GNRC_DHCPV6_CLIENT_6LBR_STATIC_ROUTE`](#group__net__dhcpv6__client__simple__pd_1ga89753e534d920adc42b0fc220587a1b4) 

Use static routes to upstream router.

If set the border router will be configured to have a default route via `fe80::1`. The link-local address `fe80::2` will be added so that the upstream router can set a static route for the delegated prefix via that address. It is recommended to increase at least [CONFIG_GNRC_NETIF_IPV6_ADDRS_NUMOF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga366596e311b4a450887a1a180ae66fb3) to that end.

#### `public void `[`gnrc_dhcpv6_client_simple_pd_init`](#group__net__dhcpv6__client__simple__pd_1ga227790f671b655d3d3a6969c75d9325f)`(void)` 

Initializes the DHCPv6 client for simple prefix delegation.

Called by `auto_init` when included

