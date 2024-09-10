---
title: api-usb_usbopt.md
description: api-usb_usbopt.md
---
# group `usb_usbopt` 

List of available configuration options for the [usbdev - USB Device Driver API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`usbopt_t`](#group__usb__usbopt_1ga17a44d2fafdcc150af3c3d4ec04fb7f7)            | List of configuration settings for USB peripherals.
`enum `[`usbopt_ep_t`](#group__usb__usbopt_1gaa4ab17169bd97bfcce86f3b3fd6d2670)            | List of configuration settings for USB peripheral endpoints.
`enum `[`usbopt_enable_t`](#group__usb__usbopt_1ga298e54047352a763ccfa579ebdc8500a)            | Binary parameter for enabling and disabling options.

## Members

#### `enum `[`usbopt_t`](#group__usb__usbopt_1ga17a44d2fafdcc150af3c3d4ec04fb7f7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBOPT_ADDRESS            | (uint8_t) USB device address, limited to 7 bit by the protocol
USBOPT_ATTACH            | (usbopt_enable_t) Attach/detach USB peripheral to host
USBOPT_CONNECTED            | (usbopt_enable_t) Whether a USB host connection is detected
USBOPT_MAX_VERSION            | (usb_version_t) Highest USB version supported by peripheral
USBOPT_MAX_SPEED            | (usb_version_t) Highest USB speed supported by peripheral
USBOPT_ENUMERATED_SPEED            | (usb_version_t) Speed at which the usb peripheral got enumerated by the host

List of configuration settings for USB peripherals.

The data type specified in parentheses for each individual option is the data type to use for the argument when getting/setting the value of the option.

#### `enum `[`usbopt_ep_t`](#group__usb__usbopt_1gaa4ab17169bd97bfcce86f3b3fd6d2670) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBOPT_EP_ENABLE            | (usbopt_enable_t) Enable or disable the endpoint
USBOPT_EP_STALL            | (usbopt_enable_t) Enable or disable stall replies for endpoint
USBOPT_EP_AVAILABLE            | (size_t) Retrieve number of bytes available on endpoint.

List of configuration settings for USB peripheral endpoints.

The data type specified in parentheses for each individual option is the data type to use for the argument when getting/setting the value of the option.

#### `enum `[`usbopt_enable_t`](#group__usb__usbopt_1ga298e54047352a763ccfa579ebdc8500a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
USBOPT_DISABLE            | disable a given option
USBOPT_ENABLE            | enable a given option

Binary parameter for enabling and disabling options.

