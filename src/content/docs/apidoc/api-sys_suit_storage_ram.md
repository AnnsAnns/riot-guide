---
title: api-sys_suit_storage_ram.md
description: api-sys_suit_storage_ram.md
---
# group `sys_suit_storage_ram` 

RAM blob SUIT payload storage backends.

RAM-based storage backend for SUIT OTA updates Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

This module implements a RAM-backed storage interface for SUIT. The main purpose is mock testing the SUIT implementation, however the interface could also be used for to target backup ram storage by changing [CONFIG_SUIT_STORAGE_RAM_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage__ram_1gab96694588bb20e0d873773ffb5828f68) to store it in backup ram.

The module uses a .ram.### structure where the number indicates the index of the memory region being targeted.

The install function is implemented as a noop. There is no distinction between valid content and not yet invalidated content.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SUIT_STORAGE_RAM_SIZE`](#group__sys__suit__storage__ram_1gab96694588bb20e0d873773ffb5828f68)            | Size of each memory region.
`define `[`CONFIG_SUIT_STORAGE_RAM_REGIONS`](#group__sys__suit__storage__ram_1ga46e49f82fa263234ecafc211de03ad9f)            | Number of allocated regions.
`define `[`CONFIG_SUIT_STORAGE_RAM_ATTR`](#group__sys__suit__storage__ram_1ga93f92e3aef2fccdec9635616f76aaf2d)            | Extra attributes for allocating the RAM struct.
`define `[`CONFIG_SUIT_STORAGE_RAM_LOCATION_SEPARATOR`](#group__sys__suit__storage__ram_1ga65a796565e3f07b2213cd3133823d5fe)            | Storage location string separators.
`define `[`CONFIG_SUIT_STORAGE_RAM_LOCATION_PREFIX`](#group__sys__suit__storage__ram_1gad9794f288082ff17b13ffa38f185f2bd)            | Storage location string prefix.
`struct `[`suit_storage_ram_region_t`](#structsuit__storage__ram__region__t) | Single in-memory storage region.
`struct `[`CONFIG_SUIT_STORAGE_RAM_ATTR`](#structCONFIG__SUIT__STORAGE__RAM__ATTR) | memory storage state

## Members

#### `define `[`CONFIG_SUIT_STORAGE_RAM_SIZE`](#group__sys__suit__storage__ram_1gab96694588bb20e0d873773ffb5828f68) 

Size of each memory region.

#### `define `[`CONFIG_SUIT_STORAGE_RAM_REGIONS`](#group__sys__suit__storage__ram_1ga46e49f82fa263234ecafc211de03ad9f) 

Number of allocated regions.

#### `define `[`CONFIG_SUIT_STORAGE_RAM_ATTR`](#group__sys__suit__storage__ram_1ga93f92e3aef2fccdec9635616f76aaf2d) 

Extra attributes for allocating the RAM struct.

#### `define `[`CONFIG_SUIT_STORAGE_RAM_LOCATION_SEPARATOR`](#group__sys__suit__storage__ram_1ga65a796565e3f07b2213cd3133823d5fe) 

Storage location string separators.

#### `define `[`CONFIG_SUIT_STORAGE_RAM_LOCATION_PREFIX`](#group__sys__suit__storage__ram_1gad9794f288082ff17b13ffa38f185f2bd) 

Storage location string prefix.

Must include the leading and trailing separators

# struct `suit_storage_ram_region_t` 

Single in-memory storage region.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`occupied`](#structsuit__storage__ram__region__t_1a89f817c6a071d0b8e0c38f93d7806a9b) | Region space filled.
`public uint8_t `[`mem`](#structsuit__storage__ram__region__t_1a8f5459b61c2f8e6383afa04d646536d6) | RAM area.

## Members

#### `public size_t `[`occupied`](#structsuit__storage__ram__region__t_1a89f817c6a071d0b8e0c38f93d7806a9b) 

Region space filled.

#### `public uint8_t `[`mem`](#structsuit__storage__ram__region__t_1a8f5459b61c2f8e6383afa04d646536d6) 

RAM area.

# struct `CONFIG_SUIT_STORAGE_RAM_ATTR` 

memory storage state

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` `[`storage`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1a9f7db3e1fa7d6898128903077af90065) | parent struct
`public `[`suit_storage_ram_region_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage_ram.md#structsuit__storage__ram__region__t)` `[`regions`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1a1aa3e18bd85552b5df16759973f35988) | ram storage regions
`public size_t `[`active_region`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1ac7a10b5bda01902feef4894403e3a472) | Active region to write to.
`public uint32_t `[`sequence_no`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1a5ed52ccf73ee990c69d888e2692f91b5) | Ephemeral sequence number.

## Members

#### `public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` `[`storage`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1a9f7db3e1fa7d6898128903077af90065) 

parent struct

#### `public `[`suit_storage_ram_region_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage_ram.md#structsuit__storage__ram__region__t)` `[`regions`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1a1aa3e18bd85552b5df16759973f35988) 

ram storage regions

#### `public size_t `[`active_region`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1ac7a10b5bda01902feef4894403e3a472) 

Active region to write to.

#### `public uint32_t `[`sequence_no`](#structCONFIG__SUIT__STORAGE__RAM__ATTR_1a5ed52ccf73ee990c69d888e2692f91b5) 

Ephemeral sequence number.

