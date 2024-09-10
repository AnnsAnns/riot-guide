---
title: api-drivers_rn2xx3_config.md
description: api-drivers_rn2xx3_config.md
---
# group `drivers_rn2xx3_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_RN2XX3_DEFAULT_SLEEP`](#group__drivers__rn2xx3__config_1gadd7376444564d382ef80f0eff0fedc83)            | Default sleep duration (in ms)
`define `[`CONFIG_RN2XX3_DEFAULT_AR`](#group__drivers__rn2xx3__config_1ga9a240a07688d679545f9a84b519df1b8)            | Default automatic reply status.

## Members

#### `define `[`CONFIG_RN2XX3_DEFAULT_SLEEP`](#group__drivers__rn2xx3__config_1gadd7376444564d382ef80f0eff0fedc83) 

Default sleep duration (in ms)

#### `define `[`CONFIG_RN2XX3_DEFAULT_AR`](#group__drivers__rn2xx3__config_1ga9a240a07688d679545f9a84b519df1b8) 

Default automatic reply status.

Set to 1 to enable the automatic reply. The module will transmit a packet without a payload immediately after a confirmed downlink is received, or when the Frame Pending bit has been set by the server.

If all enabled channels are busy due to duty cycle limitations, the module will wait for the first channel that will become free to transmit. The user will not be able to initiate uplink transmissions until the automatic transmissions are done. Refer RN2483 LoRa™ Technology Module Command Reference User’s Guide for more information.

