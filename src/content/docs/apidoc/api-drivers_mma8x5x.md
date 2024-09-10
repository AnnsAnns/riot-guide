---
title: api-drivers_mma8x5x.md
description: api-drivers_mma8x5x.md
---
# group `drivers_mma8x5x` 

Driver for the Freescale MMA8x5x 3-Axis accelerometer.

The driver will initialize the accelerometer for best resolution. After the initialization the accelerometer will make measurements at periodic times. The measurements period and scale range can be determined by accelerometer initialization. This driver only implements basic functionality (i.e. no support for external interrupt pins).

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@219`](#group__drivers__mma8x5x_1gafb9b21dcb0b6eb4e9e0c9cb090e774be)            | Devices supported by this driver.
`enum `[`@220`](#group__drivers__mma8x5x_1gaf26f449e73437e60d22c20b4f2cb2ace)            | Available sampling rates.
`enum `[`@221`](#group__drivers__mma8x5x_1gaff3701dfcc246bf08b07f25a2cfd9e6d)            | Available range options.
`enum `[`@222`](#group__drivers__mma8x5x_1ga85c1893697b201be6423e3534d866636)            | Named return values.
`public int `[`mma8x5x_init`](#group__drivers__mma8x5x_1ga5420a9cd99c97f9b88848f99f5a5e2b6)`(`[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,const `[`mma8x5x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__params__t)` * params)`            | Initialize the MMA8x5x accelerometer driver.
`public void `[`mma8x5x_set_user_offset`](#group__drivers__mma8x5x_1ga0129d9d93189e200a7ec5b979586d71c)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,int8_t x,int8_t y,int8_t z)`            | Set user offset correction.
`public void `[`mma8x5x_set_active`](#group__drivers__mma8x5x_1gaacb242963421e9544ae2e8af89c3815d)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)`            | Set active mode, this enables periodic measurements.
`public void `[`mma8x5x_set_standby`](#group__drivers__mma8x5x_1gac4798e15272544651f7171d3dbc46c37)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)`            | Set standby mode.
`public int `[`mma8x5x_is_ready`](#group__drivers__mma8x5x_1gadbad9d29b3fbc68bd05c80fbdf2b58d9)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)`            | Check for new set of measurement data.
`public void `[`mma8x5x_read`](#group__drivers__mma8x5x_1gaefe225136d5aafcc4a37b38ba7525287)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,`[`mma8x5x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__data__t)` * data)`            | Read accelerometer's data.
`public void `[`mma8x5x_set_motiondetect`](#group__drivers__mma8x5x_1gac996436ccb6c416c848812b4433856c0)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,uint8_t int_pin,uint8_t threshold)`            | Configure motion detection interrupt.
`public void `[`mma8x5x_ack_int`](#group__drivers__mma8x5x_1ga63fd284d31680237ccddea94028ca28d)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)`            | Acknowledge motion detection interrupt.
`struct `[`mma8x5x_params_t`](#structmma8x5x__params__t) | Configuration parameters.
`struct `[`mma8x5x_t`](#structmma8x5x__t) | Device descriptor for MMA8x5x accelerometers.
`struct `[`mma8x5x_data_t`](#structmma8x5x__data__t) | Data type for the result data.

## Members

#### `enum `[`@219`](#group__drivers__mma8x5x_1gafb9b21dcb0b6eb4e9e0c9cb090e774be) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MMA8X5X_TYPE_MMA8652            | MMA8652.
MMA8X5X_TYPE_MMA8653            | MMA8653.
MMA8X5X_TYPE_MMA8451            | MMA8451.
MMA8X5X_TYPE_MMA8452            | MMA8452.
MMA8X5X_TYPE_MMA8453            | MMA8453.

Devices supported by this driver.

#### `enum `[`@220`](#group__drivers__mma8x5x_1gaf26f449e73437e60d22c20b4f2cb2ace) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MMA8X5X_RATE_800HZ            | 800 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_400HZ            | 400 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_200HZ            | 200 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_100HZ            | 100 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_50HZ            | 50 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_1HZ25            | 12.5 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_6HZ25            | 6.25 Hz Output Data Rate in WAKE mode
MMA8X5X_RATE_1HZ56            | 1.56 Hz Output Data Rate in WAKE mode

Available sampling rates.

#### `enum `[`@221`](#group__drivers__mma8x5x_1gaff3701dfcc246bf08b07f25a2cfd9e6d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MMA8X5X_RANGE_2G            | +/- 2 g Full Scale Range
MMA8X5X_RANGE_4G            | +/- 4 g Full Scale Range
MMA8X5X_RANGE_8G            | +/- 8 g Full Scale Range

Available range options.

#### `enum `[`@222`](#group__drivers__mma8x5x_1ga85c1893697b201be6423e3534d866636) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MMA8X5X_OK            | everything was fine
MMA8X5X_DATA_READY            | new data ready to be read
MMA8X5X_NOI2C            | I2C communication failed.
MMA8X5X_NODEV            | no MMA8X5X device found on the bus
MMA8X5X_NODATA            | no data available

Named return values.

#### `public int `[`mma8x5x_init`](#group__drivers__mma8x5x_1ga5420a9cd99c97f9b88848f99f5a5e2b6)`(`[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,const `[`mma8x5x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__params__t)` * params)` 

Initialize the MMA8x5x accelerometer driver.

#### Parameters
* `dev` device descriptor of accelerometer to initialize 

* `params` configuration parameters

#### Returns
MMA8X5X_OK on success 

#### Returns
MMA8X5X_NOI2C if initialization of I2C bus failed 

#### Returns
MMA8X5X_NODEV if accelerometer test failed

#### `public void `[`mma8x5x_set_user_offset`](#group__drivers__mma8x5x_1ga0129d9d93189e200a7ec5b979586d71c)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,int8_t x,int8_t y,int8_t z)` 

Set user offset correction.

Offset correction registers will be erased after accelerometer reset.

#### Parameters
* `dev` device descriptor of accelerometer to initialize 

* `x` offset correction value for x-axis 

* `y` offset correction value for y-axis 

* `z` offset correction value for z-axis

#### `public void `[`mma8x5x_set_active`](#group__drivers__mma8x5x_1gaacb242963421e9544ae2e8af89c3815d)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)` 

Set active mode, this enables periodic measurements.

#### Parameters
* `dev` device descriptor of accelerometer to reset

#### `public void `[`mma8x5x_set_standby`](#group__drivers__mma8x5x_1gac4798e15272544651f7171d3dbc46c37)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)` 

Set standby mode.

#### Parameters
* `dev` device descriptor of accelerometer

#### `public int `[`mma8x5x_is_ready`](#group__drivers__mma8x5x_1gadbad9d29b3fbc68bd05c80fbdf2b58d9)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)` 

Check for new set of measurement data.

#### Parameters
* `dev` device descriptor of accelerometer

#### Returns
MMA8X5X_DATA_READY if new sample is ready 

#### Returns
MMA8X5X_NODATA if nothing is available

#### `public void `[`mma8x5x_read`](#group__drivers__mma8x5x_1gaefe225136d5aafcc4a37b38ba7525287)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,`[`mma8x5x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__data__t)` * data)` 

Read accelerometer's data.

Acceleration will be calculated as:$ a = \frac{value \cdot 1000}{1024} \cdot mg $ if full scale is set to 2g$ a = \frac{value \cdot 1000}{512} \cdot mg $ if full scale is set to 4g$ a = \frac{value \cdot 1000}{256} \cdot mg $ if full scale is set to 8g

#### Parameters
* `dev` device descriptor of accelerometer 

* `data` the current acceleration data [in mg]

#### `public void `[`mma8x5x_set_motiondetect`](#group__drivers__mma8x5x_1gac996436ccb6c416c848812b4433856c0)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev,uint8_t int_pin,uint8_t threshold)` 

Configure motion detection interrupt.

User needs to configure MCU side of the selected int pin. mma8x5x will set the pin to low on interrupt. Before another interrupt can occur, the current interrupt must be acknowledged using `[mma8x5x_ack_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mma8x5x_1ga63fd284d31680237ccddea94028ca28d)`.

#### Parameters
* `dev` device descriptor of accelerometer 

* `int_pin` select mma8x5x int pin (1 or 2) 

* `threshold` motion detection threshold (see datasheet)

#### `public void `[`mma8x5x_ack_int`](#group__drivers__mma8x5x_1ga63fd284d31680237ccddea94028ca28d)`(const `[`mma8x5x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__t)` * dev)` 

Acknowledge motion detection interrupt.

Acknowledges (clears) a motion detection interrupt. See [mma8x5x_set_motiondetect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mma8x5x_1gac996436ccb6c416c848812b4433856c0).

: this does incur an I2C write, thus should not be done from within the ISR.

#### Parameters
* `dev` device descriptor of accelerometer

# struct `mma8x5x_params_t` 

Configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmma8x5x__params__t_1a01182ac1b086b3404d14286ac101825a) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structmma8x5x__params__t_1a590b6ae13b70ad33107d01e344187bf7) | I2C bus address of the device.
`public uint8_t `[`rate`](#structmma8x5x__params__t_1a439f5825d9d471d2c60cbf6df65d45c4) | sampling rate to use
`public uint8_t `[`range`](#structmma8x5x__params__t_1a6271d95f431417ef5b4e350ecf5c944c) | scale range to use
`public uint8_t `[`offset`](#structmma8x5x__params__t_1a0ee5cb459788608146d5f70925e62a9c) | data offset in X, Y, and Z direction

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmma8x5x__params__t_1a01182ac1b086b3404d14286ac101825a) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structmma8x5x__params__t_1a590b6ae13b70ad33107d01e344187bf7) 

I2C bus address of the device.

#### `public uint8_t `[`rate`](#structmma8x5x__params__t_1a439f5825d9d471d2c60cbf6df65d45c4) 

sampling rate to use

#### `public uint8_t `[`range`](#structmma8x5x__params__t_1a6271d95f431417ef5b4e350ecf5c944c) 

scale range to use

#### `public uint8_t `[`offset`](#structmma8x5x__params__t_1a0ee5cb459788608146d5f70925e62a9c) 

data offset in X, Y, and Z direction

# struct `mma8x5x_t` 

Device descriptor for MMA8x5x accelerometers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mma8x5x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__params__t)` `[`params`](#structmma8x5x__t_1a0e492c723bc601c13666c39b4852afbe) | device configuration parameters

## Members

#### `public `[`mma8x5x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mma8x5x.md#structmma8x5x__params__t)` `[`params`](#structmma8x5x__t_1a0e492c723bc601c13666c39b4852afbe) 

device configuration parameters

# struct `mma8x5x_data_t` 

Data type for the result data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structmma8x5x__data__t_1aecce252edd1e7805a51c1f81acb6f71b) | acceleration in X direction
`public int16_t `[`y`](#structmma8x5x__data__t_1a5724de837d1b730560449d112ac0b0af) | acceleration in Y direction
`public int16_t `[`z`](#structmma8x5x__data__t_1a0994991f355532e83c7200d0d3f783d1) | acceleration in Z direction

## Members

#### `public int16_t `[`x`](#structmma8x5x__data__t_1aecce252edd1e7805a51c1f81acb6f71b) 

acceleration in X direction

#### `public int16_t `[`y`](#structmma8x5x__data__t_1a5724de837d1b730560449d112ac0b0af) 

acceleration in Y direction

#### `public int16_t `[`z`](#structmma8x5x__data__t_1a0994991f355532e83c7200d0d3f783d1) 

acceleration in Z direction

