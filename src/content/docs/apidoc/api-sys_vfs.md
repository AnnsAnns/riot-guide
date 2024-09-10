---
title: api-sys_vfs.md
description: api-sys_vfs.md
---
# group `sys_vfs` 

Provides an interface for accessing files and directories from different devices and file systems.

This layer is modeled as a mix between POSIX syscalls (e.g. open) and the Linux VFS layer implementation, with major reductions in the feature set, in order to fit the resource constrained platforms that RIOT targets.

The overall design goals are:

* Provide implementations for all newlib "file" syscalls

* Keep it simple, do not add every possible file operation from Linux VFS.

* Easy to map existing file system implementations for resource constrained systems onto the VFS layer API

* Avoid keeping a central `enum` of all file system drivers that has to be kept up to date with external packages etc.

* Use POSIX `<[errno.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#errno_8h)>` numbers as negative return codes for errors, avoid the global `errno` variable.

* Only absolute paths to files (no per-process working directory)

* No dynamic memory allocation

The API should be easy to understand for users who are familiar with the POSIX file functions (open, close, read, write, fstat, lseek etc.)

The VFS layer keeps track of mounted file systems and open files, the `vfs_open` function searches the array of mounted file systems and dispatches the call to the file system instance with the longest matching mount point prefix. Subsequent calls to `vfs_read`, `vfs_write`, etc will do a look up in the table of open files and dispatch the call to the correct file system driver for handling.

`vfs_mount` takes a string containing the mount point, a file system driver specification (`struct file_system`), and an opaque pointer that only the FS driver knows how to use, which can be used to keep driver parameters in order to allow dynamic handling of multiple devices.

> Todo: VFS layer reference counting and locking for open files and simultaneous access.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MAX6`](#group__sys__vfs_1gadc0ecc0a95f5e03d5199cbbc644fa543)            | MAX6 Function to get the largest of 6 values.
`define `[`VFS_MAX_OPEN_FILES`](#group__sys__vfs_1ga0dc4e529ed77b4432c7bd295bd89fefc)            | Maximum number of simultaneous open files.
`define `[`VFS_DIR_BUFFER_SIZE`](#group__sys__vfs_1ga0e3cb874e1e5f6a49f33151d89f0aaef)            | Size of buffer space in [vfs_DIR](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR).
`define `[`VFS_FILE_BUFFER_SIZE`](#group__sys__vfs_1ga6d9a9dcf98b4d4e4372cc476b8fe8eba)            | Size of buffer space in [vfs_file_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__t).
`define `[`VFS_NAME_MAX`](#group__sys__vfs_1ga818372246f79e5e859a10eb24517a3df)            | Maximum length of the name in a `[vfs_dirent_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__dirent__t)` (not including terminating null)
`define `[`VFS_ANY_FD`](#group__sys__vfs_1ga2033ea53eb6551b0de53412ab38d0f41)            | Used with vfs_bind to bind to any available fd number.
`define `[`VFS_MTD`](#group__sys__vfs_1ga6fdbbbfc8a5870cf706458d5c8419f9a)            | Helper macro for VFS_AUTO_MOUNT.
`define `[`VFS_AUTO_MOUNT`](#group__sys__vfs_1ga74c1713a82cbe6a385e552ed6427f0bb)            | Define an automatic mountpoint.
`define `[`VFS_FS_FLAG_WANT_ABS_PATH`](#group__sys__vfs_1ga2116058f96366fca25adf0065ebef013)            | File system always wants the full VFS path.
`public void `[`vfs_bind_stdio`](#group__sys__vfs_1ga9b760e38efd5f348b77e582954f0b141)`(void)`            | Allocate and bind file descriptors for STDIN, STDERR, and STDOUT.
`public int `[`vfs_close`](#group__sys__vfs_1ga60d1dba40888b0dadfbb4f0a30e1cb89)`(int fd)`            | Close an open file.
`public int `[`vfs_fcntl`](#group__sys__vfs_1gacfac67f4d58f160ca165336b95e14c76)`(int fd,int cmd,int arg)`            | Query/set options on an open file.
`public int `[`vfs_fstat`](#group__sys__vfs_1gad4649a984a7aa0643d157f8467d9c4ee)`(int fd,struct stat * buf)`            | Get status of an open file.
`public int `[`vfs_fstatvfs`](#group__sys__vfs_1gaf67facc4f466ae49d9eef46437a47581)`(int fd,struct `[`statvfs`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstatvfs)` * buf)`            | Get file system status of the file system containing an open file.
`public int `[`vfs_dstatvfs`](#group__sys__vfs_1gac8053fc8b584ba894953565b345f0d16)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp,struct `[`statvfs`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstatvfs)` * buf)`            | Get file system status of the file system containing an open directory.
`public off_t `[`vfs_lseek`](#group__sys__vfs_1ga8280218c31e2cc294019433319c2d5aa)`(int fd,off_t off,int whence)`            | Seek to position in file.
`public int `[`vfs_open`](#group__sys__vfs_1ga208458bdb4b5da7c1330e5fa160e7fee)`(const char * name,int flags,mode_t mode)`            | Open a file.
`public ssize_t `[`vfs_read`](#group__sys__vfs_1gae56830870bc891bd8617d08bc621c5ea)`(int fd,void * dest,size_t count)`            | Read bytes from an open file.
`public ssize_t `[`vfs_readline`](#group__sys__vfs_1ga9ce2d59faff599decefb5fb9848fddca)`(int fd,char * dest,size_t count)`            | Read a line from an open text file.
`public ssize_t `[`vfs_write`](#group__sys__vfs_1ga3ab340fc28c34361e2b8206693e049d6)`(int fd,const void * src,size_t count)`            | Write bytes to an open file.
`public ssize_t `[`vfs_write_iol`](#group__sys__vfs_1ga97f6250e54e0c0aa22d1d9efaaa67fc7)`(int fd,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Write bytes from an iolist to an open file.
`public int `[`vfs_fsync`](#group__sys__vfs_1gab2566aeb152e97175242bf6edb45d0cc)`(int fd)`            | Synchronize a file on storage Any pending writes are written out to storage.
`public int `[`vfs_opendir`](#group__sys__vfs_1gab28e72f381ff98931d9c2db584781162)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp,const char * dirname)`            | Open a directory for reading with readdir.
`public int `[`vfs_readdir`](#group__sys__vfs_1ga81bb503b1aa7bb77d1d91170a0ea1b6d)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp,`[`vfs_dirent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__dirent__t)` * entry)`            | Read a single entry from the open directory dirp and advance the read position by one.
`public int `[`vfs_closedir`](#group__sys__vfs_1gaf3ffccb04f73042f1b1bdb63ca770e73)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp)`            | Close an open directory.
`public int `[`vfs_format`](#group__sys__vfs_1ga85c6c8cab631ccd9ad61badb54d8ba10)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp)`            | Format a file system.
`public int `[`vfs_format_by_path`](#group__sys__vfs_1ga8c6143529d99c05c153dc97147721104)`(const char * path)`            | Format a file system.
`public int `[`vfs_mount`](#group__sys__vfs_1ga188e99ea85dc9923550473e7e7b81500)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp)`            | Mount a file system.
`public int `[`vfs_mount_by_path`](#group__sys__vfs_1gafe0112ee960e58b9216399294b87df08)`(const char * path)`            | Mount a file system with a pre-configured mount path.
`public int `[`vfs_unmount_by_path`](#group__sys__vfs_1gafe07bef032f76c753c773a7e7ee11e03)`(const char * path,bool force)`            | Unmount a file system with a pre-configured mount path.
`public int `[`vfs_rename`](#group__sys__vfs_1ga8d018700b625ff53592d50f4ef1c69a1)`(const char * from_path,const char * to_path)`            | Rename a file.
`public int `[`vfs_umount`](#group__sys__vfs_1ga47aaf69f968a163cc65a2805d76c2bd9)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp,bool force)`            | Unmount a mounted file system.
`public int `[`vfs_unlink`](#group__sys__vfs_1gaadef8ee16be7695b8be4c151331df79c)`(const char * name)`            | Unlink (delete) a file from a mounted file system.
`public int `[`vfs_mkdir`](#group__sys__vfs_1ga4351778a74bb39fd68256847b6a22c8c)`(const char * name,mode_t mode)`            | Create a directory on the file system.
`public int `[`vfs_rmdir`](#group__sys__vfs_1gac9e6c31f4d15ed832cb5c61e0c6e9659)`(const char * name)`            | Remove a directory from the file system.
`public int `[`vfs_stat`](#group__sys__vfs_1ga9a4ef5ceb298c288b544cce1f7736aec)`(const char *restrict path,struct stat *restrict buf)`            | Get file status.
`public int `[`vfs_statvfs`](#group__sys__vfs_1ga2dd77a30a2ea9cc4531f40d089483b8e)`(const char *restrict path,struct `[`statvfs`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstatvfs)` *restrict buf)`            | Get file system status.
`public int `[`vfs_bind`](#group__sys__vfs_1ga88894417c3313eece41cf4cb3a283d42)`(int fd,int flags,const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * f_op,void * private_data)`            | Allocate a new file descriptor and give it file operations.
`public int `[`vfs_normalize_path`](#group__sys__vfs_1ga1a43fdb3d5de4d23eef9f39dccf90cae)`(char * buf,const char * path,size_t buflen)`            | Normalize a path.
`public const `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * `[`vfs_iterate_mounts`](#group__sys__vfs_1gafdbefec3679da1fed038f1fc42e8e821)`(const `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * cur)`            | Iterate through all mounted file systems.
`public bool `[`vfs_iterate_mount_dirs`](#group__sys__vfs_1gae972dfeffadbdccd3c878b279446baaa)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dir)`            | Iterate through all mounted file systems by their root directories.
`public const `[`vfs_file_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__t)` * `[`vfs_file_get`](#group__sys__vfs_1gaa717194c0d9d055711196323dd5cb8aa)`(int fd)`            | Get information about the file for internal purposes.
`public int `[`vfs_sysop_stat_from_fstat`](#group__sys__vfs_1ga77f919082a5f2e395ad60fac39a821b9)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp,const char *restrict path,struct stat *restrict buf)`            | Implementation of `stat` using `fstat`
`struct `[`vfs_file_system_t`](#structvfs__file__system__t) | A file system driver.
`struct `[`vfs_mount_struct`](#structvfs__mount__struct) | A mounted file system.
`struct `[`vfs_file_t`](#structvfs__file__t) | Information about an open file.
`struct `[`vfs_DIR`](#structvfs__DIR) | Internal representation of a file system directory entry.
`struct `[`vfs_dirent_t`](#structvfs__dirent__t) | User facing directory entry.
`struct `[`vfs_file_ops`](#structvfs__file__ops) | Operations on open files.
`struct `[`vfs_dir_ops`](#structvfs__dir__ops) | Operations on open directories.
`struct `[`vfs_file_system_ops`](#structvfs__file__system__ops) | Operations on mounted file systems.

## Members

#### `define `[`MAX6`](#group__sys__vfs_1gadc0ecc0a95f5e03d5199cbbc644fa543) 

MAX6 Function to get the largest of 6 values.

#### `define `[`VFS_MAX_OPEN_FILES`](#group__sys__vfs_1ga0dc4e529ed77b4432c7bd295bd89fefc) 

Maximum number of simultaneous open files.

#### `define `[`VFS_DIR_BUFFER_SIZE`](#group__sys__vfs_1ga0e3cb874e1e5f6a49f33151d89f0aaef) 

Size of buffer space in [vfs_DIR](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR).

This space is needed to avoid dynamic memory allocations for some file systems where a single pointer is not enough space for its directory stream state, e.g. SPIFFS.

Guidelines:

SPIFFS requires a sizeof(spiffs_DIR) (6-16 bytes, depending on target platform and configuration) buffer for its DIR struct.

> File system developers: If your file system requires a buffer for DIR streams that is larger than a single pointer or `int` variable, ensure that you have a preprocessor check in your header file (so that it is impossible to attempt to mount the file system without running into a compiler error):

> 
```cpp
#if VFS_DIR_BUFFER_SIZE < 123
#error VFS_DIR_BUFFER_SIZE is too small, at least 123 bytes is required
#endif
```

> Put the check in the public header file (.h), do not put the check in the implementation (.c) file.

#### `define `[`VFS_FILE_BUFFER_SIZE`](#group__sys__vfs_1ga6d9a9dcf98b4d4e4372cc476b8fe8eba) 

Size of buffer space in [vfs_file_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__t).

Same as with VFS_DIR_BUFFER_SIZE some file systems (e.g. FatFs) require more space to store data about their files.

Guidelines are same as with VFS_DIR_BUFFER_SIZE, so add the following snippet to your fs header:

> 
```cpp
#if VFS_FILE_BUFFER_SIZE < 123
#error VFS_FILE_BUFFER_SIZE is too small, at least 123 bytes is required
#endif
```

> Put the check in the public header file (.h), do not put the check in the implementation (.c) file.

#### `define `[`VFS_NAME_MAX`](#group__sys__vfs_1ga818372246f79e5e859a10eb24517a3df) 

Maximum length of the name in a `[vfs_dirent_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__dirent__t)` (not including terminating null)

Maximum number of bytes in a filename (not including terminating null).

Similar to the POSIX macro NAME_MAX

#### `define `[`VFS_ANY_FD`](#group__sys__vfs_1ga2033ea53eb6551b0de53412ab38d0f41) 

Used with vfs_bind to bind to any available fd number.

#### `define `[`VFS_MTD`](#group__sys__vfs_1ga6fdbbbfc8a5870cf706458d5c8419f9a) 

Helper macro for VFS_AUTO_MOUNT.

#### Parameters
* `mtd` MTD device to use for filesystem

#### `define `[`VFS_AUTO_MOUNT`](#group__sys__vfs_1ga74c1713a82cbe6a385e552ed6427f0bb) 

Define an automatic mountpoint.

#### Parameters
* `type` file system type Can be littlefs, littlefs2, spiffs or fatfs

Internally, file systems supporting this must name their [vfs_file_system_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__system__t)`${TYPE}_file_system`, and must use a type named `${TYPE}_desc_t` for their private data 
#### Parameters
* `mtd` file system backed device configuration 

* `path` Mount path 

* `idx` Unique index of the mount point

#### `define `[`VFS_FS_FLAG_WANT_ABS_PATH`](#group__sys__vfs_1ga2116058f96366fca25adf0065ebef013) 

File system always wants the full VFS path.

#### `public void `[`vfs_bind_stdio`](#group__sys__vfs_1ga9b760e38efd5f348b77e582954f0b141)`(void)` 

Allocate and bind file descriptors for STDIN, STDERR, and STDOUT.

This function is meant to be called once during system initialization time. It is typically called from the initialization of the selected STDIO implementation.

#### `public int `[`vfs_close`](#group__sys__vfs_1ga60d1dba40888b0dadfbb4f0a30e1cb89)`(int fd)` 

Close an open file.

#### Parameters
* `fd` fd number to close

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_fcntl`](#group__sys__vfs_1gacfac67f4d58f160ca165336b95e14c76)`(int fd,int cmd,int arg)` 

Query/set options on an open file.

#### Parameters
* `fd` fd number to operate on 

* `cmd` fcntl command, see man 3p fcntl 

* `arg` argument to fcntl command, see man 3p fcntl

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_fstat`](#group__sys__vfs_1gad4649a984a7aa0643d157f8467d9c4ee)`(int fd,struct stat * buf)` 

Get status of an open file.

#### Parameters
* `fd` fd number obtained from vfs_open 

* `buf` pointer to stat struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_fstatvfs`](#group__sys__vfs_1gaf67facc4f466ae49d9eef46437a47581)`(int fd,struct `[`statvfs`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstatvfs)` * buf)` 

Get file system status of the file system containing an open file.

#### Parameters
* `fd` fd number obtained from vfs_open 

* `buf` pointer to statvfs struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_dstatvfs`](#group__sys__vfs_1gac8053fc8b584ba894953565b345f0d16)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp,struct `[`statvfs`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstatvfs)` * buf)` 

Get file system status of the file system containing an open directory.

#### Parameters
* `dirp` pointer to open directory 

* `buf` pointer to statvfs struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public off_t `[`vfs_lseek`](#group__sys__vfs_1ga8280218c31e2cc294019433319c2d5aa)`(int fd,off_t off,int whence)` 

Seek to position in file.

`whence` determines the function of the seek and should be set to one of the following values:

* `SEEK_SET:` Seek to absolute offset `off`

* `SEEK_CUR:` Seek to current location + `off`

* `SEEK_END:` Seek to end of file + `off`

#### Parameters
* `fd` fd number obtained from vfs_open 

* `off` seek offset 

* `whence` determines the seek method, see detailed description

#### Returns
the new seek location in the file on success 

#### Returns
<0 on error

#### `public int `[`vfs_open`](#group__sys__vfs_1ga208458bdb4b5da7c1330e5fa160e7fee)`(const char * name,int flags,mode_t mode)` 

Open a file.

#### Parameters
* `name` file name to open 

* `flags` flags for opening, see man 3p open 

* `mode` file mode

#### Returns
fd number on success (>= 0) 

#### Returns
<0 on error

#### `public ssize_t `[`vfs_read`](#group__sys__vfs_1gae56830870bc891bd8617d08bc621c5ea)`(int fd,void * dest,size_t count)` 

Read bytes from an open file.

#### Parameters
* `fd` fd number obtained from vfs_open 

* `dest` destination buffer to hold the file contents 

* `count` maximum number of bytes to read

#### Returns
number of bytes read on success 

#### Returns
<0 on error

For simple cases of only a single read from a file, the [vfs_file_to_buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs__util_1gabc5fef30100a0c4fddd111bd05675543) function can be used.

#### `public ssize_t `[`vfs_readline`](#group__sys__vfs_1ga9ce2d59faff599decefb5fb9848fddca)`(int fd,char * dest,size_t count)` 

Read a line from an open text file.

Reads from a file until a `\r` or `` character is found.

#### Parameters
* `fd` fd number obtained from vfs_open 

* `dest` destination buffer to hold the line 

* `count` maximum number of characters to read

#### Returns
number of bytes read on success 

#### Returns
<0 on error

#### `public ssize_t `[`vfs_write`](#group__sys__vfs_1ga3ab340fc28c34361e2b8206693e049d6)`(int fd,const void * src,size_t count)` 

Write bytes to an open file.

#### Parameters
* `fd` fd number obtained from vfs_open 

* `src` pointer to source buffer 

* `count` maximum number of bytes to write

#### Returns
number of bytes written on success 

#### Returns
<0 on error

For simple cases of only a single write to a file, the [vfs_file_from_buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs__util_1ga689f452ed167671ffc58ecd095a39967) function can be used.

#### `public ssize_t `[`vfs_write_iol`](#group__sys__vfs_1ga97f6250e54e0c0aa22d1d9efaaa67fc7)`(int fd,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Write bytes from an iolist to an open file.

#### Parameters
* `fd` fd number obtained from vfs_open 

* `iolist` iolist to read from

#### Returns
number of bytes written on success 

#### Returns
<0 on error

#### `public int `[`vfs_fsync`](#group__sys__vfs_1gab2566aeb152e97175242bf6edb45d0cc)`(int fd)` 

Synchronize a file on storage Any pending writes are written out to storage.

#### Parameters
* `fd` fd number obtained from vfs_open

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_opendir`](#group__sys__vfs_1gab28e72f381ff98931d9c2db584781162)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp,const char * dirname)` 

Open a directory for reading with readdir.

The data in `*dirp` will be initialized by `vfs_opendir`

#### Parameters
* `dirp` pointer to directory stream struct for storing the state 

* `dirname` null-terminated name of the dir to open, absolute file system path

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_readdir`](#group__sys__vfs_1ga81bb503b1aa7bb77d1d91170a0ea1b6d)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp,`[`vfs_dirent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__dirent__t)` * entry)` 

Read a single entry from the open directory dirp and advance the read position by one.

`entry` will be populated with information about the next entry in the directory stream `dirp`

> Calling vfs_readdir on an uninitialized `[vfs_DIR](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` is forbidden and may lead to file system corruption and random system failures.

#### Parameters
* `dirp` pointer to open directory 

* `entry` directory entry information

#### Returns
1 if `entry` was updated 

#### Returns
0 if `dirp` has reached the end of the directory index 

#### Returns
<0 on error

#### `public int `[`vfs_closedir`](#group__sys__vfs_1gaf3ffccb04f73042f1b1bdb63ca770e73)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dirp)` 

Close an open directory.

> Calling vfs_closedir on an uninitialized `[vfs_DIR](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` is forbidden and may lead to file system corruption and random system failures.

#### Parameters
* `dirp` pointer to open directory

#### Returns
0 on success 

#### Returns
<0 on error, the directory stream dirp should be considered invalid

#### `public int `[`vfs_format`](#group__sys__vfs_1ga85c6c8cab631ccd9ad61badb54d8ba10)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp)` 

Format a file system.

`mountp` should have been populated in advance with a file system driver, a mount point, and private_data (if the file system driver uses one).

`mountp` must not be mounted

#### Parameters
* `mountp` pointer to the mount structure of the filesystem to format

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_format_by_path`](#group__sys__vfs_1ga8c6143529d99c05c153dc97147721104)`(const char * path)` 

Format a file system.

The file system must not be mounted in order to be formatted. Call [vfs_unmount_by_path](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gafe07bef032f76c753c773a7e7ee11e03) first if necessary.

This assumes mount points have been configured with [VFS_AUTO_MOUNT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga74c1713a82cbe6a385e552ed6427f0bb).

#### Parameters
* `path` Path of the pre-configured mount point

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_mount`](#group__sys__vfs_1ga188e99ea85dc9923550473e7e7b81500)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp)` 

Mount a file system.

`mountp` should have been populated in advance with a file system driver, a mount point, and private_data (if the file system driver uses one).

#### Parameters
* `mountp` pointer to the mount structure of the file system to mount

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_mount_by_path`](#group__sys__vfs_1gafe0112ee960e58b9216399294b87df08)`(const char * path)` 

Mount a file system with a pre-configured mount path.

This assumes mount points have been configured with [VFS_AUTO_MOUNT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga74c1713a82cbe6a385e552ed6427f0bb).

If the [vfs_auto_format](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pseudomodule__vfs__auto__format) is used a format attempt will be made if the mount fails.

#### Parameters
* `path` Path of the pre-configured mount point

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_unmount_by_path`](#group__sys__vfs_1gafe07bef032f76c753c773a7e7ee11e03)`(const char * path,bool force)` 

Unmount a file system with a pre-configured mount path.

This assumes mount points have been configured with [VFS_AUTO_MOUNT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga74c1713a82cbe6a385e552ed6427f0bb).

#### Parameters
* `path` Path of the pre-configured mount point 

* `force` Unmount the filesystem even if there are still open files

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_rename`](#group__sys__vfs_1ga8d018700b625ff53592d50f4ef1c69a1)`(const char * from_path,const char * to_path)` 

Rename a file.

The file `from_path` will be renamed to `to_path`

it is not possible to rename files across different file system

#### Parameters
* `from_path` absolute path to existing file 

* `to_path` absolute path to destination

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_umount`](#group__sys__vfs_1ga47aaf69f968a163cc65a2805d76c2bd9)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp,bool force)` 

Unmount a mounted file system.

This will fail if there are any open files or directories on the mounted file system

#### Parameters
* `mountp` pointer to the mount structure of the file system to unmount 

* `force` Unmount the filesystem even if there are still open files

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_unlink`](#group__sys__vfs_1gaadef8ee16be7695b8be4c151331df79c)`(const char * name)` 

Unlink (delete) a file from a mounted file system.

#### Parameters
* `name` name of file to delete

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_mkdir`](#group__sys__vfs_1ga4351778a74bb39fd68256847b6a22c8c)`(const char * name,mode_t mode)` 

Create a directory on the file system.

#### Parameters
* `name` name of the directory to create 

* `mode` file creation mode bits

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_rmdir`](#group__sys__vfs_1gac9e6c31f4d15ed832cb5c61e0c6e9659)`(const char * name)` 

Remove a directory from the file system.

Only empty directories may be removed.

#### Parameters
* `name` name of the directory to remove

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_stat`](#group__sys__vfs_1ga9a4ef5ceb298c288b544cce1f7736aec)`(const char *restrict path,struct stat *restrict buf)` 

Get file status.

#### Parameters
* `path` path to file being queried 

* `buf` pointer to stat struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_statvfs`](#group__sys__vfs_1ga2dd77a30a2ea9cc4531f40d089483b8e)`(const char *restrict path,struct `[`statvfs`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstatvfs)` *restrict buf)` 

Get file system status.

`path` can be any path that resolves to the file system being queried, it does not have to be an existing file.

#### Parameters
* `path` path to a file on the file system being queried 

* `buf` pointer to statvfs struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`vfs_bind`](#group__sys__vfs_1ga88894417c3313eece41cf4cb3a283d42)`(int fd,int flags,const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * f_op,void * private_data)` 

Allocate a new file descriptor and give it file operations.

The new fd will be initialized with pointers to the given `f_op` file operations table and `private_data`.

This function can be used to give file-like functionality to devices, e.g. UART.

`private_data` can be used for passing instance information to the file operation handlers in `f_op`.

#### Parameters
* `fd` Desired fd number, use VFS_ANY_FD for any available fd 

* `flags` not implemented yet 

* `f_op` pointer to file operations table 

* `private_data` opaque pointer to private data

#### Returns
fd number on success (>= 0) 

#### Returns
<0 on error

#### `public int `[`vfs_normalize_path`](#group__sys__vfs_1ga1a43fdb3d5de4d23eef9f39dccf90cae)`(char * buf,const char * path,size_t buflen)` 

Normalize a path.

Normalizing a path means to remove all relative components ("..", ".") and any double slashes.

`buf` is allowed to overlap `path` if `&buf`[0] <= `&path`[0]

> `path` must be an absolute path (starting with `/` )

#### Parameters
* `buf` buffer to store normalized path 

* `path` path to normalize 

* `buflen` available space in `buf`

#### Returns
number of path components in the normalized path on success 

#### Returns
<0 on error

#### `public const `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * `[`vfs_iterate_mounts`](#group__sys__vfs_1gafdbefec3679da1fed038f1fc42e8e821)`(const `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * cur)` 

Iterate through all mounted file systems.

> Not thread safe! Do not mix calls to this function with other calls which modify the mount table, such as [vfs_mount()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga188e99ea85dc9923550473e7e7b81500) and [vfs_umount()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga47aaf69f968a163cc65a2805d76c2bd9)

Set `cur` to `NULL` to start from the beginning

> Deprecated: This will become an internal-only function after the 2022.04 release, use [vfs_iterate_mount_dirs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gae972dfeffadbdccd3c878b279446baaa) instead.

#### Parameters
* `cur` current iterator value

#### Returns
Pointer to next mounted file system in list after `cur`

#### Returns
NULL if `cur` is the last element in the list

#### `public bool `[`vfs_iterate_mount_dirs`](#group__sys__vfs_1gae972dfeffadbdccd3c878b279446baaa)`(`[`vfs_DIR`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)` * dir)` 

Iterate through all mounted file systems by their root directories.

Unlike [vfs_iterate_mounts](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gafdbefec3679da1fed038f1fc42e8e821), this is thread safe, and allows thread safe access to the mount point's stats through [vfs_dstatvfs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gac8053fc8b584ba894953565b345f0d16). If mounts or unmounts happen while iterating, this is guaranteed to report all file systems that stayed mounted, and may report any that are transiently mounted for up to as often as they are (re)mounted. Note that the volume being reported can not be unmounted as `dir` is an open directory.

Zero-initialize `dir` to start. As long as `true` is returned, `dir` is a valid directory on which the user can call [vfs_readdir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga81bb503b1aa7bb77d1d91170a0ea1b6d) or [vfs_dstatvfs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gac8053fc8b584ba894953565b345f0d16) (or even peek at its `.mp` if they dare ignore the warning in [vfs_DIR](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__DIR)).

Users MUST NOT call [vfs_closedir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaf3ffccb04f73042f1b1bdb63ca770e73) if they intend to keep iterating, but MUST call it when aborting iteration.

Note that this requires all enumerated file systems to support the `opendir`[vfs_dir_ops](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__dir__ops); any file system that does not support that will prematurely terminate the mount point enumeration.

**See also**: `sc_vfs.c` (`df` command) for a usage example

#### Parameters
* `dir` The root directory of the discovered mount point

#### Returns
`true` if another file system is mounted; `dir` then contains an open directory. 

#### Returns
`false` if the file system list is exhausted; `dir` is uninitialized then.

#### `public const `[`vfs_file_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__t)` * `[`vfs_file_get`](#group__sys__vfs_1gaa717194c0d9d055711196323dd5cb8aa)`(int fd)` 

Get information about the file for internal purposes.

> Not thread safe! Do not modify any of the fields in the returned struct. 

For file descriptor internal usage only.

#### `public int `[`vfs_sysop_stat_from_fstat`](#group__sys__vfs_1ga77f919082a5f2e395ad60fac39a821b9)`(`[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * mountp,const char *restrict path,struct stat *restrict buf)` 

Implementation of `stat` using `fstat`

This helper can be used by file system drivers that do not have any more efficient implementation of `fs_op::stat` than opening the file and running `f_op::fstat` on it.

It can be set as `fs_op::stat` by a file system driver, provided it implements `f_op::open` and `f_op::fstat` and `f_op::close`, and its `open` accepts `NULL` in the `abs_path` position.

# struct `vfs_file_system_t` 

A file system driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * `[`f_op`](#structvfs__file__system__t_1acdec44c0db7afa52f268c12a969f7796) | File operations table.
`public const `[`vfs_dir_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaefe122d8eea546f0786cbff3adcc4156)` * `[`d_op`](#structvfs__file__system__t_1a9b4e4674da7cfcb3bdd4a34b9c9240b0) | Directory operations table.
`public const `[`vfs_file_system_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga1be46db273a8474303603f514fb7bfee)` * `[`fs_op`](#structvfs__file__system__t_1a47b001a12f6ded5db3c015366731a6aa) | File system operations table.
`public const uint32_t `[`flags`](#structvfs__file__system__t_1ae7b2ed0ae3a3674ead2984198b437e1d) | File system flags.

## Members

#### `public const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * `[`f_op`](#structvfs__file__system__t_1acdec44c0db7afa52f268c12a969f7796) 

File operations table.

#### `public const `[`vfs_dir_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaefe122d8eea546f0786cbff3adcc4156)` * `[`d_op`](#structvfs__file__system__t_1a9b4e4674da7cfcb3bdd4a34b9c9240b0) 

Directory operations table.

#### `public const `[`vfs_file_system_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga1be46db273a8474303603f514fb7bfee)` * `[`fs_op`](#structvfs__file__system__t_1a47b001a12f6ded5db3c015366731a6aa) 

File system operations table.

#### `public const uint32_t `[`flags`](#structvfs__file__system__t_1ae7b2ed0ae3a3674ead2984198b437e1d) 

File system flags.

# struct `vfs_mount_struct` 

A mounted file system.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_entry`](#structvfs__mount__struct_1a71d31bb7d5782c3a634aaa41071669cf) | List entry for the _vfs_mount_list list.
`public const `[`vfs_file_system_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__system__t)` * `[`fs`](#structvfs__mount__struct_1a1eeb4910cd5d48e3f24d01522bd7ac66) | The file system driver for the mount point.
`public const char * `[`mount_point`](#structvfs__mount__struct_1ad7b83b7aefe5125bea95a858e413cc68) | Mount point, e.g.
`public size_t `[`mount_point_len`](#structvfs__mount__struct_1a986702d2b51212768494e23e71fc3c05) | Length of mount_point string (set by vfs_mount)
`public uint16_t `[`open_files`](#structvfs__mount__struct_1aa71b98445f1ce71607955d58d84d7a7a) | Number of currently open files and directories.
`public void * `[`private_data`](#structvfs__mount__struct_1ab8893e57ec78c401a9db109a0196783a) | File system driver private data, implementation defined.

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_entry`](#structvfs__mount__struct_1a71d31bb7d5782c3a634aaa41071669cf) 

List entry for the _vfs_mount_list list.

#### `public const `[`vfs_file_system_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_vfs.md#structvfs__file__system__t)` * `[`fs`](#structvfs__mount__struct_1a1eeb4910cd5d48e3f24d01522bd7ac66) 

The file system driver for the mount point.

#### `public const char * `[`mount_point`](#structvfs__mount__struct_1ad7b83b7aefe5125bea95a858e413cc68) 

Mount point, e.g.

"/mnt/cdrom"

#### `public size_t `[`mount_point_len`](#structvfs__mount__struct_1a986702d2b51212768494e23e71fc3c05) 

Length of mount_point string (set by vfs_mount)

#### `public uint16_t `[`open_files`](#structvfs__mount__struct_1aa71b98445f1ce71607955d58d84d7a7a) 

Number of currently open files and directories.

#### `public void * `[`private_data`](#structvfs__mount__struct_1ab8893e57ec78c401a9db109a0196783a) 

File system driver private data, implementation defined.

# struct `vfs_file_t` 

Information about an open file.

Similar to, but not equal to, `struct file` in Linux

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * `[`f_op`](#structvfs__file__t_1ad437bf7dee999b7651f8800c3f126f0c) | File operations table.
`public `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * `[`mp`](#structvfs__file__t_1a313adbcd336d5b19e7fa0c14632783cb) | Pointer to mount table entry.
`public int `[`flags`](#structvfs__file__t_1aaebbee1f2c914ae9ac7423d104012b28) | File flags.
`public off_t `[`pos`](#structvfs__file__t_1af8e66251bc47c18a66c52b55101f0dd7) | Current position in the file.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structvfs__file__t_1a58686ba2e673bf443610b2d73761bbc8) | PID of the process that opened the file.
`public void * `[`ptr`](#structvfs__file__t_1a0a2e8a328d7b72cd59cfae57b6ca649e) | pointer to private data
`public int `[`value`](#structvfs__file__t_1aa21c9be371467bff277d77d5328f6e86) | alternatively, you can use private_data as an int
`public uint8_t `[`buffer`](#structvfs__file__t_1ae4fef566e126da40a50d80d01538cf12) | Buffer space, in case a single pointer is not enough.
`public union vfs_file_t::@394 `[`private_data`](#structvfs__file__t_1a2fab81561b4eafbe406b787225ae2a25) | File system driver private data, implementation defined.

## Members

#### `public const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * `[`f_op`](#structvfs__file__t_1ad437bf7dee999b7651f8800c3f126f0c) 

File operations table.

#### `public `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * `[`mp`](#structvfs__file__t_1a313adbcd336d5b19e7fa0c14632783cb) 

Pointer to mount table entry.

#### `public int `[`flags`](#structvfs__file__t_1aaebbee1f2c914ae9ac7423d104012b28) 

File flags.

#### `public off_t `[`pos`](#structvfs__file__t_1af8e66251bc47c18a66c52b55101f0dd7) 

Current position in the file.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structvfs__file__t_1a58686ba2e673bf443610b2d73761bbc8) 

PID of the process that opened the file.

#### `public void * `[`ptr`](#structvfs__file__t_1a0a2e8a328d7b72cd59cfae57b6ca649e) 

pointer to private data

#### `public int `[`value`](#structvfs__file__t_1aa21c9be371467bff277d77d5328f6e86) 

alternatively, you can use private_data as an int

#### `public uint8_t `[`buffer`](#structvfs__file__t_1ae4fef566e126da40a50d80d01538cf12) 

Buffer space, in case a single pointer is not enough.

#### `public union vfs_file_t::@394 `[`private_data`](#structvfs__file__t_1a2fab81561b4eafbe406b787225ae2a25) 

File system driver private data, implementation defined.

# struct `vfs_DIR` 

Internal representation of a file system directory entry.

Used by opendir, readdir, closedir

> This structure should be treated as an opaque blob and must not be modified by user code. The contents should only be used by file system drivers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`vfs_dir_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaefe122d8eea546f0786cbff3adcc4156)` * `[`d_op`](#structvfs__DIR_1a1aac812aca784ac551e1eab75fc88e6e) | Directory operations table.
`public `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * `[`mp`](#structvfs__DIR_1a66ca85b42a276f41f3a16ba207f52920) | Pointer to mount table entry.
`public void * `[`ptr`](#structvfs__DIR_1a93eec0c7d86fd616acc867fa5c36ac54) | pointer to private data
`public int `[`value`](#structvfs__DIR_1a25662fa045fe407bc8f8a2dd0fa248cd) | alternatively, you can use private_data as an int
`public uint8_t `[`buffer`](#structvfs__DIR_1a37eee3fa464ce6e11cd2e1f61c129a92) | Buffer space, in case a single pointer is not enough.
`public union vfs_DIR::@395 `[`private_data`](#structvfs__DIR_1a4bda2dcee8da64ce6e57aa2da589919a) | File system driver private data, implementation defined.

## Members

#### `public const `[`vfs_dir_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaefe122d8eea546f0786cbff3adcc4156)` * `[`d_op`](#structvfs__DIR_1a1aac812aca784ac551e1eab75fc88e6e) 

Directory operations table.

#### `public `[`vfs_mount_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9fc6f9bb8f8b2f401e2bd7181cc4018f)` * `[`mp`](#structvfs__DIR_1a66ca85b42a276f41f3a16ba207f52920) 

Pointer to mount table entry.

#### `public void * `[`ptr`](#structvfs__DIR_1a93eec0c7d86fd616acc867fa5c36ac54) 

pointer to private data

#### `public int `[`value`](#structvfs__DIR_1a25662fa045fe407bc8f8a2dd0fa248cd) 

alternatively, you can use private_data as an int

#### `public uint8_t `[`buffer`](#structvfs__DIR_1a37eee3fa464ce6e11cd2e1f61c129a92) 

Buffer space, in case a single pointer is not enough.

#### `public union vfs_DIR::@395 `[`private_data`](#structvfs__DIR_1a4bda2dcee8da64ce6e57aa2da589919a) 

File system driver private data, implementation defined.

# struct `vfs_dirent_t` 

User facing directory entry.

Used to hold the output from readdir

size, modification time, and other information is part of the file status, not the directory entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ino_t `[`d_ino`](#structvfs__dirent__t_1a26e72c3f39bb53d2064ea1ea5300ab4e) | file serial number, unique for the file system ("inode" in Linux)
`public char `[`d_name`](#structvfs__dirent__t_1a6f0e2251c28e07cd1d29b33e643e6859) | file name, relative to its containing directory

## Members

#### `public ino_t `[`d_ino`](#structvfs__dirent__t_1a26e72c3f39bb53d2064ea1ea5300ab4e) 

file serial number, unique for the file system ("inode" in Linux)

#### `public char `[`d_name`](#structvfs__dirent__t_1a6f0e2251c28e07cd1d29b33e643e6859) 

file name, relative to its containing directory

# struct `vfs_file_ops` 

Operations on open files.

Similar, but not equal, to struct file_operations in Linux

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`close`](#structvfs__file__ops_1a0bfc1733cc6123a44b5646ee5f40bf36) | Close an open file.
`public int(* `[`fcntl`](#structvfs__file__ops_1a05f92600f5de7b030a60ba727c7b0e6c) | Query/set options on an open file.
`public int(* `[`fstat`](#structvfs__file__ops_1a321c2d8e606f21ec64b3056d49dcba59) | Get status of an open file.
`public off_t(* `[`lseek`](#structvfs__file__ops_1a4dcd5c291b62718bcdcbca9aefa8f57b) | Seek to position in file.
`public int(* `[`open`](#structvfs__file__ops_1a8188d594716d8a142cccfacb703a934e) | Attempt to open a file in the file system at rel_path.
`public ssize_t(* `[`read`](#structvfs__file__ops_1a97e827ff776e771423c643961bf5e5fe) | Read bytes from an open file.
`public ssize_t(* `[`write`](#structvfs__file__ops_1a9e4fab79a71451339efd10db396d2e48) | Write bytes to an open file.
`public int(* `[`fsync`](#structvfs__file__ops_1a339c1732ddfb5f6d745091550b5ae9d4) | Synchronize a file on storage Any pending writes are written out to storage.

## Members

#### `public int(* `[`close`](#structvfs__file__ops_1a0bfc1733cc6123a44b5646ee5f40bf36) 

Close an open file.

This function must perform any necessary clean ups and flush any internal buffers in the file system driver.

If an error occurs, the file will still be considered closed by the VFS layer. Therefore, the proper clean up must still be performed by the file system driver before returning any error code.

This implementation does not consider `-EINTR` a special return code, the file is still considered closed.

#### Parameters
* `filp` pointer to open file

#### Returns
0 on success 

#### Returns
<0 on error, the file is considered closed anyway

#### `public int(* `[`fcntl`](#structvfs__file__ops_1a05f92600f5de7b030a60ba727c7b0e6c) 

Query/set options on an open file.

#### Parameters
* `filp` pointer to open file 

* `cmd` fcntl command, see man 3p fcntl 

* `arg` argument to fcntl command, see man 3p fcntl

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`fstat`](#structvfs__file__ops_1a321c2d8e606f21ec64b3056d49dcba59) 

Get status of an open file.

#### Parameters
* `filp` pointer to open file 

* `buf` pointer to stat struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public off_t(* `[`lseek`](#structvfs__file__ops_1a4dcd5c291b62718bcdcbca9aefa8f57b) 

Seek to position in file.

`whence` determines the function of the seek and should be set to one of the following values:

* `SEEK_SET:` Seek to absolute offset `off`

* `SEEK_CUR:` Seek to current location + `off`

* `SEEK_END:` Seek to end of file + `off`

#### Parameters
* `filp` pointer to open file 

* `off` seek offset 

* `whence` determines the seek method, see detailed description

#### Returns
the new seek location in the file on success 

#### Returns
<0 on error

#### `public int(* `[`open`](#structvfs__file__ops_1a8188d594716d8a142cccfacb703a934e) 

Attempt to open a file in the file system at rel_path.

A file system driver should perform the necessary checks for file existence etc in this function.

The VFS layer will initialize the contents of `*filp` so that `filp->f_op` points to the mounted file system's `vfs_file_ops_t`. `filp->private_data.ptr` will be initialized to NULL, `filp->pos` will be set to 0.

`name` is an absolute path inside the file system, `abs_path` is the path to the file in the VFS, example: `abs_path` = "/mnt/hd/foo/bar", `name` = "/foo/bar"

`name` and `abs_path` may point to different locations within the same const char array and the strings may overlap

#### Parameters
* `filp` pointer to open file 

* `name` null-terminated name of the file to open, relative to the file system root, including a leading slash 

* `flags` flags for opening, see man 2 open, man 3p open 

* `mode` mode for creating a new file, see man 2 open, man 3p open

#### Returns
0 on success 

#### Returns
<0 on error

#### `public ssize_t(* `[`read`](#structvfs__file__ops_1a97e827ff776e771423c643961bf5e5fe) 

Read bytes from an open file.

#### Parameters
* `filp` pointer to open file 

* `dest` pointer to destination buffer 

* `nbytes` maximum number of bytes to read

#### Returns
number of bytes read on success 

#### Returns
<0 on error

#### `public ssize_t(* `[`write`](#structvfs__file__ops_1a9e4fab79a71451339efd10db396d2e48) 

Write bytes to an open file.

#### Parameters
* `filp` pointer to open file 

* `src` pointer to source buffer 

* `nbytes` maximum number of bytes to write

#### Returns
number of bytes written on success 

#### Returns
<0 on error

#### `public int(* `[`fsync`](#structvfs__file__ops_1a339c1732ddfb5f6d745091550b5ae9d4) 

Synchronize a file on storage Any pending writes are written out to storage.

#### Parameters
* `filp` pointer to open file

#### Returns
0 on success 

#### Returns
<0 on error

# struct `vfs_dir_ops` 

Operations on open directories.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`opendir`](#structvfs__dir__ops_1a8391f4e0f17e594b7e2cb224b906a33d) | Open a directory for reading with readdir.
`public int(* `[`readdir`](#structvfs__dir__ops_1a5cc8d2dfe100b02b41131b26b7c7f00b) | Read a single entry from the open directory dirp and advance the read position by one.
`public int(* `[`closedir`](#structvfs__dir__ops_1a9e21a5e703e71151440e608ce504e94e) | Close an open directory.

## Members

#### `public int(* `[`opendir`](#structvfs__dir__ops_1a8391f4e0f17e594b7e2cb224b906a33d) 

Open a directory for reading with readdir.

#### Parameters
* `dirp` pointer to open directory 

* `name` null-terminated name of the dir to open, relative to the file system root, including a leading slash

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`readdir`](#structvfs__dir__ops_1a5cc8d2dfe100b02b41131b26b7c7f00b) 

Read a single entry from the open directory dirp and advance the read position by one.

`entry` will be populated with information about the next entry in the directory stream `dirp`

If `entry` was updated successfully, `readdir` shall return 1.

If the end of stream was reached, `readdir` shall return 0 and `entry` shall remain untouched.

#### Parameters
* `dirp` pointer to open directory 

* `entry` directory entry information

#### Returns
1 if `entry` was updated 

#### Returns
0 if `dirp` has reached the end of the directory index 

#### Returns
<0 on error

#### `public int(* `[`closedir`](#structvfs__dir__ops_1a9e21a5e703e71151440e608ce504e94e) 

Close an open directory.

#### Parameters
* `dirp` pointer to open directory

#### Returns
0 on success 

#### Returns
<0 on error, the directory stream dirp should be considered invalid

# struct `vfs_file_system_ops` 

Operations on mounted file systems.

Similar, but not equal, to struct super_operations in Linux

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`format`](#structvfs__file__system__ops_1a95d83ef68d6d91cb97e7a27f13f3971d) | Format the file system on the given mount point.
`public int(* `[`mount`](#structvfs__file__system__ops_1a095b91aad574104ec4702f65d4030931) | Perform any extra processing needed after mounting a file system.
`public int(* `[`umount`](#structvfs__file__system__ops_1ae6ccfe3670dd9f6fb9b530f9db7c8bc8) | Perform the necessary clean up for unmounting a file system.
`public int(* `[`rename`](#structvfs__file__system__ops_1a3ff34dc91c8e47da6f2e654b1cefc5be) | Rename a file.
`public int(* `[`unlink`](#structvfs__file__system__ops_1a3cd70847d9eb151c0cc9269b06a5202d) | Unlink (delete) a file from the file system.
`public int(* `[`mkdir`](#structvfs__file__system__ops_1a7b80a5323da189d936c0ab023f288f77) | Create a directory on the file system.
`public int(* `[`rmdir`](#structvfs__file__system__ops_1aa2421e9d0fb854448cf8a481173390cf) | Remove a directory from the file system.
`public int(* `[`stat`](#structvfs__file__system__ops_1a4c0e86e97e7f5d495e9cc2927cd39e5e) | Get file status.
`public int(* `[`statvfs`](#structvfs__file__system__ops_1a07a609a8d3555aab9f9e01914f83490b) | Get file system status.

## Members

#### `public int(* `[`format`](#structvfs__file__system__ops_1a95d83ef68d6d91cb97e7a27f13f3971d) 

Format the file system on the given mount point.

#### Parameters
* `mountp` file system to format

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`mount`](#structvfs__file__system__ops_1a095b91aad574104ec4702f65d4030931) 

Perform any extra processing needed after mounting a file system.

If this call returns an error, the whole vfs_mount call will signal a failure.

All fields of `mountp` will be initialized by vfs_mount beforehand, `private_data` will be initialized to NULL.

#### Parameters
* `mountp` file system mount being mounted

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`umount`](#structvfs__file__system__ops_1ae6ccfe3670dd9f6fb9b530f9db7c8bc8) 

Perform the necessary clean up for unmounting a file system.

#### Parameters
* `mountp` file system mount being unmounted

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`rename`](#structvfs__file__system__ops_1a3ff34dc91c8e47da6f2e654b1cefc5be) 

Rename a file.

The file `from_path` will be renamed to `to_path`

it is not possible to rename files across different file system

#### Parameters
* `mountp` file system mount to operate on 

* `from_path` absolute path to existing file 

* `to_path` absolute path to destination

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`unlink`](#structvfs__file__system__ops_1a3cd70847d9eb151c0cc9269b06a5202d) 

Unlink (delete) a file from the file system.

#### Parameters
* `mountp` file system mount to operate on 

* `name` name of the file to delete

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`mkdir`](#structvfs__file__system__ops_1a7b80a5323da189d936c0ab023f288f77) 

Create a directory on the file system.

#### Parameters
* `mountp` file system mount to operate on 

* `name` name of the directory to create 

* `mode` file creation mode bits

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`rmdir`](#structvfs__file__system__ops_1aa2421e9d0fb854448cf8a481173390cf) 

Remove a directory from the file system.

Only empty directories may be removed.

#### Parameters
* `mountp` file system mount to operate on 

* `name` name of the directory to remove

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`stat`](#structvfs__file__system__ops_1a4c0e86e97e7f5d495e9cc2927cd39e5e) 

Get file status.

#### Parameters
* `mountp` file system mount to operate on 

* `path` path to file being queried 

* `buf` pointer to stat struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int(* `[`statvfs`](#structvfs__file__system__ops_1a07a609a8d3555aab9f9e01914f83490b) 

Get file system status.

`path` is only passed for consistency against the POSIX statvfs function. `vfs_statvfs` calls this function only when it has determined that `path` belongs to this file system. `path` is a file system relative path and does not necessarily name an existing file.

#### Parameters
* `mountp` file system mount to operate on 

* `path` path to a file on the file system being queried 

* `buf` pointer to statvfs struct to fill

#### Returns
0 on success 

#### Returns
<0 on error

