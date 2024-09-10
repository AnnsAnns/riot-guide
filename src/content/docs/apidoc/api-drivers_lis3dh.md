---
title: api-drivers_lis3dh.md
description: api-drivers_lis3dh.md
---
# group `drivers_lis3dh` 

Device driver for the LIS3DH accelerometer.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LIS3DH_WHO_AM_I_RESPONSE`](#group__drivers__lis3dh_1gac2ed422e807877fbad0429446c1ac1a4)            | Identifier register value.
`define `[`LIS3DH_AXES_XYZ`](#group__drivers__lis3dh_1gac8c5415db40424df068146622966f076)            | Convenience macro for enabling all axes.
`define `[`LIS3DH_ADC_DATA_SIZE`](#group__drivers__lis3dh_1gaa0e03ddcd428bbac69affd22d6c8d363)            | Length of scalar measurement data in bytes.
`public int `[`lis3dh_init`](#group__drivers__lis3dh_1ga50ab52843ee9237211debe65b6e63de0)`(`[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const `[`lis3dh_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__params__t)` * params)`            | Initialize a LIS3DH sensor instance.
`public int `[`lis3dh_read_xyz`](#group__drivers__lis3dh_1ga5bfd4a19777dd47a7d6b01b05eef334b)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,`[`lis3dh_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__data__t)` * acc_data)`            | Read 3D acceleration data from the accelerometer.
`public int `[`lis3dh_read_aux_adc1`](#group__drivers__lis3dh_1gae7426da6a36dd9fe764d53896436913e)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,int16_t * out)`            | Read auxiliary ADC channel 1 data from the accelerometer.
`public int `[`lis3dh_read_aux_adc2`](#group__drivers__lis3dh_1gadce4ccf1de3b6b7e859e610cab0bf2a0)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,int16_t * out)`            | Read auxiliary ADC channel 2 data from the accelerometer.
`public int `[`lis3dh_read_aux_adc3`](#group__drivers__lis3dh_1ga149ede051faf80c091c826d1c1125dfa)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,int16_t * out)`            | Read auxiliary ADC channel 3 data from the accelerometer.
`public int `[`lis3dh_set_aux_adc`](#group__drivers__lis3dh_1ga6d70b9fa624719fe16af0c695796dd54)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t enable,const uint8_t temperature)`            | Turn on/off power to the auxiliary ADC in LIS3DH.
`public int `[`lis3dh_set_axes`](#group__drivers__lis3dh_1gac31663604b6789c0ad4828298cc561f8)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t axes)`            | Enable/disable accelerometer axes.
`public int `[`lis3dh_set_fifo`](#group__drivers__lis3dh_1ga77ff3fa6f07721ecb47af4b408e43e63)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t mode,const uint8_t watermark)`            | Enable/disable the FIFO.
`public int `[`lis3dh_set_odr`](#group__drivers__lis3dh_1gab08cad85385b5061783b0bbd4a70b656)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t odr)`            | Set the output data rate of the sensor.
`public int `[`lis3dh_set_scale`](#group__drivers__lis3dh_1ga339c601708555d60ead9c647e8d7c4a0)`(`[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t scale)`            | Set the full scale range of the sensor.
`public int `[`lis3dh_set_int1`](#group__drivers__lis3dh_1ga22c473240355355e95c91439620db3c1)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t mode)`            | Set INT1 pin function.
`public int `[`lis3dh_get_fifo_level`](#group__drivers__lis3dh_1ga21fbc034fed1ea52908ef52a56519659)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev)`            | Get the current number of elements in the FIFO.
`struct `[`lis3dh_params_t`](#structlis3dh__params__t) | Configuration parameters for LIS3DH devices.
`struct `[`lis3dh_t`](#structlis3dh__t) | Device descriptor for LIS3DH sensors.
`struct `[`lis3dh_data_t`](#structlis3dh__data__t) | Result vector for accelerometer measurement.

## Members

#### `define `[`LIS3DH_WHO_AM_I_RESPONSE`](#group__drivers__lis3dh_1gac2ed422e807877fbad0429446c1ac1a4) 

Identifier register value.

The WHO_AM_I register should contain this value in order to correctly identify the chip.

#### `define `[`LIS3DH_AXES_XYZ`](#group__drivers__lis3dh_1gac8c5415db40424df068146622966f076) 

Convenience macro for enabling all axes.

#### `define `[`LIS3DH_ADC_DATA_SIZE`](#group__drivers__lis3dh_1gaa0e03ddcd428bbac69affd22d6c8d363) 

Length of scalar measurement data in bytes.

#### `public int `[`lis3dh_init`](#group__drivers__lis3dh_1ga50ab52843ee9237211debe65b6e63de0)`(`[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const `[`lis3dh_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__params__t)` * params)` 

Initialize a LIS3DH sensor instance.

#### Parameters
* `dev` Device descriptor of sensor to initialize 

* `params` Configuration parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_read_xyz`](#group__drivers__lis3dh_1ga5bfd4a19777dd47a7d6b01b05eef334b)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,`[`lis3dh_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__data__t)` * acc_data)` 

Read 3D acceleration data from the accelerometer.

#### Parameters
* `dev` Device descriptor of sensor 

* `acc_data` Accelerometer data output buffer

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_read_aux_adc1`](#group__drivers__lis3dh_1gae7426da6a36dd9fe764d53896436913e)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,int16_t * out)` 

Read auxiliary ADC channel 1 data from the accelerometer.

#### Parameters
* `dev` Device descriptor of sensor 

* `out` The value of ADC1 (OUT_1_{L,H}) will be written to this buffer

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_read_aux_adc2`](#group__drivers__lis3dh_1gadce4ccf1de3b6b7e859e610cab0bf2a0)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,int16_t * out)` 

Read auxiliary ADC channel 2 data from the accelerometer.

#### Parameters
* `dev` Device descriptor of sensor 

* `out` The value of ADC2 (OUT_2_{L,H}) will be written to this buffer

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_read_aux_adc3`](#group__drivers__lis3dh_1ga149ede051faf80c091c826d1c1125dfa)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,int16_t * out)` 

Read auxiliary ADC channel 3 data from the accelerometer.

#### Parameters
* `dev` Device descriptor of sensor 

* `out` The value of ADC3 (OUT_3_{L,H}) will be written to this buffer

The internal temperature sensor is connected to the third channel on the auxiliary ADC when the TEMP_EN bit of TEMP_CFG_REG is set.

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_set_aux_adc`](#group__drivers__lis3dh_1ga6d70b9fa624719fe16af0c695796dd54)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t enable,const uint8_t temperature)` 

Turn on/off power to the auxiliary ADC in LIS3DH.

#### Parameters
* `dev` Device descriptor of sensor 

* `enable` Power state of the auxiliary ADC 

* `temperature` If not zero, switch the ADC mux so that a temperature reading is available on OUT_3_L, OUT_3_H.

This ADC is only used for the temperature reading and the external ADC pins. The accelerometer ADC is turned on by [lis3dh_set_odr()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3dh_1gab08cad85385b5061783b0bbd4a70b656).

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_set_axes`](#group__drivers__lis3dh_1gac31663604b6789c0ad4828298cc561f8)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t axes)` 

Enable/disable accelerometer axes.

#### Parameters
* `dev` Device descriptor of sensor 

* `axes` An OR-ed combination of LIS3DH_AXES_X, LIS3DH_AXES_Y, LIS3DH_AXES_Z.

The macro LIS3DH_AXES_XYZ is a convenience shortcut to enable all axes.

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_set_fifo`](#group__drivers__lis3dh_1ga77ff3fa6f07721ecb47af4b408e43e63)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t mode,const uint8_t watermark)` 

Enable/disable the FIFO.

#### Parameters
* `dev` Device descriptor of sensor 

* `mode` FIFO mode, see data sheet for details. 

* `watermark` Watermark level for FIFO level interrupts

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_set_odr`](#group__drivers__lis3dh_1gab08cad85385b5061783b0bbd4a70b656)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t odr)` 

Set the output data rate of the sensor.

#### Parameters
* `dev` Device descriptor of sensor 

* `odr` Chosen output data rate.

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_set_scale`](#group__drivers__lis3dh_1ga339c601708555d60ead9c647e8d7c4a0)`(`[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t scale)` 

Set the full scale range of the sensor.

Valid values for scale are 2, 4, 8, 16 and represents the full range of the sensor.

#### Parameters
* `dev` Device descriptor of sensor 

* `scale` The chosen sensitivity scale.

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_set_int1`](#group__drivers__lis3dh_1ga22c473240355355e95c91439620db3c1)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev,const uint8_t mode)` 

Set INT1 pin function.

Set the bits of CTRL_REG3 for choosing sources for the INT1 pin.

#### Parameters
* `dev` Device descriptor of sensor 

* `mode` CTRL_REG3 value, see data sheet for details.

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lis3dh_get_fifo_level`](#group__drivers__lis3dh_1ga21fbc034fed1ea52908ef52a56519659)`(const `[`lis3dh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__t)` * dev)` 

Get the current number of elements in the FIFO.

#### Parameters
* `dev` Device descriptor of sensor

#### Returns
number of elements in device FIFO on success 

#### Returns
-1 on error

# struct `lis3dh_params_t` 

Configuration parameters for LIS3DH devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structlis3dh__params__t_1ab27be16f14df0ad684633d169dd46c81) | SPI device the sensor is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structlis3dh__params__t_1a632e1b2815046a92595c1dfb743c510c) | designated clock speed of the SPI bus
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structlis3dh__params__t_1a1fabee84c6b1cb495dd09f95bf864ee7) | Chip select pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1`](#structlis3dh__params__t_1a51cf55cc38030f7d9028eafde8f1a83c) | INT1 pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2`](#structlis3dh__params__t_1a0918fe7579c7ff7db698c5d6c4c3aa52) | INT2 (DRDY) pin.
`public uint8_t `[`scale`](#structlis3dh__params__t_1a47b2a5c59d704bf949cec8138521fd64) | Default sensor scale: 2, 4, 8, or 16 (G)
`public uint8_t `[`odr`](#structlis3dh__params__t_1a0916134842a844117e20887d149cacd0) | Default sensor ODR setting: LIS3DH_ODR_xxxHz.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structlis3dh__params__t_1ab27be16f14df0ad684633d169dd46c81) 

SPI device the sensor is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structlis3dh__params__t_1a632e1b2815046a92595c1dfb743c510c) 

designated clock speed of the SPI bus

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structlis3dh__params__t_1a1fabee84c6b1cb495dd09f95bf864ee7) 

Chip select pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1`](#structlis3dh__params__t_1a51cf55cc38030f7d9028eafde8f1a83c) 

INT1 pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2`](#structlis3dh__params__t_1a0918fe7579c7ff7db698c5d6c4c3aa52) 

INT2 (DRDY) pin.

#### `public uint8_t `[`scale`](#structlis3dh__params__t_1a47b2a5c59d704bf949cec8138521fd64) 

Default sensor scale: 2, 4, 8, or 16 (G)

#### `public uint8_t `[`odr`](#structlis3dh__params__t_1a0916134842a844117e20887d149cacd0) 

Default sensor ODR setting: LIS3DH_ODR_xxxHz.

# struct `lis3dh_t` 

Device descriptor for LIS3DH sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lis3dh_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__params__t)` `[`params`](#structlis3dh__t_1ae66757c933224555f227bc2c0c824d8c) | Device initialization parameters.
`public uint16_t `[`scale`](#structlis3dh__t_1ad7512e6f40c73d35b54d6ea90ec80628) | Internal sensor scale.

## Members

#### `public `[`lis3dh_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3dh.md#structlis3dh__params__t)` `[`params`](#structlis3dh__t_1ae66757c933224555f227bc2c0c824d8c) 

Device initialization parameters.

#### `public uint16_t `[`scale`](#structlis3dh__t_1ad7512e6f40c73d35b54d6ea90ec80628) 

Internal sensor scale.

# struct `lis3dh_data_t` 

Result vector for accelerometer measurement.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`acc_x`](#structlis3dh__data__t_1ac04dc783fa0129c0bfde6a9ad06653d4) | Acceleration in the X direction in milli-G.
`public int16_t `[`acc_y`](#structlis3dh__data__t_1a088cf1d66585563e976174bb78ba3d25) | Acceleration in the Y direction in milli-G.
`public int16_t `[`acc_z`](#structlis3dh__data__t_1a70fd265b12691319c024674cd64c2b9e) | Acceleration in the Z direction in milli-G.

## Members

#### `public int16_t `[`acc_x`](#structlis3dh__data__t_1ac04dc783fa0129c0bfde6a9ad06653d4) 

Acceleration in the X direction in milli-G.

#### `public int16_t `[`acc_y`](#structlis3dh__data__t_1a088cf1d66585563e976174bb78ba3d25) 

Acceleration in the Y direction in milli-G.

#### `public int16_t `[`acc_z`](#structlis3dh__data__t_1a70fd265b12691319c024674cd64c2b9e) 

Acceleration in the Z direction in milli-G.

