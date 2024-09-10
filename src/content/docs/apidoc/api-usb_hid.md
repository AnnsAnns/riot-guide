---
title: api-usb_hid.md
description: api-usb_hid.md
---
# group `usb_hid` 

Generic USB HID defines and helpers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USB_TYPE_DESCRIPTOR_HID`](#group__usb__hid_1gaab5c5e83422608016feb4ccadec4fabd)            | USB HID type descriptor.
`define `[`USB_HID_VERSION_BCD`](#group__usb__hid_1gad6e17d0b8c7c055dbbe198dd1584ba30)            | USB HID version in BCD.
`define `[`USB_HID_COUNTRY_CODE_NOTSUPPORTED`](#group__usb__hid_1gacaf661389b65fee118ad183cc92ee0c6)            | USB HID country codes.
`define `[`USBUS_HID_EP_IN_REQUIRED_NUMOF`](#group__usb__hid_1gaa8decfcf5173f981b3c12c3a6e967bc1)            | Number of IN EPs required for the HID interface.
`define `[`USBUS_HID_EP_OUT_REQUIRED_NUMOF`](#group__usb__hid_1ga1ad9ad3ef302792415ba0fa1f982a0ff)            | Number of Out EPs required for the HID interface.
`struct `[`usb_desc_hid_t`](#structusb__desc__hid__t) | USB HID descriptor struct.

## Members

#### `define `[`USB_TYPE_DESCRIPTOR_HID`](#group__usb__hid_1gaab5c5e83422608016feb4ccadec4fabd) 

USB HID type descriptor.

#### `define `[`USB_HID_VERSION_BCD`](#group__usb__hid_1gad6e17d0b8c7c055dbbe198dd1584ba30) 

USB HID version in BCD.

#### `define `[`USB_HID_COUNTRY_CODE_NOTSUPPORTED`](#group__usb__hid_1gacaf661389b65fee118ad183cc92ee0c6) 

USB HID country codes.

#### `define `[`USBUS_HID_EP_IN_REQUIRED_NUMOF`](#group__usb__hid_1gaa8decfcf5173f981b3c12c3a6e967bc1) 

Number of IN EPs required for the HID interface.

#### `define `[`USBUS_HID_EP_OUT_REQUIRED_NUMOF`](#group__usb__hid_1ga1ad9ad3ef302792415ba0fa1f982a0ff) 

Number of Out EPs required for the HID interface.

# struct `usb_desc_hid_t` 

USB HID descriptor struct.

**See also**: USB HID 1.11 spec section 6.2.1

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`length`](#structusb__desc__hid__t_1acaecc91f6c5c509bfdaedc612513aa0c) | Numeric expression that is the total size of the HID descriptor.
`public uint8_t `[`desc_type`](#structusb__desc__hid__t_1a97281bc8cc14ae7eacc623c88215035e) | Constant name specifying type of HID descriptor.
`public uint16_t `[`bcd_hid`](#structusb__desc__hid__t_1ad5946132c01ca744404fd92e608205cd) | Numeric expression identifying the HID Class Specification release.
`public uint8_t `[`country_code`](#structusb__desc__hid__t_1a67ebb021e18d903cce0a2a3000e63e8c) | Numeric expression identifying country code of the localized hardware.
`public uint8_t `[`num_descrs`](#structusb__desc__hid__t_1adc8178f7d8376cfd102a78ed29197af1) | Numeric expression specifying the number of class descriptors.
`public uint8_t `[`report_type`](#structusb__desc__hid__t_1a5090401fdcdd8ae56577572cac56e7d0) | Type of HID class report.
`public uint16_t `[`report_length`](#structusb__desc__hid__t_1a955092df532ca328c7d5ab801fa9c288) | the total size of the Report descriptor.

## Members

#### `public uint8_t `[`length`](#structusb__desc__hid__t_1acaecc91f6c5c509bfdaedc612513aa0c) 

Numeric expression that is the total size of the HID descriptor.

#### `public uint8_t `[`desc_type`](#structusb__desc__hid__t_1a97281bc8cc14ae7eacc623c88215035e) 

Constant name specifying type of HID descriptor.

#### `public uint16_t `[`bcd_hid`](#structusb__desc__hid__t_1ad5946132c01ca744404fd92e608205cd) 

Numeric expression identifying the HID Class Specification release.

#### `public uint8_t `[`country_code`](#structusb__desc__hid__t_1a67ebb021e18d903cce0a2a3000e63e8c) 

Numeric expression identifying country code of the localized hardware.

#### `public uint8_t `[`num_descrs`](#structusb__desc__hid__t_1adc8178f7d8376cfd102a78ed29197af1) 

Numeric expression specifying the number of class descriptors.

#### `public uint8_t `[`report_type`](#structusb__desc__hid__t_1a5090401fdcdd8ae56577572cac56e7d0) 

Type of HID class report.

#### `public uint16_t `[`report_length`](#structusb__desc__hid__t_1a955092df532ca328c7d5ab801fa9c288) 

the total size of the Report descriptor.

