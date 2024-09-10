---
title: api-sys_suit_transport_vfs.md
description: api-sys_suit_transport_vfs.md
---
# group `sys_suit_transport_vfs` 

SUIT firmware VFS transport.

Allows to load firmware updates from the filesystem.
         URL scheme: file://<path>/<to>/manifest.suit

         e.g. set `SUIT_COAP_ROOT` to `file:///sd0/fw` and place the
         update files to the folder fw/ on the first SD card.

VFS transport backend definitions for SUIT manifests Benjamin Valentin [benjamin.valentin@ml-pa.com](mailto:benjamin.valentin@ml-pa.com)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`suit_transport_vfs_fetch`](#group__sys__suit__transport__vfs_1gab6df83d50cd9db8fb8d1def4e8c12620)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,`[`coap_blockwise_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac1c99e4c6b4acff707d856ba0b18d590)` cb,void * ctx)`            | fetch a payload from the filesystem

## Members

#### `public int `[`suit_transport_vfs_fetch`](#group__sys__suit__transport__vfs_1gab6df83d50cd9db8fb8d1def4e8c12620)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,`[`coap_blockwise_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac1c99e4c6b4acff707d856ba0b18d590)` cb,void * ctx)` 

fetch a payload from the filesystem

#### Parameters
* `manifest` suit manifest context 

* `cb` filesystem block callback 

* `ctx` callback context

#### Returns
SUIT_OK if valid 

#### Returns
negative otherwise

