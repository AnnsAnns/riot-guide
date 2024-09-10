---
title: api-drivers_mma7660.md
description: api-drivers_mma7660.md
---
# group `drivers_mma7660` 

Driver for the Freescale MMA7660 3-Axis accelerometer.

This driver only implements basic functionality.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@218`](#group__drivers__mma7660_1gae07532c74c7e685988e820f34d132fc1)            | Return codes.
`public int `[`mma7660_init`](#group__drivers__mma7660_1ga77b0f534508f0fa6edf4ca31d03638f0)`(`[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,const `[`mma7660_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__params__t)` * params)`            | Initialize an MMA7660 device.
`public int `[`mma7660_set_mode`](#group__drivers__mma7660_1ga269a690b3564e5627863b02ba6e42be3)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t active,uint8_t autowake,uint8_t autosleep,uint8_t prescale)`            | Set the mode register.
`public int `[`mma7660_read_tilt`](#group__drivers__mma7660_1ga10ba7a14ce7116c5ffddc6ffca98c287)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t * res)`            | Read the tilt register.
`public int `[`mma7660_write_sleep_count`](#group__drivers__mma7660_1gad15a475321c33260ee49c722d4166383)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t sleep)`            | Write the sleep count register.
`public int `[`mma7660_config_interrupts`](#group__drivers__mma7660_1gaf1732ba9d7e33b8666d679325e31a7e1)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t isource_flags)`            | Configure the interrupt sources.
`public int `[`mma7660_config_samplerate`](#group__drivers__mma7660_1ga2164bcf3b56406e943ca3602012d7d58)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t amsr,uint8_t awsr,uint8_t filt)`            | Configure the sample rate.
`public int `[`mma7660_config_pdet`](#group__drivers__mma7660_1gaeb421e31df1b5f2bc91f6432fd1e1a3c)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t pdth,uint8_t enabled_axes)`            | Configure the tap detection.
`public int `[`mma7660_config_pd`](#group__drivers__mma7660_1gae9469d9921288a9f6889a1d9b410b24f)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t pd)`            | Configure the tap detection debounce count.
`public int `[`mma7660_read`](#group__drivers__mma7660_1gaaac40d04aebe00a433f30e7b37d5307e)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,`[`mma7660_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__data__t)` * data)`            | Read the acceleration counts converted to mG.
`public int `[`mma7660_read_counts`](#group__drivers__mma7660_1ga337c8b446883dd0d0b924a9725a6ffcc)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,int8_t * x,int8_t * y,int8_t * z)`            | Read the acceleration counts (unconverted)
`struct `[`mma7660_params_t`](#structmma7660__params__t) | Parameters for an MMA7660 device.
`struct `[`mma7660_t`](#structmma7660__t) | Device descriptor for an MMA7660 device.
`struct `[`mma7660_data_t`](#structmma7660__data__t) | Data type for the result data.

## Members

#### `enum `[`@218`](#group__drivers__mma7660_1gae07532c74c7e685988e820f34d132fc1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MMA7660_OK            | all ok
MMA7660_I2C_ERR            | i2c bus initialization error
MMA7660_I2C_READ_ERR            | i2c bus cannot be read
MMA7660_I2C_WRITE_ERR            | i2c bus cannot be written
MMA7660_READ_ERR            | error when reading counts

Return codes.

#### `public int `[`mma7660_init`](#group__drivers__mma7660_1ga77b0f534508f0fa6edf4ca31d03638f0)`(`[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,const `[`mma7660_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__params__t)` * params)` 

Initialize an MMA7660 device.

#### Parameters
* `dev` device descriptor 

* `params` device configuration parameters

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_ERR on i2c bus initialization error 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_set_mode`](#group__drivers__mma7660_1ga269a690b3564e5627863b02ba6e42be3)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t active,uint8_t autowake,uint8_t autosleep,uint8_t prescale)` 

Set the mode register.

#### Parameters
* `dev` device descriptor 

* `active` 0=sleep 1=active 

* `autowake` see datasheet 

* `autosleep` see datasheet 

* `prescale` main clock prescalar

See page 17 of [http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf](http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf) for information about the parameters

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_read_tilt`](#group__drivers__mma7660_1ga10ba7a14ce7116c5ffddc6ffca98c287)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t * res)` 

Read the tilt register.

#### Parameters
* `dev` device descriptor 

* `res` tilt register contents

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_READ_ERR on i2c bus read error

#### `public int `[`mma7660_write_sleep_count`](#group__drivers__mma7660_1gad15a475321c33260ee49c722d4166383)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t sleep)` 

Write the sleep count register.

#### Parameters
* `dev` device descriptor 

* `sleep` sleep count

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_config_interrupts`](#group__drivers__mma7660_1gaf1732ba9d7e33b8666d679325e31a7e1)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t isource_flags)` 

Configure the interrupt sources.

#### Parameters
* `dev` device descriptor 

* `isource_flags` interrupt source flags

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_config_samplerate`](#group__drivers__mma7660_1ga2164bcf3b56406e943ca3602012d7d58)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t amsr,uint8_t awsr,uint8_t filt)` 

Configure the sample rate.

#### Parameters
* `dev` device descriptor 

* `amsr` active mode sample rate (pg 18 of DS) 

* `awsr` auto wake sample rate (pg 19 of DS) 

* `filt` filter samples (pg 19 of DS)

See datasheet [http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf](http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf) for details about the parameters

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_config_pdet`](#group__drivers__mma7660_1gaeb421e31df1b5f2bc91f6432fd1e1a3c)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t pdth,uint8_t enabled_axes)` 

Configure the tap detection.

#### Parameters
* `dev` device descriptor 

* `pdth` pulse detection 

* `enabled_axes` enabled axes

See page 21 of [http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf](http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf) for details about the parameters

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_config_pd`](#group__drivers__mma7660_1gae9469d9921288a9f6889a1d9b410b24f)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,uint8_t pd)` 

Configure the tap detection debounce count.

#### Parameters
* `dev` device descriptor 

* `pd` pulse debounce

See page 21 of [http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf](http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf) for details about the debouncer

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_WRITE_ERR on i2c bus write error

#### `public int `[`mma7660_read`](#group__drivers__mma7660_1gaaac40d04aebe00a433f30e7b37d5307e)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,`[`mma7660_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__data__t)` * data)` 

Read the acceleration counts converted to mG.

#### Parameters
* `dev` device descriptor 

* `data` the acceleration data

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_READ_ERR on i2c bus read error

#### `public int `[`mma7660_read_counts`](#group__drivers__mma7660_1ga337c8b446883dd0d0b924a9725a6ffcc)`(const `[`mma7660_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__t)` * dev,int8_t * x,int8_t * y,int8_t * z)` 

Read the acceleration counts (unconverted)

#### Parameters
* `dev` device descriptor 

* `x` the X axis value 

* `y` the Y axis value 

* `z` the Z axis value

See page 28 of [http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf](http://www.nxp.com/files/sensors/doc/data_sheet/MMA7660FC.pdf) for conversion of acceleration counts to angles or G forces.

#### Returns
MMA7660_OK on success 

#### Returns
-MMA7660_I2C_READ_ERR on i2c bus read error 

#### Returns
-MMA7660_READ_ERR on general read error

# struct `mma7660_params_t` 

Parameters for an MMA7660 device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmma7660__params__t_1a274f878af4bd0397a95598db8c567393) | the I2C handle
`public uint8_t `[`addr`](#structmma7660__params__t_1a8c2181002f2eb3bec630a3cbe454e4ff) | the device I2C address
`public uint8_t `[`amsr`](#structmma7660__params__t_1a8381382d7b6bcef08b4f6afc11cdbf59) | active mode sample rate
`public uint8_t `[`awsr`](#structmma7660__params__t_1ac4567e5d8ae61faca589aa798ec68e5b) | auto wake sample rate
`public uint8_t `[`filt`](#structmma7660__params__t_1ac89aff5458698e039196a50aebe9ac9e) | filter samples

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmma7660__params__t_1a274f878af4bd0397a95598db8c567393) 

the I2C handle

#### `public uint8_t `[`addr`](#structmma7660__params__t_1a8c2181002f2eb3bec630a3cbe454e4ff) 

the device I2C address

#### `public uint8_t `[`amsr`](#structmma7660__params__t_1a8381382d7b6bcef08b4f6afc11cdbf59) 

active mode sample rate

#### `public uint8_t `[`awsr`](#structmma7660__params__t_1ac4567e5d8ae61faca589aa798ec68e5b) 

auto wake sample rate

#### `public uint8_t `[`filt`](#structmma7660__params__t_1ac89aff5458698e039196a50aebe9ac9e) 

filter samples

# struct `mma7660_t` 

Device descriptor for an MMA7660 device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mma7660_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__params__t)` `[`params`](#structmma7660__t_1a0411ababe6c424354ef39154959c2171) | initialization parameters

## Members

#### `public `[`mma7660_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma7660.md#structmma7660__params__t)` `[`params`](#structmma7660__t_1a0411ababe6c424354ef39154959c2171) 

initialization parameters

# struct `mma7660_data_t` 

Data type for the result data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structmma7660__data__t_1a051ec7114b47397b02b97b30f711124d) | acceleration in X direction
`public int16_t `[`y`](#structmma7660__data__t_1a63c520f45d9598e64ae7e5f4d63e4f2e) | acceleration in Y direction
`public int16_t `[`z`](#structmma7660__data__t_1afd3d0ec28d060cfca753649aa1f73628) | acceleration in Z direction

## Members

#### `public int16_t `[`x`](#structmma7660__data__t_1a051ec7114b47397b02b97b30f711124d) 

acceleration in X direction

#### `public int16_t `[`y`](#structmma7660__data__t_1a63c520f45d9598e64ae7e5f4d63e4f2e) 

acceleration in Y direction

#### `public int16_t `[`z`](#structmma7660__data__t_1afd3d0ec28d060cfca753649aa1f73628) 

acceleration in Z direction

