---
title: api-net_netopt.md
description: api-net_netopt.md
---
# group `net_netopt` 

List of available configuration options for the [Netdev - Network Device Driver API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api) and the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETOPT_SCAN_REQ_ALL_CH`](#group__net__netopt_1gaa46df3f8b92ec1c12a30b50e7679fe63)            | Request to scan all channels.
`define `[`NETOPT_SCAN_RESULT_INITIALIZER`](#group__net__netopt_1ga0ef6cc8de009283c9ab12f0f24d7dcc3)            | Static initializer for a [netopt_scan_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gad70998ba273274bf9359e65d2fadaa69).
`define `[`NETOPT_SCAN_REQUEST_INITIALIZER`](#group__net__netopt_1gaefcafbfacfc3a536c4b7e6c8dcca2e7e)            | Static initializer for a [netopt_scan_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga059cca3b47f6a7a79f7711e22139021a).
`define `[`NETOPT_CONNECT_RESULT_INITIALIZER`](#group__net__netopt_1ga91398f403ff40ffbe44cc15120010d57)            | Static initializer for a [netopt_connect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gab0a20e616d89f0aa29401a2f2ec93b7c).
`define `[`NETOPT_DISCONNECT_RESULT_INITIALIZER`](#group__net__netopt_1ga3f4a0bbaf8cd44fa106ee65b253283c4)            | Static initializer for a [netopt_disconnect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga194626b591ad5ec318cd9b5bf66653b0).
`define `[`NETOPT_CONNECT_REQUEST_INITIALIZER`](#group__net__netopt_1ga816c926d029ed1a890cdb73d734c2d29)            | Static initializer for a [netopt_connect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga9c2682298c9140f831623a68af529b66).
`define `[`NETOPT_DISCONNECT_REQUEST_INITIALIZER`](#group__net__netopt_1gae1760c74e159991f7a3bb4f71b390012)            | Static initializer for a [netopt_disconnect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gacc13d0b324e83774ef7fa33bd41e31ea).
`enum `[`netopt_t`](#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)            | Global list of configuration options available throughout the network stack, e.g.
`enum `[`netopt_enable_t`](#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)            | Binary parameter for enabling and disabling options.
`enum `[`netopt_state_t`](#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)            | Option parameter to be used with [NETOPT_STATE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a8e2ba1ca0480826ca5da1406ff5ac0ea) to set or get the state of a network device or protocol implementation.
`enum `[`netopt_rf_testmode_t`](#group__net__netopt_1ga569d25644270a8b1971ed7214ae20b7b)            | Option parameter to be used with [NETOPT_RF_TESTMODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a63f1b24fd3a18d699ec36b131222a98a).
`public const char * `[`netopt2str`](#group__net__netopt_1ga927a5d2656d7f1794b8e347b17899992)`(`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt)`            | Get a string ptr corresponding to opt, for debugging.
`struct `[`netopt_scan_result`](#structnetopt__scan__result) | Basic network scan result.
`struct `[`netopt_scan_request`](#structnetopt__scan__request) | Basic network scan request.
`struct `[`netopt_connect_result`](#structnetopt__connect__result) | Basic network connect result.
`struct `[`netopt_disconnect_result`](#structnetopt__disconnect__result) | Basic disconnect result.
`struct `[`netopt_connect_request`](#structnetopt__connect__request) | Basic network connect request.
`struct `[`netopt_disconnect_request`](#structnetopt__disconnect__request) | Basic network disconnect request.

## Members

#### `define `[`NETOPT_SCAN_REQ_ALL_CH`](#group__net__netopt_1gaa46df3f8b92ec1c12a30b50e7679fe63) 

Request to scan all channels.

#### `define `[`NETOPT_SCAN_RESULT_INITIALIZER`](#group__net__netopt_1ga0ef6cc8de009283c9ab12f0f24d7dcc3) 

Static initializer for a [netopt_scan_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gad70998ba273274bf9359e65d2fadaa69).

#### Parameters
* `ch` Scanned channel 

* `str` Received signal strength

#### `define `[`NETOPT_SCAN_REQUEST_INITIALIZER`](#group__net__netopt_1gaefcafbfacfc3a536c4b7e6c8dcca2e7e) 

Static initializer for a [netopt_scan_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga059cca3b47f6a7a79f7711e22139021a).

#### Parameters
* `ch` Channel to be scanned 

* `cb` Scan result callback

#### `define `[`NETOPT_CONNECT_RESULT_INITIALIZER`](#group__net__netopt_1ga91398f403ff40ffbe44cc15120010d57) 

Static initializer for a [netopt_connect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gab0a20e616d89f0aa29401a2f2ec93b7c).

#### Parameters
* `ch` Connected channel

#### `define `[`NETOPT_DISCONNECT_RESULT_INITIALIZER`](#group__net__netopt_1ga3f4a0bbaf8cd44fa106ee65b253283c4) 

Static initializer for a [netopt_disconnect_result_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga194626b591ad5ec318cd9b5bf66653b0).

#### Parameters
* `ch` Channel of the disconnected AP

#### `define `[`NETOPT_CONNECT_REQUEST_INITIALIZER`](#group__net__netopt_1ga816c926d029ed1a890cdb73d734c2d29) 

Static initializer for a [netopt_connect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga9c2682298c9140f831623a68af529b66).

#### Parameters
* `ch` Channel of the network to connect to 

* `ccb` On connect callback 

* `dcb` On disconnect callback

#### `define `[`NETOPT_DISCONNECT_REQUEST_INITIALIZER`](#group__net__netopt_1gae1760c74e159991f7a3bb4f71b390012) 

Static initializer for a [netopt_disconnect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gacc13d0b324e83774ef7fa33bd41e31ea).

#### Parameters
* `dcb` On disconnect callback

#### `enum `[`netopt_t`](#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NETOPT_CHANNEL            | (uint16_t) channel number
NETOPT_IS_CHANNEL_CLR            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) check whether the network medium is clear
NETOPT_ADDRESS            | (byte array, see below) link layer address in network byte order
NETOPT_ADDRESS_LONG            | (byte array, see below) long link layer address in network byte order
NETOPT_ADDR_LEN            | (uint16_t) get the default address length a network device expects
NETOPT_SRC_LEN            | (uint16_t) address length to use for the link layer source address
NETOPT_NID            | (uint16_t) network ID
NETOPT_HOP_LIMIT            | (uint8_t) hop limit
NETOPT_IPV6_IID            | ([eui64_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)) get the IPv6 interface identifier of a network interface
NETOPT_IPV6_ADDR            | ([ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)[]) get IPv6 addresses of an interface as array of [ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t) or add an IPv6 address as [ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t) to an interface
NETOPT_IPV6_ADDR_REMOVE            | ([ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)) Removes an IPv6 address from an interface
NETOPT_IPV6_ADDR_FLAGS            | (array of uint8_t) get the flags to the addresses returned by [NETOPT_IPV6_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a98b1f68f4205abe1e6c0d1b2da831316) as array
NETOPT_IPV6_GROUP            | ([ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)) get IPv6 multicast groups of an interface as array of [ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t) or join an IPv6 multicast group as [ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t) on an interface
NETOPT_IPV6_GROUP_LEAVE            | ([ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)) Leave an IPv6 multicast group on an interface
NETOPT_IPV6_FORWARDING            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) IPv6 forwarding state
NETOPT_IPV6_SND_RTR_ADV            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) sending of IPv6 router advertisements
NETOPT_TX_POWER            | (int16_t) transmit power for radio devices in dBm
NETOPT_MAX_PDU_SIZE            | (uint16_t) maximum protocol data unit
NETOPT_PDU_SIZE            | (uint16_t) protocol data unit size
NETOPT_PRELOADING            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) frame preloading
NETOPT_PROMISCUOUSMODE            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) promiscuous mode
NETOPT_AUTOACK            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) automatic link layer ACKs
NETOPT_ACK_PENDING            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) frame pending bit of ACKs
NETOPT_ACK_REQ            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) acknowledgement request on outgoing frames
NETOPT_RETRANS            | (uint8_t) maximum number of retransmissions
NETOPT_PROTO            | ([gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)) the protocol for the layer
NETOPT_STATE            | ([netopt_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f)) state of network device
NETOPT_RAWMODE            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) when enabled, bypass protocol processing of incoming frames
NETOPT_RX_START_IRQ            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) Used to check if the driver generates NETDEV_EVENT_RX_STARTED events
NETOPT_TX_START_IRQ            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) Used to check if the driver generates NETDEV_EVENT_TX_STARTED events
NETOPT_TX_END_IRQ            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) Used to check if the driver generates NETDEV_EVENT_TX_COMPLETE events
NETOPT_AUTOCCA            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) perform channel clear assessment before transmitting
NETOPT_LINK            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) network interface link status.
NETOPT_ACTIVE            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) network interface status.
NETOPT_CSMA            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) CSMA/CA support
NETOPT_CSMA_RETRIES            | (uint8_t) maximum number of CSMA retries
NETOPT_CSMA_MAXBE            | (uint8_t) maximum backoff exponent for the CSMA-CA algorithm
NETOPT_CSMA_MINBE            | (uint8_t) minimum backoff exponent for the CSMA-CA algorithm
NETOPT_MAC_NO_SLEEP            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) block transceiver sleep
NETOPT_IS_WIRED            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) read-only check for a wired interface.
NETOPT_DEVICE_TYPE            | (uint16_t) device type
NETOPT_CHANNEL_PAGE            | (uint16_t) channel page as defined by IEEE 802.15.4
NETOPT_CCA_THRESHOLD            | (int8_t) CCA threshold for the radio transceiver
NETOPT_CCA_MODE            | (uint8_t) CCA mode for the radio transceiver
NETOPT_STATS            | ([netstats_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__t)) get statistics about sent and received packets and data of the device or protocol
NETOPT_ENCRYPTION            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) link layer encryption.
NETOPT_ENCRYPTION_KEY            | (byte array) set encryption key
NETOPT_RF_TESTMODE            | ([netopt_rf_testmode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga569d25644270a8b1971ed7214ae20b7b)) Test mode for the radio, e.g.
NETOPT_L2FILTER            | ([l2filter_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)) add an address to a link layer filter list
NETOPT_L2FILTER_RM            | ([l2filter_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_l2filter.md#structl2filter__t)) remove an address from a link layer filter list
NETOPT_LAST_ED_LEVEL            | (int8_t) Energy level during the last performed CCA or RX frame
NETOPT_PREAMBLE_LENGTH            | (uint16_t) preamble length
NETOPT_INTEGRITY_CHECK            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) frame integrity check (e.g CRC)
NETOPT_CHANNEL_FREQUENCY            | (uint32_t) channel center frequency
NETOPT_CHANNEL_HOP            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) channel hopping
NETOPT_CHANNEL_HOP_PERIOD            | (uint8_t) channel hopping period
NETOPT_SINGLE_RECEIVE            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) single frame reception
NETOPT_RX_TIMEOUT            | (uint32_t) reception timeout of a frame
NETOPT_TX_TIMEOUT            | (uint32_t) transmission timeout of a frame
NETOPT_BANDWIDTH            | (uint8_t) radio modulation bandwidth
NETOPT_SPREADING_FACTOR            | (uint8_t) radio spreading factor
NETOPT_CODING_RATE            | (uint8_t) radio coding rate
NETOPT_FIXED_HEADER            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) fixed header mode
NETOPT_IQ_INVERT            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) IQ inverted
NETOPT_6LO            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) 6Lo support
NETOPT_6LO_IPHC            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) header compression
NETOPT_TX_RETRIES_NEEDED            | (uint8_t) retry amount from missing ACKs of the last transmission
NETOPT_BLE_CTX            | ([netdev_ble_ctx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__ctx__t)) set BLE radio context (channel, CRC, AA)
NETOPT_CHECKSUM            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) enable hardware checksumming
NETOPT_PHY_BUSY            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) enable busy mode
NETOPT_LORAWAN_APPEUI            | (uint8_t*) LoRaWAN application EUI (8 bytes length)
NETOPT_LORAWAN_JOINEUI            | (uint8_t*) LoRaWAN join EUI (8 bytes length)
NETOPT_LORAWAN_APPKEY            | (uint8_t*) LoRaWAN application key (16 bytes length)
NETOPT_LORAWAN_NWKKEY            | (uint8_t*) LoRaWAN network key (16 bytes length)
NETOPT_LORAWAN_NWKSKEY            | (uint8_t*) LoRaWAN network session key (16 bytes length)
NETOPT_LORAWAN_APPSKEY            | (uint8_t*) LoRaWAN application session key (16 bytes length)
NETOPT_LORAWAN_FNWKSINTKEY            | (uint8_t*) LoRaWAN forwarding network session integrity key (16 bytes length)
NETOPT_LORAWAN_SNWKSINTKEY            | (uint8_t*) LoRaWAN serving network session integrity key (16 bytes length)
NETOPT_LORAWAN_NWKSENCKEY            | (uint8_t*) LoRaWAN network session encryption key buffer (16 bytes length)
NETOPT_LORAWAN_DEVICE_CLASS            | (uint8_t) LoRaWAN device class (A, B, C)
NETOPT_LORAWAN_DR            | (uint8_t) LoRaWAN datarate
NETOPT_LORAWAN_ADR            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) LoRaWAN adaptive datarate
NETOPT_LORAWAN_PUBLIC_NETWORK            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) LoRaWAN public network
NETOPT_LORAWAN_RX2_DR            | (loramac_dr_idx_t) LoRaWAN datarate for second RX window
NETOPT_LORAWAN_RX2_FREQ            | (uint32_t) LoRaWAN frequency used for second RX window
NETOPT_LORAWAN_MAX_RX_ERROR            | (uint32_t) LoRaWAN maximum system overall timing error (ms)
NETOPT_LORAWAN_MIN_RX_SYMBOL            | (uint8_t) LoRaWAN maximum system overall timing error (symbols)
NETOPT_IEEE802154_PHY            | (uint8_t) 802.15.4 PHY mode
NETOPT_OQPSK_RATE            | (uint8_t) legacy O-QPSK proprietary mode Allows to select higher data rates than standard 250 kbit/s Not compatible across vendors, only use with radios of the same type.
NETOPT_MR_OQPSK_CHIPS            | (uint8_t) MR-O-QPSK Chip Rate (kchip/s)
NETOPT_MR_OQPSK_RATE            | (uint8_t) MR-O-QPSK Rate Mode
NETOPT_MR_OFDM_OPTION            | (uint8_t) MR-OFDM PHY Option (Values: 1-4)
NETOPT_MR_OFDM_MCS            | (uint8_t) MR-OFDM PHY Modulation and Coding Scheme (Values: 0-6)
NETOPT_MR_FSK_MODULATION_INDEX            | (uint8_t) MR-FSK PHY Modulation Index (x 64)
NETOPT_MR_FSK_MODULATION_ORDER            | (uint8_t) MR-FSK Modulation Order
NETOPT_MR_FSK_SRATE            | (uint8_t) MR-FSK PHY Symbol Rate (kHz)
NETOPT_MR_FSK_FEC            | (uint8_t) MR-FSK PHY Forward Error Correction
NETOPT_CHANNEL_SPACING            | (uint8_t) PHY Channel Spacing (kHz)
NETOPT_SYNCWORD            | (uint8_t*) phy layer syncword
NETOPT_RANDOM            | (uint32_t) Get a random value from the device
NETOPT_RX_SYMBOL_TIMEOUT            | (uint16_t) Get or set the number of PHY symbols before assuming there's no data
NETOPT_OTAA            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) Enable or disable OTAA activation (LoRaWAN)
NETOPT_DEMOD_MARGIN            | (uint8_t) Get the demodulation margin of the last Link Check request.
NETOPT_NUM_GATEWAYS            | (uint8_t) Get the number of gateways of the last Link Check request.
NETOPT_LINK_CHECK            | ([netopt_enable_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c)) Perform a Link Check request (LoRaWAN)
NETOPT_RSSI            | (int16_t) Received Signal Strength Indicator (RSSI)
NETOPT_SCAN            | ([netopt_scan_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga059cca3b47f6a7a79f7711e22139021a)) Instruct the interface to do a network scan
NETOPT_CONNECT            | ([netopt_connect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga9c2682298c9140f831623a68af529b66)) Instructs the interface to connect to a network
NETOPT_DISCONNECT            | ([netopt_disconnect_request_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gacc13d0b324e83774ef7fa33bd41e31ea)) Instructs the interface to disconnect from a network
NETOPT_BATMON            | (uint16_t) Set the battery monitor voltage (in mV).
NETOPT_L2_GROUP            | (array of byte array) get link layer multicast groups as array of byte arrays (length of each byte array corresponds to the length of [NETOPT_ADDRESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a211ad84f5ea3987ed591deeaf1fd4758)) or join a link layer multicast group as byte array on an interface
NETOPT_L2_GROUP_LEAVE            | (array of byte arrays) Leave an link layer multicast group
NETOPT_PAN_COORD            | (netopt_enable_t) Set/Get PAN coordinator role
NETOPT_GTS_ALLOC            | ([ieee802154_dsme_alloc_t](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_opendsme.md#structieee802154__dsme__alloc__t)) Allocate DSME GTS slot
NETOPT_GTS_TX            | (netopt_enable_t) Transmit frames using GTS transmission
NETOPT_NUMOF            | maximum number of options defined here.

Global list of configuration options available throughout the network stack, e.g.

by netdev and netapi

The data type specified in parentheses for each individual option is the data type to use for the argument when getting/setting the value of the option.

All arguments longer than 1 byte (e.g. uint16_t) are given in host byte order unless anything else is specified below.

#### `enum `[`netopt_enable_t`](#group__net__netopt_1ga09337825cca1fd15dfefc0e31a56a86c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NETOPT_DISABLE            | disable a given option
NETOPT_ENABLE            | enable a given option

Binary parameter for enabling and disabling options.

#### `enum `[`netopt_state_t`](#group__net__netopt_1ga796283228e6d45c83479d4c9cc83374f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NETOPT_STATE_OFF            | powered off
NETOPT_STATE_SLEEP            | sleep mode
NETOPT_STATE_IDLE            | idle mode, the device listens to receive packets
NETOPT_STATE_RX            | receive mode, the device currently receives a packet
NETOPT_STATE_TX            | transmit mode, set: triggers transmission of a preloaded packet (see [NETOPT_PRELOADING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906ab9a0177309e4537d2f14f58d41abde11)*).
NETOPT_STATE_RESET            | triggers a hardware reset.
NETOPT_STATE_STANDBY            | standby mode.

Option parameter to be used with [NETOPT_STATE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a8e2ba1ca0480826ca5da1406ff5ac0ea) to set or get the state of a network device or protocol implementation.

#### `enum `[`netopt_rf_testmode_t`](#group__net__netopt_1ga569d25644270a8b1971ed7214ae20b7b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NETOPT_RF_TESTMODE_IDLE            | idle mode, radio off
NETOPT_RF_TESTMODE_CRX            | continuous rx mode
NETOPT_RF_TESTMODE_CTX_CW            | carrier wave continuous tx mode
NETOPT_RF_TESTMODE_CTX_PRBS9            | PRBS9 continuous tx mode.

Option parameter to be used with [NETOPT_RF_TESTMODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a63f1b24fd3a18d699ec36b131222a98a).

#### `public const char * `[`netopt2str`](#group__net__netopt_1ga927a5d2656d7f1794b8e347b17899992)`(`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt)` 

Get a string ptr corresponding to opt, for debugging.

#### Parameters
* `opt` The option to get a string representation for

#### Returns
ptr to string representation for given option or "unknown"

# struct `netopt_scan_result` 

Basic network scan result.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__scan__result_1a073d20acbb5a9a4906a879796d88ff02) | Scanned channel.
`public `[`netopt_rssi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga1ce5f5e293724192f93e124138ebbf93)` `[`strength`](#structnetopt__scan__result_1a948369b5de051b67e74dbc5fd891e9e8) | Received signal strength.

## Members

#### `public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__scan__result_1a073d20acbb5a9a4906a879796d88ff02) 

Scanned channel.

#### `public `[`netopt_rssi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga1ce5f5e293724192f93e124138ebbf93)` `[`strength`](#structnetopt__scan__result_1a948369b5de051b67e74dbc5fd891e9e8) 

Received signal strength.

# struct `netopt_scan_request` 

Basic network scan request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_on_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gaff831664620efef50602416b9f987718)` `[`scan_cb`](#structnetopt__scan__request_1a5de8e4a419d815da199a17794b7f5bfe) | Scan result callback.
`public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__scan__request_1ab829ee7d7de51601b41effd96283ed15) | Channel to scan.

## Members

#### `public `[`netopt_on_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gaff831664620efef50602416b9f987718)` `[`scan_cb`](#structnetopt__scan__request_1a5de8e4a419d815da199a17794b7f5bfe) 

Scan result callback.

#### `public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__scan__request_1ab829ee7d7de51601b41effd96283ed15) 

Channel to scan.

# struct `netopt_connect_result` 

Basic network connect result.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__connect__result_1a3340b77de8c3a739f50cdd8ad5a0a3b0) | Connected channel.

## Members

#### `public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__connect__result_1a3340b77de8c3a739f50cdd8ad5a0a3b0) 

Connected channel.

# struct `netopt_disconnect_result` 

Basic disconnect result.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__disconnect__result_1a9a8603938a061072845fee196baea800) | Channel of the disconnected AP.

## Members

#### `public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__disconnect__result_1a9a8603938a061072845fee196baea800) 

Channel of the disconnected AP.

# struct `netopt_connect_request` 

Basic network connect request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_on_disconnect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gadd62f04e9b6b1086d7961cf7ab0392df)` `[`disconn_cb`](#structnetopt__connect__request_1a902041f8dd788acf382df924635c5364) | On disconnect callback.
`public `[`netopt_on_connect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga5b22f4a3eec8e8d7885e0ec77dd95e5b)` `[`conn_cb`](#structnetopt__connect__request_1a806ebb454cd2a6c834df20b78435bf5d) | On connect callback.
`public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__connect__request_1ae67b231f5667e7ea66f6d74db8d2d3f4) | Channel of the network to connect to.

## Members

#### `public `[`netopt_on_disconnect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gadd62f04e9b6b1086d7961cf7ab0392df)` `[`disconn_cb`](#structnetopt__connect__request_1a902041f8dd788acf382df924635c5364) 

On disconnect callback.

#### `public `[`netopt_on_connect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga5b22f4a3eec8e8d7885e0ec77dd95e5b)` `[`conn_cb`](#structnetopt__connect__request_1a806ebb454cd2a6c834df20b78435bf5d) 

On connect callback.

#### `public `[`netopt_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gac922f3006f823c6227403b3fd184e7bc)` `[`channel`](#structnetopt__connect__request_1ae67b231f5667e7ea66f6d74db8d2d3f4) 

Channel of the network to connect to.

# struct `netopt_disconnect_request` 

Basic network disconnect request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_on_disconnect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gadd62f04e9b6b1086d7961cf7ab0392df)` `[`disconn_cb`](#structnetopt__disconnect__request_1abeb8f881a7cf173d7c6bae6a6757ea52) | On disconnect callback.

## Members

#### `public `[`netopt_on_disconnect_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gadd62f04e9b6b1086d7961cf7ab0392df)` `[`disconn_cb`](#structnetopt__disconnect__request_1abeb8f881a7cf173d7c6bae6a6757ea52) 

On disconnect callback.

