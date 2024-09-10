---
title: api-net_loramac_conf.md
description: api-net_loramac_conf.md
---
# group `net_loramac_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_LORAMAC_DEV_EUI_DEFAULT`](#group__net__loramac__conf_1gabc475c44156ae430789e2665f507064c)            | Default device EUI.
`define `[`CONFIG_LORAMAC_JOIN_EUI_DEFAULT`](#group__net__loramac__conf_1ga78b3c35589e1ba55e8be415a5e10e4b8)            | Default join EUI.
`define `[`CONFIG_LORAMAC_APP_EUI_DEFAULT`](#group__net__loramac__conf_1ga7eeb673016f3c66056f4ecd5de9aa9fa)            | Default application EUI.
`define `[`CONFIG_LORAMAC_APP_KEY_DEFAULT`](#group__net__loramac__conf_1ga5cab8da837a7b23b0259e1e37541e77b)            | Default application key.
`define `[`CONFIG_LORAMAC_NWK_KEY_DEFAULT`](#group__net__loramac__conf_1ga9d038d730341699646b8598ecb1a700d)            | Default network key.
`define `[`CONFIG_LORAMAC_APP_SKEY_DEFAULT`](#group__net__loramac__conf_1ga4c3291dd52748eaeef4c5f67149fed55)            | Default application session key.
`define `[`CONFIG_LORAMAC_NWK_SKEY_DEFAULT`](#group__net__loramac__conf_1gafd3289b0c981f618c0381a39cfae07fe)            | Default network session key.
`define `[`CONFIG_LORAMAC_FNWKSINT_KEY_DEFAULT`](#group__net__loramac__conf_1ga30643a945a20fbfc2257e5c5d2bcdced)            | Default network session integrity key.
`define `[`CONFIG_LORAMAC_SNWKSINT_KEY_DEFAULT`](#group__net__loramac__conf_1ga5ec7eb6f0f6ffac2d39ac3a00e99aa5f)            | Default serving network session integrity key.
`define `[`CONFIG_LORAMAC_NWKSENC_KEY_DEFAULT`](#group__net__loramac__conf_1gacb9f9da3d4f788137ffdb3bcc20be59f)            | Default network session encryption key.
`define `[`CONFIG_LORAMAC_DEV_ADDR_DEFAULT`](#group__net__loramac__conf_1ga690bade846479851239e80717d5caf48)            | Default device address.
`define `[`CONFIG_LORAMAC_REGION_EU_868`](#group__net__loramac__conf_1gaa78b549483a47fc2d4c1c1e129dfa0ee)            | Default LoRaWAN region.
`define `[`CONFIG_LORAMAC_DEFAULT_DEVICE_CLASS`](#group__net__loramac__conf_1gac6fa33c13bef07c10fc52ecbd2c0fe69)            | Default device class (A, B or C)
`define `[`CONFIG_LORAMAC_DEFAULT_NETID`](#group__net__loramac__conf_1ga947136017f78859317c81a086d9d8faa)            | Default NetID (only valid with ABP join procedure)
`define `[`CONFIG_LORAMAC_DEFAULT_PRIVATE_NETWORK`](#group__net__loramac__conf_1gacaa5db4614bfe5baed80428d2021810a)            | Toggle network type (public or private)
`define `[`CONFIG_LORAMAC_DEFAULT_DR`](#group__net__loramac__conf_1gaec7f05f95183e59ad5ed1f8e42a2f296)            | Default datarate index.
`define `[`CONFIG_LORAMAC_DEFAULT_TX_POWER`](#group__net__loramac__conf_1ga9bd016019d87a95e2bd513f10d92ae7e)            | Default MAC TX power index.
`define `[`CONFIG_LORAMAC_DEFAULT_TX_PORT`](#group__net__loramac__conf_1gaa543b80cc152ce69ca68e1a108e331b7)            | Default MAC TX port (from 1 to 223)
`define `[`CONFIG_LORAMAC_DEFAULT_TX_MODE`](#group__net__loramac__conf_1ga9f29fa02d33dc83ae80cf8c8ddfba345)            | Default MAC TX mode (confirmable or unconfirmable)
`define `[`CONFIG_LORAMAC_DEFAULT_REDUNDANCY`](#group__net__loramac__conf_1ga7164dac42b0090250e2e5e5c0d87933b)            | Default redundancy for unconfirmed uplink.
`define `[`CONFIG_LORAMAC_DEFAULT_ADR`](#group__net__loramac__conf_1ga68332ab9f95781034d131a9c876b0f31)            | Enable/disable adaptive datarate state.
`define `[`CONFIG_LORAMAC_DEFAULT_RETX`](#group__net__loramac__conf_1ga41a74c1a48b5fe51bfcb6aecaf775c7e)            | Default uplink retransmission.
`define `[`CONFIG_LORAMAC_DEFAULT_LINKCHK`](#group__net__loramac__conf_1gaa9517d0713fbeb5cc54ec6a23624a53e)            | Default link check interval (in seconds)
`define `[`CONFIG_LORAMAC_DEFAULT_RX1_DELAY`](#group__net__loramac__conf_1ga64607ca40fd21173d3291cb91a268e05)            | Default first RX window delay (in ms)
`define `[`CONFIG_LORAMAC_DEFAULT_JOIN_PROCEDURE`](#group__net__loramac__conf_1ga6f904e7e0241db015a409e46762353cc)            | Default second RX (RX2) window datarate index.
`define `[`CONFIG_LORAMAC_DEFAULT_JOIN_DELAY1`](#group__net__loramac__conf_1ga9e0a79f7e253880695a8e7b59b6e1425)            | Default LoRaMAC join accept delay 1 (in seconds)
`define `[`CONFIG_LORAMAC_DEFAULT_JOIN_DELAY2`](#group__net__loramac__conf_1ga220428c7412403e395dbb08fd1e92281)            | Default LoRaMAC join accept delay 2.
`define `[`CONFIG_LORAMAC_DEFAULT_MAX_FCNT_GAP`](#group__net__loramac__conf_1ga146a775839b61d07280e280d53feb48e)            | Default max FCNT gap.
`define `[`CONFIG_LORAMAC_DEFAULT_SYSTEM_MAX_RX_ERROR`](#group__net__loramac__conf_1ga563b726d858f370056ecaeba2938dae5)            | Default maximum system overall timing error.
`define `[`CONFIG_LORAMAC_DEFAULT_MIN_RX_SYMBOLS`](#group__net__loramac__conf_1ga158b536ab836ca81a530757c459190e2)            | Default minimum RX symbols to detect a frame.

## Members

#### `define `[`CONFIG_LORAMAC_DEV_EUI_DEFAULT`](#group__net__loramac__conf_1gabc475c44156ae430789e2665f507064c) 

Default device EUI.

8 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_JOIN_EUI_DEFAULT`](#group__net__loramac__conf_1ga78b3c35589e1ba55e8be415a5e10e4b8) 

Default join EUI.

8 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_APP_EUI_DEFAULT`](#group__net__loramac__conf_1ga7eeb673016f3c66056f4ecd5de9aa9fa) 

Default application EUI.

8 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_APP_KEY_DEFAULT`](#group__net__loramac__conf_1ga5cab8da837a7b23b0259e1e37541e77b) 

Default application key.

16 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_NWK_KEY_DEFAULT`](#group__net__loramac__conf_1ga9d038d730341699646b8598ecb1a700d) 

Default network key.

16 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_APP_SKEY_DEFAULT`](#group__net__loramac__conf_1ga4c3291dd52748eaeef4c5f67149fed55) 

Default application session key.

16 bytes key, only required for ABP join procedure type

#### `define `[`CONFIG_LORAMAC_NWK_SKEY_DEFAULT`](#group__net__loramac__conf_1gafd3289b0c981f618c0381a39cfae07fe) 

Default network session key.

16 bytes key, only required for ABP join procedure type.

#### `define `[`CONFIG_LORAMAC_FNWKSINT_KEY_DEFAULT`](#group__net__loramac__conf_1ga30643a945a20fbfc2257e5c5d2bcdced) 

Default network session integrity key.

16 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_SNWKSINT_KEY_DEFAULT`](#group__net__loramac__conf_1ga5ec7eb6f0f6ffac2d39ac3a00e99aa5f) 

Default serving network session integrity key.

16 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_NWKSENC_KEY_DEFAULT`](#group__net__loramac__conf_1gacb9f9da3d4f788137ffdb3bcc20be59f) 

Default network session encryption key.

16 bytes key, required for join procedure

#### `define `[`CONFIG_LORAMAC_DEV_ADDR_DEFAULT`](#group__net__loramac__conf_1ga690bade846479851239e80717d5caf48) 

Default device address.

#### `define `[`CONFIG_LORAMAC_REGION_EU_868`](#group__net__loramac__conf_1gaa78b549483a47fc2d4c1c1e129dfa0ee) 

Default LoRaWAN region.

#### `define `[`CONFIG_LORAMAC_DEFAULT_DEVICE_CLASS`](#group__net__loramac__conf_1gac6fa33c13bef07c10fc52ecbd2c0fe69) 

Default device class (A, B or C)

Configure the class of device. LoRaWAN supports three classes of operation for end nodes namely Class A, B and C. All LoRaWAN devices are expected to implement Class A, whereas Class B and Class C can be considered as extensions to the specification of Class A devices.

**See also**: [LoRaWAN Classes by TTN](https://www.thethingsnetwork.org/docs/lorawan/classes.html)

GNRC LoRaWAN only supports Class A

#### `define `[`CONFIG_LORAMAC_DEFAULT_NETID`](#group__net__loramac__conf_1ga947136017f78859317c81a086d9d8faa) 

Default NetID (only valid with ABP join procedure)

NETID is used by networks for assigning network-specific addresses to their end-devices (i.e., DevAddr) so that uplink frames sent by those devices even when they are roaming outside their home network can be forwarded to their home network.

#### `define `[`CONFIG_LORAMAC_DEFAULT_PRIVATE_NETWORK`](#group__net__loramac__conf_1gacaa5db4614bfe5baed80428d2021810a) 

Toggle network type (public or private)

Set "1" to enable private network, set "0" to enable public network. This configuration sets the sync word for LoRaWAN communication. This should be in concordance with the gateway configuration. Public networks use `0x34` while private networks use `0x12` as sync word.

#### `define `[`CONFIG_LORAMAC_DEFAULT_DR`](#group__net__loramac__conf_1gaec7f05f95183e59ad5ed1f8e42a2f296) 

Default datarate index.

Data rate combines two aspects, Bandwidth (BW) and Spreading Factor (SF). BW depends on the region while SF contributes to the dwell time in any given band which is limited by region. DR hence signifies difference combination on BW and SF for different regions. Refer LoRaWAN 1.0.3 Regional Parameters for more information.

#### `define `[`CONFIG_LORAMAC_DEFAULT_TX_POWER`](#group__net__loramac__conf_1ga9bd016019d87a95e2bd513f10d92ae7e) 

Default MAC TX power index.

TXPower index indicates power levels relative to the max EIRP level of the end-device. Refer LoRaWAN 1.0.3 Regional Parameters for more information.

#### `define `[`CONFIG_LORAMAC_DEFAULT_TX_PORT`](#group__net__loramac__conf_1gaa543b80cc152ce69ca68e1a108e331b7) 

Default MAC TX port (from 1 to 223)

The TX port denotes the port field `FPort` in the payload and is commonly used on the destination side (Application Server) to distinguish different payload formats. For example it can be used to identify different sensor types/values from the same end-node and hence different payload formats can be assigned to the different values based on value of port.

#### `define `[`CONFIG_LORAMAC_DEFAULT_TX_MODE`](#group__net__loramac__conf_1ga9f29fa02d33dc83ae80cf8c8ddfba345) 

Default MAC TX mode (confirmable or unconfirmable)

A confirmed uplink will expect an acknowledgment from the network server; otherwise, the message will be retransmitted by the number indicated by [CONFIG_LORAMAC_DEFAULT_RETX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac__conf_1ga41a74c1a48b5fe51bfcb6aecaf775c7e) , whereas an unconfirmed message will not expect any acknowledgment back from the network server.

#### `define `[`CONFIG_LORAMAC_DEFAULT_REDUNDANCY`](#group__net__loramac__conf_1ga7164dac42b0090250e2e5e5c0d87933b) 

Default redundancy for unconfirmed uplink.

This corresponds to the number of unconfirmed uplink retransmissions when using ADR. This configuration does not affect confirmed uplinks. By default, uplinks are sent without retransmissions (this means, the device sends only one uplink packet)

This value MUST NOT be greater than 14, since the LinkADRCommand it's already limited by a 4 bit value (therefore, 15 uplink transmissions)

#### `define `[`CONFIG_LORAMAC_DEFAULT_ADR`](#group__net__loramac__conf_1ga68332ab9f95781034d131a9c876b0f31) 

Enable/disable adaptive datarate state.

If enabled the end node will inform the network server about the status of ADR using the ADR field in uplink data packet. The network server will then optimize the data rate and the transmission power of the end node based on the information collected from the network.

#### `define `[`CONFIG_LORAMAC_DEFAULT_RETX`](#group__net__loramac__conf_1ga41a74c1a48b5fe51bfcb6aecaf775c7e) 

Default uplink retransmission.

Maximum number of retransmissions to be used for a confirmed uplink packet, if no downlink acknowledgment is received from the network.

#### `define `[`CONFIG_LORAMAC_DEFAULT_LINKCHK`](#group__net__loramac__conf_1gaa9517d0713fbeb5cc54ec6a23624a53e) 

Default link check interval (in seconds)

0 means the link check process is disabled. The link check process is used by an end-device to validate its connectivity with the network. The frame has no payload. When a `LinkCheckReq` is received by the network server via one or multiple gateways, it responds with a `LinkCheckAns` MAC command.

#### `define `[`CONFIG_LORAMAC_DEFAULT_RX1_DELAY`](#group__net__loramac__conf_1ga64607ca40fd21173d3291cb91a268e05) 

Default first RX window delay (in ms)

This configuration specifies the delay in seconds to open the RX1 window after the end of uplink modulation on the end-node.

#### `define `[`CONFIG_LORAMAC_DEFAULT_JOIN_PROCEDURE`](#group__net__loramac__conf_1ga6f904e7e0241db015a409e46762353cc) 

Default second RX (RX2) window datarate index.

This may be changed only if the network server can be configured with the same datarate.

Default second RX (RX2) window frequency (in Hz)

Default LoRaMAC join procedure

There are two options, Over The Air Activation (OTAA) results in device sending join request to the network whereas in the case of Activation By Personalization (ABP) the user enters the activation keys manually. OTAA is the preferred and most secure way to connect to a LoRaWAN network. For quick testing ABP is preferred as the device can transmit right away without waiting for the network to provision the keys.

#### `define `[`CONFIG_LORAMAC_DEFAULT_JOIN_DELAY1`](#group__net__loramac__conf_1ga9e0a79f7e253880695a8e7b59b6e1425) 

Default LoRaMAC join accept delay 1 (in seconds)

Maximum wait time in end node to receive the `join-accept` message sent by the network in the first receive window. This is similar to the operation of RX1 window.

#### `define `[`CONFIG_LORAMAC_DEFAULT_JOIN_DELAY2`](#group__net__loramac__conf_1ga220428c7412403e395dbb08fd1e92281) 

Default LoRaMAC join accept delay 2.

Maximum wait time in end node to receive the `join-accept` message sent by the network in the second receive window. This is similar to the operation of RX2 window.

#### `define `[`CONFIG_LORAMAC_DEFAULT_MAX_FCNT_GAP`](#group__net__loramac__conf_1ga146a775839b61d07280e280d53feb48e) 

Default max FCNT gap.

Frame counter deviation is the difference between the frame counter values transmitted by the End Node and the value stored in [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Server (NS).

#### `define `[`CONFIG_LORAMAC_DEFAULT_SYSTEM_MAX_RX_ERROR`](#group__net__loramac__conf_1ga563b726d858f370056ecaeba2938dae5) 

Default maximum system overall timing error.

This configuration is used to increase the RX window to account for timer drift. This may be decreased if the system clock is accurate, for eg: if the system clock is from a TCXO.

#### `define `[`CONFIG_LORAMAC_DEFAULT_MIN_RX_SYMBOLS`](#group__net__loramac__conf_1ga158b536ab836ca81a530757c459190e2) 

Default minimum RX symbols to detect a frame.

This configuration is used to arrive at `T_RX_late` which is used in RX window calculation. This may be increased to account for inaccuracies in system timer. Refer SX1276_settings_for_LoRaWAN_v2p2.pdf (AN1200.24) from Semtech for more information.

