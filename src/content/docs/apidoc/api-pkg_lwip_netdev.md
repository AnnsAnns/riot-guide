---
title: api-pkg_lwip_netdev.md
description: api-pkg_lwip_netdev.md
---
# group `pkg_lwip_netdev` 

netdev adapter for lwIP

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWIP_NETDEV_BUFLEN`](#group__pkg__lwip__netdev_1gacf7f0015561761bc4956b61e2cda4d55)            | Length of the temporary copying buffer for receival.
`public err_t `[`lwip_netdev_init`](#group__pkg__lwip__netdev_1gaa9aa88b43641bd31e105029a501eed9b)`(struct netif * netif)`            | Initializes the netdev adapter.

## Members

#### `define `[`LWIP_NETDEV_BUFLEN`](#group__pkg__lwip__netdev_1gacf7f0015561761bc4956b61e2cda4d55) 

Length of the temporary copying buffer for receival.

It should be as long as the maximum packet length of all the netdev you use.

#### `public err_t `[`lwip_netdev_init`](#group__pkg__lwip__netdev_1gaa9aa88b43641bd31e105029a501eed9b)`(struct netif * netif)` 

Initializes the netdev adapter.

Should be passed to lwIP's netif_add() with the state parameter parameter of that function set to an existing netdev_t instance

netif->state is set to an existing netdev_t instance. netif->state->context pointing to the [lwip_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structlwip__netif__t) containing this netif.

#### Parameters
* `netif` The network interface intended to be initialized.

#### Returns
ERR_OK on success. 

#### Returns
ERR_IF on error.

