---
title: api-drivers_candev_linux.md
description: api-drivers_candev_linux.md
---
# group `drivers_candev_linux` 

Implementation of simulated CAN controller driver using SocketCAN on Linux.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CAN_MAX_SIZE_INTERFACE_NAME`](#group__drivers__candev__linux_1ga314fd0bfec6e2abeeb5a24a50779b35b)            | Maximum size of an interface name.
`define `[`HAVE_CAN_CONF_T`](#group__drivers__candev__linux_1ga1f144ca1575a4ebb59b99cd6273b5389)            | CAN device configuration type [can_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t) is redefined by native CAN.
`define `[`CANDEV_LINUX_MAX_FILTERS_RX`](#group__drivers__candev__linux_1gaec19105f9718a8946c0c350dd9a5d635)            | Max number of rx filters which can be set.
`define `[`CANDEV_LINUX_DEFAULT_BITRATE`](#group__drivers__candev__linux_1ga1079abfb970db5efddd538a9283dd15a)            | Default bitrate setup.
`define `[`CANDEV_LINUX_DEFAULT_SPT`](#group__drivers__candev__linux_1ga58f95c0cfa47bb38df75d7c330821b96)            | Default sampling point setup.
`define `[`HAVE_CAN_T`](#group__drivers__candev__linux_1gaf157b88f267810575b5f71a48691e548)            | CAN device type can_t is redefined by native CAN.
`struct `[`candev_conf`](#structcandev__conf) | Linux candev configuration.
`struct `[`candev_linux`](#structcandev__linux) | The [candev_linux](#structcandev__linux) struct.

## Members

#### `define `[`CAN_MAX_SIZE_INTERFACE_NAME`](#group__drivers__candev__linux_1ga314fd0bfec6e2abeeb5a24a50779b35b) 

Maximum size of an interface name.

#### `define `[`HAVE_CAN_CONF_T`](#group__drivers__candev__linux_1ga1f144ca1575a4ebb59b99cd6273b5389) 

CAN device configuration type [can_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t) is redefined by native CAN.

#### `define `[`CANDEV_LINUX_MAX_FILTERS_RX`](#group__drivers__candev__linux_1gaec19105f9718a8946c0c350dd9a5d635) 

Max number of rx filters which can be set.

#### `define `[`CANDEV_LINUX_DEFAULT_BITRATE`](#group__drivers__candev__linux_1ga1079abfb970db5efddd538a9283dd15a) 

Default bitrate setup.

#### `define `[`CANDEV_LINUX_DEFAULT_SPT`](#group__drivers__candev__linux_1ga58f95c0cfa47bb38df75d7c330821b96) 

Default sampling point setup.

#### `define `[`HAVE_CAN_T`](#group__drivers__candev__linux_1gaf157b88f267810575b5f71a48691e548) 

CAN device type can_t is redefined by native CAN.

# struct `candev_conf` 

Linux candev configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char `[`interface_name`](#structcandev__conf_1a81e9ab25fe070e1f6b5ccd44d014ab8d) | local interface name

## Members

#### `public char `[`interface_name`](#structcandev__conf_1a81e9ab25fe070e1f6b5ccd44d014ab8d) 

local interface name

# struct `candev_linux` 

The [candev_linux](#structcandev__linux) struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`candev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1gabd7879dd8db04809ca794f5e5ae83f4a)` `[`candev`](#structcandev__linux_1ad2a896c91e9240449d11c15be8c7ddcc) | candev base structure
`public int `[`sock`](#structcandev__linux_1aa146edd57daea361eb74a46f35075ddf) | local socket id
`public const `[`can_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t)` * `[`conf`](#structcandev__linux_1a2520255f20dfa235632bd5a7856ea2fc) | device configuration
`public struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` `[`filters`](#structcandev__linux_1ae1694e97e69534fb2aae495f7fe4bb81) | filter list

## Members

#### `public `[`candev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1gabd7879dd8db04809ca794f5e5ae83f4a)` `[`candev`](#structcandev__linux_1ad2a896c91e9240449d11c15be8c7ddcc) 

candev base structure

#### `public int `[`sock`](#structcandev__linux_1aa146edd57daea361eb74a46f35075ddf) 

local socket id

#### `public const `[`can_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t)` * `[`conf`](#structcandev__linux_1a2520255f20dfa235632bd5a7856ea2fc) 

device configuration

#### `public struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` `[`filters`](#structcandev__linux_1ae1694e97e69534fb2aae495f7fe4bb81) 

filter list

