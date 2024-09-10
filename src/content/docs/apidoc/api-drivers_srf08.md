---
title: api-drivers_srf08.md
description: api-drivers_srf08.md
---
# group `drivers_srf08` 

Driver for the SRF08 ultrasonic range sensor.

The connection between the MCU and the SRF08 is based on the i2c-interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SRF08_COMMAND_REG`](#group__drivers__srf08_1gac3b0c9a89083b479db6aa32866000053)            | The sensors command register (write)
`define `[`SRF08_GAIN_REG`](#group__drivers__srf08_1ga119140d87d0c074059f73d3fdf49276d)            | Max.
`define `[`SRF08_RANGE_REG`](#group__drivers__srf08_1ga9187de10025f0c318904beacfad669bb)            | The sensors range register (write)
`define `[`SRF08_RANGE_HIGH_BYTE`](#group__drivers__srf08_1ga7eba3f6f5ddd35329e0c2cbbf8c98037)            | The upper measurement byte (read)
`define `[`SRF08_RANGE_LOW_BYTE`](#group__drivers__srf08_1gae47096f4b67f1ad8a62efbbe25221386)            | The lower measurement byte (read)
`define `[`SRF08_MAX_REGISTER_NUMBER`](#group__drivers__srf08_1gae4410119067e7ab3cd123b72e281896c)            | Number of highest register.
`define `[`SRF08_MAX_ECHO_NUMBER`](#group__drivers__srf08_1ga0cff0cadecbd1bb4ee513c595ae19114)            | Maximum number of echos from more distant objects.
`define `[`SRF08_MAX_RANGE_6M`](#group__drivers__srf08_1gabdd90d677f393eea718e851d6a15ed14)            | Maximum range the sensor can measure (6m)
`define `[`SRF08_MAX_GAIN`](#group__drivers__srf08_1gaa7251bdfa2f857e0677c7c6166d5dd1f)            | Maximum gain of the sensor (1025)
`enum `[`srf08_mode_t`](#group__drivers__srf08_1gad50064fa217e2d965e11cf4ae10bf070)            | Possible measurement modes for the SRF08 sensor.
`public int `[`srf08_init`](#group__drivers__srf08_1ga5fdc61ecee0efc252fb02acc14238704)`(`[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,const `[`srf08_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__params__t)` * params)`            | Initialize the SRF08 ultrasonic sensor.
`public int `[`srf08_set_max_range`](#group__drivers__srf08_1ga5e98d335d31e174f12a1566e47a72198)`(const `[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,uint8_t max_range)`            | Set the maximum range of the SRF08.
`public int `[`srf08_set_max_gain`](#group__drivers__srf08_1ga8a7ce3c69b5ed7c7f47d557616ce0112)`(const `[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,uint8_t max_gain)`            | Set the maximum of the analog stages.
`public int `[`srf08_get_distances`](#group__drivers__srf08_1ga5c6feceb2c75e457f5719fce4bc7dd6e)`(const `[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,uint16_t * range_array,int num_echos,`[`srf08_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__srf08_1gad50064fa217e2d965e11cf4ae10bf070)` ranging_mode)`            | Get all distances measured from the SRF08 ultrasonic sensor.
`struct `[`srf08_params_t`](#structsrf08__params__t) | Device initialization parameters.
`struct `[`srf08_t`](#structsrf08__t) | Device descriptor for SRF08 sensors.

## Members

#### `define `[`SRF08_COMMAND_REG`](#group__drivers__srf08_1gac3b0c9a89083b479db6aa32866000053) 

The sensors command register (write)

#### `define `[`SRF08_GAIN_REG`](#group__drivers__srf08_1ga119140d87d0c074059f73d3fdf49276d) 

Max.

gain register (write)

#### `define `[`SRF08_RANGE_REG`](#group__drivers__srf08_1ga9187de10025f0c318904beacfad669bb) 

The sensors range register (write)

#### `define `[`SRF08_RANGE_HIGH_BYTE`](#group__drivers__srf08_1ga7eba3f6f5ddd35329e0c2cbbf8c98037) 

The upper measurement byte (read)

#### `define `[`SRF08_RANGE_LOW_BYTE`](#group__drivers__srf08_1gae47096f4b67f1ad8a62efbbe25221386) 

The lower measurement byte (read)

#### `define `[`SRF08_MAX_REGISTER_NUMBER`](#group__drivers__srf08_1gae4410119067e7ab3cd123b72e281896c) 

Number of highest register.

#### `define `[`SRF08_MAX_ECHO_NUMBER`](#group__drivers__srf08_1ga0cff0cadecbd1bb4ee513c595ae19114) 

Maximum number of echos from more distant objects.

#### `define `[`SRF08_MAX_RANGE_6M`](#group__drivers__srf08_1gabdd90d677f393eea718e851d6a15ed14) 

Maximum range the sensor can measure (6m)

#### `define `[`SRF08_MAX_GAIN`](#group__drivers__srf08_1gaa7251bdfa2f857e0677c7c6166d5dd1f) 

Maximum gain of the sensor (1025)

#### `enum `[`srf08_mode_t`](#group__drivers__srf08_1gad50064fa217e2d965e11cf4ae10bf070) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SRF08_MODE_INCH            | result in inches
SRF08_MODE_CM            | result in centimeters
SRF08_MODE_MICRO_SEC            | result in centimeters
SRF08_ANN_MODE_INCH            | synchronous measurement in inch
SRF08_ANN_MODE_CM            | synchronous measurement in cm
SRF08_ANN_MODE_MICRO_SEC            | synchronous measurement in us

Possible measurement modes for the SRF08 sensor.

#### `public int `[`srf08_init`](#group__drivers__srf08_1ga5fdc61ecee0efc252fb02acc14238704)`(`[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,const `[`srf08_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__params__t)` * params)` 

Initialize the SRF08 ultrasonic sensor.

#### Parameters
* `dev` device descriptor of an SRF08 sensor 

* `params` initialization parameters

#### Returns
0 on successful initialization 

#### Returns
-3 on max. range error 

#### Returns
-4 on max. gain error

#### `public int `[`srf08_set_max_range`](#group__drivers__srf08_1ga5e98d335d31e174f12a1566e47a72198)`(const `[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,uint8_t max_range)` 

Set the maximum range of the SRF08.

#### Parameters
* `dev` device descriptor of an SRF08 sensor 

* `max_range` the adjusted maximal range is: max_range = (max_range x 43mm) + 43mm. The hardware limit is 6m.

#### Returns
1 on success 

#### Returns
-1 on undefined device given

#### `public int `[`srf08_set_max_gain`](#group__drivers__srf08_1ga8a7ce3c69b5ed7c7f47d557616ce0112)`(const `[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,uint8_t max_gain)` 

Set the maximum of the analog stages.

@ note This value is just a limitation of the maximum amplification and not the actual. While measuring, this value starts at its minimum and increases approx. each 75 us until the maximum value is reached.

#### Parameters
* `dev` device descriptor of an SRF08 sensor 

* `max_gain` the maximal gain value.

#### Returns
1 on success 

#### Returns
-1 on undefined device given

#### `public int `[`srf08_get_distances`](#group__drivers__srf08_1ga5c6feceb2c75e457f5719fce4bc7dd6e)`(const `[`srf08_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__t)` * dev,uint16_t * range_array,int num_echos,`[`srf08_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__srf08_1gad50064fa217e2d965e11cf4ae10bf070)` ranging_mode)` 

Get all distances measured from the SRF08 ultrasonic sensor.

The results of a ranging can be returned in inches, centimeters or microseconds. The SRF08 can detect up to 17 targets.

#### Parameters
* `dev` device descriptor of an SRF08 sensor 

* `range_array` a pointer to a buffer holding the ranging results. 

* `num_echos` number of stored measurements (echos) 

* `ranging_mode` there are three real ranging modes, which return the result in inches, centimeters or microseconds. Another set of three fake ranging modes do the same but without transmitting the burst.

#### Returns
number of measured echos on success 

#### Returns
-1 on ranging mode errors 

#### Returns
-2 if num_echos exceeds the max. number of possible measurements 

#### Returns
-3 if i2c read high byte failed 

#### Returns
-4 if i2c read low byte failed

# struct `srf08_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structsrf08__params__t_1a193e2777d86bb7b5fe54274b6ed7f3c5) | I2C device the sensor is connected to.
`public uint8_t `[`addr`](#structsrf08__params__t_1a8bc1d90ef0b580c747ac55beb22b4232) | I2C bus address of the sensor.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structsrf08__params__t_1a193e2777d86bb7b5fe54274b6ed7f3c5) 

I2C device the sensor is connected to.

#### `public uint8_t `[`addr`](#structsrf08__params__t_1a8bc1d90ef0b580c747ac55beb22b4232) 

I2C bus address of the sensor.

# struct `srf08_t` 

Device descriptor for SRF08 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`srf08_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__params__t)` `[`params`](#structsrf08__t_1aeb76e6acb626910d713b3508e9032349) | Initialization parameters.

## Members

#### `public `[`srf08_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf08.md#structsrf08__params__t)` `[`params`](#structsrf08__t_1aeb76e6acb626910d713b3508e9032349) 

Initialization parameters.

