---
title: api-drivers_si114x.md
description: api-drivers_si114x.md
---
# group `drivers_si114x` 

Device driver for the Si1145/6/7 sensors family.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`si114x_ret_code_t`](#group__drivers__si114x_1ga33b32493572c95dd647d0bdf0b7da5c4)            | Initialization return codes.
`enum `[`si114x_led_current_t`](#group__drivers__si114x_1ga67bcb332da5eaf760068d925b4706d68)            | Active LED current parameters.
`public int8_t `[`si114x_init`](#group__drivers__si114x_1ga778208b33454f7ab9550b60f9bba4897)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev,const `[`si114x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__params__t)` * params)`            | Initialize the given Si114x device.
`public uint16_t `[`si114x_read_uv`](#group__drivers__si114x_1gae1c35578b5e8e7acbd7358a165cf986f)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)`            | Read UV index from the given Si114x device.
`public uint16_t `[`si114x_read_ir`](#group__drivers__si114x_1gabe24b20ce539a4d0113b15253192db1f)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)`            | Read IR light value from the given Si114x device, returned in lx.
`public uint16_t `[`si114x_read_visible`](#group__drivers__si114x_1ga30539533c2f4103c5c660afa3068a1ce)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)`            | Read visible light value from the given Si114x device, returned in lx.
`public uint16_t `[`si114x_read_distance`](#group__drivers__si114x_1ga0b34e5348c3961fbd8e62b9eb3ff8ce6)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)`            | Read distance measure from the given Si114x device, returned in ADC counts.
`public uint8_t `[`si114x_read_response`](#group__drivers__si114x_1ga9ea12e27bb2e2e9a2e7196959d64efd0)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)`            | Read the response register.
`struct `[`si114x_params_t`](#structsi114x__params__t) | Device initialization parameters.
`struct `[`si114x_t`](#structsi114x__t) | Device descriptor for the Si114x sensor.

## Members

#### `enum `[`si114x_ret_code_t`](#group__drivers__si114x_1ga33b32493572c95dd647d0bdf0b7da5c4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SI114X_OK            | 
SI114X_ERR_I2C            | 
SI114X_ERR_NODEV            | 

Initialization return codes.

#### `enum `[`si114x_led_current_t`](#group__drivers__si114x_1ga67bcb332da5eaf760068d925b4706d68) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SI114X_PS_LED1            | 5.6mA
SI114X_PS_LED2            | 11.2mA
SI114X_PS_LED3            | 22.4mA
SI114X_PS_LED4            | 45mA
SI114X_PS_LED5            | 67mA
SI114X_PS_LED6            | 90mA
SI114X_PS_LED7            | 112mA
SI114X_PS_LED8            | 135mA
SI114X_PS_LED9            | 157mA
SI114X_PS_LED10            | 180mA
SI114X_PS_LED11            | 202mA
SI114X_PS_LED12            | 224mA
SI114X_PS_LED13            | 269mA
SI114X_PS_LED14            | 314mA
SI114X_PS_LED15            | 359mA

Active LED current parameters.

#### `public int8_t `[`si114x_init`](#group__drivers__si114x_1ga778208b33454f7ab9550b60f9bba4897)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev,const `[`si114x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__params__t)` * params)` 

Initialize the given Si114x device.

#### Parameters
* `dev` Initialized device descriptor of Si114x device 

* `params` Initialization parameters

#### Returns
SI114X_OK: all good 

#### Returns
-SI114X_ERR_I2C: I2C bus cannot be initialized 

#### Returns
-SI114X_ERR_NODEV: not a valid Si114x device

#### `public uint16_t `[`si114x_read_uv`](#group__drivers__si114x_1gae1c35578b5e8e7acbd7358a165cf986f)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)` 

Read UV index from the given Si114x device.

#### Parameters
* `dev` Device descriptor of Si114x device to read from

#### Returns
UV index

#### `public uint16_t `[`si114x_read_ir`](#group__drivers__si114x_1gabe24b20ce539a4d0113b15253192db1f)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)` 

Read IR light value from the given Si114x device, returned in lx.

#### Parameters
* `dev` Device descriptor of Si114x device to read from

#### Returns
IR light in lx

#### `public uint16_t `[`si114x_read_visible`](#group__drivers__si114x_1ga30539533c2f4103c5c660afa3068a1ce)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)` 

Read visible light value from the given Si114x device, returned in lx.

#### Parameters
* `dev` Device descriptor of Si114x device to read from

#### Returns
Visible light in lx

#### `public uint16_t `[`si114x_read_distance`](#group__drivers__si114x_1ga0b34e5348c3961fbd8e62b9eb3ff8ce6)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)` 

Read distance measure from the given Si114x device, returned in ADC counts.

#### Parameters
* `dev` Device descriptor of Si114x device to read from

#### Returns
Distance in ADC counts

#### `public uint8_t `[`si114x_read_response`](#group__drivers__si114x_1ga9ea12e27bb2e2e9a2e7196959d64efd0)`(`[`si114x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__t)` * dev)` 

Read the response register.

#### Parameters
* `dev` Device descriptor of Si114x device to read from

#### Returns
Device response register contents

# struct `si114x_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi114x__params__t_1a3f417eacdeea0c6feaa4ea700311907a) | I2C device which is used.
`public `[`si114x_led_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si114x_1ga67bcb332da5eaf760068d925b4706d68)` `[`led_current`](#structsi114x__params__t_1ad4f7c3bbc02f010b5dc7e7afd1f7f863) | Proximity LED current.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi114x__params__t_1a3f417eacdeea0c6feaa4ea700311907a) 

I2C device which is used.

#### `public `[`si114x_led_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__si114x_1ga67bcb332da5eaf760068d925b4706d68)` `[`led_current`](#structsi114x__params__t_1ad4f7c3bbc02f010b5dc7e7afd1f7f863) 

Proximity LED current.

# struct `si114x_t` 

Device descriptor for the Si114x sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`si114x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__params__t)` `[`params`](#structsi114x__t_1a947e8c19833da89d02e5e36b3f0b6ce6) | Si114x initialization parameters.

## Members

#### `public `[`si114x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si114x.md#structsi114x__params__t)` `[`params`](#structsi114x__t_1a947e8c19833da89d02e5e36b3f0b6ce6) 

Si114x initialization parameters.

