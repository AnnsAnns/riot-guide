---
title: api-ble_skald_ibeacon.md
description: api-ble_skald_ibeacon.md
---
# group `ble_skald_ibeacon` 

Skald's simple iBeacon abstraction.

AboutThis Skald module supports the creation and advertisement of BLE iBeacons as defined by Apple (see [https://developer.apple.com/ibeacon/](https://developer.apple.com/ibeacon/)).

Implementation state

* all known iBeacon properties are supported

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`skald_ibeacon_advertise`](#group__ble__skald__ibeacon_1ga79f5814d1224762e3dd6261141d133d2)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx,const `[`skald_uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__uuid__t)` * uuid,uint16_t major,uint16_t minor,uint8_t txpower,uint32_t adv_itvl_ms)`            | Configure the IBeacon payload and start advertising.

## Members

#### `public void `[`skald_ibeacon_advertise`](#group__ble__skald__ibeacon_1ga79f5814d1224762e3dd6261141d133d2)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx,const `[`skald_uuid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__uuid__t)` * uuid,uint16_t major,uint16_t minor,uint8_t txpower,uint32_t adv_itvl_ms)` 

Configure the IBeacon payload and start advertising.

#### Parameters
* `ctx` advertising context 

* `uuid` UUID advertised by the iBeacon 

* `major` the iBeacon's major number 

* `minor` the iBeacon's minor number 

* `txpower` calibrated TX power to be advertised by the beacon 

* `adv_itvl_ms` advertising interval [ms]

