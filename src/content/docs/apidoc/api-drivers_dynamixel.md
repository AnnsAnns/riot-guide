---
title: api-drivers_dynamixel.md
description: api-drivers_dynamixel.md
---
# group `drivers_dynamixel` 

Drivers for any device using dynamixel's servomotors communication bus.

The bus is mainly used for servomotors, but a device can be anything : sensors, other actuators.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@174`](#group__drivers__dynamixel_1ga12acb3634428eafc5724df6d836f4e64)            | Possible dynamixel return values.
`public int `[`dynamixel_ping`](#group__drivers__dynamixel_1gae0700be123377550ea01ee6a5868621b)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`dynamixel_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga539dc8e7a3a968b62adbbd139213ba95)` id)`            | Send a PING message to a device.
`public void `[`dynamixel_init`](#group__drivers__dynamixel_1gac6c381677ee2652ff095ce85f6cef126)`(`[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`dynamixel_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga539dc8e7a3a968b62adbbd139213ba95)` id)`            | Initialize a Dynamixel device.
`public int `[`dynamixel_write8`](#group__drivers__dynamixel_1gaefd490f293e501c2c7928cb6ce873d8e)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint8_t value)`            | Write to a device 8bits register.
`public int `[`dynamixel_write16`](#group__drivers__dynamixel_1ga8a0b627dab3778b0daab9d47b1d456f2)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint16_t value)`            | Write to a device 16bits register.
`public int `[`dynamixel_write`](#group__drivers__dynamixel_1gab584c968903e2b15c6922d831b7339f2)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,const uint8_t * data,size_t length)`            | Write to a device address.
`public int `[`dynamixel_read8`](#group__drivers__dynamixel_1ga47eed7ca3311619d5e1bc92dc24a4252)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint8_t * value)`            | Read from a device 8bits register.
`public int `[`dynamixel_read16`](#group__drivers__dynamixel_1gae00bf5c8950351112c404b8398f91719)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint16_t * value)`            | Read from a device 16bits register.
`public int `[`dynamixel_read`](#group__drivers__dynamixel_1gafb6861d72fb29ac8089f69cdb9f7e10b)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint8_t * data,size_t length)`            | Read from a device address.
`struct `[`dynamixel_t`](#structdynamixel__t) | Descriptor struct for a dynamixel device.

## Members

#### `enum `[`@174`](#group__drivers__dynamixel_1ga12acb3634428eafc5724df6d836f4e64) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DYNAMIXEL_OK            | Success.
DYNAMIXEL_TIMEOUT            | No response from the device.
DYNAMIXEL_BUFFER_TOO_SMALL            | Buffer is too small for the message.
DYNAMIXEL_INVALID_MESSAGE            | Invalid message received.

Possible dynamixel return values.

#### `public int `[`dynamixel_ping`](#group__drivers__dynamixel_1gae0700be123377550ea01ee6a5868621b)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`dynamixel_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga539dc8e7a3a968b62adbbd139213ba95)` id)` 

Send a PING message to a device.

#### Parameters
* `stream` the stream 

* `id` the device address

#### Returns
DYNAMIXEL_OK if a device answered 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

#### `public void `[`dynamixel_init`](#group__drivers__dynamixel_1gac6c381677ee2652ff095ce85f6cef126)`(`[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * stream,`[`dynamixel_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga539dc8e7a3a968b62adbbd139213ba95)` id)` 

Initialize a Dynamixel device.

#### Parameters
* `device` the Dynamixel device 

* `stream` the stream 

* `id` the device address

#### `public int `[`dynamixel_write8`](#group__drivers__dynamixel_1gaefd490f293e501c2c7928cb6ce873d8e)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint8_t value)` 

Write to a device 8bits register.

#### Parameters
* `device` the Dynamixel device 

* `reg` the register to write 

* `value` the value to write

#### Returns
DYNAMIXEL_OK on success 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

#### `public int `[`dynamixel_write16`](#group__drivers__dynamixel_1ga8a0b627dab3778b0daab9d47b1d456f2)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint16_t value)` 

Write to a device 16bits register.

#### Parameters
* `device` the Dynamixel device 

* `reg` the register to write 

* `value` the value to write

#### Returns
DYNAMIXEL_OK on success 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

#### `public int `[`dynamixel_write`](#group__drivers__dynamixel_1gab584c968903e2b15c6922d831b7339f2)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,const uint8_t * data,size_t length)` 

Write to a device address.

#### Parameters
* `device` the Dynamixel device 

* `reg` the address to start write 

* `data` the data to write 

* `length` the data length

#### Returns
DYNAMIXEL_OK on success 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

#### `public int `[`dynamixel_read8`](#group__drivers__dynamixel_1ga47eed7ca3311619d5e1bc92dc24a4252)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint8_t * value)` 

Read from a device 8bits register.

#### Parameters
* `device` the Dynamixel device 

* `reg` the register to read 

* `value` the value to read

#### Returns
DYNAMIXEL_OK on success 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

#### `public int `[`dynamixel_read16`](#group__drivers__dynamixel_1gae00bf5c8950351112c404b8398f91719)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint16_t * value)` 

Read from a device 16bits register.

#### Parameters
* `device` the Dynamixel device 

* `reg` the register to read 

* `value` the value to read

#### Returns
DYNAMIXEL_OK on success 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

#### `public int `[`dynamixel_read`](#group__drivers__dynamixel_1gafb6861d72fb29ac8089f69cdb9f7e10b)`(const `[`dynamixel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dynamixel.md#structdynamixel__t)` * device,`[`dynamixel_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga15b145cc42b9600b981deb90a9786a8b)` reg,uint8_t * data,size_t length)` 

Read from a device address.

#### Parameters
* `device` the Dynamixel device 

* `reg` the address to start read 

* `data` the data buffer to fill 

* `length` the data length

#### Returns
DYNAMIXEL_OK on success 

#### Returns
DYNAMIXEL_TIMEOUT if the device did not answer 

#### Returns
DYNAMIXEL_BUFFER_TOO_SMALL if buffer is too small for the message 

#### Returns
DYNAMIXEL_INVALID_MESSAGE if an invalid message was received

# struct `dynamixel_t` 

Descriptor struct for a dynamixel device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * `[`stream`](#structdynamixel__t_1a5bda8f1b0392f20e7ecdb0f33220ab88) | the stream used
`public `[`dynamixel_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga539dc8e7a3a968b62adbbd139213ba95)` `[`id`](#structdynamixel__t_1ab8bf4370cc019a4ff70acbd6685c56e5) | the device address

## Members

#### `public `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * `[`stream`](#structdynamixel__t_1a5bda8f1b0392f20e7ecdb0f33220ab88) 

the stream used

#### `public `[`dynamixel_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dynamixel_1ga539dc8e7a3a968b62adbbd139213ba95)` `[`id`](#structdynamixel__t_1ab8bf4370cc019a4ff70acbd6685c56e5) 

the device address

