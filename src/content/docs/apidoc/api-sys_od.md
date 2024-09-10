---
title: api-sys_od.md
description: api-sys_od.md
---
# group `sys_od` 

Allows to print out data dumps of memory regions in hexadecimal or/and ASCII representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`OD_WIDTH_DEFAULT`](#group__sys__od_1gae7f08b526f03ba3406db001709ddd295)            | Default value for parameter *width* of [od_hex_dump()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__od_1gadd5bc6e0ed88a7f27c27ab6448e9907b)
`public void `[`od_hex_dump_ext`](#group__sys__od_1gaa67de27990159824882335ed4dd86d7e)`(const void * data,size_t data_len,uint8_t width,uint32_t offset)`            | Dumps memory stored at *data* byte-wise up to *data_len* in hexadecimal representation to stdout.
`public inline static void `[`od_hex_dump`](#group__sys__od_1gadd5bc6e0ed88a7f27c27ab6448e9907b)`(const void * data,size_t data_len,uint8_t width)`            | Dumps memory stored at *data* byte-wise up to *data_len* in hexadecimal representation to stdout.

## Members

#### `define `[`OD_WIDTH_DEFAULT`](#group__sys__od_1gae7f08b526f03ba3406db001709ddd295) 

Default value for parameter *width* of [od_hex_dump()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__od_1gadd5bc6e0ed88a7f27c27ab6448e9907b)

#### `public void `[`od_hex_dump_ext`](#group__sys__od_1gaa67de27990159824882335ed4dd86d7e)`(const void * data,size_t data_len,uint8_t width,uint32_t offset)` 

Dumps memory stored at *data* byte-wise up to *data_len* in hexadecimal representation to stdout.

If the pseudomodlue `od_string` is used (`USEMODULE += od_string`) the ASCII representation of *data* is also displayed. The displayed start address of *data* can be given as *offset*.

#### Parameters
* `data` Data to dump. 

* `data_len` Length in bytes of *data* to output. 

* `width` Number of bytes per line. If *width* is 0, [OD_WIDTH_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__od_1gae7f08b526f03ba3406db001709ddd295) is assumed as a default value. 

* `offset` Adds an offset to the printed memory addresses. If the origin of the data is an address in memory, this can be used to print the real addresses together with the data.

#### `public inline static void `[`od_hex_dump`](#group__sys__od_1gadd5bc6e0ed88a7f27c27ab6448e9907b)`(const void * data,size_t data_len,uint8_t width)` 

Dumps memory stored at *data* byte-wise up to *data_len* in hexadecimal representation to stdout.

If the pseudomodlue `od_string` is used (`USEMODULE += od_string`) the ASCII representation of *data* is also displayed.

#### Parameters
* `data` Data to dump. 

* `data_len` Length in bytes of *data* to output. 

* `width` Number of bytes per line. If *width* is 0, [OD_WIDTH_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__od_1gae7f08b526f03ba3406db001709ddd295) is assumed as a default value.

