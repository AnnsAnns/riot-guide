---
title: api-cpu_sam0_common_eth.md
description: api-cpu_sam0_common_eth.md
---
# group `cpu_sam0_common_eth` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`sam0_eth_setup`](#group__cpu__sam0__common__eth_1ga55c13f673eddbaf19a5fceaacab4781d)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Setup SAM0 Ethernet peripheral.
`struct `[`sam0_eth_netdev_t`](#structsam0__eth__netdev__t) | Device descriptor for SAM0-ETH devices.

## Members

#### `public void `[`sam0_eth_setup`](#group__cpu__sam0__common__eth_1ga55c13f673eddbaf19a5fceaacab4781d)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Setup SAM0 Ethernet peripheral.

#### Parameters
* `dev` Pointer to the netdev struct

# struct `sam0_eth_netdev_t` 

Device descriptor for SAM0-ETH devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * `[`netdev`](#structsam0__eth__netdev__t_1aed4304c79ebbbb59f46a9386008213f3) | netdev parent struct

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * `[`netdev`](#structsam0__eth__netdev__t_1aed4304c79ebbbb59f46a9386008213f3) 

netdev parent struct

