---
title: api-drivers_dht.md
description: api-drivers_dht.md
---
# group `drivers_dht` 

Device driver for the DHT Family of humidity and temperature sensors.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@170`](#group__drivers__dht_1gade4ace78b27f5ceccade6e2e29404c48)            | Possible return codes.
`enum `[`dht_type_t`](#group__drivers__dht_1ga3eca4506c322ec0fd26b784e1ef4d92a)            | Device type of the DHT device.
`public int `[`dht_init`](#group__drivers__dht_1gad4b3e8fd7f2df9101095e9e19217125d)`(`[`dht_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__t)` * dev,const `[`dht_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__params__t)` * params)`            | Initialize a new DHT device.
`public int `[`dht_read`](#group__drivers__dht_1ga467c67dd01d47211cfd67514b7c6d97d)`(`[`dht_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__t)` * dev,int16_t * temp,int16_t * hum)`            | get a new temperature and humidity value from the device
`struct `[`dht_data_t`](#structdht__data__t) | Data type for storing DHT sensor readings.
`struct `[`dht_params_t`](#structdht__params__t) | Configuration parameters for DHT devices.
`struct `[`dht_t`](#structdht__t) | Device descriptor for DHT sensor devices.

## Members

#### `enum `[`@170`](#group__drivers__dht_1gade4ace78b27f5ceccade6e2e29404c48) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DHT_OK            | all good
DHT_NOCSUM            | checksum error
DHT_TIMEOUT            | communication timed out

Possible return codes.

> Deprecated: The functions use errno codes instead now

#### `enum `[`dht_type_t`](#group__drivers__dht_1ga3eca4506c322ec0fd26b784e1ef4d92a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DHT11            | Older DHT11 variants with either 1 °C or 0.1 °C resolution.
DHT11_2022            | New DHT11 variant with 0.01 °C resolution.
DHT22            | DHT22 device identifier.
DHT21            | DHT21 device identifier.
AM2301            | AM2301 device identifier.

Device type of the DHT device.

#### `public int `[`dht_init`](#group__drivers__dht_1gad4b3e8fd7f2df9101095e9e19217125d)`(`[`dht_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__t)` * dev,const `[`dht_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__params__t)` * params)` 

Initialize a new DHT device.

#### Parameters
* `dev` device descriptor of a DHT device 

* `params` configuration parameters

#### Parameters
* `0` Success 

* `-EXDEV` A low level on the input after the sensor's startup time indicates that either no sensor or pull-up resistor is connected, or the sensor is physically poorly connected or powered. 

* `-ENODEV` The sensor did not respond to the transmission of a start signal. Likely there were a pull-up resistor but no sensor connected on the data line.

#### `public int `[`dht_read`](#group__drivers__dht_1ga467c67dd01d47211cfd67514b7c6d97d)`(`[`dht_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__t)` * dev,int16_t * temp,int16_t * hum)` 

get a new temperature and humidity value from the device

if reading fails or checksum is invalid, no new values will be written into the result values

#### Parameters
* `dev` device descriptor of a DHT device 

* `temp` temperature value [in °C * 10^-1] 

* `hum` relative humidity value [in percent * 10^-1]

#### Parameters
* `0` Success 

* `-ENODEV` The sensor did not respond to the transmission of a start signal. Likely the RESPAWN_TIMEOUT is insufficient. 

* `-EIO` The received and the expected checksum didn't match. 

* `-ENOSYS` Unable to parse the received data. Likely the data format is not implemented. 

* `-ERANGE` Temperature low byte >= 10. Likely misconfigured device type (DHT11_2022).

# struct `dht_data_t` 

Data type for storing DHT sensor readings.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`humidity`](#structdht__data__t_1a0c274504f07dfcc84fbaec9eb2d1b2c9) | relative humidity in deci-percent
`public uint16_t `[`temperature`](#structdht__data__t_1adf6ca6ffccbef9c40654b5fcd7d1087f) | temperature in deci-Celsius

## Members

#### `public uint16_t `[`humidity`](#structdht__data__t_1a0c274504f07dfcc84fbaec9eb2d1b2c9) 

relative humidity in deci-percent

#### `public uint16_t `[`temperature`](#structdht__data__t_1adf6ca6ffccbef9c40654b5fcd7d1087f) 

temperature in deci-Celsius

# struct `dht_params_t` 

Configuration parameters for DHT devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structdht__params__t_1ad76fbafa4c2680fada24085595152772) | GPIO pin of the device's data pin.
`public `[`dht_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dht_1ga3eca4506c322ec0fd26b784e1ef4d92a)` `[`type`](#structdht__params__t_1af3227dfbc18b6c913057d00b0efe65fe) | type of the DHT device
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`in_mode`](#structdht__params__t_1a187856f897ecd684e69a974631b3ffc9) | input pin configuration, with or without pull resistor

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structdht__params__t_1ad76fbafa4c2680fada24085595152772) 

GPIO pin of the device's data pin.

#### `public `[`dht_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dht_1ga3eca4506c322ec0fd26b784e1ef4d92a)` `[`type`](#structdht__params__t_1af3227dfbc18b6c913057d00b0efe65fe) 

type of the DHT device

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`in_mode`](#structdht__params__t_1a187856f897ecd684e69a974631b3ffc9) 

input pin configuration, with or without pull resistor

# struct `dht_t` 

Device descriptor for DHT sensor devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`dht_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__params__t)` `[`params`](#structdht__t_1a2f6e1cf589185db160706d5462798e4e) | Device parameters.
`public `[`dht_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__data__t)` `[`last_val`](#structdht__t_1a73ef5e1e49e060b8925d8811d7dbf0dd) | Values of the last measurement.

## Members

#### `public `[`dht_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__params__t)` `[`params`](#structdht__t_1a2f6e1cf589185db160706d5462798e4e) 

Device parameters.

#### `public `[`dht_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dht.md#structdht__data__t)` `[`last_val`](#structdht__t_1a73ef5e1e49e060b8925d8811d7dbf0dd) 

Values of the last measurement.

