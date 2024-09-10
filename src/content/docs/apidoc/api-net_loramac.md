---
title: api-net_loramac.md
description: api-net_loramac.md
---
# group `net_loramac` 

LoRaMAC definitions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LORAMAC_DEFAULT_ADR_ACK_LIMIT`](#group__net__loramac_1ga722c559bba7d9377317f6c2a290f652b)            | Default adaptive datarate ACK limit (in s)
`define `[`LORAMAC_DEFAULT_ADR_ACK_DELAY`](#group__net__loramac_1gaece9209e23fefff49fb6e618b22beae1)            | Default adaptive datarate ACK delay (in s)
`define `[`LORAMAC_DEFAULT_ADR_TIMEOUT`](#group__net__loramac_1gaf9b15d52b7a9b8a41d7fe70582fa5aea)            | Default adaptive datarate timeout.
`define `[`LORAMAC_DEFAULT_RX2_DELAY`](#group__net__loramac_1gaf2008f825b0f7514c39f9f3df1baaee9)            | Default second RX window delay (in ms)
`public inline static uint32_t `[`lora_time_on_air`](#group__net__loramac_1gae78237657d90f489aa0b3f07503529f3)`(size_t pkt_len,`[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` dr,uint8_t cr)`            | Compute the time on air of a LoRa packet.
`struct `[`loramac_channel_t`](#structloramac__channel__t) | A LoRaMAC network channel.

## Members

#### `define `[`LORAMAC_DEFAULT_ADR_ACK_LIMIT`](#group__net__loramac_1ga722c559bba7d9377317f6c2a290f652b) 

Default adaptive datarate ACK limit (in s)

This feature is not yet supported.

#### `define `[`LORAMAC_DEFAULT_ADR_ACK_DELAY`](#group__net__loramac_1gaece9209e23fefff49fb6e618b22beae1) 

Default adaptive datarate ACK delay (in s)

This feature is not yet supported.

#### `define `[`LORAMAC_DEFAULT_ADR_TIMEOUT`](#group__net__loramac_1gaf9b15d52b7a9b8a41d7fe70582fa5aea) 

Default adaptive datarate timeout.

This feature is not yet supported.

#### `define `[`LORAMAC_DEFAULT_RX2_DELAY`](#group__net__loramac_1gaf2008f825b0f7514c39f9f3df1baaee9) 

Default second RX window delay (in ms)

#### `public inline static uint32_t `[`lora_time_on_air`](#group__net__loramac_1gae78237657d90f489aa0b3f07503529f3)`(size_t pkt_len,`[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` dr,uint8_t cr)` 

Compute the time on air of a LoRa packet.

This function uses a precomputed table to calculate time on air without using floating point arithmetic

#### Parameters
* `pkt_len` Length of a packet in bytes 

* `dr` Datarate used to send the packet 

* `cr` Coding rate used to send the packet 

#### Returns
time on air in us

# struct `loramac_channel_t` 

A LoRaMAC network channel.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`freq`](#structloramac__channel__t_1aef830dee111206e73080af71ea35de99) | Center frequency in Hz.
`public uint8_t `[`index`](#structloramac__channel__t_1aa1c360fd75f6a3ebd872da5fc4e6019c) | Channel index in defined list.
`public uint8_t `[`bw`](#structloramac__channel__t_1aaf6427cbfcc91385cd76cf7cf41ba8ab) | Bandwidth index.
`public uint8_t `[`dr_min`](#structloramac__channel__t_1afae9a354a2f4229559c32d4d6a72b6a8) | Minimum datarate index.
`public uint8_t `[`dr_max`](#structloramac__channel__t_1a1694c11499e7b1693e487b9edabdad2b) | Maximum datarate index.
`public uint8_t `[`dcycle`](#structloramac__channel__t_1ad0bffe59a105c62080b0cda6ed79a6aa) | Duty cycle to use on this channel (1 to 100)

## Members

#### `public uint32_t `[`freq`](#structloramac__channel__t_1aef830dee111206e73080af71ea35de99) 

Center frequency in Hz.

#### `public uint8_t `[`index`](#structloramac__channel__t_1aa1c360fd75f6a3ebd872da5fc4e6019c) 

Channel index in defined list.

#### `public uint8_t `[`bw`](#structloramac__channel__t_1aaf6427cbfcc91385cd76cf7cf41ba8ab) 

Bandwidth index.

#### `public uint8_t `[`dr_min`](#structloramac__channel__t_1afae9a354a2f4229559c32d4d6a72b6a8) 

Minimum datarate index.

#### `public uint8_t `[`dr_max`](#structloramac__channel__t_1a1694c11499e7b1693e487b9edabdad2b) 

Maximum datarate index.

#### `public uint8_t `[`dcycle`](#structloramac__channel__t_1ad0bffe59a105c62080b0cda6ed79a6aa) 

Duty cycle to use on this channel (1 to 100)

