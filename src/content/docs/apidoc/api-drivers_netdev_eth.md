---
title: api-drivers_netdev_eth.md
description: api-drivers_netdev_eth.md
---
# group `drivers_netdev_eth` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`netdev_eth_get`](#group__drivers__netdev__eth_1ga4d69b6df9da1146aa73aeaf10281e5ea)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * value,size_t max_len)`            | Fallback function for netdev ethernet devices' _get function.
`public int `[`netdev_eth_set`](#group__drivers__netdev__eth_1ga5772f3807e5d2c1f725ef9771d210f3b)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,const void * value,size_t value_len)`            | Fallback function for netdev ethernet devices' _set function.
`struct `[`netdev_eth_rx_info_t`](#structnetdev__eth__rx__info__t) | Received frame status information for Ethernet devices.

## Members

#### `public int `[`netdev_eth_get`](#group__drivers__netdev__eth_1ga4d69b6df9da1146aa73aeaf10281e5ea)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * value,size_t max_len)` 

Fallback function for netdev ethernet devices' _get function.

Supposed to be used by netdev drivers as default case.

Driver *MUST* implement NETOPT_ADDRESS case!

#### Parameters
* `dev` network device descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximal amount of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
<0 on error

#### `public int `[`netdev_eth_set`](#group__drivers__netdev__eth_1ga5772f3807e5d2c1f725ef9771d210f3b)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,const void * value,size_t value_len)` 

Fallback function for netdev ethernet devices' _set function.

#### Parameters
* `dev` network device descriptor 

* `opt` option type 

* `value` value to set 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
<0 on error

# struct `netdev_eth_rx_info_t` 

Received frame status information for Ethernet devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint64_t `[`timestamp`](#structnetdev__eth__rx__info__t_1a941515ebd19910bb6071e125e8be64ca) | Time of the reception of the start of frame delimiter in nanoseconds since epoch.
`public uint8_t `[`flags`](#structnetdev__eth__rx__info__t_1afc0aecf25979da8656887e021af465f1) | Flags e.g.

## Members

#### `public uint64_t `[`timestamp`](#structnetdev__eth__rx__info__t_1a941515ebd19910bb6071e125e8be64ca) 

Time of the reception of the start of frame delimiter in nanoseconds since epoch.

#### `public uint8_t `[`flags`](#structnetdev__eth__rx__info__t_1afc0aecf25979da8656887e021af465f1) 

Flags e.g.

used to mark other fields as valid

