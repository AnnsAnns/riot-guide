---
title: api-net_eui48.md
description: api-net_eui48.md
---
# group `net_eui48` 

Definition and IPv6 IID conversion for IEEE EUI-48 identifiers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`eui48_set_local`](#group__net__eui48_1ga9c5e8f188c74273ec4766ccf7cfebf82)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)`            | Set the locally administrated bit in the EUI-48 address.
`public inline static void `[`eui48_clear_group`](#group__net__eui48_1gabb9e2441ba2450101c28eb0512a1d9b6)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)`            | Clear the group address bit to signal the address as individual address.
`public inline static void `[`eui48_to_eui64`](#group__net__eui48_1gaee65f64ca7802ef976ebb644b392bf66)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64,const `[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)`            | Generates an EUI-64 from a 48-bit device address.
`public inline static void `[`eui64_to_eui48`](#group__net__eui48_1ga08389a45a19e9046a52e59af02bacf89)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * eui48,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Generates an EUI-48 from a 64-bit device address.
`public inline static void `[`eui48_to_ipv6_iid`](#group__net__eui48_1ga7b93662f8d4005a708d183dfa9af9f9a)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid,const `[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)`            | Generates an IPv6 interface identifier from a 48-bit device address.
`public inline static void `[`eui48_from_ipv6_iid`](#group__net__eui48_1gaaae25495e20f229efd6f02eb25fd2374)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)`            | Convert a 64-bit IPv6 IID into a EUI-48 device address.
`struct `[`eui48_t`](#structeui48__t) | Data type to represent an EUI-48.

## Members

#### `public inline static void `[`eui48_set_local`](#group__net__eui48_1ga9c5e8f188c74273ec4766ccf7cfebf82)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)` 

Set the locally administrated bit in the EUI-48 address.

**See also**: IEEE 802-2001 section 9.2

#### Parameters
* `addr` ethernet address

#### `public inline static void `[`eui48_clear_group`](#group__net__eui48_1gabb9e2441ba2450101c28eb0512a1d9b6)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)` 

Clear the group address bit to signal the address as individual address.

**See also**: IEEE 802-2001 section 9.2

#### Parameters
* `addr` ethernet address

#### `public inline static void `[`eui48_to_eui64`](#group__net__eui48_1gaee65f64ca7802ef976ebb644b392bf66)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64,const `[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)` 

Generates an EUI-64 from a 48-bit device address.

**See also**: [RFC 2464, section 4](https://tools.ietf.org/html/rfc2464#section-4)

#### Parameters
* `eui64` the resulting EUI-64. 

* `addr` a 48-bit device address

#### `public inline static void `[`eui64_to_eui48`](#group__net__eui48_1ga08389a45a19e9046a52e59af02bacf89)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * eui48,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Generates an EUI-48 from a 64-bit device address.

The resulting EUI-48 is not guaranteed to be unique and, hence, marked as only locally unique.

#### Parameters
* `eui48` the resulting EUI-48. 

* `addr` a 64-bit device address

#### `public inline static void `[`eui48_to_ipv6_iid`](#group__net__eui48_1ga7b93662f8d4005a708d183dfa9af9f9a)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid,const `[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)` 

Generates an IPv6 interface identifier from a 48-bit device address.

The IPv6 IID is derived from the EUI-64 by flipping the U/L bit. 

**See also**: [RFC 2464, section 4](https://tools.ietf.org/html/rfc2464#section-4)

**See also**: [RFC 4291, section 2.5.1](https://tools.ietf.org/html/rfc4291#section-2.5.1)

#### Parameters
* `iid` the resulting EUI-64. 

* `addr` a 48-bit device address

#### `public inline static void `[`eui48_from_ipv6_iid`](#group__net__eui48_1gaaae25495e20f229efd6f02eb25fd2374)`(`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)` 

Convert a 64-bit IPv6 IID into a EUI-48 device address.

#### Parameters
* `addr` the resulting EUI-48 

* `iid` a 64-bit IPv6 interface identifier

# struct `eui48_t` 

Data type to represent an EUI-48.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`uint8`](#structeui48__t_1aecdc35d7f7614446a9d8fa1a08cd7f01) | split into 6 8-bit words.

## Members

#### `public uint8_t `[`uint8`](#structeui48__t_1aecdc35d7f7614446a9d8fa1a08cd7f01) 

split into 6 8-bit words.

