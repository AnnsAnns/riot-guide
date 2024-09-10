---
title: api-sys_eepreg.md
description: api-sys_eepreg.md
---
# group `sys_eepreg` 

eepreg provides a facility to easily manage the locations of data stored in EEPROM via a meta-data registry.

The structure of the meta-data registry is intended to make it easy to detect the exact layout of existent data so that automatic tools may be written to migrate legacy data to new formats. It also allows the addition and removal of new entries dynamically.

Names are used as identifiers and must be unique! It is also recommended to keep them as short as possible (while still being unique and human readable), as many systems have very small amounts of EEPROM. Disemvowelment can shorten long names while still retaining readability.

```cpp
The layout of the EEPROM used looks like this:
   EEPROM_RESERV_CPU_LOW
   EEPROM_RESERV_BOARD_LOW
   Registry magic number ("RIOTREG")
   Registry end pointer
   Registry entry 1 meta-data length (1 byte)
   Registry entry 1 name (unterminated)
   Registry entry 1 data pointer
   Registry entry 2 meta-data length
   Registry entry 2 name
   Registry entry 2 data pointer
   ... (new registry meta-data may be added in ascending order)
   unused space
   ... (new data locations may be added in descending order)
   Entry 2 data
   Entry 1 data
   EEPROM_RESERV_BOARD_HI
   EEPROM_RESERV_CPU_HI
```

Pointer length is dependent on the size of the available EEPROM (see EEPREG_PTR_LEN below).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`EEPROM_RESERV_CPU_LOW`](#group__sys__eepreg_1ga63bb256101fa9e77509f6c7f55e18171)            | EEPROM reserved near beginning for use by CPU and related.
`define `[`EEPROM_RESERV_CPU_HI`](#group__sys__eepreg_1ga589effdf337618045b68fbbee07e7427)            | EEPROM reserved near end for use by CPU and related.
`define `[`EEPROM_RESERV_BOARD_LOW`](#group__sys__eepreg_1gad9b4c48f192c65ee6336d4fb7ddcc21f)            | EEPROM reserved near beginning for use by board and related.
`define `[`EEPROM_RESERV_BOARD_HI`](#group__sys__eepreg_1gaa75bb392911c28e5e1d9a7fa25c19eca)            | EEPROM reserved near end for use by board and related.
`define `[`EEPREG_PTR_LEN`](#group__sys__eepreg_1ga0fdced4506a72c09f58cdf45abe93daa)            | Size in bytes of pointer meta-data in EEPROM.
`public int `[`eepreg_add`](#group__sys__eepreg_1ga8386f5e817d99fa79e0dda1eec21a2bc)`(uint32_t * pos,const char * name,uint32_t len)`            | Load or write meta-data in EEPROM registry.
`public int `[`eepreg_read`](#group__sys__eepreg_1ga2cc01fd112cc905284c7c042ffa960e5)`(uint32_t * pos,const char * name)`            | Read position meta-data from EEPROM registry.
`public int `[`eepreg_write`](#group__sys__eepreg_1gacdab9c188e7a2acab1e856bde50dada1)`(uint32_t * pos,const char * name,uint32_t len)`            | Write meta-data to EEPROM registry.
`public int `[`eepreg_rm`](#group__sys__eepreg_1ga03a4041c60ceeae39c1a0c1920829625)`(const char * name)`            | Remove entry from EEPROM registry and free space.
`public int `[`eepreg_iter`](#group__sys__eepreg_1gaea6f1cbfd9d0313460f95174a7211586)`(`[`eepreg_iter_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__eepreg_1gab289846ef3f21ee15e71e65c7bbece82)` cb,void * arg)`            | Iterate over meta-data entries in EEPROM registry.
`public int `[`eepreg_check`](#group__sys__eepreg_1gabac1fc1aa39794180aa2c74a05542cb8)`(void)`            | Check for the presence of meta-data registry.
`public int `[`eepreg_reset`](#group__sys__eepreg_1ga824712fcd738078172386b1219fec5e7)`(void)`            | Clear existing meta-data registry.
`public int `[`eepreg_len`](#group__sys__eepreg_1ga620ef74b27d473d3de03e7628ae8b4ed)`(uint32_t * len,const char * name)`            | Calculate data length from meta-data in EEPROM registry.
`public int `[`eepreg_free`](#group__sys__eepreg_1gae245361c595f9a2e8ae3db594291abb3)`(uint32_t * len)`            | Calculate length of remaining EEPROM free space.

## Members

#### `define `[`EEPROM_RESERV_CPU_LOW`](#group__sys__eepreg_1ga63bb256101fa9e77509f6c7f55e18171) 

EEPROM reserved near beginning for use by CPU and related.

Change with care, as it may make existing data difficult to migrate

#### `define `[`EEPROM_RESERV_CPU_HI`](#group__sys__eepreg_1ga589effdf337618045b68fbbee07e7427) 

EEPROM reserved near end for use by CPU and related.

Change with care, as it may make existing data difficult to migrate

#### `define `[`EEPROM_RESERV_BOARD_LOW`](#group__sys__eepreg_1gad9b4c48f192c65ee6336d4fb7ddcc21f) 

EEPROM reserved near beginning for use by board and related.

Change with care, as it may make existing data difficult to migrate

#### `define `[`EEPROM_RESERV_BOARD_HI`](#group__sys__eepreg_1gaa75bb392911c28e5e1d9a7fa25c19eca) 

EEPROM reserved near end for use by board and related.

Change with care, as it may make existing data difficult to migrate

#### `define `[`EEPREG_PTR_LEN`](#group__sys__eepreg_1ga0fdced4506a72c09f58cdf45abe93daa) 

Size in bytes of pointer meta-data in EEPROM.

#### `public int `[`eepreg_add`](#group__sys__eepreg_1ga8386f5e817d99fa79e0dda1eec21a2bc)`(uint32_t * pos,const char * name,uint32_t len)` 

Load or write meta-data in EEPROM registry.

This checks to see if relevant meta-data exists in the EEPROM registry, and returns that data position if it exists. If an entry does not exist in the registry, meta-data is written and allocated data space if there is enough remaining. Requesting a different length for an existent entry returns an error.

#### Parameters
* `pos` pointer to position variable 

* `name` name of entry to load or write 

* `len` requested amount of data storage

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOSPC on insufficient EEPROM for entry 

#### Returns
-EADDRINUSE on existing entry with different length

#### `public int `[`eepreg_read`](#group__sys__eepreg_1ga2cc01fd112cc905284c7c042ffa960e5)`(uint32_t * pos,const char * name)` 

Read position meta-data from EEPROM registry.

This is similar to eepreg_add, except it never writes meta-data.

#### Parameters
* `pos` pointer to position variable 

* `name` name of entry to load

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOENT on non-existent registry or entry

#### `public int `[`eepreg_write`](#group__sys__eepreg_1gacdab9c188e7a2acab1e856bde50dada1)`(uint32_t * pos,const char * name,uint32_t len)` 

Write meta-data to EEPROM registry.

This ignores existing meta-data and always makes a new entry in the registry. Typical use should be through eepreg_add and not eepreg_write. If multiple entries with the same name exist, eepreg functions will find the oldest. Mainly intended for use by migration utilities.

#### Parameters
* `pos` pointer to position variable 

* `name` name of entry to write 

* `len` requested amount of data storage

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOSPC on insufficient EEPROM for entry

#### `public int `[`eepreg_rm`](#group__sys__eepreg_1ga03a4041c60ceeae39c1a0c1920829625)`(const char * name)` 

Remove entry from EEPROM registry and free space.

This removes an entry from the EEPROM registry and its corresponding data and moves the data and meta-data of entries after removed entry to occupy the freed space. This preserves the structure of the EEPROM registry. Warning: this is a read/write intensive operation! Mainly intended for use by migration utilities.

#### Parameters
* `name` name of entry to remove

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOENT on non-existent registry or entry

#### `public int `[`eepreg_iter`](#group__sys__eepreg_1gaea6f1cbfd9d0313460f95174a7211586)`(`[`eepreg_iter_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__eepreg_1gab289846ef3f21ee15e71e65c7bbece82)` cb,void * arg)` 

Iterate over meta-data entries in EEPROM registry.

This executes a callback over each name in the EEPROM registry. The intended work-flow for migration is to: iterate over each entry, check to see if migration is needed, duplicate using eepreg_write if needed, migrate data to duplicate entry, then delete old entry using eepreg_rm.

It is safe for the callback to remove the entry it is called with, or to add new entries.

#### Parameters
* `cb` callback to iterate over entries 

* `arg` argument for cb

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOENT on non-existent registry 

#### Returns
return value of cb when cb returns < 0

#### `public int `[`eepreg_check`](#group__sys__eepreg_1gabac1fc1aa39794180aa2c74a05542cb8)`(void)` 

Check for the presence of meta-data registry.

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOENT on non-existent registry

#### `public int `[`eepreg_reset`](#group__sys__eepreg_1ga824712fcd738078172386b1219fec5e7)`(void)` 

Clear existing meta-data registry.

This removes any existing meta-data registry by writing a new registry with no entries.

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error

#### `public int `[`eepreg_len`](#group__sys__eepreg_1ga620ef74b27d473d3de03e7628ae8b4ed)`(uint32_t * len,const char * name)` 

Calculate data length from meta-data in EEPROM registry.

This information is typically already available to code that has called eepreg_add.

#### Parameters
* `len` pointer to length variable 

* `name` name of entry to load or write

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOENT on non-existent registry or entry

#### `public int `[`eepreg_free`](#group__sys__eepreg_1gae245361c595f9a2e8ae3db594291abb3)`(uint32_t * len)` 

Calculate length of remaining EEPROM free space.

#### Parameters
* `len` pointer to length variable

#### Returns
0 on success 

#### Returns
-EIO on EEPROM I/O error 

#### Returns
-ENOENT on non-existent registry

