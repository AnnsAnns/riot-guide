---
title: api-drivers_netdev_ieee802154.md
description: api-drivers_netdev_ieee802154.md
---
# group `drivers_netdev_ieee802154` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`netdev_ieee802154_cca_mode_t`](#group__drivers__netdev__ieee802154_1ga3c394bd0168c30eab6bc77ff9925d883)            | Option parameter to be used with [NETOPT_CCA_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a88c5d8f2807ffa20328ecd85eda79aef) to set the mode of the clear channel assessment (CCA) defined in Std 802.15.4.
`public inline static void `[`netdev_ieee802154_rx_info_set_timestamp`](#group__drivers__netdev__ieee802154_1ga6a547f6c8305c55681f624d4fda82a66)`(`[`netdev_ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1ga0b8223bef9ea4a6db9bc641912dbc600)` * dest,uint64_t timestamp)`            | Write the given timestamp to the given RX info struct.
`public inline static int `[`netdev_ieee802154_rx_info_get_timestamp`](#group__drivers__netdev__ieee802154_1gad68efd69046291c4711bdb3e0091e0d6)`(const `[`netdev_ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1ga0b8223bef9ea4a6db9bc641912dbc600)` * info,uint64_t * dest)`            | Get the timestamp to from the RX info.
`public void `[`netdev_ieee802154_reset`](#group__drivers__netdev__ieee802154_1gaddfee45b3aadecc4d06fc6dfbbfcad2f)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev)`            | Reset function for ieee802154 common fields.
`public int `[`netdev_ieee802154_get`](#group__drivers__netdev__ieee802154_1ga807edbc4a910648061ced6c8c15c4198)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * value,size_t max_len)`            | Fallback function for netdev IEEE 802.15.4 devices' _get function.
`public int `[`netdev_ieee802154_set`](#group__drivers__netdev__ieee802154_1gaec403a7dcf6581e11b95b75220c40a35)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,const void * value,size_t value_len)`            | Fallback function for netdev IEEE 802.15.4 devices' _set function.
`public int `[`netdev_ieee802154_dst_filter`](#group__drivers__netdev__ieee802154_1ga54625153bbd43002d0b64b1cd21aed2d)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev,const uint8_t * mhr)`            | This function compares destination address and pan id with addresses and pan id of the device.
`public inline static void `[`netdev_ieee802154_setup`](#group__drivers__netdev__ieee802154_1gadfa9cb4f2fa824cfc4a15bdc50c166a3)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev)`            | Configure the hardware address of a IEEE 802.15.4 devices.
`struct `[`netdev_ieee802154_t`](#structnetdev__ieee802154__t) | Extended structure to hold IEEE 802.15.4 driver state.
`struct `[`netdev_ieee802154_rx_info`](#structnetdev__ieee802154__rx__info) | Received packet status information for IEEE 802.15.4 radios.

## Members

#### `enum `[`netdev_ieee802154_cca_mode_t`](#group__drivers__netdev__ieee802154_1ga3c394bd0168c30eab6bc77ff9925d883) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NETDEV_IEEE802154_CCA_MODE_1            | Energy above threshold.
NETDEV_IEEE802154_CCA_MODE_2            | Carrier sense only.
NETDEV_IEEE802154_CCA_MODE_3            | Carrier sense with energy above threshold.
NETDEV_IEEE802154_CCA_MODE_4            | ALOHA.
NETDEV_IEEE802154_CCA_MODE_5            | UWB preamble sense based on the SHR of a frame.
NETDEV_IEEE802154_CCA_MODE_6            | UWB preamble sense based on the packet with the multiplexed preamble.

Option parameter to be used with [NETOPT_CCA_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a88c5d8f2807ffa20328ecd85eda79aef) to set the mode of the clear channel assessment (CCA) defined in Std 802.15.4.

#### `public inline static void `[`netdev_ieee802154_rx_info_set_timestamp`](#group__drivers__netdev__ieee802154_1ga6a547f6c8305c55681f624d4fda82a66)`(`[`netdev_ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1ga0b8223bef9ea4a6db9bc641912dbc600)` * dest,uint64_t timestamp)` 

Write the given timestamp to the given RX info struct.

This function is safe to call even when module `netdev_ieee802154_rx_timestamp` is not used. It will become a no-op then.

#### `public inline static int `[`netdev_ieee802154_rx_info_get_timestamp`](#group__drivers__netdev__ieee802154_1gad68efd69046291c4711bdb3e0091e0d6)`(const `[`netdev_ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1ga0b8223bef9ea4a6db9bc641912dbc600)` * info,uint64_t * dest)` 

Get the timestamp to from the RX info.

This function is safe to call even when module `netdev_ieee802154_rx_timestamp` is not used. It will become a no-op then.

#### Parameters
* `0` Success 

* `-1` No timestamp present or module `netdev_ieee802154_rx_timestamp` not used

#### `public void `[`netdev_ieee802154_reset`](#group__drivers__netdev__ieee802154_1gaddfee45b3aadecc4d06fc6dfbbfcad2f)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev)` 

Reset function for ieee802154 common fields.

Supposed to be used by netdev drivers to reset the ieee802154 fields when resetting the device

#### Parameters
* `dev` network device descriptor

#### `public int `[`netdev_ieee802154_get`](#group__drivers__netdev__ieee802154_1ga807edbc4a910648061ced6c8c15c4198)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * value,size_t max_len)` 

Fallback function for netdev IEEE 802.15.4 devices' _get function.

Supposed to be used by netdev drivers as default case.

#### Parameters
* `dev` network device descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximal amount of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
<0 on error

#### `public int `[`netdev_ieee802154_set`](#group__drivers__netdev__ieee802154_1gaec403a7dcf6581e11b95b75220c40a35)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,const void * value,size_t value_len)` 

Fallback function for netdev IEEE 802.15.4 devices' _set function.

Sets [netdev_ieee802154_t::pan](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t_1a2d809f49131c9d2e6f7f67370ada6dfe), [netdev_ieee802154_t::short_addr](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t_1a3a8b2b97d33e54cae8c5fb8decf49480), and [netdev_ieee802154_t::long_addr](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t_1a0b59bd3613a1db42dcdc0315a7092378) in device struct. Additionally [NETDEV_IEEE802154_SRC_MODE_LONG](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1gab1cf3ad8df0b67672f17cb4bb1952b33), [NETDEV_IEEE802154_RAW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1gaa3dab1e77dab41d437e0d0fe6dad316e) and, [NETDEV_IEEE802154_ACK_REQ](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__ieee802154_1gaad961df33373c4493127c6631a8b7245) in [netdev_ieee802154_t::flags](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t_1a9696c92033a8f663bc2e11239924ec35) can be set or unset.

The setting of [netdev_ieee802154_t::chan](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t_1a8b7b2c7732c22a9f3740555f6b3333c2) is omitted since the legality of its value can be very device specific and can't be checked in this function. Please set it in the [netdev_driver_t::set](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) function of your driver.

Be aware that this only manipulates the [netdev_ieee802154_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t) struct. Configuration to the device needs to be done in the [netdev_driver_t::set](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) function of the device driver (which should call this function as a fallback afterwards).

#### Parameters
* `dev` network device descriptor 

* `opt` option type 

* `value` value to set 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
<0 on error

#### `public int `[`netdev_ieee802154_dst_filter`](#group__drivers__netdev__ieee802154_1ga54625153bbd43002d0b64b1cd21aed2d)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev,const uint8_t * mhr)` 

This function compares destination address and pan id with addresses and pan id of the device.

this function is meant top be used by drivers that do not support address filtering in hw

> Deprecated: This function is currently deprecated and will be removed after Release 2022.01. Use [ieee802154_dst_filter](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga4635dcdecf24b59487d87a00f19f0c35) instead.

#### Parameters
* `dev` network device descriptor 

* `mhr` mac header

#### Returns
0 successful if packet is for the device 

#### Returns
1 fails if packet is not for the device or pan

#### `public inline static void `[`netdev_ieee802154_setup`](#group__drivers__netdev__ieee802154_1gadfa9cb4f2fa824cfc4a15bdc50c166a3)`(`[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` * dev)` 

Configure the hardware address of a IEEE 802.15.4 devices.

This will obtain a long and short address based on the netdev ID. The addresses is stored in the netdev's `long_addr` & `short_addr`. The caller must take care of writing them to the hardware.

the netdev registered itself with 

**See also**: [netdev_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga969385cab163f1626f6072c2636a252b)

#### Parameters
* `dev` Netdev to configure

# struct `netdev_ieee802154_t` 

```
struct netdev_ieee802154_t
  : public netdev
```  

Extended structure to hold IEEE 802.15.4 driver state.

Supposed to be extended by driver implementations. The extended structure should contain all variable driver state.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structnetdev__ieee802154__t_1a6840d8f87cf087deb58b1ff7334ea622) | [netdev_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4) base class

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structnetdev__ieee802154__t_1a6840d8f87cf087deb58b1ff7334ea622) 

[netdev_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4) base class

# struct `netdev_ieee802154_rx_info` 

Received packet status information for IEEE 802.15.4 radios.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`rssi`](#structnetdev__ieee802154__rx__info_1ad2590612d2d95563ce63e324064e6cdc) | RSSI of a received frame in dBm.
`public uint8_t `[`lqi`](#structnetdev__ieee802154__rx__info_1acfdb67418f005c794e17caa86cdcbf6a) | LQI of a received frame.
`public uint8_t `[`flags`](#structnetdev__ieee802154__rx__info_1ab2ecc41015ed3442483cf2e1e8cc87e1) | Flags e.g.

## Members

#### `public int16_t `[`rssi`](#structnetdev__ieee802154__rx__info_1ad2590612d2d95563ce63e324064e6cdc) 

RSSI of a received frame in dBm.

#### `public uint8_t `[`lqi`](#structnetdev__ieee802154__rx__info_1acfdb67418f005c794e17caa86cdcbf6a) 

LQI of a received frame.

#### `public uint8_t `[`flags`](#structnetdev__ieee802154__rx__info_1ab2ecc41015ed3442483cf2e1e8cc87e1) 

Flags e.g.

used to mark other fields as valid

