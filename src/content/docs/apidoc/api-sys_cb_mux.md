---
title: api-sys_cb_mux.md
description: api-sys_cb_mux.md
---
# group `sys_cb_mux` 

[cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) provides utilities for storing, retrieving, and managing callback information in a singly linked list.

If an API provides the ability to call multiple callbacks, [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) can simplify handling of an arbitrary number of callbacks by requiring memory for a [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) entry to be passed along with other arguments. The [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) entry is then attached to a list using cb_mux_add. The code implementing that API can manage the list using the various utility functions that [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) provides.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`cb_mux_add`](#group__sys__cb__mux_1ga0d3a24cb45ecbf5de52cae8e4a5ad931)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` ** head,`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * entry)`            | Add a new entry to the end of a [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) list.
`public void `[`cb_mux_del`](#group__sys__cb__mux_1ga3d8ad1060d960a76e954dc5d6d4abb13)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` ** head,`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * entry)`            | Remove a entry from a [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) list.
`public `[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * `[`cb_mux_find_cbid`](#group__sys__cb__mux_1ga576ca24d35f12dfe88dc0ba127167f95)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head,`[`cb_mux_cbid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga66c78b97fc29c9a63ecc0a4a4a1ced8e)` cbid_val)`            | Find an entry in the list by ID.
`public `[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * `[`cb_mux_find_low`](#group__sys__cb__mux_1ga6b3dbbfe39a3fd8a03cfeb23f2f38662)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head)`            | Find the entry with the lowest ID.
`public `[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * `[`cb_mux_find_high`](#group__sys__cb__mux_1ga674ae1d628459f28c3d50aeb6072d80d)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head)`            | Find the entry with the highest ID.
`public `[`cb_mux_cbid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga66c78b97fc29c9a63ecc0a4a4a1ced8e)` `[`cb_mux_find_free_id`](#group__sys__cb__mux_1gac7bee34b7f2af6d1a3aa6f9bee188e04)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head)`            | Find the lowest unused ID.
`public void `[`cb_mux_iter`](#group__sys__cb__mux_1gaee7e83ee2fa30f602d3ca8ce6f9b98ac)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head,`[`cb_mux_iter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1gafdee9378047a09828e96a202d72b3cc8)` func,void * arg)`            | Run a function on every item in the [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) list.
`struct `[`cb_mux`](#structcb__mux) | [cb_mux](#structcb__mux) list entry structure

## Members

#### `public void `[`cb_mux_add`](#group__sys__cb__mux_1ga0d3a24cb45ecbf5de52cae8e4a5ad931)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` ** head,`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * entry)` 

Add a new entry to the end of a [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) list.

#### Parameters
* `head` double pointer to first list entry 

* `entry` entry to add

#### `public void `[`cb_mux_del`](#group__sys__cb__mux_1ga3d8ad1060d960a76e954dc5d6d4abb13)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` ** head,`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * entry)` 

Remove a entry from a [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) list.

#### Parameters
* `head` double pointer to first list entry 

* `entry` entry to remove

#### `public `[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * `[`cb_mux_find_cbid`](#group__sys__cb__mux_1ga576ca24d35f12dfe88dc0ba127167f95)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head,`[`cb_mux_cbid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga66c78b97fc29c9a63ecc0a4a4a1ced8e)` cbid_val)` 

Find an entry in the list by ID.

#### Parameters
* `head` pointer to first list entry 

* `cbid_val` ID to find

#### Returns
pointer to the list entry

#### `public `[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * `[`cb_mux_find_low`](#group__sys__cb__mux_1ga6b3dbbfe39a3fd8a03cfeb23f2f38662)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head)` 

Find the entry with the lowest ID.

If there are multiple hits, this returns the oldest.

#### Parameters
* `head` pointer to first list entry

#### Returns
pointer to the list entry

#### `public `[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * `[`cb_mux_find_high`](#group__sys__cb__mux_1ga674ae1d628459f28c3d50aeb6072d80d)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head)` 

Find the entry with the highest ID.

If there are multiple hits, this returns the oldest.

#### Parameters
* `head` pointer to first list entry

#### Returns
pointer to the list entry

#### `public `[`cb_mux_cbid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga66c78b97fc29c9a63ecc0a4a4a1ced8e)` `[`cb_mux_find_free_id`](#group__sys__cb__mux_1gac7bee34b7f2af6d1a3aa6f9bee188e04)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head)` 

Find the lowest unused ID.

Returns highest possible ID on failure

#### Parameters
* `head` pointer to first list entry

#### Returns
lowest unused ID

#### `public void `[`cb_mux_iter`](#group__sys__cb__mux_1gaee7e83ee2fa30f602d3ca8ce6f9b98ac)`(`[`cb_mux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga294c36c16dfd543db14e1d065dd23c58)` * head,`[`cb_mux_iter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1gafdee9378047a09828e96a202d72b3cc8)` func,void * arg)` 

Run a function on every item in the [cb_mux](./doc/starlight-docs/src/content/docs/apidoc/api-sys_cb_mux.md#structcb__mux) list.

#### Parameters
* `head` pointer to first list entry 

* `func` function to run on each entry 

* `arg` argument for the function

# struct `cb_mux` 

[cb_mux](#structcb__mux) list entry structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`cb_mux`](#structcb__mux)` * `[`next`](#structcb__mux_1a59ca6c7b5f228a2f486bba02ccb83cc2) | next entry in the [cb_mux](#structcb__mux) list
`public `[`cb_mux_cbid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga66c78b97fc29c9a63ecc0a4a4a1ced8e)` `[`cbid`](#structcb__mux_1a64dc075591fcd1098167ab3200882c56) | identifier for this callback
`public void * `[`info`](#structcb__mux_1ab6019768fe9a7d32049f29427272f2fe) | optional extra information
`public `[`cb_mux_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga56e282aa968b48434574144048aeef99)` `[`cb`](#structcb__mux_1a8658f0b38712b7012ccd7cd4d0769705) | callback function
`public void * `[`arg`](#structcb__mux_1a9a44be0d65f462de4ae7b48910969761) | argument for callback function

## Members

#### `public struct `[`cb_mux`](#structcb__mux)` * `[`next`](#structcb__mux_1a59ca6c7b5f228a2f486bba02ccb83cc2) 

next entry in the [cb_mux](#structcb__mux) list

#### `public `[`cb_mux_cbid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga66c78b97fc29c9a63ecc0a4a4a1ced8e)` `[`cbid`](#structcb__mux_1a64dc075591fcd1098167ab3200882c56) 

identifier for this callback

#### `public void * `[`info`](#structcb__mux_1ab6019768fe9a7d32049f29427272f2fe) 

optional extra information

#### `public `[`cb_mux_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__cb__mux_1ga56e282aa968b48434574144048aeef99)` `[`cb`](#structcb__mux_1a8658f0b38712b7012ccd7cd4d0769705) 

callback function

#### `public void * `[`arg`](#structcb__mux_1a9a44be0d65f462de4ae7b48910969761) 

argument for callback function

