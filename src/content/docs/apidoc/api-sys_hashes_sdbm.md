---
title: api-sys_hashes_sdbm.md
description: api-sys_hashes_sdbm.md
---
# group `sys_hashes_sdbm` 

sdbm hash algorithm.

HISTORY This algorithm was created for sdbm (a public-domain reimplementation of ndbm) database library. It was found to do well in scrambling bits, causing better distribution of the keys and fewer splits. it also happens to be a good general hashing function with good distribution.

The actual function is  hash(i) = hash(i - 1) * 65599 + str[i];
 What is included below is the faster version used in gawk. [there is even a faster, duff-device version] the magic constant 65599 was picked out of thin air while experimenting with different constants, and turns out to be a prime. this is one of the algorithms used in berkeley db (see sleepycat) and elsewhere.

#### Parameters
* `buf` input buffer to hash 

* `len` length of buffer 

#### Returns
32 bit sized hash

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

