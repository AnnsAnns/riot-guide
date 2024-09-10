---
title: api-drivers_bq2429x.md
description: api-drivers_bq2429x.md
---
# group `drivers_bq2429x` 

Device driver interface for the BQ2429x Single-Cell USB Charger.

BQ2429x series power management ICs by Texas Instruments are controllable by I2C, allowing to change charge parameters in the runtime.

For more information, see the datasheets:

* [BQ24295](https://www.ti.com/lit/ds/symlink/bq24295.pdf)

* [BQ24296](https://www.ti.com/lit/ds/symlink/bq24296.pdf)

* [BQ24297](https://www.ti.com/lit/ds/symlink/bq24297.pdf)

* [BQ24298](https://www.ti.com/lit/ds/symlink/bq24298.pdf)

* [BQ24292I](https://www.ti.com/lit/ds/symlink/bq24292i.pdf)

* [BQ24296M](https://www.ti.com/lit/ds/symlink/bq24296m.pdf)

It can be used for USB OTG to power other devices, see the [bq2429x_enable_otg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gace8cdea31d18cb7a80e38a5988c1e264) and [bq2429x_disable_otg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga8bbcb8046bd0f063e29c7d9bec238434) functions, an additional pin [bq2429x_params_t::otg_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__params__t_1ab194b9668d28a0777d0e40fdc27536d9) can be set to control it also by hardware and these functions will take care of setting it.

To enable/disable charge the functions [bq2429x_enable_charge](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga1fc029a25cabccd8d0494432cbd88b97) and [bq2429x_disable_charge](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga429d05ad56c12511157d1c99bf8a2f70) can be used, and as with the OTG an additional pin [bq2429x_params_t::ce_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__params__t_1aadf8a81bb7e2e60fab663cba86f5bd8a) can be set to control it also by hardware and these functions will take care of setting it.

When a change happens on the FAULT registers of the device the BQ2429x device generates an interrupt to inform when that happens, this functionality has to be enabled with the `bq2429x_int` module and can be used with the [bq2429x_init_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga5e91e0e04a7d5a7bb2c7a4334092a2ef) functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@166`](#group__drivers__bq2429x_1ga6739788b75165c40c5fa298fbd9c18bd)            | Driver return values.
`enum `[`bq2429x_vbus_stat_t`](#group__drivers__bq2429x_1ga5b53160c639c2da0e48fb703b4e1607e)            | Used VBUS type.
`enum `[`bq2429x_chrg_stat_t`](#group__drivers__bq2429x_1ga347892b4ae3ffa10c868f5078573a047)            | Battery charging status.
`enum `[`bq2429x_chrg_fault_t`](#group__drivers__bq2429x_1ga314717e77384489bff9a041536e8c086)            | Charge fault values.
`enum `[`bq2429x_input_voltage_limit_t`](#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)            | Input Voltage Limit (VLIM).
`enum `[`bq2429x_input_current_limit_t`](#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)            | Input Current Limit (ILIM).
`enum `[`bq2429x_charge_current_t`](#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)            | Charge Current (ICHG)
`enum `[`bq2429x_charge_voltage_limit_t`](#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)            | Charge Voltage Limit (VREG).
`public int `[`bq2429x_init`](#group__drivers__bq2429x_1ga1a55ebd75565b44f3b64fefca2a3a16a)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,const `[`bq2429x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__params__t)` * params)`            | Initialize device.
`public int `[`bq2429x_init_int`](#group__drivers__bq2429x_1ga5e91e0e04a7d5a7bb2c7a4334092a2ef)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_int_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gab5673d4d500bf37d61e37cc8a40c432d)` cb,void * arg)`            | Initialize interrupt support for the device.
`public int `[`bq2429x_get_status`](#group__drivers__bq2429x_1ga3b86c44ab761ac7421104eb83103c929)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__status__t)` * status)`            | Get device status.
`public int `[`bq2429x_get_fault`](#group__drivers__bq2429x_1gaba9b0b83a370fe98ac1b68602a25f130)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_fault_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__fault__t)` * fault)`            | Get device faults.
`public int `[`bq2429x_enable_otg`](#group__drivers__bq2429x_1gace8cdea31d18cb7a80e38a5988c1e264)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)`            | Enable OTG.
`public int `[`bq2429x_disable_otg`](#group__drivers__bq2429x_1ga8bbcb8046bd0f063e29c7d9bec238434)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)`            | Disable OTG.
`public int `[`bq2429x_enable_charge`](#group__drivers__bq2429x_1ga1fc029a25cabccd8d0494432cbd88b97)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)`            | Enable battery charging.
`public int `[`bq2429x_disable_charge`](#group__drivers__bq2429x_1ga429d05ad56c12511157d1c99bf8a2f70)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)`            | Disable battery charging.
`public int `[`bq2429x_set_vlim`](#group__drivers__bq2429x_1gaae3ef592e2b7a3b0a779c0539a013b3e)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)` vlim)`            | Set Input Voltage Limit.
`public int `[`bq2429x_get_vlim`](#group__drivers__bq2429x_1ga1b811ba0c53464e1367102a190760c30)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)` * vlim)`            | Get Input Voltage Limit.
`public int `[`bq2429x_set_ilim`](#group__drivers__bq2429x_1ga942f10123765e7ed0948f697e7b6cb78)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_current_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)` ilim)`            | Set Input Current Limit.
`public int `[`bq2429x_get_ilim`](#group__drivers__bq2429x_1ga20362a4fa4f878473f3c43a4184c6a87)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_current_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)` * ilim)`            | Get Input Current Limit.
`public int `[`bq2429x_set_ichg`](#group__drivers__bq2429x_1gacc98a4aca3f42c0101067485bfd0da9d)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)` ichg)`            | Set Charge Current.
`public int `[`bq2429x_get_ichg`](#group__drivers__bq2429x_1ga24ffbc9562f25b94ee9ae77af2e22da4)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)` * ichg)`            | Get Charge Current.
`public int `[`bq2429x_set_vreg`](#group__drivers__bq2429x_1ga1893434ab43a223b7e92b2735efd79d2)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)` vreg)`            | Set Charge Voltage Limit.
`public int `[`bq2429x_get_vreg`](#group__drivers__bq2429x_1ga505269e63ed5e478b421a10130cc358d)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)` * vreg)`            | Get Charge Voltage Limit.
`struct `[`bq2429x_status_t`](#structbq2429x__status__t) | Device status.
`struct `[`bq2429x_fault_t`](#structbq2429x__fault__t) | Device faults.
`struct `[`bq2429x_params_t`](#structbq2429x__params__t) | BQ2429x device parameters.
`struct `[`bq2429x_t`](#structbq2429x__t) | BQ2429x device descriptor.

## Members

#### `enum `[`@166`](#group__drivers__bq2429x_1ga6739788b75165c40c5fa298fbd9c18bd) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_OK            | Everything is ok.
BQ2429X_ERR_I2C            | I2C error.
BQ2429X_ERR_GPIO            | GPIO initialization error.

Driver return values.

#### `enum `[`bq2429x_vbus_stat_t`](#group__drivers__bq2429x_1ga5b53160c639c2da0e48fb703b4e1607e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_VBUS_NONE            | No input source detected.
BQ2429X_VBUS_USB_CHARGER            | USB charger input.
BQ2429X_VBUS_AP_CHARGER            | Adapter port charge input.
BQ2429X_VBUS_OTG            | VBUS is used for OTG.

Used VBUS type.

#### `enum `[`bq2429x_chrg_stat_t`](#group__drivers__bq2429x_1ga347892b4ae3ffa10c868f5078573a047) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_CHARGE_NONE            | The device is not charging a battery.
BQ2429X_CHARGE_PRE            | Pre-charge state.
BQ2429X_CHARGE_FAST            | Fast charging.
BQ2429X_CHARGE_DONE            | Charging done.

Battery charging status.

#### `enum `[`bq2429x_chrg_fault_t`](#group__drivers__bq2429x_1ga314717e77384489bff9a041536e8c086) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429x_CHRG_FAULT_NORMAL            | No fault, normal.
BQ2429x_CHRG_FAULT_INPUT            | Input fault (OVP or bad source)
BQ2429x_CHRG_FAULT_THERMAL_SHUTDOWN            | Thermal shutdown.
BQ2429x_CHRG_FAULT_CHARGE_TIMER_EXPIRATION            | Charge timer expiration.

Charge fault values.

#### `enum `[`bq2429x_input_voltage_limit_t`](#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_VLIM_3880            | 3880 mV
BQ2429X_VLIM_3960            | 3960 mV
BQ2429X_VLIM_4040            | 4040 mV
BQ2429X_VLIM_4120            | 4120 mV
BQ2429X_VLIM_4200            | 4200 mV
BQ2429X_VLIM_4280            | 4280 mV
BQ2429X_VLIM_4360            | 4360 mV
BQ2429X_VLIM_4440            | 4440 mV
BQ2429X_VLIM_4520            | 4520 mV
BQ2429X_VLIM_4600            | 4600 mV
BQ2429X_VLIM_4680            | 4680 mV
BQ2429X_VLIM_4760            | 4760 mV
BQ2429X_VLIM_4840            | 4840 mV
BQ2429X_VLIM_4920            | 4920 mV
BQ2429X_VLIM_5000            | 5000 mV
BQ2429X_VLIM_5080            | 5080 mV

Input Voltage Limit (VLIM).

#### `enum `[`bq2429x_input_current_limit_t`](#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_ILIM_100            | 100 mA
BQ2429X_ILIM_150            | 150 mA
BQ2429X_ILIM_500            | 500 mA
BQ2429X_ILIM_900            | 900 mA
BQ2429X_ILIM_1000            | 1000 mA
BQ2429X_ILIM_1500            | 1500 mA
BQ2429X_ILIM_2000            | 2000 mA
BQ2429X_ILIM_3000            | 3000 mA

Input Current Limit (ILIM).

#### `enum `[`bq2429x_charge_current_t`](#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_ICHG_512            | 512 mA
BQ2429X_ICHG_1024            | 1024 mA
BQ2429X_ICHG_2048            | 2048 mA
BQ2429X_ICHG_3008            | 4032 mA
BQ2429X_ICHG_4032            | 4544 mA
BQ2429X_ICHG_4544            | 

Charge Current (ICHG)

#### `enum `[`bq2429x_charge_voltage_limit_t`](#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BQ2429X_VREG_3504            | 3504 mV
BQ2429X_VREG_3600            | 3600 mV
BQ2429X_VREG_3808            | 3808 mV
BQ2429X_VREG_3904            | 3904 mV
BQ2429X_VREG_4000            | 4000 mV
BQ2429X_VREG_4112            | 4112 mV
BQ2429X_VREG_4208            | 4208 mV
BQ2429X_VREG_4304            | 4304 mV
BQ2429X_VREG_4352            | 4352 mV
BQ2429X_VREG_4400            | 4400 mV

Charge Voltage Limit (VREG).

#### `public int `[`bq2429x_init`](#group__drivers__bq2429x_1ga1a55ebd75565b44f3b64fefca2a3a16a)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,const `[`bq2429x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__params__t)` * params)` 

Initialize device.

`dev` != NULL && `params` != NULL

#### Parameters
* `dev` Device descriptor. 

* `params` Device parameters.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure. 

#### Returns
BQ2429X_ERR_GPIO on GPIO initialization failure (CE or OTG pin failed).

#### `public int `[`bq2429x_init_int`](#group__drivers__bq2429x_1ga5e91e0e04a7d5a7bb2c7a4334092a2ef)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_int_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gab5673d4d500bf37d61e37cc8a40c432d)` cb,void * arg)` 

Initialize interrupt support for the device.

`dev` != NULL && `cb` != NULL

The callback `cb` is called in an ISR context, so keep in mind that heavy work shouldn't be done there.

[bq2429x_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga1a55ebd75565b44f3b64fefca2a3a16a) MUST have been called before!

#### Parameters
* `dev` Device descriptor. 

* `cb` Callback called on interrupt. 

* `arg` Argument to be passed when the callback is called.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_GPIO on GPIO initialization failure.

#### `public int `[`bq2429x_get_status`](#group__drivers__bq2429x_1ga3b86c44ab761ac7421104eb83103c929)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__status__t)` * status)` 

Get device status.

`dev` != NULL && `status` != NULL

#### Parameters
* `dev` Device descriptor. 

* `status` Pointer where device status will be stored.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C error.

#### `public int `[`bq2429x_get_fault`](#group__drivers__bq2429x_1gaba9b0b83a370fe98ac1b68602a25f130)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_fault_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__fault__t)` * fault)` 

Get device faults.

`dev` != NULL && `fault` != NULL

#### Parameters
* `dev` Device descriptor. 

* `fault` Pointer where device faults will be stored.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C error.

#### `public int `[`bq2429x_enable_otg`](#group__drivers__bq2429x_1gace8cdea31d18cb7a80e38a5988c1e264)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)` 

Enable OTG.

This allows powering USB devices from the same port, i.e. to provide power or charge other devices.

This will disable charging of the battery, if previously [bq2429x_enable_charge](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga1fc029a25cabccd8d0494432cbd88b97) was called, to enable charge again only disable OTG mode with [bq2429x_disable_otg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga8bbcb8046bd0f063e29c7d9bec238434).

`dev` != NULL

#### Parameters
* `dev` Device descriptor.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_disable_otg`](#group__drivers__bq2429x_1ga8bbcb8046bd0f063e29c7d9bec238434)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)` 

Disable OTG.

`dev` != NULL

#### Parameters
* `dev` Device descriptor.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_enable_charge`](#group__drivers__bq2429x_1ga1fc029a25cabccd8d0494432cbd88b97)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)` 

Enable battery charging.

`dev` != NULL

#### Parameters
* `dev` Device descriptor.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_disable_charge`](#group__drivers__bq2429x_1ga429d05ad56c12511157d1c99bf8a2f70)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev)` 

Disable battery charging.

`dev` != NULL

#### Parameters
* `dev` Device descriptor.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_set_vlim`](#group__drivers__bq2429x_1gaae3ef592e2b7a3b0a779c0539a013b3e)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)` vlim)` 

Set Input Voltage Limit.

This is a limit on the lower bound of the voltage, for example, if the VLIM is set to [BQ2429X_VLIM_5000](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gga147e79fb231df3194a1bfed4a7ddd784a0becf9a2b4ef60939dee5cc1faf21139) (5.0V) and the supply voltage is lower than it (4.8V), it will result in a fault and no power will be delivered through the output pin (SYS pin).

`dev` != NULL

#### Parameters
* `dev` Device descriptor. 

* `vlim` Voltage limit.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_get_vlim`](#group__drivers__bq2429x_1ga1b811ba0c53464e1367102a190760c30)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)` * vlim)` 

Get Input Voltage Limit.

`dev` != NULL && `vlim` != NULL

#### Parameters
* `dev` Device descriptor. 

* `vlim` Voltage limit.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_set_ilim`](#group__drivers__bq2429x_1ga942f10123765e7ed0948f697e7b6cb78)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_current_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)` ilim)` 

Set Input Current Limit.

Sets the maximum current limit, this limit is also limited by hardware by setting a resistor to the VLIM pin which sets (by hardware) the upper limit.

`dev` != NULL

#### Parameters
* `dev` Device descriptor. 

* `ilim` Current limit.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_get_ilim`](#group__drivers__bq2429x_1ga20362a4fa4f878473f3c43a4184c6a87)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_input_current_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)` * ilim)` 

Get Input Current Limit.

`dev` != NULL && `ilim` != NULL

#### Parameters
* `dev` Device descriptor. 

* `ilim` Current limit.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_set_ichg`](#group__drivers__bq2429x_1gacc98a4aca3f42c0101067485bfd0da9d)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)` ichg)` 

Set Charge Current.

`dev` != NULL

#### Parameters
* `dev` Device descriptor. 

* `ichg` Charge current.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_get_ichg`](#group__drivers__bq2429x_1ga24ffbc9562f25b94ee9ae77af2e22da4)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)` * ichg)` 

Get Charge Current.

`dev` != NULL && `ichg` != NULL

#### Parameters
* `dev` Device descriptor. 

* `ichg` Charge current.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_set_vreg`](#group__drivers__bq2429x_1ga1893434ab43a223b7e92b2735efd79d2)`(`[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)` vreg)` 

Set Charge Voltage Limit.

`dev` != NULL

#### Parameters
* `dev` Device descriptor. 

* `vreg` Voltage limit.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

#### `public int `[`bq2429x_get_vreg`](#group__drivers__bq2429x_1ga505269e63ed5e478b421a10130cc358d)`(const `[`bq2429x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__t)` * dev,`[`bq2429x_charge_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)` * vreg)` 

Get Charge Voltage Limit.

`dev` != NULL && `vreg` != NULL

#### Parameters
* `dev` Device descriptor. 

* `vreg` Voltage limit.

#### Returns
BQ2429X_OK on success. 

#### Returns
BQ2429X_ERR_I2C on I2C failure.

# struct `bq2429x_status_t` 

Device status.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bq2429x_vbus_stat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga5b53160c639c2da0e48fb703b4e1607e)` `[`vbus`](#structbq2429x__status__t_1a94c4a7099d5699aa44808bb192db9265) | VBUS status.
`public `[`bq2429x_chrg_stat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga347892b4ae3ffa10c868f5078573a047)` `[`chrg`](#structbq2429x__status__t_1af02087f7e398722ba1043ac18aee3e59) | Charge status.
`public bool `[`dpm`](#structbq2429x__status__t_1a7ecb9bb360c95a4718b51693fe23b91d) | DPM status.
`public bool `[`pg`](#structbq2429x__status__t_1a41d59508ef937c38b9aae663be0bfc5e) | Power good status.
`public bool `[`therm`](#structbq2429x__status__t_1a8e60eb40dd1167aa90fbe6455eeb1e66) | Thermal regulation.
`public bool `[`vsys`](#structbq2429x__status__t_1a6699077d964ac71d5b092fdfbe15b082) | VSYSMIN regulation.

## Members

#### `public `[`bq2429x_vbus_stat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga5b53160c639c2da0e48fb703b4e1607e)` `[`vbus`](#structbq2429x__status__t_1a94c4a7099d5699aa44808bb192db9265) 

VBUS status.

#### `public `[`bq2429x_chrg_stat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga347892b4ae3ffa10c868f5078573a047)` `[`chrg`](#structbq2429x__status__t_1af02087f7e398722ba1043ac18aee3e59) 

Charge status.

#### `public bool `[`dpm`](#structbq2429x__status__t_1a7ecb9bb360c95a4718b51693fe23b91d) 

DPM status.

false = Not in DPM. true = VINDPM or IINDMP.

#### `public bool `[`pg`](#structbq2429x__status__t_1a41d59508ef937c38b9aae663be0bfc5e) 

Power good status.

false = Not Power Good true = Power Good

#### `public bool `[`therm`](#structbq2429x__status__t_1a8e60eb40dd1167aa90fbe6455eeb1e66) 

Thermal regulation.

false = Normal true = In thermal regulation

#### `public bool `[`vsys`](#structbq2429x__status__t_1a6699077d964ac71d5b092fdfbe15b082) 

VSYSMIN regulation.

false = Not in VSYSMIN regulation (BAT voltage > VSYSMIN) true = In VSYSMIN regulation (BAT voltage < VSYSMIN)

# struct `bq2429x_fault_t` 

Device faults.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`watchdog`](#structbq2429x__fault__t_1aa05e3ff75dd20bb4d4cd0df3aa3a90fd) | Watchdog fault.
`public bool `[`otg`](#structbq2429x__fault__t_1ac45605c958406331dbee0d49ca88bbfb) | OTG fault.
`public `[`bq2429x_chrg_fault_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga314717e77384489bff9a041536e8c086)` `[`chrg`](#structbq2429x__fault__t_1afa46b1af3f59e3f7d9054da693f0479b) | Charge fault.
`public bool `[`bat`](#structbq2429x__fault__t_1ab2593afa7e30b2a4a736befb722c7fe9) | Battery fault.
`public bool `[`ntc_fault_1`](#structbq2429x__fault__t_1a243e22ecce76f62b252f9efc3b5f5fcc) | NTC fault (1).
`public bool `[`ntc_fault_0`](#structbq2429x__fault__t_1ac115e6f80f32f7dfa6b38a9bdd7b693d) | NTC fault (0).

## Members

#### `public bool `[`watchdog`](#structbq2429x__fault__t_1aa05e3ff75dd20bb4d4cd0df3aa3a90fd) 

Watchdog fault.

false = Normal. true = Watchdog timer expiration.

#### `public bool `[`otg`](#structbq2429x__fault__t_1ac45605c958406331dbee0d49ca88bbfb) 

OTG fault.

false = Normal. true = VBUS overloaded in OTG, or VBUS OVP, or battery is too low.

#### `public `[`bq2429x_chrg_fault_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga314717e77384489bff9a041536e8c086)` `[`chrg`](#structbq2429x__fault__t_1afa46b1af3f59e3f7d9054da693f0479b) 

Charge fault.

#### `public bool `[`bat`](#structbq2429x__fault__t_1ab2593afa7e30b2a4a736befb722c7fe9) 

Battery fault.

#### `public bool `[`ntc_fault_1`](#structbq2429x__fault__t_1a243e22ecce76f62b252f9efc3b5f5fcc) 

NTC fault (1).

false = Normal. true = Hot note.

#### `public bool `[`ntc_fault_0`](#structbq2429x__fault__t_1ac115e6f80f32f7dfa6b38a9bdd7b693d) 

NTC fault (0).

false = Normal. true = Cold note.

# struct `bq2429x_params_t` 

BQ2429x device parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbq2429x__params__t_1a3425319d693f39dfa21778bc8b5f4753) | I2C device.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`ce_pin`](#structbq2429x__params__t_1aadf8a81bb7e2e60fab663cba86f5bd8a) | Charge Enable pin (optional)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`otg_pin`](#structbq2429x__params__t_1ab194b9668d28a0777d0e40fdc27536d9) | OTG Enable pin (optional)
`public `[`bq2429x_input_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)` `[`vlim`](#structbq2429x__params__t_1af96524eb556ac7dd36d21e45f843fbd8) | Voltage limit.
`public `[`bq2429x_input_current_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)` `[`ilim`](#structbq2429x__params__t_1ad65d9d7b82eef9faa2079ca8741edb87) | Current limit.
`public `[`bq2429x_charge_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)` `[`ichg`](#structbq2429x__params__t_1a35f462f47f838a5d35cec30cd3e11c12) | Charge current limit.
`public `[`bq2429x_charge_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)` `[`vreg`](#structbq2429x__params__t_1a8180b23d06b038dd401565da7313d840) | Charge voltage limit.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbq2429x__params__t_1a3425319d693f39dfa21778bc8b5f4753) 

I2C device.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`ce_pin`](#structbq2429x__params__t_1aadf8a81bb7e2e60fab663cba86f5bd8a) 

Charge Enable pin (optional)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`otg_pin`](#structbq2429x__params__t_1ab194b9668d28a0777d0e40fdc27536d9) 

OTG Enable pin (optional)

#### `public `[`bq2429x_input_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga147e79fb231df3194a1bfed4a7ddd784)` `[`vlim`](#structbq2429x__params__t_1af96524eb556ac7dd36d21e45f843fbd8) 

Voltage limit.

#### `public `[`bq2429x_input_current_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga6b484589beabddf059f55ddf5bcf24ed)` `[`ilim`](#structbq2429x__params__t_1ad65d9d7b82eef9faa2079ca8741edb87) 

Current limit.

#### `public `[`bq2429x_charge_current_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1gad5d68720bcfc30c3258606e99373501c)` `[`ichg`](#structbq2429x__params__t_1a35f462f47f838a5d35cec30cd3e11c12) 

Charge current limit.

#### `public `[`bq2429x_charge_voltage_limit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bq2429x_1ga16029cb82600977d1165c47492c82a99)` `[`vreg`](#structbq2429x__params__t_1a8180b23d06b038dd401565da7313d840) 

Charge voltage limit.

# struct `bq2429x_t` 

BQ2429x device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bq2429x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__params__t)` `[`params`](#structbq2429x__t_1aa2d27f43a50f81ec5d84623868a44b1c) | Device parameters.

## Members

#### `public `[`bq2429x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bq2429x.md#structbq2429x__params__t)` `[`params`](#structbq2429x__t_1aa2d27f43a50f81ec5d84623868a44b1c) 

Device parameters.

