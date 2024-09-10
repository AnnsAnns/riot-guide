---
title: api-drivers_ad7746.md
description: api-drivers_ad7746.md
---
# group `drivers_ad7746` 

I2C Capacitance-to-digital converter with temperature and voltage sensors.

The devices has two main channels: capacitance channel and voltage / temperature channel.

The capacitance channel can measure from two different inputs (CIN1 and CIN2), selected using [ad7746_set_cap_ch_input](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga24f7c23e22d6d88b94d131f4f88ae53f).

The voltage / temperature channel can measure from five different sources: Voltage from VIN pins, internal VCC, internal temperature sensor and external temperature sensor (see datasheet for proper setup). The mode of this channel can be set using [ad7746_set_vt_ch_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga330f467eb4699fd401ea01d2b99b6e33) or will directly be set when trying to read from a specific source which is not the currently selected one. This mode change may lead to data not being available right away (in which case the reading function will return [AD7746_NODATA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ggaf38129fd1797a5cfd7d746065784a44fafd4ae9c38b193247ae742bf9c59780bc) error code).

Constantly switching between modes in the voltage / temperature channel may lead to invalid data, for what it seems to be a device limitation.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`AD7746_ZERO_SCALE_CODE`](#group__drivers__ad7746_1ga383d01a224c5adf390b467bc9f08634b)            | 0 fF capacitance code
`define `[`AD7746_INTERNAL_VREF`](#group__drivers__ad7746_1gaf04323308d8d0039151ccf44224705cd)            | Interval voltage reference expressed in mV.
`define `[`AD7746_DAC_MAX`](#group__drivers__ad7746_1ga4f6d68b3047e135293ae4e650c4f46b8)            | Maximum value that can be configured into the DACs.
`enum `[`@139`](#group__drivers__ad7746_1ga1e06e534e565b0e44afdf96c77951725)            | Channel numbers for reading.
`enum `[`@140`](#group__drivers__ad7746_1gaf38129fd1797a5cfd7d746065784a44f)            | Named return values.
`enum `[`ad7746_vt_sample_rate_t`](#group__drivers__ad7746_1ga902b40e31d90a6b189bebe78f241339b)            | Voltage / Temperature channel sample rates.
`enum `[`ad7746_vt_mode_t`](#group__drivers__ad7746_1ga767e5f771c9256fa61a424623dee3750)            | Voltage / Temperature channel modes.
`enum `[`ad7746_cap_input_t`](#group__drivers__ad7746_1ga4288ad466feb87f7f8d0493a15dc7163)            | Capacitance channel input.
`enum `[`ad7746_cap_sample_rate_t`](#group__drivers__ad7746_1gac27e150f98c939be117a8c933f9b6017)            | Capacitive channel sample rate.
`enum `[`ad7746_exc_config_t`](#group__drivers__ad7746_1ga2f12d0b2408d43c5aeb3a1de3c8a22cc)            | Excitation signal output configuration.
`public int `[`ad7746_init`](#group__drivers__ad7746_1ga7497907fe66f9f82cde1aa08efa4d326)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,const `[`ad7746_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga8cfffa7af86f9a061367ebeb3aa76f47)` * params)`            | Initializes an AD7746 device.
`public int `[`ad7746_read_capacitance_1`](#group__drivers__ad7746_1ga84bd93766dd890584d98ae32affad8e2)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)`            | Reads the capacitance from the input 1 (CIN1).
`public int `[`ad7746_read_capacitance_2`](#group__drivers__ad7746_1ga5cf43a18214493cdded0f4a18ce1bc52)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)`            | Reads the capacitance from the input 2 (CIN2).
`public int `[`ad7746_read_voltage_in`](#group__drivers__ad7746_1ga78d4224109e9b82e4e847d228c7d83bf)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)`            | Reads the voltage from the external voltage input (VIN).
`public int `[`ad7746_read_voltage_vdd`](#group__drivers__ad7746_1ga9934d5bdb2776582658227f16362b4ef)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)`            | Reads the voltage from the VDD pin.
`public int `[`ad7746_read_temperature_int`](#group__drivers__ad7746_1gae1549c823f61530e051a5ddd54b38dc6)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)`            | Reads the temperature from the internal sensor.
`public int `[`ad7746_read_temperature_ext`](#group__drivers__ad7746_1ga87609e64fbc014ffc961cb2a8f90b252)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)`            | Reads the temperature from the external sensor (see datasheet).
`public int `[`ad7746_set_cap_ch_input`](#group__drivers__ad7746_1ga24f7c23e22d6d88b94d131f4f88ae53f)`(const `[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_cap_input_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga4288ad466feb87f7f8d0493a15dc7163)` input)`            | Sets the current input for the capacitive measurement.If not configured manually, the driver sets the correct mode within the dedicated read function.
`public int `[`ad7746_set_vt_ch_mode`](#group__drivers__ad7746_1ga330f467eb4699fd401ea01d2b99b6e33)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_vt_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga767e5f771c9256fa61a424623dee3750)` mode)`            | Sets the mode for the voltage / temperature channel and updates the descriptor with the new configuration.
`public int `[`ad7746_set_vt_sr`](#group__drivers__ad7746_1ga8216bd3dddd059955ae61ff341bf2c53)`(const `[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_vt_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga902b40e31d90a6b189bebe78f241339b)` sr)`            | Sets the sample rate for the voltage / temperature channel.
`public int `[`ad7746_set_cap_sr`](#group__drivers__ad7746_1ga9e823cbfb7138270312dad717be7118e)`(const `[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_cap_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gac27e150f98c939be117a8c933f9b6017)` sr)`            | Sets the sample rate for the capacitance channel.
`struct `[`ad7746_params`](#structad7746__params) | AD7746 params.
`struct `[`ad7746`](#structad7746) | AD7746 device descriptor.

## Members

#### `define `[`AD7746_ZERO_SCALE_CODE`](#group__drivers__ad7746_1ga383d01a224c5adf390b467bc9f08634b) 

0 fF capacitance code

#### `define `[`AD7746_INTERNAL_VREF`](#group__drivers__ad7746_1gaf04323308d8d0039151ccf44224705cd) 

Interval voltage reference expressed in mV.

#### `define `[`AD7746_DAC_MAX`](#group__drivers__ad7746_1ga4f6d68b3047e135293ae4e650c4f46b8) 

Maximum value that can be configured into the DACs.

#### `enum `[`@139`](#group__drivers__ad7746_1ga1e06e534e565b0e44afdf96c77951725) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_READ_CAP_CH            | read capacitive channel
AD7746_READ_VT_CH            | read voltage / temperature channel

Channel numbers for reading.

#### `enum `[`@140`](#group__drivers__ad7746_1gaf38129fd1797a5cfd7d746065784a44f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_OK            | everything was fine
AD7746_NOI2C            | I2C communication failed.
AD7746_NODEV            | no AD7746 device found on the bus
AD7746_NODATA            | no data available

Named return values.

#### `enum `[`ad7746_vt_sample_rate_t`](#group__drivers__ad7746_1ga902b40e31d90a6b189bebe78f241339b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_VT_SR_498            | 49.8 Hz
AD7746_VT_SR_312            | 31.2 Hz
AD7746_VT_SR_161            | 16.1 Hz
AD7746_VT_SR_082            | 8.2 Hz

Voltage / Temperature channel sample rates.

#### `enum `[`ad7746_vt_mode_t`](#group__drivers__ad7746_1ga767e5f771c9256fa61a424623dee3750) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_VT_MD_DIS            | channel disabled
AD7746_VT_MD_TEMP            | internal temperature sensor
AD7746_VT_MD_ETEMP            | external temperature sensor (see datasheet)
AD7746_VT_MD_VDD            | Vdd voltage monitor.
AD7746_VT_MD_VIN            | external voltage input (Vin)

Voltage / Temperature channel modes.

#### `enum `[`ad7746_cap_input_t`](#group__drivers__ad7746_1ga4288ad466feb87f7f8d0493a15dc7163) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_CAP_IN_1            | CIN1 input.
AD7746_CAP_IN_2            | CIN2 input.

Capacitance channel input.

#### `enum `[`ad7746_cap_sample_rate_t`](#group__drivers__ad7746_1gac27e150f98c939be117a8c933f9b6017) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_CAP_SR_909            | 90.9 Hz
AD7746_CAP_SR_838            | 83.8 Hz
AD7746_CAP_SR_500            | 50.0 Hz
AD7746_CAP_SR_263            | 26.3 Hz
AD7746_CAP_SR_161            | 16.1 Hz
AD7746_CAP_SR_130            | 13.0 Hz
AD7746_CAP_SR_109            | 10.9 Hz
AD7746_CAP_SR_091            | 9.1 Hz

Capacitive channel sample rate.

#### `enum `[`ad7746_exc_config_t`](#group__drivers__ad7746_1ga2f12d0b2408d43c5aeb3a1de3c8a22cc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AD7746_EXC_A            | enable only exc A output
AD7746_EXC_B            | enable only exc B output
AD7746_EXC_AB            | enable exc A and B outputs

Excitation signal output configuration.

#### `public int `[`ad7746_init`](#group__drivers__ad7746_1ga7497907fe66f9f82cde1aa08efa4d326)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,const `[`ad7746_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga8cfffa7af86f9a061367ebeb3aa76f47)` * params)` 

Initializes an AD7746 device.

#### Parameters
* `dev` device descriptor 

* `params` device configuration

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODEV if no device is found on the bus 

#### Returns
AD7746_NOI2C if other error occurs

#### `public int `[`ad7746_read_capacitance_1`](#group__drivers__ad7746_1ga84bd93766dd890584d98ae32affad8e2)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)` 

Reads the capacitance from the input 1 (CIN1).

Returns the value in fF.

If the currently selected input does not match [AD7746_CAP_IN_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gga4288ad466feb87f7f8d0493a15dc7163a2243f2623d024dec578ccd32f8d84145) it will be changed to it. This may cause data not to be available right away. The time until new data is available will depend on the [sample rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ad7746.md#structad7746__params_1a77551e877f3132c86498317cf6b580e9) of the channel.

#### Parameters
* `dev` device descriptor 

* `value` read value in fF

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODATA if there is no data available in the channel 

#### Returns
AD7746_I2C if other error occurs

#### `public int `[`ad7746_read_capacitance_2`](#group__drivers__ad7746_1ga5cf43a18214493cdded0f4a18ce1bc52)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)` 

Reads the capacitance from the input 2 (CIN2).

Returns the value in fF.

If the currently selected input does not match [AD7746_CAP_IN_2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gga4288ad466feb87f7f8d0493a15dc7163ac3157d289ba9f6ce053a1b7883d45892) it will be changed to it. This may cause data not to be available right away. The time until new data is available will depend on the [sample rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ad7746.md#structad7746__params_1a77551e877f3132c86498317cf6b580e9) of the channel.

#### Parameters
* `dev` device descriptor 

* `value` read value in fF

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODATA if there is no data available in the channel 

#### Returns
AD7746_I2C if other error occurs

#### `public int `[`ad7746_read_voltage_in`](#group__drivers__ad7746_1ga78d4224109e9b82e4e847d228c7d83bf)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)` 

Reads the voltage from the external voltage input (VIN).

Returns the value in mV.

If the current mode of the voltage / temperature channel does not match [AD7746_VT_MD_VIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gga767e5f771c9256fa61a424623dee3750ac9bbc54f127c94dd0c4a0a44e6a4625e) it will be changed to this mode, causing data not to be available right away. The time until new data is available will depend on the [sample rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ad7746.md#structad7746__params_1acb2c16cf4a587c7d9aa48693c9d321e0) of the channel.

#### Parameters
* `dev` device descriptor 

* `value` read value in mV

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODATA if there is no data available in the channel 

#### Returns
AD7746_I2C if other error occurs

#### `public int `[`ad7746_read_voltage_vdd`](#group__drivers__ad7746_1ga9934d5bdb2776582658227f16362b4ef)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)` 

Reads the voltage from the VDD pin.

Returns the value in mV.

If the current mode of the voltage / temperature channel does not match [AD7746_VT_MD_VDD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gga767e5f771c9256fa61a424623dee3750aa999de2f5a63ef8cebfe534d4ffd0679) it will be changed to this mode, causing data not to be available right away. The time until new data is available will depend on the [sample rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ad7746.md#structad7746__params_1acb2c16cf4a587c7d9aa48693c9d321e0) of the channel.

#### Parameters
* `dev` device descriptor 

* `value` read value in mV

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODATA if there is no data available in the channel 

#### Returns
AD7746_I2C if other error occurs

#### `public int `[`ad7746_read_temperature_int`](#group__drivers__ad7746_1gae1549c823f61530e051a5ddd54b38dc6)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)` 

Reads the temperature from the internal sensor.

If the current mode of the voltage / temperature channel does not match [AD7746_VT_MD_TEMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gga767e5f771c9256fa61a424623dee3750a1d0a9af7c559f319b4d757c934d11ae1) it will be changed to this mode, causing data not to be available right away. The time until new data is available will depend on the [sample rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ad7746.md#structad7746__params_1acb2c16cf4a587c7d9aa48693c9d321e0) of the channel.

#### Parameters
* `dev` device descriptor 

* `value` read value in celsius

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODATA if there is no data available in the channel 

#### Returns
AD7746_I2C if other error occurs

#### `public int `[`ad7746_read_temperature_ext`](#group__drivers__ad7746_1ga87609e64fbc014ffc961cb2a8f90b252)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,int * value)` 

Reads the temperature from the external sensor (see datasheet).

If the current mode of the voltage / temperature channel does not match [AD7746_VT_MD_ETEMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gga767e5f771c9256fa61a424623dee3750aad6ea3cf890f034c79654f544bb2bf59) it will be changed to this mode, causing data not to be available right away. The time until new data is available will depend on the [sample rate](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ad7746.md#structad7746__params_1acb2c16cf4a587c7d9aa48693c9d321e0) of the channel.

#### Parameters
* `dev` device descriptor 

* `value` read value in celsius

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NODATA if there is no data available in the channel 

#### Returns
AD7746_I2C if other error occurs

#### `public int `[`ad7746_set_cap_ch_input`](#group__drivers__ad7746_1ga24f7c23e22d6d88b94d131f4f88ae53f)`(const `[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_cap_input_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga4288ad466feb87f7f8d0493a15dc7163)` input)` 

Sets the current input for the capacitive measurement.If not configured manually, the driver sets the correct mode within the dedicated read function.

#### Parameters
* `dev` device descriptor 

* `input` selected input - 0 for CIN1, 1 for CIN2

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NOI2C on error

#### `public int `[`ad7746_set_vt_ch_mode`](#group__drivers__ad7746_1ga330f467eb4699fd401ea01d2b99b6e33)`(`[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_vt_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga767e5f771c9256fa61a424623dee3750)` mode)` 

Sets the mode for the voltage / temperature channel and updates the descriptor with the new configuration.

If not configured manually, the driver sets the correct mode within the dedicated read function.

#### Parameters
* `dev` device descriptor 

* `mode` mode to which the channel has to be set

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NOI2C on error

#### `public int `[`ad7746_set_vt_sr`](#group__drivers__ad7746_1ga8216bd3dddd059955ae61ff341bf2c53)`(const `[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_vt_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga902b40e31d90a6b189bebe78f241339b)` sr)` 

Sets the sample rate for the voltage / temperature channel.

#### Parameters
* `dev` device descriptor 

* `sr` sample rate

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NOI2C on error

#### `public int `[`ad7746_set_cap_sr`](#group__drivers__ad7746_1ga9e823cbfb7138270312dad717be7118e)`(const `[`ad7746_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga250361115dd59874bdbcfa842ebac5da)` * dev,`[`ad7746_cap_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gac27e150f98c939be117a8c933f9b6017)` sr)` 

Sets the sample rate for the capacitance channel.

#### Parameters
* `dev` device descriptor 

* `sr` sample rate

#### Returns
AD7746_OK on success 

#### Returns
AD7746_NOI2C on error

# struct `ad7746_params` 

AD7746 params.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structad7746__params_1a3073ca6a2815a8f8174ef4c8d63b1fcd) | i2c device
`public uint8_t `[`addr`](#structad7746__params_1a2f14925d6071350ea47aa03db997db57) | i2c address
`public uint8_t `[`dac_a_cap`](#structad7746__params_1ac5ed739b970146d6b3b455c2f279d3cd) | DAC A capacitance.
`public uint8_t `[`dac_b_cap`](#structad7746__params_1a9daa6ae42ea92a1fc821e954cf922239) | DAC B capacitance.
`public `[`ad7746_exc_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga2f12d0b2408d43c5aeb3a1de3c8a22cc)` `[`exc_config`](#structad7746__params_1a475d741911d6d9c78afaf9a5c5f5dad1) | excitation signal config
`public `[`ad7746_cap_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gac27e150f98c939be117a8c933f9b6017)` `[`cap_sample_rate`](#structad7746__params_1a77551e877f3132c86498317cf6b580e9) | capacitance sample rate
`public `[`ad7746_vt_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga902b40e31d90a6b189bebe78f241339b)` `[`vt_sample_rate`](#structad7746__params_1acb2c16cf4a587c7d9aa48693c9d321e0) | voltage/temp sample rate
`public `[`ad7746_vt_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga767e5f771c9256fa61a424623dee3750)` `[`vt_mode`](#structad7746__params_1a680236e96ee6fe7ea1ca4fc23bc496e6) | mode of the voltage/temp ch
`public `[`ad7746_cap_input_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga4288ad466feb87f7f8d0493a15dc7163)` `[`cap_input`](#structad7746__params_1abff2f374cf547a666f17ace518d54a0d) | selected capacitance input

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structad7746__params_1a3073ca6a2815a8f8174ef4c8d63b1fcd) 

i2c device

#### `public uint8_t `[`addr`](#structad7746__params_1a2f14925d6071350ea47aa03db997db57) 

i2c address

#### `public uint8_t `[`dac_a_cap`](#structad7746__params_1ac5ed739b970146d6b3b455c2f279d3cd) 

DAC A capacitance.

#### `public uint8_t `[`dac_b_cap`](#structad7746__params_1a9daa6ae42ea92a1fc821e954cf922239) 

DAC B capacitance.

#### `public `[`ad7746_exc_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga2f12d0b2408d43c5aeb3a1de3c8a22cc)` `[`exc_config`](#structad7746__params_1a475d741911d6d9c78afaf9a5c5f5dad1) 

excitation signal config

#### `public `[`ad7746_cap_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1gac27e150f98c939be117a8c933f9b6017)` `[`cap_sample_rate`](#structad7746__params_1a77551e877f3132c86498317cf6b580e9) 

capacitance sample rate

#### `public `[`ad7746_vt_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga902b40e31d90a6b189bebe78f241339b)` `[`vt_sample_rate`](#structad7746__params_1acb2c16cf4a587c7d9aa48693c9d321e0) 

voltage/temp sample rate

#### `public `[`ad7746_vt_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga767e5f771c9256fa61a424623dee3750)` `[`vt_mode`](#structad7746__params_1a680236e96ee6fe7ea1ca4fc23bc496e6) 

mode of the voltage/temp ch

#### `public `[`ad7746_cap_input_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga4288ad466feb87f7f8d0493a15dc7163)` `[`cap_input`](#structad7746__params_1abff2f374cf547a666f17ace518d54a0d) 

selected capacitance input

# struct `ad7746` 

AD7746 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ad7746_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga8cfffa7af86f9a061367ebeb3aa76f47)` `[`params`](#structad7746_1a07b62becbb56599ea71a21ae352cf863) | device driver configuration

## Members

#### `public `[`ad7746_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ad7746_1ga8cfffa7af86f9a061367ebeb3aa76f47)` `[`params`](#structad7746_1a07b62becbb56599ea71a21ae352cf863) 

device driver configuration

