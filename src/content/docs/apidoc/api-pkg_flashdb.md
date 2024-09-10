---
title: api-pkg_flashdb.md
description: api-pkg_flashdb.md
---
# group `pkg_flashdb` 

An ultra-lightweight embedded database.

**See also**: [http://armink.gitee.io/flashdb/](http://armink.gitee.io/flashdb/)

This package provides a Key-Value database and a Time series database that can be used with a MTD or a file system backend.

It is recommended to use the use the MTD backend for performance reasons, but if you have a filesystem anyway or want to store the database as a file there is also a VFS backend that can be used instead.

MTD BackendTo enable the MTD backend, select the `flashdb_mtd` module.

FlashDB can only use a single MTD device. To assign a MTD device for FlashDB to use, call

```cpp
fdb_mtd_init([MTD_0](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#adafruit-grand-central-m4-express_2include_2board_8h_1a0f992c379bd87e59320727deb561bbbd));
```

FlashDB allows for multiple partitions on the device. They have to configured at compile time:

```cpp
CFLAGS += -DFAL_PART0_LABEL=\"part0\"
CFLAGS += -DFAL_PART0_LENGTH=8*1024

CFLAGS += -DFAL_PART1_LABEL=\"part1\"
CFLAGS += -DFAL_PART1_LENGTH=4*1024
```

The partition names have to be used in `fdb_kvdb_init()` / `fdb_tsdb_init()`.

VFS BackendTo enable the VFS Backend, select the `flashdb_vfs` module.

Here instead of partitions, FlashDB uses directories to store the data. The directory names are used instead of the partition names in `fdb_kvdb_init()` / `fdb_tsdb_init()` and you have to enable file mode by calling

```cpp
bool file_mode = true;
fdb_kvdb_control(&kvdb, FDB_KVDB_CTRL_SET_FILE_MODE, &file_mode);
```

for the Key-Value database and

```cpp
bool file_mode = true;
fdb_tsdb_control(&tsdb, FDB_TSDB_CTRL_SET_FILE_MODE, &file_mode);
```

for the time-series database.

Key-Value databaseTo enable the Key-Value database, select the `flashdb_kvdb` module.

For use of the FlashDB API, refer to the [FlashDB documentation](http://armink.gitee.io/flashdb/#/sample-kvdb-basic).

Time series databaseTo enable the Key-Value database, select the `flashdb_tsdb` module.

For use of the FlashDB API, refer to the [FlashDB documentation](http://armink.gitee.io/flashdb/#/sample-tsdb-basic).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

