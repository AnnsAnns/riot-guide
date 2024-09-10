---
title: api-sys_suit_storage_flashwrite.md
description: api-sys_suit_storage_flashwrite.md
---
# group `sys_suit_storage_flashwrite` 

SUIT riotboot firmware storage backend.

riotboot Flashwrite storage backend functions for SUIT manifests Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`suit_storage_flashwrite_t`](#structsuit__storage__flashwrite__t) | riotboot flashwrite SUIT storage context

# struct `suit_storage_flashwrite_t` 

riotboot flashwrite SUIT storage context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` `[`storage`](#structsuit__storage__flashwrite__t_1a89895f2b2a3ab5681f38c59986e3a40c) | parent struct
`public `[`riotboot_flashwrite_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structriotboot__flashwrite__t)` `[`writer`](#structsuit__storage__flashwrite__t_1a327293dfed3f45c51486a973ab4632ca) | Riotboot flashwriter.

## Members

#### `public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` `[`storage`](#structsuit__storage__flashwrite__t_1a89895f2b2a3ab5681f38c59986e3a40c) 

parent struct

#### `public `[`riotboot_flashwrite_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structriotboot__flashwrite__t)` `[`writer`](#structsuit__storage__flashwrite__t_1a327293dfed3f45c51486a973ab4632ca) 

Riotboot flashwriter.

