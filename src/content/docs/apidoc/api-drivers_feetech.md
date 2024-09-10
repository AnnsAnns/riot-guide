---
title: api-drivers_feetech.md
description: api-drivers_feetech.md
---
# group `drivers_feetech` 

Drivers for any device using feetech's servomotors communication bus.

The bus is mainly used for servomotors, but a device can be anything : sensors, other actuators.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@176`](#group__drivers__feetech_1gac8dc960ed0e83a06356ee2589564f7a9)            | Possible feetech return values.
`public int `[`feetech_ping`](#group__drivers__feetech_1ga19e98ac2b77264ed4a26056e96bf3ff5)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`feetech_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga17978fa6f6a1ef75cf794f51d41188ff)` id)`            | Send a PING message to a device.
`public void `[`feetech_init`](#group__drivers__feetech_1ga11ab2f988a92f4074efb177a22949d5b)`(`[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`feetech_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga17978fa6f6a1ef75cf794f51d41188ff)` id)`            | Initialize a Feetech device.
`public int `[`feetech_write8`](#group__drivers__feetech_1ga8c6bfcb7d5e4f66306b769dda0116c85)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint8_t value)`            | Write to a device 8bits address.
`public int `[`feetech_write16`](#group__drivers__feetech_1ga3b9e656f70c72b45f4147b0dc4d1dc9b)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint16_t value)`            | Write to a device 16bits address.
`public int `[`feetech_write`](#group__drivers__feetech_1ga04729dc4aed5bbc55a36bc066a4402dd)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,const uint8_t * data,size_t length)`            | Write to a device address.
`public int `[`feetech_read8`](#group__drivers__feetech_1ga6fea8e16ba8c9fa8be1e19cfaf22a908)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint8_t * value)`            | Read from a device 8bits address.
`public int `[`feetech_read16`](#group__drivers__feetech_1ga5aff0335fcac4f5eb147277091b2ea0c)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint16_t * value)`            | Read from a device 16bits address.
`public int `[`feetech_read`](#group__drivers__feetech_1ga700cf523271d930d511dd9c5d1ea0e05)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint8_t * data,size_t length)`            | Read from a device address.
`struct `[`feetech_t`](#structfeetech__t) | Descriptor struct for a feetech device.

## Members

#### `enum `[`@176`](#group__drivers__feetech_1gac8dc960ed0e83a06356ee2589564f7a9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FEETECH_OK            | Success.
FEETECH_TIMEOUT            | No response from the device.
FEETECH_BUFFER_TOO_SMALL            | Buffer is too small for the message.
FEETECH_INVALID_MESSAGE            | Invalid message received.

Possible feetech return values.

#### `public int `[`feetech_ping`](#group__drivers__feetech_1ga19e98ac2b77264ed4a26056e96bf3ff5)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`feetech_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga17978fa6f6a1ef75cf794f51d41188ff)` id)` 

Send a PING message to a device.

#### Parameters
* `stream` the stream 

* `id` the device address

#### Returns
FEETECH_OK if a device answered 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

#### `public void `[`feetech_init`](#group__drivers__feetech_1ga11ab2f988a92f4074efb177a22949d5b)`(`[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`feetech_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga17978fa6f6a1ef75cf794f51d41188ff)` id)` 

Initialize a Feetech device.

#### Parameters
* `device` the Feetech device 

* `stream` the stream 

* `id` the device address

#### `public int `[`feetech_write8`](#group__drivers__feetech_1ga8c6bfcb7d5e4f66306b769dda0116c85)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint8_t value)` 

Write to a device 8bits address.

#### Parameters
* `device` the Feetech device 

* `addr` the address to write 

* `value` the value to write

#### Returns
FEETECH_OK on success 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

#### `public int `[`feetech_write16`](#group__drivers__feetech_1ga3b9e656f70c72b45f4147b0dc4d1dc9b)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint16_t value)` 

Write to a device 16bits address.

#### Parameters
* `device` the Feetech device 

* `addr` the address to write 

* `value` the value to write

#### Returns
FEETECH_OK on success 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

#### `public int `[`feetech_write`](#group__drivers__feetech_1ga04729dc4aed5bbc55a36bc066a4402dd)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,const uint8_t * data,size_t length)` 

Write to a device address.

#### Parameters
* `device` the Feetech device 

* `addr` the address to start write 

* `data` the data to write 

* `length` the data length

#### Returns
FEETECH_OK on success 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

#### `public int `[`feetech_read8`](#group__drivers__feetech_1ga6fea8e16ba8c9fa8be1e19cfaf22a908)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint8_t * value)` 

Read from a device 8bits address.

#### Parameters
* `device` the Feetech device 

* `addr` the address to read 

* `value` the value to read

#### Returns
FEETECH_OK on success 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

#### `public int `[`feetech_read16`](#group__drivers__feetech_1ga5aff0335fcac4f5eb147277091b2ea0c)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint16_t * value)` 

Read from a device 16bits address.

#### Parameters
* `device` the Feetech device 

* `addr` the address to read 

* `value` the value to read

#### Returns
FEETECH_OK on success 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

#### `public int `[`feetech_read`](#group__drivers__feetech_1ga700cf523271d930d511dd9c5d1ea0e05)`(const `[`feetech_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_feetech.md#structfeetech__t)` * device,`[`feetech_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga322f15f6931863d5f75fa9a9a9946814)` addr,uint8_t * data,size_t length)` 

Read from a device address.

#### Parameters
* `device` the Feetech device 

* `addr` the address to start read 

* `data` the data buffer to fill 

* `length` the data length

#### Returns
FEETECH_OK on success 

#### Returns
FEETECH_TIMEOUT if the device did not answer 

#### Returns
FEETECH_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
FEETECH_INVALID_MESSAGE if an invalid message was received

# struct `feetech_t` 

Descriptor struct for a feetech device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * `[`stream`](#structfeetech__t_1a2e2bb227f901c31d401b4bfa1fda9917) | the stream used
`public `[`feetech_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga17978fa6f6a1ef75cf794f51d41188ff)` `[`id`](#structfeetech__t_1a995aa7a2bbed655dbb4c3298e9aeda7a) | the device address

## Members

#### `public `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * `[`stream`](#structfeetech__t_1a2e2bb227f901c31d401b4bfa1fda9917) 

the stream used

#### `public `[`feetech_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__feetech_1ga17978fa6f6a1ef75cf794f51d41188ff)` `[`id`](#structfeetech__t_1a995aa7a2bbed655dbb4c3298e9aeda7a) 

the device address

