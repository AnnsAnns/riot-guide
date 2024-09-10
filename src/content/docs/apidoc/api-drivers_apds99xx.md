---
title: api-drivers_apds99xx.md
description: api-drivers_apds99xx.md
---
# group `drivers_apds99xx` 

Device driver for Broadcom APDS99XX proximity and ambient light sensors.

The driver can be used with following Broadcom sensors: APDS9900, APDS9901, APDS9930, APDS9950, APDS9960

The driver is divided into two parts:

* **Basic driver**`apds99xx`

The base driver `apds99xx` only supports a basic set of functions and has therefore a small size. The procedure for retrieving new data is polling. Ambient light and proximity sensing are supported.

* **Fully functional driver**`apds99xx_full`

The fully functional driver `apds99xx_full` supports all the features supported by the base driver, as well as all other sensor features, including interrupts and their configuration. Data-ready interrupts can be used to retrieve data. In addition, threshold interrupts can be used and configured.

In addition to specifying whether the base driver `apds99xx` or the fully featured driver `apds99xx_full` should be used, the application has to declare used sensor by means of various pseudomodules as follows:  APDS9900:     USEMODULE=apds9900
 APDS9901:     USEMODULE=apds9901
 APDS9930:     USEMODULE=apds9930
 APDS9950:     USEMODULE=apds9950
 APDS9960:     USEMODULE=apds9960
 This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

Measurement CycleAPDS99XX sensor **measurement cycles** consists of the following **three steps** in the given order:

* **Proximity Sensing**

The sensor generates a number of IR LED pulses and measures the amount of the IR energy reflected by an object to determine its distance. The time required for proximity sensing (`t_prx` ) results from the time it takes to generate the IR LED pulses and to accumulate the reflected IR energy (`t_prx_acc`) as well as the time for the ADC conversion (`t_prx_cnv`).

t_prx = t_prx_acc + t_prx_cnv

The time to generate the IR LED pulses and accumulate reflected IR energy `t_prx_acc` is defined by the number of pulses (parameter [apds99xx_params_t::prx_pulses](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1acacd3a0570fbdbbace726e00f87bd773)) and the period of one pulse `t_prx_pulse`. t_prx_acc = prx_pulses * t_prx_pulse
 The ADC conversion time `t_prx_cnv` and the period of one pulse `t_prx_pulse` depend on used sensor and are available as the defines [APDS99XX_T_PRX_CNV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gaa3762beec647cda32361349791ce57e7) and [APDS99XX_T_PRX_PULSE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gaccc5305d30cde44861c6651d4191c460) for calculations by the application. 
Sensor|t_prx_pulse<br/>APDS99XX_T_PRX_PULSE   |t_prx_cnv<br/>APDS99XX_T_PRX_CNV
--------- | --------- | ---------
APDS9900   |0.016 ms   |2.720 ms
APDS9901   |0.016 ms   |2.720 ms
APDS9930   |0.016 ms   |2.730 ms
APDS9950   |0.014 ms   |2.400 ms
APDS9960   |0.036 ms   |0.814 ms

Proximity sensing uses the gain specified by parameter [apds99xx_params_t::prx_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1aad606a9b89d1a83625843738eb9e5778) and the LED current specified by parameter [apds99xx_params_t::prx_drive](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1adfa2cac890d4a619703f2caccfc183aa).

* **Wait**

The sensor waits for `t_wait` which is defined by the number of waiting steps `wait_steps` ([apds99xx_params_t::wait_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a5e72cf4feaba8ec3f30d20d36c4c2ad4)), the time per step `t_step`, and the wait long flag ([apds99xx_params_t::wait_long](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1af3ec0e60fa2ce460c375919f3ab7015b)); t_wait = wait_steps * t_wait_step            (if wait_long is false)
t_wait = wait_steps * t_wait_step * 12       (if wait_long is true)
 Parameter [apds99xx_params_t::wait_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a5e72cf4feaba8ec3f30d20d36c4c2ad4) can range from 0 to 256. If [apds99xx_params_t::wait_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a5e72cf4feaba8ec3f30d20d36c4c2ad4) is 0, waiting is disabled. The time per step `t_wait_step` depends on used sensor and is available as the define [APDS99XX_T_WAIT_STEP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga834a9a427c383a2e6880d28eeef995b4) for calculations by the application. 
Sensor|t_als_step<br/>APDS99XX_T_WAIT_STEP   |t_wait (wait_long=0) |t_wait (wait_long=1)
--------- | --------- | --------- | ---------
APDS9900   |2.72 ms   |`wait_steps` * 2.72 ms   |`wait_steps` * 12 * 2.72 ms
APDS9901   |2.72 ms   |`wait_steps` * 2.72 ms   |`wait_steps` * 12 * 2.72 ms
APDS9930   |2.73 ms   |`wait_steps` * 2.73 ms   |`wait_steps` * 12 * 2.73 ms
APDS9950   |2.40 ms   |`wait_steps` * 2.40 ms   |`wait_steps` * 12 * 2.40 ms
APDS9960   |2.78 ms   |`wait_steps` * 2.78 ms   |`wait_steps` * 12 * 2.78 ms

* **Ambient Light Sensing (ALS)**

The sensor converts the amplified photodiode currents using integrating ADCs. The time required for ALS is determined by the ALS integration time `t_als_int`, which is defined as the number of integration steps `als_steps` (parameter [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5)) and the time per step `t_als_step`. t_als_int = als_steps * t_als_step
 Parameter [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) can range from 0 to 256. If [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) is 0, ALS is disabled. The time per step `t_als_step` depends on used sensor and is available as the define [APDS99XX_T_ALS_STEP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga22175e4925362bae95d45ce26cb73202) for calculations by the application.

The ALS integration time in steps `als_steps` (parameter [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5)) affects the resolution and the full scale range `cnt_als_max` of ALS data. cnt_als_max = als_steps * cnts_p_step
 The counts per step `cnts_p_step` depend on used sensor and is available as defines [APDS99XX_CNTS_P_STEP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga616c0877c10bf45b4f9a293ae223d32f) for calculations by the application

ALS uses the gain specified by parameter [apds99xx_params_t::als_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a587f685eb3c7ad170181fdacda1411f3). 
Sensor|t_als_step<br/>APDS99XX_T_ALS_STEP   |cnts_p_step<br/>APDS99XX_CNTS_P_STEP   |t_als_int|cnt_als_max
--------- | --------- | --------- | --------- | ---------
APDS9900   |2.72 ms   |1023   |`als_steps` * 2.72 ms   |`als_steps` * 1023
APDS9901   |2.72 ms   |1023   |`als_steps` * 2.72 ms   |`als_steps` * 1023
APDS9930   |2.73 ms   |1023   |`als_steps` * 2.73 ms   |`als_steps` * 1023
APDS9950   |2.40 ms   |1024   |`als_steps` * 2.40 ms   |`als_steps` * 1024
APDS9960   |2.78 ms   |1025   |`als_steps` * 2.78 ms   |`als_steps` * 1025

The overall measurement cycle time is given by: t_cycle = t_prx + t_wait + t_als_int
 For a given ALS integration time and a given proximity sensing time, the waiting time can be used to tune the overall measurement cycle time.

InterruptsWith the `apds99xx_full` driver, interrupts can be used either to fetch ALS and proximity data or to detect when these data exceed defined thresholds.

To use interrupts, the application must call the [apds99xx_int_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga49cf8d6e99d38576697d504ad4b37923) function to specify an [apds99xx_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t) interrupt configuration and an ISR with an optional argument that is invoked when an interrupt is raised. For details about configuring and enabling the interrupts, see [apds99xx_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t).

The ISR of the application is executed in the interrupt context. Therefore, it must not be blocking or time consuming. In addition, it must not access the sensor directly via I2C. It should only indicate to the waiting application that an interrupt has occurred, which is then handled in the thread context.

While an interrupt is being serviced, the application can use the [apds99xx_int_source](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga280bcc8343239cd8712f57b1f578afbb) function to query the type of interrupts triggered by the sensor. In addition, the function resets the interrupt signal.

Since the interrupt signal is only reset by the function [apds99xx_int_source](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga280bcc8343239cd8712f57b1f578afbb), this function [apds99xx_int_source](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga280bcc8343239cd8712f57b1f578afbb) must be executed by application, even if the type of the triggered interrupt is not of interest.

For using interrupts, the GPIO to which the sensor's **INT** output pin is connected has to be defined by the application in configuration parameters. The GPIO is initialized by the driver as soon as the interrupt configuration with the function # apds99xx_int_config is specified.

Illuminance in Lux and RGB count valuesFor all sensors, the clear channel and the RGB channels provide only count values. APDS9900, APDS9901, and APDS9930 have an IR photodiode in addition to the clear channel photodiode, which can be used to determine the illuminance in Lux with an algorithm described in their datasheets.

Unfortunately, APDS9950 and APDS9960 do not have such an additional IR photodiode, and there is no document which describes an approach to calculate the illuminance from the RGB channels. Therefore, it is not possible to determine the illuminance for these sensors.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`APDS99XX_I2C_ADDRESS`](#group__drivers__apds99xx_1gaa91af6893c353a898b6607491430b35b)            | APDS99XX I2C addresses.
`enum `[`apds99xx_error_codes_t`](#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)            | Definition of error codes.
`enum `[`apds99xx_als_gain_t`](#group__drivers__apds99xx_1gaf267b79e5997a3ecb7f812bf70c59f1f)            | Ambient light sensing (ALS) gain.
`enum `[`apds99xx_prx_gain_t`](#group__drivers__apds99xx_1ga239ce6b502d9d5a3649a58f44d20529a)            | Proximity sensing (PRX) gain.
`enum `[`apds99xx_prx_drive_t`](#group__drivers__apds99xx_1ga5e46d7aeab7b9a2a7e37f47501f1d20b)            | Proximity sensing (PRX) LED drive strength.
`public int `[`apds99xx_init`](#group__drivers__apds99xx_1gaf7659fc60e0603c57eb902533a84cd37)`(`[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,const `[`apds99xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t)` * params)`            | Initialize the APDS99XX sensor device.
`public int `[`apds99xx_data_ready_als`](#group__drivers__apds99xx_1ga7e18dc27475ccda7f22e004fc31b76d7)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)`            | Ambient light sensing (ALS) data-ready status function.
`public int `[`apds99xx_read_als_raw`](#group__drivers__apds99xx_1gaacacb08da41256b0cd4ce0b56692c99f)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,uint16_t * raw)`            | Read one raw data sample of ambient light sensing (ALS)
`public int `[`apds99xx_read_illuminance`](#group__drivers__apds99xx_1ga9a6cb908585f9e6872d10028c75325f9)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,uint16_t * lux)`            | Read one data sample of illuminance in lux.
`public int `[`apds99xx_read_rgb_raw`](#group__drivers__apds99xx_1gaeeb1b7c6fc310cdd771b0c700336962b)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,`[`apds99xx_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#unionapds99xx__rgb__t)` * rgb)`            | Read one raw RGB color data sample (APDS9950 and APDS9960 only)
`public int `[`apds99xx_data_ready_prx`](#group__drivers__apds99xx_1ga1fa6babf96889d49ce87a7cb779e1ee8)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)`            | Proximity sensing (PRX) data-ready status function.
`public int `[`apds99xx_read_prx_raw`](#group__drivers__apds99xx_1gaa0015301edebffd9c7d62d7d6ce82736)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,uint16_t * prx)`            | Read one data sample of proximity sensing (PRX)
`public int `[`apds99xx_power_down`](#group__drivers__apds99xx_1ga0a04b0acc5c717828f10a2bba9b1bfa5)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)`            | Power down the sensor.
`public int `[`apds99xx_power_up`](#group__drivers__apds99xx_1gab36b15a30dad65a5ebf7ec9d69e16239)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)`            | Power up the sensor.
`public int `[`apds99xx_int_config`](#group__drivers__apds99xx_1ga49cf8d6e99d38576697d504ad4b37923)`(`[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,`[`apds99xx_int_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t)` * cfg,`[`apds99xx_isr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga02ff2017e4a698ddda8c4d34978bfffb)` isr,void * isr_arg)`            | Configure the interrupts of the sensor.
`public int `[`apds99xx_int_source`](#group__drivers__apds99xx_1ga280bcc8343239cd8712f57b1f578afbb)`(`[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,`[`apds99xx_int_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__source__t)` * src)`            | Get the source of an interrupt.
`struct `[`apds99xx_params_t`](#structapds99xx__params__t) | APDS99XX device initialization parameters.
`struct `[`apds99xx_int_config_t`](#structapds99xx__int__config__t) | Interrupt configuration.
`struct `[`apds99xx_int_source_t`](#structapds99xx__int__source__t) | Interrupt source.
`struct `[`apds99xx_t`](#structapds99xx__t) | APDS99XX sensor device data structure type.
`union `[`apds99xx_rgb_t`](#unionapds99xx__rgb__t) | RGB count value data structure (APDS9950 and APDS9960 only)

## Members

#### `define `[`APDS99XX_I2C_ADDRESS`](#group__drivers__apds99xx_1gaa91af6893c353a898b6607491430b35b) 

APDS99XX I2C addresses.

#### `enum `[`apds99xx_error_codes_t`](#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
APDS99XX_OK            | success
APDS99XX_ERROR_I2C            | I2C communication error.
APDS99XX_ERROR_WRONG_ID            | wrong id read
APDS99XX_ERROR_NO_DATA            | no data are available
APDS99XX_ERROR_RAW_DATA            | reading raw data failed

Definition of error codes.

#### `enum `[`apds99xx_als_gain_t`](#group__drivers__apds99xx_1gaf267b79e5997a3ecb7f812bf70c59f1f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
APDS99XX_ALS_GAIN_1            | 1 x gain (default)
APDS99XX_ALS_GAIN_8            | 8 x gain
APDS99XX_ALS_GAIN_16            | 16 x gain
APDS99XX_ALS_GAIN_64            | 64 x gain (APDS9950, APDS9960 only)
APDS99XX_ALS_GAIN_120            | 120 x gain (APDS9900, APDS9901, APDS9930 only)

Ambient light sensing (ALS) gain.

#### `enum `[`apds99xx_prx_gain_t`](#group__drivers__apds99xx_1ga239ce6b502d9d5a3649a58f44d20529a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
APDS99XX_PRX_GAIN_1            | 1 x gain (default)
APDS99XX_PRX_GAIN_2            | 2 x gain (APDS9930, APDS9960 only)
APDS99XX_PRX_GAIN_4            | 4 x gain (APDS9930, APDS9960 only)
APDS99XX_PRX_GAIN_8            | 8 x gain (APDS9930, APDS9960 only)

Proximity sensing (PRX) gain.

#### `enum `[`apds99xx_prx_drive_t`](#group__drivers__apds99xx_1ga5e46d7aeab7b9a2a7e37f47501f1d20b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
APDS99XX_PRX_DRIVE_100            | 100.0 mA (default)
APDS99XX_PRX_DRIVE_50            | 50.0 mA
APDS99XX_PRX_DRIVE_25            | 25.0 mA
APDS99XX_PRX_DRIVE_12_5            | 12.5 mA

Proximity sensing (PRX) LED drive strength.

#### `public int `[`apds99xx_init`](#group__drivers__apds99xx_1gaf7659fc60e0603c57eb902533a84cd37)`(`[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,const `[`apds99xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t)` * params)` 

Initialize the APDS99XX sensor device.

This function resets the sensor and initializes the sensor according to given initialization parameters. All registers are reset to default values.

#### Parameters
* `dev` device descriptor of APDS99XX sensor to be initialized 

* `params` configuration parameters, see [apds99xx_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t)

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` a negative error code on error, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_data_ready_als`](#group__drivers__apds99xx_1ga7e18dc27475ccda7f22e004fc31b76d7)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)` 

Ambient light sensing (ALS) data-ready status function.

The function reads the ALS valid flag in status register and returns. It can be used for polling new ambient light sensing data.

#### Parameters
* `dev` device descriptor of APDS99XX sensor

#### Parameters
* `APDS99XX_OK` new abmient light data available 

* `APDS99XX_ERROR_NO_DATA` no new abmient light data available 

* `APDS99XX_ERROR_*` negative error code, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_read_als_raw`](#group__drivers__apds99xx_1gaacacb08da41256b0cd4ce0b56692c99f)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,uint16_t * raw)` 

Read one raw data sample of ambient light sensing (ALS)

Raw ambient light sensing (ALS) data are available as 16-bit count values (cnt_als). The range of these count values depends on the ALS integration time [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) and the ALS gain [apds99xx_params_t::als_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a587f685eb3c7ad170181fdacda1411f3). The maximum count value (cnt_als_max) is:  cnt_als_max = APDS99XX_CNTS_P_STEP * als_steps * als_gain
 If there are no new data ready to read, last valid data sample is returned. Function [apds99xx_data_ready_als](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga7e18dc27475ccda7f22e004fc31b76d7) could be used to check whether new data are available before this function is called.

#### Parameters
* `dev` device descriptor of APDS99XX sensor 

* `raw` raw ambient light sensing data as count value

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` negative error code, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_read_illuminance`](#group__drivers__apds99xx_1ga9a6cb908585f9e6872d10028c75325f9)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,uint16_t * lux)` 

Read one data sample of illuminance in lux.

Illuminance in lux is computed from raw ambient light sensing (ALS) data which are measured in counts. Since the range of ALS data depend on ALS integration time [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) and the ALS gain [apds99xx_params_t::als_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a587f685eb3c7ad170181fdacda1411f3), these parameters also affect the sensitivity of the illuminance.

This function is only available for APDS9900, APDS9901 and APD9930.

#### Parameters
* `dev` device descriptor of APDS99XX sensor 

* `lux` illuminance in lux

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` negative error code, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_read_rgb_raw`](#group__drivers__apds99xx_1gaeeb1b7c6fc310cdd771b0c700336962b)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,`[`apds99xx_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#unionapds99xx__rgb__t)` * rgb)` 

Read one raw RGB color data sample (APDS9950 and APDS9960 only)

In APDS9950 and APDS9960 sensors, ambient light sensing (ALS) also detects spectral components of the light as RGB count values. This function can be used to fetch raw RGB data.

Raw RGB data are available as 16-bit count values (cnt_als). The range of these count values depends on the ALS integration time [apds99xx_params_t::als_steps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) and the ALS gain [apds99xx_params_t::als_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a587f685eb3c7ad170181fdacda1411f3). The maximum count value (cnt_rgb_max) is:  cnt_rgb_max = APDS99XX_CNTS_P_STEP * als_steps * als_gain
 If there are no data ready to read, last valid data sample is returned. Function [apds99xx_data_ready_als](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga7e18dc27475ccda7f22e004fc31b76d7) could be used to check whether new data are available before this function is called.

This function is only available for APDS9950 and APD9960.

#### Parameters
* `dev` device descriptor of APDS99XX sensor 

* `rgb` RGB color data sample as count values

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` negative error code, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_data_ready_prx`](#group__drivers__apds99xx_1ga1fa6babf96889d49ce87a7cb779e1ee8)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)` 

Proximity sensing (PRX) data-ready status function.

The function reads the proximity valid flag in status register and returns. It can be used for polling new proximity sensing data.

#### Parameters
* `dev` device descriptor of APDS99XX sensor

#### Parameters
* `APDS99XX_OK` new proximity data available 

* `APDS99XX_ERROR_NO_DATA` no new proximity data available 

* `APDS99XX_ERROR_*` negative error code, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_read_prx_raw`](#group__drivers__apds99xx_1gaa0015301edebffd9c7d62d7d6ce82736)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,uint16_t * prx)` 

Read one data sample of proximity sensing (PRX)

Proximity data samples are given as a 16-bit count values (cnt_prx).

APDS9960 returns only 8-bit values in the range of 0 to 255.

The range of the count values depends on the PRX LED drive strength [apds99xx_params_t::prx_drive](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1adfa2cac890d4a619703f2caccfc183aa) the PRX gain [apds99xx_params_t::prx_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1aad606a9b89d1a83625843738eb9e5778), and if used, the PRX integration time apds99xx_params_t::prx_time.

A number of disturbing effects such as DC noise, sensor coverage, or surrounding objects cause an offset in the measured proximity values. The application should remove this offset, for example, by finding the minimum value ever measured and subtracting it from the current reading. The minimum value is then assumed to be 0 (no proximity).

#### Parameters
* `dev` device descriptor of APDS99XX sensor 

* `prx` proximity sensing data as count value

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` a negative error code on error, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_power_down`](#group__drivers__apds99xx_1ga0a04b0acc5c717828f10a2bba9b1bfa5)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)` 

Power down the sensor.

The sensor is switched into sleep mode. It remains operational on the I2C interface. Depending on the sensor used, it consumes only about 1 to 3 uA in this mode.

#### Parameters
* `dev` device descriptor of APDS99XX sensor

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` a negative error code on error, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_power_up`](#group__drivers__apds99xx_1gab36b15a30dad65a5ebf7ec9d69e16239)`(const `[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev)` 

Power up the sensor.

The sensor is woken up from sleep mode.

#### Parameters
* `dev` device descriptor of APDS99XX sensor

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` a negative error code on error, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_int_config`](#group__drivers__apds99xx_1ga49cf8d6e99d38576697d504ad4b37923)`(`[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,`[`apds99xx_int_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t)` * cfg,`[`apds99xx_isr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga02ff2017e4a698ddda8c4d34978bfffb)` isr,void * isr_arg)` 

Configure the interrupts of the sensor.

The function configures the interrupts of the sensor and sets the ISR as well as its argument for handling the interrupts.

If any interrupt is enabled by the configuration ([apds99xx_int_config_t::als_int_en](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1aa6714b8f4009b680889293431d507b8b) or [apds99xx_int_config_t::als_int_en](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1aa6714b8f4009b680889293431d507b8b) are set), the function

* initializes the GPIO defined by [apds99xx_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t_1a4ce93416c24348a35144aa15e454f7f1), and

* attaches the ISR specified by the `isr` parameter to the interrupt.

Since the ISR is executed in the interrupt context, it must not be blocking or time consuming. In addition, it must not access the sensor directly via I2C. It should only indicate to a waiting thread that an interrupt has occurred, which is then handled in the thread context.

#### Parameters
* `dev` device descriptor of APDS99XX sensor 

* `cfg` interrupt configuration, see [apds99xx_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t)

* `isr` ISR called for all types of interrupts 

* `isr_arg` ISR argument, can be NULL

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` negative error code on error, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

#### `public int `[`apds99xx_int_source`](#group__drivers__apds99xx_1ga280bcc8343239cd8712f57b1f578afbb)`(`[`apds99xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__t)` * dev,`[`apds99xx_int_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__source__t)` * src)` 

Get the source of an interrupt.

The function clears the interrupt signal and returns the source of the interrupt. Since the interrupt signal is only reset by this function, it must be executed to reset the interrupt signal, even if the type of the triggered interrupt is not of interest.

It must not be called from the ISR to avoid I2C bus accesses in the interrupt context.

#### Parameters
* `dev` device descriptor of APDS99XX sensor 

* `src` interrupt source, see [apds99xx_int_source_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__source__t)

#### Parameters
* `APDS99XX_OK` on success 

* `APDS99XX_ERROR_*` negative error code on error, see [apds99xx_error_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gab524bd71c1b612a5164cc4d3b741bc14)

# struct `apds99xx_params_t` 

APDS99XX device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`dev`](#structapds99xx__params__t_1a013d9b2cba43aa8e56606cb7742eecb0) | I2C device (default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb))
`public uint16_t `[`als_steps`](#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) | ALS integration time in steps.
`public `[`apds99xx_als_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gaf267b79e5997a3ecb7f812bf70c59f1f)` `[`als_gain`](#structapds99xx__params__t_1a587f685eb3c7ad170181fdacda1411f3) | Gain used for ALS.
`public uint8_t `[`prx_pulses`](#structapds99xx__params__t_1acacd3a0570fbdbbace726e00f87bd773) | IR LED pulses for proximity sensing.
`public `[`apds99xx_prx_drive_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga5e46d7aeab7b9a2a7e37f47501f1d20b)` `[`prx_drive`](#structapds99xx__params__t_1adfa2cac890d4a619703f2caccfc183aa) | IR LED current for proximity sensing (default [APDS99XX_PRX_DRIVE_100](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gga5e46d7aeab7b9a2a7e37f47501f1d20ba70ea5fbfdcdf633995f5ffc7cdf90bc5))
`public `[`apds99xx_prx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga239ce6b502d9d5a3649a58f44d20529a)` `[`prx_gain`](#structapds99xx__params__t_1aad606a9b89d1a83625843738eb9e5778) | Gain used for proximity sensing.
`public uint16_t `[`wait_steps`](#structapds99xx__params__t_1a5e72cf4feaba8ec3f30d20d36c4c2ad4) | Waiting time in steps.
`public bool `[`wait_long`](#structapds99xx__params__t_1af3ec0e60fa2ce460c375919f3ab7015b) | Long waiting time.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structapds99xx__params__t_1a4ce93416c24348a35144aa15e454f7f1) | interrupt pin: [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not used

## Members

#### `public unsigned `[`dev`](#structapds99xx__params__t_1a013d9b2cba43aa8e56606cb7742eecb0) 

I2C device (default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb))

#### `public uint16_t `[`als_steps`](#structapds99xx__params__t_1ae9f2720dd1fa118d2bdd757c043f7fd5) 

ALS integration time in steps.

If 0, ALS is disabled. (default 64)

#### `public `[`apds99xx_als_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gaf267b79e5997a3ecb7f812bf70c59f1f)` `[`als_gain`](#structapds99xx__params__t_1a587f685eb3c7ad170181fdacda1411f3) 

Gain used for ALS.

(default [APDS99XX_ALS_GAIN_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ggaf267b79e5997a3ecb7f812bf70c59f1fa8a3921f50c8b71efabfb5aee332dc9d7))

#### `public uint8_t `[`prx_pulses`](#structapds99xx__params__t_1acacd3a0570fbdbbace726e00f87bd773) 

IR LED pulses for proximity sensing.

If 0, proximity sensing is disabled. (default 8 as recommended)

#### `public `[`apds99xx_prx_drive_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga5e46d7aeab7b9a2a7e37f47501f1d20b)` `[`prx_drive`](#structapds99xx__params__t_1adfa2cac890d4a619703f2caccfc183aa) 

IR LED current for proximity sensing (default [APDS99XX_PRX_DRIVE_100](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gga5e46d7aeab7b9a2a7e37f47501f1d20ba70ea5fbfdcdf633995f5ffc7cdf90bc5))

#### `public `[`apds99xx_prx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga239ce6b502d9d5a3649a58f44d20529a)` `[`prx_gain`](#structapds99xx__params__t_1aad606a9b89d1a83625843738eb9e5778) 

Gain used for proximity sensing.

(default [APDS99XX_PRX_GAIN_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1gga239ce6b502d9d5a3649a58f44d20529aaa5167146a73c60cb91937dbde9185aee))

#### `public uint16_t `[`wait_steps`](#structapds99xx__params__t_1a5e72cf4feaba8ec3f30d20d36c4c2ad4) 

Waiting time in steps.

If 0, waiting is disabled. (default 0)

#### `public bool `[`wait_long`](#structapds99xx__params__t_1af3ec0e60fa2ce460c375919f3ab7015b) 

Long waiting time.

If true, waitng time is increased by a factor 12. (default false)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structapds99xx__params__t_1a4ce93416c24348a35144aa15e454f7f1) 

interrupt pin: [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not used

# struct `apds99xx_int_config_t` 

Interrupt configuration.

The interrupt enable flags [apds99xx_int_config_t::als_int_en](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1aa6714b8f4009b680889293431d507b8b) and [apds99xx_int_config_t::prx_int_en](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1aa74b462cc086784ea87a19a803852626) control whether ALS and proximity sensor interrupts are enable.

The persistence values [apds99xx_int_config_t::als_pers](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1ab789227157c8b3af125bafc9c22e0900) and [apds99xx_int_config_t::prx_pers](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1a43a89e44fc11f12ae109e938b6ffb13f) specify how many ALS or proximity values have to be outside of the thresholds defined by [apds99xx_int_config_t::als_thresh_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1a67f8a9a7bc86b4ebb914beaae92e46f6) and [apds99xx_int_config_t::als_thresh_high](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1a02fe32997aebf312fe14755269631f71) or [apds99xx_int_config_t::prx_thresh_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1a8c5ea7d81ee315c7b48b0b57d7881b90) and [apds99xx_int_config_t::prx_thresh_high](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__int__config__t_1af845121e3853da30a9020a9bde4d4274).

If the persistence values are 0, an interrupt is generated in each cycle at the end of the corresponding measurement step, regardless of the values and the defined threshold. The corresponding interrupt is thus used as a data-ready interrupt.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`als_int_en`](#structapds99xx__int__config__t_1aa6714b8f4009b680889293431d507b8b) | ALS interrupt enabled.
`public uint8_t `[`als_pers`](#structapds99xx__int__config__t_1ab789227157c8b3af125bafc9c22e0900) | Number of consecutive ALS values that have to be outside the thresholds to generate an interrupt:
`public uint16_t `[`als_thresh_low`](#structapds99xx__int__config__t_1a67f8a9a7bc86b4ebb914beaae92e46f6) | Low threshold value for ALS interrupts.
`public uint16_t `[`als_thresh_high`](#structapds99xx__int__config__t_1a02fe32997aebf312fe14755269631f71) | High threshold value for ALS interrupts.
`public bool `[`prx_int_en`](#structapds99xx__int__config__t_1aa74b462cc086784ea87a19a803852626) | Proximity interrupt enabled.
`public uint8_t `[`prx_pers`](#structapds99xx__int__config__t_1a43a89e44fc11f12ae109e938b6ffb13f) | Number of consecutive proximity values that have to be outside the thresholds to generate an interrupt:
`public uint16_t `[`prx_thresh_low`](#structapds99xx__int__config__t_1a8c5ea7d81ee315c7b48b0b57d7881b90) | Low threshold for proximity values (only the low byte is used for APDS9960)
`public uint16_t `[`prx_thresh_high`](#structapds99xx__int__config__t_1af845121e3853da30a9020a9bde4d4274) | High threshold for proximity values (only the low byte is used for APDS9960)

## Members

#### `public bool `[`als_int_en`](#structapds99xx__int__config__t_1aa6714b8f4009b680889293431d507b8b) 

ALS interrupt enabled.

#### `public uint8_t `[`als_pers`](#structapds99xx__int__config__t_1ab789227157c8b3af125bafc9c22e0900) 

Number of consecutive ALS values that have to be outside the thresholds to generate an interrupt:

Value   |Interrupt is generated
--------- | ---------
0   |every cycle (ALS data-ready interrupt)
1...15   |when n values are outside the thresholds

#### `public uint16_t `[`als_thresh_low`](#structapds99xx__int__config__t_1a67f8a9a7bc86b4ebb914beaae92e46f6) 

Low threshold value for ALS interrupts.

#### `public uint16_t `[`als_thresh_high`](#structapds99xx__int__config__t_1a02fe32997aebf312fe14755269631f71) 

High threshold value for ALS interrupts.

#### `public bool `[`prx_int_en`](#structapds99xx__int__config__t_1aa74b462cc086784ea87a19a803852626) 

Proximity interrupt enabled.

#### `public uint8_t `[`prx_pers`](#structapds99xx__int__config__t_1a43a89e44fc11f12ae109e938b6ffb13f) 

Number of consecutive proximity values that have to be outside the thresholds to generate an interrupt:

Value   |Interrupt is generated
--------- | ---------
0   |every cycle (PRX data-ready interrupt)
1, 2, 3   |when 1, 2, or 3 values are outside the thresholds
4...15   |when (n - 3) * 5 values are outside the thresholds

#### `public uint16_t `[`prx_thresh_low`](#structapds99xx__int__config__t_1a8c5ea7d81ee315c7b48b0b57d7881b90) 

Low threshold for proximity values (only the low byte is used for APDS9960)

#### `public uint16_t `[`prx_thresh_high`](#structapds99xx__int__config__t_1af845121e3853da30a9020a9bde4d4274) 

High threshold for proximity values (only the low byte is used for APDS9960)

# struct `apds99xx_int_source_t` 

Interrupt source.

The type is used to

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`als_int`](#structapds99xx__int__source__t_1a3e24c24ad96f66b6a353d1cd79978ed5) | ALS interrupt happened.
`public bool `[`prx_int`](#structapds99xx__int__source__t_1a09c54e39f4888c33c31b1a81729b4a30) | Proximity interrupt happened.

## Members

#### `public bool `[`als_int`](#structapds99xx__int__source__t_1a3e24c24ad96f66b6a353d1cd79978ed5) 

ALS interrupt happened.

#### `public bool `[`prx_int`](#structapds99xx__int__source__t_1a09c54e39f4888c33c31b1a81729b4a30) 

Proximity interrupt happened.

# struct `apds99xx_t` 

APDS99XX sensor device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`apds99xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t)` `[`params`](#structapds99xx__t_1a211795fce4be78bbef42a3ef23821e15) | device initialization parameters
`public `[`apds99xx_isr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga02ff2017e4a698ddda8c4d34978bfffb)` `[`isr`](#structapds99xx__t_1afc8dcd7175d8bf27d1dd97b8a8dd05fc) | user ISR
`public void * `[`isr_arg`](#structapds99xx__t_1a7c85976c0155f70eb1bce147c569c081) | user ISR argument
`public bool `[`gpio_init`](#structapds99xx__t_1aab5e92442cbc48e9752cffcf0ebf9195) | GPIO is already initialized.

## Members

#### `public `[`apds99xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apds99xx.md#structapds99xx__params__t)` `[`params`](#structapds99xx__t_1a211795fce4be78bbef42a3ef23821e15) 

device initialization parameters

#### `public `[`apds99xx_isr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apds99xx_1ga02ff2017e4a698ddda8c4d34978bfffb)` `[`isr`](#structapds99xx__t_1afc8dcd7175d8bf27d1dd97b8a8dd05fc) 

user ISR

#### `public void * `[`isr_arg`](#structapds99xx__t_1a7c85976c0155f70eb1bce147c569c081) 

user ISR argument

#### `public bool `[`gpio_init`](#structapds99xx__t_1aab5e92442cbc48e9752cffcf0ebf9195) 

GPIO is already initialized.

