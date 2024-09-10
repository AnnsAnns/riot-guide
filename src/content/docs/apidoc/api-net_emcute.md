---
title: api-net_emcute.md
description: api-net_emcute.md
---
# group `net_emcute` 

emCute, the MQTT-SN implementation for RIOT

AboutemCute is the implementation of the OASIS MQTT-SN protocol for RIOT. It is designed with a focus on small memory footprint and usability.

Design Decisions and Restrictions

* emCute is designed to run on top of UDP only, making use of [UDP sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp). The design is not intended to be used with any other transport.

The implementation is based on a 2-thread model: emCute needs one thread of its own, in which receiving of packets and sending of ping messages are handled. All 'user space functions' have to run from (a) different (i.e. user) thread(s). emCute uses thread flags to synchronize between threads.

Further know restrictions are:

* ASCII topic names only (no support for UTF8 names, yet)

* topic length is restricted to fit in a single length byte (248 byte max)

* no support for wildcards in topic names. This feature requires more elaborate internal memory management, supposedly at the cost of quite increased ROM and RAM usage

* no retransmit when receiving a REJ_CONG (reject, reason congestion). when getting a REJ_CONG (reject, reason congestion), the spec tells us to resend the original message after T_WAIT (default: >5min). This is not supported, as this would require to block to calling thread (or keep state) for long periods of time and is (in Hauke's opinion) not feasible for constrained nodes.

Error HandlingThis implementation tries minimize parameter checks to a minimum, checking as many parameters as feasible using assertions. For the sake of run-time stability and usability, typical overflow checks are always done during run- time and explicit error values returned in case of errors.

Implementation stateIn the current state, emCute supports:

* connecting to a gateway

* disconnecting from gateway

* registering a last will topic and message during connection setup

* registering topic names with the gateway (obtaining topic IDs)

* subscribing to topics

* unsubscribing from topics

* updating will topic

* updating will message

* sending out periodic PINGREQ messages

* handling re-transmits

The following features are however still missing (but planned): 
> Todo: Gateway discovery (so far there is no support for handling ADVERTISE, GWINFO, and SEARCHGW). Open question to answer here: how to put / how to encode the IPv(4/6) address AND the port of a gateway in the GwAdd field of the GWINFO message 

QOS level 2 

QOS level -1 

put the node to sleep (send DISCONNECT with duration field set) 

handle DISCONNECT messages initiated by the broker/gateway 

support for pre-defined and short topic IDs 

handle (previously) active subscriptions on reconnect/disconnect 

handle re-connect/disconnect from unresponsive gateway (in case a number of ping requests are unanswered) 

react only to incoming ping requests that are actually send by the gateway we are connected to

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@352`](#group__net__emcute_1ga0e147611e2d3a8b602fa751868b4ad1e)            | MQTT-SN flags.
`enum `[`@353`](#group__net__emcute_1gae6f7b430ccd2b8df9ba02ada329b4e02)            | Possible emCute return values.
`public int `[`emcute_con`](#group__net__emcute_1ga8ffc03d268fb7ae2af91ad748595cbe1)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,bool clean,const char * will_topic,const void * will_msg,size_t will_msg_len,unsigned flags)`            | Connect to a given MQTT-SN gateway (CONNECT)
`public int `[`emcute_discon`](#group__net__emcute_1ga3d83536ba505000348a021666b19a89d)`(void)`            | Disconnect from the gateway we are currently connected to.
`public int `[`emcute_reg`](#group__net__emcute_1ga71cd8a206c51a495e6da204260fcc8df)`(`[`emcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_emcute.md#structemcute__topic__t)` * topic)`            | Get a topic ID for the given topic name from the gateway.
`public int `[`emcute_pub`](#group__net__emcute_1gaaa159985e36dc900e429624448dd9322)`(`[`emcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_emcute.md#structemcute__topic__t)` * topic,const void * buf,size_t len,unsigned flags)`            | Publish data on the given topic.
`public int `[`emcute_sub`](#group__net__emcute_1gabe2de429efc02c26aff44437dc9778d9)`(`[`emcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1gad4a66b4f190bdf12668d5a49d02abc32)` * sub,unsigned flags)`            | Subscribe to the given topic.
`public int `[`emcute_unsub`](#group__net__emcute_1ga6d79a8259cf39716746ea54973bc0f3e)`(`[`emcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1gad4a66b4f190bdf12668d5a49d02abc32)` * sub)`            | Unsubscripbe the given topic.
`public int `[`emcute_willupd_topic`](#group__net__emcute_1ga185d561d61f9b0ba802a0d12830bcf92)`(const char * topic,unsigned flags)`            | Update the last will topic.
`public int `[`emcute_willupd_msg`](#group__net__emcute_1ga51dbc5c588181799959e20d91e594791)`(const void * data,size_t len)`            | Update the last will message.
`public void `[`emcute_run`](#group__net__emcute_1gade684fa9e16a1c16ed68c96d7a5c1e14)`(uint16_t port,const char * id)`            | Run emCute, will 'occupy' the calling thread.
`public const char * `[`emcute_type_str`](#group__net__emcute_1ga7d47a49154b0b6977291e2444b4534e8)`(uint8_t type)`            | Return the string representation of the given type value.
`struct `[`emcute_topic_t`](#structemcute__topic__t) | MQTT-SN topic.
`struct `[`emcute_sub`](#structemcute__sub) | Data-structure for keeping track of topics we register to.

## Members

#### `enum `[`@352`](#group__net__emcute_1ga0e147611e2d3a8b602fa751868b4ad1e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
EMCUTE_DUP            | duplicate flag
EMCUTE_QOS_MASK            | QoS level mask.
EMCUTE_QOS_2            | QoS level 2.
EMCUTE_QOS_1            | QoS level 1.
EMCUTE_QOS_0            | QoS level 0.
EMCUTE_RETAIN            | retain flag
EMCUTE_WILL            | will flag, used during CONNECT
EMCUTE_CS            | clean session flag
EMCUTE_TIT_MASK            | topic ID type mask
EMCUTE_TIT_SHORT            | topic ID: short
EMCUTE_TIT_PREDEF            | topic ID: pre-defined
EMCUTE_TIT_NORMAL            | topic ID: normal

MQTT-SN flags.

All MQTT-SN functions only support a sub-set of the available flags. It is up to the user to only supply valid/supported flags to a function. emCute will trigger assertion fails on the use of unsupported flags (if compiled with DEVELHELP).

Refer to the MQTT-SN spec section 5.3.4 for further information.

#### `enum `[`@353`](#group__net__emcute_1gae6f7b430ccd2b8df9ba02ada329b4e02) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
EMCUTE_OK            | everything went as expect
EMCUTE_NOGW            | error: not connected to a gateway
EMCUTE_REJECT            | error: operation was rejected by broker
EMCUTE_OVERFLOW            | error: ran out of buffer space
EMCUTE_TIMEOUT            | error: timeout
EMCUTE_NOTSUP            | error: feature not supported

Possible emCute return values.

#### `public int `[`emcute_con`](#group__net__emcute_1ga8ffc03d268fb7ae2af91ad748595cbe1)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,bool clean,const char * will_topic,const void * will_msg,size_t will_msg_len,unsigned flags)` 

Connect to a given MQTT-SN gateway (CONNECT)

When called while already connected to a gateway, call [emcute_discon()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1ga3d83536ba505000348a021666b19a89d) first to disconnect from the current gateway.

#### Parameters
* `remote` address and port of the target MQTT-SN gateway 

* `clean` set to true to start a clean session 

* `will_topic` last will topic name, no last will will be configured if set to NULL 

* `will_msg` last will message content, will be ignored if `will_topic` is set to NULL 

* `will_msg_len` length of `will_msg` in byte 

* `flags` flags used for the last will, allowed are retain and QoS

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if already connected to a gateway 

#### Returns
EMCUTE_REJECT on connection refused by gateway 

#### Returns
EMCUTE_TIMEOUT on connection timeout

#### `public int `[`emcute_discon`](#group__net__emcute_1ga3d83536ba505000348a021666b19a89d)`(void)` 

Disconnect from the gateway we are currently connected to.

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_GW if not connected to a gateway 

#### Returns
EMCUTE_TIMEOUT on response timeout

#### `public int `[`emcute_reg`](#group__net__emcute_1ga71cd8a206c51a495e6da204260fcc8df)`(`[`emcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_emcute.md#structemcute__topic__t)` * topic)` 

Get a topic ID for the given topic name from the gateway.

#### Parameters
* `topic` topic to register, topic.name **must not** be NULL

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if not connected to a gateway 

#### Returns
EMCUTE_OVERFLOW if length of topic name exceeds [CONFIG_EMCUTE_TOPIC_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute__conf_1ga21ca520cedd7589e49bd8bbfd0c921af)

#### Returns
EMCUTE_TIMEOUT on connection timeout

#### `public int `[`emcute_pub`](#group__net__emcute_1gaaa159985e36dc900e429624448dd9322)`(`[`emcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_emcute.md#structemcute__topic__t)` * topic,const void * buf,size_t len,unsigned flags)` 

Publish data on the given topic.

#### Parameters
* `topic` topic to send data to, topic **must** be registered (topic.id **must** populated). 

* `buf` data to publish 

* `len` length of `data` in bytes 

* `flags` flags used for publication, allowed are QoS and retain

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if not connected to a gateway 

#### Returns
EMCUTE_REJECT if publish message was rejected (QoS > 0 only) 

#### Returns
EMCUTE_OVERFLOW if length of data exceeds [CONFIG_EMCUTE_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute__conf_1ga8c57280527ad8131161c1c578b0a370e)

#### Returns
EMCUTE_TIMEOUT on connection timeout (QoS > 0 only) 

#### Returns
EMCUTE_NOTSUP on unsupported flag values

#### `public int `[`emcute_sub`](#group__net__emcute_1gabe2de429efc02c26aff44437dc9778d9)`(`[`emcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1gad4a66b4f190bdf12668d5a49d02abc32)` * sub,unsigned flags)` 

Subscribe to the given topic.

When calling this function, `sub->topic.name` and `sub->cb`**must** be set.

#### Parameters
* `sub` subscription context, `sub->topic.name` and `sub->cb`**must** not be NULL. 

* `flags` flags used when subscribing, allowed are QoS, DUP, and topic ID type

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if not connected to a gateway 

#### Returns
EMCUTE_OVERFLOW if length of topic name exceeds [CONFIG_EMCUTE_TOPIC_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute__conf_1ga21ca520cedd7589e49bd8bbfd0c921af)

#### Returns
EMCUTE_TIMEOUT on connection timeout

#### `public int `[`emcute_unsub`](#group__net__emcute_1ga6d79a8259cf39716746ea54973bc0f3e)`(`[`emcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1gad4a66b4f190bdf12668d5a49d02abc32)` * sub)` 

Unsubscripbe the given topic.

#### Parameters
* `sub` subscription context

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if not connected to a gateway 

#### Returns
EMCUTE_TIMEOUT on connection timeout

#### `public int `[`emcute_willupd_topic`](#group__net__emcute_1ga185d561d61f9b0ba802a0d12830bcf92)`(const char * topic,unsigned flags)` 

Update the last will topic.

#### Parameters
* `topic` new last will topic 

* `flags` flags used for the topic, allowed are QoS and retain

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if not connected to a gateway 

#### Returns
EMCUTE_OVERFLOW if length of topic name exceeds [CONFIG_EMCUTE_TOPIC_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute__conf_1ga21ca520cedd7589e49bd8bbfd0c921af)

#### Returns
EMCUTE_REJECT on rejection by the gateway 

#### Returns
EMCUTE_TIMEOUT on response timeout

#### `public int `[`emcute_willupd_msg`](#group__net__emcute_1ga51dbc5c588181799959e20d91e594791)`(const void * data,size_t len)` 

Update the last will message.

#### Parameters
* `data` new message to send on last will 

* `len` length of `data` in bytes

#### Returns
EMCUTE_OK on success 

#### Returns
EMCUTE_NOGW if not connected to a gateway 

#### Returns
EMCUTE_OVERFLOW if length of the given message exceeds [CONFIG_EMCUTE_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute__conf_1ga8c57280527ad8131161c1c578b0a370e)

#### Returns
EMCUTE_REJECT on rejection by the gateway 

#### Returns
EMCUTE_TIMEOUT on response timeout

#### `public void `[`emcute_run`](#group__net__emcute_1gade684fa9e16a1c16ed68c96d7a5c1e14)`(uint16_t port,const char * id)` 

Run emCute, will 'occupy' the calling thread.

This function will run the emCute message receiver. It will block the thread it is running in.

#### Parameters
* `port` UDP port used for listening (default: 1883) 

* `id` client ID (should be unique)

#### `public const char * `[`emcute_type_str`](#group__net__emcute_1ga7d47a49154b0b6977291e2444b4534e8)`(uint8_t type)` 

Return the string representation of the given type value.

This function is for debugging purposes.

#### Parameters
* `type` MQTT-SN message type

#### Returns
string representation of the given type 

#### Returns
'UNKNOWN' on invalid type value

# struct `emcute_topic_t` 

MQTT-SN topic.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structemcute__topic__t_1a175f4ed3d809e986209c0472de974610) | topic string (currently ASCII only)
`public uint16_t `[`id`](#structemcute__topic__t_1a74745bf8eead9ac1fb2ff292a51de7ff) | topic id, as assigned by the gateway

## Members

#### `public const char * `[`name`](#structemcute__topic__t_1a175f4ed3d809e986209c0472de974610) 

topic string (currently ASCII only)

#### `public uint16_t `[`id`](#structemcute__topic__t_1a74745bf8eead9ac1fb2ff292a51de7ff) 

topic id, as assigned by the gateway

# struct `emcute_sub` 

Data-structure for keeping track of topics we register to.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`emcute_sub`](#structemcute__sub)` * `[`next`](#structemcute__sub_1a500c2fe4763e680ae2e64d4505563de6) | next subscription (saved in a list)
`public `[`emcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_emcute.md#structemcute__topic__t)` `[`topic`](#structemcute__sub_1a3c489713d30f4435868430871e2982cd) | topic we subscribe to
`public `[`emcute_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1ga8cb06b314ff2eda4230e9f0e33a07d8b)` `[`cb`](#structemcute__sub_1aa697ab539f1512c1a8116e2d3cb47b63) | function called when receiving messages
`public void * `[`arg`](#structemcute__sub_1abbf9b0ed2989e37d619ca8089a129868) | optional custom argument

## Members

#### `public struct `[`emcute_sub`](#structemcute__sub)` * `[`next`](#structemcute__sub_1a500c2fe4763e680ae2e64d4505563de6) 

next subscription (saved in a list)

#### `public `[`emcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_emcute.md#structemcute__topic__t)` `[`topic`](#structemcute__sub_1a3c489713d30f4435868430871e2982cd) 

topic we subscribe to

#### `public `[`emcute_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__emcute_1ga8cb06b314ff2eda4230e9f0e33a07d8b)` `[`cb`](#structemcute__sub_1aa697ab539f1512c1a8116e2d3cb47b63) 

function called when receiving messages

#### `public void * `[`arg`](#structemcute__sub_1abbf9b0ed2989e37d619ca8089a129868) 

optional custom argument

