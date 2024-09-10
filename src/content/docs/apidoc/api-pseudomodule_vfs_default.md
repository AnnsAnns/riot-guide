---
title: api-pseudomodule_vfs_default.md
description: api-pseudomodule_vfs_default.md
---
# group `pseudomodule_vfs_default` 

Enable default assignments of a board's devices to VFS mount points.

When this module is active, boards with additional flash storage will automatically mount (and possibly format, if [vfs_auto_format](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pseudomodule__vfs__auto__format) is enabled) their flash devices with a file system that is common for that board (or at least common for this board within RIOT).

Boards will generally mount to `/nvm` unless they have several storage backends.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

