---
title: api-posix_select.md
description: api-posix_select.md
---
# group `posix_select` 

Select implementation for RIOT.

**See also**: [The Open Group Base Specification Issue 7](https://pubs.opengroup.org/onlinepubs/9699919799.2018edition/)

> Todo: Omitted from original specification for now:

* Inclusion of `<signal.h>`; no POSIX signal handling implemented in RIOT yet

* `pselect()` as it uses `sigset_t` from `<signal.h>`

* handling of the `writefds` and `errorfds` parameters of `[select()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__select_1ga7ffa34f8c9a12e7fd43f5ef65bf889fa)`

Currently, only [sockets](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets) are supported

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`POSIX_SELECT_THREAD_FLAG`](#group__posix__select_1gab6130e236a85cc111cabe28776f2ce82)            | [Thread Flags](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags) for POSIX select
`define `[`FD_SETSIZE`](#group__posix__select_1ga86c5dbf5a99358e288f573d6a1e0873f)            | Maximum number of file descriptors in an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` structure.
`public inline static void `[`FD_CLR`](#group__posix__select_1gaeb43896a587535999ccc5210c3c715e7)`(int fd,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)`            | Removes a file descriptor from an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` if it is a member.
`public inline static int `[`FD_ISSET`](#group__posix__select_1ga1bd5fc9b86e2774071fd01b790204820)`(int fd,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)`            | Checks if a file descriptor is a member of an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)`
`public inline static void `[`FD_SET`](#group__posix__select_1ga24d7c57d92f55a9604000df4d4aa319f)`(int fd,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)`            | Adds a file descriptor from an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` if it is not already a member.
`public inline static void `[`FD_ZERO`](#group__posix__select_1ga7650b004c963c7c008eb2de9a33b0380)`(`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)`            | Initializes the descriptor set as an empty set.
`public int `[`select`](#group__posix__select_1ga7ffa34f8c9a12e7fd43f5ef65bf889fa)`(int nfds,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * readfds,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * writefds,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * errorfds,struct `[`timeval`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structtimeval)` * timeout)`            | Examines the given file descriptor sets if they are ready for their respective operation.
`struct `[`fd_set`](#structfd__set) | The `[fd_set](#structfd__set)` structure.

## Members

#### `define `[`POSIX_SELECT_THREAD_FLAG`](#group__posix__select_1gab6130e236a85cc111cabe28776f2ce82) 

[Thread Flags](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags) for POSIX select

#### `define `[`FD_SETSIZE`](#group__posix__select_1ga86c5dbf5a99358e288f573d6a1e0873f) 

Maximum number of file descriptors in an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` structure.

POSIX-compliant version.

#### `public inline static void `[`FD_CLR`](#group__posix__select_1gaeb43896a587535999ccc5210c3c715e7)`(int fd,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)` 

Removes a file descriptor from an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` if it is a member.

#### Parameters
* `fd` A file descriptor 

* `fdsetp` An `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)`

#### `public inline static int `[`FD_ISSET`](#group__posix__select_1ga1bd5fc9b86e2774071fd01b790204820)`(int fd,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)` 

Checks if a file descriptor is a member of an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)`

#### Parameters
* `fd` A file descriptor 

* `fdsetp` An `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)`

#### Returns
non-zero value, if `fd` is a member of `fdsetp`

#### Returns
0, if `fd` is not a member of `fdsetp`

#### `public inline static void `[`FD_SET`](#group__posix__select_1ga24d7c57d92f55a9604000df4d4aa319f)`(int fd,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)` 

Adds a file descriptor from an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` if it is not already a member.

#### Parameters
* `fd` A file descriptor 

* `fdsetp` An `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)`

#### `public inline static void `[`FD_ZERO`](#group__posix__select_1ga7650b004c963c7c008eb2de9a33b0380)`(`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * fdsetp)` 

Initializes the descriptor set as an empty set.

#### Parameters
* `fdsetp` An `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)`

#### `public int `[`select`](#group__posix__select_1ga7ffa34f8c9a12e7fd43f5ef65bf889fa)`(int nfds,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * readfds,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * writefds,`[`fd_set`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` * errorfds,struct `[`timeval`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structtimeval)` * timeout)` 

Examines the given file descriptor sets if they are ready for their respective operation.

#### Parameters
* `nfds` The range of descriptors tested. The first `nfds` descriptors shall be checked in each set; that is, the descriptors from zero through `nfds` - 1 in the descriptor sets shall be examined. 

* `readfds` The set of file descriptors to be checked for being ready to read. Indicates on output which file descriptors are ready to read. May be NULL to check no file descriptors. 

* `writefds` The set of file descriptors to be checked for being ready to write. Indicates on output which file descriptors are ready to write. May be NULL to check no file descriptors. **As only sockets are supported for now, these will be ignored**

* `errorfds` The set of file descriptors to be checked for being error conditions pending. Indicates on output which file descriptors have error conditions pending. May be NULL to check no file descriptors. **As only sockets are supported for now, these will be ignored**

* `timeout` Timeout for select to block until one or more of the checked file descriptors is ready. Set timeout to all-zero to return immediately without blocking. May be NULL to block indefinitely.

#### Returns
number of members added to the file descriptor sets on success. 

#### Returns
-1 on error, `errno` is set to indicate the error.

# struct `fd_set` 

The `[fd_set](#structfd__set)` structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`BITFIELD`](#structfd__set_1a1709d2e6a9802f7f8ab54fb7b2862d64)`(fds,`[`FD_SETSIZE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__select_1ga86c5dbf5a99358e288f573d6a1e0873f)`)` | Bit-field to represent the set of file descriptors.

## Members

#### `public  `[`BITFIELD`](#structfd__set_1a1709d2e6a9802f7f8ab54fb7b2862d64)`(fds,`[`FD_SETSIZE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__select_1ga86c5dbf5a99358e288f573d6a1e0873f)`)` 

Bit-field to represent the set of file descriptors.

