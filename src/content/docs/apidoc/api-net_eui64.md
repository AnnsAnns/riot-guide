---
title: api-net_eui64.md
description: api-net_eui64.md
---
# group `net_eui64` 

Type definition of the IEEE EUI-64 identifier.

**See also**: [IEEE, "Guidelines for 64-bit Global Identifier (EUI-64)" ](https://web.archive.org/web/20170730083229/http://standards.ieee.org:80/develop/regauth/tut/eui64.pdf)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`eui64_set_local`](#group__net__eui64_1ga05b23dd59850aa7db56a3972f99e3082)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Set the locally administrated bit in the EUI-64 address.
`public inline static void `[`eui64_clear_group`](#group__net__eui64_1gad389fb98161141f3ccdb34f711bc0454)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Clear the group address bit to signal the address as individual address.
`union `[`eui64_t`](#unioneui64__t) | Data type to represent an EUI-64.

## Members

#### `public inline static void `[`eui64_set_local`](#group__net__eui64_1ga05b23dd59850aa7db56a3972f99e3082)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Set the locally administrated bit in the EUI-64 address.

**See also**: IEEE 802-2001 section 9.2

#### Parameters
* `addr` eui64 address

#### `public inline static void `[`eui64_clear_group`](#group__net__eui64_1gad389fb98161141f3ccdb34f711bc0454)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Clear the group address bit to signal the address as individual address.

**See also**: IEEE 802-2001 section 9.2

#### Parameters
* `addr` eui64 address

