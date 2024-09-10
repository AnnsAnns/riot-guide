---
title: api-drivers_mtd.md
description: api-drivers_mtd.md
---
# group `drivers_mtd` 

Low level Memory Technology Device interface.

Generic memory technology device interface

Unlike the [Flash page driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage), this is device driver based (i.e. all functions take a [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) as a first argument), so that SPI based EEPROMs (e.g. [AT25xxx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd__at25xxx)) can be accessed the same way as [internal flash](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd__flashpage) or [SD cards](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd__sdcard)), all inside the same application.

MTD devices expose a block based erase and write interface. In that, they are the distinct from block devices (like hard disks) on which individual bytes can be overwritten. The [Linux MTD FAQ](http://www.linux-mtd.infradead.org/faq/general.html) has a convenient comparison (beware though of terminology differences outlined below). They can be erased (with some granularity, often wearing out the erased area a bit), and erased areas can be written to (sometimes multiple times).

MTD devices are described in terms of sectors, pages and feature flags:

* A **sector** is the device's erase unit. Calls to [mtd_erase](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1gaabab7f7b0b1cfcdbe2b32d2e26bbf4d7) need to work in alignment with this number (commonly somewhere around 1kiB).

(Note that this corresponds to the term "page" as used in the flashpage API, and the term "eraseblock" in Linux's MTD).

* A **page** is the largest a device can write in one transfer.

Applications rarely need to deal with this; it offers no guarantees on atomicity, but writing within a page is generally faster than across page boundaries.

Pages are a subdivision of sectors.

* The **write size** is the minimum size of writes to the device, and also the required alignment of writes.

The write size is a divider of the page. It is often between 1 to 4 bytes long, but may be up to the full page size.

* The device's **flags** indicate features, eg. whether a memory location can be overwritten without erasing it first.

Unless a flag (such as [MTD_DRIVER_FLAG_DIRECT_WRITE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1gacd32ebfc4ee09f64d7e2490c4f5504fb) or [MTD_DRIVER_FLAG_CLEARING_OVERWRITE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga08bad3026290086a5215b85bd1c62f51)) allows it, this MTD API does not allow memory areas to be written to twice between erase operations. Drivers are not expected to count write accesses, and neither do this module's functions: The performance impact would be too great. It is up to the application to only write to erased memory once. Failure to do so may damage hardware.

This MTD API currently does not specify which value will be read from an erased sector.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MTD_XFA_ADD`](#group__drivers__mtd_1gaf0ba0e302d3f3711c691fdfbda1461ac)            | Define MTD device pointer variable `mtd<idx>`
`define `[`MTD_NUMOF`](#group__drivers__mtd_1gaed6dda925a94ee38ebfa0b6105461893)            | Number of MTDs defined in the MTD device array in XFA.
`define `[`MTD_DRIVER_FLAG_DIRECT_WRITE`](#group__drivers__mtd_1gacd32ebfc4ee09f64d7e2490c4f5504fb)            | MTD driver can write any data to the storage without erasing it first.
`define `[`MTD_DRIVER_FLAG_CLEARING_OVERWRITE`](#group__drivers__mtd_1ga08bad3026290086a5215b85bd1c62f51)            | MTD driver supports arbitrary clearing overwrites.
`enum `[`mtd_power_state`](#group__drivers__mtd_1ga2e588df22ed1a520ba154adbd93b1455)            | MTD power states.
`public int `[`mtd_init`](#group__drivers__mtd_1ga6bcf582eaf56330ea31c1162ea535076)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd)`            | mtd_init Initialize a MTD device
`public int `[`mtd_read`](#group__drivers__mtd_1ga74ffca1da0436aada58ef3f18f469e36)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,void * dest,uint32_t addr,uint32_t count)`            | Read data from a MTD device.
`public int `[`mtd_read_page`](#group__drivers__mtd_1ga8b72c0b58ed1f5a3ff4cc7cd4965dd83)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,void * dest,uint32_t page,uint32_t offset,uint32_t size)`            | Read data from a MTD device with pagewise addressing.
`public int `[`mtd_write`](#group__drivers__mtd_1ga5f36fb25e0daada2e9a873475c532d94)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t addr,uint32_t count)`            | Write data to a MTD device.
`public int `[`mtd_write_page_raw`](#group__drivers__mtd_1ga6cb5d1eed19f88f4e4b970541f7dcbf6)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t page,uint32_t offset,uint32_t size)`            | Write data to a MTD device with pagewise addressing.
`public int `[`mtd_write_page`](#group__drivers__mtd_1gad52a5002206227b278f6cbb1efb605d3)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t page,uint32_t offset,uint32_t size)`            | Write data to a MTD device with pagewise addressing.
`public int `[`mtd_erase`](#group__drivers__mtd_1gaabab7f7b0b1cfcdbe2b32d2e26bbf4d7)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,uint32_t addr,uint32_t count)`            | Erase sectors of a MTD device.
`public int `[`mtd_erase_sector`](#group__drivers__mtd_1gaf9c761bda55271360e1797491ef2ef7f)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,uint32_t sector,uint32_t num)`            | Erase sectors of a MTD device.
`public int `[`mtd_write_sector`](#group__drivers__mtd_1ga40c7db24bb97158581694edc4eaf20aa)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t sector,uint32_t num)`            | Write data to a MTD device with whole sector writes.
`public int `[`mtd_power`](#group__drivers__mtd_1gaf44f35470c2180ebd4b772f3b25d31fc)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,enum `[`mtd_power_state`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga2e588df22ed1a520ba154adbd93b1455)` power)`            | Set power mode on a MTD device.
`public inline static `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`mtd_dev_get`](#group__drivers__mtd_1ga1bc58d81d002e150ccb418701d38b43e)`(unsigned idx)`            | Get an MTD device by index.
`struct `[`mtd_dev_t`](#structmtd__dev__t) | MTD device descriptor.
`struct `[`mtd_desc`](#structmtd__desc) | MTD driver interface.

## Members

#### `define `[`MTD_XFA_ADD`](#group__drivers__mtd_1gaf0ba0e302d3f3711c691fdfbda1461ac) 

Define MTD device pointer variable `mtd<idx>`

The macro defines the MTD device pointer variable `mtd<idx>`, sets it to the address of the MTD device specified by the `dev` parameter, and adds it to the XFA of MTD device pointers [mtd_dev_xfa](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga290552e29a4074f1b34c0067e39886df). For example 
```cpp
MTD_XFA_ADD(my_dev, 1);
```
 defines the variable `mtd1` pointing to the device `my_dev`.

The parameter `idx` is used as priority of the MTD device pointer within the XFA. That means it determines the order of the MTD device pointers within [mtd_dev_xfa](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga290552e29a4074f1b34c0067e39886df).

Only if each MTD device is added with a unique priority and only if the priorities start at 0 and are used in consecutive order, the parameter `idx` corresponds to the position of the MTD device pointer within the [mtd_dev_xfa](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga290552e29a4074f1b34c0067e39886df) XFA and `mtd_dev_xfa[i]` points to the i-th MTD device.

#### Parameters
* `dev` MTD device 

* `idx` Priority of the MTD device pointer within the XFA

#### `define `[`MTD_NUMOF`](#group__drivers__mtd_1gaed6dda925a94ee38ebfa0b6105461893) 

Number of MTDs defined in the MTD device array in XFA.

#### `define `[`MTD_DRIVER_FLAG_DIRECT_WRITE`](#group__drivers__mtd_1gacd32ebfc4ee09f64d7e2490c4f5504fb) 

MTD driver can write any data to the storage without erasing it first.

If this is set, a write completely overrides the previous values.

#### `define `[`MTD_DRIVER_FLAG_CLEARING_OVERWRITE`](#group__drivers__mtd_1ga08bad3026290086a5215b85bd1c62f51) 

MTD driver supports arbitrary clearing overwrites.

If this is set, (arbitrarily) many writes are permitted per write size, and the result is the old value bitwise-AND the written value.

This property is common for managed flash memories. (By comparison, the raw flash often used internally by MCUs may not allow overwrites, or may allow them with the same semantics, but only for a limited number of writes between erasures; there is currently no flag describing these any further).

#### `enum `[`mtd_power_state`](#group__drivers__mtd_1ga2e588df22ed1a520ba154adbd93b1455) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MTD_POWER_UP            | Power up.
MTD_POWER_DOWN            | Power down.

MTD power states.

#### `public int `[`mtd_init`](#group__drivers__mtd_1ga6bcf582eaf56330ea31c1162ea535076)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd)` 

mtd_init Initialize a MTD device

#### Parameters
* `mtd` the device to initialize

#### Parameters
* `0` on success 

* `<0` on error probably errno 

* `-ENODEV` if no device if given or no driver is set 

* `-ENOTSUP` if device has no init function

#### `public int `[`mtd_read`](#group__drivers__mtd_1ga74ffca1da0436aada58ef3f18f469e36)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,void * dest,uint32_t addr,uint32_t count)` 

Read data from a MTD device.

No alignment is required on `addr` and `count`.

#### Parameters
* `mtd` the device to read from 

* `dest` the buffer to fill in 

* `addr` the start address to read from 

* `count` the number of bytes to read

#### Parameters
* `0` on success 

* `<0` if an error occurred 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory 

* `-EIO` if I/O error occurred

#### `public int `[`mtd_read_page`](#group__drivers__mtd_1ga8b72c0b58ed1f5a3ff4cc7cd4965dd83)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,void * dest,uint32_t page,uint32_t offset,uint32_t size)` 

Read data from a MTD device with pagewise addressing.

The MTD layer will take care of splitting up the transaction into multiple reads if it is required by the underlying storage media.

#### Parameters
* `mtd` the device to read from 

* `dest` the buffer to fill in 

* `page` Page number to start reading from 

* `offset` offset from the start of the page (in bytes) 

* `size` the number of bytes to read

#### Parameters
* `0` on success 

* `<0` value on error 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory 

* `-EIO` if I/O error occurred

#### `public int `[`mtd_write`](#group__drivers__mtd_1ga5f36fb25e0daada2e9a873475c532d94)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t addr,uint32_t count)` 

Write data to a MTD device.

`addr` + `count` must be inside a page boundary. `addr` can be anywhere but the buffer cannot overlap two pages.

Both parameters must be multiples of the device's write size.

#### Parameters
* `mtd` the device to write to 

* `src` the buffer to write 

* `addr` the start address to write to 

* `count` the number of bytes to write

#### Parameters
* `0` on success 

* `<0` if an error occurred 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory, or overlapping two pages 

* `-EIO` if I/O error occurred 

* `-EINVAL` if parameters are invalid (invalid alignment for instance)

#### `public int `[`mtd_write_page_raw`](#group__drivers__mtd_1ga6cb5d1eed19f88f4e4b970541f7dcbf6)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t page,uint32_t offset,uint32_t size)` 

Write data to a MTD device with pagewise addressing.

The MTD layer will take care of splitting up the transaction into multiple writes if it is required by the underlying storage media.

This performs a raw write, no automatic read-modify-write cycle is performed.

Both `offset` and `size` must be multiples of the device's write size.

#### Parameters
* `mtd` the device to write to 

* `src` the buffer to write 

* `page` Page number to start writing to 

* `offset` byte offset from the start of the page 

* `size` the number of bytes to write

#### Parameters
* `0` on success 

* `<0` value on error 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory, 

* `-EIO` if I/O error occurred 

* `-EINVAL` if parameters are invalid

#### `public int `[`mtd_write_page`](#group__drivers__mtd_1gad52a5002206227b278f6cbb1efb605d3)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t page,uint32_t offset,uint32_t size)` 

Write data to a MTD device with pagewise addressing.

The MTD layer will take care of splitting up the transaction into multiple writes if it is required by the underlying storage media.

If the underlying sector needs to be erased before it can be written, the MTD layer will take care of the read-modify-write operation.

`offset` must be smaller than the page size

this requires the `mtd_write_page` module

#### Parameters
* `mtd` the device to write to 

* `src` the buffer to write 

* `page` Page number to start writing to 

* `offset` byte offset from the start of the page 

* `size` the number of bytes to write

#### Parameters
* `0` on success 

* `<0` value on error 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory, 

* `-EIO` if I/O error occurred 

* `-EINVAL` if parameters are invalid

#### `public int `[`mtd_erase`](#group__drivers__mtd_1gaabab7f7b0b1cfcdbe2b32d2e26bbf4d7)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,uint32_t addr,uint32_t count)` 

Erase sectors of a MTD device.

`addr` must be aligned on a sector boundary. `count` must be a multiple of a sector size.

#### Parameters
* `mtd` the device to erase 

* `addr` the address of the first sector to erase 

* `count` the number of bytes to erase

#### Parameters
* `0` if erase successful 

* `<0` if an error occurred 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory 

* `-EIO` if I/O error occurred

#### `public int `[`mtd_erase_sector`](#group__drivers__mtd_1gaf9c761bda55271360e1797491ef2ef7f)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,uint32_t sector,uint32_t num)` 

Erase sectors of a MTD device.

#### Parameters
* `mtd` the device to erase 

* `sector` the first sector number to erase 

* `num` the number of sectors to erase

#### Parameters
* `0` if erase successful 

* `<0` if an error occurred 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `sector` are not valid, i.e. outside memory 

* `-EIO` if I/O error occurred

#### `public int `[`mtd_write_sector`](#group__drivers__mtd_1ga40c7db24bb97158581694edc4eaf20aa)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,const void * src,uint32_t sector,uint32_t num)` 

Write data to a MTD device with whole sector writes.

The MTD layer will take care of splitting up the transaction into multiple writes if it is required by the underlying storage media.

The sectors will be erased before writing if needed.

#### Parameters
* `mtd` Device to write to 

* `src` Buffer to write 

* `sector` Sector number to start writing to 

* `num` Number of sectors to write

#### Parameters
* `0` on success 

* `<0` value on error 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation is not supported on `mtd`

* `-EOVERFLOW` if `addr` or `count` are not valid, i.e. outside memory, 

* `-EIO` if I/O error occurred 

* `-EINVAL` if parameters are invalid

#### `public int `[`mtd_power`](#group__drivers__mtd_1gaf44f35470c2180ebd4b772f3b25d31fc)`(`[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * mtd,enum `[`mtd_power_state`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga2e588df22ed1a520ba154adbd93b1455)` power)` 

Set power mode on a MTD device.

#### Parameters
* `mtd` the device to access 

* `power` the power mode to set

#### Parameters
* `0` if power mode successfully set 

* `<0` if an error occurred 

* `-ENODEV` if `mtd` is not a valid device 

* `-ENOTSUP` if operation or `power` state is not supported on `mtd`

* `-EIO` if I/O error occurred

#### `public inline static `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`mtd_dev_get`](#group__drivers__mtd_1ga1bc58d81d002e150ccb418701d38b43e)`(unsigned idx)` 

Get an MTD device by index.

#### Parameters
* `idx` Index of the MTD device

#### Returns
MTD_0 for `idx` 0 and so on NULL if no MTD device exists for the given index

# struct `mtd_dev_t` 

MTD device descriptor.

See the [module level documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd) for details on the field semantics.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`mtd_desc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga016431acc3cc8d6f5a40149225dabc05)` * `[`driver`](#structmtd__dev__t_1a5d72e335ca2807fcb1badb94a7d62608) | MTD driver.
`public uint32_t `[`sector_count`](#structmtd__dev__t_1a3bb7b38359fdbf4a5c7b37afe85baee2) | Number of sector in the MTD.
`public uint32_t `[`pages_per_sector`](#structmtd__dev__t_1a072137ea8598a509cc7d367e6a35ce10) | Number of pages per sector in the MTD.
`public uint32_t `[`page_size`](#structmtd__dev__t_1afbb923a3f218ad7a7cb83ccd7a379493) | Size of the pages in the MTD.
`public uint32_t `[`write_size`](#structmtd__dev__t_1a0000ddcdf9c1ea907358964dd5a13a5c) | Minimum size and alignment of writes to the device.
`public void * `[`work_area`](#structmtd__dev__t_1ae0c14776a7bafec318b8ee75585c9740) | sector-sized buffer (only present when [mtd_write_page](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1gad52a5002206227b278f6cbb1efb605d3) is enabled)

## Members

#### `public const `[`mtd_desc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga016431acc3cc8d6f5a40149225dabc05)` * `[`driver`](#structmtd__dev__t_1a5d72e335ca2807fcb1badb94a7d62608) 

MTD driver.

#### `public uint32_t `[`sector_count`](#structmtd__dev__t_1a3bb7b38359fdbf4a5c7b37afe85baee2) 

Number of sector in the MTD.

#### `public uint32_t `[`pages_per_sector`](#structmtd__dev__t_1a072137ea8598a509cc7d367e6a35ce10) 

Number of pages per sector in the MTD.

#### `public uint32_t `[`page_size`](#structmtd__dev__t_1afbb923a3f218ad7a7cb83ccd7a379493) 

Size of the pages in the MTD.

#### `public uint32_t `[`write_size`](#structmtd__dev__t_1a0000ddcdf9c1ea907358964dd5a13a5c) 

Minimum size and alignment of writes to the device.

#### `public void * `[`work_area`](#structmtd__dev__t_1ae0c14776a7bafec318b8ee75585c9740) 

sector-sized buffer (only present when [mtd_write_page](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1gad52a5002206227b278f6cbb1efb605d3) is enabled)

# struct `mtd_desc` 

MTD driver interface.

This define the functions to access a MTD.

A MTD is composed of pages combined into sectors. A sector is the smallest erasable unit. The number of pages in a sector must be constant for the whole MTD.

The erase operation is available only for entire sectors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`init`](#structmtd__desc_1aed886992d42b8d4b46f847e82586ae7b) | Initialize Memory Technology Device (MTD)
`public int(* `[`read`](#structmtd__desc_1a0e9e45b783e97805755a5ab49e0f92cc) | Read from the Memory Technology Device (MTD)
`public int(* `[`read_page`](#structmtd__desc_1a3a786c689852a87c27d2a38f3bbf8d5d) | Read from the Memory Technology Device (MTD) using pagewise addressing.
`public int(* `[`write_page`](#structmtd__desc_1ab14f20525f833b3a2f1914ad4000eac1) | Write to the Memory Technology Device (MTD) using pagewise addressing.
`public int(* `[`erase`](#structmtd__desc_1a5ceed1da5bce9427950a429f3aa2ee75) | Erase sector(s) over the Memory Technology Device (MTD)
`public int(* `[`erase_sector`](#structmtd__desc_1a7edb9cd7e11a2a9b140a71f2f413210e) | Erase sector(s) of the Memory Technology Device (MTD)
`public int(* `[`power`](#structmtd__desc_1aae0381c0b324a5d4f047b5afc2f98484) | Control power of Memory Technology Device (MTD)
`public uint8_t `[`flags`](#structmtd__desc_1abeecfe527f3ac27482a589230bdfc38d) | Properties of the MTD driver.

## Members

#### `public int(* `[`init`](#structmtd__desc_1aed886992d42b8d4b46f847e82586ae7b) 

Initialize Memory Technology Device (MTD)

#### Parameters
* `dev` Pointer to the selected driver

#### Parameters
* `0` on success 

* `<0` value on error

#### `public int(* `[`read`](#structmtd__desc_1a0e9e45b783e97805755a5ab49e0f92cc) 

Read from the Memory Technology Device (MTD)

No alignment is required on `addr` and `size`.

#### Parameters
* `dev` Pointer to the selected driver 

* `buff` Pointer to the data buffer to store read data 

* `addr` Starting address 

* `size` Number of bytes

#### Parameters
* `0` on success 

* `<0` value on error

#### `public int(* `[`read_page`](#structmtd__desc_1a3a786c689852a87c27d2a38f3bbf8d5d) 

Read from the Memory Technology Device (MTD) using pagewise addressing.

`offset` should not exceed the page size

#### Parameters
* `dev` Pointer to the selected driver 

* `buff` Pointer to the data buffer to store read data 

* `page` Page number to start reading from 

* `offset` Byte offset from the start of the page 

* `size` Number of bytes

#### Parameters
* `n` number of bytes read on success 

* `<0` value on error

#### `public int(* `[`write_page`](#structmtd__desc_1ab14f20525f833b3a2f1914ad4000eac1) 

Write to the Memory Technology Device (MTD) using pagewise addressing.

`offset` should not exceed the page size

#### Parameters
* `dev` Pointer to the selected driver 

* `buff` Pointer to the data to be written 

* `page` Page number to start writing to 

* `offset` Byte offset from the start of the page 

* `size` Number of bytes

#### Parameters
* `n` bytes written on success 

* `<0` value on error

#### `public int(* `[`erase`](#structmtd__desc_1a5ceed1da5bce9427950a429f3aa2ee75) 

Erase sector(s) over the Memory Technology Device (MTD)

`addr` must be aligned on a sector boundary. `size` must be a multiple of a sector size.

#### Parameters
* `dev` Pointer to the selected driver 

* `addr` Starting address 

* `size` Number of bytes

#### Parameters
* `0` on success 

* `<0` value on error

#### `public int(* `[`erase_sector`](#structmtd__desc_1a7edb9cd7e11a2a9b140a71f2f413210e) 

Erase sector(s) of the Memory Technology Device (MTD)

#### Parameters
* `dev` Pointer to the selected driver 

* `sector` the first sector number to erase

* `count` Number of sectors to erase

#### Parameters
* `0` on success 

* `<0` value on error

#### `public int(* `[`power`](#structmtd__desc_1aae0381c0b324a5d4f047b5afc2f98484) 

Control power of Memory Technology Device (MTD)

#### Parameters
* `dev` Pointer to the selected driver 

* `power` Power state to apply (from [mtd_power_state](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga2e588df22ed1a520ba154adbd93b1455))

#### Parameters
* `0` on success 

* `<0` value on error

#### `public uint8_t `[`flags`](#structmtd__desc_1abeecfe527f3ac27482a589230bdfc38d) 

Properties of the MTD driver.

