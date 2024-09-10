---
title: api-drivers_mcp47xx.md
description: api-drivers_mcp47xx.md
---
# group `drivers_mcp47xx` 

Device driver for Microchip MCP47xx DAC with I2C interface.

OverviewThe driver supports the different Microchip MCP47xx DAC variants.

Expander   |Channels   |Resolution
--------- | --------- | ---------
MCP4706   |1   |8-bit
MCP4716   |1   |10-bit
MCP4725   |1   |12-bit
MCP4726   |1   |12-bit
MCP4728   |4   |12-bit

The following features of MCP47xx DAC devices are not supported at the moment:

* configuring and reading address bits to/from EEPROM

* writing DAC channel output values to the EEPROM

* setting the UDAC bit and using the LDAC pin for MCP4728

UsageMultiple MCP47xx DAC devices and different variants can be used at the same time.

The driver interface is kept as compatible as possible with the peripheral DAC interface. The only differences are that

* functions have the prefix `mcp47xx_` and

* functions require an additional parameter, the pointer to the MCP47xx device of type [mcp47xx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t).

Please refer the test application in `tests/drivers/mcp47xx` for an example on how to use the driver.

SAUL CapabilitiesThe driver provides SAUL capabilities that are compatible with SAUL actuators of type [SAUL_ACT_DIMMER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1ggaa3dfb65ce3006aaab287357097352604a636f95240e556edd7a3867fbcf5cf7dc). Each MCP47xx channel can be mapped directly to SAUL by defining an according entry in `MCP47XX_SAUL_DAC_PARAMS`. Please refer file `$RIOTBASE/drivers/mcp47xx/include/mcp47xx_params.h` for an example.  mcp47xx_saul_dac_params_t mcp47xx_saul_dac_params[] = {
     {
         .name = "DAC00",
         .dev = 0,
         .channel = 0,
         .initial = 32768,
     },
 };
 For each DAC channel that should be used with SAUL, an entry with a name, the device, the channel, and the initial value has to be defined as shown above.

Using Multiple DevicesIt is possible to used multiple devices and different variants of MCP47xx DAC devices at the same time. The application has to configure all devices by defining the configuration parameter set `mcp47xx_params` of type [mcp47xx_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t). As an example, the default configuration for one MCP4725 device is defined in `drivers/mcp47xx/mcp47xx_params.h`.

The application can override it by placing a file `[mcp47xx_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mcp47xx__params_8h)` in the application directory ``. For example, the definition of the configuration parameter set for the two devices (one MCP4725 and one MCP4728) could looks like:  static const mcp47xx_params_t mcp47xx_params[] = {
     {
         .variant = MCP4725,
         .dev = I2C_DEV(0),
         .addr = MCP47XX_BASE_ADDR + 2,
         .gain = MCP47XX_GAIN_1X,
         .vref = MCP47XX_VDD,
         .pd_mode = MCP47XX_PD_LARGE,
     },
     {
         .variant = MCP4728,
         .dev = I2C_DEV(0),
         .addr = MCP47XX_BASE_ADDR + 3,
         .gain = MCP47XX_GAIN_2X,
         .vref = MCP47XX_VREF_INT,
         .pd_mode = MCP47XX_PD_LARGE,
     },
 };

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`mcp47xx_error_codes_t`](#group__drivers__mcp47xx_1ga3e96b46249c95819dd6298e766686cd9)            | MCP47xx driver error codes.
`enum `[`mcp47xx_variant_t`](#group__drivers__mcp47xx_1gaf393e35f82eb4310508ecc0160e2d185)            | Supported MCP47xx variants.
`enum `[`mcp47xx_gain_t`](#group__drivers__mcp47xx_1ga592899bf7d975c7af3a98afcec9ab815)            | MCP47xx gain configuration type.
`enum `[`mcp47xx_vref_t`](#group__drivers__mcp47xx_1ga6637120b53f2363eb5604f2b8411dc23)            | MCP47xx V_REF configuration type.
`enum `[`mcp47xx_pd_mode_t`](#group__drivers__mcp47xx_1gaa9f8975e4b27fb9009b96f5b7d0819a7)            | MCP47xx Power-down mode selection type.
`public int `[`mcp47xx_init`](#group__drivers__mcp47xx_1ga975012b0a3846b61e71ac2e040d70871)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,const `[`mcp47xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t)` * params)`            | Initialize the MCP47xx DAC.
`public int `[`mcp47xx_dac_init`](#group__drivers__mcp47xx_1ga5e7098460241c6ed1277055d022e706e)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn)`            | Initialize a MCP47xx DAC channel.
`public void `[`mcp47xx_dac_set`](#group__drivers__mcp47xx_1ga7c10a7ae8c788f099de82b979e5893df)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn,uint16_t value)`            | Write a value to a MCP47xx DAC channel.
`public void `[`mcp47xx_dac_get`](#group__drivers__mcp47xx_1ga5ad0ada33c543f261d7e3de313640ac8)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn,uint16_t * value)`            | Get the current value of a MCP47xx DAC channel.
`public void `[`mcp47xx_dac_poweron`](#group__drivers__mcp47xx_1ga621f0678c91577b530402efa8a94405a)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn)`            | Enables the MCP47xx DAC device.
`public void `[`mcp47xx_dac_poweroff`](#group__drivers__mcp47xx_1ga03be8e650ab203838914f9165df2bbd5)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn)`            | Disables the MCP47xx DAC device.
`public uint8_t `[`mcp47xx_dac_channels`](#group__drivers__mcp47xx_1gac02cb94282782f5caa6b02b6818990d7)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev)`            | Returns the number of channels of MCP47xx DAC device.
`struct `[`mcp47xx_params_t`](#structmcp47xx__params__t) | MCP47xx device configuration parameters.
`struct `[`mcp47xx_t`](#structmcp47xx__t) | MCP47xx device data structure type.
`struct `[`mcp47xx_saul_dac_params_t`](#structmcp47xx__saul__dac__params__t) | MCP47xx configuration structure for mapping DAC channels to SAUL.

## Members

#### `enum `[`mcp47xx_error_codes_t`](#group__drivers__mcp47xx_1ga3e96b46249c95819dd6298e766686cd9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCP47XX_OK            | success
MCP47XX_ERROR_I2C            | I2C communication error.
MCP47XX_ERROR_NOT_AVAIL            | device not available

MCP47xx driver error codes.

#### `enum `[`mcp47xx_variant_t`](#group__drivers__mcp47xx_1gaf393e35f82eb4310508ecc0160e2d185) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCP4706            | 1 channel 8-bit DAC
MCP4716            | 1 channel 10-bit DAC
MCP4725            | 1 channel 12-bit DAC
MCP4726            | 1 channel 12-bit DAC
MCP4728            | 4 channel 12-bit DAC

Supported MCP47xx variants.

It is used in configuration parameters to specify the MCP47xx expander used by device.

#### `enum `[`mcp47xx_gain_t`](#group__drivers__mcp47xx_1ga592899bf7d975c7af3a98afcec9ab815) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCP47XX_GAIN_1X            | Gain is 1.0, supported by all MCP47xx variants.
MCP47XX_GAIN_2X            | Gain is 2.0, not supported by MCP4725.

MCP47xx gain configuration type.

Gains are not supported by MCP4725.

#### `enum `[`mcp47xx_vref_t`](#group__drivers__mcp47xx_1ga6637120b53f2363eb5604f2b8411dc23) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCP47XX_VREF_VDD            | V_REF = V_DD, supported by all MCP47xx.
MCP47XX_VREF_INT            | V_REF = internal (2.048 V), MCP4728 only
MCP47XX_VREF_PIN            | V_REF = VREF pin not buffered, MCP47x6 only.
MCP47XX_VREF_BUF            | V_REF = VREF pin buffered, MCP47x6 only.

MCP47xx V_REF configuration type.

Different MCP47xx variants allow different V_REF configurations

#### `enum `[`mcp47xx_pd_mode_t`](#group__drivers__mcp47xx_1gaa9f8975e4b27fb9009b96f5b7d0819a7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCP47XX_NORMAL            | Normal mode.
MCP47XX_PD_SMALL            | Power down, small resistor 1 kOhm.
MCP47XX_PD_MEDIUM            | Power down, medium resistor, 125 kOhm for MCP47x6, 100 kOhm otherwise.
MCP47XX_PD_LARGE            | Power down, large resistor, 640 kOhm for MCP47x6, 125 kOhm otherwise.

MCP47xx Power-down mode selection type.

Defines the possible power-down modes used for MCP47xx device configuration. The mode is used by function [mcp47xx_dac_poweroff](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga03be8e650ab203838914f9165df2bbd5) to set the DAC into the configured power-down mode.

[MCP47XX_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ggaa9f8975e4b27fb9009b96f5b7d0819a7a54574c4c8bf617a76d76a81f9f2a7fd7) cannot be configured as power-down mode.

#### `public int `[`mcp47xx_init`](#group__drivers__mcp47xx_1ga975012b0a3846b61e71ac2e040d70871)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,const `[`mcp47xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t)` * params)` 

Initialize the MCP47xx DAC.

All expander pins are set to be input and are pulled up.

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

* `params` configuration parameters, see [mcp47xx_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t)

#### Parameters
* `MCP47XX_OK` on success 

* `MCP47XX_ERROR_*` a negative error code on error, see [mcp47xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga3e96b46249c95819dd6298e766686cd9)

#### `public int `[`mcp47xx_dac_init`](#group__drivers__mcp47xx_1ga5e7098460241c6ed1277055d022e706e)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn)` 

Initialize a MCP47xx DAC channel.

After the initialization, the DAC channel is active and its output is set to 0.

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

* `chn` channel to initialize

#### Parameters
* `MCP47XX_OK` on success 

* `MCP47XX_ERROR_*` a negative error code on error, see [mcp47xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga3e96b46249c95819dd6298e766686cd9)

#### `public void `[`mcp47xx_dac_set`](#group__drivers__mcp47xx_1ga7c10a7ae8c788f099de82b979e5893df)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn,uint16_t value)` 

Write a value to a MCP47xx DAC channel.

The value is always given as 16-bit value and is internally scaled to the actual resolution that the DAC unit provides, e.g., 12-bit. So to get the maximum output voltage, this function has to be called with value set to 65535 (UINT16_MAX).

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

* `chn` channel to set 

* `value` value to set line to

#### Parameters
* `none`

#### `public void `[`mcp47xx_dac_get`](#group__drivers__mcp47xx_1ga5ad0ada33c543f261d7e3de313640ac8)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn,uint16_t * value)` 

Get the current value of a MCP47xx DAC channel.

The value is always given as 16-bit value and is internally scaled to the actual resolution that the DAC unit provides, e.g., 12-bit.

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

* `chn` channel to set 

* `value` value to set line to

#### Parameters
* `none`

#### `public void `[`mcp47xx_dac_poweron`](#group__drivers__mcp47xx_1ga621f0678c91577b530402efa8a94405a)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn)` 

Enables the MCP47xx DAC device.

MCP47xx is enabled and the output is set to the last set value.

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

* `chn` channel to power on 

#### Parameters
* `none`

#### `public void `[`mcp47xx_dac_poweroff`](#group__drivers__mcp47xx_1ga03be8e650ab203838914f9165df2bbd5)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev,uint8_t chn)` 

Disables the MCP47xx DAC device.

MCP47xx is switched to the power-down mode configured by the configuration parameter [mcp47xx_params_t::pd_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t_1abe73408e6930794a9181884f0c0fcf71). V_OUT is loaded with the configured resistor to ground. Most of the channel circuits are powered off.

If [MCP47XX_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ggaa9f8975e4b27fb9009b96f5b7d0819a7a54574c4c8bf617a76d76a81f9f2a7fd7) is used as power-down mode, the DAC can't be powerd off.

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

* `chn` channel to power on 

#### Parameters
* `none`

#### `public uint8_t `[`mcp47xx_dac_channels`](#group__drivers__mcp47xx_1gac02cb94282782f5caa6b02b6818990d7)`(`[`mcp47xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__t)` * dev)` 

Returns the number of channels of MCP47xx DAC device.

This function returns the number of channels of the device MCP47xx DAC device.

#### Parameters
* `dev` descriptor of the MCP47xx DAC device 

#### Parameters
* `number` of channels on success or 0 on error

# struct `mcp47xx_params_t` 

MCP47xx device configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structmcp47xx__params__t_1a2b37a32a591519894df7541a3805e7c2) | I2C device.
`public uint16_t `[`addr`](#structmcp47xx__params__t_1a132be75b4baa9f0222e1fcb16140e017) | I2C slave address MCP47XX_BASE_ADDR + [0...7].
`public `[`mcp47xx_variant_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1gaf393e35f82eb4310508ecc0160e2d185)` `[`variant`](#structmcp47xx__params__t_1a76395b5848bf47e9f594a5c5c56eb2a5) | used variant of MCP47xx
`public `[`mcp47xx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga592899bf7d975c7af3a98afcec9ab815)` `[`gain`](#structmcp47xx__params__t_1a6da3dce24c4d71ef156c2dfd3b06f409) | Gain selection.
`public `[`mcp47xx_vref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga6637120b53f2363eb5604f2b8411dc23)` `[`vref`](#structmcp47xx__params__t_1a2868dcf26b36a8f241c668b63a6bba5c) | Voltage reference selection.
`public `[`mcp47xx_pd_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1gaa9f8975e4b27fb9009b96f5b7d0819a7)` `[`pd_mode`](#structmcp47xx__params__t_1abe73408e6930794a9181884f0c0fcf71) | Power-down mode selection.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structmcp47xx__params__t_1a2b37a32a591519894df7541a3805e7c2) 

I2C device.

#### `public uint16_t `[`addr`](#structmcp47xx__params__t_1a132be75b4baa9f0222e1fcb16140e017) 

I2C slave address MCP47XX_BASE_ADDR + [0...7].

#### `public `[`mcp47xx_variant_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1gaf393e35f82eb4310508ecc0160e2d185)` `[`variant`](#structmcp47xx__params__t_1a76395b5848bf47e9f594a5c5c56eb2a5) 

used variant of MCP47xx

#### `public `[`mcp47xx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga592899bf7d975c7af3a98afcec9ab815)` `[`gain`](#structmcp47xx__params__t_1a6da3dce24c4d71ef156c2dfd3b06f409) 

Gain selection.

#### `public `[`mcp47xx_vref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1ga6637120b53f2363eb5604f2b8411dc23)` `[`vref`](#structmcp47xx__params__t_1a2868dcf26b36a8f241c668b63a6bba5c) 

Voltage reference selection.

#### `public `[`mcp47xx_pd_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp47xx_1gaa9f8975e4b27fb9009b96f5b7d0819a7)` `[`pd_mode`](#structmcp47xx__params__t_1abe73408e6930794a9181884f0c0fcf71) 

Power-down mode selection.

# struct `mcp47xx_t` 

MCP47xx device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mcp47xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t)` `[`params`](#structmcp47xx__t_1a13c3ca0eec94c22e7e0cc52278c47329) | device configuration parameters
`public uint16_t `[`values`](#structmcp47xx__t_1a25af4a40235c82a8c7431bd5efcb9d5c) | contains the last values set for persistence when device is powered off

## Members

#### `public `[`mcp47xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mcp47xx.md#structmcp47xx__params__t)` `[`params`](#structmcp47xx__t_1a13c3ca0eec94c22e7e0cc52278c47329) 

device configuration parameters

#### `public uint16_t `[`values`](#structmcp47xx__t_1a25af4a40235c82a8c7431bd5efcb9d5c) 

contains the last values set for persistence when device is powered off

# struct `mcp47xx_saul_dac_params_t` 

MCP47xx configuration structure for mapping DAC channels to SAUL.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structmcp47xx__saul__dac__params__t_1add40243988c2460318a2f1982938238d) | name of the MCP47xx device
`public unsigned int `[`dev`](#structmcp47xx__saul__dac__params__t_1a15992f0d68f16ea5494ee627cc6d8970) | index of the MCP47xx device
`public uint8_t `[`channel`](#structmcp47xx__saul__dac__params__t_1ae6612bbf378afaf7b547662ba053a5c7) | channel of the MCP47xx device
`public uint16_t `[`initial`](#structmcp47xx__saul__dac__params__t_1a4dedb46505784d941e468262b55ec66e) | initial value

## Members

#### `public const char * `[`name`](#structmcp47xx__saul__dac__params__t_1add40243988c2460318a2f1982938238d) 

name of the MCP47xx device

#### `public unsigned int `[`dev`](#structmcp47xx__saul__dac__params__t_1a15992f0d68f16ea5494ee627cc6d8970) 

index of the MCP47xx device

#### `public uint8_t `[`channel`](#structmcp47xx__saul__dac__params__t_1ae6612bbf378afaf7b547662ba053a5c7) 

channel of the MCP47xx device

#### `public uint16_t `[`initial`](#structmcp47xx__saul__dac__params__t_1a4dedb46505784d941e468262b55ec66e) 

initial value

