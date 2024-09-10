---
title: api-net_lora_conf.md
description: api-net_lora_conf.md
---
# group `net_lora_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LORA_FREQUENCY_RESOLUTION_NANOHERTZ_DEFAULT`](#group__net__lora__conf_1ga36dd161fca636170aaf35a1b8a298fc8)            | Frequency resolution in nano Hz.
`define `[`CONFIG_LORA_PREAMBLE_LENGTH_DEFAULT`](#group__net__lora__conf_1gabee9e33b1627e2080dec2146be3067ab)            | Preamble length, same for Tx and Rx.
`define `[`CONFIG_LORA_SYMBOL_TIMEOUT_DEFAULT`](#group__net__lora__conf_1ga4b5eaef058db82ae34779a04ae10d647)            | Symbol timeout period in symbols.
`define `[`CONFIG_LORA_BW_DEFAULT`](#group__net__lora__conf_1ga5047d88aa55281b47060c996d0d81d6d)            | Set channel bandwidth.
`define `[`CONFIG_LORA_SF_DEFAULT`](#group__net__lora__conf_1gaa1dccc0e59a5918f1c2bca82a8ecc6bd)            | Set Spreading Factor (SF)
`define `[`CONFIG_LORA_CR_DEFAULT`](#group__net__lora__conf_1ga43f874ee4cf6abf58a1b6384b3c3bb23)            | Set Coding Rate (CR)
`define `[`CONFIG_LORA_IQ_INVERTED_DEFAULT`](#group__net__lora__conf_1ga515fc7a316f8848622b87ee43e556098)            | Set this to 1 to enable inverted I/Q mode.
`define `[`CONFIG_LORA_FREQUENCY_HOPPING_DEFAULT`](#group__net__lora__conf_1ga206c850e2e12a92d2f7c3f184986e991)            | Set this to 1 to enable frequency hopping.
`define `[`CONFIG_LORA_FREQUENCY_HOPPING_PERIOD_DEFAULT`](#group__net__lora__conf_1ga25f1eb22926f93f6825601568a97ada8)            | Frequency hopping period in symbols.
`define `[`CONFIG_LORA_FIXED_HEADER_LEN_MODE_DEFAULT`](#group__net__lora__conf_1ga7f491f665780926b1cf750712d353649)            | Set this to 1 to enable fixed header length mode (implicit header)
`define `[`CONFIG_LORA_PAYLOAD_CRC_OFF_DEFAULT`](#group__net__lora__conf_1ga4619b785a7750b4bb3d67ab76fd3eb80)            | Enable/disable payload CRC, optional.
`define `[`CONFIG_LORA_PAYLOAD_LENGTH_DEFAULT`](#group__net__lora__conf_1ga97f52603060c741ab2f143958b2aa2ad)            | Configure payload length.

## Members

#### `define `[`LORA_FREQUENCY_RESOLUTION_NANOHERTZ_DEFAULT`](#group__net__lora__conf_1ga36dd161fca636170aaf35a1b8a298fc8) 

Frequency resolution in nano Hz.

This is the same as `(32 * 10^15) >> 19`

#### `define `[`CONFIG_LORA_PREAMBLE_LENGTH_DEFAULT`](#group__net__lora__conf_1gabee9e33b1627e2080dec2146be3067ab) 

Preamble length, same for Tx and Rx.

Configure preamble used in LoRa frame. Each LoRa frame begins with a preamble. It starts with a series of upchirps to cover the whole frequency band of the particular channel assigned. The last two upchirps encode the sync word. Sync word is used to differentiate between LoRa transmissions that use the same frequency bands. The sync word is followed by two and a quarter downchirps, for a duration of 2.25 symbols. The total duration of this preamble can be configured between 10.25 and 65,539.25 symbol hence the value can range from 8 to 65537.

#### `define `[`CONFIG_LORA_SYMBOL_TIMEOUT_DEFAULT`](#group__net__lora__conf_1ga4b5eaef058db82ae34779a04ae10d647) 

Symbol timeout period in symbols.

Configure symbol time out in terms of number of symbols. One symbol has a length in time of (2^SF)/BW seconds.

#### `define `[`CONFIG_LORA_BW_DEFAULT`](#group__net__lora__conf_1ga5047d88aa55281b47060c996d0d81d6d) 

Set channel bandwidth.

Configure the channel bandwidth. Refer to country specific regulation on channel usage to identify the correct bandwidth.

#### `define `[`CONFIG_LORA_SF_DEFAULT`](#group__net__lora__conf_1gaa1dccc0e59a5918f1c2bca82a8ecc6bd) 

Set Spreading Factor (SF)

Configure Spreading Factor (SF). SF denotes the amount of spreading code applied to the original data signal. A larger SF increases the time on air, which increases energy consumption, reduces the data rate, and improves communication range. Each step up in spreading factor effectively doubles the time on air to transmit the same amount of data. Refer to country specific air time usage regulations before varying the SF. To calculate air time refer [https://www.loratools.nl/#/airtime](https://www.loratools.nl/#/airtime) .

#### `define `[`CONFIG_LORA_CR_DEFAULT`](#group__net__lora__conf_1ga43f874ee4cf6abf58a1b6384b3c3bb23) 

Set Coding Rate (CR)

Configure Coding Rate (CR). CR denotes the implementation of forward error correction (FEC). This may be done by encoding 4-bit data with redundancies into 5-bit, 6-bit, 7-bit, or 8-bit. Coding Rate (CR) value need to be adjusted according to conditions of the channel used for data transmission. If there are too many interferences in the channel, then it’s recommended to increase the value of CR. However, the rise in CR value will also increase the duration for the transmission. Refer to country specific air time usage regulations before varying the CR. To calculate air time refer [https://www.loratools.nl/#/airtime](https://www.loratools.nl/#/airtime) .

#### `define `[`CONFIG_LORA_IQ_INVERTED_DEFAULT`](#group__net__lora__conf_1ga515fc7a316f8848622b87ee43e556098) 

Set this to 1 to enable inverted I/Q mode.

Enable this to invert the IQ signals used in RF modulation circuit. For more information on I/Q modulation technique visit [http://www.ni.com/tutorial/4805/en/](http://www.ni.com/tutorial/4805/en/)

#### `define `[`CONFIG_LORA_FREQUENCY_HOPPING_DEFAULT`](#group__net__lora__conf_1ga206c850e2e12a92d2f7c3f184986e991) 

Set this to 1 to enable frequency hopping.

If Frequency hopping spread spectrum (FHSS) is enabled a portion of each LoRa packet is transmitted on each hopping channel from a look up table of frequencies managed by the host microcontroller.

#### `define `[`CONFIG_LORA_FREQUENCY_HOPPING_PERIOD_DEFAULT`](#group__net__lora__conf_1ga25f1eb22926f93f6825601568a97ada8) 

Frequency hopping period in symbols.

Configure the hopping period, in symbols, time which each transmission will dwell in any given channel. One symbol has a length in time of (2^SF)/BW seconds.

#### `define `[`CONFIG_LORA_FIXED_HEADER_LEN_MODE_DEFAULT`](#group__net__lora__conf_1ga7f491f665780926b1cf750712d353649) 

Set this to 1 to enable fixed header length mode (implicit header)

If fixed header length mode ( implicit header mode) is enabled, PHY header (`PHDR`) in LoRa frame is discarded. For more information, refer to the section "LoRa frame structure" in this [publication](https://link.springer.com/article/10.1186/s13638-019-1542-x)

#### `define `[`CONFIG_LORA_PAYLOAD_CRC_OFF_DEFAULT`](#group__net__lora__conf_1ga4619b785a7750b4bb3d67ab76fd3eb80) 

Enable/disable payload CRC, optional.

#### `define `[`CONFIG_LORA_PAYLOAD_LENGTH_DEFAULT`](#group__net__lora__conf_1ga97f52603060c741ab2f143958b2aa2ad) 

Configure payload length.

Configure the length of payload. The configuration is unused when using explicit header mode ( [CONFIG_LORA_FIXED_HEADER_LEN_MODE_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__lora__conf_1ga7f491f665780926b1cf750712d353649) ) as `PHDR` carries the length information.

