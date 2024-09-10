---
title: api-drivers_hm330x.md
description: api-drivers_hm330x.md
---
# group `drivers_hm330x` 

Driver for HM330X particle matter sensor.

AboutThis driver provides an interface for the HM-330/3600 laser dust sensor. The datasheet can be found [here](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM330X/res/HM-3300%263600_V2.1.pdf)

The device also support an UART mode, but the currently available breakout from [seedstudio](https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM330X.html) only supports I2C.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_HM330X_INDOOR_ENVIRONMENT`](#group__drivers__hm330x_1gac5ccd2ca5fa302f451c72d2104faeed0)            | HM330X deployment setting.
`public int `[`hm330x_init`](#group__drivers__hm330x_1gaf0e50b0940848ee1bc96c134b86c31ad)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev,const `[`hm330x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__params__t)` * params)`            | Initialize the given device.
`public int `[`hm330x_read`](#group__drivers__hm330x_1ga8cfee87434c693a0152a0514a93a2449)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev,`[`hm330x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__data__t)` * data)`            | Read particle matter measurements.
`public void `[`hm330x_reset`](#group__drivers__hm330x_1gaaec21f723d080e4373c85eeeb796f503)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev)`            | Reset the sensor.
`public void `[`hm330x_sleep`](#group__drivers__hm330x_1ga7a3bb7e1ce575c25f4c168ea17a04537)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev)`            | Set Device to Sleep.
`public void `[`hm330x_wakeup`](#group__drivers__hm330x_1ga931a057810c19c8ff6858cd31ab00f2e)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev)`            | Wakeup Device.
`struct `[`hm330x_data_t`](#structhm330x__data__t) | Set of measured particulate matter values as sent by the device.
`struct `[`hm330x_params_t`](#structhm330x__params__t) | Device initialization parameters.
`struct `[`hm330x_t`](#structhm330x__t) | Device descriptor for the driver.

## Members

#### `define `[`CONFIG_HM330X_INDOOR_ENVIRONMENT`](#group__drivers__hm330x_1gac5ccd2ca5fa302f451c72d2104faeed0) 

HM330X deployment setting.

The HM330X sensor outputs two set of PM* values, one calibrated for indoor environment and another one for atmospheric environment, set this value according to your deployment.

#### `public int `[`hm330x_init`](#group__drivers__hm330x_1gaf0e50b0940848ee1bc96c134b86c31ad)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev,const `[`hm330x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__params__t)` * params)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `params` Initialization parameters

#### Parameters
* `0` Success 

* `-EIO` Failed to initialize GPIO pins 

* `-EPROTO` Sensor did not acknowledge command

#### `public int `[`hm330x_read`](#group__drivers__hm330x_1ga8cfee87434c693a0152a0514a93a2449)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev,`[`hm330x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__data__t)` * data)` 

Read particle matter measurements.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Pre-allocated particle matter data

#### Parameters
* `0` Success 

* `-EBADMSG` CRC checksum didn't match 

* `-EPROTO` Sensor did not acknowledge command

#### `public void `[`hm330x_reset`](#group__drivers__hm330x_1gaaec21f723d080e4373c85eeeb796f503)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev)` 

Reset the sensor.

#### Parameters
* `dev` Device descriptor of the driver

#### `public void `[`hm330x_sleep`](#group__drivers__hm330x_1ga7a3bb7e1ce575c25f4c168ea17a04537)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev)` 

Set Device to Sleep.

#### Parameters
* `dev` Device descriptor of the driver

#### `public void `[`hm330x_wakeup`](#group__drivers__hm330x_1ga931a057810c19c8ff6858cd31ab00f2e)`(`[`hm330x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__t)` * dev)` 

Wakeup Device.

#### Parameters
* `dev` Device descriptor of the driver

# struct `hm330x_data_t` 

Set of measured particulate matter values as sent by the device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`mc_pm_1`](#structhm330x__data__t_1aa95c844679f19ab22c6e1adad4d850bc) | PM1.0 ug/m3 (ultrafine particles) <= 1µm [µg/m^3].
`public uint16_t `[`mc_pm_2p5`](#structhm330x__data__t_1abc3cf4a36738299501fa7577a3f52f7b) | PM2.5 ug/m3 (combustion particles, organic compounds, metals) <= 2.5µm [µg/m^3].
`public uint16_t `[`mc_pm_10`](#structhm330x__data__t_1ae1d42984c8bc994e57f0b8bfe1c983c5) | PM10 ug/m3 (dust, pollen, mould spores) <= 10µm [µg/m^3].
`public uint16_t `[`amc_pm_1`](#structhm330x__data__t_1ae7fd1388b1a3f30c780039188ee286f2) | PM1.0 ug/m3 (atmospheric environment) <= 1µm [µg/m^3].
`public uint16_t `[`amc_pm_2p5`](#structhm330x__data__t_1a739a8c6344f267e077bc8dc18208cad1) | PM2.5 ug/m3 (atmospheric environment) <= 2.5µm [µg/m^3].
`public uint16_t `[`amc_pm_10`](#structhm330x__data__t_1a4cdea26cfc919ee1c86b9b7eef083e8d) | PM10 ug/m3 (atmospheric environment) <= 10µm [µg/m^3].

## Members

#### `public uint16_t `[`mc_pm_1`](#structhm330x__data__t_1aa95c844679f19ab22c6e1adad4d850bc) 

PM1.0 ug/m3 (ultrafine particles) <= 1µm [µg/m^3].

#### `public uint16_t `[`mc_pm_2p5`](#structhm330x__data__t_1abc3cf4a36738299501fa7577a3f52f7b) 

PM2.5 ug/m3 (combustion particles, organic compounds, metals) <= 2.5µm [µg/m^3].

#### `public uint16_t `[`mc_pm_10`](#structhm330x__data__t_1ae1d42984c8bc994e57f0b8bfe1c983c5) 

PM10 ug/m3 (dust, pollen, mould spores) <= 10µm [µg/m^3].

#### `public uint16_t `[`amc_pm_1`](#structhm330x__data__t_1ae7fd1388b1a3f30c780039188ee286f2) 

PM1.0 ug/m3 (atmospheric environment) <= 1µm [µg/m^3].

#### `public uint16_t `[`amc_pm_2p5`](#structhm330x__data__t_1a739a8c6344f267e077bc8dc18208cad1) 

PM2.5 ug/m3 (atmospheric environment) <= 2.5µm [µg/m^3].

#### `public uint16_t `[`amc_pm_10`](#structhm330x__data__t_1a4cdea26cfc919ee1c86b9b7eef083e8d) 

PM10 ug/m3 (atmospheric environment) <= 10µm [µg/m^3].

# struct `hm330x_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhm330x__params__t_1a4701d3a9492d0a362bad6ae4bf87b375) | The I2C device.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structhm330x__params__t_1a818d2703d355b2666321c44b4873598b) | Reset pin, active low.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`set_pin`](#structhm330x__params__t_1a74182e0109603594482d6a947df341b2) | Set/Enable pin, active high.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhm330x__params__t_1a4701d3a9492d0a362bad6ae4bf87b375) 

The I2C device.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structhm330x__params__t_1a818d2703d355b2666321c44b4873598b) 

Reset pin, active low.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`set_pin`](#structhm330x__params__t_1a74182e0109603594482d6a947df341b2) 

Set/Enable pin, active high.

# struct `hm330x_t` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`hm330x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__params__t)` `[`params`](#structhm330x__t_1a289d8c3ece19a93d5cea198b499346d0) | parameters of the sensor device

## Members

#### `public `[`hm330x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hm330x.md#structhm330x__params__t)` `[`params`](#structhm330x__t_1a289d8c3ece19a93d5cea198b499346d0) 

parameters of the sensor device

