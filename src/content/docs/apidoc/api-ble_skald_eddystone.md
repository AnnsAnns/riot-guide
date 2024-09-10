---
title: api-ble_skald_eddystone.md
description: api-ble_skald_eddystone.md
---
# group `ble_skald_eddystone` 

Skald's Eddystone implementation.

AboutThis module allows for creation and advertisement of Eddystone beacons (see [https://github.com/google/eddystone](https://github.com/google/eddystone)).

Implementation statesupported:

* Eddystone-UID

* Eddystone-URL

not (yet) supported:

* Eddystone-TLM

* Eddystone-EID

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`skald_eddystone_uid_adv`](#group__ble__skald__eddystone_1gabf4238f875178cda721578403013d71a)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx,const `[`skald_eddystone_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald_eddystone.md#structskald__eddystone__uid__t)` * uid,uint8_t tx_pwr,uint32_t adv_itvl_ms)`            | Advertise Eddystone-UID data.
`public void `[`skald_eddystone_url_adv`](#group__ble__skald__eddystone_1ga2219f6df4ef926419e083177dae55ba8)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx,uint8_t scheme,const char * url,uint8_t tx_pwr,uint32_t adv_itvl_ms)`            | Advertise Eddystone-URL data.
`struct `[`skald_eddystone_uid_t`](#structskald__eddystone__uid__t) | Unique and opaque 16-byte beacon id format used by Eddystone.

## Members

#### `public void `[`skald_eddystone_uid_adv`](#group__ble__skald__eddystone_1gabf4238f875178cda721578403013d71a)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx,const `[`skald_eddystone_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald_eddystone.md#structskald__eddystone__uid__t)` * uid,uint8_t tx_pwr,uint32_t adv_itvl_ms)` 

Advertise Eddystone-UID data.

**See also**: [https://github.com/google/eddystone/tree/master/eddystone-uid](https://github.com/google/eddystone/tree/master/eddystone-uid)

#### Parameters
* `ctx` advertising context 

* `uid` UID to advertise 

* `tx_pwr` calibrated TX power to be advertised by the beacon 

* `adv_itvl_ms` advertising interval [ms]

#### `public void `[`skald_eddystone_url_adv`](#group__ble__skald__eddystone_1ga2219f6df4ef926419e083177dae55ba8)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx,uint8_t scheme,const char * url,uint8_t tx_pwr,uint32_t adv_itvl_ms)` 

Advertise Eddystone-URL data.

**See also**: [https://github.com/google/eddystone/tree/master/eddystone-url](https://github.com/google/eddystone/tree/master/eddystone-url)

#### Parameters
* `ctx` advertising context 

* `scheme` encoded URL scheme prefix 

* `url` (short) url as \0 terminated string 

* `tx_pwr` calibrated TX power to be advertised by the beacon 

* `adv_itvl_ms` advertising interval [ms]

# struct `skald_eddystone_uid_t` 

Unique and opaque 16-byte beacon id format used by Eddystone.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public namespace `[`EDDYSTONE_NAMESPACE_LEN`](#structskald__eddystone__uid__t_1ad3c77c70e2202e82a432fe3b421d3af2) | 10-byte namespace
`public uint8_t `[`instance`](#structskald__eddystone__uid__t_1a790cf78f08b9f25c166c9c481b833b55) | 6-byte instance

## Members

#### `public namespace `[`EDDYSTONE_NAMESPACE_LEN`](#structskald__eddystone__uid__t_1ad3c77c70e2202e82a432fe3b421d3af2) 

10-byte namespace

#### `public uint8_t `[`instance`](#structskald__eddystone__uid__t_1a790cf78f08b9f25c166c9c481b833b55) 

6-byte instance

