---
title: api-sys_hashes_kr.md
description: api-sys_hashes_kr.md
---
# group `sys_hashes_kr` 

Kernighan and Ritchie hash algorithm.

HISTORY This hash function appeared in K&R (1st ed) but at least the reader was warned:  "This is not the best possible algorithm, but it has the merit
 of extreme simplicity."
 This is an understatement. It is a terrible hashing algorithm, and it could have been much better without sacrificing its "extreme simplicity." [see the second edition!]

Many C programmers use this function without actually testing it, or checking something like Knuth's Sorting and Searching, so it stuck. It is now found mixed with otherwise respectable code, eg. cnews. sigh. [see also: tpop]

#### Parameters
* `buf` input buffer to hash 

* `len` length of buffer 

#### Returns
32 bit sized hash

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

