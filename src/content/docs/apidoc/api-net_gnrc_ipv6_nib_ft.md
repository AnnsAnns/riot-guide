---
title: api-net_gnrc_ipv6_nib_ft.md
description: api-net_gnrc_ipv6_nib_ft.md
---
# group `net_gnrc_ipv6_nib_ft` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_ipv6_nib_ft_get`](#group__net__gnrc__ipv6__nib__ft_1ga3b9800709368fc251a63efae1cb9b076)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_ipv6_nib_ft_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t)` * fte)`            | Gets the best matching forwarding table entry to a destination.
`public int `[`gnrc_ipv6_nib_ft_add`](#group__net__gnrc__ipv6__nib__ft_1gaae03867939ba18c864ef69eec6c7b8fc)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,unsigned dst_len,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * next_hop,unsigned iface,uint32_t lifetime)`            | Adds a new route to the forwarding table.
`public void `[`gnrc_ipv6_nib_ft_del`](#group__net__gnrc__ipv6__nib__ft_1ga7ddd871c07ca363ee2115afd57bafd8a)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,unsigned dst_len)`            | Deletes a route from forwarding table.
`public bool `[`gnrc_ipv6_nib_ft_iter`](#group__net__gnrc__ipv6__nib__ft_1gad7fc425a4def5d8d7bb40cd410060e23)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * next_hop,unsigned iface,void ** state,`[`gnrc_ipv6_nib_ft_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t)` * fte)`            | Iterates over all forwarding table entries in the NIB.
`public void `[`gnrc_ipv6_nib_ft_print`](#group__net__gnrc__ipv6__nib__ft_1gacd9098b4d88c6ee642569999d1311d6f)`(const `[`gnrc_ipv6_nib_ft_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t)` * fte)`            | Prints a forwarding table entry.
`struct `[`gnrc_ipv6_nib_ft_t`](#structgnrc__ipv6__nib__ft__t) | Forwarding table entry view on NIB.

## Members

#### `public int `[`gnrc_ipv6_nib_ft_get`](#group__net__gnrc__ipv6__nib__ft_1ga3b9800709368fc251a63efae1cb9b076)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_ipv6_nib_ft_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t)` * fte)` 

Gets the best matching forwarding table entry to a destination.

`(dst != NULL) && (fte != NULL)`

#### Parameters
* `dst` The destination. 

* `pkt` Packet that is supposed to go to that destination (is handed over to a reactive routing protocol if one exists on the interface found and no route is found) 

* `fte` The resulting forwarding table entry.

#### Returns
0, on success. 

#### Returns
-ENETUNREACH, if no route was found.

#### `public int `[`gnrc_ipv6_nib_ft_add`](#group__net__gnrc__ipv6__nib__ft_1gaae03867939ba18c864ef69eec6c7b8fc)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,unsigned dst_len,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * next_hop,unsigned iface,uint32_t lifetime)` 

Adds a new route to the forwarding table.

If `dst` is the default route, the route will be configured to be the default route.

#### Parameters
* `dst` The destination to the route. May be NULL or `::` for default route. 

* `dst_len` The prefix length of `dst` in bits. May be 0 for default route. 

* `next_hop` The next hop to `dst/`dst_len`.` May be NULL, if `dst/`dst_len` is` no the default route. 

* `iface` The interface to `next_hop`. May not be 0. 

* `lifetime` Lifetime of the route in seconds. 0 for infinite lifetime.

#### Returns
0, on success. 

#### Returns
-EINVAL, if a parameter was of invalid value. 

#### Returns
-ENOMEM, if there was no space left in forwarding table.

#### `public void `[`gnrc_ipv6_nib_ft_del`](#group__net__gnrc__ipv6__nib__ft_1ga7ddd871c07ca363ee2115afd57bafd8a)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,unsigned dst_len)` 

Deletes a route from forwarding table.

If `dst` is the default route, the function assures, that the current primary default route is removed first.

#### Parameters
* `dst` The destination of the route. May be NULL or `::` for default route. 

* `dst_len` The prefix length of `dst` in bits. May be 0 for default route.

#### `public bool `[`gnrc_ipv6_nib_ft_iter`](#group__net__gnrc__ipv6__nib__ft_1gad7fc425a4def5d8d7bb40cd410060e23)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * next_hop,unsigned iface,void ** state,`[`gnrc_ipv6_nib_ft_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t)` * fte)` 

Iterates over all forwarding table entries in the NIB.

`(state != NULL) && (fte != NULL)`

#### Parameters
* `next_hop` Restrict iteration to entries to this next hop. NULL for any next hop. Can be used to build a source routing tree. 

* `iface` Restrict iteration to entries on this interface. 0 for any interface. 

* `state` Iteration state of the forwarding table. Must point to a NULL pointer to start iteration. 

* `fte` The next forwarding table entry.

The iteration over all forwarding table entries in the NIB includes all entries added via `[gnrc_ipv6_nib_ft_add()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__ft_1gaae03867939ba18c864ef69eec6c7b8fc)` and entries that are currently in the Destination Cache, in the Prefix List, and in the Default Router List.

Usage example:

```cpp
#include "net/gnrc/ipv6/nib/ft.h"

int main(void) {
    void *state = NULL;
    gnrc_ipv6_nib_ft_t fte;

    puts("My neighbors:");
    while (gnrc_ipv6_nib_ft_iter(NULL, 0, &state, &fte)) {
        gnrc_ipv6_nib_ft_print(&fte);
    }
    return 0;
}
```

The list may change during iteration.

#### Returns
true, if iteration can be continued. 

#### Returns
false, if `fte` is the last neighbor cache entry in the NIB.

#### `public void `[`gnrc_ipv6_nib_ft_print`](#group__net__gnrc__ipv6__nib__ft_1gacd9098b4d88c6ee642569999d1311d6f)`(const `[`gnrc_ipv6_nib_ft_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t)` * fte)` 

Prints a forwarding table entry.

`fce != NULL`

#### Parameters
* `fte` A forwarding table entry.

# struct `gnrc_ipv6_nib_ft_t` 

Forwarding table entry view on NIB.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`dst`](#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85) | destination or prefix
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`next_hop`](#structgnrc__ipv6__nib__ft__t_1a1936cc28066bdd4f0d04723b7f4af487) | next hop to [gnrc_ipv6_nib_ft_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85)
`public uint8_t `[`dst_len`](#structgnrc__ipv6__nib__ft__t_1a9ee444504dd9620996be92c0d1f96502) | prefix-length in bits of [gnrc_ipv6_nib_ft_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85)
`public uint8_t `[`primary`](#structgnrc__ipv6__nib__ft__t_1ae36fe74a87e9826ae06290f499d5203a) | != 0 if [gnrc_ipv6_nib_ft_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85) is preferred default route
`public uint16_t `[`iface`](#structgnrc__ipv6__nib__ft__t_1ad6f52df45cf925971cc226f3c155dbed) | interface to [gnrc_ipv6_nib_ft_t::next_hop](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a1936cc28066bdd4f0d04723b7f4af487)

## Members

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`dst`](#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85) 

destination or prefix

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`next_hop`](#structgnrc__ipv6__nib__ft__t_1a1936cc28066bdd4f0d04723b7f4af487) 

next hop to [gnrc_ipv6_nib_ft_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85)

#### `public uint8_t `[`dst_len`](#structgnrc__ipv6__nib__ft__t_1a9ee444504dd9620996be92c0d1f96502) 

prefix-length in bits of [gnrc_ipv6_nib_ft_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85)

#### `public uint8_t `[`primary`](#structgnrc__ipv6__nib__ft__t_1ae36fe74a87e9826ae06290f499d5203a) 

!= 0 if [gnrc_ipv6_nib_ft_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a7016d3193645f38863a2855e0eb79a85) is preferred default route

#### `public uint16_t `[`iface`](#structgnrc__ipv6__nib__ft__t_1ad6f52df45cf925971cc226f3c155dbed) 

interface to [gnrc_ipv6_nib_ft_t::next_hop](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_ft.md#structgnrc__ipv6__nib__ft__t_1a1936cc28066bdd4f0d04723b7f4af487)

