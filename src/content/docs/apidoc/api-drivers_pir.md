---
title: api-drivers_pir.md
description: api-drivers_pir.md
---
# group `drivers_pir` 

Device driver interface for the PIR motion sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@239`](#group__drivers__pir_1ga5ff73139485369f629981d087e744c90)            | PIR specific return values.
`enum `[`pir_event_t`](#group__drivers__pir_1gaa9bdd14aa687ea96def0844b6e0c98e4)            | event type for a PIR sensor
`public int `[`pir_init`](#group__drivers__pir_1ga8b68967354d7615872f40077215b1a7c)`(`[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev,const `[`pir_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__params__t)` * params)`            | Initialize a PIR motion sensor.
`public `[`pir_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pir_1gaa9bdd14aa687ea96def0844b6e0c98e4)` `[`pir_get_status`](#group__drivers__pir_1ga5161ecc5540d278b49c9ba1d9d3f4c7a)`(const `[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev)`            | Read the current status of the motion sensor.
`public int `[`pir_get_occupancy`](#group__drivers__pir_1ga4c64ca7b7883d3f6c9f215d0466230f9)`(`[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev,int16_t * occup)`            | Read OCCUPANCY value.
`public int `[`pir_register_thread`](#group__drivers__pir_1ga7dd401934f11650703e023a4564a2da8)`(`[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev)`            | Register a thread for notification when state changes on the motion sensor.
`struct `[`pir_params_t`](#structpir__params__t) | Parameters needed for device initialization.
`struct `[`pir_t`](#structpir__t) | device descriptor for a PIR sensor

## Members

#### `enum `[`@239`](#group__drivers__pir_1ga5ff73139485369f629981d087e744c90) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PIR_OK            | everything went as expected
PIR_NOGPIO            | errors while initializing the GPIO
PIR_NOTHREAD            | errors while registering the thread
PIR_TIMEERR            | errors while getting the time information

PIR specific return values.

#### `enum `[`pir_event_t`](#group__drivers__pir_1gaa9bdd14aa687ea96def0844b6e0c98e4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PIR_STATUS_ACTIVE            | motion was detected
PIR_STATUS_INACTIVE            | no motion is detected

event type for a PIR sensor

#### `public int `[`pir_init`](#group__drivers__pir_1ga8b68967354d7615872f40077215b1a7c)`(`[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev,const `[`pir_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__params__t)` * params)` 

Initialize a PIR motion sensor.

The PIR motion sensor is interfaced by a single GPIO pin, specified by `gpio`.

The sensor needs up to a minute to settle down before meaningful measurements can be made.

#### Parameters
* `dev` device descriptor of an PIR sensor 

* `params` parameters of the PIR sensor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public `[`pir_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pir_1gaa9bdd14aa687ea96def0844b6e0c98e4)` `[`pir_get_status`](#group__drivers__pir_1ga5161ecc5540d278b49c9ba1d9d3f4c7a)`(const `[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev)` 

Read the current status of the motion sensor.

#### Parameters
* `dev` device descriptor of the PIR motion sensor to read from

#### Returns
1 if motion is detected, 0 otherwise

#### `public int `[`pir_get_occupancy`](#group__drivers__pir_1ga4c64ca7b7883d3f6c9f215d0466230f9)`(`[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev,int16_t * occup)` 

Read OCCUPANCY value.

#### Parameters
* `dev` device descriptor of the PIR motion sensor to read from 

* `occup` occupancy ratio [in 100 * percentage] The value is renewed when it is read. So it is percentage of occupancy since the last read.

#### Returns
0 on success, 

#### Returns
-1 on errors,

#### `public int `[`pir_register_thread`](#group__drivers__pir_1ga7dd401934f11650703e023a4564a2da8)`(`[`pir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__t)` * dev)` 

Register a thread for notification when state changes on the motion sensor.

This configures the gpio device for interrupt driven operation.

#### Parameters
* `dev` device descriptor of the PIR motion sensor to register for

#### Returns
0 on succuess, 

#### Returns
-1 on internal errors, 

#### Returns
-2 if another thread is registered already

# struct `pir_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio`](#structpir__params__t_1ae75aed2a52058854f3603f47fdcfc2f8) | GPIO device which is used.
`public bool `[`active_high`](#structpir__params__t_1a210877fc4c0c92ac7a52c5856f35478e) | Active when GPIO pin is high or not.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio`](#structpir__params__t_1ae75aed2a52058854f3603f47fdcfc2f8) 

GPIO device which is used.

#### `public bool `[`active_high`](#structpir__params__t_1a210877fc4c0c92ac7a52c5856f35478e) 

Active when GPIO pin is high or not.

# struct `pir_t` 

device descriptor for a PIR sensor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint64_t `[`start_active_time`](#structpir__t_1a65d44db5943d3f78094f13e3b804ed0f) | Time when PIR starts to be active.
`public uint64_t `[`accum_active_time`](#structpir__t_1ab23b5afe296468fa22a4d9e7ceb11b0e) | Accumulated active time.
`public uint64_t `[`last_read_time`](#structpir__t_1ade1393d01d02e5be166323ccdc4fde6a) | Last time when PIR status is read.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`msg_thread_pid`](#structpir__t_1a8cf77a7adfdc65503ebcadf680e96fe1) | thread to msg on irq
`public bool `[`active`](#structpir__t_1ab873ccfd2354057a9793e2530d1fd482) | Indicate PIR is active or not.
`public `[`pir_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__params__t)` `[`p`](#structpir__t_1aebddc6a2b293809ae63250659fdcf3fb) | Configuration parameters.

## Members

#### `public uint64_t `[`start_active_time`](#structpir__t_1a65d44db5943d3f78094f13e3b804ed0f) 

Time when PIR starts to be active.

#### `public uint64_t `[`accum_active_time`](#structpir__t_1ab23b5afe296468fa22a4d9e7ceb11b0e) 

Accumulated active time.

#### `public uint64_t `[`last_read_time`](#structpir__t_1ade1393d01d02e5be166323ccdc4fde6a) 

Last time when PIR status is read.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`msg_thread_pid`](#structpir__t_1a8cf77a7adfdc65503ebcadf680e96fe1) 

thread to msg on irq

#### `public bool `[`active`](#structpir__t_1ab873ccfd2354057a9793e2530d1fd482) 

Indicate PIR is active or not.

#### `public `[`pir_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pir.md#structpir__params__t)` `[`p`](#structpir__t_1aebddc6a2b293809ae63250659fdcf3fb) 

Configuration parameters.

