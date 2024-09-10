---
title: api-net_wifi.md
description: api-net_wifi.md
---
# group `net_wifi` 

Provides Wi-Fi definitions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`WIFI_REGION_EUROPE`](#group__net__wifi_1ga3693c8cc556399a51803b9b3a7e5d8c9)            | Wi-Fi region Europe.
`define `[`WIFI_REGION_NORTH_AMERICA`](#group__net__wifi_1ga58ab3dd1cfb66ebf2b9b03434de37f2d)            | Wi-Fi region North America.
`define `[`WIFI_REGION_ASIA`](#group__net__wifi_1ga6d45f99d2dc573e6f6081dbea0d1ea71)            | Wi-Fi region Asia.
`define `[`CONFIG_WIFI_REGION`](#group__net__wifi_1gafeb44af186fb35e38f78fef1a6b20687)            | Used to select regional Wi-Fi restrictions.
`define `[`WIFI_REGION`](#group__net__wifi_1ga134c518cc2a529c3ea83a4809d53f1ec)            | Current Wi-Fi region.
`define `[`WIFI_2_4_CH_MIN`](#group__net__wifi_1ga84f11038c720138e47b7fc0ce39f6c6b)            | Lowest Wi-Fi channel.
`define `[`WIFI_2_4_CH_MAX`](#group__net__wifi_1ga644fc1222768b9b1efb6eeb36a926a80)            | Highest Wi-Fi channel.
`define `[`WIFI_2_4_CH_NUMOF`](#group__net__wifi_1ga04189953b4c949a18ad342e5b3add9f0)            | Number of 2.4 GHz channels.
`define `[`WIFI_SSID_LEN_MAX`](#group__net__wifi_1gafc733b5ab77099e0bae1e910f61c820f)            | Maximum length of an SSID.
`define `[`WIFI_WPA_PSK_LEN_MAX`](#group__net__wifi_1gaf70a735d4c7c86ea9003e34fe2c2f285)            | Maximum length of a WPA key.
`define `[`WIFI_WEP_PSK_LEN_MAX`](#group__net__wifi_1ga741399d994fb4901584352bde05b5dd5)            | Maximum length of a WEP key.
`define `[`WIFI_EAP_USER_LEN_MAX`](#group__net__wifi_1gad5444a9553dd3fadffe02cf437ce59c2)            | Maximum username length for WPA2 Enterprise.
`define `[`WIFI_EAP_PWD_LEN_MAX`](#group__net__wifi_1gad45f1e291b358310251ad73c3e699ed7)            | Maximum password length for WPA2 Enterprise.
`enum `[`wifi_2_4_channel_t`](#group__net__wifi_1gaccd6c40123d91c933a3e3d5423e4f2ef)            | 2.4 GHz Channels
`enum `[`wifi_security_mode_t`](#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)            | Type to express a Wi-Fi security mode.
`struct `[`wifi_security_wpa_psk`](#structwifi__security__wpa__psk) | A WPA pre-shared-key.
`struct `[`wifi_security_wep_psk`](#structwifi__security__wep__psk) | A WEP pre-shared-key.
`struct `[`wifi_security_wpa_enterprise`](#structwifi__security__wpa__enterprise) | WPA2 Enterprise credentials.

## Members

#### `define `[`WIFI_REGION_EUROPE`](#group__net__wifi_1ga3693c8cc556399a51803b9b3a7e5d8c9) 

Wi-Fi region Europe.

#### `define `[`WIFI_REGION_NORTH_AMERICA`](#group__net__wifi_1ga58ab3dd1cfb66ebf2b9b03434de37f2d) 

Wi-Fi region North America.

#### `define `[`WIFI_REGION_ASIA`](#group__net__wifi_1ga6d45f99d2dc573e6f6081dbea0d1ea71) 

Wi-Fi region Asia.

#### `define `[`CONFIG_WIFI_REGION`](#group__net__wifi_1gafeb44af186fb35e38f78fef1a6b20687) 

Used to select regional Wi-Fi restrictions.

#### `define `[`WIFI_REGION`](#group__net__wifi_1ga134c518cc2a529c3ea83a4809d53f1ec) 

Current Wi-Fi region.

#### `define `[`WIFI_2_4_CH_MIN`](#group__net__wifi_1ga84f11038c720138e47b7fc0ce39f6c6b) 

Lowest Wi-Fi channel.

#### `define `[`WIFI_2_4_CH_MAX`](#group__net__wifi_1ga644fc1222768b9b1efb6eeb36a926a80) 

Highest Wi-Fi channel.

#### `define `[`WIFI_2_4_CH_NUMOF`](#group__net__wifi_1ga04189953b4c949a18ad342e5b3add9f0) 

Number of 2.4 GHz channels.

#### `define `[`WIFI_SSID_LEN_MAX`](#group__net__wifi_1gafc733b5ab77099e0bae1e910f61c820f) 

Maximum length of an SSID.

#### `define `[`WIFI_WPA_PSK_LEN_MAX`](#group__net__wifi_1gaf70a735d4c7c86ea9003e34fe2c2f285) 

Maximum length of a WPA key.

#### `define `[`WIFI_WEP_PSK_LEN_MAX`](#group__net__wifi_1ga741399d994fb4901584352bde05b5dd5) 

Maximum length of a WEP key.

#### `define `[`WIFI_EAP_USER_LEN_MAX`](#group__net__wifi_1gad5444a9553dd3fadffe02cf437ce59c2) 

Maximum username length for WPA2 Enterprise.

#### `define `[`WIFI_EAP_PWD_LEN_MAX`](#group__net__wifi_1gad45f1e291b358310251ad73c3e699ed7) 

Maximum password length for WPA2 Enterprise.

#### `enum `[`wifi_2_4_channel_t`](#group__net__wifi_1gaccd6c40123d91c933a3e3d5423e4f2ef) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WIFI_2_4_CH_1            | 2.4 GHz channel 1
WIFI_2_4_CH_2            | 2.4 GHz channel 2
WIFI_2_4_CH_3            | 2.4 GHz channel 3
WIFI_2_4_CH_4            | 2.4 GHz channel 4
WIFI_2_4_CH_5            | 2.4 GHz channel 5
WIFI_2_4_CH_6            | 2.4 GHz channel 6
WIFI_2_4_CH_7            | 2.4 GHz channel 7
WIFI_2_4_CH_8            | 2.4 GHz channel 8
WIFI_2_4_CH_9            | 2.4 GHz channel 9
WIFI_2_4_CH_10            | 2.4 GHz channel 10
WIFI_2_4_CH_11            | 2.4 GHz channel 11
WIFI_2_4_CH_12            | 2.4 GHz channel 12
WIFI_2_4_CH_13            | 2.4 GHz channel 13
WIFI_2_4_CH_14            | 2.4 GHz channel 14

2.4 GHz Channels

#### `enum `[`wifi_security_mode_t`](#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WIFI_SECURITY_MODE_OPEN            | AP is open.
WIFI_SECURITY_MODE_WEP_PSK            | AP is protected with WEP.
WIFI_SECURITY_MODE_WPA2_PERSONAL            | AP is protected with WPA2 Personal mode.
WIFI_SECURITY_MODE_WPA2_ENTERPRISE            | AP is protected with WPA2 Enterprise mode.

Type to express a Wi-Fi security mode.

# struct `wifi_security_wpa_psk` 

A WPA pre-shared-key.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__security__wpa__psk_1ab1aa71ccc1331b982eb06655eed2baaa) | [WIFI_SECURITY_MODE_WPA2_PERSONAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1gga212a577278c9943f76356a0e723a6ce6a75d9d1690def0917638c890d03d6a6e5)
`public char `[`psk`](#structwifi__security__wpa__psk_1a74bfcb2821c15464902d27d63dfa22da) | Key data.

## Members

#### `public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__security__wpa__psk_1ab1aa71ccc1331b982eb06655eed2baaa) 

[WIFI_SECURITY_MODE_WPA2_PERSONAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1gga212a577278c9943f76356a0e723a6ce6a75d9d1690def0917638c890d03d6a6e5)

#### `public char `[`psk`](#structwifi__security__wpa__psk_1a74bfcb2821c15464902d27d63dfa22da) 

Key data.

# struct `wifi_security_wep_psk` 

A WEP pre-shared-key.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__security__wep__psk_1aa3e78a8561b5e84c0e8aeabadb851ebc) | [WIFI_SECURITY_MODE_WEP_PSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1gga212a577278c9943f76356a0e723a6ce6a620c2abe379e07f450328ec89691b461)
`public char `[`psk`](#structwifi__security__wep__psk_1a04877e8bae7951860fa3fb3a971f6f9d) | Key data.

## Members

#### `public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__security__wep__psk_1aa3e78a8561b5e84c0e8aeabadb851ebc) 

[WIFI_SECURITY_MODE_WEP_PSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1gga212a577278c9943f76356a0e723a6ce6a620c2abe379e07f450328ec89691b461)

#### `public char `[`psk`](#structwifi__security__wep__psk_1a04877e8bae7951860fa3fb3a971f6f9d) 

Key data.

# struct `wifi_security_wpa_enterprise` 

WPA2 Enterprise credentials.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__security__wpa__enterprise_1a51e5ceed27bbf2278bd3f4a9334c8a12) | [WIFI_SECURITY_MODE_WPA2_ENTERPRISE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1gga212a577278c9943f76356a0e723a6ce6a45214d60b8576aa15fd24925d00a2dae)
`public char `[`user`](#structwifi__security__wpa__enterprise_1a29ee29327b51a1755c546b92621a6c91) | Username.
`public char `[`pwd`](#structwifi__security__wpa__enterprise_1aebc5b2fa49dbdcc3ab87a06a9f635dfc) | Password.

## Members

#### `public `[`wifi_security_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1ga212a577278c9943f76356a0e723a6ce6)` `[`sec`](#structwifi__security__wpa__enterprise_1a51e5ceed27bbf2278bd3f4a9334c8a12) 

[WIFI_SECURITY_MODE_WPA2_ENTERPRISE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__wifi_1gga212a577278c9943f76356a0e723a6ce6a45214d60b8576aa15fd24925d00a2dae)

#### `public char `[`user`](#structwifi__security__wpa__enterprise_1a29ee29327b51a1755c546b92621a6c91) 

Username.

#### `public char `[`pwd`](#structwifi__security__wpa__enterprise_1aebc5b2fa49dbdcc3ab87a06a9f635dfc) 

Password.

