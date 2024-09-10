---
title: api-drivers_pca9685.md
description: api-drivers_pca9685.md
---
# group `drivers_pca9685` 

Device driver for the NXP PCA9685.

OverviewThe driver supports the NXP PCA9685 16-channel, 12-bit PWM LED controller connected to I2C. Although the controller is optimized for LED control, the 12-bit resolution also allows the control of servos with a resolution of 4 us at 60 Hz refresh signal.

The following features of the PCA9685 are supported by the driver:

* 16 channels with 12-bit resolution

* Refresh rates from 24 Hz to 1526 Hz with internal 25 MHz oscillator

* Totem pole outputs with 25 mA as sink and 10 mA as source at 5V

* Software programmable open-drain output selection

* Inverted outputs

* Active LOW Output Enable (OE) input pin

* External clock input with max. 50 MHz

UsageThe driver interface is kept as compatible as possible with the peripheral PWM interface. The only differences are that

* functions have the prefix `pca9685_` and

* functions require an additional parameter, the pointer to the PWM device of type [pca9685_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t).

Please refer the test application in `tests/drivers/pca9685` for an example on how to use the driver.

SAUL CapabilitiesThe driver provides SAUL capabilities that are compatible to the SAUL actuators of type [SAUL_ACT_SERVO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1ggaa3dfb65ce3006aaab287357097352604aa837edbaeb82d77107eeba99a9bf19cd).

Each PCA9685 channel can be mapped directly to SAUL by defining an according entry in `PCA9685_SAUL_PWM_PARAMS`. Please refer file `$RIOTBASE/drivers/pca9685/include/pca9685_params.h` for an example.  pca9685_saul_pwm_params_t pca9685_saul_pwm_params[] = {
     {
         .name = "PCA9685-0:0",
         .dev = 0,
         .channel = 0,
         .initial = (PCA9685_PARAM_RES >> 1),
      },
     {
         .name = "PCA9685-0:1",
         .dev = 0,
         .channel = 1,
         .initial = (PCA9685_PARAM_RES >> 2),
      },
     {
         .name = "PCA9685-0:2",
         .dev = 0,
         .channel = 2,
         .initial = (PCA9685_PARAM_RES >> 3),
      },
 };
 For each PWM channel that should be used with SAUL, an entry with a name, the device, the channel, and the initial value has to be defined as shown above.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PCA9685_CHANNEL_NUM`](#group__drivers__pca9685_1ga59f3280f535ca547bbde16443305568e)            | Number of PWM channels provided by PCA9685.
`define `[`PCA9685_RESOLUTION`](#group__drivers__pca9685_1ga6d38c6c9a13df01a8454be525c3ebf7e)            | Internal PCA9685 channel resolution is 12-bit.
`define `[`PCA9685_OSC_FREQ`](#group__drivers__pca9685_1ga712c59786ae09893d0aeb5acd105558a)            | Internal PCA9685 oscillator frequency is 25 MHz.
`define `[`PCA9685_EXT_FERQ_MAX`](#group__drivers__pca9685_1gaa721fdd019a1cd1f41482b06ea8ce627)            | Maximum external clock frequency is 50 MHz.
`enum `[`pca9685_error_t`](#group__drivers__pca9685_1ga810f1332042b1968497fe6d5c1ba5744)            | PCA9685 driver error codes.
`enum `[`pca9685_out_drv_t`](#group__drivers__pca9685_1ga5515d408b1527279a0de586363ca79e2)            | PCA9685 output driver mode.
`enum `[`pca9685_out_ne_t`](#group__drivers__pca9685_1ga2b102e5663fff29edee35dd7689f79b2)            | PCA9685 output-not-enabled mode.
`public int `[`pca9685_init`](#group__drivers__pca9685_1gaefdb048c84197fad0de859f1ef489287)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev,const `[`pca9685_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t)` * params)`            | Initialize the PCA9685 PWM device driver.
`public uint32_t `[`pca9685_pwm_init`](#group__drivers__pca9685_1ga93c50a9223394855c7fc72e4003e7b46)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev,`[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` mode,uint32_t freq,uint16_t res)`            | Initialize the PCA9685 PWM device.
`public void `[`pca9685_pwm_set`](#group__drivers__pca9685_1ga6d176e43fef69284d1de6e4da9106492)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev,uint8_t channel,uint16_t value)`            | Set the duty-cycle for a given channel or all channels of the given PCA9685 PWM device.
`public void `[`pca9685_pwm_poweron`](#group__drivers__pca9685_1ga6a1c921e8c9f4ffd8e66fba2afec86c8)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev)`            | Resume PWM generation on the given PCA9685 device.
`public void `[`pca9685_pwm_poweroff`](#group__drivers__pca9685_1ga409ab0e4d56e96d3712bade834cd3368)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev)`            | Stop the PWM generation on the given PCA9685 device.
`public inline static uint8_t `[`pca9685_pwm_channels`](#group__drivers__pca9685_1gae32bfa9387605e7363b3d0aa186a440d)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev)`            | Get the number of available channels of the given PCA9685 device.
`struct `[`pca9685_params_t`](#structpca9685__params__t) | PCA9685 device initialization parameters.
`struct `[`pca9685_t`](#structpca9685__t) | PCA9685 PWM device data structure type.
`struct `[`pca9685_saul_pwm_params_t`](#structpca9685__saul__pwm__params__t) | PCA9685 configuration structure for mapping PWM channels to SAUL.

## Members

#### `define `[`PCA9685_CHANNEL_NUM`](#group__drivers__pca9685_1ga59f3280f535ca547bbde16443305568e) 

Number of PWM channels provided by PCA9685.

#### `define `[`PCA9685_RESOLUTION`](#group__drivers__pca9685_1ga6d38c6c9a13df01a8454be525c3ebf7e) 

Internal PCA9685 channel resolution is 12-bit.

#### `define `[`PCA9685_OSC_FREQ`](#group__drivers__pca9685_1ga712c59786ae09893d0aeb5acd105558a) 

Internal PCA9685 oscillator frequency is 25 MHz.

#### `define `[`PCA9685_EXT_FERQ_MAX`](#group__drivers__pca9685_1gaa721fdd019a1cd1f41482b06ea8ce627) 

Maximum external clock frequency is 50 MHz.

#### `enum `[`pca9685_error_t`](#group__drivers__pca9685_1ga810f1332042b1968497fe6d5c1ba5744) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9685_OK            | Success.
PCA9685_ERROR_I2C            | I2C communication error.

PCA9685 driver error codes.

#### `enum `[`pca9685_out_drv_t`](#group__drivers__pca9685_1ga5515d408b1527279a0de586363ca79e2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9685_OPEN_DRAIN            | Open-drain structure output.
PCA9685_TOTEM_POLE            | Totem pole structure output.

PCA9685 output driver mode.

The output driver mode defines how the outputs are configured.

#### `enum `[`pca9685_out_ne_t`](#group__drivers__pca9685_1ga2b102e5663fff29edee35dd7689f79b2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9685_OFF            | If /OE pin is HIGH, outputs are LOW.
PCA9685_OUT_DRV            | Outputs depend on the output driver mode [pca9685_params_t::out_drv](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t_1ae41f0a28b377ae0f555e3ae1324a83d2).
PCA9685_HIHGH_Z            | If /OE pin is HIGH, outputs are high-impedance.

PCA9685 output-not-enabled mode.

The output-not-enabled mode defines how the outputs behave when the active LOW output enable pin /OE is HIGH.

#### `public int `[`pca9685_init`](#group__drivers__pca9685_1gaefdb048c84197fad0de859f1ef489287)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev,const `[`pca9685_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t)` * params)` 

Initialize the PCA9685 PWM device driver.

The function initializes the driver. After calling this function, the PWM device is in low-power sleep mode (powered off), all outputs off. Before the PWM device can be used, it has to be initialized with [pca9685_pwm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga93c50a9223394855c7fc72e4003e7b46).

#### Parameters
* `dev` Device descriptor of the PCA9685 to be initialized 

* `params` Configuration parameters, see [pca9685_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t)

#### Parameters
* `PCA9685_OK` on success 

* `PCA9685_ERROR_*` a negative error code on error, see [pca9685_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga810f1332042b1968497fe6d5c1ba5744)

#### `public uint32_t `[`pca9685_pwm_init`](#group__drivers__pca9685_1ga93c50a9223394855c7fc72e4003e7b46)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev,`[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` mode,uint32_t freq,uint16_t res)` 

Initialize the PCA9685 PWM device.

The function initializes the PWM device with the given parameters that are used for all channels. After calling this function, the PWM device is operational (powered on). That is, all outputs are active with the given parameters and the same duty cycle value as before the call.

* PCA9685 works with internally with a resolution of 12 bit = 4096. Using a resolution that is not a power of two, will cause inaccuracy due to alignment errors when scaling down the internal resolution to the configured resolution.

* Frequencies from 24 Hz to 1526 Hz can be used with PCF9865.

#### Parameters
* `dev` Device descriptor of the PCA9685 

* `mode` PWM mode, left, right or center aligned 

* `freq` PWM frequency in Hz [24...1526] 

* `res` PWM resolution [2...4096], should be a power of two

#### Parameters
* `>0` actual frequency on success 

* `0` on error

#### `public void `[`pca9685_pwm_set`](#group__drivers__pca9685_1ga6d176e43fef69284d1de6e4da9106492)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev,uint8_t channel,uint16_t value)` 

Set the duty-cycle for a given channel or all channels of the given PCA9685 PWM device.

The duty-cycle is set in relation to the chosen resolution of the given device. If value > resolution, value is set to resolution.

If the given channel is [PCA9685_CHANNEL_NUM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga59f3280f535ca547bbde16443305568e), all channels are set to the same duty cycle at the same time with only one I2C bus access.

#### Parameters
* `dev` Device descriptor of the PCA9685 

* `channel` Channel of PCA9685 to set, if [PCA9685_CHANNEL_NUM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga59f3280f535ca547bbde16443305568e) all channels are set to the desired duty-cycle 

* `value` Desired duty-cycle to set

#### `public void `[`pca9685_pwm_poweron`](#group__drivers__pca9685_1ga6a1c921e8c9f4ffd8e66fba2afec86c8)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev)` 

Resume PWM generation on the given PCA9685 device.

When this function is called, the given PWM device is powered on and continues its previously configured operation. The duty cycle of each channel will be the value that was last set.

This function must not be called before the PWM device was initialized.

#### Parameters
* `dev` Device descriptor of the PCA9685

#### `public void `[`pca9685_pwm_poweroff`](#group__drivers__pca9685_1ga409ab0e4d56e96d3712bade834cd3368)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev)` 

Stop the PWM generation on the given PCA9685 device.

This function switches the PCA9685 into sleep mode which turns off the internal oscillator. This disables the PWM generation on all configured. If the active LOW output enable pin /OE is used, the signal is set to HIGH. Dependent on the [pca9685_params_t::out_drv](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t_1ae41f0a28b377ae0f555e3ae1324a83d2) and [pca9685_params_t::out_ne](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t_1adbcd2679208e06cd9addf3837e56bc11) parameters, the outputs are set 0, 1 or high-impedance. All channel duty-cycle values are preserved.

#### Parameters
* `dev` Device descriptor of the PCA9685

#### `public inline static uint8_t `[`pca9685_pwm_channels`](#group__drivers__pca9685_1gae32bfa9387605e7363b3d0aa186a440d)`(`[`pca9685_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__t)` * dev)` 

Get the number of available channels of the given PCA9685 device.

#### Parameters
* `dev` Device descriptor of the PCA9685 

#### Returns
Number of channels available

# struct `pca9685_params_t` 

PCA9685 device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structpca9685__params__t_1a5ee60efa685e394b7dd32f69e39dc3f1) | I2C device, default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)
`public uint8_t `[`i2c_addr`](#structpca9685__params__t_1a13ca9f34e8be71ce8b9b5c1aacc62716) | I2C slave address.
`public `[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` `[`mode`](#structpca9685__params__t_1af39e22d881fd21ed0fb54880083de52f) | PWM mode for all channels: [PWM_LEFT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gga562b5946a0edd6f5eebb63db7d154d56ae55d6c4908a2d9ee818e546ebabd35ba), [PWM_CENTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gga562b5946a0edd6f5eebb63db7d154d56aa702c2d37cded311e8770035242e2ed3), [PWM_RIGHT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gga562b5946a0edd6f5eebb63db7d154d56aec8c768bb78a2a239515679e8e2da73d) supported, (default PWM_CENTER)
`public uint32_t `[`freq`](#structpca9685__params__t_1aadbeb73e6b5c321b2b2d909a16bdd696) | PWM frequency in Hz (default 100)
`public uint16_t `[`res`](#structpca9685__params__t_1a646d8c130a0248e5679f33a34ad2deb2) | PWM resolution (default 4096)
`public bool `[`inv`](#structpca9685__params__t_1a8b1d3f59498c4e110d3128ac6b1e481d) | Invert outputs, e.g., for LEDs (default yes)
`public uint32_t `[`ext_freq`](#structpca9685__params__t_1a5248d6e3a0eea58ba00815b926af63c0) | If not 0, EXTCLK pin is used with this frequency.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`oe_pin`](#structpca9685__params__t_1a96f8dc88ea77a67dd4ac67349adc27de) | Active LOW output enable pin /OE.
`public `[`pca9685_out_drv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga5515d408b1527279a0de586363ca79e2)` `[`out_drv`](#structpca9685__params__t_1ae41f0a28b377ae0f555e3ae1324a83d2) | Output driver mode.
`public `[`pca9685_out_ne_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga2b102e5663fff29edee35dd7689f79b2)` `[`out_ne`](#structpca9685__params__t_1adbcd2679208e06cd9addf3837e56bc11) | Output-not-enabled mode.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structpca9685__params__t_1a5ee60efa685e394b7dd32f69e39dc3f1) 

I2C device, default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)

#### `public uint8_t `[`i2c_addr`](#structpca9685__params__t_1a13ca9f34e8be71ce8b9b5c1aacc62716) 

I2C slave address.

#### `public `[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` `[`mode`](#structpca9685__params__t_1af39e22d881fd21ed0fb54880083de52f) 

PWM mode for all channels: [PWM_LEFT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gga562b5946a0edd6f5eebb63db7d154d56ae55d6c4908a2d9ee818e546ebabd35ba), [PWM_CENTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gga562b5946a0edd6f5eebb63db7d154d56aa702c2d37cded311e8770035242e2ed3), [PWM_RIGHT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gga562b5946a0edd6f5eebb63db7d154d56aec8c768bb78a2a239515679e8e2da73d) supported, (default PWM_CENTER)

#### `public uint32_t `[`freq`](#structpca9685__params__t_1aadbeb73e6b5c321b2b2d909a16bdd696) 

PWM frequency in Hz (default 100)

#### `public uint16_t `[`res`](#structpca9685__params__t_1a646d8c130a0248e5679f33a34ad2deb2) 

PWM resolution (default 4096)

#### `public bool `[`inv`](#structpca9685__params__t_1a8b1d3f59498c4e110d3128ac6b1e481d) 

Invert outputs, e.g., for LEDs (default yes)

#### `public uint32_t `[`ext_freq`](#structpca9685__params__t_1a5248d6e3a0eea58ba00815b926af63c0) 

If not 0, EXTCLK pin is used with this frequency.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`oe_pin`](#structpca9685__params__t_1a96f8dc88ea77a67dd4ac67349adc27de) 

Active LOW output enable pin /OE.

If [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604), the pin is not used. (default [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604)).

#### `public `[`pca9685_out_drv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga5515d408b1527279a0de586363ca79e2)` `[`out_drv`](#structpca9685__params__t_1ae41f0a28b377ae0f555e3ae1324a83d2) 

Output driver mode.

#### `public `[`pca9685_out_ne_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9685_1ga2b102e5663fff29edee35dd7689f79b2)` `[`out_ne`](#structpca9685__params__t_1adbcd2679208e06cd9addf3837e56bc11) 

Output-not-enabled mode.

# struct `pca9685_t` 

PCA9685 PWM device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pca9685_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t)` `[`params`](#structpca9685__t_1a20b09750439b3dc58a5a29b084151a05) | Device initialization parameters.
`public bool `[`powered_on`](#structpca9685__t_1a0a50d1ca8ef55f1133106a76cfa72054) | Devices is powered on if true.

## Members

#### `public `[`pca9685_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9685.md#structpca9685__params__t)` `[`params`](#structpca9685__t_1a20b09750439b3dc58a5a29b084151a05) 

Device initialization parameters.

#### `public bool `[`powered_on`](#structpca9685__t_1a0a50d1ca8ef55f1133106a76cfa72054) 

Devices is powered on if true.

# struct `pca9685_saul_pwm_params_t` 

PCA9685 configuration structure for mapping PWM channels to SAUL.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structpca9685__saul__pwm__params__t_1a1ab767fae9932f49b9a4db4bfe73f8e7) | name of the PCA9685 device
`public unsigned int `[`dev`](#structpca9685__saul__pwm__params__t_1ae46871c5b63818c88b1881c2574a95b6) | index of the PCA9685 device
`public uint8_t `[`channel`](#structpca9685__saul__pwm__params__t_1ac34160b461a0f28421cdaf50437deb95) | channel of the PCA9685 device
`public uint16_t `[`initial`](#structpca9685__saul__pwm__params__t_1a8324c3123a3bbd6357033252d1054e21) | initial duty-cycle value

## Members

#### `public const char * `[`name`](#structpca9685__saul__pwm__params__t_1a1ab767fae9932f49b9a4db4bfe73f8e7) 

name of the PCA9685 device

#### `public unsigned int `[`dev`](#structpca9685__saul__pwm__params__t_1ae46871c5b63818c88b1881c2574a95b6) 

index of the PCA9685 device

#### `public uint8_t `[`channel`](#structpca9685__saul__pwm__params__t_1ac34160b461a0f28421cdaf50437deb95) 

channel of the PCA9685 device

#### `public uint16_t `[`initial`](#structpca9685__saul__pwm__params__t_1a8324c3123a3bbd6357033252d1054e21) 

initial duty-cycle value

