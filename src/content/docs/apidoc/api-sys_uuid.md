---
title: api-sys_uuid.md
description: api-sys_uuid.md
---
# group `sys_uuid` 

Provides RFC 4122 compliant UUID's.

This module provides RFC 4122 compliant UUID generation. The UUID stored in [uuid_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t) struct is stored in network byte order.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`UUID_NODE_LEN`](#group__sys__uuid_1ga2565e2ae3b160ea278b176019eafbc23)            | Size of the node identifier in bytes.
`define `[`UUID_STR_LEN`](#group__sys__uuid_1ga6d37dd9ad8391595db1b71ca2103a228)            | Size of a string UUID without null character.
`public void `[`uuid_v3`](#group__sys__uuid_1ga0297d3ca74708e40a8bc30afae51b453)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * ns,const uint8_t * name,size_t len)`            | Generate a version 3(md5 based) UUID from a namespace and a byte array.
`public void `[`uuid_v4`](#group__sys__uuid_1gad8cfa3c0efb6e7a36afac1ac96f34605)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid)`            | Generate a version 4(Full random) UUID.
`public void `[`uuid_v5`](#group__sys__uuid_1gac19d8ca4fd93d805e16028c5a1fc6a9f)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * ns,const uint8_t * name,size_t len)`            | Generate a version 5(sha1 based) UUID from a namespace and a byte array.
`public inline static unsigned `[`uuid_version`](#group__sys__uuid_1ga287a34b17e69df60d4a19c17457dff24)`(const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid)`            | Retrieve the type number of a UUID.
`public inline static bool `[`uuid_equal`](#group__sys__uuid_1ga64553d1e2fd804dca8480bf2555f415d)`(const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid1,const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid2)`            | Compare two UUID's.
`public void `[`uuid_to_string`](#group__sys__uuid_1ga2db1c1e69b3449449bcf9a9d59a7db34)`(const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,char * str)`            | Generate an UUID string from an UUID structure.
`public int `[`uuid_from_string`](#group__sys__uuid_1ga773f9b29457317ed30b27ab4525c42dd)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,const char * str)`            | Populate an UUID structure from an UUID string.
`struct `[`uuid_t`](#structuuid__t) | UUID layout.

## Members

#### `define `[`UUID_NODE_LEN`](#group__sys__uuid_1ga2565e2ae3b160ea278b176019eafbc23) 

Size of the node identifier in bytes.

#### `define `[`UUID_STR_LEN`](#group__sys__uuid_1ga6d37dd9ad8391595db1b71ca2103a228) 

Size of a string UUID without null character.

#### `public void `[`uuid_v3`](#group__sys__uuid_1ga0297d3ca74708e40a8bc30afae51b453)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * ns,const uint8_t * name,size_t len)` 

Generate a version 3(md5 based) UUID from a namespace and a byte array.

#### Parameters
* `uuid` UUID struct to fill 

* `ns` Namespace UUID 

* `name` Ptr to byte array to use as name part 

* `len` Length of the byte array

#### `public void `[`uuid_v4`](#group__sys__uuid_1gad8cfa3c0efb6e7a36afac1ac96f34605)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid)` 

Generate a version 4(Full random) UUID.

#### Parameters
* `uuid` UUID struct to fill

#### `public void `[`uuid_v5`](#group__sys__uuid_1gac19d8ca4fd93d805e16028c5a1fc6a9f)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * ns,const uint8_t * name,size_t len)` 

Generate a version 5(sha1 based) UUID from a namespace and a byte array.

#### Parameters
* `uuid` UUID struct to fill 

* `ns` Namespace UUID 

* `name` Ptr to byte array to use as name part 

* `len` Length of the byte array

#### `public inline static unsigned `[`uuid_version`](#group__sys__uuid_1ga287a34b17e69df60d4a19c17457dff24)`(const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid)` 

Retrieve the type number of a UUID.

#### Parameters
* `uuid` UUID to retrieve version number from

#### Returns
Version number

#### `public inline static bool `[`uuid_equal`](#group__sys__uuid_1ga64553d1e2fd804dca8480bf2555f415d)`(const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid1,const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid2)` 

Compare two UUID's.

#### Parameters
* `uuid1` First uuid to compare 

* `uuid2` Second uuid to compare

#### Returns
True when equal

#### `public void `[`uuid_to_string`](#group__sys__uuid_1ga2db1c1e69b3449449bcf9a9d59a7db34)`(const `[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,char * str)` 

Generate an UUID string from an UUID structure.

#### Parameters
* `uuid` UUID 

* `str` null-terminated UUID string, must be at least UUID_STR_LEN + 1 bytes

#### `public int `[`uuid_from_string`](#group__sys__uuid_1ga773f9b29457317ed30b27ab4525c42dd)`(`[`uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uuid.md#structuuid__t)` * uuid,const char * str)` 

Populate an UUID structure from an UUID string.

#### Parameters
* `uuid` out UUID 

* `str` null-terminated input UUID string, must be UUID_STR_LEN bytes

#### Returns
0 on success, < 0 if `str` is not valid

# struct `uuid_t` 

UUID layout.

Directly from [rfc4122](https://tools.ietf.org/html/rfc4122#section-4.1.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`time_low`](#structuuid__t_1a9bd7660ac48cc23b3f57617667c4ecc3) | The low field of the timestamp
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`time_mid`](#structuuid__t_1a389096559d2a5e5c0e38e302320cb0a3) | The middle field of the timestamp
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`time_hi`](#structuuid__t_1a6540611eb0dfb9d08b5e72bc6f08f065) | The high field of the timestamp multiplexed with the version number.
`public uint8_t `[`clk_seq_hi_res`](#structuuid__t_1a8dcfad8dadc39e3b8a575f2fce7a499a) | The high field of the clock sequence Multiplexed with the variant
`public uint8_t `[`clk_seq_low`](#structuuid__t_1ac7d8a6f563e84508ae14295a850bf604) | The low field of the clock sequence
`public uint8_t `[`node`](#structuuid__t_1a0235fa634d235ade3f46d512469fbcfa) | The spatially unique node identifier.

## Members

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`time_low`](#structuuid__t_1a9bd7660ac48cc23b3f57617667c4ecc3) 

The low field of the timestamp

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`time_mid`](#structuuid__t_1a389096559d2a5e5c0e38e302320cb0a3) 

The middle field of the timestamp

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`time_hi`](#structuuid__t_1a6540611eb0dfb9d08b5e72bc6f08f065) 

The high field of the timestamp multiplexed with the version number.

#### `public uint8_t `[`clk_seq_hi_res`](#structuuid__t_1a8dcfad8dadc39e3b8a575f2fce7a499a) 

The high field of the clock sequence Multiplexed with the variant

#### `public uint8_t `[`clk_seq_low`](#structuuid__t_1ac7d8a6f563e84508ae14295a850bf604) 

The low field of the clock sequence

#### `public uint8_t `[`node`](#structuuid__t_1a0235fa634d235ade3f46d512469fbcfa) 

The spatially unique node identifier.

