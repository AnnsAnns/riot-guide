---
title: api-drivers_netdev_ble.md
description: api-drivers_netdev_ble.md
---
# group `drivers_netdev_ble` 

BLE adaption of netdev.

This API is experimental and in an early state - expect significant changes!

AboutBLE defines a very specific environment for the used radio, both in terms of communication sequences and in terms of timings. BLE communication is structured in so called events, where each event is a sequence of request and reply packets send between two peers. A radio context (frequency, CRC initializer, and access address) is used throughout such an event and typically changed for the next one. In addition, the timing of the packets sent in a sequence is fixed to an inter-frame-spacing of exactly 150us.

To cater with these specific attributes of BLE, this interface tailors the generic netdev interface to be used for BLE radios.

Interface Adaption / Netdev InterpretationTransmission Sequence Based ApproachTo be able to handle the exact inter-packet-spacing if 150us seconds, this interface expects the device driver to stay in a continuous alternating RX-TX sequence, until it is manually aborted. While in this sequence, the radio driver needs to take care of switching to RX mode 150us after sending the last packet, and to send the next packet 150us after the last packet was received.

Such a transmission sequence is started by calling either the radio's send or receive function while the radio is in idle/standby mode.

Once a transmission sequence is in progress, the next packet to be send, or the next reception buffer to be used is specified also using the send/recv functions. They should be called in the `event_callback` right after the last transmission (RX or TX) was finished.

The transmission sequence is aborted by calling `netdev_ble_stop(dev)` (`netdev->set(dev, NETOPT_BLE_CTX, NULL, 0)`). This will put the radio back into idle/standby mode.

Radio ContextAs BLE uses time sliced channel hopping, the used channel needs to be set regularly. Additionally, also the used access address and the CRC initializer need to be set regularly, as they differ for different BLE connections. To make setting these values more efficient, this interface combines these three values in to a so called `radio context` and adds a `netopt` option to set all three values at once using `netdev_ble_set_ctx(dev, ctx)` (`netdev->set(dev, NETOPT_BLE_CTX, ctx, sizeof(netdev_ble_ctx_t))`).

Implementation Status and Limitations

* This interface works for memory mapped radios only (no support for bus-connected devices). This is mainly for timing reasons.

* No support for LE Data Length Extension (bigger packet size), yet

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETDEV_BLE_PDU_MAXLEN`](#group__drivers__netdev__ble_1ga122895417b9200160d0e2bcf07491f13)            | Maximum payload length of a standard BLE packet.
`define `[`NETDEV_BLE_CRC_MASK`](#group__drivers__netdev__ble_1ga55be50b7124e90c381a750668e77f2e6)            | Mask for the actual (3 byte) CRC data in the context's CRC field.
`define `[`NETDEV_BLE_CRC_OK`](#group__drivers__netdev__ble_1ga6248df5df2f9dc64888edfb64e1cfd13)            | Flag for marking a correct CRC on packet reception.
`public inline static int `[`netdev_ble_send`](#group__drivers__netdev__ble_1ga6e4d43c671b17ba35ec2d2596d224d8c)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_ble_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__pkt__t)` * pkt)`            | Send the given packet on the next occasion.
`public inline static int `[`netdev_ble_recv`](#group__drivers__netdev__ble_1ga23be2ee06571b391793c180a7a03123a)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_ble_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__pkt__t)` * pkt)`            | Start listening for an incoming packet and write it into `pkt`.
`public inline static void `[`netdev_ble_set_ctx`](#group__drivers__netdev__ble_1ga2d42996bbe2afa74c1ca1e4f19638b45)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_ble_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__ctx__t)` * ctx)`            | Set the radio context for the given radio device.
`public inline static void `[`netdev_ble_stop`](#group__drivers__netdev__ble_1ga89e1158a8b06d106c7ddac26548f5910)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Stop the ongoing RX/TX sequence.
`struct `[`netdev_ble_pkt_t`](#structnetdev__ble__pkt__t) | BLE packet structure (as defined by the BLE standard)
`struct `[`netdev_ble_ctx_t`](#structnetdev__ble__ctx__t) | Radio context.

## Members

#### `define `[`NETDEV_BLE_PDU_MAXLEN`](#group__drivers__netdev__ble_1ga122895417b9200160d0e2bcf07491f13) 

Maximum payload length of a standard BLE packet.

#### `define `[`NETDEV_BLE_CRC_MASK`](#group__drivers__netdev__ble_1ga55be50b7124e90c381a750668e77f2e6) 

Mask for the actual (3 byte) CRC data in the context's CRC field.

#### `define `[`NETDEV_BLE_CRC_OK`](#group__drivers__netdev__ble_1ga6248df5df2f9dc64888edfb64e1cfd13) 

Flag for marking a correct CRC on packet reception.

#### `public inline static int `[`netdev_ble_send`](#group__drivers__netdev__ble_1ga6e4d43c671b17ba35ec2d2596d224d8c)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_ble_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__pkt__t)` * pkt)` 

Send the given packet on the next occasion.

If a transmission sequence is in progress, the given packet will be send after 150us after receptions of the last packet. If no sequence is currently active, the packet will be send immediately and a new transmission sequence is started.

Call this function only to start a new transmission sequence (radio is currently idle), or right after a packet was received. If called at any other point in time, the behavior is undefined.

#### Parameters
* `dev` radio to use for sending 

* `pkt` data to send

#### Returns
0 on success 

#### Returns
`< 0` on error

#### `public inline static int `[`netdev_ble_recv`](#group__drivers__netdev__ble_1ga23be2ee06571b391793c180a7a03123a)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_ble_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__pkt__t)` * pkt)` 

Start listening for an incoming packet and write it into `pkt`.

If a transmission sequence is in progress, the radio will use the given buffer for reception when it goes in to RX mode 150us after sending the last packet. If no sequence is in progress, the radio will go into RX mode immediately (using the given RX buffer), and a new transmission sequence is started.

Call this function only to start a new transmission sequence (radio is currently idle), or right after a packet was sent. If called at any other point in time, the behavior is undefined.

#### Parameters
* `dev` radio to use for receiving 

* `pkt` buffer to write new packet to

#### Returns
0 on success 

#### Returns
`< 0` on error

#### `public inline static void `[`netdev_ble_set_ctx`](#group__drivers__netdev__ble_1ga2d42996bbe2afa74c1ca1e4f19638b45)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_ble_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__ctx__t)` * ctx)` 

Set the radio context for the given radio device.

#### Parameters
* `dev` target radio device 

* `ctx` new radio context (CRC, channel, access address)

#### `public inline static void `[`netdev_ble_stop`](#group__drivers__netdev__ble_1ga89e1158a8b06d106c7ddac26548f5910)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Stop the ongoing RX/TX sequence.

This function has not effect if the radio is in the middle of a data transfer

#### Parameters
* `dev` target radio device

# struct `netdev_ble_pkt_t` 

BLE packet structure (as defined by the BLE standard)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`flags`](#structnetdev__ble__pkt__t_1ad53980f6c188eea479ef213ffb979b8a) | header flags
`public uint8_t `[`len`](#structnetdev__ble__pkt__t_1a5e857cf2747871ef20b197ad8165307e) | actual length of PDU
`public uint8_t `[`pdu`](#structnetdev__ble__pkt__t_1a64110fb733d2d8498170a7a412206603) | protocol data unit (PDU)

## Members

#### `public uint8_t `[`flags`](#structnetdev__ble__pkt__t_1ad53980f6c188eea479ef213ffb979b8a) 

header flags

#### `public uint8_t `[`len`](#structnetdev__ble__pkt__t_1a5e857cf2747871ef20b197ad8165307e) 

actual length of PDU

#### `public uint8_t `[`pdu`](#structnetdev__ble__pkt__t_1a64110fb733d2d8498170a7a412206603) 

protocol data unit (PDU)

# struct `netdev_ble_ctx_t` 

Radio context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`raw`](#structnetdev__ble__ctx__t_1aba0f83538e1ceb26dde3f2556882b33f) | byte-wise access
`public uint32_t `[`u32`](#structnetdev__ble__ctx__t_1a76eb2991f686bbbbab593ea44f38f7dd) | compact access
`public union netdev_ble_ctx_t::@227 `[`aa`](#structnetdev__ble__ctx__t_1aa0a633ba66532f8100c49afb696bbf82) | access address
`public uint32_t `[`crc`](#structnetdev__ble__ctx__t_1a88d037e93600f05bc10f677759006795) | CRC: 3 LSB for CRC, most significant bit for RX state.
`public uint8_t `[`chan`](#structnetdev__ble__ctx__t_1acf7f69ed64a268b21e12362d39b8202f) | channel to use/used

## Members

#### `public uint8_t `[`raw`](#structnetdev__ble__ctx__t_1aba0f83538e1ceb26dde3f2556882b33f) 

byte-wise access

#### `public uint32_t `[`u32`](#structnetdev__ble__ctx__t_1a76eb2991f686bbbbab593ea44f38f7dd) 

compact access

#### `public union netdev_ble_ctx_t::@227 `[`aa`](#structnetdev__ble__ctx__t_1aa0a633ba66532f8100c49afb696bbf82) 

access address

#### `public uint32_t `[`crc`](#structnetdev__ble__ctx__t_1a88d037e93600f05bc10f677759006795) 

CRC: 3 LSB for CRC, most significant bit for RX state.

#### `public uint8_t `[`chan`](#structnetdev__ble__ctx__t_1acf7f69ed64a268b21e12362d39b8202f) 

channel to use/used

