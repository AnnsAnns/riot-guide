---
title: api-drivers_nrf5x_nrfmin.md
description: api-drivers_nrf5x_nrfmin.md
---
# group `drivers_nrf5x_nrfmin` 

Minimal driver for the NRF51 radio.

This driver uses the nRF5x radio in a proprietary/custom way, defining our own custom link layer. This custom link layer resembles some characteristics of the IEEE802.15.4 link layer, but is not at all compatible to it.

One key point is, that this custom link layer is only meant to operate between nRF5x devices, which let's us make some very nice assumptions:

* all communicating hosts are little-endian -> we define host byte order := network byte order

The driver is using a Nordic proprietary physical layer, configured to a bitrate of 1 Mbit/s. The maximum payload length can be freely configured, but the maximal supported value is 250 byte (default is 200 byte).

We define the nrfmin link layer to use 16-bit addresses. On the physical layer we encode these addresses by putting these addresses into the 2 least significant bytes of the supported 5-byte addresses, while setting the other 3 bytes to 0xe7.

For out custom link layer, we define our own proprietary link layer format (all fields are in host byte order (little endian)):

byte0   |byte1 - byte2   |byte3 - byte4   |byte5   |byte7 - byteN
--------- | --------- | --------- | --------- | ---------
length   |src_addr   |dst_addr   |proto   |payload...

With:

* length: length of the packet, including the header -> payload len + 6

* src_addr: 16-bit source address

* dst_addr: 16-bit destination address

* proto: type of data transferred (similar to an Ethertype field)

SUMMARY: This driver / link layer supports:

* 16-bit addressing (16-bit) -> extract default address from CPU ID

* broadcast (broadcast address is ff:ff)

* channels from 0 to 31 [2400MHz to 2524MHz, 4MHz per channel]

* setting of TX power [+4dBm to -20dBm, in ~4dBm steps]

* 8-bit packet type/proto field (to be used as seen fit)

* setting device state (RX, SLEEP)

But so far no support for:

* link layer ACKs

* retransmissions

> Todo: So far the driver uses only a single RX buffer that is locked until the data was read/discarded. This can potentially lead to a lot of packet loss -> using more than one buffer would help here...

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NRFMIN_TXPOWER_DEFAULT`](#group__drivers__nrf5x__nrfmin_1ga14e816c5cf25f2508870065559751ee4)            | Default transmission power used.
`define `[`NRFMIN_ADDR_BCAST`](#group__drivers__nrf5x__nrfmin_1gaf7c2251e1d6b0bcbdafed0f3c2918b63)            | Export the default nrfmin broadcast address.
`define `[`NRFMIN_PAYLOAD_MAX`](#group__drivers__nrf5x__nrfmin_1ga581cf7b90338d6880a42f1c8d881519d)            | Default maximum payload length (must be <= 250)
`public void `[`nrfmin_setup`](#group__drivers__nrf5x__nrfmin_1ga9a9d9484b8c2e5f57641746f65493a5e)`(void)`            | Setup the device driver's data structures.
`public uint16_t `[`nrfmin_get_addr`](#group__drivers__nrf5x__nrfmin_1gaae9105d422bbfff9698bfa210d3d22cd)`(void)`            | Get the currently active address.
`public void `[`nrfmin_set_addr`](#group__drivers__nrf5x__nrfmin_1gab1d419942e786ab8e27f1c367dd563a6)`(uint16_t addr)`            | Set the 16-bit radio address.
`public void `[`nrfmin_get_iid`](#group__drivers__nrf5x__nrfmin_1ga16606913205f1d86cb3b4e48a20d9e1f)`(uint16_t * iid)`            | Get the IID build from the 16-bit node address.
`public uint16_t `[`nrfmin_get_channel`](#group__drivers__nrf5x__nrfmin_1gaef3254d1e89903c739fae5fb1d9e8695)`(void)`            | Get the current channel.
`public int `[`nrfmin_set_channel`](#group__drivers__nrf5x__nrfmin_1gad75b119d611f13ea649c331b15f6296b)`(uint16_t chan)`            | Set the active channel.
`public `[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` `[`nrfmin_get_state`](#group__drivers__nrf5x__nrfmin_1gaa8365c56a0f5256837a8050ebea024da)`(void)`            | Get the current radio state.
`public int `[`nrfmin_set_state`](#group__drivers__nrf5x__nrfmin_1gaab28b7782310fc59f61c6218c35c5e03)`(`[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` val)`            | Put the device into the given state.
`public int16_t `[`nrfmin_get_txpower`](#group__drivers__nrf5x__nrfmin_1ga9e705c219ce25dd1b29f1e9f4e85368a)`(void)`            | Get the current transmit power.
`public void `[`nrfmin_set_txpower`](#group__drivers__nrf5x__nrfmin_1gaa91fb8f82520a1ab1f27832d533a2eea)`(int16_t power)`            | Set the used transmission power.
`struct `[`nrfmin_hdr_t`](#structnrfmin__hdr__t) | Header format used for our custom nrfmin link layer.
`union `[`nrfmin_pkt_t`](#unionnrfmin__pkt__t) | In-memory structure of a nrfmin radio packet.

## Members

#### `define `[`NRFMIN_TXPOWER_DEFAULT`](#group__drivers__nrf5x__nrfmin_1ga14e816c5cf25f2508870065559751ee4) 

Default transmission power used.

#### `define `[`NRFMIN_ADDR_BCAST`](#group__drivers__nrf5x__nrfmin_1gaf7c2251e1d6b0bcbdafed0f3c2918b63) 

Export the default nrfmin broadcast address.

#### `define `[`NRFMIN_PAYLOAD_MAX`](#group__drivers__nrf5x__nrfmin_1ga581cf7b90338d6880a42f1c8d881519d) 

Default maximum payload length (must be <= 250)

#### `public void `[`nrfmin_setup`](#group__drivers__nrf5x__nrfmin_1ga9a9d9484b8c2e5f57641746f65493a5e)`(void)` 

Setup the device driver's data structures.

#### `public uint16_t `[`nrfmin_get_addr`](#group__drivers__nrf5x__nrfmin_1gaae9105d422bbfff9698bfa210d3d22cd)`(void)` 

Get the currently active address.

#### Returns
the 16-bit node address

#### `public void `[`nrfmin_set_addr`](#group__drivers__nrf5x__nrfmin_1gab1d419942e786ab8e27f1c367dd563a6)`(uint16_t addr)` 

Set the 16-bit radio address.

#### Parameters
* `addr` address to set

#### `public void `[`nrfmin_get_iid`](#group__drivers__nrf5x__nrfmin_1ga16606913205f1d86cb3b4e48a20d9e1f)`(uint16_t * iid)` 

Get the IID build from the 16-bit node address.

#### Parameters
* `iid` the 64-bit IID, as array of 4 * 16-bit

#### `public uint16_t `[`nrfmin_get_channel`](#group__drivers__nrf5x__nrfmin_1gaef3254d1e89903c739fae5fb1d9e8695)`(void)` 

Get the current channel.

#### Returns
currently active channel

#### `public int `[`nrfmin_set_channel`](#group__drivers__nrf5x__nrfmin_1gad75b119d611f13ea649c331b15f6296b)`(uint16_t chan)` 

Set the active channel.

#### Parameters
* `chan` targeted channel [0-31]

#### Returns
sizeof(uint16_t) on success 

#### Returns
-EOVERFLOW if channel is not applicable

#### `public `[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` `[`nrfmin_get_state`](#group__drivers__nrf5x__nrfmin_1gaa8365c56a0f5256837a8050ebea024da)`(void)` 

Get the current radio state.

#### Returns
state the radio is currently in

#### `public int `[`nrfmin_set_state`](#group__drivers__nrf5x__nrfmin_1gaab28b7782310fc59f61c6218c35c5e03)`(`[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` val)` 

Put the device into the given state.

#### Parameters
* `val` target state

#### Returns
sizeof(netopt_state_t) on success 

#### Returns
-ENOTSUP if target state is not applicable

#### `public int16_t `[`nrfmin_get_txpower`](#group__drivers__nrf5x__nrfmin_1ga9e705c219ce25dd1b29f1e9f4e85368a)`(void)` 

Get the current transmit power.

#### Returns
transmission power in [dBm]

#### `public void `[`nrfmin_set_txpower`](#group__drivers__nrf5x__nrfmin_1gaa91fb8f82520a1ab1f27832d533a2eea)`(int16_t power)` 

Set the used transmission power.

#### Parameters
* `power` targeted power, in [dBm]

# struct `nrfmin_hdr_t` 

Header format used for our custom nrfmin link layer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`len`](#structnrfmin__hdr__t_1a391b53b6c16a36a515cb5c10d164dbdb) | packet length, including this header
`public uint16_t `[`src_addr`](#structnrfmin__hdr__t_1a14d8e55a9ccbd0d0e07e17c3fd33132b) | source address of the packet
`public uint16_t `[`dst_addr`](#structnrfmin__hdr__t_1afda4c2d18dc3536b143f4462d829dd40) | destination address
`public uint8_t `[`proto`](#structnrfmin__hdr__t_1a7a237706d61c34e424af43444ea6ba23) | protocol of payload

## Members

#### `public uint8_t `[`len`](#structnrfmin__hdr__t_1a391b53b6c16a36a515cb5c10d164dbdb) 

packet length, including this header

#### `public uint16_t `[`src_addr`](#structnrfmin__hdr__t_1a14d8e55a9ccbd0d0e07e17c3fd33132b) 

source address of the packet

#### `public uint16_t `[`dst_addr`](#structnrfmin__hdr__t_1afda4c2d18dc3536b143f4462d829dd40) 

destination address

#### `public uint8_t `[`proto`](#structnrfmin__hdr__t_1a7a237706d61c34e424af43444ea6ba23) 

protocol of payload

