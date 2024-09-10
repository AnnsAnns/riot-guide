---
title: api-net_asymcute.md
description: api-net_asymcute.md
---
# group `net_asymcute` 

Asymcute is an asynchronous MQTT-SN implementation.

About`Asymcute` is a asynchronous MQTT-SN client implementation, aiming at providing the user a high degree of flexibility. It provides a flexible interface that allows users to issue any number of concurrent requests to one or more different gateways simultaneously.

Implementation stateImplemented features:

* Connecting to multiple gateways simultaneously

* Registration of topic names

* Publishing of data (QoS 0 and QoS 1)

* Subscription to topics

* Pre-defined topic IDs as well as short and normal topic names

Missing features:

* Gateway discovery process not implemented

* Last will feature not implemented

* No support for QoS level 2

* No support for QoS level -1

* No support for wildcard characters in topic names when subscribing

* Actual granted QoS level on subscription is ignored

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ASYMCUTE_HANDLER_PRIO`](#group__net__asymcute_1ga87ad28cdacc7ce695ba05f1a241e89bb)            | Default priority for Asymcute's handler thread.
`define `[`ASYMCUTE_HANDLER_STACKSIZE`](#group__net__asymcute_1ga935a45b5d78dd5813ac56c98daf86635)            | Default stack size for Asymcute's handler thread.
`enum `[`@342`](#group__net__asymcute_1gac96d10b474330fddfb7baaf7ecbf4340)            | Return values used by public Asymcute functions.
`enum `[`@343`](#group__net__asymcute_1ga4e42fc87bb951a8ba0c1f8641d68d5b0)            | Possible event types passed to the event callback.
`public inline static bool `[`asymcute_req_in_use`](#group__net__asymcute_1ga92124b263ef3709fd669abb5a4c42993)`(const `[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req)`            | Check if a given request context is currently used.
`public inline static bool `[`asymcute_sub_active`](#group__net__asymcute_1ga7f0d9d6d467bb3f2de9e6a8b5afe8875)`(const `[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * sub)`            | Check if a given subscription is currently active.
`public inline static void `[`asymcute_topic_reset`](#group__net__asymcute_1ga36fb528021b61029c6fa8152e5a9097a)`(`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)`            | Reset the given topic.
`public inline static bool `[`asymcute_topic_is_reg`](#group__net__asymcute_1ga71b891cfba9b331ba427431cd8cc5735)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)`            | Check if a given topic is currently registered with a gateway.
`public inline static bool `[`asymcute_topic_is_short`](#group__net__asymcute_1ga82e2b181964ecf5245b4c14b2263103a)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)`            | Check if a given topic is a short topic.
`public inline static bool `[`asymcute_topic_is_predef`](#group__net__asymcute_1ga82b51984856330809dba1c033222c4a8)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)`            | Check if a given topic is a pre-defined topic.
`public inline static bool `[`asymcute_topic_is_init`](#group__net__asymcute_1ga6aad1222b4d445c68acb68da4572fdc0)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)`            | Check if a given topic is initialized.
`public inline static bool `[`asymcute_topic_equal`](#group__net__asymcute_1ga32a1c2193b4a70be441659ebaed7fc27)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * a,const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * b)`            | Compare two given topics and check if they are equal.
`public int `[`asymcute_topic_init`](#group__net__asymcute_1ga9465868558079a3fddfd48e5c96f8192)`(`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic,const char * topic_name,uint16_t topic_id)`            | Initialize the given topic.
`public void `[`asymcute_handler_run`](#group__net__asymcute_1ga4f8611d9708f76fd6e5a31c232a49675)`(void)`            | Start the global Asymcute handler thread for processing timeouts and keep alive events.
`public bool `[`asymcute_is_connected`](#group__net__asymcute_1ga6253e7cc47d1d9446dba7654556f8919)`(const `[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con)`            | Check if the given connection context is connected to a gateway.
`public int `[`asymcute_connect`](#group__net__asymcute_1ga2971bbe550fac82466db461c9fbed714)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server,const char * cli_id,bool clean,`[`asymcute_will_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga838beda001b03932e4599787af33b72d)` * will,`[`asymcute_evt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga6a155a8aa7bc26a65bfdb19f01bc295e)` callback)`            | Connect to the given MQTT-SN gateway.
`public int `[`asymcute_disconnect`](#group__net__asymcute_1gae897abc4c7de491ff8ce2ffe02303159)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req)`            | Close the given connection.
`public int `[`asymcute_register`](#group__net__asymcute_1gaab451d9ec1bde2f542dbff75d97ec800)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)`            | Register a given topic with the connected gateway.
`public int `[`asymcute_publish`](#group__net__asymcute_1ga3feae54cc3ad7c7818618bbc2de45389)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic,const void * data,size_t data_len,uint8_t flags)`            | Publish the given data to the given topic.
`public int `[`asymcute_subscribe`](#group__net__asymcute_1ga782ad7d4c74e4356c56bff20a6932580)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * sub,`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic,`[`asymcute_sub_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1gabf029cbecbd96cae0b5b4f80f8921504)` callback,void * arg,uint8_t flags)`            | Subscribe to a given topic.
`public int `[`asymcute_unsubscribe`](#group__net__asymcute_1ga23afd6eff91b7b41e9e6131dbcaac939)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * sub)`            | Cancel an active subscription.
`struct `[`asymcute_req`](#structasymcute__req) | Asymcute request context.
`struct `[`asymcute_con`](#structasymcute__con) | Asymcute connection context.
`struct `[`asymcute_topic`](#structasymcute__topic) | Data-structure for holding topics and their registration status.
`struct `[`asymcute_sub`](#structasymcute__sub) | Data-structure holding the state of subscriptions.
`struct `[`asymcute_will`](#structasymcute__will) | Data structure for defining a last will.

## Members

#### `define `[`ASYMCUTE_HANDLER_PRIO`](#group__net__asymcute_1ga87ad28cdacc7ce695ba05f1a241e89bb) 

Default priority for Asymcute's handler thread.

#### `define `[`ASYMCUTE_HANDLER_STACKSIZE`](#group__net__asymcute_1ga935a45b5d78dd5813ac56c98daf86635) 

Default stack size for Asymcute's handler thread.

#### `enum `[`@342`](#group__net__asymcute_1gac96d10b474330fddfb7baaf7ecbf4340) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ASYMCUTE_OK            | all is good
ASYMCUTE_OVERFLOW            | error: insufficient buffer space
ASYMCUTE_GWERR            | error: bad gateway connection state
ASYMCUTE_NOTSUP            | error: feature not supported
ASYMCUTE_BUSY            | error: context already in use
ASYMCUTE_REGERR            | error: registration invalid
ASYMCUTE_SUBERR            | error: subscription invalid
ASYMCUTE_SENDERR            | error: unable to sent packet

Return values used by public Asymcute functions.

#### `enum `[`@343`](#group__net__asymcute_1ga4e42fc87bb951a8ba0c1f8641d68d5b0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ASYMCUTE_TIMEOUT            | request timed out
ASYMCUTE_CANCELED            | request was canceled
ASYMCUTE_REJECTED            | request was rejected
ASYMCUTE_CONNECTED            | connected to gateway
ASYMCUTE_DISCONNECTED            | connection got disconnected
ASYMCUTE_REGISTERED            | topic was registered
ASYMCUTE_PUBLISHED            | data was published
ASYMCUTE_SUBSCRIBED            | client was subscribed to topic
ASYMCUTE_UNSUBSCRIBED            | client was unsubscribed from topic

Possible event types passed to the event callback.

#### `public inline static bool `[`asymcute_req_in_use`](#group__net__asymcute_1ga92124b263ef3709fd669abb5a4c42993)`(const `[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req)` 

Check if a given request context is currently used.

#### Parameters
* `req` request context to check

#### Returns
true if context is currently used 

#### Returns
false if context is not used

#### `public inline static bool `[`asymcute_sub_active`](#group__net__asymcute_1ga7f0d9d6d467bb3f2de9e6a8b5afe8875)`(const `[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * sub)` 

Check if a given subscription is currently active.

#### Parameters
* `sub` subscription context to check

#### Returns
true if subscription is active 

#### Returns
false if subscription is not active

#### `public inline static void `[`asymcute_topic_reset`](#group__net__asymcute_1ga36fb528021b61029c6fa8152e5a9097a)`(`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)` 

Reset the given topic.

Make sure that the given topic is not used by any subscription or last will when calling this function

#### Parameters
* `topic` topic to reset

#### `public inline static bool `[`asymcute_topic_is_reg`](#group__net__asymcute_1ga71b891cfba9b331ba427431cd8cc5735)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)` 

Check if a given topic is currently registered with a gateway.

#### Parameters
* `topic` topic to check

#### Returns
true if topic is registered 

#### Returns
false if topic is not registered

#### `public inline static bool `[`asymcute_topic_is_short`](#group__net__asymcute_1ga82e2b181964ecf5245b4c14b2263103a)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)` 

Check if a given topic is a short topic.

#### Parameters
* `topic` topic to check

#### Returns
true if topic is a short topic 

#### Returns
false if topic is not short topic

#### `public inline static bool `[`asymcute_topic_is_predef`](#group__net__asymcute_1ga82b51984856330809dba1c033222c4a8)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)` 

Check if a given topic is a pre-defined topic.

#### Parameters
* `topic` topic to check

#### Returns
true if topic is pre-defined 

#### Returns
false if topic is not pre-defined

#### `public inline static bool `[`asymcute_topic_is_init`](#group__net__asymcute_1ga6aad1222b4d445c68acb68da4572fdc0)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)` 

Check if a given topic is initialized.

#### Parameters
* `topic` topic to check

#### Returns
true if topic is initialized 

#### Returns
false if topic is not initialized

#### `public inline static bool `[`asymcute_topic_equal`](#group__net__asymcute_1ga32a1c2193b4a70be441659ebaed7fc27)`(const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * a,const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * b)` 

Compare two given topics and check if they are equal.

#### Parameters
* `a` topic A 

* `b` topic B

#### Returns
true if both topics are equal 

#### Returns
false if topics differ

#### `public int `[`asymcute_topic_init`](#group__net__asymcute_1ga9465868558079a3fddfd48e5c96f8192)`(`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic,const char * topic_name,uint16_t topic_id)` 

Initialize the given topic.

#### Parameters
* `topic` topic to initialize 

* `topic_name` topic name (ASCII), may be NULL if topic should use a pre-defined topic ID 

* `topic_id` pre-defined topic ID, or don't care if `topic_name` is given

#### Returns
ASYMCUTE_OK on success 

#### Returns
ASYMCUTE_REGERR if topic is already registered 

#### Returns
ASYMCUTE_OVERFLOW if topic name does not fit into buffer or if pre- defined topic ID is invalid

#### `public void `[`asymcute_handler_run`](#group__net__asymcute_1ga4f8611d9708f76fd6e5a31c232a49675)`(void)` 

Start the global Asymcute handler thread for processing timeouts and keep alive events.

This function is typically called during system initialization.

#### `public bool `[`asymcute_is_connected`](#group__net__asymcute_1ga6253e7cc47d1d9446dba7654556f8919)`(const `[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con)` 

Check if the given connection context is connected to a gateway.

#### Parameters
* `con` connection to check

#### Returns
true if context is connected 

#### Returns
false if not connected

#### `public int `[`asymcute_connect`](#group__net__asymcute_1ga2971bbe550fac82466db461c9fbed714)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server,const char * cli_id,bool clean,`[`asymcute_will_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga838beda001b03932e4599787af33b72d)` * will,`[`asymcute_evt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga6a155a8aa7bc26a65bfdb19f01bc295e)` callback)` 

Connect to the given MQTT-SN gateway.

#### Parameters
* `con` connection to use 

* `req` request context to use for CONNECT procedure 

* `server` UDP endpoint of the target gateway 

* `cli_id` client ID to register with the gateway 

* `clean` set `true` to start a clean session 

* `will` last will (currently not implemented) 

* `callback` user callback triggered on defined events

#### Returns
ASYMCUTE_OK if CONNECT message has been sent 

#### Returns
ASYMCUTE_NOTSUP if last will was given (temporary until implemented) 

#### Returns
ASYMCUTE_OVERFLOW if `cli_id` is larger than ASYMCUTE_ID_MAXLEN 

#### Returns
ASYMCUTE_GWERR if initializing the socket for the connection failed 

#### Returns
ASYMCUTE_BUSY if the connection or the request context are in use

#### `public int `[`asymcute_disconnect`](#group__net__asymcute_1gae897abc4c7de491ff8ce2ffe02303159)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req)` 

Close the given connection.

#### Parameters
* `con` connection to close 

* `req` request context to use for DISCONNECT procedure

#### Returns
ASYMCUTE_OK if DISCONNECT message has been sent 

#### Returns
ASYMCUTE_GWERR if connection context is not connected 

#### Returns
ASYMCUTE_BUSY if the given request context is already in use

#### `public int `[`asymcute_register`](#group__net__asymcute_1gaab451d9ec1bde2f542dbff75d97ec800)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic)` 

Register a given topic with the connected gateway.

#### Parameters
* `con` connection to use 

* `req` request context to use for REGISTER procedure 

* `topic` topic to register

#### Returns
ASYMCUTE_OK if REGISTER message has been sent 

#### Returns
ASYMCUTE_REGERR if topic is already registered 

#### Returns
ASYMCUTE_GWERR if not connected to a gateway 

#### Returns
ASYMCUTE_BUSY if the given request context is already in use

#### `public int `[`asymcute_publish`](#group__net__asymcute_1ga3feae54cc3ad7c7818618bbc2de45389)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,const `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic,const void * data,size_t data_len,uint8_t flags)` 

Publish the given data to the given topic.

#### Parameters
* `con` connection to use 

* `req` request context used for PUBLISH procedure 

* `topic` publish data to this topic 

* `data` actual payload to send 

* `data_len` size of `data` in bytes 

* `flags` additional flags (QoS level, DUP, and RETAIN)

#### Returns
ASYMCUTE_OK if PUBLISH message has been sent 

#### Returns
ASYMCUTE_NOTSUP if unsupported flags have been set 

#### Returns
ASYMCUTE_OVERFLOW if data does not fit into transmit buffer 

#### Returns
ASYMCUTE_REGERR if given topic is not registered 

#### Returns
ASYMCUTE_GWERR if not connected to a gateway 

#### Returns
ASYMCUTE_BUSY if the given request context is already in use

#### `public int `[`asymcute_subscribe`](#group__net__asymcute_1ga782ad7d4c74e4356c56bff20a6932580)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * sub,`[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * topic,`[`asymcute_sub_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1gabf029cbecbd96cae0b5b4f80f8921504)` callback,void * arg,uint8_t flags)` 

Subscribe to a given topic.

#### Parameters
* `con` connection to use 

* `req` request context used for SUBSCRIBE procedure 

* `sub` subscription context to store subscription state 

* `topic` topic to subscribe to, must be initialized (see [asymcute_topic_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga9465868558079a3fddfd48e5c96f8192)) 

* `callback` user callback triggered on events for this subscription 

* `arg` user supplied argument passed to the event callback 

* `flags` additional flags (QoS level and DUP)

#### Returns
ASYMCUTE_OK if SUBSCRIBE message has been sent 

#### Returns
ASYMCUTE_NOTSUP if invalid or unsupported flags have been set 

#### Returns
ASYMCUTE_REGERR if topic is not initialized 

#### Returns
ASYMCUTE_GWERR if not connected to a gateway 

#### Returns
ASYMCUTE_SUBERR if already subscribed to the given topic 

#### Returns
ASYMCUTE_BUSY if the given request context is already in use

#### `public int `[`asymcute_unsubscribe`](#group__net__asymcute_1ga23afd6eff91b7b41e9e6131dbcaac939)`(`[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * con,`[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * req,`[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * sub)` 

Cancel an active subscription.

#### Parameters
* `con` connection to use 

* `req` request context used for UNSUBSCRIBE procedure 

* `sub` subscription to cancel

#### Returns
ASYMCUTE_OK if UNSUBSCRIBE message has been sent 

#### Returns
ASYMCUTE_SUBERR if subscription is not currently active 

#### Returns
ASYMCUTE_GWERR if not connected to a gateway 

#### Returns
ASYMCUTE_BUSY if the given request context is already in use

# struct `asymcute_req` 

Asymcute request context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structasymcute__req_1a2527b5daadfb850119ed6c447fa8726d) | synchronization lock
`public struct `[`asymcute_req`](#structasymcute__req)` * `[`next`](#structasymcute__req_1af3171e1d027a7affdc72e8d287e20a6c) | the requests list entry
`public `[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * `[`con`](#structasymcute__req_1a1b1234789167134c332387746d92897c) | connection the request is using
`public `[`asymcute_to_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga01836df85dd33a5d868dac4973995850)` `[`cb`](#structasymcute__req_1a413b55e88fcfc9b216a23d9778cca813) | internally used callback
`public void * `[`arg`](#structasymcute__req_1a87256c94a76eb724e783daeb52fbefe1) | internally used additional state
`public `[`event_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__callback__t)` `[`to_evt`](#structasymcute__req_1a9d6502fe09fe982e3f979e79882cbba6) | timeout event
`public `[`event_timeout_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__timeout__t)` `[`to_timer`](#structasymcute__req_1a610f15ad71c8252802b8a0a7f0b00b01) | timeout timer
`public uint8_t `[`data`](#structasymcute__req_1ad23181ef1ea864fdf65219606b13379a) | buffer holding the request's data
`public size_t `[`data_len`](#structasymcute__req_1aa9f3a28221bbdf84e40c2fba6c34ce76) | length of the request packet in byte
`public uint16_t `[`msg_id`](#structasymcute__req_1acea0a364765434cc7527b4de906b8bef) | used message id for this request
`public uint8_t `[`retry_cnt`](#structasymcute__req_1a70c115697d8ade0e4489387315be6fa1) | retransmission counter

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structasymcute__req_1a2527b5daadfb850119ed6c447fa8726d) 

synchronization lock

#### `public struct `[`asymcute_req`](#structasymcute__req)` * `[`next`](#structasymcute__req_1af3171e1d027a7affdc72e8d287e20a6c) 

the requests list entry

#### `public `[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * `[`con`](#structasymcute__req_1a1b1234789167134c332387746d92897c) 

connection the request is using

#### `public `[`asymcute_to_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga01836df85dd33a5d868dac4973995850)` `[`cb`](#structasymcute__req_1a413b55e88fcfc9b216a23d9778cca813) 

internally used callback

#### `public void * `[`arg`](#structasymcute__req_1a87256c94a76eb724e783daeb52fbefe1) 

internally used additional state

#### `public `[`event_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__callback__t)` `[`to_evt`](#structasymcute__req_1a9d6502fe09fe982e3f979e79882cbba6) 

timeout event

#### `public `[`event_timeout_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__timeout__t)` `[`to_timer`](#structasymcute__req_1a610f15ad71c8252802b8a0a7f0b00b01) 

timeout timer

#### `public uint8_t `[`data`](#structasymcute__req_1ad23181ef1ea864fdf65219606b13379a) 

buffer holding the request's data

#### `public size_t `[`data_len`](#structasymcute__req_1aa9f3a28221bbdf84e40c2fba6c34ce76) 

length of the request packet in byte

#### `public uint16_t `[`msg_id`](#structasymcute__req_1acea0a364765434cc7527b4de906b8bef) 

used message id for this request

#### `public uint8_t `[`retry_cnt`](#structasymcute__req_1a70c115697d8ade0e4489387315be6fa1) 

retransmission counter

# struct `asymcute_con` 

Asymcute connection context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structasymcute__con_1aae21eb954895c932e179f8dae60073ff) | synchronization lock
`public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` `[`sock`](#structasymcute__con_1a29f045bcecacfc12f2e482e9b62f14ce) | socket used by a connections
`public `[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * `[`pending`](#structasymcute__con_1a8c2d6d56d86a6bd5489465cd661402f3) | list holding pending requests
`public `[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * `[`subscriptions`](#structasymcute__con_1adb9c218301fb6a4669773137d5ab8a44) | list holding active subscriptions
`public `[`asymcute_evt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga6a155a8aa7bc26a65bfdb19f01bc295e)` `[`user_cb`](#structasymcute__con_1a797de9c7730dbb810c21e98576c134e6) | event callback provided by user
`public `[`event_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__callback__t)` `[`keepalive_evt`](#structasymcute__con_1a5efd8a3e2b3cfe6a53c871a9e1b8c002) | keep alive event
`public `[`event_timeout_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__timeout__t)` `[`keepalive_timer`](#structasymcute__con_1aaa1766cc48908ed856af830bff3496c3) | keep alive timer
`public uint16_t `[`last_id`](#structasymcute__con_1ad90c14463a91deb4ecba5084e19b4f06) | last used message ID for this connection
`public uint8_t `[`keepalive_retry_cnt`](#structasymcute__con_1ab560fcb5cb7de29d5f6087bed80aa203) | keep alive transmission counter
`public uint8_t `[`state`](#structasymcute__con_1afe180add2fd92c7c228ed1336b672735) | connection state
`public uint8_t `[`rxbuf`](#structasymcute__con_1a79d839ceced9b985fa4418abafcc39fc) | connection specific receive buf
`public char `[`cli_id`](#structasymcute__con_1a9da78e7c9d4ac5c2d4a02ee9a0e18f12) | buffer to store client ID

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structasymcute__con_1aae21eb954895c932e179f8dae60073ff) 

synchronization lock

#### `public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` `[`sock`](#structasymcute__con_1a29f045bcecacfc12f2e482e9b62f14ce) 

socket used by a connections

#### `public `[`asymcute_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga873c069b533c82854b9d1e1ee5b2f65c)` * `[`pending`](#structasymcute__con_1a8c2d6d56d86a6bd5489465cd661402f3) 

list holding pending requests

#### `public `[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * `[`subscriptions`](#structasymcute__con_1adb9c218301fb6a4669773137d5ab8a44) 

list holding active subscriptions

#### `public `[`asymcute_evt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga6a155a8aa7bc26a65bfdb19f01bc295e)` `[`user_cb`](#structasymcute__con_1a797de9c7730dbb810c21e98576c134e6) 

event callback provided by user

#### `public `[`event_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__callback__t)` `[`keepalive_evt`](#structasymcute__con_1a5efd8a3e2b3cfe6a53c871a9e1b8c002) 

keep alive event

#### `public `[`event_timeout_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__timeout__t)` `[`keepalive_timer`](#structasymcute__con_1aaa1766cc48908ed856af830bff3496c3) 

keep alive timer

#### `public uint16_t `[`last_id`](#structasymcute__con_1ad90c14463a91deb4ecba5084e19b4f06) 

last used message ID for this connection

#### `public uint8_t `[`keepalive_retry_cnt`](#structasymcute__con_1ab560fcb5cb7de29d5f6087bed80aa203) 

keep alive transmission counter

#### `public uint8_t `[`state`](#structasymcute__con_1afe180add2fd92c7c228ed1336b672735) 

connection state

#### `public uint8_t `[`rxbuf`](#structasymcute__con_1a79d839ceced9b985fa4418abafcc39fc) 

connection specific receive buf

#### `public char `[`cli_id`](#structasymcute__con_1a9da78e7c9d4ac5c2d4a02ee9a0e18f12) 

buffer to store client ID

# struct `asymcute_topic` 

Data-structure for holding topics and their registration status.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * `[`con`](#structasymcute__topic_1a368cad30b55c26a9e9a76ccc95a99db4) | connection used for registration
`public char `[`name`](#structasymcute__topic_1a4d81fa1e7d32526be3df88565ab60272) | topic string (ASCII only)
`public uint8_t `[`flags`](#structasymcute__topic_1a2c5a3cdc86c3a7ff47a6591633cea245) | normal, short, or pre-defined
`public uint16_t `[`id`](#structasymcute__topic_1a648e34d19136dd6e309874b3fd0e463d) | topic id

## Members

#### `public `[`asymcute_con_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga3c5f65129350ef59e24e54ec99b54262)` * `[`con`](#structasymcute__topic_1a368cad30b55c26a9e9a76ccc95a99db4) 

connection used for registration

#### `public char `[`name`](#structasymcute__topic_1a4d81fa1e7d32526be3df88565ab60272) 

topic string (ASCII only)

#### `public uint8_t `[`flags`](#structasymcute__topic_1a2c5a3cdc86c3a7ff47a6591633cea245) 

normal, short, or pre-defined

#### `public uint16_t `[`id`](#structasymcute__topic_1a648e34d19136dd6e309874b3fd0e463d) 

topic id

# struct `asymcute_sub` 

Data-structure holding the state of subscriptions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * `[`next`](#structasymcute__sub_1a62aac035e0cbb505a7edad365684b253) | the subscriptions list entry
`public `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * `[`topic`](#structasymcute__sub_1acffefd4db6e2d25452f0b7151971182c) | topic we subscribe to
`public `[`asymcute_sub_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1gabf029cbecbd96cae0b5b4f80f8921504)` `[`cb`](#structasymcute__sub_1a796efb7b62043dc5d09ede0d37607413) | called on incoming data
`public void * `[`arg`](#structasymcute__sub_1afd6b1a2cc98b021a326037a3cba65a49) | user supplied callback argument

## Members

#### `public `[`asymcute_sub_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga51bb3262b453634b1e6efc7545f9c81d)` * `[`next`](#structasymcute__sub_1a62aac035e0cbb505a7edad365684b253) 

the subscriptions list entry

#### `public `[`asymcute_topic_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1ga789f6d764cc5c73d32261cd62d622dcb)` * `[`topic`](#structasymcute__sub_1acffefd4db6e2d25452f0b7151971182c) 

topic we subscribe to

#### `public `[`asymcute_sub_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__asymcute_1gabf029cbecbd96cae0b5b4f80f8921504)` `[`cb`](#structasymcute__sub_1a796efb7b62043dc5d09ede0d37607413) 

called on incoming data

#### `public void * `[`arg`](#structasymcute__sub_1afd6b1a2cc98b021a326037a3cba65a49) 

user supplied callback argument

# struct `asymcute_will` 

Data structure for defining a last will.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`topic`](#structasymcute__will_1a8c7a346977d0d30c8d867eebdb9ef228) | last will topic
`public void * `[`msg`](#structasymcute__will_1a772469d1e0bea05eabf4847f21edd3d7) | last will message content
`public size_t `[`msg_len`](#structasymcute__will_1a6779e14fcf4027d519cf54caf426940b) | length of last will message content

## Members

#### `public const char * `[`topic`](#structasymcute__will_1a8c7a346977d0d30c8d867eebdb9ef228) 

last will topic

#### `public void * `[`msg`](#structasymcute__will_1a772469d1e0bea05eabf4847f21edd3d7) 

last will message content

#### `public size_t `[`msg_len`](#structasymcute__will_1a6779e14fcf4027d519cf54caf426940b) 

length of last will message content

