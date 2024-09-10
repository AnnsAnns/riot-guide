---
title: api-drivers_lis2dh12.md
description: api-drivers_lis2dh12.md
---
# group `drivers_lis2dh12` 

Driver for the STM LIS2DH12 accelerometer.

This device driver provides a minimal interface to LIS2DH12 devices. As of now, it only provides very basic access to the device. The driver configures the device to continuously read the acceleration data with statically defined scale and rate, and with a fixed 10-bit resolution. The LIS2DH12's FIFO is bypassed, so the driver might not be sufficient for use cases where the complete history of readings is of interest.

Also, the current version of the driver supports only interfacing the sensor via SPI. The driver is however written in a way, that adding I2C interface support is quite simple, as all bus related functions (acquire, release, read, write) are cleanly separated in the code.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LIS2DH12_ADDR_DEFAULT`](#group__drivers__lis2dh12_1gae68c5272a206f1da52341100dd56967c)            | Default I2C slave address for LIS2DH12 devices.
`define `[`LIS2DH12_CLICK_X_SINGLE`](#group__drivers__lis2dh12_1gaa461e8bafe0c1cab9f2794bb19468720)            | single click on X axis
`define `[`LIS2DH12_CLICK_X_DOUBLE`](#group__drivers__lis2dh12_1gaad46d66ac71802ac4b4e988fb888db7d)            | double click on X axis
`define `[`LIS2DH12_CLICK_Y_SINGLE`](#group__drivers__lis2dh12_1ga77c3db3e586bba21da7185e29b84b6e5)            | single click on Y axis
`define `[`LIS2DH12_CLICK_Y_DOUBLE`](#group__drivers__lis2dh12_1gac6a8c097e8b3ca8e8d213e665b970169)            | double click on Y axis
`define `[`LIS2DH12_CLICK_Z_SINGLE`](#group__drivers__lis2dh12_1gaad8a8479ab005b3584df8b111f721699)            | single click on Z axis
`define `[`LIS2DH12_CLICK_Z_DOUBLE`](#group__drivers__lis2dh12_1ga01b54b3f5eb9dde4dda2a5f42f8e4d91)            | double click on Z axis
`enum `[`lis2dh12_scale_t`](#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)            | Available scale values.
`enum `[`lis2dh12_rate_t`](#group__drivers__lis2dh12_1gaab3a9480859693923073b2465d8157f5)            | Available sampling rates.
`enum `[`lis2dh12_resolution_t`](#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)            | Available resolutions.
`enum `[`lis2dh12_hp_mode_t`](#group__drivers__lis2dh12_1gadaa852cfc21e51bcf6d24c50edda7544)            | LIS2DH12 high pass modes.
`enum `[`lis2dh12_hp_freq_t`](#group__drivers__lis2dh12_1ga78bbb6a84a89391ed0e88bf4fc29b31f)            | LIS2DH12 high pass cutoff frequency.
`enum `[`@205`](#group__drivers__lis2dh12_1gad4a9934b75947f1fae21deee31688bb7)            | Status and error return codes.
`enum `[`@206`](#group__drivers__lis2dh12_1ga4dd89091f7fcec969d562dcff9eabef3)            | 
`enum `[`lis2dh12_fifo_mode_t`](#group__drivers__lis2dh12_1ga29c8ba60b6017ac79495497dfb5ddc3c)            | LIS2DH12 FIFO modes.
`public void `[`lis2dh12_cfg_threshold_event`](#group__drivers__lis2dh12_1ga3d41cfc87a78c62bd1ae3773179134b5)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint32_t mg,uint32_t us,uint8_t axis,uint8_t event,uint8_t pin)`            | Configure a threshold event An Interrupt will be generated if acceleration exceeds the set threshold around the current reference value.
`public void `[`lis2dh12_cfg_click_event`](#group__drivers__lis2dh12_1ga88f4da3073135159c52c95b4a5bb2f47)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint32_t mg,uint32_t us_limit,uint32_t us_latency,uint32_t us_window,uint8_t click,uint8_t pin)`            | Configure a click event A click event is generated when the acceleration exceeds the set threshold for less than `us_limit` µs.
`public void `[`lis2dh12_cfg_disable_event`](#group__drivers__lis2dh12_1gafdd6175d4f486c81e1be382605fd0cab)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint8_t event,uint8_t pin)`            | Disable interrupt generation for an event This disables an interrupt on `pin` if a previously configured event occurs.
`public int `[`lis2dh12_wait_event`](#group__drivers__lis2dh12_1gac69191b42107d7f309ef2b0b70456bf3)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint8_t pin,bool stale_events)`            | Wait for an interrupt event This function will block until an interrupt is received.
`public int `[`lis2dh12_set_fifo`](#group__drivers__lis2dh12_1gaae7269f1f3ab145d5ba8bdde03fb3186)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,const `[`lis2dh12_fifo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__fifo__t)` * config)`            | Set the FIFO configuration.
`public int `[`lis2dh12_restart_fifo`](#group__drivers__lis2dh12_1ga566fdcfd3a601dc0ae1dffd627d96e84)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Restart the FIFO mode this sets the FIFO mode in BYPASS mode and then back to previous mode Note: The LIS module disables the FIFO after interrupt automatically, it is recommended to set the FIFO in BYPASS mode and then back to old FIFO mode to enable the FIFO again.
`public uint8_t `[`lis2dh12_read_fifo_data`](#group__drivers__lis2dh12_1gacb8bfd4254db50fc4dc293cb99ac686f)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_fifo_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#unionlis2dh12__fifo__data__t)` * fifo_data,uint8_t number)`            | This function will read a given number of data from FIFO reads amount of data that is available in FIFO.
`public int `[`lis2dh12_init`](#group__drivers__lis2dh12_1gaf2e0a538321e117e492f0baa10962b22)`(`[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,const `[`lis2dh12_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__params__t)` * params)`            | Initialize the given LIS2DH12 sensor device.
`public int `[`lis2dh12_read`](#group__drivers__lis2dh12_1ga9b9624c9e358764eed81ad6f2aeaf17d)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_fifo_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#unionlis2dh12__fifo__data__t)` * data)`            | Read acceleration data from the given device.
`public int `[`lis2dh12_read_temperature`](#group__drivers__lis2dh12_1gaa126d79b0e1426beb54a2c842231f1f2)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,int16_t * temp)`            | Read temperature data from the given device.
`public int `[`lis2dh12_clear_data`](#group__drivers__lis2dh12_1ga9517a337d1b1bcf0f8ec59c169305b18)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Clear the LIS2DH12 memory, clears all sampled data.
`public int `[`lis2dh12_set_scale`](#group__drivers__lis2dh12_1ga8220b229592661d70cd4840d7709a54d)`(`[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)` scale)`            | Change device measuring range.
`public `[`lis2dh12_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)` `[`lis2dh12_get_scale`](#group__drivers__lis2dh12_1ga801e9a27406364e488602d488ddf70af)`(`[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Get device measuring range.
`public int `[`lis2dh12_set_datarate`](#group__drivers__lis2dh12_1ga0a0f0944c356081507711e24eff006dd)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gaab3a9480859693923073b2465d8157f5)` rate)`            | Change device sampling rate.
`public uint16_t `[`lis2dh12_get_datarate`](#group__drivers__lis2dh12_1ga2c578e67e38e164ecfbfd66671522521)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Get device sampling rate in Hz.
`public int `[`lis2dh12_set_resolution`](#group__drivers__lis2dh12_1ga13ca0516c7f6fd61d41eb570809961b1)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)` resolution)`            | Change device resolution.
`public `[`lis2dh12_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)` `[`lis2dh12_get_resolution`](#group__drivers__lis2dh12_1ga70e7acaaa59accd3b5d30a95261c6e2e)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Get device resolution.
`public int `[`lis2dh12_set_highpass`](#group__drivers__lis2dh12_1gacd01d9e7e710e7159b7222d9ee78c906)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,const `[`lis2dh12_highpass_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__highpass__t)` * config)`            | Configures the high pass filter.
`public int `[`lis2dh12_set_reference`](#group__drivers__lis2dh12_1ga967008d95bc4a418beaa615b497ddbc2)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint8_t reference)`            | Set the reference value to control the high-pass reference.
`public int `[`lis2dh12_poweron`](#group__drivers__lis2dh12_1gab84da5729fea172e106c9a725cb8a6a5)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Power on the given device and resets resolution and sampling rate to default values in the device descriptor parameters.
`public int `[`lis2dh12_poweroff`](#group__drivers__lis2dh12_1gaceaf1d635398314c792e855eba702981)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)`            | Power off the given device.
`struct `[`lis2dh12_params_t`](#structlis2dh12__params__t) | LIS2DH12 configuration parameters.
`struct `[`lis2dh12_highpass_t`](#structlis2dh12__highpass__t) | LIS2DH12 high pass config values.
`struct `[`lis2dh12_click_t`](#structlis2dh12__click__t) | LIS2DH12 click config values.
`struct `[`lis2dh12_t`](#structlis2dh12__t) | LIS2DH12 device descriptor.
`struct `[`lis2dh12_int_params_t`](#structlis2dh12__int__params__t) | Parameter for interrupt configuration.
`struct `[`lis2dh12_fifo_t`](#structlis2dh12__fifo__t) | LIS2DH12 FIFO config values.
`union `[`lis2dh12_fifo_data_t`](#unionlis2dh12__fifo__data__t) | LIS2DH12 FIFO data struct.

## Members

#### `define `[`LIS2DH12_ADDR_DEFAULT`](#group__drivers__lis2dh12_1gae68c5272a206f1da52341100dd56967c) 

Default I2C slave address for LIS2DH12 devices.

#### `define `[`LIS2DH12_CLICK_X_SINGLE`](#group__drivers__lis2dh12_1gaa461e8bafe0c1cab9f2794bb19468720) 

single click on X axis

#### `define `[`LIS2DH12_CLICK_X_DOUBLE`](#group__drivers__lis2dh12_1gaad46d66ac71802ac4b4e988fb888db7d) 

double click on X axis

#### `define `[`LIS2DH12_CLICK_Y_SINGLE`](#group__drivers__lis2dh12_1ga77c3db3e586bba21da7185e29b84b6e5) 

single click on Y axis

#### `define `[`LIS2DH12_CLICK_Y_DOUBLE`](#group__drivers__lis2dh12_1gac6a8c097e8b3ca8e8d213e665b970169) 

double click on Y axis

#### `define `[`LIS2DH12_CLICK_Z_SINGLE`](#group__drivers__lis2dh12_1gaad8a8479ab005b3584df8b111f721699) 

single click on Z axis

#### `define `[`LIS2DH12_CLICK_Z_DOUBLE`](#group__drivers__lis2dh12_1ga01b54b3f5eb9dde4dda2a5f42f8e4d91) 

double click on Z axis

#### `enum `[`lis2dh12_scale_t`](#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_SCALE_2G            | +- 2g
LIS2DH12_SCALE_4G            | +- 4g
LIS2DH12_SCALE_8G            | +- 8g
LIS2DH12_SCALE_16G            | +- 16g

Available scale values.

#### `enum `[`lis2dh12_rate_t`](#group__drivers__lis2dh12_1gaab3a9480859693923073b2465d8157f5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_RATE_1HZ            | sample with 1Hz @ all resolutions
LIS2DH12_RATE_10HZ            | sample with 10Hz @ all resolutions
LIS2DH12_RATE_25HZ            | sample with 25Hz @ all resolutions
LIS2DH12_RATE_50HZ            | sample with 50Hz @ all resolutions
LIS2DH12_RATE_100HZ            | sample with 100Hz @ all resolutions
LIS2DH12_RATE_200HZ            | sample with 200Hz @ all resolutions
LIS2DH12_RATE_400HZ            | sample with 400Hz @ all resolutions
LIS2DH12_RATE_1620HZ            | sample with 1620HZ @ 8-bit
LIS2DH12_RATE_VERYHIGH            | sample with 1344Hz @ High resolution or \ 5376Hz @ 8-bit

Available sampling rates.

#### `enum `[`lis2dh12_resolution_t`](#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_POWER_DOWN            | power down the device
LIS2DH12_POWER_LOW            | 8-bit mode
LIS2DH12_POWER_NORMAL            | 10-bit mode
LIS2DH12_POWER_HIGH            | 12-bit mode

Available resolutions.

#### `enum `[`lis2dh12_hp_mode_t`](#group__drivers__lis2dh12_1gadaa852cfc21e51bcf6d24c50edda7544) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_HP_MODE_NORMAL            | normal mode, reset by reading REG_REFERENCE
LIS2DH12_HP_MODE_REFERENCE            | uses the reference signal for filtering
LIS2DH12_HP_MODE_AUTORESET            | automatically resets on interrupt generation

LIS2DH12 high pass modes.

#### `enum `[`lis2dh12_hp_freq_t`](#group__drivers__lis2dh12_1ga78bbb6a84a89391ed0e88bf4fc29b31f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_HP_FREQ_DIV50            | cutoff freq is ODR divided by 50
LIS2DH12_HP_FREQ_DIV100            | cutoff freq is ODR divided by 100
LIS2DH12_HP_FREQ_DIV200            | cutoff freq is ODR divided by 200
LIS2DH12_HP_FREQ_DIV400            | cutoff freq is ODR divided by 400

LIS2DH12 high pass cutoff frequency.

#### `enum `[`@205`](#group__drivers__lis2dh12_1gad4a9934b75947f1fae21deee31688bb7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_OK            | everything was fine
LIS2DH12_NOBUS            | bus interface error
LIS2DH12_NODEV            | unable to talk to device
LIS2DH12_NOINT            | wrong interrupt line (has to be LIS2DH12_INT1 or LIS2DH12_INT2)
LIS2DH12_NODATA            | no data available

Status and error return codes.

#### `enum `[`@206`](#group__drivers__lis2dh12_1ga4dd89091f7fcec969d562dcff9eabef3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_INT1            | first interrupt line
LIS2DH12_INT2            | second interrupt line

#### `enum `[`lis2dh12_fifo_mode_t`](#group__drivers__lis2dh12_1ga29c8ba60b6017ac79495497dfb5ddc3c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS2DH12_FIFO_MODE_BYPASS            | default mode, FIFO is bypassed
LIS2DH12_FIFO_MODE_FIFOMODE            | normal FIFO mode, stops if FIFO is full
LIS2DH12_FIFO_MODE_STREAM            | Stream mode, oldest values get overwritten.
LIS2DH12_FIFO_MODE_STREAMtoFIFO            | Stream mode and on interrupt jumps to FIFO mode.

LIS2DH12 FIFO modes.

#### `public void `[`lis2dh12_cfg_threshold_event`](#group__drivers__lis2dh12_1ga3d41cfc87a78c62bd1ae3773179134b5)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint32_t mg,uint32_t us,uint8_t axis,uint8_t event,uint8_t pin)` 

Configure a threshold event An Interrupt will be generated if acceleration exceeds the set threshold around the current reference value.

#### Parameters
* `dev` device descriptor 

* `mg` acceleration in mg 

* `us` time in µs for which the threshold must be exceeded 

* `axis` bitmap of axis / events to be monitored 

* `event` Event slot (1 or 2) 

* `pin` Interrupt pin to use (LIS2DH12_INT1/LIS2DH12_INT2)

#### `public void `[`lis2dh12_cfg_click_event`](#group__drivers__lis2dh12_1ga88f4da3073135159c52c95b4a5bb2f47)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint32_t mg,uint32_t us_limit,uint32_t us_latency,uint32_t us_window,uint8_t click,uint8_t pin)` 

Configure a click event A click event is generated when the acceleration exceeds the set threshold for less than `us_limit` µs.

A double click event is generated if a second click event occurs within `us_window` µs after the first one.

#### Parameters
* `dev` device descriptor 

* `mg` acceleration in mg 

* `us_limit` upper limit for click duration in µs 

* `us_latency` dead time after click event in µs 

* `us_window` time after `us_latency` in which the second click event must occur to register as double click 

* `click` bit map of click axis / types 

* `pin` Interrupt pin to use (LIS2DH12_INT1/LIS2DH12_INT2)

#### `public void `[`lis2dh12_cfg_disable_event`](#group__drivers__lis2dh12_1gafdd6175d4f486c81e1be382605fd0cab)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint8_t event,uint8_t pin)` 

Disable interrupt generation for an event This disables an interrupt on `pin` if a previously configured event occurs.

#### Parameters
* `dev` device descriptor 

* `event` Event to disable (LIS2DH12_EVENT_1, LIS2DH12_EVENT_2 or LIS2DH12_EVENT_CLICK) 

* `pin` Interrupt pin to use (LIS2DH12_INT1/LIS2DH12_INT2)

#### `public int `[`lis2dh12_wait_event`](#group__drivers__lis2dh12_1gac69191b42107d7f309ef2b0b70456bf3)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint8_t pin,bool stale_events)` 

Wait for an interrupt event This function will block until an interrupt is received.

#### Parameters
* `dev` device descriptor 

* `pin` Interrupt pin to monitor (LIS2DH12_INT1 or LIS2DH12_INT2) 

* `stale_events` If true, this also reports events that were generated before this function was called and which are still in the fifo buffer.

#### Returns
negative error 

#### Returns
positive LIS2DH12_INT_SRC bit mask on success

#### `public int `[`lis2dh12_set_fifo`](#group__drivers__lis2dh12_1gaae7269f1f3ab145d5ba8bdde03fb3186)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,const `[`lis2dh12_fifo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__fifo__t)` * config)` 

Set the FIFO configuration.

#### Parameters
* `dev` device descriptor 

* `config` device FIFO configuration

#### Returns
LIS2DH12_OK on success

#### `public int `[`lis2dh12_restart_fifo`](#group__drivers__lis2dh12_1ga566fdcfd3a601dc0ae1dffd627d96e84)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Restart the FIFO mode this sets the FIFO mode in BYPASS mode and then back to previous mode Note: The LIS module disables the FIFO after interrupt automatically, it is recommended to set the FIFO in BYPASS mode and then back to old FIFO mode to enable the FIFO again.

#### Parameters
* `dev` device descriptor

#### Returns
LIS2DH12_OK on success

#### `public uint8_t `[`lis2dh12_read_fifo_data`](#group__drivers__lis2dh12_1gacb8bfd4254db50fc4dc293cb99ac686f)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_fifo_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#unionlis2dh12__fifo__data__t)` * fifo_data,uint8_t number)` 

This function will read a given number of data from FIFO reads amount of data that is available in FIFO.

#### Parameters
* `dev` device descriptor 

* `fifo_data` FIFO data, must have space for number of data 

* `number` amount of FIFO data to be read

#### Returns
number of valid data read from FIFO

#### `public int `[`lis2dh12_init`](#group__drivers__lis2dh12_1gaf2e0a538321e117e492f0baa10962b22)`(`[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,const `[`lis2dh12_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__params__t)` * params)` 

Initialize the given LIS2DH12 sensor device.

#### Parameters
* `dev` device descriptor 

* `params` static device configuration

#### Returns
LIS2DH12_OK on success 

#### Returns
LIS2DH12_NOBUS on bus errors 

#### Returns
LIS2DH12_NODEV if no LIS2DH12 device was found on the bus

#### `public int `[`lis2dh12_read`](#group__drivers__lis2dh12_1ga9b9624c9e358764eed81ad6f2aeaf17d)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_fifo_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#unionlis2dh12__fifo__data__t)` * data)` 

Read acceleration data from the given device.

#### Parameters
* `dev` device descriptor 

* `data` acceleration data in mili-g

#### Returns
LIS2DH12_OK on success 

#### Returns
LIS2DH12_NOBUS on bus error

#### `public int `[`lis2dh12_read_temperature`](#group__drivers__lis2dh12_1gaa126d79b0e1426beb54a2c842231f1f2)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,int16_t * temp)` 

Read temperature data from the given device.

The temperature sensor is not calibrated. Temperature values are only relative to a device specific reference.

#### Parameters
* `dev` device descriptor 

* `temp` temperature data in centi-°C

#### Returns
LIS2DH12_OK on success 

#### Returns
LIS2DH12_NOBUS on bus error

#### `public int `[`lis2dh12_clear_data`](#group__drivers__lis2dh12_1ga9517a337d1b1bcf0f8ec59c169305b18)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Clear the LIS2DH12 memory, clears all sampled data.

#### Parameters
* `dev` device descriptor

#### Returns
LIS2DH12_OK on success

#### `public int `[`lis2dh12_set_scale`](#group__drivers__lis2dh12_1ga8220b229592661d70cd4840d7709a54d)`(`[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)` scale)` 

Change device measuring range.

#### Parameters
* `dev` device descriptor 

* `scale` change to given scale value

#### Returns
LIS2DH12_OK on success

#### `public `[`lis2dh12_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)` `[`lis2dh12_get_scale`](#group__drivers__lis2dh12_1ga801e9a27406364e488602d488ddf70af)`(`[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Get device measuring range.

#### Parameters
* `dev` device descriptor

#### Returns
Current device range

#### `public int `[`lis2dh12_set_datarate`](#group__drivers__lis2dh12_1ga0a0f0944c356081507711e24eff006dd)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gaab3a9480859693923073b2465d8157f5)` rate)` 

Change device sampling rate.

#### Parameters
* `dev` device descriptor 

* `rate` change to given sampling rate

#### Returns
LIS2DH12_OK on success

#### `public uint16_t `[`lis2dh12_get_datarate`](#group__drivers__lis2dh12_1ga2c578e67e38e164ecfbfd66671522521)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Get device sampling rate in Hz.

#### Parameters
* `dev` device descriptor

#### Returns
current sampling rate in Hz

#### `public int `[`lis2dh12_set_resolution`](#group__drivers__lis2dh12_1ga13ca0516c7f6fd61d41eb570809961b1)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,`[`lis2dh12_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)` resolution)` 

Change device resolution.

#### Parameters
* `dev` device descriptor 

* `resolution` change to given resolution

#### Returns
LIS2DH12_OK on success

#### `public `[`lis2dh12_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)` `[`lis2dh12_get_resolution`](#group__drivers__lis2dh12_1ga70e7acaaa59accd3b5d30a95261c6e2e)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Get device resolution.

#### Parameters
* `dev` device descriptor

#### Returns
Current device resolution settings

#### `public int `[`lis2dh12_set_highpass`](#group__drivers__lis2dh12_1gacd01d9e7e710e7159b7222d9ee78c906)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,const `[`lis2dh12_highpass_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__highpass__t)` * config)` 

Configures the high pass filter.

#### Parameters
* `dev` device descriptor 

* `config` device high pass configuration

#### Returns
LIS2DH12_OK on success

#### `public int `[`lis2dh12_set_reference`](#group__drivers__lis2dh12_1ga967008d95bc4a418beaa615b497ddbc2)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev,uint8_t reference)` 

Set the reference value to control the high-pass reference.

In LIS2DH12_HP_MODE_REFERENCE the reference value is used to filter data on all axis. Subtracts reference value from acceleration. Note: LSB changes according to LIS2DH12_SCALE

#### Parameters
* `dev` device descriptor 

* `reference` reference value [8 Bit]

#### Returns
LIS2DH12_OK on success

#### `public int `[`lis2dh12_poweron`](#group__drivers__lis2dh12_1gab84da5729fea172e106c9a725cb8a6a5)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Power on the given device and resets resolution and sampling rate to default values in the device descriptor parameters.

#### Parameters
* `dev` device descriptor

#### Returns
LIS2DH12_OK on success 

#### Returns
LIS2DH12_NOBUS on bus error

#### `public int `[`lis2dh12_poweroff`](#group__drivers__lis2dh12_1gaceaf1d635398314c792e855eba702981)`(const `[`lis2dh12_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__t)` * dev)` 

Power off the given device.

#### Parameters
* `dev` device descriptor

#### Returns
LIS2DH12_OK on success 

#### Returns
LIS2DH12_NOBUS on bus error

# struct `lis2dh12_params_t` 

LIS2DH12 configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structlis2dh12__params__t_1a6588f6b618a9e6d443ed16f330211b0f) | SPI bus the device is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structlis2dh12__params__t_1a53e96c99e54994edc669fe296b49d510) | connected chip select pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1_pin`](#structlis2dh12__params__t_1a9ca34566d3f7422a0189415844de65d1) | first interrupt pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2_pin`](#structlis2dh12__params__t_1ad0de82d6bec52beb9ef5399ddf12d021) | second interrupt pin
`public `[`lis2dh12_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)` `[`scale`](#structlis2dh12__params__t_1abd2b15fdf78091a1deabc38f54af4237) | sampling sensitivity used
`public `[`lis2dh12_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gaab3a9480859693923073b2465d8157f5)` `[`rate`](#structlis2dh12__params__t_1a7913a53e2359719d62765b8599c94417) | sampling rate used
`public `[`lis2dh12_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)` `[`resolution`](#structlis2dh12__params__t_1a48fdc8b42b5852c9003acd4ea2bbaace) | resolution used

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structlis2dh12__params__t_1a6588f6b618a9e6d443ed16f330211b0f) 

SPI bus the device is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structlis2dh12__params__t_1a53e96c99e54994edc669fe296b49d510) 

connected chip select pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1_pin`](#structlis2dh12__params__t_1a9ca34566d3f7422a0189415844de65d1) 

first interrupt pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2_pin`](#structlis2dh12__params__t_1ad0de82d6bec52beb9ef5399ddf12d021) 

second interrupt pin

#### `public `[`lis2dh12_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga06364327a9b994b352adeb91fccf3965)` `[`scale`](#structlis2dh12__params__t_1abd2b15fdf78091a1deabc38f54af4237) 

sampling sensitivity used

#### `public `[`lis2dh12_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gaab3a9480859693923073b2465d8157f5)` `[`rate`](#structlis2dh12__params__t_1a7913a53e2359719d62765b8599c94417) 

sampling rate used

#### `public `[`lis2dh12_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gab4328b599a0535b4a00c3d82f49dbb07)` `[`resolution`](#structlis2dh12__params__t_1a48fdc8b42b5852c9003acd4ea2bbaace) 

resolution used

# struct `lis2dh12_highpass_t` 

LIS2DH12 high pass config values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lis2dh12_hp_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gadaa852cfc21e51bcf6d24c50edda7544)` `[`Highpass_mode`](#structlis2dh12__highpass__t_1a9ca44ffdfed7b90013cb44384d859bfc) | set the High pass mode
`public `[`lis2dh12_hp_freq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga78bbb6a84a89391ed0e88bf4fc29b31f)` `[`Highpass_freq`](#structlis2dh12__highpass__t_1ac625f7d7761965af2edf952adfe5783f) | set the High pass cutoff frequency \ related to device rate
`public bool `[`CLICK_enable`](#structlis2dh12__highpass__t_1a35c793c3ca66502d4c81b7d801b07638) | enables filter for click data
`public bool `[`INT1_enable`](#structlis2dh12__highpass__t_1a8b621689db187d7bacb6605f332c1acb) | enables filter for AOI on interrupt 1
`public bool `[`INT2_enable`](#structlis2dh12__highpass__t_1a005d69330754d65660d2972b7a292e1b) | enables filter for AOI on interrupt 2
`public bool `[`DATA_OUT_enable`](#structlis2dh12__highpass__t_1aebe78d7b57da8bed831c899169266d1f) | enables filter for data output

## Members

#### `public `[`lis2dh12_hp_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1gadaa852cfc21e51bcf6d24c50edda7544)` `[`Highpass_mode`](#structlis2dh12__highpass__t_1a9ca44ffdfed7b90013cb44384d859bfc) 

set the High pass mode

#### `public `[`lis2dh12_hp_freq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga78bbb6a84a89391ed0e88bf4fc29b31f)` `[`Highpass_freq`](#structlis2dh12__highpass__t_1ac625f7d7761965af2edf952adfe5783f) 

set the High pass cutoff frequency \ related to device rate

#### `public bool `[`CLICK_enable`](#structlis2dh12__highpass__t_1a35c793c3ca66502d4c81b7d801b07638) 

enables filter for click data

#### `public bool `[`INT1_enable`](#structlis2dh12__highpass__t_1a8b621689db187d7bacb6605f332c1acb) 

enables filter for AOI on interrupt 1

#### `public bool `[`INT2_enable`](#structlis2dh12__highpass__t_1a005d69330754d65660d2972b7a292e1b) 

enables filter for AOI on interrupt 2

#### `public bool `[`DATA_OUT_enable`](#structlis2dh12__highpass__t_1aebe78d7b57da8bed831c899169266d1f) 

enables filter for data output

# struct `lis2dh12_click_t` 

LIS2DH12 click config values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`enable_DOUBLE`](#structlis2dh12__click__t_1a0d932688c27ccfedfb0f6acc3424cdec) | otherwise single click for given axis are enabled
`public bool `[`enable_X_CLICK`](#structlis2dh12__click__t_1abc64a1f13366aeb02c850e8d2ec1c67c) | enable double pr single click for X axes
`public bool `[`enable_Y_CLICK`](#structlis2dh12__click__t_1abc283d14b24ac77e111491ea443ed5a5) | enable double pr single click for Y axes
`public bool `[`enable_Z_CLICK`](#structlis2dh12__click__t_1aead166276e45a790c6beb97b83bfa320) | enable double pr single click for Z axes
`public bool `[`noINT_latency`](#structlis2dh12__click__t_1a676465ab8ac7577cdbbfefb8ebc238c4) | if "0" interrupt stays high for TIME_latency setting \ if "1" interrupt stays high until CLICK_SRC is read
`public uint8_t `[`CLICK_thold`](#structlis2dh12__click__t_1ac61dd4dd3418e790ace2526fa323dda6) | set click threshold
`public uint8_t `[`TIME_limit`](#structlis2dh12__click__t_1ae861700c838eb3d261e12353f925e238) | set number of ODR cycles for time limit over threshold value
`public uint8_t `[`TIME_latency`](#structlis2dh12__click__t_1a417eea305481393acccaa917e0e9ddb1) | set number of ODR cycles for latency after a click
`public uint8_t `[`TIME_window`](#structlis2dh12__click__t_1aa2b77196af6bbccabc165e04c83375ac) | set number of ODR cycles for window between clicks

## Members

#### `public bool `[`enable_DOUBLE`](#structlis2dh12__click__t_1a0d932688c27ccfedfb0f6acc3424cdec) 

otherwise single click for given axis are enabled

#### `public bool `[`enable_X_CLICK`](#structlis2dh12__click__t_1abc64a1f13366aeb02c850e8d2ec1c67c) 

enable double pr single click for X axes

#### `public bool `[`enable_Y_CLICK`](#structlis2dh12__click__t_1abc283d14b24ac77e111491ea443ed5a5) 

enable double pr single click for Y axes

#### `public bool `[`enable_Z_CLICK`](#structlis2dh12__click__t_1aead166276e45a790c6beb97b83bfa320) 

enable double pr single click for Z axes

#### `public bool `[`noINT_latency`](#structlis2dh12__click__t_1a676465ab8ac7577cdbbfefb8ebc238c4) 

if "0" interrupt stays high for TIME_latency setting \ if "1" interrupt stays high until CLICK_SRC is read

#### `public uint8_t `[`CLICK_thold`](#structlis2dh12__click__t_1ac61dd4dd3418e790ace2526fa323dda6) 

set click threshold

#### `public uint8_t `[`TIME_limit`](#structlis2dh12__click__t_1ae861700c838eb3d261e12353f925e238) 

set number of ODR cycles for time limit over threshold value

#### `public uint8_t `[`TIME_latency`](#structlis2dh12__click__t_1a417eea305481393acccaa917e0e9ddb1) 

set number of ODR cycles for latency after a click

#### `public uint8_t `[`TIME_window`](#structlis2dh12__click__t_1aa2b77196af6bbccabc165e04c83375ac) 

set number of ODR cycles for window between clicks

# struct `lis2dh12_t` 

LIS2DH12 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`lis2dh12_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__params__t)` * `[`p`](#structlis2dh12__t_1a439ebc91608eb960357e6de7ab931bf5) | device configuration

## Members

#### `public const `[`lis2dh12_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis2dh12.md#structlis2dh12__params__t)` * `[`p`](#structlis2dh12__t_1a439ebc91608eb960357e6de7ab931bf5) 

device configuration

# struct `lis2dh12_int_params_t` 

Parameter for interrupt configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`int_config`](#structlis2dh12__int__params__t_1a1275d8cbe2303263019cf097ca75b9be) | values for configuration
`public uint8_t `[`int_threshold`](#structlis2dh12__int__params__t_1a367c23792bdf8f9a9d9e907e7be7ea85) | the threshold for triggering interrupt, threshold in range 0-127
`public uint8_t `[`int_duration`](#structlis2dh12__int__params__t_1ad75fd60f5d84007ceff14ac534daab75) | time between two interrupts ODR section in CTRL_REG1, duration in range 0-127
`public uint8_t `[`int_type`](#structlis2dh12__int__params__t_1a66f2f90e1601680e5636f6ec871aae41) | values for type of interrupts

## Members

#### `public uint8_t `[`int_config`](#structlis2dh12__int__params__t_1a1275d8cbe2303263019cf097ca75b9be) 

values for configuration

#### `public uint8_t `[`int_threshold`](#structlis2dh12__int__params__t_1a367c23792bdf8f9a9d9e907e7be7ea85) 

the threshold for triggering interrupt, threshold in range 0-127

#### `public uint8_t `[`int_duration`](#structlis2dh12__int__params__t_1ad75fd60f5d84007ceff14ac534daab75) 

time between two interrupts ODR section in CTRL_REG1, duration in range 0-127

#### `public uint8_t `[`int_type`](#structlis2dh12__int__params__t_1a66f2f90e1601680e5636f6ec871aae41) 

values for type of interrupts

# struct `lis2dh12_fifo_t` 

LIS2DH12 FIFO config values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lis2dh12_fifo_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga29c8ba60b6017ac79495497dfb5ddc3c)` `[`FIFO_mode`](#structlis2dh12__fifo__t_1ad941cccbaa8e7163ae083a6109ec9b27) | set FIFO mode
`public uint8_t `[`FIFO_watermark`](#structlis2dh12__fifo__t_1a8c769b489a982a9e17d2fa7b854a7892) | set the FIFO watermark level
`public bool `[`FIFO_set_INT2`](#structlis2dh12__fifo__t_1a31abbd54ce3ffd8ad8ee6f13c1ca4fd4) | sets the FIFO interrupt to INT2, otherwise INT1

## Members

#### `public `[`lis2dh12_fifo_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis2dh12_1ga29c8ba60b6017ac79495497dfb5ddc3c)` `[`FIFO_mode`](#structlis2dh12__fifo__t_1ad941cccbaa8e7163ae083a6109ec9b27) 

set FIFO mode

#### `public uint8_t `[`FIFO_watermark`](#structlis2dh12__fifo__t_1a8c769b489a982a9e17d2fa7b854a7892) 

set the FIFO watermark level

#### `public bool `[`FIFO_set_INT2`](#structlis2dh12__fifo__t_1a31abbd54ce3ffd8ad8ee6f13c1ca4fd4) 

sets the FIFO interrupt to INT2, otherwise INT1

