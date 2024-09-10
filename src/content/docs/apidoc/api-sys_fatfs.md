---
title: api-sys_fatfs.md
description: api-sys_fatfs.md
---
# group `sys_fatfs` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`FATFS_YEAR_OFFSET`](#group__sys__fatfs_1ga91e6a88e878df2c8d1ecd3065d92dfa7)            | The year in FatFs timestamps is relative to this offset.
`define `[`EPOCH_YEAR_OFFSET`](#group__sys__fatfs_1gac60b25fabfee168b71723862d745cfa1)            | The epoch offset is used to convert between FatFs and time_t timestamps.
`define `[`FATFS_MAX_VOL_STR_LEN`](#group__sys__fatfs_1ga936f8b2bea013417ca1c0826e8183781)            | size needed for volume strings like "n:/" where n is the volume id
`define `[`FATFS_MOUNT_OPT`](#group__sys__fatfs_1ga7ef4d049a02926687d3e3ff7ec2da937)            | 0:mount on first file access, 1 mount in f_mount() call
`define `[`CONFIG_FATFS_FORMAT_TYPE`](#group__sys__fatfs_1gaf43af59221dcdc4e0c3316b661da1e1a)            | FAT filesystem type that a file system should be formatted in by [vfs_format()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga85c6c8cab631ccd9ad61badb54d8ba10)
`define `[`CONFIG_FATFS_FORMAT_ALLOC_STATIC`](#group__sys__fatfs_1gacd7363cfc760d69442a85363be66fc27)            | Statically allocate work buffer for format operation.
`define `[`FATFS_MAX_ABS_PATH_SIZE`](#group__sys__fatfs_1gac2705d10dbe276b4b760ead6ef7f20e5)            | Size of path buffer for absolute paths.
`struct `[`fatfs_desc`](#structfatfs__desc) | FatFs instance descriptor.
`struct `[`fatfs_file_desc`](#structfatfs__file__desc) | FatFs file instance descriptor.

## Members

#### `define `[`FATFS_YEAR_OFFSET`](#group__sys__fatfs_1ga91e6a88e878df2c8d1ecd3065d92dfa7) 

The year in FatFs timestamps is relative to this offset.

#### `define `[`EPOCH_YEAR_OFFSET`](#group__sys__fatfs_1gac60b25fabfee168b71723862d745cfa1) 

The epoch offset is used to convert between FatFs and time_t timestamps.

#### `define `[`FATFS_MAX_VOL_STR_LEN`](#group__sys__fatfs_1ga936f8b2bea013417ca1c0826e8183781) 

size needed for volume strings like "n:/" where n is the volume id

#### `define `[`FATFS_MOUNT_OPT`](#group__sys__fatfs_1ga7ef4d049a02926687d3e3ff7ec2da937) 

0:mount on first file access, 1 mount in f_mount() call

#### `define `[`CONFIG_FATFS_FORMAT_TYPE`](#group__sys__fatfs_1gaf43af59221dcdc4e0c3316b661da1e1a) 

FAT filesystem type that a file system should be formatted in by [vfs_format()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga85c6c8cab631ccd9ad61badb54d8ba10)

#### `define `[`CONFIG_FATFS_FORMAT_ALLOC_STATIC`](#group__sys__fatfs_1gacd7363cfc760d69442a85363be66fc27) 

Statically allocate work buffer for format operation.

This will statically allocate 512 bytes as the work buffer for the format operation.

If this is set to 0, dynamic allocation (malloc) will be used instead and format will fail if not enough memory is available.

#### `define `[`FATFS_MAX_ABS_PATH_SIZE`](#group__sys__fatfs_1gac2705d10dbe276b4b760ead6ef7f20e5) 

Size of path buffer for absolute paths.

Most FatFs file operations need an absolute path. This defines the size of the needed buffer to circumvent stack allocation within vfs-wrappers

# struct `fatfs_desc` 

FatFs instance descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public FATFS `[`fat_fs`](#structfatfs__desc_1a675bddc8be0f418e4c1576ccbd7856fb) | FatFs work area needed for each volume.
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structfatfs__desc_1add947de8ae227cae934a604870f57032) | MTD device to use.
`public uint8_t `[`vol_idx`](#structfatfs__desc_1a0927d8c81590df080227069e1f416809) | low level device that is used by FatFs
`public char `[`abs_path_str_buff`](#structfatfs__desc_1a19227baa09030724decbd9592a1cddbb) | most FatFs file operations need an absolute path.

## Members

#### `public FATFS `[`fat_fs`](#structfatfs__desc_1a675bddc8be0f418e4c1576ccbd7856fb) 

FatFs work area needed for each volume.

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structfatfs__desc_1add947de8ae227cae934a604870f57032) 

MTD device to use.

#### `public uint8_t `[`vol_idx`](#structfatfs__desc_1a0927d8c81590df080227069e1f416809) 

low level device that is used by FatFs

#### `public char `[`abs_path_str_buff`](#structfatfs__desc_1a19227baa09030724decbd9592a1cddbb) 

most FatFs file operations need an absolute path.

This buffer provides static memory to circumvent stack allocation within vfs-wrappers

# struct `fatfs_file_desc` 

FatFs file instance descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public FIL `[`file`](#structfatfs__file__desc_1ac75efbf8d4f52e939f3dfb44446ca4f9) | FatFs work area for a single file.
`public char `[`fname`](#structfatfs__file__desc_1a40aa8e97154e12c295f05c59f565fa5c) | name of the file (e.g.

## Members

#### `public FIL `[`file`](#structfatfs__file__desc_1ac75efbf8d4f52e939f3dfb44446ca4f9) 

FatFs work area for a single file.

#### `public char `[`fname`](#structfatfs__file__desc_1a40aa8e97154e12c295f05c59f565fa5c) 

name of the file (e.g.

f_stat uses filename instead of FIL)

