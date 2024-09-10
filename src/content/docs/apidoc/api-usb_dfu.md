---
title: api-usb_dfu.md
description: api-usb_dfu.md
---
# group `usb_dfu` 

Generic USB DFU defines and helpers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USB_IF_DESCRIPTOR_DFU`](#group__usb__dfu_1ga8a44f2f244b4a3817274fa3907a20760)            | USB DFU type descriptor.
`define `[`USB_DFU_VERSION_BCD`](#group__usb__dfu_1gabe229532c7904bcbba597dbb864410cf)            | USB DFU version in BCD.
`enum `[`usb_dfu_state_t`](#group__usb__dfu_1ga2f008df3077af8db1ac0827034b34e57)            | USBUS DFU internal state.
`struct `[`usb_desc_if_dfu_t`](#structusb__desc__if__dfu__t) | USB DFU interface descriptor.
`struct `[`dfu_get_status_pkt_t`](#structdfu__get__status__pkt__t) | USB DFU get_status control request packet.

## Members

#### `define `[`USB_IF_DESCRIPTOR_DFU`](#group__usb__dfu_1ga8a44f2f244b4a3817274fa3907a20760) 

USB DFU type descriptor.

#### `define `[`USB_DFU_VERSION_BCD`](#group__usb__dfu_1gabe229532c7904bcbba597dbb864410cf) 

USB DFU version in BCD.

#### `enum `[`usb_dfu_state_t`](#group__usb__dfu_1ga2f008df3077af8db1ac0827034b34e57) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USB_DFU_STATE_APP_IDLE            | DFU application idle.
USB_DFU_STATE_APP_DETACH            | DFU application detach (reboot to DFU mode)
USB_DFU_STATE_DFU_IDLE            | DFU runtime mode idle.
USB_DFU_STATE_DFU_DL_SYNC            | DFU download synchronization.
USB_DFU_STATE_DFU_DL_BUSY            | DFU download busy.
USB_DFU_STATE_DFU_DL_IDLE            | DFU download idle.
USB_DFU_STATE_DFU_MANIFEST_SYNC            | DFU manifest synchronization.
USB_DFU_STATE_DFU_MANIFEST            | DFU manifest mode.
USB_DFU_STATE_DFU_MANIFEST_WAIT_RST            | DFU manifest wait for CPU reset.
USB_DFU_STATE_DFU_UP_IDLE            | DFU upload idle.
USB_DFU_STATE_DFU_ERROR            | DFU internal error.

USBUS DFU internal state.

# struct `usb_desc_if_dfu_t` 

USB DFU interface descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__if__dfu__t_1a1348fa380014aee44a6b86da734a3bf0) | Descriptor length.
`public uint8_t `[`type`](#structusb__desc__if__dfu__t_1af26840faff174f62588517246966878c) | Descriptor type.
`public uint8_t `[`attribute`](#structusb__desc__if__dfu__t_1ae65c0ba30cd967c17a28b24f403f06e8) | Descriptor attributes flags.
`public uint16_t `[`detach_timeout`](#structusb__desc__if__dfu__t_1ac4cbb5b23e969d5bb939b08357ab9581) | Descriptor detach timeout (ms)
`public uint16_t `[`xfer_size`](#structusb__desc__if__dfu__t_1a59e2e5993599c43d54de6c4fc69aa29e) | Descriptor transaction size.
`public uint16_t `[`bcd_dfu`](#structusb__desc__if__dfu__t_1a21c3e375a5fab20cdfa35fa2966e5f8f) | Descriptor bcd version.

## Members

#### `public uint8_t `[`length`](#structusb__desc__if__dfu__t_1a1348fa380014aee44a6b86da734a3bf0) 

Descriptor length.

#### `public uint8_t `[`type`](#structusb__desc__if__dfu__t_1af26840faff174f62588517246966878c) 

Descriptor type.

#### `public uint8_t `[`attribute`](#structusb__desc__if__dfu__t_1ae65c0ba30cd967c17a28b24f403f06e8) 

Descriptor attributes flags.

#### `public uint16_t `[`detach_timeout`](#structusb__desc__if__dfu__t_1ac4cbb5b23e969d5bb939b08357ab9581) 

Descriptor detach timeout (ms)

#### `public uint16_t `[`xfer_size`](#structusb__desc__if__dfu__t_1a59e2e5993599c43d54de6c4fc69aa29e) 

Descriptor transaction size.

#### `public uint16_t `[`bcd_dfu`](#structusb__desc__if__dfu__t_1a21c3e375a5fab20cdfa35fa2966e5f8f) 

Descriptor bcd version.

# struct `dfu_get_status_pkt_t` 

USB DFU get_status control request packet.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`status`](#structdfu__get__status__pkt__t_1a84b3a5a1ff4afefc5596765ebf6d0868) | DFU status response.
`public uint32_t `[`timeout`](#structdfu__get__status__pkt__t_1a253ccaf15de4c4933e9c2c20c14faefa) | DFU timeout (ms) response.
`public uint8_t `[`state`](#structdfu__get__status__pkt__t_1a0837b83b5935dbe79388c7a6d53eac15) | DFU internal state machine.
`public uint8_t `[`string`](#structdfu__get__status__pkt__t_1a72cf0db29fc4f8b8c216c08a4b1e456c) | DFU string.

## Members

#### `public uint8_t `[`status`](#structdfu__get__status__pkt__t_1a84b3a5a1ff4afefc5596765ebf6d0868) 

DFU status response.

#### `public uint32_t `[`timeout`](#structdfu__get__status__pkt__t_1a253ccaf15de4c4933e9c2c20c14faefa) 

DFU timeout (ms) response.

#### `public uint8_t `[`state`](#structdfu__get__status__pkt__t_1a0837b83b5935dbe79388c7a6d53eac15) 

DFU internal state machine.

#### `public uint8_t `[`string`](#structdfu__get__status__pkt__t_1a72cf0db29fc4f8b8c216c08a4b1e456c) 

DFU string.

