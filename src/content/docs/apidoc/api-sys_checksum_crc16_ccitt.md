---
title: api-sys_checksum_crc16_ccitt.md
description: api-sys_checksum_crc16_ccitt.md
---
# group `sys_checksum_crc16_ccitt` 

Variations of CRC16-CCITT checksum algorithms.

This provides implementations for multiple variations of CRC16 checks.

There is a more generalized version in [CRC16 (lightweight)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__ucrc16), that does not optionally utilize a look-up table as these implementations can do (and is thus also far more memory efficient). Its caveat however is that it is slower by about factor 8 than these versions when enabling the look-up table.

enable the `crc16_fast` module for a look-up table based implementation that trades code size for speed.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`crc16_ccitt_kermit_update`](#group__sys__checksum__crc16__ccitt_1gacad581b26179c740c8ce5d802ef463da)`(uint16_t crc,const unsigned char * buf,size_t len)`            | Update CRC16-CCITT-KERMIT.
`public uint16_t `[`crc16_ccitt_kermit_calc`](#group__sys__checksum__crc16__ccitt_1ga9ebb5e67635a8f5c7b0f0ff23cdae6cb)`(const unsigned char * buf,size_t len)`            | Calculate CRC16-CCITT-KERMIT.
`public inline static uint16_t `[`crc16_ccitt_mcrf4xx_update`](#group__sys__checksum__crc16__ccitt_1ga5f48353823fdebe6edc4e11a2780511d)`(uint16_t crc,const unsigned char * buf,size_t len)`            | Update CRC16-CCITT-MCRF4XX.
`public uint16_t `[`crc16_ccitt_mcrf4xx_calc`](#group__sys__checksum__crc16__ccitt_1ga6b2e0f36ab7989da772b92b13468083d)`(const unsigned char * buf,size_t len)`            | Calculate CRC16-CCITT-MCRF4XX.
`public uint16_t `[`crc16_ccitt_false_update`](#group__sys__checksum__crc16__ccitt_1ga5bd8c35582b8b6c623647448e995ccdf)`(uint16_t crc,const unsigned char * buf,size_t len)`            | Update CRC16-CCITT-FALSE.
`public uint16_t `[`crc16_ccitt_false_calc`](#group__sys__checksum__crc16__ccitt_1gacdc30877b5cb95a3fe6c500eeb45b7b3)`(const unsigned char * buf,size_t len)`            | Calculate CRC16-CCITT-FALSE.
`public inline static uint16_t `[`crc16_ccitt_aug_update`](#group__sys__checksum__crc16__ccitt_1gaef485a588a7e43b3621c9faf15eee190)`(uint16_t crc,const unsigned char * buf,size_t len)`            | Update CRC16-CCITT-AUG.
`public uint16_t `[`crc16_ccitt_aug_calc`](#group__sys__checksum__crc16__ccitt_1gaa382462501919ec94e4cf444a204d779)`(const unsigned char * buf,size_t len)`            | Calculate CRC16-CCITT-AUG.

## Members

#### `public uint16_t `[`crc16_ccitt_kermit_update`](#group__sys__checksum__crc16__ccitt_1gacad581b26179c740c8ce5d802ef463da)`(uint16_t crc,const unsigned char * buf,size_t len)` 

Update CRC16-CCITT-KERMIT.

#### Parameters
* `crc` A start value for the CRC calculation, usually the return value of a previous call to [crc16_ccitt_kermit_calc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1ga9ebb5e67635a8f5c7b0f0ff23cdae6cb) or [crc16_ccitt_kermit_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1gacad581b26179c740c8ce5d802ef463da)

* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area based on the given start value

#### `public uint16_t `[`crc16_ccitt_kermit_calc`](#group__sys__checksum__crc16__ccitt_1ga9ebb5e67635a8f5c7b0f0ff23cdae6cb)`(const unsigned char * buf,size_t len)` 

Calculate CRC16-CCITT-KERMIT.

Parameter   |Value
--------- | ---------
Polynom   |`0x1021`
Init   |`0x0000`
Refin   |`true`
Refout   |`true`
Xorout   |`0x0000`
Check   |`0x2189`

#### Parameters
* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area

#### `public inline static uint16_t `[`crc16_ccitt_mcrf4xx_update`](#group__sys__checksum__crc16__ccitt_1ga5f48353823fdebe6edc4e11a2780511d)`(uint16_t crc,const unsigned char * buf,size_t len)` 

Update CRC16-CCITT-MCRF4XX.

#### Parameters
* `crc` A start value for the CRC calculation, usually the return value of a previous call to [crc16_ccitt_mcrf4xx_calc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1ga6b2e0f36ab7989da772b92b13468083d) or [crc16_ccitt_mcrf4xx_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1ga5f48353823fdebe6edc4e11a2780511d)

* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area based on the given start value

#### `public uint16_t `[`crc16_ccitt_mcrf4xx_calc`](#group__sys__checksum__crc16__ccitt_1ga6b2e0f36ab7989da772b92b13468083d)`(const unsigned char * buf,size_t len)` 

Calculate CRC16-CCITT-MCRF4XX.

Parameter   |Value
--------- | ---------
Polynom   |`0x1021`
Init   |`0xffff`
Refin   |`true`
Refout   |`true`
Xorout   |`0x0000`
Check   |`0x6f91`

#### Parameters
* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area

#### `public uint16_t `[`crc16_ccitt_false_update`](#group__sys__checksum__crc16__ccitt_1ga5bd8c35582b8b6c623647448e995ccdf)`(uint16_t crc,const unsigned char * buf,size_t len)` 

Update CRC16-CCITT-FALSE.

#### Parameters
* `crc` A start value for the CRC calculation, usually the return value of a previous call to [crc16_ccitt_false_calc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1gacdc30877b5cb95a3fe6c500eeb45b7b3) or [crc16_ccitt_false_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1ga5bd8c35582b8b6c623647448e995ccdf)

* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area based on the given start value

#### `public uint16_t `[`crc16_ccitt_false_calc`](#group__sys__checksum__crc16__ccitt_1gacdc30877b5cb95a3fe6c500eeb45b7b3)`(const unsigned char * buf,size_t len)` 

Calculate CRC16-CCITT-FALSE.

Parameter   |Value
--------- | ---------
Polynom   |`0x1021`
Init   |`0xffff`
Refin   |`false`
Refout   |`false`
Xorout   |`0x0000`
Check   |`0x29b1`

#### Parameters
* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area

#### `public inline static uint16_t `[`crc16_ccitt_aug_update`](#group__sys__checksum__crc16__ccitt_1gaef485a588a7e43b3621c9faf15eee190)`(uint16_t crc,const unsigned char * buf,size_t len)` 

Update CRC16-CCITT-AUG.

#### Parameters
* `crc` A start value for the CRC calculation, usually the return value of a previous call to [crc16_ccitt_aug_calc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1gaa382462501919ec94e4cf444a204d779) or [crc16_ccitt_aug_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt_1gaef485a588a7e43b3621c9faf15eee190)

* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area based on the given start value

#### `public uint16_t `[`crc16_ccitt_aug_calc`](#group__sys__checksum__crc16__ccitt_1gaa382462501919ec94e4cf444a204d779)`(const unsigned char * buf,size_t len)` 

Calculate CRC16-CCITT-AUG.

Parameter   |Value
--------- | ---------
Polynom   |`0x1021`
Init   |`0x1d0f`
Refin   |`false`
Refout   |`false`
Xorout   |`0x0000`
Check   |`0xe5cc`

#### Parameters
* `buf` Start of the memory area to checksum 

* `len` Number of bytes to checksum

#### Returns
Checksum of the specified memory area

