---
title: api-net_gnrc_ipv6_nib_conf.md
description: api-net_gnrc_ipv6_nib_conf.md
---
# group `net_gnrc_ipv6_nib_conf` 

Configuration macros for neighbor information base.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_IPV6_NIB_REACH_TIME_RESET`](#group__net__gnrc__ipv6__nib__conf_1gaeb7fdd8c2655c48300788902de9dd17d)            | Reset time in milliseconds for the reachability time.
`define `[`CONFIG_GNRC_IPV6_NIB_NO_RTR_SOL`](#group__net__gnrc__ipv6__nib__conf_1ga48b726ee06f04796959dec79cd7b2096)            | Disable router solicitations.
`define `[`CONFIG_GNRC_IPV6_NIB_L2ADDR_MAX_LEN`](#group__net__gnrc__ipv6__nib__conf_1ga487be695540fa221a7fefe2876fb118d)            | Maximum link-layer address length (aligned)
`define `[`CONFIG_GNRC_IPV6_NIB_DEFAULT_ROUTER_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1ga67f93b381ce2aad915fa59b99b1b6da5)            | Number of default routers in the default router list.
`define `[`CONFIG_GNRC_IPV6_NIB_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1ga9dc4943e8cb6c9b2fec3fb54ed1395a8)            | Number of entries in NIB.
`define `[`CONFIG_GNRC_IPV6_NIB_OFFL_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1ga49652c6625a79385c9d50568b217fd4d)            | Number of off-link entries in NIB.
`define `[`CONFIG_GNRC_IPV6_NIB_ABR_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1gae3859ffcf92ff99ff3e8fba239efa55b)            | Number of authoritative border router entries in NIB.

## Members

#### `define `[`CONFIG_GNRC_IPV6_NIB_REACH_TIME_RESET`](#group__net__gnrc__ipv6__nib__conf_1gaeb7fdd8c2655c48300788902de9dd17d) 

Reset time in milliseconds for the reachability time.

**See also**: [RFC 4861, section 6.3.4](https://tools.ietf.org/html/rfc4861#section-6.3.4)

#### `define `[`CONFIG_GNRC_IPV6_NIB_NO_RTR_SOL`](#group__net__gnrc__ipv6__nib__conf_1ga48b726ee06f04796959dec79cd7b2096) 

Disable router solicitations.

Only do this if you know what you're doing

#### `define `[`CONFIG_GNRC_IPV6_NIB_L2ADDR_MAX_LEN`](#group__net__gnrc__ipv6__nib__conf_1ga487be695540fa221a7fefe2876fb118d) 

Maximum link-layer address length (aligned)

#### `define `[`CONFIG_GNRC_IPV6_NIB_DEFAULT_ROUTER_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1ga67f93b381ce2aad915fa59b99b1b6da5) 

Number of default routers in the default router list.

> This number has direct influence on the maximum number of default routers

#### `define `[`CONFIG_GNRC_IPV6_NIB_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1ga9dc4943e8cb6c9b2fec3fb54ed1395a8) 

Number of entries in NIB.

> This number has direct influence on the maximum number of neighbors and duplicate address detection table entries

#### `define `[`CONFIG_GNRC_IPV6_NIB_OFFL_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1ga49652c6625a79385c9d50568b217fd4d) 

Number of off-link entries in NIB.

> This number is equal to the maximum number of forwarding table and prefix list entries in NIB

#### `define `[`CONFIG_GNRC_IPV6_NIB_ABR_NUMOF`](#group__net__gnrc__ipv6__nib__conf_1gae3859ffcf92ff99ff3e8fba239efa55b) 

Number of authoritative border router entries in NIB.

