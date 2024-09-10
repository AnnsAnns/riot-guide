---
title: api-sys_bloom.md
description: api-sys_bloom.md
---
# group `sys_bloom` 

Bloom filter library.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`bloom_init`](#group__sys__bloom_1gaa240402a4f0f8b18821d49d6b23b9b0e)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom,size_t size,uint8_t * bitfield,`[`hashfp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bloom_1ga6fd04f9ed5d13ee5de395073bcab0fec)` * hashes,int hashes_numof)`            | Initialize a Bloom Filter.
`public void `[`bloom_del`](#group__sys__bloom_1gab23483bd4edf858615ffb42d1994d493)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom)`            | Delete a Bloom filter.
`public void `[`bloom_add`](#group__sys__bloom_1gad1287feebd8f35ab4aabf7a458ac4a2f)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom,const uint8_t * buf,size_t len)`            | Add a string to a Bloom filter.
`public bool `[`bloom_check`](#group__sys__bloom_1gaccab5d24940adcc3fe16c6c5c8b8c313)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom,const uint8_t * buf,size_t len)`            | Determine if a string is in the Bloom filter.
`struct `[`bloom_t`](#structbloom__t) | [bloom_t](#structbloom__t) bloom filter object

## Members

#### `public void `[`bloom_init`](#group__sys__bloom_1gaa240402a4f0f8b18821d49d6b23b9b0e)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom,size_t size,uint8_t * bitfield,`[`hashfp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bloom_1ga6fd04f9ed5d13ee5de395073bcab0fec)` * hashes,int hashes_numof)` 

Initialize a Bloom Filter.

For best results, make 'size' a power of 2.

#### Parameters
* `bloom` [bloom_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t) to initialize 

* `size` size of the bloom filter in bits 

* `bitfield` underlying bitfield of the bloom filter 

* `hashes` array of hashes 

* `hashes_numof` number of elements in hashes

`bitfield` MUST be large enough to hold `size` bits.

#### `public void `[`bloom_del`](#group__sys__bloom_1gab23483bd4edf858615ffb42d1994d493)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom)` 

Delete a Bloom filter.

#### Parameters
* `bloom` The condemned 

#### Returns
nothing

#### `public void `[`bloom_add`](#group__sys__bloom_1gad1287feebd8f35ab4aabf7a458ac4a2f)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom,const uint8_t * buf,size_t len)` 

Add a string to a Bloom filter.

CAVEAT Once a string has been added to the filter, it cannot be "removed"!

#### Parameters
* `bloom` Bloom filter 

* `buf` string to add 

* `len` the length of the string `buf`

#### Returns
nothing

#### `public bool `[`bloom_check`](#group__sys__bloom_1gaccab5d24940adcc3fe16c6c5c8b8c313)`(`[`bloom_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bloom.md#structbloom__t)` * bloom,const uint8_t * buf,size_t len)` 

Determine if a string is in the Bloom filter.

The string 's' is hashed once for each of the 'k' hash functions, as though we were planning to add it to the filter. Instead of adding it however, we examine the bit that we *would* have set, and consider its value.

If the bit is 1 (set), the string we are hashing may be in the filter, since it would have set this bit when it was originally hashed. However, it may also be that another string just happened to produce a hash value that would also set this bit. That would be a false positive. This is why we have k > 1, so we can minimize the likelihood of false positives occurring.

If every bit corresponding to every one of the k hashes of our query string is set, we can say with some probability of being correct that the string we are holding is indeed "in" the filter. However, we can never be sure.

If, however, as we hash our string and peek at the resulting bit in the filter, we find the bit is 0 (not set)... well now, that's different. In this case, we can say with absolute certainty that the string we are holding is *not* in the filter, because if it were, this bit would have to be set.

In this way, the Bloom filter can answer NO with absolute surety, but can only speak a qualified YES.

#### Parameters
* `bloom` Bloom filter 

* `buf` string to check 

* `len` the length of the string `buf`

#### Returns
false if string does not exist in the filter 

#### Returns
true if string is may be in the filter

# struct `bloom_t` 

[bloom_t](#structbloom__t) bloom filter object

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`m`](#structbloom__t_1a3ef454189e9e7331c1fe20410ec33c88) | number of bits in the bloom array
`public size_t `[`k`](#structbloom__t_1a4f8279e9b0b0debece0eb161121f80bf) | number of hash functions
`public uint8_t * `[`a`](#structbloom__t_1ac0d227b941c1b8eb51c5c0875cd5ef2c) | the bloom array
`public `[`hashfp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bloom_1ga6fd04f9ed5d13ee5de395073bcab0fec)` * `[`hash`](#structbloom__t_1a7dfb2f27ec77b59302d0ce9138294eea) | the hash functions

## Members

#### `public size_t `[`m`](#structbloom__t_1a3ef454189e9e7331c1fe20410ec33c88) 

number of bits in the bloom array

#### `public size_t `[`k`](#structbloom__t_1a4f8279e9b0b0debece0eb161121f80bf) 

number of hash functions

#### `public uint8_t * `[`a`](#structbloom__t_1ac0d227b941c1b8eb51c5c0875cd5ef2c) 

the bloom array

#### `public `[`hashfp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bloom_1ga6fd04f9ed5d13ee5de395073bcab0fec)` * `[`hash`](#structbloom__t_1a7dfb2f27ec77b59302d0ce9138294eea) 

the hash functions

