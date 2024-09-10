---
title: api-test_utils_netdev_eth_minimal.md
description: api-test_utils_netdev_eth_minimal.md
---
# group `test_utils_netdev_eth_minimal` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETDEV_ETH_MINIMAL_NUMOF`](#group__test__utils__netdev__eth__minimal_1gae0b15ef13a22646fe5893e593d1d0a0f)            | Maximum number of devices to handle.
`public int `[`netdev_eth_minimal_init_devs`](#group__test__utils__netdev__eth__minimal_1gadb3141d605a1862bfbf839a0f7c3fd05)`(`[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` cb)`            | Device-under-test initialization function.
`public int `[`netdev_eth_minimal_init`](#group__test__utils__netdev__eth__minimal_1ga141c176617f2e5457b797151929b450e)`(void)`            | Initialize the module.

## Members

#### `define `[`NETDEV_ETH_MINIMAL_NUMOF`](#group__test__utils__netdev__eth__minimal_1gae0b15ef13a22646fe5893e593d1d0a0f) 

Maximum number of devices to handle.

Should be provided by the application via `init_dev.h`.

#### `public int `[`netdev_eth_minimal_init_devs`](#group__test__utils__netdev__eth__minimal_1gadb3141d605a1862bfbf839a0f7c3fd05)`(`[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` cb)` 

Device-under-test initialization function.

Should be implemented by the test application

#### Parameters
* `cb` Callback to be set to [netdev::event_callback](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16)

#### Parameters
* `0` on success 

* `!=` 0 on error

#### `public int `[`netdev_eth_minimal_init`](#group__test__utils__netdev__eth__minimal_1ga141c176617f2e5457b797151929b450e)`(void)` 

Initialize the module.

#### Parameters
* `0` on success 

* `!=` 0 on error

