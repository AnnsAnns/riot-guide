---
title: api-drivers_candev.md
description: api-drivers_candev.md
---
# group `drivers_candev` 

Definitions for low-level CAN driver interface.

This is the CAN controller generic driver interface

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`candev_event_t`](#group__drivers__candev_1gaa6988ac26d11c95f4c96dce4e2276e58)            | Possible event types that are sent from the device driver to the upper layer.
`struct `[`candev`](#structcandev) | Structure to hold driver state.
`struct `[`candev_driver`](#structcandev__driver) | Structure to hold driver interface -> function mapping.

## Members

#### `enum `[`candev_event_t`](#group__drivers__candev_1gaa6988ac26d11c95f4c96dce4e2276e58) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CANDEV_EVENT_NOEVENT            | no event, used internally
CANDEV_EVENT_ISR            | driver needs its ISR handled
CANDEV_EVENT_WAKE_UP            | driver has been woken up by bus
CANDEV_EVENT_TX_CONFIRMATION            | a packet has been sent
CANDEV_EVENT_TIMEOUT_TX_CONF            | tx conf timeout received
CANDEV_EVENT_RX_INDICATION            | a packet has been received
CANDEV_EVENT_TX_ERROR            | there was an error when transmitting
CANDEV_EVENT_RX_ERROR            | there was an error when receiving
CANDEV_EVENT_BUS_OFF            | bus-off detected
CANDEV_EVENT_ERROR_PASSIVE            | driver switched in error passive
CANDEV_EVENT_ERROR_WARNING            | driver reached error warning

Possible event types that are sent from the device driver to the upper layer.

# struct `candev` 

Structure to hold driver state.

Supposed to be extended by driver implementations. The extended structure should contain all variable driver state.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const struct `[`candev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_candev.md#structcandev__driver)` * `[`driver`](#structcandev_1a232fb3216fb514aa64ff23545b809660) | ptr to that driver's interface.
`public `[`candev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1ga4a350818414f8f46539955cc7c38c51e)` `[`event_callback`](#structcandev_1a3d04f2a60523a5e77449114712aa335c) | callback for device events
`public void * `[`isr_arg`](#structcandev_1ab80a38f6cd418594546f241ba62abe72) | argument to pass on isr event
`public struct `[`can_bittiming`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__bittiming)` `[`bittiming`](#structcandev_1ab2f7aeb1adfed714118a645368a302e8) | device bittimings
`public enum `[`can_state`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gac7ec472c26c564dd7067c49f67c8d2f7)` `[`state`](#structcandev_1a60a0d0e0a46dd7284d57820c42c59652) | device state

## Members

#### `public const struct `[`candev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_candev.md#structcandev__driver)` * `[`driver`](#structcandev_1a232fb3216fb514aa64ff23545b809660) 

ptr to that driver's interface.

#### `public `[`candev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1ga4a350818414f8f46539955cc7c38c51e)` `[`event_callback`](#structcandev_1a3d04f2a60523a5e77449114712aa335c) 

callback for device events

#### `public void * `[`isr_arg`](#structcandev_1ab80a38f6cd418594546f241ba62abe72) 

argument to pass on isr event

#### `public struct `[`can_bittiming`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__bittiming)` `[`bittiming`](#structcandev_1ab2f7aeb1adfed714118a645368a302e8) 

device bittimings

#### `public enum `[`can_state`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gac7ec472c26c564dd7067c49f67c8d2f7)` `[`state`](#structcandev_1a60a0d0e0a46dd7284d57820c42c59652) 

device state

# struct `candev_driver` 

Structure to hold driver interface -> function mapping.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`send`](#structcandev__driver_1a5d841d3f4f4ba9cd8949695a06cc33dd) | Send packet.
`public int(* `[`abort`](#structcandev__driver_1af6c3359626a925ce5da7736f5262d484) | Abort a packet sending.
`public int(* `[`init`](#structcandev__driver_1acdc2131a4df1173dfe9cb8aa6096af86) | the driver's initialization function
`public void(* `[`isr`](#structcandev__driver_1ace80e025c005af09ad0734620ba728db) | a driver's user-space ISR handler
`public int(* `[`get`](#structcandev__driver_1a2bbcbd6451d2a0fd22def33d4e3b4e8c) | Get an option value from a given CAN device.
`public int(* `[`set`](#structcandev__driver_1a8a803ccb6d1596938eafa7fb40678fec) | Set an option value for a given CAN device.
`public int(* `[`set_filter`](#structcandev__driver_1a0459697793fefefad13906cd028041d4) | Set a receive `filter`.
`public int(* `[`remove_filter`](#structcandev__driver_1af1e09e4d8325dd1d73a599a35cda20af) | Remove a `filter`.

## Members

#### `public int(* `[`send`](#structcandev__driver_1a5d841d3f4f4ba9cd8949695a06cc33dd) 

Send packet.

#### Parameters
* `dev` CAN device descriptor 

* `frame` CAN frame to send

#### Returns
< 0 on error 

#### Returns
mailbox id >= 0 if OK

#### `public int(* `[`abort`](#structcandev__driver_1af6c3359626a925ce5da7736f5262d484) 

Abort a packet sending.

#### Parameters
* `dev` CAN device descriptor 

* `frame` CAN frame to abort

#### Returns
< 0 on error 

#### Returns
0 on OK

#### `public int(* `[`init`](#structcandev__driver_1acdc2131a4df1173dfe9cb8aa6096af86) 

the driver's initialization function

#### Parameters
* `dev` CAN device descriptor

#### Returns
< 0 on error, 0 on success

#### `public void(* `[`isr`](#structcandev__driver_1ace80e025c005af09ad0734620ba728db) 

a driver's user-space ISR handler

#### Parameters
* `dev` CAN device descriptor

#### `public int(* `[`get`](#structcandev__driver_1a2bbcbd6451d2a0fd22def33d4e3b4e8c) 

Get an option value from a given CAN device.

#### Parameters
* `dev` CAN device descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximal amount of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
<0 on error

#### `public int(* `[`set`](#structcandev__driver_1a8a803ccb6d1596938eafa7fb40678fec) 

Set an option value for a given CAN device.

#### Parameters
* `dev` CAN device descriptor 

* `opt` option type 

* `value` value to set 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
<0 on error

#### `public int(* `[`set_filter`](#structcandev__driver_1a0459697793fefefad13906cd028041d4) 

Set a receive `filter`.

#### Parameters
* `dev` CAN device descriptor 

* `filter` filter to set

#### Returns
a positive filter number 

#### Returns
<0 on error

#### `public int(* `[`remove_filter`](#structcandev__driver_1af1e09e4d8325dd1d73a599a35cda20af) 

Remove a `filter`.

#### Parameters
* `dev` CAN device descriptor 

* `filter` filter to remove

#### Returns
0 on success 

#### Returns
<0 on error

