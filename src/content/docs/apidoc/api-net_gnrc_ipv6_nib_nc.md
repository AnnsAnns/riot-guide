---
title: api-net_gnrc_ipv6_nib_nc.md
description: api-net_gnrc_ipv6_nib_nc.md
---
# group `net_gnrc_ipv6_nib_nc` 

Neighbor cache component of neighbor information base.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static unsigned `[`gnrc_ipv6_nib_nc_get_nud_state`](#group__net__gnrc__ipv6__nib__nc_1ga6188cc2cbf7feeb82989a4c853e38985)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)`            | Gets neighbor unreachability state from entry.
`public inline static bool `[`gnrc_ipv6_nib_nc_is_router`](#group__net__gnrc__ipv6__nib__nc_1ga6b736fbad6de7d0ab229f512d8bbafaf)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)`            | Gets router flag of a neighbor.
`public inline static unsigned `[`gnrc_ipv6_nib_nc_get_iface`](#group__net__gnrc__ipv6__nib__nc_1gabf7c21a6d5871d33ad3ad0e00e7dcdc8)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)`            | Gets interface from entry.
`public inline static unsigned `[`gnrc_ipv6_nib_nc_get_ar_state`](#group__net__gnrc__ipv6__nib__nc_1ga7c538adc4ae433669dde716756052625)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)`            | Gets address registration state of an entry.
`public int `[`gnrc_ipv6_nib_nc_set`](#group__net__gnrc__ipv6__nib__nc_1ga8f52c47b235e8beea711dcab1209f12f)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6,unsigned iface,const uint8_t * l2addr,size_t l2addr_len)`            | Adds an unmanaged neighbor entry to NIB.
`public void `[`gnrc_ipv6_nib_nc_del`](#group__net__gnrc__ipv6__nib__nc_1ga45b48f71642da75476d0f2a1bf19e3ca)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6,unsigned iface)`            | Deletes neighbor with address `ipv6` from NIB.
`public void `[`gnrc_ipv6_nib_nc_mark_reachable`](#group__net__gnrc__ipv6__nib__nc_1ga2da52726a6d928c05d638c0e19b04455)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6)`            | Mark neighbor with address `ipv6` as reachable.
`public bool `[`gnrc_ipv6_nib_nc_iter`](#group__net__gnrc__ipv6__nib__nc_1ga70e8d4deff69a7c8a8376b182228ec38)`(unsigned iface,void ** state,`[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * nce)`            | Iterates over all neighbor cache entries in the NIB.
`public void `[`gnrc_ipv6_nib_nc_print`](#group__net__gnrc__ipv6__nib__nc_1ga2ea3c3b5a6ab9762dd4866aef4425846)`(`[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * nce)`            | Prints a neighbor cache entry.
`struct `[`gnrc_ipv6_nib_nc_t`](#structgnrc__ipv6__nib__nc__t) | Neighbor cache entry view on NIB.

## Members

#### `public inline static unsigned `[`gnrc_ipv6_nib_nc_get_nud_state`](#group__net__gnrc__ipv6__nib__nc_1ga6188cc2cbf7feeb82989a4c853e38985)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)` 

Gets neighbor unreachability state from entry.

#### Parameters
* `entry` A neighbor cache entry.

#### Returns
The neighbor unreachability state of `entry`.

#### `public inline static bool `[`gnrc_ipv6_nib_nc_is_router`](#group__net__gnrc__ipv6__nib__nc_1ga6b736fbad6de7d0ab229f512d8bbafaf)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)` 

Gets router flag of a neighbor.

#### Parameters
* `entry` A neighbor cache entry.

#### Returns
true, if `entry` is a router. 

#### Returns
false, if `entry` is not a router.

#### `public inline static unsigned `[`gnrc_ipv6_nib_nc_get_iface`](#group__net__gnrc__ipv6__nib__nc_1gabf7c21a6d5871d33ad3ad0e00e7dcdc8)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)` 

Gets interface from entry.

#### Parameters
* `entry` A neighbor cache entry

#### Returns
The interface identifier of `entry`. 

#### Returns
0 if no interface is identified for `entry`.

#### `public inline static unsigned `[`gnrc_ipv6_nib_nc_get_ar_state`](#group__net__gnrc__ipv6__nib__nc_1ga7c538adc4ae433669dde716756052625)`(const `[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * entry)` 

Gets address registration state of an entry.

#### Parameters
* `entry` A neighbor cache entry

#### Returns
The address registration state of `entry`.

#### `public int `[`gnrc_ipv6_nib_nc_set`](#group__net__gnrc__ipv6__nib__nc_1ga8f52c47b235e8beea711dcab1209f12f)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6,unsigned iface,const uint8_t * l2addr,size_t l2addr_len)` 

Adds an unmanaged neighbor entry to NIB.

`ipv6 != NULL`

`l2addr_len <= CONFIG_GNRC_IPV6_NIB_L2ADDR_MAX_LEN`

`(iface > KERNEL_PID_UNDEF) && (iface <= KERNEL_PID_LAST)`

#### Parameters
* `ipv6` The neighbor's IPv6 address. 

* `iface` The interface to the neighbor. 

* `l2addr` The neighbor's L2 address. 

* `l2addr_len` Length of `l2addr`.

A neighbor cache entry created this way is marked as persistent. Also, a non-persistent neighbor or destination cache entry already in the NIB might be removed to make room for the new entry. If an entry pointing to the same IPv6 address as `ipv6` exists already it will be overwritten and marked as unmanaged.

If [CONFIG_GNRC_IPV6_NIB_ARSM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__conf_1ga76a973340653df11c95840ca3a70d90e) == 0 `l2addr` and `l2addr_len` won't be set and `ipv6` must be a link-local address.

#### Returns
0 on success. 

#### Returns
-ENOMEM, if no space is left in neighbor cache. 

#### Returns
-EINVAL, if `ipv6` is invalid (i.e. [CONFIG_GNRC_IPV6_NIB_ARSM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__conf_1ga76a973340653df11c95840ca3a70d90e) == 0 and `ipv6` is not link-local).

#### `public void `[`gnrc_ipv6_nib_nc_del`](#group__net__gnrc__ipv6__nib__nc_1ga45b48f71642da75476d0f2a1bf19e3ca)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6,unsigned iface)` 

Deletes neighbor with address `ipv6` from NIB.

`ipv6 != NULL`

#### Parameters
* `ipv6` The neighbor's IPv6 address. 

* `iface` The interface to the neighbor.

If the `ipv6` can't be found for a neighbor in the NIB nothing happens.

#### `public void `[`gnrc_ipv6_nib_nc_mark_reachable`](#group__net__gnrc__ipv6__nib__nc_1ga2da52726a6d928c05d638c0e19b04455)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6)` 

Mark neighbor with address `ipv6` as reachable.

`ipv6 != NULL`

#### Parameters
* `ipv6` A neighbor's IPv6 address. Must not be NULL.

This function shall be called if an upper layer gets reachability confirmation via its own means (e.g. a TCP connection build-up or confirmation). Unmanaged neighbor cache entries (i.e. entries created using [gnrc_ipv6_nib_nc_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__nc_1ga8f52c47b235e8beea711dcab1209f12f)) or entries whose next-hop are not yet in the neighbor cache are ignored.

Entries in state [GNRC_IPV6_NIB_NC_INFO_NUD_STATE_UNMANAGED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__nc_1gad5e78df4f8638ca4bffb12ba56d5f120) are not affected by this, since they are assumed to always be reachable and kept out of the NUD state-machine

#### `public bool `[`gnrc_ipv6_nib_nc_iter`](#group__net__gnrc__ipv6__nib__nc_1ga70e8d4deff69a7c8a8376b182228ec38)`(unsigned iface,void ** state,`[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * nce)` 

Iterates over all neighbor cache entries in the NIB.

`(state != NULL) && (nce != NULL)`

#### Parameters
* `iface` Restrict iteration to entries on this interface. 0 for any interface. 

* `state` Iteration state of the neighbor cache. Must point to a NULL pointer to start iteration. 

* `nce` The next neighbor cache entry.

Usage example:

```cpp
#include "net/gnrc/ipv6/nib/nc.h"

int main(void) {
    void *state = NULL;
    gnrc_ipv6_nib_nc_t nce;

    puts("My neighbors:");
    while (gnrc_ipv6_nib_nc_iter(0, &state, &nce)) {
        gnrc_ipv6_nib_nc_print(&nce);
    }
    return 0;
}
```

The list may change during iteration.

#### Returns
true, if iteration can be continued. 

#### Returns
false, if `nce` is the last neighbor cache entry in the NIB.

#### `public void `[`gnrc_ipv6_nib_nc_print`](#group__net__gnrc__ipv6__nib__nc_1ga2ea3c3b5a6ab9762dd4866aef4425846)`(`[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * nce)` 

Prints a neighbor cache entry.

`nce != NULL`

#### Parameters
* `nce` A neighbor cache entry.

# struct `gnrc_ipv6_nib_nc_t` 

Neighbor cache entry view on NIB.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`ipv6`](#structgnrc__ipv6__nib__nc__t_1a87ea41b7d5174d4745dcf88b2942e282) | Neighbor's IPv6 address.
`public uint8_t `[`l2addr`](#structgnrc__ipv6__nib__nc__t_1a8a6d5311d7967dd510341c2ed790dfc1) | Neighbor's link-layer address.
`public uint16_t `[`info`](#structgnrc__ipv6__nib__nc__t_1abc71027402de854d5647a377fef739f6) | Neighbor information as defined in [info values](#group__net__gnrc__ipv6__nib__nc_1net_gnrc_ipv6_nib_nc_info).
`public uint8_t `[`l2addr_len`](#structgnrc__ipv6__nib__nc__t_1a6edcc6e23509e6e6dae2acef6a0bc161) | Length of [gnrc_ipv6_nib_nc_t::l2addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t_1a8a6d5311d7967dd510341c2ed790dfc1) in bytes.

## Members

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`ipv6`](#structgnrc__ipv6__nib__nc__t_1a87ea41b7d5174d4745dcf88b2942e282) 

Neighbor's IPv6 address.

#### `public uint8_t `[`l2addr`](#structgnrc__ipv6__nib__nc__t_1a8a6d5311d7967dd510341c2ed790dfc1) 

Neighbor's link-layer address.

#### `public uint16_t `[`info`](#structgnrc__ipv6__nib__nc__t_1abc71027402de854d5647a377fef739f6) 

Neighbor information as defined in [info values](#group__net__gnrc__ipv6__nib__nc_1net_gnrc_ipv6_nib_nc_info).

#### `public uint8_t `[`l2addr_len`](#structgnrc__ipv6__nib__nc__t_1a6edcc6e23509e6e6dae2acef6a0bc161) 

Length of [gnrc_ipv6_nib_nc_t::l2addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t_1a8a6d5311d7967dd510341c2ed790dfc1) in bytes.

