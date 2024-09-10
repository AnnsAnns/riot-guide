---
title: api-drivers_rn2xx3.md
description: api-drivers_rn2xx3.md
---
# group `drivers_rn2xx3` 

High-level driver for the RN2483/RN2903 LoRa modules.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`RN2XX3_MAX_BUF`](#group__drivers__rn2xx3_1ga3e5c9a257f53cf68353744596f487943)            | Maximum length of an exchanged messages with commands.
`define `[`RN2XX3_RX_MAX_BUF`](#group__drivers__rn2xx3_1gaad474822fe67bdd6026cb799756a31c2)            | Maximum length of an RX message.
`define `[`RN2XX3_REPLY_DELAY_TIMEOUT`](#group__drivers__rn2xx3_1gace96debd6cf5f4e9911f69392b60f233)            | Maximum delay in second to receive a reply from server.
`define `[`RN2XX3_SLEEP_MIN`](#group__drivers__rn2xx3_1ga3870a425f0068b0bd19b74030616058a)            | Minimum sleep duration (in ms)
`enum `[`@243`](#group__drivers__rn2xx3_1ga82f2c6e4d47f62f6b65c5887eb096fd5)            | Command responses and server replies status codes.
`enum `[`@244`](#group__drivers__rn2xx3_1ga25f1c885c7f5230ea4c9bc48dde88fe1)            | Internal states of the device.
`public void `[`rn2xx3_setup`](#group__drivers__rn2xx3_1gae3425eaa5c29f0ac9fdf24aeca29da1d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const `[`rn2xx3_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__params__t)` * params)`            | Prepares the given RN2XX3 device.
`public int `[`rn2xx3_init`](#group__drivers__rn2xx3_1gafd3fbeea4994c79f4f59f1f43fece6eb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Initializes the RN2XX3 device.
`public int `[`rn2xx3_sys_reset`](#group__drivers__rn2xx3_1ga9456dcfaa9d53cde59222786ab182e04)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Restarts the RN2XX2 device.
`public int `[`rn2xx3_sys_factory_reset`](#group__drivers__rn2xx3_1ga8534d598e2a5f8864a37370072e4003d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Performs a factory reset of the module.
`public int `[`rn2xx3_sys_sleep`](#group__drivers__rn2xx3_1ga2c4e11faa940231be20cc835753d431b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Puts the RN2XX2 device in sleep mode.
`public int `[`rn2xx3_mac_init`](#group__drivers__rn2xx3_1gac55ddb973f8c7fd2693f6e3775a3fef2)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Initializes the RN2XX3 device MAC layer.
`public int `[`rn2xx3_write_cmd`](#group__drivers__rn2xx3_1ga3ae0530e361709ba4bd29b204d846578)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Writes a command to the RN2XX3 device.
`public int `[`rn2xx3_write_cmd_no_wait`](#group__drivers__rn2xx3_1gaac58b133a00a554c9b92471649bc20ab)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Writes a command to the RN2XX3 device but don't wait for timeout or response.
`public int `[`rn2xx3_wait_response`](#group__drivers__rn2xx3_1ga0d6905ac400d30a00f5e7864c003e626)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Waits for a response to a command from the device.
`public int `[`rn2xx3_wait_reply`](#group__drivers__rn2xx3_1ga8eae183d6f00868b00f6ddbb03ec4bcb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t timeout)`            | Waits for a reply from the LoRaWAN network.
`public int `[`rn2xx3_mac_tx`](#group__drivers__rn2xx3_1ga5a3f665f2f28ccc9e62e397d404bd5e0)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * payload,uint8_t payload_len)`            | Sends data to LoRaWAN server.
`public int `[`rn2xx3_mac_join_network`](#group__drivers__rn2xx3_1gaf96bd68d657d16076069736c7d46ecb4)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_join_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga0ec6851e0578ec1270e16e3faa54f4cd)` mode)`            | Starts network activation procedure.
`public int `[`rn2xx3_mac_save`](#group__drivers__rn2xx3_1ga2a6f6ae7871f0dce14c775676b1f3748)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Saves current LoRaMAC configuration to internal EEPROM.
`public void `[`rn2xx3_mac_get_deveui`](#group__drivers__rn2xx3_1gac88f506a84a786f74486e71a0cbab6e2)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * eui)`            | Gets the rn2xx3 LoRaMAC device EUI.
`public void `[`rn2xx3_mac_set_deveui`](#group__drivers__rn2xx3_1ga1ae65b2d5d131da3644f048e488825d4)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * eui)`            | Sets the rn2xx3 LoRaMAC device EUI.
`public void `[`rn2xx3_mac_get_appeui`](#group__drivers__rn2xx3_1gacf89c15cacb3e194f44398e0c0be696a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * eui)`            | Gets the rn2xx3 LoRaMAC application EUI.
`public void `[`rn2xx3_mac_set_appeui`](#group__drivers__rn2xx3_1gacc50e8c05b909333258d3f7d529b3c03)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * eui)`            | Sets the rn2xx3 LoRaMAC application EUI.
`public void `[`rn2xx3_mac_set_appkey`](#group__drivers__rn2xx3_1ga6e4f1c1c915037d839e8c669785b4f1f)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * key)`            | Sets the rn2xx3 LoRaMAC application key.
`public void `[`rn2xx3_mac_set_appskey`](#group__drivers__rn2xx3_1ga3ec8fd9b28a034e3570d8f389475412d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * key)`            | Sets the rn2xx3 LoRaMAC application session key.
`public void `[`rn2xx3_mac_set_nwkskey`](#group__drivers__rn2xx3_1ga167adece764ab7ace53e08953a33192b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * key)`            | Sets the rn2xx3 LoRaMAC network session key.
`public void `[`rn2xx3_mac_get_devaddr`](#group__drivers__rn2xx3_1ga70bf867ac1598fd65fcb934645196347)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * addr)`            | Gets the rn2xx3 LoRaMAC device address.
`public void `[`rn2xx3_mac_set_devaddr`](#group__drivers__rn2xx3_1gae6d3e375cfc5af168108f28215e538b0)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * addr)`            | Sets the rn2xx3 LoRaMAC device address.
`public `[`loramac_tx_pwr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1gaefcaeb98180176fc844a5cd02689c400)` `[`rn2xx3_mac_get_tx_power`](#group__drivers__rn2xx3_1gaa4f8c24ff620f69a1f38b91caa4fbd4f)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC TX radio power index.
`public void `[`rn2xx3_mac_set_tx_power`](#group__drivers__rn2xx3_1ga041fb21483852b194d473d8d41b92ba9)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_tx_pwr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1gaefcaeb98180176fc844a5cd02689c400)` power)`            | Sets the rn2xx3 LoRaMAC transmission power index.
`public `[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` `[`rn2xx3_mac_get_dr`](#group__drivers__rn2xx3_1gae7d325f4c4472a88a0ff603f4e66b1ee)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC datarate.
`public void `[`rn2xx3_mac_set_dr`](#group__drivers__rn2xx3_1gaf2ffb068cd860702d3a7959ddc0f9b5d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` dr)`            | Sets the rn2xx3 LoRaMAC datarate.
`public uint16_t `[`rn2xx3_mac_get_band`](#group__drivers__rn2xx3_1gaec8e7758dcf0ff72fdedf982e99b7d62)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC frequency band in operation.
`public bool `[`rn2xx3_mac_get_adr`](#group__drivers__rn2xx3_1ga841f63e598b8cc18c4a230f6ec49b821)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Checks if the rn2xx3 LoRaMAC adaptive datarate is enabled/disabled.
`public void `[`rn2xx3_mac_set_adr`](#group__drivers__rn2xx3_1gad73733dae1fcd3c87056e089f39b44cb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,bool adr)`            | Enables/disables the rn2xx3 LoRaMAC adaptive datarate.
`public void `[`rn2xx3_mac_set_battery`](#group__drivers__rn2xx3_1ga51bb72eab91bdee9ab0f63b52813e781)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t battery)`            | Sets the rn2xx3 battery level measured by the end device.
`public uint8_t `[`rn2xx3_mac_get_retx`](#group__drivers__rn2xx3_1ga66332c3af9dd7863ee2311502311b168)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC uplink retransmission retries number.
`public void `[`rn2xx3_mac_set_retx`](#group__drivers__rn2xx3_1ga2cc8fcaa87d85f2a1886802645d1c630)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t retx)`            | Sets the rn2xx3 LoRaMAC uplink retransmission retries number.
`public void `[`rn2xx3_mac_set_linkchk_interval`](#group__drivers__rn2xx3_1gaec67f7c1e3794ffe981ef8b0359c4ddb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint16_t linkchk)`            | Sets the rn2xx3 LoRaMAC link check interval (in seconds)
`public uint16_t `[`rn2xx3_mac_get_rx1_delay`](#group__drivers__rn2xx3_1ga11a48932bad4fd9c197717cd6f3648cc)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC interval delay before the first reception window (in ms)
`public void `[`rn2xx3_mac_set_rx1_delay`](#group__drivers__rn2xx3_1ga159563f787104aa20a88fc5292590133)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint16_t rx1)`            | Sets the rn2xx3 LoRaMAC interval delay before the first reception window (in ms)
`public uint16_t `[`rn2xx3_mac_get_rx2_delay`](#group__drivers__rn2xx3_1ga6f808d669891e962b2bae2eb9a97cf8b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC interval delay before the second reception window (in ms)
`public bool `[`rn2xx3_mac_get_ar`](#group__drivers__rn2xx3_1ga902ecbee47d61dc5c73fea7c8e12050a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Checks the rn2xx3 LoRaMAC automatic reply state.
`public void `[`rn2xx3_mac_set_ar`](#group__drivers__rn2xx3_1gacdf1affb4d7f0c032846567d48cfad6b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,bool ar)`            | Enables/disables LoRaMAC rn2xx3 MAC automatic reply state.
`public `[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` `[`rn2xx3_mac_get_rx2_dr`](#group__drivers__rn2xx3_1ga65ecda6d8fae9dba8048d61aabbb04ce)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC datarate used for second receive window.
`public void `[`rn2xx3_mac_set_rx2_dr`](#group__drivers__rn2xx3_1gade4ba80bd5d4274edf2cbbe1618bc30a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` dr)`            | Sets the rn2xx3 LoRaMAC datarate used for second receive window.
`public uint32_t `[`rn2xx3_mac_get_rx2_freq`](#group__drivers__rn2xx3_1ga628b8641be4aed2ac03a6912d24e85ef)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC frequency used during second receive window (in Hz)
`public void `[`rn2xx3_mac_set_rx2_freq`](#group__drivers__rn2xx3_1ga9091b987f715ec64223225326c7dcd44)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint32_t freq)`            | Sets the rn2xx3 LoRaMAC frequency used during second receive window (in Hz)
`public uint8_t `[`rn2xx3_mac_get_tx_port`](#group__drivers__rn2xx3_1gae1d88431dcab3234a0de6bf65d6c9f8a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC TX port.
`public void `[`rn2xx3_mac_set_tx_port`](#group__drivers__rn2xx3_1gabd033bfc113b0614b050bcef213fe932)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t port)`            | Sets the rn2xx3 LoRaMAC TX port.
`public `[`loramac_tx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga3c94d1636de66b1617aa3433ff9127ee)` `[`rn2xx3_mac_get_tx_mode`](#group__drivers__rn2xx3_1gaa6174e19f1451469d292187ff4c73d44)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Gets the rn2xx3 LoRaMAC TX mode.
`public void `[`rn2xx3_mac_set_tx_mode`](#group__drivers__rn2xx3_1ga2f7e3ccb7b4184af7dbfb1098df50a09)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_tx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga3c94d1636de66b1617aa3433ff9127ee)` mode)`            | Sets the rn2xx3 LoRaMAC TX mode.
`public uint8_t `[`rn2xx3_mac_get_rx_port`](#group__drivers__rn2xx3_1gaa117a2c419afef8eedd205d03f7d5e00)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)`            | Parses the response buffer to get the LoRaWAN RX port.
`public void `[`rn2xx3_sys_set_sleep_duration`](#group__drivers__rn2xx3_1gada6e2f2f212a0844d055e7229d427323)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint32_t sleep)`            | Sets the rn2xx3 sleep mode duration (in ms)
`struct `[`loramac_settings_t`](#structloramac__settings__t) | LoRaMAC communication settings.
`struct `[`rn2xx3_params_t`](#structrn2xx3__params__t) | Configuration parameters for RN2483/RN2903 devices.
`struct `[`rn2xx3_t`](#structrn2xx3__t) | RN2483/RN2903 device descriptor.

## Members

#### `define `[`RN2XX3_MAX_BUF`](#group__drivers__rn2xx3_1ga3e5c9a257f53cf68353744596f487943) 

Maximum length of an exchanged messages with commands.

#### `define `[`RN2XX3_RX_MAX_BUF`](#group__drivers__rn2xx3_1gaad474822fe67bdd6026cb799756a31c2) 

Maximum length of an RX message.

LoRaMAC payload can be up to 250 bytes.

#### `define `[`RN2XX3_REPLY_DELAY_TIMEOUT`](#group__drivers__rn2xx3_1gace96debd6cf5f4e9911f69392b60f233) 

Maximum delay in second to receive a reply from server.

#### `define `[`RN2XX3_SLEEP_MIN`](#group__drivers__rn2xx3_1ga3870a425f0068b0bd19b74030616058a) 

Minimum sleep duration (in ms)

#### `enum `[`@243`](#group__drivers__rn2xx3_1ga82f2c6e4d47f62f6b65c5887eb096fd5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
RN2XX3_OK            | Command is valid.
RN2XX3_DATA            | Command returned data.
RN2XX3_TIMEOUT            | Command timeout.
RN2XX3_ERR_MAC_INIT            | Device mac initialization failed.
RN2XX3_ERR_INVALID_PARAM            | Wrong command given.
RN2XX3_ERR_NOT_JOINED            | [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) is not joined.
RN2XX3_ERR_NO_FREE_CH            | All channels are busy.
RN2XX3_ERR_SILENT            | Device is in Silent Immediately state.
RN2XX3_ERR_FR_CNT_REJOIN_NEEDED            | Frame counter rolled over.
RN2XX3_ERR_BUSY            | MAC is not in Idle state.
RN2XX3_ERR_MAC_PAUSED            | MAC was paused.
RN2XX3_ERR_INVALID_DATA_LENGTH            | Wrong payload given.
RN2XX3_ERR_KEYS_NOT_INIT            | Keys not configured ("mac join" command)
RN2XX3_ERR_SLEEP_MODE            | Failure because device is in sleep mode.
RN2XX3_REPLY_TX_MAC_OK            | MAC transmission successful.
RN2XX3_REPLY_TX_MAC_ERR            | MAC transmission failed.
RN2XX3_REPLY_TX_INVALID_DATA_LEN            | Application payload too large.
RN2XX3_REPLY_TX_MAC_RX            | Data received from server.
RN2XX3_REPLY_JOIN_ACCEPTED            | Join procedure successful.
RN2XX3_REPLY_JOIN_DENIED            | Join procedure failed.
RN2XX3_REPLY_TIMEOUT            | No MAC reply received from server.
RN2XX3_REPLY_OTHER            | Unknown reply.

Command responses and server replies status codes.

#### `enum `[`@244`](#group__drivers__rn2xx3_1ga25f1c885c7f5230ea4c9bc48dde88fe1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
RN2XX3_INT_STATE_RESET            | the device is being reset or initialized
RN2XX3_INT_STATE_CMD            | waiting command response
RN2XX3_INT_STATE_IDLE            | waiting for incoming commands
RN2XX3_INT_STATE_SLEEP            | sleep mode
RN2XX3_INT_STATE_MAC_JOIN            | waiting for mac join procedure reply
RN2XX3_INT_STATE_MAC_TX            | waiting for mac tx reply
RN2XX3_INT_STATE_MAC_RX_PORT            | waiting for mac rx port
RN2XX3_INT_STATE_MAC_RX_MESSAGE            | waiting for mac rx message

Internal states of the device.

#### `public void `[`rn2xx3_setup`](#group__drivers__rn2xx3_1gae3425eaa5c29f0ac9fdf24aeca29da1d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const `[`rn2xx3_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__params__t)` * params)` 

Prepares the given RN2XX3 device.

#### Parameters
* `dev` RN2XX3 device to initialize 

* `params` parameters for device initialization

#### `public int `[`rn2xx3_init`](#group__drivers__rn2xx3_1gafd3fbeea4994c79f4f59f1f43fece6eb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Initializes the RN2XX3 device.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
-ENXIO if UART initialization failed 

#### Returns
RN2XX3_TIMEOUT if UART communication failed

#### `public int `[`rn2xx3_sys_reset`](#group__drivers__rn2xx3_1ga9456dcfaa9d53cde59222786ab182e04)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Restarts the RN2XX2 device.

After calling this function, dev->resp_buf contains the module name and version string.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
RN2XX3_TIMEOUT if UART communication failed

#### `public int `[`rn2xx3_sys_factory_reset`](#group__drivers__rn2xx3_1ga8534d598e2a5f8864a37370072e4003d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Performs a factory reset of the module.

The configuration data and user EEPPROM are reinitialized to factory default values and the module reboots

After calling this function, dev->resp_buf contains the module name and version string.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
RN2XX3_TIMEOUT if UART communication failed

#### `public int `[`rn2xx3_sys_sleep`](#group__drivers__rn2xx3_1ga2c4e11faa940231be20cc835753d431b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Puts the RN2XX2 device in sleep mode.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
RN2XX3_TIMEOUT if UART communication failed

#### `public int `[`rn2xx3_mac_init`](#group__drivers__rn2xx3_1gac55ddb973f8c7fd2693f6e3775a3fef2)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Initializes the RN2XX3 device MAC layer.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
RN2XX3_TIMEOUT if UART communication failed

#### `public int `[`rn2xx3_write_cmd`](#group__drivers__rn2xx3_1ga3ae0530e361709ba4bd29b204d846578)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Writes a command to the RN2XX3 device.

The module will immediately reply with a meaningful message if the command is valid or not.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
RN2XX3_TIMEOUT if no response is received from the module 

#### Returns
RN2XX3_ERR_INVALID_PARAM if command is invalid 

#### Returns
RN2XX3_ERR_NOT_JOINED if network is not joined 

#### Returns
RN2XX3_ERR_NO_FREE_CH if no free channel 

#### Returns
RN2XX3_ERR_SILENT if device is in Silent state 

#### Returns
RN2XX3_ERR_FR_CNT_REJOIN_NEEDED if frame counter rolled over 

#### Returns
RN2XX3_ERR_BUSY if MAC is not in Idle state 

#### Returns
RN2XX3_ERR_INVALID_DATA_LENGTH if payload is too large 

#### Returns
RN2XX3_ERR_KEYS_NOT_INIT if keys are not configured

#### `public int `[`rn2xx3_write_cmd_no_wait`](#group__drivers__rn2xx3_1gaac58b133a00a554c9b92471649bc20ab)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Writes a command to the RN2XX3 device but don't wait for timeout or response.

The response can be checked in the `dev->resp_buf` buffer after a small delay (for example 1ms).

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success

#### `public int `[`rn2xx3_wait_response`](#group__drivers__rn2xx3_1ga0d6905ac400d30a00f5e7864c003e626)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Waits for a response to a command from the device.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK on success 

#### Returns
RN2XX3_TIMEOUT if no response is received from the module 

#### Returns
RN2XX3_ERR_INVALID_PARAM if command is invalid 

#### Returns
RN2XX3_ERR_NOT_JOINED if network is not joined 

#### Returns
RN2XX3_ERR_NO_FREE_CH if no free channel 

#### Returns
RN2XX3_ERR_SILENT if device is in Silent state 

#### Returns
RN2XX3_ERR_FR_CNT_REJOIN_NEEDED if frame counter rolled over 

#### Returns
RN2XX3_ERR_BUSY if MAC is not in Idle state 

#### Returns
RN2XX3_ERR_INVALID_DATA_LENGTH if payload is too large 

#### Returns
RN2XX3_ERR_KEYS_NOT_INIT if keys are not configured

#### `public int `[`rn2xx3_wait_reply`](#group__drivers__rn2xx3_1ga8eae183d6f00868b00f6ddbb03ec4bcb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t timeout)` 

Waits for a reply from the LoRaWAN network.

#### Parameters
* `dev` LoRaBee device descriptor 

* `timeout` Reply wait timeout in seconds

#### Returns
RN2XX3_REPLY_TIMEOUT when no MAC reply is received from server 

#### Returns
RN2XX3_REPLY_TX_MAC_OK when MAC transmission succeeded 

#### Returns
RN2XX3_REPLY_TX_MAC_ERR when MAC transmission failed 

#### Returns
RN2XX3_REPLY_TX_MAC_RX when received downlink data from server 

#### Returns
RN2XX3_REPLY_TX_INVALID_DATA_LEN when Application payload is too large 

#### Returns
RN2XX3_REPLY_JOIN_ACCEPTED when the join procedure succeeded 

#### Returns
RN2XX3_REPLY_JOIN_DENIED when the join procedure failed 

#### Returns
RN2XX3_REPLY_OTHER when an unknown reply is received

#### `public int `[`rn2xx3_mac_tx`](#group__drivers__rn2xx3_1ga5a3f665f2f28ccc9e62e397d404bd5e0)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * payload,uint8_t payload_len)` 

Sends data to LoRaWAN server.

#### Parameters
* `dev` RN2XX3 device descriptor 

* `payload` Payload to transmit 

* `payload_len` Payload length to transmit

#### Returns
RN2XX3_ERR_KEYS_NOT_INIT if the loramac params are not configured 

#### Returns
RN2XX3_ERR_NO_FREE_CH if channels are busy 

#### Returns
RN2XX3_ERR_SILENT if device is in Silent state 

#### Returns
RN2XX3_ERR_BUSY if MAC layer is in idle state 

#### Returns
RN2XX3_ERR_MAC_PAUSED if MAC laid is paused 

#### Returns
RN2XX3_REPLY_TX_INVALID_DATA_LEN if payload is too large 

#### Returns
RN2XX3_REPLY_TX_MAC_ERR when MAC transmission failed 

#### Returns
RN2XX3_REPLY_TX_MAC_RX when received downlink data from server 

#### Returns
RN2XX3_REPLY_TX_MAC_OK when MAC transmission succeeded

#### `public int `[`rn2xx3_mac_join_network`](#group__drivers__rn2xx3_1gaf96bd68d657d16076069736c7d46ecb4)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_join_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga0ec6851e0578ec1270e16e3faa54f4cd)` mode)` 

Starts network activation procedure.

#### Parameters
* `dev` RN2XX3 device descriptor 

* `mode` Activation procedure type

#### Returns
RN2XX3_ERR_KEYS_NOT_INIT if the loramac params are not configured 

#### Returns
RN2XX3_ERR_NO_FREE_CH if channels are busy 

#### Returns
RN2XX3_ERR_SILENT if device is in Silent state 

#### Returns
RN2XX3_ERR_BUSY if MAC layer is in idle state 

#### Returns
RN2XX3_ERR_MAC_PAUSED if MAC layer is paused 

#### Returns
RN2XX3_REPLY_JOIN_ACCEPTED when the join procedure succeeded 

#### Returns
RN2XX3_REPLY_JOIN_DENIED when the join procedure failed

#### `public int `[`rn2xx3_mac_save`](#group__drivers__rn2xx3_1ga2a6f6ae7871f0dce14c775676b1f3748)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Saves current LoRaMAC configuration to internal EEPROM.

The configuration parameters saved are: frequency band, end device EUI, application EUI, application key, network session key, application session key, end device EUI and all channel parameters.

#### Parameters
* `dev` RN2XX3 device descriptor

#### Returns
RN2XX3_OK if all is ok 

#### Returns
RN2XX3_TIMEOUT if the device didn't reply

#### `public void `[`rn2xx3_mac_get_deveui`](#group__drivers__rn2xx3_1gac88f506a84a786f74486e71a0cbab6e2)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * eui)` 

Gets the rn2xx3 LoRaMAC device EUI.

The device EUI is an array of 8 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `eui` The device EUI

#### `public void `[`rn2xx3_mac_set_deveui`](#group__drivers__rn2xx3_1ga1ae65b2d5d131da3644f048e488825d4)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * eui)` 

Sets the rn2xx3 LoRaMAC device EUI.

The device EUI is an array of 8 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `eui` The device EUI

#### `public void `[`rn2xx3_mac_get_appeui`](#group__drivers__rn2xx3_1gacf89c15cacb3e194f44398e0c0be696a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * eui)` 

Gets the rn2xx3 LoRaMAC application EUI.

The application EUI is an array of 8 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `eui` The application EUI

#### `public void `[`rn2xx3_mac_set_appeui`](#group__drivers__rn2xx3_1gacc50e8c05b909333258d3f7d529b3c03)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * eui)` 

Sets the rn2xx3 LoRaMAC application EUI.

The application key is an array of 8 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `eui` The application EUI

#### `public void `[`rn2xx3_mac_set_appkey`](#group__drivers__rn2xx3_1ga6e4f1c1c915037d839e8c669785b4f1f)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * key)` 

Sets the rn2xx3 LoRaMAC application key.

The application key is an array of 16 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `key` The application key

#### `public void `[`rn2xx3_mac_set_appskey`](#group__drivers__rn2xx3_1ga3ec8fd9b28a034e3570d8f389475412d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * key)` 

Sets the rn2xx3 LoRaMAC application session key.

The application session key is an array of 16 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `key` The application session key

#### `public void `[`rn2xx3_mac_set_nwkskey`](#group__drivers__rn2xx3_1ga167adece764ab7ace53e08953a33192b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * key)` 

Sets the rn2xx3 LoRaMAC network session key.

The network session key is an array of 16 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `key` The network session key

#### `public void `[`rn2xx3_mac_get_devaddr`](#group__drivers__rn2xx3_1ga70bf867ac1598fd65fcb934645196347)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t * addr)` 

Gets the rn2xx3 LoRaMAC device address.

The device address is an array of 4 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `addr` The device address

#### `public void `[`rn2xx3_mac_set_devaddr`](#group__drivers__rn2xx3_1gae6d3e375cfc5af168108f28215e538b0)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,const uint8_t * addr)` 

Sets the rn2xx3 LoRaMAC device address.

The device address is an array of 4 bytes.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `addr` The device address

#### `public `[`loramac_tx_pwr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1gaefcaeb98180176fc844a5cd02689c400)` `[`rn2xx3_mac_get_tx_power`](#group__drivers__rn2xx3_1gaa4f8c24ff620f69a1f38b91caa4fbd4f)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC TX radio power index.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The radio power index

#### `public void `[`rn2xx3_mac_set_tx_power`](#group__drivers__rn2xx3_1ga041fb21483852b194d473d8d41b92ba9)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_tx_pwr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1gaefcaeb98180176fc844a5cd02689c400)` power)` 

Sets the rn2xx3 LoRaMAC transmission power index.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `power` The TX power index

#### `public `[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` `[`rn2xx3_mac_get_dr`](#group__drivers__rn2xx3_1gae7d325f4c4472a88a0ff603f4e66b1ee)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC datarate.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The datarate

#### `public void `[`rn2xx3_mac_set_dr`](#group__drivers__rn2xx3_1gaf2ffb068cd860702d3a7959ddc0f9b5d)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` dr)` 

Sets the rn2xx3 LoRaMAC datarate.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `dr` The datarate

#### `public uint16_t `[`rn2xx3_mac_get_band`](#group__drivers__rn2xx3_1gaec8e7758dcf0ff72fdedf982e99b7d62)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC frequency band in operation.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The frequency band

#### `public bool `[`rn2xx3_mac_get_adr`](#group__drivers__rn2xx3_1ga841f63e598b8cc18c4a230f6ec49b821)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Checks if the rn2xx3 LoRaMAC adaptive datarate is enabled/disabled.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
true if adaptive datarate is set, false otherwise

#### `public void `[`rn2xx3_mac_set_adr`](#group__drivers__rn2xx3_1gad73733dae1fcd3c87056e089f39b44cb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,bool adr)` 

Enables/disables the rn2xx3 LoRaMAC adaptive datarate.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `adr` The adaptive datarate mode

#### `public void `[`rn2xx3_mac_set_battery`](#group__drivers__rn2xx3_1ga51bb72eab91bdee9ab0f63b52813e781)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t battery)` 

Sets the rn2xx3 battery level measured by the end device.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `battery` The battery level:

* 0 means external power,

* 1 means low level,

* 254 high level,

* 255 means the battery level couldn't be measured by the device.

#### `public uint8_t `[`rn2xx3_mac_get_retx`](#group__drivers__rn2xx3_1ga66332c3af9dd7863ee2311502311b168)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC uplink retransmission retries number.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The number of uplink retransmission retries

#### `public void `[`rn2xx3_mac_set_retx`](#group__drivers__rn2xx3_1ga2cc8fcaa87d85f2a1886802645d1c630)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t retx)` 

Sets the rn2xx3 LoRaMAC uplink retransmission retries number.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `retx` The number of uplink retransmission retries

#### `public void `[`rn2xx3_mac_set_linkchk_interval`](#group__drivers__rn2xx3_1gaec67f7c1e3794ffe981ef8b0359c4ddb)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint16_t linkchk)` 

Sets the rn2xx3 LoRaMAC link check interval (in seconds)

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `linkchk` The link check interval in seconds

#### `public uint16_t `[`rn2xx3_mac_get_rx1_delay`](#group__drivers__rn2xx3_1ga11a48932bad4fd9c197717cd6f3648cc)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC interval delay before the first reception window (in ms)

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The delay in ms

#### `public void `[`rn2xx3_mac_set_rx1_delay`](#group__drivers__rn2xx3_1ga159563f787104aa20a88fc5292590133)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint16_t rx1)` 

Sets the rn2xx3 LoRaMAC interval delay before the first reception window (in ms)

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `rx1` The delay in ms

#### `public uint16_t `[`rn2xx3_mac_get_rx2_delay`](#group__drivers__rn2xx3_1ga6f808d669891e962b2bae2eb9a97cf8b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC interval delay before the second reception window (in ms)

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The delay in ms

#### `public bool `[`rn2xx3_mac_get_ar`](#group__drivers__rn2xx3_1ga902ecbee47d61dc5c73fea7c8e12050a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Checks the rn2xx3 LoRaMAC automatic reply state.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The automatic reply state

#### `public void `[`rn2xx3_mac_set_ar`](#group__drivers__rn2xx3_1gacdf1affb4d7f0c032846567d48cfad6b)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,bool ar)` 

Enables/disables LoRaMAC rn2xx3 MAC automatic reply state.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `ar` The automatic reply state

#### `public `[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` `[`rn2xx3_mac_get_rx2_dr`](#group__drivers__rn2xx3_1ga65ecda6d8fae9dba8048d61aabbb04ce)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC datarate used for second receive window.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The datarate during second receive window

#### `public void `[`rn2xx3_mac_set_rx2_dr`](#group__drivers__rn2xx3_1gade4ba80bd5d4274edf2cbbe1618bc30a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` dr)` 

Sets the rn2xx3 LoRaMAC datarate used for second receive window.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `dr` The datarate during second receive window

#### `public uint32_t `[`rn2xx3_mac_get_rx2_freq`](#group__drivers__rn2xx3_1ga628b8641be4aed2ac03a6912d24e85ef)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC frequency used during second receive window (in Hz)

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The frequency during second receive window

#### `public void `[`rn2xx3_mac_set_rx2_freq`](#group__drivers__rn2xx3_1ga9091b987f715ec64223225326c7dcd44)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint32_t freq)` 

Sets the rn2xx3 LoRaMAC frequency used during second receive window (in Hz)

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `freq` The frequency during second receive window

#### `public uint8_t `[`rn2xx3_mac_get_tx_port`](#group__drivers__rn2xx3_1gae1d88431dcab3234a0de6bf65d6c9f8a)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC TX port.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The TX port

#### `public void `[`rn2xx3_mac_set_tx_port`](#group__drivers__rn2xx3_1gabd033bfc113b0614b050bcef213fe932)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint8_t port)` 

Sets the rn2xx3 LoRaMAC TX port.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `port` The TX port (from 1 to 223)

#### `public `[`loramac_tx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga3c94d1636de66b1617aa3433ff9127ee)` `[`rn2xx3_mac_get_tx_mode`](#group__drivers__rn2xx3_1gaa6174e19f1451469d292187ff4c73d44)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Gets the rn2xx3 LoRaMAC TX mode.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The TX mode, either confirmable or unconfirmable

#### `public void `[`rn2xx3_mac_set_tx_mode`](#group__drivers__rn2xx3_1ga2f7e3ccb7b4184af7dbfb1098df50a09)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,`[`loramac_tx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga3c94d1636de66b1617aa3433ff9127ee)` mode)` 

Sets the rn2xx3 LoRaMAC TX mode.

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `mode` The TX mode, either confirmable or unconfirmable

#### `public uint8_t `[`rn2xx3_mac_get_rx_port`](#group__drivers__rn2xx3_1gaa117a2c419afef8eedd205d03f7d5e00)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev)` 

Parses the response buffer to get the LoRaWAN RX port.

#### Parameters
* `dev` The rn2xx3 device descriptor

#### Returns
The RX port (between 1 and 223)

#### `public void `[`rn2xx3_sys_set_sleep_duration`](#group__drivers__rn2xx3_1gada6e2f2f212a0844d055e7229d427323)`(`[`rn2xx3_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__t)` * dev,uint32_t sleep)` 

Sets the rn2xx3 sleep mode duration (in ms)

#### Parameters
* `dev` The rn2xx3 device descriptor 

* `sleep` The sleep mode duration (ms)

# struct `loramac_settings_t` 

LoRaMAC communication settings.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`rx2_freq`](#structloramac__settings__t_1a6de533b11e2fbbc35bad8cd4c2ce7218) | Center frequency used for second receive window.
`public `[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` `[`rx2_dr`](#structloramac__settings__t_1a2fe1296886fb992a7af85f7e5b64a342) | Datarate used for second receive window.
`public uint8_t `[`tx_port`](#structloramac__settings__t_1a7d4df1ea8665adfc1fed180d558a9b16) | Application TX port (between 1 and 223)
`public `[`loramac_tx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga3c94d1636de66b1617aa3433ff9127ee)` `[`tx_mode`](#structloramac__settings__t_1a89163ba88dde3f9f6b8f6fb5fc5333b3) | TX mode, either confirmable of unconfirmable.
`public uint8_t `[`rx_port`](#structloramac__settings__t_1aae0d7cfd58227183d9209c879ee9de3e) | RX port (between 1 and 223)

## Members

#### `public uint32_t `[`rx2_freq`](#structloramac__settings__t_1a6de533b11e2fbbc35bad8cd4c2ce7218) 

Center frequency used for second receive window.

#### `public `[`loramac_dr_idx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga979972ade63b4ee4ab64ac44d7b90261)` `[`rx2_dr`](#structloramac__settings__t_1a2fe1296886fb992a7af85f7e5b64a342) 

Datarate used for second receive window.

#### `public uint8_t `[`tx_port`](#structloramac__settings__t_1a7d4df1ea8665adfc1fed180d558a9b16) 

Application TX port (between 1 and 223)

#### `public `[`loramac_tx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga3c94d1636de66b1617aa3433ff9127ee)` `[`tx_mode`](#structloramac__settings__t_1a89163ba88dde3f9f6b8f6fb5fc5333b3) 

TX mode, either confirmable of unconfirmable.

#### `public uint8_t `[`rx_port`](#structloramac__settings__t_1aae0d7cfd58227183d9209c879ee9de3e) 

RX port (between 1 and 223)

# struct `rn2xx3_params_t` 

Configuration parameters for RN2483/RN2903 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structrn2xx3__params__t_1a8763449bca65e8b255b456963d51add6) | UART interfaced the device is connected to.
`public uint32_t `[`baudrate`](#structrn2xx3__params__t_1ac591027acc7c5386fbb88d5aae65e284) | baudrate to use
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_reset`](#structrn2xx3__params__t_1acdc56c195c77a59e8d45526273761e46) | GPIO pin that is connected to the STATUS pin set to GPIO_UNDEF if not used.

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structrn2xx3__params__t_1a8763449bca65e8b255b456963d51add6) 

UART interfaced the device is connected to.

#### `public uint32_t `[`baudrate`](#structrn2xx3__params__t_1ac591027acc7c5386fbb88d5aae65e284) 

baudrate to use

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_reset`](#structrn2xx3__params__t_1acdc56c195c77a59e8d45526273761e46) 

GPIO pin that is connected to the STATUS pin set to GPIO_UNDEF if not used.

# struct `rn2xx3_t` 

RN2483/RN2903 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structrn2xx3__t_1ab8884f67e9f820a376b18d3a0535b71c) | Netdev parent struct.
`public `[`rn2xx3_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__params__t)` `[`p`](#structrn2xx3__t_1ab211301f5fd33d5e0ddc053384f812c8) | configuration parameters
`public `[`loramac_settings_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structloramac__settings__t)` `[`loramac`](#structrn2xx3__t_1a6023fe355d9eb2fa48f150e15ff27195) | loramac communication settings
`public char `[`cmd_buf`](#structrn2xx3__t_1a6f483babcfa4ea1af8ff7e04a1045428) | command to send data buffer
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`cmd_lock`](#structrn2xx3__t_1a93bc3ba755d9f76373067a1a228bd4d7) | mutex to allow only one command at a time
`public uint8_t `[`int_state`](#structrn2xx3__t_1ad89041ed2b7d9fc967df32e185981393) | current state of the device
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`resp_lock`](#structrn2xx3__t_1a3b3bed851de2f5153bb70b823fcd2771) | mutex for waiting for command response
`public char `[`resp_buf`](#structrn2xx3__t_1a07de30244639b274b1ab88506a4379fd) | command response data buffer
`public uint16_t `[`resp_size`](#structrn2xx3__t_1a64e79faae21b13de0b13b335736b58b1) | counter for received char in response
`public uint8_t `[`resp_done`](#structrn2xx3__t_1add9287411a774002f765da39a277ef35) | check if response has completed
`public char `[`rx_tmp_buf`](#structrn2xx3__t_1a83cbb135bf6e918e53f12ca8927653db) | Temporary RX buffer used to convert 2 hex characters in one byte on the fly.
`public uint8_t `[`rx_buf`](#structrn2xx3__t_1a8142191827a546a8f7e9c7b366330c2b) | RX data buffer.
`public uint16_t `[`rx_size`](#structrn2xx3__t_1a1c2e2cfc41ec278a5db330e095c19898) | counter for received char in RX
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`sleep_timer`](#structrn2xx3__t_1a2970c2c8a7f48f7a9ace16922db02c61) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) used to count module sleep time.
`public uint32_t `[`sleep`](#structrn2xx3__t_1a0b49037eef7fc81d151eea0a9b040a0a) | module sleep duration

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structrn2xx3__t_1ab8884f67e9f820a376b18d3a0535b71c) 

Netdev parent struct.

#### `public `[`rn2xx3_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structrn2xx3__params__t)` `[`p`](#structrn2xx3__t_1ab211301f5fd33d5e0ddc053384f812c8) 

configuration parameters

#### `public `[`loramac_settings_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_rn2xx3.md#structloramac__settings__t)` `[`loramac`](#structrn2xx3__t_1a6023fe355d9eb2fa48f150e15ff27195) 

loramac communication settings

#### `public char `[`cmd_buf`](#structrn2xx3__t_1a6f483babcfa4ea1af8ff7e04a1045428) 

command to send data buffer

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`cmd_lock`](#structrn2xx3__t_1a93bc3ba755d9f76373067a1a228bd4d7) 

mutex to allow only one command at a time

#### `public uint8_t `[`int_state`](#structrn2xx3__t_1ad89041ed2b7d9fc967df32e185981393) 

current state of the device

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`resp_lock`](#structrn2xx3__t_1a3b3bed851de2f5153bb70b823fcd2771) 

mutex for waiting for command response

#### `public char `[`resp_buf`](#structrn2xx3__t_1a07de30244639b274b1ab88506a4379fd) 

command response data buffer

#### `public uint16_t `[`resp_size`](#structrn2xx3__t_1a64e79faae21b13de0b13b335736b58b1) 

counter for received char in response

#### `public uint8_t `[`resp_done`](#structrn2xx3__t_1add9287411a774002f765da39a277ef35) 

check if response has completed

#### `public char `[`rx_tmp_buf`](#structrn2xx3__t_1a83cbb135bf6e918e53f12ca8927653db) 

Temporary RX buffer used to convert 2 hex characters in one byte on the fly.

#### `public uint8_t `[`rx_buf`](#structrn2xx3__t_1a8142191827a546a8f7e9c7b366330c2b) 

RX data buffer.

#### `public uint16_t `[`rx_size`](#structrn2xx3__t_1a1c2e2cfc41ec278a5db330e095c19898) 

counter for received char in RX

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`sleep_timer`](#structrn2xx3__t_1a2970c2c8a7f48f7a9ace16922db02c61) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) used to count module sleep time.

#### `public uint32_t `[`sleep`](#structrn2xx3__t_1a0b49037eef7fc81d151eea0a9b040a0a) 

module sleep duration

