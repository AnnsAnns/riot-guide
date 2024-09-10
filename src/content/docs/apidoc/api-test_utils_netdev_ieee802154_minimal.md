---
title: api-test_utils_netdev_ieee802154_minimal.md
description: api-test_utils_netdev_ieee802154_minimal.md
---
# group `test_utils_netdev_ieee802154_minimal` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETDEV_IEEE802154_MINIMAL_NUMOF`](#group__test__utils__netdev__ieee802154__minimal_1ga003cf020e4a0394a48966001c0df3432)            | Maximum number of devices to handle.
`public int `[`netdev_ieee802154_minimal_init_devs`](#group__test__utils__netdev__ieee802154__minimal_1gac30a3118ea4a4573b04cd5c3bdb43524)`(`[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` cb)`            | Device-under-test initialization function.
`public int `[`netdev_ieee802154_minimal_init`](#group__test__utils__netdev__ieee802154__minimal_1gaede17c7d50d47c00eea5f749452adac4)`(void)`            | Initialize the module.
`public int `[`netdev_ieee802154_minimal_send`](#group__test__utils__netdev__ieee802154__minimal_1gae78fceb62b82501d31ebc5e4095ed165)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * pkt)`            | Send a IEEE 802.15.4 frame This is wrapper for the internal netdev send function, that ensures all netdev functions are called from the same thread.
`public int `[`netdev_ieee802154_minimal_get`](#group__test__utils__netdev__ieee802154__minimal_1gaaf9e0f7a59c1ff36723cc545b873fb16)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * data,size_t max_len)`            | Get an option from netdev minimal.
`public int `[`netdev_ieee802154_minimal_set`](#group__test__utils__netdev__ieee802154__minimal_1ga6c0515b9b4ffc1fbaf9eb1a9193342cc)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * data,size_t len)`            | Set an option to netdev minimal.

## Members

#### `define `[`NETDEV_IEEE802154_MINIMAL_NUMOF`](#group__test__utils__netdev__ieee802154__minimal_1ga003cf020e4a0394a48966001c0df3432) 

Maximum number of devices to handle.

Should be provided by the application via `init_dev.h`.

#### `public int `[`netdev_ieee802154_minimal_init_devs`](#group__test__utils__netdev__ieee802154__minimal_1gac30a3118ea4a4573b04cd5c3bdb43524)`(`[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` cb)` 

Device-under-test initialization function.

Should be implemented by the test application

#### Parameters
* `cb` Callback to be set to [netdev::event_callback](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16)

#### Parameters
* `0` on success 

* `!=` 0 on error

#### `public int `[`netdev_ieee802154_minimal_init`](#group__test__utils__netdev__ieee802154__minimal_1gaede17c7d50d47c00eea5f749452adac4)`(void)` 

Initialize the module.

#### Parameters
* `0` on success 

* `!=` 0 on error

#### `public int `[`netdev_ieee802154_minimal_send`](#group__test__utils__netdev__ieee802154__minimal_1gae78fceb62b82501d31ebc5e4095ed165)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * pkt)` 

Send a IEEE 802.15.4 frame This is wrapper for the internal netdev send function, that ensures all netdev functions are called from the same thread.

It is safe to call this function from anywhere.

#### Parameters
* `dev` Pointer to the netdev descriptor. 

* `pkt` Packet to be sent.

#### Parameters
* `0` on success 

* `!=` 0 on error

#### `public int `[`netdev_ieee802154_minimal_get`](#group__test__utils__netdev__ieee802154__minimal_1gaaf9e0f7a59c1ff36723cc545b873fb16)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * data,size_t max_len)` 

Get an option from netdev minimal.

This is wrapper for the internal netdev get function, that ensures all netdev functions are called from the same thread. It is safe to call this function from anywhere.

#### Parameters
* `dev` Pointer to the netdev descriptor. 

* `opt` The netopt option 

* `data` Buffer to store the option 

* `max_len` Maximum length of the buffer

#### Parameters
* `0` on success 

* `!=` 0 on error

#### `public int `[`netdev_ieee802154_minimal_set`](#group__test__utils__netdev__ieee802154__minimal_1ga6c0515b9b4ffc1fbaf9eb1a9193342cc)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * data,size_t len)` 

Set an option to netdev minimal.

This is wrapper for the internal netdev set function, that ensures all netdev functions are called from the same thread. It is safe to call this function from anywhere.

#### Parameters
* `dev` Pointer to the netdev descriptor. 

* `opt` The netopt option 

* `data` Pointer to the data to be set 

* `len` Length of the data

#### Parameters
* `0` on success 

* `!=` 0 on error

