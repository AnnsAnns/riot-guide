---
title: api-sys_endian.md
description: api-sys_endian.md
---
# group `sys_endian` 

This module provides architecture-independent access to architecture details.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LITTLE_ENDIAN`](#group__sys__endian_1ga8782a401fbf55261460863fc2f8df1ce)            | A numeric constant representing little endian byte order.
`define `[`BIG_ENDIAN`](#group__sys__endian_1ga23eb5e058a210efdde3d64e69679fafa)            | A numeric constant representing big endian byte order.
`define `[`PDP_ENDIAN`](#group__sys__endian_1ga2026615c7441e0b093ff7389f46f7654)            | A numeric constant representing PDP endian byte order.
`define `[`BYTE_ORDER`](#group__sys__endian_1ga1771b7fb65ee640524d0052f229768c3)            | The byte order of this machines indicated by the constant [BIG_ENDIAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__endian_1ga23eb5e058a210efdde3d64e69679fafa) or [LITTLE_ENDIAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__endian_1ga8782a401fbf55261460863fc2f8df1ce).
`public uint16_t `[`htobe16`](#group__sys__endian_1ga2a7867e242f08a0b90f7e143b3084c8c)`(uint16_t host_16bits)`            | host to big endian, 16 bit
`public uint16_t `[`htole16`](#group__sys__endian_1gad1090f8582ee1f178e9be7a7ee310942)`(uint16_t host_16bits)`            | host to little endian, 16 bit
`public uint16_t `[`be16toh`](#group__sys__endian_1ga14a66ea10b9e007a9ef51822f940a9d0)`(uint16_t big_endian_16bits)`            | big endian to host, 16 bit
`public uint16_t `[`le16toh`](#group__sys__endian_1ga43af2810e0abe8dcaefe0920e64a99f4)`(uint16_t little_endian_16bits)`            | little endian to host, 16 bit
`public uint32_t `[`htobe32`](#group__sys__endian_1ga3ca91566984b6dca7a0f6fc2694a203c)`(uint32_t host_32bits)`            | host to big endian, 32 bit
`public uint32_t `[`htole32`](#group__sys__endian_1gabab10181b2a9a38233ca246e1a653b5e)`(uint32_t host_32bits)`            | host to little endian, 32 bit
`public uint32_t `[`be32toh`](#group__sys__endian_1gaa36318f723228c3c8b6e086a76ef640a)`(uint32_t big_endian_32bits)`            | big endian to host, 32 bit
`public uint32_t `[`le32toh`](#group__sys__endian_1ga3b4e83868bbf53b2572b736fc146a319)`(uint32_t little_endian_32bits)`            | little endian to host, 32 bit
`public uint64_t `[`htobe64`](#group__sys__endian_1ga55844e5fbe9a8ab3e9793335a16e2efc)`(uint64_t host_64bits)`            | host to big endian, 64 bit
`public uint64_t `[`htole64`](#group__sys__endian_1gaac7228dc3b0fe1141e61ca04e370ad6e)`(uint64_t host_64bits)`            | host to little endian, 64 bit
`public uint64_t `[`be64toh`](#group__sys__endian_1ga7e9c4c9533cf8d9486c8b512ccb43e22)`(uint64_t big_endian_64bits)`            | big endian to host, 64 bit
`public uint64_t `[`le64toh`](#group__sys__endian_1gafc03933561fbd136419c5e9649f975df)`(uint64_t little_endian_64bits)`            | little endian to host, 64 bit

## Members

#### `define `[`LITTLE_ENDIAN`](#group__sys__endian_1ga8782a401fbf55261460863fc2f8df1ce) 

A numeric constant representing little endian byte order.

#### `define `[`BIG_ENDIAN`](#group__sys__endian_1ga23eb5e058a210efdde3d64e69679fafa) 

A numeric constant representing big endian byte order.

#### `define `[`PDP_ENDIAN`](#group__sys__endian_1ga2026615c7441e0b093ff7389f46f7654) 

A numeric constant representing PDP endian byte order.

#### `define `[`BYTE_ORDER`](#group__sys__endian_1ga1771b7fb65ee640524d0052f229768c3) 

The byte order of this machines indicated by the constant [BIG_ENDIAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__endian_1ga23eb5e058a210efdde3d64e69679fafa) or [LITTLE_ENDIAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__endian_1ga8782a401fbf55261460863fc2f8df1ce).

This numeric constant is available at preprocessor time, so you can compare this to [BIG_ENDIAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__endian_1ga23eb5e058a210efdde3d64e69679fafa) or [LITTLE_ENDIAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__endian_1ga8782a401fbf55261460863fc2f8df1ce) in `#if` directives.

#### `public uint16_t `[`htobe16`](#group__sys__endian_1ga2a7867e242f08a0b90f7e143b3084c8c)`(uint16_t host_16bits)` 

host to big endian, 16 bit

#### `public uint16_t `[`htole16`](#group__sys__endian_1gad1090f8582ee1f178e9be7a7ee310942)`(uint16_t host_16bits)` 

host to little endian, 16 bit

#### `public uint16_t `[`be16toh`](#group__sys__endian_1ga14a66ea10b9e007a9ef51822f940a9d0)`(uint16_t big_endian_16bits)` 

big endian to host, 16 bit

#### `public uint16_t `[`le16toh`](#group__sys__endian_1ga43af2810e0abe8dcaefe0920e64a99f4)`(uint16_t little_endian_16bits)` 

little endian to host, 16 bit

#### `public uint32_t `[`htobe32`](#group__sys__endian_1ga3ca91566984b6dca7a0f6fc2694a203c)`(uint32_t host_32bits)` 

host to big endian, 32 bit

#### `public uint32_t `[`htole32`](#group__sys__endian_1gabab10181b2a9a38233ca246e1a653b5e)`(uint32_t host_32bits)` 

host to little endian, 32 bit

#### `public uint32_t `[`be32toh`](#group__sys__endian_1gaa36318f723228c3c8b6e086a76ef640a)`(uint32_t big_endian_32bits)` 

big endian to host, 32 bit

#### `public uint32_t `[`le32toh`](#group__sys__endian_1ga3b4e83868bbf53b2572b736fc146a319)`(uint32_t little_endian_32bits)` 

little endian to host, 32 bit

#### `public uint64_t `[`htobe64`](#group__sys__endian_1ga55844e5fbe9a8ab3e9793335a16e2efc)`(uint64_t host_64bits)` 

host to big endian, 64 bit

#### `public uint64_t `[`htole64`](#group__sys__endian_1gaac7228dc3b0fe1141e61ca04e370ad6e)`(uint64_t host_64bits)` 

host to little endian, 64 bit

#### `public uint64_t `[`be64toh`](#group__sys__endian_1ga7e9c4c9533cf8d9486c8b512ccb43e22)`(uint64_t big_endian_64bits)` 

big endian to host, 64 bit

#### `public uint64_t `[`le64toh`](#group__sys__endian_1gafc03933561fbd136419c5e9649f975df)`(uint64_t little_endian_64bits)` 

little endian to host, 64 bit

