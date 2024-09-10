---
title: api-net_gcoap_conf.md
description: api-net_gcoap_conf.md
---
# group `net_gcoap_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GCOAP_FORWARD_PROXY_EMPTY_ACK_MS`](#group__net__gcoap__conf_1gaca65f1c500c7825f95114773aeb892fa)            | Timeout in milliseconds for the forward proxy to send an empty ACK without response.
`define `[`CONFIG_GCOAP_PORT`](#group__net__gcoap__conf_1ga789282d659dac059a3fc60777d7edc1c)            | Server port; use RFC 7252 default if not defined.
`define `[`CONFIG_GCOAPS_PORT`](#group__net__gcoap__conf_1gaf5938e047aea61b213c08ac9abccfa5c)            | Secure Server port; use RFC 7252 default if not defined.
`define `[`CONFIG_GCOAP_DTLS_HANDSHAKE_TIMEOUT_MSEC`](#group__net__gcoap__conf_1gaf0c53cff7ab5df4402b5d2d411d07067)            | Timeout for the DTLS handshake process.
`define `[`CONFIG_GCOAP_DTLS_MINIMUM_AVAILABLE_SESSIONS`](#group__net__gcoap__conf_1ga97653f76836851237e66347832814045)            | Number of minimum available sessions.
`define `[`CONFIG_GCOAP_DTLS_MINIMUM_AVAILABLE_SESSIONS_TIMEOUT_MSEC`](#group__net__gcoap__conf_1ga1e0d669b48b974bfc1b8652bdfa58110)            | Timeout for freeing up a session when minimum number of available sessions is not given.
`define `[`CONFIG_GCOAP_PDU_BUF_SIZE`](#group__net__gcoap__conf_1ga6e17d0741db5fa6da38b769ecdd4c80d)            | Size of the buffer used to build a CoAP request or response.
`define `[`CONFIG_GCOAP_REQ_WAITING_MAX`](#group__net__gcoap__conf_1ga9e08066a3ac288241d4baebd28771c5c)            | Maximum number of requests awaiting a response.
`define `[`CONFIG_GCOAP_TOKENLEN`](#group__net__gcoap__conf_1gab35593870a7e60761ab889faef41c0cc)            | Length in bytes for a token.
`define `[`CONFIG_GCOAP_NO_AUTO_INIT`](#group__net__gcoap__conf_1gaa7a1fc3b2ea6cf4bc3271e54730b30eb)            | Disables gcoap startup during system auto init.
`define `[`CONFIG_GCOAP_NO_RETRANS_BACKOFF`](#group__net__gcoap__conf_1ga495e88f650478dfe30806c896789f650)            | Turns off retransmission backoff when defined (undefined per default)
`define `[`CONFIG_GCOAP_NON_TIMEOUT_MSEC`](#group__net__gcoap__conf_1ga66f1549148730319c05c1df3d8a7de1e)            | Default time to wait for a non-confirmable response [in msec].
`define `[`CONFIG_GCOAP_OBS_CLIENTS_MAX`](#group__net__gcoap__conf_1ga506bf2591899bce02caf82574c77b5e1)            | Maximum number of Observe clients.
`define `[`CONFIG_GCOAP_OBS_NOTIFIERS_MAX`](#group__net__gcoap__conf_1ga3a86d9dad2e66b5f5329b263035c31e1)            | Maximum number of local notifying endpoint addresses.
`define `[`CONFIG_GCOAP_OBS_REGISTRATIONS_MAX`](#group__net__gcoap__conf_1ga063121204878b641058a4ef6ccfaad0a)            | Maximum number of registrations for Observable resources.
`define `[`CONFIG_GCOAP_OBS_VALUE_WIDTH`](#group__net__gcoap__conf_1ga1b7723c1e821302e2eaeac148acc5e0c)            | Width in bytes of the Observe option value for a notification.
`define `[`CONFIG_GCOAP_RESEND_BUFS_MAX`](#group__net__gcoap__conf_1ga54809827d25375c917f1313567cc5439)            | Count of PDU buffers available for resending confirmable messages.

## Members

#### `define `[`CONFIG_GCOAP_FORWARD_PROXY_EMPTY_ACK_MS`](#group__net__gcoap__conf_1gaca65f1c500c7825f95114773aeb892fa) 

Timeout in milliseconds for the forward proxy to send an empty ACK without response.

#### `define `[`CONFIG_GCOAP_PORT`](#group__net__gcoap__conf_1ga789282d659dac059a3fc60777d7edc1c) 

Server port; use RFC 7252 default if not defined.

#### `define `[`CONFIG_GCOAPS_PORT`](#group__net__gcoap__conf_1gaf5938e047aea61b213c08ac9abccfa5c) 

Secure Server port; use RFC 7252 default if not defined.

#### `define `[`CONFIG_GCOAP_DTLS_HANDSHAKE_TIMEOUT_MSEC`](#group__net__gcoap__conf_1gaf0c53cff7ab5df4402b5d2d411d07067) 

Timeout for the DTLS handshake process.

Set to 0 for infinite time

#### `define `[`CONFIG_GCOAP_DTLS_MINIMUM_AVAILABLE_SESSIONS`](#group__net__gcoap__conf_1ga97653f76836851237e66347832814045) 

Number of minimum available sessions.

If the count of available sessions falls below this threshold, the oldest used session will be closed after a timeout time. Set to 0 to deactivate this feature.

#### `define `[`CONFIG_GCOAP_DTLS_MINIMUM_AVAILABLE_SESSIONS_TIMEOUT_MSEC`](#group__net__gcoap__conf_1ga1e0d669b48b974bfc1b8652bdfa58110) 

Timeout for freeing up a session when minimum number of available sessions is not given.

#### `define `[`CONFIG_GCOAP_PDU_BUF_SIZE`](#group__net__gcoap__conf_1ga6e17d0741db5fa6da38b769ecdd4c80d) 

Size of the buffer used to build a CoAP request or response.

#### `define `[`CONFIG_GCOAP_REQ_WAITING_MAX`](#group__net__gcoap__conf_1ga9e08066a3ac288241d4baebd28771c5c) 

Maximum number of requests awaiting a response.

#### `define `[`CONFIG_GCOAP_TOKENLEN`](#group__net__gcoap__conf_1gab35593870a7e60761ab889faef41c0cc) 

Length in bytes for a token.

Value must be in the range 0 to [GCOAP_TOKENLEN_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga2f4f23b08bfc7b5bbc578235b1b3ab0e).

#### `define `[`CONFIG_GCOAP_NO_AUTO_INIT`](#group__net__gcoap__conf_1gaa7a1fc3b2ea6cf4bc3271e54730b30eb) 

Disables gcoap startup during system auto init.

If disabled, [gcoap_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gae4fa464865a37f897cfab4d3e679bdb1) must be called by some other means.

#### `define `[`CONFIG_GCOAP_NO_RETRANS_BACKOFF`](#group__net__gcoap__conf_1ga495e88f650478dfe30806c896789f650) 

Turns off retransmission backoff when defined (undefined per default)

In normal operations the timeout between retransmissions doubles. When CONFIG_GCOAP_NO_RETRANS_BACKOFF is defined this doubling does not happen.

**See also**: [CONFIG_COAP_ACK_TIMEOUT_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap__conf_1ga2e956b6f23757533d55b1dd6a5ab0875)

#### `define `[`CONFIG_GCOAP_NON_TIMEOUT_MSEC`](#group__net__gcoap__conf_1ga66f1549148730319c05c1df3d8a7de1e) 

Default time to wait for a non-confirmable response [in msec].

Set to 0 to disable timeout.

#### `define `[`CONFIG_GCOAP_OBS_CLIENTS_MAX`](#group__net__gcoap__conf_1ga506bf2591899bce02caf82574c77b5e1) 

Maximum number of Observe clients.

As documented in this file, the implementation is limited to one observer per resource. Therefore, every stored observer is associated with a different resource. If you have only one observable resource, you could set this value to 1.

#### `define `[`CONFIG_GCOAP_OBS_NOTIFIERS_MAX`](#group__net__gcoap__conf_1ga3a86d9dad2e66b5f5329b263035c31e1) 

Maximum number of local notifying endpoint addresses.

As documented in this file, the implementation is limited to one observer per resource. Therefore, every stored local endpoint alias is associated with an observation context of a different resource. If you have only one observable resource, you could set this value to 1.

#### `define `[`CONFIG_GCOAP_OBS_REGISTRATIONS_MAX`](#group__net__gcoap__conf_1ga063121204878b641058a4ef6ccfaad0a) 

Maximum number of registrations for Observable resources.

As documented in this file, the implementation is limited to one observer per resource. Therefore, every stored observation context is associated with a different resource. If you have only one observable resource, you could set this value to 1.

#### `define `[`CONFIG_GCOAP_OBS_VALUE_WIDTH`](#group__net__gcoap__conf_1ga1b7723c1e821302e2eaeac148acc5e0c) 

Width in bytes of the Observe option value for a notification.

This width is used to determine the length of the 'tick' used to measure the time between observable changes to a resource. A tick is expressed internally as GCOAP_OBS_TICK_EXPONENT, which is the base-2 log value of the tick length in microseconds.

The canonical setting for the value width is 3 (exponent 5), which results in a tick length of 32 usec, per sec. 3.4, 4.4 of the RFC. Width 2 (exponent 16) results in a tick length of ~65 msec, and width 1 (exponent 24) results in a tick length of ~17 sec.

The tick length must be short enough so that the Observe value strictly increases for each new notification. The purpose of the value is to allow a client to detect message reordering within the network latency period (128 sec). For resources that change only slowly, the reduced message length is useful when packet size is limited.

#### `define `[`CONFIG_GCOAP_RESEND_BUFS_MAX`](#group__net__gcoap__conf_1ga54809827d25375c917f1313567cc5439) 

Count of PDU buffers available for resending confirmable messages.

