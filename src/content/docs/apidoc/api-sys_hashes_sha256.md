---
title: api-sys_hashes_sha256.md
description: api-sys_hashes_sha256.md
---
# group `sys_hashes_sha256` 

Implementation of the SHA-256 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA256_DIGEST_LENGTH`](#group__sys__hashes__sha256_1gaa9cf0abf87b30c4c63e9c7e89c590579)            | Length of SHA256 digests in bytes.
`define `[`SHA256_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha256_1ga0fabc4ce6a997f9dd9eebaa9e839ba17)            | 512 Bit (64 Byte) internally used block size for sha256
`public void `[`sha256_init`](#group__sys__hashes__sha256_1gaa139dff5368e7abe4bd6ce8ec412a825)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx)`            | SHA-256 initialization.
`public inline static void `[`sha256_update`](#group__sys__hashes__sha256_1ga2d0ca6d5d14400a51700a52448baacb2)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public inline static void `[`sha256_final`](#group__sys__hashes__sha256_1ga68fa67df986540bc7da102fa03e2e591)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,void * digest)`            | SHA-256 finalization.
`public void `[`sha256`](#group__sys__hashes__sha256_1gad1360f15a220ecf3b6a2222a73875b3c)`(const void * data,size_t len,void * digest)`            | A wrapper function to simplify the generation of a hash, this is useful for generating sha256 for one buffer.
`public void `[`hmac_sha256_init`](#group__sys__hashes__sha256_1ga921d7dcce661d2f8bbd825a19a76e620)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * key,size_t key_length)`            | hmac_sha256_init HMAC SHA-256 calculation.
`public void `[`hmac_sha256_update`](#group__sys__hashes__sha256_1ga89999741ee7d8969192fcf724ef801d1)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * data,size_t len)`            | hmac_sha256_update Add data bytes for HMAC calculation
`public void `[`hmac_sha256_final`](#group__sys__hashes__sha256_1ga897c495b2203768ca17a7622086e16b8)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,void * digest)`            | hmac_sha256_final HMAC SHA-256 finalization.
`public void `[`hmac_sha256`](#group__sys__hashes__sha256_1ga153aefd72bd890488cfefe6eebd921a6)`(const void * key,size_t key_length,const void * data,size_t len,void * digest)`            | function to compute a hmac-sha256 from a given message
`public void * `[`sha256_chain`](#group__sys__hashes__sha256_1gad41fd191fb32dc29c424d936fe7056f4)`(const void * seed,size_t seed_length,size_t elements,void * tail_element)`            | function to produce a hash chain starting with a given seed element.
`public void * `[`sha256_chain_with_waypoints`](#group__sys__hashes__sha256_1ga471a1335ae7e1330dd8406941c4f9fe5)`(const void * seed,size_t seed_length,size_t elements,void * tail_element,`[`sha256_chain_idx_elm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structsha256__chain__idx__elm__t)` * waypoints,size_t * waypoints_length)`            | function to produce a hash chain starting with a given seed element.
`public int `[`sha256_chain_verify_element`](#group__sys__hashes__sha256_1ga143d03c3e77c852baf05f3db7cd5a7e4)`(void * element,size_t element_index,void * tail_element,size_t chain_length)`            | function to verify if a given chain element is part of the chain.
`struct `[`hmac_context_t`](#structhmac__context__t) | Context for HMAC operations based on sha256.
`struct `[`sha256_chain_idx_elm_t`](#structsha256__chain__idx__elm__t) | sha256-chain indexed element

## Members

#### `define `[`SHA256_DIGEST_LENGTH`](#group__sys__hashes__sha256_1gaa9cf0abf87b30c4c63e9c7e89c590579) 

Length of SHA256 digests in bytes.

#### `define `[`SHA256_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha256_1ga0fabc4ce6a997f9dd9eebaa9e839ba17) 

512 Bit (64 Byte) internally used block size for sha256

#### `public void `[`sha256_init`](#group__sys__hashes__sha256_1gaa139dff5368e7abe4bd6ce8ec412a825)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx)` 

SHA-256 initialization.

Begins a SHA-256 operation.

#### Parameters
* `ctx` sha256_context_t handle to init

#### `public inline static void `[`sha256_update`](#group__sys__hashes__sha256_1ga2d0ca6d5d14400a51700a52448baacb2)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` sha256_context_t handle to use 

* `data` Input data 

* `len` Length of `data`

#### `public inline static void `[`sha256_final`](#group__sys__hashes__sha256_1ga68fa67df986540bc7da102fa03e2e591)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,void * digest)` 

SHA-256 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` sha256_context_t handle to use 

* `digest` resulting digest, this is the hash of all the bytes

#### `public void `[`sha256`](#group__sys__hashes__sha256_1gad1360f15a220ecf3b6a2222a73875b3c)`(const void * data,size_t len,void * digest)` 

A wrapper function to simplify the generation of a hash, this is useful for generating sha256 for one buffer.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` Pointer to an array for the result, length must be SHA256_DIGEST_LENGTH

#### `public void `[`hmac_sha256_init`](#group__sys__hashes__sha256_1ga921d7dcce661d2f8bbd825a19a76e620)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * key,size_t key_length)` 

hmac_sha256_init HMAC SHA-256 calculation.

Initiate calculation of a HMAC 
#### Parameters
* `ctx` [hmac_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t) handle to use 

* `key` key used in the hmac-sha256 computation 

* `key_length` the size in bytes of the key

#### `public void `[`hmac_sha256_update`](#group__sys__hashes__sha256_1ga89999741ee7d8969192fcf724ef801d1)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * data,size_t len)` 

hmac_sha256_update Add data bytes for HMAC calculation

#### Parameters
* `ctx` [hmac_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t) handle to use 

* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer

#### `public void `[`hmac_sha256_final`](#group__sys__hashes__sha256_1ga897c495b2203768ca17a7622086e16b8)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,void * digest)` 

hmac_sha256_final HMAC SHA-256 finalization.

Finish HMAC calculation and export the value 
#### Parameters
* `ctx` [hmac_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t) handle to use 

* `digest` the computed hmac-sha256, length MUST be SHA256_DIGEST_LENGTH

#### `public void `[`hmac_sha256`](#group__sys__hashes__sha256_1ga153aefd72bd890488cfefe6eebd921a6)`(const void * key,size_t key_length,const void * data,size_t len,void * digest)` 

function to compute a hmac-sha256 from a given message

#### Parameters
* `key` key used in the hmac-sha256 computation 

* `key_length` the size in bytes of the key 

* `data` pointer to the buffer to generate the hmac-sha256 

* `len` the length of the message in bytes 

* `digest` the computed hmac-sha256, length MUST be SHA256_DIGEST_LENGTH

#### `public void * `[`sha256_chain`](#group__sys__hashes__sha256_1gad41fd191fb32dc29c424d936fe7056f4)`(const void * seed,size_t seed_length,size_t elements,void * tail_element)` 

function to produce a hash chain starting with a given seed element.

The chain is computed by taking the sha256 from the seed, hash the resulting sha256 and continuing taking sha256 from each result consecutively.

#### Parameters
* `seed` the seed of the sha256-chain, i.e. the first element 

* `seed_length` the size of seed in bytes 

* `elements` the number of chained elements, i.e. the index of the last element is (elements-1) 

* `tail_element` the final element of the sha256-chain

#### Returns
pointer to tail_element

#### `public void * `[`sha256_chain_with_waypoints`](#group__sys__hashes__sha256_1ga471a1335ae7e1330dd8406941c4f9fe5)`(const void * seed,size_t seed_length,size_t elements,void * tail_element,`[`sha256_chain_idx_elm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structsha256__chain__idx__elm__t)` * waypoints,size_t * waypoints_length)` 

function to produce a hash chain starting with a given seed element.

The chain is computed the same way as done with [sha256_chain()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gad41fd191fb32dc29c424d936fe7056f4). Additionally intermediate elements are saved while computing the chain. This slows down computation, but provides the caller with indexed "waypoint"-elements. They are supposed to shortcut computing verification elements, this comes in handy when using long chains, e.g. a chain with 232 elements.

#### Parameters
* `seed` the seed of the sha256-chain, i.e. the first element 

* `seed_length` the size of seed in bytes 

* `elements` the number of chained elements, i.e. the index of the last element is (elements-1) 

* `tail_element` the final element of the sha256-chain 

* `waypoints` intermediate elements are stored there. 

* `waypoints_length` the size of the waypoints array. If the given size is equal or greater elements, the complete chain will be stored. Otherwise every n-th element is stored where: n = floor(elements / waypoints_length); floor is implicitly used since we perform unsigned integer division. The last used waypoint index is stored in the variable after call. That is (elements - 1) if the complete chain is stored, and (*waypoints_length - 1) if we only store some waypoints.

#### Returns
pointer to tail_element

#### `public int `[`sha256_chain_verify_element`](#group__sys__hashes__sha256_1ga143d03c3e77c852baf05f3db7cd5a7e4)`(void * element,size_t element_index,void * tail_element,size_t chain_length)` 

function to verify if a given chain element is part of the chain.

#### Parameters
* `element` the chain element to be verified 

* `element_index` the position in the chain 

* `tail_element` the last element of the sha256-chain 

* `chain_length` the number of elements in the chain

#### Returns
0 if element is verified to be part of the chain at element_index 1 if the element cannot be verified as part of the chain

# struct `hmac_context_t` 

Context for HMAC operations based on sha256.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` `[`c_in`](#structhmac__context__t_1a92a4bb6671a6120111d64748bb901b7b) | Context for inner hash calculation.
`public `[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` `[`c_out`](#structhmac__context__t_1a9175afd23442dfb328d3456bcdb7ce28) | Context for outer hash calculation.

## Members

#### `public `[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` `[`c_in`](#structhmac__context__t_1a92a4bb6671a6120111d64748bb901b7b) 

Context for inner hash calculation.

#### `public `[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` `[`c_out`](#structhmac__context__t_1a9175afd23442dfb328d3456bcdb7ce28) 

Context for outer hash calculation.

# struct `sha256_chain_idx_elm_t` 

sha256-chain indexed element

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`index`](#structsha256__chain__idx__elm__t_1ac4aff641e45b5c20aa6aa10ea8200ff8) | the position of this element in its chain
`public unsigned char `[`element`](#structsha256__chain__idx__elm__t_1a6bd4a1106f5f5bfb21221f7bcdbba116) | the element

## Members

#### `public size_t `[`index`](#structsha256__chain__idx__elm__t_1ac4aff641e45b5c20aa6aa10ea8200ff8) 

the position of this element in its chain

#### `public unsigned char `[`element`](#structsha256__chain__idx__elm__t_1a6bd4a1106f5f5bfb21221f7bcdbba116) 

the element

