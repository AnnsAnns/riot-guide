---
title: api-drivers_at24cxxx.md
description: api-drivers_at24cxxx.md
---
# group `drivers_at24cxxx` 

Device driver interface for the AT24CXXX EEPROM units.

OverviewVarious manufacturers such as Atmel/Microchip or ST offer small I2C EEPROMs which usually come in 8-pin packages and are used for persistent data storage of settings, counters, etc. This driver adds support for these devices with direct read and write functions.

The high level wrapper for RIOTs MTD interface to utilize the I2C EEPROMs as MTD storage is described in drivers_mtd_at24cxxx.

A list of supported devices can be found in the [at24cxxx_defines.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at24cxxx__defines_8h) file.

UsageThe preconfigured devices in the [at24cxxx_defines.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at24cxxx__defines_8h) file devices are easily accessible as pseudomodules and can be added to the Makefile of your project:  USEMODULE += at24c02
 When using one of the pseudomodules, the configuration of the device is already predefined in the AT24CXXX_PARAMS macro and can be used for the initialization:  at24cxxx_t eeprom_dev;
 at24cxxx_params_t eeprom_params = AT24CXXX_PARAMS;

 at24cxxx_init(&eeprom_dev, &eeprom_params);

For other devices that are not yet part of the library, the generic module has to be added:  USEMODULE += at24cxxx
 The predefined macro can not be used in this case, so the parameters of the device have to be added to the at24cxxx_params_t structure manually with the values from the corresponding datasheet:  at24cxxx_t eeprom_dev;
 at24cxxx_params_t eeprom_params = {
     .i2c = I2C_DEV(0), \
     ...
 };

 at24cxxx_init(&eeprom_dev, &eeprom_params);

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@155`](#group__drivers__at24cxxx_1gabe821d0fac05333be298917dcb50ee1d)            | Return values.
`public int `[`at24cxxx_init`](#group__drivers__at24cxxx_1gaa2176ff20fd758839da905411b0cba97)`(`[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,const `[`at24cxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga590c703d3d9df73aeef6782fe7f2f251)` * params)`            | Initialize an AT24CXXX device handle with AT24CXXX parameters.
`public int `[`at24cxxx_read_byte`](#group__drivers__at24cxxx_1ga63551d78ccd00289b0e29b075a148a55)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,void * dest)`            | Read a byte at a given position `pos`.
`public int `[`at24cxxx_read`](#group__drivers__at24cxxx_1gaa9a7ef547880420385217d1c92a71180)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,void * data,size_t len)`            | Sequentially read `len` bytes from a given position `pos`.
`public int `[`at24cxxx_write_byte`](#group__drivers__at24cxxx_1ga2716c43085967ac9d164a138a3b5c8d7)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,uint8_t data)`            | Write a byte at a given position `pos`.
`public int `[`at24cxxx_write`](#group__drivers__at24cxxx_1gad8b6b4343a0090a83a3769dfb6dfbfb1)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,const void * data,size_t len)`            | Sequentially write `len` bytes from a given position `pos`.
`public int `[`at24cxxx_set`](#group__drivers__at24cxxx_1gab38366e9edeb870baf72d126e1655f34)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,uint8_t val,size_t len)`            | Set `len` bytes from a given position `pos` to the value `val`.
`public int `[`at24cxxx_clear`](#group__drivers__at24cxxx_1ga553b7cab9e3474d698759173a9c66c33)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,size_t len)`            | Set `len` bytes from position `pos` to AT24CXXX_CLEAR_BYTE.
`public int `[`at24cxxx_erase`](#group__drivers__at24cxxx_1ga652841bd7e9e1686f0545614d6b12910)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev)`            | Set the entire EEPROM memory to AT24CXXX_CLEAR_BYTE.
`public int `[`at24cxxx_enable_write_protect`](#group__drivers__at24cxxx_1ga242b91c3d1b701588d887bb0b60f295e)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev)`            | Enable write protection.
`public int `[`at24cxxx_disable_write_protect`](#group__drivers__at24cxxx_1gac672fca6f474625234205ec9c50d37cb)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev)`            | Disable write protection.
`struct `[`at24cxxx_params`](#structat24cxxx__params) | Struct that holds initialization parameters.
`struct `[`at24cxxx_t`](#structat24cxxx__t) | Struct that represents an AT24CXXX device.

## Members

#### `enum `[`@155`](#group__drivers__at24cxxx_1gabe821d0fac05333be298917dcb50ee1d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AT24CXXX_OK            | 
AT24CXXX_I2C_ERROR            | 

Return values.

#### `public int `[`at24cxxx_init`](#group__drivers__at24cxxx_1gaa2176ff20fd758839da905411b0cba97)`(`[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,const `[`at24cxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga590c703d3d9df73aeef6782fe7f2f251)` * params)` 

Initialize an AT24CXXX device handle with AT24CXXX parameters.

#### Parameters
* `dev` AT24CXXX device handle 

* `params` AT24CXXX parameters

#### Returns
AT24CXXX_OK on success 

#### Returns
-AT24CXXX_I2C_ERROR if i2c could not be acquired 

#### Returns
-EINVAL if input parameters are NULL

#### `public int `[`at24cxxx_read_byte`](#group__drivers__at24cxxx_1ga63551d78ccd00289b0e29b075a148a55)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,void * dest)` 

Read a byte at a given position `pos`.

#### Parameters
* `dev` AT24CXXX device handle 

* `pos` Position in EEPROM memory 

* `dest` Read byte

#### Returns
AT24CXXX_OK on success 

#### Returns
-ERANGE if `pos` is out of bounds 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`at24cxxx_read`](#group__drivers__at24cxxx_1gaa9a7ef547880420385217d1c92a71180)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,void * data,size_t len)` 

Sequentially read `len` bytes from a given position `pos`.

#### Parameters
* `dev` AT24CXXX device handle 

* `pos` Position in EEPROM memory 

* `data` Read buffer 

* `len` Requested length to be read

#### Returns
AT24CXXX_OK on success 

#### Returns
-ERANGE if `pos` + `len` is out of bounds 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`at24cxxx_write_byte`](#group__drivers__at24cxxx_1ga2716c43085967ac9d164a138a3b5c8d7)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,uint8_t data)` 

Write a byte at a given position `pos`.

#### Parameters
* `dev` AT24CXXX device handle 

* `pos` Position in EEPROM memory 

* `data` Value to be written

#### Returns
AT24CXXX_OK on success 

#### Returns
-ERANGE if `pos` is out of bounds 

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`at24cxxx_write`](#group__drivers__at24cxxx_1gad8b6b4343a0090a83a3769dfb6dfbfb1)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,const void * data,size_t len)` 

Sequentially write `len` bytes from a given position `pos`.

Writing is performed in chunks of size AT24CXXX_PAGE_SIZE.

#### Parameters
* `dev` AT24CXXX device handle 

* `pos` Position in EEPROM memory 

* `data` Write buffer 

* `len` Requested length to be written

#### Returns
AT24CXXX_OK on success 

#### Returns
-ERANGE if `pos` + `len` is out of bounds 

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`at24cxxx_set`](#group__drivers__at24cxxx_1gab38366e9edeb870baf72d126e1655f34)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,uint8_t val,size_t len)` 

Set `len` bytes from a given position `pos` to the value `val`.

Writing is performed in chunks of size AT24CXXX_SET_BUFFER_SIZE.

#### Parameters
* `dev` AT24CXXX device handle 

* `pos` Position in EEPROM memory 

* `val` Value to be set 

* `len` Requested length to be written

#### Returns
AT24CXXX_OK on success 

#### Returns
-ERANGE if `pos` + `len` is out of bounds 

#### Returns

**See also**: [i2c_write_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272)

#### `public int `[`at24cxxx_clear`](#group__drivers__at24cxxx_1ga553b7cab9e3474d698759173a9c66c33)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev,uint32_t pos,size_t len)` 

Set `len` bytes from position `pos` to AT24CXXX_CLEAR_BYTE.

This is a wrapper around 
**See also**: [at24cxxx_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1gab38366e9edeb870baf72d126e1655f34).

#### Parameters
* `dev` AT24CXXX device handle 

* `pos` Position in EEPROM memory 

* `len` Requested length to be written

#### Returns

**See also**: [at24cxxx_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1gab38366e9edeb870baf72d126e1655f34)

#### `public int `[`at24cxxx_erase`](#group__drivers__at24cxxx_1ga652841bd7e9e1686f0545614d6b12910)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev)` 

Set the entire EEPROM memory to AT24CXXX_CLEAR_BYTE.

This is a wrapper around 
**See also**: [at24cxxx_clear](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga553b7cab9e3474d698759173a9c66c33).

#### Parameters
* `dev` AT24CXXX device handle

#### Returns

**See also**: [at24cxxx_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1gab38366e9edeb870baf72d126e1655f34)

#### `public int `[`at24cxxx_enable_write_protect`](#group__drivers__at24cxxx_1ga242b91c3d1b701588d887bb0b60f295e)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev)` 

Enable write protection.

#### Parameters
* `dev` AT24CXXX device handle

#### Returns
AT24CXXX_OK on success 

#### Returns
-ENOTSUP if pin_wp was initialized with GPIO_UNDEF

#### `public int `[`at24cxxx_disable_write_protect`](#group__drivers__at24cxxx_1gac672fca6f474625234205ec9c50d37cb)`(const `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * dev)` 

Disable write protection.

#### Parameters
* `dev` AT24CXXX device handle

#### Returns
AT24CXXX_OK on success 

#### Returns
-ENOTSUP if pin_wp was initialized with GPIO_UNDEF

# struct `at24cxxx_params` 

Struct that holds initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structat24cxxx__params_1a83d6aeba878efb8b63ddb3a518ff5b07) | I2C bus number.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_wp`](#structat24cxxx__params_1abe128b8a02c3ffa6485027d712275202) | write protect pin
`public uint32_t `[`eeprom_size`](#structat24cxxx__params_1a40840bd6d040a3e483cf4ec367b0430e) | EEPROM memory capacity.
`public uint8_t `[`dev_addr`](#structat24cxxx__params_1a4b3b17c8a4ee1feac463606a7bac23a0) | I2C device address.
`public uint8_t `[`page_size`](#structat24cxxx__params_1af74c291cee19d8bc6c2fea3397ff6a3f) | page size
`public uint8_t `[`max_polls`](#structat24cxxx__params_1af1e4f7ddab5c1e8ef4a7f015cd15b6c6) | number of ACK poll attempts

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structat24cxxx__params_1a83d6aeba878efb8b63ddb3a518ff5b07) 

I2C bus number.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_wp`](#structat24cxxx__params_1abe128b8a02c3ffa6485027d712275202) 

write protect pin

#### `public uint32_t `[`eeprom_size`](#structat24cxxx__params_1a40840bd6d040a3e483cf4ec367b0430e) 

EEPROM memory capacity.

#### `public uint8_t `[`dev_addr`](#structat24cxxx__params_1a4b3b17c8a4ee1feac463606a7bac23a0) 

I2C device address.

#### `public uint8_t `[`page_size`](#structat24cxxx__params_1af74c291cee19d8bc6c2fea3397ff6a3f) 

page size

#### `public uint8_t `[`max_polls`](#structat24cxxx__params_1af1e4f7ddab5c1e8ef4a7f015cd15b6c6) 

number of ACK poll attempts

# struct `at24cxxx_t` 

Struct that represents an AT24CXXX device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`at24cxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga590c703d3d9df73aeef6782fe7f2f251)` `[`params`](#structat24cxxx__t_1a2b45d1ddbbc15e044bce1d0ebb05c9cc) | parameters

## Members

#### `public `[`at24cxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga590c703d3d9df73aeef6782fe7f2f251)` `[`params`](#structat24cxxx__t_1a2b45d1ddbbc15e044bce1d0ebb05c9cc) 

parameters

