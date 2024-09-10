---
title: api-ble_bluetil_ad.md
description: api-ble_bluetil_ad.md
---
# group `ble_bluetil_ad` 

Generic BLE advertising and scan request data processing.

This module provides functionality for user friendly reading and writing of BLE advertising and scan request buffers.

This module is independent from any BLE stack.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BLUETIL_AD_INIT`](#group__ble__bluetil__ad_1ga9bf7d2b47e8e684515ab2d9083f5ec0f)            | Static initializer for the advertising data structure.
`define `[`BLUETIL_AD_FLAGS_DEFAULT`](#group__ble__bluetil__ad_1ga711d061fc5cbcc1754c216d7774f0c3c)            | Default flags to set when advertising BLE devices.
`enum `[`@344`](#group__ble__bluetil__ad_1ga72e63dc1307b88cc08ad0bd6c737d748)            | Return values used by the bluetil_ad module.
`public void `[`bluetil_ad_init`](#group__ble__bluetil__ad_1gad34913ea00e321abd3ceb81c6d450da8)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,void * buf,size_t pos,size_t size)`            | Initialize the given advertising data descriptor.
`public int `[`bluetil_ad_find`](#group__ble__bluetil__ad_1ga27ab9530be6ab193ea432dd2ad6952b2)`(const `[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,`[`bluetil_ad_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__data__t)` * data)`            | Find a specific field in the given advertising data.
`public int `[`bluetil_ad_find_and_cmp`](#group__ble__bluetil__ad_1ga3cc6e56c1bdf2c56e8792774a62308d7)`(const `[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,const void * val,size_t val_len)`            | Find a specific field and compare its value against the given data.
`public int `[`bluetil_ad_find_str`](#group__ble__bluetil__ad_1ga49af87df889d2a5d524d51d697658f82)`(const `[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,char * str,size_t str_len)`            | Find the given field and copy its payload into a string.
`public int `[`bluetil_ad_add`](#group__ble__bluetil__ad_1ga63a17fe4479f8ba85d9e1e4ebde9c4dd)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,const void * data,size_t data_len)`            | Add a new field to the given advertising data.
`public inline static int `[`bluetil_ad_add_flags`](#group__ble__bluetil__ad_1ga35353fe4bf21cfae4fe670f0fa39f7aa)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t flags)`            | Convenience function to add the "flags" field.
`public inline static int `[`bluetil_ad_add_name`](#group__ble__bluetil__ad_1gaed56789aa64e3688e83d74ac1101e4bd)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,const char * name)`            | Convenience function to add the "full name" field.
`public inline static int `[`bluetil_ad_init_with_flags`](#group__ble__bluetil__ad_1gafd42878bd4b6fa61ed943d0e8049b674)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,void * buf,size_t buf_len,uint8_t flags)`            | Convenience function for initializing the advertising data descriptor and directly adding the flags field.
`struct `[`bluetil_ad_data_t`](#structbluetil__ad__data__t) | Struct used for returning the contents of a selected field.
`struct `[`bluetil_ad_t`](#structbluetil__ad__t) | Descriptor for a buffer containing advertising data.

## Members

#### `define `[`BLUETIL_AD_INIT`](#group__ble__bluetil__ad_1ga9bf7d2b47e8e684515ab2d9083f5ec0f) 

Static initializer for the advertising data structure.

#### `define `[`BLUETIL_AD_FLAGS_DEFAULT`](#group__ble__bluetil__ad_1ga711d061fc5cbcc1754c216d7774f0c3c) 

Default flags to set when advertising BLE devices.

#### `enum `[`@344`](#group__ble__bluetil__ad_1ga72e63dc1307b88cc08ad0bd6c737d748) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BLUETIL_AD_OK            | everything went as expected
BLUETIL_AD_NOTFOUND            | entry not found
BLUETIL_AD_NOMEM            | insufficient memory to write field

Return values used by the bluetil_ad module.

#### `public void `[`bluetil_ad_init`](#group__ble__bluetil__ad_1gad34913ea00e321abd3ceb81c6d450da8)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,void * buf,size_t pos,size_t size)` 

Initialize the given advertising data descriptor.

#### Parameters
* `ad` advertising data descriptor 

* `buf` buffer to point to 

* `pos` current fill position of `buf`

* `size` size of `buf`

#### `public int `[`bluetil_ad_find`](#group__ble__bluetil__ad_1ga27ab9530be6ab193ea432dd2ad6952b2)`(const `[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,`[`bluetil_ad_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__data__t)` * data)` 

Find a specific field in the given advertising data.

#### Parameters
* `ad` advertising data descriptor 

* `type` field type to look for 

* `data` position and length of the field's payload

#### Returns
BLUETIL_AD_OK if field was found 

#### Returns
BLUETIL_AD_NOTFOUND if field was not found

#### `public int `[`bluetil_ad_find_and_cmp`](#group__ble__bluetil__ad_1ga3cc6e56c1bdf2c56e8792774a62308d7)`(const `[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,const void * val,size_t val_len)` 

Find a specific field and compare its value against the given data.

#### Parameters
* `ad` advertising data descriptor 

* `type` field to search for 

* `val` data to compare against 

* `val_len` size of `val` in byte

#### Returns
true if the field was found and its data is equal to the given data 

#### Returns
false if the field was not found or the data is not equal

#### `public int `[`bluetil_ad_find_str`](#group__ble__bluetil__ad_1ga49af87df889d2a5d524d51d697658f82)`(const `[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,char * str,size_t str_len)` 

Find the given field and copy its payload into a string.

The resulting string is `\0` terminated. If the resulting string is too large to fit into the given buffer, it will be truncated to the maximum possible size (but still including the `\0` at the end).

#### Parameters
* `ad` advertising data descriptor 

* `type` field type to look for 

* `str` resulting string is written to this buffer 

* `str_len` maximum number of bytes to write to `str`, including the `\0` character

#### Returns
BLUETIL_AD_OK if the field was found and copied 

#### Returns
BLUETIL_AD_NOTFOUND if the given field was not found

#### `public int `[`bluetil_ad_add`](#group__ble__bluetil__ad_1ga63a17fe4479f8ba85d9e1e4ebde9c4dd)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t type,const void * data,size_t data_len)` 

Add a new field to the given advertising data.

#### Parameters
* `ad` advertising data descriptor 

* `type` field type to add 

* `data` payload for the field 

* `data_len` length of the payload in bytes

#### Returns
BLUETIL_AD_OK if the new field was added 

#### Returns
BLUETIL_AD_NOMEM if there is not enough space to write add field

#### `public inline static int `[`bluetil_ad_add_flags`](#group__ble__bluetil__ad_1ga35353fe4bf21cfae4fe670f0fa39f7aa)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,uint8_t flags)` 

Convenience function to add the "flags" field.

#### Parameters
* `ad` advertising data descriptor 

* `flags` flags to set

#### Returns
BLUETIL_AD_OK if the flags field was added 

#### Returns
BLUETIL_AD_NOMEM if there is not enough space to write add field

#### `public inline static int `[`bluetil_ad_add_name`](#group__ble__bluetil__ad_1gaed56789aa64e3688e83d74ac1101e4bd)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,const char * name)` 

Convenience function to add the "full name" field.

While the given name must be `\0` terminated, the termination character is not written to the advertising data.

#### Parameters
* `ad` advertising data descriptor 

* `name` name to set

#### Returns
BLUETIL_AD_OK if the name field was added 

#### Returns
BLUETIL_AD_NOMEM if there is not enough space to add the name field

#### `public inline static int `[`bluetil_ad_init_with_flags`](#group__ble__bluetil__ad_1gafd42878bd4b6fa61ed943d0e8049b674)`(`[`bluetil_ad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_bluetil_ad.md#structbluetil__ad__t)` * ad,void * buf,size_t buf_len,uint8_t flags)` 

Convenience function for initializing the advertising data descriptor and directly adding the flags field.

Most users will want to set the (mandatory) flags field right after initializing the advertising context, so this function provides a small shortcut.

#### Parameters
* `ad` advertising data descriptor 

* `buf` buffer to write advertising data into 

* `buf_len` size of `buf` in bytes 

* `flags` flags to set, typically BLUETIL_AD_FLAGS_DEFAULT

#### Returns
BLUETIL_AD_OK on successful initialization with flags field 

#### Returns
BLUETIL_AD_NOMEM if given buffer is too small

# struct `bluetil_ad_data_t` 

Struct used for returning the contents of a selected field.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`data`](#structbluetil__ad__data__t_1ac906e75b480a7aa3e5f751fed9a57eee) | pointer a field's payload
`public size_t `[`len`](#structbluetil__ad__data__t_1addeba5a3380229b9d8c4363bc35cc604) | length of the payload

## Members

#### `public uint8_t * `[`data`](#structbluetil__ad__data__t_1ac906e75b480a7aa3e5f751fed9a57eee) 

pointer a field's payload

#### `public size_t `[`len`](#structbluetil__ad__data__t_1addeba5a3380229b9d8c4363bc35cc604) 

length of the payload

# struct `bluetil_ad_t` 

Descriptor for a buffer containing advertising data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`buf`](#structbluetil__ad__t_1abb2b430527dec65efb4e658bd3fc9531) | buffer containing the advertising data
`public size_t `[`pos`](#structbluetil__ad__t_1a37c2e8da4080fa72d947163f5776ad32) | current write position in the buffer
`public size_t `[`size`](#structbluetil__ad__t_1a5a659f8be1cfb314f64c3744cef4da02) | overall length of the buffer

## Members

#### `public uint8_t * `[`buf`](#structbluetil__ad__t_1abb2b430527dec65efb4e658bd3fc9531) 

buffer containing the advertising data

#### `public size_t `[`pos`](#structbluetil__ad__t_1a37c2e8da4080fa72d947163f5776ad32) 

current write position in the buffer

#### `public size_t `[`size`](#structbluetil__ad__t_1a5a659f8be1cfb314f64c3744cef4da02) 

overall length of the buffer

