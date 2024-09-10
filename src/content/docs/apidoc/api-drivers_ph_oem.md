---
title: api-drivers_ph_oem.md
description: api-drivers_ph_oem.md
---
# group `drivers_ph_oem` 

Device driver for Atlas Scientific pH OEM sensor with SMBus/I2C interface.

The Atlas Scientific pH OEM sensor can be used with or without the interrupt pin. Per default this pin is mapped to [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not otherwise defined in your makefile.

If you use an electrical isolation for most accurate readings e.g. with the ADM3260, keep in mind that its not recommended to use the interrupt pin without also isolating it somehow. The preferred method, if not using an isolation on the interrupt line, would be polling. In this case leave the interrupt pin undefined.

The Sensor has no integrated temperature sensor and for the highest possible precision it requires another device to provide the temperature for error compensation.

Once the pH OEM is powered on it will be ready to receive commands and take readings after 1ms.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities. Reading ([saul_driver_t::read](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_saul.md#structsaul__driver__t_1a61cc7eac43a095d01db90d23286217ab)) from the device returns the current pH value. Writing ([saul_driver_t::write](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_saul.md#structsaul__driver__t_1a36521b54ed4c2ed7d038928d42f8c28c)) a temperature value in celsius to the device sets the temperature compensation. A valid temperature range is 1 - 20000 (0.01 °C to 200.0 °C)

Communication is done using SMBus/I2C protocol at speeds of 10-100 kHz. Set your board I2C speed to [I2C_SPEED_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gga6e6a870f98abb8cffa95373b69fb8243a6b350d376580872bb53bdfc4ff41d9b0) or [I2C_SPEED_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gga6e6a870f98abb8cffa95373b69fb8243a0826bf5711e82ba26b4ada6104260583)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`ph_oem_named_returns_t`](#group__drivers__ph__oem_1gac06302df40bc05bc56dec2ed7f7052b6)            | Named return values.
`enum `[`ph_oem_led_state_t`](#group__drivers__ph__oem_1gac7b39997a60eb597cb14d067f562bfee)            | LED state values.
`enum `[`ph_oem_device_state_t`](#group__drivers__ph__oem_1gace6f50a055f37bd6e69170c462c170f5)            | Device state values.
`enum `[`ph_oem_irq_option_t`](#group__drivers__ph__oem_1ga80b8082b315169a3cfa8e71287b2fdfe)            | Interrupt pin option values.
`enum `[`ph_oem_calibration_option_t`](#group__drivers__ph__oem_1gaf859a7a988d4650f5c6d449633667673)            | Calibration option values.
`public int `[`ph_oem_init`](#group__drivers__ph__oem_1gae2d0761f6ddd367e75f32bda7f919a1a)`(`[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,const `[`ph_oem_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga6d8a51371443cba0c02b3e20f06bb7b7)` * params)`            | Initialize a pH OEM sensor.
`public int `[`ph_oem_set_i2c_address`](#group__drivers__ph__oem_1gaa7af3f95a8c9b51d03d1e1fa8344f7c9)`(`[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint8_t addr)`            | Sets a new address to the pH OEM device by unlocking the [PH_OEM_REG_UNLOCK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a4c00e65e4e9c773992685c79c4925b2e) register and writing a new address to the [PH_OEM_REG_ADDRESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534af1a24a62906dee63180eb696cf143b48) register.
`public int `[`ph_oem_enable_interrupt`](#group__drivers__ph__oem_1ga094fa695a2acd5c275e2f79f705396d5)`(`[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,`[`ph_oem_interrupt_pin_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga46905a646ccbf3030706c31a3c755ab2)` cb,void * arg)`            | Enable the pH OEM interrupt pin if [ph_oem_params_t::interrupt_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ph_oem.md#structph__oem__params_1ae8a7cf150979e1e0bc41cb8d9ff7f339) is defined.
`public int `[`ph_oem_reset_interrupt_pin`](#group__drivers__ph__oem_1ga30f23632123b2635041d0e21a3b844fd)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev)`            | The interrupt pin will not auto reset on option [PH_OEM_IRQ_RISING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea64cc7bed660a33198b9ca108426c090a) and [PH_OEM_IRQ_FALLING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea1eedd530821a380a8bf0069b2c2310d4) after interrupt fires, so call this function again to reset the pin state.
`public int `[`ph_oem_set_led_state`](#group__drivers__ph__oem_1ga5319d1ffce159800e816c1325b368a80)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,`[`ph_oem_led_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gac7b39997a60eb597cb14d067f562bfee)` state)`            | Set the LED state of the pH OEM sensor by writing to the [PH_OEM_REG_LED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a4f8eef844c23e74d2e1d6cd6c27ef431) register.
`public int `[`ph_oem_set_device_state`](#group__drivers__ph__oem_1ga7f553d7c75e3e12336628c4ff384e3c8)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,`[`ph_oem_device_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gace6f50a055f37bd6e69170c462c170f5)` state)`            | Sets the device state (active/hibernate) of the pH OEM sensor by writing to the [PH_OEM_REG_HIBERNATE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534afd9796d70d0bbfb709b0e92bda6c3e55) register.
`public int `[`ph_oem_start_new_reading`](#group__drivers__ph__oem_1ga7c69721413cd1e6538ce1147e641c324)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev)`            | Starts a new reading by setting the device state to [PH_OEM_TAKE_READINGS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggace6f50a055f37bd6e69170c462c170f5afec2edc47d45159b48af93bf712d3e8b).
`public int `[`ph_oem_clear_calibration`](#group__drivers__ph__oem_1gae370e9573d6838746eefc2cdc64583d5)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev)`            | Clears all calibrations previously done.
`public int `[`ph_oem_set_calibration`](#group__drivers__ph__oem_1ga3c09a34270060f83c89f5267d58a2233)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t calibration_value,`[`ph_oem_calibration_option_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaf859a7a988d4650f5c6d449633667673)` option)`            | Sets the [PH_OEM_REG_CALIBRATION_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a2670bd8d9ea3f07b67e5833a77b373d9) register to the calibration_value which the pH OEM sensor will be calibrated to.
`public int `[`ph_oem_read_calibration_state`](#group__drivers__ph__oem_1ga90048aec75905488c5c8786148ad3ed6)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t * calibration_state)`            | Read the [PH_OEM_REG_CALIBRATION_CONFIRM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534ad5d8773f6f5b19db61991283d7b33302) register.
`public int `[`ph_oem_set_compensation`](#group__drivers__ph__oem_1gabe87d8f452660dc3956e75140a0aafde)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t temperature_compensation)`            | Sets the [PH_OEM_REG_TEMP_COMPENSATION_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a8ed817ec57616b06b6de37d9c2ef91bd) register to the temperature_compensation value which the pH OEM sensor will use to compensate the reading error.
`public int `[`ph_oem_read_compensation`](#group__drivers__ph__oem_1ga4b3f8a5f343f7906527ae843397f28a5)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t * temperature_compensation)`            | Reads the [PH_OEM_REG_TEMP_CONFIRMATION_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534ad2636d4aa521ae51004a7191cc327f7e) register to verify the temperature compensation value that was used to take the pH reading is set to the correct temperature.
`public int `[`ph_oem_read_ph`](#group__drivers__ph__oem_1ga2ed33b1757d6297da1f6a23c7c768fce)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t * ph_value)`            | Reads the [PH_OEM_REG_PH_READING_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a1fa4ee560bf8a18e35479d2de33b479d) register to get the current pH reading.
`struct `[`ph_oem_params`](#structph__oem__params) | pH OEM sensor params
`struct `[`ph_oem`](#structph__oem) | pH OEM device descriptor

## Members

#### `enum `[`ph_oem_named_returns_t`](#group__drivers__ph__oem_1gac06302df40bc05bc56dec2ed7f7052b6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PH_OEM_OK            | Everything was fine.
PH_OEM_NODEV            | No device found on the bus.
PH_OEM_READ_ERR            | Reading to device failed.
PH_OEM_WRITE_ERR            | Writing to device failed.
PH_OEM_NOT_PH            | Not an Atlas Scientific pH OEM device.
PH_OEM_INTERRUPT_GPIO_UNDEF            | Interrupt pin is [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604).
PH_OEM_GPIO_INIT_ERR            | Error while initializing GPIO PIN.
PH_OEM_TEMP_OUT_OF_RANGE            | Temperature is out of range.

Named return values.

#### `enum `[`ph_oem_led_state_t`](#group__drivers__ph__oem_1gac7b39997a60eb597cb14d067f562bfee) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PH_OEM_LED_ON            | LED on state.
PH_OEM_LED_OFF            | LED off state.

LED state values.

#### `enum `[`ph_oem_device_state_t`](#group__drivers__ph__oem_1gace6f50a055f37bd6e69170c462c170f5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PH_OEM_TAKE_READINGS            | Device active state.
PH_OEM_STOP_READINGS            | Device hibernate state.

Device state values.

#### `enum `[`ph_oem_irq_option_t`](#group__drivers__ph__oem_1ga80b8082b315169a3cfa8e71287b2fdfe) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PH_OEM_IRQ_RISING            | Pin high on new reading (manually reset)
PH_OEM_IRQ_FALLING            | Pin low on new reading (manually reset)
PH_OEM_IRQ_BOTH            | Invert state on new reading (automatically reset)

Interrupt pin option values.

#### `enum `[`ph_oem_calibration_option_t`](#group__drivers__ph__oem_1gaf859a7a988d4650f5c6d449633667673) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PH_OEM_CALIBRATE_LOW_POINT            | Low point calibration option.
PH_OEM_CALIBRATE_MID_POINT            | Mid point calibration option.
PH_OEM_CALIBRATE_HIGH_POINT            | High point calibration option.

Calibration option values.

#### `public int `[`ph_oem_init`](#group__drivers__ph__oem_1gae2d0761f6ddd367e75f32bda7f919a1a)`(`[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,const `[`ph_oem_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga6d8a51371443cba0c02b3e20f06bb7b7)` * params)` 

Initialize a pH OEM sensor.

#### Parameters
* `dev` device descriptor 

* `params` device configuration

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_NODEV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6aa31f3ac5b2c82a65101cc236aa97cae1) if no device is found on the bus 

#### Returns
[PH_OEM_NOT_PH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a6dba40774bf039df66d669c022ed9905) if the device found at the address is not a pH OEM device 

#### Returns

#### `public int `[`ph_oem_set_i2c_address`](#group__drivers__ph__oem_1gaa7af3f95a8c9b51d03d1e1fa8344f7c9)`(`[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint8_t addr)` 

Sets a new address to the pH OEM device by unlocking the [PH_OEM_REG_UNLOCK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a4c00e65e4e9c773992685c79c4925b2e) register and writing a new address to the [PH_OEM_REG_ADDRESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534af1a24a62906dee63180eb696cf143b48) register.

The device address will also be updated in the device descriptor so it is still usable.

Settings are retained in the sensor if the power is cut.

The address in the device descriptor will reverse to the default address you provided through PH_OEM_PARAM_ADDR after the microcontroller restarts

#### Parameters
* `dev` device descriptor 

* `addr` new address for the device. Range: 0x01 - 0x7f

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed

#### `public int `[`ph_oem_enable_interrupt`](#group__drivers__ph__oem_1ga094fa695a2acd5c275e2f79f705396d5)`(`[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,`[`ph_oem_interrupt_pin_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga46905a646ccbf3030706c31a3c755ab2)` cb,void * arg)` 

Enable the pH OEM interrupt pin if [ph_oem_params_t::interrupt_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ph_oem.md#structph__oem__params_1ae8a7cf150979e1e0bc41cb8d9ff7f339) is defined.

[ph_oem_reset_interrupt_pin](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga30f23632123b2635041d0e21a3b844fd) needs to be called in the callback if you use [PH_OEM_IRQ_FALLING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea1eedd530821a380a8bf0069b2c2310d4) or [PH_OEM_IRQ_RISING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea64cc7bed660a33198b9ca108426c090a)

Provide the PH_OEM_PARAM_INTERRUPT_OPTION flag in your makefile. Valid options see: [ph_oem_irq_option_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga80b8082b315169a3cfa8e71287b2fdfe). The default is [PH_OEM_IRQ_BOTH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea2955602537e7974b5f98808ddcc28ce9).

Also provide the [gpio_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga491a2cbfb4e94f2afcc0d5bdef2dc454) as a CFLAG in your makefile. Most likely [GPIO_IN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a3343e227f62c4c536efff81438a8e155). If the pin is to sensitive use [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) for [PH_OEM_IRQ_FALLING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea1eedd530821a380a8bf0069b2c2310d4) or [GPIO_IN_PD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a8b6588cc82579f6044ec1867b964e11c) for [PH_OEM_IRQ_RISING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea64cc7bed660a33198b9ca108426c090a) and [PH_OEM_IRQ_BOTH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea2955602537e7974b5f98808ddcc28ce9). The default is [GPIO_IN_PD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a8b6588cc82579f6044ec1867b964e11c)

#### Parameters
* `dev` device descriptor 

* `cb` callback called when the pH OEM interrupt pin fires 

* `arg` callback argument

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed 

#### Returns
[PH_OEM_INTERRUPT_GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a50eba0da46a1b7d0b35a4fc9fe0e1fab) if the interrupt pin is undefined 

#### Returns
[PH_OEM_GPIO_INIT_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a1458841d75da3d375c5266277564ff69) if initializing the interrupt gpio pin failed

#### `public int `[`ph_oem_reset_interrupt_pin`](#group__drivers__ph__oem_1ga30f23632123b2635041d0e21a3b844fd)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev)` 

The interrupt pin will not auto reset on option [PH_OEM_IRQ_RISING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea64cc7bed660a33198b9ca108426c090a) and [PH_OEM_IRQ_FALLING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gga80b8082b315169a3cfa8e71287b2fdfea1eedd530821a380a8bf0069b2c2310d4) after interrupt fires, so call this function again to reset the pin state.

The interrupt settings are not retained if the power is cut, so you have to call this function again after powering on the device.

#### Parameters
* `dev` device descriptor

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed

#### `public int `[`ph_oem_set_led_state`](#group__drivers__ph__oem_1ga5319d1ffce159800e816c1325b368a80)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,`[`ph_oem_led_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gac7b39997a60eb597cb14d067f562bfee)` state)` 

Set the LED state of the pH OEM sensor by writing to the [PH_OEM_REG_LED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a4f8eef844c23e74d2e1d6cd6c27ef431) register.

#### Parameters
* `dev` device descriptor 

* `state` [ph_oem_led_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gac7b39997a60eb597cb14d067f562bfee)

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed

#### `public int `[`ph_oem_set_device_state`](#group__drivers__ph__oem_1ga7f553d7c75e3e12336628c4ff384e3c8)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,`[`ph_oem_device_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gace6f50a055f37bd6e69170c462c170f5)` state)` 

Sets the device state (active/hibernate) of the pH OEM sensor by writing to the [PH_OEM_REG_HIBERNATE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534afd9796d70d0bbfb709b0e92bda6c3e55) register.

Once the device has been woken up it will continuously take readings every 420ms. Waking the device is the only way to take a reading. Hibernating the device is the only way to stop taking readings.

#### Parameters
* `dev` device descriptor 

* `state` [ph_oem_device_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gace6f50a055f37bd6e69170c462c170f5)

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed

#### `public int `[`ph_oem_start_new_reading`](#group__drivers__ph__oem_1ga7c69721413cd1e6538ce1147e641c324)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev)` 

Starts a new reading by setting the device state to [PH_OEM_TAKE_READINGS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggace6f50a055f37bd6e69170c462c170f5afec2edc47d45159b48af93bf712d3e8b).

If the [ph_oem_params_t::interrupt_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ph_oem.md#structph__oem__params_1ae8a7cf150979e1e0bc41cb8d9ff7f339) is [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) this function will poll every 20ms till a reading is done (~420ms) and stop the device from taking further readings

#### Parameters
* `dev` device descriptor

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed 

#### Returns
[PH_OEM_READ_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a7207224e20a2aae92420ac0ff1d0aa82) if reading from the device failed

#### `public int `[`ph_oem_clear_calibration`](#group__drivers__ph__oem_1gae370e9573d6838746eefc2cdc64583d5)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev)` 

Clears all calibrations previously done.

#### Parameters
* `dev` device descriptor

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed 

#### Returns
[PH_OEM_READ_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a7207224e20a2aae92420ac0ff1d0aa82) if reading from the device failed

#### `public int `[`ph_oem_set_calibration`](#group__drivers__ph__oem_1ga3c09a34270060f83c89f5267d58a2233)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t calibration_value,`[`ph_oem_calibration_option_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaf859a7a988d4650f5c6d449633667673)` option)` 

Sets the [PH_OEM_REG_CALIBRATION_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a2670bd8d9ea3f07b67e5833a77b373d9) register to the calibration_value which the pH OEM sensor will be calibrated to.

Multiply the floating point calibration value of your solution by 1000 e.g. pH calibration solution => 7.002 * 1000 = 7002 = 0x00001B5A

The calibration value will be saved based on the given [ph_oem_calibration_option_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaf859a7a988d4650f5c6d449633667673) and retained after the power is cut.

Calibrating with [PH_OEM_CALIBRATE_MID_POINT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggaf859a7a988d4650f5c6d449633667673acb61f4b3120d133c93615c6a13bd349f) will reset the previous calibrations. Always start with [PH_OEM_CALIBRATE_MID_POINT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggaf859a7a988d4650f5c6d449633667673acb61f4b3120d133c93615c6a13bd349f) if you doing 2 or 3 point calibration

#### Parameters
* `dev` device descriptor 

* `calibration_value` pH value multiplied by 1000 e.g 7,002 * 1000 = 7002 

* `option` [ph_oem_calibration_option_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaf859a7a988d4650f5c6d449633667673)

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed 

#### Returns
[PH_OEM_READ_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a7207224e20a2aae92420ac0ff1d0aa82) if reading from the device failed

#### `public int `[`ph_oem_read_calibration_state`](#group__drivers__ph__oem_1ga90048aec75905488c5c8786148ad3ed6)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t * calibration_state)` 

Read the [PH_OEM_REG_CALIBRATION_CONFIRM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534ad5d8773f6f5b19db61991283d7b33302) register.

After a calibration event has been successfully carried out, the calibration confirmation register will reflect what calibration has been done, by setting bits 0 - 2.

#### Parameters
* `dev` device descriptor 

* `calibration_state` calibration state reflected by bits 0 - 2 
 (0 = low, 1 = mid, 2 = high)

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_READ_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a7207224e20a2aae92420ac0ff1d0aa82) if reading from the device failed

#### `public int `[`ph_oem_set_compensation`](#group__drivers__ph__oem_1gabe87d8f452660dc3956e75140a0aafde)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t temperature_compensation)` 

Sets the [PH_OEM_REG_TEMP_COMPENSATION_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a8ed817ec57616b06b6de37d9c2ef91bd) register to the temperature_compensation value which the pH OEM sensor will use to compensate the reading error.

Multiply the floating point temperature value by 100 e.g. temperature in degree Celsius = 34.26 * 100 = 3426

The temperature compensation will not be retained if the power is cut.

#### Parameters
* `dev` device descriptor 

* `temperature_compensation` valid temperature range is 1 - 20000 (0.01 °C to 200.0 °C)

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_WRITE_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a5d5b7f110a4767f8e371d69057fca1b5) if writing to the device failed 

#### Returns
[PH_OEM_TEMP_OUT_OF_RANGE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a8cb575b4092068b73b68e66dece4a6c8) if the temperature_compensation is not in the valid range

#### `public int `[`ph_oem_read_compensation`](#group__drivers__ph__oem_1ga4b3f8a5f343f7906527ae843397f28a5)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t * temperature_compensation)` 

Reads the [PH_OEM_REG_TEMP_CONFIRMATION_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534ad2636d4aa521ae51004a7191cc327f7e) register to verify the temperature compensation value that was used to take the pH reading is set to the correct temperature.

#### Parameters
* `dev` device descriptor 

* `temperature_compensation` raw temperature compensation value. 
 Divide by 100 for floating point 
 e.g 3426 / 100 = 34.26

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_READ_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a7207224e20a2aae92420ac0ff1d0aa82) if reading from the device failed

#### `public int `[`ph_oem_read_ph`](#group__drivers__ph__oem_1ga2ed33b1757d6297da1f6a23c7c768fce)`(const `[`ph_oem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1gaea361c1d046340542397933bfc69aa66)` * dev,uint16_t * ph_value)` 

Reads the [PH_OEM_REG_PH_READING_BASE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ph__oem__regs_8h_1ae7fbcf4a00512be94584cbcb17ceb534a1fa4ee560bf8a18e35479d2de33b479d) register to get the current pH reading.

#### Parameters
* `dev` device descriptor 

* `ph_value` raw pH value 
 divide by 1000 for floating point 
 e.g 8347 / 1000 = 8.347

#### Returns
[PH_OEM_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6abdee79c2ebbd2d9c05e38ed40eac9d8d) on success 

#### Returns
[PH_OEM_READ_ERR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ggac06302df40bc05bc56dec2ed7f7052b6a7207224e20a2aae92420ac0ff1d0aa82) if reading from the device failed

# struct `ph_oem_params` 

pH OEM sensor params

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structph__oem__params_1acced35a2d9f068f9577c1e351da7fa90) | I2C device the sensor is connected to.
`public uint8_t `[`addr`](#structph__oem__params_1a4583fada1bdfbd7c88f71de1aa897bac) | the slave address of the sensor on the I2C bus
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`interrupt_pin`](#structph__oem__params_1ae8a7cf150979e1e0bc41cb8d9ff7f339) | interrupt pin ([GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not defined)
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`gpio_mode`](#structph__oem__params_1a5d840b4d9a7fec66bff6802bfaa45441) | gpio mode of the interrupt pin
`public `[`ph_oem_irq_option_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga80b8082b315169a3cfa8e71287b2fdfe)` `[`irq_option`](#structph__oem__params_1a832567cf78bfb5d3518fb1ac588ee63f) | behavior of the interrupt pin, disabled by default

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structph__oem__params_1acced35a2d9f068f9577c1e351da7fa90) 

I2C device the sensor is connected to.

#### `public uint8_t `[`addr`](#structph__oem__params_1a4583fada1bdfbd7c88f71de1aa897bac) 

the slave address of the sensor on the I2C bus

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`interrupt_pin`](#structph__oem__params_1ae8a7cf150979e1e0bc41cb8d9ff7f339) 

interrupt pin ([GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not defined)

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`gpio_mode`](#structph__oem__params_1a5d840b4d9a7fec66bff6802bfaa45441) 

gpio mode of the interrupt pin

#### `public `[`ph_oem_irq_option_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga80b8082b315169a3cfa8e71287b2fdfe)` `[`irq_option`](#structph__oem__params_1a832567cf78bfb5d3518fb1ac588ee63f) 

behavior of the interrupt pin, disabled by default

# struct `ph_oem` 

pH OEM device descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ph_oem_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga6d8a51371443cba0c02b3e20f06bb7b7)` `[`params`](#structph__oem_1a383af92b9958ec9685280f1c6293d264) | device driver configuration
`public `[`ph_oem_interrupt_pin_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga46905a646ccbf3030706c31a3c755ab2)` `[`cb`](#structph__oem_1a52e7d1feae81973125adac31966843db) | interrupt pin callback
`public void * `[`arg`](#structph__oem_1a12c53896435adfd170645ee090c7f6ec) | interrupt pin callback param

## Members

#### `public `[`ph_oem_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga6d8a51371443cba0c02b3e20f06bb7b7)` `[`params`](#structph__oem_1a383af92b9958ec9685280f1c6293d264) 

device driver configuration

#### `public `[`ph_oem_interrupt_pin_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ph__oem_1ga46905a646ccbf3030706c31a3c755ab2)` `[`cb`](#structph__oem_1a52e7d1feae81973125adac31966843db) 

interrupt pin callback

#### `public void * `[`arg`](#structph__oem_1a12c53896435adfd170645ee090c7f6ec) 

interrupt pin callback param

