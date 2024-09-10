---
title: api-pkg_semtech-loramac.md
description: api-pkg_semtech-loramac.md
---
# group `pkg_semtech-loramac` 

Provides a RIOT adaption of Semtech LoRaMAC implementation.

IntroductionThis package provides an API built on top of the [Semtech LoRaMAC-node](https://github.com/Lora-net/LoRaMac-node) reference implementation of a LoRa network.

Importing this package in an applicationThis package works with Semtech SX1261, SX1262, SX1268, SX1272 and SX1276 radio devices. Thus, in order to use it properly, the application `Makefile` must import the corresponding device driver: 
```cpp
USEMODULE += sx1261  # for a SX1261 radio device
USEMODULE += sx1262  # for a SX1262 radio device
USEMODULE += sx1268  # for a SX1268 radio device
USEMODULE += sx1272  # for a SX1272 radio device
USEMODULE += sx1276  # for a SX1276 radio device
```

In order to use this package in an application, add the following in the application `Makefile`: 
```cpp
USEPKG += semtech-loramac
```

Since the LoRa radio depends on regional parameters regarding the access to the physical support, the region where the device is used needs to be set at compile time. Example for EU868: 
```cpp
LORA_REGION = EU868
```

Using the package APIThe package provides a simple API for initializing the MAC, setting/getting parameters, joining a network and sending/receiving packets to/from a LoRa [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork).

In your `main.c`, some header files must be first included: 
```cpp
#include "[net/loramac.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#loramac_8h)"     /* core loramac definitions */
#include "[semtech_loramac.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h)" /* package API */
```

Then define global variables: 
```cpp
[semtech_loramac_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__t) loramac;  /* The loramac stack device descriptor */
/* define the required keys for OTAA, e.g over-the-air activation (the
   null arrays need to be updated with valid LoRa values) */
static const uint8_t deveui[[LORAMAC_DEVEUI_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga70fc848c906d0ffd5b7d40f6b56c6f69)] = { 0x00, 0x00, 0x00, 0x00, \
                                                    0x00, 0x00, 0x00, 0x00 };
static const uint8_t appeui[[LORAMAC_APPEUI_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga4f92f7a51ff00b67535b877f1309e4e1)] = { 0x00, 0x00, 0x00, 0x00, \
                                                    0x00, 0x00, 0x00, 0x00 };
static const uint8_t appkey[[LORAMAC_APPKEY_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1ga4044842cd3dfca9733ab144d8d1a6343)] = { 0x00, 0x00, 0x00, 0x00, \
                                                    0x00, 0x00, 0x00, 0x00, \
                                                    0x00, 0x00, 0x00, 0x00, \
                                                    0x00, 0x00, 0x00, 0x00 };
```

Now in the `main` function:* initialize the LoRaMAC MAC layer

* set the LoRa keys

* join the network

* send some data to the network

```cpp
int main(void)
{
    /* 1. initialize the LoRaMAC MAC layer */
    [semtech_loramac_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1aa6e500cb5bf3afe2d45ecfc3b43f68fe)(&loramac);

    /* 2. set the keys identifying the device */
    [semtech_loramac_set_deveui](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1a3f621621ffe38f3dc9f4f8931a711685)(&loramac, deveui);
    [semtech_loramac_set_appeui](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1a94bf64c581eeb129948ed84168fed736)(&loramac, appeui);
    [semtech_loramac_set_appkey](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1a9bbc0c8fea451102f2bebfe29fac802a)(&loramac, appkey);

    /* 3. join the network */
    if ([semtech_loramac_join](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1a103f907189b45a8303c2b462797b52f9)(&loramac, [LORAMAC_JOIN_OTAA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__loramac_1gga0ec6851e0578ec1270e16e3faa54f4cda842a2cf228ae0d498a0c2425092aaeca)) != [SEMTECH_LORAMAC_JOIN_SUCCEEDED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1acbd3f41d6ec0844df2cf3023a41e3249adeb07e54826e0af30766731ecacab95f)) {
        puts("Join procedure failed");
        return 1;
    }
    puts("Join procedure succeeded");

    /* 4. send some data */
    char *message = "This is RIOT";
    if ([semtech_loramac_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1a86f9839a9d80bddb15bb745922767e99)(&loramac,
                             (uint8_t *)message, strlen(message)) != [SEMTECH_LORAMAC_TX_DONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1acbd3f41d6ec0844df2cf3023a41e3249a7228f456428873a7692c93d192db670b)) {
        [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("Cannot send message '%s'\n", message);
        return 1;
    }

}
```

To receive downlink messages, enable the `semtech_loramac_rx` and use a dedicated receiving thread.

* In the application Makefile, add 
```cpp
USEMODULE += semtech_loramac_rx
```

* At the beginning of the application source file, add the necessary includes and declare the message queue and stack arrays: 
```cpp
#include "thread.h"

#define RECV_MSG_QUEUE                   (4U)
static [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) _recv_queue[RECV_MSG_QUEUE];

static char _recv_stack[[THREAD_STACKSIZE_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#thread__config_8h_1a713ebddc00581f4d415095cdbfd8791f)];
```

* Implement the thread: it initializes its message queue and then simply calls the blocking `semtech_loramac_recv` function in a loop: 
```cpp
static void *_recv(void *arg)
{
    [msg_init_queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd)(_recv_queue, RECV_MSG_QUEUE);

    (void)arg;
    while (1) {
        /* blocks until some data is received */
        [semtech_loramac_recv](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#semtech__loramac_8h_1a613004dd4b92feb21126e12e6d71a3bc)(&loramac);
        loramac.[rx_data](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__t_1aca408c680431b6c860783f70d0a90e3a).[payload](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__rx__data__t_1a49c1fbb22eca46d13bd2e073ab8c366e)[loramac.[rx_data](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__t_1aca408c680431b6c860783f70d0a90e3a).[payload_len](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__rx__data__t_1aa7f7bd85afcb31f8046759b5670b1101)] = 0;
        [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("Data received: %s, port: %d\n",
               (char *)loramac.[rx_data](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__t_1aca408c680431b6c860783f70d0a90e3a).[payload](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__rx__data__t_1a49c1fbb22eca46d13bd2e073ab8c366e), loramac.[rx_data](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__t_1aca408c680431b6c860783f70d0a90e3a).[port](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsemtech__loramac__rx__data__t_1ad28f25f98e9831a3c9c401e15494fbd9));
    }
    return NULL;
}
```

* Finally, this thread can be started after the join procedure succeeds: 
```cpp
[thread_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga7e0403a9aa86ce0ec136f6b069d4434a)(_recv_stack, sizeof(_recv_stack),
              [THREAD_PRIORITY_MAIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#thread__config_8h_1ac57374d1c51374ebf95d9679281af818) - 1, 0, _recv, NULL, "recv thread");
```

PersistenceIf the board CPU provides an internal EEPROM, this package provides a mechanism for storing EUIs, keys and some MAC parameters (frame counter, join status). After a successful join procedure, use `semtech_loramac_save` function to persist this information and it will be loaded automatically at the next reboot. If the device is already joined to a network, to avoid another OTAA join procedure use `semtech_loramac_is_mac_joined` function to check the join status of the device.

This mechanism is especially useful when using deep sleep power modes that don't preserve RAM.

Low power considerationsThe internal implementation of the required LoRaWAN timings (delay before opening RX windows, duty-cycle delays) automatically achieves the lowest possible power consumption while remaining usable when RIOT's low power modes are not blocked. All timings are managed by the [ztimer high level timer abstraction layer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer) running on the low-level [RTT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt) peripheral which allows for:

* going to a deep-sleep mode with RAM retention (no reboot) between TX and RX1 and between RX1 and RX2 windows, and as a result reduces the power consumption

* using deep-sleep mode with RAM retention and have the duty-cycle restriction still usable between each active cycle (wake-up, measure, send, receive, sleep). As a result, this package can only be used on boards that provide the `periph_rtt` feature.

It is not possible to directly call the original LoRaMAC-node API using this package. This package should only be considered as a wrapper around the original LoRaMAC-node API and only the API provided by this package should be used.

LicenseThe library is using the BSD 3-clause license.

**See also**: [https://github.com/Lora-net/LoRaMac-node](https://github.com/Lora-net/LoRaMac-node)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

