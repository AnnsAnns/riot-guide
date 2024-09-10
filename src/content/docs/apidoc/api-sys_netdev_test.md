---
title: api-sys_netdev_test.md
description: api-sys_netdev_test.md
---
# group `sys_netdev_test` 

Provides a test dummy for the netdev interface.

See the following simple packet traversal timer for an example. Note that this example assumes that the stack doesn't require any option values from the device and that the stack doesn't create packets on its own or looses packets (neither of those can be assumed for in-production stacks).

```cpp
#include <stdint.h>

#include "mutex.h"
#include "net/af.h"
#include "net/conn/udp.h"
#include "net/ipv6/addr.h"
#include "net/netdev_test.h"
#include "xtimer.h"

#define PKT_NUMBER   (1000)

static netdev_test_t dev;
static uint32_t last_start;
static uint32_t sum = 0;
static mutex_t wait = MUTEX_INIT;

int _send_timer(netdev_t *dev, const iolist_t *iolist)
{
    (void)dev;
    (void)iolist;

    sum += (xtimer_now_usec() - last_start);
    mutex_unlock(&wait);
}

int main(void) {
    ipv6_addr_t dst = IPV6_ADDR_UNSPECIFIED;

    netdev_test_setup(&dev, NULL);
    dev->driver->init(&dev->netdev->netdev)
    // initialize stack and connect `dev` to it
    // ...
    mutex_lock(&wait);
    for (int i = 0; i < PKT_NUMBER; i++) {
        last_start = xtimer_now_usec();
        conn_udp_sendto("abcd", sizeof("abcd"), NULL, 0, &dst, sizeof(dst),
                        AF_INET6, 0xcafe, 0xcafe);
        mutex_lock(&wait);
    }
    printf("Average send packet traversal time: %u\n", sum / PKT_NUMBER);
    mutex_unlock(&wait);
    return 0;
}
```

To provide options to the stack, the [get callbacks](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t_1a32bcefb719d58e6a1a9e674d1e346fb4) for the specific options need to be set. To catch lost packets and additional sent by the stack the send handler needs to be adapted accordingly.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`netdev_test_set_send_cb`](#group__sys__netdev__test_1gaf64de26c2dc7b0284e2f48bfb658f161)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_send_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1ga73c2ab62347fcc9f9903aec327984f1b)` send_cb)`            | override send callback
`public inline static void `[`netdev_test_set_recv_cb`](#group__sys__netdev__test_1ga1d12dea32413dec3cf8e58b4ccaa3b94)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_recv_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1ga5585d493c7a197bacb67141de1508bfa)` recv_cb)`            | override receive callback
`public inline static void `[`netdev_test_set_init_cb`](#group__sys__netdev__test_1ga8fb59bb499dcbd9ec46dc4f3176962e3)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_init_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1gaa2c4b5ae63c2328c226d9a98a61df200)` init_cb)`            | override initialization callback
`public inline static void `[`netdev_test_set_isr_cb`](#group__sys__netdev__test_1gac1cedb97465e5c55ab90cec8efa2cba1)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_isr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1gad1fdc8aa8f712433f20513821447673a)` isr_cb)`            | override ISR event handler callback
`public inline static void `[`netdev_test_set_get_cb`](#group__sys__netdev__test_1ga2e498c704ae0e3b8a6e50717338cfac0)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,`[`netdev_test_get_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1gaa451fa9a902bc5802cbd2929d3f13137)` get_cb)`            | override get callback for a certain option type
`public inline static void `[`netdev_test_set_set_cb`](#group__sys__netdev__test_1gaefb108f32cbe272508b2781721498565)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,`[`netdev_test_set_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1ga398b5a36557a886fcecc924b58a57b58)` set_cb)`            | override get callback for a certain option type
`public void `[`netdev_test_setup`](#group__sys__netdev__test_1gacc16ae9eae4a074248b63b08fdbf0f04)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,void * state)`            | Setup a given [netdev dummy test driver](#group__sys__netdev__test) device.
`public void `[`netdev_test_reset`](#group__sys__netdev__test_1ga23d7530d7455a87ff64eee0ae718e6c6)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev)`            | Resets all callbacks for the device to NULL.
`struct `[`netdev_test_t`](#structnetdev__test__t) | Device descriptor for [netdev dummy test driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test) devices.

## Members

#### `public inline static void `[`netdev_test_set_send_cb`](#group__sys__netdev__test_1gaf64de26c2dc7b0284e2f48bfb658f161)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_send_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1ga73c2ab62347fcc9f9903aec327984f1b)` send_cb)` 

override send callback

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device 

* `send_cb` a send callback

#### `public inline static void `[`netdev_test_set_recv_cb`](#group__sys__netdev__test_1ga1d12dea32413dec3cf8e58b4ccaa3b94)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_recv_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1ga5585d493c7a197bacb67141de1508bfa)` recv_cb)` 

override receive callback

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device 

* `recv_cb` a receive callback

#### `public inline static void `[`netdev_test_set_init_cb`](#group__sys__netdev__test_1ga8fb59bb499dcbd9ec46dc4f3176962e3)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_init_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1gaa2c4b5ae63c2328c226d9a98a61df200)` init_cb)` 

override initialization callback

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device 

* `init_cb` an initialization callback

#### `public inline static void `[`netdev_test_set_isr_cb`](#group__sys__netdev__test_1gac1cedb97465e5c55ab90cec8efa2cba1)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netdev_test_isr_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1gad1fdc8aa8f712433f20513821447673a)` isr_cb)` 

override ISR event handler callback

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device 

* `isr_cb` an ISR event handler callback

#### `public inline static void `[`netdev_test_set_get_cb`](#group__sys__netdev__test_1ga2e498c704ae0e3b8a6e50717338cfac0)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,`[`netdev_test_get_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1gaa451fa9a902bc5802cbd2929d3f13137)` get_cb)` 

override get callback for a certain option type

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device 

* `opt` an option type 

* `get_cb` a get callback for `opt`

#### `public inline static void `[`netdev_test_set_set_cb`](#group__sys__netdev__test_1gaefb108f32cbe272508b2781721498565)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,`[`netdev_test_set_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test_1ga398b5a36557a886fcecc924b58a57b58)` set_cb)` 

override get callback for a certain option type

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device 

* `opt` an option type 

* `set_cb` a set callback for `opt`

#### `public void `[`netdev_test_setup`](#group__sys__netdev__test_1gacc16ae9eae4a074248b63b08fdbf0f04)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev,void * state)` 

Setup a given [netdev dummy test driver](#group__sys__netdev__test) device.

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device to initialize 

* `state` external state for the device

#### `public void `[`netdev_test_reset`](#group__sys__netdev__test_1ga23d7530d7455a87ff64eee0ae718e6c6)`(`[`netdev_test_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_netdev_test.md#structnetdev__test__t)` * dev)` 

Resets all callbacks for the device to NULL.

#### Parameters
* `dev` a [netdev dummy test driver](#group__sys__netdev__test) device to initialize

# struct `netdev_test_t` 

```
struct netdev_test_t
  : public netdev_ieee802154_t
```  

Device descriptor for [netdev dummy test driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__netdev__test) devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

