---
title: api-sys_suit_storage.md
description: api-sys_suit_storage.md
---
# group `sys_suit_storage` 

infrastructure

SUIT firmware storage backends

Storage backend functions for SUIT manifests Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

The interface defined here specifies a generic API for SUIT OTA storage backends.

The driver allows for creating multiple backends, each possibly servicing multiple locations. An example of this is a VFS storage backend. This backend could service multiple file locations on a filesystem.

A SUIT component ID is formatted as an array of bytestrings. To make it easy to match and use a string, the location is supplied as string, each component separated by a separator provided in the driver. If no separator (`\0`) is set, the components are concatenated without separator. The [suit_storage_driver_t::set_active_location](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a771b575214bc8ad8d5cdd2c72d8530b5) must be called before starting operations on the backend.

A write sequence by the caller must start with [suit_storage_driver_t::start](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a5b996af8800e6f6adda13a01bea4af71). The total length of the image is supplied to allow the backend to check if the payload fits in the available space. The payload data can be supplied piecewise with multiple calls to [suit_storage_driver_t::write](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a1bcb69cf7bd476bbcfdd93e7107ea8e5). The caller is free to specify the offset, but the backend may enforce strict monotonicity on the offset and may enforce the gapless writes. After all bytes are supplied, the [suit_storage_driver_t::finish](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1accd8f42c0f5a26e1466d8d65b321b3e2) function must be called to signal the end of the write stage.

Only when the [suit_storage_driver_t::install](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a507db5fbf05f97ac76fbc3d8bc7eee0c) is called, the payload must be marked as valid. The mechanism for this can be backend specific. However in the case of a firmware image, it must not be bootable before this function is called. Similarly, a file payload must not be available at its provided path until after this function is called. The reason behind this is that the payload often must first be stored on the device before the image_match is called by the manifest.

The other option is that the [suit_storage_driver_t::erase](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a141a01aa05a3407dba52fbc687364d52) is called. In this case the not-yet-installed payload must be erased again as its contents might not be what is expected by the digest in the manifest. The payload must then be removed to prevent the possibility of storing malicious code on the device.

A form of read access must be implemented to provide a way to read back the data and check the digest of the payload. [suit_storage_driver_t::read](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1ad6d948219078ec70812a74fb5470554f) must be implemented, providing piecewise reading of the data. [suit_storage_driver_t::read_ptr](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1ae201c7825a6b374b38a71ae355e423cc) is optional to implement, it can provide direct read access on memory-mapped storage.

As the storage backend provides a mechanism to store persistent data, functions are added to set and retrieve the manifest sequence number. While not strictly required to implement, a firmware without a mechanism to retrieve and store sequence numbers will always fail to update.

The [suit_storage_driver_t::match_offset](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1ab5cc93de1b9acae9c3a2308b69bde4ee) function allows the manifest handler to check the component-offset condition against a storage backend.

The usual call sequence by a manifest handler is:

* [suit_storage_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1ab884ee1d6c260334b603c70851c0dddb) as on-boot initialization.

* [suit_storage_driver_t::get_seq_no](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a1b00d856f2ce0ceadddd4e09dbea8b63) to determine if the manifest is not replayed.

* [suit_storage_driver_t::has_location](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a83d3abb9e1df010ce91a8a412fe07183) to determine if the backend handles the payload in the manifest.

* [suit_storage_driver_t::set_active_location](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a771b575214bc8ad8d5cdd2c72d8530b5) to set the active location for the payload.

* [suit_storage_driver_t::start](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a5b996af8800e6f6adda13a01bea4af71) to start a payload write sequence.

* At least one [suit_storage_driver_t::write](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a1bcb69cf7bd476bbcfdd93e7107ea8e5) calls to write the payload data.

* [suit_storage_driver_t::finish](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1accd8f42c0f5a26e1466d8d65b321b3e2) to mark the end of the payload write.

* [suit_storage_driver_t::read](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1ad6d948219078ec70812a74fb5470554f) or [suit_storage_driver_t::read_ptr](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1ae201c7825a6b374b38a71ae355e423cc) to read back the written payload. This to verify the digest of the payload with what is provided in the manifest.

* [suit_storage_driver_t::install](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a507db5fbf05f97ac76fbc3d8bc7eee0c) if the digest matches with what is expected and the payload can be installed or marked as valid, or:

* [suit_storage_driver_t::erase](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a141a01aa05a3407dba52fbc687364d52) if the digest does not match with what is expected and must be erased.

* ref [suit_storage_driver_t::set_seq_no](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1a4f5912a0eebefb273b3405d3d0ed64ec) to update the sequence number stored in the backend.

This API is by design not thread safe

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` * `[`suit_storage_find_by_id`](#group__sys__suit__storage_1ga1833e6420ae9aaee737828acc333cac9)`(const char * id)`            | retrieve a storage backend based on the location ID string
`public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` * `[`suit_storage_find_by_component`](#group__sys__suit__storage_1ga142aa0b39c94fe336d98a36e50a21cae)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,const `[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component)`            | retrieve a storage backend based on the suit component
`public void `[`suit_storage_init_all`](#group__sys__suit__storage_1ga93940a17686ac8318ece243710686ef2)`(void)`            | initialize all storage backends
`public int `[`suit_storage_get_highest_seq_no`](#group__sys__suit__storage_1gaecf213a95a178c5fa26dcfcdc84b6faa)`(uint32_t * seq_no)`            | Get the highest sequence number among available backends.
`public int `[`suit_storage_set_seq_no_all`](#group__sys__suit__storage_1gaf373ba1389f7b2515655507b265e6fbb)`(uint32_t seq_no)`            | Set the new sequence number on all available backends.
`struct `[`suit_storage_driver`](#structsuit__storage__driver) | SUIT storage backend driver struct.
`struct `[`suit_storage`](#structsuit__storage) | Generic storage backend state.

## Members

#### `public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` * `[`suit_storage_find_by_id`](#group__sys__suit__storage_1ga1833e6420ae9aaee737828acc333cac9)`(const char * id)` 

retrieve a storage backend based on the location ID string

#### Parameters
* `id` ID string to match

#### Returns
The first storage driver that handles this ID 

#### Returns
NULL if none of the storage drivers is able to handle this ID.

#### `public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` * `[`suit_storage_find_by_component`](#group__sys__suit__storage_1ga142aa0b39c94fe336d98a36e50a21cae)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,const `[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component)` 

retrieve a storage backend based on the suit component

#### Parameters
* `manifest` SUIT manifest context 

* `component` Component to find a storage backend for

#### Returns
The first storage driver that handles this component 

#### Returns
NULL if none of the storage drivers is able to handle this component.

#### `public void `[`suit_storage_init_all`](#group__sys__suit__storage_1ga93940a17686ac8318ece243710686ef2)`(void)` 

initialize all storage backends

#### `public int `[`suit_storage_get_highest_seq_no`](#group__sys__suit__storage_1gaecf213a95a178c5fa26dcfcdc84b6faa)`(uint32_t * seq_no)` 

Get the highest sequence number among available backends.

#### Parameters
* `seq_no` Retrieved sequence number

#### Returns
suit_ok if at least one sequence number is retrieved 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int `[`suit_storage_set_seq_no_all`](#group__sys__suit__storage_1gaf373ba1389f7b2515655507b265e6fbb)`(uint32_t seq_no)` 

Set the new sequence number on all available backends.

#### Parameters
* `seq_no` Sequence number to store

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully storing the sequence number on at least one backend 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

# struct `suit_storage_driver` 

SUIT storage backend driver struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`init`](#structsuit__storage__driver_1ab884ee1d6c260334b603c70851c0dddb) | One-time initialization function.
`public int(* `[`start`](#structsuit__storage__driver_1a5b996af8800e6f6adda13a01bea4af71) | Start a new payload write sequence.
`public int(* `[`write`](#structsuit__storage__driver_1a1bcb69cf7bd476bbcfdd93e7107ea8e5) | Write a new chunk of the payload to the storage backend.
`public int(* `[`finish`](#structsuit__storage__driver_1accd8f42c0f5a26e1466d8d65b321b3e2) | Signal that the payload write stage done to the storage backend.
`public int(* `[`read`](#structsuit__storage__driver_1ad6d948219078ec70812a74fb5470554f) | Read a chunk of previously written data back.
`public int(* `[`read_ptr`](#structsuit__storage__driver_1ae201c7825a6b374b38a71ae355e423cc) | retrieve a direct read pointer for this storage backend
`public int(* `[`install`](#structsuit__storage__driver_1a507db5fbf05f97ac76fbc3d8bc7eee0c) | Install the payload or mark the payload as valid.
`public int(* `[`erase`](#structsuit__storage__driver_1a141a01aa05a3407dba52fbc687364d52) | Erase the previously loaded payload.
`public bool(* `[`has_location`](#structsuit__storage__driver_1a83d3abb9e1df010ce91a8a412fe07183) | Check if this storage backend services a location.
`public bool(* `[`match_offset`](#structsuit__storage__driver_1ab5cc93de1b9acae9c3a2308b69bde4ee) | Checks if the supplied offset is true or false for the current location.
`public int(* `[`set_active_location`](#structsuit__storage__driver_1a771b575214bc8ad8d5cdd2c72d8530b5) | Set the active location of the storage handler.
`public int(* `[`get_seq_no`](#structsuit__storage__driver_1a1b00d856f2ce0ceadddd4e09dbea8b63) | Retrieve the sequence number from the storage backend.
`public int(* `[`set_seq_no`](#structsuit__storage__driver_1a4f5912a0eebefb273b3405d3d0ed64ec) | Set a new sequence number in the storage backend.
`public char `[`separator`](#structsuit__storage__driver_1acfc32fb546fdf9e6f0c778effd417670) | Component ID separator used by this storage driver.

## Members

#### `public int(* `[`init`](#structsuit__storage__driver_1ab884ee1d6c260334b603c70851c0dddb) 

One-time initialization function.

Called at boot.

#### Parameters
* `storage` Storage context

#### `public int(* `[`start`](#structsuit__storage__driver_1a5b996af8800e6f6adda13a01bea4af71) 

Start a new payload write sequence.

#### Parameters
* `storage` Storage context 

* `manifest` The suit manifest context 

* `len` Total size of the payload in bytes

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully starting the write 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int(* `[`write`](#structsuit__storage__driver_1a1bcb69cf7bd476bbcfdd93e7107ea8e5) 

Write a new chunk of the payload to the storage backend.

#### Parameters
* `storage` Storage context 

* `manifest` The suit manifest context 

* `buf` Buffer to read the payload chunk from 

* `offset` Offset to write at 

* `len` Length of the payload chunk

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully writing the chunk 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int(* `[`finish`](#structsuit__storage__driver_1accd8f42c0f5a26e1466d8d65b321b3e2) 

Signal that the payload write stage done to the storage backend.

#### Parameters
* `storage` Storage context 

* `manifest` The suit manifest context

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully finalizing the write 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int(* `[`read`](#structsuit__storage__driver_1ad6d948219078ec70812a74fb5470554f) 

Read a chunk of previously written data back.

#### Parameters
* `storage` Storage context 

* `buf` Buffer to write the read data in 

* `offset` Offset to read from 

* `len` Number of bytes to read

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully reading the chunk 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int(* `[`read_ptr`](#structsuit__storage__driver_1ae201c7825a6b374b38a71ae355e423cc) 

retrieve a direct read pointer for this storage backend

Optional to implement

#### Parameters
* `storage` Storage context 

* `buf` Pointer to the location data 

* `len` Full length of the location data

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully providing the region 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int(* `[`install`](#structsuit__storage__driver_1a507db5fbf05f97ac76fbc3d8bc7eee0c) 

Install the payload or mark the payload as valid.

#### Parameters
* `storage` Storage context 

* `manifest` The suit manifest context

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully installing the payload 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public int(* `[`erase`](#structsuit__storage__driver_1a141a01aa05a3407dba52fbc687364d52) 

Erase the previously loaded payload.

#### Parameters
* `storage` Storage context

#### Returns
[SUIT_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gga5ad972943b02a8964f9f1d3c60da1fb5a5be35b975835e9929e7143166c0ed9f5) on successfully erasing the data 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) on error

#### `public bool(* `[`has_location`](#structsuit__storage__driver_1a83d3abb9e1df010ce91a8a412fe07183) 

Check if this storage backend services a location.

#### Parameters
* `storage` Storage context 

* `location` Location to check

#### Returns
True if this storage driver must be used for the supplied location

#### `public bool(* `[`match_offset`](#structsuit__storage__driver_1ab5cc93de1b9acae9c3a2308b69bde4ee) 

Checks if the supplied offset is true or false for the current location.

Optional to implement, should not be implemented if the backend doesn't support the image_offset

#### Parameters
* `storage` Storage context 

* `offset` Offset to check

#### Returns
True if the location matches the offset, 

#### Returns
False otherwise

#### `public int(* `[`set_active_location`](#structsuit__storage__driver_1a771b575214bc8ad8d5cdd2c72d8530b5) 

Set the active location of the storage handler.

A storage backend can handle multiple locations, e.g. a VFS backend targeting multiple files on a filesystem, setting the location selects the target location for writes or reads.

Must be idempotent

#### Parameters
* `storage` Storage backend context 

* `location` The location supplied as string with components separated by the [suit_storage_driver_t::separator](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_storage.md#structsuit__storage__driver_1acfc32fb546fdf9e6f0c778effd417670)

#### Returns
SUIT_OK on success 

#### Returns
SUIT_ERR_STORAGE_UNAVAILABLE if the location is not available.

#### `public int(* `[`get_seq_no`](#structsuit__storage__driver_1a1b00d856f2ce0ceadddd4e09dbea8b63) 

Retrieve the sequence number from the storage backend.

The sequence number must be global to the storage context, it must not depend on the location

#### Parameters
* `storage` Storage context 

* `seq_no` Retrieved sequence number

#### Returns
SUIT_OK on success 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) if the sequence number can't be retrieved

#### `public int(* `[`set_seq_no`](#structsuit__storage__driver_1a4f5912a0eebefb273b3405d3d0ed64ec) 

Set a new sequence number in the storage backend.

#### Parameters
* `storage` Storage context 

* `seq_no` Sequence number to store

#### Returns
SUIT_OK on success 

#### Returns
[suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) if the sequence number can't be stored.

#### `public char `[`separator`](#structsuit__storage__driver_1acfc32fb546fdf9e6f0c778effd417670) 

Component ID separator used by this storage driver.

# struct `suit_storage` 

Generic storage backend state.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`suit_storage_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1gafdc3ef23bcee8946d5cd0de1d8dc9c00)` * `[`driver`](#structsuit__storage_1a22d8adb8cf3b6077922cbdcb7f7d6d02) | Storage driver functions.

## Members

#### `public const `[`suit_storage_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1gafdc3ef23bcee8946d5cd0de1d8dc9c00)` * `[`driver`](#structsuit__storage_1a22d8adb8cf3b6077922cbdcb7f7d6d02) 

Storage driver functions.

