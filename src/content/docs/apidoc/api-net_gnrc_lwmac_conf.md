---
title: api-net_gnrc_lwmac_conf.md
description: api-net_gnrc_lwmac_conf.md
---
# group `net_gnrc_lwmac_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_LWMAC_WAKEUP_INTERVAL_US`](#group__net__gnrc__lwmac__conf_1ga5dd90f2c5c366b51b5bfa2735b79adde)            | Time between consecutive wake-ups.
`define `[`GNRC_LWMAC_PREAMBLE_DURATION_US`](#group__net__gnrc__lwmac__conf_1gad60e03845eb25582ff9e5112006757de)            | The Maximum WR (preamble packet [gnrc_lwmac_frame_wr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lwmac__frame__wr__t)) duration time.
`define `[`CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US`](#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95)            | Timeout to send the next WR in case no WA has been received during that time.
`define `[`GNRC_LWMAC_WAKEUP_DURATION_US`](#group__net__gnrc__lwmac__conf_1ga1653b9b39afd25c6ddadf8355dca39c9)            | How long a node in LWMAC should keep awake and listen on the channel in one cycle.
`define `[`GNRC_LWMAC_BROADCAST_DURATION_US`](#group__net__gnrc__lwmac__conf_1gaf8f7ebed64a6a429fd84df3ec9f4ea6b)            | How long broadcast packets [gnrc_lwmac_frame_broadcast_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lwmac__frame__broadcast__t) will be sent to make sure every participant has received at least one copy.
`define `[`GNRC_LWMAC_TIME_BETWEEN_BROADCAST_US`](#group__net__gnrc__lwmac__conf_1gaf4231fe03cd46c5327b9ee3fb76fd027)            | Time to idle between two successive broadcast packets, referenced to the start of the packet.
`define `[`CONFIG_GNRC_LWMAC_WR_PREPARATION_US`](#group__net__gnrc__lwmac__conf_1gaaa0b3d5964c4e3715d556e4f4dbe72ee)            | WR preparation overhead before it can be sent (higher with debugging output).
`define `[`CONFIG_GNRC_LWMAC_DATA_DELAY_US`](#group__net__gnrc__lwmac__conf_1gaa590f4c48379428d46ae950c446a1724)            | How long to wait after a WA for data to come in.
`define `[`CONFIG_GNRC_LWMAC_DATA_CSMA_RETRIES`](#group__net__gnrc__lwmac__conf_1ga3319b394914b6b87dd35a44ca75735e8)            | CSMA retries for DATA packet after WR->WA was successful.
`define `[`CONFIG_GNRC_LWMAC_MAX_DATA_TX_RETRIES`](#group__net__gnrc__lwmac__conf_1gaab0dec523ac0ad4b48d8e117eb283126)            | Maximum TX transmission retries for DATA packet in case of no response from the receiver.
`define `[`GNRC_LWMAC_MAX_TX_BURST_PKT_NUM`](#group__net__gnrc__lwmac__conf_1ga5f48b5fc634427ea1a2a75a3d3134557)            | MAX burst transmission packet number in one shot.
`define `[`CONFIG_GNRC_LWMAC_MAX_RX_EXTENSION_NUM`](#group__net__gnrc__lwmac__conf_1gaa49de62256bf4260c11f851599ae0e39)            | MAX bad Listen period extensions a node can tolerate.
`define `[`CONFIG_GNRC_LWMAC_BROADCAST_CSMA_RETRIES`](#group__net__gnrc__lwmac__conf_1ga342fffe884ca5cfc6010b8ed6691ab09)            | CSMA retries for broadcast packet.

## Members

#### `define `[`CONFIG_GNRC_LWMAC_WAKEUP_INTERVAL_US`](#group__net__gnrc__lwmac__conf_1ga5dd90f2c5c366b51b5bfa2735b79adde) 

Time between consecutive wake-ups.

This macro governs power consumption, latency and throughput! In LWMAC, devices adopt duty-cycle scheme to conserve power. That is, time is divided into repeated cycles (or, superframes), and in each cycle, a node only wakes up for a period of time for receiving potential incoming packets for itself. This macro defines the wake-up interval, or, in other words, defines the cycle duration used in LWMAC. If the wake-up interval is short, nodes will wake up more frequently, which also increases the chances for receiving packets from neighbors (i.e., leads to higher throughput), but also results in higher power consumption. In LWMAC, by default, we regard the wake-up period as the beginning of a cycle.

#### `define `[`GNRC_LWMAC_PREAMBLE_DURATION_US`](#group__net__gnrc__lwmac__conf_1gad60e03845eb25582ff9e5112006757de) 

The Maximum WR (preamble packet [gnrc_lwmac_frame_wr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lwmac__frame__wr__t)) duration time.

Since LWMAC adopts duty-cycle scheme, a node only wakes up for a short period in each cycle. Thus, to probe where is the wake-up period of the receiver, a sender sends WR (preamble) packets to notice the receiver for communication. To ensure that the receiver will catch at least one WR packet in one cycle, the sender repeatedly broadcasts a stream of WR packets with the broadcast duration (preamble duration) slightly longer period than [CONFIG_GNRC_LWMAC_WAKEUP_INTERVAL_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1ga5dd90f2c5c366b51b5bfa2735b79adde).

#### `define `[`CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US`](#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95) 

Timeout to send the next WR in case no WA has been received during that time.

In LWMAC, when a sender initiates a transmission to a receiver, it starts with sending a stream of repeated WR packets with [CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95) interval between two consecutive WRs. After sending one WR (preamble) packet, the sender turns to the listen mode to receive the potential incoming WA (preamble-ACK) packet with a timeout of [CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95). If no WA is received during [CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95), the sender starts sending the next WR. It is referenced to the beginning of both WRs, but due to internal overhead, the exact spacing is slightly higher. The minimum possible value depends on the time it takes to completely send a WR with the given hardware (including processor) and data rate.

#### `define `[`GNRC_LWMAC_WAKEUP_DURATION_US`](#group__net__gnrc__lwmac__conf_1ga1653b9b39afd25c6ddadf8355dca39c9) 

How long a node in LWMAC should keep awake and listen on the channel in one cycle.

LWMAC adopts the duty-cycle scheme that a node only wakes up for a short period of [GNRC_LWMAC_WAKEUP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1ga1653b9b39afd25c6ddadf8355dca39c9) in each cycle. In the rest of the cycle, the node turns off the radio to conserve power. [GNRC_LWMAC_WAKEUP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1ga1653b9b39afd25c6ddadf8355dca39c9) is set to twice the duration of [CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95), to guarantee that the wake-up period is long enough that receiver will not miss the WR (preamble) packet. Receiver needs to support [NETDEV_EVENT_RX_STARTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba89aecdc8f6cad116c5cc960d000f9674) event in order to use time-between-WR as a sensible default here. Otherwise the duration of WRs as well as longest possible data broadcasts need to be taken into account.

#### `define `[`GNRC_LWMAC_BROADCAST_DURATION_US`](#group__net__gnrc__lwmac__conf_1gaf8f7ebed64a6a429fd84df3ec9f4ea6b) 

How long broadcast packets [gnrc_lwmac_frame_broadcast_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lwmac__frame__broadcast__t) will be sent to make sure every participant has received at least one copy.

Since LWMAC adopts duty-cycle scheme, a node only wakes up for a short period in each cycle. Thus, when a node wants to broadcast a packet, it repeatedly broadcasts the packet for one [GNRC_LWMAC_BROADCAST_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaf8f7ebed64a6a429fd84df3ec9f4ea6b) duration which is slightly longer than [CONFIG_GNRC_LWMAC_WAKEUP_INTERVAL_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1ga5dd90f2c5c366b51b5bfa2735b79adde). This is to ensure that all neighbors will not miss the broadcast procedure of the sender and catch at least one copy of the broadcast packet.

#### `define `[`GNRC_LWMAC_TIME_BETWEEN_BROADCAST_US`](#group__net__gnrc__lwmac__conf_1gaf4231fe03cd46c5327b9ee3fb76fd027) 

Time to idle between two successive broadcast packets, referenced to the start of the packet.

The same limitation as for [CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95) apply here. In LWMAC, when a sender initiates a broadcast, it starts with sending a stream ofrepeated broadcast packets with [GNRC_LWMAC_TIME_BETWEEN_BROADCAST_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaf4231fe03cd46c5327b9ee3fb76fd027) interval between two consecutive broadcast packets. After sending one broadcast packet, the sender turns to the listen mode with a timeout of [GNRC_LWMAC_TIME_BETWEEN_BROADCAST_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaf4231fe03cd46c5327b9ee3fb76fd027). When this timeout expires, the sender sends the next broadcast packet until reaching the maximum broadcast duration of [GNRC_LWMAC_BROADCAST_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaf8f7ebed64a6a429fd84df3ec9f4ea6b).

#### `define `[`CONFIG_GNRC_LWMAC_WR_PREPARATION_US`](#group__net__gnrc__lwmac__conf_1gaaa0b3d5964c4e3715d556e4f4dbe72ee) 

WR preparation overhead before it can be sent (higher with debugging output).

In LWMAC, when a sender wants to send a data packet to the receiver, it starts sending the WR stream a little bit earlier (advance) to the beginning edge of destination's wake-up phase over time. The idea is not to miss the wake-up period of the receiver, otherwise will lead to a long WR procedure.

#### `define `[`CONFIG_GNRC_LWMAC_DATA_DELAY_US`](#group__net__gnrc__lwmac__conf_1gaa590f4c48379428d46ae950c446a1724) 

How long to wait after a WA for data to come in.

When a node in LWMAC gets a WR during its wake-up period, it immediately replies a WA packet to the sender for acknowledging the sender's transmission request. After sending the WA, the receiver waits for the data packet from the sender, with a timeout of [CONFIG_GNRC_LWMAC_DATA_DELAY_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaa590f4c48379428d46ae950c446a1724) duration. In case no data will be received in this period, the receiver regards reception failed and go back to normal listen mode. However, in case the receiver receives other unintended packets, like WR/WA packets from other neighbor communication pairs, the receiver resets this timeout and continues to wait for the data packet, with the consideration that the sender's data transmission might be delayed due to other ongoing transmissions (the data packet is transmitted with CSMA/CA). This data timeout is long enough to catch the beginning of the packet if the transceiver supports [NETDEV_EVENT_RX_STARTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba89aecdc8f6cad116c5cc960d000f9674) event (this can be important for big packets).

#### `define `[`CONFIG_GNRC_LWMAC_DATA_CSMA_RETRIES`](#group__net__gnrc__lwmac__conf_1ga3319b394914b6b87dd35a44ca75735e8) 

CSMA retries for DATA packet after WR->WA was successful.

After receiving the WA packet [gnrc_lwmac_frame_wa_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lwmac__frame__wa__t) from the receiver, the sender starts sending the data packet using CSMA/CA. This macro defines how many CSMA retries a sender will be allowed to execute for sending its data, before the data is successfully sent (gets data ACK from the receiver).

#### `define `[`CONFIG_GNRC_LWMAC_MAX_DATA_TX_RETRIES`](#group__net__gnrc__lwmac__conf_1gaab0dec523ac0ad4b48d8e117eb283126) 

Maximum TX transmission retries for DATA packet in case of no response from the receiver.

When a data packet is scheduled for transmission, i.e., pushed into TX for sending, LWMAC defines a maximum of [CONFIG_GNRC_LWMAC_MAX_DATA_TX_RETRIES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaab0dec523ac0ad4b48d8e117eb283126) retries for transmission of the packet. That is, in case of transmission failure in TX due to no WA from the receiver, the sender will not drop the packet, but keeps it and retries to send the data packet in the following cycles, until the sender reaches the maximum retries limit defined here. Then, the packet will be dropped.

#### `define `[`GNRC_LWMAC_MAX_TX_BURST_PKT_NUM`](#group__net__gnrc__lwmac__conf_1ga5f48b5fc634427ea1a2a75a3d3134557) 

MAX burst transmission packet number in one shot.

LWMAC supports burst transmission based on the pending-bit technique, and this macro here defines the largest number of packets allowed to be sent in one consecutive sequence. In case a sender has multi packets for one receiver,the burst transmission procedure is as follows:

* The sender first uses WR stream to locate the receiver's wake-up period (if the sender has already phase-locked the receiver's phase, normally the sender only cost one WR to get the first WA from the receiver) and then sends its first data.

* After the transmission of the first data, the sender immediately sends a WR to the receiver for starting the second round of transmission of the second data. The receiver should also immediately reply WA for continue receiving data packets. In case the sender doesn't receive WA during [CONFIG_GNRC_LWMAC_TIME_BETWEEN_WR_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaec2fb475e2155cdd3a61c69556284d95), it regards the consecutive (burst) transmission failed and quits TX procedure (the data will be queued back to the transmission queue for normal transmission attempt in following cycles).

* In case the second transmission succeeds, the sender repeats step (2) to send all the following pending packets.

In short, in burst transmission mode, the sender doesn't tolerate no-WA event. All the pending data packets should be sent with only one WR cost for leading the transmission.

#### `define `[`CONFIG_GNRC_LWMAC_MAX_RX_EXTENSION_NUM`](#group__net__gnrc__lwmac__conf_1gaa49de62256bf4260c11f851599ae0e39) 

MAX bad Listen period extensions a node can tolerate.

In LWMAC, to allow burst transmissions, when in the wake-up period and by default, a node will extend its wake-up period to another [GNRC_LWMAC_WAKEUP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1ga1653b9b39afd25c6ddadf8355dca39c9) after each packet reception (except for broadcast packet). However, in some cases, a receiver may overhear other unintended packets, e.g., WR or WA packets for other nodes, these are called bad extensions for the receiver. If a receiver reaches the maximum bad listen extension limit defined here, it goes to sleep mode with the consideration that the channel is currently unavailable/busy.

#### `define `[`CONFIG_GNRC_LWMAC_BROADCAST_CSMA_RETRIES`](#group__net__gnrc__lwmac__conf_1ga342fffe884ca5cfc6010b8ed6691ab09) 

CSMA retries for broadcast packet.

Currently, each broadcast packet is sent with CSMA/CA for collision avoidance.

Too many CSMA retries may lead to running out of destinations wake-up period.

