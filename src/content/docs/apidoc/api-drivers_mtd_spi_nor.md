---
title: api-drivers_mtd_spi_nor.md
description: api-drivers_mtd_spi_nor.md
---
# group `drivers_mtd_spi_nor` 

Driver for serial NOR flash memory technology devices attached via SPI.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`JEDEC_NEXT_BANK`](#group__drivers__mtd__spi__nor_1gaea62da6fc7567e17f64b838d0e94a0c6)            | Byte to signal increment bank number when reading manufacturer ID.
`define `[`JEDEC_BANK_MAX`](#group__drivers__mtd__spi__nor_1ga38034dc7bb08b6a3e742e75f32c07c4f)            | The highest possible bank number when reading manufacturer ID.
`define `[`SPI_NOR_F_SECT_4K`](#group__drivers__mtd__spi__nor_1ga4c5a7b9da43ceef5c8f3f173cc9813e2)            | Flag to set when the device support 4KiB sector erase (sector_erase opcode)
`define `[`SPI_NOR_F_SECT_32K`](#group__drivers__mtd__spi__nor_1ga9dc56c1141d961001a1f64fff4bfa6f7)            | Flag to set when the device support 32KiB block erase (block_erase_32k opcode)
`define `[`SPI_NOR_F_SECT_64K`](#group__drivers__mtd__spi__nor_1ga84d30ef690667c2c1beca634608cb118)            | Flag to set when the device support 64KiB block erase (block_erase_32k opcode)
`struct `[`mtd_spi_nor_opcode_t`](#structmtd__spi__nor__opcode__t) | SPI NOR flash opcode table.
`struct `[`mtd_jedec_id_t`](#structmtd__jedec__id__t) | Internal representation of JEDEC memory ID codes.
`struct `[`mtd_spi_nor_params_t`](#structmtd__spi__nor__params__t) | Compile-time parameters for a serial flash device.
`struct `[`mtd_spi_nor_t`](#structmtd__spi__nor__t) | Device descriptor for serial flash memory devices.

## Members

#### `define `[`JEDEC_NEXT_BANK`](#group__drivers__mtd__spi__nor_1gaea62da6fc7567e17f64b838d0e94a0c6) 

Byte to signal increment bank number when reading manufacturer ID.

**See also**: [http://www.jedec.org/standards-documents/results/jep106](http://www.jedec.org/standards-documents/results/jep106)

#### `define `[`JEDEC_BANK_MAX`](#group__drivers__mtd__spi__nor_1ga38034dc7bb08b6a3e742e75f32c07c4f) 

The highest possible bank number when reading manufacturer ID.

**See also**: [http://www.jedec.org/standards-documents/results/jep106](http://www.jedec.org/standards-documents/results/jep106)

#### `define `[`SPI_NOR_F_SECT_4K`](#group__drivers__mtd__spi__nor_1ga4c5a7b9da43ceef5c8f3f173cc9813e2) 

Flag to set when the device support 4KiB sector erase (sector_erase opcode)

#### `define `[`SPI_NOR_F_SECT_32K`](#group__drivers__mtd__spi__nor_1ga9dc56c1141d961001a1f64fff4bfa6f7) 

Flag to set when the device support 32KiB block erase (block_erase_32k opcode)

#### `define `[`SPI_NOR_F_SECT_64K`](#group__drivers__mtd__spi__nor_1ga84d30ef690667c2c1beca634608cb118) 

Flag to set when the device support 64KiB block erase (block_erase_32k opcode)

# struct `mtd_spi_nor_opcode_t` 

SPI NOR flash opcode table.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`rdid`](#structmtd__spi__nor__opcode__t_1af51dbf25ff0b397c32f32e6b43e35f9d) | Read identification (JEDEC ID)
`public uint8_t `[`wren`](#structmtd__spi__nor__opcode__t_1af56bcd77e3cfb43279eb4643a98d177a) | Write enable.
`public uint8_t `[`rdsr`](#structmtd__spi__nor__opcode__t_1afc83f703e757f0bd0542ac3ca2b25e2c) | Read status register.
`public uint8_t `[`wrsr`](#structmtd__spi__nor__opcode__t_1a54eb3fb37a5b86fe96b094c428be5e10) | Write status register.
`public uint8_t `[`read`](#structmtd__spi__nor__opcode__t_1a8f30ed1fee594d3d9e0c22d6790e54d2) | Read data bytes, 3 byte address.
`public uint8_t `[`read_fast`](#structmtd__spi__nor__opcode__t_1a4c10632a87fe45794c676d1564ffd68d) | Read data bytes, 3 byte address, at higher speed.
`public uint8_t `[`page_program`](#structmtd__spi__nor__opcode__t_1a8af08f0967f056abf4ce3a4cb68082cc) | Page program.
`public uint8_t `[`sector_erase`](#structmtd__spi__nor__opcode__t_1aea528e7adb614cdda7cf3772d76aa9d8) | Block erase 4 KiB.
`public uint8_t `[`block_erase_32k`](#structmtd__spi__nor__opcode__t_1a5916a6c57d52e6d74f71a939c38a1f6d) | 32KiB block erase
`public uint8_t `[`block_erase_64k`](#structmtd__spi__nor__opcode__t_1ab04caecd50eb8571a272014e7fcf8596) | Block erase (usually 64 KiB)
`public uint8_t `[`chip_erase`](#structmtd__spi__nor__opcode__t_1a901ead7b51c7cf93f41e7d469fc595bd) | Chip erase.
`public uint8_t `[`sleep`](#structmtd__spi__nor__opcode__t_1ae48b6a09752f9867fa6c40b70a91bc5c) | Deep power down.
`public uint8_t `[`wake`](#structmtd__spi__nor__opcode__t_1ac13b15fcf2592c5121453a870b32d779) | Release from deep power down.

## Members

#### `public uint8_t `[`rdid`](#structmtd__spi__nor__opcode__t_1af51dbf25ff0b397c32f32e6b43e35f9d) 

Read identification (JEDEC ID)

#### `public uint8_t `[`wren`](#structmtd__spi__nor__opcode__t_1af56bcd77e3cfb43279eb4643a98d177a) 

Write enable.

#### `public uint8_t `[`rdsr`](#structmtd__spi__nor__opcode__t_1afc83f703e757f0bd0542ac3ca2b25e2c) 

Read status register.

#### `public uint8_t `[`wrsr`](#structmtd__spi__nor__opcode__t_1a54eb3fb37a5b86fe96b094c428be5e10) 

Write status register.

#### `public uint8_t `[`read`](#structmtd__spi__nor__opcode__t_1a8f30ed1fee594d3d9e0c22d6790e54d2) 

Read data bytes, 3 byte address.

#### `public uint8_t `[`read_fast`](#structmtd__spi__nor__opcode__t_1a4c10632a87fe45794c676d1564ffd68d) 

Read data bytes, 3 byte address, at higher speed.

#### `public uint8_t `[`page_program`](#structmtd__spi__nor__opcode__t_1a8af08f0967f056abf4ce3a4cb68082cc) 

Page program.

#### `public uint8_t `[`sector_erase`](#structmtd__spi__nor__opcode__t_1aea528e7adb614cdda7cf3772d76aa9d8) 

Block erase 4 KiB.

#### `public uint8_t `[`block_erase_32k`](#structmtd__spi__nor__opcode__t_1a5916a6c57d52e6d74f71a939c38a1f6d) 

32KiB block erase

#### `public uint8_t `[`block_erase_64k`](#structmtd__spi__nor__opcode__t_1ab04caecd50eb8571a272014e7fcf8596) 

Block erase (usually 64 KiB)

#### `public uint8_t `[`chip_erase`](#structmtd__spi__nor__opcode__t_1a901ead7b51c7cf93f41e7d469fc595bd) 

Chip erase.

#### `public uint8_t `[`sleep`](#structmtd__spi__nor__opcode__t_1ae48b6a09752f9867fa6c40b70a91bc5c) 

Deep power down.

#### `public uint8_t `[`wake`](#structmtd__spi__nor__opcode__t_1ac13b15fcf2592c5121453a870b32d779) 

Release from deep power down.

# struct `mtd_jedec_id_t` 

Internal representation of JEDEC memory ID codes.

**See also**: [http://www.jedec.org/standards-documents/results/jep106](http://www.jedec.org/standards-documents/results/jep106)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`bank`](#structmtd__jedec__id__t_1a8526c01842b574c90266fd284e447ff4) | Manufacturer ID bank number, 1 through 10, see JEP106.
`public uint8_t `[`manuf`](#structmtd__jedec__id__t_1a9a2a181e0ce764044787ab7366d56adf) | Manufacturer ID, 1 byte.
`public uint8_t `[`device`](#structmtd__jedec__id__t_1a5fbeb3242181db80f8b9e65726358b8d) | Device ID, 2 bytes.

## Members

#### `public uint8_t `[`bank`](#structmtd__jedec__id__t_1a8526c01842b574c90266fd284e447ff4) 

Manufacturer ID bank number, 1 through 10, see JEP106.

#### `public uint8_t `[`manuf`](#structmtd__jedec__id__t_1a9a2a181e0ce764044787ab7366d56adf) 

Manufacturer ID, 1 byte.

#### `public uint8_t `[`device`](#structmtd__jedec__id__t_1a5fbeb3242181db80f8b9e65726358b8d) 

Device ID, 2 bytes.

# struct `mtd_spi_nor_params_t` 

Compile-time parameters for a serial flash device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`mtd_spi_nor_opcode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_spi_nor.md#structmtd__spi__nor__opcode__t)` * `[`opcode`](#structmtd__spi__nor__params__t_1a6fb7742bfbbd6583a2c56794932f5000) | Opcode table for the device.
`public uint32_t `[`wait_chip_erase`](#structmtd__spi__nor__params__t_1a87eebb1410f285508e32356e47691c83) | Full chip erase wait time in µs.
`public uint32_t `[`wait_64k_erase`](#structmtd__spi__nor__params__t_1af1249938d9e535c6620143049843a030) | 64KB page erase wait time in µs
`public uint32_t `[`wait_32k_erase`](#structmtd__spi__nor__params__t_1adfb0541e8d87accf80c9bc6caa4abab7) | 32KB page erase wait time in µs
`public uint32_t `[`wait_sector_erase`](#structmtd__spi__nor__params__t_1a825e05851a6c9745803c502e7dac7bd7) | 4KB sector erase wait time in µs
`public uint32_t `[`wait_chip_wake_up`](#structmtd__spi__nor__params__t_1a08a096191e2c43e91bf4b8fa1e24104e) | Chip wake up time in µs.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structmtd__spi__nor__params__t_1a5828ed5db4d96b283d7e13349732f052) | SPI clock.
`public uint16_t `[`flag`](#structmtd__spi__nor__params__t_1a3a5ba608fa1f7464fe94eb0313f4cb6a) | Config flags.
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structmtd__spi__nor__params__t_1a702f701717c39da7feb4d246dae0e015) | SPI bus the device is connected to.
`public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`mode`](#structmtd__spi__nor__params__t_1a7388fd8197bad9a1850d0b9d413a1b58) | SPI mode.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structmtd__spi__nor__params__t_1a898be66fd885e69f88d1ac12f99e48ba) | CS pin GPIO handle.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`wp`](#structmtd__spi__nor__params__t_1a240d0d73443ffea2c79c779bc5782083) | Write Protect pin GPIO handle.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`hold`](#structmtd__spi__nor__params__t_1a1c64a2c9c34d4fc356ead4146f3dbf52) | HOLD pin GPIO handle.

## Members

#### `public const `[`mtd_spi_nor_opcode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_spi_nor.md#structmtd__spi__nor__opcode__t)` * `[`opcode`](#structmtd__spi__nor__params__t_1a6fb7742bfbbd6583a2c56794932f5000) 

Opcode table for the device.

#### `public uint32_t `[`wait_chip_erase`](#structmtd__spi__nor__params__t_1a87eebb1410f285508e32356e47691c83) 

Full chip erase wait time in µs.

#### `public uint32_t `[`wait_64k_erase`](#structmtd__spi__nor__params__t_1af1249938d9e535c6620143049843a030) 

64KB page erase wait time in µs

#### `public uint32_t `[`wait_32k_erase`](#structmtd__spi__nor__params__t_1adfb0541e8d87accf80c9bc6caa4abab7) 

32KB page erase wait time in µs

#### `public uint32_t `[`wait_sector_erase`](#structmtd__spi__nor__params__t_1a825e05851a6c9745803c502e7dac7bd7) 

4KB sector erase wait time in µs

#### `public uint32_t `[`wait_chip_wake_up`](#structmtd__spi__nor__params__t_1a08a096191e2c43e91bf4b8fa1e24104e) 

Chip wake up time in µs.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structmtd__spi__nor__params__t_1a5828ed5db4d96b283d7e13349732f052) 

SPI clock.

#### `public uint16_t `[`flag`](#structmtd__spi__nor__params__t_1a3a5ba608fa1f7464fe94eb0313f4cb6a) 

Config flags.

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structmtd__spi__nor__params__t_1a702f701717c39da7feb4d246dae0e015) 

SPI bus the device is connected to.

#### `public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`mode`](#structmtd__spi__nor__params__t_1a7388fd8197bad9a1850d0b9d413a1b58) 

SPI mode.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structmtd__spi__nor__params__t_1a898be66fd885e69f88d1ac12f99e48ba) 

CS pin GPIO handle.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`wp`](#structmtd__spi__nor__params__t_1a240d0d73443ffea2c79c779bc5782083) 

Write Protect pin GPIO handle.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`hold`](#structmtd__spi__nor__params__t_1a1c64a2c9c34d4fc356ead4146f3dbf52) 

HOLD pin GPIO handle.

# struct `mtd_spi_nor_t` 

Device descriptor for serial flash memory devices.

This is an extension of the `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__spi__nor__t_1a5e7566a79757a8b3ae3bc010cce63d6e) | inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public const `[`mtd_spi_nor_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_spi_nor.md#structmtd__spi__nor__params__t)` * `[`params`](#structmtd__spi__nor__t_1a6b92fa57ddf6e2b218799003253b12d3) | SPI NOR params.
`public `[`mtd_jedec_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_spi_nor.md#structmtd__jedec__id__t)` `[`jedec_id`](#structmtd__spi__nor__t_1a4af66c3f88d6b33431237515c48dc774) | JEDEC ID of the chip.
`public uint32_t `[`page_addr_mask`](#structmtd__spi__nor__t_1a0602ceba18303c236cb39bfb516d9f35) | bitmask to corresponding to the page address
`public uint32_t `[`sec_addr_mask`](#structmtd__spi__nor__t_1abc5fddace93fba81caaed121bf866fac) | bitmask to corresponding to the sector address
`public uint8_t `[`page_addr_shift`](#structmtd__spi__nor__t_1ac5e8c0762d54a9cb9b71b8864eba9e26) | number of right shifts to get the address to the start of the page
`public uint8_t `[`sec_addr_shift`](#structmtd__spi__nor__t_1a7093bbebb387f2ba9b7fcb11630592a7) | number of right shifts to get the address to the start of the sector
`public uint8_t `[`addr_width`](#structmtd__spi__nor__t_1af3375ee883b3291e7d4d5525367c9749) | number of address bytes

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__spi__nor__t_1a5e7566a79757a8b3ae3bc010cce63d6e) 

inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public const `[`mtd_spi_nor_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_spi_nor.md#structmtd__spi__nor__params__t)` * `[`params`](#structmtd__spi__nor__t_1a6b92fa57ddf6e2b218799003253b12d3) 

SPI NOR params.

#### `public `[`mtd_jedec_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_spi_nor.md#structmtd__jedec__id__t)` `[`jedec_id`](#structmtd__spi__nor__t_1a4af66c3f88d6b33431237515c48dc774) 

JEDEC ID of the chip.

#### `public uint32_t `[`page_addr_mask`](#structmtd__spi__nor__t_1a0602ceba18303c236cb39bfb516d9f35) 

bitmask to corresponding to the page address

Computed by mtd_spi_nor_init, no need to touch outside the driver.

#### `public uint32_t `[`sec_addr_mask`](#structmtd__spi__nor__t_1abc5fddace93fba81caaed121bf866fac) 

bitmask to corresponding to the sector address

Computed by mtd_spi_nor_init, no need to touch outside the driver.

#### `public uint8_t `[`page_addr_shift`](#structmtd__spi__nor__t_1ac5e8c0762d54a9cb9b71b8864eba9e26) 

number of right shifts to get the address to the start of the page

Computed by mtd_spi_nor_init, no need to touch outside the driver.

#### `public uint8_t `[`sec_addr_shift`](#structmtd__spi__nor__t_1a7093bbebb387f2ba9b7fcb11630592a7) 

number of right shifts to get the address to the start of the sector

Computed by mtd_spi_nor_init, no need to touch outside the driver.

#### `public uint8_t `[`addr_width`](#structmtd__spi__nor__t_1af3375ee883b3291e7d4d5525367c9749) 

number of address bytes

Computed by mtd_spi_nor_init, no need to touch outside the driver.

