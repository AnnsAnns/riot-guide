---
title: api-sys_suit_transport_mock.md
description: api-sys_suit_transport_mock.md
---
# group `sys_suit_transport_mock` 

SUIT firmware mock transport.

Mock transport backend definitions for SUIT manifests Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

The mock transport is a noop transport. Payloads are preloaded in flash and provided as an array of [suit_transport_mock_payload_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit_transport_mock.md#structsuit__transport__mock__payload__t) to the module.

Both the array of payloads named `payloads` and the size with name `num_payloads` must be provided.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`suit_transport_mock_fetch`](#group__sys__suit__transport__mock_1gaf7dc77a6d3e4e3fde723b382eca368d8)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest)`            | 'fetch' a payload
`struct `[`suit_transport_mock_payload_t`](#structsuit__transport__mock__payload__t) | Mock payload.

## Members

#### `public int `[`suit_transport_mock_fetch`](#group__sys__suit__transport__mock_1gaf7dc77a6d3e4e3fde723b382eca368d8)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest)` 

'fetch' a payload

The payload fetched from the payloads array is indicated by the [suit_manifest_t::component_current](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t_1af8d27d3112e735f8b3e8ca5045b09e8a) member

#### Parameters
* `manifest` suit manifest context

#### Returns
SUIT_OK if valid 

#### Returns
negative otherwise

# struct `suit_transport_mock_payload_t` 

Mock payload.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const uint8_t * `[`buf`](#structsuit__transport__mock__payload__t_1a477603bd15ef2cafffaf23627185d156) | Ptr to the memory space containing the payload.
`public size_t `[`len`](#structsuit__transport__mock__payload__t_1a892891be5f0194959a799f22c2736d75) | Length of the payload in bytes.

## Members

#### `public const uint8_t * `[`buf`](#structsuit__transport__mock__payload__t_1a477603bd15ef2cafffaf23627185d156) 

Ptr to the memory space containing the payload.

#### `public size_t `[`len`](#structsuit__transport__mock__payload__t_1a892891be5f0194959a799f22c2736d75) 

Length of the payload in bytes.

