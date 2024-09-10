---
title: api-usb_usbus.md
description: api-usb_usbus.md
---
# group `usb_usbus` 

USBUS (Universal Serial Bus Unified Stack), USB device management interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USBUS_TNAME`](#group__usb__usbus_1ga2dba99cdf52ae0b6f8d422cad17f10b6)            | USBUS thread name.
`enum `[`usbus_event_usb_t`](#group__usb__usbus_1ga5d99cb353d12b5a49b4a3b10b9863ba5)            | USB handler events.
`enum `[`usbus_event_transfer_t`](#group__usb__usbus_1ga1d339c5c7f7d634704eab92320d06ab5)            | USB endpoint transfer status events.
`enum `[`usbus_state_t`](#group__usb__usbus_1gaf2a0ad7e221dee20728cb73b3aac22ea)            | state machine states for the global USBUS thread
`enum `[`usbus_control_request_state_t`](#group__usb__usbus_1ga75a538ca121919799d4e604539db2525)            | USBUS control request state machine.
`enum `[`usbus_descr_len_type_t`](#group__usb__usbus_1ga316b8d32cac7eb21446ce7935ace810d)            | descriptor length types for USB descriptor generators
`public inline static void `[`usbus_event_post`](#group__usb__usbus_1ga63f20e1d88b109ade0d31934358390ac)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)`            | Submit an event to the usbus thread.
`public uint16_t `[`usbus_add_string_descriptor`](#group__usb__usbus_1gaa1fb60fd43db5b98b7049fd1fee967c8)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * desc,const char * str)`            | Add a string descriptor to the USBUS thread context.
`public uint16_t `[`usbus_add_interface`](#group__usb__usbus_1ga5cc3c30c6e682aa118f3c4a269d2aa43)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * iface)`            | Add an interface to the USBUS thread context.
`public void `[`usbus_add_interface_alt`](#group__usb__usbus_1ga0e3513999784ac8bca15e22e932c7caa)`(`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * iface,`[`usbus_interface_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga16469c8bc2bc42190f9cd98bef9f4aa5)` * alt)`            | Add alternate settings to a given interface.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`usbus_interface_find_endpoint`](#group__usb__usbus_1ga74ea201634e796cab561072cf165caf4)`(`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * interface,`[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` type,`[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` dir)`            | Find an endpoint from an interface based on the endpoint properties.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`usbus_add_endpoint`](#group__usb__usbus_1ga7207ad5465fb584757cddb3ba57171dd)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * iface,`[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` type,`[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` dir,size_t len)`            | Add an endpoint to the specified interface.
`public void `[`usbus_add_conf_descriptor`](#group__usb__usbus_1gae723a8172357a628e322c2b9f878615f)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * descr_gen)`            | Add a generator for generating additional top level USB descriptor content.
`public void `[`usbus_register_event_handler`](#group__usb__usbus_1gafdee0ccc89875478b524a4b838541569)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler)`            | Add an event handler to the USBUS context.
`public void `[`usbus_init`](#group__usb__usbus_1ga4617c50d18cf14e72d49fdca4dd45723)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * usbdev)`            | Initialize an USBUS context.
`public size_t `[`usbus_max_bulk_endpoint_size`](#group__usb__usbus_1ga64dde196d317f4bd34182b5030ccb2f9)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)`            | Get the maximum supported bulk endpoint transfer size based on the enumeration speed.
`public size_t `[`usbus_max_interrupt_endpoint_size`](#group__usb__usbus_1ga5b14c3c0563952a0a1ed6646cfd94278)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)`            | Get the maximum supported interrupt endpoint transfer size based on the enumeration speed.
`public void `[`usbus_create`](#group__usb__usbus_1ga9bdd47cc43ec54f05d6431f0778a2fa1)`(char * stack,int stacksize,char priority,const char * name,`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)`            | Create and start the USBUS thread.
`public inline static void `[`usbus_urb_init`](#group__usb__usbus_1ga361ee16cbb24079c89ddd4c758d25dc5)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint8_t * buf,size_t len,uint32_t flags)`            | Initialize a new URB.
`public void `[`usbus_urb_submit`](#group__usb__usbus_1gaf7470a25e5890b8511ca8ad4dd3a9687)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * endpoint,`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb)`            | Submit an URB to an endpoint.
`public int `[`usbus_urb_cancel`](#group__usb__usbus_1ga4c8576af57af938731a6031319c9f654)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * endpoint,`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb)`            | Cancel and already queued URB.
`public void `[`usbus_endpoint_halt`](#group__usb__usbus_1gac2f66f1937d9fc14b5f78bcb8a89ce54)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)`            | Set the halt condition on an endpoint.
`public void `[`usbus_endpoint_clear_halt`](#group__usb__usbus_1ga4a34894f930305a566fe5012e48a9ace)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)`            | Clear the halt condition on an endpoint.
`public inline static void `[`usbus_enable_endpoint`](#group__usb__usbus_1gae4071f38c17eb816c961d4969e3d3657)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)`            | Enable an endpoint.
`public inline static void `[`usbus_disable_endpoint`](#group__usb__usbus_1gafafd66d90201d12e56f93bf4d2898a11)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)`            | Disable an endpoint.
`public inline static void `[`usbus_handler_set_flag`](#group__usb__usbus_1ga736fc91ba1547bb71ff0c74bc880b5d6)`(`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler,uint32_t flag)`            | enable a specific handler flag
`public inline static void `[`usbus_handler_remove_flag`](#group__usb__usbus_1ga10a1e5371d5aeca04fd8d0dd0980b94e)`(`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler,uint32_t flag)`            | disable a specific handler flag
`public inline static bool `[`usbus_handler_isset_flag`](#group__usb__usbus_1ga3dc46d0a731c7e5d0dc4d637af9a4c5d)`(`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler,uint32_t flag)`            | check if a specific handler flag is set
`public inline static void `[`usbus_urb_set_flag`](#group__usb__usbus_1ga4d034a6dfbfe65dd5c856a9c6c17ba84)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint32_t flag)`            | enable an URB flag
`public inline static void `[`usbus_urb_remove_flag`](#group__usb__usbus_1ga070ef2744aa5dbd3ccc8583e0ec36e18)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint32_t flag)`            | disable an URB flag
`public inline static bool `[`usbus_urb_isset_flag`](#group__usb__usbus_1gac85f0b690ac5ff9787aeb8dd505c1b00)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint32_t flag)`            | check if an URB flag is set
`struct `[`usbus_string`](#structusbus__string) | USBUS string type.
`struct `[`usbus_descr_gen_funcs_t`](#structusbus__descr__gen__funcs__t) | USBUS descriptor generator function pointers.
`struct `[`usbus_descr_gen`](#structusbus__descr__gen) | USBUS descriptor generator.
`struct `[`usbus_endpoint`](#structusbus__endpoint) | USBUS endpoint context.
`struct `[`usbus_urb`](#structusbus__urb) | USBUS USB request/response block.
`struct `[`usbus_interface_alt`](#structusbus__interface__alt) | USBUS interface alternative setting.
`struct `[`usbus_interface`](#structusbus__interface) | USBUS interface.
`struct `[`usbus_handler_driver`](#structusbus__handler__driver) | USBUS event handler function pointers.
`struct `[`usbus_handler`](#structusbus__handler) | USBUS handler struct.
`struct `[`usbus`](#structusbus) | USBUS context struct.

## Members

#### `define `[`USBUS_TNAME`](#group__usb__usbus_1ga2dba99cdf52ae0b6f8d422cad17f10b6) 

USBUS thread name.

#### `enum `[`usbus_event_usb_t`](#group__usb__usbus_1ga5d99cb353d12b5a49b4a3b10b9863ba5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_EVENT_USB_RESET            | USB reset event
USBUS_EVENT_USB_SOF            | USB start of frame received
USBUS_EVENT_USB_SUSPEND            | USB suspend condition detected.
USBUS_EVENT_USB_RESUME            | USB resume condition detected

USB handler events.

#### `enum `[`usbus_event_transfer_t`](#group__usb__usbus_1ga1d339c5c7f7d634704eab92320d06ab5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_EVENT_TRANSFER_COMPLETE            | Transfer successfully completed.
USBUS_EVENT_TRANSFER_FAIL            | Transfer nack replied by peripheral.
USBUS_EVENT_TRANSFER_STALL            | Transfer stall replied by peripheral.

USB endpoint transfer status events.

#### `enum `[`usbus_state_t`](#group__usb__usbus_1gaf2a0ad7e221dee20728cb73b3aac22ea) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_STATE_DISCONNECT            | Device is disconnected from the host.
USBUS_STATE_RESET            | Reset condition received.
USBUS_STATE_ADDR            | Address configured.
USBUS_STATE_CONFIGURED            | Peripheral is configured.
USBUS_STATE_SUSPEND            | Peripheral is suspended by the host.

state machine states for the global USBUS thread

#### `enum `[`usbus_control_request_state_t`](#group__usb__usbus_1ga75a538ca121919799d4e604539db2525) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_CONTROL_REQUEST_STATE_READY            | Ready for new control request.
USBUS_CONTROL_REQUEST_STATE_INDATA            | Request received with expected DATA IN stage.
USBUS_CONTROL_REQUEST_STATE_OUTACK            | Expecting a zero-length ack OUT request from the host.
USBUS_CONTROL_REQUEST_STATE_OUTDATA            | Data OUT expected.
USBUS_CONTROL_REQUEST_STATE_INACK            | Expecting a zero-length ack IN request from the host.

USBUS control request state machine.

#### `enum `[`usbus_descr_len_type_t`](#group__usb__usbus_1ga316b8d32cac7eb21446ce7935ace810d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBUS_DESCR_LEN_FIXED            | Descriptor always generates a fixed length.
USBUS_DESCR_LEN_FUNC            | Descriptor length is calculated by a function.

descriptor length types for USB descriptor generators

#### `public inline static void `[`usbus_event_post`](#group__usb__usbus_1ga63f20e1d88b109ade0d31934358390ac)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)` 

Submit an event to the usbus thread.

#### Parameters
* `usbus` USBUS context 

* `event` event to post

#### `public uint16_t `[`usbus_add_string_descriptor`](#group__usb__usbus_1gaa1fb60fd43db5b98b7049fd1fee967c8)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * desc,const char * str)` 

Add a string descriptor to the USBUS thread context.

#### Parameters
* `usbus` USBUS context 

* `desc` string descriptor context 

* `str` C string to use

#### Returns
Index of the string descriptor

#### `public uint16_t `[`usbus_add_interface`](#group__usb__usbus_1ga5cc3c30c6e682aa118f3c4a269d2aa43)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * iface)` 

Add an interface to the USBUS thread context.

#### Parameters
* `usbus` USBUS context 

* `iface` USB interface to add

#### Returns
interface index

#### `public void `[`usbus_add_interface_alt`](#group__usb__usbus_1ga0e3513999784ac8bca15e22e932c7caa)`(`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * iface,`[`usbus_interface_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga16469c8bc2bc42190f9cd98bef9f4aa5)` * alt)` 

Add alternate settings to a given interface.

#### Parameters
* `iface` USB interface 

* `alt` alternate settings interface to add

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`usbus_interface_find_endpoint`](#group__usb__usbus_1ga74ea201634e796cab561072cf165caf4)`(`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * interface,`[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` type,`[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` dir)` 

Find an endpoint from an interface based on the endpoint properties.

This iterates over the endpoints in an interface and will return the first endpoint from the interface matching the `type` and `dir`. It will return NULL when no matching endpoint is found.

#### Parameters
* `interface` interface to look in 

* `type` endpoint type to match 

* `dir` endpoint direction to match

#### Returns
ptr to the first matching endpoint 

#### Returns
NULL when no endpoint is found

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`usbus_add_endpoint`](#group__usb__usbus_1ga7207ad5465fb584757cddb3ba57171dd)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * iface,`[`usb_ep_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga23fe3d087b4533eabd8cff2e3371716f)` type,`[`usb_ep_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb_1ga1f43c18c4881219e5578ade7dec43afe)` dir,size_t len)` 

Add an endpoint to the specified interface.

An [usbdev_ep_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f) is requested from the low level peripheral matching the type, direction and buffer length.

#### Parameters
* `usbus` USBUS context 

* `iface` USB interface to add the endpoint to 

* `type` USB endpoint type 

* `dir` USB endpoint direction 

* `len` Buffer space for the endpoint to allocate

#### Returns
Pointer to the endpoint struct 

#### Returns
NULL when no endpoint available

#### `public void `[`usbus_add_conf_descriptor`](#group__usb__usbus_1gae723a8172357a628e322c2b9f878615f)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * descr_gen)` 

Add a generator for generating additional top level USB descriptor content.

#### Parameters
* `usbus` USBUS context 

* `descr_gen` descriptor generator to add

#### `public void `[`usbus_register_event_handler`](#group__usb__usbus_1gafdee0ccc89875478b524a4b838541569)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler)` 

Add an event handler to the USBUS context.

The handler must also belong to an interface ([usbus_interface_t::handler](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__interface_1ac28a4d5bb1f300dbe34389c2f518f768) must point to `handler`) for transfer event callbacks to work.

#### Parameters
* `usbus` USBUS context 

* `handler` event handler to register

#### `public void `[`usbus_init`](#group__usb__usbus_1ga4617c50d18cf14e72d49fdca4dd45723)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * usbdev)` 

Initialize an USBUS context.

#### Parameters
* `usbus` context to initialize 

* `usbdev` usbdev peripheral to use by USBUS

#### `public size_t `[`usbus_max_bulk_endpoint_size`](#group__usb__usbus_1ga64dde196d317f4bd34182b5030ccb2f9)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)` 

Get the maximum supported bulk endpoint transfer size based on the enumeration speed.

Should only be called after enumeration has finished by the peripheral. Calling this in response to the [USBUS_EVENT_USB_RESET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gga5d99cb353d12b5a49b4a3b10b9863ba5a6b0088c19942e50a84c39a4d0758a258) is valid

#### `public size_t `[`usbus_max_interrupt_endpoint_size`](#group__usb__usbus_1ga5b14c3c0563952a0a1ed6646cfd94278)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)` 

Get the maximum supported interrupt endpoint transfer size based on the enumeration speed.

Should only be called after enumeration has finished by the peripheral. Calling this in response to the [USBUS_EVENT_USB_RESET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gga5d99cb353d12b5a49b4a3b10b9863ba5a6b0088c19942e50a84c39a4d0758a258) is valid

#### `public void `[`usbus_create`](#group__usb__usbus_1ga9bdd47cc43ec54f05d6431f0778a2fa1)`(char * stack,int stacksize,char priority,const char * name,`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus)` 

Create and start the USBUS thread.

#### Parameters
* `stack` The stack for the USBUS thread. 

* `stacksize` Size of `stack`. 

* `priority` Priority for the USBUS thread. 

* `name` Name for the USBUS thread May be NULL. 

* `usbus` context to start the thread for

#### `public inline static void `[`usbus_urb_init`](#group__usb__usbus_1ga361ee16cbb24079c89ddd4c758d25dc5)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint8_t * buf,size_t len,uint32_t flags)` 

Initialize a new URB.

Must be called before submitting an URB to an endpoint.

When using this for OUT endpoints, the buffer size and the `len` argument must allow for a whole number of max length transfers.

Requires the `[usbus_urb](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__urb)` module.

#### Parameters
* `urb` URB to submit 

* `buf` Buffer to store or transmit the data from 

* `len` Length of `buf` in bytes 

* `flags` Flags to set for the URB such as [USBUS_URB_FLAG_AUTO_ZLP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga2376c90557b86154f07030b41069053a)

#### `public void `[`usbus_urb_submit`](#group__usb__usbus_1gaf7470a25e5890b8511ca8ad4dd3a9687)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * endpoint,`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb)` 

Submit an URB to an endpoint.

Requires the `[usbus_urb](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__urb)` module.

#### Parameters
* `usbus` USBUS context 

* `endpoint` USBUS endpoint the URB is queued to 

* `urb` URB to submit

#### `public int `[`usbus_urb_cancel`](#group__usb__usbus_1ga4c8576af57af938731a6031319c9f654)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * endpoint,`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb)` 

Cancel and already queued URB.

The URB will be cancelled after the next transmission if the URB is already partially completed. It is up to the handler code to gracefully handle the partially aborted transfer on the endpoint pipe.

The callback will be called if the URB was already started and cancelled while (partially) transferred

Requires the `[usbus_urb](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__urb)` module.

#### Parameters
* `usbus` USBUS context 

* `endpoint` USBUS endpoint the URB is queued to 

* `urb` URB to cancel

#### Returns
0 if the URB is partially completed 1 if the URB was not yet started -1 if the URB was not found in the endpoint queue

#### `public void `[`usbus_endpoint_halt`](#group__usb__usbus_1gac2f66f1937d9fc14b5f78bcb8a89ce54)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)` 

Set the halt condition on an endpoint.

The endpoint will respond with stall to all packets and must explicitly be cleared by the host by clearing the halt condition or switching interfaces

#### `public void `[`usbus_endpoint_clear_halt`](#group__usb__usbus_1ga4a34894f930305a566fe5012e48a9ace)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)` 

Clear the halt condition on an endpoint.

Must only be used when the endpoint is halted and when the host issues a SetInterface request on the interface containing the endpoint

#### `public inline static void `[`usbus_enable_endpoint`](#group__usb__usbus_1gae4071f38c17eb816c961d4969e3d3657)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)` 

Enable an endpoint.

must only be used before the usb peripheral is attached to the host

#### Parameters
* `ep` endpoint to enable

#### `public inline static void `[`usbus_disable_endpoint`](#group__usb__usbus_1gafafd66d90201d12e56f93bf4d2898a11)`(`[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * ep)` 

Disable an endpoint.

must only be used before the usb peripheral is attached to the host

#### Parameters
* `ep` endpoint to disable

#### `public inline static void `[`usbus_handler_set_flag`](#group__usb__usbus_1ga736fc91ba1547bb71ff0c74bc880b5d6)`(`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler,uint32_t flag)` 

enable a specific handler flag

#### Parameters
* `handler` handler to enable the flag for 

* `flag` flag to enable

#### `public inline static void `[`usbus_handler_remove_flag`](#group__usb__usbus_1ga10a1e5371d5aeca04fd8d0dd0980b94e)`(`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler,uint32_t flag)` 

disable a specific handler flag

#### Parameters
* `handler` handler to disable the flag for 

* `flag` flag to disable

#### `public inline static bool `[`usbus_handler_isset_flag`](#group__usb__usbus_1ga3dc46d0a731c7e5d0dc4d637af9a4c5d)`(`[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * handler,uint32_t flag)` 

check if a specific handler flag is set

#### Parameters
* `handler` handler to check for flag 

* `flag` flag to check

#### Returns
true if the flag is set for this handler

#### `public inline static void `[`usbus_urb_set_flag`](#group__usb__usbus_1ga4d034a6dfbfe65dd5c856a9c6c17ba84)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint32_t flag)` 

enable an URB flag

#### Parameters
* `urb` URB to enable the flag for 

* `flag` flag to enable

#### `public inline static void `[`usbus_urb_remove_flag`](#group__usb__usbus_1ga070ef2744aa5dbd3ccc8583e0ec36e18)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint32_t flag)` 

disable an URB flag

#### Parameters
* `urb` URB to disable the flag for 

* `flag` flag to disable

#### `public inline static bool `[`usbus_urb_isset_flag`](#group__usb__usbus_1gac85f0b690ac5ff9787aeb8dd505c1b00)`(`[`usbus_urb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3b9680d32b8efef168671510043922d8)` * urb,uint32_t flag)` 

check if an URB flag is set

#### Parameters
* `urb` URB to check for flag 

* `flag` flag to check

#### Returns
true if the flag is set for this URB

# struct `usbus_string` 

USBUS string type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`usbus_string`](#structusbus__string)` * `[`next`](#structusbus__string_1a302a83bf49ffb0af07fc6d591e5e4e53) | Ptr to the next registered string.
`public const char * `[`str`](#structusbus__string_1a14e73181770533a95ad275c1f05eef18) | C string to use as content
`public uint16_t `[`idx`](#structusbus__string_1a5c48dcf5223e0028ca3bc71916939ed2) | USB string index

## Members

#### `public struct `[`usbus_string`](#structusbus__string)` * `[`next`](#structusbus__string_1a302a83bf49ffb0af07fc6d591e5e4e53) 

Ptr to the next registered string.

#### `public const char * `[`str`](#structusbus__string_1a14e73181770533a95ad275c1f05eef18) 

C string to use as content

#### `public uint16_t `[`idx`](#structusbus__string_1a5c48dcf5223e0028ca3bc71916939ed2) 

USB string index

# struct `usbus_descr_gen_funcs_t` 

USBUS descriptor generator function pointers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t(* `[`fmt_pre_descriptor`](#structusbus__descr__gen__funcs__t_1aa3f0b6ce70e9822e1213e7ae962085a6) | function pointer to format the descriptor content of this descriptor generator.
`public size_t(* `[`fmt_post_descriptor`](#structusbus__descr__gen__funcs__t_1a429d30e60d907989a4f89a272b9cb343) | function pointer to format the descriptor content of this descriptor generator.
`public size_t(* `[`get_descriptor_len`](#structusbus__descr__gen__funcs__t_1a3d67361c1e790d07f95788340fbedede) | USBUS generic descriptor generator generated length.
`public size_t `[`fixed_len`](#structusbus__descr__gen__funcs__t_1aee25fa19a5e29fcb85caffd1a6840698) | Fixed total length of the generated descriptors.
`public union usbus_descr_gen_funcs_t::@393 `[`len`](#structusbus__descr__gen__funcs__t_1a1188280e56d6f0871cb0433663898548) | Fixed or generated length of the descriptor.
`public `[`usbus_descr_len_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga316b8d32cac7eb21446ce7935ace810d)` `[`len_type`](#structusbus__descr__gen__funcs__t_1a6b4e0ee61de3d5094e924ae765d97e58) | Either USBUS_DESCR_LEN_FIXED or USBUS_DESCR_LEN_FUNC.

## Members

#### `public size_t(* `[`fmt_pre_descriptor`](#structusbus__descr__gen__funcs__t_1aa3f0b6ce70e9822e1213e7ae962085a6) 

function pointer to format the descriptor content of this descriptor generator.

The content of this descriptor is prefixes before the descriptor of the object it is part of.

#### Parameters
* `usbus` The usbus context 

* `arg` Additional argument for the descriptor generator

#### Returns
Length of the generated descriptor

#### `public size_t(* `[`fmt_post_descriptor`](#structusbus__descr__gen__funcs__t_1a429d30e60d907989a4f89a272b9cb343) 

function pointer to format the descriptor content of this descriptor generator.

The content of this descriptor is appended after the descriptor of the object it is part of.

#### Parameters
* `usbus` The usbus context 

* `arg` Additional argument for the descriptor generator

#### Returns
Length of the generated descriptor

#### `public size_t(* `[`get_descriptor_len`](#structusbus__descr__gen__funcs__t_1a3d67361c1e790d07f95788340fbedede) 

USBUS generic descriptor generator generated length.

Must return the total length of the descriptors that will be generated by [fmt_pre_descriptor](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t_1aa3f0b6ce70e9822e1213e7ae962085a6) and [fmt_post_descriptor](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t_1a429d30e60d907989a4f89a272b9cb343) This function is used when [len_type](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t_1a6b4e0ee61de3d5094e924ae765d97e58) is set to [USBUS_DESCR_LEN_FUNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gga316b8d32cac7eb21446ce7935ace810dafc90097493eff16750687d5f70af773e).

#### Parameters
* `usbus` The usbus context 

* `arg` Additional argument for the descriptor generators

#### Returns
Length of the generated descriptors

#### `public size_t `[`fixed_len`](#structusbus__descr__gen__funcs__t_1aee25fa19a5e29fcb85caffd1a6840698) 

Fixed total length of the generated descriptors.

Must return the total length of the descriptors that will be generated by the [fmt_pre_descriptor](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t_1aa3f0b6ce70e9822e1213e7ae962085a6) and [fmt_post_descriptor](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t_1a429d30e60d907989a4f89a272b9cb343). This value is used when [len_type](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t_1a6b4e0ee61de3d5094e924ae765d97e58) is set to [USBUS_DESCR_LEN_FIXED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gga316b8d32cac7eb21446ce7935ace810da5581420333bbd0286d8b1b1a5fd27f80).

#### `public union usbus_descr_gen_funcs_t::@393 `[`len`](#structusbus__descr__gen__funcs__t_1a1188280e56d6f0871cb0433663898548) 

Fixed or generated length of the descriptor.

#### `public `[`usbus_descr_len_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga316b8d32cac7eb21446ce7935ace810d)` `[`len_type`](#structusbus__descr__gen__funcs__t_1a6b4e0ee61de3d5094e924ae765d97e58) 

Either USBUS_DESCR_LEN_FIXED or USBUS_DESCR_LEN_FUNC.

# struct `usbus_descr_gen` 

USBUS descriptor generator.

The functions are called to allow custom modules to define their own descriptors in addition to the USB descriptor. The top level ([usbus_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)), the interface ([usbus_interface_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)), interface alternative settings ([usbus_interface_alt_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga16469c8bc2bc42190f9cd98bef9f4aa5)) and endpoints ([usbus_endpoint_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)) allow for generating additional descriptors

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`usbus_descr_gen`](#structusbus__descr__gen)` * `[`next`](#structusbus__descr__gen_1af3304599f4516e8145b0e3f364be3903) | ptr to the next descriptor generator
`public const `[`usbus_descr_gen_funcs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t)` * `[`funcs`](#structusbus__descr__gen_1af4207dbbbab24df0a4d8ea0687e09762) | Function pointers.
`public void * `[`arg`](#structusbus__descr__gen_1a26d862ff660f06506895b1f360dd1f86) | Extra context argument for the descriptor functions.

## Members

#### `public struct `[`usbus_descr_gen`](#structusbus__descr__gen)` * `[`next`](#structusbus__descr__gen_1af3304599f4516e8145b0e3f364be3903) 

ptr to the next descriptor generator

#### `public const `[`usbus_descr_gen_funcs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__descr__gen__funcs__t)` * `[`funcs`](#structusbus__descr__gen_1af4207dbbbab24df0a4d8ea0687e09762) 

Function pointers.

#### `public void * `[`arg`](#structusbus__descr__gen_1a26d862ff660f06506895b1f360dd1f86) 

Extra context argument for the descriptor functions.

# struct `usbus_endpoint` 

USBUS endpoint context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`usbus_endpoint`](#structusbus__endpoint)` * `[`next`](#structusbus__endpoint_1a9e16d8c58077cf338bed067d00740e91) | Next endpoint in the [usbus_interface_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6) list of endpoints.
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus__endpoint_1ae7d9d435b61a021725b0fae7fc7c05ad) | Linked list of optional additional descriptor generators.
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`ep`](#structusbus__endpoint_1a991badb8078416c18c6cfb9f973b657a) | ptr to the matching usbdev endpoint
`public uint16_t `[`maxpacketsize`](#structusbus__endpoint_1a305f60dc8601433bd9017c76689b99ff) | Max packet size of this endpoint.
`public uint8_t `[`interval`](#structusbus__endpoint_1a9b124352014a6f5eac9e7163a0d4172c) | Poll interval for interrupt endpoints.
`public bool `[`active`](#structusbus__endpoint_1a577b23fb342b8bffead37946c91c44fa) | If the endpoint should be activated after reset.
`public bool `[`halted`](#structusbus__endpoint_1aea311bf7a820189ffe52c1d3bd94f171) | Endpoint is halted.

## Members

#### `public struct `[`usbus_endpoint`](#structusbus__endpoint)` * `[`next`](#structusbus__endpoint_1a9e16d8c58077cf338bed067d00740e91) 

Next endpoint in the [usbus_interface_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6) list of endpoints.

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus__endpoint_1ae7d9d435b61a021725b0fae7fc7c05ad) 

Linked list of optional additional descriptor generators.

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` * `[`ep`](#structusbus__endpoint_1a991badb8078416c18c6cfb9f973b657a) 

ptr to the matching usbdev endpoint

#### `public uint16_t `[`maxpacketsize`](#structusbus__endpoint_1a305f60dc8601433bd9017c76689b99ff) 

Max packet size of this endpoint.

#### `public uint8_t `[`interval`](#structusbus__endpoint_1a9b124352014a6f5eac9e7163a0d4172c) 

Poll interval for interrupt endpoints.

#### `public bool `[`active`](#structusbus__endpoint_1a577b23fb342b8bffead37946c91c44fa) 

If the endpoint should be activated after reset.

#### `public bool `[`halted`](#structusbus__endpoint_1aea311bf7a820189ffe52c1d3bd94f171) 

Endpoint is halted.

# struct `usbus_urb` 

USBUS USB request/response block.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list`](#structusbus__urb_1a728de4db9567c2b8c6642eebde64b06b) | clist block in the queue
`public uint32_t `[`flags`](#structusbus__urb_1a9d5b895aa254172f8595da86cbb5c1c5) | Transfer flags.
`public uint8_t * `[`buf`](#structusbus__urb_1a4444120f034e3e122d9c974041cf7d26) | Pointer to the (aligned) buffer.
`public size_t `[`len`](#structusbus__urb_1a7ccac76dcea61460efd7f393a59868e1) | Length of the data.
`public size_t `[`transferred`](#structusbus__urb_1aca776b2cefda487a7825fb46ac377ecd) | amount transferred, only valid for OUT

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list`](#structusbus__urb_1a728de4db9567c2b8c6642eebde64b06b) 

clist block in the queue

#### `public uint32_t `[`flags`](#structusbus__urb_1a9d5b895aa254172f8595da86cbb5c1c5) 

Transfer flags.

#### `public uint8_t * `[`buf`](#structusbus__urb_1a4444120f034e3e122d9c974041cf7d26) 

Pointer to the (aligned) buffer.

#### `public size_t `[`len`](#structusbus__urb_1a7ccac76dcea61460efd7f393a59868e1) 

Length of the data.

#### `public size_t `[`transferred`](#structusbus__urb_1aca776b2cefda487a7825fb46ac377ecd) 

amount transferred, only valid for OUT

# struct `usbus_interface_alt` 

USBUS interface alternative setting.

Used for specifying alternative interfaces for an [usbus_interface_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`usbus_interface_alt`](#structusbus__interface__alt)` * `[`next`](#structusbus__interface__alt_1a5ab082ff23982d6eeca02db5e52ae399) | Next alternative setting.
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus__interface__alt_1a264c8dd70815a435852ff7bd4536d827) | Linked list of optional additional descriptor generators.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep`](#structusbus__interface__alt_1a9434a14418308ca4aea684be350bdc3a) | List of associated endpoints for this alternative setting.
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * `[`descr`](#structusbus__interface__alt_1abf65a5dacafd23b32e3b8e86101f3e8a) | Descriptor string.

## Members

#### `public struct `[`usbus_interface_alt`](#structusbus__interface__alt)` * `[`next`](#structusbus__interface__alt_1a5ab082ff23982d6eeca02db5e52ae399) 

Next alternative setting.

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus__interface__alt_1a264c8dd70815a435852ff7bd4536d827) 

Linked list of optional additional descriptor generators.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep`](#structusbus__interface__alt_1a9434a14418308ca4aea684be350bdc3a) 

List of associated endpoints for this alternative setting.

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * `[`descr`](#structusbus__interface__alt_1abf65a5dacafd23b32e3b8e86101f3e8a) 

Descriptor string.

# struct `usbus_interface` 

USBUS interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`usbus_interface`](#structusbus__interface)` * `[`next`](#structusbus__interface_1aae6fec32326b9bba20ca467cec71d26d) | Next interface (set by USBUS during registration)
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus__interface_1ab070c39348821d02418b1c3729427422) | Linked list of optional additional descriptor generators.
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep`](#structusbus__interface_1aa71f52f3cb3b0574baf0fe58dd997e4c) | Linked list of endpoints belonging to this interface
`public struct `[`usbus_interface_alt`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__interface__alt)` * `[`alts`](#structusbus__interface_1a8aa356e572481a17991fc3a85eecb1fb) | List of alt settings
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * `[`handler`](#structusbus__interface_1ac28a4d5bb1f300dbe34389c2f518f768) | Handlers for this interface
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * `[`descr`](#structusbus__interface_1af67edfc74c34ce752bc4ab0e81da97c6) | Descriptor string
`public uint16_t `[`idx`](#structusbus__interface_1ad8abbf79c1e684266290f36c00e35fa4) | Interface index, (set by USBUS during registration
`public uint8_t `[`class`](#structusbus__interface_1a9f311ec075cbabd24c22f6d7fe25bc43) | USB interface class
`public uint8_t `[`subclass`](#structusbus__interface_1aa55f96db1f643e25d800ee3257e7b8ab) | USB interface subclass
`public uint8_t `[`protocol`](#structusbus__interface_1a54f47899de04e073025ff35432ad6561) | USB interface protocol

## Members

#### `public struct `[`usbus_interface`](#structusbus__interface)` * `[`next`](#structusbus__interface_1aae6fec32326b9bba20ca467cec71d26d) 

Next interface (set by USBUS during registration)

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus__interface_1ab070c39348821d02418b1c3729427422) 

Linked list of optional additional descriptor generators.

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` * `[`ep`](#structusbus__interface_1aa71f52f3cb3b0574baf0fe58dd997e4c) 

Linked list of endpoints belonging to this interface

#### `public struct `[`usbus_interface_alt`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_usbus.md#structusbus__interface__alt)` * `[`alts`](#structusbus__interface_1a8aa356e572481a17991fc3a85eecb1fb) 

List of alt settings

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * `[`handler`](#structusbus__interface_1ac28a4d5bb1f300dbe34389c2f518f768) 

Handlers for this interface

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * `[`descr`](#structusbus__interface_1af67edfc74c34ce752bc4ab0e81da97c6) 

Descriptor string

#### `public uint16_t `[`idx`](#structusbus__interface_1ad8abbf79c1e684266290f36c00e35fa4) 

Interface index, (set by USBUS during registration

#### `public uint8_t `[`class`](#structusbus__interface_1a9f311ec075cbabd24c22f6d7fe25bc43) 

USB interface class

#### `public uint8_t `[`subclass`](#structusbus__interface_1aa55f96db1f643e25d800ee3257e7b8ab) 

USB interface subclass

#### `public uint8_t `[`protocol`](#structusbus__interface_1a54f47899de04e073025ff35432ad6561) 

USB interface protocol

# struct `usbus_handler_driver` 

USBUS event handler function pointers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`init`](#structusbus__handler__driver_1a0aff27d6f7154cb5a7fd66cdf32ae0f0) | Initialize the event handler.
`public void(* `[`event_handler`](#structusbus__handler__driver_1af1f6d98e61b424e1c493e2bb55ae0d74) | event handler function
`public void(* `[`transfer_handler`](#structusbus__handler__driver_1a1ef1e2c47e7067149c33ec9de3c9b8c2) | transfer handler function
`public int(* `[`control_handler`](#structusbus__handler__driver_1af5ecafe8227b5d4f523ee8ca127377a2) | control request handler function

## Members

#### `public void(* `[`init`](#structusbus__handler__driver_1a0aff27d6f7154cb5a7fd66cdf32ae0f0) 

Initialize the event handler.

This function is called in the USBUS thread context to initialize the event handler

#### Parameters
* `usbus` USBUS context 

* `handler` handler context

#### `public void(* `[`event_handler`](#structusbus__handler__driver_1af1f6d98e61b424e1c493e2bb55ae0d74) 

event handler function

This function is passed USBUS events

#### Parameters
* `usbus` USBUS context 

* `handler` handler context 

* `event` [usbus_event_usb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga5d99cb353d12b5a49b4a3b10b9863ba5) event to handle

#### `public void(* `[`transfer_handler`](#structusbus__handler__driver_1a1ef1e2c47e7067149c33ec9de3c9b8c2) 

transfer handler function

This function receives transfer based events

#### Parameters
* `usbus` USBUS context 

* `handler` handler context 

* `ep` usbdev endpoint that triggered the event 

* `event` [usbus_event_transfer_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga1d339c5c7f7d634704eab92320d06ab5) event

#### `public int(* `[`control_handler`](#structusbus__handler__driver_1af5ecafe8227b5d4f523ee8ca127377a2) 

control request handler function

This function receives USB control requests from the USBUS stack.

#### Parameters
* `usbus` USBUS context 

* `handler` handler context 

* `state` control request state 

* `setup` setup packet

#### Returns
Size of the returned data when the request is handled 

#### Returns
negative to have the stack return an USB stall to the host 

#### Returns
zero when the request is not handled by this handler

# struct `usbus_handler` 

USBUS handler struct.

Inherit from this struct for custom USB functionality

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`usbus_handler`](#structusbus__handler)` * `[`next`](#structusbus__handler_1a5cfc192962f663c5e5c20f6bc898d44a) | List of handlers (to be used by [usbus_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4))
`public const `[`usbus_handler_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3092f9891cbe7488c016ab954af75e52)` * `[`driver`](#structusbus__handler_1ac51e79e1916294dff885394c4f24218d) | driver for this handler
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * `[`iface`](#structusbus__handler_1af3f32dca396d178bca84415211c155ad) | Interface this handler belongs to.
`public uint32_t `[`flags`](#structusbus__handler_1aac72a781c9a62ba93a6b68c109a90cf6) | Report flags.

## Members

#### `public struct `[`usbus_handler`](#structusbus__handler)` * `[`next`](#structusbus__handler_1a5cfc192962f663c5e5c20f6bc898d44a) 

List of handlers (to be used by [usbus_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4))

#### `public const `[`usbus_handler_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga3092f9891cbe7488c016ab954af75e52)` * `[`driver`](#structusbus__handler_1ac51e79e1916294dff885394c4f24218d) 

driver for this handler

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * `[`iface`](#structusbus__handler_1af3f32dca396d178bca84415211c155ad) 

Interface this handler belongs to.

#### `public uint32_t `[`flags`](#structusbus__handler_1aac72a781c9a62ba93a6b68c109a90cf6) 

Report flags.

# struct `usbus` 

USBUS context struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`manuf`](#structusbus_1a70f86f39350e1377733fde8702068265) | Manufacturer string
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`product`](#structusbus_1a64755332161379c412f7d35c2405ae64) | Product string
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`config`](#structusbus_1af28dfd359181bd0d19553f108c02d44f) | Configuration string
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`serial`](#structusbus_1a624e38a8d2939f2a7ee2e04ddc27bc88) | serial string
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` `[`ep_out`](#structusbus_1a2d07fa2391dfbf491d7b84e289457c44) | USBUS OUT endpoints
`public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` `[`ep_in`](#structusbus_1a5d48d8dfa48811845f14538e4298b51d) | USBUS IN endpoints
`public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` `[`queue`](#structusbus_1ab8423ef95231063a012c6821d5fe42c7) | Event queue
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * `[`dev`](#structusbus_1a767a87d1917163a4014ffd59c2a0a9ea) | usb phy device of the usb manager
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * `[`control`](#structusbus_1a6207da29e09c9f3b611b19b51b7c8b47) | Ptr to the control endpoint handler
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus_1a607a0835bf6babc052e851666f081fd4) | Linked list of top level descriptor generators
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * `[`strings`](#structusbus_1a74facc6eeb6d41c5ed5a0d7f85c2c220) | List of descriptor strings
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * `[`iface`](#structusbus_1aa3754c912b81a815c329fb8dfcd25758) | List of USB interfaces
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * `[`handlers`](#structusbus_1a33e952577e8112f996bc9cda7f0ab0f2) | List of event callback handlers
`public uint32_t `[`ep_events`](#structusbus_1aef47d108c646ef2ab3065d3c0eebe658) | bitflags with endpoint event state
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structusbus_1a59ffb49e52d16f7b5cee8d765ed38f3c) | PID of the usb manager's thread
`public uint16_t `[`str_idx`](#structusbus_1a7d439e2dc32edd4bc140b3ef3c284eaf) | Number of strings registered
`public `[`usbus_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaf2a0ad7e221dee20728cb73b3aac22ea)` `[`state`](#structusbus_1a0f124d662127556bf1788b65c2a1f487) | Current state
`public `[`usbus_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaf2a0ad7e221dee20728cb73b3aac22ea)` `[`pstate`](#structusbus_1a28afaa852267a7754786e07c435e25b0) | state to recover to from suspend
`public uint8_t `[`addr`](#structusbus_1a42d383b25bd65618d027514471b210e5) | Address of the USB peripheral
`public bool `[`wakeup_enabled`](#structusbus_1a4899eb00cd2ba7b591cc1477906cd9c2) | Remote wakeup device feature status
`public char `[`serial_str`](#structusbus_1a511ba153f855deaabab543c736938fc8) | Hex representation of the device serial number.

## Members

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`manuf`](#structusbus_1a70f86f39350e1377733fde8702068265) 

Manufacturer string

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`product`](#structusbus_1a64755332161379c412f7d35c2405ae64) 

Product string

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`config`](#structusbus_1af28dfd359181bd0d19553f108c02d44f) 

Configuration string

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`serial`](#structusbus_1a624e38a8d2939f2a7ee2e04ddc27bc88) 

serial string

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` `[`ep_out`](#structusbus_1a2d07fa2391dfbf491d7b84e289457c44) 

USBUS OUT endpoints

#### `public `[`usbus_endpoint_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga50f8ddfc9c0ddf5141cd87410a64cf26)` `[`ep_in`](#structusbus_1a5d48d8dfa48811845f14538e4298b51d) 

USBUS IN endpoints

#### `public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` `[`queue`](#structusbus_1ab8423ef95231063a012c6821d5fe42c7) 

Event queue

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` * `[`dev`](#structusbus_1a767a87d1917163a4014ffd59c2a0a9ea) 

usb phy device of the usb manager

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * `[`control`](#structusbus_1a6207da29e09c9f3b611b19b51b7c8b47) 

Ptr to the control endpoint handler

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` * `[`descr_gen`](#structusbus_1a607a0835bf6babc052e851666f081fd4) 

Linked list of top level descriptor generators

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` * `[`strings`](#structusbus_1a74facc6eeb6d41c5ed5a0d7f85c2c220) 

List of descriptor strings

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` * `[`iface`](#structusbus_1aa3754c912b81a815c329fb8dfcd25758) 

List of USB interfaces

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` * `[`handlers`](#structusbus_1a33e952577e8112f996bc9cda7f0ab0f2) 

List of event callback handlers

#### `public uint32_t `[`ep_events`](#structusbus_1aef47d108c646ef2ab3065d3c0eebe658) 

bitflags with endpoint event state

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structusbus_1a59ffb49e52d16f7b5cee8d765ed38f3c) 

PID of the usb manager's thread

#### `public uint16_t `[`str_idx`](#structusbus_1a7d439e2dc32edd4bc140b3ef3c284eaf) 

Number of strings registered

#### `public `[`usbus_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaf2a0ad7e221dee20728cb73b3aac22ea)` `[`state`](#structusbus_1a0f124d662127556bf1788b65c2a1f487) 

Current state

#### `public `[`usbus_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaf2a0ad7e221dee20728cb73b3aac22ea)` `[`pstate`](#structusbus_1a28afaa852267a7754786e07c435e25b0) 

state to recover to from suspend

#### `public uint8_t `[`addr`](#structusbus_1a42d383b25bd65618d027514471b210e5) 

Address of the USB peripheral

#### `public bool `[`wakeup_enabled`](#structusbus_1a4899eb00cd2ba7b591cc1477906cd9c2) 

Remote wakeup device feature status

#### `public char `[`serial_str`](#structusbus_1a511ba153f855deaabab543c736938fc8) 

Hex representation of the device serial number.

