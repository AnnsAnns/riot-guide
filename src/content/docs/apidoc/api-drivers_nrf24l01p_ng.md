---
title: api-drivers_nrf24l01p_ng.md
description: api-drivers_nrf24l01p_ng.md
---
# group `drivers_nrf24l01p_ng` 

This module contains the driver for the NRF24L01+ (NG) 2.4 GHz transceiver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NRF24L01P_NG_MIN_ADDR_WIDTH`](#group__drivers__nrf24l01p__ng_1gae1a04919915b2d206de46a4ba6cd4504)            | Minimum width of a NRF24L01+ layer-2 address.
`define `[`NRF24L01P_NG_MAX_ADDR_WIDTH`](#group__drivers__nrf24l01p__ng_1ga5644a7c69ec88aeb2eed1ee4a12574fe)            | Maximum width of a NRF24L01+ layer-2 address.
`define `[`NRF24L01P_NG_ADDR_WIDTH`](#group__drivers__nrf24l01p__ng_1ga603b9f706a694bff10b024e820cc4253)            | Pass the compiler a definition of NRF24L01P_NG_ADDR_WIDTH to configure the layer-2 address width of this transceiver.
`define `[`NRF24L01P_NG_BROADCAST_ADDR`](#group__drivers__nrf24l01p__ng_1ga1ca6f0c290cbcf46e6e955ab90ccf69f)            | Agreed layer-2 address to send broadcast frames to.
`define `[`NRF24L01P_NG_ADDR_P0`](#group__drivers__nrf24l01p__ng_1ga3ad0ab7be9309c928c315b99bb05f365)            | Shortcut to access the address of pipe 0.
`define `[`NRF24L01P_NG_ADDR_P1`](#group__drivers__nrf24l01p__ng_1ga05e0d44c85c1256aa06092e62349ea97)            | Shortcut to access the address of pipe 1.
`define `[`NRF24L01P_NG_ADDR_PX_LSB`](#group__drivers__nrf24l01p__ng_1gaca0d0f905446b54fc8202a44198885bc)            | Shortcut to access the least significant byte of the addresses pipe 2, pipe 3, pipe 4 or pipe 5.
`public int `[`nrf24l01p_ng_setup`](#group__drivers__nrf24l01p__ng_1ga7f5644a3f1347d4fbbd38f22738a2821)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,const `[`nrf24l01p_ng_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng__params__t)` * params,uint8_t index)`            | Setup the NRF24L01+ driver, but perform no initialization.
`public int `[`nrf24l01p_ng_set_enable_pipe`](#group__drivers__nrf24l01p__ng_1gaf277cb1b28533f3add551a3c4a6f28e4)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe,bool enable)`            | Enable or disable data pipe `pipe`.
`public int `[`nrf24l01p_ng_get_enable_pipe`](#group__drivers__nrf24l01p__ng_1ga41b9879e5eebd191191edbc5d4928b36)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe,bool * enable)`            | Query if data pipe `pipe` is enabled.
`public int `[`nrf24l01p_ng_set_air_data_rate`](#group__drivers__nrf24l01p__ng_1gaeda6e1bccc3fffababb92b4efe3d7219)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_rfdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a0b0248f27eb5fe1cf1b33db69c5dc37b)` data_rate)`            | Configure air data rate.
`public uint16_t `[`nrf24l01p_ng_get_air_data_rate`](#group__drivers__nrf24l01p__ng_1gaf27fbf98efa564a50a4213efe3445353)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_rfdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a0b0248f27eb5fe1cf1b33db69c5dc37b)` * data_rate)`            | Get currently configured data rate.
`public int `[`nrf24l01p_ng_set_crc`](#group__drivers__nrf24l01p__ng_1ga599510b4ce7e7909a3021e401f0e270a)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_crc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ad0a7e4b8188e7180bffd020694adf0d7)` crc)`            | Configure CRC length.
`public uint8_t `[`nrf24l01p_ng_get_crc`](#group__drivers__nrf24l01p__ng_1ga6720a63175d8c26921579a2ce1c908c4)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_crc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ad0a7e4b8188e7180bffd020694adf0d7)` * crc)`            | Get currently configured CRC length.
`public int `[`nrf24l01p_ng_set_tx_power`](#group__drivers__nrf24l01p__ng_1ga0eafc06beef89a2642b6529c05352a3a)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1afa0d1ef0db2dc7acd4a8c2c2f35b4c73)` power)`            | Configure Tx trasceiver power.
`public int8_t `[`nrf24l01p_ng_get_tx_power`](#group__drivers__nrf24l01p__ng_1gaca172d2099ebd6f058e25b7520f99f30)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1afa0d1ef0db2dc7acd4a8c2c2f35b4c73)` * power)`            | Get currently configured Tx transceiver power.
`public int `[`nrf24l01p_ng_set_channel`](#group__drivers__nrf24l01p__ng_1ga841028300f3d4bb05be73d2c4fd41bd5)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,uint8_t channel)`            | Set transceiver channel.
`public uint8_t `[`nrf24l01p_ng_get_channel`](#group__drivers__nrf24l01p__ng_1ga889f07e3cb952a9637db4c1d282c718e)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev)`            | Get currently configured transceiver channel.
`public int `[`nrf24l01p_ng_set_rx_address`](#group__drivers__nrf24l01p__ng_1ga9735eb61190792c7781c05c5a87cb157)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,const uint8_t * addr,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe)`            | Set Rx address of a certain data pipe.
`public int `[`nrf24l01p_ng_get_rx_address`](#group__drivers__nrf24l01p__ng_1gafa8e1d7db0cc690393834f8cb7445bfd)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,uint8_t * addr,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe)`            | Get current Rx address of a certain data pipe.
`public int `[`nrf24l01p_ng_set_max_retransm`](#group__drivers__nrf24l01p__ng_1gad55fd7e8e7ea96e58c3cfa567a868225)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,uint8_t max_rt)`            | Configure maximum number of retransmissions for ESB.
`public uint8_t `[`nrf24l01p_ng_get_max_retransm`](#group__drivers__nrf24l01p__ng_1ga240b83d7f85abbbc666ab85d5024a0a4)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev)`            | Get currently configured number of maximum retransmissions for ESB.
`public int `[`nrf24l01p_ng_set_retransm_delay`](#group__drivers__nrf24l01p__ng_1ga071c22c97992bbb96be5beb757af8e08)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_ard_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ac87dd15da4f1526150f2d3063ace69c5)` rt_delay)`            | Set retransmission delay for ESB.
`public uint16_t `[`nrf24l01p_ng_get_retransm_delay`](#group__drivers__nrf24l01p__ng_1gad59bc9ecf759be70d409cee8cebe8361)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_ard_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ac87dd15da4f1526150f2d3063ace69c5)` * rt_delay)`            | Get retransmission delay for ESB.
`public int `[`nrf24l01p_ng_set_state`](#group__drivers__nrf24l01p__ng_1ga85c646b2665acd98d0595556ee90781d)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1acd195b0654e2143e2f313065e673e3a2)` state)`            | Put device into sleep mode([NRF24L01P_NG_STATE_POWER_DOWN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a8f6599e344ca2c6828ab717ae73ac1e1a5816f6660ec69662cf40e8c4c18d7187)), standby mode ([NRF24L01P_NG_STATE_STANDBY_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a8f6599e344ca2c6828ab717ae73ac1e1a98f671cbba722655f53eb7fa7084322c)), or Rx mode ([NRF24L01P_NG_STATE_RX_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a8f6599e344ca2c6828ab717ae73ac1e1a3497eab27344ba1bf1f417d42f261001))
`public `[`nrf24l01p_ng_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1acd195b0654e2143e2f313065e673e3a2)` `[`nrf24l01p_ng_get_state`](#group__drivers__nrf24l01p__ng_1gaa156f6157e5b2afcaf6eef41cd2845bf)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev)`            | Get current device state.
`public void `[`nrf24l01p_ng_eui_get`](#group__drivers__nrf24l01p__ng_1gac6223b67d60cce99202c26870ddf60c1)`(const `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,uint8_t * eui)`            | Retrieve a unique layer-2 address for an [nrf24l01p_ng](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng) instance.
`struct `[`nrf24l01p_ng_cfg_t`](#structnrf24l01p__ng__cfg__t) | Struct that holds all active configuration values.
`struct `[`nrf24l01p_ng_params_t`](#structnrf24l01p__ng__params__t) | Struct of NRF24L01+ initialization parameters.
`struct `[`nrf24l01p_ng`](#structnrf24l01p__ng) | NRF24L01+ device struct.

## Members

#### `define `[`NRF24L01P_NG_MIN_ADDR_WIDTH`](#group__drivers__nrf24l01p__ng_1gae1a04919915b2d206de46a4ba6cd4504) 

Minimum width of a NRF24L01+ layer-2 address.

#### `define `[`NRF24L01P_NG_MAX_ADDR_WIDTH`](#group__drivers__nrf24l01p__ng_1ga5644a7c69ec88aeb2eed1ee4a12574fe) 

Maximum width of a NRF24L01+ layer-2 address.

#### `define `[`NRF24L01P_NG_ADDR_WIDTH`](#group__drivers__nrf24l01p__ng_1ga603b9f706a694bff10b024e820cc4253) 

Pass the compiler a definition of NRF24L01P_NG_ADDR_WIDTH to configure the layer-2 address width of this transceiver.

#### `define `[`NRF24L01P_NG_BROADCAST_ADDR`](#group__drivers__nrf24l01p__ng_1ga1ca6f0c290cbcf46e6e955ab90ccf69f) 

Agreed layer-2 address to send broadcast frames to.

The broadcast address will be assigned to pipe 0.

#### `define `[`NRF24L01P_NG_ADDR_P0`](#group__drivers__nrf24l01p__ng_1ga3ad0ab7be9309c928c315b99bb05f365) 

Shortcut to access the address of pipe 0.

#### `define `[`NRF24L01P_NG_ADDR_P1`](#group__drivers__nrf24l01p__ng_1ga05e0d44c85c1256aa06092e62349ea97) 

Shortcut to access the address of pipe 1.

#### `define `[`NRF24L01P_NG_ADDR_PX_LSB`](#group__drivers__nrf24l01p__ng_1gaca0d0f905446b54fc8202a44198885bc) 

Shortcut to access the least significant byte of the addresses pipe 2, pipe 3, pipe 4 or pipe 5.

The other bytes are shared with the address of pipe 1

#### `public int `[`nrf24l01p_ng_setup`](#group__drivers__nrf24l01p__ng_1ga7f5644a3f1347d4fbbd38f22738a2821)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,const `[`nrf24l01p_ng_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng__params__t)` * params,uint8_t index)` 

Setup the NRF24L01+ driver, but perform no initialization.

[netdev_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae9c8aa7e8b6ef4b7b4acfcb0ae84209a) can be used after this call to initialize the transceiver.

#### Parameters
* `dev` NRF24L01+ device handle 

* `params` Parameters of the device to setup 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### Parameters
* `0` Device successfully set up

#### `public int `[`nrf24l01p_ng_set_enable_pipe`](#group__drivers__nrf24l01p__ng_1gaf277cb1b28533f3add551a3c4a6f28e4)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe,bool enable)` 

Enable or disable data pipe `pipe`.

If @p pipe should be enabled, it is advised to
     set an address in advance.
     @see nrf24l01p_ng_set_rx_addr
     For Enhanced ShockBurst, auto ACK and dynamic
     payload length are enabled

#### Parameters
* `dev` NRF24L01+ device handle 

* `pipe` Pipe index 

* `enable` If pipe should be enabled or disabled

#### Parameters
* `0` Success 

* `-EINVAL` Bad pipe index

#### `public int `[`nrf24l01p_ng_get_enable_pipe`](#group__drivers__nrf24l01p__ng_1ga41b9879e5eebd191191edbc5d4928b36)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe,bool * enable)` 

Query if data pipe `pipe` is enabled.

#### Parameters
* `dev` NRF24L01+ device handle 

* `pipe` Pipe index 

* `enable` If pipe is enabled or disabled

#### Parameters
* `0` Success 

* `-EINVAL` Bad pipe index

#### `public int `[`nrf24l01p_ng_set_air_data_rate`](#group__drivers__nrf24l01p__ng_1gaeda6e1bccc3fffababb92b4efe3d7219)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_rfdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a0b0248f27eb5fe1cf1b33db69c5dc37b)` data_rate)` 

Configure air data rate.

#### Parameters
* `dev` NRF24L01+ device handle 

* `data_rate` Data rate configuration value

#### Parameters
* `0` Success 

* `-EINVAL` Bad data rate value 

* `-EAGAIN` Current state does not permit changing data rate

#### `public uint16_t `[`nrf24l01p_ng_get_air_data_rate`](#group__drivers__nrf24l01p__ng_1gaf27fbf98efa564a50a4213efe3445353)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_rfdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a0b0248f27eb5fe1cf1b33db69c5dc37b)` * data_rate)` 

Get currently configured data rate.

#### Parameters
* `dev` NRF24L01+ device handle 

* `data_rate` Configuration data rate value (may be NULL)

#### Returns
Data rate in [kbit/s]

#### `public int `[`nrf24l01p_ng_set_crc`](#group__drivers__nrf24l01p__ng_1ga599510b4ce7e7909a3021e401f0e270a)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_crc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ad0a7e4b8188e7180bffd020694adf0d7)` crc)` 

Configure CRC length.

#### Parameters
* `dev` NRF24L01+ device handle 

* `crc` Configuration CRC value

#### Parameters
* `0` Success 

* `-EINVAL` Bad CRC configuration value 

* `-ENOTSUP` CRC length not supported 

* `-EAGAIN` Current state does not permit changing CRC length

#### `public uint8_t `[`nrf24l01p_ng_get_crc`](#group__drivers__nrf24l01p__ng_1ga6720a63175d8c26921579a2ce1c908c4)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_crc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ad0a7e4b8188e7180bffd020694adf0d7)` * crc)` 

Get currently configured CRC length.

#### Parameters
* `dev` NRF24L01+ device handle 

* `crc` Configuration crc value (may be NULL)

#### Returns
Current CRC length

#### `public int `[`nrf24l01p_ng_set_tx_power`](#group__drivers__nrf24l01p__ng_1ga0eafc06beef89a2642b6529c05352a3a)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1afa0d1ef0db2dc7acd4a8c2c2f35b4c73)` power)` 

Configure Tx trasceiver power.

#### Parameters
* `dev` NRf24L01+ device handle 

* `power` Configuration Tx power value

#### Parameters
* `0` Success 

* `-EINVAL` Bad Tx power configuration value 

* `-EAGAIN` Current state does not permit changing Tx power

#### `public int8_t `[`nrf24l01p_ng_get_tx_power`](#group__drivers__nrf24l01p__ng_1gaca172d2099ebd6f058e25b7520f99f30)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1afa0d1ef0db2dc7acd4a8c2c2f35b4c73)` * power)` 

Get currently configured Tx transceiver power.

#### Parameters
* `dev` NRF24L01+ device handle 

* `power` Configuration Tx power value

#### Returns
Tx power in [dbm]

#### `public int `[`nrf24l01p_ng_set_channel`](#group__drivers__nrf24l01p__ng_1ga841028300f3d4bb05be73d2c4fd41bd5)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,uint8_t channel)` 

Set transceiver channel.

#### Parameters
* `dev` NRF24l01+ device handle 

* `channel` Channel [0; 15]

#### Parameters
* `0` Success 

* `-EINVAL` Bad channel 

* `-EAGAIN` Current state does not permit switching channel

#### `public uint8_t `[`nrf24l01p_ng_get_channel`](#group__drivers__nrf24l01p__ng_1ga889f07e3cb952a9637db4c1d282c718e)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev)` 

Get currently configured transceiver channel.

#### Parameters
* `dev` NRF24L01+ device handle

#### Returns
Transceiver channel

#### `public int `[`nrf24l01p_ng_set_rx_address`](#group__drivers__nrf24l01p__ng_1ga9735eb61190792c7781c05c5a87cb157)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,const uint8_t * addr,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe)` 

Set Rx address of a certain data pipe.

If you want to set the address of pipe 2, 3, 4 or 5 you only set the LSB because the other bytes are equal to the address of pipe 1.

For pipe 0 and 1 NRF24L01P_NG_ADDR_WIGTH bytes are expected

#### Parameters
* `dev` NRF24L01+ device handle 

* `addr` Rx address 

* `pipe` Pipe index

#### Parameters
* `0` Success 

* `-EINVAL` Bad address length 

#### Returns
-EAGAIN Current state does not permit changing Rx address

#### `public int `[`nrf24l01p_ng_get_rx_address`](#group__drivers__nrf24l01p__ng_1gafa8e1d7db0cc690393834f8cb7445bfd)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,uint8_t * addr,`[`nrf24l01p_ng_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)` pipe)` 

Get current Rx address of a certain data pipe.

`addr` must be at least NRF24L01P_NG_ADDR_WIDTH wide.

#### Parameters
* `dev` NRF24L01+ device handle 

* `addr` Rx address 

* `pipe` Pipe index

#### Returns
Address width 

#### Parameters
* `-EINVAL` Bad pipe index

#### `public int `[`nrf24l01p_ng_set_max_retransm`](#group__drivers__nrf24l01p__ng_1gad55fd7e8e7ea96e58c3cfa567a868225)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,uint8_t max_rt)` 

Configure maximum number of retransmissions for ESB.

#### Parameters
* `dev` NRF24L01+ device handle 

* `max_rt` Number of maximum retransmissions [0; 15]

#### Parameters
* `0` Success 

* `-EINVAL` Unsupported number of retransmissions 

* `-EAGAIN` Current state does not permit changing the maximum number of retransmissions

#### `public uint8_t `[`nrf24l01p_ng_get_max_retransm`](#group__drivers__nrf24l01p__ng_1ga240b83d7f85abbbc666ab85d5024a0a4)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev)` 

Get currently configured number of maximum retransmissions for ESB.

#### Parameters
* `dev` NRF24L01+ device handle

#### Returns
Maximum number of retransmissions

#### `public int `[`nrf24l01p_ng_set_retransm_delay`](#group__drivers__nrf24l01p__ng_1ga071c22c97992bbb96be5beb757af8e08)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_ard_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ac87dd15da4f1526150f2d3063ace69c5)` rt_delay)` 

Set retransmission delay for ESB.

#### Parameters
* `dev` NRF24L01+ device handle 

* `rt_delay` Configuration retransmission delay value

#### Returns
0 

#### Returns
-EINVAL Bad retransmission delay value 

#### Returns
-EAGAIN Current state does not permit changing retransmission delay

#### `public uint16_t `[`nrf24l01p_ng_get_retransm_delay`](#group__drivers__nrf24l01p__ng_1gad59bc9ecf759be70d409cee8cebe8361)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_ard_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ac87dd15da4f1526150f2d3063ace69c5)` * rt_delay)` 

Get retransmission delay for ESB.

#### Parameters
* `dev` NRF24L01+ device handle 

* `rt_delay` Configuration retransmission delay value

#### Returns
Retransmission delay in [us]

#### `public int `[`nrf24l01p_ng_set_state`](#group__drivers__nrf24l01p__ng_1ga85c646b2665acd98d0595556ee90781d)`(`[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev,`[`nrf24l01p_ng_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1acd195b0654e2143e2f313065e673e3a2)` state)` 

Put device into sleep mode([NRF24L01P_NG_STATE_POWER_DOWN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a8f6599e344ca2c6828ab717ae73ac1e1a5816f6660ec69662cf40e8c4c18d7187)), standby mode ([NRF24L01P_NG_STATE_STANDBY_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a8f6599e344ca2c6828ab717ae73ac1e1a98f671cbba722655f53eb7fa7084322c)), or Rx mode ([NRF24L01P_NG_STATE_RX_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a8f6599e344ca2c6828ab717ae73ac1e1a3497eab27344ba1bf1f417d42f261001))

#### Parameters
* `dev` NRF24L01+ device handle 

* `state` State

#### Returns
Old state 

#### Parameters
* `-EAGAIN` Device is currently not permitted to change state 

* `-ENOTSUP` Device is not permitted to change state to `state`

#### `public `[`nrf24l01p_ng_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1acd195b0654e2143e2f313065e673e3a2)` `[`nrf24l01p_ng_get_state`](#group__drivers__nrf24l01p__ng_1gaa156f6157e5b2afcaf6eef41cd2845bf)`(const `[`nrf24l01p_ng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a61175fdc334ffbe179e0a324c97c598a)` * dev)` 

Get current device state.

#### Parameters
* `dev` NRf24L01+ device handle

#### Returns
Device state

#### `public void `[`nrf24l01p_ng_eui_get`](#group__drivers__nrf24l01p__ng_1gac6223b67d60cce99202c26870ddf60c1)`(const `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,uint8_t * eui)` 

Retrieve a unique layer-2 address for an [nrf24l01p_ng](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng) instance.

This function has **attribute**((weak)) so you can override this, e.g. to construct an address. By default [luid_get_lb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__luid_1ga0b8167bbf3f5e2f27d8b1b48fdfd1387) is used.

#### Parameters
* `dev` The device descriptor of the transceiver 

* `eui` Destination to write the address to

# struct `nrf24l01p_ng_cfg_t` 

Struct that holds all active configuration values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`__pad0__`](#structnrf24l01p__ng__cfg__t_1ad347cd6d84a722172301860e89985935) | padding
`public uint8_t `[`cfg_channel`](#structnrf24l01p__ng__cfg__t_1a70cfc7181504c4ae6ce2d80a65ac3a1c) | Current channel.
`public uint8_t `[`__pad1__`](#structnrf24l01p__ng__cfg__t_1a6a1db6368f37861812a4b627abf794e2) | padding
`public uint8_t `[`cfg_crc`](#structnrf24l01p__ng__cfg__t_1a5e3facd883b5cf0f3b5221c5ee023820) | Current CRC length configuration value.
`public uint8_t `[`cfg_tx_power`](#structnrf24l01p__ng__cfg__t_1a4962cbf9c4a39c6f7ad5bb328cf6a8cf) | Current tx power configuration value.
`public uint8_t `[`cfg_data_rate`](#structnrf24l01p__ng__cfg__t_1a2ca524465ca2391e02dcebfc7d74fe9b) | Current data rate configuration value.
`public uint8_t `[`cfg_max_retr`](#structnrf24l01p__ng__cfg__t_1ab9e647aac229c71709c0453a2aaf0eca) | Current maximum number of retransmissions.
`public uint8_t `[`cfg_retr_delay`](#structnrf24l01p__ng__cfg__t_1a5edb2998344736e50403972181b7d76c) | Current retransmission delay configuration value.

## Members

#### `public uint8_t `[`__pad0__`](#structnrf24l01p__ng__cfg__t_1ad347cd6d84a722172301860e89985935) 

padding

#### `public uint8_t `[`cfg_channel`](#structnrf24l01p__ng__cfg__t_1a70cfc7181504c4ae6ce2d80a65ac3a1c) 

Current channel.

#### `public uint8_t `[`__pad1__`](#structnrf24l01p__ng__cfg__t_1a6a1db6368f37861812a4b627abf794e2) 

padding

#### `public uint8_t `[`cfg_crc`](#structnrf24l01p__ng__cfg__t_1a5e3facd883b5cf0f3b5221c5ee023820) 

Current CRC length configuration value.

**See also**: [nrf24l01p_ng_crc_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ad0a7e4b8188e7180bffd020694adf0d7)

#### `public uint8_t `[`cfg_tx_power`](#structnrf24l01p__ng__cfg__t_1a4962cbf9c4a39c6f7ad5bb328cf6a8cf) 

Current tx power configuration value.

**See also**: [nrf24l01p_ng_tx_power_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1afa0d1ef0db2dc7acd4a8c2c2f35b4c73)

#### `public uint8_t `[`cfg_data_rate`](#structnrf24l01p__ng__cfg__t_1a2ca524465ca2391e02dcebfc7d74fe9b) 

Current data rate configuration value.

**See also**: [nrf24l01p_ng_rfdr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a0b0248f27eb5fe1cf1b33db69c5dc37b)

#### `public uint8_t `[`cfg_max_retr`](#structnrf24l01p__ng__cfg__t_1ab9e647aac229c71709c0453a2aaf0eca) 

Current maximum number of retransmissions.

#### `public uint8_t `[`cfg_retr_delay`](#structnrf24l01p__ng__cfg__t_1a5edb2998344736e50403972181b7d76c) 

Current retransmission delay configuration value.

**See also**: [nrf24l01p_ng_ard_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1ac87dd15da4f1526150f2d3063ace69c5)

# struct `nrf24l01p_ng_params_t` 

Struct of NRF24L01+ initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structnrf24l01p__ng__params__t_1ac183c7f84b01aa772550412549e2e3df) | SPI bus.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structnrf24l01p__ng__params__t_1ae8b35d91f68711ec5a30ff424600ff02) | SPI clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_cs`](#structnrf24l01p__ng__params__t_1a4c893eff7e6a4652c654e4cb9eeaa3bc) | SPI chip select gpio pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_ce`](#structnrf24l01p__ng__params__t_1a198433427831e1d5c9a21492be45569f) | NRF24L01+ chip enable gpio pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_irq`](#structnrf24l01p__ng__params__t_1a116ea3317a314ebe6097c9716fbab7e4) | NRF24L01+ IRQ gpio pin.
`public `[`nrf24l01p_ng_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng__cfg__t)` `[`config`](#structnrf24l01p__ng__params__t_1ad7f792b5052355038d7c29f7b8c4ddc4) | Current configuration values.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structnrf24l01p__ng__params__t_1ac183c7f84b01aa772550412549e2e3df) 

SPI bus.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structnrf24l01p__ng__params__t_1ae8b35d91f68711ec5a30ff424600ff02) 

SPI clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_cs`](#structnrf24l01p__ng__params__t_1a4c893eff7e6a4652c654e4cb9eeaa3bc) 

SPI chip select gpio pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_ce`](#structnrf24l01p__ng__params__t_1a198433427831e1d5c9a21492be45569f) 

NRF24L01+ chip enable gpio pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_irq`](#structnrf24l01p__ng__params__t_1a116ea3317a314ebe6097c9716fbab7e4) 

NRF24L01+ IRQ gpio pin.

#### `public `[`nrf24l01p_ng_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng__cfg__t)` `[`config`](#structnrf24l01p__ng__params__t_1ad7f792b5052355038d7c29f7b8c4ddc4) 

Current configuration values.

# struct `nrf24l01p_ng` 

NRF24L01+ device struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structnrf24l01p__ng_1acee12cdf1db86718507636ee70085902) | Netdev member.
`public `[`nrf24l01p_ng_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng__params__t)` `[`params`](#structnrf24l01p__ng_1a12b3a1ec67d2685192832349b33a7eb9) | Parameters.
`public uint8_t `[`state`](#structnrf24l01p__ng_1a5b602cd1be5fb96970dc19116d049f6f) | Current operation state.
`public uint8_t `[`idle_state`](#structnrf24l01p__ng_1aa8ec44a57b3de0e3537a19665bd2efe2) | State to return to after sending.
`public uint8_t `[`rx_addr_long`](#structnrf24l01p__ng_1a7a111bb870e97f8f54b35740999eb77f) | Array to access the addresses of pipe 0 and pipe 1 via pipe indices.
`public uint8_t `[`rx_addr_short`](#structnrf24l01p__ng_1a41356b87ff556d8ba6fda4bc8cb9ca33) | Array to access the addresses of pipe 2, pipe 3, pipe 4 and pipe 5 via pipe indices.
`public struct nrf24l01p_ng::@230 `[`arxaddr`](#structnrf24l01p__ng_1a6906247544febb3b897efc1e1c28ea20) | Rx addresses.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structnrf24l01p__ng_1acee12cdf1db86718507636ee70085902) 

Netdev member.

#### `public `[`nrf24l01p_ng_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p_ng.md#structnrf24l01p__ng__params__t)` `[`params`](#structnrf24l01p__ng_1a12b3a1ec67d2685192832349b33a7eb9) 

Parameters.

#### `public uint8_t `[`state`](#structnrf24l01p__ng_1a5b602cd1be5fb96970dc19116d049f6f) 

Current operation state.

#### `public uint8_t `[`idle_state`](#structnrf24l01p__ng_1aa8ec44a57b3de0e3537a19665bd2efe2) 

State to return to after sending.

#### `public uint8_t `[`rx_addr_long`](#structnrf24l01p__ng_1a7a111bb870e97f8f54b35740999eb77f) 

Array to access the addresses of pipe 0 and pipe 1 via pipe indices.

**See also**: [nrf24l01p_ng_pipe_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)

#### `public uint8_t `[`rx_addr_short`](#structnrf24l01p__ng_1a41356b87ff556d8ba6fda4bc8cb9ca33) 

Array to access the addresses of pipe 2, pipe 3, pipe 4 and pipe 5 via pipe indices.

**See also**: [nrf24l01p_ng_pipe_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf24l01p__ng__types_8h_1a92aa17b3343de92ec80f4d27bf9676d7)

#### `public struct nrf24l01p_ng::@230 `[`arxaddr`](#structnrf24l01p__ng_1a6906247544febb3b897efc1e1c28ea20) 

Rx addresses.

The NRF24L01+ has 6 data pipes. Each data pipe has a unique address. The address of a pipe can be 3 to 5 bytes long but must be equal for all pipes. The addresses of pipe 0 and pipe 1 can be arbitrary while the addresses of pipe 2 to pipe 5 share the most significant bytes, thus they only differ in the least significant byte. The least significant byte must be different for all pipes.

Data pipe 0 is also the Tx pipe. That means if you want to send a frame, you must assign to pipe 0 the address of the recipient. After a transmission if you want to continue listening on pipe 0, the address of pipe 0 must be restored.

