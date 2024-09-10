---
title: api-pkg_nimble_autoadv.md
description: api-pkg_nimble_autoadv.md
---
# group `pkg_nimble_autoadv` 

Module for automated bluetooth advertising.

Advertising is restarted on disconnect events automatically. Defaults to the following characteristics:

* General discoverable mode (BLE_GAP_DISC_MODE_GEN)

* Undirected connectable mode (BLE_GAP_CONN_MODE_UND)

* No expiration (BLE_HS_FOREVER)

* No name

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_NIMBLE_AUTOADV_DEVICE_NAME`](#group__pkg__nimble__autoadv_1ga4b2115e7cb4d082e2fb626d6d94b0a33)            | Name of the device for the advertising procedure.
`define `[`CONFIG_NIMBLE_AUTOADV_START_MANUALLY`](#group__pkg__nimble__autoadv_1gabc0a3d631bae5cc99864fb41d4729b8e)            | If an application is calling functions from nimble, e.g.
`define `[`CONFIG_NIMBLE_AUTOADV_FLAG_FIELD`](#group__pkg__nimble__autoadv_1ga563c6e464aeaf1dd5c8f329eda9cf9b6)            | Include the advetisement flag field.
`public void `[`nimble_autoadv_init`](#group__pkg__nimble__autoadv_1ga88ba7b4a67db4fea4a838cde54d3738c)`(const `[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)`            | Initialize autoadv module.
`public void `[`nimble_autoadv_cfg_update`](#group__pkg__nimble__autoadv_1ga3809444942917c03e9ce897461f3bea1)`(`[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)`            | Set struct for additional arguments specifying the particulars of the advertising procedure.
`public void `[`nimble_autoadv_get_cfg`](#group__pkg__nimble__autoadv_1gae291e65de374474efe58b56847503f85)`(`[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)`            | Gets struct for additional arguments specifying the particulars of the advertising procedure.
`public int `[`nimble_autoadv_add_field`](#group__pkg__nimble__autoadv_1ga4c2bd7362695feaa11890c0c7b924bfa)`(uint8_t type,const void * data,size_t data_len)`            | Add a new field to the given advertising data.
`public void `[`nimble_autoadv_set_gap_cb`](#group__pkg__nimble__autoadv_1gabccf2bc3058eaeb708e4b4943fbe1a7b)`(ble_gap_event_fn * cb,void * cb_arg)`            | Set the callback for gap events.
`public void `[`nimble_autoadv_start`](#group__pkg__nimble__autoadv_1gad1295889f482fd94914461b81913c1f2)`(ble_addr_t * addr)`            | Start the automated advertising procedure.
`public void `[`nimble_autoadv_stop`](#group__pkg__nimble__autoadv_1gab39658cc5f06be025fccd7d4128f8b8e)`(void)`            | Stop the automated advertising procedure.
`public void `[`nimble_autoadv_reset`](#group__pkg__nimble__autoadv_1ga393d653d2ab3e8705ecb640198e27770)`(`[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)`            | Reset all data regarding the advertising process.
`public int `[`nimble_autoadv_get_adv_instance`](#group__pkg__nimble__autoadv_1ga16e974c66a74888d7ef80a1a2dd58b76)`(void)`            | Return the advertisement instance.
`struct `[`nimble_autoadv_cfg_t`](#structnimble__autoadv__cfg__t) | Parameter set used to configure accepting connections (advertising)

## Members

#### `define `[`CONFIG_NIMBLE_AUTOADV_DEVICE_NAME`](#group__pkg__nimble__autoadv_1ga4b2115e7cb4d082e2fb626d6d94b0a33) 

Name of the device for the advertising procedure.

If this is not defined, it will be defined as NULL, resulting in not configuring a name at all.

#### `define `[`CONFIG_NIMBLE_AUTOADV_START_MANUALLY`](#group__pkg__nimble__autoadv_1gabc0a3d631bae5cc99864fb41d4729b8e) 

If an application is calling functions from nimble, e.g.

ble_svc_gap_device_name_set(), CONFIG_NIMBLE_AUTOADV_START_MANUALLY should be set to 1 and then the application should call nimble_autoadv_start(NULL) after all of its nimble calls to prevent errors like BLE_HS_EBUSY.

Defined as 0 by default.

#### `define `[`CONFIG_NIMBLE_AUTOADV_FLAG_FIELD`](#group__pkg__nimble__autoadv_1ga563c6e464aeaf1dd5c8f329eda9cf9b6) 

Include the advetisement flag field.

If this is not defined, it will be defined as 1, resulting in including the field. The Flags data type shall be included when any of the Flag bits are non-zero and the advertising packet is connectable, otherwise the Flags data type may be omitted.

#### `public void `[`nimble_autoadv_init`](#group__pkg__nimble__autoadv_1ga88ba7b4a67db4fea4a838cde54d3738c)`(const `[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)` 

Initialize autoadv module.

#### Parameters
* `cfg` struct to copy current configuration into

#### `public void `[`nimble_autoadv_cfg_update`](#group__pkg__nimble__autoadv_1ga3809444942917c03e9ce897461f3bea1)`(`[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)` 

Set struct for additional arguments specifying the particulars of the advertising procedure.

Uses memcpy internally.

If there is an active advertising process, it will be restarted.

#### Parameters
* `cfg` struct with customized additional arguments

#### `public void `[`nimble_autoadv_get_cfg`](#group__pkg__nimble__autoadv_1gae291e65de374474efe58b56847503f85)`(`[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)` 

Gets struct for additional arguments specifying the particulars of the advertising procedure.

Uses memcpy internally.

#### Parameters
* `cfg` struct to copy current configuration into

#### `public int `[`nimble_autoadv_add_field`](#group__pkg__nimble__autoadv_1ga4c2bd7362695feaa11890c0c7b924bfa)`(uint8_t type,const void * data,size_t data_len)` 

Add a new field to the given advertising data.

If there is an active advertising process, it will be restarted.

#### Parameters
* `type` field type to add 

* `data` payload for the field 

* `data_len` length of the payload in bytes

#### Returns
BLUETIL_AD_OK if the new field was added 

#### Returns
BLUETIL_AD_NOMEM if there is not enough space to write add field

#### `public void `[`nimble_autoadv_set_gap_cb`](#group__pkg__nimble__autoadv_1gabccf2bc3058eaeb708e4b4943fbe1a7b)`(ble_gap_event_fn * cb,void * cb_arg)` 

Set the callback for gap events.

Callback is used for the logic when to start the advertising procedure.

If there is an active advertising process, it will be restarted.

#### Parameters
* `cb` The callback to associate with this advertising procedure. If advertising ends, the event is reported through this callback. If advertising results in a connection, the connection inherits this callback as its event-reporting mechanism.

* `cb_arg` The optional argument to pass to the callback function.

#### `public void `[`nimble_autoadv_start`](#group__pkg__nimble__autoadv_1gad1295889f482fd94914461b81913c1f2)`(ble_addr_t * addr)` 

Start the automated advertising procedure.

Needs to be called manually when CONFIG_NIMBLE_AUTOADV_START_MANUALLY was
     set to true and after every call of nimble_autoadv_stop() to start
     advertising again.

#### Parameters
* `addr` addr for directed advertisement, can be NULL

#### `public void `[`nimble_autoadv_stop`](#group__pkg__nimble__autoadv_1gab39658cc5f06be025fccd7d4128f8b8e)`(void)` 

Stop the automated advertising procedure.

After calling this, you have to call nimble_autoadv_start(NULL) manually to restart the process.

#### `public void `[`nimble_autoadv_reset`](#group__pkg__nimble__autoadv_1ga393d653d2ab3e8705ecb640198e27770)`(`[`nimble_autoadv_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoadv.md#structnimble__autoadv__cfg__t)` * cfg)` 

Reset all data regarding the advertising process.

#### Parameters
* `cfg` struct to copy current configuration into

#### `public int `[`nimble_autoadv_get_adv_instance`](#group__pkg__nimble__autoadv_1ga16e974c66a74888d7ef80a1a2dd58b76)`(void)` 

Return the advertisement instance.

The advertisement instance is set automatically by the build-system

#### Returns
The advertisement instance

# struct `nimble_autoadv_cfg_t` 

Parameter set used to configure accepting connections (advertising)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`adv_itvl_ms`](#structnimble__autoadv__cfg__t_1ab086ab331eff76213aeb653b884a3e7a) | advertising interval [ms]
`public int32_t `[`adv_duration_ms`](#structnimble__autoadv__cfg__t_1aff8209fed06df9f1c8df38d3f0ea6508) | advertising interval [ms]
`public uint8_t `[`flags`](#structnimble__autoadv__cfg__t_1a32a64408a547cfb1e93d850fe04e946a) | advertising flags
`public uint8_t `[`phy`](#structnimble__autoadv__cfg__t_1ae95f44d8392ce73fb4f08089c8328bd0) | PHY mode.
`public int8_t `[`tx_power`](#structnimble__autoadv__cfg__t_1a3d3d117e809864c44efd829b74124e2a) | specify TX power to be used
`public uint8_t `[`channel_map`](#structnimble__autoadv__cfg__t_1a154d1abf99bffa86e6031fd556bbc5eb) | specify custom channel map
`public uint8_t `[`own_addr_type`](#structnimble__autoadv__cfg__t_1a60eb925865058535c3484f05ce158b38) | specify our own address type to use
`public uint8_t `[`filter_policy`](#structnimble__autoadv__cfg__t_1a4ff2c49b5ee63f9f86408ae2e029cd16) | Advertising Filter policy.

## Members

#### `public uint32_t `[`adv_itvl_ms`](#structnimble__autoadv__cfg__t_1ab086ab331eff76213aeb653b884a3e7a) 

advertising interval [ms]

#### `public int32_t `[`adv_duration_ms`](#structnimble__autoadv__cfg__t_1aff8209fed06df9f1c8df38d3f0ea6508) 

advertising interval [ms]

#### `public uint8_t `[`flags`](#structnimble__autoadv__cfg__t_1a32a64408a547cfb1e93d850fe04e946a) 

advertising flags

#### `public uint8_t `[`phy`](#structnimble__autoadv__cfg__t_1ae95f44d8392ce73fb4f08089c8328bd0) 

PHY mode.

#### `public int8_t `[`tx_power`](#structnimble__autoadv__cfg__t_1a3d3d117e809864c44efd829b74124e2a) 

specify TX power to be used

#### `public uint8_t `[`channel_map`](#structnimble__autoadv__cfg__t_1a154d1abf99bffa86e6031fd556bbc5eb) 

specify custom channel map

#### `public uint8_t `[`own_addr_type`](#structnimble__autoadv__cfg__t_1a60eb925865058535c3484f05ce158b38) 

specify our own address type to use

#### `public uint8_t `[`filter_policy`](#structnimble__autoadv__cfg__t_1a4ff2c49b5ee63f9f86408ae2e029cd16) 

Advertising Filter policy.

