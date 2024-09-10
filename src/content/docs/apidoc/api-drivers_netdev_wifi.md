---
title: api-drivers_netdev_wifi.md
description: api-drivers_netdev_wifi.md
---
# group `drivers_netdev_wifi` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`WIFI_SCAN_REQUEST_INITIALIZER`](#group__drivers__netdev__wifi_1gad5e5482dd935d1ed15ad3bdf79486028)            | Static initializer for a [wifi_scan_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1gace41819fa5adf101ad17694066e40eaa).
`define `[`WIFI_SCAN_RESULT_INITIALIZER`](#group__drivers__netdev__wifi_1gadb96dba9b9d30f899970f715f73bb6f4)            | Static initializer for a [wifi_scan_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735).
`define `[`WIFI_SCAN_LIST_INITIALIZER`](#group__drivers__netdev__wifi_1ga6a60276f79fdaee3503dde579fc580c4)            | Static initializer for a [wifi_scan_list_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8).
`define `[`WIFI_CONNECT_REQUEST_INITIALIZER`](#group__drivers__netdev__wifi_1gab3928aff6c1a48fcc95e722a2cdceede)            | Static initializer for a [wifi_connect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga83729d95d7f16a79fc093b14541b0f81).
`define `[`WIFI_CONNECT_RESULT_INITIALIZER`](#group__drivers__netdev__wifi_1gacc552d24904155b438c153453895a168)            | Static initializer for a [wifi_connect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1gaaf79d1a196653c398b415ba6055fc60b).
`define `[`WIFI_DISCONNECT_REQUEST_INITIALIZER`](#group__drivers__netdev__wifi_1gace32eca78db52c7e8496f88351e5fe47)            | Static initializer for a [wifi_disconnect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1gaacc876f900296546566436c258d0e979).
`define `[`WIFI_DISCONNECT_RESULT_INITIALIZER`](#group__drivers__netdev__wifi_1gaa2d63e9f85cfedef867e3ddb32b59d29)            | Static initializer for a [wifi_disconnect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga138c36ca91e43064d159465c51a0765e).
`struct `[`wifi_scan_request`](#structwifi__scan__request) | A Wi-Fi scan request.
`struct `[`wifi_scan_result`](#structwifi__scan__result) | A Wi-Fi scan result.
`struct `[`wifi_scan_list_node`](#structwifi__scan__list__node) | Node type in a wifi scan list [wifi_scan_list_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8).
`struct `[`wifi_connect_request`](#structwifi__connect__request) | A Wi-Fi connect request.
`struct `[`wifi_connect_result`](#structwifi__connect__result) | A Wi-Fi connect result.
`struct `[`wifi_disconnect_request`](#structwifi__disconnect__request) | A Wi-Fi disconnect request.
`struct `[`wifi_disconnect_result`](#structwifi__disconnect__result) | A Wi-Fi disconnect result.

## Members

#### `define `[`WIFI_SCAN_REQUEST_INITIALIZER`](#group__drivers__netdev__wifi_1gad5e5482dd935d1ed15ad3bdf79486028) 

Static initializer for a [wifi_scan_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1gace41819fa5adf101ad17694066e40eaa).

#### Parameters
* `ch` Channel to scan or [NETOPT_SCAN_REQ_ALL_CH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gaa46df3f8b92ec1c12a30b50e7679fe63)

* `cb` Callback on scan result [wifi_on_scan_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga1c1b3ce2eca05f41991d029c0e29439f)

* `ms` Timeout for each channel to scan

#### `define `[`WIFI_SCAN_RESULT_INITIALIZER`](#group__drivers__netdev__wifi_1gadb96dba9b9d30f899970f715f73bb6f4) 

Static initializer for a [wifi_scan_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735).

#### Parameters
* `ch` Channel that was scanned 

* `str` Received signal strength 

* `sec` AP security mode

#### `define `[`WIFI_SCAN_LIST_INITIALIZER`](#group__drivers__netdev__wifi_1ga6a60276f79fdaee3503dde579fc580c4) 

Static initializer for a [wifi_scan_list_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8).

#### Parameters
* `list` Pointer to first list node

#### `define `[`WIFI_CONNECT_REQUEST_INITIALIZER`](#group__drivers__netdev__wifi_1gab3928aff6c1a48fcc95e722a2cdceede) 

Static initializer for a [wifi_connect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga83729d95d7f16a79fc093b14541b0f81).

#### Parameters
* `ch` Channel to connect to 

* `ccb` On connect callback 

* `dcb` On disconnect callback 

* `cr` Pointer to credentials

#### `define `[`WIFI_CONNECT_RESULT_INITIALIZER`](#group__drivers__netdev__wifi_1gacc552d24904155b438c153453895a168) 

Static initializer for a [wifi_connect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1gaaf79d1a196653c398b415ba6055fc60b).

#### Parameters
* `ch` Channel of the connected AP 

* `p_ssid` SSID of connected AP

#### `define `[`WIFI_DISCONNECT_REQUEST_INITIALIZER`](#group__drivers__netdev__wifi_1gace32eca78db52c7e8496f88351e5fe47) 

Static initializer for a [wifi_disconnect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1gaacc876f900296546566436c258d0e979).

#### Parameters
* `dcb` On disconnect callback

#### `define `[`WIFI_DISCONNECT_RESULT_INITIALIZER`](#group__drivers__netdev__wifi_1gaa2d63e9f85cfedef867e3ddb32b59d29) 

Static initializer for a [wifi_disconnect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga138c36ca91e43064d159465c51a0765e).

#### Parameters
* `ch` Channel of no longer connected AP 

* `p_ssid` SSID of no longer connected AP

# struct `wifi_scan_request` 

A Wi-Fi scan request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_scan_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga059cca3b47f6a7a79f7711e22139021a)` `[`base`](#structwifi__scan__request_1aa97762353c58fa874cb1aebb0ca1285c) | Basic scan request.
`public uint16_t `[`timeout_ms_per_ch`](#structwifi__scan__request_1a39d30478e70f0a73d8e816dfb885be9a) | timeout for each channel to scan

## Members

#### `public `[`netopt_scan_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga059cca3b47f6a7a79f7711e22139021a)` `[`base`](#structwifi__scan__request_1aa97762353c58fa874cb1aebb0ca1285c) 

Basic scan request.

#### `public uint16_t `[`timeout_ms_per_ch`](#structwifi__scan__request_1a39d30478e70f0a73d8e816dfb885be9a) 

timeout for each channel to scan

# struct `wifi_scan_result` 

A Wi-Fi scan result.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gad70998ba273274bf9359e65d2fadaa69)` `[`base`](#structwifi__scan__result_1ad150e0a7047d58cb9a327d7c4e491523) | Basic scan result.
`public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec_mode`](#structwifi__scan__result_1a333a35a4bf35a72917751d8baf5c2371) | Security mode of AP.
`public uint8_t `[`bssid`](#structwifi__scan__result_1a7e7d153e250adbf6bd7a373442b4d0cf) | BSSID of AP.
`public char `[`ssid`](#structwifi__scan__result_1aec7940c97acfdeabcf224b232c3490b2) | SSID of AP.

## Members

#### `public `[`netopt_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gad70998ba273274bf9359e65d2fadaa69)` `[`base`](#structwifi__scan__result_1ad150e0a7047d58cb9a327d7c4e491523) 

Basic scan result.

#### `public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec_mode`](#structwifi__scan__result_1a333a35a4bf35a72917751d8baf5c2371) 

Security mode of AP.

#### `public uint8_t `[`bssid`](#structwifi__scan__result_1a7e7d153e250adbf6bd7a373442b4d0cf) 

BSSID of AP.

#### `public char `[`ssid`](#structwifi__scan__result_1aec7940c97acfdeabcf224b232c3490b2) 

SSID of AP.

# struct `wifi_scan_list_node` 

Node type in a wifi scan list [wifi_scan_list_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`node`](#structwifi__scan__list__node_1a66475104cf44603c36631185b016b944) | Basic list node.
`public `[`wifi_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735)` `[`result`](#structwifi__scan__list__node_1a5da66ef9f78741048e28c2d0e328cbb8) | Wi-Fi scan result.

## Members

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`node`](#structwifi__scan__list__node_1a66475104cf44603c36631185b016b944) 

Basic list node.

#### `public `[`wifi_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735)` `[`result`](#structwifi__scan__list__node_1a5da66ef9f78741048e28c2d0e328cbb8) 

Wi-Fi scan result.

# struct `wifi_connect_request` 

A Wi-Fi connect request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_connect_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga9c2682298c9140f831623a68af529b66)` `[`base`](#structwifi__connect__request_1aa1fe3f04b313baa6ffd1c7ca46d8e9ca) | Basic connect request.
`public const `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` * `[`cred`](#structwifi__connect__request_1ae69872ba45f0a0e0c9a733feb53fb936) | Pointer to credentials.
`public char `[`ssid`](#structwifi__connect__request_1a3a35e2adff025f8b9843653bdfde5fef) | SSID of AP to connect to.

## Members

#### `public `[`netopt_connect_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga9c2682298c9140f831623a68af529b66)` `[`base`](#structwifi__connect__request_1aa1fe3f04b313baa6ffd1c7ca46d8e9ca) 

Basic connect request.

#### `public const `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` * `[`cred`](#structwifi__connect__request_1ae69872ba45f0a0e0c9a733feb53fb936) 

Pointer to credentials.

#### `public char `[`ssid`](#structwifi__connect__request_1a3a35e2adff025f8b9843653bdfde5fef) 

SSID of AP to connect to.

# struct `wifi_connect_result` 

A Wi-Fi connect result.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_connect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gab0a20e616d89f0aa29401a2f2ec93b7c)` `[`base`](#structwifi__connect__result_1af7530a0a582b3700cd4f72ba0d38069a) | Basic connect result.
`public const char * `[`ssid`](#structwifi__connect__result_1ad2d075193385778e55bb5a961164adb4) | SSID of currently connected AP.
`public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__connect__result_1a459128db6efeb79b375aa241413b904f) | WiFi security mode.
`public `[`wifi_security_wpa_psk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga1e2b8d8b223c8df15d4d83c52c1faf0b)` `[`wpa_psk`](#structwifi__connect__result_1aa2461cbf86f50d0a3204037ab1df57dc) | WPA2 PSK security mode.
`public `[`wifi_security_wep_psk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga84593c423bb66d9bcabbfda6d2d3ed84)` `[`wep`](#structwifi__connect__result_1a4b7a0afe533d8fb5b2bbd4388466b4fb) | WEP security mode.
`public `[`wifi_security_wpa_enterprise_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga52b0f1a12b7baf8f8d10b612111b4f5c)` `[`wpa_enterprise`](#structwifi__connect__result_1a6e2ad2222ee7c907bdc918901e4e8792) | WPA2 enterprise security mode.
`public union wifi_connect_result::@228 `[`credentials`](#structwifi__connect__result_1a75ee4b772a15349918f8873f05bf006f) | Credentials.

## Members

#### `public `[`netopt_connect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gab0a20e616d89f0aa29401a2f2ec93b7c)` `[`base`](#structwifi__connect__result_1af7530a0a582b3700cd4f72ba0d38069a) 

Basic connect result.

#### `public const char * `[`ssid`](#structwifi__connect__result_1ad2d075193385778e55bb5a961164adb4) 

SSID of currently connected AP.

#### `public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__connect__result_1a459128db6efeb79b375aa241413b904f) 

WiFi security mode.

#### `public `[`wifi_security_wpa_psk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga1e2b8d8b223c8df15d4d83c52c1faf0b)` `[`wpa_psk`](#structwifi__connect__result_1aa2461cbf86f50d0a3204037ab1df57dc) 

WPA2 PSK security mode.

#### `public `[`wifi_security_wep_psk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga84593c423bb66d9bcabbfda6d2d3ed84)` `[`wep`](#structwifi__connect__result_1a4b7a0afe533d8fb5b2bbd4388466b4fb) 

WEP security mode.

#### `public `[`wifi_security_wpa_enterprise_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga52b0f1a12b7baf8f8d10b612111b4f5c)` `[`wpa_enterprise`](#structwifi__connect__result_1a6e2ad2222ee7c907bdc918901e4e8792) 

WPA2 enterprise security mode.

#### `public union wifi_connect_result::@228 `[`credentials`](#structwifi__connect__result_1a75ee4b772a15349918f8873f05bf006f) 

Credentials.

# struct `wifi_disconnect_request` 

A Wi-Fi disconnect request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_disconnect_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gacc13d0b324e83774ef7fa33bd41e31ea)` `[`base`](#structwifi__disconnect__request_1a1cf061c6ac27aea6df4f861864ee0cb6) | Basic disconnect request.

## Members

#### `public `[`netopt_disconnect_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gacc13d0b324e83774ef7fa33bd41e31ea)` `[`base`](#structwifi__disconnect__request_1a1cf061c6ac27aea6df4f861864ee0cb6) 

Basic disconnect request.

# struct `wifi_disconnect_result` 

A Wi-Fi disconnect result.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_disconnect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga194626b591ad5ec318cd9b5bf66653b0)` `[`base`](#structwifi__disconnect__result_1ab5ccbd14efa33262023e7d73da945bfb) | Basic disconnect result.
`public const char * `[`ssid`](#structwifi__disconnect__result_1a0d63e07c817dc228b2fef22955febb42) | SSID of the AP no longer connected to.

## Members

#### `public `[`netopt_disconnect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga194626b591ad5ec318cd9b5bf66653b0)` `[`base`](#structwifi__disconnect__result_1ab5ccbd14efa33262023e7d73da945bfb) 

Basic disconnect result.

#### `public const char * `[`ssid`](#structwifi__disconnect__result_1a0d63e07c817dc228b2fef22955febb42) 

SSID of the AP no longer connected to.

