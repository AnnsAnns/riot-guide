---
title: api-drivers_periph_rtc_mem.md
description: api-drivers_periph_rtc_mem.md
---
# group `drivers_periph_rtc_mem` 

Low-level RTC Memory peripheral driver.

This API provides an interface to access low-power memory present on some RTCs. This memory is retained even when the rest of the system is powered off.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`rtc_mem_size`](#group__drivers__periph__rtc__mem_1ga3c258f7e7843b25f4af320ef4035a17a)`(void)`            | Get the amount of RTC memory.
`public void `[`rtc_mem_read`](#group__drivers__periph__rtc__mem_1ga15a989fec35430f1970ad0f400c5036b)`(unsigned offset,void * data,size_t len)`            | Read from RTC memory.
`public void `[`rtc_mem_write`](#group__drivers__periph__rtc__mem_1ga2d0b02d6d656fb7737ed594f12dfb98f)`(unsigned offset,const void * data,size_t len)`            | Write to RTC memory.

## Members

#### `public size_t `[`rtc_mem_size`](#group__drivers__periph__rtc__mem_1ga3c258f7e7843b25f4af320ef4035a17a)`(void)` 

Get the amount of RTC memory.

#### Returns
The usable amount of RTC memory in bytes

#### `public void `[`rtc_mem_read`](#group__drivers__periph__rtc__mem_1ga15a989fec35430f1970ad0f400c5036b)`(unsigned offset,void * data,size_t len)` 

Read from RTC memory.

Reading beyond [rtc_mem_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc__mem_1ga3c258f7e7843b25f4af320ef4035a17a) are illegal and trigger an assertion / be discarded.

#### Parameters
* `offset` Offset to the start of RTC memory in bytes 

* `data` Destination buffer 

* `len` Amount of bytes to read

#### `public void `[`rtc_mem_write`](#group__drivers__periph__rtc__mem_1ga2d0b02d6d656fb7737ed594f12dfb98f)`(unsigned offset,const void * data,size_t len)` 

Write to RTC memory.

Writing beyond [rtc_mem_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc__mem_1ga3c258f7e7843b25f4af320ef4035a17a) are illegal and trigger an assertion / be discarded.

#### Parameters
* `offset` Offset to the start of RTC memory in bytes 

* `data` Source buffer 

* `len` Amount of bytes to write

