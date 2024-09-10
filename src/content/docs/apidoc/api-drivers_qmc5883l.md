---
title: api-drivers_qmc5883l.md
description: api-drivers_qmc5883l.md
---
# group `drivers_qmc5883l` 

Driver for QST QMC5883L digital magnetic sensor.

AboutThis module provides a device driver for the QML5883L magnetic sensor (digital compass) by QST. This device is a successor and similar to the Honeywell HMC5883L, it does use a different register map and uses a different style of configuration.

UsageUse the [qmc5883l_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1gaefb5771db3d3891abb2f47dfe5f649b4) function to initialize your sensor. On exit of the initialization function, the sensor is put into continuous sampling mode (power on) mode.

For reading the sampled data, you have two options: use polling or use interrupt based notifications.

PollingYou call periodically call qmc5883l_read[_raw]() directly and simply check the return value to be QMC5883L_OK or QMC5883L_OVERFLOW for valid data. Alternatively call [qmc5883l_data_ready()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1gafeb7738287859a3833797d55d7bed1e5) to explicitly ask the sensor if new data is available.

Interrupt basedFor the interrupt mode to be available, you have to build the driver with the associated functions using `USEMODULE += qmc5883l_int`.

To configure and enable interrupt notifications for data ready events use the [qmc5883l_init_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1gad76786c21c71180d424f0d1d9ff35047) function. This will setup the configured interrupt pin (params->pin_drdy) and enable the DRDY pin output for the QMC5883L sensor.

The DRDY interrupt callback is executed in interrupt context, so **do not** call any driver API function directly inside the callback! Instead use some IPC to notify a thread.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`QMC5883L_ADDR`](#group__drivers__qmc5883l_1gaaabcbdf1659e744611f2b0b476c91bf4)            | Static QMC5883L I2C address (can not be changed)
`enum `[`@242`](#group__drivers__qmc5883l_1gaa62371d642974c67a0c0efa77d54fcbd)            | Error codes used by the QMC5883L driver.
`enum `[`qmc5883l_odr_t`](#group__drivers__qmc5883l_1ga9b309fb78b36f074ed8b5b9ff07cd497)            | Output data rate.
`enum `[`qmc5883l_rng_t`](#group__drivers__qmc5883l_1ga479a092e370a54f48e3bc7ee8fa23e02)            | Output value range.
`enum `[`qmc5883l_osr_t`](#group__drivers__qmc5883l_1ga94bf5e3f282baf506fb7f9ad5a1d7f33)            | Over sample rate (bandwidth of internal digital filter)
`public int `[`qmc5883l_init`](#group__drivers__qmc5883l_1gaefb5771db3d3891abb2f47dfe5f649b4)`(`[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,const `[`qmc5883l_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__params__t)` * params)`            | Initialize the given QMC5883L magnetic sensor.
`public int `[`qmc5883l_data_ready`](#group__drivers__qmc5883l_1gafeb7738287859a3833797d55d7bed1e5)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)`            | Check if new data is available.
`public int `[`qmc5883l_read`](#group__drivers__qmc5883l_1ga3b8601b6c68648eb00b8b57035628e5f)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,int16_t * data_out)`            | Read sampled data from the device [converted to milli-Gauss].
`public int `[`qmc5883l_read_raw`](#group__drivers__qmc5883l_1ga05bd4875a906b03bb194c294282273ec)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,int16_t * data_out)`            | Read RAW data from the device.
`public int `[`qmc5883l_poweron`](#group__drivers__qmc5883l_1ga9fdb19470f7f9811e3fbbc2483f67a26)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)`            | Power on the sensor (put it into continuous sampling mode)
`public int `[`qmc5883l_poweroff`](#group__drivers__qmc5883l_1gacfdfb0e583a0ddf1d64ffba8706c2a0d)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)`            | Power off the sensor (put it into standby mode)
`public int `[`qmc5883l_init_int`](#group__drivers__qmc5883l_1gad76786c21c71180d424f0d1d9ff35047)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * arg)`            | Initialize data ready (DRDY) interrupt notifications.
`public int `[`qmc5883l_irq_enable`](#group__drivers__qmc5883l_1gab1cf62589a039f7c1bee1ab6959d7670)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)`            | Enable the data ready (DRDY) interrupt.
`public int `[`qmc5883l_irq_disable`](#group__drivers__qmc5883l_1ga3e13673fdbe6d77facc7c7d8a8f24ba0)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)`            | Disable the data ready (DRDY) interrupt.
`struct `[`qmc5883l_params_t`](#structqmc5883l__params__t) | QMC5883L initialization parameters.
`struct `[`qmc5883l_t`](#structqmc5883l__t) | QMC5883L device descriptor.

## Members

#### `define `[`QMC5883L_ADDR`](#group__drivers__qmc5883l_1gaaabcbdf1659e744611f2b0b476c91bf4) 

Static QMC5883L I2C address (can not be changed)

#### `enum `[`@242`](#group__drivers__qmc5883l_1gaa62371d642974c67a0c0efa77d54fcbd) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
QMC5883L_OK            | success
QMC5883L_NODATA            | no data are available
QMC5883L_OVERFLOW            | at least one axis overflowed its range
QMC5883L_BUSERR            | i2c bus error
QMC5883L_NOCFG            | configuration error

Error codes used by the QMC5883L driver.

#### `enum `[`qmc5883l_odr_t`](#group__drivers__qmc5883l_1ga9b309fb78b36f074ed8b5b9ff07cd497) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
QMC5883L_ODR_10HZ            | 10Hz data output rate
QMC5883L_ODR_50HZ            | 50Hz data output rate
QMC5883L_ODR_100HZ            | 100Hz data output rate
QMC5883L_ODR_200HZ            | 200Hz data output rate

Output data rate.

"Output data rate is controlled by ODR registers. Four data update frequencies can be selected: 10Hz, 50Hz, 100Hz and 200Hz. For most of compassing applications, we recommend 10 Hz for low power consumption. For gaming, the high update rate such as 100Hz or 200Hz can be used." (datasheet V1.0, p.17)

#### `enum `[`qmc5883l_rng_t`](#group__drivers__qmc5883l_1ga479a092e370a54f48e3bc7ee8fa23e02) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
QMC5883L_RNG_2G            | 2 Gauss data output range
QMC5883L_RNG_8G            | 8 Gauss data output range

Output value range.

"Field ranges of the magnetic sensor can be selected through the register RNG. The full scale field range is determined by the application environments. For magnetic clear environment, low field range such as +/- 2gauss can be used. The field range goes hand in hand with the sensitivity of the magnetic sensor. The lowest field range has the highest sensitivity, therefore, higher resolution." (datasheet V1.0, p.17)

#### `enum `[`qmc5883l_osr_t`](#group__drivers__qmc5883l_1ga94bf5e3f282baf506fb7f9ad5a1d7f33) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
QMC5883L_OSR_512            | 512 samples per reading
QMC5883L_OSR_256            | 256 samples per reading
QMC5883L_OSR_128            | 128 samples per reading
QMC5883L_OSR_64            | 64 samples per reading

Over sample rate (bandwidth of internal digital filter)

"Over sample Rate (OSR) registers are used to control bandwidth of an internal digital filter. Larger OSR value leads to smaller filter bandwidth, less in-band noise and higher power consumption. It could be used to reach a good balance between noise and power. Four over sample ratio can be selected, 64, 128, 256 or 512." (datasheet V1.0, p.17)

#### `public int `[`qmc5883l_init`](#group__drivers__qmc5883l_1gaefb5771db3d3891abb2f47dfe5f649b4)`(`[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,const `[`qmc5883l_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__params__t)` * params)` 

Initialize the given QMC5883L magnetic sensor.

dev != NULL 

params != NULL

#### Parameters
* `dev` QMC5883L device descriptor 

* `params` configuration parameters

#### Returns
QMC5883L_OK on success 

#### Returns
QMC5883L_NOCFG on configuration error 

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_data_ready`](#group__drivers__qmc5883l_1gafeb7738287859a3833797d55d7bed1e5)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)` 

Check if new data is available.

dev != NULL

#### Parameters
* `dev` QMC5883L device descriptor

#### Returns
QMC5883L_OK if new data is available 

#### Returns
QMC5883L_NODATA if no new data is available 

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_read`](#group__drivers__qmc5883l_1ga3b8601b6c68648eb00b8b57035628e5f)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,int16_t * data_out)` 

Read sampled data from the device [converted to milli-Gauss].

dev != NULL 

data_out != NULL

#### Parameters
* `dev` QMC5883L device descriptor 

* `data_out` buffer for holding the resulting vector, **must** be able to hold 3 data items (x, y, z)

#### Returns
QMC5883L_OK on data being written to `data_out`

#### Returns
QMC5883L_OVERFLOW on data successfully read, but at least one data item overflowed its data range 

#### Returns
QMC5883L_NODATA if no new data is available, nothing is written to `data_out`

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_read_raw`](#group__drivers__qmc5883l_1ga05bd4875a906b03bb194c294282273ec)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,int16_t * data_out)` 

Read RAW data from the device.

This function returns the configured data range of 2 or 8 Gauss mapped to 16-bit signed integers [32768:32767].

dev != NULL 

data_out != NULL

#### Parameters
* `dev` QMC5883L device descriptor 

* `data_out` buffer for holding the resulting vector, **must** be able to hold 3 data items (x, y, z)

#### Returns
QMC5883L_OK on data being written to `data_out`

#### Returns
QMC5883L_OVERFLOW on data successfully read, but at least one data item overflowed its data range 

#### Returns
QMC5883L_NODATA if no new data is available, nothing is written to `data_out`

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_poweron`](#group__drivers__qmc5883l_1ga9fdb19470f7f9811e3fbbc2483f67a26)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)` 

Power on the sensor (put it into continuous sampling mode)

dev != NULL

#### Parameters
* `dev` QMC5883L device descriptor

#### Returns
QMC5883L_OK on success 

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_poweroff`](#group__drivers__qmc5883l_1gacfdfb0e583a0ddf1d64ffba8706c2a0d)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)` 

Power off the sensor (put it into standby mode)

dev != NULL

#### Parameters
* `dev` QMC5883L device descriptor

#### Returns
QMC5883L_OK on success 

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_init_int`](#group__drivers__qmc5883l_1gad76786c21c71180d424f0d1d9ff35047)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * arg)` 

Initialize data ready (DRDY) interrupt notifications.

After this function is called the DRDY interrupt is enabled, so there is no need to call [qmc5883l_irq_enable()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1gab1cf62589a039f7c1bee1ab6959d7670) afterwards.

Configure and enable the data ready (DRDY) interrupt

This function sets up the configured GPIO pin to trigger the given callback for rising edges and it enables the interrupt signal generation for the given QMC5883L sensor.

The given callback function is executed in interrupt context. Make sure not to call any driver API function in that context!

dev != NULL 

cb != NULL

#### Parameters
* `dev` QMC583L device descriptor 

* `cb` callback function triggered on DRDY events 

* `arg` optional user argument passed to `cb`

#### Returns
QMC5883L_OK on success 

#### Returns
QMC5883L_NOCFG on GPIO configuration errors 

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_irq_enable`](#group__drivers__qmc5883l_1gab1cf62589a039f7c1bee1ab6959d7670)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)` 

Enable the data ready (DRDY) interrupt.

Call this function only after you have configured the DRDY interrupt

dev != NULL

#### Parameters
* `dev` QMC5883L device descriptor

#### Returns
QMC5883L_OK on success 

#### Returns
QMC5883L_BUSERR on any I2C bus error

#### `public int `[`qmc5883l_irq_disable`](#group__drivers__qmc5883l_1ga3e13673fdbe6d77facc7c7d8a8f24ba0)`(const `[`qmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_qmc5883l.md#structqmc5883l__t)` * dev)` 

Disable the data ready (DRDY) interrupt.

dev != NULL

#### Parameters
* `dev` QMC5883L device descriptor

#### Returns
QMC5883L_OK on success 

#### Returns
QMC5883L_BUSERR on any I2C bus error

# struct `qmc5883l_params_t` 

QMC5883L initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structqmc5883l__params__t_1ab1e3ec304707c873afd305fc7da4a6e8) | I2C bus the sensor is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_drdy`](#structqmc5883l__params__t_1ad865558b50a59d9543038f16148360a6) | DRDY ISR pin, set to GPIO_UNDEF if unused.
`public `[`qmc5883l_odr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1ga9b309fb78b36f074ed8b5b9ff07cd497)` `[`odr`](#structqmc5883l__params__t_1a6212fe62757b76f15ad175e81cec36a2) | output data rate
`public `[`qmc5883l_rng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1ga479a092e370a54f48e3bc7ee8fa23e02)` `[`rng`](#structqmc5883l__params__t_1a3c45c5789866947eb8a8f3a04b30a678) | output data range
`public `[`qmc5883l_osr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1ga94bf5e3f282baf506fb7f9ad5a1d7f33)` `[`osr`](#structqmc5883l__params__t_1acd4b81157730f2f65a0d2761a6756886) | oversampling rate

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structqmc5883l__params__t_1ab1e3ec304707c873afd305fc7da4a6e8) 

I2C bus the sensor is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_drdy`](#structqmc5883l__params__t_1ad865558b50a59d9543038f16148360a6) 

DRDY ISR pin, set to GPIO_UNDEF if unused.

#### `public `[`qmc5883l_odr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1ga9b309fb78b36f074ed8b5b9ff07cd497)` `[`odr`](#structqmc5883l__params__t_1a6212fe62757b76f15ad175e81cec36a2) 

output data rate

#### `public `[`qmc5883l_rng_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1ga479a092e370a54f48e3bc7ee8fa23e02)` `[`rng`](#structqmc5883l__params__t_1a3c45c5789866947eb8a8f3a04b30a678) 

output data range

#### `public `[`qmc5883l_osr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__qmc5883l_1ga94bf5e3f282baf506fb7f9ad5a1d7f33)` `[`osr`](#structqmc5883l__params__t_1acd4b81157730f2f65a0d2761a6756886) 

oversampling rate

# struct `qmc5883l_t` 

QMC5883L device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structqmc5883l__t_1ade3f887881d6bab1b5972662ff1d69f1) | I2C bus the sensor is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_drdy`](#structqmc5883l__t_1ace585365a079d45d057ee6617e260cb2) | DRDY interrupt pin.
`public uint8_t `[`cfg`](#structqmc5883l__t_1ad35b94d21ace50d3abb17acf00e1f6e7) | actual applied device configuration

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structqmc5883l__t_1ade3f887881d6bab1b5972662ff1d69f1) 

I2C bus the sensor is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_drdy`](#structqmc5883l__t_1ace585365a079d45d057ee6617e260cb2) 

DRDY interrupt pin.

#### `public uint8_t `[`cfg`](#structqmc5883l__t_1ad35b94d21ace50d3abb17acf00e1f6e7) 

actual applied device configuration

