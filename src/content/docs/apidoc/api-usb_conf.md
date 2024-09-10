---
title: api-usb_conf.md
description: api-usb_conf.md
---
# group `usb_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`INTERNAL_PERIPHERAL_VID`](#group__usb__conf_1ga69df513c23b6c9c32f3a8f65050987dd)            | Reserved for RIOT standard peripherals as per [http://pid.codes/1209/7D00/](http://pid.codes/1209/7D00/).
`define `[`INTERNAL_PERIPHERAL_PID`](#group__usb__conf_1ga1567112216601ad3e44b3d45843b4ce1)            | Reserved for RIOT standard peripherals as per [http://pid.codes/1209/7D00/](http://pid.codes/1209/7D00/).
`define `[`CONFIG_USB_VID`](#group__usb__conf_1gad038b98f0978d8af00b45c8ee22920e4)            | USB peripheral device vendor ID.
`define `[`CONFIG_USB_PID`](#group__usb__conf_1gad692bbe77ac65d052cb2069ac7607854)            | USB peripheral device product ID.
`define `[`CONFIG_USB_MANUF_STR`](#group__usb__conf_1ga490d9d6f831a375060ef492f17e1ecf3)            | USB peripheral manufacturer string.
`define `[`CONFIG_USB_PRODUCT_STR`](#group__usb__conf_1ga9686455e601834f27c65836749ea095a)            | USB peripheral product string.
`define `[`CONFIG_USB_CONFIGURATION_STR`](#group__usb__conf_1ga96b20139ee90ed85d1bf775a5bc1e232)            | USB peripheral configuration string.
`define `[`CONFIG_USB_SERIAL_STR`](#group__usb__conf_1ga78061d0207fa633d85b2fda87f6a741f)            | USB peripheral serial string.
`define `[`CONFIG_USB_PRODUCT_BCDVERSION`](#group__usb__conf_1ga763a9d6c4e6b294b1b43f439e1585d3f)            | USB peripheral serial string length.
`define `[`CONFIG_USB_SPEC_BCDVERSION`](#group__usb__conf_1gaf9bc5ac065340525af29b02770c59e15)            | USB specification version.
`define `[`CONFIG_USB_SELF_POWERED`](#group__usb__conf_1gaa7a4bbfa8803905f4cf8a21599c2e91c)            | USB peripheral setting to indicate self powered devices.
`define `[`CONFIG_USB_REM_WAKEUP`](#group__usb__conf_1ga3fe26c9336384a2d9c65a31f5c1a2c87)            | USB peripheral setting to indicate remote wakeup capability.
`define `[`CONFIG_USB_MAX_POWER`](#group__usb__conf_1ga69fbdf3da3e280eb9d19734531f8fda6)            | USB device max power draw in mA, between 0 and 500mA.
`define `[`CONFIG_USB_DEFAULT_LANGID`](#group__usb__conf_1gafc337ed0720a10c0cb8bde8a99b8fc7c)            | Default LANG ID reported to the host.

## Members

#### `define `[`INTERNAL_PERIPHERAL_VID`](#group__usb__conf_1ga69df513c23b6c9c32f3a8f65050987dd) 

Reserved for RIOT standard peripherals as per [http://pid.codes/1209/7D00/](http://pid.codes/1209/7D00/).

#### `define `[`INTERNAL_PERIPHERAL_PID`](#group__usb__conf_1ga1567112216601ad3e44b3d45843b4ce1) 

Reserved for RIOT standard peripherals as per [http://pid.codes/1209/7D00/](http://pid.codes/1209/7D00/).

#### `define `[`CONFIG_USB_VID`](#group__usb__conf_1gad038b98f0978d8af00b45c8ee22920e4) 

USB peripheral device vendor ID.

You must provide your own VID/PID combination when manufacturing a device with USB.

#### `define `[`CONFIG_USB_PID`](#group__usb__conf_1gad692bbe77ac65d052cb2069ac7607854) 

USB peripheral device product ID.

You must provide your own VID/PID combination when manufacturing a device with USB.

#### `define `[`CONFIG_USB_MANUF_STR`](#group__usb__conf_1ga490d9d6f831a375060ef492f17e1ecf3) 

USB peripheral manufacturer string.

#### `define `[`CONFIG_USB_PRODUCT_STR`](#group__usb__conf_1ga9686455e601834f27c65836749ea095a) 

USB peripheral product string.

#### `define `[`CONFIG_USB_CONFIGURATION_STR`](#group__usb__conf_1ga96b20139ee90ed85d1bf775a5bc1e232) 

USB peripheral configuration string.

#### `define `[`CONFIG_USB_SERIAL_STR`](#group__usb__conf_1ga78061d0207fa633d85b2fda87f6a741f) 

USB peripheral serial string.

Compile-time value to override the serial string with. An LUID-based hex string is generated when this value is not used.

This string does not have to be a number, but it must be unique between devices with identical VID:PID combination.

#### `define `[`CONFIG_USB_PRODUCT_BCDVERSION`](#group__usb__conf_1ga763a9d6c4e6b294b1b43f439e1585d3f) 

USB peripheral serial string length.

Maximum value is 63. Sensible values are between 8 to 32 depending on the number of expected devices.

The length here is in bytes. The generated hex string is twice as many chars in length due to conversion from bytes to hex chars.

USB peripheral device version

This is the version number of this peripheral Not to be be confused with the USB version number

#### `define `[`CONFIG_USB_SPEC_BCDVERSION`](#group__usb__conf_1gaf9bc5ac065340525af29b02770c59e15) 

USB specification version.

#### `define `[`CONFIG_USB_SELF_POWERED`](#group__usb__conf_1gaa7a4bbfa8803905f4cf8a21599c2e91c) 

USB peripheral setting to indicate self powered devices.

#### `define `[`CONFIG_USB_REM_WAKEUP`](#group__usb__conf_1ga3fe26c9336384a2d9c65a31f5c1a2c87) 

USB peripheral setting to indicate remote wakeup capability.

#### `define `[`CONFIG_USB_MAX_POWER`](#group__usb__conf_1ga69fbdf3da3e280eb9d19734531f8fda6) 

USB device max power draw in mA, between 0 and 500mA.

#### `define `[`CONFIG_USB_DEFAULT_LANGID`](#group__usb__conf_1gafc337ed0720a10c0cb8bde8a99b8fc7c) 

Default LANG ID reported to the host.

