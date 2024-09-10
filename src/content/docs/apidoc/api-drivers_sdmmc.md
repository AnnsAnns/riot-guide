---
title: api-drivers_sdmmc.md
description: api-drivers_sdmmc.md
---
# group `drivers_sdmmc` 

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

OverviewThe SDIO/SD/MMC Device API (SDMMC) implements an SD host controller driver that provides a high-level API using a low-level SDIO/SD/MMC peripheral driver for accessing

* MultiMediaCards (MMC) and Embedded MultiMediaCards (eMMC)

* SD Memory Cards (SD Cards) with Standard Capacity (SDSC), High Capacity (SDHC) or Extended Capacity (SDXC).

In the context of this API, the term *Card* refers to either

* a removable card such as SD Memory Card, SDIO Card, Combo Card or MMC Card or

* an embedded device such as Embedded SD Memory Device, Embedded SDIO device, or eMMC device.

The term *slot* refers to the interface for a removable card.

The SDIO/SD/MMC device API (SDMMC) is divided into two parts:

* The high-level API that implements the SD Host Controller driver and allows

* to initialize and identify different types of cards,

* to access them either blockwise or bytewise,

* to get information about the used card, and

* to send single commands or application specific commands to the card.

* The low-level SDIO/SD/MMC peripheral driver of type [sdmmc_driver_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t) implements the low-level functions required by the high-level device API. It has to be implemented for each MCU. The support of the low-level SDIO/SD/MMC peripheral driver is indicated by the MCU or board by the `periph_sdmmc` feature.

Currently the SDIO/SD/MMC Device API supports the following card types:

Card Type   |Support   |Remark
--------- | --------- | ---------
MMC/eMMC in MultiMediaCard mode   |yes   |
MMC/eMMC in SPI mode   |no   |
SD Memory Card in SD mode   |yes   |SDSC, SDHC and SDXC with Default or High Speed
SD Memory Card in SPI mode   |no   |
SDIO in SD mode   |no   |
SDIO in SPI mode   |no   |

Limitations:

* Only one card per SDIO/SD/MMC device is supported.

* eMMCs specific features are not supported.

* UHS-I, UHS-II and UHS-III are not supported.

Features and ModulesA board that uses an MCU with an SDIO/SD/MMC peripheral and has a card slot or device connected has to indicate this as feature `periph_sdmmc` in order to use the SDIO/SD/MMC API or drivers based on it. Furthermore, specific features of the SDIO/SD/MMC peripheral or configurations of the board have to be defined by corresponding features.

These are in detail:

* **`periph_sdmmc`** (`HAS_PERIPH_SDMMC` in Kconfig) indicates that an SDIO/SD/MMC peripheral is present and used by the board. This feature shall be provided by the board configuration.

* **`periph_sdmmc_8bit`** (`HAS_PERIPH_SDMMC_8BIT` in Kconfig) indicates that the SDIO/SD/MMC peripheral supports the 8-bit bus width and at least one component of the board is connected with 8 data lines. This feature shall be provided by the board configuration, if available.

* **`periph_sdmmc_auto_clk`** (`HAS_PERIPH_SDMMC_AUTO_CLK` in Kconfig) indicates that the SDIO/SD/MMC peripheral supports the Auto-CLK feature, i.e. the automatic activation and deactivation of the SD CLK signal when required to save power. This function shall be provided by the MCU if supported.

* **`periph_sdmmc_auto_cmd12`** (`HAS_PERIPH_SDMMC_AUTO_CMD12` in Kconfig) indicates that the SDIO/SD/MMC peripheral supports the Auto-CMD12 feature, i.e. CMD12 is sent automatically to stop the transmission in multiple block operations. This feature shall be provided by the MCU if supported.

* **`periph_sdmmc_hs`** (`HAS_PERIPH_SDMMC_HS` in Kconfig) indicates that the SDIO/SD/MMC peripheral supports the high speed access, that is 50 MHz for SD and 52 MHz for MMC. This feature shall be provided by the MCU if supported.

* **`periph_sdmmc_mmc`** (`HAS_PERIPH_SDMMC_MMC` in Kconfig) indicates that the SDIO/SD/MMC peripheral supports MMC/eMMCs. This feature shall be provided by the MCU if supported.

Some functionalities of the SDIO/SD/MMC Device API must be explicitly enabled via modules:

* **`sdmmc_mmc`** (`MODULE_SDMMC_MMC` in Kconfig) enables the support for MMCs/eMMCs.

* **`periph_sdmmc_8bit`** (`MODULE_PERIPH_SDMMC_8BIT` in Kconfig) enables the 8-bit bus width support. It requires the corresponding feature of the board.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SDMMC_CPU_DMA_REQUIREMENTS`](#group__drivers__sdmmc_1ga59763349a78797e79ed4e3a847f63430)            | CPU-specific requirements for SDIO/SD/MMC buffers.
`define `[`sdmmc_buf_t`](#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1)            | Instantiation type for SDIO/SD/MMC buffers.
`define `[`SDMMC_SDHC_BLOCK_SIZE`](#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)            | Size of a single data block on SDHC/SDXC Cards in bytes.
`define `[`SDMMC_CARD_TYPE_SD`](#group__drivers__sdmmc_1ga4cd221fd237ecafca7cc1a8fafcf96e5)            | Mask for any type of SD Memory card.
`define `[`SDMMC_NUMOF`](#group__drivers__sdmmc_1ga933a86268a5bd605c19091dbf12b340f)            | Number of SDIO/SD/MMC devices defined.
`enum `[`sdmmc_card_type_t`](#group__drivers__sdmmc_1ga8922cf164eae071d1669d245d710cd8e)            | SDIO/SD/MMC Card types.
`enum `[`sdmmc_bus_width_t`](#group__drivers__sdmmc_1gaf7703d21c829e1ab436272c69f718706)            | SDIO/SD/MMC Card data bus widths.
`enum `[`sdmmc_clock_rate_t`](#group__drivers__sdmmc_1ga716a46ecf3e8ad8be8401d617ea36a01)            | SDIO/SD/MMC Card clock rate types.
`enum `[`sdmmc_xfer_type_t`](#group__drivers__sdmmc_1ga11a2975a87e514babd71fff706744564)            | Data transfer types.
`enum `[`sdmmc_auto_cmd_t`](#group__drivers__sdmmc_1ga19e7a6af5863a084576cd23179a6003f)            | Auto Command features supported by the SDIO/SD/MMC peripheral.
`enum `[`sdmmc_event_t`](#group__drivers__sdmmc_1gacf3d8d33331e1ae9810f56d2410ea524)            | Events generated by SDIO/SD/MMC high level API.
`public inline static `[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * `[`sdmmc_get_dev`](#group__drivers__sdmmc_1gad1cac412841008c4bd707ca17be131ca)`(unsigned num)`            | Retrieve SDIO/SD/MMC device descriptor reference from device index.
`public inline static void `[`sdmmc_init`](#group__drivers__sdmmc_1ga4c14dfd4d1ac66a3be2db55559750f9f)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev)`            | Basic initialization of the given SDIO/SD/MMC device.
`public int `[`sdmmc_send_cmd`](#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` cmd_idx,uint32_t arg,`[`sdmmc_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga49041beb07426755c85face87e70e5f2)` resp_type,uint32_t * resp)`            | Send command to SDIO/SD/MMC Card and optionally wait for response.
`public int `[`sdmmc_send_acmd`](#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` cmd_idx,uint32_t arg,`[`sdmmc_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga49041beb07426755c85face87e70e5f2)` resp_type,uint32_t * resp)`            | Send application specific command optionally wait for response.
`public int `[`sdmmc_card_init`](#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev)`            | Card Initialization and Identification.
`public int `[`sdmmc_xfer`](#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` cmd_idx,uint32_t arg,uint16_t block_size,uint16_t block_num,const void * data_wr,void * data_rd,uint16_t * done)`            | Perform a data transfer with the selected card or embedded device.
`public int `[`sdmmc_read_blocks`](#group__drivers__sdmmc_1ga3438a6d03cd98606a885462800e3ef89)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,uint32_t block_addr,uint16_t block_size,uint16_t block_num,void * data,uint16_t * done)`            | Read a number of blocks.
`public int `[`sdmmc_write_blocks`](#group__drivers__sdmmc_1gab27d2bdceee691fc83f3d1f1eb35da48)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,uint32_t block_addr,uint16_t block_size,uint16_t block_num,const void * data,uint16_t * done)`            | Write a number of blocks.
`public int `[`sdmmc_erase_blocks`](#group__drivers__sdmmc_1ga560f0e27ae75ac8278bbf2cc3ff08452)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,uint32_t block_addr,uint16_t block_num)`            | Erase a number of blocks.
`public int `[`sdmmc_read_sds`](#group__drivers__sdmmc_1ga810e71f2ca98ae6f15c7c711633a26a4)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_sd_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__sd__status__t)` * sds)`            | Read SD Status Register.
`public uint64_t `[`sdmmc_get_capacity`](#group__drivers__sdmmc_1ga9ca503c8a9ae87e2f22b2f56dcb8206e)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev)`            | Get Capacity of SD/MMC Card.
`struct `[`sdmmc_sd_status_t`](#structsdmmc__sd__status__t) | SD Status (SD Memory Card only)
`struct `[`sdmmc_cid_sd_t`](#structsdmmc__cid__sd__t) | CID register structure (SD Memory Cards)
`struct `[`sdmmc_cid_mmc_t`](#structsdmmc__cid__mmc__t) | CID register structure (MMC)
`struct `[`sdmmc_csd_v1_t`](#structsdmmc__csd__v1__t) | CSD register structure Version 1.0.
`struct `[`sdmmc_csd_v2_t`](#structsdmmc__csd__v2__t) | CSD register structure Version 2.0 and Version 3.0.
`struct `[`sdmmc_csd_mmc_t`](#structsdmmc__csd__mmc__t) | CSD register structure for MMC.
`struct `[`sdmmc_ext_csd_t`](#structsdmmc__ext__csd__t) | Extended CSD (EXT_CSD) register structure (MMC only)
`struct `[`sdmmc_scr_t`](#structsdmmc__scr__t) | SCR register structure (SD Memory Card only)
`struct `[`sdmmc_xfer_desc_t`](#structsdmmc__xfer__desc__t) | Transfer descriptor.
`struct `[`sdmmc_driver_t`](#structsdmmc__driver__t) | Low-level SDIO/SD/MMC peripheral driver.
`struct `[`sdmmc_dev`](#structsdmmc__dev) | SDIO/SD/MMC device descriptor.
`union `[`sdmmc_card_status_t`](#unionsdmmc__card__status__t) | SD/MMC Card status as structure.
`union `[`sdmmc_cid_t`](#unionsdmmc__cid__t) | CID register structure (SD Memory and MMC Cards)
`union `[`sdmmc_csd_t`](#unionsdmmc__csd__t) | CSD register (SD Memory Card and MMC)

## Members

#### `define `[`SDMMC_CPU_DMA_REQUIREMENTS`](#group__drivers__sdmmc_1ga59763349a78797e79ed4e3a847f63430) 

CPU-specific requirements for SDIO/SD/MMC buffers.

Can be overridden by periph_cpu if needed by the SDMMC/SDIO peripheral. Example usage: 
```cpp
SDMMC_CPU_DMA_REQUIREMENTS uint8_t buffer[64];
```

#### `define `[`sdmmc_buf_t`](#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) 

Instantiation type for SDIO/SD/MMC buffers.

Example usage: 
```cpp
sdmmc_buf_t buffer[SDMMC_SDHC_BLOCK_SIZE];
```

#### `define `[`SDMMC_SDHC_BLOCK_SIZE`](#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80) 

Size of a single data block on SDHC/SDXC Cards in bytes.

The size of a data block depend on type and mode of the card. SDSC/SDXC use a fix size of 512 bytes.

#### `define `[`SDMMC_CARD_TYPE_SD`](#group__drivers__sdmmc_1ga4cd221fd237ecafca7cc1a8fafcf96e5) 

Mask for any type of SD Memory card.

#### `define `[`SDMMC_NUMOF`](#group__drivers__sdmmc_1ga933a86268a5bd605c19091dbf12b340f) 

Number of SDIO/SD/MMC devices defined.

#### `enum `[`sdmmc_card_type_t`](#group__drivers__sdmmc_1ga8922cf164eae071d1669d245d710cd8e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDMMC_CARD_TYPE_UNKNOWN            | Card type unknown.
SDMMC_CARD_TYPE_SDSC_V1            | SD Memory Card Standard Capacity (SDSC) Version 1.x.
SDMMC_CARD_TYPE_SDSC_V2_V3            | SD Memory Card Standard Capacity (SDSC) Version 2.x+.
SDMMC_CARD_TYPE_SDHC_SDXC            | SD Memory Card High or Extended Capacity (SDHC/SDXC)
SDMMC_CARD_TYPE_SDIO            | SDIO Card.
SDMMC_CARD_TYPE_MMC            | MultiMedia Card.

SDIO/SD/MMC Card types.

To be able to specify a Combo card (combined SD Memory and SDIO card), the enumeration values are defined bitwise so that they can be ORed to represent a Combo card with different versions of the SD Memory part. For example, `SDMMC_CARD_TYPE_SDIO | SDMMC_CARD_TYPE_SDSC_V2_V3` represents a Combo card with SDIO function and SD Memory Card Standard Capacity (SDSC) Version 2.x+.

#### `enum `[`sdmmc_bus_width_t`](#group__drivers__sdmmc_1gaf7703d21c829e1ab436272c69f718706) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDMMC_BUS_WIDTH_1BIT            | Data bus width is 1 bit (default)
SDMMC_BUS_WIDTH_4BIT            | Data bus width is 4 bit.
SDMMC_BUS_WIDTH_8BIT            | Data bus width is 8 bit.

SDIO/SD/MMC Card data bus widths.

Possible bus widths are given as integer values as defined in SD Status register and the SCR register for SD Cards.

The values differ from the bus widths used in ACMD6 for SD Cards and the CCC register in SDIO Cards.

**See also**: Physical Layer Simplified Specification Version 9.00, 4.10.2, Table 4-44, SD Status [[sdcard.org](https://www.sdcard.org)]

#### `enum `[`sdmmc_clock_rate_t`](#group__drivers__sdmmc_1ga716a46ecf3e8ad8be8401d617ea36a01) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDMMC_CLK_400K            | Identification Mode f_OD (400 kHz)
SDMMC_CLK_20M            | MMC Card in Data Transfer Mode (Backward Compatibility)
SDMMC_CLK_25M            | SD/SDIO Card in Data Transfer Mode (Default Speed)
SDMMC_CLK_26M            | MMC/eMMC Card in Data Transfer Mode (Default Speed)
SDMMC_CLK_50M            | SD/SDIO Card in Data Transfer Mode (High Speed)
SDMMC_CLK_52M            | MMC/eMMC in Data Transfer Mode (High Speed)

SDIO/SD/MMC Card clock rate types.

Identifies the clock frequency to be used. The clock frequency in identification mode f_OD (Open Drain mode) is fixed and is f_OD = 400 kHz. The actual clock frequency in data transfer mode f_PP (Push-Pull mode) depends on the SDIO/SD/MMC device and the card used. The low-level SDIO/SD/MMC peripheral driver sets the actual clock rate in function [sdmmc_driver_t::set_clock_rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a8279b6dcc834387863c42f72ba062091).

#### `enum `[`sdmmc_xfer_type_t`](#group__drivers__sdmmc_1ga11a2975a87e514babd71fff706744564) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDMMC_MULTIBYTE            | Transfer 1 to READ_BL_LEN/WRITE_BL_LEN bytes.
SDMMC_BLOCK            | Transfer block with size of READ_BL_LEN/WRITE_BL_LEN.
SDMMC_STREAM            | Transfer until CMD12 is sent (MMC and 1-bit bus only)

Data transfer types.

#### `enum `[`sdmmc_auto_cmd_t`](#group__drivers__sdmmc_1ga19e7a6af5863a084576cd23179a6003f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDMMC_AUTO_CMD_NONE            | 
SDMMC_AUTO_CMD12            | 
SDMMC_AUTO_CMD23            | 
SDMMC_AUTO_CMD_BOTH            | 

Auto Command features supported by the SDIO/SD/MMC peripheral.

Most SDIO/SD/MMC peripherals support the Auto-Command feature for CMD12 and CMD23. The low-level SDIO/SD/MMC peripheral driver defines in [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) which Auto-Command features are supported by the peripheral. To be able to specify a combination of these features, the enumeration values are defined bitwise.

#### `enum `[`sdmmc_event_t`](#group__drivers__sdmmc_1gacf3d8d33331e1ae9810f56d2410ea524) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDMMC_EVENT_CARD_INSERTED            | 
SDMMC_EVENT_CARD_REMOVED            | 

Events generated by SDIO/SD/MMC high level API.

#### `public inline static `[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * `[`sdmmc_get_dev`](#group__drivers__sdmmc_1gad1cac412841008c4bd707ca17be131ca)`(unsigned num)` 

Retrieve SDIO/SD/MMC device descriptor reference from device index.

The function converts the device index to the corresponding SDIO/SD/MMC device descriptor. See also [sdmmc_devs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga690cb80d57f13b59ab8a141f2fffe9b6).

#### Parameters
* `num` SDIO/SD/MMC peripheral index

#### Parameters
* `pointer` to the SDIO/SD/MMC device descriptor at index `num` on success 

* `NULL` if `num` is greater than the number of SDIO/SD/MMC device descriptors

#### `public inline static void `[`sdmmc_init`](#group__drivers__sdmmc_1ga4c14dfd4d1ac66a3be2db55559750f9f)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev)` 

Basic initialization of the given SDIO/SD/MMC device.

The function calls the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) for the basic initialization of the SDIO/SD/MMC peripheral including the configuration of used pins.

If the `auto_init` module is enabled, it is called automatically during the startup. Otherwise, it has to be called before the SDIO/SD/MMC device is used for the first time.

Errors like configuration parameter problems are not signaled by return values, but by using the `[assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53)`.

**See also**: [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955)

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to initialize

#### `public int `[`sdmmc_send_cmd`](#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` cmd_idx,uint32_t arg,`[`sdmmc_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga49041beb07426755c85face87e70e5f2)` resp_type,uint32_t * resp)` 

Send command to SDIO/SD/MMC Card and optionally wait for response.

Send the command `cmd_idx` with argument `arg` to the SDIO/SD/MMC card. `resp_type` specifies the type of the response expected. Addressed (point-to-point) commands are sent to the card that is currently selected.

This function just calls the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a7facc12cc04c7c219016103be3e5e2dd).

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

For application specific commands, the [sdmmc_send_acmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad) function MUST to be used.

The response is stored word-wise in host byte order in the buffer provided by `resp` as follows:

* `resp_type` = SDMMC_NO_R (No Response): `resp` can be NULL

* `resp_tpye` = SDMMC_R2 (Long Response): `resp` = { R[127:96], R[95:64], R[63:32], R[31:0] }

* `resp_type` = anything else (Short Response): `resp` = { R[39:8] }

The buffer provided by `resp` can be NULL if the response is not needed.

R3 does not use CRC7 in CRC field but a fixed value of `0b111111`. The low-level SDIO/SD/MMC peripheral driver must not check the CRC field for this response.

**See also**: [sdmmc_driver_t::send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a7facc12cc04c7c219016103be3e5e2dd)

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `cmd_idx` Command index 

* `arg` Command argument 

* `resp_type` Type of response expected 

* `resp` Buffer of 32-bit words to store the response if needed, otherwise NULL

#### Parameters
* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support the command or is in wrong state 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EBADMSG` on CRC7 error in response 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_send_acmd`](#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` cmd_idx,uint32_t arg,`[`sdmmc_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga49041beb07426755c85face87e70e5f2)` resp_type,uint32_t * resp)` 

Send application specific command optionally wait for response.

Send an application specific command `cmd_idx` with argument `arg` to the SDIO/SD/MMC Card. This function is a convenience function that uses the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a7facc12cc04c7c219016103be3e5e2dd). It just sends CMD55 before sending the command with index `cmd_idx` to the card. Addressed (point-to-point) commands are sent to the card that is currently selected.

Instead of using this function, the following could also be used: 
```cpp
[sdmmc_send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)(dev, [SDMMC_CMD55](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gga0cb33b64a4279b29e816220206cc46b5a7c9b48c91a7730703289fe5bbcecffd6), RCA, [SDMMC_R1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gga49041beb07426755c85face87e70e5f2ad96c03dff39e886ceac377d0f0ab07ee), NULL);
[sdmmc_send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)(dev, cmd_idx & ~[SDMMC_ACMD_PREFIX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga975c5c3e02538be7f02d1968f9939f61), arg, resp_type, resp);
```

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

The command index must be an ACMD command index, i.e. the command index ORed with [SDMMC_ACMD_PREFIX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga975c5c3e02538be7f02d1968f9939f61). Otherwise the function fails because of an assertion.

`resp_type` specifies the response expected.

The response is stored word-wise in host byte order in the buffer provided by `resp` as follows:

* `resp_type` = SDMMC_NO_R (No Response): `resp` can be NULL

* `resp_tpye` = SDMMC_R2 (Long Response): `resp` = { R[127:96], R[95:64], R[63:32], R[31:0] }

* `resp_type` = anything else (Short Response): `resp` = { R[39:8] }

The buffer provided by `resp` can be NULL if the response is not needed. However, the low-level SDIO/SD/MMC peripheral driver must receive the expected response, but does not store it in `resp` in that case.

R3 does not use CRC7 in CRC field but a fixed value of `0b111111`. The low-level SDIO/SD/MMC peripheral driver must not check the CRC field for this response.

`dev` must not be `NULL`. `cmd_idx` must be in range 0 to 63.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `cmd_idx` Command index of an application specific command 

* `arg` Command argument 

* `resp_type` Type of response expected 

* `resp` Buffer of 32-bit words to store the response

#### Parameters
* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support the command or is in wrong state 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EBADMSG` on CRC7 error in response 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_card_init`](#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev)` 

Card Initialization and Identification.

This function identifies the type of used SDIO/SD/MMC Cards and initializes them according to the standardized procedure specified in:

* Physical Layer Simplified Specification Version 9.00, Section 4.2.3 Card Initialization and Identification Process, pp. 43 [[sdcard.org](https://www.sdcard.org)]

* SDIO Simplified Specification Version 3.00, Section 3.1.2 Initialization by I/O Aware Host, pp. 17 [[sdcard.org](https://www.sdcard.org)]

* SD Host Controller Simplified Specification Version 4.20, Section 3.6 Card Initialization and Identification (for SD I/F), pp. 160 [[sdcard.org](https://www.sdcard.org)]

* JEDEC Standard No. JESD84-B42, MultiMediaCard (MMC) Electrical Standard, High Capacity (MMCA, 4.2), Section 7.2 Card Identification Mode, p. 24 and Figure 16 on p. 16 [[jedec.org](https://www.jedec.org)]

Identified card types are:

* SD Memory Cards with Standard Capacity (SDSC) Version 1.x, Version 2.x+

* SD Memory Cards with High or Extended Capacity (SDHC/SDXC)

* SDIO Cards, not supported yet

* Combined SDIO/SD Memory Cards (Combo Cards), SDIO part not supported yet

* MultiMedia Cards (MMC) and Embedded Multimedia Cards (eMMC)

If the low-level SDIO/SD/MMC peripheral driver defines its own [sdmmc_driver_t::card_init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb) function, this function is used instead.
 However, the low-level SDIO/SD/MMC peripheral driver should define its own [sdmmc_driver_t::card_init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb) function only in very special cases, e.g. when special hardware handling is required. Otherwise it is strongly recommended to set [sdmmc_driver_t::card_init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb) to `NULL` and to use the default procedure implemented by [sdmmc_send_acmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad).

**See also**: [sdmmc_driver_t::card_init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb)

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used

#### Parameters
* `0` on success 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card is not supported or can't operate under supplied voltage 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on card initialization and identification timeout 

* `-EBADMSG` on CRC7 error 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_xfer`](#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` cmd_idx,uint32_t arg,uint16_t block_size,uint16_t block_num,const void * data_wr,void * data_rd,uint16_t * done)` 

Perform a data transfer with the selected card or embedded device.

This high-level SDIO/SD/MMC device API function performs a read or write data transfer either

* block-oriented with a number of blocks of the same size (SD and MMC)

* as stream until the stop command (CMD12) is sent by the host (MMC only)

* in byte or multi-byte mode (SDIO only)

The possible block sizes `block_size` depend on the card and mode used. For block-oriented data transfers, the block size is usually 512 bytes, but may differ for MMCs and SD Cards with Standard Capacity Version 1.x (SDSC):

* MMC: block size can be 1, 2, 4, ..., 4096 bytes (as power of 2)

* SDSC V1.x: block size can be 512, 1024 or 2048 bytes

* SDSC V2.x and later, SDSC/SDHC: block size is 512 bytes

The block size for SDIO transfers in byte or multi-byte mode, if supported, can be in the range of 1 to 512 bytes. The number of blocks `block_num` MUST be 1 in this case.

For a data transfer as a stream, the block size `block_size` and the number of blocks `block_num` are 0.

Some block-oriented data transfers such as reading the SD Card Configuration register (SCR) with ACMD51 may use the [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152) function with smaller block size, for example only 8 bytes. The low-level SDIO/SD/MMC peripheral driver MUST support block sizes smaller than the usual block size used for block-oriented operations.

The [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152) function uses the low-level SDIO/SD/MMC peripheral driver functions [sdmmc_driver_t::xfer_prepare](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a991b2731d78787fadd6c50ab7af20470) to prepare the data transfer, [sdmmc_driver_t::xfer_execute](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a332bc0cee951ac6c393c553a460215d5) to perform the data transfer, and [sdmmc_driver_t::xfer_finish](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1accc93e4916aa1e023308b1b1bf03a762) to complete the data transfer. In detail: 
```cpp
_wait_for_ready(dev);
if (cmd_idx & [SDMMC_ACMD_PREFIX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga975c5c3e02538be7f02d1968f9939f61)) {
    [sdmmc_send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)(dev, [SDMMC_CMD55](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gga0cb33b64a4279b29e816220206cc46b5a7c9b48c91a7730703289fe5bbcecffd6), ...);
}
dev->driver->xfer_prepare(dev, xfer);
[sdmmc_send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)(dev, cmd_idx, ...);
dev->driver->xfer_execute(dev, xfer, ...);
if (block_num > 1) {
   [sdmmc_send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e)(dev, [SDMMC_CMD12](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gga0cb33b64a4279b29e816220206cc46b5a8e5c3a7c5a30d304ef8afea03998db58), ...);
}
dev->driver->xfer_finish(dev, xfer);
```
`xfer` is the transfer descriptor of type [sdmmc_xfer_desc_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__xfer__desc__t) that contains all transfer parameters.

If the parameter `done` is not `NULL`, the function returns the number of transferred blocks.

The buffers specified by `data_wr` and `data_rd` may need to be word-aligned depending on CPU-specific requirements. [sdmmc_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) or [SDMMC_CPU_DMA_REQUIREMENTS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga59763349a78797e79ed4e3a847f63430) have to be used to define such buffers: 
```cpp
[sdmmc_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) buffer[[SDMMC_SDHC_BLOCK_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)];
...
SDMMC_CPU_DMA_REQUIREMENTS uint8_t buffer[[SDMMC_SDHC_BLOCK_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)];
```

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

**See also**: [sdmmc_driver_t::xfer_prepare](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a991b2731d78787fadd6c50ab7af20470), [sdmmc_driver_t::xfer_execute](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a332bc0cee951ac6c393c553a460215d5) and [sdmmc_driver_t::xfer_finish](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1accc93e4916aa1e023308b1b1bf03a762)

`dev` must not be `NULL`. `data_rd` must not be `NULL` for read transfers and `data_wr` must not be `NULL` for write transfers.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `cmd_idx` Command index or application specific command index 

* `arg` Command argument 

* `block_size` Block size dependent on card and mode used

* 512 bytes for block-oriented transfers (SDSC V2.x/SDHC/SDXC)

* 1, 2, 4, ... 4096 for block-oriented transfers (MMC)

* 512, 1024, 2048 for block-oriented transfers (SDSC V1.x)

* 1...512 bytes in byte/multibyte mode (SDIO)

* 0 in stream mode (SDIO) 

* `block_num` Number of blocks:

* 1, ... for block-oriented transfers (SD Card/MMC)

* 1 in byte/multibyte mode (SDIO)

* 0 in stream mode (MMC) 

* `data_wr` Buffer with data to write in write transfers, NULL otherwise 

* `data_rd` Buffer for data to read in read transfers, NULL otherwise 

* `done` Number of transferred blocks, can be `NULL`

#### Parameters
* `0` on success 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support a used command or is in wrong state 

* `-EBUSY` if card is busy 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EINVAL` on invalid transfer parameters 

* `-EBADMSG` on CRC7 error 

* `-ENOMEM` on RX FIFO overflow or TX FIFO underrun error 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_read_blocks`](#group__drivers__sdmmc_1ga3438a6d03cd98606a885462800e3ef89)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,uint32_t block_addr,uint16_t block_size,uint16_t block_num,void * data,uint16_t * done)` 

Read a number of blocks.

Read `block_num` blocks with size `block_size` from `dev` starting at block address `block_addr` to buffer `data`.

The starting block address is always specified as block address independent on the actual addressing scheme of used card. The driver takes care of mapping to byte addressing if needed.

If the parameter `done` is not `NULL`, the function returns the number of read blocks.

The buffer `data` may need to be word-aligned depending on CPU-specific requirements. [sdmmc_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) or [SDMMC_CPU_DMA_REQUIREMENTS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga59763349a78797e79ed4e3a847f63430) have to be used to define the buffer: 
```cpp
[sdmmc_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) buffer[[SDMMC_SDHC_BLOCK_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)];
...
SDMMC_CPU_DMA_REQUIREMENTS uint8_t buffer[[SDMMC_SDHC_BLOCK_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)];
```

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

`dev` and `data` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `block_addr` Start address to read from given as block address 

* `block_size` Block size dependent on card and mode used

* 512 bytes for block-oriented transfers (SDSC V2.x/SDHC/SDXC)

* 1, 2, 4, ... 4096 for block-oriented transfers (MMC)

* 512, 1024, 2048 for block-oriented transfers (SDSC V1.x)

* 1...512 bytes in byte/multibyte mode (SDIO only)

* 0 in stream mode (MMC only) 

* `block_num` Number of blocks:

* 1, ... for block-oriented transfers (SD Card/MMC)

* 1 in byte/multibyte mode (SDIO only)

* 0 in stream mode (MMC only) 

* `data` Buffer for read data 

* `done` Number of read blocks, can be `NULL`

#### Parameters
* `0` on success, `block_num` blocks were read successfully 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support a used command or is in wrong state 

* `-EBUSY` if card is busy 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EINVAL` on invalid transfer parameters 

* `-EBADMSG` on CRC7 error 

* `-ENOMEM` on RX FIFO overflow error 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_write_blocks`](#group__drivers__sdmmc_1gab27d2bdceee691fc83f3d1f1eb35da48)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,uint32_t block_addr,uint16_t block_size,uint16_t block_num,const void * data,uint16_t * done)` 

Write a number of blocks.

Write `block_num` blocks with size `block_size` to `dev` starting at block address `block_addr` from buffer `data`.

The starting block address is always specified as block address independent on the actual addressing scheme of used card. The driver takes care of mapping to byte addressing if needed.

If the parameter `done` is not `NULL`, the function returns the number of written blocks.

The buffer `data` may need to be word-aligned depending on CPU-specific requirements. [sdmmc_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) or [SDMMC_CPU_DMA_REQUIREMENTS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga59763349a78797e79ed4e3a847f63430) have to be used to define the buffer: 
```cpp
[sdmmc_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga31a80946b0086e3706ae1db211173ec1) buffer[[SDMMC_SDHC_BLOCK_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)];
...
SDMMC_CPU_DMA_REQUIREMENTS uint8_t buffer[[SDMMC_SDHC_BLOCK_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaded840800aee09f9a74c6155ef039c80)];
```

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

`dev` and `data` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `block_addr` Start address to write to given as block address 

* `block_size` Block size dependent on card and mode used

* 512 bytes for block-oriented transfers (SDSC V2.x/SDHC/SDXC)

* 1, 2, 4, ... 4096 for block-oriented transfers (MMC)

* 512, 1024, 2048 for block-oriented transfers (SDSC V1.x)

* 1...512 bytes in byte/multibyte mode (SDIO only)

* 0 in stream mode (MMC only) 

* `block_num` Number of blocks:

* 1, ... for block-oriented transfers (SD and MMC)

* 1 in byte/multibyte mode (SDIO only)

* 0 in stream mode (MMC only) 

* `data` Buffer with data to write 

* `done` Number of blocks written, can be `NULL`

#### Parameters
* `0` on success, `block_num` blocks were read successfully 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support a used command or is in wrong state 

* `-EBUSY` if card is busy 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EINVAL` on invalid transfer parameters 

* `-EBADMSG` on CRC7 error 

* `-ENOMEM` on TX FIFO underrun error 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_erase_blocks`](#group__drivers__sdmmc_1ga560f0e27ae75ac8278bbf2cc3ff08452)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,uint32_t block_addr,uint16_t block_num)` 

Erase a number of blocks.

Erase `block_num` blocks starting at block address `block_addr` on SD/MMC Card device.

The starting block address is always specified as block address independent on the actual addressing scheme of used card. The driver takes care of mapping to byte addressing if needed.

This function is only available for SD Memory Cards, MMC Cards or the SD Memory Card portion of a combined SDIO/SD Memory Card (Combo Card). Calling this function for a SDIO only card returns the `-ENOTSUP` error.

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

`dev` must not be `NULL`. `block_num` has to be greater than 0.

#### Parameters
* `dev` SD/MMC device to be used 

* `block_addr` Start address for erase given as block address 

* `block_num` Number of blocks to be erased

#### Parameters
* `0` on success, `block_num` blocks were erased successfully 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support erase operation or a command used 

* `-EBUSY` if card is busy 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EBADMSG` on CRC7 error in response 

* `-EINVAL` on invalid erase parameters 

* `-EIO` on not further specified error incl. hardware errors

#### `public int `[`sdmmc_read_sds`](#group__drivers__sdmmc_1ga810e71f2ca98ae6f15c7c711633a26a4)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev,`[`sdmmc_sd_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__sd__status__t)` * sds)` 

Read SD Status Register.

Read the SD Status register of a SD Memory Card using ACMD13 and stores the results in the `sds` of type [sdmmc_sd_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__sd__status__t).

This function is only available for SD Memory Cards or the SD Memory Card portion of a combined SDIO/SD Memory Card (Combo Card). Calling this function for a SDIO only card returns the `-ENOTSUP` error.

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

`dev` and `sds` must not be `NULL`.

#### Parameters
* `dev` SD device to be used 

* `sds` SD Status register content

#### Parameters
* `0` on success 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support the operation 

* `-EBUSY` if card is busy 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EINVAL` on invalid transfer parameters 

* `-EBADMSG` on CRC7 error 

* `-ENOMEM` on RX FIFO overflow error 

* `-EIO` on not further specified error incl. hardware errors

#### `public uint64_t `[`sdmmc_get_capacity`](#group__drivers__sdmmc_1ga9ca503c8a9ae87e2f22b2f56dcb8206e)`(`[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * dev)` 

Get Capacity of SD/MMC Card.

Get the capacity of a SD/MMC Card device.

This function is only available for SD Memory Cards, MMC Cards or the SD Memory Card portion of a combined SDIO/SD Memory Card (Combo Card). Calling this function for a SDIO only card returns the `-ENOTSUP` error.

[sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is called implicitly if necessary.

`dev` must not be `NULL`.

#### Parameters
* `dev` SD/MMC device to be used

#### Returns
the capacity in in byte or 0 on error

# struct `sdmmc_sd_status_t` 

SD Status (SD Memory Card only)

SD Status has a size of 512 bits and contains the status of SD Memory Card features. It is not supported by MMCs and SDIO Cards. In Combo Cards, it reflects the status of the SD Memory Card portion.

Members are sorted by types to reduce the required RAM size.

**See also**: Physical Layer Simplified Specification Version 9.00, Section 4.10.2, Table 4-44 [[sdcard.org](https://www.sdcard.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`SIZE_OF_PROTECTED_AREA`](#structsdmmc__sd__status__t_1a62dea695349a8f43c475e9a941860824) | [479:448] Section 4.10.2.1
`public uint32_t `[`SUS_ADDR`](#structsdmmc__sd__status__t_1adff520334470633950e25e9e416de008) | [367:346] Section 4.10.2.12, Table 4-57
`public uint32_t `[`VSC_AU_SIZE`](#structsdmmc__sd__status__t_1a49de18820a97a62cfb505f49307ad48e) | [377:368] Section 4.10.2.11, Table 4-56
`public uint16_t `[`SD_CARD_TYPE`](#structsdmmc__sd__status__t_1a13d9ef199e3f6022525089e10492c4ac) | [495:480] Section 4.10.2, Table 4-44
`public uint16_t `[`ERASE_SIZE`](#structsdmmc__sd__status__t_1adf3ef8426f96c5143d133a6af13c0010) | [423:408] Section 4.10.2.5, Table 4-49
`public uint8_t `[`SPEED_CLASS`](#structsdmmc__sd__status__t_1ae0f698c05928cea6625138e0d1308307) | [447:440] Section 4.10.2.2, Table 4-45
`public uint8_t `[`PERFORMANCE_MOVE`](#structsdmmc__sd__status__t_1a856908d4d137e076c838a83d2fde222b) | [439:432] Section 4.10.2.3, Table 4-46
`public uint8_t `[`VIDEO_SPEED_CLASS`](#structsdmmc__sd__status__t_1a57623e3a037aa87c3750ddb26985ceac) | [391:384] Section 4.10.2.10, Table 4-54
`public uint8_t `[`ERASE_TIMEOUT`](#structsdmmc__sd__status__t_1a739b24cfb2d94a396c7fabdc666d0b6c) | [407:402] Section 4.10.2.6, Table 4-50
`public uint8_t `[`ERASE_OFFSET`](#structsdmmc__sd__status__t_1a90e7b2e2ced76d387b8b57ca1f68f9f1) | [401:400] Section 4.10.2.7, Table 4-51
`public uint8_t `[`UHS_SPEED_GRADE`](#structsdmmc__sd__status__t_1afca2f2dcf8d6773e94b0fdf14741753e) | [399:396] Section 4.10.2.8, Table 4-52
`public uint8_t `[`UHS_AU_SIZE`](#structsdmmc__sd__status__t_1aedf0530c49f5ae46653632eeb458d02e) | [395:392] Section 4.10.2.9, Table 4-3
`public uint8_t `[`AU_SIZE`](#structsdmmc__sd__status__t_1a4026ef12682ef6e0dbcc856e6acd81ec) | [431:428] Section 4.10.2.4, Table 4-47
`public uint8_t `[`DAT_BUS_WIDTH`](#structsdmmc__sd__status__t_1aece2943b9edeaf3fac785c34361b440b) | [511:510] Section 4.10.2, Table 4-44
`public uint8_t `[`SECURED_MODE`](#structsdmmc__sd__status__t_1ad488604786da116914edc92e3afd186c) | [509] Section 4.10.2, Table 4-44

## Members

#### `public uint32_t `[`SIZE_OF_PROTECTED_AREA`](#structsdmmc__sd__status__t_1a62dea695349a8f43c475e9a941860824) 

[479:448] Section 4.10.2.1

#### `public uint32_t `[`SUS_ADDR`](#structsdmmc__sd__status__t_1adff520334470633950e25e9e416de008) 

[367:346] Section 4.10.2.12, Table 4-57

#### `public uint32_t `[`VSC_AU_SIZE`](#structsdmmc__sd__status__t_1a49de18820a97a62cfb505f49307ad48e) 

[377:368] Section 4.10.2.11, Table 4-56

#### `public uint16_t `[`SD_CARD_TYPE`](#structsdmmc__sd__status__t_1a13d9ef199e3f6022525089e10492c4ac) 

[495:480] Section 4.10.2, Table 4-44

#### `public uint16_t `[`ERASE_SIZE`](#structsdmmc__sd__status__t_1adf3ef8426f96c5143d133a6af13c0010) 

[423:408] Section 4.10.2.5, Table 4-49

#### `public uint8_t `[`SPEED_CLASS`](#structsdmmc__sd__status__t_1ae0f698c05928cea6625138e0d1308307) 

[447:440] Section 4.10.2.2, Table 4-45

#### `public uint8_t `[`PERFORMANCE_MOVE`](#structsdmmc__sd__status__t_1a856908d4d137e076c838a83d2fde222b) 

[439:432] Section 4.10.2.3, Table 4-46

#### `public uint8_t `[`VIDEO_SPEED_CLASS`](#structsdmmc__sd__status__t_1a57623e3a037aa87c3750ddb26985ceac) 

[391:384] Section 4.10.2.10, Table 4-54

#### `public uint8_t `[`ERASE_TIMEOUT`](#structsdmmc__sd__status__t_1a739b24cfb2d94a396c7fabdc666d0b6c) 

[407:402] Section 4.10.2.6, Table 4-50

#### `public uint8_t `[`ERASE_OFFSET`](#structsdmmc__sd__status__t_1a90e7b2e2ced76d387b8b57ca1f68f9f1) 

[401:400] Section 4.10.2.7, Table 4-51

#### `public uint8_t `[`UHS_SPEED_GRADE`](#structsdmmc__sd__status__t_1afca2f2dcf8d6773e94b0fdf14741753e) 

[399:396] Section 4.10.2.8, Table 4-52

#### `public uint8_t `[`UHS_AU_SIZE`](#structsdmmc__sd__status__t_1aedf0530c49f5ae46653632eeb458d02e) 

[395:392] Section 4.10.2.9, Table 4-3

#### `public uint8_t `[`AU_SIZE`](#structsdmmc__sd__status__t_1a4026ef12682ef6e0dbcc856e6acd81ec) 

[431:428] Section 4.10.2.4, Table 4-47

#### `public uint8_t `[`DAT_BUS_WIDTH`](#structsdmmc__sd__status__t_1aece2943b9edeaf3fac785c34361b440b) 

[511:510] Section 4.10.2, Table 4-44

#### `public uint8_t `[`SECURED_MODE`](#structsdmmc__sd__status__t_1ad488604786da116914edc92e3afd186c) 

[509] Section 4.10.2, Table 4-44

# struct `sdmmc_cid_sd_t` 

CID register structure (SD Memory Cards)

**See also**: Physical Layer Simplified Specification Version 9.00, Section 5.2, Table 5.2 [[sdcard.org](https://www.sdcard.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`MID`](#structsdmmc__cid__sd__t_1aa4b0c8bd0a20ad56a471d5fb8aca09a0) | Manufacturer ID.
`public char `[`OID`](#structsdmmc__cid__sd__t_1a1d83d3fd7a89bdde7f10c1ddbdb0dfcf) | OEM/Application ID.
`public char `[`PNM`](#structsdmmc__cid__sd__t_1ab4b37f7b737b12d2283c56d88b5af147) | Product name.
`public uint8_t `[`PRV`](#structsdmmc__cid__sd__t_1ac11c4669bcc1338047b1a940cfa7ac81) | Product revision.
`public `[`be_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint32__t)` `[`PSN`](#structsdmmc__cid__sd__t_1a546eeefb351fb96ec9e81d7684d13764) | Product serial number in big-endian order.
`public `[`be_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint16__t)` `[`MDT`](#structsdmmc__cid__sd__t_1af6344739a003d9b9bd2fb8a4d07f2b58) | Manufacturing date in big-endian order.
`public uint8_t `[`CID_CRC`](#structsdmmc__cid__sd__t_1a9b30ee7eefc2add13c7b014aa0336d83) | CRC7 checksum including bit 0.

## Members

#### `public uint8_t `[`MID`](#structsdmmc__cid__sd__t_1aa4b0c8bd0a20ad56a471d5fb8aca09a0) 

Manufacturer ID.

#### `public char `[`OID`](#structsdmmc__cid__sd__t_1a1d83d3fd7a89bdde7f10c1ddbdb0dfcf) 

OEM/Application ID.

#### `public char `[`PNM`](#structsdmmc__cid__sd__t_1ab4b37f7b737b12d2283c56d88b5af147) 

Product name.

#### `public uint8_t `[`PRV`](#structsdmmc__cid__sd__t_1ac11c4669bcc1338047b1a940cfa7ac81) 

Product revision.

#### `public `[`be_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint32__t)` `[`PSN`](#structsdmmc__cid__sd__t_1a546eeefb351fb96ec9e81d7684d13764) 

Product serial number in big-endian order.

#### `public `[`be_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint16__t)` `[`MDT`](#structsdmmc__cid__sd__t_1af6344739a003d9b9bd2fb8a4d07f2b58) 

Manufacturing date in big-endian order.

#### `public uint8_t `[`CID_CRC`](#structsdmmc__cid__sd__t_1a9b30ee7eefc2add13c7b014aa0336d83) 

CRC7 checksum including bit 0.

# struct `sdmmc_cid_mmc_t` 

CID register structure (MMC)

**See also**: JEDEC Standard No. JESD84-B42, MultiMediaCard (MMC) Electrical Standard, High Capacity (MMCA, 4.2), Section 8.2, Table 30 [[jedec.org](https://www.jedec.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`MID`](#structsdmmc__cid__mmc__t_1ad8ff5e124985938558741fe2103e4678) | Manufacturer ID.
`public `[`be_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint16__t)` `[`OID`](#structsdmmc__cid__mmc__t_1aa5c462e882ebaf53453bbf116d5cd500) | OEM/Application ID in big-endian order.
`public char `[`PNM`](#structsdmmc__cid__mmc__t_1ad9db1712bebb41613f2e8beae2594019) | Product name.
`public uint8_t `[`PRV`](#structsdmmc__cid__mmc__t_1acc58c75256a8ab791c570fdfeee93e40) | Product revision.
`public `[`be_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint32__t)` `[`PSN`](#structsdmmc__cid__mmc__t_1a0aac179aab94a6aa09df2ef4ce28a993) | Product serial number in big-endian order.
`public uint8_t `[`MDT`](#structsdmmc__cid__mmc__t_1a38c339979c507d9594b2c7efc387c286) | Manufacturing date.
`public uint8_t `[`CID_CRC`](#structsdmmc__cid__mmc__t_1ad78d38af3a2ae2717cf16b277c5199f5) | CRC7 checksum including bit 0.

## Members

#### `public uint8_t `[`MID`](#structsdmmc__cid__mmc__t_1ad8ff5e124985938558741fe2103e4678) 

Manufacturer ID.

#### `public `[`be_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint16__t)` `[`OID`](#structsdmmc__cid__mmc__t_1aa5c462e882ebaf53453bbf116d5cd500) 

OEM/Application ID in big-endian order.

#### `public char `[`PNM`](#structsdmmc__cid__mmc__t_1ad9db1712bebb41613f2e8beae2594019) 

Product name.

#### `public uint8_t `[`PRV`](#structsdmmc__cid__mmc__t_1acc58c75256a8ab791c570fdfeee93e40) 

Product revision.

#### `public `[`be_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionbe__uint32__t)` `[`PSN`](#structsdmmc__cid__mmc__t_1a0aac179aab94a6aa09df2ef4ce28a993) 

Product serial number in big-endian order.

#### `public uint8_t `[`MDT`](#structsdmmc__cid__mmc__t_1a38c339979c507d9594b2c7efc387c286) 

Manufacturing date.

#### `public uint8_t `[`CID_CRC`](#structsdmmc__cid__mmc__t_1ad78d38af3a2ae2717cf16b277c5199f5) 

CRC7 checksum including bit 0.

# struct `sdmmc_csd_v1_t` 

CSD register structure Version 1.0.

**See also**: Physical Layer Simplified Specification Version 9.00, Section 5.3.2, Table 5.4 [[sdcard.org](https://www.sdcard.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`CSD_CRC`](#structsdmmc__csd__v1__t_1a516653731547efe83b2608c188e1f2ba) | CRC including End bit 1b [7:0].
`public uint32_t `[`reserved5`](#structsdmmc__csd__v1__t_1af2fc736feeb243fbb3ab92517da350c4) | reserved [8]
`public uint32_t `[`WP_UPC`](#structsdmmc__csd__v1__t_1add35a7ba70d907eefde45d96227f232e) | write protection until power cycle [9]
`public uint32_t `[`FILE_FORMAT`](#structsdmmc__csd__v1__t_1a4e168ceaba5c0fef84a0c308c34a9365) | File format [11:10].
`public uint32_t `[`TMP_WRITE_PROTECT`](#structsdmmc__csd__v1__t_1a24478868fb24ee0b56092e26f89e55b7) | temporary write protection [12]
`public uint32_t `[`PERM_WRITE_PROTECT`](#structsdmmc__csd__v1__t_1a189328a3e99a14fee4f0c4422c7e7624) | permanent write protection [13]
`public uint32_t `[`COPY`](#structsdmmc__csd__v1__t_1aede2518800ffc015f4a36c9d67360c8a) | copy flag [14]
`public uint32_t `[`FILE_FORMAT_GRP`](#structsdmmc__csd__v1__t_1a10af8d692f7eec60cf8e1c621d9bd45b) | File format group [15].
`public uint32_t `[`reserved4`](#structsdmmc__csd__v1__t_1ab591fa682bdb1109c68d654b4ac643a4) | reserved [20:16]
`public uint32_t `[`WRITE_BL_PARTIAL`](#structsdmmc__csd__v1__t_1a792303e7aabf070d59e75fa7cf2d9018) | partial blocks for write allowed [21]
`public uint32_t `[`WRITE_BL_LEN`](#structsdmmc__csd__v1__t_1a09d3a08bc398cf28d7060668049089a1) | max.
`public uint32_t `[`R2W_FACTOR`](#structsdmmc__csd__v1__t_1a37f2437f4ce04dc5739d893935560c3a) | write speed factor [28:26]
`public uint32_t `[`reserved3`](#structsdmmc__csd__v1__t_1abfd85280e2a77c73ad057d7bfc338514) | reserved [30:29]
`public uint32_t `[`WP_GRP_ENABLE`](#structsdmmc__csd__v1__t_1a9f0c8373b5c5b4eaa0de9ae2565ff69a) | write protect group enable [31]
`public uint32_t `[`WP_GRP_SIZE`](#structsdmmc__csd__v1__t_1a2f5f2bb2af7bfc791f2bd40d57c2c04a) | write protect group size [38:32]
`public uint32_t `[`SECTOR_SIZE`](#structsdmmc__csd__v1__t_1a7dd8c4022b9def3ac26d32884c25091f) | erase sector size [45:39]
`public uint32_t `[`ERASE_BLK_EN`](#structsdmmc__csd__v1__t_1aee2c1a3dac3bcd5404f8f3367c3eba1c) | erase single block enable [46]
`public uint32_t `[`C_SIZE_MULT`](#structsdmmc__csd__v1__t_1af37e3f23d7de9868f49eb9afe7718bb1) | device size multiplier [49:47]
`public uint32_t `[`VDD_W_CURR_MAX`](#structsdmmc__csd__v1__t_1a6c1c17501555d726a42da520cce31fe4) | max.
`public uint32_t `[`VDD_W_CURR_MIN`](#structsdmmc__csd__v1__t_1aec19b2c6d1a17989ca8878e28e863688) | max.
`public uint32_t `[`VDD_R_CURR_MAX`](#structsdmmc__csd__v1__t_1a9cca3903f550d9ea0c8d2278d711d2ca) | max.
`public uint32_t `[`VDD_R_CURR_MIN`](#structsdmmc__csd__v1__t_1a1b8f7b1a007cdd7fa404b466018e0fc0) | max.
`public uint32_t `[`C_SIZE`](#structsdmmc__csd__v1__t_1a7790cb809d7d1a11811fc742640e1230) | device size [73:62]
`public uint32_t `[`reserved2`](#structsdmmc__csd__v1__t_1a488b9807888772a0c79ffd5c3897f881) | reserved [75:74]
`public uint32_t `[`DSR_IMP`](#structsdmmc__csd__v1__t_1a9b8846b0634502f58eb5c288ec00bed3) | DSR implemented [76].
`public uint32_t `[`READ_BLK_MISALIGN`](#structsdmmc__csd__v1__t_1a963ea5489d877c4ed98cdee8e426a4fd) | read block misalignment [77]
`public uint32_t `[`WRITE_BLK_MISALIGN`](#structsdmmc__csd__v1__t_1ae1627a56bf601111042331844816e19f) | write block misalignment [78]
`public uint32_t `[`READ_BL_PARTIAL`](#structsdmmc__csd__v1__t_1a110abf8c402d586526b40168c057a468) | partial blocks for read allowed [79]
`public uint32_t `[`READ_BL_LEN`](#structsdmmc__csd__v1__t_1ac4bfef54a106bcab35d5d92552deb61d) | max.
`public uint32_t `[`CCC`](#structsdmmc__csd__v1__t_1af7e94a1c18e196ecfb2c651143bcae3b) | card command classes [95:84]
`public uint32_t `[`TRAN_SPEED`](#structsdmmc__csd__v1__t_1a5e6fecfdcdc01b0432be903d2eb72e75) | max.
`public uint32_t `[`NSAC`](#structsdmmc__csd__v1__t_1ad8b272d77ecdd93c0bc38d03f921cc60) | data read access-time-2 in CLK cycles [111:104]
`public uint32_t `[`TAAC`](#structsdmmc__csd__v1__t_1a70d4b2ec07b709aefebc7e9b28cf0a01) | data read access-time-1 [119:112]
`public uint32_t `[`reserved1`](#structsdmmc__csd__v1__t_1ac3760130615b9988938c788c43003183) | reserved [125:120]
`public uint32_t `[`CSD_STRUCTURE`](#structsdmmc__csd__v1__t_1aa8713e33f0ec1175c86017c94e2310dc) | CSD structure [127:126].

## Members

#### `public uint32_t `[`CSD_CRC`](#structsdmmc__csd__v1__t_1a516653731547efe83b2608c188e1f2ba) 

CRC including End bit 1b [7:0].

#### `public uint32_t `[`reserved5`](#structsdmmc__csd__v1__t_1af2fc736feeb243fbb3ab92517da350c4) 

reserved [8]

#### `public uint32_t `[`WP_UPC`](#structsdmmc__csd__v1__t_1add35a7ba70d907eefde45d96227f232e) 

write protection until power cycle [9]

#### `public uint32_t `[`FILE_FORMAT`](#structsdmmc__csd__v1__t_1a4e168ceaba5c0fef84a0c308c34a9365) 

File format [11:10].

#### `public uint32_t `[`TMP_WRITE_PROTECT`](#structsdmmc__csd__v1__t_1a24478868fb24ee0b56092e26f89e55b7) 

temporary write protection [12]

#### `public uint32_t `[`PERM_WRITE_PROTECT`](#structsdmmc__csd__v1__t_1a189328a3e99a14fee4f0c4422c7e7624) 

permanent write protection [13]

#### `public uint32_t `[`COPY`](#structsdmmc__csd__v1__t_1aede2518800ffc015f4a36c9d67360c8a) 

copy flag [14]

#### `public uint32_t `[`FILE_FORMAT_GRP`](#structsdmmc__csd__v1__t_1a10af8d692f7eec60cf8e1c621d9bd45b) 

File format group [15].

#### `public uint32_t `[`reserved4`](#structsdmmc__csd__v1__t_1ab591fa682bdb1109c68d654b4ac643a4) 

reserved [20:16]

#### `public uint32_t `[`WRITE_BL_PARTIAL`](#structsdmmc__csd__v1__t_1a792303e7aabf070d59e75fa7cf2d9018) 

partial blocks for write allowed [21]

#### `public uint32_t `[`WRITE_BL_LEN`](#structsdmmc__csd__v1__t_1a09d3a08bc398cf28d7060668049089a1) 

max.

write data block length [25:22]

#### `public uint32_t `[`R2W_FACTOR`](#structsdmmc__csd__v1__t_1a37f2437f4ce04dc5739d893935560c3a) 

write speed factor [28:26]

#### `public uint32_t `[`reserved3`](#structsdmmc__csd__v1__t_1abfd85280e2a77c73ad057d7bfc338514) 

reserved [30:29]

#### `public uint32_t `[`WP_GRP_ENABLE`](#structsdmmc__csd__v1__t_1a9f0c8373b5c5b4eaa0de9ae2565ff69a) 

write protect group enable [31]

#### `public uint32_t `[`WP_GRP_SIZE`](#structsdmmc__csd__v1__t_1a2f5f2bb2af7bfc791f2bd40d57c2c04a) 

write protect group size [38:32]

#### `public uint32_t `[`SECTOR_SIZE`](#structsdmmc__csd__v1__t_1a7dd8c4022b9def3ac26d32884c25091f) 

erase sector size [45:39]

#### `public uint32_t `[`ERASE_BLK_EN`](#structsdmmc__csd__v1__t_1aee2c1a3dac3bcd5404f8f3367c3eba1c) 

erase single block enable [46]

#### `public uint32_t `[`C_SIZE_MULT`](#structsdmmc__csd__v1__t_1af37e3f23d7de9868f49eb9afe7718bb1) 

device size multiplier [49:47]

#### `public uint32_t `[`VDD_W_CURR_MAX`](#structsdmmc__csd__v1__t_1a6c1c17501555d726a42da520cce31fe4) 

max.

write current VDD max [52:50]

#### `public uint32_t `[`VDD_W_CURR_MIN`](#structsdmmc__csd__v1__t_1aec19b2c6d1a17989ca8878e28e863688) 

max.

write current VDD min [55:53]

#### `public uint32_t `[`VDD_R_CURR_MAX`](#structsdmmc__csd__v1__t_1a9cca3903f550d9ea0c8d2278d711d2ca) 

max.

read current VDD max [58:56]

#### `public uint32_t `[`VDD_R_CURR_MIN`](#structsdmmc__csd__v1__t_1a1b8f7b1a007cdd7fa404b466018e0fc0) 

max.

read current VDD min [61:59]

#### `public uint32_t `[`C_SIZE`](#structsdmmc__csd__v1__t_1a7790cb809d7d1a11811fc742640e1230) 

device size [73:62]

#### `public uint32_t `[`reserved2`](#structsdmmc__csd__v1__t_1a488b9807888772a0c79ffd5c3897f881) 

reserved [75:74]

#### `public uint32_t `[`DSR_IMP`](#structsdmmc__csd__v1__t_1a9b8846b0634502f58eb5c288ec00bed3) 

DSR implemented [76].

#### `public uint32_t `[`READ_BLK_MISALIGN`](#structsdmmc__csd__v1__t_1a963ea5489d877c4ed98cdee8e426a4fd) 

read block misalignment [77]

#### `public uint32_t `[`WRITE_BLK_MISALIGN`](#structsdmmc__csd__v1__t_1ae1627a56bf601111042331844816e19f) 

write block misalignment [78]

#### `public uint32_t `[`READ_BL_PARTIAL`](#structsdmmc__csd__v1__t_1a110abf8c402d586526b40168c057a468) 

partial blocks for read allowed [79]

#### `public uint32_t `[`READ_BL_LEN`](#structsdmmc__csd__v1__t_1ac4bfef54a106bcab35d5d92552deb61d) 

max.

read data block length [83:80]

#### `public uint32_t `[`CCC`](#structsdmmc__csd__v1__t_1af7e94a1c18e196ecfb2c651143bcae3b) 

card command classes [95:84]

#### `public uint32_t `[`TRAN_SPEED`](#structsdmmc__csd__v1__t_1a5e6fecfdcdc01b0432be903d2eb72e75) 

max.

data transfer rate [103:96]

#### `public uint32_t `[`NSAC`](#structsdmmc__csd__v1__t_1ad8b272d77ecdd93c0bc38d03f921cc60) 

data read access-time-2 in CLK cycles [111:104]

#### `public uint32_t `[`TAAC`](#structsdmmc__csd__v1__t_1a70d4b2ec07b709aefebc7e9b28cf0a01) 

data read access-time-1 [119:112]

#### `public uint32_t `[`reserved1`](#structsdmmc__csd__v1__t_1ac3760130615b9988938c788c43003183) 

reserved [125:120]

#### `public uint32_t `[`CSD_STRUCTURE`](#structsdmmc__csd__v1__t_1aa8713e33f0ec1175c86017c94e2310dc) 

CSD structure [127:126].

# struct `sdmmc_csd_v2_t` 

CSD register structure Version 2.0 and Version 3.0.

A combined format is used for CSD Version 2.0 and 3.0 to reduce the code size. The only difference is the bit length of `C_SIZE`.

**See also**: Physical Layer Simplified Specification Version 9.00 [[sdcard.org](https://www.sdcard.org)] 

* Version 2.0: Section 5.3.3, Table 5-16 

* Version 3.0: Section 5.3.4, Table 5.3.4-1

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`CSD_CRC`](#structsdmmc__csd__v2__t_1a967b4229f0eca0a34015a236dd36072a) | CRC including End bit 1b [7:0].
`public uint32_t `[`reserved5`](#structsdmmc__csd__v2__t_1ab81a66fd76049a12dc4df6c4b5e6a0f3) | reserved [8]
`public uint32_t `[`WP_UPC`](#structsdmmc__csd__v2__t_1a3c1ee14f7acce529f35cdd05372aec4e) | write protection until power cycle [9]
`public uint32_t `[`FILE_FORMAT`](#structsdmmc__csd__v2__t_1a94206dffd46d7e40ce2c0ee34c349d4e) | File format [11:10].
`public uint32_t `[`TMP_WRITE_PROTECT`](#structsdmmc__csd__v2__t_1a084f6bdd9af91e46ebc569e4820f9bb9) | temporary write protection [12]
`public uint32_t `[`PERM_WRITE_PROTECT`](#structsdmmc__csd__v2__t_1a3bd07aeb5ee15528fb492754e7ceb8d9) | permanent write protection [13]
`public uint32_t `[`COPY`](#structsdmmc__csd__v2__t_1acce5491a63052bbaebdce9e50e3e30e0) | copy flag [14]
`public uint32_t `[`FILE_FORMAT_GRP`](#structsdmmc__csd__v2__t_1a0aa2f7a265d7f8637d1c258300e8c4be) | File format group [15].
`public uint32_t `[`reserved4`](#structsdmmc__csd__v2__t_1a0d2586d984b20ed383b36c21d4bea418) | reserved [20:16]
`public uint32_t `[`WRITE_BL_PARTIAL`](#structsdmmc__csd__v2__t_1a7c13a28022a7ec6fee4ff63d7af351a3) | partial blocks for write allowed [21]
`public uint32_t `[`WRITE_BL_LEN`](#structsdmmc__csd__v2__t_1a01e85e6da043eae89d8a3268e40b0baf) | max.
`public uint32_t `[`R2W_FACTOR`](#structsdmmc__csd__v2__t_1ae30920fb9b2f476d5a96f4fbb15818f5) | write speed factor [28:26]
`public uint32_t `[`reserved3`](#structsdmmc__csd__v2__t_1aaf6d993ba5e14b0d1705ddec65af0096) | reserved [30:29]
`public uint32_t `[`WP_GRP_ENABLE`](#structsdmmc__csd__v2__t_1a07560fa065300bac1485cf8b31a40e51) | write protect group enable [31]
`public uint32_t `[`WP_GRP_SIZE`](#structsdmmc__csd__v2__t_1acaf24d1194c3efbbd71f42f8d0f4b454) | write protect group size [38:32]
`public uint32_t `[`SECTOR_SIZE`](#structsdmmc__csd__v2__t_1a0766db63a2dc43d91540e768ee501668) | erase sector size [45:39]
`public uint32_t `[`ERASE_BLK_EN`](#structsdmmc__csd__v2__t_1a5dceaa40a9296904ac48ba684a351723) | erase single block enable [46]
`public uint32_t `[`reserved2`](#structsdmmc__csd__v2__t_1a036a837c1582bdba9c0dc303b2998b03) | reserved [47]
`public uint32_t `[`C_SIZE`](#structsdmmc__csd__v2__t_1ad5bec3589732545c457ce2de581d49e0) | device size v2.0 [69:48], v3.0 [75:48]
`public uint32_t `[`DSR_IMP`](#structsdmmc__csd__v2__t_1a4fdb79937cbe78699aaf33daf1f261c6) | DSR implemented [76].
`public uint32_t `[`READ_BLK_MISALIGN`](#structsdmmc__csd__v2__t_1a0eb68ea77bff41a31f810a5bb86a9af7) | read block misalignment [77]
`public uint32_t `[`WRITE_BLK_MISALIGN`](#structsdmmc__csd__v2__t_1ad8cce1427592b70b00897e301a370abe) | write block misalignment [78]
`public uint32_t `[`READ_BL_PARTIAL`](#structsdmmc__csd__v2__t_1ade8813b78b554f9ac635550276a7eb1c) | partial blocks for read allowed [79]
`public uint32_t `[`READ_BL_LEN`](#structsdmmc__csd__v2__t_1a64f0b869be20f6935aa1a5300f53831d) | max.
`public uint32_t `[`CCC`](#structsdmmc__csd__v2__t_1a66532c6d8a388e19ca76edb4e0d2b897) | card command classes [95:84]
`public uint32_t `[`TRAN_SPEED`](#structsdmmc__csd__v2__t_1ad1042c790e9f8a107e5dc0af46fbebac) | max.
`public uint32_t `[`NSAC`](#structsdmmc__csd__v2__t_1adb86af3f374da362e9ad573e7192ba9f) | data read access-time-2 in CLK cycles [111:104]
`public uint32_t `[`TAAC`](#structsdmmc__csd__v2__t_1a4aa57dea9b973e5ef393bc7122e54030) | data read access-time-1 [119:112]
`public uint32_t `[`reserved1`](#structsdmmc__csd__v2__t_1ac401ef3d0ce3239fa5d0731c8f05e852) | reserved [125:120]
`public uint32_t `[`CSD_STRUCTURE`](#structsdmmc__csd__v2__t_1aacc825192fc3339c704f527591601103) | CSD structure [127:126].

## Members

#### `public uint32_t `[`CSD_CRC`](#structsdmmc__csd__v2__t_1a967b4229f0eca0a34015a236dd36072a) 

CRC including End bit 1b [7:0].

#### `public uint32_t `[`reserved5`](#structsdmmc__csd__v2__t_1ab81a66fd76049a12dc4df6c4b5e6a0f3) 

reserved [8]

#### `public uint32_t `[`WP_UPC`](#structsdmmc__csd__v2__t_1a3c1ee14f7acce529f35cdd05372aec4e) 

write protection until power cycle [9]

#### `public uint32_t `[`FILE_FORMAT`](#structsdmmc__csd__v2__t_1a94206dffd46d7e40ce2c0ee34c349d4e) 

File format [11:10].

#### `public uint32_t `[`TMP_WRITE_PROTECT`](#structsdmmc__csd__v2__t_1a084f6bdd9af91e46ebc569e4820f9bb9) 

temporary write protection [12]

#### `public uint32_t `[`PERM_WRITE_PROTECT`](#structsdmmc__csd__v2__t_1a3bd07aeb5ee15528fb492754e7ceb8d9) 

permanent write protection [13]

#### `public uint32_t `[`COPY`](#structsdmmc__csd__v2__t_1acce5491a63052bbaebdce9e50e3e30e0) 

copy flag [14]

#### `public uint32_t `[`FILE_FORMAT_GRP`](#structsdmmc__csd__v2__t_1a0aa2f7a265d7f8637d1c258300e8c4be) 

File format group [15].

#### `public uint32_t `[`reserved4`](#structsdmmc__csd__v2__t_1a0d2586d984b20ed383b36c21d4bea418) 

reserved [20:16]

#### `public uint32_t `[`WRITE_BL_PARTIAL`](#structsdmmc__csd__v2__t_1a7c13a28022a7ec6fee4ff63d7af351a3) 

partial blocks for write allowed [21]

#### `public uint32_t `[`WRITE_BL_LEN`](#structsdmmc__csd__v2__t_1a01e85e6da043eae89d8a3268e40b0baf) 

max.

write data block length [25:22]

#### `public uint32_t `[`R2W_FACTOR`](#structsdmmc__csd__v2__t_1ae30920fb9b2f476d5a96f4fbb15818f5) 

write speed factor [28:26]

#### `public uint32_t `[`reserved3`](#structsdmmc__csd__v2__t_1aaf6d993ba5e14b0d1705ddec65af0096) 

reserved [30:29]

#### `public uint32_t `[`WP_GRP_ENABLE`](#structsdmmc__csd__v2__t_1a07560fa065300bac1485cf8b31a40e51) 

write protect group enable [31]

#### `public uint32_t `[`WP_GRP_SIZE`](#structsdmmc__csd__v2__t_1acaf24d1194c3efbbd71f42f8d0f4b454) 

write protect group size [38:32]

#### `public uint32_t `[`SECTOR_SIZE`](#structsdmmc__csd__v2__t_1a0766db63a2dc43d91540e768ee501668) 

erase sector size [45:39]

#### `public uint32_t `[`ERASE_BLK_EN`](#structsdmmc__csd__v2__t_1a5dceaa40a9296904ac48ba684a351723) 

erase single block enable [46]

#### `public uint32_t `[`reserved2`](#structsdmmc__csd__v2__t_1a036a837c1582bdba9c0dc303b2998b03) 

reserved [47]

#### `public uint32_t `[`C_SIZE`](#structsdmmc__csd__v2__t_1ad5bec3589732545c457ce2de581d49e0) 

device size v2.0 [69:48], v3.0 [75:48]

#### `public uint32_t `[`DSR_IMP`](#structsdmmc__csd__v2__t_1a4fdb79937cbe78699aaf33daf1f261c6) 

DSR implemented [76].

#### `public uint32_t `[`READ_BLK_MISALIGN`](#structsdmmc__csd__v2__t_1a0eb68ea77bff41a31f810a5bb86a9af7) 

read block misalignment [77]

#### `public uint32_t `[`WRITE_BLK_MISALIGN`](#structsdmmc__csd__v2__t_1ad8cce1427592b70b00897e301a370abe) 

write block misalignment [78]

#### `public uint32_t `[`READ_BL_PARTIAL`](#structsdmmc__csd__v2__t_1ade8813b78b554f9ac635550276a7eb1c) 

partial blocks for read allowed [79]

#### `public uint32_t `[`READ_BL_LEN`](#structsdmmc__csd__v2__t_1a64f0b869be20f6935aa1a5300f53831d) 

max.

read data block length [83:80]

#### `public uint32_t `[`CCC`](#structsdmmc__csd__v2__t_1a66532c6d8a388e19ca76edb4e0d2b897) 

card command classes [95:84]

#### `public uint32_t `[`TRAN_SPEED`](#structsdmmc__csd__v2__t_1ad1042c790e9f8a107e5dc0af46fbebac) 

max.

data transfer rate [103:96]

#### `public uint32_t `[`NSAC`](#structsdmmc__csd__v2__t_1adb86af3f374da362e9ad573e7192ba9f) 

data read access-time-2 in CLK cycles [111:104]

#### `public uint32_t `[`TAAC`](#structsdmmc__csd__v2__t_1a4aa57dea9b973e5ef393bc7122e54030) 

data read access-time-1 [119:112]

#### `public uint32_t `[`reserved1`](#structsdmmc__csd__v2__t_1ac401ef3d0ce3239fa5d0731c8f05e852) 

reserved [125:120]

#### `public uint32_t `[`CSD_STRUCTURE`](#structsdmmc__csd__v2__t_1aacc825192fc3339c704f527591601103) 

CSD structure [127:126].

# struct `sdmmc_csd_mmc_t` 

CSD register structure for MMC.

**See also**: JEDEC Standard No. JESD84-B42, MultiMediaCard (MMC) Electrical Standard, High Capacity (MMCA, 4.2), Section 8.3, Table 35 [[jedec.org](https://www.jedec.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`CSD_CRC`](#structsdmmc__csd__mmc__t_1ac8090a38f42a488ffe64d15f5e66fb61) | CRC including End bit 1b [7:0].
`public uint32_t `[`ECC`](#structsdmmc__csd__mmc__t_1af1cdbd415370ded8c5024b5b4db9a886) | ECC code [9:8].
`public uint32_t `[`FILE_FORMAT`](#structsdmmc__csd__mmc__t_1a63b1fe323cbadb3e0ff6761d5ae4d06a) | File format [11:10].
`public uint32_t `[`TMP_WRITE_PROTECT`](#structsdmmc__csd__mmc__t_1a27121b92daf23c962ae51766ddeb816a) | Temporary write protection [12].
`public uint32_t `[`PERM_WRITE_PROTECT`](#structsdmmc__csd__mmc__t_1aefd7d3f72d4232b00602a40cb450018f) | Permanent write protection [13].
`public uint32_t `[`COPY`](#structsdmmc__csd__mmc__t_1ac852564c452c6c5c1220fd46e40eb1a1) | Copy flag [14].
`public uint32_t `[`FILE_FORMAT_GRP`](#structsdmmc__csd__mmc__t_1aa062f2fe6ba71d93a36a2d44df2b2236) | File format group [15].
`public uint32_t `[`CONTENT_PROT_APP`](#structsdmmc__csd__mmc__t_1a425d9de6b639a3f29a17a6551a493233) | Content protection application [16].
`public uint32_t `[`reserved4`](#structsdmmc__csd__mmc__t_1a1cabab71aed46f25fc1e8ccf123cedfd) | reserved [20:17]
`public uint32_t `[`WRITE_BL_PARTIAL`](#structsdmmc__csd__mmc__t_1a8ec715abfdaed3a6e5027f7d4dbdd116) | partial blocks for write allowed [21]
`public uint32_t `[`WRITE_BL_LEN`](#structsdmmc__csd__mmc__t_1a46480e727891d852729aa3431ae81c40) | Max.
`public uint32_t `[`R2W_FACTOR`](#structsdmmc__csd__mmc__t_1a12fb3c20a663c584d3d5e34b08c3fc3e) | Write speed factor [28:26].
`public uint32_t `[`DEFAULT_ECC`](#structsdmmc__csd__mmc__t_1a27aa8f797095296465b91cb4ab20d6f2) | Manufacturer default ECC [30:29].
`public uint32_t `[`WP_GRP_ENABLE`](#structsdmmc__csd__mmc__t_1a6ceeb9df265a64eeac734d0b112560aa) | write protect group enable [31]
`public uint32_t `[`WP_GRP_SIZE`](#structsdmmc__csd__mmc__t_1a2661f1bf8a6cb885c7e2c8ee4ab24505) | Write protect group size [36:32].
`public uint32_t `[`ERASE_GRP_MULT`](#structsdmmc__csd__mmc__t_1aa9303e963f76e77d39128070554c81f5) | Erase group size multiplier [41:37].
`public uint32_t `[`ERASE_GRP_SIZE`](#structsdmmc__csd__mmc__t_1acf7525acea5e3794d0bb1c709d752144) | Erase group size [46:42].
`public uint32_t `[`C_SIZE_MULT`](#structsdmmc__csd__mmc__t_1af3e44514243eb52024e62bd2d63335c6) | Device size multiplier [49:47].
`public uint32_t `[`VDD_W_CURR_MAX`](#structsdmmc__csd__mmc__t_1aedadea194eafa0cf4e78b22b29891d7d) | Max.
`public uint32_t `[`VDD_W_CURR_MIN`](#structsdmmc__csd__mmc__t_1a4c614ae19a617f2285a3ce607af02374) | Max.
`public uint32_t `[`VDD_R_CURR_MAX`](#structsdmmc__csd__mmc__t_1a834ff454af1b936bc9f907a788a7f711) | Max.
`public uint32_t `[`VDD_R_CURR_MIN`](#structsdmmc__csd__mmc__t_1aede70ded66554dd9ebf808513a70d383) | Max.
`public uint16_t `[`C_SIZE`](#structsdmmc__csd__mmc__t_1ad82f2a4099d151d3ee06557bf1547646) | Device size [73:62].
`public uint32_t `[`reserved2`](#structsdmmc__csd__mmc__t_1a775bcaf9b3a8a6cc894cacce706185bd) | reserved [75:74]
`public uint32_t `[`DSR_IMP`](#structsdmmc__csd__mmc__t_1a6a38e7261e29eabee75e797940d59390) | DSR implemented [76].
`public uint32_t `[`READ_BLK_MISALIGN`](#structsdmmc__csd__mmc__t_1af1d2b6f6afc2d41499653d9717362a8f) | Read block misalignment [77].
`public uint32_t `[`WRITE_BLK_MISALIGN`](#structsdmmc__csd__mmc__t_1abbb06b030713a3313e915aebb50e3174) | Write block misalignment [78].
`public uint32_t `[`READ_BL_PARTIAL`](#structsdmmc__csd__mmc__t_1af7df57f410272610a721604cab86ec19) | Partial blocks for read allowed [79].
`public uint32_t `[`READ_BL_LEN`](#structsdmmc__csd__mmc__t_1aee4c3c96f703254503dba4da3e56b129) | Max.
`public uint32_t `[`CCC`](#structsdmmc__csd__mmc__t_1a8bd5d832dbbc998f1c74893990d66e6c) | Card command classes [95:84].
`public uint32_t `[`TRAN_SPEED`](#structsdmmc__csd__mmc__t_1aa7912f9892b9d3dc9582cbf35f2d0c67) | Max.
`public uint32_t `[`NSAC`](#structsdmmc__csd__mmc__t_1a7d9e7d3d0c525f4271781c87982f6057) | Data read access-time-2 in CLK cycles [111:104].
`public uint32_t `[`TAAC`](#structsdmmc__csd__mmc__t_1aaea0b19768aba0446e5d14d32d51b847) | Data read access-time-1 [119:112].
`public uint32_t `[`reserved1`](#structsdmmc__csd__mmc__t_1a94d350d5d2da18be76c57d7d9ef7341c) | reserved [121:120]
`public uint32_t `[`SPEC_VERS`](#structsdmmc__csd__mmc__t_1acd2429f7da2604873c202053d958a875) | Specification version [125:122].
`public uint32_t `[`CSD_STRUCTURE`](#structsdmmc__csd__mmc__t_1a3add36b347efd44a8775977b0f6b39c0) | CSD structure [127:126].

## Members

#### `public uint32_t `[`CSD_CRC`](#structsdmmc__csd__mmc__t_1ac8090a38f42a488ffe64d15f5e66fb61) 

CRC including End bit 1b [7:0].

#### `public uint32_t `[`ECC`](#structsdmmc__csd__mmc__t_1af1cdbd415370ded8c5024b5b4db9a886) 

ECC code [9:8].

#### `public uint32_t `[`FILE_FORMAT`](#structsdmmc__csd__mmc__t_1a63b1fe323cbadb3e0ff6761d5ae4d06a) 

File format [11:10].

#### `public uint32_t `[`TMP_WRITE_PROTECT`](#structsdmmc__csd__mmc__t_1a27121b92daf23c962ae51766ddeb816a) 

Temporary write protection [12].

#### `public uint32_t `[`PERM_WRITE_PROTECT`](#structsdmmc__csd__mmc__t_1aefd7d3f72d4232b00602a40cb450018f) 

Permanent write protection [13].

#### `public uint32_t `[`COPY`](#structsdmmc__csd__mmc__t_1ac852564c452c6c5c1220fd46e40eb1a1) 

Copy flag [14].

#### `public uint32_t `[`FILE_FORMAT_GRP`](#structsdmmc__csd__mmc__t_1aa062f2fe6ba71d93a36a2d44df2b2236) 

File format group [15].

#### `public uint32_t `[`CONTENT_PROT_APP`](#structsdmmc__csd__mmc__t_1a425d9de6b639a3f29a17a6551a493233) 

Content protection application [16].

#### `public uint32_t `[`reserved4`](#structsdmmc__csd__mmc__t_1a1cabab71aed46f25fc1e8ccf123cedfd) 

reserved [20:17]

#### `public uint32_t `[`WRITE_BL_PARTIAL`](#structsdmmc__csd__mmc__t_1a8ec715abfdaed3a6e5027f7d4dbdd116) 

partial blocks for write allowed [21]

#### `public uint32_t `[`WRITE_BL_LEN`](#structsdmmc__csd__mmc__t_1a46480e727891d852729aa3431ae81c40) 

Max.

write data block length [25:22]

#### `public uint32_t `[`R2W_FACTOR`](#structsdmmc__csd__mmc__t_1a12fb3c20a663c584d3d5e34b08c3fc3e) 

Write speed factor [28:26].

#### `public uint32_t `[`DEFAULT_ECC`](#structsdmmc__csd__mmc__t_1a27aa8f797095296465b91cb4ab20d6f2) 

Manufacturer default ECC [30:29].

#### `public uint32_t `[`WP_GRP_ENABLE`](#structsdmmc__csd__mmc__t_1a6ceeb9df265a64eeac734d0b112560aa) 

write protect group enable [31]

#### `public uint32_t `[`WP_GRP_SIZE`](#structsdmmc__csd__mmc__t_1a2661f1bf8a6cb885c7e2c8ee4ab24505) 

Write protect group size [36:32].

#### `public uint32_t `[`ERASE_GRP_MULT`](#structsdmmc__csd__mmc__t_1aa9303e963f76e77d39128070554c81f5) 

Erase group size multiplier [41:37].

#### `public uint32_t `[`ERASE_GRP_SIZE`](#structsdmmc__csd__mmc__t_1acf7525acea5e3794d0bb1c709d752144) 

Erase group size [46:42].

#### `public uint32_t `[`C_SIZE_MULT`](#structsdmmc__csd__mmc__t_1af3e44514243eb52024e62bd2d63335c6) 

Device size multiplier [49:47].

#### `public uint32_t `[`VDD_W_CURR_MAX`](#structsdmmc__csd__mmc__t_1aedadea194eafa0cf4e78b22b29891d7d) 

Max.

write current VDD max [52:50]

#### `public uint32_t `[`VDD_W_CURR_MIN`](#structsdmmc__csd__mmc__t_1a4c614ae19a617f2285a3ce607af02374) 

Max.

write current VDD min [55:53]

#### `public uint32_t `[`VDD_R_CURR_MAX`](#structsdmmc__csd__mmc__t_1a834ff454af1b936bc9f907a788a7f711) 

Max.

read current VDD max [58:56]

#### `public uint32_t `[`VDD_R_CURR_MIN`](#structsdmmc__csd__mmc__t_1aede70ded66554dd9ebf808513a70d383) 

Max.

read current VDD min [61:59]

#### `public uint16_t `[`C_SIZE`](#structsdmmc__csd__mmc__t_1ad82f2a4099d151d3ee06557bf1547646) 

Device size [73:62].

#### `public uint32_t `[`reserved2`](#structsdmmc__csd__mmc__t_1a775bcaf9b3a8a6cc894cacce706185bd) 

reserved [75:74]

#### `public uint32_t `[`DSR_IMP`](#structsdmmc__csd__mmc__t_1a6a38e7261e29eabee75e797940d59390) 

DSR implemented [76].

#### `public uint32_t `[`READ_BLK_MISALIGN`](#structsdmmc__csd__mmc__t_1af1d2b6f6afc2d41499653d9717362a8f) 

Read block misalignment [77].

#### `public uint32_t `[`WRITE_BLK_MISALIGN`](#structsdmmc__csd__mmc__t_1abbb06b030713a3313e915aebb50e3174) 

Write block misalignment [78].

#### `public uint32_t `[`READ_BL_PARTIAL`](#structsdmmc__csd__mmc__t_1af7df57f410272610a721604cab86ec19) 

Partial blocks for read allowed [79].

#### `public uint32_t `[`READ_BL_LEN`](#structsdmmc__csd__mmc__t_1aee4c3c96f703254503dba4da3e56b129) 

Max.

read data block length [83:80]

#### `public uint32_t `[`CCC`](#structsdmmc__csd__mmc__t_1a8bd5d832dbbc998f1c74893990d66e6c) 

Card command classes [95:84].

#### `public uint32_t `[`TRAN_SPEED`](#structsdmmc__csd__mmc__t_1aa7912f9892b9d3dc9582cbf35f2d0c67) 

Max.

bus clock frequency [103:96]

#### `public uint32_t `[`NSAC`](#structsdmmc__csd__mmc__t_1a7d9e7d3d0c525f4271781c87982f6057) 

Data read access-time-2 in CLK cycles [111:104].

#### `public uint32_t `[`TAAC`](#structsdmmc__csd__mmc__t_1aaea0b19768aba0446e5d14d32d51b847) 

Data read access-time-1 [119:112].

#### `public uint32_t `[`reserved1`](#structsdmmc__csd__mmc__t_1a94d350d5d2da18be76c57d7d9ef7341c) 

reserved [121:120]

#### `public uint32_t `[`SPEC_VERS`](#structsdmmc__csd__mmc__t_1acd2429f7da2604873c202053d958a875) 

Specification version [125:122].

#### `public uint32_t `[`CSD_STRUCTURE`](#structsdmmc__csd__mmc__t_1a3add36b347efd44a8775977b0f6b39c0) 

CSD structure [127:126].

# struct `sdmmc_ext_csd_t` 

Extended CSD (EXT_CSD) register structure (MMC only)

Since the Extended CSD register is a complete 512 byte block which is only sparsely used, only the elements that are absolutely needed are stored in the extended CSD register structure.

**See also**: JEDEC Standard No. JESD84-B42, MultiMediaCard (MMC) Electrical Standard, High Capacity (MMCA, 4.2), Section 8.4, Table 46 [[jedec.org](https://www.jedec.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`SEC_COUNT`](#structsdmmc__ext__csd__t_1a43846c9b6ae535bb307290e5e0825c15) | Sector Count [215:212].
`public uint8_t `[`CARD_TYPE`](#structsdmmc__ext__csd__t_1a88d6b51efe5deed297bd5512008d8842) | Card Type [196].
`public uint8_t `[`CSD_STRUCTURE`](#structsdmmc__ext__csd__t_1a49d4c827ec9b7ac94867b2f595a0094c) | CSD Structure Version [194].
`public uint8_t `[`BUS_WIDTH`](#structsdmmc__ext__csd__t_1ae0059e60807c9782262aab6a0d8306ae) | Bus Width Mode [183].

## Members

#### `public uint32_t `[`SEC_COUNT`](#structsdmmc__ext__csd__t_1a43846c9b6ae535bb307290e5e0825c15) 

Sector Count [215:212].

#### `public uint8_t `[`CARD_TYPE`](#structsdmmc__ext__csd__t_1a88d6b51efe5deed297bd5512008d8842) 

Card Type [196].

#### `public uint8_t `[`CSD_STRUCTURE`](#structsdmmc__ext__csd__t_1a49d4c827ec9b7ac94867b2f595a0094c) 

CSD Structure Version [194].

#### `public uint8_t `[`BUS_WIDTH`](#structsdmmc__ext__csd__t_1ae0059e60807c9782262aab6a0d8306ae) 

Bus Width Mode [183].

# struct `sdmmc_scr_t` 

SCR register structure (SD Memory Card only)

**See also**: Physical Layer Simplified Specification Version 9.00, Section 5.6, Table 5-17 [[sdcard.org](https://www.sdcard.org)]

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`reserved0`](#structsdmmc__scr__t_1a129814cf7740bd3c78ed5e21a8215c25) | Reserved for manufacturer usage [31:0].
`public uint32_t `[`CMD_SUPPORT`](#structsdmmc__scr__t_1ae7fa022b7c2f0737bcf7aed29e41057e) | Command Support bits [36:32].
`public uint32_t `[`reserved37`](#structsdmmc__scr__t_1af0acba241bd18bebf9a122406352fb57) | Reserved [37].
`public uint32_t `[`SD_SPECX`](#structsdmmc__scr__t_1ac4a80a85f40a27f8d7f7570062aa6120) | Spec.
`public uint32_t `[`SD_SPEC4`](#structsdmmc__scr__t_1af4a28f8c41b27336c7ac846eda95e3ad) | Spec.
`public uint32_t `[`EX_SECURITY`](#structsdmmc__scr__t_1ad2bde85eb6cc5be90f3ccc9c8f312c19) | Extended Security Support [46:43].
`public uint32_t `[`SD_SPEC3`](#structsdmmc__scr__t_1a6f6778e95253c936d0043734301b3537) | Spec.
`public uint32_t `[`SD_BUS_WIDTHS`](#structsdmmc__scr__t_1a137fb95c63e88f6ccbd7c4a5fa06230e) | DAT Bus widths supported [51:48].
`public uint32_t `[`SD_SECURITY`](#structsdmmc__scr__t_1a5ba956959b5532444d7c22d01a25558f) | CPRM Security Support [54:52].
`public uint32_t `[`DATA_STAT_AFTER_ERASE`](#structsdmmc__scr__t_1a657605ddcd544ffd8b480336f24c5ff3) | Data status after erases [55].
`public uint32_t `[`SD_SPEC`](#structsdmmc__scr__t_1a632d75c8552cbfacd9f580db5b1bf845) | SD Memory Card - Spec.
`public uint32_t `[`SCR_STRUCTURE`](#structsdmmc__scr__t_1a4bc5d2a2823122a1d0a53bcef6891543) | SCR Structure [63:60].
`public uint32_t `[`value`](#structsdmmc__scr__t_1a9597b5d70e70ddd97bc2ff6984e6eefb) | 
`public union sdmmc_scr_t::@254 `[`@255`](#structsdmmc__scr__t_1ae0420a48e5cc72ac867aa6db5c70f5a1) | 

## Members

#### `public uint32_t `[`reserved0`](#structsdmmc__scr__t_1a129814cf7740bd3c78ed5e21a8215c25) 

Reserved for manufacturer usage [31:0].

#### `public uint32_t `[`CMD_SUPPORT`](#structsdmmc__scr__t_1ae7fa022b7c2f0737bcf7aed29e41057e) 

Command Support bits [36:32].

#### `public uint32_t `[`reserved37`](#structsdmmc__scr__t_1af0acba241bd18bebf9a122406352fb57) 

Reserved [37].

#### `public uint32_t `[`SD_SPECX`](#structsdmmc__scr__t_1ac4a80a85f40a27f8d7f7570062aa6120) 

Spec.

Version 5.00 or higher [41:38]

#### `public uint32_t `[`SD_SPEC4`](#structsdmmc__scr__t_1af4a28f8c41b27336c7ac846eda95e3ad) 

Spec.

Version 4.00 or higher [42]

#### `public uint32_t `[`EX_SECURITY`](#structsdmmc__scr__t_1ad2bde85eb6cc5be90f3ccc9c8f312c19) 

Extended Security Support [46:43].

#### `public uint32_t `[`SD_SPEC3`](#structsdmmc__scr__t_1a6f6778e95253c936d0043734301b3537) 

Spec.

Version 3.00 or higher [47]

#### `public uint32_t `[`SD_BUS_WIDTHS`](#structsdmmc__scr__t_1a137fb95c63e88f6ccbd7c4a5fa06230e) 

DAT Bus widths supported [51:48].

#### `public uint32_t `[`SD_SECURITY`](#structsdmmc__scr__t_1a5ba956959b5532444d7c22d01a25558f) 

CPRM Security Support [54:52].

#### `public uint32_t `[`DATA_STAT_AFTER_ERASE`](#structsdmmc__scr__t_1a657605ddcd544ffd8b480336f24c5ff3) 

Data status after erases [55].

#### `public uint32_t `[`SD_SPEC`](#structsdmmc__scr__t_1a632d75c8552cbfacd9f580db5b1bf845) 

SD Memory Card - Spec.

Version [59:56]

#### `public uint32_t `[`SCR_STRUCTURE`](#structsdmmc__scr__t_1a4bc5d2a2823122a1d0a53bcef6891543) 

SCR Structure [63:60].

#### `public uint32_t `[`value`](#structsdmmc__scr__t_1a9597b5d70e70ddd97bc2ff6984e6eefb) 

#### `public union sdmmc_scr_t::@254 `[`@255`](#structsdmmc__scr__t_1ae0420a48e5cc72ac867aa6db5c70f5a1) 

# struct `sdmmc_xfer_desc_t` 

Transfer descriptor.

The transfer descriptor hold all information about a transfer such as the block size and the number of block.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sdmmc_xfer_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga11a2975a87e514babd71fff706744564)` `[`type`](#structsdmmc__xfer__desc__t_1a18830b409d1c5bd2a1f53d98b9e1b93c) | Type of the transfer.
`public bool `[`write`](#structsdmmc__xfer__desc__t_1afaf01e93f2cccfe5c69327c83c58f07a) | Indicate a write transfer.
`public `[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` `[`cmd_idx`](#structsdmmc__xfer__desc__t_1a7a1e18750dd4d9e50c14efeb45c89738) | Command index used for the transfer.
`public `[`sdmmc_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga49041beb07426755c85face87e70e5f2)` `[`resp_type`](#structsdmmc__xfer__desc__t_1ade428b324bb52ace1f600faf2877dcfc) | Type of expected response for the transfer.
`public uint32_t `[`arg`](#structsdmmc__xfer__desc__t_1a1e676b7e804d4ddb8f7ee0a79f7e953b) | Command argument used for the transfer.
`public uint16_t `[`block_size`](#structsdmmc__xfer__desc__t_1acaf8ec68d78b15490e1f3956bb2cdf15) | Size of a block or number of bytes for Byte transfer.
`public uint16_t `[`block_num`](#structsdmmc__xfer__desc__t_1a68e4fe6cfe5d7b6da13423b3bfab2d4b) | Number of blocks to be transferred, 1 for Byte transfer.

## Members

#### `public `[`sdmmc_xfer_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga11a2975a87e514babd71fff706744564)` `[`type`](#structsdmmc__xfer__desc__t_1a18830b409d1c5bd2a1f53d98b9e1b93c) 

Type of the transfer.

#### `public bool `[`write`](#structsdmmc__xfer__desc__t_1afaf01e93f2cccfe5c69327c83c58f07a) 

Indicate a write transfer.

#### `public `[`sdmmc_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga0cb33b64a4279b29e816220206cc46b5)` `[`cmd_idx`](#structsdmmc__xfer__desc__t_1a7a1e18750dd4d9e50c14efeb45c89738) 

Command index used for the transfer.

#### `public `[`sdmmc_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga49041beb07426755c85face87e70e5f2)` `[`resp_type`](#structsdmmc__xfer__desc__t_1ade428b324bb52ace1f600faf2877dcfc) 

Type of expected response for the transfer.

#### `public uint32_t `[`arg`](#structsdmmc__xfer__desc__t_1a1e676b7e804d4ddb8f7ee0a79f7e953b) 

Command argument used for the transfer.

#### `public uint16_t `[`block_size`](#structsdmmc__xfer__desc__t_1acaf8ec68d78b15490e1f3956bb2cdf15) 

Size of a block or number of bytes for Byte transfer.

#### `public uint16_t `[`block_num`](#structsdmmc__xfer__desc__t_1a68e4fe6cfe5d7b6da13423b3bfab2d4b) 

Number of blocks to be transferred, 1 for Byte transfer.

# struct `sdmmc_driver_t` 

Low-level SDIO/SD/MMC peripheral driver.

The low-level SDIO/SD/MMC peripheral driver interface as used by high-level SDIO/SD/MMC device API functions. It has to be implemented for a specific CPU.

High-level functions such as [sdmmc_read_blocks](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga3438a6d03cd98606a885462800e3ef89) are provided by the SDIO/SD/MMC API and should be used instead. Directly calling these functions is not recommended.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`init`](#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) | Basic initialization of the given SDIO/SD/MMC device.
`public int(* `[`send_cmd`](#structsdmmc__driver__t_1a7facc12cc04c7c219016103be3e5e2dd) | Send command to SDIO/SD/MMC Card and optionally wait for response.
`public int(* `[`card_init`](#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb) | Card Initialization and Identification.
`public int(* `[`set_bus_width`](#structsdmmc__driver__t_1a14290b51beafeb5d56669a28b4906e40) | Set data bus width.
`public int(* `[`set_clock_rate`](#structsdmmc__driver__t_1a8279b6dcc834387863c42f72ba062091) | Set SD CLK signal rate.
`public int(* `[`enable_clock`](#structsdmmc__driver__t_1a34770636b836cc8fc82caf4f1b0456d8) | Enable or disable the SD CLK signal.
`public int(* `[`xfer_prepare`](#structsdmmc__driver__t_1a991b2731d78787fadd6c50ab7af20470) | Prepare a data transfer.
`public int(* `[`xfer_execute`](#structsdmmc__driver__t_1a332bc0cee951ac6c393c553a460215d5) | Execute the data transfer.
`public int(* `[`xfer_finish`](#structsdmmc__driver__t_1accc93e4916aa1e023308b1b1bf03a762) | Finish the data transfer.

## Members

#### `public void(* `[`init`](#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) 

Basic initialization of the given SDIO/SD/MMC device.

Low-level SDIO/SD/MMC peripheral driver function for basic initialization of the peripheral including pin configuration of used pins. It is called by [sdmmc_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4c14dfd4d1ac66a3be2db55559750f9f) during the board initialization to prepare the SDIO/SD/MMC peripheral for further usage. Specific initialization parameters required for this initialization are defined in the board's `periph_conf.h`.

Errors like configuration parameter problems are not signaled by return values, but by using the `[assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53)`.

**See also**: [sdmmc_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4c14dfd4d1ac66a3be2db55559750f9f)

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to initialize

#### `public int(* `[`send_cmd`](#structsdmmc__driver__t_1a7facc12cc04c7c219016103be3e5e2dd) 

Send command to SDIO/SD/MMC Card and optionally wait for response.

Low-level SDIO/SD/MMC peripheral driver function to send command `cmd_idx` with argument `arg` to the SDIO/SD/MMC card. `resp_type` specifies the type of the response expected.

This function must not be used for application specific commands. The high-level SDIO/SD/MMC device API function [sdmmc_send_acmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad) is used instead.

To ensure that the [sdmmc_send_acmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad) function is used for application specific commands, the function must fail if the command `cmd_idx` is an application specific command (ACMDx). Use 
```cpp
assert((cmd_idx & SDMMC_ACMD_PREFIX) == 0);
```
 in the implementation of this function for that purpose.

The response has to be stored word-wise in host byte order in the buffer provided by `resp` as follows:

* `resp_type` = SDMMC_NO_R (No Response): `resp` can be NULL

* `resp_tpye` = SDMMC_R2 (Long Response): `resp` = { R[127:96], R[95:64], R[63:32], R[31:0] }

* `resp_type` = anything else (Short Response): `resp` = { R[39:8] }

The buffer provided by `resp` can be NULL if the response is not needed. However, the low-level SDIO/SD/MMC peripheral driver must receive the expected response, but does not store it in `resp` in that case.

R3 does not use CRC7 in CRC field but a fixed value of `0b111111`. The driver must check the CRC field for this response.

**See also**: [sdmmc_send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf37589dcedea43a9a1ca68245e2b576e) and [sdmmc_send_acmd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaa0f26ea97f1a1ea115fd761b695122ad)

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `cmd_idx` Command index 

* `arg` Command argument 

* `resp_type` Type of response expected 

* `resp` Buffer of 32-bit words to store the response if needed, otherwise NULL

#### Parameters
* `0` on success 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support the command or is in wrong state 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EBADMSG` on CRC7 error in response 

* `-EIO` on not further specified error incl. hardware errors

#### `public int(* `[`card_init`](#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb) 

Card Initialization and Identification.

Usually the standard procedure implemented by the high-level SDIO/SD/MMC device API function [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) is used for card initialization and identification (recommended). The low-level SDIO/SD/MMC peripheral driver should implement its own [sdmmc_driver_t::card_init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1ae7e0fef0c7a1ca3deb22844549d1cfcb) function only in very special cases, e.g. when special hardware handling is required. Therefore, this driver function should be set to NULL, that is the card initialization and identification function is not implemented by low-level SDIO/SD/MMC peripheral driver

**See also**: [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba)

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used

#### Parameters
* `0` on success 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card is not supported or can't operate under supplied voltage 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on card initialization and identification timeout 

* `-EBADMSG` on CRC7 error 

* `-EIO` on not further specified error incl. hardware errors

#### `public int(* `[`set_bus_width`](#structsdmmc__driver__t_1a14290b51beafeb5d56669a28b4906e40) 

Set data bus width.

Set the data bus width used by the SDIO/SD/MMC peripheral. The function is called by the high-level SDIO/SD/MMC device function [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) at the end of the card initialization and identification procedure to change the data bus width used by the SDIO/SD/MMC peripheral. The data bus width of the card has been already changed at that time by sending the ACMD6 (`SET_BUS_WIDTH`) command.

Supported data bus width depend on

* the card type,

* the mode in which the card operates and

* the SDIO/SD/MMC peripheral.

In identification mode, always 1-bit data bus width is used. When switching from the identification mode to the data transfer mode, the data bus width is changed. In data transfer mode, the data bus width depends on the type of the used card:

* MMCs V3.x support 4-bit data bus width

* MMCs V4.x support 8-bit data bus width

* SD Memory Cards support 4-bit data bus width

* SDIO Cards support 4-bit data bus width

* Embedded SDIO devices support 8-bit data bus width

The data bus width `width` is the minimum of the data bus width supported by the identified card and the data bus width [sdmmc_dev_t::bus_width](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1abf7983c8fcc1dbc16b4de874f981192c) configured for the SDIO/SD/MMC peripheral. The low-level SDIO/SD/MMC peripheral driver is responsible for correctly setting [sdmmc_dev_t::bus_width](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1abf7983c8fcc1dbc16b4de874f981192c) in the [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) function.

The [set_bus_width](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a14290b51beafeb5d56669a28b4906e40) function must not change [sdmmc_dev_t::bus_width](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1abf7983c8fcc1dbc16b4de874f981192c) because it is the configured data bus width which may be larger than the supported data bus width of the identified card.

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `width` Data bus width to be set

#### Parameters
* `0` on success 

* `-ENOTSUP` if SDIO/SD/MMC peripheral does not support the width 

* `-EIO` on not further specified error incl. hardware errors

#### `public int(* `[`set_clock_rate`](#structsdmmc__driver__t_1a8279b6dcc834387863c42f72ba062091) 

Set SD CLK signal rate.

Set the SD CLK rate used by the SDIO/SD/MMC peripheral. The clock frequency in identification mode f_OD is fixed and is 400 kHz. The actual clock frequency in data transfer mode f_PP depends on the SDIO/SD/MMC device and the card used.

The function is called by the high-level SDIO/SD/MMC device API function [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) at the end of the card identification procedure with `rate` set to any of the clock rates defined in [sdmmc_clock_rate_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga716a46ecf3e8ad8be8401d617ea36a01). The low-level SDIO/SD/MMC peripheral is responsible to set the clock rate to the highest value it supports for the identified card type.

`dev` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `rate` Clock rate to be set

#### Parameters
* `0` on success 

* `-ENOTSUP` if SDIO/SD/MMC peripheral does not support the clock rate 

* `-EIO` on not further specified error incl. hardware errors

#### `public int(* `[`enable_clock`](#structsdmmc__driver__t_1a34770636b836cc8fc82caf4f1b0456d8) 

Enable or disable the SD CLK signal.

The function is used by the SDIO/SD/MMC device API functions to enable or disable the SD CLK signal if the SDIO/SD/MMC peripheral driver does not support the Auto CLK feature (periph_sdmmc_auto_clk). It can be left NULL if the SDIO/SD/MMC peripheral driver does not support enabling or disabling the SD CLK signal.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `enable` enable SD CLK signal on true or disable the SD CLK signal on false

#### Parameters
* `0` on success 

* `-EIO` if the SD CLK signal could not be enabled or disabled

#### `public int(* `[`xfer_prepare`](#structsdmmc__driver__t_1a991b2731d78787fadd6c50ab7af20470) 

Prepare a data transfer.

Low-level SDIO/SD/MMC peripheral driver function to prepare a data transfer (read or write) in the SDIO/SD/MMC peripheral.

It is called by the high-level SDIO/SD/MMC device API function [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152) before it sends a block-oriented, stream or byte/multi-byte command to the card to start the transfer from or to the card.

A typical activity of this function is the configuration of the DMA transfer.

**See also**: [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152)

`dev` and `xfer` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `xfer` Transfer descriptor of type [sdmmc_xfer_desc_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__xfer__desc__t)

#### Parameters
* `0` on success 

* `-EINVAL` on invalid transfer parameters 

* `-EIO` on not further specified error incl. hardware errors

#### `public int(* `[`xfer_execute`](#structsdmmc__driver__t_1a332bc0cee951ac6c393c553a460215d5) 

Execute the data transfer.

Low-level SDIO/SD/MMC peripheral driver function to transfer the data (read or write) by the SDIO/SD/MMC peripheral.

It is called by the high-level SDIO/SD/MMC device API function [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152) after it sent the block-oriented, stream or byte/multi-byte command to start the transfer from or to the card.

The function returns the number of transferred blocks in `done`. Most SDIO/SD/MMC peripherals use a block or byte counter when transferring data, which can be used for this purpose.

If the SDIO/SD/MMC peripheral does not allow to determine the number of transferred blocks, the function must return `0` in `done` in case of an error or [sdmmc_xfer_desc_t::block_num](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__xfer__desc__t_1a68e4fe6cfe5d7b6da13423b3bfab2d4b) on success.

**See also**: [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152)

`dev` and `xfer` must not be `NULL`. `data_rd` must not be `NULL` for read transfers and `data_wr` must not be `NULL` for write transfers.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `xfer` Transfer descriptor of type [sdmmc_xfer_desc_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__xfer__desc__t)

* `data_wr` Buffer with data to write in write transfers, NULL otherwise 

* `data_rd` Buffer for data to read in read transfers, NULL otherwise 

* `done` Number of blocks transferred, can be `NULL`

#### Parameters
* `0` on success 

* `-ENODEV` if card is not present or not usable 

* `-ENOTSUP` if card does not support a used command or is in wrong state 

* `-EBUSY` if card is busy 

* `-EFAULT` on card status error 

* `-ETIMEDOUT` on timeout condition 

* `-EINVAL` on invalid transfer parameters 

* `-EBADMSG` on CRC7 error in data 

* `-ENOMEM` on RX FIFO overflow or TX FIFO underrun error 

* `-EIO` on not further specified error incl. hardware errors

#### `public int(* `[`xfer_finish`](#structsdmmc__driver__t_1accc93e4916aa1e023308b1b1bf03a762) 

Finish the data transfer.

Low-level SDIO/SD/MMC peripheral driver function to terminate a data transfer (read or write) in the SDIO/SD/MMC peripheral.

It is called by the high-level SDIO/SD/MMC device API function [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152) after the data transfer has been executed and the stop command (CMD12) has been sent if necessary.

**See also**: [sdmmc_xfer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga38efc43e662cf77e814c8b5170ce3152)

`dev` and `xfer` must not be `NULL`.

#### Parameters
* `dev` SDIO/SD/MMC device to be used 

* `xfer` Transfer descriptor of type [sdmmc_xfer_desc_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__xfer__desc__t)

#### Parameters
* `0` on success 

* `-EIO` on not further specified error incl. hardware errors

# struct `sdmmc_dev` 

SDIO/SD/MMC device descriptor.

The device descriptor holds all required information about the SDIO/SD/MMC device and the card that is used by this decive.

Most of the information is determined or collected during the card initialization and identification procedure by the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function. However, some information must be determined and collected by the low-level SDIO/SD/MMC peripheral driver. These are

* [sdmmc_dev_t::driver](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1a98af2c5a54bd013208daa3c4f6eccf31)

* [sdmmc_dev_t::present](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1ac0e9bc5739851510d3e0b20f4d965304)

* [sdmmc_dev_t::status](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1a660ba858991085cbf9ee63440314631d)

* [sdmmc_dev_t::bus_width](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1abf7983c8fcc1dbc16b4de874f981192c)

* [sdmmc_dev_t::spi_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__dev_1a5b9951bbaa3a831313d8abdea2b1839f)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`sdmmc_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t)` * `[`driver`](#structsdmmc__dev_1a98af2c5a54bd013208daa3c4f6eccf31) | Low-level SDIO/SD/MMC peripheral driver.
`public `[`sdmmc_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga914c33b806fbe4d51f5fb9af9c07360f)` `[`event_cb`](#structsdmmc__dev_1a9d3886ed627ac326adbc140d43db2ac7) | The application can register an event callback function of type [sdmmc_event_cb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga914c33b806fbe4d51f5fb9af9c07360f) which is called when one of the defined events ([sdmmc_event_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gacf3d8d33331e1ae9810f56d2410ea524)) is generated by the SDIO/SD/MMC driver.
`public `[`sdmmc_cid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#unionsdmmc__cid__t)` `[`cid`](#structsdmmc__dev_1a3de1f15d7f35c5397aeb112d8ecc6559) | CID register of the SD/MMC Card, read during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.
`public `[`sdmmc_scr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__scr__t)` `[`scr`](#structsdmmc__dev_1a3584f55c0535c56e13981a4cff049f3e) | SCR register of the SD Card, read during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.
`public `[`sdmmc_csd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#unionsdmmc__csd__t)` `[`csd`](#structsdmmc__dev_1aba1405d6f65f4e70b37d7840cb9b2378) | CSD register of the SD/MMC Card, read during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.
`public uint32_t `[`status`](#structsdmmc__dev_1a660ba858991085cbf9ee63440314631d) | Last SDIO/SD/MMC Card status reported in R1 response.
`public uint16_t `[`rca`](#structsdmmc__dev_1a33bc5b33ebd862218ce74a2c7958cff8) | Relative Card Address (RCA) of the SDIO/SD/MMC Card as determined during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.
`public `[`sdmmc_card_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8922cf164eae071d1669d245d710cd8e)` `[`type`](#structsdmmc__dev_1a80ab9ef89e189fa28f23985ceac7509b) | Type of the SDIO/SD/MMC Card as identified during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function (default [SDMMC_CARD_TYPE_UNKNOWN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gga8922cf164eae071d1669d245d710cd8ead2752eb180f7ddd9191af7015664d33e)).
`public `[`sdmmc_bus_width_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf7703d21c829e1ab436272c69f718706)` `[`bus_width`](#structsdmmc__dev_1abf7983c8fcc1dbc16b4de874f981192c) | Data bus width supported by the SDIO/SD/MMC device (default [SDMMC_BUS_WIDTH_1BIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ggaf7703d21c829e1ab436272c69f718706a1ba269ae6646165280a4fb001f97d6c2)).
`public bool `[`present`](#structsdmmc__dev_1ac0e9bc5739851510d3e0b20f4d965304) | Indicates whether a card is present.
`public bool `[`init_done`](#structsdmmc__dev_1a01a2cfd8e856c58d2a272d9d6c618aca) | Indicates whether the card is initialized (default `false`).
`public bool `[`s18v_support`](#structsdmmc__dev_1adb9028149978c95f17301304042c6246) | Indicates whether the SDIO/SD/MMC peripheral supports the switching to 1.8V (default `false`).
`public bool `[`s18v_allowed`](#structsdmmc__dev_1a4cb76807910e1641e37cb2424c0f6bbe) | Indicates whether the card supports the switching to 1.8V (default `false`).
`public bool `[`spi_mode`](#structsdmmc__dev_1a5b9951bbaa3a831313d8abdea2b1839f) | Indicates whether SPI mode is used by the SDIO/SD/MMC device (default `false`).

## Members

#### `public const `[`sdmmc_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t)` * `[`driver`](#structsdmmc__dev_1a98af2c5a54bd013208daa3c4f6eccf31) 

Low-level SDIO/SD/MMC peripheral driver.

It has to be set by the low-level SDIO/SD/MMC driver during the initialization.

#### `public `[`sdmmc_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga914c33b806fbe4d51f5fb9af9c07360f)` `[`event_cb`](#structsdmmc__dev_1a9d3886ed627ac326adbc140d43db2ac7) 

The application can register an event callback function of type [sdmmc_event_cb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga914c33b806fbe4d51f5fb9af9c07360f) which is called when one of the defined events ([sdmmc_event_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gacf3d8d33331e1ae9810f56d2410ea524)) is generated by the SDIO/SD/MMC driver.

The function is called in the ISR context. Do not do anything comprehensive or time-consuming. Instead, use `thread_flags`, `event_queue` or `msg` mechanism to inform a thread about the event, which then handles the event asynchronously in thread context.

#### `public `[`sdmmc_cid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#unionsdmmc__cid__t)` `[`cid`](#structsdmmc__dev_1a3de1f15d7f35c5397aeb112d8ecc6559) 

CID register of the SD/MMC Card, read during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.

It is not supported by SDIO cards and reflects the CID of the memory portion in case of Combo cards.

#### `public `[`sdmmc_scr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__scr__t)` `[`scr`](#structsdmmc__dev_1a3584f55c0535c56e13981a4cff049f3e) 

SCR register of the SD Card, read during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.

It is not supported by SDIO and MMC cards. It reflects the SCR of the memory portion in case of Combo cards.

#### `public `[`sdmmc_csd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#unionsdmmc__csd__t)` `[`csd`](#structsdmmc__dev_1aba1405d6f65f4e70b37d7840cb9b2378) 

CSD register of the SD/MMC Card, read during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.

It is not supported by SDIO cards. It reflects the CSD of the memory portion in case of Combo cards.

#### `public uint32_t `[`status`](#structsdmmc__dev_1a660ba858991085cbf9ee63440314631d) 

Last SDIO/SD/MMC Card status reported in R1 response.

It is set by the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::send_cmd](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1a7facc12cc04c7c219016103be3e5e2dd).

#### `public uint16_t `[`rca`](#structsdmmc__dev_1a33bc5b33ebd862218ce74a2c7958cff8) 

Relative Card Address (RCA) of the SDIO/SD/MMC Card as determined during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function.

#### `public `[`sdmmc_card_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8922cf164eae071d1669d245d710cd8e)` `[`type`](#structsdmmc__dev_1a80ab9ef89e189fa28f23985ceac7509b) 

Type of the SDIO/SD/MMC Card as identified during the initialization and identification procedure in the [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba) function (default [SDMMC_CARD_TYPE_UNKNOWN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gga8922cf164eae071d1669d245d710cd8ead2752eb180f7ddd9191af7015664d33e)).

#### `public `[`sdmmc_bus_width_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1gaf7703d21c829e1ab436272c69f718706)` `[`bus_width`](#structsdmmc__dev_1abf7983c8fcc1dbc16b4de874f981192c) 

Data bus width supported by the SDIO/SD/MMC device (default [SDMMC_BUS_WIDTH_1BIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ggaf7703d21c829e1ab436272c69f718706a1ba269ae6646165280a4fb001f97d6c2)).

It has to be set by the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955). It is either hard-configured for the SDIO/SD/MMC device or detected during its initialization.

#### `public bool `[`present`](#structsdmmc__dev_1ac0e9bc5739851510d3e0b20f4d965304) 

Indicates whether a card is present.

It has to be set by the low-level SDIO/SD/MMC peripheral driver in function [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) and if the card is removed or inserted. Either the CD signal is used if available, or it must be set to `true` by default.

#### `public bool `[`init_done`](#structsdmmc__dev_1a01a2cfd8e856c58d2a272d9d6c618aca) 

Indicates whether the card is initialized (default `false`).

It is set by the initialization and identification procedure in function [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba).

#### `public bool `[`s18v_support`](#structsdmmc__dev_1adb9028149978c95f17301304042c6246) 

Indicates whether the SDIO/SD/MMC peripheral supports the switching to 1.8V (default `false`).

It has to be set by the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955) if supported.

#### `public bool `[`s18v_allowed`](#structsdmmc__dev_1a4cb76807910e1641e37cb2424c0f6bbe) 

Indicates whether the card supports the switching to 1.8V (default `false`).

It is set during the initialization and identification procedure in function [sdmmc_card_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga8f38aee0dad654c7200e973ebe22a0ba).

#### `public bool `[`spi_mode`](#structsdmmc__dev_1a5b9951bbaa3a831313d8abdea2b1839f) 

Indicates whether SPI mode is used by the SDIO/SD/MMC device (default `false`).

It has to be set by the low-level SDIO/SD/MMC peripheral driver function [sdmmc_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdmmc.md#structsdmmc__driver__t_1aa2b8f7bd321d99c509648bddba74f955).

