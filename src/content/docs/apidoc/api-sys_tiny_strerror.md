---
title: api-sys_tiny_strerror.md
description: api-sys_tiny_strerror.md
---
# group `sys_tiny_strerror` 

Tiny strerror() implementation.

UsageSelect module `tiny_strerror` in order to use it.

```cpp
#include "[tiny_strerror.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tiny__strerror_8h)"
```

Using module `tiny_strerror_as_strerror` will replace all calls to `strerror()` by calls to `[tiny_strerror()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)`, which may safe a bit of ROM.

Using module `tiny_strerror_minimal` will just print the error code value. This will save ~1k of ROM, but won't provide much more information.

The module `tiny_strerror_minimal` is not thread-safe.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`tiny_strerror`](#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)`(int errnum)`            | Get the name of an errno macro.

## Members

#### `public const char * `[`tiny_strerror`](#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)`(int errnum)` 

Get the name of an errno macro.

#### Parameters
* `errnum` Error code to get the name of

Example: 
```cpp
puts([tiny_strerror](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)([ENOENT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__atmega__common_1ga03e689f378f643d16ea7537918528a48))); // prints "ENOENT"
puts([tiny_strerror](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)(-[ENXIO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__atmega__common_1ga2b3884b11e4932bd372bb6d899d6fbfe))); // prints "-ENXIO"
puts([tiny_strerror](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)(0)); // prints "OK"
puts([tiny_strerror](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)(1337)); // prints "unknown"
puts([tiny_strerror](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tiny__strerror_1gaec5c4e8a3f52a8d4b5f1d92b31d78b07)(-1337)); // prints "-unknown"
```

#### Returns
String holding the macro name of the error given by `errnum`

#### Parameters
* `<tt>"OK"</tt>` If `errnum` is `0`

* `<tt>"unknown"</tt>` If `errnum` is not matching any POSIX errno constant 

* `<tt>"-unknown"</tt>` If `errnum` is negative not matching any negative POSIX errno constant

