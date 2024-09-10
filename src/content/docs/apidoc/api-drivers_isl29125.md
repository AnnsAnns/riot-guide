---
title: api-drivers_isl29125.md
description: api-drivers_isl29125.md
---
# group `drivers_isl29125` 

Device driver for the ISL29125 RGB light sensor.

DescriptionThe device supports level conversion in 12, and 16 bit depth per channel. Selecting a higher precision results in a longer conversion time.

The driver uses the [color_rgb_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t) color definition from [color.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#color_8h) for value representation. It does not depend on the color module however.

UsageExamine `tests/drivers/isr29125` for an exemplary application using this driver.

CaveatsA GPIO pin definition has been included in the interface for future compatibility only.

* The driver does not support SYNC mode at the moment.

* The driver supports polling only, i.e. interrupt mode is currently not supported.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`isl29125_mode_t`](#group__drivers__isl29125_1gaa5e0fa8f8932e291e925f132e635f742)            | Supported operation modes of the ISL29125 sensor's AD conversion.
`enum `[`isl29125_range_t`](#group__drivers__isl29125_1gac81c190e805828ecb2b7c2e54f41785e)            | Supported RGB sensing range values of the ISL29125 sensor.
`enum `[`isl29125_resolution_t`](#group__drivers__isl29125_1ga5c6fa8810d39a17e61cd57939c924026)            | Supported color resolutions of the ISL29125 sensor's AD conversion.
`enum `[`isl29125_interrupt_status_t`](#group__drivers__isl29125_1ga1fbbdb3ea123814b9b4f71de74b162c8)            | Configuration-3 Register 0x03 B1:0.
`enum `[`isl29125_interrupt_persist_t`](#group__drivers__isl29125_1gaefee21d8054cb30de05859dd30679f1b)            | Configuration-3 Register 0x03 B3:2.
`enum `[`isl29125_interrupt_conven_t`](#group__drivers__isl29125_1ga636d959d088e2c441198bbc7308ac82c)            | Configuration-3 Register 0x03 B4.
`public int `[`isl29125_init`](#group__drivers__isl29125_1ga306256a362ee08a1e51b49a071aff573)`(`[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,const `[`isl29125_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__params__t)` * params)`            | Initialize a new ISL29125 device.
`public int `[`isl29125_init_int`](#group__drivers__isl29125_1gaec08fddbea3433db77099d292dfa4724)`(`[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`isl29125_interrupt_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1ga1fbbdb3ea123814b9b4f71de74b162c8)` interrupt_status,`[`isl29125_interrupt_persist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gaefee21d8054cb30de05859dd30679f1b)` interrupt_persist,`[`isl29125_interrupt_conven_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1ga636d959d088e2c441198bbc7308ac82c)` interrupt_conven,uint16_t lower_threshold,uint16_t higher_threshold,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * arg)`            | Initialize interrupts.
`public void `[`isl29125_read_rgb_lux`](#group__drivers__isl29125_1gafa98b96a8139c4fb563fce0d31d49119)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`isl29125_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__rgb__t)` * dest)`            | Read RGB values from device.
`public void `[`isl29125_read_rgb_color`](#group__drivers__isl29125_1ga7f1e5049850eeadeb5c4e935a1a37c31)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * dest)`            | Read color values from device.
`public void `[`isl29125_set_mode`](#group__drivers__isl29125_1gac5dc0be34364ee36f1b774f0f1227723)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`isl29125_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gaa5e0fa8f8932e291e925f132e635f742)` mode)`            | Set the device's operation mode.
`public int `[`isl29125_read_irq_status`](#group__drivers__isl29125_1gac5c4d806b0b4f337d499afa6bf1d1e1f)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev)`            | Read isl29125 interrupt status.
`struct `[`isl29125_rgb_t`](#structisl29125__rgb__t) | Data type for storing lux RGB sensor readings.
`struct `[`isl29125_params_t`](#structisl29125__params__t) | Device parameters for ISL29125 sensors.
`struct `[`isl29125_t`](#structisl29125__t) | Device descriptor for ISL29125 sensors.

## Members

#### `enum `[`isl29125_mode_t`](#group__drivers__isl29125_1gaa5e0fa8f8932e291e925f132e635f742) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29125_MODE_DOWN            | ADC powered down.
ISL29125_MODE_STANDBY            | AD conversion not performed.
ISL29125_MODE_RGB            | RGB conversion.
ISL29125_MODE_R            | red conversion only
ISL29125_MODE_G            | green conversion only
ISL29125_MODE_B            | blue conversion only
ISL29125_MODE_RG            | red and green conversion only
ISL29125_MODE_GB            | green and blue conversion only

Supported operation modes of the ISL29125 sensor's AD conversion.

#### `enum `[`isl29125_range_t`](#group__drivers__isl29125_1gac81c190e805828ecb2b7c2e54f41785e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29125_RANGE_375            | range: 5.7m - 375 lux
ISL29125_RANGE_10K            | range: 0.152 - 10,000 lux

Supported RGB sensing range values of the ISL29125 sensor.

#### `enum `[`isl29125_resolution_t`](#group__drivers__isl29125_1ga5c6fa8810d39a17e61cd57939c924026) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29125_RESOLUTION_12            | resolution: 12 bit
ISL29125_RESOLUTION_16            | resolution: 16 bit

Supported color resolutions of the ISL29125 sensor's AD conversion.

#### `enum `[`isl29125_interrupt_status_t`](#group__drivers__isl29125_1ga1fbbdb3ea123814b9b4f71de74b162c8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29125_INTERRUPT_STATUS_NONE            | No interrupt.
ISL29125_INTERRUPT_STATUS_GREEN            | GREEN interrupt.
ISL29125_INTERRUPT_STATUS_RED            | RED interrupt.
ISL29125_INTERRUPT_STATUS_BLUE            | BLUE interrupt.

Configuration-3 Register 0x03 B1:0.

#### `enum `[`isl29125_interrupt_persist_t`](#group__drivers__isl29125_1gaefee21d8054cb30de05859dd30679f1b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29125_INTERRUPT_PERSIST_1            | Int.
ISL29125_INTERRUPT_PERSIST_2            | Int.
ISL29125_INTERRUPT_PERSIST_4            | Int.
ISL29125_INTERRUPT_PERSIST_8            | Int.

Configuration-3 Register 0x03 B3:2.

#### `enum `[`isl29125_interrupt_conven_t`](#group__drivers__isl29125_1ga636d959d088e2c441198bbc7308ac82c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29125_INTERRUPT_CONV_DIS            | RGB Conversion done to ~INT Control disable.
ISL29125_INTERRUPT_CONV_EN            | RGB Conversion done to ~INT Control enable.

Configuration-3 Register 0x03 B4.

#### `public int `[`isl29125_init`](#group__drivers__isl29125_1ga306256a362ee08a1e51b49a071aff573)`(`[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,const `[`isl29125_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__params__t)` * params)` 

Initialize a new ISL29125 device.

#### Parameters
* `dev` device descriptor of an ISL29125 device 

* `params` initialization parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`isl29125_init_int`](#group__drivers__isl29125_1gaec08fddbea3433db77099d292dfa4724)`(`[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`isl29125_interrupt_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1ga1fbbdb3ea123814b9b4f71de74b162c8)` interrupt_status,`[`isl29125_interrupt_persist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gaefee21d8054cb30de05859dd30679f1b)` interrupt_persist,`[`isl29125_interrupt_conven_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1ga636d959d088e2c441198bbc7308ac82c)` interrupt_conven,uint16_t lower_threshold,uint16_t higher_threshold,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * arg)` 

Initialize interrupts.

#### Parameters
* `dev` device descriptor of an ISL29125 device 

* `interrupt_status` Interrupt status 

* `interrupt_persist` Interrupt persistency 

* `interrupt_conven` RGB conversion done to interrupt control, enable 

* `lower_threshold` Lower interrupt threshold 

* `higher_threshold` Higher interrupt threshold 

* `cb` Callback function on interrupts 

* `arg` Argument passed to the callback function

#### Returns
0 on success 

#### Returns
-1 on error

#### `public void `[`isl29125_read_rgb_lux`](#group__drivers__isl29125_1gafa98b96a8139c4fb563fce0d31d49119)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`isl29125_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__rgb__t)` * dest)` 

Read RGB values from device.

#### Parameters
* `dev` device descriptor of an ISL29125 device 

* `dest` pointer to lux RGB color object data is written to

#### `public void `[`isl29125_read_rgb_color`](#group__drivers__isl29125_1ga7f1e5049850eeadeb5c4e935a1a37c31)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * dest)` 

Read color values from device.

#### Parameters
* `dev` device descriptor of an ISL29125 device 

* `dest` pointer to RGB color object data is written to

#### `public void `[`isl29125_set_mode`](#group__drivers__isl29125_1gac5dc0be34364ee36f1b774f0f1227723)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev,`[`isl29125_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gaa5e0fa8f8932e291e925f132e635f742)` mode)` 

Set the device's operation mode.

#### Parameters
* `dev` device descriptor of an ISL29125 device 

* `mode` operation mode

#### `public int `[`isl29125_read_irq_status`](#group__drivers__isl29125_1gac5c4d806b0b4f337d499afa6bf1d1e1f)`(const `[`isl29125_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__t)` * dev)` 

Read isl29125 interrupt status.

#### Parameters
* `dev` device descriptor of an ISL29125 device

#### Returns
interrupt status

# struct `isl29125_rgb_t` 

Data type for storing lux RGB sensor readings.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public float `[`red`](#structisl29125__rgb__t_1a103d5caf85110959a8b6d6f14c2ef194) | red lux value
`public float `[`green`](#structisl29125__rgb__t_1a7e589d3930cf67085bb3f7089cfb75dc) | green lux value
`public float `[`blue`](#structisl29125__rgb__t_1a3b0717788921bbba6b3e830be889dcee) | blue lux value

## Members

#### `public float `[`red`](#structisl29125__rgb__t_1a103d5caf85110959a8b6d6f14c2ef194) 

red lux value

#### `public float `[`green`](#structisl29125__rgb__t_1a7e589d3930cf67085bb3f7089cfb75dc) 

green lux value

#### `public float `[`blue`](#structisl29125__rgb__t_1a3b0717788921bbba6b3e830be889dcee) 

blue lux value

# struct `isl29125_params_t` 

Device parameters for ISL29125 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structisl29125__params__t_1adbe2f34d0be51eda5de96730481199fb) | I2C device the sensor is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio`](#structisl29125__params__t_1a4933e9e95f9220c4c3980001dc908d98) | GPIO pin for interrupt/sync mode.
`public `[`isl29125_range_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gac81c190e805828ecb2b7c2e54f41785e)` `[`range`](#structisl29125__params__t_1a6f36c1afe6299937cfb1cf079c97d211) | measurement range
`public `[`isl29125_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gaa5e0fa8f8932e291e925f132e635f742)` `[`mode`](#structisl29125__params__t_1a83cc67d08a54c1507f2624e39f6cf10c) | AD conversion mode.
`public `[`isl29125_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1ga5c6fa8810d39a17e61cd57939c924026)` `[`res`](#structisl29125__params__t_1a6976d24d78e25a839662ea9f1fde57b8) | AD conversion resolution.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structisl29125__params__t_1adbe2f34d0be51eda5de96730481199fb) 

I2C device the sensor is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio`](#structisl29125__params__t_1a4933e9e95f9220c4c3980001dc908d98) 

GPIO pin for interrupt/sync mode.

#### `public `[`isl29125_range_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gac81c190e805828ecb2b7c2e54f41785e)` `[`range`](#structisl29125__params__t_1a6f36c1afe6299937cfb1cf079c97d211) 

measurement range

#### `public `[`isl29125_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1gaa5e0fa8f8932e291e925f132e635f742)` `[`mode`](#structisl29125__params__t_1a83cc67d08a54c1507f2624e39f6cf10c) 

AD conversion mode.

#### `public `[`isl29125_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29125_1ga5c6fa8810d39a17e61cd57939c924026)` `[`res`](#structisl29125__params__t_1a6976d24d78e25a839662ea9f1fde57b8) 

AD conversion resolution.

# struct `isl29125_t` 

Device descriptor for ISL29125 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`isl29125_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__params__t)` `[`params`](#structisl29125__t_1ab2d9201eb179349eef5fe344ceb37ff8) | device parameters

## Members

#### `public `[`isl29125_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29125.md#structisl29125__params__t)` `[`params`](#structisl29125__t_1ab2d9201eb179349eef5fe344ceb37ff8) 

device parameters

