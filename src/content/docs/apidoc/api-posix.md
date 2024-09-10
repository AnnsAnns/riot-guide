---
title: api-posix.md
description: api-posix.md
---
# group `posix` 

POSIX header files.

**See also**: [The Open Group Specifications Issue 7 ](http://pubs.opengroup.org/onlinepubs/9699919799/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`iovec`](#structiovec) | Structure for scatter/gather I/O.

# struct `iovec` 

Structure for scatter/gather I/O.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void * `[`iov_base`](#structiovec_1a07aeddeccf80f14520fdd7ef0759442b) | Pointer to data.
`public size_t `[`iov_len`](#structiovec_1a17b5ac2078fd1adfabb262a95808a07d) | Length of data.

## Members

#### `public void * `[`iov_base`](#structiovec_1a07aeddeccf80f14520fdd7ef0759442b) 

Pointer to data.

#### `public size_t `[`iov_len`](#structiovec_1a17b5ac2078fd1adfabb262a95808a07d) 

Length of data.

