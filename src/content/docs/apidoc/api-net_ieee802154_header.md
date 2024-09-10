---
title: api-net_ieee802154_header.md
description: api-net_ieee802154_header.md
---
# group `net_ieee802154_header` 

IEEE 802.15.4 header definitions and utility functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`IEEE802154_SFD`](#group__net__ieee802154__header_1ga29ceac086e3081cf5614d6d5cff478bc)            | Default start frame delimiter.
`define `[`IEEE802154_FRAME_LEN_MAX`](#group__net__ieee802154__header_1ga2d919240154a1a93874f8d41c43bf7c6)            | maximum 802.15.4 frame length
`define `[`IEEE802154G_FRAME_LEN_MAX`](#group__net__ieee802154__header_1ga0397a2525092e58efdb6592ddd6d00fc)            | maximum 802.15.4g-2012 frame length
`define `[`IEEE802154_ACK_FRAME_LEN`](#group__net__ieee802154__header_1gaa5a463cafcecef82c7bfb455f3b5cad8)            | ACK frame length.
`define `[`IEEE802154_LIFS_SYMS`](#group__net__ieee802154__header_1gadf0ec4fe8b8f3df32ffaf7fe117365c3)            | Number of symbols to wait during Long Inter Frame Spacing.
`define `[`IEEE802154_SIFS_SYMS`](#group__net__ieee802154__header_1ga87fca1d53493606e8d780f7293e3ed39)            | Number of symbols to wait during Short Inter Frame Spacing.
`define `[`IEEE802154_SIFS_MAX_FRAME_SIZE`](#group__net__ieee802154__header_1gae808fadb14c91b1f684bb2e787f51ab1)            | Maximum frame size to consider a frame as short.
`define `[`IEEE802154_ACK_TIMEOUT_SYMS`](#group__net__ieee802154__header_1ga5768673788d736b24ff5d8e59f0e1f40)            | ACK Timeout period in symbols.
`define `[`IEEE802154_RADIO_RSSI_OFFSET`](#group__net__ieee802154__header_1gabc99fd0eff73ae226ce7024ec941fcf0)            | value of measured power when RSSI is zero.
`define `[`IEEE802154_PHY_MR_FSK_PHR_LEN`](#group__net__ieee802154__header_1gaebfb8f6bf1d786c524b76d612dcef138)            | MR-FSK PHY header length.
`define `[`IEEE802154_PHY_MR_FSK_2FSK_SFD_LEN`](#group__net__ieee802154__header_1ga3b24d4702383ee3fc3363ca00f48686d)            | MR-FSK SFD length on Filtered 2-FSK.
`define `[`IEEE802154G_ATURNAROUNDTIME_US`](#group__net__ieee802154__header_1ga203fc31f32b5443b01679073b5fdd1a4)            | For the SUN PHYs, the value is 1 ms expressed in symbol periods, rounded up to the next integer number of symbol periods using the ceiling() function.
`define `[`IEEE802154_ATURNAROUNDTIME_IN_SYMBOLS`](#group__net__ieee802154__header_1gad654a2408d8a9e7292568a5967789352)            | IEEE Std 802.15.4-2020 Table 11-1—PHY constants: The value is 12 for all other PHYs.
`define `[`IEEE802154_CCA_DURATION_IN_SYMBOLS`](#group__net__ieee802154__header_1ga0b76a006e55b574dfd7d5e0002d254a0)            | IEEE Std 802.15.4-2020 Table 11-1—PHY constants: For all other PHYs¹, the duration of 8 symbol periods.
`define `[`CONFIG_IEEE802154_DEFAULT_CSMA_CA_MIN_BE`](#group__net__ieee802154__header_1ga8157247c4da742f6fc62c6ad8be2fad9)            | IEEE802.15.4 default value for minimum backoff exponent.
`define `[`CONFIG_IEEE802154_DEFAULT_CSMA_CA_RETRIES`](#group__net__ieee802154__header_1gab821f90a4b625e3b0119c19b6f9a75fd)            | IEEE802.15.4 default value for maximum number of CSMA-CA retries.
`define `[`CONFIG_IEEE802154_DEFAULT_CSMA_CA_MAX_BE`](#group__net__ieee802154__header_1ga9d3d01b01db9653ab049cd4b83ee5f45)            | IEEE802.15.4 default value for maximum backoff exponent.
`define `[`CONFIG_IEEE802154_CCA_THRESH_DEFAULT`](#group__net__ieee802154__header_1ga7fb25f74c4ab509e7d734b79f7ff1c02)            | IEEE802.15.4 default value for CCA threshold (in dBm)
`define `[`CONFIG_IEEE802154_DEFAULT_MAX_FRAME_RETRANS`](#group__net__ieee802154__header_1ga924c0dfac895163c8de61d431a94040c)            | IEEE802.15.4 default value for maximum frame retries.
`define `[`CONFIG_IEEE802154_AUTO_ACK_DISABLE`](#group__net__ieee802154__header_1ga7b13ed727113fa8c4e207eb2f918b67b)            | Disable Auto ACK support.
`define `[`CONFIG_IEEE802154_DEFAULT_ACK_REQ`](#group__net__ieee802154__header_1ga369cb72ea222ae048a1438d3d70b02ef)            | Request ACKs by default.
`define `[`CONFIG_IEEE802154_DSME_CAP_REDUCTION`](#group__net__ieee802154__header_1ga31afc6b22e936d4452395129479d2a5d)            | Enable DSME CAP reduction.
`define `[`CONFIG_IEEE802154_DSME_MAC_RESPONSE_WAIT_TIME`](#group__net__ieee802154__header_1gaf8454e4ddfa7d015859c6b34d7019c83)            | Set the maximum DSME MAC response wait time.
`define `[`CONFIG_IEEE802154_DSME_SCAN_DURATION`](#group__net__ieee802154__header_1ga90ede65885c67636524f45b3e3b41f3c)            | Set the scan duration.
`define `[`CONFIG_IEEE802154_DSME_SUPERFRAME_ORDER`](#group__net__ieee802154__header_1ga8f79e05ed5e61d1900e0f630aa662a4a)            | Set IEEE 802.15.4 DSME Superframe Order (SO) The SO sets the slot duration to `60 * symbol_time_us * 2^SO` usecs.
`define `[`CONFIG_IEEE802154_DSME_MULTISUPERFRAME_ORDER`](#group__net__ieee802154__header_1gae35970cf9219a86a89d857763f944b78)            | Set IEEE 802.15.4 DSME Multisuperframe Order (MO)
`define `[`CONFIG_IEEE802154_DSME_BEACON_ORDER`](#group__net__ieee802154__header_1ga0cf916c449c052f9f9cfbc34fddfeaa3)            | Set IEEE 802.15.4 DSME Beacon Order (BO)
`define `[`CONFIG_IEEE802154_DSME_STATIC_GTS`](#group__net__ieee802154__header_1gae76008fe31744bb09491848b8ea8e6fd)            | Use static GTS allocation.
`define `[`CONFIG_IEEE802154_DSME_GTS_EXPIRATION`](#group__net__ieee802154__header_1ga2a9af2289522674b48720275d8f4f9ff)            | Set expiration time of DSME GTS slot.
`define `[`CONFIG_IEEE802154_DSME_MIN_COORD_LQI`](#group__net__ieee802154__header_1ga017582490a8acff621195981620bde13)            | Set the minimum LQI to consider a beacon from a coordinator valid.
`enum `[`ieee802154_phy_mode_t`](#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)            | 802.15.4 PHY modes
`enum `[`@375`](#group__net__ieee802154__header_1ga9f7a7696ae1c6993af6334642d77ce4c)            | 802.15.4 forward error correction schemes
`public size_t `[`ieee802154_set_frame_hdr`](#group__net__ieee802154__header_1ga5f2355e868da5432d8693a9a3bc86d7e)`(uint8_t * buf,const uint8_t * src,size_t src_len,const uint8_t * dst,size_t dst_len,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` src_pan,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` dst_pan,uint8_t flags,uint8_t seq)`            | Initializes an IEEE 802.15.4 MAC frame header in `buf`.
`public size_t `[`ieee802154_get_frame_hdr_len`](#group__net__ieee802154__header_1ga3973a48175eb75516fe353ba60bcd292)`(const uint8_t * mhr)`            | Get length of MAC header.
`public int `[`ieee802154_get_src`](#group__net__ieee802154__header_1ga25610e6c53c638b14e36b2372e12e75d)`(const uint8_t * mhr,uint8_t * src,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` * src_pan)`            | Gets source address from MAC header.
`public int `[`ieee802154_get_dst`](#group__net__ieee802154__header_1ga3e329d1e3a1d262c03b8f0c107164ea2)`(const uint8_t * mhr,uint8_t * dst,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` * dst_pan)`            | Gets destination address from MAC header.
`public int `[`ieee802154_dst_filter`](#group__net__ieee802154__header_1ga4635dcdecf24b59487d87a00f19f0c35)`(const uint8_t * mhr,uint16_t pan,`[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` short_addr,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * ext_addr)`            | Check whether a frame pass the IEEE 802.15.4 frame filter.
`public inline static uint8_t `[`ieee802154_get_seq`](#group__net__ieee802154__header_1ga97fd1c5c5ed2e6e8a5d8cdd53a7d0918)`(const uint8_t * mhr)`            | Gets sequence number from MAC header.
`public inline static `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * `[`ieee802154_get_iid`](#group__net__ieee802154__header_1ga7e05c163225b067c91e278825229be4a)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64,const uint8_t * addr,size_t addr_len)`            | Generates an IPv6 interface identifier from an IEEE 802.15.4 address.
`public inline static int16_t `[`ieee802154_rssi_to_dbm`](#group__net__ieee802154__header_1gaaa94fbc57033c08a200cfbd7e4175a22)`(uint8_t rssi)`            | Convert from RSSI scale to dBm.
`public inline static uint8_t `[`ieee802154_dbm_to_rssi`](#group__net__ieee802154__header_1ga60433a8f442167ceec4e5995ea8fd50a)`(int16_t dbm)`            | Convert from dBm scale to RSSI.

## Members

#### `define `[`IEEE802154_SFD`](#group__net__ieee802154__header_1ga29ceac086e3081cf5614d6d5cff478bc) 

Default start frame delimiter.

#### `define `[`IEEE802154_FRAME_LEN_MAX`](#group__net__ieee802154__header_1ga2d919240154a1a93874f8d41c43bf7c6) 

maximum 802.15.4 frame length

#### `define `[`IEEE802154G_FRAME_LEN_MAX`](#group__net__ieee802154__header_1ga0397a2525092e58efdb6592ddd6d00fc) 

maximum 802.15.4g-2012 frame length

#### `define `[`IEEE802154_ACK_FRAME_LEN`](#group__net__ieee802154__header_1gaa5a463cafcecef82c7bfb455f3b5cad8) 

ACK frame length.

#### `define `[`IEEE802154_LIFS_SYMS`](#group__net__ieee802154__header_1gadf0ec4fe8b8f3df32ffaf7fe117365c3) 

Number of symbols to wait during Long Inter Frame Spacing.

#### `define `[`IEEE802154_SIFS_SYMS`](#group__net__ieee802154__header_1ga87fca1d53493606e8d780f7293e3ed39) 

Number of symbols to wait during Short Inter Frame Spacing.

#### `define `[`IEEE802154_SIFS_MAX_FRAME_SIZE`](#group__net__ieee802154__header_1gae808fadb14c91b1f684bb2e787f51ab1) 

Maximum frame size to consider a frame as short.

#### `define `[`IEEE802154_ACK_TIMEOUT_SYMS`](#group__net__ieee802154__header_1ga5768673788d736b24ff5d8e59f0e1f40) 

ACK Timeout period in symbols.

#### `define `[`IEEE802154_RADIO_RSSI_OFFSET`](#group__net__ieee802154__header_1gabc99fd0eff73ae226ce7024ec941fcf0) 

value of measured power when RSSI is zero.

This value is defined in the IEEE 802.15.4 standard

#### `define `[`IEEE802154_PHY_MR_FSK_PHR_LEN`](#group__net__ieee802154__header_1gaebfb8f6bf1d786c524b76d612dcef138) 

MR-FSK PHY header length.

#### `define `[`IEEE802154_PHY_MR_FSK_2FSK_SFD_LEN`](#group__net__ieee802154__header_1ga3b24d4702383ee3fc3363ca00f48686d) 

MR-FSK SFD length on Filtered 2-FSK.

#### `define `[`IEEE802154G_ATURNAROUNDTIME_US`](#group__net__ieee802154__header_1ga203fc31f32b5443b01679073b5fdd1a4) 

For the SUN PHYs, the value is 1 ms expressed in symbol periods, rounded up to the next integer number of symbol periods using the ceiling() function.

802.15.4g, Table 70 (p. 43)

#### `define `[`IEEE802154_ATURNAROUNDTIME_IN_SYMBOLS`](#group__net__ieee802154__header_1gad654a2408d8a9e7292568a5967789352) 

IEEE Std 802.15.4-2020 Table 11-1—PHY constants: The value is 12 for all other PHYs.

#### `define `[`IEEE802154_CCA_DURATION_IN_SYMBOLS`](#group__net__ieee802154__header_1ga0b76a006e55b574dfd7d5e0002d254a0) 

IEEE Std 802.15.4-2020 Table 11-1—PHY constants: For all other PHYs¹, the duration of 8 symbol periods.

[1] all but MR-O-QPSK

#### `define `[`CONFIG_IEEE802154_DEFAULT_CSMA_CA_MIN_BE`](#group__net__ieee802154__header_1ga8157247c4da742f6fc62c6ad8be2fad9) 

IEEE802.15.4 default value for minimum backoff exponent.

#### `define `[`CONFIG_IEEE802154_DEFAULT_CSMA_CA_RETRIES`](#group__net__ieee802154__header_1gab821f90a4b625e3b0119c19b6f9a75fd) 

IEEE802.15.4 default value for maximum number of CSMA-CA retries.

#### `define `[`CONFIG_IEEE802154_DEFAULT_CSMA_CA_MAX_BE`](#group__net__ieee802154__header_1ga9d3d01b01db9653ab049cd4b83ee5f45) 

IEEE802.15.4 default value for maximum backoff exponent.

#### `define `[`CONFIG_IEEE802154_CCA_THRESH_DEFAULT`](#group__net__ieee802154__header_1ga7fb25f74c4ab509e7d734b79f7ff1c02) 

IEEE802.15.4 default value for CCA threshold (in dBm)

#### `define `[`CONFIG_IEEE802154_DEFAULT_MAX_FRAME_RETRANS`](#group__net__ieee802154__header_1ga924c0dfac895163c8de61d431a94040c) 

IEEE802.15.4 default value for maximum frame retries.

#### `define `[`CONFIG_IEEE802154_AUTO_ACK_DISABLE`](#group__net__ieee802154__header_1ga7b13ed727113fa8c4e207eb2f918b67b) 

Disable Auto ACK support.

#### `define `[`CONFIG_IEEE802154_DEFAULT_ACK_REQ`](#group__net__ieee802154__header_1ga369cb72ea222ae048a1438d3d70b02ef) 

Request ACKs by default.

#### `define `[`CONFIG_IEEE802154_DSME_CAP_REDUCTION`](#group__net__ieee802154__header_1ga31afc6b22e936d4452395129479d2a5d) 

Enable DSME CAP reduction.

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_MAC_RESPONSE_WAIT_TIME`](#group__net__ieee802154__header_1gaf8454e4ddfa7d015859c6b34d7019c83) 

Set the maximum DSME MAC response wait time.

This configuration sets the maximum wait times for MAC commands (association, DSME GTS allocation, etc). The unit is "base superframe duration" (60 * symbol_time_us).

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_SCAN_DURATION`](#group__net__ieee802154__header_1ga90ede65885c67636524f45b3e3b41f3c) 

Set the scan duration.

Set the scan duration for each channel to `60 * symbol_time_us * (2^scanDuration + 1)`

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_SUPERFRAME_ORDER`](#group__net__ieee802154__header_1ga8f79e05ed5e61d1900e0f630aa662a4a) 

Set IEEE 802.15.4 DSME Superframe Order (SO) The SO sets the slot duration to `60 * symbol_time_us * 2^SO` usecs.

E.g for O-QPSK an SO=3 renders a slot duration of `60 * 16 * 8` = 7.6 ms and a superframe duration of 122.88 ms.

Settings this value to 3 allows to transmit full IEEE 802.15.4 O-QPSK frames (127 bytes).

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_MULTISUPERFRAME_ORDER`](#group__net__ieee802154__header_1gae35970cf9219a86a89d857763f944b78) 

Set IEEE 802.15.4 DSME Multisuperframe Order (MO)

The MO sets the number of superframes per multisuperframe to `2^(MO-SO)`.

**See also**: [CONFIG_IEEE802154_DSME_SUPERFRAME_ORDER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga8f79e05ed5e61d1900e0f630aa662a4a)

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_BEACON_ORDER`](#group__net__ieee802154__header_1ga0cf916c449c052f9f9cfbc34fddfeaa3) 

Set IEEE 802.15.4 DSME Beacon Order (BO)

The BO sets the beacon interval to `2^(BO-SO)` superframes.

**See also**: [CONFIG_IEEE802154_DSME_SUPERFRAME_ORDER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga8f79e05ed5e61d1900e0f630aa662a4a)

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_STATIC_GTS`](#group__net__ieee802154__header_1gae76008fe31744bb09491848b8ea8e6fd) 

Use static GTS allocation.

When set, the MAC implementation will not use scheduling functions. This requires that the upper layer allocates slots manually using [NETOPT_GTS_ALLOC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a05fe03df78639b8bac5ebc5e60705b28).

**See also**: [CONFIG_IEEE802154_DSME_STATIC_GTS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gae76008fe31744bb09491848b8ea8e6fd)

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_GTS_EXPIRATION`](#group__net__ieee802154__header_1ga2a9af2289522674b48720275d8f4f9ff) 

Set expiration time of DSME GTS slot.

Sets the expiration time of DSME GTS slot (in number of idle slots). If DSME detects no activity, it will deallocate the GTS slot.

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `define `[`CONFIG_IEEE802154_DSME_MIN_COORD_LQI`](#group__net__ieee802154__header_1ga017582490a8acff621195981620bde13) 

Set the minimum LQI to consider a beacon from a coordinator valid.

For the moment, this is only valid for [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme)

#### `enum `[`ieee802154_phy_mode_t`](#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_PHY_DISABLED            | PHY disabled, no mode selected.
IEEE802154_PHY_BPSK            | Binary Phase Shift Keying.
IEEE802154_PHY_ASK            | Amplitude-Shift Keying.
IEEE802154_PHY_OQPSK            | Offset Quadrature Phase-Shift Keying.
IEEE802154_PHY_MR_OQPSK            | Multi-Rate Offset Quadrature Phase-Shift Keying.
IEEE802154_PHY_MR_OFDM            | Multi-Rate Orthogonal Frequency-Division Multiplexing.
IEEE802154_PHY_MR_FSK            | Multi-Rate Frequency Shift Keying.

802.15.4 PHY modes

#### `enum `[`@375`](#group__net__ieee802154__header_1ga9f7a7696ae1c6993af6334642d77ce4c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_FEC_NONE            | no forward error correction
IEEE802154_FEC_NRNSC            | non-recursive and non-systematic code
IEEE802154_FEC_RSC            | recursive and systematic code

802.15.4 forward error correction schemes

#### `public size_t `[`ieee802154_set_frame_hdr`](#group__net__ieee802154__header_1ga5f2355e868da5432d8693a9a3bc86d7e)`(uint8_t * buf,const uint8_t * src,size_t src_len,const uint8_t * dst,size_t dst_len,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` src_pan,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` dst_pan,uint8_t flags,uint8_t seq)` 

Initializes an IEEE 802.15.4 MAC frame header in `buf`.

Resulting header must fit in memory allocated at `buf`.

**See also**: IEEE Std 802.15.4-2011, 5.2.1 General MAC frame format.

If `dst` is NULL the IEEE802154_FCF_ACK_REQ will be unset to prevent flooding the network.

#### Parameters
* `buf` Target memory for frame header. 

* `src` Source address for frame in network byteorder. May be NULL if [IEEE802154_FCF_SRC_ADDR_VOID](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga6c50498dd5b9e6d7408b935eab2c66a7) is set in `flags`. 

* `src_len` Length of `src`. Legal values are:

* 0 (will set [IEEE802154_FCF_SRC_ADDR_VOID](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga6c50498dd5b9e6d7408b935eab2c66a7) in MHR)

* 2 (will set [IEEE802154_FCF_SRC_ADDR_SHORT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga10e9e5cc0d39b2f5e10473dc18079800) in MHR)

* 8 (will set [IEEE802154_FCF_SRC_ADDR_LONG](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga3c695487e5e3d7b037378f80669950e0) in MHR) 

* `dst` Destination address for frame in network byteorder. May be NULL if [IEEE802154_FCF_SRC_ADDR_VOID](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga6c50498dd5b9e6d7408b935eab2c66a7) is set in `flags`. 

* `dst_len` Length of `dst`. Legal values are:

* 0 (will set [IEEE802154_FCF_DST_ADDR_VOID](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga8646dd2916574569f333b777bd2770e7) in MHR)

* 2 (will set [IEEE802154_FCF_DST_ADDR_SHORT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gae8a2d03107a537e4f8debc5131c16cb1) in MHR)

* 8 (will set [IEEE802154_FCF_DST_ADDR_LONG](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga0f185c79c12133a798a687dd019b4d47) in MHR) 

* `src_pan` Source PAN ID in little-endian. May be 0 if [IEEE802154_FCF_PAN_COMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga5a545e9a16918df85a10e61db1cc3429) is set in `flags`. Otherwise, it will be ignored, when [IEEE802154_FCF_PAN_COMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga5a545e9a16918df85a10e61db1cc3429) is set. 

* `dst_pan` Destination PAN ID in little-endian. 

* `flags` Flags for the frame. These are interchangeable with the first byte of the IEEE 802.15.4 FCF. This means that it encompasses the type values, [IEEE802154_FCF_SECURITY_EN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga31be9efb77d3bb884d332409de8fbfb8), [IEEE802154_FCF_FRAME_PEND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gafad05982940cd77caed551fd322ca885), and [IEEE802154_FCF_ACK_REQ](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ga962c3d663823685c3831719422764e21). 

* `seq` Sequence number for frame.

The version field in the FCF will be set implicitly to version 1.

#### Returns
Size of frame header on success. 

#### Returns
0, on error (flags set to unexpected state).

#### `public size_t `[`ieee802154_get_frame_hdr_len`](#group__net__ieee802154__header_1ga3973a48175eb75516fe353ba60bcd292)`(const uint8_t * mhr)` 

Get length of MAC header.

> Todo: include security header implications

#### Parameters
* `mhr` MAC header.

#### Returns
Length of MAC header on success. 

#### Returns
0, on error (source mode or destination mode set to reserved).

#### `public int `[`ieee802154_get_src`](#group__net__ieee802154__header_1ga25610e6c53c638b14e36b2372e12e75d)`(const uint8_t * mhr,uint8_t * src,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` * src_pan)` 

Gets source address from MAC header.

(`src` != NULL) && (`src_pan` != NULL)

#### Parameters
* `mhr` MAC header. 

* `src` Source address in network byte order in MAC header. 

* `src_pan` Source PAN little-endian byte order in MAC header.

#### Returns
Length of source address. 

#### Returns
-EINVAL, if `mhr` contains unexpected flags.

#### `public int `[`ieee802154_get_dst`](#group__net__ieee802154__header_1ga3e329d1e3a1d262c03b8f0c107164ea2)`(const uint8_t * mhr,uint8_t * dst,`[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` * dst_pan)` 

Gets destination address from MAC header.

(`dst` != NULL) && (`dst_pan` != NULL)

#### Parameters
* `mhr` MAC header. 

* `dst` Destination address in network byte order in MAC header. 

* `dst_pan` Destination PAN in little-endian byte order in MAC header.

#### Returns
Length of destination address. 

#### Returns
-EINVAL, if `mhr` contains unexpected flags.

#### `public int `[`ieee802154_dst_filter`](#group__net__ieee802154__header_1ga4635dcdecf24b59487d87a00f19f0c35)`(const uint8_t * mhr,uint16_t pan,`[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` short_addr,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * ext_addr)` 

Check whether a frame pass the IEEE 802.15.4 frame filter.

A frame passes the frame filter only if:

* The PAN ID matches the PAN ID of the frame filter or the broadcast PAN ID

* Either the Short or Extended Address matches the frame filter OR the Short Address is the broadcast address.

#### Parameters
* `mhr` MAC header (PSDU) 

* `pan` PAN ID of the frame filter. 

* `short_addr` Short Address of the frame filter. 

* `ext_addr` Extended Address of the frame filter.

#### Returns
0 if frame passes the frame filter. 

#### Returns
1 if frame doesn't pass the frame filter.

#### `public inline static uint8_t `[`ieee802154_get_seq`](#group__net__ieee802154__header_1ga97fd1c5c5ed2e6e8a5d8cdd53a7d0918)`(const uint8_t * mhr)` 

Gets sequence number from MAC header.

length of allocated space at `mhr` > 3

#### Parameters
* `mhr` MAC header.

#### Returns
The sequence number in `mhr`.

#### `public inline static `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * `[`ieee802154_get_iid`](#group__net__ieee802154__header_1ga7e05c163225b067c91e278825229be4a)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64,const uint8_t * addr,size_t addr_len)` 

Generates an IPv6 interface identifier from an IEEE 802.15.4 address.

(`eui64` != NULL) && (`addr` != NULL) 

**See also**: [RFC 4944, section 6 ](https://tools.ietf.org/html/rfc4944#section-6)

**See also**: [RFC 6282, section 3.2.2 ](https://tools.ietf.org/html/rfc6282#section-3.2.2)

#### Parameters
* `eui64` The resulting EUI-64. 

* `addr` An IEEE 802.15.4 address. 

* `addr_len` The length of `addr`. Must be 2 (short address), 4 (PAN ID + short address), or 8 (long address).

#### Returns
Copy of `eui64` on success. 

#### Returns
NULL, if `addr_len` was of illegal length.

#### `public inline static int16_t `[`ieee802154_rssi_to_dbm`](#group__net__ieee802154__header_1gaaa94fbc57033c08a200cfbd7e4175a22)`(uint8_t rssi)` 

Convert from RSSI scale to dBm.

The RSSI calculation is based on the IEEE 802.15.4 2020 specification and it's represented as one octet of integer.

RSSI equal to zero maps to -174 dBm and has the same scale as dBm (1 RSSI step == 1 dBm). Therefore an RSSI value of 254 maps to +80 dBm.

RSSI == 255 is defined as reserved by the standard and ignored by this function.

#### Parameters
* `rssi` RF power in RSSI scale

#### Returns
RF power in dBm scale

#### `public inline static uint8_t `[`ieee802154_dbm_to_rssi`](#group__net__ieee802154__header_1ga60433a8f442167ceec4e5995ea8fd50a)`(int16_t dbm)` 

Convert from dBm scale to RSSI.

The RSSI calculation is based on the IEEE 802.15.4 2020 specification and it's represented as one octet of integer.

RSSI equal to zero maps to -174 dBm and has the same scale as dBm (1 RSSI step == 1 dBm). Therefore an RSSI value of 254 maps to +80 dBm.

#### Parameters
* `dbm` RF power in dBm scale.

#### Returns
RF power in RSSI scale.

