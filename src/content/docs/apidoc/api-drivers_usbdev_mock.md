---
title: api-drivers_usbdev_mock.md
description: api-drivers_usbdev_mock.md
---
# group `drivers_usbdev_mock` 

USBdev mockup device for testing.

Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`USBDEV_MOCK_NUM_EP`](#group__drivers__usbdev__mock_1gaebfb7bd8721451d24af4b44d1e9d02d0)            | Number of IN and OUT endpoints available in the mock usbdev device.
`public void `[`usbdev_mock_setup`](#group__drivers__usbdev__mock_1ga5307a49b5106ba150be486f4f81307f7)`(`[`usbdev_mock_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1ga5856c3d5ba17ea88ff8ace5065198edd)` esr_cb,`[`usbdev_mock_ep_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gaca83f9dc724bce82f657419343ec196a)` ep_esr_cb,`[`usbdev_mock_ready_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gabf8bad85e3d8c926f68054cb3a975d67)` ready_cb)`            | usbdev mock device setup function
`struct `[`usbdev_mock_ep_t`](#structusbdev__mock__ep__t) | usbdev mock device endpoint
`struct `[`usbdev_mock`](#structusbdev__mock) | usbdev mock device

## Members

#### `define `[`USBDEV_MOCK_NUM_EP`](#group__drivers__usbdev__mock_1gaebfb7bd8721451d24af4b44d1e9d02d0) 

Number of IN and OUT endpoints available in the mock usbdev device.

#### `public void `[`usbdev_mock_setup`](#group__drivers__usbdev__mock_1ga5307a49b5106ba150be486f4f81307f7)`(`[`usbdev_mock_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1ga5856c3d5ba17ea88ff8ace5065198edd)` esr_cb,`[`usbdev_mock_ep_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gaca83f9dc724bce82f657419343ec196a)` ep_esr_cb,`[`usbdev_mock_ready_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gabf8bad85e3d8c926f68054cb3a975d67)` ready_cb)` 

usbdev mock device setup function

#### Parameters
* `esr_cb` ESR callback 

* `ep_esr_cb` Endpoint ESR callback 

* `ready_cb` Endpoint ready callback

# struct `usbdev_mock_ep_t` 

usbdev mock device endpoint

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`ep`](#structusbdev__mock__ep__t_1af30b88f4659af9dd932581a171eb9b8b) | Generic endpoint struct
`public `[`usbdev_mock_ep_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1ga9763120746ba6a9eeffa8ddd4f562020)` `[`state`](#structusbdev__mock__ep__t_1a06a1bcb0fc13d1581fc04e9991b7fd12) | Endpoint state
`public size_t `[`available`](#structusbdev__mock__ep__t_1a5ea08c5bba0e71aac883ccabf545e577) | Bytes available in the buffer
`public uint8_t * `[`target_buf`](#structusbdev__mock__ep__t_1af375c4e0f39ec3aff3ec979f5302d127) | Buffer as passed by [usbdev_ep_xmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gab577b73a742d3fa8906678f8dbeb2866)
`public uint8_t * `[`buf`](#structusbdev__mock__ep__t_1a2f67cb7a3210913d492600cfa8c5e456) | Internal mock buffer pointer.

## Members

#### `public `[`usbdev_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1ga45fb2233696b039b8fb4f5264a5f4e5f)` `[`ep`](#structusbdev__mock__ep__t_1af30b88f4659af9dd932581a171eb9b8b) 

Generic endpoint struct

#### `public `[`usbdev_mock_ep_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1ga9763120746ba6a9eeffa8ddd4f562020)` `[`state`](#structusbdev__mock__ep__t_1a06a1bcb0fc13d1581fc04e9991b7fd12) 

Endpoint state

#### `public size_t `[`available`](#structusbdev__mock__ep__t_1a5ea08c5bba0e71aac883ccabf545e577) 

Bytes available in the buffer

#### `public uint8_t * `[`target_buf`](#structusbdev__mock__ep__t_1af375c4e0f39ec3aff3ec979f5302d127) 

Buffer as passed by [usbdev_ep_xmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gab577b73a742d3fa8906678f8dbeb2866)

#### `public uint8_t * `[`buf`](#structusbdev__mock__ep__t_1a2f67cb7a3210913d492600cfa8c5e456) 

Internal mock buffer pointer.

# struct `usbdev_mock` 

usbdev mock device

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structusbdev__mock_1a1b60eaba7485c95d5b64f1ac0007b472) | Generic usbdev device
`public `[`usbdev_mock_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_usbdev_mock.md#structusbdev__mock__ep__t)` `[`in`](#structusbdev__mock_1a838bed29ef344a6c58d8bd6a9dea6d64) | IN endpoints
`public `[`usbdev_mock_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_usbdev_mock.md#structusbdev__mock__ep__t)` `[`out`](#structusbdev__mock_1af94f7bd0b80714fa2b4d7183d26ca2ea) | OUT endpoints
`public uint8_t `[`config_addr`](#structusbdev__mock_1a4c02e570f881221d14bb3b20f495575e) | Configured address
`public size_t `[`req_len`](#structusbdev__mock_1ac61a2c503757f68e4f7319b68a782062) | Length of the current request
`public `[`usbdev_mock_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1ga5856c3d5ba17ea88ff8ace5065198edd)` `[`esr_cb`](#structusbdev__mock_1ace6d42829b173c8b516157672f2d7308) | ESR callback for validation
`public `[`usbdev_mock_ep_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gaca83f9dc724bce82f657419343ec196a)` `[`ep_esr_cb`](#structusbdev__mock_1a039bb442a5145eeef88b0382d4ff6869) | Endpoint ESR cb for validation
`public `[`usbdev_mock_ready_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gabf8bad85e3d8c926f68054cb3a975d67)` `[`ready_cb`](#structusbdev__mock_1a6f6f3fe3c4137b5f3fd57f7974e35a44) | Endpoint ready cb for validation

## Members

#### `public `[`usbdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__usbdev_1gaa82d08eb9deca939f11869d69c65e63e)` `[`usbdev`](#structusbdev__mock_1a1b60eaba7485c95d5b64f1ac0007b472) 

Generic usbdev device

#### `public `[`usbdev_mock_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_usbdev_mock.md#structusbdev__mock__ep__t)` `[`in`](#structusbdev__mock_1a838bed29ef344a6c58d8bd6a9dea6d64) 

IN endpoints

#### `public `[`usbdev_mock_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_usbdev_mock.md#structusbdev__mock__ep__t)` `[`out`](#structusbdev__mock_1af94f7bd0b80714fa2b4d7183d26ca2ea) 

OUT endpoints

#### `public uint8_t `[`config_addr`](#structusbdev__mock_1a4c02e570f881221d14bb3b20f495575e) 

Configured address

#### `public size_t `[`req_len`](#structusbdev__mock_1ac61a2c503757f68e4f7319b68a782062) 

Length of the current request

#### `public `[`usbdev_mock_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1ga5856c3d5ba17ea88ff8ace5065198edd)` `[`esr_cb`](#structusbdev__mock_1ace6d42829b173c8b516157672f2d7308) 

ESR callback for validation

#### `public `[`usbdev_mock_ep_esr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gaca83f9dc724bce82f657419343ec196a)` `[`ep_esr_cb`](#structusbdev__mock_1a039bb442a5145eeef88b0382d4ff6869) 

Endpoint ESR cb for validation

#### `public `[`usbdev_mock_ready_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__usbdev__mock_1gabf8bad85e3d8c926f68054cb3a975d67)` `[`ready_cb`](#structusbdev__mock_1a6f6f3fe3c4137b5f3fd57f7974e35a44) 

Endpoint ready cb for validation

