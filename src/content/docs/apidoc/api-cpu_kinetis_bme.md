---
title: api-cpu_kinetis_bme.md
description: api-cpu_kinetis_bme.md
---
# group `cpu_kinetis_bme` 

Macros for using decorated memory accesses with the Bit Manipulation Engine available in Kinetis Cortex-M0+ devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BITBAND_FUNCTIONS_PROVIDED`](#group__cpu__kinetis__bme_1ga06145299a2769dfe171ac948a6c156c8)            | Tell [bit.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bit_8h) that we provide CPU specific bit manipulation functions.
`define `[`BME_AND_MASK`](#group__cpu__kinetis__bme_1ga6c5269009a5f7be415464a1b11543a27)            | AND decoration bitmask.
`define `[`BME_OR_MASK`](#group__cpu__kinetis__bme_1ga34b703e728f49f0947f7bde6a138b883)            | OR decoration bitmask.
`define `[`BME_XOR_MASK`](#group__cpu__kinetis__bme_1gae81f3a391e0f05c04d5e134f6a79d0ca)            | XOR decoration bitmask.
`define `[`BME_LAC1_MASK`](#group__cpu__kinetis__bme_1gad780dfd08580952ca996dc3e2c729c1e)            | Load-and-clear 1 bit.
`define `[`BME_LAS1_MASK`](#group__cpu__kinetis__bme_1gacb3302ecd0c8a708f503d07392b68f97)            | Load-and-set 1 bit.
`define `[`BME_BF_MASK`](#group__cpu__kinetis__bme_1ga24437b71b449d27ffdcdea6ee5fbd1ac)            | Bit field extraction bitmask.
`public inline static void * `[`bme_bf_addr`](#group__cpu__kinetis__bme_1ga0b4fd914ea873c45a3afbb88a8a07592)`(volatile void * ptr,uintptr_t bit,uintptr_t width)`            | Bit field address macro.
`public inline static uint32_t * `[`bme_bitfield32`](#group__cpu__kinetis__bme_1ga08ccc4949c9324805059e8d7c4e32614)`(volatile uint32_t * ptr,uint8_t bit,uint8_t width)`            | Access a bitfield (32 bit load/store)
`public inline static uint16_t * `[`bme_bitfield16`](#group__cpu__kinetis__bme_1gab031b3216ed3e90d9f68a962b75c005c)`(volatile uint16_t * ptr,uint8_t bit,uint8_t width)`            | Access a bitfield (16 bit load/store)
`public inline static uint8_t * `[`bme_bitfield8`](#group__cpu__kinetis__bme_1gaff4b0a49363a4be931823347979c487c)`(volatile uint8_t * ptr,uint8_t bit,uint8_t width)`            | Access a bitfield (8 bit load/store)
`public inline static void `[`bit_set32`](#group__cpu__kinetis__bme_1ga6948507c7e8c7d511772fd621b3d1e70)`(volatile uint32_t * ptr,uint8_t bit)`            | Set a single bit in the 32 bit word pointed to by `ptr`.
`public inline static void `[`bit_set16`](#group__cpu__kinetis__bme_1ga270b85554e86dae115c1fa102431d8a2)`(volatile uint16_t * ptr,uint8_t bit)`            | Set a single bit in the 16 bit word pointed to by `ptr`.
`public inline static void `[`bit_set8`](#group__cpu__kinetis__bme_1ga3e8ece38e5528d3a78a04a9497381720)`(volatile uint8_t * ptr,uint8_t bit)`            | Set a single bit in the 8 bit byte pointed to by `ptr`.
`public inline static void `[`bit_clear32`](#group__cpu__kinetis__bme_1ga37a2f727e14b66792ce533119b764bc4)`(volatile uint32_t * ptr,uint8_t bit)`            | Clear a single bit in the 32 bit word pointed to by `ptr`.
`public inline static void `[`bit_clear16`](#group__cpu__kinetis__bme_1gac698c3aba1ec7262a017ef4ffc3f8c2a)`(volatile uint16_t * ptr,uint8_t bit)`            | Clear a single bit in the 16 bit word pointed to by `ptr`.
`public inline static void `[`bit_clear8`](#group__cpu__kinetis__bme_1ga060bdc450aab2ab10da5a7a2acddd769)`(volatile uint8_t * ptr,uint8_t bit)`            | Clear a single bit in the 8 bit byte pointed to by `ptr`.

## Members

#### `define `[`BITBAND_FUNCTIONS_PROVIDED`](#group__cpu__kinetis__bme_1ga06145299a2769dfe171ac948a6c156c8) 

Tell [bit.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bit_8h) that we provide CPU specific bit manipulation functions.

#### `define `[`BME_AND_MASK`](#group__cpu__kinetis__bme_1ga6c5269009a5f7be415464a1b11543a27) 

AND decoration bitmask.

#### `define `[`BME_OR_MASK`](#group__cpu__kinetis__bme_1ga34b703e728f49f0947f7bde6a138b883) 

OR decoration bitmask.

#### `define `[`BME_XOR_MASK`](#group__cpu__kinetis__bme_1gae81f3a391e0f05c04d5e134f6a79d0ca) 

XOR decoration bitmask.

#### `define `[`BME_LAC1_MASK`](#group__cpu__kinetis__bme_1gad780dfd08580952ca996dc3e2c729c1e) 

Load-and-clear 1 bit.

#### `define `[`BME_LAS1_MASK`](#group__cpu__kinetis__bme_1gacb3302ecd0c8a708f503d07392b68f97) 

Load-and-set 1 bit.

#### `define `[`BME_BF_MASK`](#group__cpu__kinetis__bme_1ga24437b71b449d27ffdcdea6ee5fbd1ac) 

Bit field extraction bitmask.

#### Parameters
* `bit` LSB of the bitfield within the word/halfword/byte 

* `width` Number of bits to extract

#### `public inline static void * `[`bme_bf_addr`](#group__cpu__kinetis__bme_1ga0b4fd914ea873c45a3afbb88a8a07592)`(volatile void * ptr,uintptr_t bit,uintptr_t width)` 

Bit field address macro.

The target address must lie within a part of the peripheral address space 0x40000000 - 0x40070000

#### Parameters
* `ptr` Pointer to target register 

* `bit` Location of the LSB of the bitfield within the register 

* `width` Width of the the bitfield, in bits

#### Returns
bitfield address as an uintptr_t

#### `public inline static uint32_t * `[`bme_bitfield32`](#group__cpu__kinetis__bme_1ga08ccc4949c9324805059e8d7c4e32614)`(volatile uint32_t * ptr,uint8_t bit,uint8_t width)` 

Access a bitfield (32 bit load/store)

This macro can be used both for store `(*bme_bitfield32(xxx) = y)` and load `(y = *bme_bitfield32(ptr, bit))`

The target address must lie within a part of the peripheral address space 0x40000000 - 0x40070000

#### Parameters
* `ptr` Pointer to target register 

* `bit` Location of the LSB of the bitfield within the register 

* `width` Width of the the bitfield, in bits

#### Returns
bitfield extracted as a (modifiable) lvalue

#### `public inline static uint16_t * `[`bme_bitfield16`](#group__cpu__kinetis__bme_1gab031b3216ed3e90d9f68a962b75c005c)`(volatile uint16_t * ptr,uint8_t bit,uint8_t width)` 

Access a bitfield (16 bit load/store)

This macro can be used both for store `(*bme_bitfield16(xxx) = y)` and load `(y = *bme_bitfield16(ptr, bit))`

The target address must lie within a part of the peripheral address space 0x40000000 - 0x40070000

#### Parameters
* `ptr` Pointer to target register 

* `bit` Location of the LSB of the bitfield within the register 

* `width` Width of the the bitfield, in bits

#### Returns
bitfield extracted as a (modifiable) lvalue

#### `public inline static uint8_t * `[`bme_bitfield8`](#group__cpu__kinetis__bme_1gaff4b0a49363a4be931823347979c487c)`(volatile uint8_t * ptr,uint8_t bit,uint8_t width)` 

Access a bitfield (8 bit load/store)

This macro can be used both for store `(*bme_bitfield8(xxx) = y)` and load `(y = *bme_bitfield8(ptr, bit))`

The target address must lie within a part of the peripheral address space 0x40000000 - 0x40070000

#### Parameters
* `ptr` Pointer to target register 

* `bit` Location of the LSB of the bitfield within the register 

* `width` Width of the the bitfield, in bits

#### Returns
bitfield extracted as a (modifiable) lvalue

#### `public inline static void `[`bit_set32`](#group__cpu__kinetis__bme_1ga6948507c7e8c7d511772fd621b3d1e70)`(volatile uint32_t * ptr,uint8_t bit)` 

Set a single bit in the 32 bit word pointed to by `ptr`.

The effect is the same as for the following snippet:

```cpp
*ptr |= (1 << bit);
```

There is a read-modify-write cycle occurring within the core, but this cycle is atomic and can not be disrupted by IRQs

#### Parameters
* `ptr` pointer to target word 

* `bit` bit number within the word

#### `public inline static void `[`bit_set16`](#group__cpu__kinetis__bme_1ga270b85554e86dae115c1fa102431d8a2)`(volatile uint16_t * ptr,uint8_t bit)` 

Set a single bit in the 16 bit word pointed to by `ptr`.

The effect is the same as for the following snippet:

```cpp
*ptr |= (1 << bit);
```

There is a read-modify-write cycle occurring within the core, but this cycle is atomic and can not be disrupted by IRQs

#### Parameters
* `ptr` pointer to target word 

* `bit` bit number within the word

#### `public inline static void `[`bit_set8`](#group__cpu__kinetis__bme_1ga3e8ece38e5528d3a78a04a9497381720)`(volatile uint8_t * ptr,uint8_t bit)` 

Set a single bit in the 8 bit byte pointed to by `ptr`.

The effect is the same as for the following snippet:

```cpp
*ptr |= (1 << bit);
```

There is a read-modify-write cycle occurring within the core, but this cycle is atomic and can not be disrupted by IRQs

#### Parameters
* `ptr` pointer to target byte 

* `bit` bit number within the byte

#### `public inline static void `[`bit_clear32`](#group__cpu__kinetis__bme_1ga37a2f727e14b66792ce533119b764bc4)`(volatile uint32_t * ptr,uint8_t bit)` 

Clear a single bit in the 32 bit word pointed to by `ptr`.

The effect is the same as for the following snippet:

```cpp
*ptr &= ~(1 << bit);
```

There is a read-modify-write cycle occurring within the core, but this cycle is atomic and can not be disrupted by IRQs

#### Parameters
* `ptr` pointer to target word 

* `bit` bit number within the word

#### `public inline static void `[`bit_clear16`](#group__cpu__kinetis__bme_1gac698c3aba1ec7262a017ef4ffc3f8c2a)`(volatile uint16_t * ptr,uint8_t bit)` 

Clear a single bit in the 16 bit word pointed to by `ptr`.

The effect is the same as for the following snippet:

```cpp
*ptr &= ~(1 << bit);
```

There is a read-modify-write cycle occurring within the core, but this cycle is atomic and can not be disrupted by IRQs

#### Parameters
* `ptr` pointer to target word 

* `bit` bit number within the word

#### `public inline static void `[`bit_clear8`](#group__cpu__kinetis__bme_1ga060bdc450aab2ab10da5a7a2acddd769)`(volatile uint8_t * ptr,uint8_t bit)` 

Clear a single bit in the 8 bit byte pointed to by `ptr`.

The effect is the same as for the following snippet:

```cpp
*ptr &= ~(1 << bit);
```

There is a read-modify-write cycle occurring within the core, but this cycle is atomic and can not be disrupted by IRQs

#### Parameters
* `ptr` pointer to target byte 

* `bit` bit number within the byte

