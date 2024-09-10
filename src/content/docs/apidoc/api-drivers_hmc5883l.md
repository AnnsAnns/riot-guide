---
title: api-drivers_hmc5883l.md
description: api-drivers_hmc5883l.md
---
# group `drivers_hmc5883l` 

Device driver for the Honeywell HMC5883L 3-axis digital compass.

The driver implements basic polling mode. The application can use different approaches to get new data, either

* using the [hmc5883l_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gaad9f0e778bc576d3a47ec0a16acf24ba) function at a lower rate than the the DOR, or

* using the data-ready interrupt (**DRDY**), see [hmc5883l_init_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga7bc2a5d291b241e4467e565853ad7158).

The data-ready interrupt (**DRDY**) is only be available when module `hmc5883l_int` is enabled.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`hmc5883l_error_codes_t`](#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)            | Definition of error codes.
`enum `[`hmc5883l_dor_t`](#group__drivers__hmc5883l_1ga3e5c11028acf2fcbecadb688cc45e78e)            | Data output rates (DOR)
`enum `[`hmc5883l_meas_mode_t`](#group__drivers__hmc5883l_1ga96c5201ec65c03524407216582c13523)            | Measurement modes.
`enum `[`hmc5883l_meas_avg_t`](#group__drivers__hmc5883l_1gad6109c322ed916c8add64e36dbdfa602)            | Measurement avaraging (number of samples are averaged for output)
`enum `[`hmc5883l_op_mode_t`](#group__drivers__hmc5883l_1gadabcbc5ac02fdfe5ae625f29e42a5c35)            | Operation modes.
`enum `[`hmc5883l_gain_t`](#group__drivers__hmc5883l_1ga8afc10b5440bd119a4b9238fd9fa9920)            | Gain (determines the sensitivity and the range)
`public int `[`hmc5883l_init`](#group__drivers__hmc5883l_1ga7513553b960a8d986ef7bef1193b1a1d)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,const `[`hmc5883l_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__params__t)` * params)`            | Initialize the HMC5883L sensor device.
`public int `[`hmc5883l_init_int`](#group__drivers__hmc5883l_1ga7bc2a5d291b241e4467e565853ad7158)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,`[`hmc5883l_drdy_int_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gac1daac0a7a0c3360f81ec66b09ca29be)` cb,void * arg)`            | Initialize and activate the DRDY interrupt of HMC5883L sensor device.
`public int `[`hmc5883l_data_ready`](#group__drivers__hmc5883l_1ga53d9e5dd9014c73be3397cb1c34ceaa3)`(const `[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev)`            | Data-ready status function.
`public int `[`hmc5883l_read`](#group__drivers__hmc5883l_1gaad9f0e778bc576d3a47ec0a16acf24ba)`(const `[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,`[`hmc5883l_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__data__t)` * data)`            | Read one sample of magnetic field values in milli-Gauss (mGs)
`public int `[`hmc5883l_read_raw`](#group__drivers__hmc5883l_1ga91d1e25517c316b6eb56ea7ff37ab4fe)`(const `[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,`[`hmc5883l_raw_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__raw__data__t)` * raw)`            | Read one sample of raw sensor data as 16 bit two's complements.
`public int `[`hmc5883l_power_down`](#group__drivers__hmc5883l_1ga4cc423b529c6f6c15690cdd0d9007904)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev)`            | Power down the sensor.
`public int `[`hmc5883l_power_up`](#group__drivers__hmc5883l_1gaba93952471934e11bb55c8cce4109946)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev)`            | Power up the sensor.
`struct `[`hmc5883l_data_t`](#structhmc5883l__data__t) | Magnetic field values in milli-Gauss (mGs)
`struct `[`hmc5883l_raw_data_t`](#structhmc5883l__raw__data__t) | Raw data set as two complements.
`struct `[`hmc5883l_params_t`](#structhmc5883l__params__t) | HMC5883L device initialization parameters.
`struct `[`hmc5883l_t`](#structhmc5883l__t) | HMC5883L sensor device data structure type.

## Members

#### `enum `[`hmc5883l_error_codes_t`](#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HMC5883L_OK            | success
HMC5883L_ERROR_I2C            | any I2C communication error
HMC5883L_ERROR_WRONG_ID            | wrong id read
HMC5883L_ERROR_NO_DATA            | no data are available
HMC5883L_ERROR_RAW_DATA            | reading raw data failed
HMC5883L_ERROR_COMMON            | common error

Definition of error codes.

#### `enum `[`hmc5883l_dor_t`](#group__drivers__hmc5883l_1ga3e5c11028acf2fcbecadb688cc45e78e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HMC5883L_DOR_0_75            | 0.75 Hz
HMC5883L_DOR_1_5            | 1.5 Hz
HMC5883L_DOR_3            | 3 Hz
HMC5883L_DOR_7_5            | 7.5 Hz
HMC5883L_DOR_15            | 15 Hz (default)
HMC5883L_DOR_30            | 30 Hz
HMC5883L_DOR_75            | 75 Hz

Data output rates (DOR)

The values correspond to bits <4:2> of the HMC5883L_REG_CFG_A register.

#### `enum `[`hmc5883l_meas_mode_t`](#group__drivers__hmc5883l_1ga96c5201ec65c03524407216582c13523) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HMC5883L_MEAS_MODE_NORMAL            | Normal measurement config.
HMC5883L_MEAS_MODE_BIAS_POS            | Positive bias config for all axes.
HMC5883L_MEAS_MODE_BIAS_NEG            | Negative bias config for all axes.

Measurement modes.

The values correspond to bits <1:0> of the HMC5883L_REG_CFG_A register.

#### `enum `[`hmc5883l_meas_avg_t`](#group__drivers__hmc5883l_1gad6109c322ed916c8add64e36dbdfa602) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HMC5883L_MEAS_AVG_NONE            | No averaging.
HMC5883L_MEAS_AVG_2            | 2 samples are averaged
HMC5883L_MEAS_AVG_4            | 4 samples are averaged
HMC5883L_MEAS_AVG_8            | 8 samples are averaged

Measurement avaraging (number of samples are averaged for output)

The values correspond to bits <6:5> of the HMC5883L_REG_CFG_A register.

#### `enum `[`hmc5883l_op_mode_t`](#group__drivers__hmc5883l_1gadabcbc5ac02fdfe5ae625f29e42a5c35) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HMC5883L_OP_MODE_CONTINUOUS            | Continuous measurement.
HMC5883L_OP_MODE_SINGLE            | Single measurement.
HMC5883L_OP_MODE_IDLE            | Idle mode.

Operation modes.

Values correspond to bits <1:0> of HMC5883L_REG_MODE register

#### `enum `[`hmc5883l_gain_t`](#group__drivers__hmc5883l_1ga8afc10b5440bd119a4b9238fd9fa9920) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HMC5883L_GAIN_1370            | Range +-0.88 Gs, Resolution 0.73 mGs/LSB.
HMC5883L_GAIN_1090            | Range +-1.3 Gs, Resolution 0.92 mGs/LSB.
HMC5883L_GAIN_820            | Range +-1.9 Gs, Resolution 1.22 mGs/LSB.
HMC5883L_GAIN_660            | Range +-2.5 Gs, Resolution 1.52 mGs/LSB.
HMC5883L_GAIN_440            | Range +-4.0 Gs, Resolution 2.27 mGs/LSB.
HMC5883L_GAIN_390            | Range +-4.7 Gs, Resolution 2.56 mGs/LSB.
HMC5883L_GAIN_330            | Range +-5.6 Gs, Resolution 3.03 mGs/LSB.
HMC5883L_GAIN_230            | Range +-8.1 Gs, Resolution 4.35 mGs/LSB.

Gain (determines the sensitivity and the range)

The values correspond to bits <7:5> of the HMC5883L_REG_CFG_B_GN register.

#### `public int `[`hmc5883l_init`](#group__drivers__hmc5883l_1ga7513553b960a8d986ef7bef1193b1a1d)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,const `[`hmc5883l_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__params__t)` * params)` 

Initialize the HMC5883L sensor device.

This function resets the sensor and initializes the sensor according to given initialization parameters. All registers are reset to default values.

#### Parameters
* `dev` device descriptor of HMC5883L sensor to be initialized 

* `params` HMC5883L initialization parameters

#### Parameters
* `HMC5883L_OK` on success 

* `HMC5883L_ERROR_*` a negative error code on error, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

#### `public int `[`hmc5883l_init_int`](#group__drivers__hmc5883l_1ga7bc2a5d291b241e4467e565853ad7158)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,`[`hmc5883l_drdy_int_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gac1daac0a7a0c3360f81ec66b09ca29be)` cb,void * arg)` 

Initialize and activate the DRDY interrupt of HMC5883L sensor device.

This function activates the DRDY interrupt and initializes the pin defined as the interrupt pin in the initialization parameters of the device. The `cb` parameter specifies the function, along with an optional argument `arg`, which is called when a DRDY interrupt is triggered.

The given callback function `cb` is executed in interrupt context. Make sure not to call any driver API function in that context. 

This function is only available when module `hmc5883l_int` is enabled.

#### Parameters
* `dev` device descriptor of HMC5883L sensor 

* `cb` function called when DRDY interrupt is triggered 

* `arg` argument for the callback function

#### Parameters
* `HMC5883L_OK` on success 

* `HMC5883L_ERROR_*` a negative error code on error, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

#### `public int `[`hmc5883l_data_ready`](#group__drivers__hmc5883l_1ga53d9e5dd9014c73be3397cb1c34ceaa3)`(const `[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev)` 

Data-ready status function.

The function checks the status register and returns

#### Parameters
* `dev` device descriptor of HMC5883L sensor

#### Parameters
* `HMC5883L_OK` new data available 

* `HMC5883L_ERROR_NO_DATA` no new data available 

* `HMC5883L_ERROR_*` negative error code, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

#### `public int `[`hmc5883l_read`](#group__drivers__hmc5883l_1gaad9f0e778bc576d3a47ec0a16acf24ba)`(const `[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,`[`hmc5883l_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__data__t)` * data)` 

Read one sample of magnetic field values in milli-Gauss (mGs)

Raw magnetometer data are read from the sensor and normalized them with respect to configured gain. Magnetic field values are given in milli-Gauss (mGs) to preserve full resolution:

#### Parameters
* `dev` device descriptor of HMC5883L sensor 

* `data` result vector in milli-Gauss (mGs) per axis

#### Parameters
* `HMC5883L_OK` on success 

* `HMC5883L_ERROR_*` a negative error code on error, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

#### `public int `[`hmc5883l_read_raw`](#group__drivers__hmc5883l_1ga91d1e25517c316b6eb56ea7ff37ab4fe)`(const `[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev,`[`hmc5883l_raw_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__raw__data__t)` * raw)` 

Read one sample of raw sensor data as 16 bit two's complements.

#### Parameters
* `dev` device descriptor of HMC5883L sensor 

* `raw` raw data vector

#### Parameters
* `HMC5883L_OK` on success 

* `HMC5883L_ERROR_*` a negative error code on error, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

#### `public int `[`hmc5883l_power_down`](#group__drivers__hmc5883l_1ga4cc423b529c6f6c15690cdd0d9007904)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev)` 

Power down the sensor.

Changes the sensor operation mode to [HMC5883L_OP_MODE_IDLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggadabcbc5ac02fdfe5ae625f29e42a5c35a05a97940c55510f6c4165dc82e88c9cc) in which almost all internal blocks are switched off. I2C interface is still active. The content of the configuration registers is preserved.

#### Parameters
* `dev` Device descriptor of HMC5883L device to read from

#### Parameters
* `HMC5883L_OK` on success 

* `HMC5883L_ERROR_*` negative error code, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

#### `public int `[`hmc5883l_power_up`](#group__drivers__hmc5883l_1gaba93952471934e11bb55c8cce4109946)`(`[`hmc5883l_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hmc5883l.md#structhmc5883l__t)` * dev)` 

Power up the sensor.

Swichtes the sensor back into the last active operation mode.

#### Parameters
* `dev` Device descriptor of HMC5883L device to read from

#### Parameters
* `HMC5883L_OK` on success 

* `HMC5883L_ERROR_*` negative error code, see [hmc5883l_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga842da914d7c94f6d4ca50f7b044335d6)

# struct `hmc5883l_data_t` 

Magnetic field values in milli-Gauss (mGs)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structhmc5883l__data__t_1acc41498cfaa134940c6a3149b7d45b96) | magnetic field x-axis
`public int16_t `[`y`](#structhmc5883l__data__t_1a9cd0553d57bf3d7d6630b63b0e0759e8) | magnetic field y-axis
`public int16_t `[`z`](#structhmc5883l__data__t_1a52840a891e32e6cf0f6b9f14ce6b6557) | magnetic field y-axis

## Members

#### `public int16_t `[`x`](#structhmc5883l__data__t_1acc41498cfaa134940c6a3149b7d45b96) 

magnetic field x-axis

#### `public int16_t `[`y`](#structhmc5883l__data__t_1a9cd0553d57bf3d7d6630b63b0e0759e8) 

magnetic field y-axis

#### `public int16_t `[`z`](#structhmc5883l__data__t_1a52840a891e32e6cf0f6b9f14ce6b6557) 

magnetic field y-axis

# struct `hmc5883l_raw_data_t` 

Raw data set as two complements.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structhmc5883l__raw__data__t_1a90821ee7d1660c5b2778e90f68413fbd) | magnetic field x-axis as 16 bit two's complements
`public int16_t `[`y`](#structhmc5883l__raw__data__t_1aa602ad1b0c42584397808850196d6526) | magnetic field y-axis as 16 bit two's complements
`public int16_t `[`z`](#structhmc5883l__raw__data__t_1a4a0c67791e28d27bf737ddea8afdff7a) | magnetic field z-axis as 16 bit two's complements

## Members

#### `public int16_t `[`x`](#structhmc5883l__raw__data__t_1a90821ee7d1660c5b2778e90f68413fbd) 

magnetic field x-axis as 16 bit two's complements

#### `public int16_t `[`y`](#structhmc5883l__raw__data__t_1aa602ad1b0c42584397808850196d6526) 

magnetic field y-axis as 16 bit two's complements

#### `public int16_t `[`z`](#structhmc5883l__raw__data__t_1a4a0c67791e28d27bf737ddea8afdff7a) 

magnetic field z-axis as 16 bit two's complements

# struct `hmc5883l_params_t` 

HMC5883L device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`dev`](#structhmc5883l__params__t_1a10a96099e1e62e6cc8fe03379f3d8fdf) | I2C device.
`public `[`hmc5883l_meas_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga96c5201ec65c03524407216582c13523)` `[`meas_mode`](#structhmc5883l__params__t_1a3cdaf625e21233517452e3ef402c2139) | Measurement mode (default [HMC5883L_MEAS_MODE_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga96c5201ec65c03524407216582c13523af5b00f62a3510214dc46356cd2632061))
`public `[`hmc5883l_meas_avg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gad6109c322ed916c8add64e36dbdfa602)` `[`meas_avg`](#structhmc5883l__params__t_1a8da323b7f8d2720f5bede13b414f66af) | Measurement avaraging (default [HMC5883L_MEAS_AVG_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggad6109c322ed916c8add64e36dbdfa602a0f8bc9f25e919e05789b7b8d5c4ca7be))
`public `[`hmc5883l_dor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga3e5c11028acf2fcbecadb688cc45e78e)` `[`dor`](#structhmc5883l__params__t_1a23428db8e73aed977227eb658415d262) | Data output rate (default [HMC5883L_DOR_15](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga3e5c11028acf2fcbecadb688cc45e78ea6b5249d0d639822fadc9ae6039c912fb))
`public `[`hmc5883l_op_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gadabcbc5ac02fdfe5ae625f29e42a5c35)` `[`op_mode`](#structhmc5883l__params__t_1af7eb0d03b543f182d78db3e7ee5fdfd5) | Operation mode ([HMC5883L_OP_MODE_CONTINUOUS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggadabcbc5ac02fdfe5ae625f29e42a5c35ab943075aacc8638d7d184577aedc0e3c))
`public `[`hmc5883l_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga8afc10b5440bd119a4b9238fd9fa9920)` `[`gain`](#structhmc5883l__params__t_1a8e7b563368f91b324ba2e0d3aa532a32) | Gain (default [HMC5883L_GAIN_1090](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga8afc10b5440bd119a4b9238fd9fa9920a4c9fb5ef3e6503e2cb8b996eae4ab4d1))

## Members

#### `public unsigned `[`dev`](#structhmc5883l__params__t_1a10a96099e1e62e6cc8fe03379f3d8fdf) 

I2C device.

#### `public `[`hmc5883l_meas_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga96c5201ec65c03524407216582c13523)` `[`meas_mode`](#structhmc5883l__params__t_1a3cdaf625e21233517452e3ef402c2139) 

Measurement mode (default [HMC5883L_MEAS_MODE_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga96c5201ec65c03524407216582c13523af5b00f62a3510214dc46356cd2632061))

#### `public `[`hmc5883l_meas_avg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gad6109c322ed916c8add64e36dbdfa602)` `[`meas_avg`](#structhmc5883l__params__t_1a8da323b7f8d2720f5bede13b414f66af) 

Measurement avaraging (default [HMC5883L_MEAS_AVG_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggad6109c322ed916c8add64e36dbdfa602a0f8bc9f25e919e05789b7b8d5c4ca7be))

#### `public `[`hmc5883l_dor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga3e5c11028acf2fcbecadb688cc45e78e)` `[`dor`](#structhmc5883l__params__t_1a23428db8e73aed977227eb658415d262) 

Data output rate (default [HMC5883L_DOR_15](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga3e5c11028acf2fcbecadb688cc45e78ea6b5249d0d639822fadc9ae6039c912fb))

#### `public `[`hmc5883l_op_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gadabcbc5ac02fdfe5ae625f29e42a5c35)` `[`op_mode`](#structhmc5883l__params__t_1af7eb0d03b543f182d78db3e7ee5fdfd5) 

Operation mode ([HMC5883L_OP_MODE_CONTINUOUS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggadabcbc5ac02fdfe5ae625f29e42a5c35ab943075aacc8638d7d184577aedc0e3c))

#### `public `[`hmc5883l_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga8afc10b5440bd119a4b9238fd9fa9920)` `[`gain`](#structhmc5883l__params__t_1a8e7b563368f91b324ba2e0d3aa532a32) 

Gain (default [HMC5883L_GAIN_1090](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga8afc10b5440bd119a4b9238fd9fa9920a4c9fb5ef3e6503e2cb8b996eae4ab4d1))

# struct `hmc5883l_t` 

HMC5883L sensor device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`dev`](#structhmc5883l__t_1a291def769d6f8fc031cc4c61dd8869c2) | I2C device.
`public `[`hmc5883l_op_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gadabcbc5ac02fdfe5ae625f29e42a5c35)` `[`op_mode`](#structhmc5883l__t_1a480aaa4131eb5a929c1881a8426d221d) | Operation mode ([HMC5883L_OP_MODE_CONTINUOUS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggadabcbc5ac02fdfe5ae625f29e42a5c35ab943075aacc8638d7d184577aedc0e3c))
`public `[`hmc5883l_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga8afc10b5440bd119a4b9238fd9fa9920)` `[`gain`](#structhmc5883l__t_1adb0e0ec673dca03c60497997c5393d4e) | Gain (default [HMC5883L_GAIN_1090](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga8afc10b5440bd119a4b9238fd9fa9920a4c9fb5ef3e6503e2cb8b996eae4ab4d1))

## Members

#### `public unsigned `[`dev`](#structhmc5883l__t_1a291def769d6f8fc031cc4c61dd8869c2) 

I2C device.

#### `public `[`hmc5883l_op_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gadabcbc5ac02fdfe5ae625f29e42a5c35)` `[`op_mode`](#structhmc5883l__t_1a480aaa4131eb5a929c1881a8426d221d) 

Operation mode ([HMC5883L_OP_MODE_CONTINUOUS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ggadabcbc5ac02fdfe5ae625f29e42a5c35ab943075aacc8638d7d184577aedc0e3c))

#### `public `[`hmc5883l_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1ga8afc10b5440bd119a4b9238fd9fa9920)` `[`gain`](#structhmc5883l__t_1adb0e0ec673dca03c60497997c5393d4e) 

Gain (default [HMC5883L_GAIN_1090](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hmc5883l_1gga8afc10b5440bd119a4b9238fd9fa9920a4c9fb5ef3e6503e2cb8b996eae4ab4d1))

