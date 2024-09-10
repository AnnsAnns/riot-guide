---
title: api-drivers_sdcard_spi.md
description: api-drivers_sdcard_spi.md
---
# group `drivers_sdcard_spi` 

Driver for reading and writing SD Cards using the SPI.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SD_HC_BLOCK_SIZE`](#group__drivers__sdcard__spi_1gaff1b9bbba19db3b42693524d43fb4601)            | size of a single block on SDHC cards
`define `[`SDCARD_SPI_INIT_ERROR`](#group__drivers__sdcard__spi_1gac2ed9af357c08f608fd37924c31c37a5)            | returned on failed init
`define `[`SDCARD_SPI_OK`](#group__drivers__sdcard__spi_1ga895f47afa681d205877a94215d73c74f)            | returned on successful init
`define `[`SD_SIZE_OF_OID`](#group__drivers__sdcard__spi_1gae074f3b2ef95049e573b9874c3862877)            | OID (OEM/application ID field in CID reg)
`define `[`SD_SIZE_OF_PNM`](#group__drivers__sdcard__spi_1gafa0f65085d31e5e121c9fb247c800cca)            | PNM (product name field in CID reg)
`enum `[`sd_version_t`](#group__drivers__sdcard__spi_1ga0fc206d1dcbc265c9672c6ec0b24ee14)            | version type of SD-card
`enum `[`sd_rw_response_t`](#group__drivers__sdcard__spi_1ga80c23a4db4f9950391ae7718a49a5172)            | sdcard_spi r/w-operation return values
`public int `[`sdcard_spi_init`](#group__drivers__sdcard__spi_1ga16e3f5cd17d718260d80c4a0b32b1b04)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card,const `[`sdcard_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__params__t)` * params)`            | Initializes the sd-card with the given parameters in [sdcard_spi_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t) structure.
`public int `[`sdcard_spi_read_blocks`](#group__drivers__sdcard__spi_1gab1ecf12ff82c245c661c85092795a0a6)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card,uint32_t blockaddr,void * data,uint16_t blocksize,uint16_t nblocks,`[`sd_rw_response_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdcard__spi_1ga80c23a4db4f9950391ae7718a49a5172)` * state)`            | Reads data blocks (usually multiples of 512 Bytes) from card to buffer.
`public int `[`sdcard_spi_write_blocks`](#group__drivers__sdcard__spi_1ga423e047717282a74a8c873cc2fa11698)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card,uint32_t blockaddr,const void * data,uint16_t blocksize,uint16_t nblocks,`[`sd_rw_response_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdcard__spi_1ga80c23a4db4f9950391ae7718a49a5172)` * state)`            | Writes data blocks (usually multiples of 512 Bytes) from buffer to card.
`public uint64_t `[`sdcard_spi_get_capacity`](#group__drivers__sdcard__spi_1ga24cafcde88634a2f92399566aac816d3)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card)`            | Gets the capacity of the card.
`struct `[`cid_t`](#structcid__t) | CID register see section 5.2 in SD-Spec v5.00.
`struct `[`csd_v1_t`](#structcsd__v1__t) | CSD register with csd structure version 1.0 see section 5.3.2 in SD-Spec v5.00.
`struct `[`csd_v2_t`](#structcsd__v2__t) | CSD register with csd structure version 2.0 see section 5.3.3 in SD-Spec v5.00.
`struct `[`sd_status_t`](#structsd__status__t) | SD status register (see section 4.10.2 in SD-Spec v5.00)
`struct `[`sdcard_spi_params_t`](#structsdcard__spi__params__t) | sdcard_spi device params
`struct `[`sdcard_spi_t`](#structsdcard__spi__t) | Device descriptor for sdcard_spi.
`union `[`csd_t`](#unioncsd__t) | CSD register (see section 5.3 in SD-Spec v5.00)

## Members

#### `define `[`SD_HC_BLOCK_SIZE`](#group__drivers__sdcard__spi_1gaff1b9bbba19db3b42693524d43fb4601) 

size of a single block on SDHC cards

#### `define `[`SDCARD_SPI_INIT_ERROR`](#group__drivers__sdcard__spi_1gac2ed9af357c08f608fd37924c31c37a5) 

returned on failed init

#### `define `[`SDCARD_SPI_OK`](#group__drivers__sdcard__spi_1ga895f47afa681d205877a94215d73c74f) 

returned on successful init

#### `define `[`SD_SIZE_OF_OID`](#group__drivers__sdcard__spi_1gae074f3b2ef95049e573b9874c3862877) 

OID (OEM/application ID field in CID reg)

#### `define `[`SD_SIZE_OF_PNM`](#group__drivers__sdcard__spi_1gafa0f65085d31e5e121c9fb247c800cca) 

PNM (product name field in CID reg)

#### `enum `[`sd_version_t`](#group__drivers__sdcard__spi_1ga0fc206d1dcbc265c9672c6ec0b24ee14) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SD_V2            | SD version 2
SD_V1            | SD version 1
MMC_V3            | MMC version 3.
SD_UNKNOWN            | SD-version unknown.

version type of SD-card

#### `enum `[`sd_rw_response_t`](#group__drivers__sdcard__spi_1ga80c23a4db4f9950391ae7718a49a5172) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SD_RW_OK            | no error
SD_RW_NO_TOKEN            | no token was received (on block read)
SD_RW_TIMEOUT            | cmd timed out (not-busy-state wasn't entered)
SD_RW_RX_TX_ERROR            | error while performing SPI read/write
SD_RW_WRITE_ERROR            | data-packet response indicates error
SD_RW_CRC_MISMATCH            | CRC-mismatch of received data.
SD_RW_NOT_SUPPORTED            | operation not supported on used card

sdcard_spi r/w-operation return values

#### `public int `[`sdcard_spi_init`](#group__drivers__sdcard__spi_1ga16e3f5cd17d718260d80c4a0b32b1b04)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card,const `[`sdcard_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__params__t)` * params)` 

Initializes the sd-card with the given parameters in [sdcard_spi_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t) structure.

The init procedure also takes care of initializing the spi peripheral to master mode and performing all necessary steps to set the sd-card to spi-mode. Reading the CID and CSD registers is also done within this routine and their values are copied to the given [sdcard_spi_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t) struct.

#### Parameters
* `card` the device descriptor 

* `params` parameters for this device (pins and spi device are initialized by this driver)

#### Returns
0 if the card could be initialized successfully 

#### Returns
false if an error occurred while initializing the card

#### `public int `[`sdcard_spi_read_blocks`](#group__drivers__sdcard__spi_1gab1ecf12ff82c245c661c85092795a0a6)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card,uint32_t blockaddr,void * data,uint16_t blocksize,uint16_t nblocks,`[`sd_rw_response_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdcard__spi_1ga80c23a4db4f9950391ae7718a49a5172)` * state)` 

Reads data blocks (usually multiples of 512 Bytes) from card to buffer.

#### Parameters
* `card` Initialized sd-card struct 

* `blockaddr` Start address to read from. Independent of the actual addressing scheme of the used card the address needs to be given as block address (e.g. 0, 1, 2... NOT: 0, 512... ). The driver takes care of mapping to byte addressing if needed. 

* `data` Buffer to store the read data in. The user is responsible for providing a suitable buffer size. 

* `blocksize` Size of data blocks. For now only 512 byte blocks are supported because only older (SDSC) cards support variable blocksizes anyway. With SDHC/SDXC-cards this is always fixed to 512 bytes. SDSC cards are automatically forced to use 512 byte as blocksize by the init procedure. 

* `nblocks` Number of blocks to read 

* `state` Contains information about the error state if something went wrong (if return value is lower than nblocks).

#### Returns
number of successfully read blocks (0 if no block was read).

#### `public int `[`sdcard_spi_write_blocks`](#group__drivers__sdcard__spi_1ga423e047717282a74a8c873cc2fa11698)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card,uint32_t blockaddr,const void * data,uint16_t blocksize,uint16_t nblocks,`[`sd_rw_response_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdcard__spi_1ga80c23a4db4f9950391ae7718a49a5172)` * state)` 

Writes data blocks (usually multiples of 512 Bytes) from buffer to card.

#### Parameters
* `card` Initialized sd-card struct 

* `blockaddr` Start address to read from. Independent of the actual addressing scheme of the used card the address needs to be given as block address (e.g. 0, 1, 2... NOT: 0, 512... ). The driver takes care of mapping to byte addressing if needed. 

* `data` Buffer that contains the data to be sent. 

* `blocksize` Size of data blocks. For now only 512 byte blocks are supported because only older (SDSC) cards support variable blocksizes anyway. With SDHC/SDXC-cards this is always fixed to 512 bytes. SDSC cards are automatically forced to use 512 byte as blocksize by the init procedure. 

* `nblocks` Number of blocks to write 

* `state` Contains information about the error state if something went wrong (if return value is lower than nblocks).

#### Returns
number of successfully written blocks (0 if no block was written).

#### `public uint64_t `[`sdcard_spi_get_capacity`](#group__drivers__sdcard__spi_1ga24cafcde88634a2f92399566aac816d3)`(`[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * card)` 

Gets the capacity of the card.

#### Parameters
* `card` Initialized sd-card struct

#### Returns
capacity of the card in bytes

# struct `cid_t` 

CID register see section 5.2 in SD-Spec v5.00.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`MID`](#structcid__t_1a2c65f20dc3535c848f03fcc5aaea2c87) | Manufacturer ID.
`public char `[`OID`](#structcid__t_1a2497a50a549ab72d7299e3b0618388b4) | OEM/Application ID.
`public char `[`PNM`](#structcid__t_1a7266d4d7a0efac893af341e757e69c10) | Product name.
`public uint8_t `[`PRV`](#structcid__t_1af82841efdcc9146a6fff350099d24dc7) | Product revision.
`public uint32_t `[`PSN`](#structcid__t_1a377b2c212b1daa71a5f2aac9eefc747e) | Product serial number.
`public uint16_t `[`MDT`](#structcid__t_1ad94ce3cd4b63308a35c5e6101278f422) | Manufacturing date.
`public uint8_t `[`CID_CRC`](#structcid__t_1a26e1c87a7eaba63d342f4c29ced7a6c5) | CRC7 checksum.

## Members

#### `public uint8_t `[`MID`](#structcid__t_1a2c65f20dc3535c848f03fcc5aaea2c87) 

Manufacturer ID.

#### `public char `[`OID`](#structcid__t_1a2497a50a549ab72d7299e3b0618388b4) 

OEM/Application ID.

#### `public char `[`PNM`](#structcid__t_1a7266d4d7a0efac893af341e757e69c10) 

Product name.

#### `public uint8_t `[`PRV`](#structcid__t_1af82841efdcc9146a6fff350099d24dc7) 

Product revision.

#### `public uint32_t `[`PSN`](#structcid__t_1a377b2c212b1daa71a5f2aac9eefc747e) 

Product serial number.

#### `public uint16_t `[`MDT`](#structcid__t_1ad94ce3cd4b63308a35c5e6101278f422) 

Manufacturing date.

#### `public uint8_t `[`CID_CRC`](#structcid__t_1a26e1c87a7eaba63d342f4c29ced7a6c5) 

CRC7 checksum.

# struct `csd_v1_t` 

CSD register with csd structure version 1.0 see section 5.3.2 in SD-Spec v5.00.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`CSD_STRUCTURE`](#structcsd__v1__t_1abed05af25eb47aa21bbd98544aa0cbbf) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`TAAC`](#structcsd__v1__t_1a22428cdca17ca1aa14dfbf77a41e52b1) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`NSAC`](#structcsd__v1__t_1a92547003946318a5544aaec8d05a37e2) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`TRAN_SPEED`](#structcsd__v1__t_1a28a5c90aaad19a3fd701605cb6327d07) | see section 5.3.2 in SD-Spec v5.00
`public uint16_t `[`CCC`](#structcsd__v1__t_1ab38d77012e83617b159d0a4065bfa77d) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`READ_BL_LEN`](#structcsd__v1__t_1a3b0103d70256065526c2c175239bfac2) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`READ_BL_PARTIAL`](#structcsd__v1__t_1a2970b038b675916eb20768e975f22597) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`WRITE_BLK_MISALIGN`](#structcsd__v1__t_1a2ab5fe64cc25491d5dfca0a0b6c4ef17) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`READ_BLK_MISALIGN`](#structcsd__v1__t_1ab217906a114cd11647c91781ce97198b) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`DSR_IMP`](#structcsd__v1__t_1a8036e26a870ad4c5389b2e94e6c2a754) | see section 5.3.2 in SD-Spec v5.00
`public uint16_t `[`C_SIZE`](#structcsd__v1__t_1a4c7aabf97fa39ef51de9020ec6be3462) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`VDD_R_CURR_MIN`](#structcsd__v1__t_1ac23c485067f07af3dbf226d54fc167ea) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`VDD_R_CURR_MAX`](#structcsd__v1__t_1ae43cf31df5e88e83de6e553f45db2a30) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`VDD_W_CURR_MIN`](#structcsd__v1__t_1a4dfd8376749fb68894cd7de013c9c778) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`VDD_W_CURR_MAX`](#structcsd__v1__t_1a5162bd62b94e29af60199594d4e9957b) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`C_SIZE_MULT`](#structcsd__v1__t_1ae10f3c07a9f3dca424d5ff6c25318752) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`ERASE_BLK_EN`](#structcsd__v1__t_1afbd71c0750bd79bcecfe056ac029be7a) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`SECTOR_SIZE`](#structcsd__v1__t_1a4847fef8d03340bcbac594465469173b) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`WP_GRP_SIZE`](#structcsd__v1__t_1a6aea5a7e7f4f6abfd9f9f21b415253c9) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`WP_GRP_ENABLE`](#structcsd__v1__t_1a07f3520dc551fba8b6970de4c67a187d) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`R2W_FACTOR`](#structcsd__v1__t_1a04224ae2e21c8bc2f32c2d4042c5ba5c) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`WRITE_BL_LEN`](#structcsd__v1__t_1a03e9c501e2819a7827ad1e4b27345cb3) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`WRITE_BL_PARTIAL`](#structcsd__v1__t_1a8a08e6b854b75e65f07bab400b73e24e) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`FILE_FORMAT_GRP`](#structcsd__v1__t_1a11dad313d997eb0b72d5edd7115cb4f8) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`COPY`](#structcsd__v1__t_1a4348986c69f1cc240ca4b03347c56a27) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`PERM_WRITE_PROTECT`](#structcsd__v1__t_1aedfbd77e11c18dbd2a9566597858fc0a) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`TMP_WRITE_PROTECT`](#structcsd__v1__t_1a2f3678aeac3014c0aa546987c414f7ea) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`FILE_FORMAT`](#structcsd__v1__t_1ac0eea7bb835249b5a9447c1ddef2440f) | see section 5.3.2 in SD-Spec v5.00
`public uint8_t `[`CSD_CRC`](#structcsd__v1__t_1a3a4403c0a027b6e42a13761c0851ec87) | see section 5.3.2 in SD-Spec v5.00

## Members

#### `public uint8_t `[`CSD_STRUCTURE`](#structcsd__v1__t_1abed05af25eb47aa21bbd98544aa0cbbf) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`TAAC`](#structcsd__v1__t_1a22428cdca17ca1aa14dfbf77a41e52b1) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`NSAC`](#structcsd__v1__t_1a92547003946318a5544aaec8d05a37e2) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`TRAN_SPEED`](#structcsd__v1__t_1a28a5c90aaad19a3fd701605cb6327d07) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint16_t `[`CCC`](#structcsd__v1__t_1ab38d77012e83617b159d0a4065bfa77d) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`READ_BL_LEN`](#structcsd__v1__t_1a3b0103d70256065526c2c175239bfac2) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`READ_BL_PARTIAL`](#structcsd__v1__t_1a2970b038b675916eb20768e975f22597) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`WRITE_BLK_MISALIGN`](#structcsd__v1__t_1a2ab5fe64cc25491d5dfca0a0b6c4ef17) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`READ_BLK_MISALIGN`](#structcsd__v1__t_1ab217906a114cd11647c91781ce97198b) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`DSR_IMP`](#structcsd__v1__t_1a8036e26a870ad4c5389b2e94e6c2a754) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint16_t `[`C_SIZE`](#structcsd__v1__t_1a4c7aabf97fa39ef51de9020ec6be3462) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`VDD_R_CURR_MIN`](#structcsd__v1__t_1ac23c485067f07af3dbf226d54fc167ea) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`VDD_R_CURR_MAX`](#structcsd__v1__t_1ae43cf31df5e88e83de6e553f45db2a30) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`VDD_W_CURR_MIN`](#structcsd__v1__t_1a4dfd8376749fb68894cd7de013c9c778) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`VDD_W_CURR_MAX`](#structcsd__v1__t_1a5162bd62b94e29af60199594d4e9957b) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`C_SIZE_MULT`](#structcsd__v1__t_1ae10f3c07a9f3dca424d5ff6c25318752) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`ERASE_BLK_EN`](#structcsd__v1__t_1afbd71c0750bd79bcecfe056ac029be7a) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`SECTOR_SIZE`](#structcsd__v1__t_1a4847fef8d03340bcbac594465469173b) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`WP_GRP_SIZE`](#structcsd__v1__t_1a6aea5a7e7f4f6abfd9f9f21b415253c9) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`WP_GRP_ENABLE`](#structcsd__v1__t_1a07f3520dc551fba8b6970de4c67a187d) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`R2W_FACTOR`](#structcsd__v1__t_1a04224ae2e21c8bc2f32c2d4042c5ba5c) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`WRITE_BL_LEN`](#structcsd__v1__t_1a03e9c501e2819a7827ad1e4b27345cb3) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`WRITE_BL_PARTIAL`](#structcsd__v1__t_1a8a08e6b854b75e65f07bab400b73e24e) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`FILE_FORMAT_GRP`](#structcsd__v1__t_1a11dad313d997eb0b72d5edd7115cb4f8) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`COPY`](#structcsd__v1__t_1a4348986c69f1cc240ca4b03347c56a27) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`PERM_WRITE_PROTECT`](#structcsd__v1__t_1aedfbd77e11c18dbd2a9566597858fc0a) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`TMP_WRITE_PROTECT`](#structcsd__v1__t_1a2f3678aeac3014c0aa546987c414f7ea) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`FILE_FORMAT`](#structcsd__v1__t_1ac0eea7bb835249b5a9447c1ddef2440f) 

see section 5.3.2 in SD-Spec v5.00

#### `public uint8_t `[`CSD_CRC`](#structcsd__v1__t_1a3a4403c0a027b6e42a13761c0851ec87) 

see section 5.3.2 in SD-Spec v5.00

# struct `csd_v2_t` 

CSD register with csd structure version 2.0 see section 5.3.3 in SD-Spec v5.00.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`CSD_STRUCTURE`](#structcsd__v2__t_1a38b0529d1db73a379ce6767fabe17586) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`TAAC`](#structcsd__v2__t_1a2963d69570f831b7801eccb6066252b8) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`NSAC`](#structcsd__v2__t_1aa78b660c7bb7654bdc66d92a4aeb39a3) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`TRAN_SPEED`](#structcsd__v2__t_1a50171e91ea7df314e76444649c980903) | see section 5.3.3 in SD-Spec v5.00
`public uint16_t `[`CCC`](#structcsd__v2__t_1a92d72909802d1be72bce406c46baaa7e) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`READ_BL_LEN`](#structcsd__v2__t_1a4899eccb2b3ca9e4e55976e03e51ce54) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`READ_BL_PARTIAL`](#structcsd__v2__t_1a391dd8b04ec4bc21441ea09d82927649) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`WRITE_BLK_MISALIGN`](#structcsd__v2__t_1a7d7bad3389c11e2c9f40f7ce70e27ce5) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`READ_BLK_MISALIGN`](#structcsd__v2__t_1a00319acef7af3819d29b7b5486cc4065) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`DSR_IMP`](#structcsd__v2__t_1afe4b7421783d33e6c6fddf6648cc6931) | see section 5.3.3 in SD-Spec v5.00
`public uint32_t `[`C_SIZE`](#structcsd__v2__t_1a01a8e05ebb4f60b5d4d53ff5cb3ca52a) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`ERASE_BLK_EN`](#structcsd__v2__t_1a6bf6a73a94e2f678ce0e73883793fe84) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`SECTOR_SIZE`](#structcsd__v2__t_1ad5c7f56213da22656d1746bb35f4ba67) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`WP_GRP_SIZE`](#structcsd__v2__t_1ac9b15eff19ee9164c9629547f713aaac) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`WP_GRP_ENABLE`](#structcsd__v2__t_1a15db4d751377a00e6f5e342b065f9d6a) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`R2W_FACTOR`](#structcsd__v2__t_1a3024edeb549fb42bbebc9400d80d8bcf) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`WRITE_BL_LEN`](#structcsd__v2__t_1a787eebb5074e58abffbabcd4fd80e411) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`WRITE_BL_PARTIAL`](#structcsd__v2__t_1adc7dfd11b2e4cd9aa3076d1ed2011305) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`FILE_FORMAT_GRP`](#structcsd__v2__t_1a4bcf9f27d7ec44fd59e785e43b32318c) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`COPY`](#structcsd__v2__t_1a901475e713b6a9594712d93ddac5f273) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`PERM_WRITE_PROTECT`](#structcsd__v2__t_1ac7b327c5e297b52f473ea272fe70b70b) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`TMP_WRITE_PROTECT`](#structcsd__v2__t_1aa35043b78f507da84abd087927f09329) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`FILE_FORMAT`](#structcsd__v2__t_1ae8c4e7d6b8f7cee0e6979a6778db2d8e) | see section 5.3.3 in SD-Spec v5.00
`public uint8_t `[`CSD_CRC`](#structcsd__v2__t_1a8f9ade6e824891c61f258c8cca1e0808) | see section 5.3.3 in SD-Spec v5.00

## Members

#### `public uint8_t `[`CSD_STRUCTURE`](#structcsd__v2__t_1a38b0529d1db73a379ce6767fabe17586) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`TAAC`](#structcsd__v2__t_1a2963d69570f831b7801eccb6066252b8) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`NSAC`](#structcsd__v2__t_1aa78b660c7bb7654bdc66d92a4aeb39a3) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`TRAN_SPEED`](#structcsd__v2__t_1a50171e91ea7df314e76444649c980903) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint16_t `[`CCC`](#structcsd__v2__t_1a92d72909802d1be72bce406c46baaa7e) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`READ_BL_LEN`](#structcsd__v2__t_1a4899eccb2b3ca9e4e55976e03e51ce54) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`READ_BL_PARTIAL`](#structcsd__v2__t_1a391dd8b04ec4bc21441ea09d82927649) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`WRITE_BLK_MISALIGN`](#structcsd__v2__t_1a7d7bad3389c11e2c9f40f7ce70e27ce5) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`READ_BLK_MISALIGN`](#structcsd__v2__t_1a00319acef7af3819d29b7b5486cc4065) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`DSR_IMP`](#structcsd__v2__t_1afe4b7421783d33e6c6fddf6648cc6931) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint32_t `[`C_SIZE`](#structcsd__v2__t_1a01a8e05ebb4f60b5d4d53ff5cb3ca52a) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`ERASE_BLK_EN`](#structcsd__v2__t_1a6bf6a73a94e2f678ce0e73883793fe84) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`SECTOR_SIZE`](#structcsd__v2__t_1ad5c7f56213da22656d1746bb35f4ba67) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`WP_GRP_SIZE`](#structcsd__v2__t_1ac9b15eff19ee9164c9629547f713aaac) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`WP_GRP_ENABLE`](#structcsd__v2__t_1a15db4d751377a00e6f5e342b065f9d6a) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`R2W_FACTOR`](#structcsd__v2__t_1a3024edeb549fb42bbebc9400d80d8bcf) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`WRITE_BL_LEN`](#structcsd__v2__t_1a787eebb5074e58abffbabcd4fd80e411) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`WRITE_BL_PARTIAL`](#structcsd__v2__t_1adc7dfd11b2e4cd9aa3076d1ed2011305) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`FILE_FORMAT_GRP`](#structcsd__v2__t_1a4bcf9f27d7ec44fd59e785e43b32318c) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`COPY`](#structcsd__v2__t_1a901475e713b6a9594712d93ddac5f273) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`PERM_WRITE_PROTECT`](#structcsd__v2__t_1ac7b327c5e297b52f473ea272fe70b70b) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`TMP_WRITE_PROTECT`](#structcsd__v2__t_1aa35043b78f507da84abd087927f09329) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`FILE_FORMAT`](#structcsd__v2__t_1ae8c4e7d6b8f7cee0e6979a6778db2d8e) 

see section 5.3.3 in SD-Spec v5.00

#### `public uint8_t `[`CSD_CRC`](#structcsd__v2__t_1a8f9ade6e824891c61f258c8cca1e0808) 

see section 5.3.3 in SD-Spec v5.00

# struct `sd_status_t` 

SD status register (see section 4.10.2 in SD-Spec v5.00)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`SIZE_OF_PROTECTED_AREA`](#structsd__status__t_1ad7a7bd7fa41ff89e42b59fcce52e8b24) | see section 4.10.2 in SD-Spec v5.00
`public uint32_t `[`SUS_ADDR`](#structsd__status__t_1ab5bf03f0262f6deb1c9738d064b5b24a) | see section 4.10.2.12 in SD-Spec v5.00
`public uint32_t `[`VSC_AU_SIZE`](#structsd__status__t_1a3ba09ae403b1f9b5524d64d11e12f019) | see section 4.10.2.11 in SD-Spec v5.00
`public uint16_t `[`SD_CARD_TYPE`](#structsd__status__t_1a99efa16c91d65b62b9bf2940cab58b19) | see section 4.10.2 in SD-Spec v5.00
`public uint16_t `[`ERASE_SIZE`](#structsd__status__t_1ab5a1865144f674d778da7360bdd9239b) | see section 4.10.2.5 in SD-Spec v5.00
`public uint8_t `[`SPEED_CLASS`](#structsd__status__t_1a7fe381820afecf3ee37f4511128c7ac7) | see section 4.10.2.2 in SD-Spec v5.00
`public uint8_t `[`PERFORMANCE_MOVE`](#structsd__status__t_1addc5929c7fce05b027dad5adb4fb8386) | see section 4.10.2.3 in SD-Spec v5.00
`public uint8_t `[`VIDEO_SPEED_CLASS`](#structsd__status__t_1ad52ff1df729e5c1b2e7bfb2e196fd16e) | see section 4.10.2.10 in SD-Spec v5.00
`public uint8_t `[`ERASE_TIMEOUT`](#structsd__status__t_1ad4d1f8fa3926a0d4d985c8a172620a20) | see section 4.10.2.6 in SD-Spec v5.00
`public uint8_t `[`ERASE_OFFSET`](#structsd__status__t_1a81b229b5ac0d6601e9716ddef2a08eb2) | see section 4.10.2.7 in SD-Spec v5.00
`public uint8_t `[`UHS_SPEED_GRADE`](#structsd__status__t_1ab79649d098f1682e2b637813b2578431) | see section 4.10.2.8 in SD-Spec v5.00
`public uint8_t `[`UHS_AU_SIZE`](#structsd__status__t_1adb02c657d855e4152ed5d054d182b9e3) | see section 4.10.2.9 in SD-Spec v5.00
`public uint8_t `[`AU_SIZE`](#structsd__status__t_1a06f8add55f3831ea44ee23e8e468ee04) | see section 4.10.2.4 in SD-Spec v5.00
`public uint8_t `[`DAT_BUS_WIDTH`](#structsd__status__t_1a24f96ae9c479db4e54782ef05ff2e74b) | see section 4.10.2 in SD-Spec v5.00
`public uint8_t `[`SECURED_MODE`](#structsd__status__t_1aa4b729d4ffd2bf6afa5b68e2c602f09f) | see section 4.10.2 in SD-Spec v5.00

## Members

#### `public uint32_t `[`SIZE_OF_PROTECTED_AREA`](#structsd__status__t_1ad7a7bd7fa41ff89e42b59fcce52e8b24) 

see section 4.10.2 in SD-Spec v5.00

#### `public uint32_t `[`SUS_ADDR`](#structsd__status__t_1ab5bf03f0262f6deb1c9738d064b5b24a) 

see section 4.10.2.12 in SD-Spec v5.00

#### `public uint32_t `[`VSC_AU_SIZE`](#structsd__status__t_1a3ba09ae403b1f9b5524d64d11e12f019) 

see section 4.10.2.11 in SD-Spec v5.00

#### `public uint16_t `[`SD_CARD_TYPE`](#structsd__status__t_1a99efa16c91d65b62b9bf2940cab58b19) 

see section 4.10.2 in SD-Spec v5.00

#### `public uint16_t `[`ERASE_SIZE`](#structsd__status__t_1ab5a1865144f674d778da7360bdd9239b) 

see section 4.10.2.5 in SD-Spec v5.00

#### `public uint8_t `[`SPEED_CLASS`](#structsd__status__t_1a7fe381820afecf3ee37f4511128c7ac7) 

see section 4.10.2.2 in SD-Spec v5.00

#### `public uint8_t `[`PERFORMANCE_MOVE`](#structsd__status__t_1addc5929c7fce05b027dad5adb4fb8386) 

see section 4.10.2.3 in SD-Spec v5.00

#### `public uint8_t `[`VIDEO_SPEED_CLASS`](#structsd__status__t_1ad52ff1df729e5c1b2e7bfb2e196fd16e) 

see section 4.10.2.10 in SD-Spec v5.00

#### `public uint8_t `[`ERASE_TIMEOUT`](#structsd__status__t_1ad4d1f8fa3926a0d4d985c8a172620a20) 

see section 4.10.2.6 in SD-Spec v5.00

#### `public uint8_t `[`ERASE_OFFSET`](#structsd__status__t_1a81b229b5ac0d6601e9716ddef2a08eb2) 

see section 4.10.2.7 in SD-Spec v5.00

#### `public uint8_t `[`UHS_SPEED_GRADE`](#structsd__status__t_1ab79649d098f1682e2b637813b2578431) 

see section 4.10.2.8 in SD-Spec v5.00

#### `public uint8_t `[`UHS_AU_SIZE`](#structsd__status__t_1adb02c657d855e4152ed5d054d182b9e3) 

see section 4.10.2.9 in SD-Spec v5.00

#### `public uint8_t `[`AU_SIZE`](#structsd__status__t_1a06f8add55f3831ea44ee23e8e468ee04) 

see section 4.10.2.4 in SD-Spec v5.00

#### `public uint8_t `[`DAT_BUS_WIDTH`](#structsd__status__t_1a24f96ae9c479db4e54782ef05ff2e74b) 

see section 4.10.2 in SD-Spec v5.00

#### `public uint8_t `[`SECURED_MODE`](#structsd__status__t_1aa4b729d4ffd2bf6afa5b68e2c602f09f) 

see section 4.10.2 in SD-Spec v5.00

# struct `sdcard_spi_params_t` 

sdcard_spi device params

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi_dev`](#structsdcard__spi__params__t_1a822ebe5ad90665b1eae4a4e528d9a83c) | SPI bus used.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structsdcard__spi__params__t_1a397ffa88c0aa21da5d4d16e8c979981e) | pin connected to the DAT3 sd pad
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structsdcard__spi__params__t_1a32dd7740180bd6bdac22e831df24d779) | pin connected to the CLK sd pad
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mosi`](#structsdcard__spi__params__t_1adfa61501d45606f1444671e610a29e8d) | pin connected to the CMD sd pad
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`miso`](#structsdcard__spi__params__t_1ae86916eaebcb97b9e03139481e72d06d) | pin connected to the DAT0 sd pad
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`power`](#structsdcard__spi__params__t_1ae80539d177b24975ccd614b460e95ab5) | pin that controls sd power circuit
`public bool `[`power_act_high`](#structsdcard__spi__params__t_1a4ef3b257afdc714c8238a6c7d76ab441) | true if card power is enabled by 'power'-pin HIGH

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi_dev`](#structsdcard__spi__params__t_1a822ebe5ad90665b1eae4a4e528d9a83c) 

SPI bus used.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structsdcard__spi__params__t_1a397ffa88c0aa21da5d4d16e8c979981e) 

pin connected to the DAT3 sd pad

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structsdcard__spi__params__t_1a32dd7740180bd6bdac22e831df24d779) 

pin connected to the CLK sd pad

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mosi`](#structsdcard__spi__params__t_1adfa61501d45606f1444671e610a29e8d) 

pin connected to the CMD sd pad

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`miso`](#structsdcard__spi__params__t_1ae86916eaebcb97b9e03139481e72d06d) 

pin connected to the DAT0 sd pad

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`power`](#structsdcard__spi__params__t_1ae80539d177b24975ccd614b460e95ab5) 

pin that controls sd power circuit

#### `public bool `[`power_act_high`](#structsdcard__spi__params__t_1a4ef3b257afdc714c8238a6c7d76ab441) 

true if card power is enabled by 'power'-pin HIGH

# struct `sdcard_spi_t` 

Device descriptor for sdcard_spi.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`sdcard_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__params__t)` * `[`params`](#structsdcard__spi__t_1af096c031f2fbe57d0693ed1e9b9a2349) | parameters for pin and spi config
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structsdcard__spi__t_1a3f6005eee0f9abb5b8a4c3fea98335a2) | active SPI clock speed
`public bool `[`use_block_addr`](#structsdcard__spi__t_1aa284da5a1051982fb674da84faca96c2) | true if block addressing (vs.
`public bool `[`init_done`](#structsdcard__spi__t_1a73a2a8154ea9ea0d52062022a56faab9) | set to true once the init procedure completed successfully
`public `[`sd_version_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdcard__spi_1ga0fc206d1dcbc265c9672c6ec0b24ee14)` `[`card_type`](#structsdcard__spi__t_1af6099190007fff97222af2845cd3a8e7) | version of SD-card
`public int `[`csd_structure`](#structsdcard__spi__t_1ac70bd77158c0ca4bd183b0ee5a53bcb4) | version of the CSD register structure
`public `[`cid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structcid__t)` `[`cid`](#structsdcard__spi__t_1a56182848a06c4bdcb445f36c93de2f6d) | CID register.
`public `[`csd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#unioncsd__t)` `[`csd`](#structsdcard__spi__t_1a33e2b6907d437a20d59fde74250e6703) | CSD register.

## Members

#### `public const `[`sdcard_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__params__t)` * `[`params`](#structsdcard__spi__t_1af096c031f2fbe57d0693ed1e9b9a2349) 

parameters for pin and spi config

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structsdcard__spi__t_1a3f6005eee0f9abb5b8a4c3fea98335a2) 

active SPI clock speed

#### `public bool `[`use_block_addr`](#structsdcard__spi__t_1aa284da5a1051982fb674da84faca96c2) 

true if block addressing (vs.

byte addressing) is used

#### `public bool `[`init_done`](#structsdcard__spi__t_1a73a2a8154ea9ea0d52062022a56faab9) 

set to true once the init procedure completed successfully

#### `public `[`sd_version_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdcard__spi_1ga0fc206d1dcbc265c9672c6ec0b24ee14)` `[`card_type`](#structsdcard__spi__t_1af6099190007fff97222af2845cd3a8e7) 

version of SD-card

#### `public int `[`csd_structure`](#structsdcard__spi__t_1ac70bd77158c0ca4bd183b0ee5a53bcb4) 

version of the CSD register structure

#### `public `[`cid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structcid__t)` `[`cid`](#structsdcard__spi__t_1a56182848a06c4bdcb445f36c93de2f6d) 

CID register.

#### `public `[`csd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#unioncsd__t)` `[`csd`](#structsdcard__spi__t_1a33e2b6907d437a20d59fde74250e6703) 

CSD register.

