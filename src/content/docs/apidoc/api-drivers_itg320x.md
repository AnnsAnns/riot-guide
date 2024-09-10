---
title: api-drivers_itg320x.md
description: api-drivers_itg320x.md
---
# group `drivers_itg320x` 

Device driver for InvenSense ITG320X 3-axis gyroscope.

The driver can be used with InvenSense ITG3200, ITG3205, and MPU3050. The latter one can be used only with reduced feature set.

The driver implements polling mode as well as interrupt mode. Thus, the application may use two different approaches to retrieve new data, either

* periodically fetching the data at a rate lower than the sensor's output data rate (ODR), or

* fetching the data when the data-ready interrupt is triggered.

To use the latter approach, module `itg320x_int` has to be enabled and the GPIO to which the sensor's **INT** output pin is connected has to be configured.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ITG320X_ID`](#group__drivers__itg320x_1ga8d169932ebaed104704ae2f54dc68b66)            | ITG320X chip id defined in Who Am I.
`enum `[`itg320x_error_codes_t`](#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)            | Named return values.
`enum `[`itg320x_lpf_bw_t`](#group__drivers__itg320x_1ga024f925f7c496983500513988cc0bb84)            | Low pass filter bandwidth.
`enum `[`itg320x_int_level_t`](#group__drivers__itg320x_1gaee2676f712635f66773919467d300122)            | Logic level for INT output pin (ITG320X_REG_INT_CFG<7>)
`enum `[`itg320x_int_drive_t`](#group__drivers__itg320x_1gabee17bef12c492d49ed4b15ec67c91d8)            | Drive type for INT output pin (ITG320X_REG_INT_CFG<6>)
`enum `[`itg320x_clk_sel_t`](#group__drivers__itg320x_1ga2c1a5dae8a6b7d005e16912ea7519003)            | Clock source selection (ITG320X_REG_PWR_MGM<2:0>)
`public int `[`itg320x_init`](#group__drivers__itg320x_1gaadadcc82ad16623ae77609004b742b3a)`(`[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,const `[`itg320x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__params__t)` * params)`            | Initialize the ITG320X sensor device.
`public int `[`itg320x_init_int`](#group__drivers__itg320x_1ga18b3e17a7f8d3c30199e83c434adf4c6)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,`[`itg320x_drdy_int_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ga61f7479fbc78071d75b09877ca54d548)` cb,void * arg)`            | Initialize and activate the DRDY interrupt of ITG320X sensor device.
`public int `[`itg320x_data_ready`](#group__drivers__itg320x_1gac4236cbf5e563439665f1c35a75fdb4d)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev)`            | Data-ready status function.
`public int `[`itg320x_read`](#group__drivers__itg320x_1ga019b325d77d8509caf280c20c112ed6c)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,`[`itg320x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__data__t)` * data)`            | Read one sample of angular rates in tenths of a degree per second.
`public int `[`itg320x_read_raw`](#group__drivers__itg320x_1ga4c0ac5f06ae32278678eb7a2123eca77)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,`[`itg320x_raw_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__raw__data__t)` * raw)`            | Read one sample of raw sensor data as 16 bit two's complements.
`public int `[`itg320x_read_temp`](#group__drivers__itg320x_1ga1958fabad4588c9a2460e07b6c606fab)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,int16_t * temp)`            | Read temperature in tenths of a degree Celsius.
`public int `[`itg320x_power_down`](#group__drivers__itg320x_1gaee6b79d4501e89891b9a9f845d5fc57d)`(`[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev)`            | Power down the sensor.
`public int `[`itg320x_power_up`](#group__drivers__itg320x_1ga1918666930f738f0d5c74e3cda8a7897)`(`[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev)`            | Power up the sensor.
`struct `[`itg320x_data_t`](#structitg320x__data__t) | Angular rate values in tenths of a degree per second.
`struct `[`itg320x_raw_data_t`](#structitg320x__raw__data__t) | Raw data set as two complements.
`struct `[`itg320x_params_t`](#structitg320x__params__t) | ITG320X device initialization parameters.
`struct `[`itg320x_t`](#structitg320x__t) | ITG320X sensor device data structure type.

## Members

#### `define `[`ITG320X_ID`](#group__drivers__itg320x_1ga8d169932ebaed104704ae2f54dc68b66) 

ITG320X chip id defined in Who Am I.

#### `enum `[`itg320x_error_codes_t`](#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ITG320X_OK            | success
ITG320X_ERROR_I2C            | I2C communication error.
ITG320X_ERROR_WRONG_ID            | wrong id read
ITG320X_ERROR_NO_DATA            | no data are available
ITG320X_ERROR_RAW_DATA            | reading raw data failed

Named return values.

#### `enum `[`itg320x_lpf_bw_t`](#group__drivers__itg320x_1ga024f925f7c496983500513988cc0bb84) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ITG320X_LPF_BW_256            | 256 Hz, ISR = 8 kHz
ITG320X_LPF_BW_188            | 188 Hz, ISR = 1 kHz
ITG320X_LPF_BW_98            | 98 Hz, ISR = 1 kHz
ITG320X_LPF_BW_42            | 42 Hz, ISR = 1 kHz
ITG320X_LPF_BW_20            | 20 Hz, ISR = 1 kHz
ITG320X_LPF_BW_10            | 10 Hz, ISR = 1 kHz
ITG320X_LPF_BW_5            | 5 Hz, ISR = 1 kHz (default)

Low pass filter bandwidth.

Low pass filter bandwidth determines the internal sample rate (ISR). The internal sample rate (ISR) together with sample rate divider (ISR_DIV) determines the output data rate ODR = ISR / (ISR_DIV + 1) where internal sample rate (ISR) is 8 kHz for [ITG320X_LPF_BW_256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gga024f925f7c496983500513988cc0bb84a9b6ce6e25f5339a0305eec8f2b9bc75b), or 1 kHz otherwise.

#### `enum `[`itg320x_int_level_t`](#group__drivers__itg320x_1gaee2676f712635f66773919467d300122) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ITG320X_INT_HIGH            | INT output is active high (default)
ITG320X_INT_LOW            | INT output is active low.

Logic level for INT output pin (ITG320X_REG_INT_CFG<7>)

#### `enum `[`itg320x_int_drive_t`](#group__drivers__itg320x_1gabee17bef12c492d49ed4b15ec67c91d8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ITG320X_INT_PUSH_PULL            | INT output is of type push/pull (default)
ITG320X_INT_OPEN_DRAIN            | INT output is of type open drain.

Drive type for INT output pin (ITG320X_REG_INT_CFG<6>)

#### `enum `[`itg320x_clk_sel_t`](#group__drivers__itg320x_1ga2c1a5dae8a6b7d005e16912ea7519003) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ITG320X_CLK_INTERNAL            | Internal oscillator.
ITG320X_CLK_PLL_X_GYRO            | PLL with X Gyro reference (default)
ITG320X_CLK_PLL_Y_GYRO            | PLL with X Gyro reference.
ITG320X_CLK_PLL_Z_GYRO            | PLL with X Gyro reference.
ITG320X_CLK_PLL_32K            | PLL with external 32.768 kHz reference.
ITG320X_CLK_PLL_19M            | PLL with external 19.2 MHz reference.

Clock source selection (ITG320X_REG_PWR_MGM<2:0>)

#### `public int `[`itg320x_init`](#group__drivers__itg320x_1gaadadcc82ad16623ae77609004b742b3a)`(`[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,const `[`itg320x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__params__t)` * params)` 

Initialize the ITG320X sensor device.

This function resets the sensor and initializes the sensor according to given initialization parameters. All registers are reset to default values.

#### Parameters
* `dev` device descriptor of ITG320X sensor to be initialized 

* `params` ITG320X initialization parameters

#### Parameters
* `ITG320X_OK` on success 

* `ITG320X_ERROR_*` a negative error code on error, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

#### `public int `[`itg320x_init_int`](#group__drivers__itg320x_1ga18b3e17a7f8d3c30199e83c434adf4c6)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,`[`itg320x_drdy_int_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ga61f7479fbc78071d75b09877ca54d548)` cb,void * arg)` 

Initialize and activate the DRDY interrupt of ITG320X sensor device.

This function activates the DRDY interrupt and initializes the pin defined as the interrupt pin in the initialization parameters of the device. The `cb` parameter specifies the function, along with an optional argument `arg`, which is called when a DRDY interrupt is triggered.

The given callback function `cb` is executed in interrupt context. Make sure not to call any driver API function in that context. 

This function is only available when module `itg320x_int` is enabled.

#### Parameters
* `dev` device descriptor of ITG320X sensor 

* `cb` function called when DRDY interrupt is triggered 

* `arg` argument for the callback function

#### `public int `[`itg320x_data_ready`](#group__drivers__itg320x_1gac4236cbf5e563439665f1c35a75fdb4d)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev)` 

Data-ready status function.

The function checks the status register and returns

#### Parameters
* `dev` device descriptor of ITG320X sensor

#### Parameters
* `ITG320X_OK` new data available 

* `ITG320X_ERROR_NO_DATA` no new data available 

* `ITG320X_ERROR_*` negative error code, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

#### `public int `[`itg320x_read`](#group__drivers__itg320x_1ga019b325d77d8509caf280c20c112ed6c)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,`[`itg320x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__data__t)` * data)` 

Read one sample of angular rates in tenths of a degree per second.

Raw magnetometer data are read from the sensor and normalized with respect to full scale +-2000 dps. Angular rate values are given in tenths of a degrees per second:

#### Parameters
* `dev` device descriptor of ITG320X sensor 

* `data` result vector in tenths of a degrees per second

#### Parameters
* `ITG320X_OK` on success 

* `ITG320X_ERROR_*` a negative error code on error, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

#### `public int `[`itg320x_read_raw`](#group__drivers__itg320x_1ga4c0ac5f06ae32278678eb7a2123eca77)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,`[`itg320x_raw_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__raw__data__t)` * raw)` 

Read one sample of raw sensor data as 16 bit two's complements.

#### Parameters
* `dev` device descriptor of ITG320X sensor 

* `raw` raw data vector

#### Parameters
* `ITG320X_OK` on success 

* `ITG320X_ERROR_*` a negative error code on error, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

#### `public int `[`itg320x_read_temp`](#group__drivers__itg320x_1ga1958fabad4588c9a2460e07b6c606fab)`(const `[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev,int16_t * temp)` 

Read temperature in tenths of a degree Celsius.

#### Parameters
* `dev` device descriptor of ITG320X sensor 

* `temp` temperature tenths of a degree Celsius

#### Parameters
* `ITG320X_OK` on success 

* `ITG320X_ERROR_*` a negative error code on error, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

#### `public int `[`itg320x_power_down`](#group__drivers__itg320x_1gaee6b79d4501e89891b9a9f845d5fc57d)`(`[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev)` 

Power down the sensor.

Changes the sensor operation mode to sleep mode in which almost all including the gyros are switched off.

#### Parameters
* `dev` Device descriptor of ITG320X device to read from

#### Parameters
* `ITG320X_OK` on success 

* `ITG320X_ERROR_*` a negative error code on error, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

#### `public int `[`itg320x_power_up`](#group__drivers__itg320x_1ga1918666930f738f0d5c74e3cda8a7897)`(`[`itg320x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__t)` * dev)` 

Power up the sensor.

Swichtes the sensor back into active operation mode. It takes up to 20 ms since the gyros have to be switched on again.

#### Parameters
* `dev` Device descriptor of ITG320X device to read from

#### Parameters
* `ITG320X_OK` on success 

* `ITG320X_ERROR_*` a negative error code on error, see [itg320x_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gadda9b12aef462af6df5885d2c4c8f46a)

# struct `itg320x_data_t` 

Angular rate values in tenths of a degree per second.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structitg320x__data__t_1a3ac2187ea2858a48eee84d70f0cc4265) | angular rate x-axis (roll)
`public int16_t `[`y`](#structitg320x__data__t_1ab65ca38ca3cbdc2231a376e4168ceea8) | angular rate y-axis (pitch)
`public int16_t `[`z`](#structitg320x__data__t_1a0121856b9b2a0097d84f625a6d5a99cf) | angular rate y-axis (yaw)

## Members

#### `public int16_t `[`x`](#structitg320x__data__t_1a3ac2187ea2858a48eee84d70f0cc4265) 

angular rate x-axis (roll)

#### `public int16_t `[`y`](#structitg320x__data__t_1ab65ca38ca3cbdc2231a376e4168ceea8) 

angular rate y-axis (pitch)

#### `public int16_t `[`z`](#structitg320x__data__t_1a0121856b9b2a0097d84f625a6d5a99cf) 

angular rate y-axis (yaw)

# struct `itg320x_raw_data_t` 

Raw data set as two complements.

According to the sensor sensitivity of 1/14.375 degrees per second, the raw data values have to be divided by 14.375 to obtain the measurements in degrees per second.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structitg320x__raw__data__t_1a259cec23caf63c5917f6dec7623a3f61) | angular rate x-axis as 16 bit two's complements (roll)
`public int16_t `[`y`](#structitg320x__raw__data__t_1a7b905eb78702b25f27e6cb982a1d063f) | angular rate y-axis as 16 bit two's complements (pitch)
`public int16_t `[`z`](#structitg320x__raw__data__t_1a979e67c6b1f2d915a08d9e8ab224eaa9) | angular rate z-axis as 16 bit two's complements (yaw)

## Members

#### `public int16_t `[`x`](#structitg320x__raw__data__t_1a259cec23caf63c5917f6dec7623a3f61) 

angular rate x-axis as 16 bit two's complements (roll)

#### `public int16_t `[`y`](#structitg320x__raw__data__t_1a7b905eb78702b25f27e6cb982a1d063f) 

angular rate y-axis as 16 bit two's complements (pitch)

#### `public int16_t `[`z`](#structitg320x__raw__data__t_1a979e67c6b1f2d915a08d9e8ab224eaa9) 

angular rate z-axis as 16 bit two's complements (yaw)

# struct `itg320x_params_t` 

ITG320X device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structitg320x__params__t_1ae181ce3016c91d9f5190da3648eb902e) | I2C device (default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb))
`public uint8_t `[`addr`](#structitg320x__params__t_1a648972d5fb29a3285ad7228a7cd1df95) | I2C slave address (default [ITG320X_I2C_ADDRESS_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gad4055c2181a79d1d42d4e3325febcaa6))
`public uint8_t `[`isr_div`](#structitg320x__params__t_1a7ab9499049e9e8b834309c16187262c5) | Internal sample rate divider ISR_DIV (default 99) ODR = ISR / (ISR_DIV + 1) where internal sample rate is 1 kHz or 8 kHz dependent on the low pass filter bandwidth [lpf_bw](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__params__t_1afcc249534abfe3fc70a7749396f740d2).
`public `[`itg320x_lpf_bw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ga024f925f7c496983500513988cc0bb84)` `[`lpf_bw`](#structitg320x__params__t_1afcc249534abfe3fc70a7749396f740d2) | Low pass filter bandwidth (default [ITG320X_LPF_BW_5](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gga024f925f7c496983500513988cc0bb84a720a4c4bd115b475231aad61d700cddc), ISR 1 kHz)
`public `[`itg320x_clk_sel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ga2c1a5dae8a6b7d005e16912ea7519003)` `[`clk_sel`](#structitg320x__params__t_1af4f9a3b0011f33d665994919a1c9f6fd) | Clock source selection (default ITG320X_CLK_PLL_X_GYRO)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structitg320x__params__t_1aa69b296efe2eb3bd2196e7c4a44736a7) | DRDY interrupt pin: [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not used.
`public `[`itg320x_int_level_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gaee2676f712635f66773919467d300122)` `[`int_level`](#structitg320x__params__t_1a61f81cc7c01d45c7c33fe8e25515e158) | Logic level for INT output pin (default [ITG320X_INT_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ggaee2676f712635f66773919467d300122ad7f6d9a536868588224100451bccfda4))
`public `[`itg320x_int_drive_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gabee17bef12c492d49ed4b15ec67c91d8)` `[`int_drive`](#structitg320x__params__t_1aeb11762b90ae57a487b5a3a361b5c616) | Drive type for INT output pin (default [ITG320X_INT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ggabee17bef12c492d49ed4b15ec67c91d8a7f93f4733971a9250f6f57aec27fc214).

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structitg320x__params__t_1ae181ce3016c91d9f5190da3648eb902e) 

I2C device (default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb))

#### `public uint8_t `[`addr`](#structitg320x__params__t_1a648972d5fb29a3285ad7228a7cd1df95) 

I2C slave address (default [ITG320X_I2C_ADDRESS_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gad4055c2181a79d1d42d4e3325febcaa6))

#### `public uint8_t `[`isr_div`](#structitg320x__params__t_1a7ab9499049e9e8b834309c16187262c5) 

Internal sample rate divider ISR_DIV (default 99) ODR = ISR / (ISR_DIV + 1) where internal sample rate is 1 kHz or 8 kHz dependent on the low pass filter bandwidth [lpf_bw](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__params__t_1afcc249534abfe3fc70a7749396f740d2).

#### `public `[`itg320x_lpf_bw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ga024f925f7c496983500513988cc0bb84)` `[`lpf_bw`](#structitg320x__params__t_1afcc249534abfe3fc70a7749396f740d2) 

Low pass filter bandwidth (default [ITG320X_LPF_BW_5](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gga024f925f7c496983500513988cc0bb84a720a4c4bd115b475231aad61d700cddc), ISR 1 kHz)

#### `public `[`itg320x_clk_sel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ga2c1a5dae8a6b7d005e16912ea7519003)` `[`clk_sel`](#structitg320x__params__t_1af4f9a3b0011f33d665994919a1c9f6fd) 

Clock source selection (default ITG320X_CLK_PLL_X_GYRO)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structitg320x__params__t_1aa69b296efe2eb3bd2196e7c4a44736a7) 

DRDY interrupt pin: [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not used.

#### `public `[`itg320x_int_level_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gaee2676f712635f66773919467d300122)` `[`int_level`](#structitg320x__params__t_1a61f81cc7c01d45c7c33fe8e25515e158) 

Logic level for INT output pin (default [ITG320X_INT_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ggaee2676f712635f66773919467d300122ad7f6d9a536868588224100451bccfda4))

#### `public `[`itg320x_int_drive_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1gabee17bef12c492d49ed4b15ec67c91d8)` `[`int_drive`](#structitg320x__params__t_1aeb11762b90ae57a487b5a3a361b5c616) 

Drive type for INT output pin (default [ITG320X_INT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__itg320x_1ggabee17bef12c492d49ed4b15ec67c91d8a7f93f4733971a9250f6f57aec27fc214).

# struct `itg320x_t` 

ITG320X sensor device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`itg320x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__params__t)` `[`params`](#structitg320x__t_1a9eee4e9cb7347314b3381f80f04c2e19) | device initialization parameters

## Members

#### `public `[`itg320x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_itg320x.md#structitg320x__params__t)` `[`params`](#structitg320x__t_1a9eee4e9cb7347314b3381f80f04c2e19) 

device initialization parameters

