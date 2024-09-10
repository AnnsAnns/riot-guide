---
title: api-net_gnrc_ipv6_nib_abr.md
description: api-net_gnrc_ipv6_nib_abr.md
---
# group `net_gnrc_ipv6_nib_abr` 

Authoritative border router list component of neighbor information base.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_ipv6_nib_abr_add`](#group__net__gnrc__ipv6__nib__abr_1ga35f77964ab15ed7d75543715352b58e2)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Adds the address of an authoritative border router to the NIB.
`public void `[`gnrc_ipv6_nib_abr_del`](#group__net__gnrc__ipv6__nib__abr_1ga77369951b9c86e5a0266b1b704fedc63)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Removes an authoritative border router from the NIB.
`public bool `[`gnrc_ipv6_nib_abr_iter`](#group__net__gnrc__ipv6__nib__abr_1ga0b49851612b30ba164243c728b6727a1)`(void ** state,`[`gnrc_ipv6_nib_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_abr.md#structgnrc__ipv6__nib__abr__t)` * abr)`            | Iterates over all authoritative border router in the NIB.
`public inline static uint32_t `[`gnrc_ipv6_nib_abr_valid_offset`](#group__net__gnrc__ipv6__nib__abr_1ga5f746ae8df7a526011720170bb24591f)`(const `[`gnrc_ipv6_nib_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_abr.md#structgnrc__ipv6__nib__abr__t)` * abr)`            | Provides the time in minutes for which the authoritative border router entry is valid.
`public void `[`gnrc_ipv6_nib_abr_print`](#group__net__gnrc__ipv6__nib__abr_1ga8b5b7c0e167dbf837528e8fa57989442)`(`[`gnrc_ipv6_nib_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_abr.md#structgnrc__ipv6__nib__abr__t)` * abr)`            | Prints an authoritative border router list entry.
`struct `[`gnrc_ipv6_nib_abr_t`](#structgnrc__ipv6__nib__abr__t) | Authoritative border router list entry view on NIB.

## Members

#### `public int `[`gnrc_ipv6_nib_abr_add`](#group__net__gnrc__ipv6__nib__abr_1ga35f77964ab15ed7d75543715352b58e2)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Adds the address of an authoritative border router to the NIB.

#### Parameters
* `addr` The address of an authoritative border router.

#### Returns
0 on success. 

#### Returns
-ENOMEM, if no space is left in the neighbor cache. 

#### Returns
-ENOTSUP, if [CONFIG_GNRC_IPV6_NIB_6LBR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__conf_1gaa7ea6a8b5bb9929f06c3c22fd75e17cd) or [CONFIG_GNRC_IPV6_NIB_MULTIHOP_P6C](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__conf_1ga20c6222c3515e3c8e9026b0b1c41a617) is not defined

#### `public void `[`gnrc_ipv6_nib_abr_del`](#group__net__gnrc__ipv6__nib__abr_1ga77369951b9c86e5a0266b1b704fedc63)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Removes an authoritative border router from the NIB.

#### Parameters
* `addr` The address of an authoritative border router.

#### `public bool `[`gnrc_ipv6_nib_abr_iter`](#group__net__gnrc__ipv6__nib__abr_1ga0b49851612b30ba164243c728b6727a1)`(void ** state,`[`gnrc_ipv6_nib_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_abr.md#structgnrc__ipv6__nib__abr__t)` * abr)` 

Iterates over all authoritative border router in the NIB.

`(state != NULL) && (abr != NULL)`

#### Parameters
* `state` Iteration state of the authoritative border router list. Must point to NULL pointer to start iteration 

* `abr` The next authoritative border router list entry.

Usage example:

```cpp
#include "net/gnrc/ipv6/nib/abr.h"

int main(void) {
    void *state = NULL;
    gnrc_ipv6_nib_abr_t abr;

    puts("My border routers:");
    while (gnrc_ipv6_nib_abr_iter(&state, &abr)) {
        gnrc_ipv6_nib_abr_print(&abr);
    }
    return 0;
}
```

The list may change during iteration.

#### Returns
true, if iteration can be continued. 

#### Returns
false, if `abr` is the last authoritative border router entry in the NIB.

#### `public inline static uint32_t `[`gnrc_ipv6_nib_abr_valid_offset`](#group__net__gnrc__ipv6__nib__abr_1ga5f746ae8df7a526011720170bb24591f)`(const `[`gnrc_ipv6_nib_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_abr.md#structgnrc__ipv6__nib__abr__t)` * abr)` 

Provides the time in minutes for which the authoritative border router entry is valid.

#### Parameters
* `abr` An authoritative border router entry.

#### Returns
The time in minutes for which the authoritative border router entry is valid.

#### `public void `[`gnrc_ipv6_nib_abr_print`](#group__net__gnrc__ipv6__nib__abr_1ga8b5b7c0e167dbf837528e8fa57989442)`(`[`gnrc_ipv6_nib_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_abr.md#structgnrc__ipv6__nib__abr__t)` * abr)` 

Prints an authoritative border router list entry.

`abr != NULL`

#### Parameters
* `abr` An authoritative border router list entry

# struct `gnrc_ipv6_nib_abr_t` 

Authoritative border router list entry view on NIB.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`addr`](#structgnrc__ipv6__nib__abr__t_1aefaf4ecfe824d14b27e6076bdefc1f6c) | The address of the border router.
`public uint32_t `[`version`](#structgnrc__ipv6__nib__abr__t_1a943c53e1b23657799f6a8f99aacb891c) | last received version
`public uint32_t `[`valid_until_ms`](#structgnrc__ipv6__nib__abr__t_1a4a940e5ac8f8b654577856af35c20862) | timestamp (in ms) until which the information is valid (needs resolution in minutes an 16 bits of them)

## Members

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`addr`](#structgnrc__ipv6__nib__abr__t_1aefaf4ecfe824d14b27e6076bdefc1f6c) 

The address of the border router.

#### `public uint32_t `[`version`](#structgnrc__ipv6__nib__abr__t_1a943c53e1b23657799f6a8f99aacb891c) 

last received version

#### `public uint32_t `[`valid_until_ms`](#structgnrc__ipv6__nib__abr__t_1a4a940e5ac8f8b654577856af35c20862) 

timestamp (in ms) until which the information is valid (needs resolution in minutes an 16 bits of them)

