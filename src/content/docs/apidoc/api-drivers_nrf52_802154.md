---
title: api-drivers_nrf52_802154.md
description: api-drivers_nrf52_802154.md
---
# group `drivers_nrf52_802154` 

Driver for using the nRF52's radio in IEEE802.15.4 mode.

Implementation stateNetdev events supported:

* NETDEV_EVENT_RX_COMPLETE

* NETDEV_EVENT_TX_COMPLETE

Transmission options not yet implemented:

* Send acknowledgement for packages

* Request acknowledgement

* Retransmit unacked packages

* Carrier Sense Multiple Access (CSMA) and Implementation of Clear Channel Assessment Control (CCACTRL)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NRF802154_TIMER`](#group__drivers__nrf52__802154_1ga4501d11d1af360c79a9ae74e952daf22)            | IEEE 802.15.4 radio timer configuration.
`public void `[`nrf802154_hal_setup`](#group__drivers__nrf52__802154_1ga7fba1c0a6a9aca834e9c9d31d9129329)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal)`            | Setup NRF802154 in order to be used with the IEEE 802.15.4 Radio HAL.
`public int `[`nrf802154_init`](#group__drivers__nrf52__802154_1ga4dfdb3f2a1f91cc60445ee21ce3662f0)`(void)`            | Initialize the NRF52840 radio.
`public void `[`nrf802154_setup`](#group__drivers__nrf52__802154_1ga7f474ec5f8c81050e12bf2edd991c9e6)`(`[`nrf802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf52__802154_1gac4507461aa3a496c7acf92360a831e54)` * dev)`            | Setup a NRF802154 radio device.

## Members

#### `define `[`NRF802154_TIMER`](#group__drivers__nrf52__802154_1ga4501d11d1af360c79a9ae74e952daf22) 

IEEE 802.15.4 radio timer configuration.

this radio relies on a dedicated hardware timer to maintain IFS
     the default timer may be overwritten in the board configuration

#### `public void `[`nrf802154_hal_setup`](#group__drivers__nrf52__802154_1ga7fba1c0a6a9aca834e9c9d31d9129329)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal)` 

Setup NRF802154 in order to be used with the IEEE 802.15.4 Radio HAL.

This functions MUST be called before [nrf802154_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf52__802154_1ga4dfdb3f2a1f91cc60445ee21ce3662f0).

#### Parameters
* `hal` pointer to the HAL descriptor associated to the device.

#### `public int `[`nrf802154_init`](#group__drivers__nrf52__802154_1ga4dfdb3f2a1f91cc60445ee21ce3662f0)`(void)` 

Initialize the NRF52840 radio.

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public void `[`nrf802154_setup`](#group__drivers__nrf52__802154_1ga7f474ec5f8c81050e12bf2edd991c9e6)`(`[`nrf802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf52__802154_1gac4507461aa3a496c7acf92360a831e54)` * dev)` 

Setup a NRF802154 radio device.

#### Parameters
* `dev` Device descriptor

