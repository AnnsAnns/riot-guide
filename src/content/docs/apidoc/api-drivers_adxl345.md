---
title: api-drivers_adxl345.md
description: api-drivers_adxl345.md
---
# group `drivers_adxl345` 

Device driver interface for the ADXL345.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@146`](#group__drivers__adxl345_1ga592aba11ab30da4dbf57e9736c8387a1)            | Possible ADXL345 hardware addresses (wiring specific)
`enum `[`@147`](#group__drivers__adxl345_1gaad1afd468cb4339144d0997ddcf04748)            | List ADXL345 power mode.
`enum `[`@148`](#group__drivers__adxl345_1gabc3975f01f66a098a347a8262ff103e5)            | Define ADXL345 sensitivity.
`enum `[`@149`](#group__drivers__adxl345_1ga5e8ce9967db697e85d5528dafee6b8de)            | List bandwidth rate.
`enum `[`@150`](#group__drivers__adxl345_1gaaa91b962ffd8aca2f3c24e886a222419)            | List fifo mode.
`enum `[`@151`](#group__drivers__adxl345_1gac6bfa7273251ec8fc11ef21ca645ad90)            | Output Interrupt selection.
`enum `[`@152`](#group__drivers__adxl345_1ga63cbfa53a16c7eeb228a37be887ccf54)            | Named return values.
`public int `[`adxl345_init`](#group__drivers__adxl345_1ga97499f7d34d498fb240827b5ec1b4bff)`(`[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,const `[`adxl345_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__params__t)` * params)`            | Initialize the ADXL345 accelerometer driver.
`public void `[`adxl345_read`](#group__drivers__adxl345_1ga48708aba5d58923a28e3387b86ad64fd)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,`[`adxl345_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__data__t)` * data)`            | Read accelerometer's data.
`public void `[`adxl345_set_interrupt`](#group__drivers__adxl345_1ga2524403520b6ba7ae3a39cebcb09c8aa)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)`            | set ADXL345's interrupts configuration
`public void `[`adxl345_set_measure`](#group__drivers__adxl345_1ga3066c9c2b6e7929710cb32f86cf41402)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)`            | set ADXL345's measure mode
`public void `[`adxl345_set_standby`](#group__drivers__adxl345_1gacba5b66a690bd1978bb7111af826bbbc)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)`            | Set standby mode.
`public void `[`adxl345_set_sleep`](#group__drivers__adxl345_1gab25537ea2d3080f1d42fb253b82cee8d)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)`            | Set sleep mode.
`public void `[`adxl345_set_autosleep`](#group__drivers__adxl345_1ga099578a5eed104875cb7431a76c0ee88)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)`            | Set autosleep mode.
`public void `[`adxl345_set_bandwidth_rate`](#group__drivers__adxl345_1ga1f27769ae77f79b858a07e12c40ce7b0)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,uint8_t bw_rate)`            | Set bandwidth rate.
`public void `[`adxl345_set_fifo_mode`](#group__drivers__adxl345_1gaa54f7fbd70c02b66bae9cdbd72e4c483)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,uint8_t mode,uint8_t output,uint8_t value)`            | Set fifo mode with its configuration.
`struct `[`adxl345_data_t`](#structadxl345__data__t) | ADXL345 result vector struct.
`struct `[`adxl345_interrupt_t`](#structadxl345__interrupt__t) | Interrupt configuration struct for the ADXL345 sensor.
`struct `[`adxl345_params_t`](#structadxl345__params__t) | Configuration struct for the ADXL345 sensor.
`struct `[`adxl345_t`](#structadxl345__t) | Device descriptor for the ADXL345 sensor.

## Members

#### `enum `[`@146`](#group__drivers__adxl345_1ga592aba11ab30da4dbf57e9736c8387a1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_ADDR_1D            | I2C device address if Alt addr pin is high.
ADXL345_ADDR_53            | I2C device address if Alt addr pin is low.

Possible ADXL345 hardware addresses (wiring specific)

#### `enum `[`@147`](#group__drivers__adxl345_1gaad1afd468cb4339144d0997ddcf04748) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_MEASURE_MODE            | Measure mode.
ADXL345_STANDBY_MODE            | Standby mode.
ADXL345_SLEEP_MODE            | Sleep mode.
ADXL345_AUTOSLEEP_MODE            | Autosleep mode.

List ADXL345 power mode.

#### `enum `[`@148`](#group__drivers__adxl345_1gabc3975f01f66a098a347a8262ff103e5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_RANGE_2G            | +/- 2 g Full Scale Range
ADXL345_RANGE_4G            | +/- 4 g Full Scale Range
ADXL345_RANGE_8G            | +/- 8 g Full Scale Range
ADXL345_RANGE_16G            | +/- 16 g Full Scale Range

Define ADXL345 sensitivity.

#### `enum `[`@149`](#group__drivers__adxl345_1ga5e8ce9967db697e85d5528dafee6b8de) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_RATE_0HZ1            | 0.1 Hz Output Data Rate
ADXL345_RATE_0HZ2            | 0.2 Hz Output Data Rate
ADXL345_RATE_0HZ39            | 0.39 Hz Output Data Rate
ADXL345_RATE_0HZ78            | 0.78 Hz Output Data Rate
ADXL345_RATE_1HZ56            | 1.56 Hz Output Data Rate
ADXL345_RATE_3HZ13            | 3.13 Hz Output Data Rate
ADXL345_RATE_6HZ25            | 6.25 Hz Output Data Rate
ADXL345_RATE_12HZ50            | 12.5 Hz Output Data Rate
ADXL345_RATE_25HZ            | 25 Hz Output Data Rate
ADXL345_RATE_50HZ            | 50 Hz Output Data Rate
ADXL345_RATE_100HZ            | 100 Hz Output Data Rate
ADXL345_RATE_200HZ            | 200 Hz Output Data Rate
ADXL345_RATE_400HZ            | 400 Hz Output Data Rate
ADXL345_RATE_800HZ            | 800 Hz Output Data Rate
ADXL345_RATE_1600HZ            | 1600 Hz Output Data Rate
ADXL345_RATE_3200HZ            | 3200 Hz Output Data Rate

List bandwidth rate.

#### `enum `[`@150`](#group__drivers__adxl345_1gaaa91b962ffd8aca2f3c24e886a222419) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_BYPASS            | FIFO bypass mode.
ADXL345_FIFO            | FIFO mode.
ADXL345_STREAM            | FIFO stream mode.
ADXL345_TRIGGER            | FIFO trigger mode.

List fifo mode.

#### `enum `[`@151`](#group__drivers__adxl345_1gac6bfa7273251ec8fc11ef21ca645ad90) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_INT1            | Output interrupt on INT1 pin.
ADXL345_INT2            | Output interrupt on INT2 pin.

Output Interrupt selection.

#### `enum `[`@152`](#group__drivers__adxl345_1ga63cbfa53a16c7eeb228a37be887ccf54) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADXL345_OK            | everything was fine
ADXL345_DATA_READY            | new data ready to be read
ADXL345_NOI2C            | I2C communication failed.
ADXL345_NODEV            | no ADXL345 device found on the bus
ADXL345_NODATA            | no data available

Named return values.

#### `public int `[`adxl345_init`](#group__drivers__adxl345_1ga97499f7d34d498fb240827b5ec1b4bff)`(`[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,const `[`adxl345_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__params__t)` * params)` 

Initialize the ADXL345 accelerometer driver.

#### Parameters
* `dev` device descriptor of accelerometer to initialize 

* `params` configuration parameters

#### Returns
ADXL345_OK on success 

#### Returns
ADXL345_NOI2C if initialization of I2C bus failed 

#### Returns
ADXL345_NODEV if accelerometer test failed

#### `public void `[`adxl345_read`](#group__drivers__adxl345_1ga48708aba5d58923a28e3387b86ad64fd)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,`[`adxl345_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__data__t)` * data)` 

Read accelerometer's data.

Acceleration will be calculated as:$ accel = {value \times 3.9} $ if full scale is set to 2g$ accel = {value \times 7.8} $ if full scale is set to 4g$ accel = {value \times 15.6} $ if full scale is set to 8g$ accel = {value \times 31.2} $ if full scale is set to 16g

#### Parameters
* `dev` device descriptor of accelerometer 

* `data` the current acceleration data [in mg]

#### `public void `[`adxl345_set_interrupt`](#group__drivers__adxl345_1ga2524403520b6ba7ae3a39cebcb09c8aa)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)` 

set ADXL345's interrupts configuration

#### Parameters
* `dev` device descriptor of accelerometer

#### `public void `[`adxl345_set_measure`](#group__drivers__adxl345_1ga3066c9c2b6e7929710cb32f86cf41402)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)` 

set ADXL345's measure mode

#### Parameters
* `dev` device descriptor of accelerometer

#### `public void `[`adxl345_set_standby`](#group__drivers__adxl345_1gacba5b66a690bd1978bb7111af826bbbc)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)` 

Set standby mode.

#### Parameters
* `dev` device descriptor of accelerometer

#### `public void `[`adxl345_set_sleep`](#group__drivers__adxl345_1gab25537ea2d3080f1d42fb253b82cee8d)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)` 

Set sleep mode.

#### Parameters
* `dev` device descriptor of accelerometer

#### `public void `[`adxl345_set_autosleep`](#group__drivers__adxl345_1ga099578a5eed104875cb7431a76c0ee88)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev)` 

Set autosleep mode.

#### Parameters
* `dev` device descriptor of accelerometer

#### `public void `[`adxl345_set_bandwidth_rate`](#group__drivers__adxl345_1ga1f27769ae77f79b858a07e12c40ce7b0)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,uint8_t bw_rate)` 

Set bandwidth rate.

#### Parameters
* `dev` device descriptor of accelerometer 

* `bw_rate` new datarate

#### `public void `[`adxl345_set_fifo_mode`](#group__drivers__adxl345_1gaa54f7fbd70c02b66bae9cdbd72e4c483)`(const `[`adxl345_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__t)` * dev,uint8_t mode,uint8_t output,uint8_t value)` 

Set fifo mode with its configuration.

#### Parameters
* `dev` device descriptor of accelerometer 

* `mode` fifo mode configuration 

* `output` set trigger output 

* `value` set trigger's value

# struct `adxl345_data_t` 

ADXL345 result vector struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structadxl345__data__t_1a5f926b07325de1d1c329e6dd254f9b2c) | X-Axis measurement result.
`public int16_t `[`y`](#structadxl345__data__t_1a21a3d04d4930a0d884be0155ff0bb8da) | Y-Axis measurement result.
`public int16_t `[`z`](#structadxl345__data__t_1a9f81ae40af2cbb0298ee32886e12f6e5) | Z-Axis measurement result.

## Members

#### `public int16_t `[`x`](#structadxl345__data__t_1a5f926b07325de1d1c329e6dd254f9b2c) 

X-Axis measurement result.

#### `public int16_t `[`y`](#structadxl345__data__t_1a21a3d04d4930a0d884be0155ff0bb8da) 

Y-Axis measurement result.

#### `public int16_t `[`z`](#structadxl345__data__t_1a9f81ae40af2cbb0298ee32886e12f6e5) 

Z-Axis measurement result.

# struct `adxl345_interrupt_t` 

Interrupt configuration struct for the ADXL345 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`source`](#structadxl345__interrupt__t_1aabef54d68040610b83601c0e68cfca75) | Source of interrupts.
`public uint8_t `[`map`](#structadxl345__interrupt__t_1a81036c12d9daf0df6912d22e2d0f9b53) | Interrupt mapping control.
`public uint8_t `[`enable`](#structadxl345__interrupt__t_1a4c68b7068f0e4efef457d528d46281ce) | Interrupt enable control.
`public uint8_t `[`thres_tap`](#structadxl345__interrupt__t_1a33a7ddf92fdefef589beecb3ad26abb5) | Tap threshold.
`public uint8_t `[`thres_dur`](#structadxl345__interrupt__t_1a686ba9664aa2afc12183ce10aef92e6d) | Tap duration.
`public uint8_t `[`thres_latent`](#structadxl345__interrupt__t_1a3820d3f3991a617cd375b01fe72937ff) | Tap latency.
`public uint8_t `[`thres_window`](#structadxl345__interrupt__t_1a95aff3132dd3feddd0d8c361ec0ca3f9) | Tap window.
`public uint8_t `[`thres_act`](#structadxl345__interrupt__t_1af9098f8a3993bef2ad3394e309b740d4) | Activity threshold.
`public uint8_t `[`thres_inact`](#structadxl345__interrupt__t_1a2d407afe655df6e4670e3b39a7d0002d) | Inactivity threshold.
`public uint8_t `[`time_inact`](#structadxl345__interrupt__t_1a6279ec6100ce3f9918485cc275f19308) | Inactivity time.
`public uint8_t `[`thres_ff`](#structadxl345__interrupt__t_1aab4abf491093efc1e91b3511b8fae879) | Free-fall threshold.
`public uint8_t `[`time_ff`](#structadxl345__interrupt__t_1a00f2f46f1e4e54889303421c97da105e) | Time threshold.
`public uint8_t `[`act_inact`](#structadxl345__interrupt__t_1ac52c9af40fe48505cc6e24b5825e87a1) | Enable ctrl for activity/inactivity detection.
`public uint8_t `[`tap_axes`](#structadxl345__interrupt__t_1a2c11ea7adfa720912f110b8df1d00c7b) | Axis control for single tap/double tap.

## Members

#### `public uint8_t `[`source`](#structadxl345__interrupt__t_1aabef54d68040610b83601c0e68cfca75) 

Source of interrupts.

#### `public uint8_t `[`map`](#structadxl345__interrupt__t_1a81036c12d9daf0df6912d22e2d0f9b53) 

Interrupt mapping control.

#### `public uint8_t `[`enable`](#structadxl345__interrupt__t_1a4c68b7068f0e4efef457d528d46281ce) 

Interrupt enable control.

#### `public uint8_t `[`thres_tap`](#structadxl345__interrupt__t_1a33a7ddf92fdefef589beecb3ad26abb5) 

Tap threshold.

#### `public uint8_t `[`thres_dur`](#structadxl345__interrupt__t_1a686ba9664aa2afc12183ce10aef92e6d) 

Tap duration.

#### `public uint8_t `[`thres_latent`](#structadxl345__interrupt__t_1a3820d3f3991a617cd375b01fe72937ff) 

Tap latency.

#### `public uint8_t `[`thres_window`](#structadxl345__interrupt__t_1a95aff3132dd3feddd0d8c361ec0ca3f9) 

Tap window.

#### `public uint8_t `[`thres_act`](#structadxl345__interrupt__t_1af9098f8a3993bef2ad3394e309b740d4) 

Activity threshold.

#### `public uint8_t `[`thres_inact`](#structadxl345__interrupt__t_1a2d407afe655df6e4670e3b39a7d0002d) 

Inactivity threshold.

#### `public uint8_t `[`time_inact`](#structadxl345__interrupt__t_1a6279ec6100ce3f9918485cc275f19308) 

Inactivity time.

#### `public uint8_t `[`thres_ff`](#structadxl345__interrupt__t_1aab4abf491093efc1e91b3511b8fae879) 

Free-fall threshold.

#### `public uint8_t `[`time_ff`](#structadxl345__interrupt__t_1a00f2f46f1e4e54889303421c97da105e) 

Time threshold.

#### `public uint8_t `[`act_inact`](#structadxl345__interrupt__t_1ac52c9af40fe48505cc6e24b5825e87a1) 

Enable ctrl for activity/inactivity detection.

#### `public uint8_t `[`tap_axes`](#structadxl345__interrupt__t_1a2c11ea7adfa720912f110b8df1d00c7b) 

Axis control for single tap/double tap.

# struct `adxl345_params_t` 

Configuration struct for the ADXL345 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structadxl345__params__t_1a057631d203cfff5b4de5afba242c785f) | I2C device which is used.
`public uint8_t `[`addr`](#structadxl345__params__t_1ad683316c3756263222b377e3d1fbc8b2) | I2C address.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1`](#structadxl345__params__t_1ae9f11ab2222bc147a37be1b1ea888ad1) | accelerometer int1 pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2`](#structadxl345__params__t_1a5d993813c36076f0e2b3d11a49232bd5) | accelerometer int2 pin
`public uint8_t `[`offset`](#structadxl345__params__t_1ae6d834dbbf4f7bf1b2e90536260c1aa6) | offset axis
`public uint8_t `[`range`](#structadxl345__params__t_1a2e4e7661fabb623735a2777b3c41e218) | Sensitivity configuration.
`public uint8_t `[`rate`](#structadxl345__params__t_1a43a2fd99e548583d746075ea195ac497) | Configured sample rate for accel
`public uint8_t `[`full_res`](#structadxl345__params__t_1a506450132c5108ab04c1e5042e6cb2f9) | Resolution bit.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structadxl345__params__t_1a057631d203cfff5b4de5afba242c785f) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structadxl345__params__t_1ad683316c3756263222b377e3d1fbc8b2) 

I2C address.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1`](#structadxl345__params__t_1ae9f11ab2222bc147a37be1b1ea888ad1) 

accelerometer int1 pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2`](#structadxl345__params__t_1a5d993813c36076f0e2b3d11a49232bd5) 

accelerometer int2 pin

#### `public uint8_t `[`offset`](#structadxl345__params__t_1ae6d834dbbf4f7bf1b2e90536260c1aa6) 

offset axis

#### `public uint8_t `[`range`](#structadxl345__params__t_1a2e4e7661fabb623735a2777b3c41e218) 

Sensitivity configuration.

#### `public uint8_t `[`rate`](#structadxl345__params__t_1a43a2fd99e548583d746075ea195ac497) 

Configured sample rate for accel

#### `public uint8_t `[`full_res`](#structadxl345__params__t_1a506450132c5108ab04c1e5042e6cb2f9) 

Resolution bit.

# struct `adxl345_t` 

Device descriptor for the ADXL345 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`adxl345_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__params__t)` `[`params`](#structadxl345__t_1ac693030ae3e2170b4cb525b7634012a3) | Device configuration.
`public `[`adxl345_interrupt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__interrupt__t)` `[`interrupt`](#structadxl345__t_1a32fb27d85a53376ed332aa181157906a) | Interrupts configuration
`public int16_t `[`scale_factor`](#structadxl345__t_1ad573a06e18ad6ad8ca99891eb067a628) | Scale factor for converting value to mg.

## Members

#### `public `[`adxl345_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__params__t)` `[`params`](#structadxl345__t_1ac693030ae3e2170b4cb525b7634012a3) 

Device configuration.

#### `public `[`adxl345_interrupt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adxl345.md#structadxl345__interrupt__t)` `[`interrupt`](#structadxl345__t_1a32fb27d85a53376ed332aa181157906a) 

Interrupts configuration

#### `public int16_t `[`scale_factor`](#structadxl345__t_1ad573a06e18ad6ad8ca99891eb067a628) 

Scale factor for converting value to mg.

