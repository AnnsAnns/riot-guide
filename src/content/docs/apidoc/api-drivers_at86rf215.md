---
title: api-drivers_at86rf215.md
description: api-drivers_at86rf215.md
---
# group `drivers_at86rf215` 

This module contains a driver for the Atmel AT86RF215 radio.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`AT86RF215_MAX_PKT_LENGTH`](#group__drivers__at86rf215_1ga62c297a8dae8cb2e69f4ff44fff26b45)            | Maximum possible packet size in byte.
`enum `[`@156`](#group__drivers__at86rf215_1ga3153161a0d848ec64bf4895db3cf1be4)            | MR-O-QPSK chip rates (kChip/s)
`enum `[`@157`](#group__drivers__at86rf215_1ga8feb5a39a55448c86e0dfc20f53a6c1d)            | 
`public void `[`at86rf215_setup`](#group__drivers__at86rf215_1gae09354791d69df538dc03ac3c8e6e3ed)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev_09,`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev_24,const `[`at86rf215_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac1d1d5a301cdea84b8abec87b3f19934)` * params,uint8_t index)`            | Setup an AT86RF215 based device state.
`public void `[`at86rf215_reset_and_cfg`](#group__drivers__at86rf215_1ga0e5da207a9e80823906fad4f006b5b13)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Trigger a hardware reset and configure radio with default values.
`public void `[`at86rf215_reset`](#group__drivers__at86rf215_1gaf57a777ba1e3d2c88d150d2bbe5cdb2d)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Trigger a hardware reset, configuration is retained.
`public uint16_t `[`at86rf215_get_addr_short`](#group__drivers__at86rf215_1ga156ed908e18bc4eb83507582610a4f55)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)`            | Get the short address of the given device form multi address filter.
`public void `[`at86rf215_set_addr_short`](#group__drivers__at86rf215_1ga0b632bc4be1395a881067957bf99107e)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter,uint16_t addr)`            | Set the short address of the given device to multi address filter.
`public bool `[`at86rf215_get_framefilter_enabled`](#group__drivers__at86rf215_1gaebcf1a6d36852cd9c2f75d606c33ab5f)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)`            | Get whether a frame filter is enabled or not.
`public void `[`at86rf215_disable_framefilter`](#group__drivers__at86rf215_1ga3a7f9a5127e21de2e1f5391bc820cd1c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)`            | Enables a frame filter.
`public void `[`at86rf215_enable_framefilter`](#group__drivers__at86rf215_1gae05a6fae7663c886d6599a79301cefd4)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)`            | Disables a frame filter.
`public uint64_t `[`at86rf215_get_addr_long`](#group__drivers__at86rf215_1ga1168d749a770582861ce506b6e84082d)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the configured long address of the given device.
`public void `[`at86rf215_set_addr_long`](#group__drivers__at86rf215_1ga2b4ccbe76dc674140cf389cd94b14701)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint64_t addr)`            | Set the long address of the given device.
`public uint8_t `[`at86rf215_get_chan`](#group__drivers__at86rf215_1ga01e6b26481ecc3e1bddc7edc2d4aeb24)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the configured channel number of the given device.
`public void `[`at86rf215_set_chan`](#group__drivers__at86rf215_1ga59a5961f552c97cf03dad0e43ea4b057)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint16_t chan)`            | Set the channel number of the given device.
`public uint16_t `[`at86rf215_get_pan`](#group__drivers__at86rf215_1ga7114bf17a36e9cceced6f0ae052d32ba)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)`            | Get the configured PAN ID of the given device from multi address filter.
`public void `[`at86rf215_set_pan`](#group__drivers__at86rf215_1gaa04badb14e036bbe12c5ae22035e1d39)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter,uint16_t pan)`            | Set the PAN ID of the given address filter.
`public int16_t `[`at86rf215_get_txpower`](#group__drivers__at86rf215_1ga96272d18647b6e92dc024bdd9dba3eb1)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the configured transmission power of the given device [in dBm].
`public void `[`at86rf215_set_txpower`](#group__drivers__at86rf215_1gaee53e06f956e7fa5d9a52304c8e4fcf9)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,int16_t txpower)`            | Set the transmission power of the given device [in dBm].
`public int8_t `[`at86rf215_get_cca_threshold`](#group__drivers__at86rf215_1gad2e88c56400f039fa264b879c805d456)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the CCA threshold value.
`public void `[`at86rf215_set_cca_threshold`](#group__drivers__at86rf215_1gab1a570e1bf86e11a32ba2fdd7887ce1f)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,int8_t value)`            | Set the CCA threshold value.
`public int8_t `[`at86rf215_get_ed_level`](#group__drivers__at86rf215_1ga6e6a831cd15af7235d10ae70260b8a90)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the latest ED level measurement.
`public void `[`at86rf215_set_option`](#group__drivers__at86rf215_1ga3ab35da2faa76e15cc364d50f92e0d4a)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint16_t option,bool state)`            | Enable or disable driver specific options.
`public void `[`at86rf215_set_trim`](#group__drivers__at86rf215_1gabbf7472b0e6cab6289fd2a1e3e7a68f7)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t trim)`            | Set crystal oscillator trim value.
`public void `[`at86rf215_set_clock_output`](#group__drivers__at86rf215_1ga9dae643c465be8cf608fef4c57d84fcc)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,`[`at86rf215_clko_cur_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1ga8779ea70d4af12994a25086799d1d55f)` cur,`[`at86rf215_clko_freq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1ga87dd47f8929892ecb990ffe72aff9e16)` freq)`            | Configure the Clock Output pin.
`public ssize_t `[`at86rf215_send`](#group__drivers__at86rf215_1ga0131845eed881ed5bc84fc04aef7653a)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,const void * data,size_t len)`            | Convenience function for simply sending data.
`public int `[`at86rf215_tx_prepare`](#group__drivers__at86rf215_1gaa5a50f19f4a46b5111b0ce1565e7a097)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Prepare for sending of data.
`public size_t `[`at86rf215_tx_load`](#group__drivers__at86rf215_1ga3f2486046bdd72399f4a9ebdf695b226)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,const uint8_t * data,size_t len,size_t offset)`            | Load chunks of data into the transmit buffer of the given device.
`public int `[`at86rf215_tx_exec`](#group__drivers__at86rf215_1ga2d39e98bf01599721b24411825b0c821)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Trigger sending of data previously loaded into transmit buffer.
`public void `[`at86rf215_tx_abort`](#group__drivers__at86rf215_1ga671d1387432fefe936c7df1961f295a0)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Abort sending of data previously loaded into transmit buffer.
`public void `[`at86rf215_tx_done`](#group__drivers__at86rf215_1gaa14b6e8050760d0fc2cc340590cab2ac)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Signal that the transfer of the frame (and optional ACK reception) has finished.
`public bool `[`at86rf215_cca`](#group__drivers__at86rf215_1ga2b7931128f448606be8a5c071e7d384c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Perform one manual channel clear assessment (CCA)
`public int `[`at86rf215_enable_batmon`](#group__drivers__at86rf215_1ga00c8893568219506e8069975bcd8b4a4)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,unsigned voltage)`            | Generate an interrupt if supply voltage drops below the configured threshold.
`public void `[`at86rf215_disable_batmon`](#group__drivers__at86rf215_1gaeb46e8a9184cdc3c6b28e87781d6b040)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Disable the Battery Monitor interrupt.
`struct `[`at86rf215_params`](#structat86rf215__params) | struct holding all params needed for device initialization
`struct `[`at86rf215`](#structat86rf215) | Device descriptor for AT86RF215 radio devices.

## Members

#### `define `[`AT86RF215_MAX_PKT_LENGTH`](#group__drivers__at86rf215_1ga62c297a8dae8cb2e69f4ff44fff26b45) 

Maximum possible packet size in byte.

#### `enum `[`@156`](#group__drivers__at86rf215_1ga3153161a0d848ec64bf4895db3cf1be4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AT86RF215_FCHIP_100            | 
AT86RF215_FCHIP_200            | 
AT86RF215_FCHIP_1000            | 
AT86RF215_FCHIP_2000            | 

MR-O-QPSK chip rates (kChip/s)

#### `enum `[`@157`](#group__drivers__at86rf215_1ga8feb5a39a55448c86e0dfc20f53a6c1d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AT86RF215_MODE_LEGACY_OQPSK            | 
AT86RF215_MODE_MR_OQPSK            | 
AT86RF215_MODE_MR_OFDM            | 
AT86RF215_MODE_MR_FSK            | 

#### `public void `[`at86rf215_setup`](#group__drivers__at86rf215_1gae09354791d69df538dc03ac3c8e6e3ed)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev_09,`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev_24,const `[`at86rf215_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac1d1d5a301cdea84b8abec87b3f19934)` * params,uint8_t index)` 

Setup an AT86RF215 based device state.

#### Parameters
* `dev_09` sub-GHz device descriptor 

* `dev_24` 2.4 GHz device descriptor 

* `params` parameters for device initialization 

* `index` index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### `public void `[`at86rf215_reset_and_cfg`](#group__drivers__at86rf215_1ga0e5da207a9e80823906fad4f006b5b13)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Trigger a hardware reset and configure radio with default values.

#### Parameters
* `dev` device to configure

#### `public void `[`at86rf215_reset`](#group__drivers__at86rf215_1gaf57a777ba1e3d2c88d150d2bbe5cdb2d)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Trigger a hardware reset, configuration is retained.

#### Parameters
* `dev` device to reset

#### `public uint16_t `[`at86rf215_get_addr_short`](#group__drivers__at86rf215_1ga156ed908e18bc4eb83507582610a4f55)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)` 

Get the short address of the given device form multi address filter.

#### Parameters
* `dev` device to read from 

* `filter` address filter to read

#### Returns
the currently set (2-byte) short address

#### `public void `[`at86rf215_set_addr_short`](#group__drivers__at86rf215_1ga0b632bc4be1395a881067957bf99107e)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter,uint16_t addr)` 

Set the short address of the given device to multi address filter.

#### Parameters
* `dev` device to write to 

* `filter` (1-byte) address filter to set 

* `addr` (2-byte) short address to set

#### `public bool `[`at86rf215_get_framefilter_enabled`](#group__drivers__at86rf215_1gaebcf1a6d36852cd9c2f75d606c33ab5f)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)` 

Get whether a frame filter is enabled or not.

#### Parameters
* `dev` device to read from 

* `filter` (1-byte) filter to get

#### Returns
(bool) the current state of the filter

#### `public void `[`at86rf215_disable_framefilter`](#group__drivers__at86rf215_1ga3a7f9a5127e21de2e1f5391bc820cd1c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)` 

Enables a frame filter.

#### Parameters
* `dev` device to read from 

* `filter` (1-byte) filter to get

#### `public void `[`at86rf215_enable_framefilter`](#group__drivers__at86rf215_1gae05a6fae7663c886d6599a79301cefd4)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)` 

Disables a frame filter.

#### Parameters
* `dev` device to read from 

* `filter` (1-byte) filter to get

#### `public uint64_t `[`at86rf215_get_addr_long`](#group__drivers__at86rf215_1ga1168d749a770582861ce506b6e84082d)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the configured long address of the given device.

#### Parameters
* `dev` device to read from

#### Returns
the currently set (8-byte) long address

#### `public void `[`at86rf215_set_addr_long`](#group__drivers__at86rf215_1ga2b4ccbe76dc674140cf389cd94b14701)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint64_t addr)` 

Set the long address of the given device.

#### Parameters
* `dev` device to write to 

* `addr` (8-byte) long address to set

#### `public uint8_t `[`at86rf215_get_chan`](#group__drivers__at86rf215_1ga01e6b26481ecc3e1bddc7edc2d4aeb24)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the configured channel number of the given device.

#### Parameters
* `dev` device to read from

#### Returns
the currently set channel number

#### `public void `[`at86rf215_set_chan`](#group__drivers__at86rf215_1ga59a5961f552c97cf03dad0e43ea4b057)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint16_t chan)` 

Set the channel number of the given device.

#### Parameters
* `dev` device to write to 

* `chan` channel number to set

#### `public uint16_t `[`at86rf215_get_pan`](#group__drivers__at86rf215_1ga7114bf17a36e9cceced6f0ae052d32ba)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter)` 

Get the configured PAN ID of the given device from multi address filter.

#### Parameters
* `dev` device to read from 

* `filter` address filter to read from

#### Returns
the currently set PAN ID

#### `public void `[`at86rf215_set_pan`](#group__drivers__at86rf215_1gaa04badb14e036bbe12c5ae22035e1d39)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t filter,uint16_t pan)` 

Set the PAN ID of the given address filter.

#### Parameters
* `dev` device to write to 

* `filter` address filter to set 

* `pan` PAN ID to set

#### `public int16_t `[`at86rf215_get_txpower`](#group__drivers__at86rf215_1ga96272d18647b6e92dc024bdd9dba3eb1)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the configured transmission power of the given device [in dBm].

#### Parameters
* `dev` device to read from

#### Returns
configured transmission power in dBm

#### `public void `[`at86rf215_set_txpower`](#group__drivers__at86rf215_1gaee53e06f956e7fa5d9a52304c8e4fcf9)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,int16_t txpower)` 

Set the transmission power of the given device [in dBm].

If the device does not support the exact dBm value given, it will set a value as close as possible to the given value. If the given value is larger or lower then the maximal or minimal possible value, the min or max value is set, respectively.

#### Parameters
* `dev` device to write to 

* `txpower` transmission power in dBm

#### `public int8_t `[`at86rf215_get_cca_threshold`](#group__drivers__at86rf215_1gad2e88c56400f039fa264b879c805d456)`(const `[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the CCA threshold value.

#### Parameters
* `dev` device to read value from

#### Returns
the current CCA threshold value

#### `public void `[`at86rf215_set_cca_threshold`](#group__drivers__at86rf215_1gab1a570e1bf86e11a32ba2fdd7887ce1f)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,int8_t value)` 

Set the CCA threshold value.

#### Parameters
* `dev` device to write to 

* `value` the new CCA threshold value

#### `public int8_t `[`at86rf215_get_ed_level`](#group__drivers__at86rf215_1ga6e6a831cd15af7235d10ae70260b8a90)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the latest ED level measurement.

#### Parameters
* `dev` device to read value from

#### Returns
the last ED level

#### `public void `[`at86rf215_set_option`](#group__drivers__at86rf215_1ga3ab35da2faa76e15cc364d50f92e0d4a)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint16_t option,bool state)` 

Enable or disable driver specific options.

#### Parameters
* `dev` device to set/clear option flag for 

* `option` option to enable/disable 

* `state` true for enable, false for disable

#### `public void `[`at86rf215_set_trim`](#group__drivers__at86rf215_1gabbf7472b0e6cab6289fd2a1e3e7a68f7)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t trim)` 

Set crystal oscillator trim value.

An internal capacitance array is connected to the
     crystal oscillator pins TCXO and XTAL2.

     Each increment of the trim value adds 0.3pF capacitance
     to the oscillator circuit.

     To trim a board, enable the clock output with
     @ref at86rf215_set_clock_output and connect a frequency
     counter to the clock output pin.
     Then adjust the trim value until it the measured frequency
     closely matches the configured output frequency.

     It is recommended to use a 26 MHz output frequency for the
     test as this is the raw frequency of the external oscillator.

     The resulting trim value must then be stored in a persistent
     memory area of the board to be set via @ref CONFIG_AT86RF215_TRIM_VAL

#### Parameters
* `dev` device to configure 

* `trim` trim value

#### `public void `[`at86rf215_set_clock_output`](#group__drivers__at86rf215_1ga9dae643c465be8cf608fef4c57d84fcc)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,`[`at86rf215_clko_cur_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1ga8779ea70d4af12994a25086799d1d55f)` cur,`[`at86rf215_clko_freq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1ga87dd47f8929892ecb990ffe72aff9e16)` freq)` 

Configure the Clock Output pin.

#### Parameters
* `dev` device to configure 

* `cur` Clock output current 

* `freq` Clock output frequency

#### `public ssize_t `[`at86rf215_send`](#group__drivers__at86rf215_1ga0131845eed881ed5bc84fc04aef7653a)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,const void * data,size_t len)` 

Convenience function for simply sending data.

This function ignores the PRELOADING option

#### Parameters
* `dev` device to use for sending 

* `data` data to send (must include IEEE802.15.4 header) 

* `len` length of `data`

#### Returns
number of bytes that were actually send 

#### Returns
or negative error code

#### `public int `[`at86rf215_tx_prepare`](#group__drivers__at86rf215_1gaa5a50f19f4a46b5111b0ce1565e7a097)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Prepare for sending of data.

This function puts the given device into the TX state, so no receiving of data is possible after it was called.

#### Parameters
* `dev` device to prepare for sending

#### Returns
0 on success, error otherwise

#### `public size_t `[`at86rf215_tx_load`](#group__drivers__at86rf215_1ga3f2486046bdd72399f4a9ebdf695b226)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,const uint8_t * data,size_t len,size_t offset)` 

Load chunks of data into the transmit buffer of the given device.

#### Parameters
* `dev` device to write data to 

* `data` buffer containing the data to load 

* `len` number of bytes in `buffer`

* `offset` offset used when writing data to internal buffer

#### Returns
offset + number of bytes written

#### `public int `[`at86rf215_tx_exec`](#group__drivers__at86rf215_1ga2d39e98bf01599721b24411825b0c821)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Trigger sending of data previously loaded into transmit buffer.

#### Parameters
* `dev` device to trigger

#### Returns
0 on success, error otherwise

#### `public void `[`at86rf215_tx_abort`](#group__drivers__at86rf215_1ga671d1387432fefe936c7df1961f295a0)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Abort sending of data previously loaded into transmit buffer.

#### Parameters
* `dev` device to abort TX on

#### `public void `[`at86rf215_tx_done`](#group__drivers__at86rf215_1gaa14b6e8050760d0fc2cc340590cab2ac)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Signal that the transfer of the frame (and optional ACK reception) has finished.

Sets the radio in RX mode.

#### Parameters
* `dev` device to use

#### `public bool `[`at86rf215_cca`](#group__drivers__at86rf215_1ga2b7931128f448606be8a5c071e7d384c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Perform one manual channel clear assessment (CCA)

The CCA mode and threshold level depends on the current transceiver settings.

#### Parameters
* `dev` device to use

#### Returns
true if channel is determined clear 

#### Returns
false if channel is determined busy

#### `public int `[`at86rf215_enable_batmon`](#group__drivers__at86rf215_1ga00c8893568219506e8069975bcd8b4a4)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,unsigned voltage)` 

Generate an interrupt if supply voltage drops below the configured threshold.

#### Parameters
* `dev` device to configure 

* `voltage` Threshold voltage in mV

#### Returns
0 on success, error otherwise

#### `public void `[`at86rf215_disable_batmon`](#group__drivers__at86rf215_1gaeb46e8a9184cdc3c6b28e87781d6b040)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Disable the Battery Monitor interrupt.

#### Parameters
* `dev` device to configure

# struct `at86rf215_params` 

struct holding all params needed for device initialization

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structat86rf215__params_1a4eb7ac99718833391076bf6217330cef) | SPI bus the device is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structat86rf215__params_1a7bc3ae6035ae2b9e6bb625e6fe2b6272) | SPI clock speed to use.
`public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structat86rf215__params_1afca222882b528e438bbafeb2ee50b740) | GPIO pin connected to chip select.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structat86rf215__params_1aade4a9cca9a2e60efb6dfcf91ec2ad91) | GPIO pin connected to the interrupt pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structat86rf215__params_1a80e97af2e5a982abb14fa94dcc399c3b) | GPIO pin connected to the reset pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structat86rf215__params_1a4eb7ac99718833391076bf6217330cef) 

SPI bus the device is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structat86rf215__params_1a7bc3ae6035ae2b9e6bb625e6fe2b6272) 

SPI clock speed to use.

#### `public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structat86rf215__params_1afca222882b528e438bbafeb2ee50b740) 

GPIO pin connected to chip select.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structat86rf215__params_1aade4a9cca9a2e60efb6dfcf91ec2ad91) 

GPIO pin connected to the interrupt pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structat86rf215__params_1a80e97af2e5a982abb14fa94dcc399c3b) 

GPIO pin connected to the reset pin.

# struct `at86rf215` 

```
struct at86rf215
  : public netdev_ieee802154_t
```  

Device descriptor for AT86RF215 radio devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structat86rf215_1af978dd0c3764787e04a3cbe0dec5c2f5) | netdev parent struct
`public `[`at86rf215_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac1d1d5a301cdea84b8abec87b3f19934)` `[`params`](#structat86rf215_1a10b9f6db84bb1b805fdb4bfb3620c131) | parameters for initialization
`public struct `[`at86rf215`](#structat86rf215)` * `[`sibling`](#structat86rf215_1ae274d36cec0b5230be10ae50f9d35b76) | The other radio.
`public const `[`at86rf215_RF_regs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gaf05edb40fb5d72079a20dfd7afa41455)` * `[`RF`](#structat86rf215_1a09ea1e74f3402879346a7e82329607b4) | Radio Frontend Registers.
`public const `[`at86rf215_BBC_regs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1ga4ea361534dc4fda00153c7b6ffffbb26)` * `[`BBC`](#structat86rf215_1abf64fd0e342e9ed1df99a3ce75631a1e) | Baseband Registers.
`public `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` `[`timer`](#structat86rf215_1a9ccb4ecb6f3ebdb927d81ff151b761ae) | timer for ACK & CSMA timeout
`public uint32_t `[`ack_timeout_usec`](#structat86rf215_1a27f04f560161ee8e033adf68378e9e27) | time to wait before retransmission in µs
`public uint32_t `[`csma_backoff_period`](#structat86rf215_1a097bed4b2be26af094e1068f24b78ddb) | CSMA Backoff period.
`public uint16_t `[`flags`](#structat86rf215_1a312a552477e85218b8f6f96a0082f61a) | Device specific flags.
`public uint16_t `[`num_chans`](#structat86rf215_1aaea182922ed8f9b9c943ec4ee1cd0863) | Number of legal channel at current modulation.
`public uint16_t `[`tx_frame_len`](#structat86rf215_1ad7d565870322a34b2ddb35eb1f90c2c8) | length of the current TX frame
`public uint8_t `[`timeout`](#structat86rf215_1ae46ea9dd0f653dc08af230a14ef5cfb2) | indicates which timeout was reached
`public uint8_t `[`state`](#structat86rf215_1afaf5ba2ebd2bba60583fff36b56c6945) | current state of the radio
`public uint8_t `[`retries_max`](#structat86rf215_1acf093c322f91d258237c3ea9d2a6a7dc) | number of retries until ACK is received
`public uint8_t `[`retries`](#structat86rf215_1a576a285ee0ae7fe899c0ba2789e6512c) | retries left
`public uint8_t `[`csma_retries_max`](#structat86rf215_1a4ac18d357632f5ab2cd4153143b23dad) | number of retries until channel is clear
`public uint8_t `[`csma_retries`](#structat86rf215_1a633f8fb62fb8ef47df203a1e163c7d3d) | CSMA retries left.
`public uint8_t `[`csma_minbe`](#structat86rf215_1aad93fef7e62a3d50f028a345a93f07f0) | CSMA minimum backoff exponent.
`public uint8_t `[`csma_maxbe`](#structat86rf215_1a1cdecd720b5fc9b755fa30fadbc922bc) | CSMA maximum backoff exponent.
`public int8_t `[`csma_ed`](#structat86rf215_1a8e0410a485f6a4d8b138f643287fee6c) | CSMA energy detect threshold.

## Members

#### `public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structat86rf215_1af978dd0c3764787e04a3cbe0dec5c2f5) 

netdev parent struct

#### `public `[`at86rf215_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac1d1d5a301cdea84b8abec87b3f19934)` `[`params`](#structat86rf215_1a10b9f6db84bb1b805fdb4bfb3620c131) 

parameters for initialization

#### `public struct `[`at86rf215`](#structat86rf215)` * `[`sibling`](#structat86rf215_1ae274d36cec0b5230be10ae50f9d35b76) 

The other radio.

#### `public const `[`at86rf215_RF_regs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gaf05edb40fb5d72079a20dfd7afa41455)` * `[`RF`](#structat86rf215_1a09ea1e74f3402879346a7e82329607b4) 

Radio Frontend Registers.

#### `public const `[`at86rf215_BBC_regs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1ga4ea361534dc4fda00153c7b6ffffbb26)` * `[`BBC`](#structat86rf215_1abf64fd0e342e9ed1df99a3ce75631a1e) 

Baseband Registers.

#### `public `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` `[`timer`](#structat86rf215_1a9ccb4ecb6f3ebdb927d81ff151b761ae) 

timer for ACK & CSMA timeout

#### `public uint32_t `[`ack_timeout_usec`](#structat86rf215_1a27f04f560161ee8e033adf68378e9e27) 

time to wait before retransmission in µs

#### `public uint32_t `[`csma_backoff_period`](#structat86rf215_1a097bed4b2be26af094e1068f24b78ddb) 

CSMA Backoff period.

#### `public uint16_t `[`flags`](#structat86rf215_1a312a552477e85218b8f6f96a0082f61a) 

Device specific flags.

#### `public uint16_t `[`num_chans`](#structat86rf215_1aaea182922ed8f9b9c943ec4ee1cd0863) 

Number of legal channel at current modulation.

#### `public uint16_t `[`tx_frame_len`](#structat86rf215_1ad7d565870322a34b2ddb35eb1f90c2c8) 

length of the current TX frame

#### `public uint8_t `[`timeout`](#structat86rf215_1ae46ea9dd0f653dc08af230a14ef5cfb2) 

indicates which timeout was reached

#### `public uint8_t `[`state`](#structat86rf215_1afaf5ba2ebd2bba60583fff36b56c6945) 

current state of the radio

#### `public uint8_t `[`retries_max`](#structat86rf215_1acf093c322f91d258237c3ea9d2a6a7dc) 

number of retries until ACK is received

#### `public uint8_t `[`retries`](#structat86rf215_1a576a285ee0ae7fe899c0ba2789e6512c) 

retries left

#### `public uint8_t `[`csma_retries_max`](#structat86rf215_1a4ac18d357632f5ab2cd4153143b23dad) 

number of retries until channel is clear

#### `public uint8_t `[`csma_retries`](#structat86rf215_1a633f8fb62fb8ef47df203a1e163c7d3d) 

CSMA retries left.

#### `public uint8_t `[`csma_minbe`](#structat86rf215_1aad93fef7e62a3d50f028a345a93f07f0) 

CSMA minimum backoff exponent.

#### `public uint8_t `[`csma_maxbe`](#structat86rf215_1a1cdecd720b5fc9b755fa30fadbc922bc) 

CSMA maximum backoff exponent.

#### `public int8_t `[`csma_ed`](#structat86rf215_1a8e0410a485f6a4d8b138f643287fee6c) 

CSMA energy detect threshold.

