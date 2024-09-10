---
title: api-net_ieee802154_submac.md
description: api-net_ieee802154_submac.md
---
# group `net_ieee802154_submac` 

This module defines a common layer for handling the lower part of the IEEE 802.15.4 MAC layer.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

This layer is responsible for:

* Handling CSMA-CA and retransmissions.

* Maintaining part of the MAC Information Base, e.g IEEE 802.15.4 addresses, channel settings, CSMA-CA params, etc.

The SubMAC defines the following state machine:

```cpp
+--------+        +--------+     +--------+
|        |------->|        |     |        |
|   RX   |        |PREPARE |<--->|   TX   |
|        |   +--->|        |     |        |
+--------+   |    +--------+     +--------+
    ^        |        ^              |
    |        |        |              |
    |        |        |              |
    |        |    +--------+         |
    |        |    |        |         v
    |        |    |WAIT FOR|<--------+
    |        |    |  ACK   |         |
    |        |    +--------+         |
    |        |         |             |
    |        |         |             |
    |        |         v             |
    |        |     +--------+        |
    |        +-----|        |        |
    |              |  IDLE  |        |
    +------------->|        |<-------+
                   +--------+
```

* IDLE: The transceiver is off and therefore cannot receive frames. Sending frames might be triggered using [ieee802154_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga3b8da2bd1fbd6113498c5d5f2865d359). The next SubMAC state would be PREPARE.

* RX: The device is ready to receive frames. In case the SubMAC receives a frame it will call [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) and immediately go to IDLE. Same as the IDLE state, it's possible to trigger frames using [ieee802154_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga3b8da2bd1fbd6113498c5d5f2865d359).

* PREPARE: The frame is already in the framebuffer and waiting to be transmitted. This state might handle CSMA-CA backoff timer in case the device doesn't support it. The SubMAC will then request the transmission and go immediately to the TX state.

* TX: The frame was already sent and it's waiting for the TX DONE event from the radio. The SubMAC might call [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920) if any of the following criteria are meet:

* The transmitted frame didn't request ACK

* The radio already handles retransmissions

* WAIT FOR ACK: The SubMAC is waiting for an ACK frame. In case a valid ACK frame is received, the SubMAC will either to IDLE. In case the ACK frame is invalid or there's an ACK timeout event (either triggered by the radio or a timer), the SubMAC goes to either IDLE if there are no more retransmissions left or no more CSMA-CA retries or PREPARE otherwise.

The events that trigger state machine changes are defined in [ieee802154_fsm_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468)

The following events are valid for each state:

Event/State   |RX   |IDLE   |PREPARE   |TX   |WAIT FOR ACK
--------- | --------- | --------- | --------- | --------- | ---------
TX_DONE   |-   |-   |-   |X   |-
RX_DONE   |X   |X*   |X*   |X*   |X
CRC_ERROR   |X   |X*   |X*   |X*   |X
ACK_TIMEOUT   |-   |-   |-   |-   |X
BH   |-   |-   |X   |-   |-
REQ_TX   |X   |X   |-   |-   |-
REQ_SET_RX_ON   |-   |X   |-   |-   |-
REQ_SET_IDLE   |X   |-   |-   |-   |-

*: RX_DONE and CRC_ERROR during these events might be a race condition between the ACK [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) and the radios RX_DONE event. If this happens, the SubMAC will react accordingly

Unexpected events will be reported and asserted.

The upper layer needs to implement the following callbacks:

* [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8).

* [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920).

* [ieee802154_submac_ack_timer_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga9f661b8d85fe050c93c1f27502caf250)

* [ieee802154_submac_ack_timer_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga23612fc4f688a28bbdc9903f2394bafe)

* [ieee802154_submac_bh_request](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1gaa518d96cf589fe5a39d27582203b5045)

José I. Alamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`ieee802154_fsm_state_t`](#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468)            | Internal SubMAC FSM state machine states.
`enum `[`ieee802154_fsm_ev_t`](#group__net__ieee802154__submac_1ga79dbcd8ab2a7f7834cd0cf3f51be20c3)            | Internal SubMAC FSM state machine events.
`public int `[`ieee802154_send`](#group__net__ieee802154__submac_1ga3b8da2bd1fbd6113498c5d5f2865d359)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)`            | Transmit an IEEE 802.15.4 PSDU.
`public inline static int `[`ieee802154_set_short_addr`](#group__net__ieee802154__submac_1ga4cb8d3269c79814aae4851756aa69b4a)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * short_addr)`            | Set the IEEE 802.15.4 short address.
`public inline static int `[`ieee802154_set_ext_addr`](#group__net__ieee802154__submac_1ga5cac7e93259753e01c80a9bd81ed493a)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * ext_addr)`            | Set the IEEE 802.15.4 extended address.
`public inline static int `[`ieee802154_set_panid`](#group__net__ieee802154__submac_1gaf71d9cb897897b2db60f8104de4099d0)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const uint16_t * panid)`            | Set the IEEE 802.15.4 PAN ID.
`public inline static `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`ieee802154_get_phy_mode`](#group__net__ieee802154__submac_1gac229bef8904fb90f81330cbecb2c1014)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Get IEEE 802.15.4 PHY mode.
`public int `[`ieee802154_set_phy_conf`](#group__net__ieee802154__submac_1gafc3c69115a8e8d797266445b892397c2)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t channel_num,uint8_t channel_page,int8_t tx_pow)`            | Set IEEE 802.15.4 PHY configuration (channel, TX power)
`public inline static int `[`ieee802154_set_channel_number`](#group__net__ieee802154__submac_1ga6777615c9fc50b56b6dfcd70cc5df9b4)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t channel_num)`            | Set IEEE 802.15.4 channel number.
`public inline static int `[`ieee802154_set_channel_page`](#group__net__ieee802154__submac_1ga29716a1b94a6cbfd999dca4577dae12f)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t channel_page)`            | Set IEEE 802.15.4 channel page.
`public inline static int `[`ieee802154_set_tx_power`](#group__net__ieee802154__submac_1gad371b14025ac1db5d797838e04cdb179)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,int8_t tx_pow)`            | Set IEEE 802.15.4 transmission power.
`public inline static int `[`ieee802154_get_frame_length`](#group__net__ieee802154__submac_1ga189a505a953d2d9b3c01be0e946f262e)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Get the received frame length.
`public inline static int `[`ieee802154_read_frame`](#group__net__ieee802154__submac_1gad4786ea9ea00be702783d71444adb04c)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,void * buf,size_t len,`[`ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__rx__info__t)` * info)`            | Read the received frame.
`public int `[`ieee802154_set_idle`](#group__net__ieee802154__submac_1gabad8fda1025da671a5b979ff587673bd)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Set the SubMAC to IDLE state.
`public int `[`ieee802154_set_rx`](#group__net__ieee802154__submac_1ga9e8f4bf3225b989e1faba56b7d77586d)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Set the SubMAC to RX state.
`public inline static bool `[`ieee802154_submac_state_is_rx`](#group__net__ieee802154__submac_1ga4da8911776657a8e52a2c9403264e7b7)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Check whether the SubMAC is in RX state.
`public inline static bool `[`ieee802154_submac_state_is_idle`](#group__net__ieee802154__submac_1ga9d3cea33dbbbe48315fc83e256e07e50)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Check whether the SubMAC is in IDLE state.
`public int `[`ieee802154_submac_init`](#group__net__ieee802154__submac_1ga51177a588137ff96e93317d6b05fafd4)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * short_addr,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * ext_addr)`            | Init the IEEE 802.15.4 SubMAC.
`public void `[`ieee802154_submac_ack_timer_set`](#group__net__ieee802154__submac_1ga9f661b8d85fe050c93c1f27502caf250)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t us)`            | Set the ACK timeout timer.
`public void `[`ieee802154_submac_ack_timer_cancel`](#group__net__ieee802154__submac_1ga23612fc4f688a28bbdc9903f2394bafe)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Cancel the ACK timeout timer.
`public void `[`ieee802154_submac_bh_request`](#group__net__ieee802154__submac_1gaa518d96cf589fe5a39d27582203b5045)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | [ieee802154_submac_bh_process](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga8c0acab63c313886be2aa1774b26a51c) should be called as soon as possible.
`public `[`ieee802154_fsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468)` `[`ieee802154_submac_process_ev`](#group__net__ieee802154__submac_1ga4185e806b1f0cf0383ca1b466a073a09)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,`[`ieee802154_fsm_ev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga79dbcd8ab2a7f7834cd0cf3f51be20c3)` ev)`            | Process an FSM event.
`public inline static void `[`ieee802154_submac_ack_timeout_fired`](#group__net__ieee802154__submac_1gaded78e00c14139952d82c2cf6db10fd8)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Indicate the SubMAC that the ACK timeout fired.
`public inline static void `[`ieee802154_submac_bh_process`](#group__net__ieee802154__submac_1ga8c0acab63c313886be2aa1774b26a51c)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Indicate the SubMAC that the BH should process an internal event.
`public inline static void `[`ieee802154_submac_rx_done_cb`](#group__net__ieee802154__submac_1gaf78aa25aafb2b088ec56b2e9ffd8da43)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Indicate the SubMAC that the device received a frame.
`public inline static void `[`ieee802154_submac_crc_error_cb`](#group__net__ieee802154__submac_1gaf9c66e08e137d6a5ac5f59d81ce8740e)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Indicate the SubMAC that a frame with invalid CRC was received.
`public inline static void `[`ieee802154_submac_tx_done_cb`](#group__net__ieee802154__submac_1ga41af7c6fd1512941e8daba4781059827)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)`            | Indicate the SubMAC that the device finished the transmission procedure.
`struct `[`ieee802154_submac_cb_t`](#structieee802154__submac__cb__t) | IEEE 802.15.4 SubMAC callbacks.
`struct `[`ieee802154_submac`](#structieee802154__submac) | IEEE 802.15.4 SubMAC descriptor.

## Members

#### `enum `[`ieee802154_fsm_state_t`](#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_FSM_STATE_INVALID            | Invalid state.
IEEE802154_FSM_STATE_RX            | SubMAC is ready to receive frames.
IEEE802154_FSM_STATE_IDLE            | The transceiver is off.
IEEE802154_FSM_STATE_PREPARE            | The SubMAC is preparing the next transmission.
IEEE802154_FSM_STATE_TX            | The SubMAC is currently transmitting a frame.
IEEE802154_FSM_STATE_WAIT_FOR_ACK            | The SubMAC is waiting for an ACK frame.
IEEE802154_FSM_STATE_NUMOF            | Number of SubMAC FSM states.

Internal SubMAC FSM state machine states.

#### `enum `[`ieee802154_fsm_ev_t`](#group__net__ieee802154__submac_1ga79dbcd8ab2a7f7834cd0cf3f51be20c3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_FSM_EV_TX_DONE            | Radio reports frame was sent.
IEEE802154_FSM_EV_RX_DONE            | Radio reports frame was received.
IEEE802154_FSM_EV_CRC_ERROR            | Radio reports frame was received but CRC failed.
IEEE802154_FSM_EV_ACK_TIMEOUT            | ACK timer fired.
IEEE802154_FSM_EV_BH            | The Bottom Half should process an event.
IEEE802154_FSM_EV_REQUEST_TX            | The upper layer requested to transmit a frame.
IEEE802154_FSM_EV_REQUEST_SET_RX_ON            | The upper layer requested to go to RX.
IEEE802154_FSM_EV_REQUEST_SET_IDLE            | The upper layer requested to go to IDLE.
IEEE802154_FSM_EV_NUMOF            | Number of SubMAC FSM events.

Internal SubMAC FSM state machine events.

#### `public int `[`ieee802154_send`](#group__net__ieee802154__submac_1ga3b8da2bd1fbd6113498c5d5f2865d359)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * iolist)` 

Transmit an IEEE 802.15.4 PSDU.

This function performs an IEEE 802.15.4 transmission, including CSMA-CA and retransmissions (if ACK Request bit is set). When the transmission finishes an [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920) event is issued.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `iolist` pointer to the PSDU frame (without FCS)

#### Returns
0 on success 

#### Returns
-EBUSY if the SubMAC is not in RX or IDLE state or if called inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920)

#### `public inline static int `[`ieee802154_set_short_addr`](#group__net__ieee802154__submac_1ga4cb8d3269c79814aae4851756aa69b4a)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * short_addr)` 

Set the IEEE 802.15.4 short address.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `short_addr` IEEE 802.15.4 short address

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_set_ext_addr`](#group__net__ieee802154__submac_1ga5cac7e93259753e01c80a9bd81ed493a)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * ext_addr)` 

Set the IEEE 802.15.4 extended address.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `ext_addr` IEEE 802.15.4 extended address

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_set_panid`](#group__net__ieee802154__submac_1gaf71d9cb897897b2db60f8104de4099d0)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const uint16_t * panid)` 

Set the IEEE 802.15.4 PAN ID.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `panid` IEEE 802.15.4 PAN ID

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public inline static `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`ieee802154_get_phy_mode`](#group__net__ieee802154__submac_1gac229bef8904fb90f81330cbecb2c1014)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Get IEEE 802.15.4 PHY mode.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### Returns
PHY mode.

#### `public int `[`ieee802154_set_phy_conf`](#group__net__ieee802154__submac_1gafc3c69115a8e8d797266445b892397c2)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t channel_num,uint8_t channel_page,int8_t tx_pow)` 

Set IEEE 802.15.4 PHY configuration (channel, TX power)

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `channel_num` channel number 

* `channel_page` channel page 

* `tx_pow` transmission power (in dBm)

#### Returns
0 on success 

#### Returns
-ENOTSUP if the PHY settings are not supported 

#### Returns
-EBUSY if the SubMAC is not in RX or IDLE state or if called inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920)

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_set_channel_number`](#group__net__ieee802154__submac_1ga6777615c9fc50b56b6dfcd70cc5df9b4)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t channel_num)` 

Set IEEE 802.15.4 channel number.

This is a shortcut to [ieee802154_set_phy_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1gafc3c69115a8e8d797266445b892397c2)

#### Parameters
* `submac` pointer the SubMAC descriptor 

* `channel_num` channel number

#### Returns
0 on success 

#### Returns
-ENOTSUP if the channel number is not supported 

#### Returns
-EBUSY if the SubMAC is not in RX or IDLE state or if called inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920)

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_set_channel_page`](#group__net__ieee802154__submac_1ga29716a1b94a6cbfd999dca4577dae12f)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t channel_page)` 

Set IEEE 802.15.4 channel page.

This is a shortcut to [ieee802154_set_phy_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1gafc3c69115a8e8d797266445b892397c2)

#### Parameters
* `submac` pointer the SubMAC descriptor 

* `channel_page` channel page

#### Returns
0 on success 

#### Returns
-ENOTSUP if the channel page is not supported 

#### Returns
-EBUSY if the SubMAC is not in RX or IDLE state or if called inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920)

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_set_tx_power`](#group__net__ieee802154__submac_1gad371b14025ac1db5d797838e04cdb179)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,int8_t tx_pow)` 

Set IEEE 802.15.4 transmission power.

This is a shortcut to [ieee802154_set_phy_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1gafc3c69115a8e8d797266445b892397c2)

#### Parameters
* `submac` pointer the SubMAC descriptor 

* `tx_pow` transmission power (in dBm)

#### Returns
0 on success 

#### Returns
-ENOTSUP if the transmission power is not supported 

#### Returns
-EBUSY if the SubMAC is not in RX or IDLE state or if called inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or [ieee802154_submac_cb_t::tx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920)

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_get_frame_length`](#group__net__ieee802154__submac_1ga189a505a953d2d9b3c01be0e946f262e)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Get the received frame length.

this function MUST be called either inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or in SLEEP state.

#### Parameters
* `submac` pointer to the SubMAC

#### Returns
length of the PSDU (excluding FCS length)

#### `public inline static int `[`ieee802154_read_frame`](#group__net__ieee802154__submac_1gad4786ea9ea00be702783d71444adb04c)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,void * buf,size_t len,`[`ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__rx__info__t)` * info)` 

Read the received frame.

This functions reads the received PSDU from the device (excluding FCS)

this function MUST be called either inside [ieee802154_submac_cb_t::rx_done](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) or in SLEEP state.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `buf` buffer to write into. If NULL, the packet is discarded 

* `len` length of the buffer 

* `info` RX information of the packet. If NULL, the information is not fetched.

#### Returns
the number of bytes written to `buf`

#### Returns
negative errno on error

#### `public int `[`ieee802154_set_idle`](#group__net__ieee802154__submac_1gabad8fda1025da671a5b979ff587673bd)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Set the SubMAC to IDLE state.

Frames won't be received in this state. However, it's still possible to send frames.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### Returns
success or error code. 

#### Parameters
* `0` on success 

* `-EBUSY` if the SubMAC is currently busy

#### `public int `[`ieee802154_set_rx`](#group__net__ieee802154__submac_1ga9e8f4bf3225b989e1faba56b7d77586d)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Set the SubMAC to RX state.

During this state the SubMAC accepts incoming frames.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### Returns
success or error code. 

#### Parameters
* `0` on success 

* `-EBUSY` if the SubMAC is currently busy

#### `public inline static bool `[`ieee802154_submac_state_is_rx`](#group__net__ieee802154__submac_1ga4da8911776657a8e52a2c9403264e7b7)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Check whether the SubMAC is in RX state.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### Parameters
* `true` if the SubMAC is in RX state 

* `false` otherwise

#### `public inline static bool `[`ieee802154_submac_state_is_idle`](#group__net__ieee802154__submac_1ga9d3cea33dbbbe48315fc83e256e07e50)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Check whether the SubMAC is in IDLE state.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### Parameters
* `true` if the SubMAC is in IDLE state 

* `false` otherwise

#### `public int `[`ieee802154_submac_init`](#group__net__ieee802154__submac_1ga51177a588137ff96e93317d6b05fafd4)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,const `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * short_addr,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * ext_addr)` 

Init the IEEE 802.15.4 SubMAC.

The SubMAC state machine starts in RX state.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `short_addr` pointer to the IEEE 802.15.4 short address 

* `ext_addr` pointer to the IEEE 802.15.4 extended address

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public void `[`ieee802154_submac_ack_timer_set`](#group__net__ieee802154__submac_1ga9f661b8d85fe050c93c1f27502caf250)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,uint16_t us)` 

Set the ACK timeout timer.

This function should be implemented by the user of the SubMAC.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `us` microseconds until the ACK timeout timer is fired

#### `public void `[`ieee802154_submac_ack_timer_cancel`](#group__net__ieee802154__submac_1ga23612fc4f688a28bbdc9903f2394bafe)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Cancel the ACK timeout timer.

This function should be implemented by the user of the SubMAC.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public void `[`ieee802154_submac_bh_request`](#group__net__ieee802154__submac_1gaa518d96cf589fe5a39d27582203b5045)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

[ieee802154_submac_bh_process](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga8c0acab63c313886be2aa1774b26a51c) should be called as soon as possible.

This function should be implemented by the user of the SubMAC.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public `[`ieee802154_fsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468)` `[`ieee802154_submac_process_ev`](#group__net__ieee802154__submac_1ga4185e806b1f0cf0383ca1b466a073a09)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac,`[`ieee802154_fsm_ev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga79dbcd8ab2a7f7834cd0cf3f51be20c3)` ev)` 

Process an FSM event.

#### `public inline static void `[`ieee802154_submac_ack_timeout_fired`](#group__net__ieee802154__submac_1gaded78e00c14139952d82c2cf6db10fd8)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Indicate the SubMAC that the ACK timeout fired.

This function must be called when the ACK timeout timer fires.

this function should not be called inside ISR context and MUST NOT be invoked if [ieee802154_submac_ack_timer_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga23612fc4f688a28bbdc9903f2394bafe) was already called.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public inline static void `[`ieee802154_submac_bh_process`](#group__net__ieee802154__submac_1ga8c0acab63c313886be2aa1774b26a51c)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Indicate the SubMAC that the BH should process an internal event.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public inline static void `[`ieee802154_submac_rx_done_cb`](#group__net__ieee802154__submac_1gaf78aa25aafb2b088ec56b2e9ffd8da43)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Indicate the SubMAC that the device received a frame.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public inline static void `[`ieee802154_submac_crc_error_cb`](#group__net__ieee802154__submac_1gaf9c66e08e137d6a5ac5f59d81ce8740e)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Indicate the SubMAC that a frame with invalid CRC was received.

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public inline static void `[`ieee802154_submac_tx_done_cb`](#group__net__ieee802154__submac_1ga41af7c6fd1512941e8daba4781059827)`(`[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` * submac)` 

Indicate the SubMAC that the device finished the transmission procedure.

#### Parameters
* `submac` pointer to the SubMAC descriptor

# struct `ieee802154_submac_cb_t` 

IEEE 802.15.4 SubMAC callbacks.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`rx_done`](#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) | RX done event.
`public void(* `[`tx_done`](#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920) | TX done event.

## Members

#### `public void(* `[`rx_done`](#structieee802154__submac__cb__t_1af1f0866e885b2ec93b00ab646bbc17f8) 

RX done event.

This function is called from the SubMAC to indicate a IEEE 802.15.4 frame is ready to be fetched from the device. Use [ieee802154_read_frame](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1gad4786ea9ea00be702783d71444adb04c) and/or [ieee802154_get_frame_length](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga189a505a953d2d9b3c01be0e946f262e) for this purpose.

The SubMAC will automatically go to IDLE.

ACK frames are automatically handled and discarded by the SubMAC. 

#### Parameters
* `submac` pointer to the SubMAC descriptor

#### `public void(* `[`tx_done`](#structieee802154__submac__cb__t_1a3bd5a4480d4afbcc3439ea8fb458d920) 

TX done event.

This function is called from the SubMAC to indicate that the TX procedure finished.

The SubMAC will automatically go to IDLE.

#### Parameters
* `submac` pointer to the SubMAC descriptor 

* `info` TX information associated to the transmission (status, number of retransmissions, pending bit, etc).

# struct `ieee802154_submac` 

IEEE 802.15.4 SubMAC descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` `[`dev`](#structieee802154__submac_1aeb1519e8423c6f05f762c28816c9e903) | 802.15.4 HAL descriptor
`public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`ext_addr`](#structieee802154__submac_1a2bf062215b257e96600ec039de6b8fc6) | IEEE 802.15.4 extended address.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`short_addr`](#structieee802154__submac_1a501b314446aaddc240f1ead5db7b648d) | IEEE 802.15.4 short address.
`public const `[`ieee802154_submac_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t)` * `[`cb`](#structieee802154__submac_1a25133da0dbcc612798c909dcdbe40675) | pointer to the SubMAC callbacks
`public `[`ieee802154_csma_be_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__csma__be__t)` `[`be`](#structieee802154__submac_1ac3e6bd99fa365ca9c05e9c1befbe461a) | CSMA-CA backoff exponent params.
`public bool `[`wait_for_ack`](#structieee802154__submac_1a6a58177bf2d3f3069ec2389fd805e5ba) | SubMAC is waiting for an ACK frame.
`public uint16_t `[`panid`](#structieee802154__submac_1afd5e07f1b7bc9e63d0211766c7285e5e) | IEEE 802.15.4 PAN ID.
`public uint16_t `[`channel_num`](#structieee802154__submac_1a92e7974fa7cb84640855f439eec299d3) | IEEE 802.15.4 channel number.
`public uint8_t `[`channel_page`](#structieee802154__submac_1a8e6bcd5fc90afd2670b10296559e711c) | IEEE 802.15.4 channel page.
`public uint8_t `[`retrans`](#structieee802154__submac_1a5122fc6f995a7ce27deb7f6f25fc31f6) | current number of retransmissions
`public uint8_t `[`csma_retries_nb`](#structieee802154__submac_1a1e59d75da127e0de5d282bbe155cdfe3) | current number of CSMA-CA retries
`public uint8_t `[`backoff_mask`](#structieee802154__submac_1a013d33276e8a792bf24116854c1aea60) | internal value used for random backoff calculation
`public uint8_t `[`csma_retries`](#structieee802154__submac_1aec4b96bdcf09af8d154e1aa1e379a438) | maximum number of CSMA-CA retries
`public int8_t `[`tx_pow`](#structieee802154__submac_1a4e9386f17a951b79926a7e1069fcb7e0) | Transmission power (in dBm)
`public `[`ieee802154_fsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468)` `[`fsm_state`](#structieee802154__submac_1ae8d39d247041ee139529fc14c46773e7) | State of the SubMAC.
`public `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`phy_mode`](#structieee802154__submac_1aa9a6d2316859c81fed0d970528e0afe6) | IEEE 802.15.4 PHY mode.
`public const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`psdu`](#structieee802154__submac_1a345c12b4fc0aa762c68e66d36c00f2c7) | stores the current PSDU

## Members

#### `public `[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` `[`dev`](#structieee802154__submac_1aeb1519e8423c6f05f762c28816c9e903) 

802.15.4 HAL descriptor

#### `public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`ext_addr`](#structieee802154__submac_1a2bf062215b257e96600ec039de6b8fc6) 

IEEE 802.15.4 extended address.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`short_addr`](#structieee802154__submac_1a501b314446aaddc240f1ead5db7b648d) 

IEEE 802.15.4 short address.

#### `public const `[`ieee802154_submac_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_submac.md#structieee802154__submac__cb__t)` * `[`cb`](#structieee802154__submac_1a25133da0dbcc612798c909dcdbe40675) 

pointer to the SubMAC callbacks

#### `public `[`ieee802154_csma_be_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__csma__be__t)` `[`be`](#structieee802154__submac_1ac3e6bd99fa365ca9c05e9c1befbe461a) 

CSMA-CA backoff exponent params.

#### `public bool `[`wait_for_ack`](#structieee802154__submac_1a6a58177bf2d3f3069ec2389fd805e5ba) 

SubMAC is waiting for an ACK frame.

#### `public uint16_t `[`panid`](#structieee802154__submac_1afd5e07f1b7bc9e63d0211766c7285e5e) 

IEEE 802.15.4 PAN ID.

#### `public uint16_t `[`channel_num`](#structieee802154__submac_1a92e7974fa7cb84640855f439eec299d3) 

IEEE 802.15.4 channel number.

#### `public uint8_t `[`channel_page`](#structieee802154__submac_1a8e6bcd5fc90afd2670b10296559e711c) 

IEEE 802.15.4 channel page.

#### `public uint8_t `[`retrans`](#structieee802154__submac_1a5122fc6f995a7ce27deb7f6f25fc31f6) 

current number of retransmissions

#### `public uint8_t `[`csma_retries_nb`](#structieee802154__submac_1a1e59d75da127e0de5d282bbe155cdfe3) 

current number of CSMA-CA retries

#### `public uint8_t `[`backoff_mask`](#structieee802154__submac_1a013d33276e8a792bf24116854c1aea60) 

internal value used for random backoff calculation

#### `public uint8_t `[`csma_retries`](#structieee802154__submac_1aec4b96bdcf09af8d154e1aa1e379a438) 

maximum number of CSMA-CA retries

#### `public int8_t `[`tx_pow`](#structieee802154__submac_1a4e9386f17a951b79926a7e1069fcb7e0) 

Transmission power (in dBm)

#### `public `[`ieee802154_fsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga07efe921eed33a6e7dabfe3170d19468)` `[`fsm_state`](#structieee802154__submac_1ae8d39d247041ee139529fc14c46773e7) 

State of the SubMAC.

#### `public `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`phy_mode`](#structieee802154__submac_1aa9a6d2316859c81fed0d970528e0afe6) 

IEEE 802.15.4 PHY mode.

#### `public const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`psdu`](#structieee802154__submac_1a345c12b4fc0aa762c68e66d36c00f2c7) 

stores the current PSDU

