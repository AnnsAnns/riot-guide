---
title: api-sys_ztimer_mock.md
description: api-sys_ztimer_mock.md
---
# group `sys_ztimer_mock` 

ztimer mock clock backend

This ztimer module implements a virtual clock that can be used for unittests. It can be manually adjusted to different timestamps and manually fired to simulate different scenarios and test the ztimer implementation using this as a backing timer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`ztimer_mock_advance`](#group__sys__ztimer__mock_1gad35d312cdfa0b5fe537c02ee129bf64c)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self,uint32_t val)`            | Advance the mock clock counter and update target.
`public void `[`ztimer_mock_jump`](#group__sys__ztimer__mock_1gad3d5bd0cec227b0c1ac733b195d7543f)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self,uint32_t target)`            | Set the mock clock counter value without updating timer target.
`public void `[`ztimer_mock_fire`](#group__sys__ztimer__mock_1ga3d6ac71b3083105972d8030a364e3ff5)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self)`            | Trigger the timer handlers.
`public void `[`ztimer_mock_init`](#group__sys__ztimer__mock_1gae0589a3c942fc0789a8da4ad7188a025)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self,unsigned width)`            | Constructor.
`struct `[`ztimer_mock_t`](#structztimer__mock__t) | ztimer mock clock class

## Members

#### `public void `[`ztimer_mock_advance`](#group__sys__ztimer__mock_1gad35d312cdfa0b5fe537c02ee129bf64c)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self,uint32_t val)` 

Advance the mock clock counter and update target.

This will call [ztimer_handler](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gae2432e9f2e227fce4a4730afdbe59cb6) if the target was passed.

#### Parameters
* `self` instance to operate on 

* `val` counter increment value

#### `public void `[`ztimer_mock_jump`](#group__sys__ztimer__mock_1gad3d5bd0cec227b0c1ac733b195d7543f)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self,uint32_t target)` 

Set the mock clock counter value without updating timer target.

This will not touch the timer target.

#### Parameters
* `self` instance to operate on 

* `target` new absolute counter value

#### `public void `[`ztimer_mock_fire`](#group__sys__ztimer__mock_1ga3d6ac71b3083105972d8030a364e3ff5)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self)` 

Trigger the timer handlers.

This is equivalent to a hardware timer interrupt

#### Parameters
* `self` instance to operate on

#### `public void `[`ztimer_mock_init`](#group__sys__ztimer__mock_1gae0589a3c942fc0789a8da4ad7188a025)`(`[`ztimer_mock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer_mock.md#structztimer__mock__t)` * self,unsigned width)` 

Constructor.

#### Parameters
* `self` instance to operate on 

* `width` counter width, 1 <= width <= 32

# struct `ztimer_mock_t` 

ztimer mock clock class

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` `[`super`](#structztimer__mock__t_1aa8926c7deb8b6e72f6b47d4e9396d5b8) | superclass instance
`public uint32_t `[`mask`](#structztimer__mock__t_1af477f1afc265735a20cc8d97b2098e6b) | counter mask
`public uint32_t `[`now`](#structztimer__mock__t_1a4ba599d52e0bde9d47d70fd972c87c9a) | current counter value
`public uint32_t `[`target`](#structztimer__mock__t_1a1a4a225a03d8e61c0be6d07afd2d68c9) | ticks left until alarm is hit
`public unsigned `[`armed`](#structztimer__mock__t_1afc621602990e577a24554871aba47ad6) | flag for checking if a target has been set
`public unsigned `[`running`](#structztimer__mock__t_1abe8741cfbdeeea89657c85fc56982468) | flag for checking if the timer is running
`public unsigned `[`now`](#structztimer__mock__t_1a912605bafdf79545a8d4073a3f4c513e) | Number of calls to [ztimer_ops_t::now](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a2401cc2bb473bcf221d7c6a672f50a7c).
`public unsigned `[`set`](#structztimer__mock__t_1a26a275b0d89cd7477992423a9bd25cdc) | Number of calls to [ztimer_ops_t::set](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1ab342807fdefc48319eb4f7e10e45f89d).
`public unsigned `[`cancel`](#structztimer__mock__t_1a824da145e3cbb51b0532f7a45a903ae8) | Number of calls to [ztimer_ops_t::cancel](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a9acfb7ec1a979f9c1b073ed71a7d98c4).
`public unsigned `[`start`](#structztimer__mock__t_1ae6904286a0e2064161c767e8c589d7c6) | Number of calls to [ztimer_ops_t::start](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a4807b0359ed669170e8fdf84ca03f4a3).
`public unsigned `[`stop`](#structztimer__mock__t_1a82c486f6a9f535d09250e51f9bbdb80b) | Number of calls to [ztimer_ops_t::stop](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a8129bdd76ad8e258fbd71d3abfb1abf4).
`public struct ztimer_mock_t::@396 `[`calls`](#structztimer__mock__t_1a51a690f8d04fa3dceb23035ef013cc0f) | Struct holding number of calls to each operation.

## Members

#### `public `[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` `[`super`](#structztimer__mock__t_1aa8926c7deb8b6e72f6b47d4e9396d5b8) 

superclass instance

#### `public uint32_t `[`mask`](#structztimer__mock__t_1af477f1afc265735a20cc8d97b2098e6b) 

counter mask

#### `public uint32_t `[`now`](#structztimer__mock__t_1a4ba599d52e0bde9d47d70fd972c87c9a) 

current counter value

#### `public uint32_t `[`target`](#structztimer__mock__t_1a1a4a225a03d8e61c0be6d07afd2d68c9) 

ticks left until alarm is hit

#### `public unsigned `[`armed`](#structztimer__mock__t_1afc621602990e577a24554871aba47ad6) 

flag for checking if a target has been set

#### `public unsigned `[`running`](#structztimer__mock__t_1abe8741cfbdeeea89657c85fc56982468) 

flag for checking if the timer is running

#### `public unsigned `[`now`](#structztimer__mock__t_1a912605bafdf79545a8d4073a3f4c513e) 

Number of calls to [ztimer_ops_t::now](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a2401cc2bb473bcf221d7c6a672f50a7c).

#### `public unsigned `[`set`](#structztimer__mock__t_1a26a275b0d89cd7477992423a9bd25cdc) 

Number of calls to [ztimer_ops_t::set](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1ab342807fdefc48319eb4f7e10e45f89d).

#### `public unsigned `[`cancel`](#structztimer__mock__t_1a824da145e3cbb51b0532f7a45a903ae8) 

Number of calls to [ztimer_ops_t::cancel](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a9acfb7ec1a979f9c1b073ed71a7d98c4).

#### `public unsigned `[`start`](#structztimer__mock__t_1ae6904286a0e2064161c767e8c589d7c6) 

Number of calls to [ztimer_ops_t::start](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a4807b0359ed669170e8fdf84ca03f4a3).

#### `public unsigned `[`stop`](#structztimer__mock__t_1a82c486f6a9f535d09250e51f9bbdb80b) 

Number of calls to [ztimer_ops_t::stop](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__ops__t_1a8129bdd76ad8e258fbd71d3abfb1abf4).

#### `public struct ztimer_mock_t::@396 `[`calls`](#structztimer__mock__t_1a51a690f8d04fa3dceb23035ef013cc0f) 

Struct holding number of calls to each operation.

