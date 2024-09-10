---
title: api-drivers_ir_nec.md
description: api-drivers_ir_nec.md
---
# group `drivers_ir_nec` 

Receives commands from NEC IR remotes.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`ir_nec_init`](#group__drivers__ir__nec_1gae56f3c55dd647c45206fcae8c82a4e23)`(`[`ir_nec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__t)` * dev,const `[`ir_nec_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__params__t)` * params)`            | Initialize the given device.
`public int `[`ir_nec_read`](#group__drivers__ir__nec_1ga6eb19e4a8f4e0478154ec1f9272ee916)`(`[`ir_nec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__t)` * dev,`[`ir_nec_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__cmd__t)` * command)`            | Read a command packet.
`struct `[`ir_nec_cmd_t`](#structir__nec__cmd__t) | NEC command structure.
`struct `[`ir_nec_params_t`](#structir__nec__params__t) | Device initialization parameters.
`struct `[`ir_nec_t`](#structir__nec__t) | Device descriptor for the driver.

## Members

#### `public int `[`ir_nec_init`](#group__drivers__ir__nec_1gae56f3c55dd647c45206fcae8c82a4e23)`(`[`ir_nec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__t)` * dev,const `[`ir_nec_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__params__t)` * params)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `params` Initialization parameters

#### Returns
0 on success

#### `public int `[`ir_nec_read`](#group__drivers__ir__nec_1ga6eb19e4a8f4e0478154ec1f9272ee916)`(`[`ir_nec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__t)` * dev,`[`ir_nec_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ir_nec.md#structir__nec__cmd__t)` * command)` 

Read a command packet.

Blocks until one is received

#### Parameters
* `dev` Device descriptor of the driver 

* `command` Structure to write the result into

#### Parameters
* `0` Success 

* `-1` Isrpipe returned too few bytes. Should never happen

# struct `ir_nec_cmd_t` 

NEC command structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`addr`](#structir__nec__cmd__t_1a78b8f19b5506f79e66c6183abcf352ba) | Address (usually 0, depends on the remote)
`public uint8_t `[`cmd`](#structir__nec__cmd__t_1a42110615174b4356164bd5f7209cc28c) | Command.

## Members

#### `public uint8_t `[`addr`](#structir__nec__cmd__t_1a78b8f19b5506f79e66c6183abcf352ba) 

Address (usually 0, depends on the remote)

#### `public uint8_t `[`cmd`](#structir__nec__cmd__t_1a42110615174b4356164bd5f7209cc28c) 

Command.

# struct `ir_nec_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structir__nec__params__t_1a74af7c1b602d4cfd9580360cf1ca1034) | Input pin.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structir__nec__params__t_1a74af7c1b602d4cfd9580360cf1ca1034) 

Input pin.

# struct `ir_nec_t` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structir__nec__t_1a96e65a74b69955aeb7b99c0d6a63c042) | Input pin.
`public `[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` `[`isrpipe`](#structir__nec__t_1af5a8f7cc203532a33fc73aa55ea604ac) | Internal pipe for commands.
`public uint32_t `[`last_rising`](#structir__nec__t_1a5edec3233eda8296efe830b89219ada4) | Timestamp of the last rising edge.
`public uint32_t `[`data`](#structir__nec__t_1ab31ba51568f690e66faba866a381408a) | Data packet being received.
`public uint8_t `[`read_bits`](#structir__nec__t_1a20318ffc4c644ce1e9902056e3c63faa) | Number of bits read so far.
`public uint8_t `[`isrpipe_buf`](#structir__nec__t_1aea8f4f742650e0e5104452508748f6cf) | Buffer for the isrpipe.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structir__nec__t_1a96e65a74b69955aeb7b99c0d6a63c042) 

Input pin.

#### `public `[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` `[`isrpipe`](#structir__nec__t_1af5a8f7cc203532a33fc73aa55ea604ac) 

Internal pipe for commands.

#### `public uint32_t `[`last_rising`](#structir__nec__t_1a5edec3233eda8296efe830b89219ada4) 

Timestamp of the last rising edge.

#### `public uint32_t `[`data`](#structir__nec__t_1ab31ba51568f690e66faba866a381408a) 

Data packet being received.

#### `public uint8_t `[`read_bits`](#structir__nec__t_1a20318ffc4c644ce1e9902056e3c63faa) 

Number of bits read so far.

0xff if not currently reading

#### `public uint8_t `[`isrpipe_buf`](#structir__nec__t_1aea8f4f742650e0e5104452508748f6cf) 

Buffer for the isrpipe.

