---
title: api-drivers_srf02.md
description: api-drivers_srf02.md
---
# group `drivers_srf02` 

Driver for the SRF02 ultrasonic range sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SRF02_DEFAULT_ADDR`](#group__drivers__srf02_1ga7988f8b36d3a8dcfde28c4d58dde94cb)            | Default I2C address of SRF02 sensors.
`define `[`SRF02_RANGE_DELAY`](#group__drivers__srf02_1ga9cfb08310297f45aa4e6e803427e82e3)            | The datasheet tells us, that ranging takes 70ms.
`enum `[`srf02_mode_t`](#group__drivers__srf02_1ga057812ccdb4358a6b6c69cc73a8c7207)            | Possible measurement modes of the SRF02 sensor.
`public int `[`srf02_init`](#group__drivers__srf02_1ga8f870bdc3ad2bc26688ffb1d2587f6b4)`(`[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` i2c,uint8_t addr)`            | Initialize the SRF02 ultrasonic sensor.
`public int `[`srf02_trigger`](#group__drivers__srf02_1ga63c7ba04a2802ce1852af48fe1777e0f)`(const `[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,`[`srf02_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__srf02_1ga057812ccdb4358a6b6c69cc73a8c7207)` mode)`            | Trigger a new measurement.
`public uint16_t `[`srf02_read`](#group__drivers__srf02_1ga6286d54e948545e87488d03558eef37f)`(const `[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev)`            | Read the results of the last ranging operation.
`public uint16_t `[`srf02_get_distance`](#group__drivers__srf02_1gaedd2decaf43f949e0eef500dda39ebb1)`(const `[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,`[`srf02_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__srf02_1ga057812ccdb4358a6b6c69cc73a8c7207)` mode)`            | Get the distance measured from the SRF02 ultrasonic sensor.
`public int `[`srf02_set_addr`](#group__drivers__srf02_1gacfd4f8958e1a88eae0a84358935f1059)`(`[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,uint8_t new_addr)`            | Program the given device with a new bus address.
`struct `[`srf02_t`](#structsrf02__t) | Device descriptor for SRF02 sensors.

## Members

#### `define `[`SRF02_DEFAULT_ADDR`](#group__drivers__srf02_1ga7988f8b36d3a8dcfde28c4d58dde94cb) 

Default I2C address of SRF02 sensors.

#### `define `[`SRF02_RANGE_DELAY`](#group__drivers__srf02_1ga9cfb08310297f45aa4e6e803427e82e3) 

The datasheet tells us, that ranging takes 70ms.

#### `enum `[`srf02_mode_t`](#group__drivers__srf02_1ga057812ccdb4358a6b6c69cc73a8c7207) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SRF02_MODE_REAL_INCH            | result in inches
SRF02_MODE_REAL_CM            | result in centimeters
SRF02_MODE_REAL_MS            | result in microseconds
SRF02_MODE_FAKE_INCH            | result in inches (no pulse send)
SRF02_MODE_FAKE_CM            | result in cm (no pulse send)
SRF02_MODE_FAKE_MS            | result in ms (no pulse send)

Possible measurement modes of the SRF02 sensor.

#### `public int `[`srf02_init`](#group__drivers__srf02_1ga8f870bdc3ad2bc26688ffb1d2587f6b4)`(`[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` i2c,uint8_t addr)` 

Initialize the SRF02 ultrasonic sensor.

#### Parameters
* `dev` device descriptor of an SRF02 sensor 

* `i2c` I2C device the sensor is connected to 

* `addr` I2C address of the sensor

#### Returns
0 on successful initialization 

#### Returns
-1 on error

#### `public int `[`srf02_trigger`](#group__drivers__srf02_1ga63c7ba04a2802ce1852af48fe1777e0f)`(const `[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,`[`srf02_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__srf02_1ga057812ccdb4358a6b6c69cc73a8c7207)` mode)` 

Trigger a new measurement.

This function triggers a new ranging operation. After triggering this operation, you have to wait at least 70ms for the result to be ready.

The result of the ranging operation is returned in inches, centimeters or microseconds - depending on the given `mode` parameter.

#### Parameters
* `dev` device to trigger 

* `mode` there are three real ranging modes, which return the result in inches, centimeters or microseconds. Another set of three fake ranging modes do the same but without transmitting the burst

#### Returns
0 On success, otherwise i2c_write error

#### `public uint16_t `[`srf02_read`](#group__drivers__srf02_1ga6286d54e948545e87488d03558eef37f)`(const `[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev)` 

Read the results of the last ranging operation.

#### Parameters
* `dev` device to read from

#### Returns
result of the last ranging operation, meaning depends on the mode parameter given to the srf02_trigger function

#### `public uint16_t `[`srf02_get_distance`](#group__drivers__srf02_1gaedd2decaf43f949e0eef500dda39ebb1)`(const `[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,`[`srf02_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__srf02_1ga057812ccdb4358a6b6c69cc73a8c7207)` mode)` 

Get the distance measured from the SRF02 ultrasonic sensor.

This function combines the srf02_trigger and the srf02_read functions for simplified usage in simple (single sensor) setups.

#### Parameters
* `dev` device descriptor of an SRF02 sensor 

* `mode` there are three real ranging modes, which return the result in inches, centimeters or microseconds. Another set of three fake ranging modes do the same but without transmitting the burst

#### Returns
the ranging result in inches, centimeters or microseconds

#### `public int `[`srf02_set_addr`](#group__drivers__srf02_1gacfd4f8958e1a88eae0a84358935f1059)`(`[`srf02_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf02.md#structsrf02__t)` * dev,uint8_t new_addr)` 

Program the given device with a new bus address.

#### Parameters
* `dev` device to program 

* `new_addr` new address to program the given device to

#### Returns
0 On success, otherwise i2c_write error

# struct `srf02_t` 

Device descriptor for SRF02 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structsrf02__t_1ae290ab0d916498fe4aa4386286d33e43) | I2C device the sensor is connected to.
`public uint8_t `[`addr`](#structsrf02__t_1a7e53e5722cf418147191a71a106ca346) | I2C bus address of the sensor.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structsrf02__t_1ae290ab0d916498fe4aa4386286d33e43) 

I2C device the sensor is connected to.

#### `public uint8_t `[`addr`](#structsrf02__t_1a7e53e5722cf418147191a71a106ca346) 

I2C bus address of the sensor.

