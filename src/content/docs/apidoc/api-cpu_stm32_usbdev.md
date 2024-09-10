---
title: api-cpu_stm32_usbdev.md
description: api-cpu_stm32_usbdev.md
---
# group `cpu_stm32_usbdev` 

USB interface functions for the stm32 class devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DWC2_USB_OTG_FS_NUM_EP`](#group__cpu__stm32__usbdev_1ga54d5868c55020cd0070de8cf5714d242)            | Number of endpoints available with the OTG FS peripheral including the control endpoint.
`define `[`DWC2_USB_OTG_HS_NUM_EP`](#group__cpu__stm32__usbdev_1gabf8e0aabd05d117bf14f8d35f075121b)            | Number of endpoints available with the OTG HS peripheral including the control endpoint.
`define `[`DWC2_USB_OTG_FS_RX_FIFO_SIZE`](#group__cpu__stm32__usbdev_1gaae75680836af2ceae83f9a09a8861d15)            | USB OTG FS FIFO reception buffer space in 32-bit words.
`define `[`DWC2_USB_OTG_HS_RX_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga0bda02282f0da545aede531c6026387b)            | USB OTG HS FIFO reception buffer space in 32-bit words.
`define `[`USB_OTG_FS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga1e726d88af0f77cb8a49ff7b666fd990)            | USB OTG FS FIFO total size in bytes.
`define `[`USB_OTG_HS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga55a4488eac406bcff895de59782fd6a7)            | USB OTG FS FIFO total size in bytes.
`define `[`DWC2_USB_OTG_FS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga2bb42103d86ddbdca1d8415029cdfe8f)            | USB OTG FS FIFO total size in bytes.
`define `[`DWC2_USB_OTG_HS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1gaed8ebe9479c57edc8e2ae7da2f5203e6)            | USB OTG HS FIFO total size in bytes.
`struct `[`stm32_usbdev_fs_t`](#structstm32__usbdev__fs__t) | stm32 USB Device FS only peripheral device context

## Members

#### `define `[`DWC2_USB_OTG_FS_NUM_EP`](#group__cpu__stm32__usbdev_1ga54d5868c55020cd0070de8cf5714d242) 

Number of endpoints available with the OTG FS peripheral including the control endpoint.

#### `define `[`DWC2_USB_OTG_HS_NUM_EP`](#group__cpu__stm32__usbdev_1gabf8e0aabd05d117bf14f8d35f075121b) 

Number of endpoints available with the OTG HS peripheral including the control endpoint.

#### `define `[`DWC2_USB_OTG_FS_RX_FIFO_SIZE`](#group__cpu__stm32__usbdev_1gaae75680836af2ceae83f9a09a8861d15) 

USB OTG FS FIFO reception buffer space in 32-bit words.

Used as shared FIFO for reception of all OUT transfers from the host

The application might have to increase this when dealing with large isochronous transfers

#### `define `[`DWC2_USB_OTG_HS_RX_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga0bda02282f0da545aede531c6026387b) 

USB OTG HS FIFO reception buffer space in 32-bit words.

Used as shared FIFO for reception of all OUT transfers from the host

#### `define `[`USB_OTG_FS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga1e726d88af0f77cb8a49ff7b666fd990) 

USB OTG FS FIFO total size in bytes.

Some device families (F7 and L4) forgot to define the FS device FIFO size in their vendor headers. This define sets it to the value from the reference manual.

#### `define `[`USB_OTG_HS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga55a4488eac406bcff895de59782fd6a7) 

USB OTG FS FIFO total size in bytes.

Some device families (F7 and L4) forgot to define the HS device FIFO size in their vendor headers. This define sets it to the value from the reference manual.

#### `define `[`DWC2_USB_OTG_FS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1ga2bb42103d86ddbdca1d8415029cdfe8f) 

USB OTG FS FIFO total size in bytes.

#### `define `[`DWC2_USB_OTG_HS_TOTAL_FIFO_SIZE`](#group__cpu__stm32__usbdev_1gaed8ebe9479c57edc8e2ae7da2f5203e6) 

USB OTG HS FIFO total size in bytes.

# struct `stm32_usbdev_fs_t` 

stm32 USB Device FS only peripheral device context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structstm32__usbdev__fs__t_1a77f73bfff01ce0302aeda19b6d33a9f4) | Inherited usbdev struct.
`public const `[`stm32_usbdev_fs_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstm32__usbdev__fs__config__t)` * `[`config`](#structstm32__usbdev__fs__t_1a7780d036cd1188a6626ef58fe49ccbd9) | USB peripheral config
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`in`](#structstm32__usbdev__fs__t_1ae3c3c9ef8cbf1f197792e2dce77ed42c) | In endpoints.
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`out`](#structstm32__usbdev__fs__t_1af2a770e71c1d4833fd253a8e51d49d95) | Out endpoints.
`public size_t `[`used`](#structstm32__usbdev__fs__t_1a8332cc99c59679b93b5d57cc01df8796) | Bytes used by usbdev stack.

## Members

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structstm32__usbdev__fs__t_1a77f73bfff01ce0302aeda19b6d33a9f4) 

Inherited usbdev struct.

#### `public const `[`stm32_usbdev_fs_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structstm32__usbdev__fs__config__t)` * `[`config`](#structstm32__usbdev__fs__t_1a7780d036cd1188a6626ef58fe49ccbd9) 

USB peripheral config

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`in`](#structstm32__usbdev__fs__t_1ae3c3c9ef8cbf1f197792e2dce77ed42c) 

In endpoints.

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`out`](#structstm32__usbdev__fs__t_1af2a770e71c1d4833fd253a8e51d49d95) 

Out endpoints.

#### `public size_t `[`used`](#structstm32__usbdev__fs__t_1a8332cc99c59679b93b5d57cc01df8796) 

Bytes used by usbdev stack.

