---
title: api-usbus_dfu.md
description: api-usbus_dfu.md
---
# group `usbus_dfu` 

Specific USB DFU defines and helpers for USBUS.

Dylan Laduranty [dylan.laduranty@mesotic.com](mailto:dylan.laduranty@mesotic.com)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`usbus_dfu_init`](#group__usbus__dfu_1gac1a7e8b2282de12e223e65ca74f23526)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_dfu_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__dfu_1gab4718e27b33f403e1080c91f7a583b6f)` * handler,unsigned mode)`            | DFU initialization function.
`struct `[`usbus_dfu_device`](#structusbus__dfu__device) | USBUS DFU device interface context.

## Members

#### `public void `[`usbus_dfu_init`](#group__usbus__dfu_1gac1a7e8b2282de12e223e65ca74f23526)`(`[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * usbus,`[`usbus_dfu_device_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__dfu_1gab4718e27b33f403e1080c91f7a583b6f)` * handler,unsigned mode)` 

DFU initialization function.

#### Parameters
* `usbus` USBUS thread to use 

* `handler` DFU device struct 

* `mode` DFU start mode (0 runtime mode / 1 dfu mode)

# struct `usbus_dfu_device` 

USBUS DFU device interface context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__dfu__device_1aeabb463ff2d9757b3b6fe7c455b728ae) | Control interface handler.
`public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface`](#structusbus__dfu__device_1a0108af7cf69389927b856c88ff3abd10) | Control interface.
`public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`dfu_descr`](#structusbus__dfu__device_1aed03497ebc6ef00b8461d7b5d0fdf3ef) | DFU descriptor generator.
`public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`slot0_str`](#structusbus__dfu__device_1a4a97b6b8a9fb4caff4479797fc1be785) | Descriptor string for Slot 0.
`public bool `[`skip_signature`](#structusbus__dfu__device_1a751a672a6e400fde4f7f09526872cba5) | Skip RIOTBOOT signature status.
`public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__dfu__device_1aff359341ef73d609ef0d6b1010216fcc) | Ptr to the USBUS context.
`public unsigned `[`mode`](#structusbus__dfu__device_1a5d6404394ae05e0ccec59a475eabbabf) | 0 - APP mode, 1 DFU mode
`public unsigned `[`selected_slot`](#structusbus__dfu__device_1a77a6ab025f2f12108b3dfb0ee86c7975) | Slot used for upgrade.
`public `[`usb_dfu_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__dfu_1ga2f008df3077af8db1ac0827034b34e57)` `[`dfu_state`](#structusbus__dfu__device_1a49e40746935c9cb585ff96b29f6883ce) | Internal DFU state machine.

## Members

#### `public `[`usbus_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac1b5cc2688623f80e0104149531bb098)` `[`handler_ctrl`](#structusbus__dfu__device_1aeabb463ff2d9757b3b6fe7c455b728ae) 

Control interface handler.

#### `public `[`usbus_interface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gaa7b80bc5f8481949d7744e77080881c6)` `[`iface`](#structusbus__dfu__device_1a0108af7cf69389927b856c88ff3abd10) 

Control interface.

#### `public `[`usbus_descr_gen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga917d1163eff1dafe646b30288a1a4a39)` `[`dfu_descr`](#structusbus__dfu__device_1aed03497ebc6ef00b8461d7b5d0fdf3ef) 

DFU descriptor generator.

#### `public `[`usbus_string_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1ga396ffcaf8fe927535e8aac027c22a49d)` `[`slot0_str`](#structusbus__dfu__device_1a4a97b6b8a9fb4caff4479797fc1be785) 

Descriptor string for Slot 0.

#### `public bool `[`skip_signature`](#structusbus__dfu__device_1a751a672a6e400fde4f7f09526872cba5) 

Skip RIOTBOOT signature status.

#### `public `[`usbus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__usbus_1gac6a7ed25efb69d40694b3d95125743a4)` * `[`usbus`](#structusbus__dfu__device_1aff359341ef73d609ef0d6b1010216fcc) 

Ptr to the USBUS context.

#### `public unsigned `[`mode`](#structusbus__dfu__device_1a5d6404394ae05e0ccec59a475eabbabf) 

0 - APP mode, 1 DFU mode

#### `public unsigned `[`selected_slot`](#structusbus__dfu__device_1a77a6ab025f2f12108b3dfb0ee86c7975) 

Slot used for upgrade.

#### `public `[`usb_dfu_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__dfu_1ga2f008df3077af8db1ac0827034b34e57)` `[`dfu_state`](#structusbus__dfu__device_1a49e40746935c9cb585ff96b29f6883ce) 

Internal DFU state machine.

