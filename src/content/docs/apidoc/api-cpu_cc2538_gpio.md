---
title: api-cpu_cc2538_gpio.md
description: api-cpu_cc2538_gpio.md
---
# group `cpu_cc2538_gpio` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GPIO_PORT_SHIFT`](#group__cpu__cc2538__gpio_1ga4bd03957600cd62f4ba25af9281a223a)            | Right-shift amount to obtain the port number from a GPIO number.
`define `[`GPIO_BITS_PER_PORT`](#group__cpu__cc2538__gpio_1gafe09c194f832cd07703ae32309cabb2c)            | Number of bits per GPIO port (8)
`define `[`GPIO_BIT_MASK`](#group__cpu__cc2538__gpio_1ga11f7b4b84dc8f1243e8ca0d8765cca4d)            | Mask to obtain the bit number from a GPIO number.
`define `[`PIN_MASK`](#group__cpu__cc2538__gpio_1ga9ba98d6f54e8e142c8df2c1f931f33d8)            | Generate a bit mask in which only the specified bit is high.
`define `[`GPIO_NUM_TO_PORT_NUM`](#group__cpu__cc2538__gpio_1ga73dadd6c522acb340389b1442dc0502b)            | Extract the GPIO port number (0-3) from a GPIO number (0-31)
`define `[`GPIO_BIT_NUM`](#group__cpu__cc2538__gpio_1ga99716e9dd6c1e5bd22092003943493f5)            | Extract the GPIO port bit number (0-7) from a GPIO number (0-31)
`define `[`GPIO_PXX_TO_NUM`](#group__cpu__cc2538__gpio_1ga9245906a88732d846982a6fc9036e22c)            | Generate a GPIO number given a port and bit number.
`define `[`GPIO_NUM_TO_DEV`](#group__cpu__cc2538__gpio_1ga23071f7396cd86a36b4a5cde1c7b680e)            | Obtain the GPIO port instance given a GPIO number (0-31)
`define `[`gpio_hardware_control`](#group__cpu__cc2538__gpio_1ga96a413422da9a4e5fbaeff1365d211fd)            | Enable hardware (peripheral) control for a given GPIO pin number.
`define `[`gpio_software_control`](#group__cpu__cc2538__gpio_1gafb6fe6a074bf2fcfe731b07794406ad7)            | Enable software control for a given GPIO pin number.
`define `[`gpio_dir_output`](#group__cpu__cc2538__gpio_1ga8647517f0e65d8673751a3cdbc85d16f)            | Configure the given GPIO as an output.
`define `[`gpio_dir_input`](#group__cpu__cc2538__gpio_1ga11189340dd82e1f4410b4f578971ca4f)            | Configure the given GPIO as an input.
`define `[`cc2538_gpio_read`](#group__cpu__cc2538__gpio_1ga47f942c7e8a80c57a9bd8d7656dbfa14)            | Read the value of the given pin.
`define `[`cc2538_gpio_clear`](#group__cpu__cc2538__gpio_1ga1e9e01b3a8d48a8b0f989c02be7b94bf)            | Set a specific GPIO output pin low.
`define `[`GPIO_BASE`](#group__cpu__cc2538__gpio_1gacce3b8a909ed8b957b4e411dfb7cbd91)            | GPIO port instance base address.
`define `[`IOC`](#group__cpu__cc2538__gpio_1gab2a4d28721130c5d980a01547c85662d)            | IOC instance definition.
`enum `[`cc2538_ioc_over_t`](#group__cpu__cc2538__gpio_1gab1b9ad7bc05b4b2a267f544fee59a362)            | Values to override pin configuration.
`struct `[`cc2538_gpio_t`](#structcc2538__gpio__t) | GPIO port component registers.
`struct `[`cc2538_ioc_t`](#structcc2538__ioc__t) | IOC port component registers.

## Members

#### `define `[`GPIO_PORT_SHIFT`](#group__cpu__cc2538__gpio_1ga4bd03957600cd62f4ba25af9281a223a) 

Right-shift amount to obtain the port number from a GPIO number.

#### `define `[`GPIO_BITS_PER_PORT`](#group__cpu__cc2538__gpio_1gafe09c194f832cd07703ae32309cabb2c) 

Number of bits per GPIO port (8)

#### `define `[`GPIO_BIT_MASK`](#group__cpu__cc2538__gpio_1ga11f7b4b84dc8f1243e8ca0d8765cca4d) 

Mask to obtain the bit number from a GPIO number.

#### `define `[`PIN_MASK`](#group__cpu__cc2538__gpio_1ga9ba98d6f54e8e142c8df2c1f931f33d8) 

Generate a bit mask in which only the specified bit is high.

#### Parameters
* `n` Number of the bit to set high in the mask.

#### Returns
A bit mask in which bit n is high.

#### `define `[`GPIO_NUM_TO_PORT_NUM`](#group__cpu__cc2538__gpio_1ga73dadd6c522acb340389b1442dc0502b) 

Extract the GPIO port number (0-3) from a GPIO number (0-31)

#### Parameters
* `gpio_num` GPIO number (0-31)

#### Returns
Corresponding GPIO port number (0-3)

#### `define `[`GPIO_BIT_NUM`](#group__cpu__cc2538__gpio_1ga99716e9dd6c1e5bd22092003943493f5) 

Extract the GPIO port bit number (0-7) from a GPIO number (0-31)

#### Parameters
* `gpio_num` GPIO number (0-31)

#### Returns
Corresponding GPIO port bit number (0-7)

#### `define `[`GPIO_PXX_TO_NUM`](#group__cpu__cc2538__gpio_1ga9245906a88732d846982a6fc9036e22c) 

Generate a GPIO number given a port and bit number.

#### Parameters
* `port_num` GPIO port (PORT_A, PORT_B, PORT_C, or PORT_D) 

* `bit_num` GPIO bit number (0-7)

#### Returns
Corresponding GPIO number (0-31)

#### `define `[`GPIO_NUM_TO_DEV`](#group__cpu__cc2538__gpio_1ga23071f7396cd86a36b4a5cde1c7b680e) 

Obtain the GPIO port instance given a GPIO number (0-31)

#### Parameters
* `gpio_num` GPIO number (0-31)

#### Returns
Corresponding GPIO port instance

#### `define `[`gpio_hardware_control`](#group__cpu__cc2538__gpio_1ga96a413422da9a4e5fbaeff1365d211fd) 

Enable hardware (peripheral) control for a given GPIO pin number.

#### Parameters
* `gpio_num` GPIO number (0-31)

#### `define `[`gpio_software_control`](#group__cpu__cc2538__gpio_1gafb6fe6a074bf2fcfe731b07794406ad7) 

Enable software control for a given GPIO pin number.

#### Parameters
* `gpio_num` GPIO number (0-31)

#### `define `[`gpio_dir_output`](#group__cpu__cc2538__gpio_1ga8647517f0e65d8673751a3cdbc85d16f) 

Configure the given GPIO as an output.

#### Parameters
* `gpio_num` GPIO number (0-31)

#### `define `[`gpio_dir_input`](#group__cpu__cc2538__gpio_1ga11189340dd82e1f4410b4f578971ca4f) 

Configure the given GPIO as an input.

#### Parameters
* `gpio_num` GPIO number (0-31)

#### `define `[`cc2538_gpio_read`](#group__cpu__cc2538__gpio_1ga47f942c7e8a80c57a9bd8d7656dbfa14) 

Read the value of the given pin.

#### Parameters
* `gpio_num` GPIO number (0-31)

#### `define `[`cc2538_gpio_clear`](#group__cpu__cc2538__gpio_1ga1e9e01b3a8d48a8b0f989c02be7b94bf) 

Set a specific GPIO output pin low.

#### Parameters
* `gpio_num` GPIO number (0-31)

#### `define `[`GPIO_BASE`](#group__cpu__cc2538__gpio_1gacce3b8a909ed8b957b4e411dfb7cbd91) 

GPIO port instance base address.

#### `define `[`IOC`](#group__cpu__cc2538__gpio_1gab2a4d28721130c5d980a01547c85662d) 

IOC instance definition.

#### `enum `[`cc2538_ioc_over_t`](#group__cpu__cc2538__gpio_1gab1b9ad7bc05b4b2a267f544fee59a362) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
OVERRIDE_DISABLE            | 
OVERRIDE_ANALOG            | 
OVERRIDE_PULLDOWN            | 
OVERRIDE_PULLUP            | 
OVERRIDE_ENABLE            | 

Values to override pin configuration.

# struct `cc2538_gpio_t` 

GPIO port component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__gpio__t_1aba39027118ea39c334633a39bbeec257) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DATA`](#structcc2538__gpio__t_1a07a3cd336d6e93fc4f873384695f7501) | GPIO_A Data Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DIR`](#structcc2538__gpio__t_1a1be5e2052bf04b3ad401a6ef4683b60a) | GPIO_A data direction register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IS`](#structcc2538__gpio__t_1a93a3db6ae142f4e281fa01566d77321c) | GPIO_A Interrupt Sense register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IBE`](#structcc2538__gpio__t_1a7976b22f88e6b332d51ba749b3cea63b) | GPIO_A Interrupt Both-Edges register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IEV`](#structcc2538__gpio__t_1aebbfd5af4b96ae72231200c1e6e98e85) | GPIO_A Interrupt Event Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IE`](#structcc2538__gpio__t_1af05df916afab7621eb45b6f522c6408a) | GPIO_A Interrupt mask register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__gpio__t_1a8c82e5b0b7a03bbee45d0c0f4925dcf8) | GPIO_A Raw Interrupt Status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__gpio__t_1abcca2774abf495c80b3e9c5471cb5c5c) | GPIO_A Masked Interrupt Status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IC`](#structcc2538__gpio__t_1a99efad1bfa62895461d6f83b54d8bd11) | GPIO_A Interrupt Clear register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AFSEL`](#structcc2538__gpio__t_1a03c6add4ad7006c60e49f38640d5aa5c) | GPIO_A Alternate Function / mode control select register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__gpio__t_1a6ed0c090c86d02becd26608e2ee12a6c) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`GPIOLOCK`](#structcc2538__gpio__t_1a6827945a0056eb68ea9443680bb73848) | GPIO_A Lock register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`GPIOCR`](#structcc2538__gpio__t_1ad4ec741fa5dd18f31f0aedfd659e8d4e) | GPIO_A Commit Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__gpio__t_1a486c5fe62547d090ff85fec56c5725ab) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PMUX`](#structcc2538__gpio__t_1aa1829ab41cc6d521216f11a88013d6b6) | GPIO_A The PMUX register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`P_EDGE_CTRL`](#structcc2538__gpio__t_1aecae6912f31dbb7bada7b81c8be0b0c9) | GPIO_A The Port Edge Control register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__gpio__t_1ac807f0f132918c33960ca8fee411536e) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PI_IEN`](#structcc2538__gpio__t_1a3506a782883b8f7b9789c7b89016542f) | GPIO_A The Power-up Interrupt Enable register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__gpio__t_1a7ece1743d5a57e39496558349ca2ff52) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IRQ_DETECT_ACK`](#structcc2538__gpio__t_1aa3ba969c8a83c123947ec750c0b8f2b6) | GPIO_A IRQ Detect ACK register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`USB_IRQ_ACK`](#structcc2538__gpio__t_1a301a3c40c249afee859ca1e1499d051a) | GPIO_A IRQ Detect ACK for USB.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IRQ_DETECT_UNMASK`](#structcc2538__gpio__t_1a0a5dd293681bdb278d88671aa12e65cb) | GPIO_A IRQ Detect ACK for masked interrupts.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__gpio__t_1af153b521110e0e2294436572c45b234c) | Reserved addresses.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__gpio__t_1aba39027118ea39c334633a39bbeec257) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DATA`](#structcc2538__gpio__t_1a07a3cd336d6e93fc4f873384695f7501) 

GPIO_A Data Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DIR`](#structcc2538__gpio__t_1a1be5e2052bf04b3ad401a6ef4683b60a) 

GPIO_A data direction register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IS`](#structcc2538__gpio__t_1a93a3db6ae142f4e281fa01566d77321c) 

GPIO_A Interrupt Sense register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IBE`](#structcc2538__gpio__t_1a7976b22f88e6b332d51ba749b3cea63b) 

GPIO_A Interrupt Both-Edges register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IEV`](#structcc2538__gpio__t_1aebbfd5af4b96ae72231200c1e6e98e85) 

GPIO_A Interrupt Event Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IE`](#structcc2538__gpio__t_1af05df916afab7621eb45b6f522c6408a) 

GPIO_A Interrupt mask register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__gpio__t_1a8c82e5b0b7a03bbee45d0c0f4925dcf8) 

GPIO_A Raw Interrupt Status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__gpio__t_1abcca2774abf495c80b3e9c5471cb5c5c) 

GPIO_A Masked Interrupt Status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IC`](#structcc2538__gpio__t_1a99efad1bfa62895461d6f83b54d8bd11) 

GPIO_A Interrupt Clear register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AFSEL`](#structcc2538__gpio__t_1a03c6add4ad7006c60e49f38640d5aa5c) 

GPIO_A Alternate Function / mode control select register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__gpio__t_1a6ed0c090c86d02becd26608e2ee12a6c) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`GPIOLOCK`](#structcc2538__gpio__t_1a6827945a0056eb68ea9443680bb73848) 

GPIO_A Lock register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`GPIOCR`](#structcc2538__gpio__t_1ad4ec741fa5dd18f31f0aedfd659e8d4e) 

GPIO_A Commit Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__gpio__t_1a486c5fe62547d090ff85fec56c5725ab) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PMUX`](#structcc2538__gpio__t_1aa1829ab41cc6d521216f11a88013d6b6) 

GPIO_A The PMUX register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`P_EDGE_CTRL`](#structcc2538__gpio__t_1aecae6912f31dbb7bada7b81c8be0b0c9) 

GPIO_A The Port Edge Control register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__gpio__t_1ac807f0f132918c33960ca8fee411536e) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PI_IEN`](#structcc2538__gpio__t_1a3506a782883b8f7b9789c7b89016542f) 

GPIO_A The Power-up Interrupt Enable register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__gpio__t_1a7ece1743d5a57e39496558349ca2ff52) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IRQ_DETECT_ACK`](#structcc2538__gpio__t_1aa3ba969c8a83c123947ec750c0b8f2b6) 

GPIO_A IRQ Detect ACK register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`USB_IRQ_ACK`](#structcc2538__gpio__t_1a301a3c40c249afee859ca1e1499d051a) 

GPIO_A IRQ Detect ACK for USB.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IRQ_DETECT_UNMASK`](#structcc2538__gpio__t_1a0a5dd293681bdb278d88671aa12e65cb) 

GPIO_A IRQ Detect ACK for masked interrupts.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__gpio__t_1af153b521110e0e2294436572c45b234c) 

Reserved addresses.

# struct `cc2538_ioc_t` 

IOC port component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SEL`](#structcc2538__ioc__t_1a172aa9b68c33b11dcaf093941d65a2b0) | select special function for output pin
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OVER`](#structcc2538__ioc__t_1aa23a9e5b9bddcffd3267a9e78a63e255) | override pin mode, enable alternate mode
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PINS`](#structcc2538__ioc__t_1a7da17fe3f63dafbf9ffdcac1abeacc4d) | select input pin for special functions

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SEL`](#structcc2538__ioc__t_1a172aa9b68c33b11dcaf093941d65a2b0) 

select special function for output pin

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OVER`](#structcc2538__ioc__t_1aa23a9e5b9bddcffd3267a9e78a63e255) 

override pin mode, enable alternate mode

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PINS`](#structcc2538__ioc__t_1a7da17fe3f63dafbf9ffdcac1abeacc4d) 

select input pin for special functions

