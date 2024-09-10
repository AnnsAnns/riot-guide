---
title: api-net_gnrc_ipv6_auto_subnets.md
description: api-net_gnrc_ipv6_auto_subnets.md
---
# group `net_gnrc_ipv6_auto_subnets` 

Automatic configuration for cascading subnets.

AboutThis module provides an automatic configuration for networks with a (simple) tree topology.

If a sufficiently large IPv6 subnet (prefix length < /64) is provided via Router Advertisements, a routing node with this module will automatically configure subnets from it by dividing it into sub-prefixes for each downstream interface.

When using the `gnrc_ipv6_auto_subnets_simple` module, there can only be a single routing node on each level of the network but an arbitrary number of leaf nodes and downstream interfaces.

Example Topology with only one router on each levelExample Topology with only one router on each levelExample Topology with only one router on each levelExample Topology with only one router on each level

If there are multiple routing nodes on the same link, coordination between the routers is required. For this the `gnrc_ipv6_auto_subnets` implements a simple UDP based synchronisation protocol where each router announces the number of subnets they want to create.

Synchronisation AlgorithmSynchronisation AlgorithmSynchronisation AlgorithmSynchronisation Algorithm

The layer 2 address of the sender then determines the order in which the prefixes are assigned.

Example Topology with multiple routersExample Topology with multiple routersExample Topology with multiple routersExample Topology with multiple routers

The downstream network(s) receive the sub-prefix via Router Advertisements and the process repeats until the bits of the prefix are exhausted. The smallest subnet must still have a /64 prefix.

The new subnet must no longer be considered on-link by the hosts in the parent network. Therefore the downstream router will send a router advertisement, which only contains a Route Information Option, to the upstream network. The Route Information Option contains the prefix of the downstream network so that upstream routers will no longer consider hosts in this subnet on-link, but instead will use the downstream router to route to the new subnet.

The need for a Route Information OptionAll nodes that want to communicate with hosts in a downstream subnet must implement parsing of the Route Information Option. For routing RIOT nodes this is enabled by default, non-routing nodes need to enable the `gnrc_ipv6_nib_rio` module.

This is because all addresses in the subnet are also within the original network, so without further information hosts would consider those addresses on-link and perform neighbor solicitation to communicate with them.

E.g. if host Ⓒ (`2001:db8:0:8:5075:35ff:fefa:30bc`) sends an ICMPv6 Echo request to Ⓑ (`2001:db8:0:0:a7a2:12e0:48bc:7487`), it would not get a response:

Auto-Subnets without RIOAuto-Subnets without RIOAuto-Subnets without RIOAuto-Subnets without RIO

To solve this, the routing node Ⓐ also sends a Router Advertisement to the *upstream* network that only contains a Route Information Option for each downstream network created by that router. This way hosts in the upstream network will prefer the route via Ⓐ over link-local transmission as it is a stronger match than the upstream prefix:

Auto-Subnets with RIOAuto-Subnets with RIOAuto-Subnets with RIOAuto-Subnets with RIO

UsageSimply add the `gnrc_ipv6_auto_subnets` or `gnrc_ipv6_auto_subnets_simple` module to the nodes that should act as routers in the cascading network. The upstream network will be automatically chosen as the one that first receives a router advertisement.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PORT`](#group__net__gnrc__ipv6__auto__subnets_1gaa8ea59ee970849a2f43aa2641e43a5fc)            | Port for the custom UDP sync protocol.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PEERS_MAX`](#group__net__gnrc__ipv6__auto__subnets_1ga16739eb64df82cd8d68247918fd840a0)            | Max number of other routers on the same link.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_TX_PER_PERIOD`](#group__net__gnrc__ipv6__auto__subnets_1gaac9d004b28ee82d74fdfa217d1ef2b4f)            | How often the number subnets should be announced by the routers.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_TIMEOUT_MS`](#group__net__gnrc__ipv6__auto__subnets_1ga4db5ec851d70adcc31380697140992d1)            | How long to wait for other routers announcements before resending or creating subnets when the retry counter is exhausted.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PREFIX_FIX_LEN`](#group__net__gnrc__ipv6__auto__subnets_1gac81841ddded26404c1d0384defb23344)            | How many bits of a new prefix have to match the old prefix for it to be considered for replacement.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PREFIX_MIN_LEN`](#group__net__gnrc__ipv6__auto__subnets_1gabbfce1e27dcefc82c00ec2e58b273053)            | Minimal length of a new prefix.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_NUMOF`](#group__net__gnrc__ipv6__auto__subnets_1gafd478bbf55a33dcc983855d627bd4672)            | Number of subnets that can be configured.
`define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_STATIC`](#group__net__gnrc__ipv6__auto__subnets_1gaa6b08413af78bbe0d526da26ed9e3fc5)            | Enable this if you have a static network that might experience high packet loss under certain conditions.

## Members

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PORT`](#group__net__gnrc__ipv6__auto__subnets_1gaa8ea59ee970849a2f43aa2641e43a5fc) 

Port for the custom UDP sync protocol.

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PEERS_MAX`](#group__net__gnrc__ipv6__auto__subnets_1ga16739eb64df82cd8d68247918fd840a0) 

Max number of other routers on the same link.

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_TX_PER_PERIOD`](#group__net__gnrc__ipv6__auto__subnets_1gaac9d004b28ee82d74fdfa217d1ef2b4f) 

How often the number subnets should be announced by the routers.

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_TIMEOUT_MS`](#group__net__gnrc__ipv6__auto__subnets_1ga4db5ec851d70adcc31380697140992d1) 

How long to wait for other routers announcements before resending or creating subnets when the retry counter is exhausted.

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PREFIX_FIX_LEN`](#group__net__gnrc__ipv6__auto__subnets_1gac81841ddded26404c1d0384defb23344) 

How many bits of a new prefix have to match the old prefix for it to be considered for replacement.

Set this if you want to join multiple upstream subnets at the same time.

If you use `gnrc_ipv6_auto_subnets` instead of `gnrc_ipv6_auto_subnets_simple` make sure to also set CONFIG_GNRC_IPV6_AUTO_SUBNETS_NUMOF accordingly.

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_PREFIX_MIN_LEN`](#group__net__gnrc__ipv6__auto__subnets_1gabbfce1e27dcefc82c00ec2e58b273053) 

Minimal length of a new prefix.

e.g. Linux will only accept /64 prefixes for SLAAC

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_NUMOF`](#group__net__gnrc__ipv6__auto__subnets_1gafd478bbf55a33dcc983855d627bd4672) 

Number of subnets that can be configured.

This is not needed when using the `gnrc_ipv6_auto_subnets_simple` module
   or if only a single upstream subnet is to be partitioned.

   If this is set to any number higher than 1, make sure to also configure
   CONFIG_GNRC_IPV6_AUTO_SUBNETS_PREFIX_FIX_LEN to suit your setup.

#### `define `[`CONFIG_GNRC_IPV6_AUTO_SUBNETS_STATIC`](#group__net__gnrc__ipv6__auto__subnets_1gaa6b08413af78bbe0d526da26ed9e3fc5) 

Enable this if you have a static network that might experience high packet loss under certain conditions.

If enabled, this option causes the module to always assume the highest number of downstream routers it has ever seen. This prevents different/conflicting downstream subnets from being configured if multiple sync packets got lost.

