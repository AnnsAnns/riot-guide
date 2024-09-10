---
title: api-net_l2util.md
description: api-net_l2util.md
---
# group `net_l2util` 

This implements some common helper functions for IPv6 over X implementations based on [network device types](#group__drivers__netdev__api_1net_netdev_type).

> If you add a new [network device type](#group__drivers__netdev__api_1net_netdev_type) have at least a look at the implementation of these functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`L2UTIL_ADDR_MAX_LEN`](#group__net__l2util_1gaba3a9961273c671516cf4c03a26b3fe7)            | maximum expected length for addresses
`public int `[`l2util_eui64_from_addr`](#group__net__l2util_1ga020ec2ca8f4855a9f893ee386eec34e6)`(int dev_type,const uint8_t * addr,size_t addr_len,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64)`            | Converts a given hardware address to an EUI-64.
`public int `[`l2util_ipv6_iid_from_addr`](#group__net__l2util_1ga59e4110fa917f59738899558171f531c)`(int dev_type,const uint8_t * addr,size_t addr_len,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)`            | Converts a given hardware address to an IPv6 IID.
`public int `[`l2util_ipv6_iid_to_addr`](#group__net__l2util_1gac685fa77c277cbe1cf8ace342867f97c)`(int dev_type,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid,uint8_t * addr)`            | Converts an IPv6 IID to a hardware address.
`public int `[`l2util_ndp_addr_len_from_l2ao`](#group__net__l2util_1ga4786395f69ace734b00f4351fa360b0f)`(int dev_type,const `[`ndp_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ndp.md#structndp__opt__t)` * opt)`            | Derives the length of the link-layer address in an NDP link-layer address option from that option's length field and the given device type.
`public int `[`l2util_ipv6_group_to_l2_group`](#group__net__l2util_1gae9bd8721c1275326fbbb7a5f9cd05a8d)`(int dev_type,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6_group,uint8_t * l2_group)`            | Converts an IPv6 multicast address to a multicast address of the respective link layer.
`public char * `[`l2util_addr_to_str`](#group__net__l2util_1ga985ede981f1c69b1879f55b6b393160d)`(const uint8_t * addr,size_t addr_len,char * out)`            | Converts a hardware address to a human readable string.
`public size_t `[`l2util_addr_from_str`](#group__net__l2util_1gaaa4c7f588480db684853d97de113361b)`(const char * str,uint8_t * out)`            | Parses a string of colon-separated hexadecimals to a hardware address.
`public inline static bool `[`l2util_addr_equal`](#group__net__l2util_1gaf0cb89f915e1ca055865d5a53a317c0a)`(const uint8_t * addr_a,uint8_t addr_a_len,const uint8_t * addr_b,uint8_t addr_b_len)`            | Checks if two l2 addresses are equal.

## Members

#### `define `[`L2UTIL_ADDR_MAX_LEN`](#group__net__l2util_1gaba3a9961273c671516cf4c03a26b3fe7) 

maximum expected length for addresses

#### `public int `[`l2util_eui64_from_addr`](#group__net__l2util_1ga020ec2ca8f4855a9f893ee386eec34e6)`(int dev_type,const uint8_t * addr,size_t addr_len,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64)` 

Converts a given hardware address to an EUI-64.

> When the link-layer of the interface has link-layer addresses, and `NDEBUG` is not defined, the node fails with an assertion instead returning `-ENOTSUP`.

#### Parameters
* `dev_type` The network device type of the device `addr` came from (either because it is the configured address of the device or from a packet that came over it). 

* `addr` A hardware address. 

* `addr_len` Number of bytes in `addr`. 

* `eui64` The EUI-64 based on [gnrc_netif_t::device_type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a269e7bb2472a008176c8e173cd152600)

#### Returns
`sizeof(eui64_t)` on success. 

#### Returns
`-ENOTSUP`, when `dev_type` does not support EUI-64 conversion. 

#### Returns
`-EINVAL`, when `addr_len` is invalid for the `dev_type`.

#### `public int `[`l2util_ipv6_iid_from_addr`](#group__net__l2util_1ga59e4110fa917f59738899558171f531c)`(int dev_type,const uint8_t * addr,size_t addr_len,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)` 

Converts a given hardware address to an IPv6 IID.

> When the link-layer of the interface has link-layer addresses, and `NDEBUG` is not defined, the node fails with an assertion instead returning `-ENOTSUP`.

#### Parameters
* `dev_type` The network device type of the device `addr` came from (either because it is the configured address of the device or from a packet that came over it). 

* `addr` A hardware address. 

* `addr_len` Number of bytes in `addr`. 

* `iid` The IID based on [gnrc_netif_t::device_type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a269e7bb2472a008176c8e173cd152600)

#### Returns
`sizeof(eui64_t)` on success. 

#### Returns
`-ENOTSUP`, when `dev_type` does not support IID conversion. 

#### Returns
`-EINVAL`, when `addr_len` is invalid for the `dev_type`.

#### `public int `[`l2util_ipv6_iid_to_addr`](#group__net__l2util_1gac685fa77c277cbe1cf8ace342867f97c)`(int dev_type,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid,uint8_t * addr)` 

Converts an IPv6 IID to a hardware address.

`iid` was based on a hardware address 

The number of bytes available at `addr` is less or equal to [L2UTIL_ADDR_MAX_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2util_1gaba3a9961273c671516cf4c03a26b3fe7).

> When `NDEBUG` is not defined, the node fails with an assertion instead of returning `-ENOTSUP`

#### Parameters
* `dev_type` The network device type of the device the `iid` came from (either because it is based on the configured address of the device or from a packet that came over it). 

* `iid` An IID based on `dev_type`. 

* `addr` The hardware address. It is assumed that `iid` was based on a hardware address and that the available number of bytes in `addr` are greater or equal to [L2UTIL_ADDR_MAX_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2util_1gaba3a9961273c671516cf4c03a26b3fe7).

#### Returns
Length of resulting `addr` on success. 

#### Returns
`-ENOTSUP`, when `dev_type` does not support reverse IID conversion.

#### `public int `[`l2util_ndp_addr_len_from_l2ao`](#group__net__l2util_1ga4786395f69ace734b00f4351fa360b0f)`(int dev_type,const `[`ndp_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ndp.md#structndp__opt__t)` * opt)` 

Derives the length of the link-layer address in an NDP link-layer address option from that option's length field and the given device type.

If an RFC exists that specifies how IPv6 operates over a link-layer, this function usually implements the section "Unicast Address
         Mapping".

**See also**: [RFC 4861, section 4.6.1](https://tools.ietf.org/html/rfc4861#section-4.6.1)

> When `NDEBUG` is not defined, the node fails with an assertion instead of returning `-ENOTSUP`

#### Parameters
* `dev_type` The network device type of the device the `opt` came over in an NDP message. 

* `opt` An NDP source/target link-layer address option.

#### Returns
Length of the link-layer address in `opt` on success 

#### Returns
`-ENOTSUP`, when implementation does not know how to derive the length of the link-layer address from `opt's` length field based on `dev_type`. 

#### Returns
`-EINVAL` if `opt->len` was an invalid value for the given `dev_type`.

#### `public int `[`l2util_ipv6_group_to_l2_group`](#group__net__l2util_1gae9bd8721c1275326fbbb7a5f9cd05a8d)`(int dev_type,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6_group,uint8_t * l2_group)` 

Converts an IPv6 multicast address to a multicast address of the respective link layer.

There is enough allocated space in `l2_group` for an address for a device of type `dev_type` (e.g. 6 bytes for an ethernet address).

#### Parameters
* `dev_type` The network device type of the device `l2_addr` should be generated for. 

* `ipv6_group` An IPv6 multicast address. 

* `l2_group` A link layer multicast address

#### Returns
Length of `l2_group` in bytes 

#### Returns
`-ENOTSUP` if link layer does not support multicast.

#### `public char * `[`l2util_addr_to_str`](#group__net__l2util_1ga985ede981f1c69b1879f55b6b393160d)`(const uint8_t * addr,size_t addr_len,char * out)` 

Converts a hardware address to a human readable string.

The format will be like `xx:xx:xx:xx` where `xx` are the bytes of `addr` in hexadecimal representation.

`(out != NULL) && ((addr != NULL) || (addr_len == 0))`

`out`**MUST** have allocated at least 3 * `addr_len` bytes.

#### Parameters
* `addr` A hardware address. 

* `addr_len` Length of `addr`. 

* `out` A string to store the output in. Must at least have 3 * `addr_len` bytes allocated.

#### Returns
`out`.

#### `public size_t `[`l2util_addr_from_str`](#group__net__l2util_1gaaa4c7f588480db684853d97de113361b)`(const char * str,uint8_t * out)` 

Parses a string of colon-separated hexadecimals to a hardware address.

The input format must be like `xx:xx:xx:xx` where `xx` will be the bytes of `addr` in hexadecimal representation.

`(out != NULL)`

`out`**MUST** have allocated at least [GNRC_NETIF_L2ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) bytes.

#### Parameters
* `str` A string of colon-separated hexadecimals. 

* `out` The resulting hardware address. Must at least have [GNRC_NETIF_L2ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) bytes allocated.

#### Returns
Actual length of `out` on success. 

#### Returns
0, on failure.

#### `public inline static bool `[`l2util_addr_equal`](#group__net__l2util_1gaf0cb89f915e1ca055865d5a53a317c0a)`(const uint8_t * addr_a,uint8_t addr_a_len,const uint8_t * addr_b,uint8_t addr_b_len)` 

Checks if two l2 addresses are equal.

#### Parameters
* `addr_a` First hardware address. 

* `addr_a_len` Length of first hardware address. 

* `addr_b` Second hardware address. 

* `addr_b_len` Length of second hardware address.

#### Returns
true if the addresses match, false if not.

