---
title: api-cpu_nrf52_nrfusb.md
description: api-cpu_nrf52_nrfusb.md
---
# group `cpu_nrf52_nrfusb` 

Minimal driver for the NRF52840 usb peripheral.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NRF_USB_NUM_PERIPH`](#group__cpu__nrf52__nrfusb_1gacdc43aebf3d925d881271c1867d5f23f)            | Number of USB peripherals on the MCU.
`define `[`NRF_USB_NUM_EP`](#group__cpu__nrf52__nrfusb_1ga089a0ba9b1190535a0fd06d90ebf6762)            | Number of USB IN and OUT endpoints.
`enum `[`nrfusb_setup_state_t`](#group__cpu__nrf52__nrfusb_1gad28d87b14919967685c0f52afa717fa2)            | nrfusb setup packet state tracker for endpoint 0 handling
`struct `[`nrfusb_t`](#structnrfusb__t) | nrf usb peripheral device context

## Members

#### `define `[`NRF_USB_NUM_PERIPH`](#group__cpu__nrf52__nrfusb_1gacdc43aebf3d925d881271c1867d5f23f) 

Number of USB peripherals on the MCU.

#### `define `[`NRF_USB_NUM_EP`](#group__cpu__nrf52__nrfusb_1ga089a0ba9b1190535a0fd06d90ebf6762) 

Number of USB IN and OUT endpoints.

#### `enum `[`nrfusb_setup_state_t`](#group__cpu__nrf52__nrfusb_1gad28d87b14919967685c0f52afa717fa2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRFUSB_SETUP_READY            | Ready for a new setup request
NRFUSB_SETUP_READ            | Read request received
NRFUSB_SETUP_WRITE            | Write request received
NRFUSB_SETUP_ACKOUT            | Expecting an ACK on the out endpoint.
NRFUSB_SETUP_ACKIN            | Expecting an ACK on the in endpoint

nrfusb setup packet state tracker for endpoint 0 handling

# struct `nrfusb_t` 

nrf usb peripheral device context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structnrfusb__t_1af19af08e169a6600210e69f2d5518808) | Inherited usbdev struct
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`ep_ins`](#structnrfusb__t_1a51760838593a9fd532488c9091a7b0c4) | IN type endpoints
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`ep_outs`](#structnrfusb__t_1a2aa1f28af39c75dc9800b273e17ad5dc) | OUT type endpoints
`public NRF_USBD_Type * `[`device`](#structnrfusb__t_1a709f7ab1d247f5f257cd0d6f5d466a48) | Ptr to the device registers
`public `[`nrfusb_setup_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__nrf52__nrfusb_1gad28d87b14919967685c0f52afa717fa2)` `[`sstate`](#structnrfusb__t_1a6e920e50f313a5d9090f3993b96c75fa) | Setup request state machine

## Members

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structnrfusb__t_1af19af08e169a6600210e69f2d5518808) 

Inherited usbdev struct

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`ep_ins`](#structnrfusb__t_1a51760838593a9fd532488c9091a7b0c4) 

IN type endpoints

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`ep_outs`](#structnrfusb__t_1a2aa1f28af39c75dc9800b273e17ad5dc) 

OUT type endpoints

#### `public NRF_USBD_Type * `[`device`](#structnrfusb__t_1a709f7ab1d247f5f257cd0d6f5d466a48) 

Ptr to the device registers

#### `public `[`nrfusb_setup_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__nrf52__nrfusb_1gad28d87b14919967685c0f52afa717fa2)` `[`sstate`](#structnrfusb__t_1a6e920e50f313a5d9090f3993b96c75fa) 

Setup request state machine

