---
title: api-sys_unaligned.md
description: api-sys_unaligned.md
---
# group `sys_unaligned` 

Provides functions for safe unaligned memory accesses.

This header provides functions to read values from pointers that are not necessarily aligned to the type's alignment requirements.

E.g., uint16_t *foo = 0x123;
printf("%u\n", *foo);
 ... might cause an unaligned access, if `uint16_t` is usually aligned at 2-byte-boundaries, as foo has an odd address.

The current implementation casts a pointer to a packed struct, which forces the compiler to deal with possibly unalignedness. Idea taken from linux kernel sources.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static uint16_t `[`unaligned_get_u16`](#group__sys__unaligned_1ga1d9e348802f1869e93d3baf827440a7e)`(const void * ptr)`            | Get uint16_t from possibly unaligned pointer.
`public inline static uint32_t `[`unaligned_get_u32`](#group__sys__unaligned_1ga8013467ffe92ceebae789bbafe080ec4)`(const void * ptr)`            | Get uint32_t from possibly unaligned pointer.
`public inline static uint64_t `[`unaligned_get_u64`](#group__sys__unaligned_1ga6c8c382a20f46d5e7d546bba46ef0e5b)`(const void * ptr)`            | Get uint64_t from possibly unaligned pointer.
`struct `[`uint16_una_t`](#structuint16__una__t) | Unaligned access helper struct (uint16_t version)
`struct `[`uint32_una_t`](#structuint32__una__t) | Unaligned access helper struct (uint32_t version)
`struct `[`uint64_una_t`](#structuint64__una__t) | Unaligned access helper struct (uint64_t version)

## Members

#### `public inline static uint16_t `[`unaligned_get_u16`](#group__sys__unaligned_1ga1d9e348802f1869e93d3baf827440a7e)`(const void * ptr)` 

Get uint16_t from possibly unaligned pointer.

#### Parameters
* `ptr` pointer to read from

#### Returns
value read from `ptr`

#### `public inline static uint32_t `[`unaligned_get_u32`](#group__sys__unaligned_1ga8013467ffe92ceebae789bbafe080ec4)`(const void * ptr)` 

Get uint32_t from possibly unaligned pointer.

#### Parameters
* `ptr` pointer to read from

#### Returns
value read from `ptr`

#### `public inline static uint64_t `[`unaligned_get_u64`](#group__sys__unaligned_1ga6c8c382a20f46d5e7d546bba46ef0e5b)`(const void * ptr)` 

Get uint64_t from possibly unaligned pointer.

#### Parameters
* `ptr` pointer to read from

#### Returns
value read from `ptr`

# struct `uint16_una_t` 

Unaligned access helper struct (uint16_t version)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`val`](#structuint16__una__t_1af0beec68e1af809e1bf97d49f2f6f7f4) | value

## Members

#### `public uint16_t `[`val`](#structuint16__una__t_1af0beec68e1af809e1bf97d49f2f6f7f4) 

value

# struct `uint32_una_t` 

Unaligned access helper struct (uint32_t version)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`val`](#structuint32__una__t_1af1cdaedd0ffa87497651a12528035069) | value

## Members

#### `public uint32_t `[`val`](#structuint32__una__t_1af1cdaedd0ffa87497651a12528035069) 

value

# struct `uint64_una_t` 

Unaligned access helper struct (uint64_t version)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint64_t `[`val`](#structuint64__una__t_1ae7bf75b74db8cc718511680e55dd6fe7) | value

## Members

#### `public uint64_t `[`val`](#structuint64__una__t_1ae7bf75b74db8cc718511680e55dd6fe7) 

value

