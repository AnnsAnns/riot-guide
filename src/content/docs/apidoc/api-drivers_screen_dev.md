---
title: api-drivers_screen_dev.md
description: api-drivers_screen_dev.md
---
# group `drivers_screen_dev` 

Define the generic API of a screen device.

The screen device API is a generic API built on top of display and touch device APIs.

Each display/touch device driver implementing this interface has to expose a set of predefined functions and it has to register itself to the central display/touch device registry. From here devices can be found, listed, and accessed.

The display and touch devices are linked to a screen by providing the screen id (basically an index) they correspond to.

**See also**: [Display device generic API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev)

**See also**: [Touch device generic API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev)

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

Alexandre Abadie [alexandre.abadie@inria.fr](mailto:alexandre.abadie@inria.fr)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`screen_dev_t`](#structscreen__dev__t) | Screen device descriptor.

# struct `screen_dev_t` 

Screen device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * `[`display`](#structscreen__dev__t_1a963b3991223043ad6aad0f7b547ad74d) | Pointer to the display device.
`public `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * `[`touch`](#structscreen__dev__t_1ae12005803b55624dd63b8562a3cbd792) | Pointer to the touch device.

## Members

#### `public `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * `[`display`](#structscreen__dev__t_1a963b3991223043ad6aad0f7b547ad74d) 

Pointer to the display device.

#### `public `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * `[`touch`](#structscreen__dev__t_1ae12005803b55624dd63b8562a3cbd792) 

Pointer to the touch device.

