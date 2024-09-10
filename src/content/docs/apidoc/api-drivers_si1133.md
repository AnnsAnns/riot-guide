---
title: api-drivers_si1133.md
description: api-drivers_si1133.md
---
# group `drivers_si1133` 

Device driver for the Si1133 sensor.

The Si1133 is a UV Index Sensor and Ambient Light Sensor with I2C digital interface and programmable-event interrupt output.

The I2C protocol implemented in this driver is most similar in registers and commands to the Si115x family, like the SI1153, however the Si1133 supports UV index while the Si115x doesn't.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities as well.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`si1133_ret_code_t`](#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)            | Driver error return codes.
`enum `[`si1133_sensor_t`](#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f)            | Sensor (photodiode combination) in the Si1133 package.
`public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_init`](#group__drivers__si1133_1gaec3931f32752dcd7e4392a6ab76efd68)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,const `[`si1133_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__params__t)` * params)`            | Initialize the given Si1133 device.
`public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_configure_channels`](#group__drivers__si1133_1ga649847b809e68b27a1a5c5c6d9ec92db)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,const `[`si1133_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t)` * channels,uint32_t num_channels)`            | Configure the capture channels.
`public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_easy_configure`](#group__drivers__si1133_1ga669671a50ea4892b4cacab0e7b5b0fbd)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,`[`si1133_sensor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f)` sensor_mask,uint8_t sample_time_log,uint8_t sw_gain)`            | Convenience function to configure all capture channels.
`public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_capture_sensors`](#group__drivers__si1133_1gaa159fe1bb5a9da69b7feba3c75fcd232)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,int32_t * values,uint32_t num_channels)`            | Perform a one-time blocking sample of the configured channels.
`struct `[`si1133_channel_t`](#structsi1133__channel__t) | Channel configuration the Si1133 sensor.
`struct `[`si1133_params_t`](#structsi1133__params__t) | Device initialization parameters.
`struct `[`si1133_t`](#structsi1133__t) | Device descriptor for the Si1133 sensor.

## Members

#### `enum `[`si1133_ret_code_t`](#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SI1133_OK            | No error.
SI1133_ERR_PARAMS            | Invalid parameters.
SI1133_ERR_I2C            | I2C communication error.
SI1133_ERR_LOGIC            | Device communication logic error.
SI1133_ERR_NODEV            | No SI1133 device detected.
SI1133_ERR_OVERFLOW            | ADC overflow when sampling.

Driver error return codes.

#### `enum `[`si1133_sensor_t`](#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SI1133_SENS_SMALL_IR            | 
SI1133_SENS_MEDIUM_IR            | 
SI1133_SENS_LARGE_IR            | 
SI1133_SENS_WHITE            | 
SI1133_SENS_LARGE_WHITE            | 
SI1133_SENS_UV            | 
SI1133_SENS_DEEP_UV            | 

Sensor (photodiode combination) in the Si1133 package.

#### `public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_init`](#group__drivers__si1133_1gaec3931f32752dcd7e4392a6ab76efd68)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,const `[`si1133_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__params__t)` * params)` 

Initialize the given Si1133 device.

#### Parameters
* `dev` Initialized device descriptor of Si1133 device 

* `params` Initialization parameters

#### Returns
A si1133_ret_code_t error or status code.

#### `public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_configure_channels`](#group__drivers__si1133_1ga649847b809e68b27a1a5c5c6d9ec92db)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,const `[`si1133_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t)` * channels,uint32_t num_channels)` 

Configure the capture channels.

The Si1133 has up to 6 "channels" that can be configured to capture from the different sensors (photodiode combinations). See [si1133_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t) for a description of the channel configuration.

#### Parameters
* `dev` Device descriptor of Si1133 device to read from 

* `channels` Array of `num_channels` channel configuration. 

* `num_channels` Number of configured channel passed in `channels`.

#### Returns
A si1133_ret_code_t error or status code.

#### `public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_easy_configure`](#group__drivers__si1133_1ga669671a50ea4892b4cacab0e7b5b0fbd)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,`[`si1133_sensor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f)` sensor_mask,uint8_t sample_time_log,uint8_t sw_gain)` 

Convenience function to configure all capture channels.

This function is a convenience function to configure one channel per selected sensor in the `sensor_mask`, up to the maximum number of channels, setting all channels to force-mode only with the same parameters. This is equivalent to a call to [si1133_configure_channels](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga649847b809e68b27a1a5c5c6d9ec92db) with as many channels as bits set in the `sensor_mask`.

The channels are configured in increasing order of the [si1133_sensor_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f) values.

#### Parameters
* `dev` Device descriptor of Si1133 device to read from 

* `sensor_mask` Combination of up to 6 si1133_sensor_t values. 

* `sample_time_log` Log2 of sampling time, 0 to 14. See [si1133_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t) for details. 

* `sw_gain` Software gain, 0 to 7. See [si1133_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t) for details.

#### `public `[`si1133_ret_code_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0f923bc3c0076c1856693ec7e9efe6ee)` `[`si1133_capture_sensors`](#group__drivers__si1133_1gaa159fe1bb5a9da69b7feba3c75fcd232)`(`[`si1133_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__t)` * dev,int32_t * values,uint32_t num_channels)` 

Perform a one-time blocking sample of the configured channels.

Forces a one-time blocking sample of the sensors configured in the channels and returns the read values as signed 24-bit integers, sign extended to 32-bits. The number of channels sampled and configured sensor is set by the last call to [si1133_configure_channels](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga649847b809e68b27a1a5c5c6d9ec92db), however after sampling all of them only up to the first `num_channels` values will be returned by this function.

In case of ADC overflow, for example because there's too much light for the configured sensors the overflown sensor will read `0x7fffff` and the function will return [SI1133_ERR_OVERFLOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1gga0f923bc3c0076c1856693ec7e9efe6eeafab8ac6ea932640816d62fa540f4ef5d). In case of overflow, try configuring a smaller sensor, for example `SI1133_SENS_MEDIUM_IR` instead of `SI1133_SENS_LARGE_IR`, or reduce the `sw_gain` for the given sensor.

#### Parameters
* `dev` Device descriptor of Si1133 device to read from 

* `values` Pointer to the output value buffer. 

* `num_channels` Maximum number of channel values to return.

#### Returns
A si1133_ret_code_t error or status code.

# struct `si1133_channel_t` 

Channel configuration the Si1133 sensor.

The sensor sampling in the Si1133 is done via Analog to Digital "channels" that read from a given sensor (photodiode combination) and output a numeric value. The A/D process has some configuration parameters that affect the acquisition time, the power consumption and the quality of the result.

The A/D time is controlled by the internal 21 MHz clock. The sampling duration time is:

(1 << decimation) * (1 << hw_gain) * 512 / 21000000 s

where `decimation` is a number between 0 and 3 and `hw_gain"` is between 0 and 11. The shortest A/D sampling time is therefore 24.4 us while the longest is 400 ms. However, each sample is performed twice internally to cancel ADC offset and there are processing and sampling start times specified in the datasheet that increase the total sampling time. Increasing the sampling time doesn't make the output value be larger.

The `hw_gain` and `decimation` parameters are configured from a single `sample_time_log` parameter in this struct, between 0 and 14, preferring the "normal" decimation when possible.

An additional software sampling and averaging is possible by selecting a "sw_gain" value between 0 and 7. This will cause each A/D measurement to be repeated for a total of (1 << sw_gain) and accumulated in software in the 24-bit output. The output value will be affected by the sw_gain since it is a sum of samples and not an average.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`sample_time_log`](#structsi1133__channel__t_1a2d50d8c520519c21f95f06c0f6b75ddc) | Log2 of sampling time, 0 to 14.
`public uint8_t `[`sw_gain`](#structsi1133__channel__t_1aea48e5f7f3048f1c0413b098ada5e0d8) | Software gain, 0 to 7.
`public `[`si1133_sensor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f)` `[`sensor`](#structsi1133__channel__t_1a8ca35b194feb7a32fbf298bb6198b419) | Sensor to sample.

## Members

#### `public uint8_t `[`sample_time_log`](#structsi1133__channel__t_1a2d50d8c520519c21f95f06c0f6b75ddc) 

Log2 of sampling time, 0 to 14.

#### `public uint8_t `[`sw_gain`](#structsi1133__channel__t_1aea48e5f7f3048f1c0413b098ada5e0d8) 

Software gain, 0 to 7.

#### `public `[`si1133_sensor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si1133_1ga0758cd13d94d5c388892a43a84b54e2f)` `[`sensor`](#structsi1133__channel__t_1a8ca35b194feb7a32fbf298bb6198b419) 

Sensor to sample.

# struct `si1133_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi1133__params__t_1ae2f6027bbb0f9aab9dc2fb11b790ea33) | I2C bus the sensor is connected to.
`public uint8_t `[`address`](#structsi1133__params__t_1a877eb57b08ed35d973b1a85461974afd) | sensor address.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi1133__params__t_1ae2f6027bbb0f9aab9dc2fb11b790ea33) 

I2C bus the sensor is connected to.

#### `public uint8_t `[`address`](#structsi1133__params__t_1a877eb57b08ed35d973b1a85461974afd) 

sensor address.

Note: it is possible to change the a sensor's I2C address after it has been initialized to have multiple sensor on the same bus, but this is not supported by this driver. However, two different addresses can be selected by hardware.

# struct `si1133_t` 

Device descriptor for the Si1133 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi1133__t_1afd75849146a4a3cf172e281f5a94cea0) | I2C bus the sensor is connected to.
`public uint8_t `[`address`](#structsi1133__t_1a758e426d237281636b882066fb7e9957) | sensor address
`public uint8_t `[`cmd_counter`](#structsi1133__t_1a2c0f9a9fa53aa403eb437f3c5175cd58) | Si1133 command counter.
`public uint8_t `[`num_channels`](#structsi1133__t_1ad348cff0cf62ea55fda9b53d73fe9554) | Number of configured channels.
`public `[`si1133_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t)` `[`channel`](#structsi1133__t_1a305b274eda51171b4c3388e6ee471c37) | Channel configuration.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi1133__t_1afd75849146a4a3cf172e281f5a94cea0) 

I2C bus the sensor is connected to.

#### `public uint8_t `[`address`](#structsi1133__t_1a758e426d237281636b882066fb7e9957) 

sensor address

#### `public uint8_t `[`cmd_counter`](#structsi1133__t_1a2c0f9a9fa53aa403eb437f3c5175cd58) 

Si1133 command counter.

#### `public uint8_t `[`num_channels`](#structsi1133__t_1ad348cff0cf62ea55fda9b53d73fe9554) 

Number of configured channels.

#### `public `[`si1133_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si1133.md#structsi1133__channel__t)` `[`channel`](#structsi1133__t_1a305b274eda51171b4c3388e6ee471c37) 

Channel configuration.

