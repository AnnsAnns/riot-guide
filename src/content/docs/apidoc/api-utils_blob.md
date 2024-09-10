---
title: api-utils_blob.md
description: api-utils_blob.md
---
# group `utils_blob` 

Include any file content as binary data in a RIOT application.

makes any file in BLOBS available via an include directive in the C code.

Usage:Add this to an application or module Makefile:

```cpp
BLOBS += foo.ext
```

Then include in C file or header:

```cpp
#include "blob/foo.ext.h"
```

The blob can then be accessed using the symbols "foo_ext" and "foo_ext_len".

SubfoldersIt is possible to add files from subfolders to BLOBS: BLOBS += subfolder/my_file.foo
 The subfolder will be part of the generated header's path, but *not* of the generated symbols. E.g., above blob would be made available by including "blobs/subfolder/my_file.ext.h", which would define the symbols "my_file_ext" and "my_file_ext_len". Beware possible symbol name clashes.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

