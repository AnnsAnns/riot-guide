---
title: api-drivers_kw41zrf.md
description: api-drivers_kw41zrf.md
---
# group `drivers_kw41zrf` 

Device driver for the NXP KW41Z, KW21Z in-cpu transceiver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`KW41ZRF_MAX_PKT_LENGTH`](#group__drivers__kw41zrf_1ga5c82107df7f9996facba49741acff2dc)            | Maximum packet length.
`define `[`KW41ZRF_DEFAULT_TX_POWER`](#group__drivers__kw41zrf_1ga2b2775cd6e2be5b4a490df0c54e5899d)            | Default TX_POWER in dbm used after initialization.
`define `[`KW41ZRF_OUTPUT_POWER_MAX`](#group__drivers__kw41zrf_1ga9feed1b172dc1f4b8213f5834346bdfd)            | Maximum output power of the kw41z device in dBm.
`define `[`KW41ZRF_OUTPUT_POWER_MIN`](#group__drivers__kw41zrf_1ga6ed7475e1c755bd4f1e53d0c0b3e80b0)            | Minimum output power of the kw41z device in dBm.
`public void `[`kw41zrf_setup`](#group__drivers__kw41zrf_1ga8f2d5d7b2f77525846aaeff8b65dcada)`(`[`kw41zrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw41zrf.md#structkw41zrf__t)` * dev,uint8_t index)`            | Setup an KW41ZRF based device state.
`public int `[`kw41zrf_init`](#group__drivers__kw41zrf_1ga817a27aea2ab391018259018364baeed)`(`[`kw41zrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw41zrf.md#structkw41zrf__t)` * dev,`[`kw41zrf_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__kw41zrf_1gae827e5c56e2b0f1d1fe878f878c93839)` cb)`            | Initialize the given KW41ZRF device.
`public int `[`kw41zrf_reset`](#group__drivers__kw41zrf_1ga439433c82a3f01956b328317f476a50c)`(`[`kw41zrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw41zrf.md#structkw41zrf__t)` * dev)`            | Reset radio hardware and restore default settings.
`struct `[`kw41zrf_t`](#structkw41zrf__t) | Device descriptor for KW41ZRF radio devices.

## Members

#### `define `[`KW41ZRF_MAX_PKT_LENGTH`](#group__drivers__kw41zrf_1ga5c82107df7f9996facba49741acff2dc) 

Maximum packet length.

#### `define `[`KW41ZRF_DEFAULT_TX_POWER`](#group__drivers__kw41zrf_1ga2b2775cd6e2be5b4a490df0c54e5899d) 

Default TX_POWER in dbm used after initialization.

#### `define `[`KW41ZRF_OUTPUT_POWER_MAX`](#group__drivers__kw41zrf_1ga9feed1b172dc1f4b8213f5834346bdfd) 

Maximum output power of the kw41z device in dBm.

#### `define `[`KW41ZRF_OUTPUT_POWER_MIN`](#group__drivers__kw41zrf_1ga6ed7475e1c755bd4f1e53d0c0b3e80b0) 

Minimum output power of the kw41z device in dBm.

#### `public void `[`kw41zrf_setup`](#group__drivers__kw41zrf_1ga8f2d5d7b2f77525846aaeff8b65dcada)`(`[`kw41zrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw41zrf.md#structkw41zrf__t)` * dev,uint8_t index)` 

Setup an KW41ZRF based device state.

#### Parameters
* `dev` device descriptor 

* `index` index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### `public int `[`kw41zrf_init`](#group__drivers__kw41zrf_1ga817a27aea2ab391018259018364baeed)`(`[`kw41zrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw41zrf.md#structkw41zrf__t)` * dev,`[`kw41zrf_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__kw41zrf_1gae827e5c56e2b0f1d1fe878f878c93839)` cb)` 

Initialize the given KW41ZRF device.

#### Parameters
* `dev` device descriptor 

* `cb` irq callback

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`kw41zrf_reset`](#group__drivers__kw41zrf_1ga439433c82a3f01956b328317f476a50c)`(`[`kw41zrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw41zrf.md#structkw41zrf__t)` * dev)` 

Reset radio hardware and restore default settings.

#### Parameters
* `dev` device to reset

#### Returns
0 on success 

#### Returns
<0 on initialization failure

# struct `kw41zrf_t` 

```
struct kw41zrf_t
  : public netdev_ieee802154_t
```  

Device descriptor for KW41ZRF radio devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structkw41zrf__t_1af1070eab2206691c0f752e9a2409da0a) | netdev parent struct

## Members

#### `public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structkw41zrf__t_1af1070eab2206691c0f752e9a2409da0a) 

netdev parent struct

