---
title: api-drivers_dose.md
description: api-drivers_dose.md
---
# group `drivers_dose` 

Driver for connecting RIOT devices using a single bus wire.

AboutThis driver enables RIOT nodes to communicate by Ethernet over a serial bus. This enables them to interact in an easy and cheap manner using a single bus wire with very low hardware requirements: The used microcontrollers just need to feature at least one UART and one optional GPIO that is able to raise interrupts.

WiringDOSE wiringDOSE wiringDOSE wiringDOSE wiring

For bus access, you need a CAN transceiver, since the DOSE uses the PHY layer of CAN for the electrical connection of the nodes. Every transceiver IC operating with the right voltage levels should do. (If you are on a 3.3V MCU, you could use an IC such as the SN65HVD233.)

Basically, UART TX and RX are connected to respective pins of the transceiver. In addition, the RX pin can also be connected to the sense GPIO if the UART does not implement the `periph_uart_rxstart_irq` feature. In this case, the bus allocation can be detected more precisely and collisions are less likely.

How it worksSome technical details for those interested: The Ethernet frames are sent onto the bus using `[uart_write()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gae2360fb0e880c387cfc02dd0cbd1c113)` while observing the received echo from the bus. This way collisions are detected (received echo != transmitted octet) and retransmissions are scheduled. The frames are appended with a CRC16 to protect the system from transmission errors.

A note on high data ratesWhen using high UART data rates (1 MBit/s and above) per-byte overhead becomes significant. A major factor here is setting (software) timers which are used to catch error conditions. To speed up the TX path it is therefore recommended to implement hardware collision detection (if available) to avoid the need for setting a timeout for each byte transmitted.

To speed up the more critical RX path, enable the `dose_watchdog` module. This requires a dedicated hardware timer `DOSE_TIMER_DEV` to be configured in e.g. `board.h`. The timer is shared between all DOSE interfaces and will periodically check if any interface does not make progress with receiving a frame (payload marker did not advance between two timer periods) and abort the RX process.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DOSE_FRAME_CRC_LEN`](#group__drivers__dose_1ga3cbae2da894b8b899e2423dd8a1b2708)            | CRC16 is used.
`define `[`CONFIG_DOSE_RX_BUF_LEN`](#group__drivers__dose_1ga1b61b0f6d22decaf13d15547cfcce80a)            | DOSE RX buffer length Should be large enough to fit at least one Ethernet frame.
`define `[`DOSE_TIMER_DEV`](#group__drivers__dose_1ga577459f726548b6854a28f6133c87889)            | Hardware timer to use with the `dose_watchdog` module.
`public void `[`dose_setup`](#group__drivers__dose_1gacb1b2c66e5d957612fd95616346da66b)`(`[`dose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dose.md#structdose__t)` * dev,const `[`dose_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dose.md#structdose__params__t)` * params,uint8_t index)`            | Setup a DOSE based device state.
`struct `[`dose_t`](#structdose__t) | DOSE netdev device.
`struct `[`dose_params_t`](#structdose__params__t) | Struct containing the required configuration.

## Members

#### `define `[`DOSE_FRAME_CRC_LEN`](#group__drivers__dose_1ga3cbae2da894b8b899e2423dd8a1b2708) 

CRC16 is used.

#### `define `[`CONFIG_DOSE_RX_BUF_LEN`](#group__drivers__dose_1ga1b61b0f6d22decaf13d15547cfcce80a) 

DOSE RX buffer length Should be large enough to fit at least one Ethernet frame.

#### `define `[`DOSE_TIMER_DEV`](#group__drivers__dose_1ga577459f726548b6854a28f6133c87889) 

Hardware timer to use with the `dose_watchdog` module.

This will be used to detect RX timeout instead of ztimer to speed up
     the RX path when high data rates / less CPU overhead is required.

#### `public void `[`dose_setup`](#group__drivers__dose_1gacb1b2c66e5d957612fd95616346da66b)`(`[`dose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dose.md#structdose__t)` * dev,const `[`dose_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dose.md#structdose__params__t)` * params,uint8_t index)` 

Setup a DOSE based device state.

#### Parameters
* `dev` Handle of the device to initialize 

* `params` Parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

# struct `dose_t` 

```
struct dose_t
  : public netdev
```  

DOSE netdev device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structdose__t_1a1129963d252b60be5850cb89d9b4e35c) | Extended netdev structure.
`public `[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` `[`mac_addr`](#structdose__t_1af1583471a46f75d691d8a1d808f4ba53) | This device's MAC address.
`public uint8_t `[`opts`](#structdose__t_1ad20e0011f1f04b91f167d19d87f93826) | Driver options.
`public `[`dose_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dose_1gadce3cc3a69672e85d98942f947ee2794)` `[`state`](#structdose__t_1a9127ced0c1272c6d36de0f727b5a7cb8) | Current state of the driver's state machine.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`state_mtx`](#structdose__t_1a37e193220feff4cac7706c6c63c3556b) | Is unlocked every time a state is (re)entered.
`public uint8_t `[`recv_buf`](#structdose__t_1ac0e3a2351369482d58ad493e2b977944) | Receive buffer for incoming frames.
`public `[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` `[`rb`](#structdose__t_1ae6c10ce4afb8c0209bf7761e78d5a71b) | Ringbuffer to store received frames.
`public void * `[`recv_buf_ptr_last`](#structdose__t_1a1ae6c764d84315f6f4f22892ecdbe376) | Last value of recv_buf_ptr when the watchdog visited.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sense_pin`](#structdose__t_1aae6d0f440a3cad274dcd3a3723021d47) | GPIO to sense for start bits on the UART's rx line.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`standby_pin`](#structdose__t_1aa5db7ca5b5021e068c9b378e6349c4e5) | GPIO to put the CAN transceiver in standby mode.
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timeout`](#structdose__t_1a11b22c27c3fbdafaf7ef85fac71d7322) | Timeout timer ensuring always to get back to IDLE state.
`public uint32_t `[`timeout_base`](#structdose__t_1a2e860ed0b59e4427b64514bc95ddeeb3) | Base timeout in us.
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structdose__t_1ae548dbb7f9ff21e3a46de9de56708140) | UART device to use.
`public uint8_t `[`uart_octet`](#structdose__t_1a2b33c272c2338b27cfa5953af9159690) | Last received octet.
`public uint8_t `[`flags`](#structdose__t_1ab10f0d7b960e53869ad5d61b4b24e39f) | Several flags.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structdose__t_1a1129963d252b60be5850cb89d9b4e35c) 

Extended netdev structure.

#### `public `[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` `[`mac_addr`](#structdose__t_1af1583471a46f75d691d8a1d808f4ba53) 

This device's MAC address.

#### `public uint8_t `[`opts`](#structdose__t_1ad20e0011f1f04b91f167d19d87f93826) 

Driver options.

#### `public `[`dose_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dose_1gadce3cc3a69672e85d98942f947ee2794)` `[`state`](#structdose__t_1a9127ced0c1272c6d36de0f727b5a7cb8) 

Current state of the driver's state machine.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`state_mtx`](#structdose__t_1a37e193220feff4cac7706c6c63c3556b) 

Is unlocked every time a state is (re)entered.

#### `public uint8_t `[`recv_buf`](#structdose__t_1ac0e3a2351369482d58ad493e2b977944) 

Receive buffer for incoming frames.

#### `public `[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` `[`rb`](#structdose__t_1ae6c10ce4afb8c0209bf7761e78d5a71b) 

Ringbuffer to store received frames.

#### `public void * `[`recv_buf_ptr_last`](#structdose__t_1a1ae6c764d84315f6f4f22892ecdbe376) 

Last value of recv_buf_ptr when the watchdog visited.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sense_pin`](#structdose__t_1aae6d0f440a3cad274dcd3a3723021d47) 

GPIO to sense for start bits on the UART's rx line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`standby_pin`](#structdose__t_1aa5db7ca5b5021e068c9b378e6349c4e5) 

GPIO to put the CAN transceiver in standby mode.

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timeout`](#structdose__t_1a11b22c27c3fbdafaf7ef85fac71d7322) 

Timeout timer ensuring always to get back to IDLE state.

#### `public uint32_t `[`timeout_base`](#structdose__t_1a2e860ed0b59e4427b64514bc95ddeeb3) 

Base timeout in us.

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structdose__t_1ae548dbb7f9ff21e3a46de9de56708140) 

UART device to use.

#### `public uint8_t `[`uart_octet`](#structdose__t_1a2b33c272c2338b27cfa5953af9159690) 

Last received octet.

#### `public uint8_t `[`flags`](#structdose__t_1ab10f0d7b960e53869ad5d61b4b24e39f) 

Several flags.

# struct `dose_params_t` 

Struct containing the required configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structdose__params__t_1a6ec4157365c38f5a56b00b04ebfee301) | UART device to use.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sense_pin`](#structdose__params__t_1ae4d0b4d04016b01e7b21b00344895ee0) | GPIO to sense for start bits on the UART's rx line.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`standby_pin`](#structdose__params__t_1ab9098b8b996b7caff771670c098786ad) | GPIO to put the CAN transceiver in standby mode.
`public uint32_t `[`baudrate`](#structdose__params__t_1a1779edcc3c0a9031458a6a1b0631d68c) | Baudrate to UART device.

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structdose__params__t_1a6ec4157365c38f5a56b00b04ebfee301) 

UART device to use.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sense_pin`](#structdose__params__t_1ae4d0b4d04016b01e7b21b00344895ee0) 

GPIO to sense for start bits on the UART's rx line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`standby_pin`](#structdose__params__t_1ab9098b8b996b7caff771670c098786ad) 

GPIO to put the CAN transceiver in standby mode.

#### `public uint32_t `[`baudrate`](#structdose__params__t_1a1779edcc3c0a9031458a6a1b0631d68c) 

Baudrate to UART device.

