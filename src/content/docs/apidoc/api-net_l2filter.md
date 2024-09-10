---
title: api-net_l2filter.md
description: api-net_l2filter.md
---
# group `net_l2filter` 

Module for filtering (black- or white-listing) link layer addresses.

**This feature is experimental!**

This module is used as a base for filtering link layer addresses. It allows to be (globally) configured in either blacklist or in whitelist mode. This configuration is done via RIOTs module system, for whitelist mode simply include the module `L2FILTER_WHITELIST`, for blacklist mode include `L2FILTER_BLACKLIST`.

The actual memory for the filter lists should be allocated for every network device. This is done centrally in netdev_t type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`l2filter_add`](#group__net__l2filter_1gac23f97403cc70e4e4358a32828c8022a)`(`[`l2filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)` * list,const void * addr,size_t addr_len)`            | Add an entry to a devices filter list.
`public int `[`l2filter_rm`](#group__net__l2filter_1ga1eba46eaec978264f2cb06c36ffef396)`(`[`l2filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)` * list,const void * addr,size_t addr_len)`            | Remove an entry from the given filter list.
`public bool `[`l2filter_pass`](#group__net__l2filter_1ga7a9c8124d8877b189f9b524e5ffc82da)`(const `[`l2filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)` * list,const void * addr,size_t addr_len)`            | Check if the given address passes the set filters.
`struct `[`l2filter_t`](#structl2filter__t) | Filter list entries.

## Members

#### `public int `[`l2filter_add`](#group__net__l2filter_1gac23f97403cc70e4e4358a32828c8022a)`(`[`l2filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)` * list,const void * addr,size_t addr_len)` 

Add an entry to a devices filter list.

#### Parameters
* `list` pointer to the filter list 

* `addr` address to be added to list 

* `addr_len` size of `addr` [in byte]

`list` != NULL 

`addr` != NULL 

`addr_maxlen` <= [CONFIG_L2FILTER_ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2filter__conf_1ga8483bc947054e805640f9e8070282999)

#### Returns
0 on success 

#### Returns
-ENOMEM if no empty slot left in list

#### `public int `[`l2filter_rm`](#group__net__l2filter_1ga1eba46eaec978264f2cb06c36ffef396)`(`[`l2filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)` * list,const void * addr,size_t addr_len)` 

Remove an entry from the given filter list.

#### Parameters
* `list` pointer to the filter list 

* `addr` address to remove from the list 

* `addr_len` length of `addr` [in byte]

`list` != NULL 

`addr` != NULL 

`addr_maxlen` <= [CONFIG_L2FILTER_ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2filter__conf_1ga8483bc947054e805640f9e8070282999)

#### Returns
0 on success 

#### Returns
-ENOENT if `addr` was not found in `list`

#### `public bool `[`l2filter_pass`](#group__net__l2filter_1ga7a9c8124d8877b189f9b524e5ffc82da)`(const `[`l2filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)` * list,const void * addr,size_t addr_len)` 

Check if the given address passes the set filters.

Independent if the l2filter module is used in blacklist or in whitelist mode, this function returns whether the given address passes the filter. In whitelist mode, this means that the given address has to be in the list, in blacklist mode this means that the given address is not in the list.

#### Parameters
* `list` list with black-/whitelisted addresses 

* `addr` address to check against the entries in `list`

* `addr_len` length of `addr` [in byte]

`list` != NULL 

`addr` != NULL 

`addr_maxlen` <= [CONFIG_L2FILTER_ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2filter__conf_1ga8483bc947054e805640f9e8070282999)

#### Returns
in whitelist mode: true if `addr` is in `list`

#### Returns
in whitelist mode: false if `addr` is not in `list`

#### Returns
in blacklist mode: true if `addr` is not in `list`

#### Returns
in blacklist mode: false if `addr` is in `list`

# struct `l2filter_t` 

Filter list entries.

The filter list supports address entries with differing length. This is useful e.g. for IEEE802.15.4, where the list can store short and long addresses at the same time.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`addr`](#structl2filter__t_1ad946e210bd5ff65d05a78f1fa7ab89ee) | link layer address
`public size_t `[`addr_len`](#structl2filter__t_1a80b87370cc409732f6c683272d8364ef) | address length in byte

## Members

#### `public uint8_t `[`addr`](#structl2filter__t_1ad946e210bd5ff65d05a78f1fa7ab89ee) 

link layer address

#### `public size_t `[`addr_len`](#structl2filter__t_1a80b87370cc409732f6c683272d8364ef) 

address length in byte

