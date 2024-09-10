---
title: api-sys_can_dll.md
description: api-sys_can_dll.md
---
# group `sys_can_dll` 

CAN Data Link Layer.

The Data Link Layer is composed of the device, router, pkt and dll files. It can be used to send and receive raw CAN frames through multiple CAN controllers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CAN_MAX_DLEN`](#group__sys__can__dll_1gaf64b4fdfe44fc19065702d1eedb9ab43)            | Max data length for a CAN frame.
`enum `[`can_state`](#group__sys__can__dll_1gac7ec472c26c564dd7067c49f67c8d2f7)            | CAN operational and error states.
`struct `[`can_frame`](#structcan__frame) | Controller Area [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) frame.
`struct `[`can_filter`](#structcan__filter) | Controller Area [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) filter.
`struct `[`can_bittiming`](#structcan__bittiming) | CAN bit-timing parameters.
`struct `[`can_bittiming_const`](#structcan__bittiming__const) | CAN hardware-dependent bit-timing constant.

## Members

#### `define `[`CAN_MAX_DLEN`](#group__sys__can__dll_1gaf64b4fdfe44fc19065702d1eedb9ab43) 

Max data length for a CAN frame.

#### `enum `[`can_state`](#group__sys__can__dll_1gac7ec472c26c564dd7067c49f67c8d2f7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CAN_STATE_ERROR_ACTIVE            | RX/TX error count < 96.
CAN_STATE_ERROR_WARNING            | RX/TX error count < 128.
CAN_STATE_ERROR_PASSIVE            | RX/TX error count < 256.
CAN_STATE_BUS_OFF            | RX/TX error count >= 256.
CAN_STATE_STOPPED            | Device is stopped.
CAN_STATE_SLEEPING            | Device is sleeping.
CAN_STATE_MAX            | 

CAN operational and error states.

# struct `can_frame` 

Controller Area [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) frame.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`can_id`](#structcan__frame_1ac6aeb5fbc99596a37fe1519f3aa8410a) | 32 bit CAN_ID + EFF/RTR/ERR flags
`public uint8_t `[`can_dlc`](#structcan__frame_1aa055f09fd81b299201618396b7dc9314) | frame payload length in byte (0 .
`public uint8_t `[`__pad`](#structcan__frame_1a4f7ab393ab53bd407c9f89b787bb1f06) | padding
`public uint8_t `[`__res0`](#structcan__frame_1aaf9dc3da2700c8846a903dccdc3ac005) | reserved / padding
`public uint8_t `[`__res1`](#structcan__frame_1a9b0e26af790a3cf93c93143640b7c217) | reserved / padding
`public uint8_t `[`data`](#structcan__frame_1ac4b43443b2a338d35f0e1d3ef8355960) | Frame data.

## Members

#### `public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`can_id`](#structcan__frame_1ac6aeb5fbc99596a37fe1519f3aa8410a) 

32 bit CAN_ID + EFF/RTR/ERR flags

#### `public uint8_t `[`can_dlc`](#structcan__frame_1aa055f09fd81b299201618396b7dc9314) 

frame payload length in byte (0 .

. CAN_MAX_DLEN)

#### `public uint8_t `[`__pad`](#structcan__frame_1a4f7ab393ab53bd407c9f89b787bb1f06) 

padding

#### `public uint8_t `[`__res0`](#structcan__frame_1aaf9dc3da2700c8846a903dccdc3ac005) 

reserved / padding

#### `public uint8_t `[`__res1`](#structcan__frame_1a9b0e26af790a3cf93c93143640b7c217) 

reserved / padding

#### `public uint8_t `[`data`](#structcan__frame_1ac4b43443b2a338d35f0e1d3ef8355960) 

Frame data.

# struct `can_filter` 

Controller Area [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) filter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`can_id`](#structcan__filter_1a5fccaff73b647ddc50fb712f936f0b33) | CAN ID.
`public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`can_mask`](#structcan__filter_1a072a474e675c07a4d36bf9c940e8c571) | Mask.

## Members

#### `public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`can_id`](#structcan__filter_1a5fccaff73b647ddc50fb712f936f0b33) 

CAN ID.

#### `public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`can_mask`](#structcan__filter_1a072a474e675c07a4d36bf9c940e8c571) 

Mask.

# struct `can_bittiming` 

CAN bit-timing parameters.

For further information, please read chapter "8 BIT TIMING
REQUIREMENTS" of the "Bosch CAN Specification version 2.0": [https://www.kvaser.com/software/7330130980914/V1/can2spec.pdf](https://www.kvaser.com/software/7330130980914/V1/can2spec.pdf)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`bitrate`](#structcan__bittiming_1a663bbedb0322b1fc3e86fab66fc03dce) | Bit-rate in bits/second.
`public uint32_t `[`sample_point`](#structcan__bittiming_1a3f5b0f9ead7609488ad13895c0cfcf86) | Sample point in one-tenth of a percent.
`public uint32_t `[`tq`](#structcan__bittiming_1a0cd16b6e4201f146f12b96a86cd4860e) | Time quanta (TQ) in nanoseconds.
`public uint32_t `[`prop_seg`](#structcan__bittiming_1aec251f69e22cb83161a7c73d1aa20231) | Propagation segment in TQs.
`public uint32_t `[`phase_seg1`](#structcan__bittiming_1a5091d7fbce1c7404c1746723551a42c7) | Phase buffer segment 1 in TQs.
`public uint32_t `[`phase_seg2`](#structcan__bittiming_1ace20b39f235384cd5477f7935eab190e) | Phase buffer segment 2 in TQs.
`public uint32_t `[`sjw`](#structcan__bittiming_1ad844fbd6ec6401994a5904b6997a1ed1) | Synchronisation jump width in TQs.
`public uint32_t `[`brp`](#structcan__bittiming_1acb2e7b0dc0edb75de49064e47b82194c) | Bit-rate prescaler.

## Members

#### `public uint32_t `[`bitrate`](#structcan__bittiming_1a663bbedb0322b1fc3e86fab66fc03dce) 

Bit-rate in bits/second.

#### `public uint32_t `[`sample_point`](#structcan__bittiming_1a3f5b0f9ead7609488ad13895c0cfcf86) 

Sample point in one-tenth of a percent.

#### `public uint32_t `[`tq`](#structcan__bittiming_1a0cd16b6e4201f146f12b96a86cd4860e) 

Time quanta (TQ) in nanoseconds.

#### `public uint32_t `[`prop_seg`](#structcan__bittiming_1aec251f69e22cb83161a7c73d1aa20231) 

Propagation segment in TQs.

#### `public uint32_t `[`phase_seg1`](#structcan__bittiming_1a5091d7fbce1c7404c1746723551a42c7) 

Phase buffer segment 1 in TQs.

#### `public uint32_t `[`phase_seg2`](#structcan__bittiming_1ace20b39f235384cd5477f7935eab190e) 

Phase buffer segment 2 in TQs.

#### `public uint32_t `[`sjw`](#structcan__bittiming_1ad844fbd6ec6401994a5904b6997a1ed1) 

Synchronisation jump width in TQs.

#### `public uint32_t `[`brp`](#structcan__bittiming_1acb2e7b0dc0edb75de49064e47b82194c) 

Bit-rate prescaler.

# struct `can_bittiming_const` 

CAN hardware-dependent bit-timing constant.

Used for calculating and checking bit-timing parameters

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`tseg1_min`](#structcan__bittiming__const_1a139c4e8b5b0367416935bde1ed30fbf6) | Time segment 1 = prop_seg + phase_seg1, min value.
`public uint32_t `[`tseg1_max`](#structcan__bittiming__const_1a750988da89377132b3566a22bc98263c) | Time segment 1, max value.
`public uint32_t `[`tseg2_min`](#structcan__bittiming__const_1a7b6828c413226d157fb408658b2324b3) | Time segment 2 = phase_seg2, min value.
`public uint32_t `[`tseg2_max`](#structcan__bittiming__const_1aa802f37fa96ed0c33d0eb9f9181da605) | Time segment 2, max value.
`public uint32_t `[`sjw_max`](#structcan__bittiming__const_1af276493644ed839f15564637d10eb0c0) | Synchronisation jump width.
`public uint32_t `[`brp_min`](#structcan__bittiming__const_1a02f327be90f592d657bef70f24ee60cb) | Bit-rate prescaler, min value.
`public uint32_t `[`brp_max`](#structcan__bittiming__const_1a411931393ed4dcfeabe4ec8678e928aa) | Bit-rate prescaler, max value.
`public uint32_t `[`brp_inc`](#structcan__bittiming__const_1a8919a22bcc529d4f423f2e5aa631db9a) | Bit-rate prescaler, increment.

## Members

#### `public uint32_t `[`tseg1_min`](#structcan__bittiming__const_1a139c4e8b5b0367416935bde1ed30fbf6) 

Time segment 1 = prop_seg + phase_seg1, min value.

#### `public uint32_t `[`tseg1_max`](#structcan__bittiming__const_1a750988da89377132b3566a22bc98263c) 

Time segment 1, max value.

#### `public uint32_t `[`tseg2_min`](#structcan__bittiming__const_1a7b6828c413226d157fb408658b2324b3) 

Time segment 2 = phase_seg2, min value.

#### `public uint32_t `[`tseg2_max`](#structcan__bittiming__const_1aa802f37fa96ed0c33d0eb9f9181da605) 

Time segment 2, max value.

#### `public uint32_t `[`sjw_max`](#structcan__bittiming__const_1af276493644ed839f15564637d10eb0c0) 

Synchronisation jump width.

#### `public uint32_t `[`brp_min`](#structcan__bittiming__const_1a02f327be90f592d657bef70f24ee60cb) 

Bit-rate prescaler, min value.

#### `public uint32_t `[`brp_max`](#structcan__bittiming__const_1a411931393ed4dcfeabe4ec8678e928aa) 

Bit-rate prescaler, max value.

#### `public uint32_t `[`brp_inc`](#structcan__bittiming__const_1a8919a22bcc529d4f423f2e5aa631db9a) 

Bit-rate prescaler, increment.

