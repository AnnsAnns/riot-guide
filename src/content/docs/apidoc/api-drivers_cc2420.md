---
title: api-drivers_cc2420.md
description: api-drivers_cc2420.md
---
# group `drivers_cc2420` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CC2420_PKT_MAXLEN`](#group__drivers__cc2420_1ga7cf4cf554323505c1c233a52aca1f38e)            | Maximum possible packet size in byte.
`define `[`CC2420_RSSI_OFFSET`](#group__drivers__cc2420_1ga76a10b9e295bc7003901c20462e750e9)            | RSSI offset.
`enum `[`@167`](#group__drivers__cc2420_1gab98c672c5aaffb98a9189cd99e58ff23)            | A couple of return values used in this driver.
`public void `[`cc2420_setup`](#group__drivers__cc2420_1ga5403e7570e59d635afb8e8c48a5fd2fe)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const `[`cc2420_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc2420_1ga7129aded13f475e31753fc6deded1ea7)` * params,uint8_t index)`            | Setup the device descriptor for the given device.
`public int `[`cc2420_init`](#group__drivers__cc2420_1gaa0ce5e9cc058fd84404852702e61beca)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Initialize a given CC2420 device.
`public int `[`cc2420_reset`](#group__drivers__cc2420_1gac9811078b83509f2c46b925719e94bce)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Trigger a hardware reset and configure radio with default values.
`public bool `[`cc2420_cca`](#group__drivers__cc2420_1ga88026e56a0a41864731eb85b8c7f3ef2)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Trigger a clear channel assessment.
`public void `[`cc2420_get_addr_short`](#group__drivers__cc2420_1ga1df6ad4296c4b4298aaedd414f261fbe)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint8_t * addr)`            | Get the short address of the given device.
`public void `[`cc2420_set_addr_short`](#group__drivers__cc2420_1gac5e07b68cae7c428dbe40c60a9c9d33d)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const uint8_t * addr)`            | Set the short address of the given device.
`public void `[`cc2420_get_addr_long`](#group__drivers__cc2420_1gabaeda7c33712d35704358ce8258979ee)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint8_t * addr_long)`            | Get the configured long address of the given device.
`public void `[`cc2420_set_addr_long`](#group__drivers__cc2420_1ga4f340ea1673d1cceca82f397877390e5)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const uint8_t * addr_long)`            | Set the long address of the given device.
`public uint16_t `[`cc2420_get_pan`](#group__drivers__cc2420_1gabefea788f749ba1256c634d6878e386e)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Get the configured PAN ID of the given device.
`public void `[`cc2420_set_pan`](#group__drivers__cc2420_1ga34da69b42e7c7dd8966b8295e4cd7fda)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint16_t pan)`            | Set the PAN ID of the given device.
`public uint16_t `[`cc2420_get_chan`](#group__drivers__cc2420_1ga58413f3832a6e713fef2eec199b9753f)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Get the configured channel of the given device.
`public int `[`cc2420_set_chan`](#group__drivers__cc2420_1gada44bf49b80b7d4881b7d16ba91cba5a)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint16_t chan)`            | Set the channel of the given device.
`public int16_t `[`cc2420_get_txpower`](#group__drivers__cc2420_1ga3505547ea5ed61f9d02625fca512c039)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Get the configured transmission power of the given device [in dBm].
`public void `[`cc2420_set_txpower`](#group__drivers__cc2420_1ga388532eff46b73b1c9805db565ca3232)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,int16_t txpower)`            | Set the transmission power of the given device [in dBm].
`public int `[`cc2420_set_option`](#group__drivers__cc2420_1ga4e2d3dab50c507a9228b93d7c24f8632)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint16_t option,bool state)`            | Enable or disable driver specific options.
`public int `[`cc2420_set_state`](#group__drivers__cc2420_1gae57a039a81a947cd04cc97b6ea1682af)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,`[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` state)`            | Set the state of the given device (trigger a state change)
`public `[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` `[`cc2420_get_state`](#group__drivers__cc2420_1gab0bcb0a373c9a847b1b3ff88b8f1da74)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Get the state of the given device.
`public size_t `[`cc2420_send`](#group__drivers__cc2420_1gaedbac8f277142b377f5b5126d2fd2843)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Convenience function for simply sending data.
`public size_t `[`cc2420_tx_prepare`](#group__drivers__cc2420_1ga88ce045461eb40a515e1f46b0197d974)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Prepare for sending of data.
`public void `[`cc2420_tx_exec`](#group__drivers__cc2420_1gaa1e5201aa266e4b5fb45b0f8da3aeb07)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)`            | Trigger sending of data previously loaded into transmit buffer.
`public int `[`cc2420_rx`](#group__drivers__cc2420_1ga4c39f7a16aadcbb1c73456d37cd68096)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint8_t * buf,size_t max_len,void * info)`            | Read a chunk of data from the receive buffer of the given device.
`struct `[`cc2420_params`](#structcc2420__params) | Struct holding all parameters needed for device initialization.
`struct `[`cc2420_t`](#structcc2420__t) | Device descriptor for CC2420 radio devices.

## Members

#### `define `[`CC2420_PKT_MAXLEN`](#group__drivers__cc2420_1ga7cf4cf554323505c1c233a52aca1f38e) 

Maximum possible packet size in byte.

#### `define `[`CC2420_RSSI_OFFSET`](#group__drivers__cc2420_1ga76a10b9e295bc7003901c20462e750e9) 

RSSI offset.

#### `enum `[`@167`](#group__drivers__cc2420_1gab98c672c5aaffb98a9189cd99e58ff23) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CC2420_RET_CHAN_OK            | 

A couple of return values used in this driver.

#### `public void `[`cc2420_setup`](#group__drivers__cc2420_1ga5403e7570e59d635afb8e8c48a5fd2fe)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const `[`cc2420_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc2420_1ga7129aded13f475e31753fc6deded1ea7)` * params,uint8_t index)` 

Setup the device descriptor for the given device.

#### Parameters
* `dev` device descriptor 

* `params` device parameters 

* `index` index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`cc2420_init`](#group__drivers__cc2420_1gaa0ce5e9cc058fd84404852702e61beca)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Initialize a given CC2420 device.

#### Parameters
* `dev` device descriptor

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`cc2420_reset`](#group__drivers__cc2420_1gac9811078b83509f2c46b925719e94bce)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Trigger a hardware reset and configure radio with default values.

#### Parameters
* `dev` device to reset

#### Returns
TODO

#### `public bool `[`cc2420_cca`](#group__drivers__cc2420_1ga88026e56a0a41864731eb85b8c7f3ef2)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Trigger a clear channel assessment.

#### Parameters
* `dev` device to use

#### Returns
true if channel is clear 

#### Returns
false if channel is busy

#### `public void `[`cc2420_get_addr_short`](#group__drivers__cc2420_1ga1df6ad4296c4b4298aaedd414f261fbe)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint8_t * addr)` 

Get the short address of the given device.

#### Parameters
* `dev` device to read from 

* `addr` memory to write the 2 byte address into

#### `public void `[`cc2420_set_addr_short`](#group__drivers__cc2420_1gac5e07b68cae7c428dbe40c60a9c9d33d)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const uint8_t * addr)` 

Set the short address of the given device.

#### Parameters
* `dev` device to write to 

* `addr` (2-byte) short address to set

#### `public void `[`cc2420_get_addr_long`](#group__drivers__cc2420_1gabaeda7c33712d35704358ce8258979ee)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint8_t * addr_long)` 

Get the configured long address of the given device.

#### Parameters
* `dev` device to read from 

* `addr_long` buffer to save the read address

#### Returns
the currently set (8-byte) long address

#### `public void `[`cc2420_set_addr_long`](#group__drivers__cc2420_1ga4f340ea1673d1cceca82f397877390e5)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const uint8_t * addr_long)` 

Set the long address of the given device.

#### Parameters
* `dev` device to write to 

* `addr_long` (8-byte) long address to set

#### `public uint16_t `[`cc2420_get_pan`](#group__drivers__cc2420_1gabefea788f749ba1256c634d6878e386e)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Get the configured PAN ID of the given device.

#### Parameters
* `dev` device to read from

#### Returns
the currently set PAN ID

#### `public void `[`cc2420_set_pan`](#group__drivers__cc2420_1ga34da69b42e7c7dd8966b8295e4cd7fda)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint16_t pan)` 

Set the PAN ID of the given device.

#### Parameters
* `dev` device to write to 

* `pan` PAN ID to set

#### `public uint16_t `[`cc2420_get_chan`](#group__drivers__cc2420_1ga58413f3832a6e713fef2eec199b9753f)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Get the configured channel of the given device.

#### Parameters
* `dev` device to read from

#### Returns
the currently set channel

#### `public int `[`cc2420_set_chan`](#group__drivers__cc2420_1gada44bf49b80b7d4881b7d16ba91cba5a)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint16_t chan)` 

Set the channel of the given device.

#### Parameters
* `dev` device to write to 

* `chan` channel to set

#### `public int16_t `[`cc2420_get_txpower`](#group__drivers__cc2420_1ga3505547ea5ed61f9d02625fca512c039)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Get the configured transmission power of the given device [in dBm].

#### Parameters
* `dev` device to read from

#### Returns
configured transmission power in dBm

#### `public void `[`cc2420_set_txpower`](#group__drivers__cc2420_1ga388532eff46b73b1c9805db565ca3232)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,int16_t txpower)` 

Set the transmission power of the given device [in dBm].

If the device does not support the exact dBm value given, it will set a value as close as possible to the given value. If the given value is larger or lower then the maximal or minimal possible value, the min or max value is set, respectively.

#### Parameters
* `dev` device to write to 

* `txpower` transmission power in dBm

#### `public int `[`cc2420_set_option`](#group__drivers__cc2420_1ga4e2d3dab50c507a9228b93d7c24f8632)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint16_t option,bool state)` 

Enable or disable driver specific options.

#### Parameters
* `dev` device to set/clear option flag for 

* `option` option to enable/disable 

* `state` true for enable, false for disable

#### `public int `[`cc2420_set_state`](#group__drivers__cc2420_1gae57a039a81a947cd04cc97b6ea1682af)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,`[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` state)` 

Set the state of the given device (trigger a state change)

#### Parameters
* `dev` device to change state of 

* `state` the targeted new state

#### `public `[`netopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)` `[`cc2420_get_state`](#group__drivers__cc2420_1gab0bcb0a373c9a847b1b3ff88b8f1da74)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Get the state of the given device.

#### Parameters
* `dev` device to change state of

#### Returns
the device's current state

#### `public size_t `[`cc2420_send`](#group__drivers__cc2420_1gaedbac8f277142b377f5b5126d2fd2843)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Convenience function for simply sending data.

This function ignores the PRELOADING option

#### Parameters
* `dev` device to use for sending 

* `iolist` data to send (must include IEEE802.15.4 header)

#### Returns
number of bytes that were actually send 

#### Returns
0 on error

#### `public size_t `[`cc2420_tx_prepare`](#group__drivers__cc2420_1ga88ce045461eb40a515e1f46b0197d974)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Prepare for sending of data.

This function puts the given device into the TX state, so no receiving of data is possible after it was called.

#### Parameters
* `dev` device to prepare for sending 

* `iolist` data to prepare (must include IEEE802.15.4 header)

#### `public void `[`cc2420_tx_exec`](#group__drivers__cc2420_1gaa1e5201aa266e4b5fb45b0f8da3aeb07)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev)` 

Trigger sending of data previously loaded into transmit buffer.

#### Parameters
* `dev` device to trigger

#### `public int `[`cc2420_rx`](#group__drivers__cc2420_1ga4c39f7a16aadcbb1c73456d37cd68096)`(`[`cc2420_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc2420.md#structcc2420__t)` * dev,uint8_t * buf,size_t max_len,void * info)` 

Read a chunk of data from the receive buffer of the given device.

#### Parameters
* `dev` device to read from 

* `buf` buffer to write data to 

* `max_len` number of bytes to read from device 

* `info` to be removed

#### Returns
the number of bytes in the Rx FIFO 

#### Returns
the number of bytes written to `buf` if present

# struct `cc2420_params` 

Struct holding all parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structcc2420__params_1aea0f0e95586584d4dbeedb32389f98c5) | SPI bus the device is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structcc2420__params_1a5bed35504ecd68c9273833a001a7808e) | SPI speed to use.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_cs`](#structcc2420__params_1a81463c27b9b547cc32a20b43ac90afa6) | pin connected to chip select
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_fifo`](#structcc2420__params_1a674bf62b39e3b97616ca58e6fa63eae9) | pin connected to the FIFO interrupt pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_fifop`](#structcc2420__params_1acf4329f89e5cf2a3abf170a723f9c99c) | pin connected to the FIFOP interrupt pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_cca`](#structcc2420__params_1a26674e193276d652070e87b0f656cf8d) | pin connected to CCA
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_sfd`](#structcc2420__params_1af61c00f52fdb640f0caae6e17367e7fb) | pin connected to 'start of frame delimiter'
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_vrefen`](#structcc2420__params_1ac48c5124b69184fb69b2c605a79b25b5) | pin connected to the Vref enable pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_reset`](#structcc2420__params_1a2a2aaeea9cbc11ad7ca096e133c2bdbd) | pin connected to the reset pin

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structcc2420__params_1aea0f0e95586584d4dbeedb32389f98c5) 

SPI bus the device is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structcc2420__params_1a5bed35504ecd68c9273833a001a7808e) 

SPI speed to use.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_cs`](#structcc2420__params_1a81463c27b9b547cc32a20b43ac90afa6) 

pin connected to chip select

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_fifo`](#structcc2420__params_1a674bf62b39e3b97616ca58e6fa63eae9) 

pin connected to the FIFO interrupt pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_fifop`](#structcc2420__params_1acf4329f89e5cf2a3abf170a723f9c99c) 

pin connected to the FIFOP interrupt pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_cca`](#structcc2420__params_1a26674e193276d652070e87b0f656cf8d) 

pin connected to CCA

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_sfd`](#structcc2420__params_1af61c00f52fdb640f0caae6e17367e7fb) 

pin connected to 'start of frame delimiter'

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_vrefen`](#structcc2420__params_1ac48c5124b69184fb69b2c605a79b25b5) 

pin connected to the Vref enable pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_reset`](#structcc2420__params_1a2a2aaeea9cbc11ad7ca096e133c2bdbd) 

pin connected to the reset pin

# struct `cc2420_t` 

Device descriptor for CC2420 radio devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structcc2420__t_1ad9ae597a31e26ebb5844cad5f38f65b3) | netdev parent struct
`public `[`cc2420_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc2420_1ga7129aded13f475e31753fc6deded1ea7)` `[`params`](#structcc2420__t_1a8c96d86ebc5952b2d9d3ca388ac07be3) | hardware interface configuration
`public uint8_t `[`state`](#structcc2420__t_1aa69f070e65571f63eac165590b1b97eb) | current state of the radio
`public uint16_t `[`options`](#structcc2420__t_1a288c0edf0e7497a8c2223baa950c15e8) | state of used options

## Members

#### `public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structcc2420__t_1ad9ae597a31e26ebb5844cad5f38f65b3) 

netdev parent struct

#### `public `[`cc2420_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc2420_1ga7129aded13f475e31753fc6deded1ea7)` `[`params`](#structcc2420__t_1a8c96d86ebc5952b2d9d3ca388ac07be3) 

hardware interface configuration

#### `public uint8_t `[`state`](#structcc2420__t_1aa69f070e65571f63eac165590b1b97eb) 

current state of the radio

#### `public uint16_t `[`options`](#structcc2420__t_1a288c0edf0e7497a8c2223baa950c15e8) 

state of used options

