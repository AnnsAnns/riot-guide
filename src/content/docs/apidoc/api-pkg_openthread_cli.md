---
title: api-pkg_openthread_cli.md
description: api-pkg_openthread_cli.md
---
# group `pkg_openthread_cli` 

An open source implementation of [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) stack.

**See also**: [https://github.com/openthread/openthread](https://github.com/openthread/openthread)

[Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) is a mesh oriented network stack running for IEEE802.15.4 networks.

The RIOT port allows to directly call OpenThread API functions using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event). For example:

```cpp
#include "ot.h"
#include "openthread/thread.h"

static void _panid_handler(event_t *event);
static event_t event_panid = {
    .handler = _panid_handler
};

static void _panid_handler(event_t *event)
{
    (void) event;
    uint16_t panid = otLinkGetPanId(openthread_get_instance());
    do_something_with_panid(panid);
}

int main(void)
{
    event_post(openthread_get_evq(), &event_panid);
    return 0;
}
```

**See also**: [https://openthread.io/releases/thread-reference-20180619](https://openthread.io/releases/thread-reference-20180619)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`recv_pkt`](#group__pkg__openthread__cli_1gae51cf07d6e60984548e8e4e800354903)`(otInstance * aInstance,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Gets packet from driver and tells OpenThread about the reception.
`public void `[`send_pkt`](#group__pkg__openthread__cli_1ga8c24ba8801614d7839291212853172a5)`(otInstance * aInstance,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gaef91a5201cb4a25d1c3ef41b783a395b)` event)`            | Inform OpenThread when tx is finished.
`public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * `[`openthread_get_evq`](#group__pkg__openthread__cli_1gabcd33242757d31e9461d06615c3d21c2)`(void)`            | Get OpenThread event queue.
`public otInstance * `[`openthread_get_instance`](#group__pkg__openthread__cli_1ga9fae742470662b28cbbfac6f500e6bea)`(void)`            | Get pointer to the OpenThread instance.
`public void `[`openthread_bootstrap`](#group__pkg__openthread__cli_1ga963c57aa6bb15734ab10566bee94dc6c)`(void)`            | Bootstrap OpenThread.
`public void `[`openthread_radio_init`](#group__pkg__openthread__cli_1gaba109f63056026e2684665c1e8065b2a)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,uint8_t * tb,uint8_t * rb)`            | Init OpenThread radio.
`public int `[`openthread_netdev_init`](#group__pkg__openthread__cli_1gad2afaf2ae5b311fd512511bdc564facb)`(char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev)`            | Starts OpenThread thread.
`public void `[`ot_random_init`](#group__pkg__openthread__cli_1ga98a74e75b4e2a956751f57dda897d36b)`(void)`            | Init OpenThread random.
`struct `[`serial_msg_t`](#structserial__msg__t) | Struct containing a serial message.

## Members

#### `public void `[`recv_pkt`](#group__pkg__openthread__cli_1gae51cf07d6e60984548e8e4e800354903)`(otInstance * aInstance,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Gets packet from driver and tells OpenThread about the reception.

#### Parameters
* `aInstance` pointer to an OpenThread instance 

* `dev` pointer to a netdev instance

#### `public void `[`send_pkt`](#group__pkg__openthread__cli_1ga8c24ba8801614d7839291212853172a5)`(otInstance * aInstance,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netdev_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gaef91a5201cb4a25d1c3ef41b783a395b)` event)` 

Inform OpenThread when tx is finished.

#### Parameters
* `aInstance` pointer to an OpenThread instance 

* `dev` pointer to a netdev interface 

* `event` just occurred netdev event

#### `public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * `[`openthread_get_evq`](#group__pkg__openthread__cli_1gabcd33242757d31e9461d06615c3d21c2)`(void)` 

Get OpenThread event queue.

#### Returns
pointer to the event queue

#### `public otInstance * `[`openthread_get_instance`](#group__pkg__openthread__cli_1ga9fae742470662b28cbbfac6f500e6bea)`(void)` 

Get pointer to the OpenThread instance.

#### Returns
pointer to the OpenThread instance

#### `public void `[`openthread_bootstrap`](#group__pkg__openthread__cli_1ga963c57aa6bb15734ab10566bee94dc6c)`(void)` 

Bootstrap OpenThread.

#### `public void `[`openthread_radio_init`](#group__pkg__openthread__cli_1gaba109f63056026e2684665c1e8065b2a)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,uint8_t * tb,uint8_t * rb)` 

Init OpenThread radio.

#### Parameters
* `dev` pointer to a netdev interface 

* `tb` pointer to the TX buffer designed for OpenThread 

* `rb` pointer to the RX buffer designed for Open_Thread

#### `public int `[`openthread_netdev_init`](#group__pkg__openthread__cli_1gad2afaf2ae5b311fd512511bdc564facb)`(char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev)` 

Starts OpenThread thread.

#### Parameters
* `stack` pointer to the stack designed for OpenThread 

* `stacksize` size of the stack 

* `priority` priority of the OpenThread stack 

* `name` name of the OpenThread stack 

* `netdev` pointer to the netdev interface

#### Returns
PID of OpenThread thread 

#### Returns
-EINVAL if there was an error creating the thread

#### `public void `[`ot_random_init`](#group__pkg__openthread__cli_1ga98a74e75b4e2a956751f57dda897d36b)`(void)` 

Init OpenThread random.

# struct `serial_msg_t` 

Struct containing a serial message.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`length`](#structserial__msg__t_1ad66f9950799cc0947f62c071dff8cbbc) | length of the message
`public uint16_t `[`serial_buffer_status`](#structserial__msg__t_1ac10a3803ffe1e1071eb39376a9b5984d) | status of the buffer
`public uint8_t `[`buf`](#structserial__msg__t_1a9fe90b47c3d73cd947b522536ecf2316) | buffer containing the message

## Members

#### `public uint16_t `[`length`](#structserial__msg__t_1ad66f9950799cc0947f62c071dff8cbbc) 

length of the message

#### `public uint16_t `[`serial_buffer_status`](#structserial__msg__t_1ac10a3803ffe1e1071eb39376a9b5984d) 

status of the buffer

#### `public uint8_t `[`buf`](#structserial__msg__t_1a9fe90b47c3d73cd947b522536ecf2316) 

buffer containing the message

