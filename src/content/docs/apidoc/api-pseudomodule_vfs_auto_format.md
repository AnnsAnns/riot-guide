---
title: api-pseudomodule_vfs_auto_format.md
description: api-pseudomodule_vfs_auto_format.md
---
# group `pseudomodule_vfs_auto_format` 

Format mount points at startup unless they can be mounted.

When this module is active, mount points configured through the [vfs_auto_mount](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pseudomodule__vfs__auto__mount) module that can not be mounted at startup are formatted and, if that operation is successful, attempted to mount again.

Beware that this may be a harmful procedure in case a bug that corrupts a filesystem coincides with a bug that sends the device into a reboot loop.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

