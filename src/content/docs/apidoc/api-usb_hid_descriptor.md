---
title: api-usb_hid_descriptor.md
description: api-usb_hid_descriptor.md
---
# group `usb_hid_descriptor` 

USB HID descriptor format helpers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USB_HID_ITEM_TYPE_MAIN`](#group__usb__hid__descriptor_1ga6225a899a3c79ae73b9b24f795cfc87f)            | HID Main item type.
`define `[`USB_HID_ITEM_TYPE_GLOBAL`](#group__usb__hid__descriptor_1gac127517817352d468a086c170825e357)            | HID Global item type.
`define `[`USB_HID_ITEM_TYPE_LOCAL`](#group__usb__hid__descriptor_1ga2f3e000725267a8b7f3b8e9a92838200)            | HID Local item type.
`define `[`USB_HID_ITEM_TAG_INPUT`](#group__usb__hid__descriptor_1ga0e13f4780ca0e7c375b45bfb1126b4cf)            | HID Input item tag.
`define `[`USB_HID_ITEM_TAG_OUTPUT`](#group__usb__hid__descriptor_1ga08e5a91632eb6c198fd063bfbf8694c9)            | HID Output item tag.
`define `[`USB_HID_ITEM_TAG_COLLECTION`](#group__usb__hid__descriptor_1ga57777fece329852ec7074baae70f92cb)            | HID Collection item tag.
`define `[`USB_HID_ITEM_TAG_FEATURE`](#group__usb__hid__descriptor_1ga8716ab204ca81f70484802f7b0f90686)            | HID Feature item tag.
`define `[`USB_HID_ITEM_TAG_COLLECTION_END`](#group__usb__hid__descriptor_1ga31881e3d19b5cfe6b3c31c14a352b396)            | HID End Collection item tag.
`define `[`USB_HID_ITEM_TAG_USAGE_PAGE`](#group__usb__hid__descriptor_1ga2fceab899fc7dea78967c681216ebbdf)            | HID Usage Page item tag.
`define `[`USB_HID_ITEM_TAG_LOGICAL_MIN`](#group__usb__hid__descriptor_1gaeda73f4fb4590a051cb8fc050d1405a7)            | HID Logical Minimum item tag.
`define `[`USB_HID_ITEM_TAG_LOGICAL_MAX`](#group__usb__hid__descriptor_1ga3967e0edcf3397fe70a71dc1f9e7f56c)            | HID Logical Maximum item tag.
`define `[`USB_HID_ITEM_TAG_PHYSICAL_MIN`](#group__usb__hid__descriptor_1gabb01f971a18ffaf93050712bfa736b34)            | HID Physical Minimum item tag.
`define `[`USB_HID_ITEM_TAG_PHYSICAL_MAX`](#group__usb__hid__descriptor_1ga94a0c494c8db1fe30fbacc662c34786f)            | HID Physical Maximum item tag.
`define `[`USB_HID_ITEM_TAG_UNIT_EXPONENT`](#group__usb__hid__descriptor_1ga3b09428f1a1ba0c790fdcdc4a7d3e9f2)            | HID Unit Exponent item tag.
`define `[`USB_HID_ITEM_TAG_UNIT`](#group__usb__hid__descriptor_1gaf84e69ddee7dfddeca290c6894dcc3ad)            | HID Unit item tag.
`define `[`USB_HID_ITEM_TAG_REPORT_SIZE`](#group__usb__hid__descriptor_1ga070361b79b8bb765fcd0e6ca9ae70bad)            | HID Report Size item tag.
`define `[`USB_HID_ITEM_TAG_REPORT_ID`](#group__usb__hid__descriptor_1ga2a9b87ccfb8a1e073ef067db22397613)            | HID Report ID item tag.
`define `[`USB_HID_ITEM_TAG_REPORT_COUNT`](#group__usb__hid__descriptor_1gaa3ddfad5577877d9a5bb28d1db437ec1)            | HID Report count item tag.
`define `[`USB_HID_ITEM_TAG_USAGE`](#group__usb__hid__descriptor_1ga164829d87b0960897cd5b1ebc36f270a)            | HID Usage item tag.
`define `[`USB_HID_ITEM_TAG_USAGE_MIN`](#group__usb__hid__descriptor_1ga53c10903144cee8e9d6b7e746edeab33)            | HID Usage Minimum item tag.
`define `[`USB_HID_ITEM_TAG_USAGE_MAX`](#group__usb__hid__descriptor_1gaab7eeb9fb09648c797e99adb10d8f754)            | HID Usage Maximum item tag.
`define `[`USB_HID_COLLECTION_PHYSICAL`](#group__usb__hid__descriptor_1gae01a0674bf98efe3cc8300d378ed04ef)            | Physical collection type.
`define `[`USB_HID_COLLECTION_APPLICATION`](#group__usb__hid__descriptor_1gacffd9b2a364afa701f92054cbc3ada45)            | Application collection type.
`define `[`USB_HID_COLLECTION_LOGICAL`](#group__usb__hid__descriptor_1ga33ef755598b110f6878de6be37eccde3)            | Logical (interrelated data) collection type.
`define `[`USB_HID_COLLECTION_REPORT`](#group__usb__hid__descriptor_1ga0619a8b42ee56b0f9e1b64072247ae6e)            | Report collection type.
`define `[`USB_HID_COLLECTION_NAMED_ARRAY`](#group__usb__hid__descriptor_1ga1894f5b9125d1c9fd1eb2c8a6b6a32fc)            | Named array collection type.
`define `[`USB_HID_COLLECTION_USAGE_SWITCH`](#group__usb__hid__descriptor_1gaa803d7309cc65c8891824ec307604d24)            | Usage switch collection type.
`define `[`USB_HID_COLLECTION_USAGE_MOD`](#group__usb__hid__descriptor_1gaa85d9444614ddb634a13e78335685355)            | Modifier switch collection type.
`define `[`USB_HID_ITEM`](#group__usb__hid__descriptor_1ga42be0b292023b6daaa80f2f7faf808ea)            | Defines a HID descriptor short item.
`define `[`USB_HID_INPUT`](#group__usb__hid__descriptor_1ga2fef4e98b16242d2bd353217c538e579)            | Defines a HID descriptor input item.
`define `[`USB_HID_OUTPUT`](#group__usb__hid__descriptor_1ga5dc2dd5b34d50c864c14e6986178cc22)            | Defines a HID descriptor output item.
`define `[`USB_HID_FEATURE`](#group__usb__hid__descriptor_1gaeea57be546225ce9608ed315af47daf2)            | Defines a HID Feature item.
`define `[`USB_HID_COLLECTION`](#group__usb__hid__descriptor_1ga7765c349b8bdbdba2d38c9fc5707cb7e)            | Defines a HID Collection item.
`define `[`USB_HID_END_COLLECTION`](#group__usb__hid__descriptor_1ga488fdd22a033a14800eff0c8f407a664)            | Defines a HID End Collection item.
`define `[`USB_HID_USAGE_PAGE`](#group__usb__hid__descriptor_1gafdd3f908edfaeafd7b8801b0f4b7f474)            | Defines a HID Usage Page item.
`define `[`USB_HID_USAGE_PAGE16`](#group__usb__hid__descriptor_1ga5b6c04a58bc9d01fcef851c9ddfcf483)            | Defines a HID Usage Page item.
`define `[`USB_HID_LOGICAL_MIN8`](#group__usb__hid__descriptor_1ga7b66fddb6b9300d9d65490a333ac3c68)            | Defines a HID Logical Minimum item.
`define `[`USB_HID_LOGICAL_MIN16`](#group__usb__hid__descriptor_1gac1d5ac623b4136af8eab30b03488b3ea)            | Defines a HID Logical Minimum item.
`define `[`USB_HID_LOGICAL_MIN32`](#group__usb__hid__descriptor_1ga346f1650290f6116b0ffdddcaabc50b1)            | Defines a HID Logical Minimum item.
`define `[`USB_HID_LOGICAL_MAX8`](#group__usb__hid__descriptor_1ga9f56d93c111e89d722ce9e5cdb138af5)            | Defines a HID Logical Maximum item.
`define `[`USB_HID_LOGICAL_MAX16`](#group__usb__hid__descriptor_1ga6d8b610c93b500b2d32413c6a8d942d3)            | Defines a HID Logical Maximum item.
`define `[`USB_HID_LOGICAL_MAX32`](#group__usb__hid__descriptor_1ga53e42e6b6245e617d4268cf209c6b54e)            | Defines a HID Logical Maximum item.
`define `[`USB_HID_REPORT_SIZE`](#group__usb__hid__descriptor_1gadd27ea8fd880a04c52b0d40b8a6d0a2f)            | Defines a HID Report Size item.
`define `[`USB_HID_REPORT_ID`](#group__usb__hid__descriptor_1ga3d4e7b7ed9992944f84c90dd568f24d4)            | Defines a HID Report ID item.
`define `[`USB_HID_REPORT_COUNT`](#group__usb__hid__descriptor_1gad64f6666338df2a319fa786c8f2587ee)            | Define HID Report Count item.
`define `[`USB_HID_USAGE`](#group__usb__hid__descriptor_1ga7c8c59d5f465c79ff649fe4e47c9c5aa)            | Defines a HID Usage Index item.
`define `[`USB_HID_USAGE_MIN8`](#group__usb__hid__descriptor_1ga98d2811f3eb00363622be7382b9405e1)            | Defines a HID Usage Minimum item.
`define `[`USB_HID_USAGE_MIN16`](#group__usb__hid__descriptor_1ga538fd2c8063352919c84b9ede8ff8f4a)            | Define HID Usage Minimum item with the data length of two bytes.
`define `[`USB_HID_USAGE_MAX8`](#group__usb__hid__descriptor_1ga287f4ccba4b4a28715b2ab4b5d0634fe)            | Defines HID Usage Maximum item.
`define `[`USB_HID_USAGE_MAX16`](#group__usb__hid__descriptor_1gac18934556da57f2648edd1b7a7362246)            | Defines HID Usage Maximum item.

## Members

#### `define `[`USB_HID_ITEM_TYPE_MAIN`](#group__usb__hid__descriptor_1ga6225a899a3c79ae73b9b24f795cfc87f) 

HID Main item type.

#### `define `[`USB_HID_ITEM_TYPE_GLOBAL`](#group__usb__hid__descriptor_1gac127517817352d468a086c170825e357) 

HID Global item type.

#### `define `[`USB_HID_ITEM_TYPE_LOCAL`](#group__usb__hid__descriptor_1ga2f3e000725267a8b7f3b8e9a92838200) 

HID Local item type.

#### `define `[`USB_HID_ITEM_TAG_INPUT`](#group__usb__hid__descriptor_1ga0e13f4780ca0e7c375b45bfb1126b4cf) 

HID Input item tag.

#### `define `[`USB_HID_ITEM_TAG_OUTPUT`](#group__usb__hid__descriptor_1ga08e5a91632eb6c198fd063bfbf8694c9) 

HID Output item tag.

#### `define `[`USB_HID_ITEM_TAG_COLLECTION`](#group__usb__hid__descriptor_1ga57777fece329852ec7074baae70f92cb) 

HID Collection item tag.

#### `define `[`USB_HID_ITEM_TAG_FEATURE`](#group__usb__hid__descriptor_1ga8716ab204ca81f70484802f7b0f90686) 

HID Feature item tag.

#### `define `[`USB_HID_ITEM_TAG_COLLECTION_END`](#group__usb__hid__descriptor_1ga31881e3d19b5cfe6b3c31c14a352b396) 

HID End Collection item tag.

#### `define `[`USB_HID_ITEM_TAG_USAGE_PAGE`](#group__usb__hid__descriptor_1ga2fceab899fc7dea78967c681216ebbdf) 

HID Usage Page item tag.

#### `define `[`USB_HID_ITEM_TAG_LOGICAL_MIN`](#group__usb__hid__descriptor_1gaeda73f4fb4590a051cb8fc050d1405a7) 

HID Logical Minimum item tag.

#### `define `[`USB_HID_ITEM_TAG_LOGICAL_MAX`](#group__usb__hid__descriptor_1ga3967e0edcf3397fe70a71dc1f9e7f56c) 

HID Logical Maximum item tag.

#### `define `[`USB_HID_ITEM_TAG_PHYSICAL_MIN`](#group__usb__hid__descriptor_1gabb01f971a18ffaf93050712bfa736b34) 

HID Physical Minimum item tag.

#### `define `[`USB_HID_ITEM_TAG_PHYSICAL_MAX`](#group__usb__hid__descriptor_1ga94a0c494c8db1fe30fbacc662c34786f) 

HID Physical Maximum item tag.

#### `define `[`USB_HID_ITEM_TAG_UNIT_EXPONENT`](#group__usb__hid__descriptor_1ga3b09428f1a1ba0c790fdcdc4a7d3e9f2) 

HID Unit Exponent item tag.

#### `define `[`USB_HID_ITEM_TAG_UNIT`](#group__usb__hid__descriptor_1gaf84e69ddee7dfddeca290c6894dcc3ad) 

HID Unit item tag.

#### `define `[`USB_HID_ITEM_TAG_REPORT_SIZE`](#group__usb__hid__descriptor_1ga070361b79b8bb765fcd0e6ca9ae70bad) 

HID Report Size item tag.

#### `define `[`USB_HID_ITEM_TAG_REPORT_ID`](#group__usb__hid__descriptor_1ga2a9b87ccfb8a1e073ef067db22397613) 

HID Report ID item tag.

#### `define `[`USB_HID_ITEM_TAG_REPORT_COUNT`](#group__usb__hid__descriptor_1gaa3ddfad5577877d9a5bb28d1db437ec1) 

HID Report count item tag.

#### `define `[`USB_HID_ITEM_TAG_USAGE`](#group__usb__hid__descriptor_1ga164829d87b0960897cd5b1ebc36f270a) 

HID Usage item tag.

#### `define `[`USB_HID_ITEM_TAG_USAGE_MIN`](#group__usb__hid__descriptor_1ga53c10903144cee8e9d6b7e746edeab33) 

HID Usage Minimum item tag.

#### `define `[`USB_HID_ITEM_TAG_USAGE_MAX`](#group__usb__hid__descriptor_1gaab7eeb9fb09648c797e99adb10d8f754) 

HID Usage Maximum item tag.

#### `define `[`USB_HID_COLLECTION_PHYSICAL`](#group__usb__hid__descriptor_1gae01a0674bf98efe3cc8300d378ed04ef) 

Physical collection type.

#### `define `[`USB_HID_COLLECTION_APPLICATION`](#group__usb__hid__descriptor_1gacffd9b2a364afa701f92054cbc3ada45) 

Application collection type.

#### `define `[`USB_HID_COLLECTION_LOGICAL`](#group__usb__hid__descriptor_1ga33ef755598b110f6878de6be37eccde3) 

Logical (interrelated data) collection type.

#### `define `[`USB_HID_COLLECTION_REPORT`](#group__usb__hid__descriptor_1ga0619a8b42ee56b0f9e1b64072247ae6e) 

Report collection type.

#### `define `[`USB_HID_COLLECTION_NAMED_ARRAY`](#group__usb__hid__descriptor_1ga1894f5b9125d1c9fd1eb2c8a6b6a32fc) 

Named array collection type.

#### `define `[`USB_HID_COLLECTION_USAGE_SWITCH`](#group__usb__hid__descriptor_1gaa803d7309cc65c8891824ec307604d24) 

Usage switch collection type.

#### `define `[`USB_HID_COLLECTION_USAGE_MOD`](#group__usb__hid__descriptor_1gaa85d9444614ddb634a13e78335685355) 

Modifier switch collection type.

#### `define `[`USB_HID_ITEM`](#group__usb__hid__descriptor_1ga42be0b292023b6daaa80f2f7faf808ea) 

Defines a HID descriptor short item.

#### Parameters
* `tag` Item tag 

* `type` Item type 

* `size` Item data size

#### `define `[`USB_HID_INPUT`](#group__usb__hid__descriptor_1ga2fef4e98b16242d2bd353217c538e579) 

Defines a HID descriptor input item.

data length is one byte

#### Parameters
* `input` Input item flags

#### `define `[`USB_HID_OUTPUT`](#group__usb__hid__descriptor_1ga5dc2dd5b34d50c864c14e6986178cc22) 

Defines a HID descriptor output item.

data length is one byte

#### Parameters
* `output` Output item flags

#### `define `[`USB_HID_FEATURE`](#group__usb__hid__descriptor_1gaeea57be546225ce9608ed315af47daf2) 

Defines a HID Feature item.

data length is one byte.

#### Parameters
* `feature` Feature item data

#### `define `[`USB_HID_COLLECTION`](#group__usb__hid__descriptor_1ga7765c349b8bdbdba2d38c9fc5707cb7e) 

Defines a HID Collection item.

data length is one byte.

#### Parameters
* `collection` Collection item data

#### `define `[`USB_HID_END_COLLECTION`](#group__usb__hid__descriptor_1ga488fdd22a033a14800eff0c8f407a664) 

Defines a HID End Collection item.

#### `define `[`USB_HID_USAGE_PAGE`](#group__usb__hid__descriptor_1gafdd3f908edfaeafd7b8801b0f4b7f474) 

Defines a HID Usage Page item.

data length is one byte.

#### Parameters
* `page` Usage Page

#### `define `[`USB_HID_USAGE_PAGE16`](#group__usb__hid__descriptor_1ga5b6c04a58bc9d01fcef851c9ddfcf483) 

Defines a HID Usage Page item.

data length is two bytes.

#### Parameters
* `page` Usage page

#### `define `[`USB_HID_LOGICAL_MIN8`](#group__usb__hid__descriptor_1ga7b66fddb6b9300d9d65490a333ac3c68) 

Defines a HID Logical Minimum item.

data length is one byte.

#### Parameters
* `minimum` Minimum value in logical units

#### `define `[`USB_HID_LOGICAL_MIN16`](#group__usb__hid__descriptor_1gac1d5ac623b4136af8eab30b03488b3ea) 

Defines a HID Logical Minimum item.

data length is two bytes.

#### Parameters
* `minimum` Minimum value in logical units

#### `define `[`USB_HID_LOGICAL_MIN32`](#group__usb__hid__descriptor_1ga346f1650290f6116b0ffdddcaabc50b1) 

Defines a HID Logical Minimum item.

data length is four bytes.

#### Parameters
* `minimum` Minimum value in logical units

#### `define `[`USB_HID_LOGICAL_MAX8`](#group__usb__hid__descriptor_1ga9f56d93c111e89d722ce9e5cdb138af5) 

Defines a HID Logical Maximum item.

data length is one byte.

#### Parameters
* `maximum` Maximum value in logical units

#### `define `[`USB_HID_LOGICAL_MAX16`](#group__usb__hid__descriptor_1ga6d8b610c93b500b2d32413c6a8d942d3) 

Defines a HID Logical Maximum item.

data length is two bytes.

#### Parameters
* `maximum` Maximum value in logical units

#### `define `[`USB_HID_LOGICAL_MAX32`](#group__usb__hid__descriptor_1ga53e42e6b6245e617d4268cf209c6b54e) 

Defines a HID Logical Maximum item.

data length is four bytes.

#### Parameters
* `maximum` Maximum value in logical units

#### `define `[`USB_HID_REPORT_SIZE`](#group__usb__hid__descriptor_1gadd27ea8fd880a04c52b0d40b8a6d0a2f) 

Defines a HID Report Size item.

data length is one byte.

#### Parameters
* `size` Report field size in bits

#### `define `[`USB_HID_REPORT_ID`](#group__usb__hid__descriptor_1ga3d4e7b7ed9992944f84c90dd568f24d4) 

Defines a HID Report ID item.

data length is one byte.

#### Parameters
* `id` Report ID

#### `define `[`USB_HID_REPORT_COUNT`](#group__usb__hid__descriptor_1gad64f6666338df2a319fa786c8f2587ee) 

Define HID Report Count item.

data length is one byte.

#### Parameters
* `count` Number of data fields included in the report

#### `define `[`USB_HID_USAGE`](#group__usb__hid__descriptor_1ga7c8c59d5f465c79ff649fe4e47c9c5aa) 

Defines a HID Usage Index item.

data length is one byte.

#### Parameters
* `index` Number of data fields included in the report

#### `define `[`USB_HID_USAGE_MIN8`](#group__usb__hid__descriptor_1ga98d2811f3eb00363622be7382b9405e1) 

Defines a HID Usage Minimum item.

data length is one byte.

#### Parameters
* `start` Starting Usage

#### `define `[`USB_HID_USAGE_MIN16`](#group__usb__hid__descriptor_1ga538fd2c8063352919c84b9ede8ff8f4a) 

Define HID Usage Minimum item with the data length of two bytes.

data length is two bytes.

#### Parameters
* `start` Starting Usage

#### `define `[`USB_HID_USAGE_MAX8`](#group__usb__hid__descriptor_1ga287f4ccba4b4a28715b2ab4b5d0634fe) 

Defines HID Usage Maximum item.

data length is one byte.

#### Parameters
* `end` Ending Usage

#### `define `[`USB_HID_USAGE_MAX16`](#group__usb__hid__descriptor_1gac18934556da57f2648edd1b7a7362246) 

Defines HID Usage Maximum item.

data length is one byte.

#### Parameters
* `end` Ending Usage

