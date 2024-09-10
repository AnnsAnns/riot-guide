---
title: api-sys_vfs_util.md
description: api-sys_vfs_util.md
---
# group `sys_vfs_util` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`vfs_file_from_buffer`](#group__sys__vfs__util_1ga689f452ed167671ffc58ecd095a39967)`(const char * file,const void * buf,size_t len)`            | Writes the content of a buffer to a file If the file already exists, it will be overwritten.
`public int `[`vfs_file_to_buffer`](#group__sys__vfs__util_1gabc5fef30100a0c4fddd111bd05675543)`(const char * file,void * buf,size_t len)`            | Reads the content of a file to a buffer.
`public int `[`vfs_file_md5`](#group__sys__vfs__util_1gaf81e5c873addff7bd8e5c6cce265a02f)`(const char * file,void * digest,void * work_buf,size_t work_buf_len)`            | Compute the MD5 message digest of a file.
`public int `[`vfs_file_sha1`](#group__sys__vfs__util_1ga3c4dd5a0e44f86ef64ce8f2807e7da9a)`(const char * file,void * digest,void * work_buf,size_t work_buf_len)`            | Compute the SHA1 message digest of a file.
`public int `[`vfs_file_sha256`](#group__sys__vfs__util_1gad31ea1a6dcc86c6e4c1c60be152d5404)`(const char * file,void * digest,void * work_buf,size_t work_buf_len)`            | Compute the SHA256 message digest of a file.
`public int `[`vfs_is_dir`](#group__sys__vfs__util_1ga36be9b132885543ba340ac36d57fa342)`(const char * path)`            | Checks if `path` is a file or a directory.
`public bool `[`vfs_file_exists`](#group__sys__vfs__util_1gaab51fcd3c00f55c031191ad61fdd9e48)`(const char * path)`            | Checks if `path` is a file and can be read.
`public int `[`vfs_unlink_recursive`](#group__sys__vfs__util_1gae4c0f8148ff09d93d516e550f5dd7a5f)`(const char * root,char * path_buf,size_t max_size)`            | Behaves like `rm -r @p root`.

## Members

#### `public int `[`vfs_file_from_buffer`](#group__sys__vfs__util_1ga689f452ed167671ffc58ecd095a39967)`(const char * file,const void * buf,size_t len)` 

Writes the content of a buffer to a file If the file already exists, it will be overwritten.

#### Parameters
* `file` Destination file path 

* `buf` Source buffer 

* `len` Buffer size

#### Returns
0 on success 

#### Returns
negative error from [vfs_open](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga208458bdb4b5da7c1330e5fa160e7fee), [vfs_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga3ab340fc28c34361e2b8206693e049d6)

#### `public int `[`vfs_file_to_buffer`](#group__sys__vfs__util_1gabc5fef30100a0c4fddd111bd05675543)`(const char * file,void * buf,size_t len)` 

Reads the content of a file to a buffer.

#### Parameters
* `file` Source file path 

* `buf` Destination buffer 

* `len` Buffer size

#### Returns
number of bytes read on success 

#### Returns
-ENOSPC if the file was read successfully but is larger than the provided buffer. Only the first `len` bytes were read. 

#### Returns
negative error from [vfs_open](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga208458bdb4b5da7c1330e5fa160e7fee), [vfs_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gae56830870bc891bd8617d08bc621c5ea)

#### `public int `[`vfs_file_md5`](#group__sys__vfs__util_1gaf81e5c873addff7bd8e5c6cce265a02f)`(const char * file,void * digest,void * work_buf,size_t work_buf_len)` 

Compute the MD5 message digest of a file.

Requires the `hashes` module.

#### Parameters
* `file` Source file path 

* `digest` Destination buffer, must fit [MD5_DIGEST_LENGTH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__md5_1ga09a4f4b2f28cbe522d9b80153666029c) bytes 

* `work_buf` Work buffer 

* `work_buf_len` Size of the work buffer

#### Returns
0 on success 

#### Returns
negative error

#### `public int `[`vfs_file_sha1`](#group__sys__vfs__util_1ga3c4dd5a0e44f86ef64ce8f2807e7da9a)`(const char * file,void * digest,void * work_buf,size_t work_buf_len)` 

Compute the SHA1 message digest of a file.

Requires the `hashes` module.

#### Parameters
* `file` Source file path 

* `digest` Destination buffer, must fit [SHA1_DIGEST_LENGTH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha1_1ga341f900ed2019f4da21d6970417f9efc) bytes 

* `work_buf` Work buffer 

* `work_buf_len` Size of the work buffer

#### Returns
0 on success 

#### Returns
negative error

#### `public int `[`vfs_file_sha256`](#group__sys__vfs__util_1gad31ea1a6dcc86c6e4c1c60be152d5404)`(const char * file,void * digest,void * work_buf,size_t work_buf_len)` 

Compute the SHA256 message digest of a file.

Requires the `hashes` module.

#### Parameters
* `file` Source file path 

* `digest` Destination buffer, must fit [SHA256_DIGEST_LENGTH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaa9cf0abf87b30c4c63e9c7e89c590579) bytes 

* `work_buf` Work buffer 

* `work_buf_len` Size of the work buffer

#### Returns
0 on success 

#### Returns
negative error

#### `public int `[`vfs_is_dir`](#group__sys__vfs__util_1ga36be9b132885543ba340ac36d57fa342)`(const char * path)` 

Checks if `path` is a file or a directory.

This function uses [vfs_stat()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9a4ef5ceb298c288b544cce1f7736aec), so if you need [vfs_stat()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1ga9a4ef5ceb298c288b544cce1f7736aec) anyway, you should not do double work and check it yourself.

#### Parameters
* `path` Path to check

#### Returns
< 0 on FS error 

#### Returns
0 if `path` is a file 

#### Returns
> 0 if `path` is a directory

#### `public bool `[`vfs_file_exists`](#group__sys__vfs__util_1gaab51fcd3c00f55c031191ad61fdd9e48)`(const char * path)` 

Checks if `path` is a file and can be read.

#### Parameters
* `path` Path to check

#### Returns
true if the file exists, false otherwise

#### `public int `[`vfs_unlink_recursive`](#group__sys__vfs__util_1gae4c0f8148ff09d93d516e550f5dd7a5f)`(const char * root,char * path_buf,size_t max_size)` 

Behaves like `rm -r @p root`.

#### Parameters
* `root` FS root directory to be deleted 

* `path_buf` Buffer that must be able to store the longest path of the file or directory being deleted 

* `max_size` Size of `path_buf`

#### Returns
< 0 on error 

#### Returns
0

