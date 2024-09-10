---
title: api-net_dhcpv6_conf.md
description: api-net_dhcpv6_conf.md
---
# group `net_dhcpv6_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DHCPV6_CLIENT_PFX_LEASE_MAX`](#group__net__dhcpv6__conf_1gad39ff5a80a62c0b99af9a87b826a1507)            | Maximum number of prefix leases to be stored.
`define `[`CONFIG_DHCPV6_CLIENT_ADDR_LEASE_MAX`](#group__net__dhcpv6__conf_1gada7cdba0d6c188add01b356bd7fa0aea)            | Maximum number of address leases to be stored.
`define `[`DHCPV6_CLIENT_ADDRS_NUMOF`](#group__net__dhcpv6__conf_1ga3e542737c714f0fc1efa488c4ae69f75)            | Number of addresses needed for using DHCPv6 IA_NA.
`define `[`CONFIG_DHCPV6_CLIENT_MUD_URL`](#group__net__dhcpv6__conf_1ga92a42812f1c6693f2654a88329833c07)            | MUD URL (must use the [https://](https://) scheme) For more info, see the [definitions](#client_8h_1net_dhcpv6_mud_url_option) below.
`define `[`CONFIG_DHCPV6_RELAY_HOP_LIMIT`](#group__net__dhcpv6__conf_1gac760a078ffd34eb2ad0e8b1c2110fa8c)            | Maximum hop count in a relay-forward message (HOP_COUNT_LIMIT)
`define `[`CONFIG_DHCPV6_RELAY_BUFLEN`](#group__net__dhcpv6__conf_1ga90ae4f32a69a57d9087ba61785978405)            | default length for send and receive buffer

## Members

#### `define `[`CONFIG_DHCPV6_CLIENT_PFX_LEASE_MAX`](#group__net__dhcpv6__conf_1gad39ff5a80a62c0b99af9a87b826a1507) 

Maximum number of prefix leases to be stored.

Should be equal to the number of downstream interfaces
     that are to be configured via DHCPv6

#### `define `[`CONFIG_DHCPV6_CLIENT_ADDR_LEASE_MAX`](#group__net__dhcpv6__conf_1gada7cdba0d6c188add01b356bd7fa0aea) 

Maximum number of address leases to be stored.

#### `define `[`DHCPV6_CLIENT_ADDRS_NUMOF`](#group__net__dhcpv6__conf_1ga3e542737c714f0fc1efa488c4ae69f75) 

Number of addresses needed for using DHCPv6 IA_NA.

Used for calculation of [CONFIG_GNRC_NETIF_IPV6_ADDRS_NUMOF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga366596e311b4a450887a1a180ae66fb3). Set to 0 if `dhcpv6_client_ia_na` is not included.

#### `define `[`CONFIG_DHCPV6_CLIENT_MUD_URL`](#group__net__dhcpv6__conf_1ga92a42812f1c6693f2654a88329833c07) 

MUD URL (must use the [https://](https://) scheme) For more info, see the [definitions](#client_8h_1net_dhcpv6_mud_url_option) below.

#### `define `[`CONFIG_DHCPV6_RELAY_HOP_LIMIT`](#group__net__dhcpv6__conf_1gac760a078ffd34eb2ad0e8b1c2110fa8c) 

Maximum hop count in a relay-forward message (HOP_COUNT_LIMIT)

**See also**: [RFC 8415, section 7.6](https://tools.ietf.org/html/rfc8415#section-7.6)

#### `define `[`CONFIG_DHCPV6_RELAY_BUFLEN`](#group__net__dhcpv6__conf_1ga90ae4f32a69a57d9087ba61785978405) 

default length for send and receive buffer

