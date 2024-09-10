---
title: api-sys_iolist.md
description: api-sys_iolist.md
---
# group `sys_iolist` 

Provides linked-list scatter / gather IO.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`iolist_count`](#group__sys__iolist_1ga242581e46a5c660f99abc545c637a1c3)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Count number of entries in an iolist_t.
`public size_t `[`iolist_size`](#group__sys__iolist_1ga52ec5451bbfb3b01449d9baf67cfd96c)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Sum up number of bytes in iolist.
`public size_t `[`iolist_to_iovec`](#group__sys__iolist_1ga888fe3da2e1409e8d1044c2c5117dd7e)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist,struct `[`iovec`](./doc/starlight-docs/src/content/docs/apidoc/api-posix.md#structiovec)` * iov,unsigned * count)`            | Create struct iovec from iolist.
`public ssize_t `[`iolist_to_buffer`](#group__sys__iolist_1gac7e0b68d62685f3fbbf9f95a96de8946)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist,void * dst,size_t len)`            | Copies the bytes of the iolist to a buffer.
`struct `[`iolist`](#structiolist) | iolist structure definition

## Members

#### `public unsigned `[`iolist_count`](#group__sys__iolist_1ga242581e46a5c660f99abc545c637a1c3)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Count number of entries in an iolist_t.

#### Parameters
* `iolist` iolist to count

#### Returns
number of entries (zero for NULL parameter)

#### `public size_t `[`iolist_size`](#group__sys__iolist_1ga52ec5451bbfb3b01449d9baf67cfd96c)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Sum up number of bytes in iolist.

This function returns the summed ip length values of all entries in `iolist`.

#### Parameters
* `iolist` iolist to sum up

#### Returns
summed up number of bytes or zero if `iolist` == NULL

#### `public size_t `[`iolist_to_iovec`](#group__sys__iolist_1ga888fe3da2e1409e8d1044c2c5117dd7e)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist,struct `[`iovec`](./doc/starlight-docs/src/content/docs/apidoc/api-posix.md#structiovec)` * iov,unsigned * count)` 

Create struct iovec from iolist.

This function fills an array of struct iovecs with the contents of `iolist`. It will write the number of used array entries into `count`.

The caller *must* ensure that `iov` p points to an array of size >= count!

#### Parameters
* `iolist` iolist to read from 

* `iov` ptr to array of struct iovec that will be filled 

* `count` number of elements in `iolist`

#### Returns
iolist_size(iolist)

#### `public ssize_t `[`iolist_to_buffer`](#group__sys__iolist_1gac7e0b68d62685f3fbbf9f95a96de8946)`(const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist,void * dst,size_t len)` 

Copies the bytes of the iolist to a buffer.

#### Parameters
* `iolist` iolist to read from 

* `dst` Destination buffer 

* `len` Size of the destination buffer

#### Returns
iolist_size(iolist) on success -ENOBUFS if the buffer is too small

# struct `iolist` 

iolist structure definition

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`iol_next`](#structiolist_1a84b9f1a8a9ba3a61eb82885c94c0781f) | ptr to next list entry
`public void * `[`iol_base`](#structiolist_1a3243f9752affc115c895b28340b58ec3) | ptr to this list entries data
`public size_t `[`iol_len`](#structiolist_1a608e3fa5641f2976d517b656dcb66c20) | size of data pointet to by ptr

## Members

#### `public `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`iol_next`](#structiolist_1a84b9f1a8a9ba3a61eb82885c94c0781f) 

ptr to next list entry

#### `public void * `[`iol_base`](#structiolist_1a3243f9752affc115c895b28340b58ec3) 

ptr to this list entries data

#### `public size_t `[`iol_len`](#structiolist_1a608e3fa5641f2976d517b656dcb66c20) 

size of data pointet to by ptr

