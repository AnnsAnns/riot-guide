---
title: api-pkg_nimble_scanner.md
description: api-pkg_nimble_scanner.md
---
# group `pkg_nimble_scanner` 

Helper module to simplify the usage of NimBLE in scanning mode.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_SCANNER_EXT_ADV`](#group__pkg__nimble__scanner_1ga7fe2fe1dad2b496b936002373ecb3e3b)            | Flag to mark type for extended advertisements.
`enum `[`@317`](#group__pkg__nimble__scanner_1ga22a181a370d3ab8aa40e77637fb5a2f9)            | Scan procedure configuration flags.
`enum `[`@318`](#group__pkg__nimble__scanner_1ga573f0cc5fc240fb29edcf79155e5a542)            | Status flags for received advertising packets.
`public int `[`nimble_scanner_init`](#group__pkg__nimble__scanner_1gafb31a7d3eb83d269b1e4e78312f4d9fd)`(const `[`nimble_scanner_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanner.md#structnimble__scanner__cfg__t)` * params,`[`nimble_scanner_cb`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__scanner_1ga0c2d01f47c9b182af6f89627c97fe522)` disc_cb)`            | Initialize the scanner module.
`public int `[`nimble_scanner_start`](#group__pkg__nimble__scanner_1ga0ac95159be8b8d3a0f7319389f9a1e99)`(void)`            | Start scanning using timing parameters configured on initialization.
`public void `[`nimble_scanner_stop`](#group__pkg__nimble__scanner_1ga9504659cab7cc2a733415737308aa2b3)`(void)`            | Stop scanning.
`public inline static bool `[`nimble_scanner_is_active`](#group__pkg__nimble__scanner_1ga83608450c66ee08dd80620f56a0d5444)`(void)`            | Get the current scanning status.
`public void `[`nimble_scanner_set_scan_duration`](#group__pkg__nimble__scanner_1gaf68c3b3ab8fa41c24f4e76fab5704346)`(int32_t duration_ms)`            | Set the duration for the scanning procedure.
`struct `[`nimble_scanner_cfg_t`](#structnimble__scanner__cfg__t) | Scanner configuration parameters.
`struct `[`nimble_scanner_info_t`](#structnimble__scanner__info__t) | Additional information about received advertising packets.

## Members

#### `define `[`NIMBLE_SCANNER_EXT_ADV`](#group__pkg__nimble__scanner_1ga7fe2fe1dad2b496b936002373ecb3e3b) 

Flag to mark type for extended advertisements.

#### `enum `[`@317`](#group__pkg__nimble__scanner_1ga22a181a370d3ab8aa40e77637fb5a2f9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_SCANNER_PASSIVE            | do a passive scan
NIMBLE_SCANNER_LIMITED            | do limited discovery
NIMBLE_SCANNER_FILTER_DUPS            | filter duplicates
NIMBLE_SCANNER_PHY_1M            | scan on 1Mbit PHY

Scan procedure configuration flags.

#### `enum `[`@318`](#group__pkg__nimble__scanner_1ga573f0cc5fc240fb29edcf79155e5a542) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_SCANNER_COMPLETE            | All fragments of a advertising message were received.
NIMBLE_SCANNER_INCOMPLETE            | The advertising message is incomplete.
NIMBLE_SCANNER_TRUNCATED            | Advertising message is truncated.

Status flags for received advertising packets.

#### `public int `[`nimble_scanner_init`](#group__pkg__nimble__scanner_1gafb31a7d3eb83d269b1e4e78312f4d9fd)`(const `[`nimble_scanner_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanner.md#structnimble__scanner__cfg__t)` * params,`[`nimble_scanner_cb`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__scanner_1ga0c2d01f47c9b182af6f89627c97fe522)` disc_cb)` 

Initialize the scanner module.

#### Parameters
* `params` scan parameters to use 

* `disc_cb` callback triggered of each received advertising packet

#### Returns
0 on success

#### `public int `[`nimble_scanner_start`](#group__pkg__nimble__scanner_1ga0ac95159be8b8d3a0f7319389f9a1e99)`(void)` 

Start scanning using timing parameters configured on initialization.

Scanning will run for ever unless stopped or unless a different scan duration is set with [nimble_scanner_set_scan_duration](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__scanner_1gaf68c3b3ab8fa41c24f4e76fab5704346)

#### Returns
0 on success 

#### Returns
-ECANCELED on error

#### `public void `[`nimble_scanner_stop`](#group__pkg__nimble__scanner_1ga9504659cab7cc2a733415737308aa2b3)`(void)` 

Stop scanning.

#### `public inline static bool `[`nimble_scanner_is_active`](#group__pkg__nimble__scanner_1ga83608450c66ee08dd80620f56a0d5444)`(void)` 

Get the current scanning status.

#### Returns
true if currently scanning 

#### Returns
false if the scanner is stopped

#### `public void `[`nimble_scanner_set_scan_duration`](#group__pkg__nimble__scanner_1gaf68c3b3ab8fa41c24f4e76fab5704346)`(int32_t duration_ms)` 

Set the duration for the scanning procedure.

If there is an active scanning process, it will be restarted.

#### Parameters
* `duration_ms` duration of scanning procedure in ms, set to BLE_HS_FOREVER to scan without time limit

# struct `nimble_scanner_cfg_t` 

Scanner configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`itvl_ms`](#structnimble__scanner__cfg__t_1af0f5751fd914b458e85863f11a026753) | scan interval [ms]
`public uint16_t `[`win_ms`](#structnimble__scanner__cfg__t_1a2b7bcc5a21d6435c8f64c8dfe2a4d73c) | scan window [ms]
`public uint8_t `[`flags`](#structnimble__scanner__cfg__t_1a5444d833ef20a7fe4634a67bddcc0ce8) | scan configuration flags

## Members

#### `public uint16_t `[`itvl_ms`](#structnimble__scanner__cfg__t_1af0f5751fd914b458e85863f11a026753) 

scan interval [ms]

#### `public uint16_t `[`win_ms`](#structnimble__scanner__cfg__t_1a2b7bcc5a21d6435c8f64c8dfe2a4d73c) 

scan window [ms]

#### `public uint8_t `[`flags`](#structnimble__scanner__cfg__t_1a5444d833ef20a7fe4634a67bddcc0ce8) 

scan configuration flags

# struct `nimble_scanner_info_t` 

Additional information about received advertising packets.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`status`](#structnimble__scanner__info__t_1a27838f48d951788723f7b986aa08ac24) | Status of received packet.
`public uint8_t `[`phy_pri`](#structnimble__scanner__info__t_1a4b7c4f726da05af27e34846f787a9d4b) | PHY used on primary advertisement channels.
`public uint8_t `[`phy_sec`](#structnimble__scanner__info__t_1ac88b3fde705b22b2146bc4c7f81d2486) | PHY used on secondary advertisement channels.
`public int8_t `[`rssi`](#structnimble__scanner__info__t_1ac26f44d583a61164cccfde67b58c7048) | RSSI value of received advertisement.

## Members

#### `public uint8_t `[`status`](#structnimble__scanner__info__t_1a27838f48d951788723f7b986aa08ac24) 

Status of received packet.

Possible values:

* NIMBLE_SCANNER_COMPLETE

* NIMBLE_SCANNER_INCOMPLETE

* NIMBLE_SCANNER_TRUNCATED

#### `public uint8_t `[`phy_pri`](#structnimble__scanner__info__t_1a4b7c4f726da05af27e34846f787a9d4b) 

PHY used on primary advertisement channels.

#### `public uint8_t `[`phy_sec`](#structnimble__scanner__info__t_1ac88b3fde705b22b2146bc4c7f81d2486) 

PHY used on secondary advertisement channels.

#### `public int8_t `[`rssi`](#structnimble__scanner__info__t_1ac26f44d583a61164cccfde67b58c7048) 

RSSI value of received advertisement.

