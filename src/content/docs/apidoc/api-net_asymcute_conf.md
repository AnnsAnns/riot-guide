---
title: api-net_asymcute_conf.md
description: api-net_asymcute_conf.md
---
# group `net_asymcute_conf` 

Compile-time configuration options for Asymcute, an asynchronous MQTT-SN implementation based on the OASIS MQTT-SN protocol.

It provides a flexible interface that allows users to issue any number of concurrent requests to one or more different gateways simultaneously.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_ASYMCUTE_DEFAULT_PORT`](#group__net__asymcute__conf_1gad1ffe9d8bda4fdc402634f4dc9b6ae52)            | Default UDP port to listen on.
`define `[`CONFIG_ASYMCUTE_BUFSIZE`](#group__net__asymcute__conf_1ga662cd9e5fad77085e9605c7640b0dd55)            | Default buffer size used for receive and request buffers.
`define `[`CONFIG_ASYMCUTE_TOPIC_MAXLEN`](#group__net__asymcute__conf_1ga845403c4194477aad9ac4dea9657e2ca)            | Maximum topic length.
`define `[`CONFIG_ASYMCUTE_KEEPALIVE`](#group__net__asymcute__conf_1gae6cfdf1c8f8ddc181a76f078b0fa8cee)            | Keep alive interval [in s] communicated to the gateway.
`define `[`CONFIG_ASYMCUTE_KEEPALIVE_PING`](#group__net__asymcute__conf_1gaac7112f7ce660a4f182528767a47f7df)            | Interval to use for sending periodic ping messages.
`define `[`CONFIG_ASYMCUTE_T_RETRY`](#group__net__asymcute__conf_1ga761039de6d9d76015184194595acb116)            | Resend interval [in seconds].
`define `[`CONFIG_ASYMCUTE_N_RETRY`](#group__net__asymcute__conf_1ga9d90c495fde11943627498b8c8a6677d)            | Number of retransmissions until requests time out.

## Members

#### `define `[`CONFIG_ASYMCUTE_DEFAULT_PORT`](#group__net__asymcute__conf_1gad1ffe9d8bda4fdc402634f4dc9b6ae52) 

Default UDP port to listen on.

Usage can be found in examples/asymcute_mqttsn. Application code is expected to use this macro to assign the default port.

#### `define `[`CONFIG_ASYMCUTE_BUFSIZE`](#group__net__asymcute__conf_1ga662cd9e5fad77085e9605c7640b0dd55) 

Default buffer size used for receive and request buffers.

#### `define `[`CONFIG_ASYMCUTE_TOPIC_MAXLEN`](#group__net__asymcute__conf_1ga845403c4194477aad9ac4dea9657e2ca) 

Maximum topic length.

Must be less than (256 - 8) AND less than ( [CONFIG_ASYMCUTE_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute__conf_1ga662cd9e5fad77085e9605c7640b0dd55) - 8).

#### `define `[`CONFIG_ASYMCUTE_KEEPALIVE`](#group__net__asymcute__conf_1gae6cfdf1c8f8ddc181a76f078b0fa8cee) 

Keep alive interval [in s] communicated to the gateway.

Keep alive interval in seconds which is communicated to the gateway in the CONNECT message. For more information, see MQTT-SN Spec v1.2, section 5.4.4. For default values,see section 7.2 -> TWAIT: > 5 min.

#### `define `[`CONFIG_ASYMCUTE_KEEPALIVE_PING`](#group__net__asymcute__conf_1gaac7112f7ce660a4f182528767a47f7df) 

Interval to use for sending periodic ping messages.

The default behavior of this implementation is to send ping messages as soon as three quarters of the keep alive interval have passed.

Must be less than [CONFIG_ASYMCUTE_KEEPALIVE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute__conf_1gae6cfdf1c8f8ddc181a76f078b0fa8cee)

#### `define `[`CONFIG_ASYMCUTE_T_RETRY`](#group__net__asymcute__conf_1ga761039de6d9d76015184194595acb116) 

Resend interval [in seconds].

Interval used for timing the retry messages which are sent when the expected reply from GW is not received. The retry timer is started by the client when the message is sent and stopped when the expected reply from GW is received. If the timer times out and the expected GW’s reply is not received, the client retransmits the message. For more information, see MQTT-SN Spec v1.2, section 6.13. For default values, see section 7.2 -> Tretry: 10 to 15 sec.

#### `define `[`CONFIG_ASYMCUTE_N_RETRY`](#group__net__asymcute__conf_1ga9d90c495fde11943627498b8c8a6677d) 

Number of retransmissions until requests time out.

Maximum number of retransmissions in the event that the retry timer times out. After 'CONFIG_ASYMCUTE_N_RETRY' number of retransmissions, the client aborts the procedure and assumes that its MQTT-SN connection to the gateway is disconnected. For more information, see MQTT-SN Spec v1.2, section 6.13. For default values, see section 7.2 -> Nretry: 3-5.

