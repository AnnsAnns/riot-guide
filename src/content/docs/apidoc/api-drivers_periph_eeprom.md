---
title: api-drivers_periph_eeprom.md
description: api-drivers_periph_eeprom.md
---
# group `drivers_periph_eeprom` 

Low-level EEPROM interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`EEPROM_CLEAR_BYTE`](#group__drivers__periph__eeprom_1gafceca29bbdde9b5c605bea36c0756621)            | Default value of the EEPROM clear byte.
`public uint8_t `[`eeprom_read_byte`](#group__drivers__periph__eeprom_1ga82f2d8ab868c0bbc4535d5551e8316cb)`(uint32_t pos)`            | Read a byte at the given position in eeprom.
`public size_t `[`eeprom_read`](#group__drivers__periph__eeprom_1gab7dc966f5c6e0fddbedfce0347d61929)`(uint32_t pos,void * data,size_t len)`            | Read `len` bytes from the given position.
`public void `[`eeprom_write_byte`](#group__drivers__periph__eeprom_1gaa5bc1b54fe2d4f5da1ee15503a95644c)`(uint32_t pos,uint8_t data)`            | Write a byte at the given position.
`public size_t `[`eeprom_write`](#group__drivers__periph__eeprom_1gacb2a167244a8edac8654eb8d36c91d07)`(uint32_t pos,const void * data,size_t len)`            | Write `len` bytes at the given position.
`public size_t `[`eeprom_set`](#group__drivers__periph__eeprom_1gafe829024f237babdf67bfe6dd3a3f32c)`(uint32_t pos,uint8_t val,size_t len)`            | Set `len` bytes from the given position `pos` with value `val`.
`public size_t `[`eeprom_clear`](#group__drivers__periph__eeprom_1ga5ba7fae239152c01e9e0b3794e6d21b9)`(uint32_t pos,size_t len)`            | Clear `len` bytes from the given position `pos`.
`public size_t `[`eeprom_erase`](#group__drivers__periph__eeprom_1gabe01af4f8804885bbb461fe00a2b2e76)`(void)`            | Erase the whole EEPROM content.

## Members

#### `define `[`EEPROM_CLEAR_BYTE`](#group__drivers__periph__eeprom_1gafceca29bbdde9b5c605bea36c0756621) 

Default value of the EEPROM clear byte.

#### `public uint8_t `[`eeprom_read_byte`](#group__drivers__periph__eeprom_1ga82f2d8ab868c0bbc4535d5551e8316cb)`(uint32_t pos)` 

Read a byte at the given position in eeprom.

#### Parameters
* `pos` position to read

#### Returns
the byte read

#### `public size_t `[`eeprom_read`](#group__drivers__periph__eeprom_1gab7dc966f5c6e0fddbedfce0347d61929)`(uint32_t pos,void * data,size_t len)` 

Read `len` bytes from the given position.

This function must be implemented by each CPU that provides an internal EEPROM.

#### Parameters
* `pos` start position in eeprom 

* `data` output memory location to write to 

* `len` the number of bytes to read

#### Returns
the number of bytes read

#### `public void `[`eeprom_write_byte`](#group__drivers__periph__eeprom_1gaa5bc1b54fe2d4f5da1ee15503a95644c)`(uint32_t pos,uint8_t data)` 

Write a byte at the given position.

#### Parameters
* `pos` position to write 

* `data` byte address to write to

#### `public size_t `[`eeprom_write`](#group__drivers__periph__eeprom_1gacb2a167244a8edac8654eb8d36c91d07)`(uint32_t pos,const void * data,size_t len)` 

Write `len` bytes at the given position.

This function must be implemented by each CPU that provides an internal EEPROM.

#### Parameters
* `pos` start position in eeprom 

* `data` input memory location to read into 

* `len` the number of bytes to read

#### Returns
the number of bytes written

#### `public size_t `[`eeprom_set`](#group__drivers__periph__eeprom_1gafe829024f237babdf67bfe6dd3a3f32c)`(uint32_t pos,uint8_t val,size_t len)` 

Set `len` bytes from the given position `pos` with value `val`.

#### Parameters
* `pos` start position in eeprom 

* `val` the value to set 

* `len` the number of bytes to set

#### Returns
the number of bytes set

#### `public size_t `[`eeprom_clear`](#group__drivers__periph__eeprom_1ga5ba7fae239152c01e9e0b3794e6d21b9)`(uint32_t pos,size_t len)` 

Clear `len` bytes from the given position `pos`.

Clearing a byte in EEPROM simply consists in setting it to 0

#### Parameters
* `pos` start position in eeprom 

* `len` the number of bytes to clear

#### Returns
the number of bytes cleared

#### `public size_t `[`eeprom_erase`](#group__drivers__periph__eeprom_1gabe01af4f8804885bbb461fe00a2b2e76)`(void)` 

Erase the whole EEPROM content.

#### Returns
the EEPROM_SIZE

