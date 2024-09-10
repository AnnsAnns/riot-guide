---
title: api-net_gnrc_lorawan.md
description: api-net_gnrc_lorawan.md
---
# group `net_gnrc_lorawan` 

GNRC LoRaWAN stack implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_LORAWAN_REQ_STATUS_SUCCESS`](#group__net__gnrc__lorawan_1ga0cd52bc349c990d0013a0b2b4f62c461)            | MLME or MCPS request successful status.
`define `[`GNRC_LORAWAN_REQ_STATUS_DEFERRED`](#group__net__gnrc__lorawan_1ga188ea68c48dcc57fb8390f8f66736b8a)            | the MLME or MCPS confirm message is asynchronous
`enum `[`mcps_event_t`](#group__net__gnrc__lorawan_1ga1a52aa334cfeb6520eea5c8329a01182)            | MCPS events.
`enum `[`mlme_activation_t`](#group__net__gnrc__lorawan_1ga2938bb242f96d86154c958dcc375c0d4)            | LoRaWAN activation mechanism.
`enum `[`mlme_mib_type_t`](#group__net__gnrc__lorawan_1gae1d14211971630e36e65587adb4f8c39)            | MAC Information Base attributes.
`enum `[`mlme_type_t`](#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)            | MLME primitive types.
`enum `[`mcps_type_t`](#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)            | MCPS primitive types.
`public void `[`gnrc_lorawan_radio_rx_timeout_cb`](#group__net__gnrc__lorawan_1ga9c5c6db69cfc9b9c22e472657c2956a9)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)`            | Indicate the MAC layer there was a timeout event.
`public void `[`gnrc_lorawan_radio_tx_done_cb`](#group__net__gnrc__lorawan_1gacf4f019f40bc3773a81bd854874f8bb3)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)`            | Indicate the MAC layer when the transmission finished.
`public inline static void `[`gnrc_lorawan_radio_rx_error_cb`](#group__net__gnrc__lorawan_1ga34ed331e90f25d6fe54dfe682c2f9b95)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)`            | Indicate the MAC layer reception of a frame went wrong.
`public void `[`gnrc_lorawan_timeout_cb`](#group__net__gnrc__lorawan_1ga02856a12763f04f10e6b3b7199ec9f46)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)`            | Indicate the MAC layer that the timer was fired.
`public void `[`gnrc_lorawan_init`](#group__net__gnrc__lorawan_1gaf00df01460e4dd0325ab340ee0395954)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint8_t * joineui,const `[`gnrc_lorawan_key_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__key__ctx__t)` * ctx)`            | Init GNRC LoRaWAN.
`public void `[`gnrc_lorawan_mlme_request`](#group__net__gnrc__lorawan_1ga4b5900e71db9ec5ea55b6e320a824a2e)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,const `[`mlme_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__request__t)` * mlme_request,`[`mlme_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__confirm__t)` * mlme_confirm)`            | Perform a MLME request.
`public void `[`gnrc_lorawan_mcps_request`](#group__net__gnrc__lorawan_1ga910def0d7241847f026eff2e5a64dbab)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,const `[`mcps_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__request__t)` * mcps_request,`[`mcps_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__confirm__t)` * mcps_confirm)`            | Perform a MCPS request.
`public void `[`gnrc_lorawan_radio_rx_done_cb`](#group__net__gnrc__lorawan_1gae664bfdfce721f9ee892e0cff473e3b1)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint8_t * data,size_t size)`            | Fetch a LoRaWAN packet from the radio.
`public void `[`gnrc_lorawan_mcps_indication`](#group__net__gnrc__lorawan_1ga926e190fd034db3021fa8e2ad64b3042)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mcps_indication_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__indication__t)` * ind)`            | MCPS indication callback.
`public void `[`gnrc_lorawan_mlme_indication`](#group__net__gnrc__lorawan_1ga081ef52e0242fb797f7c39b6546f52cf)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mlme_indication_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__indication__t)` * ind)`            | MLME indication callback.
`public void `[`gnrc_lorawan_mcps_confirm`](#group__net__gnrc__lorawan_1ga5bbef9c9c22db8945b1ecb93a9a5c405)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mcps_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__confirm__t)` * confirm)`            | MCPS Confirm callback.
`public void `[`gnrc_lorawan_mlme_confirm`](#group__net__gnrc__lorawan_1gac85c5406c771b5d8cc9401993e31e714)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mlme_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__confirm__t)` * confirm)`            | MLME confirm callback.
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * `[`gnrc_lorawan_get_netdev`](#group__net__gnrc__lorawan_1ga57f98673e58d1d6eeda8da46fe89563a)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)`            | Get netdev pointer from mac descriptor.
`public int `[`gnrc_lorawan_phy_set_channel_mask`](#group__net__gnrc__lorawan_1gad53dd5091d69053a48036ac49c8a564b)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint16_t channel_mask)`            | Set the channel mask in order to enable or disable LoRaWAN channels.
`public void `[`gnrc_lorawan_set_timer`](#group__net__gnrc__lorawan_1ga8a347f48ef9788e3143ddc59ad7d6e2c)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint32_t us)`            | Set a timer with the given time.
`public void `[`gnrc_lorawan_remove_timer`](#group__net__gnrc__lorawan_1gad2e94cf282a74fef2ecaddf4430c1a70)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)`            | Remove the current timer.
`public inline static void `[`gnrc_lorawan_set_uncnf_redundancy`](#group__net__gnrc__lorawan_1ga6fed57a9a7cadcc22edff2e746f9f937)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint8_t redundancy)`            | Set unconfirmed uplink redundancy.
`struct `[`mlme_mib_t`](#structmlme__mib__t) | MAC Information Base descriptor for MLME Request-Confirm.
`struct `[`mlme_request_t`](#structmlme__request__t) | MAC (sub) Layer Management Entity (MLME) request representation.
`struct `[`mcps_request_t`](#structmcps__request__t) | Mac Common Part Sublayer (MCPS) request representation.
`struct `[`mlme_confirm_t`](#structmlme__confirm__t) | MAC (sub) Layer Management Entity (MLME) confirm representation.
`struct `[`mcps_confirm_t`](#structmcps__confirm__t) | Mac Common Part Sublayer (MCPS) confirm representation.
`struct `[`mcps_indication_t`](#structmcps__indication__t) | Mac Common Part Sublayer (MCPS) indication representation.
`struct `[`mlme_indication_t`](#structmlme__indication__t) | MAC (sub) Layer Management Entity (MLME) indication representation.

## Members

#### `define `[`GNRC_LORAWAN_REQ_STATUS_SUCCESS`](#group__net__gnrc__lorawan_1ga0cd52bc349c990d0013a0b2b4f62c461) 

MLME or MCPS request successful status.

#### `define `[`GNRC_LORAWAN_REQ_STATUS_DEFERRED`](#group__net__gnrc__lorawan_1ga188ea68c48dcc57fb8390f8f66736b8a) 

the MLME or MCPS confirm message is asynchronous

#### `enum `[`mcps_event_t`](#group__net__gnrc__lorawan_1ga1a52aa334cfeb6520eea5c8329a01182) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCPS_EVENT_RX            | MCPS RX event.
MCPS_EVENT_NO_RX            | MCPS no RX event.

MCPS events.

#### `enum `[`mlme_activation_t`](#group__net__gnrc__lorawan_1ga2938bb242f96d86154c958dcc375c0d4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MLME_ACTIVATION_NONE            | MAC layer is not activated.
MLME_ACTIVATION_ABP            | MAC layer activated by ABP.
MLME_ACTIVATION_OTAA            | MAC layer activated by OTAA.

LoRaWAN activation mechanism.

#### `enum `[`mlme_mib_type_t`](#group__net__gnrc__lorawan_1gae1d14211971630e36e65587adb4f8c39) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MIB_ACTIVATION_METHOD            | type is activation method
MIB_DEV_ADDR            | type is dev addr
MIB_RX2_DR            | type is rx2 DR

MAC Information Base attributes.

#### `enum `[`mlme_type_t`](#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MLME_JOIN            | join a LoRaWAN network
MLME_LINK_CHECK            | perform a Link Check
MLME_RESET            | reset the MAC layer
MLME_SET            | set the MIB
MLME_GET            | get the MIB
MLME_SCHEDULE_UPLINK            | schedule uplink indication

MLME primitive types.

#### `enum `[`mcps_type_t`](#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MCPS_CONFIRMED            | confirmed data
MCPS_UNCONFIRMED            | unconfirmed data

MCPS primitive types.

#### `public void `[`gnrc_lorawan_radio_rx_timeout_cb`](#group__net__gnrc__lorawan_1ga9c5c6db69cfc9b9c22e472657c2956a9)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)` 

Indicate the MAC layer there was a timeout event.

#### Parameters
* `mac` pointer to the MAC descriptor

#### `public void `[`gnrc_lorawan_radio_tx_done_cb`](#group__net__gnrc__lorawan_1gacf4f019f40bc3773a81bd854874f8bb3)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)` 

Indicate the MAC layer when the transmission finished.

#### Parameters
* `mac` pointer to the MAC descriptor

#### `public inline static void `[`gnrc_lorawan_radio_rx_error_cb`](#group__net__gnrc__lorawan_1ga34ed331e90f25d6fe54dfe682c2f9b95)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)` 

Indicate the MAC layer reception of a frame went wrong.

#### Parameters
* `mac` pointer to the MAC descriptor

#### `public void `[`gnrc_lorawan_timeout_cb`](#group__net__gnrc__lorawan_1ga02856a12763f04f10e6b3b7199ec9f46)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)` 

Indicate the MAC layer that the timer was fired.

#### Parameters
* `mac` pointer to the MAC descriptor

#### `public void `[`gnrc_lorawan_init`](#group__net__gnrc__lorawan_1gaf00df01460e4dd0325ab340ee0395954)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint8_t * joineui,const `[`gnrc_lorawan_key_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__key__ctx__t)` * ctx)` 

Init GNRC LoRaWAN.

#### Parameters
* `mac` pointer to the MAC descriptor 

* `joineui` pointer to Join EUI 

* `ctx` pointer to LoRaWAN context

#### `public void `[`gnrc_lorawan_mlme_request`](#group__net__gnrc__lorawan_1ga4b5900e71db9ec5ea55b6e320a824a2e)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,const `[`mlme_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__request__t)` * mlme_request,`[`mlme_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__confirm__t)` * mlme_confirm)` 

Perform a MLME request.

#### Parameters
* `mac` pointer to the MAC descriptor 

* `mlme_request` the MLME request 

* `mlme_confirm` the MLME confirm. `mlme_confirm->status` could either be GNRC_LORAWAN_REQ_STATUS_SUCCESS if the request was OK, GNRC_LORAWAN_REQ_STATUS_DEFERRED if the confirmation is deferred or an standard error number

#### `public void `[`gnrc_lorawan_mcps_request`](#group__net__gnrc__lorawan_1ga910def0d7241847f026eff2e5a64dbab)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,const `[`mcps_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__request__t)` * mcps_request,`[`mcps_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__confirm__t)` * mcps_confirm)` 

Perform a MCPS request.

#### Parameters
* `mac` pointer to the MAC descriptor 

* `mcps_request` the MCPS request 

* `mcps_confirm` the MCPS confirm. `mlme_confirm->status` could either be GNRC_LORAWAN_REQ_STATUS_SUCCESS if the request was OK, GNRC_LORAWAN_REQ_STATUS_DEFERRED if the confirmation is deferred or an standard error number

#### `public void `[`gnrc_lorawan_radio_rx_done_cb`](#group__net__gnrc__lorawan_1gae664bfdfce721f9ee892e0cff473e3b1)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint8_t * data,size_t size)` 

Fetch a LoRaWAN packet from the radio.

To be called on radio RX done event.

#### Parameters
* `mac` pointer to the MAC descriptor 

* `data` pointer to the psdu. Must not be NULL. Use [gnrc_lorawan_radio_rx_error_cb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga34ed331e90f25d6fe54dfe682c2f9b95) instead if the reception was not successful. 

* `size` size of the PSDU

#### `public void `[`gnrc_lorawan_mcps_indication`](#group__net__gnrc__lorawan_1ga926e190fd034db3021fa8e2ad64b3042)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mcps_indication_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__indication__t)` * ind)` 

MCPS indication callback.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor 

* `ind` pointer of the indication (see [mcps_indication_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__indication__t))

#### `public void `[`gnrc_lorawan_mlme_indication`](#group__net__gnrc__lorawan_1ga081ef52e0242fb797f7c39b6546f52cf)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mlme_indication_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__indication__t)` * ind)` 

MLME indication callback.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor 

* `ind` pointer of the indication (see [mlme_indication_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__indication__t))

#### `public void `[`gnrc_lorawan_mcps_confirm`](#group__net__gnrc__lorawan_1ga5bbef9c9c22db8945b1ecb93a9a5c405)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mcps_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__confirm__t)` * confirm)` 

MCPS Confirm callback.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor 

* `confirm` pointer to the confirm (see [mcps_confirm_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmcps__confirm__t))

#### `public void `[`gnrc_lorawan_mlme_confirm`](#group__net__gnrc__lorawan_1gac85c5406c771b5d8cc9401993e31e714)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,`[`mlme_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__confirm__t)` * confirm)` 

MLME confirm callback.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor 

* `confirm` pointer to the confirm (see [mlme_confirm_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__confirm__t))

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * `[`gnrc_lorawan_get_netdev`](#group__net__gnrc__lorawan_1ga57f98673e58d1d6eeda8da46fe89563a)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)` 

Get netdev pointer from mac descriptor.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor

#### Returns
pointer to the [netdev_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4) structure

#### `public int `[`gnrc_lorawan_phy_set_channel_mask`](#group__net__gnrc__lorawan_1gad53dd5091d69053a48036ac49c8a564b)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint16_t channel_mask)` 

Set the channel mask in order to enable or disable LoRaWAN channels.

#### Parameters
* `mac` pointer to the MAC descriptor 

* `channel_mask` the channel mask. LSB maps to channel 0

#### Returns
0 on success 

#### Returns
-EINVAL if `channel_mask` is zero or if the channel mask tries to enable an undefined channel

#### `public void `[`gnrc_lorawan_set_timer`](#group__net__gnrc__lorawan_1ga8a347f48ef9788e3143ddc59ad7d6e2c)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint32_t us)` 

Set a timer with the given time.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor 

* `us` timeout microseconds

#### `public void `[`gnrc_lorawan_remove_timer`](#group__net__gnrc__lorawan_1gad2e94cf282a74fef2ecaddf4430c1a70)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac)` 

Remove the current timer.

Supposed to be implemented by the user of GNRC LoRaWAN

#### Parameters
* `mac` pointer to the MAC descriptor

#### `public inline static void `[`gnrc_lorawan_set_uncnf_redundancy`](#group__net__gnrc__lorawan_1ga6fed57a9a7cadcc22edff2e746f9f937)`(`[`gnrc_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__lorawan__t)` * mac,uint8_t redundancy)` 

Set unconfirmed uplink redundancy.

`redundancy` <= 14

#### Parameters
* `mac` pointer to the MAC descriptor 

* `redundancy` number of unconfirmed uplink retransmissions

# struct `mlme_mib_t` 

MAC Information Base descriptor for MLME Request-Confirm.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mlme_mib_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gae1d14211971630e36e65587adb4f8c39)` `[`type`](#structmlme__mib__t_1a2fa4ad9994dd35802493037c82643329) | MIB attribute identifier.
`public `[`mlme_activation_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga2938bb242f96d86154c958dcc375c0d4)` `[`activation`](#structmlme__mib__t_1aec2c8b185b56098a81e400af7d48ca86) | holds activation mechanism
`public void * `[`dev_addr`](#structmlme__mib__t_1a536adef43eb44289f00a1123ed9c0fbd) | pointer to the dev_addr
`public uint8_t `[`rx2_dr`](#structmlme__mib__t_1a81096dd82c7827616db1068e0bf8b43e) | 
`public union mlme_mib_t::@359 `[`@360`](#structmlme__mib__t_1a3ead6d77704b9317c118c46e6d0ec82f) | 

## Members

#### `public `[`mlme_mib_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gae1d14211971630e36e65587adb4f8c39)` `[`type`](#structmlme__mib__t_1a2fa4ad9994dd35802493037c82643329) 

MIB attribute identifier.

#### `public `[`mlme_activation_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga2938bb242f96d86154c958dcc375c0d4)` `[`activation`](#structmlme__mib__t_1aec2c8b185b56098a81e400af7d48ca86) 

holds activation mechanism

#### `public void * `[`dev_addr`](#structmlme__mib__t_1a536adef43eb44289f00a1123ed9c0fbd) 

pointer to the dev_addr

#### `public uint8_t `[`rx2_dr`](#structmlme__mib__t_1a81096dd82c7827616db1068e0bf8b43e) 

#### `public union mlme_mib_t::@359 `[`@360`](#structmlme__mib__t_1a3ead6d77704b9317c118c46e6d0ec82f) 

# struct `mlme_request_t` 

MAC (sub) Layer Management Entity (MLME) request representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mlme_lorawan_join_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmlme__lorawan__join__t)` `[`join`](#structmlme__request__t_1a2311e57fa1deff7f5837ebfe8126988c) | Join Data holder.
`public `[`mlme_mib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__mib__t)` `[`mib`](#structmlme__request__t_1a162f03f1c66f2861ecd2f327111e8815) | MIB holder.
`public union mlme_request_t::@361 `[`@362`](#structmlme__request__t_1af35009142485cc2656d2ee79b82238da) | 
`public `[`mlme_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)` `[`type`](#structmlme__request__t_1a9238d918a1517e653ad2cb9bcf27cb0f) | type of the MLME request

## Members

#### `public `[`mlme_lorawan_join_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmlme__lorawan__join__t)` `[`join`](#structmlme__request__t_1a2311e57fa1deff7f5837ebfe8126988c) 

Join Data holder.

#### `public `[`mlme_mib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__mib__t)` `[`mib`](#structmlme__request__t_1a162f03f1c66f2861ecd2f327111e8815) 

MIB holder.

#### `public union mlme_request_t::@361 `[`@362`](#structmlme__request__t_1af35009142485cc2656d2ee79b82238da) 

#### `public `[`mlme_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)` `[`type`](#structmlme__request__t_1a9238d918a1517e653ad2cb9bcf27cb0f) 

type of the MLME request

# struct `mcps_request_t` 

Mac Common Part Sublayer (MCPS) request representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mcps_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmcps__data__t)` `[`data`](#structmcps__request__t_1a0cb5670524c29a9b1212d4a1dc1e2a12) | MCPS data holder.
`public union mcps_request_t::@363 `[`@364`](#structmcps__request__t_1a2257ef64a3b36335691376a0c774e3c0) | 
`public `[`mcps_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)` `[`type`](#structmcps__request__t_1a1e71156e183bd4a4fdf58d6f7bafcd54) | type of the MCPS request

## Members

#### `public `[`mcps_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmcps__data__t)` `[`data`](#structmcps__request__t_1a0cb5670524c29a9b1212d4a1dc1e2a12) 

MCPS data holder.

#### `public union mcps_request_t::@363 `[`@364`](#structmcps__request__t_1a2257ef64a3b36335691376a0c774e3c0) 

#### `public `[`mcps_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)` `[`type`](#structmcps__request__t_1a1e71156e183bd4a4fdf58d6f7bafcd54) 

type of the MCPS request

# struct `mlme_confirm_t` 

MAC (sub) Layer Management Entity (MLME) confirm representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`status`](#structmlme__confirm__t_1a86fa7e87ce4ccf315cc214cef7684b18) | status of the MLME confirm
`public `[`mlme_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)` `[`type`](#structmlme__confirm__t_1a3d362d3be7d1b26ddfabb5367fb6f61f) | type of the MLME confirm
`public `[`mlme_link_req_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmlme__link__req__confirm__t)` `[`link_req`](#structmlme__confirm__t_1ae783712eeb99ab75120d255ba23ec342) | Link Check confirmation data.
`public `[`mlme_mib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__mib__t)` `[`mib`](#structmlme__confirm__t_1a79b552e0853af166184bb019d21cde27) | MIB confirmation data.
`public union mlme_confirm_t::@365 `[`@366`](#structmlme__confirm__t_1ab5e2bd1ad64d3d485874db3f5d743b77) | 

## Members

#### `public int16_t `[`status`](#structmlme__confirm__t_1a86fa7e87ce4ccf315cc214cef7684b18) 

status of the MLME confirm

#### `public `[`mlme_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)` `[`type`](#structmlme__confirm__t_1a3d362d3be7d1b26ddfabb5367fb6f61f) 

type of the MLME confirm

#### `public `[`mlme_link_req_confirm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmlme__link__req__confirm__t)` `[`link_req`](#structmlme__confirm__t_1ae783712eeb99ab75120d255ba23ec342) 

Link Check confirmation data.

#### `public `[`mlme_mib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_lorawan.md#structmlme__mib__t)` `[`mib`](#structmlme__confirm__t_1a79b552e0853af166184bb019d21cde27) 

MIB confirmation data.

#### `public union mlme_confirm_t::@365 `[`@366`](#structmlme__confirm__t_1ab5e2bd1ad64d3d485874db3f5d743b77) 

# struct `mcps_confirm_t` 

Mac Common Part Sublayer (MCPS) confirm representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`status`](#structmcps__confirm__t_1a6a1372a21395bc5728b92dbe429a7fb1) | status of the MCPS confirm
`public `[`mcps_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)` `[`type`](#structmcps__confirm__t_1aec6428c3b83d15fabc910cc3304c9e29) | type of the MCPS confirm
`public `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`msdu`](#structmcps__confirm__t_1a9399d88608f79e80455988c14d95fd23) | pointer to the msdu

## Members

#### `public int16_t `[`status`](#structmcps__confirm__t_1a6a1372a21395bc5728b92dbe429a7fb1) 

status of the MCPS confirm

#### `public `[`mcps_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)` `[`type`](#structmcps__confirm__t_1aec6428c3b83d15fabc910cc3304c9e29) 

type of the MCPS confirm

#### `public `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`msdu`](#structmcps__confirm__t_1a9399d88608f79e80455988c14d95fd23) 

pointer to the msdu

# struct `mcps_indication_t` 

Mac Common Part Sublayer (MCPS) indication representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mcps_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)` `[`type`](#structmcps__indication__t_1a6d19de4bff3aa21e8e9d7b6a056b1dfd) | type of the MCPS indication
`public `[`mcps_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmcps__data__t)` `[`data`](#structmcps__indication__t_1a6b95488b0fd8eaa0ceed07c1376b729e) | MCPS Data holder.
`public union mcps_indication_t::@367 `[`@368`](#structmcps__indication__t_1a245e4516ab4b77292b9b3a90cd2e52df) | 

## Members

#### `public `[`mcps_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1gaa9b3684dffd361db2ac3bb19f45c7c77)` `[`type`](#structmcps__indication__t_1a6d19de4bff3aa21e8e9d7b6a056b1dfd) 

type of the MCPS indication

#### `public `[`mcps_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmcps__data__t)` `[`data`](#structmcps__indication__t_1a6b95488b0fd8eaa0ceed07c1376b729e) 

MCPS Data holder.

#### `public union mcps_indication_t::@367 `[`@368`](#structmcps__indication__t_1a245e4516ab4b77292b9b3a90cd2e52df) 

# struct `mlme_indication_t` 

MAC (sub) Layer Management Entity (MLME) indication representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mlme_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)` `[`type`](#structmlme__indication__t_1ab467423a551a818ddf5a4d0a110339dc) | type of the MLME indication

## Members

#### `public `[`mlme_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lorawan_1ga36800c54d632dbf42cde55f931abe9df)` `[`type`](#structmlme__indication__t_1ab467423a551a818ddf5a4d0a110339dc) 

type of the MLME indication

