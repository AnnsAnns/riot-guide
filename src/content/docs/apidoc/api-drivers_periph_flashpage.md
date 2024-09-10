---
title: api-drivers_periph_flashpage.md
description: api-drivers_periph_flashpage.md
---
# group `drivers_periph_flashpage` 

Low-level flash page interface.

This interface provides a very simple and straight forward way for writing a MCU's internal flash. This interface is only capable of reading, verifying, and writing complete flash pages, it has no support for partial flash access. This enables for very slim and efficient implementations.

A module for more fine-grained access of memory locations can easily be programmed on top of this interface.

Flash memory has only a limited amount of erase cycles (mostly around 10K times), so using this interface in some kind of loops can damage you MCU!

(Low-) Power ImplicationsThe flashpage driver implementation **should** make sure, that the CPU uses no additional energy while the flashpage driver is inactive. This means, that any particular CPU peripherals used for reading and writing flash pages **should** be disabled before the read and write functions return.

If an implementation puts the calling thread to sleep for a duration of time, the implementation might need to take care of blocking certain power modes.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CPU_FLASH_BASE`](#group__drivers__periph__flashpage_1gad33eb792f7cf98b55b73fea8239c5f45)            | Per default, we expect the internal flash to start at address 0.
`define `[`FLASHPAGE_WRITE_BLOCK_SIZE`](#group__drivers__periph__flashpage_1ga16753047dc8ea05da311dd4e5e056628)            | For raw writings to the flash, this constant must define the minimum write length allowed by the MCU.
`define `[`FLASHPAGE_WRITE_BLOCK_ALIGNMENT`](#group__drivers__periph__flashpage_1ga72c89204ecbd5efc8d52d3bd73003a28)            | The buffers to be written to the flash MUST be aligned, as well as the address on which the buffer is written to the flash.
`define `[`FLASHPAGE_ERASE_STATE`](#group__drivers__periph__flashpage_1gaad528f0fc287d8630f38906843b45eea)            | State of an erased byte in memory.
`define `[`PERIPH_FLASHPAGE_CUSTOM_PAGESIZES`](#group__drivers__periph__flashpage_1ga8571c7ea34cc4acdf5a035b72c1e9f12)            | Defined to signal that the peripheral has non-uniform flash page sizes.
`define `[`PERIPH_FLASHPAGE_NEEDS_FLASHPAGE_ADDR`](#group__drivers__periph__flashpage_1ga04f3900e96060091b1df50901f44513b)            | If non-uniform flash page sizes are required, defined to signal that the peripheral does not implement a custom [flashpage_addr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gab2fa8e81e8c623f72436cdb0f860f36f) function and instead relies on the generic helper function that relies on [flashpage_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gaae77fe2e674ff139e0cad902cad3f19f).
`define `[`PERIPH_FLASHPAGE_NEEDS_FLASHPAGE_PAGE`](#group__drivers__periph__flashpage_1gad8ed0a2fc0339200d46c381eed6d760f)            | If non-uniform flash page sizes are required, defined to signal that the peripheral does not implement a custom [flashpage_page](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gac95d86b4e651d7b5c75354aad5701206) function and instead relies on the generic helper function that relies on [flashpage_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gaae77fe2e674ff139e0cad902cad3f19f).
`define `[`FLASH_WRITABLE_INIT`](#group__drivers__periph__flashpage_1ga951d0ea82c1cd088012f04eaa4190fa8)            | Define an array in flash memory.
`enum `[`@234`](#group__drivers__periph__flashpage_1ga2ed332df4696233768771e93d4081c3f)            | Return values used in this interface.
`public inline static size_t `[`flashpage_size`](#group__drivers__periph__flashpage_1gaae77fe2e674ff139e0cad902cad3f19f)`(unsigned page)`            | Get the page size of the given page number.
`public inline static void * `[`flashpage_addr`](#group__drivers__periph__flashpage_1gab2fa8e81e8c623f72436cdb0f860f36f)`(unsigned page)`            | Translate the given page number into the page's starting address.
`public inline static unsigned `[`flashpage_page`](#group__drivers__periph__flashpage_1gac95d86b4e651d7b5c75354aad5701206)`(const void * addr)`            | Translate the given address into the corresponding page number.
`public void `[`flashpage_erase`](#group__drivers__periph__flashpage_1ga52f96ad7308632eecf400fce6230c1ca)`(unsigned page)`            | Erase the given page.
`public void `[`flashpage_write_page`](#group__drivers__periph__flashpage_1gaf894a3072f60d91d76ada0d68e848102)`(unsigned page,const void * data)`            | Write the given page with the given data.
`public void `[`flashpage_write`](#group__drivers__periph__flashpage_1gab3889412c4191fb47743f00407329a90)`(void * target_addr,const void * data,size_t len)`            | Write any number of data bytes to a given location in the flash memory.
`public void `[`flashpage_read`](#group__drivers__periph__flashpage_1gae25acd49288194374218e33e825816ce)`(unsigned page,void * data)`            | Read the given page into the given memory location.
`public int `[`flashpage_verify`](#group__drivers__periph__flashpage_1ga250699abc5f5c7df1d40262c973eea19)`(unsigned page,const void * data)`            | Verify the given page against the given data.
`public int `[`flashpage_write_and_verify`](#group__drivers__periph__flashpage_1ga143664fd0a10dac463c9856d4a036174)`(unsigned page,const void * data)`            | Write the given page and verify the results.

## Members

#### `define `[`CPU_FLASH_BASE`](#group__drivers__periph__flashpage_1gad33eb792f7cf98b55b73fea8239c5f45) 

Per default, we expect the internal flash to start at address 0.

#### `define `[`FLASHPAGE_WRITE_BLOCK_SIZE`](#group__drivers__periph__flashpage_1ga16753047dc8ea05da311dd4e5e056628) 

For raw writings to the flash, this constant must define the minimum write length allowed by the MCU.

#### `define `[`FLASHPAGE_WRITE_BLOCK_ALIGNMENT`](#group__drivers__periph__flashpage_1ga72c89204ecbd5efc8d52d3bd73003a28) 

The buffers to be written to the flash MUST be aligned, as well as the address on which the buffer is written to the flash.

This variable must be defined for that purpose, according to the MCU align requirements.

#### `define `[`FLASHPAGE_ERASE_STATE`](#group__drivers__periph__flashpage_1gaad528f0fc287d8630f38906843b45eea) 

State of an erased byte in memory.

#### `define `[`PERIPH_FLASHPAGE_CUSTOM_PAGESIZES`](#group__drivers__periph__flashpage_1ga8571c7ea34cc4acdf5a035b72c1e9f12) 

Defined to signal that the peripheral has non-uniform flash page sizes.

These devices do not define FLASHPAGE_SIZE and do not implement the pagewise api.

#### `define `[`PERIPH_FLASHPAGE_NEEDS_FLASHPAGE_ADDR`](#group__drivers__periph__flashpage_1ga04f3900e96060091b1df50901f44513b) 

If non-uniform flash page sizes are required, defined to signal that the peripheral does not implement a custom [flashpage_addr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gab2fa8e81e8c623f72436cdb0f860f36f) function and instead relies on the generic helper function that relies on [flashpage_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gaae77fe2e674ff139e0cad902cad3f19f).

#### `define `[`PERIPH_FLASHPAGE_NEEDS_FLASHPAGE_PAGE`](#group__drivers__periph__flashpage_1gad8ed0a2fc0339200d46c381eed6d760f) 

If non-uniform flash page sizes are required, defined to signal that the peripheral does not implement a custom [flashpage_page](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gac95d86b4e651d7b5c75354aad5701206) function and instead relies on the generic helper function that relies on [flashpage_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1gaae77fe2e674ff139e0cad902cad3f19f).

#### `define `[`FLASH_WRITABLE_INIT`](#group__drivers__periph__flashpage_1ga951d0ea82c1cd088012f04eaa4190fa8) 

Define an array in flash memory.

This macro defines an array stored in the ".flash_writable" section which is part of flash memory. With this macro it is possible to reserve flash memory at build time.

E.g. [FLASH_WRITABLE_INIT(a, 2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage_1ga951d0ea82c1cd088012f04eaa4190fa8); will create a array with name 'a' of size 2 * [FLASHPAGE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__nrf9160_1gafce96cb577e50c76434ba92363ca20e8) which is stored in flash memory and takes up 2 flash pages.

Symbols created by using this macro are sorted in ascending order by name. Therefore, &a < &b where a and b are arrays created using this macro.

#### Parameters
* `name` name of the array 

* `size` size of the array in unit of [FLASHPAGE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__nrf9160_1gafce96cb577e50c76434ba92363ca20e8)

#### `enum `[`@234`](#group__drivers__periph__flashpage_1ga2ed332df4696233768771e93d4081c3f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FLASHPAGE_OK            | everything succeeded
FLASHPAGE_NOMATCH            | page differs from target data

Return values used in this interface.

#### `public inline static size_t `[`flashpage_size`](#group__drivers__periph__flashpage_1gaae77fe2e674ff139e0cad902cad3f19f)`(unsigned page)` 

Get the page size of the given page number.

#### Parameters
* `page` page number to get the size for

#### Returns
Page size of the given page

#### `public inline static void * `[`flashpage_addr`](#group__drivers__periph__flashpage_1gab2fa8e81e8c623f72436cdb0f860f36f)`(unsigned page)` 

Translate the given page number into the page's starting address.

The given page MUST be valid, otherwise the returned address points to an undefined memory location!

#### Parameters
* `page` page number to get the address of

#### Returns
starting memory address of the given page

#### `public inline static unsigned `[`flashpage_page`](#group__drivers__periph__flashpage_1gac95d86b4e651d7b5c75354aad5701206)`(const void * addr)` 

Translate the given address into the corresponding page number.

The given address can be any address inside a page.

The given address MUST be a valid flash address!

#### Parameters
* `addr` address inside the targeted page

#### Returns
page containing the given address

#### `public void `[`flashpage_erase`](#group__drivers__periph__flashpage_1ga52f96ad7308632eecf400fce6230c1ca)`(unsigned page)` 

Erase the given page.

#### Parameters
* `page` Page to erase

#### `public void `[`flashpage_write_page`](#group__drivers__periph__flashpage_1gaf894a3072f60d91d76ada0d68e848102)`(unsigned page,const void * data)` 

Write the given page with the given data.

#### Parameters
* `page` page to write 

* `data` data to write to the page, MUST be FLASHPAGE_SIZE byte. Set to NULL for page erase only.

#### `public void `[`flashpage_write`](#group__drivers__periph__flashpage_1gab3889412c4191fb47743f00407329a90)`(void * target_addr,const void * data,size_t len)` 

Write any number of data bytes to a given location in the flash memory.

Make sure the targeted memory area is erased before calling this function

Both target address and data address must be aligned to FLASHPAGE_BLOCK_ALIGN. `len` must be a multiple of FLASHPAGE_WRITE_BLOCK_SIZE. This function doesn't erase any area in flash, thus be sure the targeted memory area is erased before writing on it (using the flashpage_write function).

#### Parameters
* `target_addr` address in flash to write to. MUST be aligned to FLASHPAGE_WRITE_BLOCK_ALIGNMENT. 

* `data` data to write to the address. MUST be aligned to FLASHPAGE_WRITE_BLOCK_ALIGNMENT. 

* `len` length of the data to be written. It MUST be multiple of FLASHPAGE_WRITE_BLOCK_SIZE. Also, ensure it doesn't exceed the actual flash memory size.

#### `public void `[`flashpage_read`](#group__drivers__periph__flashpage_1gae25acd49288194374218e33e825816ce)`(unsigned page,void * data)` 

Read the given page into the given memory location.

#### Parameters
* `page` page to read 

* `data` memory to write the page to, MUST be FLASHPAGE_SIZE byte

#### `public int `[`flashpage_verify`](#group__drivers__periph__flashpage_1ga250699abc5f5c7df1d40262c973eea19)`(unsigned page,const void * data)` 

Verify the given page against the given data.

#### Parameters
* `page` page to verify 

* `data` data to compare page against, MUST be FLASHPAGE_SIZE byte of data

#### Returns
FLASHPAGE_OK if data in the page is identical to `data`

#### Returns
FLASHPAGE_NOMATCH if data and page content diverge

#### `public int `[`flashpage_write_and_verify`](#group__drivers__periph__flashpage_1ga143664fd0a10dac463c9856d4a036174)`(unsigned page,const void * data)` 

Write the given page and verify the results.

This is a convenience function wrapping flashpage_write and flashpage_verify.

#### Parameters
* `page` page to write 

* `data` data to write to the page, MUST be FLASHPAGE_SIZE byte.

#### Returns
FLASHPAGE_OK on success 

#### Returns
FLASHPAGE_NOMATCH if data and page content diverge

