---
title: api-drivers_pn532.md
description: api-drivers_pn532.md
---
# group `drivers_pn532` 

PN532 NFC radio device driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PN532_ISO14443A_4_LEN_FROM_BUFFER`](#group__drivers__pn532_1gaf28081b1595245faf3c6218dd35eb778)            | Obtain Tag 4 data length from buffer.
`enum `[`pn532_mode_t`](#group__drivers__pn532_1ga524a756a9648c28fc0219995b4f1d91b)            | Working mode of the PN532.
`enum `[`pn532_sam_conf_mode_t`](#group__drivers__pn532_1ga3dc2bfb1679f73d8b3ece70e465fb729)            | Possible SAM configurations.
`enum `[`pn532_target_t`](#group__drivers__pn532_1ga763e4c707a2be0900ca4020710001a74)            | PN532 supported targets.
`enum `[`nfc_iso14443a_type_t`](#group__drivers__pn532_1ga7b771be422bac43ac17b793958d61df0)            | ISO14443A Card types.
`enum `[`pn532_mifare_key_t`](#group__drivers__pn532_1ga49667d6b8b2dfa0d62750a81f26bbd28)            | Mifare keys.
`public void `[`pn532_reset`](#group__drivers__pn532_1ga8692ea8f0cc031be4b8d53b8e4f183ae)`(const `[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev)`            | Hard reset the chipset.
`public int `[`pn532_init`](#group__drivers__pn532_1ga2db3ab10040c7632f37c06e1e4771e1f)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * params,`[`pn532_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga524a756a9648c28fc0219995b4f1d91b)` mode)`            | Initialize the module and peripherals.
`public inline static int `[`pn532_init_i2c`](#group__drivers__pn532_1ga9d37de40396b03b15641ab665f972adf)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * params)`            | Initialization of PN532 using i2c.
`public inline static int `[`pn532_init_spi`](#group__drivers__pn532_1gac4658a4945c7aa22097e1bf40334771b)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * params)`            | Initialization of PN532 using spi.
`public int `[`pn532_fw_version`](#group__drivers__pn532_1ga280b80e887c7294bff6b08d7013a68c1)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,uint32_t * fw_ver)`            | Get the firmware version of the pn532.
`public int `[`pn532_read_reg`](#group__drivers__pn532_1gabe91a4d3302310d4cabab1d45eaffba5)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * out,unsigned addr)`            | Read register of the pn532.
`public int `[`pn532_write_reg`](#group__drivers__pn532_1gacba8ce33b6388c8cb8d544e6f271d230)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,unsigned addr,char val)`            | Write register of the pn532.
`public int `[`pn532_sam_configuration`](#group__drivers__pn532_1ga4fae3953ec29b2c48535510eceac0da3)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`pn532_sam_conf_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga3dc2bfb1679f73d8b3ece70e465fb729)` mode,unsigned timeout)`            | Set new settings for the Security Access Module.
`public int `[`pn532_get_passive_iso14443a`](#group__drivers__pn532_1ga655baa18d88943455a9d123dbf63f34e)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * out,unsigned max_retries)`            | Get one ISO14443-A passive target.
`public int `[`pn532_mifareclassic_authenticate`](#group__drivers__pn532_1gab281425b7f72854e13565f65927535e1)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,`[`pn532_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga49667d6b8b2dfa0d62750a81f26bbd28)` keyid,char * key,unsigned block)`            | Authenticate a Mifare classic card.
`public int `[`pn532_mifareclassic_read`](#group__drivers__pn532_1ga85ba7dc4e7fdf2914e5fb6ee0ca75a03)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * odata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned block)`            | Read a block of a Mifare classic card.
`public int `[`pn532_mifareclassic_write`](#group__drivers__pn532_1ga528bd9809d72d5e1d6ec179b8dc9ccdf)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * idata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned block)`            | Write a block of a Mifare classic card.
`public int `[`pn532_mifareulight_read`](#group__drivers__pn532_1ga8f89bee45a20669d0375d8ce86cb0335)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * odata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned page)`            | Read a block of a Mifare Ultralight card.
`public int `[`pn532_iso14443a_4_activate`](#group__drivers__pn532_1ga1729b09e8f90dee051d77c264c1bca98)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card)`            | Activate the NDEF file of a ISO14443-A Type 4 tag.
`public int `[`pn532_iso14443a_4_read`](#group__drivers__pn532_1ga060914913939dfcac5bac801c040c9a2)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * odata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned offset,char len)`            | Read data from the NDEF file of a ISO14443-A Type 4 tag.
`public void `[`pn532_deselect_passive`](#group__drivers__pn532_1ga095c658359851a3366802b52cd713886)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,unsigned target_id)`            | Deselect a previously selected passive card.
`public void `[`pn532_release_passive`](#group__drivers__pn532_1ga5b7e58da0c25f80ad1bb44348ecfd7a5)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,unsigned target_id)`            | Release an active passive card.
`struct `[`pn532_params_t`](#structpn532__params__t) | Data structure with the configuration parameters.
`struct `[`pn532_t`](#structpn532__t) | Device descriptor for the PN532.
`struct `[`nfc_iso14443a_t`](#structnfc__iso14443a__t) | ISO14443A tag description.

## Members

#### `define `[`PN532_ISO14443A_4_LEN_FROM_BUFFER`](#group__drivers__pn532_1gaf28081b1595245faf3c6218dd35eb778) 

Obtain Tag 4 data length from buffer.

This is useful in case the length has been read and one intents to read the data.

#### `enum `[`pn532_mode_t`](#group__drivers__pn532_1ga524a756a9648c28fc0219995b4f1d91b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PN532_I2C            | 
PN532_SPI            | 

Working mode of the PN532.

#### `enum `[`pn532_sam_conf_mode_t`](#group__drivers__pn532_1ga3dc2bfb1679f73d8b3ece70e465fb729) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PN532_SAM_NORMAL            | 
PN532_SAM_VIRTUAL            | 
PN532_SAM_WIRED            | 
PN532_SAM_DUAL            | 

Possible SAM configurations.

#### `enum `[`pn532_target_t`](#group__drivers__pn532_1ga763e4c707a2be0900ca4020710001a74) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PN532_BR_106_ISO_14443_A            | 
PN532_BR_212_FELICA            | 
PN532_BR_424_FELICA            | 
PN532_BR_106_ISO_14443_B            | 
PN532_BR_106_JEWEL            | 

PN532 supported targets.

#### `enum `[`nfc_iso14443a_type_t`](#group__drivers__pn532_1ga7b771be422bac43ac17b793958d61df0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISO14443A_UNKNOWN            | 
ISO14443A_MIFARE            | 
ISO14443A_TYPE4            | 

ISO14443A Card types.

#### `enum `[`pn532_mifare_key_t`](#group__drivers__pn532_1ga49667d6b8b2dfa0d62750a81f26bbd28) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PN532_MIFARE_KEY_A            | 
PN532_MIFARE_KEY_B            | 

Mifare keys.

#### `public void `[`pn532_reset`](#group__drivers__pn532_1ga8692ea8f0cc031be4b8d53b8e4f183ae)`(const `[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev)` 

Hard reset the chipset.

The chipset is reset by toggling the reset pins

#### Parameters
* `dev` target device

#### `public int `[`pn532_init`](#group__drivers__pn532_1ga2db3ab10040c7632f37c06e1e4771e1f)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * params,`[`pn532_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga524a756a9648c28fc0219995b4f1d91b)` mode)` 

Initialize the module and peripherals.

This is the first method to be called in order to interact with the pn532. It configures the GPIOs and the i2c/spi interface (depending on `mode`).

#### Parameters
* `dev` target device 

* `params` configuration parameters 

* `mode` initialization mode

#### Returns
0 on success 

#### Returns
<0 i2c/spi initialization error, the value is given by the i2c/spi init method.

#### `public inline static int `[`pn532_init_i2c`](#group__drivers__pn532_1ga9d37de40396b03b15641ab665f972adf)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * params)` 

Initialization of PN532 using i2c.

**See also**: [pn532_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga2db3ab10040c7632f37c06e1e4771e1f) for parameter and return value details 

Use `pn532_i2c` module to use this function.

#### `public inline static int `[`pn532_init_spi`](#group__drivers__pn532_1gac4658a4945c7aa22097e1bf40334771b)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * params)` 

Initialization of PN532 using spi.

**See also**: [pn532_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga2db3ab10040c7632f37c06e1e4771e1f) for parameter and return value details 

Use `pn532_spi` module to use this function.

#### `public int `[`pn532_fw_version`](#group__drivers__pn532_1ga280b80e887c7294bff6b08d7013a68c1)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,uint32_t * fw_ver)` 

Get the firmware version of the pn532.

The firmware version returned is a 4 byte long value:

* ic version,

* fw version,

* fw revision

* feature support

#### Parameters
* `dev` target device 

* `fw_ver` encoded firmware version

#### Returns
0 on success

#### `public int `[`pn532_read_reg`](#group__drivers__pn532_1gabe91a4d3302310d4cabab1d45eaffba5)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * out,unsigned addr)` 

Read register of the pn532.

Refer to the datasheet for a comprehensive list of registers and meanings. For SFR registers the high byte must be set to 0xff.

[http://www.nxp.com/documents/user_manual/141520.pdf](http://www.nxp.com/documents/user_manual/141520.pdf)

#### Parameters
* `dev` target device 

* `out` value of the register 

* `addr` address of the register to read

#### Returns
0 on success

#### `public int `[`pn532_write_reg`](#group__drivers__pn532_1gacba8ce33b6388c8cb8d544e6f271d230)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,unsigned addr,char val)` 

Write register of the pn532.

Refer to the datasheet for a comprehensive list of registers and meanings.

[http://www.nxp.com/documents/user_manual/141520.pdf](http://www.nxp.com/documents/user_manual/141520.pdf)

#### Parameters
* `dev` target device 

* `addr` address of the register to read 

* `val` value to write in the register

#### Returns
0 on success

#### `public int `[`pn532_sam_configuration`](#group__drivers__pn532_1ga4fae3953ec29b2c48535510eceac0da3)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`pn532_sam_conf_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga3dc2bfb1679f73d8b3ece70e465fb729)` mode,unsigned timeout)` 

Set new settings for the Security Access Module.

#### Parameters
* `dev` target device 

* `mode` new mode for the SAM 

* `timeout` timeout for Virtual Card mode with LSB of 50ms. (0 = infinite and 0xFF = 12.75s)

#### Returns
0 on success

#### `public int `[`pn532_get_passive_iso14443a`](#group__drivers__pn532_1ga655baa18d88943455a9d123dbf63f34e)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * out,unsigned max_retries)` 

Get one ISO14443-A passive target.

This method blocks until a target is detected.

#### Parameters
* `dev` target device 

* `out` target to be stored 

* `max_retries` maximum number of attempts to activate a target (0xff blocks indefinitely)

#### Returns
0 on success 

#### Returns
-1 when no card detected (if non blocking)

#### `public int `[`pn532_mifareclassic_authenticate`](#group__drivers__pn532_1gab281425b7f72854e13565f65927535e1)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,`[`pn532_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga49667d6b8b2dfa0d62750a81f26bbd28)` keyid,char * key,unsigned block)` 

Authenticate a Mifare classic card.

This operation must be done before reading or writing the segment.

#### Parameters
* `dev` target device 

* `card` card to use 

* `keyid` which key to use 

* `key` buffer containing the key 

* `block` which block to authenticate

#### Returns
0 on success

#### `public int `[`pn532_mifareclassic_read`](#group__drivers__pn532_1ga85ba7dc4e7fdf2914e5fb6ee0ca75a03)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * odata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned block)` 

Read a block of a Mifare classic card.

The block size is 16 bytes and it must be authenticated before read.

#### Parameters
* `dev` target device 

* `odata` buffer where to store the data 

* `card` card to use 

* `block` which block to read

#### Returns
0 on success

#### `public int `[`pn532_mifareclassic_write`](#group__drivers__pn532_1ga528bd9809d72d5e1d6ec179b8dc9ccdf)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * idata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned block)` 

Write a block of a Mifare classic card.

The block size is 16 bytes and it must be authenticated before written.

#### Parameters
* `dev` target device 

* `idata` buffer containing the data to write 

* `card` card to use 

* `block` which block to write to

#### Returns
0 on success

#### `public int `[`pn532_mifareulight_read`](#group__drivers__pn532_1ga8f89bee45a20669d0375d8ce86cb0335)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * odata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned page)` 

Read a block of a Mifare Ultralight card.

The block size is 32 bytes and it must be authenticated before read.

#### Parameters
* `dev` target device 

* `odata` buffer where to store the data 

* `card` card to use 

* `page` which block to read

#### Returns
0 on success

#### `public int `[`pn532_iso14443a_4_activate`](#group__drivers__pn532_1ga1729b09e8f90dee051d77c264c1bca98)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card)` 

Activate the NDEF file of a ISO14443-A Type 4 tag.

#### Parameters
* `dev` target device 

* `card` card to activate

#### Returns
0 on success

#### `public int `[`pn532_iso14443a_4_read`](#group__drivers__pn532_1ga060914913939dfcac5bac801c040c9a2)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,char * odata,`[`nfc_iso14443a_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structnfc__iso14443a__t)` * card,unsigned offset,char len)` 

Read data from the NDEF file of a ISO14443-A Type 4 tag.

The first two bytes of an NDEF file are the length of the data. Afterwards, at offset 0x02 starts the data itself. If one tries to read further than the end of the data no data is returned.

#### Parameters
* `dev` target device 

* `odata` buffer where to store the data 

* `card` card to activate 

* `offset` offset where to start reading 

* `len` length to read

#### Returns
0 on success

#### `public void `[`pn532_deselect_passive`](#group__drivers__pn532_1ga095c658359851a3366802b52cd713886)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,unsigned target_id)` 

Deselect a previously selected passive card.

#### Parameters
* `dev` target device 

* `target_id` id of the target to deselect (0x00 for all)

#### `public void `[`pn532_release_passive`](#group__drivers__pn532_1ga5b7e58da0c25f80ad1bb44348ecfd7a5)`(`[`pn532_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__t)` * dev,unsigned target_id)` 

Release an active passive card.

#### Parameters
* `dev` target device 

* `target_id` id of the target to release (0x00 for all)

# struct `pn532_params_t` 

Data structure with the configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structpn532__params__t_1a490d5a9751574551e3a87cdb5084fc81) | I2C device.
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structpn532__params__t_1ae5da659aaf22dd2e5645af60e5d7f3ba) | SPI device.
`public union pn532_params_t::@240 `[`@241`](#structpn532__params__t_1ac31eb57b57441f17fa8545151e673c7c) | 
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset`](#structpn532__params__t_1a48f9a72ddd76a35653a08f5b417dea22) | Reset pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structpn532__params__t_1ae62aadfc5aabdc513904ad25b706f464) | Interrupt pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss`](#structpn532__params__t_1a12ff80c3953d07a8bb40d6ab128d2158) | Chip Select pin (only SPI)

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structpn532__params__t_1a490d5a9751574551e3a87cdb5084fc81) 

I2C device.

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structpn532__params__t_1ae5da659aaf22dd2e5645af60e5d7f3ba) 

SPI device.

#### `public union pn532_params_t::@240 `[`@241`](#structpn532__params__t_1ac31eb57b57441f17fa8545151e673c7c) 

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset`](#structpn532__params__t_1a48f9a72ddd76a35653a08f5b417dea22) 

Reset pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structpn532__params__t_1ae62aadfc5aabdc513904ad25b706f464) 

Interrupt pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss`](#structpn532__params__t_1a12ff80c3953d07a8bb40d6ab128d2158) 

Chip Select pin (only SPI)

# struct `pn532_t` 

Device descriptor for the PN532.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * `[`conf`](#structpn532__t_1aa7a6c4ab50b4a48897904f248e932bc2) | Configuration struct.
`public `[`pn532_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga524a756a9648c28fc0219995b4f1d91b)` `[`mode`](#structpn532__t_1aaa363a5854fead5800420a999cb1723d) | Working mode (i2c, spi)
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`trap`](#structpn532__t_1ac7f42d660347eb4464c820ec34f3e732) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to wait for chip response.

## Members

#### `public const `[`pn532_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pn532.md#structpn532__params__t)` * `[`conf`](#structpn532__t_1aa7a6c4ab50b4a48897904f248e932bc2) 

Configuration struct.

#### `public `[`pn532_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga524a756a9648c28fc0219995b4f1d91b)` `[`mode`](#structpn532__t_1aaa363a5854fead5800420a999cb1723d) 

Working mode (i2c, spi)

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`trap`](#structpn532__t_1ac7f42d660347eb4464c820ec34f3e732) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to wait for chip response.

# struct `nfc_iso14443a_t` 

ISO14443A tag description.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char `[`target`](#structnfc__iso14443a__t_1a28aaaeb3bd6cb80d1eda9371cb4072c2) | Target.
`public char `[`auth`](#structnfc__iso14443a__t_1a2e475740004a7014c388d1bc78c01703) | Card has been authenticated.
`public char `[`id_len`](#structnfc__iso14443a__t_1afdcc6e4935d0a8d7b012489391e25f78) | Length of the ID field.
`public char `[`sel_res`](#structnfc__iso14443a__t_1a3186680e64b994819318c767a3f49f4f) | SEL_RES.
`public unsigned `[`sns_res`](#structnfc__iso14443a__t_1a82ba51d1f89c797385614e25dcaa32aa) | SNS_RES.
`public `[`nfc_iso14443a_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga7b771be422bac43ac17b793958d61df0)` `[`type`](#structnfc__iso14443a__t_1aab04ec1c74cd8049c3e83080f691fdd4) | Type of ISO14443A card.
`public char `[`id`](#structnfc__iso14443a__t_1aa5012f4e8e4c376f0dc48ded52ccb5e6) | Card ID (length given by id_len)

## Members

#### `public char `[`target`](#structnfc__iso14443a__t_1a28aaaeb3bd6cb80d1eda9371cb4072c2) 

Target.

#### `public char `[`auth`](#structnfc__iso14443a__t_1a2e475740004a7014c388d1bc78c01703) 

Card has been authenticated.

Do not modify manually

#### `public char `[`id_len`](#structnfc__iso14443a__t_1afdcc6e4935d0a8d7b012489391e25f78) 

Length of the ID field.

#### `public char `[`sel_res`](#structnfc__iso14443a__t_1a3186680e64b994819318c767a3f49f4f) 

SEL_RES.

#### `public unsigned `[`sns_res`](#structnfc__iso14443a__t_1a82ba51d1f89c797385614e25dcaa32aa) 

SNS_RES.

#### `public `[`nfc_iso14443a_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pn532_1ga7b771be422bac43ac17b793958d61df0)` `[`type`](#structnfc__iso14443a__t_1aab04ec1c74cd8049c3e83080f691fdd4) 

Type of ISO14443A card.

#### `public char `[`id`](#structnfc__iso14443a__t_1aa5012f4e8e4c376f0dc48ded52ccb5e6) 

Card ID (length given by id_len)

