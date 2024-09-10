---
title: api-usb_descriptor.md
description: api-usb_descriptor.md
---
# group `usb_descriptor` 

Provides USB protocol descriptors and defines for USB frameworks.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USB_ENDPOINT_DESCRIPTOR_INTERVAL_ISOCHRONOUS`](#group__usb__descriptor_1gafdb90dd8ceef7c2a90a1107c528780b5)            | USB isochronous endpoint interval.
`public inline static bool `[`usb_setup_is_read`](#group__usb__descriptor_1ga838e0bfd2b2e99a7ee46d3bfef7018ff)`(`[`usb_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_descriptor.md#structusb__setup__t)` * pkt)`            | getter for setup packet direction
`struct `[`usb_descriptor_device_t`](#structusb__descriptor__device__t) | USB device descriptor (USB 2.0 spec table 9-8)
`struct `[`usb_descriptor_configuration_t`](#structusb__descriptor__configuration__t) | USB configuration descriptor (USB 2.0 spec table 9-10)
`struct `[`usb_descriptor_interface_t`](#structusb__descriptor__interface__t) | USB interface descriptor (USB 2.0 spec table 9-12)
`struct `[`usb_descriptor_endpoint_t`](#structusb__descriptor__endpoint__t) | USB endpoint descriptor (USB 2.0 spec table 9-13)
`struct `[`usb_descriptor_string_t`](#structusb__descriptor__string__t) | USB string descriptor (USB 2.0 spec table 9-16)
`struct `[`usb_descriptor_interface_association_t`](#structusb__descriptor__interface__association__t) | USB interface association descriptor (Interface Association Descriptors table 9-Z)
`struct `[`usb_setup_t`](#structusb__setup__t) | USB setup packet (USB 2.0 spec table 9-2)

## Members

#### `define `[`USB_ENDPOINT_DESCRIPTOR_INTERVAL_ISOCHRONOUS`](#group__usb__descriptor_1gafdb90dd8ceef7c2a90a1107c528780b5) 

USB isochronous endpoint interval.

#### `public inline static bool `[`usb_setup_is_read`](#group__usb__descriptor_1ga838e0bfd2b2e99a7ee46d3bfef7018ff)`(`[`usb_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-usb_descriptor.md#structusb__setup__t)` * pkt)` 

getter for setup packet direction

#### Parameters
* `pkt` setup packet

#### Returns
nonzero if it is a read request 

#### Returns
zero if it is a write request

# struct `usb_descriptor_device_t` 

USB device descriptor (USB 2.0 spec table 9-8)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__descriptor__device__t_1a31bbf0ec5ad43b32079b6e233de3ddc8) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__descriptor__device__t_1adf718cb8bcfee20922b29fe6de29769d) | Descriptor type ([USB_TYPE_DESCRIPTOR_DEVICE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga5787b336f9394522095c5f30df91b4f6))
`public uint16_t `[`bcd_usb`](#structusb__descriptor__device__t_1a813adb22c7e8ea8dfa934fb14df1bf8a) | Binary-coded decimal USB release specification
`public uint8_t `[`class`](#structusb__descriptor__device__t_1a23c490b937194be9f1e33eda870225d6) | Device class code
`public uint8_t `[`subclass`](#structusb__descriptor__device__t_1a01bc9b78f4ab0ec93a243f9d151742fa) | Device subclass code
`public uint8_t `[`protocol`](#structusb__descriptor__device__t_1a91358bfc57a81c58e1f499594d91f8ad) | Device protocol code
`public uint8_t `[`max_packet_size`](#structusb__descriptor__device__t_1a4ad480c652294364f5f41118614e347c) | EP0 max packet size (8, 16, 32 or 64 bytes)
`public uint16_t `[`vendor_id`](#structusb__descriptor__device__t_1a5304145e83598cbe37ed4168a90d65dc) | Vendor ID (as assigned by the USB-IF)
`public uint16_t `[`product_id`](#structusb__descriptor__device__t_1a6d6609ba7f4c1b1ca5a278b88565b3ef) | Product ID
`public uint16_t `[`bcd_device`](#structusb__descriptor__device__t_1a8853f2e38aea63c94e2c3d74b8ebc598) | Binary-coded decimal device release
`public uint8_t `[`manufacturer_idx`](#structusb__descriptor__device__t_1a78ce1ed01f01099a9d16c86653da7bc9) | Manufacturer string index number
`public uint8_t `[`product_idx`](#structusb__descriptor__device__t_1a7a0cb979446aa165d5401f71fc68d639) | Product string index number
`public uint8_t `[`serial_idx`](#structusb__descriptor__device__t_1a590a67d03c721bf3d19e8d9918810486) | Device serial number string index number
`public uint8_t `[`num_configurations`](#structusb__descriptor__device__t_1a0c71de9a43b4e59ca61e31d03f92e03f) | Number of possible configurations

## Members

#### `public uint8_t `[`length`](#structusb__descriptor__device__t_1a31bbf0ec5ad43b32079b6e233de3ddc8) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__descriptor__device__t_1adf718cb8bcfee20922b29fe6de29769d) 

Descriptor type ([USB_TYPE_DESCRIPTOR_DEVICE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga5787b336f9394522095c5f30df91b4f6))

#### `public uint16_t `[`bcd_usb`](#structusb__descriptor__device__t_1a813adb22c7e8ea8dfa934fb14df1bf8a) 

Binary-coded decimal USB release specification

#### `public uint8_t `[`class`](#structusb__descriptor__device__t_1a23c490b937194be9f1e33eda870225d6) 

Device class code

#### `public uint8_t `[`subclass`](#structusb__descriptor__device__t_1a01bc9b78f4ab0ec93a243f9d151742fa) 

Device subclass code

#### `public uint8_t `[`protocol`](#structusb__descriptor__device__t_1a91358bfc57a81c58e1f499594d91f8ad) 

Device protocol code

#### `public uint8_t `[`max_packet_size`](#structusb__descriptor__device__t_1a4ad480c652294364f5f41118614e347c) 

EP0 max packet size (8, 16, 32 or 64 bytes)

#### `public uint16_t `[`vendor_id`](#structusb__descriptor__device__t_1a5304145e83598cbe37ed4168a90d65dc) 

Vendor ID (as assigned by the USB-IF)

#### `public uint16_t `[`product_id`](#structusb__descriptor__device__t_1a6d6609ba7f4c1b1ca5a278b88565b3ef) 

Product ID

#### `public uint16_t `[`bcd_device`](#structusb__descriptor__device__t_1a8853f2e38aea63c94e2c3d74b8ebc598) 

Binary-coded decimal device release

#### `public uint8_t `[`manufacturer_idx`](#structusb__descriptor__device__t_1a78ce1ed01f01099a9d16c86653da7bc9) 

Manufacturer string index number

#### `public uint8_t `[`product_idx`](#structusb__descriptor__device__t_1a7a0cb979446aa165d5401f71fc68d639) 

Product string index number

#### `public uint8_t `[`serial_idx`](#structusb__descriptor__device__t_1a590a67d03c721bf3d19e8d9918810486) 

Device serial number string index number

#### `public uint8_t `[`num_configurations`](#structusb__descriptor__device__t_1a0c71de9a43b4e59ca61e31d03f92e03f) 

Number of possible configurations

# struct `usb_descriptor_configuration_t` 

USB configuration descriptor (USB 2.0 spec table 9-10)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__descriptor__configuration__t_1ab8aacc8a2e1afea0e9c2cb5f0311e00e) | Size of this descriptor
`public uint8_t `[`type`](#structusb__descriptor__configuration__t_1ac7163ece08f572b4fbce2f63e53c7b2d) | Descriptor type ([USB_TYPE_DESCRIPTOR_CONFIGURATION](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga078e01db44db21546cdd44e87d6d882b))
`public uint16_t `[`total_length`](#structusb__descriptor__configuration__t_1a3e61f18894d672b4f20131f4455f39c1) | Total length of the configuration
`public uint8_t `[`num_interfaces`](#structusb__descriptor__configuration__t_1ab4b11520ad6673cc265bc62223ff3991) | Number of interfaces supported by this configuration
`public uint8_t `[`val`](#structusb__descriptor__configuration__t_1adc03895f47e65185397c57789827ea16) | Value to select this configuration by
`public uint8_t `[`idx`](#structusb__descriptor__configuration__t_1a4b7cd20adecb9d9b968884e0234e1258) | Configuration descriptor string index
`public uint8_t `[`attributes`](#structusb__descriptor__configuration__t_1a88524e623f1f6a150ce51b989577a0c7) | Configuration attributes ([USB_CONF_ATTR](#group__usb__descriptor_1USB_CONF_ATTR))
`public uint8_t `[`max_power`](#structusb__descriptor__configuration__t_1aa3f57a0dacb8f8c522625d00f0bf8b19) | Maximum power consumption in 2mA steps

## Members

#### `public uint8_t `[`length`](#structusb__descriptor__configuration__t_1ab8aacc8a2e1afea0e9c2cb5f0311e00e) 

Size of this descriptor

#### `public uint8_t `[`type`](#structusb__descriptor__configuration__t_1ac7163ece08f572b4fbce2f63e53c7b2d) 

Descriptor type ([USB_TYPE_DESCRIPTOR_CONFIGURATION](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga078e01db44db21546cdd44e87d6d882b))

#### `public uint16_t `[`total_length`](#structusb__descriptor__configuration__t_1a3e61f18894d672b4f20131f4455f39c1) 

Total length of the configuration

#### `public uint8_t `[`num_interfaces`](#structusb__descriptor__configuration__t_1ab4b11520ad6673cc265bc62223ff3991) 

Number of interfaces supported by this configuration

#### `public uint8_t `[`val`](#structusb__descriptor__configuration__t_1adc03895f47e65185397c57789827ea16) 

Value to select this configuration by

#### `public uint8_t `[`idx`](#structusb__descriptor__configuration__t_1a4b7cd20adecb9d9b968884e0234e1258) 

Configuration descriptor string index

#### `public uint8_t `[`attributes`](#structusb__descriptor__configuration__t_1a88524e623f1f6a150ce51b989577a0c7) 

Configuration attributes ([USB_CONF_ATTR](#group__usb__descriptor_1USB_CONF_ATTR))

#### `public uint8_t `[`max_power`](#structusb__descriptor__configuration__t_1aa3f57a0dacb8f8c522625d00f0bf8b19) 

Maximum power consumption in 2mA steps

# struct `usb_descriptor_interface_t` 

USB interface descriptor (USB 2.0 spec table 9-12)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__descriptor__interface__t_1a219073a15b2640957ab6d15e6917892a) | Size of this descriptor
`public uint8_t `[`type`](#structusb__descriptor__interface__t_1a2fef5ed20cb68ba01f875f9b992b2e08) | Descriptor type ([USB_TYPE_DESCRIPTOR_INTERFACE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga268124d1bd49b4c0b70c5851bf672bd6))
`public uint8_t `[`interface_num`](#structusb__descriptor__interface__t_1a28470d8cf48ce1a1a7f7acf8669fc230) | Interface number
`public uint8_t `[`alternate_setting`](#structusb__descriptor__interface__t_1a50ffbd8d53811a473421d7f97d5af416) | Alternate setting index
`public uint8_t `[`num_endpoints`](#structusb__descriptor__interface__t_1a41bed53502ffba8309c320097868d5c7) | Number of endpoints used by this interface
`public uint8_t `[`class`](#structusb__descriptor__interface__t_1af137b8edb56c6eec93759e0555c39086) | Interface class code as assigned by the USB-IF
`public uint8_t `[`subclass`](#structusb__descriptor__interface__t_1ac449f0836b779a6d6e745f480ee03f87) | Subclass code as assigned by the USB-IF
`public uint8_t `[`protocol`](#structusb__descriptor__interface__t_1a5367ba0591e5b54f06513fb588a67e89) | Protocol code
`public uint8_t `[`idx`](#structusb__descriptor__interface__t_1a6a10bad25ddb4d59cf3cdfda7e18e7b6) | Interface descriptor string index

## Members

#### `public uint8_t `[`length`](#structusb__descriptor__interface__t_1a219073a15b2640957ab6d15e6917892a) 

Size of this descriptor

#### `public uint8_t `[`type`](#structusb__descriptor__interface__t_1a2fef5ed20cb68ba01f875f9b992b2e08) 

Descriptor type ([USB_TYPE_DESCRIPTOR_INTERFACE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga268124d1bd49b4c0b70c5851bf672bd6))

#### `public uint8_t `[`interface_num`](#structusb__descriptor__interface__t_1a28470d8cf48ce1a1a7f7acf8669fc230) 

Interface number

#### `public uint8_t `[`alternate_setting`](#structusb__descriptor__interface__t_1a50ffbd8d53811a473421d7f97d5af416) 

Alternate setting index

#### `public uint8_t `[`num_endpoints`](#structusb__descriptor__interface__t_1a41bed53502ffba8309c320097868d5c7) 

Number of endpoints used by this interface

#### `public uint8_t `[`class`](#structusb__descriptor__interface__t_1af137b8edb56c6eec93759e0555c39086) 

Interface class code as assigned by the USB-IF

#### `public uint8_t `[`subclass`](#structusb__descriptor__interface__t_1ac449f0836b779a6d6e745f480ee03f87) 

Subclass code as assigned by the USB-IF

#### `public uint8_t `[`protocol`](#structusb__descriptor__interface__t_1a5367ba0591e5b54f06513fb588a67e89) 

Protocol code

#### `public uint8_t `[`idx`](#structusb__descriptor__interface__t_1a6a10bad25ddb4d59cf3cdfda7e18e7b6) 

Interface descriptor string index

# struct `usb_descriptor_endpoint_t` 

USB endpoint descriptor (USB 2.0 spec table 9-13)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__descriptor__endpoint__t_1a9b027550559ca5d5dd07b4559159ae94) | Size of this descriptor
`public uint8_t `[`type`](#structusb__descriptor__endpoint__t_1a4ffd1b4828937981bd58475865c32190) | Descriptor type ([USB_TYPE_DESCRIPTOR_ENDPOINT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga218d23ee3617e2af25f13273d8ed5448))
`public uint8_t `[`address`](#structusb__descriptor__endpoint__t_1a3c2cc4dd627f0c20839d0f52edc5678e) | Address of the endpoint
`public uint8_t `[`attributes`](#structusb__descriptor__endpoint__t_1ab0b48107b7187f749026b21eb7ad8d7a) | Attributes of the endpoint
`public uint16_t `[`max_packet_size`](#structusb__descriptor__endpoint__t_1a6aa21e1427896490fdecec07826c44e1) | Maximum packet size of the endpoint
`public uint8_t `[`interval`](#structusb__descriptor__endpoint__t_1a2b19345202998198c9173a1be2be5db4) | Polling interval for the endpoint

## Members

#### `public uint8_t `[`length`](#structusb__descriptor__endpoint__t_1a9b027550559ca5d5dd07b4559159ae94) 

Size of this descriptor

#### `public uint8_t `[`type`](#structusb__descriptor__endpoint__t_1a4ffd1b4828937981bd58475865c32190) 

Descriptor type ([USB_TYPE_DESCRIPTOR_ENDPOINT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga218d23ee3617e2af25f13273d8ed5448))

#### `public uint8_t `[`address`](#structusb__descriptor__endpoint__t_1a3c2cc4dd627f0c20839d0f52edc5678e) 

Address of the endpoint

#### `public uint8_t `[`attributes`](#structusb__descriptor__endpoint__t_1ab0b48107b7187f749026b21eb7ad8d7a) 

Attributes of the endpoint

#### `public uint16_t `[`max_packet_size`](#structusb__descriptor__endpoint__t_1a6aa21e1427896490fdecec07826c44e1) 

Maximum packet size of the endpoint

#### `public uint8_t `[`interval`](#structusb__descriptor__endpoint__t_1a2b19345202998198c9173a1be2be5db4) 

Polling interval for the endpoint

# struct `usb_descriptor_string_t` 

USB string descriptor (USB 2.0 spec table 9-16)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__descriptor__string__t_1a7310175525cf5ff3266f8d4ae5893d00) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__descriptor__string__t_1a852eac138b1f6fbb04d2a7052b884131) | String descriptor type

## Members

#### `public uint8_t `[`length`](#structusb__descriptor__string__t_1a7310175525cf5ff3266f8d4ae5893d00) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__descriptor__string__t_1a852eac138b1f6fbb04d2a7052b884131) 

String descriptor type

# struct `usb_descriptor_interface_association_t` 

USB interface association descriptor (Interface Association Descriptors table 9-Z)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__descriptor__interface__association__t_1a16d98f49d4eeff7341ad6405b76b8f4f) | Size of this descriptor.
`public uint8_t `[`type`](#structusb__descriptor__interface__association__t_1a3c011ab5e33fa4c2ab692973960b6aa6) | Descriptor type ([USB_TYPE_DESCRIPTOR_INTERFACE_ASSOC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga33b6572b7db6725a2c9af3703b7fca27))
`public uint8_t `[`first_interface`](#structusb__descriptor__interface__association__t_1a0ea5935e3e7bd7723f00c095edc0404b) | Index of the first associated interface.
`public uint8_t `[`interface_count`](#structusb__descriptor__interface__association__t_1ae0fe9d38106ae34b4981eb127f14a3fe) | Number of associated interfaces.
`public uint8_t `[`class`](#structusb__descriptor__interface__association__t_1a9fabbd524a3eb74929baf7e023840075) | Non-zero class code.
`public uint8_t `[`subclass`](#structusb__descriptor__interface__association__t_1a3561e28d8d4c47822edec9bae9057bd1) | Subclass code.
`public uint8_t `[`protocol`](#structusb__descriptor__interface__association__t_1a96758f4f12875b0ae3b08c31c00584d4) | Protocol code.
`public uint8_t `[`idx`](#structusb__descriptor__interface__association__t_1ada3dc3df78d5261916a39877db12f381) | Descriptor string index.

## Members

#### `public uint8_t `[`length`](#structusb__descriptor__interface__association__t_1a16d98f49d4eeff7341ad6405b76b8f4f) 

Size of this descriptor.

#### `public uint8_t `[`type`](#structusb__descriptor__interface__association__t_1a3c011ab5e33fa4c2ab692973960b6aa6) 

Descriptor type ([USB_TYPE_DESCRIPTOR_INTERFACE_ASSOC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb__descriptor_1ga33b6572b7db6725a2c9af3703b7fca27))

#### `public uint8_t `[`first_interface`](#structusb__descriptor__interface__association__t_1a0ea5935e3e7bd7723f00c095edc0404b) 

Index of the first associated interface.

#### `public uint8_t `[`interface_count`](#structusb__descriptor__interface__association__t_1ae0fe9d38106ae34b4981eb127f14a3fe) 

Number of associated interfaces.

#### `public uint8_t `[`class`](#structusb__descriptor__interface__association__t_1a9fabbd524a3eb74929baf7e023840075) 

Non-zero class code.

#### `public uint8_t `[`subclass`](#structusb__descriptor__interface__association__t_1a3561e28d8d4c47822edec9bae9057bd1) 

Subclass code.

#### `public uint8_t `[`protocol`](#structusb__descriptor__interface__association__t_1a96758f4f12875b0ae3b08c31c00584d4) 

Protocol code.

#### `public uint8_t `[`idx`](#structusb__descriptor__interface__association__t_1ada3dc3df78d5261916a39877db12f381) 

Descriptor string index.

# struct `usb_setup_t` 

USB setup packet (USB 2.0 spec table 9-2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structusb__setup__t_1a60b35a313fe53caec270099b9c128ced) | Request type
`public uint8_t `[`request`](#structusb__setup__t_1ac232ea1b46100b32bce1326ce5dd34ed) | Specific request
`public uint16_t `[`value`](#structusb__setup__t_1a52e9eccede95178a355cfec571aedda5) | Value word
`public uint16_t `[`index`](#structusb__setup__t_1a6297ecb0019cda826467aca83b65fa9f) | Index/offset word
`public uint16_t `[`length`](#structusb__setup__t_1a9f8e190cb870f1590df0a702946ad8d2) | Length of the data stage.

## Members

#### `public uint8_t `[`type`](#structusb__setup__t_1a60b35a313fe53caec270099b9c128ced) 

Request type

#### `public uint8_t `[`request`](#structusb__setup__t_1ac232ea1b46100b32bce1326ce5dd34ed) 

Specific request

#### `public uint16_t `[`value`](#structusb__setup__t_1a52e9eccede95178a355cfec571aedda5) 

Value word

#### `public uint16_t `[`index`](#structusb__setup__t_1a6297ecb0019cda826467aca83b65fa9f) 

Index/offset word

#### `public uint16_t `[`length`](#structusb__setup__t_1a9f8e190cb870f1590df0a702946ad8d2) 

Length of the data stage.

