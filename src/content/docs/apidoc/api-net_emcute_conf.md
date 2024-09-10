---
title: api-net_emcute_conf.md
description: api-net_emcute_conf.md
---
# group `net_emcute_conf` 

Compile-time configuration options for emCute, an implementation of the OASIS MQTT-SN protocol for RIOT.

It is designed with a focus on small memory footprint and usability

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_EMCUTE_DEFAULT_PORT`](#group__net__emcute__conf_1ga4da718c9235ee40a0519a345b3c281f4)            | Default UDP port to listen on (also used as SRC port).
`define `[`CONFIG_EMCUTE_BUFSIZE`](#group__net__emcute__conf_1ga8c57280527ad8131161c1c578b0a370e)            | Buffer size used for emCute's transmit and receive buffers.
`define `[`CONFIG_EMCUTE_TOPIC_MAXLEN`](#group__net__emcute__conf_1ga21ca520cedd7589e49bd8bbfd0c921af)            | Maximum topic length.
`define `[`CONFIG_EMCUTE_KEEPALIVE`](#group__net__emcute__conf_1gabed6c726e753ce4d5735e811ea8ec38c)            | Keep-alive interval [in seconds] communicated to the gateway.
`define `[`CONFIG_EMCUTE_T_RETRY`](#group__net__emcute__conf_1ga52e718ab893d7cd838ad4005ba1f9d2c)            | Re-send interval [in seconds].
`define `[`CONFIG_EMCUTE_N_RETRY`](#group__net__emcute__conf_1gaa1cfa1c4f14b25412775b6f5f5ce759b)            | Number of retransmissions until requests time out.

## Members

#### `define `[`CONFIG_EMCUTE_DEFAULT_PORT`](#group__net__emcute__conf_1ga4da718c9235ee40a0519a345b3c281f4) 

Default UDP port to listen on (also used as SRC port).

Usage can be found in examples/emcute_mqttsn. Application code is expected to use this macro to assign the default port.

#### `define `[`CONFIG_EMCUTE_BUFSIZE`](#group__net__emcute__conf_1ga8c57280527ad8131161c1c578b0a370e) 

Buffer size used for emCute's transmit and receive buffers.

The buffer size MUST be less than 32768 on 16-bit and 8-bit platforms to prevent buffer overflows.

The overall buffer size used by emCute is this value time two (Rx + Tx).

#### `define `[`CONFIG_EMCUTE_TOPIC_MAXLEN`](#group__net__emcute__conf_1ga21ca520cedd7589e49bd8bbfd0c921af) 

Maximum topic length.

**Must** be less than (256 - 6) AND less than ( [CONFIG_EMCUTE_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute__conf_1ga8c57280527ad8131161c1c578b0a370e) - 6 )

#### `define `[`CONFIG_EMCUTE_KEEPALIVE`](#group__net__emcute__conf_1gabed6c726e753ce4d5735e811ea8ec38c) 

Keep-alive interval [in seconds] communicated to the gateway.

Keep alive interval in seconds which is communicated to the gateway in the CONNECT message. For more information, see MQTT-SN Spec v1.2, section 5.4.4. For default values, see section 7.2 -> TWAIT: > 5 min.

#### `define `[`CONFIG_EMCUTE_T_RETRY`](#group__net__emcute__conf_1ga52e718ab893d7cd838ad4005ba1f9d2c) 

Re-send interval [in seconds].

Interval used for timing the retry messages which are sent when the expected reply from GW is not received. The retry timer is started by the client when the message is sent and stopped when the expected reply from GW is received. If the timer times out and the expected GW’s reply is not received, the client retransmits the message. For more information, see MQTT-SN Spec v1.2, section 6.13. For default values, see section 7.2 -> Tretry: 10 to 15 sec.

#### `define `[`CONFIG_EMCUTE_N_RETRY`](#group__net__emcute__conf_1gaa1cfa1c4f14b25412775b6f5f5ce759b) 

Number of retransmissions until requests time out.

Maximum number of retransmissions in the event that the retry timer times out. After 'CONFIG_EMCUTE_N_RETRY' number of retransmissions, the client aborts the procedure and assumes that its MQTT-SN connection to the gateway is disconnected. For more information, see MQTT-SN Spec v1.2, section 6.13. For default values, see section 7.2 -> Nretry: 3-5.

