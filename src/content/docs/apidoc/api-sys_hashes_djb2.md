---
title: api-sys_hashes_djb2.md
description: api-sys_hashes_djb2.md
---
# group `sys_hashes_djb2` 

djb2 hash algorithm.

HISTORY This algorithm (k=33) was first reported by Dan Bernstein many years ago in comp.lang.c. Another version of this algorithm (now favored by bernstein) uses XOR:  hash(i) = hash(i - 1) * 33 ^ str[i];
 The magic of number 33 (why it works better than many other constants, prime or not) has never been adequately explained.

#### Parameters
* `buf` input buffer to hash 

* `len` length of buffer 

#### Returns
32 bit sized hash

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

