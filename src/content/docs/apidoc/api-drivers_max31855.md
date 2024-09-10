---
title: api-drivers_max31855.md
description: api-drivers_max31855.md
---
# group `drivers_max31855` 

Driver for the SPI Thermocouple-to-Digital Converter MAX31855.

The MAX31855 performs cold-junction compensation and digitizes
         the signal from a K-, J-, N-, T-, S-, R-, or E-type
         thermocouple. The data is output in a signed 14-bit,
         SPI-compatible, read-only format. This converter resolves
         temperatures to 0.25°C, allows readings as high as +1800°C and
         as low as -270°C, and exhibits thermocouple accuracy of ±2°C
         for temperatures ranging from -200°C to +700°C for K-type
         thermocouples.
See the datasheet for more information: [https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31855.pdf](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31855.pdf)

This driver doesn't require a MOSI line, as the MAX31855 is a read-only.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`max31855_fault_t`](#group__drivers__max31855_1ga1833ca7e5d13bd6e3c55202648f2cdb3)            | Fault status of the MAX31855.
`public int `[`max31855_init`](#group__drivers__max31855_1gaffa24c31dc48c43ac72244618639f980)`(`[`max31855_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__t)` * dev,const `[`max31855_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__params__t)` * params)`            | Initialize the given device.
`public void `[`max31855_raw_to_data`](#group__drivers__max31855_1ga77ee5eb74aaaa8b593cd42104cc1a623)`(uint32_t raw_data,`[`max31855_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__data__t)` * data)`            | Parse the raw data from the MAX31855 to the data structure.
`public int `[`max31855_read`](#group__drivers__max31855_1gaafc5aee778711efe685ebc6207ff0905)`(`[`max31855_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__t)` * dev,`[`max31855_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__data__t)` * data)`            | Read data from the MAX31855.
`public void `[`max31855_read_raw`](#group__drivers__max31855_1ga64c9a40db1f79ea2cfc97a68a095ed03)`(`[`max31855_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__t)` * dev,uint32_t * data)`            | Read raw data from the MAX31855.
`struct `[`max31855_params_t`](#structmax31855__params__t) | Device initialization parameters.
`struct `[`max31855_t`](#structmax31855__t) | Device descriptor for the driver.
`struct `[`max31855_data_t`](#structmax31855__data__t) | Data structure for the MAX31855.

## Members

#### `enum `[`max31855_fault_t`](#group__drivers__max31855_1ga1833ca7e5d13bd6e3c55202648f2cdb3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MAX31855_FAULT_VCC_SHORT            | VCC short-circuit.
MAX31855_FAULT_GND_SHORT            | GND short-circuit.
MAX31855_FAULT_OPEN_CIRCUIT            | Open circuit.
MAX31855_FAULT_NO_FAULT            | No fault.

Fault status of the MAX31855.

#### `public int `[`max31855_init`](#group__drivers__max31855_1gaffa24c31dc48c43ac72244618639f980)`(`[`max31855_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__t)` * dev,const `[`max31855_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__params__t)` * params)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `params` Initialization parameters

#### Parameters
* `0` on success 

* `-ENXIO` invalid SPI device 

* `-EINVAL` invalid SPI CS pin/line

#### `public void `[`max31855_raw_to_data`](#group__drivers__max31855_1ga77ee5eb74aaaa8b593cd42104cc1a623)`(uint32_t raw_data,`[`max31855_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__data__t)` * data)` 

Parse the raw data from the MAX31855 to the data structure.

#### Parameters
* `raw_data` Raw data from the MAX31855 

* `data` Pointer to the data structure.

`data` must not be NULL

#### `public int `[`max31855_read`](#group__drivers__max31855_1gaafc5aee778711efe685ebc6207ff0905)`(`[`max31855_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__t)` * dev,`[`max31855_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__data__t)` * data)` 

Read data from the MAX31855.

This is a shortcut to read raw data and parse it to the data structure.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Pointer to the data structure.

`dev` and `data` must not be NULL

#### Parameters
* `0` on success 

* `-EIO` if there is an error detected by the MAX31855. For a detailed error description, check the fault field of the data structure. On this case, temperature fields are not valid.

#### `public void `[`max31855_read_raw`](#group__drivers__max31855_1ga64c9a40db1f79ea2cfc97a68a095ed03)`(`[`max31855_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__t)` * dev,uint32_t * data)` 

Read raw data from the MAX31855.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Pointer where to store the raw data.

`dev` and `data` must not be NULL

# struct `max31855_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structmax31855__params__t_1a1dd52849468a638eb00c76c900ab6d18) | SPI device.
`public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structmax31855__params__t_1a8649f8f36c72cd440907fb2c222aa212) | Chip select pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structmax31855__params__t_1a1dd52849468a638eb00c76c900ab6d18) 

SPI device.

#### `public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structmax31855__params__t_1a8649f8f36c72cd440907fb2c222aa212) 

Chip select pin.

# struct `max31855_t` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`max31855_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__params__t)` * `[`params`](#structmax31855__t_1aaf525e8fd66bd13af889cc2e277b028e) | device configuration

## Members

#### `public const `[`max31855_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_max31855.md#structmax31855__params__t)` * `[`params`](#structmax31855__t_1aaf525e8fd66bd13af889cc2e277b028e) 

device configuration

# struct `max31855_data_t` 

Data structure for the MAX31855.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`thermocouple_temperature`](#structmax31855__data__t_1a67c9e9844dd6747c262de963a10f3994) | Thermocouple temperature in centi degrees C.
`public int32_t `[`internal_temperature`](#structmax31855__data__t_1a13a93459047116f88b50b5d1ea3a6a31) | Internal temperature in centi degrees C.
`public `[`max31855_fault_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__max31855_1ga1833ca7e5d13bd6e3c55202648f2cdb3)` `[`fault`](#structmax31855__data__t_1a1f1454b5f14729c59c437d9bfcdb2605) | Fault status.

## Members

#### `public int32_t `[`thermocouple_temperature`](#structmax31855__data__t_1a67c9e9844dd6747c262de963a10f3994) 

Thermocouple temperature in centi degrees C.

#### `public int32_t `[`internal_temperature`](#structmax31855__data__t_1a13a93459047116f88b50b5d1ea3a6a31) 

Internal temperature in centi degrees C.

#### `public `[`max31855_fault_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__max31855_1ga1833ca7e5d13bd6e3c55202648f2cdb3)` `[`fault`](#structmax31855__data__t_1a1f1454b5f14729c59c437d9bfcdb2605) 

Fault status.

