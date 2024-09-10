---
title: api-net_gnrc_ipv6_nib_pl.md
description: api-net_gnrc_ipv6_nib_pl.md
---
# group `net_gnrc_ipv6_nib_pl` 

Prefix list component of neighbor information base.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_ipv6_nib_pl_set`](#group__net__gnrc__ipv6__nib__pl_1gaaed0471c0cac7fdc5a569083cbea56a4)`(unsigned iface,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * pfx,unsigned pfx_len,uint32_t valid_ltime,uint32_t pref_ltime)`            | Adds (or updates) prefix to NIB.
`public void `[`gnrc_ipv6_nib_pl_del`](#group__net__gnrc__ipv6__nib__pl_1gacf3dee7e60e4c3fbee4db5a8221776a7)`(unsigned iface,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * pfx,unsigned pfx_len)`            | Deletes prefix from NIB.
`public bool `[`gnrc_ipv6_nib_pl_iter`](#group__net__gnrc__ipv6__nib__pl_1ga4c8ddbf9bdd14adce13ec28f28e779a2)`(unsigned iface,void ** state,`[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)`            | Iterates over all prefix list entries in the NIB.
`public inline static uint32_t `[`gnrc_ipv6_nib_pl_valid_offset`](#group__net__gnrc__ipv6__nib__pl_1ga1f739eaf8e9d43dff8f161debc9d741e)`(const `[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)`            | Provides the time in milliseconds for which the prefix list entry is valid.
`public inline static uint32_t `[`gnrc_ipv6_nib_pl_pref_offset`](#group__net__gnrc__ipv6__nib__pl_1gaae3d066eff179f2e0fcee4d4bf8fbb92)`(const `[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)`            | Provides the time in milliseconds for which the prefix list entry is preferred.
`public void `[`gnrc_ipv6_nib_pl_print`](#group__net__gnrc__ipv6__nib__pl_1ga542070c888db0296ad84cf8cface03e1)`(`[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)`            | Prints a prefix list entry.
`struct `[`gnrc_ipv6_nib_pl_t`](#structgnrc__ipv6__nib__pl__t) | Prefix list entry view on NIB.

## Members

#### `public int `[`gnrc_ipv6_nib_pl_set`](#group__net__gnrc__ipv6__nib__pl_1gaaed0471c0cac7fdc5a569083cbea56a4)`(unsigned iface,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * pfx,unsigned pfx_len,uint32_t valid_ltime,uint32_t pref_ltime)` 

Adds (or updates) prefix to NIB.

`(pfx != NULL)`

#### Parameters
* `iface` Interface `pfx` is valid on. 

* `pfx` The prefix. May not be a link-local prefix or a multicast address and its first `pfx_len` bits may not be 0. Must not be `NULL`. 

* `pfx_len` Length of `pfx` in bits. Condition `pfx_len` > 0 must hold. 

* `valid_ltime` Lifetime (in ms) until prefix expires from now. UINT32_MAX for infinite lifetime. Addresses with expired prefixes are removed from `iface`. 

* `pref_ltime` Lifetime (in ms) until prefix deprecates from now. UINT32_MAX for infinite lifetime. Addresses with deprecated prefixes should not be used for new communication. Only applications with difficulty changing to another address without service disruption should use deprecated addresses. May not be greater then `valid_ltime`.

#### Returns
0, on success. 

#### Returns
-EINVAL, if `pfx` was fe80::` or multicast, `pfx_len` was == 0, the first `pfx_len` bits of @ pfx were 0, or if pref_ltime > valid_ltime. 

#### Returns
-ENOMEM, if no space was left in the prefix list.

#### `public void `[`gnrc_ipv6_nib_pl_del`](#group__net__gnrc__ipv6__nib__pl_1gacf3dee7e60e4c3fbee4db5a8221776a7)`(unsigned iface,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * pfx,unsigned pfx_len)` 

Deletes prefix from NIB.

`pfx != NULL`

#### Parameters
* `iface` The interface `pfx` is expected to be on (0 for any). 

* `pfx` The prefix to be removed. 

* `pfx_len` Length of `pfx` in bits.

#### `public bool `[`gnrc_ipv6_nib_pl_iter`](#group__net__gnrc__ipv6__nib__pl_1ga4c8ddbf9bdd14adce13ec28f28e779a2)`(unsigned iface,void ** state,`[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)` 

Iterates over all prefix list entries in the NIB.

`(state != NULL) && (ple != NULL)`

#### Parameters
* `iface` Restrict iteration to entries on this interface. 0 for any interface. 

* `state` Iteration state of the prefix list. Must point to NULL pointer to start iteration 

* `ple` The next prefix list entry.

Usage example:

```cpp
#include "net/gnrc/ipv6/nib/pl.h"

int main(void) {
    void *state = NULL;
    gnrc_ipv6_nib_pl_t ple;

    puts("My prefixes:");
    while (gnrc_ipv6_nib_pl_iter(0, &state, &ple)) {
        gnrc_ipv6_nib_pl_print(&ple);
    }
    return 0;
}
```

The list may change during iteration.

#### Returns
true, if iteration can be continued. 

#### Returns
false, if `ple` is the last prefix list ple in the NIB.

#### `public inline static uint32_t `[`gnrc_ipv6_nib_pl_valid_offset`](#group__net__gnrc__ipv6__nib__pl_1ga1f739eaf8e9d43dff8f161debc9d741e)`(const `[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)` 

Provides the time in milliseconds for which the prefix list entry is valid.

#### Parameters
* `ple` A prefix list entry.

#### Returns
The time in milliseconds for which the prefix list entry is valid. UINT32_MAX if it is valid forever.

#### `public inline static uint32_t `[`gnrc_ipv6_nib_pl_pref_offset`](#group__net__gnrc__ipv6__nib__pl_1gaae3d066eff179f2e0fcee4d4bf8fbb92)`(const `[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)` 

Provides the time in milliseconds for which the prefix list entry is preferred.

A prefix for which the preference expired is deprecated (see [RFC 4862](https://tools.ietf.org/html/rfc4862))

#### Parameters
* `ple` A prefix list entry.

#### Returns
The time in milliseconds for which the prefix list entry is preferred. UINT32_MAX if it is preferred forever.

#### `public void `[`gnrc_ipv6_nib_pl_print`](#group__net__gnrc__ipv6__nib__pl_1ga542070c888db0296ad84cf8cface03e1)`(`[`gnrc_ipv6_nib_pl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t)` * ple)` 

Prints a prefix list entry.

`ple != NULL`

#### Parameters
* `ple` A prefix list entry

# struct `gnrc_ipv6_nib_pl_t` 

Prefix list entry view on NIB.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`pfx`](#structgnrc__ipv6__nib__pl__t_1ad0dda45055e16525785490f37bab2701) | prefix
`public uint8_t `[`pfx_len`](#structgnrc__ipv6__nib__pl__t_1a30a52622a6f0779c470257dd1f496eb2) | length of [gnrc_ipv6_nib_pl_t::pfx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t_1ad0dda45055e16525785490f37bab2701) in bits
`public uint16_t `[`iface`](#structgnrc__ipv6__nib__pl__t_1a0ad43af33190e015d093f0353f5117d9) | interface [gnrc_ipv6_nib_pl_t::pfx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t_1ad0dda45055e16525785490f37bab2701) is assigned to
`public uint32_t `[`valid_until`](#structgnrc__ipv6__nib__pl__t_1a2be1e12fce59c30e6398a067da456bd4) | timestamp (in ms) until which the prefix is valid
`public uint32_t `[`pref_until`](#structgnrc__ipv6__nib__pl__t_1ae818bd7c09b5bb499fdc5e1eec181058) | timestamp (in ms) until which the prefix is preferred

## Members

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`pfx`](#structgnrc__ipv6__nib__pl__t_1ad0dda45055e16525785490f37bab2701) 

prefix

#### `public uint8_t `[`pfx_len`](#structgnrc__ipv6__nib__pl__t_1a30a52622a6f0779c470257dd1f496eb2) 

length of [gnrc_ipv6_nib_pl_t::pfx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t_1ad0dda45055e16525785490f37bab2701) in bits

#### `public uint16_t `[`iface`](#structgnrc__ipv6__nib__pl__t_1a0ad43af33190e015d093f0353f5117d9) 

interface [gnrc_ipv6_nib_pl_t::pfx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_pl.md#structgnrc__ipv6__nib__pl__t_1ad0dda45055e16525785490f37bab2701) is assigned to

#### `public uint32_t `[`valid_until`](#structgnrc__ipv6__nib__pl__t_1a2be1e12fce59c30e6398a067da456bd4) 

timestamp (in ms) until which the prefix is valid

#### `public uint32_t `[`pref_until`](#structgnrc__ipv6__nib__pl__t_1ae818bd7c09b5bb499fdc5e1eec181058) 

timestamp (in ms) until which the prefix is preferred

