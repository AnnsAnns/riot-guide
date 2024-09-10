---
title: api-net_csma_sender.md
description: api-net_csma_sender.md
---
# group `net_csma_sender` 

This interface allows code from layer 2 (MAC) or higher to send packets with CSMA/CA, whatever the abilities and/or configuration of a given radio transceiver device are.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`csma_sender_csma_ca_send`](#group__net__csma__sender_1gad096783a38c6d2666cb0ff777396584b)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist,const `[`csma_sender_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_csma_sender.md#structcsma__sender__conf__t)` * conf)`            | Sends a 802.15.4 frame using the CSMA/CA method.
`public int `[`csma_sender_cca_send`](#group__net__csma__sender_1ga9e80dfc661a85d05360877ea137644dc)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Sends a 802.15.4 frame when medium is available.
`struct `[`csma_sender_conf_t`](#structcsma__sender__conf__t) | Configuration type for backoff.

## Members

#### `public int `[`csma_sender_csma_ca_send`](#group__net__csma__sender_1gad096783a38c6d2666cb0ff777396584b)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist,const `[`csma_sender_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_csma_sender.md#structcsma__sender__conf__t)` * conf)` 

Sends a 802.15.4 frame using the CSMA/CA method.

`dev != NULL`

If the transceiver can (and is configured to) do hardware-assisted CSMA/CA, this feature is used. Otherwise, a software procedure is used.

#### Parameters
* `dev` netdev device, needs to be already initialized 

* `iolist` pointer to the data 

* `conf` configuration for the backoff; will be set to [CSMA_SENDER_CONF_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__csma__sender_1gadaa5ba030a03ed9adba39220f8743cc6) if NULL.

#### Returns
number of bytes that were actually send out 

#### Returns
-ENODEV if `dev` is invalid 

#### Returns
-ENOMSG if `pkt` is invalid 

#### Returns
-EOVERFLOW if the payload size of `pkt` exceeds the payload size that can be handled by the device 

#### Returns
-ECANCELED if an internal driver error occurred 

#### Returns
-EBUSY if radio medium never was available to send the given data

#### `public int `[`csma_sender_cca_send`](#group__net__csma__sender_1ga9e80dfc661a85d05360877ea137644dc)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Sends a 802.15.4 frame when medium is available.

`dev != NULL`

This function is useful for sending packets without the whole CSMA/CA procedure, but *after* ensuring medium is available, that is after a successful CCA.

It is especially useful for broadcasting specific packets, like beacons; or for many sending packets in burst.

**ATTENTION:** It only tries to send the given data once. If you want the complete CSMA/CA procedure with retries, use [csma_sender_csma_ca_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__csma__sender_1gad096783a38c6d2666cb0ff777396584b).

#### Parameters
* `dev` netdev device, needs to be already initialized 

* `iolist` pointer to the data

#### Returns
number of bytes that were actually send out 

#### Returns
-ENODEV if `dev` is invalid 

#### Returns
-ENOMSG if `pkt` is invalid 

#### Returns
-EOVERFLOW if the payload size of `pkt` exceeds the payload size that can be handled by the device 

#### Returns
-ECANCELED if an internal driver error occurred 

#### Returns
-EBUSY if radio medium was not available to send the given data

# struct `csma_sender_conf_t` 

Configuration type for backoff.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`min_be`](#structcsma__sender__conf__t_1a16cfe753954d84a2089b35375c62689e) | minimum backoff exponent
`public uint8_t `[`max_be`](#structcsma__sender__conf__t_1a26573e3b25c4889e031bfce326d35978) | maximum backoff exponent
`public uint16_t `[`max_backoffs`](#structcsma__sender__conf__t_1a11e46028bd2200789623280b75af9e68) | maximum number of retries
`public uint32_t `[`backoff_period`](#structcsma__sender__conf__t_1a33ebfe31b24ad6505ea2c78ba6b9c9c4) | backoff period in microseconds

## Members

#### `public uint8_t `[`min_be`](#structcsma__sender__conf__t_1a16cfe753954d84a2089b35375c62689e) 

minimum backoff exponent

#### `public uint8_t `[`max_be`](#structcsma__sender__conf__t_1a26573e3b25c4889e031bfce326d35978) 

maximum backoff exponent

#### `public uint16_t `[`max_backoffs`](#structcsma__sender__conf__t_1a11e46028bd2200789623280b75af9e68) 

maximum number of retries

#### `public uint32_t `[`backoff_period`](#structcsma__sender__conf__t_1a33ebfe31b24ad6505ea2c78ba6b9c9c4) 

backoff period in microseconds

