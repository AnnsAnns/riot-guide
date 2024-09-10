---
title: api-drivers_cc1xxx.md
description: api-drivers_cc1xxx.md
---
# group `drivers_cc1xxx` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CC1XXX_DEFAULT_PROTOCOL`](#group__drivers__cc1xxx_1gad16ab687703ac07a28f9b39c1ad49453)            | Default protocol for data that is coming in.
`define `[`CC1XXX_ADDR_SIZE`](#group__drivers__cc1xxx_1gad659614f3db26bfb6aa22b00548958d4)            | Size of a layer 2 address on CC110x/CC1200 transceivers.
`define `[`CC1XXX_BCAST_ADDR`](#group__drivers__cc1xxx_1gac6d916a60413ec736a926e6e800712ec)            | Special layer 2 address reserved for broadcast frames.
`public int `[`gnrc_netif_cc1xxx_create`](#group__drivers__cc1xxx_1ga46e96deb1fd46cb3ed5bb3c78cd0046b)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Creates a CC110x/CC1200 network interface.
`public void `[`cc1xxx_eui_get`](#group__drivers__cc1xxx_1ga8bac248ae45d469607592d9e4f4c95d2)`(const `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,uint8_t * eui)`            | Retrieve a unique layer-2 address for a cc1xxx instance.
`struct `[`cc1xxx_l2hdr_t`](#structcc1xxx__l2hdr__t) | Layer 2 header used in CC1xxx frames.
`struct `[`cc1xxx_t`](#structcc1xxx__t) | Users of the CC110x/CC1200 adaption layer have to overlap their device handle with this structure.

## Members

#### `define `[`CC1XXX_DEFAULT_PROTOCOL`](#group__drivers__cc1xxx_1gad16ab687703ac07a28f9b39c1ad49453) 

Default protocol for data that is coming in.

#### `define `[`CC1XXX_ADDR_SIZE`](#group__drivers__cc1xxx_1gad659614f3db26bfb6aa22b00548958d4) 

Size of a layer 2 address on CC110x/CC1200 transceivers.

#### `define `[`CC1XXX_BCAST_ADDR`](#group__drivers__cc1xxx_1gac6d916a60413ec736a926e6e800712ec) 

Special layer 2 address reserved for broadcast frames.

#### `public int `[`gnrc_netif_cc1xxx_create`](#group__drivers__cc1xxx_1ga46e96deb1fd46cb3ed5bb3c78cd0046b)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Creates a CC110x/CC1200 network interface.

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `stack` The stack for the network interface's thread. 

* `stacksize` Size of `stack`. 

* `priority` Priority for the network interface's thread. 

* `name` Name for the network interface. May be NULL. 

* `dev` Device for the interface.

**See also**: [gnrc_netif_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga94c18818950185514dae7271abed4d86)

#### Returns
0 on success 

#### Returns
negative number on error

#### `public void `[`cc1xxx_eui_get`](#group__drivers__cc1xxx_1ga8bac248ae45d469607592d9e4f4c95d2)`(const `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,uint8_t * eui)` 

Retrieve a unique layer-2 address for a cc1xxx instance.

This function has **attribute**((weak)) so you can override this, e.g. to construct an address. By default [luid_get](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__luid_1gaf8a68544e02887426ca9b1e6d3edd3e2) is used.

#### Parameters
* `dev` The device descriptor of the transceiver 

* `eui` Destination to write the address to

# struct `cc1xxx_l2hdr_t` 

Layer 2 header used in CC1xxx frames.

This structure has the same memory layout as the data send in the frames.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`dest_addr`](#structcc1xxx__l2hdr__t_1a3b7d60f2432483e289f093ce65a94cda) | Destination layer 2 address.
`public uint8_t `[`src_addr`](#structcc1xxx__l2hdr__t_1a705d7b9c6d99018f6eeeb457a458eebc) | Source layer 2 address.

## Members

#### `public uint8_t `[`dest_addr`](#structcc1xxx__l2hdr__t_1a3b7d60f2432483e289f093ce65a94cda) 

Destination layer 2 address.

#### `public uint8_t `[`src_addr`](#structcc1xxx__l2hdr__t_1a705d7b9c6d99018f6eeeb457a458eebc) 

Source layer 2 address.

# struct `cc1xxx_t` 

Users of the CC110x/CC1200 adaption layer have to overlap their device handle with this structure.

The first two fields of the device structure of any transceiver driver using this adaption layer have to be equal to the `[cc1xxx_t](#structcc1xxx__t)` structure. This allows efficient access to the current layer 2 address of the device from the adaption layer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structcc1xxx__t_1a472e5386b73e91337c184d98ac4147a2) | RIOT's interface to this driver.
`public uint8_t `[`addr`](#structcc1xxx__t_1ac647a23f363a5a3e58c0391caec97a14) | Layer 2 address of this device.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structcc1xxx__t_1a472e5386b73e91337c184d98ac4147a2) 

RIOT's interface to this driver.

#### `public uint8_t `[`addr`](#structcc1xxx__t_1ac647a23f363a5a3e58c0391caec97a14) 

Layer 2 address of this device.

