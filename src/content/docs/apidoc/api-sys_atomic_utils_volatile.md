---
title: api-sys_atomic_utils_volatile.md
description: api-sys_atomic_utils_volatile.md
---
# group `sys_atomic_utils_volatile` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static uint8_t `[`volatile_load_u8`](#group__sys__atomic__utils__volatile_1ga3e94b81bedd8e87f1a03532a24e20713)`(const volatile uint8_t * var)`            | Load an 8 bit value completely unoptimized.
`public inline static uint16_t `[`volatile_load_u16`](#group__sys__atomic__utils__volatile_1ga2f7c8cac5d389420219ec2259ec1f16c)`(const volatile uint16_t * var)`            | Load an 16 bit value completely unoptimized.
`public inline static uint32_t `[`volatile_load_u32`](#group__sys__atomic__utils__volatile_1ga3ec6d6a0a708bd8cc3aa5ac2e7e1af4c)`(const volatile uint32_t * var)`            | Load an 32 bit value completely unoptimized.
`public inline static uint64_t `[`volatile_load_u64`](#group__sys__atomic__utils__volatile_1gaec690f4a91d89ea3fa579e44554f8bb6)`(const volatile uint64_t * var)`            | Load an 64 bit value completely unoptimized.
`public inline static void `[`volatile_store_u8`](#group__sys__atomic__utils__volatile_1gae9a54c2f4f3afbe98cc53d6a373b2634)`(volatile uint8_t * dest,uint8_t val)`            | Store an 8 bit value completely unoptimized.
`public inline static void `[`volatile_store_u16`](#group__sys__atomic__utils__volatile_1gaad285568ee572bf4eed10758a9714172)`(volatile uint16_t * dest,uint16_t val)`            | Store a 16 bit value completely unoptimized.
`public inline static void `[`volatile_store_u32`](#group__sys__atomic__utils__volatile_1gaab6d1409b500e0b1ebd6b2a726badbbc)`(volatile uint32_t * dest,uint32_t val)`            | Store a 32 bit value completely unoptimized.
`public inline static void `[`volatile_store_u64`](#group__sys__atomic__utils__volatile_1ga846ed55e3fbc72e5f265fd2978c9414c)`(volatile uint64_t * dest,uint64_t val)`            | Store a 64 bit value completely unoptimized.
`public inline static uint8_t `[`volatile_fetch_add_u8`](#group__sys__atomic__utils__volatile_1ga8d01b3b1839266b2deab8fbbf73778fa)`(volatile uint8_t * dest,uint8_t val)`            | Unoptimized version of `*dest += val`
`public inline static uint8_t `[`volatile_fetch_sub_u8`](#group__sys__atomic__utils__volatile_1ga944940e5adbc3e4d60832c05c7acfe8a)`(volatile uint8_t * dest,uint8_t val)`            | Unoptimized version of `*dest -= val`
`public inline static uint8_t `[`volatile_fetch_or_u8`](#group__sys__atomic__utils__volatile_1gab972e450b4ba39f953c124668b90b6a1)`(volatile uint8_t * dest,uint8_t val)`            | Unoptimized version of `*dest \|= val`
`public inline static uint8_t `[`volatile_fetch_xor_u8`](#group__sys__atomic__utils__volatile_1gab54d6aa6208dcf7167e06a05d3e9ae89)`(volatile uint8_t * dest,uint8_t val)`            | Unoptimized version of `*dest ^= val`
`public inline static uint8_t `[`volatile_fetch_and_u8`](#group__sys__atomic__utils__volatile_1ga8744d87fcc52c0a9d49017ba56f6ee35)`(volatile uint8_t * dest,uint8_t val)`            | Unoptimized version of `*dest &= val`
`public inline static uint16_t `[`volatile_fetch_add_u16`](#group__sys__atomic__utils__volatile_1gab74428286144365524d267ab27f34711)`(volatile uint16_t * dest,uint16_t val)`            | Unoptimized version of `*dest += val`
`public inline static uint16_t `[`volatile_fetch_sub_u16`](#group__sys__atomic__utils__volatile_1gaba5879cf1d9a4cca99697ab4152e0eb7)`(volatile uint16_t * dest,uint16_t val)`            | Unoptimized version of `*dest -= val`
`public inline static uint16_t `[`volatile_fetch_or_u16`](#group__sys__atomic__utils__volatile_1ga043b7c14528ea8ddff39c7307e17c378)`(volatile uint16_t * dest,uint16_t val)`            | Unoptimized version of `*dest \|= val`
`public inline static uint16_t `[`volatile_fetch_xor_u16`](#group__sys__atomic__utils__volatile_1ga09b03398fd60c2ca2678d335d8eeb976)`(volatile uint16_t * dest,uint16_t val)`            | Unoptimized version of `*dest ^= val`
`public inline static uint16_t `[`volatile_fetch_and_u16`](#group__sys__atomic__utils__volatile_1ga16498d05a415186739f1a0f98c3422fb)`(volatile uint16_t * dest,uint16_t val)`            | Unoptimized version of `*dest &= val`
`public inline static uint32_t `[`volatile_fetch_add_u32`](#group__sys__atomic__utils__volatile_1ga6b5c8cae03a30e8abb98c9bc7a8ab908)`(volatile uint32_t * dest,uint32_t val)`            | Unoptimized version of `*dest += val`
`public inline static uint32_t `[`volatile_fetch_sub_u32`](#group__sys__atomic__utils__volatile_1ga3dcfb9daf8c5974184000f787b16fcbd)`(volatile uint32_t * dest,uint32_t val)`            | Unoptimized version of `*dest -= val`
`public inline static uint32_t `[`volatile_fetch_or_u32`](#group__sys__atomic__utils__volatile_1ga97bcfd95af6962783a3da15c02a1c1e3)`(volatile uint32_t * dest,uint32_t val)`            | Unoptimized version of `*dest \|= val`
`public inline static uint32_t `[`volatile_fetch_xor_u32`](#group__sys__atomic__utils__volatile_1ga41b4b37ef7661eca6a9d5c9718262bb2)`(volatile uint32_t * dest,uint32_t val)`            | Unoptimized version of `*dest ^= val`
`public inline static uint32_t `[`volatile_fetch_and_u32`](#group__sys__atomic__utils__volatile_1gade5b9462233cac712abc028c0925d229)`(volatile uint32_t * dest,uint32_t val)`            | Unoptimized version of `*dest &= val`
`public inline static uint64_t `[`volatile_fetch_add_u64`](#group__sys__atomic__utils__volatile_1gaf67952adf5d6791fd0619e3d6e18d880)`(volatile uint64_t * dest,uint64_t val)`            | Unoptimized version of `*dest += val`
`public inline static uint64_t `[`volatile_fetch_sub_u64`](#group__sys__atomic__utils__volatile_1ga49b3491223d72e997636d0d8b3fa5034)`(volatile uint64_t * dest,uint64_t val)`            | Unoptimized version of `*dest -= val`
`public inline static uint64_t `[`volatile_fetch_or_u64`](#group__sys__atomic__utils__volatile_1ga612c97a36136d294f8a9413f5d1dcdfe)`(volatile uint64_t * dest,uint64_t val)`            | Unoptimized version of `*dest \|= val`
`public inline static uint64_t `[`volatile_fetch_xor_u64`](#group__sys__atomic__utils__volatile_1gab72076cfb2779826c723cc238efc5ff5)`(volatile uint64_t * dest,uint64_t val)`            | Unoptimized version of `*dest ^= val`
`public inline static uint64_t `[`volatile_fetch_and_u64`](#group__sys__atomic__utils__volatile_1gad0b00ac1091b2af1a51071ec099e7c01)`(volatile uint64_t * dest,uint64_t val)`            | Unoptimized version of `*dest &= val`

## Members

#### `public inline static uint8_t `[`volatile_load_u8`](#group__sys__atomic__utils__volatile_1ga3e94b81bedd8e87f1a03532a24e20713)`(const volatile uint8_t * var)` 

Load an 8 bit value completely unoptimized.

#### Parameters
* `var` Address to load the value from 

#### Returns
The value read unoptimized from address `var`

#### `public inline static uint16_t `[`volatile_load_u16`](#group__sys__atomic__utils__volatile_1ga2f7c8cac5d389420219ec2259ec1f16c)`(const volatile uint16_t * var)` 

Load an 16 bit value completely unoptimized.

#### Parameters
* `var` Address to load the value from 

#### Returns
The value read unoptimized from address `var`

#### `public inline static uint32_t `[`volatile_load_u32`](#group__sys__atomic__utils__volatile_1ga3ec6d6a0a708bd8cc3aa5ac2e7e1af4c)`(const volatile uint32_t * var)` 

Load an 32 bit value completely unoptimized.

#### Parameters
* `var` Address to load the value from 

#### Returns
The value read unoptimized from address `var`

#### `public inline static uint64_t `[`volatile_load_u64`](#group__sys__atomic__utils__volatile_1gaec690f4a91d89ea3fa579e44554f8bb6)`(const volatile uint64_t * var)` 

Load an 64 bit value completely unoptimized.

#### Parameters
* `var` Address to load the value from 

#### Returns
The value read unoptimized from address `var`

#### `public inline static void `[`volatile_store_u8`](#group__sys__atomic__utils__volatile_1gae9a54c2f4f3afbe98cc53d6a373b2634)`(volatile uint8_t * dest,uint8_t val)` 

Store an 8 bit value completely unoptimized.

#### Parameters
* `dest` Address to write the given value unoptimized to 

* `val` Value to write unoptimized

#### `public inline static void `[`volatile_store_u16`](#group__sys__atomic__utils__volatile_1gaad285568ee572bf4eed10758a9714172)`(volatile uint16_t * dest,uint16_t val)` 

Store a 16 bit value completely unoptimized.

#### Parameters
* `dest` Address to write the given value unoptimized to 

* `val` Value to write unoptimized

#### `public inline static void `[`volatile_store_u32`](#group__sys__atomic__utils__volatile_1gaab6d1409b500e0b1ebd6b2a726badbbc)`(volatile uint32_t * dest,uint32_t val)` 

Store a 32 bit value completely unoptimized.

#### Parameters
* `dest` Address to write the given value unoptimized to 

* `val` Value to write unoptimized

#### `public inline static void `[`volatile_store_u64`](#group__sys__atomic__utils__volatile_1ga846ed55e3fbc72e5f265fd2978c9414c)`(volatile uint64_t * dest,uint64_t val)` 

Store a 64 bit value completely unoptimized.

#### Parameters
* `dest` Address to write the given value unoptimized to 

* `val` Value to write unoptimized

#### `public inline static uint8_t `[`volatile_fetch_add_u8`](#group__sys__atomic__utils__volatile_1ga8d01b3b1839266b2deab8fbbf73778fa)`(volatile uint8_t * dest,uint8_t val)` 

Unoptimized version of `*dest += val`

#### Parameters
* `dest` Address of the value to add to 

* `val` Value to add

#### `public inline static uint8_t `[`volatile_fetch_sub_u8`](#group__sys__atomic__utils__volatile_1ga944940e5adbc3e4d60832c05c7acfe8a)`(volatile uint8_t * dest,uint8_t val)` 

Unoptimized version of `*dest -= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint8_t `[`volatile_fetch_or_u8`](#group__sys__atomic__utils__volatile_1gab972e450b4ba39f953c124668b90b6a1)`(volatile uint8_t * dest,uint8_t val)` 

Unoptimized version of `*dest |= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint8_t `[`volatile_fetch_xor_u8`](#group__sys__atomic__utils__volatile_1gab54d6aa6208dcf7167e06a05d3e9ae89)`(volatile uint8_t * dest,uint8_t val)` 

Unoptimized version of `*dest ^= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint8_t `[`volatile_fetch_and_u8`](#group__sys__atomic__utils__volatile_1ga8744d87fcc52c0a9d49017ba56f6ee35)`(volatile uint8_t * dest,uint8_t val)` 

Unoptimized version of `*dest &= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint16_t `[`volatile_fetch_add_u16`](#group__sys__atomic__utils__volatile_1gab74428286144365524d267ab27f34711)`(volatile uint16_t * dest,uint16_t val)` 

Unoptimized version of `*dest += val`

#### Parameters
* `dest` Address of the value to add to 

* `val` Value to add

#### `public inline static uint16_t `[`volatile_fetch_sub_u16`](#group__sys__atomic__utils__volatile_1gaba5879cf1d9a4cca99697ab4152e0eb7)`(volatile uint16_t * dest,uint16_t val)` 

Unoptimized version of `*dest -= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint16_t `[`volatile_fetch_or_u16`](#group__sys__atomic__utils__volatile_1ga043b7c14528ea8ddff39c7307e17c378)`(volatile uint16_t * dest,uint16_t val)` 

Unoptimized version of `*dest |= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint16_t `[`volatile_fetch_xor_u16`](#group__sys__atomic__utils__volatile_1ga09b03398fd60c2ca2678d335d8eeb976)`(volatile uint16_t * dest,uint16_t val)` 

Unoptimized version of `*dest ^= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint16_t `[`volatile_fetch_and_u16`](#group__sys__atomic__utils__volatile_1ga16498d05a415186739f1a0f98c3422fb)`(volatile uint16_t * dest,uint16_t val)` 

Unoptimized version of `*dest &= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint32_t `[`volatile_fetch_add_u32`](#group__sys__atomic__utils__volatile_1ga6b5c8cae03a30e8abb98c9bc7a8ab908)`(volatile uint32_t * dest,uint32_t val)` 

Unoptimized version of `*dest += val`

#### Parameters
* `dest` Address of the value to add to 

* `val` Value to add

#### `public inline static uint32_t `[`volatile_fetch_sub_u32`](#group__sys__atomic__utils__volatile_1ga3dcfb9daf8c5974184000f787b16fcbd)`(volatile uint32_t * dest,uint32_t val)` 

Unoptimized version of `*dest -= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint32_t `[`volatile_fetch_or_u32`](#group__sys__atomic__utils__volatile_1ga97bcfd95af6962783a3da15c02a1c1e3)`(volatile uint32_t * dest,uint32_t val)` 

Unoptimized version of `*dest |= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint32_t `[`volatile_fetch_xor_u32`](#group__sys__atomic__utils__volatile_1ga41b4b37ef7661eca6a9d5c9718262bb2)`(volatile uint32_t * dest,uint32_t val)` 

Unoptimized version of `*dest ^= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint32_t `[`volatile_fetch_and_u32`](#group__sys__atomic__utils__volatile_1gade5b9462233cac712abc028c0925d229)`(volatile uint32_t * dest,uint32_t val)` 

Unoptimized version of `*dest &= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint64_t `[`volatile_fetch_add_u64`](#group__sys__atomic__utils__volatile_1gaf67952adf5d6791fd0619e3d6e18d880)`(volatile uint64_t * dest,uint64_t val)` 

Unoptimized version of `*dest += val`

#### Parameters
* `dest` Address of the value to add to 

* `val` Value to add

#### `public inline static uint64_t `[`volatile_fetch_sub_u64`](#group__sys__atomic__utils__volatile_1ga49b3491223d72e997636d0d8b3fa5034)`(volatile uint64_t * dest,uint64_t val)` 

Unoptimized version of `*dest -= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint64_t `[`volatile_fetch_or_u64`](#group__sys__atomic__utils__volatile_1ga612c97a36136d294f8a9413f5d1dcdfe)`(volatile uint64_t * dest,uint64_t val)` 

Unoptimized version of `*dest |= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint64_t `[`volatile_fetch_xor_u64`](#group__sys__atomic__utils__volatile_1gab72076cfb2779826c723cc238efc5ff5)`(volatile uint64_t * dest,uint64_t val)` 

Unoptimized version of `*dest ^= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

#### `public inline static uint64_t `[`volatile_fetch_and_u64`](#group__sys__atomic__utils__volatile_1gad0b00ac1091b2af1a51071ec099e7c01)`(volatile uint64_t * dest,uint64_t val)` 

Unoptimized version of `*dest &= val`

#### Parameters
* `dest` Address of the value to apply the operation on 

* `val` Second operand

