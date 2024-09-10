---
title: api-drivers_periph_usbdev.md
description: api-drivers_periph_usbdev.md
---
# group `drivers_periph_usbdev` 

This is a generic low-level USB driver interface.

Aboutusbdev specifies a common USB device API for low level USB interfaces. The interface is split in a definition for the USB interface hardware and for individual USB endpoints.

Design goals* Support for multiple instances on a single board

* Interface optimized for MCU peripheral interfaces.

DetailsThe driver interface is split in two separate parts. One part is a global USB device interface, the other is an endpoint control API.

The usb device driver can manage parts of the USB interface itself such as the pull up resistor state or the USB speed.

The endpoint control API manages a single endpoint. This allows for a modular approach where multiple USB functions/interfaces can be multiplexed over a single USB interface. Each interface can be implemented as a separate module. The interface handler does not have to care about the usb device itself or it's endpoint number. It can simply request an available endpoint from the usb device with the [usbdev_new_ep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga94dc6db10d9fd0e9a2c56789e77a00f4) function.

Each interface handler can request multiple endpoints from the usbdev device. It must supply the expected maximum endpoint transfer size and other properties of the endpoint. A pointer to an usbdev endpoint is returned if an endpoint fitting the requirements is available.

Data transmission is done via the [usbdev_ep_xmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gab577b73a742d3fa8906678f8dbeb2866) function. A buffer and length must be supplied. Received data from the host ends up at this buffer automatically by the low level drivers after reception. For reception the maximum expected transfer length must be supplied, equal to the maximum endpoint transfer size. The data received can be less than this.

For transmitting data back to the host, a similar approach is used. The data to be transmitted is supplied as buffer and the [usbdev_ep_xmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gab577b73a742d3fa8906678f8dbeb2866) function is called with the buffer and the size of the data.

To ensure that the data buffers adhere to the restrictions of the low level USB peripheral memory interface, the specific [usbdev_ep_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2) data type must be used. It behaves as a regular `uint8_t` byte buffer, but is instantiated with the attributes to ensure that the low level DMA interface can use it.

A callback function is required for signalling events from the driver. The [USBDEV_EVENT_ESR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gga5289b0187db76ea19e4af527df0ac303a313d8d0c5416f13435bad11fa11044ea) is special in that it indicates that the USB peripheral had an interrupt that needs to be serviced in a non-interrupt context. This requires the usbdev_esr function to be called. In the case that the event is signalled via the [usbdev_t::epcb](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev_1aa47cde5e01fb132a8a8d51cda19ce323) callback, the [usbdev_ep_esr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gad821d143df01e72083341c6535ff4a61) should be called to service the endpoint specific events from the peripheral.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USBDEV_CPU_DMA_REQUIREMENTS`](#group__drivers__periph__usbdev_1ga930ce1a11e19bb65c39c7ef20315dd2e)            | USBDEV endpoint buffer CPU-specific requirements.
`define `[`usbdev_ep_buf_t`](#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2)            | Instantiation type for usbdev endpoint buffers.
`define `[`USBDEV_CPU_SET_ADDR_AFTER_STATUS`](#group__drivers__periph__usbdev_1ga6ae6fef7b8a1b9e61a3d32a9a757eceb)            | USBDEV specific requirement for setting the device address.
`define `[`USBDEV_NUM_ENDPOINTS`](#group__drivers__periph__usbdev_1ga359f875644f47ca8bb6844b5b5a0c90e)            | Number of USB IN and OUT endpoints allocated.
`enum `[`usbdev_event_t`](#group__drivers__periph__usbdev_1ga5289b0187db76ea19e4af527df0ac303)            | List of event types that can be send from the device driver to the upper layer.
`public void `[`usbdev_init_lowlevel`](#group__drivers__periph__usbdev_1ga124dc4fde43e3a5df575e812ef64cd77)`(void)`            | Low level USB peripheral driver initialization.
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * `[`usbdev_get_ctx`](#group__drivers__periph__usbdev_1gaffc49c44029f396b653d92f3e34a8844)`(unsigned num)`            | Retrieve usbdev context from the peripheral.
`public inline static void `[`usbdev_init`](#group__drivers__periph__usbdev_1ga260c295ffa120cf569e39a7a4dc12005)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev)`            | Initialize the USB peripheral device.
`public inline static `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`usbdev_new_ep`](#group__drivers__periph__usbdev_1ga94dc6db10d9fd0e9a2c56789e77a00f4)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev,`[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` type,`[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` dir,size_t size)`            | Retrieve an USB endpoint of the specified type.
`public inline static int `[`usbdev_get`](#group__drivers__periph__usbdev_1ga8e23af642929245db1707f7b286287f5)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev,`[`usbopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1ga17a44d2fafdcc150af3c3d4ec04fb7f7)` opt,void * value,size_t max_len)`            | Get an option value from a given usb device.
`public inline static int `[`usbdev_set`](#group__drivers__periph__usbdev_1ga8396006a939075981570f3ae2c1838c7)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev,`[`usbopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1ga17a44d2fafdcc150af3c3d4ec04fb7f7)` opt,const void * value,size_t value_len)`            | Set an option value for a given usb device.
`public inline static void `[`usbdev_esr`](#group__drivers__periph__usbdev_1gaaa64c46e69d1b52819557746593295f5)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev)`            | a driver's user-space event service handler
`public inline static void `[`usbdev_ep0_stall`](#group__drivers__periph__usbdev_1ga8e61cb292d96a7bacff1b631f2d96929)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev)`            | Stall both OUT and IN packets on endpoint 0 until a setup packet is received.
`public inline static void `[`usbdev_ep_init`](#group__drivers__periph__usbdev_1ga810591db7402afeba70bc93bce6e4bff)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep)`            | Initialize the USB endpoint.
`public inline static void `[`usbdev_ep_stall`](#group__drivers__periph__usbdev_1gaa2724ce1db8acab38b2b9e5da9b853db)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,bool enable)`            | Enable or disable the stall condition on the USB endpoint.
`public inline static int `[`usbdev_ep_get`](#group__drivers__periph__usbdev_1ga55e6689a8b22eed3bf73e14eb5726ab1)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,`[`usbopt_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1gaa4ab17169bd97bfcce86f3b3fd6d2670)` opt,void * value,size_t max_len)`            | Get an option value from a given usb device endpoint.
`public inline static int `[`usbdev_ep_set`](#group__drivers__periph__usbdev_1ga142457c68754b4fcea2cd8faef2422d3)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,`[`usbopt_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1gaa4ab17169bd97bfcce86f3b3fd6d2670)` opt,const void * value,size_t value_len)`            | Set an option value for a given usb device endpoint.
`public inline static void `[`usbdev_ep_esr`](#group__drivers__periph__usbdev_1gad821d143df01e72083341c6535ff4a61)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep)`            | an endpoint's user-space event handler
`public inline static int `[`usbdev_ep_xmit`](#group__drivers__periph__usbdev_1gab577b73a742d3fa8906678f8dbeb2866)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,uint8_t * buf,size_t len)`            | Submit a buffer for a USB endpoint transmission.
`struct `[`usbdev`](#structusbdev) | usbdev device descriptor
`struct `[`usbdev_ep`](#structusbdev__ep) | usbdev endpoint descriptor
`struct `[`usbdev_driver`](#structusbdev__driver) | usbdev driver functions

## Members

#### `define `[`USBDEV_CPU_DMA_REQUIREMENTS`](#group__drivers__periph__usbdev_1ga930ce1a11e19bb65c39c7ef20315dd2e) 

USBDEV endpoint buffer CPU-specific requirements.

Can be overridden by periph_cpu if needed by the USB peripheral DMA.

#### `define `[`usbdev_ep_buf_t`](#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2) 

Instantiation type for usbdev endpoint buffers.

Functions passing around pointers to these buffers can still use `uint8_t` for the argument type.

Example usage:

```cpp
usbdev_ep_buf_t buffer[64];
```

This is a define and not a typedef so that the above works. With a typedef it would instantiate an array of aligned uint8_t and not an aligned array of uint8_t (assuming the requirement is alignment).

#### `define `[`USBDEV_CPU_SET_ADDR_AFTER_STATUS`](#group__drivers__periph__usbdev_1ga6ae6fef7b8a1b9e61a3d32a9a757eceb) 

USBDEV specific requirement for setting the device address.

The address in the USB device can be set either directly after the SETUP stage on receipt of the `SET ADDRESS Request` or after the associated status stage. When the USB device address has to be set depends on the hardware. If `USBDEV_CPU_SET_ADDR_AFTER_STATUS` has the value 1 (default), the address is only set in the USB device after the status stage. Overwrite it with 0 in `periph_cpu.h` to set the address already directly after the SETUP stage.

#### `define `[`USBDEV_NUM_ENDPOINTS`](#group__drivers__periph__usbdev_1ga359f875644f47ca8bb6844b5b5a0c90e) 

Number of USB IN and OUT endpoints allocated.

Configures the number of endpoints allocated. An equal number of IN and OUT endpoints are allocated

#### `enum `[`usbdev_event_t`](#group__drivers__periph__usbdev_1ga5289b0187db76ea19e4af527df0ac303) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBDEV_EVENT_ESR            | Driver needs it's ESR (event service routine) handled.
USBDEV_EVENT_HOST_CONNECT            | Host connection detected.
USBDEV_EVENT_HOST_DISCONNECT            | Host disconnected from the device.
USBDEV_EVENT_RESET            | Line reset occurred.
USBDEV_EVENT_SOF            | Start of Frame received.
USBDEV_EVENT_SUSPEND            | USB suspend condition active.
USBDEV_EVENT_RESUME            | USB suspend condition no longer active.
USBDEV_EVENT_TR_COMPLETE            | Transaction completed event.
USBDEV_EVENT_TR_STALL            | Transaction stall event.

List of event types that can be send from the device driver to the upper layer.

#### `public void `[`usbdev_init_lowlevel`](#group__drivers__periph__usbdev_1ga124dc4fde43e3a5df575e812ef64cd77)`(void)` 

Low level USB peripheral driver initialization.

This function prepares all usbdev peripherals available for initialization

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * `[`usbdev_get_ctx`](#group__drivers__periph__usbdev_1gaffc49c44029f396b653d92f3e34a8844)`(unsigned num)` 

Retrieve usbdev context from the peripheral.

#### Parameters
* `num` usbdev peripheral number to retrieve

#### Returns
the usbdev context at index `num`

#### `public inline static void `[`usbdev_init`](#group__drivers__periph__usbdev_1ga260c295ffa120cf569e39a7a4dc12005)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev)` 

Initialize the USB peripheral device.

**See also**: [usbdev_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a527b9c2080156c1cb315fa2a7c69fabf)

`(dev != NULL)`

#### Parameters
* `dev` usb device to initialize

#### `public inline static `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`usbdev_new_ep`](#group__drivers__periph__usbdev_1ga94dc6db10d9fd0e9a2c56789e77a00f4)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev,`[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` type,`[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` dir,size_t size)` 

Retrieve an USB endpoint of the specified type.

**See also**: [usbdev_driver_t::new_ep](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a8b3e24f86d54e84e0e705ef25416008b)

`(dev != NULL)`

#### Parameters
* `dev` USB device descriptor 

* `type` USB endpoint type 

* `dir` USB endpoint direction 

* `size` Maximum USB endpoint buffer size used

#### Returns
ptr to the new USB endpoint descriptor 

#### Returns
NULL on error

#### `public inline static int `[`usbdev_get`](#group__drivers__periph__usbdev_1ga8e23af642929245db1707f7b286287f5)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev,`[`usbopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1ga17a44d2fafdcc150af3c3d4ec04fb7f7)` opt,void * value,size_t max_len)` 

Get an option value from a given usb device.

**See also**: [usbdev_driver_t::get](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1afde43bc7a644b2c87a69fe2c9ce05121)

`(dev != NULL)`

#### Parameters
* `dev` USB device descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximal amount of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
`< 0` on error 0

#### `public inline static int `[`usbdev_set`](#group__drivers__periph__usbdev_1ga8396006a939075981570f3ae2c1838c7)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev,`[`usbopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1ga17a44d2fafdcc150af3c3d4ec04fb7f7)` opt,const void * value,size_t value_len)` 

Set an option value for a given usb device.

**See also**: [usbdev_driver_t::set](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a1a24f7454a0218dc69d455d9fa0d2db5)

`(dev != NULL)`

#### Parameters
* `dev` USB device descriptor 

* `opt` option type 

* `value` value to set 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
`< 0` on error

#### `public inline static void `[`usbdev_esr`](#group__drivers__periph__usbdev_1gaaa64c46e69d1b52819557746593295f5)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev)` 

a driver's user-space event service handler

**See also**: [usbdev_driver_t::esr](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a52b73ecb862cb4c17d753db8601890be)

`(dev != NULL)`

#### Parameters
* `dev` USB device descriptor

#### `public inline static void `[`usbdev_ep0_stall`](#group__drivers__periph__usbdev_1ga8e61cb292d96a7bacff1b631f2d96929)`(`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * dev)` 

Stall both OUT and IN packets on endpoint 0 until a setup packet is received.

**See also**: [usbdev_driver_t::ep0_stall](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1ad6d0e327cbcc64b9c3bfcee49ade5686)

The stall condition is automatically cleared after receiving a setup packet.

`(dev != NULL)`

#### Parameters
* `dev` USB device descriptor

#### `public inline static void `[`usbdev_ep_init`](#group__drivers__periph__usbdev_1ga810591db7402afeba70bc93bce6e4bff)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep)` 

Initialize the USB endpoint.

**See also**: [usbdev_driver_t::ep_init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a2cdec4d79c23c3d6724abd226fbcd209)

`(ep != NULL)`

`(ep->dev != NULL)`

#### Parameters
* `ep` USB endpoint descriptor

#### `public inline static void `[`usbdev_ep_stall`](#group__drivers__periph__usbdev_1gaa2724ce1db8acab38b2b9e5da9b853db)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,bool enable)` 

Enable or disable the stall condition on the USB endpoint.

For enabling stall on endpoint 0 [usbdev_driver_t::ep0_stall](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1ad6d0e327cbcc64b9c3bfcee49ade5686) must be used.

**See also**: [usbdev_driver_t::ep_stall](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a31db8234cad4de3fd611d4430132feb7)

(ep->num != 0)

#### Parameters
* `ep` USB endpoint descriptor 

* `enable` True to set stall, false to disable stall

#### `public inline static int `[`usbdev_ep_get`](#group__drivers__periph__usbdev_1ga55e6689a8b22eed3bf73e14eb5726ab1)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,`[`usbopt_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1gaa4ab17169bd97bfcce86f3b3fd6d2670)` opt,void * value,size_t max_len)` 

Get an option value from a given usb device endpoint.

**See also**: [usbdev_driver_t::ep_get](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1aef6127227785be2b30d1e47f99e5fadb)

`(ep != NULL)`

`(ep->dev != NULL)`

#### Parameters
* `ep` USB endpoint descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximum number of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
`< 0` on error

#### `public inline static int `[`usbdev_ep_set`](#group__drivers__periph__usbdev_1ga142457c68754b4fcea2cd8faef2422d3)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,`[`usbopt_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbopt_1gaa4ab17169bd97bfcce86f3b3fd6d2670)` opt,const void * value,size_t value_len)` 

Set an option value for a given usb device endpoint.

**See also**: [usbdev_driver_t::ep_set](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a1ba19aef54325125d7ac4f3c0d46613e)

`(ep != NULL)`

`(ep->dev != NULL)`

#### Parameters
* `ep` USB endpoint descriptor 

* `opt` option type 

* `value` pointer to the value 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
`< 0` on error

#### `public inline static void `[`usbdev_ep_esr`](#group__drivers__periph__usbdev_1gad821d143df01e72083341c6535ff4a61)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep)` 

an endpoint's user-space event handler

**See also**: [usbdev_driver_t::ep_esr](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a780ca2e7ee99cb801579018a4c9a9b69)

`(ep != NULL)`

`(ep->dev != NULL)`

#### Parameters
* `ep` USB endpoint descriptor to service

#### `public inline static int `[`usbdev_ep_xmit`](#group__drivers__periph__usbdev_1gab577b73a742d3fa8906678f8dbeb2866)`(`[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * ep,uint8_t * buf,size_t len)` 

Submit a buffer for a USB endpoint transmission.

When dealing with an OUT type endpoint, `len` must be the maximum allowed transfer size for the endpoint. The host is allowed to transfer fewer bytes than `len`.

**See also**: [usbdev_driver_t::xmit](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1a48a8fff2e170e1bd4c950891410e8c2a)

`(ep != NULL)`

`(ep->dev != NULL)`

#### Parameters
* `ep` USB endpoint descriptor 

* `buf` Buffer to submit for transmission 

* `len` length of the buffer in bytes to be transmitted or received

# struct `usbdev` 

usbdev device descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const struct `[`usbdev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver)` * `[`driver`](#structusbdev_1aeecd4f2bc00d5d6a42fd7c109d2844e4) | usbdev driver struct
`public `[`usbdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa812e5b620e20f44199e2d11d3fa52d8)` `[`cb`](#structusbdev_1ae77dae603ea2d98c32ee3257d10caf66) | Event callback supplied by upper layer
`public `[`usbdev_ep_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa334cadaee714011b991f0e865463826)` `[`epcb`](#structusbdev_1aa47cde5e01fb132a8a8d51cda19ce323) | Endpoint event callback for upper layer
`public void * `[`context`](#structusbdev_1ac75fbb08bde066ed44c5c46f23ecfee1) | Ptr to the thread context

## Members

#### `public const struct `[`usbdev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver)` * `[`driver`](#structusbdev_1aeecd4f2bc00d5d6a42fd7c109d2844e4) 

usbdev driver struct

#### `public `[`usbdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa812e5b620e20f44199e2d11d3fa52d8)` `[`cb`](#structusbdev_1ae77dae603ea2d98c32ee3257d10caf66) 

Event callback supplied by upper layer

#### `public `[`usbdev_ep_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa334cadaee714011b991f0e865463826)` `[`epcb`](#structusbdev_1aa47cde5e01fb132a8a8d51cda19ce323) 

Endpoint event callback for upper layer

#### `public void * `[`context`](#structusbdev_1ac75fbb08bde066ed44c5c46f23ecfee1) 

Ptr to the thread context

# struct `usbdev_ep` 

usbdev endpoint descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * `[`dev`](#structusbdev__ep_1a0f3a96e2e8d29a229a82fb34b600319e) | USB device this endpoint belongs to
`public size_t `[`len`](#structusbdev__ep_1a64b97a1708d07bbe34c1648467c5d7e8) | Endpoint configured max transfer size in bytes.
`public `[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` `[`dir`](#structusbdev__ep_1a74d813c9b2bb17cbda19bf07c06a1edc) | Endpoint direction
`public `[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` `[`type`](#structusbdev__ep_1ab20e89104a12597b957a5b55c2d18b60) | Endpoint type
`public uint8_t `[`num`](#structusbdev__ep_1a360c559a50445c6ac814e0a8060a8015) | Endpoint number

## Members

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * `[`dev`](#structusbdev__ep_1a0f3a96e2e8d29a229a82fb34b600319e) 

USB device this endpoint belongs to

#### `public size_t `[`len`](#structusbdev__ep_1a64b97a1708d07bbe34c1648467c5d7e8) 

Endpoint configured max transfer size in bytes.

#### `public `[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` `[`dir`](#structusbdev__ep_1a74d813c9b2bb17cbda19bf07c06a1edc) 

Endpoint direction

#### `public `[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` `[`type`](#structusbdev__ep_1ab20e89104a12597b957a5b55c2d18b60) 

Endpoint type

#### `public uint8_t `[`num`](#structusbdev__ep_1a360c559a50445c6ac814e0a8060a8015) 

Endpoint number

# struct `usbdev_driver` 

usbdev driver functions

Helpers (such as [usbdev_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga260c295ffa120cf569e39a7a4dc12005)) are provided and should be used instead. Directly calling these functions is not recommended.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`init`](#structusbdev__driver_1a527b9c2080156c1cb315fa2a7c69fabf) | Initialize the USB peripheral device.
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` *(* `[`new_ep`](#structusbdev__driver_1a8b3e24f86d54e84e0e705ef25416008b) | Retrieve an USB endpoint of the specified type.
`public int(* `[`get`](#structusbdev__driver_1afde43bc7a644b2c87a69fe2c9ce05121) | Get an option value from a given usb device.
`public int(* `[`set`](#structusbdev__driver_1a1a24f7454a0218dc69d455d9fa0d2db5) | Set an option value for a given usb device.
`public void(* `[`esr`](#structusbdev__driver_1a52b73ecb862cb4c17d753db8601890be) | a driver's user-space event service handler
`public void(* `[`ep0_stall`](#structusbdev__driver_1ad6d0e327cbcc64b9c3bfcee49ade5686) | Stall both OUT and IN packets on endpoint 0 until a setup packet is received.
`public void(* `[`ep_init`](#structusbdev__driver_1a2cdec4d79c23c3d6724abd226fbcd209) | Initialize the USB endpoint.
`public void(* `[`ep_stall`](#structusbdev__driver_1a31db8234cad4de3fd611d4430132feb7) | Enable or disable the stall condition on the USB endpoint.
`public int(* `[`ep_get`](#structusbdev__driver_1aef6127227785be2b30d1e47f99e5fadb) | Get an option value from a given usb device endpoint.
`public int(* `[`ep_set`](#structusbdev__driver_1a1ba19aef54325125d7ac4f3c0d46613e) | Set an option value for a given usb device endpoint.
`public void(* `[`ep_esr`](#structusbdev__driver_1a780ca2e7ee99cb801579018a4c9a9b69) | an endpoint's user-space event handler
`public int(* `[`xmit`](#structusbdev__driver_1a48a8fff2e170e1bd4c950891410e8c2a) | Transmit a data buffer.

## Members

#### `public void(* `[`init`](#structusbdev__driver_1a527b9c2080156c1cb315fa2a7c69fabf) 

Initialize the USB peripheral device.

This initializes the USB device but must not enable the USB pull up.

#### Parameters
* `dev` USB device descriptor

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` *(* `[`new_ep`](#structusbdev__driver_1a8b3e24f86d54e84e0e705ef25416008b) 

Retrieve an USB endpoint of the specified type.

requesting an endpoint of [USB_EP_TYPE_CONTROL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1gga23fe3d087b4533eabd8cff2e3371716fa134795bdea12ea96534b37c9f606d497) must always return endpoint 0 of the specified direction

#### Parameters
* `dev` USB device descriptor 

* `type` USB endpoint type 

* `dir` USB endpoint direction 

* `size` USB endpoint buffer size

#### Returns
ptr to the new USB endpoint descriptor 

#### Returns
NULL on error

#### `public int(* `[`get`](#structusbdev__driver_1afde43bc7a644b2c87a69fe2c9ce05121) 

Get an option value from a given usb device.

#### Parameters
* `dev` USB device descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximal amount of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
`< 0` on error 0

#### `public int(* `[`set`](#structusbdev__driver_1a1a24f7454a0218dc69d455d9fa0d2db5) 

Set an option value for a given usb device.

#### Parameters
* `dev` USB device descriptor 

* `opt` option type 

* `value` value to set 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
`< 0` on error

#### `public void(* `[`esr`](#structusbdev__driver_1a52b73ecb862cb4c17d753db8601890be) 

a driver's user-space event service handler

This function will be called from a USB stack's loop when being notified by usbdev_event_isr.

#### Parameters
* `dev` USB device descriptor

#### `public void(* `[`ep0_stall`](#structusbdev__driver_1ad6d0e327cbcc64b9c3bfcee49ade5686) 

Stall both OUT and IN packets on endpoint 0 until a setup packet is received.

The stall condition should be cleared automatically either by hardware or by the usbdev implementation after receiving a setup packet.

#### `public void(* `[`ep_init`](#structusbdev__driver_1a2cdec4d79c23c3d6724abd226fbcd209) 

Initialize the USB endpoint.

This initializes the USB endpoint with the settings from the [usbdev_ep](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__ep).

#### Parameters
* `ep` USB endpoint descriptor

#### `public void(* `[`ep_stall`](#structusbdev__driver_1a31db8234cad4de3fd611d4430132feb7) 

Enable or disable the stall condition on the USB endpoint.

After clearing the stall condition on the endpoint, the usb peripheral must reinitialize the data toggle to DATA0.

For enabling stall on endpoint 0 [usbdev_driver_t::ep0_stall](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_usbdev.md#structusbdev__driver_1ad6d0e327cbcc64b9c3bfcee49ade5686) must be used.

(ep->num != 0)

#### Parameters
* `ep` USB endpoint descriptor 

* `enable` True to set stall, false to disable stall

#### `public int(* `[`ep_get`](#structusbdev__driver_1aef6127227785be2b30d1e47f99e5fadb) 

Get an option value from a given usb device endpoint.

#### Parameters
* `ep` USB endpoint descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximum number of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Returns
`< 0` on error

#### `public int(* `[`ep_set`](#structusbdev__driver_1a1ba19aef54325125d7ac4f3c0d46613e) 

Set an option value for a given usb device endpoint.

#### Parameters
* `ep` USB endpoint descriptor 

* `opt` option type 

* `value` pointer to the value 

* `value_len` the length of `value`

#### Returns
number of bytes used from `value`

#### Returns
`< 0` on error

#### `public void(* `[`ep_esr`](#structusbdev__driver_1a780ca2e7ee99cb801579018a4c9a9b69) 

an endpoint's user-space event handler

Must be called in response to an [USBDEV_EVENT_ESR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gga5289b0187db76ea19e4af527df0ac303a313d8d0c5416f13435bad11fa11044ea) event in userspace context.

#### Parameters
* `ep` USB endpoint descriptor to service

#### `public int(* `[`xmit`](#structusbdev__driver_1a48a8fff2e170e1bd4c950891410e8c2a) 

Transmit a data buffer.

Ownership of the `buf` is transferred to the usbdev device after calling this. Do not modify (or unallocate) the buffer between calling this and when it is released via the [USBDEV_EVENT_TR_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gga5289b0187db76ea19e4af527df0ac303aa8a2823c836df5b29e895f739983e135) event.

This clears the stall setting in the endpoint if that is enabled.

The `buf` passed here must have been declared as [usbdev_ep_buf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa9322e0f092c580129915333bab9a8f2) before so that DMA restrictions are applied to it

#### Parameters
* `ep` USB endpoint descriptor 

* `buf` Buffer with the data to transfer 

* `len` (Max) Length of the data to transfer

