---
title: api-drivers_netdev_api.md
description: api-drivers_netdev_api.md
---
# group `drivers_netdev_api` 

This is a generic low-level network driver interface.

AboutThis interface provides a uniform API for network stacks to interact with network device drivers. This interface is designed in a way, that it is completely agnostic to the used network stack. This way, device drivers for network devices (e.g. IEEE802.15.4 radios, Ethernet devices, ...) have to implemented once and can be used with any supported network stack in RIOT.

The functions provided by the interface cover three major parts:* sending and receiving of actual network data

* network device configuration through reading and setting device parameters

* event handling

The Interrupt Context Problem[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) devices are typically connected to the host CPU via some sort of bus, most commonly via SPI. This type of connection has the disadvantage, that the bus is not used by the network device alone, but it may be shared with other devices. This makes it necessary to synchronize access to the bus to prevent bus access collisions.

To illustrate this behavior, let's look at a typical error situation, that leads to a very hard to find and debug latent failure: say we have two devices A and B on the same SPI bus. Our CPU is now transferring a chunk of 100 bytes to device A. After 20 bytes were transferred, device B triggers an external interrupt on the host CPU. The interrupt handling now typically requires the reading of some sort of status register on the 'triggering' device, device B in this case. So what would happen here, is that the device driver for device B would initiate a new SPI transfer on the already used bus to read B's status register -> BAM.

The peripheral drivers for shared buses (i.e. SPI and I2C) implement access synchronization using mutexes, which are locked and unlocked in the driver's `require` and `release` functions. The problem is now, that this type of synchronization does only work in thread context, but not in interrupt context. With reasonable effort and resource usage, we have no means of synchronizing the bus access also in interrupt context.

The solution to this problem as implemented by this interface is **not to call any function that interacts with a device directly from interrupt context**. Unfortunately this requires some added complexity for synchronization efforts between thread and interrupt context to be able to handle device events (i.e. external interrupts). See section [Events](#group__drivers__netdev__api_1netdev_sec_events) for more information.

Context requirementsThe `netdev` interface expects the network device drivers to run in thread context (see section above). The interface was however designed in a way, to allow more than one device driver to be serviced in the same thread.

The key design element for `netdev` is, that device drivers implementing this interface are not able to run stand-alone in a thread, but need some bootstrapping code. This bootstrapping code can be anything from a simple [msg_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a) loop (as done for the GNRC adaption) to a complete network stack that works without messaging entirely but is build on function call interfaces.

Sending and ReceivingSending data using the `netdev` interface is straight forward: simply call the drivers [send()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) function, passing it the data that should be sent. The caller of the [send()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) function (e.g. a network stack) must hereby make sure, that the data is in the correct format expected by the specific network device driver. Typically, the data needs to contain a pre-filled link layer header as e.g. an IEEE802.15.4 or Ethernet header.

Receiving data using the `netdev` interface requires typically four steps:* wait for a [NETDEV_EVENT_RX_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba4cd3a85ba967f4d91beccf6afc76af00) event

* call the [recv()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) function with `buf := NULL` and `len := 0` to get the size of the received data

* allocate a large enough buffer in some way

* call the [recv()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) function a second time, passing the buffer and reading the received data into this buffer

This receive sequence can of course be simplified by skipping steps 2 and 3 when using fixed sized pre-allocated buffers or similar means. *

The [send()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) and [recv()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) functions **must** never be called from interrupt context.

Device ConfigurationThe `netdev` interface covers a wide variety of network devices, which differ to some extend in their configuration parameters (e.g. radios vs. wired interfaces, channel selection vs. link status detection). To cover this variety, `netdev` provides a generic configuration interface by exposing simple [get()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a0f7bbd084d7a51756fba665903884317) and [set()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) functions. These are based on a globally defined and **extendable** list of options as defined in [netopt.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#netopt_8h).

Every device driver can choose the options which it supports for reading and/or writing from this list. If an option is not supported by the device driver, the driver simply returns `-ENOTSUP`.

The [get()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a0f7bbd084d7a51756fba665903884317) and [set()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) functions **must** never be called from interrupt context.

Events[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) devices typically signal events by triggering external interrupts on certain dedicated GPIO pins (in case of external devices), or signal them by triggering internal interrupts directly (in case of register mapped devices). As stated above, we are not allowed to do any kind of interaction with our network device that involves bus access when in interrupt mode. To circumvent this, the

* an interrupt is triggered

* the drivers interrupt routine calls the registered [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) function with `event:=`[NETDEV_EVENT_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba168994cf166acb43cd2a84d3d6ffb3b2) as argument

* the [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) (as it is implemented by the 'user' code) notifies the thread that hosts the device driver. This can be done in many ways, e.g. by using messaging, mutexes, thread flags and more

* the hosting thread is scheduled and calls the `netdev` interfaces [isr()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aef446b76f05e6b5cfef52ab7460f3cd6) function

* now the driver can actual start to handle the interrupt, by e.g. reading status registers and triggering any subsequent actions like signaling a [NETDEV_EVENT_RX_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba4cd3a85ba967f4d91beccf6afc76af00)

The way that is used for waking up the hosting thread and telling is to call the [isr()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aef446b76f05e6b5cfef52ab7460f3cd6) function is completely up to the `netdev` external code and can be done in many ways (e.g. sending messages, # setting thread flags, unlocking mutexes, etc.).

Any event that is not of type [NETDEV_EVENT_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba168994cf166acb43cd2a84d3d6ffb3b2) is expected to be triggered from thread context. This enables the code that sits on top of `netdev` to perform the necessary actions right away, as for example reading the received data from the network device or similar.

The [netdev_event_cb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275) function runs in interrupt context when called for [NETDEV_EVENT_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba168994cf166acb43cd2a84d3d6ffb3b2), but it **must** run in thread context for all other events.

ExampleThe following example illustrates a receive sequence triggered by an external interrupt:

* frame arrives for device

* The driver previously registered an ISR for handling received frames. This ISR then calls [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) with `event:=`[NETDEV_EVENT_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba168994cf166acb43cd2a84d3d6ffb3b2) (from Interrupt Service Routine) which wakes up event handler

* event handler calls [netdev->driver->isr()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aef446b76f05e6b5cfef52ab7460f3cd6) (from thread context)

* [netdev->driver->isr()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aef446b76f05e6b5cfef52ab7460f3cd6) calls [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) with `event:=`[NETDEV_EVENT_RX_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba4cd3a85ba967f4d91beccf6afc76af00)

* [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) uses [netdev->driver->recv()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) to fetch frame

RX event exampleRX event exampleRX event exampleRX event example

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETDEV_INDEX_ANY`](#group__drivers__netdev__api_1ga21fb33e7e240a458835bcf3465548fdf)            | Will match any device index.
`define `[`CONFIG_NETDEV_REGISTER_SIGNAL`](#group__drivers__netdev__api_1ga8e510f041a6f5ad6758ea49c66a17531)            | Call [netdev_register_signal](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga2345f176a02f5c281eccaa6da5d15672) when the netdev device is registered.
`enum `[`netdev_event_t`](#group__drivers__netdev__api_1gaef91a5201cb4a25d1c3ef41b783a395b)            | Possible event types that are send from the device driver to the upper layer.
`public void `[`netdev_register_signal`](#group__drivers__netdev__api_1ga2345f176a02f5c281eccaa6da5d15672)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` type,uint8_t index)`            | Signal that the [netdev_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga969385cab163f1626f6072c2636a252b) function registered the device.
`public inline static void `[`netdev_register`](#group__drivers__netdev__api_1ga969385cab163f1626f6072c2636a252b)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` type,uint8_t index)`            | Register a device with netdev.
`public inline static int `[`netdev_get_notsup`](#group__drivers__netdev__api_1ga33bcec35f10a62c91e7371018f438e2f)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * value,size_t max_len)`            | Convenience function for declaring get() as not supported in general.
`public inline static int `[`netdev_set_notsup`](#group__drivers__netdev__api_1gae883bf801aea28c6a11b59929cb8d419)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,const void * value,size_t value_len)`            | Convenience function for declaring set() as not supported in general.
`public inline static void `[`netdev_trigger_event_isr`](#group__drivers__netdev__api_1ga0404e4d821b66ea54cb09e16dd93379c)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev)`            | Informs netdev there was an interrupt request from the network device.
`struct `[`netdev_radio_rx_info`](#structnetdev__radio__rx__info) | Received frame status information for most radios.
`struct `[`netdev`](#structnetdev) | Structure to hold driver state.
`struct `[`netdev_driver`](#structnetdev__driver) | Structure to hold driver interface -> function mapping.

## Members

#### `define `[`NETDEV_INDEX_ANY`](#group__drivers__netdev__api_1ga21fb33e7e240a458835bcf3465548fdf) 

Will match any device index.

#### `define `[`CONFIG_NETDEV_REGISTER_SIGNAL`](#group__drivers__netdev__api_1ga8e510f041a6f5ad6758ea49c66a17531) 

Call [netdev_register_signal](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga2345f176a02f5c281eccaa6da5d15672) when the netdev device is registered.

#### `enum `[`netdev_event_t`](#group__drivers__netdev__api_1gaef91a5201cb4a25d1c3ef41b783a395b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NETDEV_EVENT_ISR            | driver needs it's ISR handled
NETDEV_EVENT_RX_STARTED            | started to receive a frame
NETDEV_EVENT_RX_COMPLETE            | finished receiving a frame
NETDEV_EVENT_TX_STARTED            | started to transfer a frame
NETDEV_EVENT_TX_COMPLETE            | transfer frame complete
NETDEV_EVENT_TX_COMPLETE_DATA_PENDING            | transfer frame complete and data pending flag
NETDEV_EVENT_TX_NOACK            | ACK requested but not received.
NETDEV_EVENT_TX_MEDIUM_BUSY            | couldn't transfer frame
NETDEV_EVENT_LINK_UP            | link established
NETDEV_EVENT_LINK_DOWN            | link gone
NETDEV_EVENT_TX_TIMEOUT            | timeout when sending
NETDEV_EVENT_RX_TIMEOUT            | timeout when receiving
NETDEV_EVENT_CRC_ERROR            | wrong CRC
NETDEV_EVENT_FHSS_CHANGE_CHANNEL            | channel changed
NETDEV_EVENT_CAD_DONE            | channel activity detection done

Possible event types that are send from the device driver to the upper layer.

#### `public void `[`netdev_register_signal`](#group__drivers__netdev__api_1ga2345f176a02f5c281eccaa6da5d15672)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` type,uint8_t index)` 

Signal that the [netdev_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga969385cab163f1626f6072c2636a252b) function registered the device.

This function is called right after @ref netdev_register registered
     the device.
This function is called only if the CFLAG [CONFIG_NETDEV_REGISTER_SIGNAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga8e510f041a6f5ad6758ea49c66a17531) is set.

#### Parameters
* `dev` pointer to the device descriptor 

* `type` the driver used for the netdev 

* `index` the index in the config struct

#### `public inline static void `[`netdev_register`](#group__drivers__netdev__api_1ga969385cab163f1626f6072c2636a252b)`(struct `[`netdev`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev)` * dev,`[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` type,uint8_t index)` 

Register a device with netdev.

Must by called by the driver's setup function.

#### Parameters
* `dev` the new netdev 

* `type` the driver used for the netdev 

* `index` the index in the config struct

#### `public inline static int `[`netdev_get_notsup`](#group__drivers__netdev__api_1ga33bcec35f10a62c91e7371018f438e2f)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,void * value,size_t max_len)` 

Convenience function for declaring get() as not supported in general.

#### Parameters
* `dev` ignored 

* `opt` ignored 

* `value` ignored 

* `max_len` ignored

#### Returns
always returns `-ENOTSUP`

#### `public inline static int `[`netdev_set_notsup`](#group__drivers__netdev__api_1gae883bf801aea28c6a11b59929cb8d419)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,const void * value,size_t value_len)` 

Convenience function for declaring set() as not supported in general.

#### Parameters
* `dev` ignored 

* `opt` ignored 

* `value` ignored 

* `value_len` ignored

#### Returns
always returns `-ENOTSUP`

#### `public inline static void `[`netdev_trigger_event_isr`](#group__drivers__netdev__api_1ga0404e4d821b66ea54cb09e16dd93379c)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev)` 

Informs netdev there was an interrupt request from the network device.

This function calls @ref netdev_t::event_callback with
   NETDEV_EVENT_ISR event.

#### Parameters
* `netdev` netdev instance of the device associated to the interrupt.

# struct `netdev_radio_rx_info` 

Received frame status information for most radios.

May be different for certain radios.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`rssi`](#structnetdev__radio__rx__info_1a90256333057acd53b5152f14bb6900be) | RSSI of a received frame in dBm.
`public uint8_t `[`lqi`](#structnetdev__radio__rx__info_1a526abb867e84092d098523a924d7dffc) | LQI of a received frame.

## Members

#### `public int16_t `[`rssi`](#structnetdev__radio__rx__info_1a90256333057acd53b5152f14bb6900be) 

RSSI of a received frame in dBm.

#### `public uint8_t `[`lqi`](#structnetdev__radio__rx__info_1a526abb867e84092d098523a924d7dffc) 

LQI of a received frame.

# struct `netdev` 

Structure to hold driver state.

Supposed to be extended by driver implementations. The extended structure should contain all variable driver state.

Contains a field `context` which is not used by the drivers, but supposed to be used by upper layers to store reference information.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const struct `[`netdev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver)` * `[`driver`](#structnetdev_1a54bb633f6794c67d66685ecfe21aa3d2) | ptr to that driver's interface.
`public `[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` `[`event_callback`](#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) | callback for device events
`public void * `[`context`](#structnetdev_1aaacac29a8aa7891d7dc1882b5eb89773) | ptr to network stack context

## Members

#### `public const struct `[`netdev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver)` * `[`driver`](#structnetdev_1a54bb633f6794c67d66685ecfe21aa3d2) 

ptr to that driver's interface.

#### `public `[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` `[`event_callback`](#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) 

callback for device events

#### `public void * `[`context`](#structnetdev_1aaacac29a8aa7891d7dc1882b5eb89773) 

ptr to network stack context

# struct `netdev_driver` 

Structure to hold driver interface -> function mapping.

The send/receive functions expect/return a full ethernet frame (dst mac, src mac, ethertype, payload, no checksum).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`send`](#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) | Start transmission of the given frame and return directly.
`public int(* `[`confirm_send`](#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e) | Fetch the status of a transmission and perform any potential cleanup.
`public int(* `[`recv`](#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) | Drop a received frame, **OR** get the length of a received frame, **OR** get a received frame.
`public int(* `[`init`](#structnetdev__driver_1ae9c8aa7e8b6ef4b7b4acfcb0ae84209a) | the driver's initialization function
`public void(* `[`isr`](#structnetdev__driver_1aef446b76f05e6b5cfef52ab7460f3cd6) | a driver's user-space ISR handler
`public int(* `[`get`](#structnetdev__driver_1a0f7bbd084d7a51756fba665903884317) | Get an option value from a given network device.
`public int(* `[`set`](#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) | Set an option value for a given network device.

## Members

#### `public int(* `[`send`](#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) 

Start transmission of the given frame and return directly.

`(dev != NULL) && (iolist != NULL)`

#### Parameters
* `dev` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) device descriptor. Must not be NULL. 

* `iolist` IO vector list to send. Elements of this list may have iolist_t::iol_size == 0 and (in this case only) iolist_t::iol_data == 0.

#### Parameters
* `-EBUSY` Driver is temporarily unable to send, e.g. because an incoming frame on a half-duplex medium is received 

* `-ENETDOWN` Device is powered down 

* `<0` Other error 

* `0` Transmission successfully started 

* `>0` Number of bytes transmitted (deprecated!)

This function will cause the driver to start the transmission in an async fashion. The driver will "own" the `iolist` until a subsequent call to [netdev_driver_t::confirm_send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e) returns something different than `-EAGAIN`. The driver must signal completion using the NETDEV_EVENT_TX_COMPLETE event, regardless of success or failure.

Old drivers might not be ported to the new API and have [netdev_driver_t::confirm_send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e) set to `NULL`. In that case the driver will return the number of bytes transmitted on success (instead of `0`) and will likely block until completion.

#### `public int(* `[`confirm_send`](#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e) 

Fetch the status of a transmission and perform any potential cleanup.

#### Parameters
* `dev` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) device descriptor. Must not be NULL. 

* `info` Device class specific type to fetch transmission info. May be `NULL` if not needed by upper layer. May be ignored by driver.

#### Returns
Number of bytes transmitted. (The size of the transmitted frame including all overhead, such as frame check sequence, bit stuffing, escaping, headers, trailers, preambles, start of frame delimiters, etc. May be an estimate for performance reasons.) 

#### Parameters
* `-EAGAIN` Transmission still ongoing. (Call later again!) 

* `-ECOMM` Any kind of transmission error, such as collision detected, layer 2 ACK timeout, etc. Use `info` for more details 

* `-EBUSY` Medium is busy. (E.g. Auto-CCA failed / timed out) 

* `<0` Other error. (Please use a negative errno code.)

After [netdev_driver_t::send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) was called and returned zero, this function must be called until it returns anything other than `-EAGAIN`. 

The driver will signal completion using the NETDEV_EVENT_TX_COMPLETE event. This function must not return `-EAGAIN` after that event was received.

#### `public int(* `[`recv`](#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) 

Drop a received frame, **OR** get the length of a received frame, **OR** get a received frame.

`(dev != NULL)`

Supposed to be called from [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16)

If `buf` == NULL and `len` == 0, returns the frame size  or an upper bound estimation of the size  without dropping the frame. If `buf` == NULL and `len` > 0, drops the frame and returns the frame size.

If called with `buf` != NULL and `len` is smaller than the received frame:

* The received frame is dropped

* The content in `buf` becomes invalid. (The driver may use the memory to implement the dropping - or may not change it.)

* `-ENOBUFS` is returned

#### Parameters
* `dev` network device descriptor. Must not be NULL. 

* `buf` buffer to write into or NULL to return the frame size. 

* `len` maximum number of bytes to read. If `buf` is NULL the currently buffered frame is dropped when `len` > 0. Must not be 0 when `buf` != NULL. 

* `info` status information for the received frame. Might be of different type for different netdev devices. May be NULL if not needed or applicable.

#### Parameters
* `-ENOBUFS` if supplied buffer is too small 

#### Returns
number of bytes read if buf != NULL 

#### Returns
frame size (or upper bound estimation) if buf == NULL

#### `public int(* `[`init`](#structnetdev__driver_1ae9c8aa7e8b6ef4b7b4acfcb0ae84209a) 

the driver's initialization function

`(dev != NULL)`

#### Parameters
* `dev` network device descriptor. Must not be NULL.

#### Parameters
* `<0` on error 

* `0` on success

#### `public void(* `[`isr`](#structnetdev__driver_1aef446b76f05e6b5cfef52ab7460f3cd6) 

a driver's user-space ISR handler

`(dev != NULL)`

This function will be called from a network stack's loop when being notified by netdev_isr.

It is supposed to call [netdev->event_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev_1af91155f0bff62279c2b4c12fcc909d16) for each occurring event.

See receive frame flow description for details.

#### Parameters
* `dev` network device descriptor. Must not be NULL.

#### `public int(* `[`get`](#structnetdev__driver_1a0f7bbd084d7a51756fba665903884317) 

Get an option value from a given network device.

`(dev != NULL)`

for scalar types of [netopt_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)`max_len` must be of exactly that length (see [netopt documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt) for type) 

for array types of [netopt_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)`max_len` must greater or equal the required length (see [netopt documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt) for type) 

`value` must have the natural alignment of its type (see [netopt documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt) for type)

#### Parameters
* `dev` network device descriptor 

* `opt` option type 

* `value` pointer to store the option's value in 

* `max_len` maximal amount of byte that fit into `value`

#### Returns
number of bytes written to `value`

#### Parameters
* `-ENOTSUP` if `opt` is not provided by the device

#### `public int(* `[`set`](#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) 

Set an option value for a given network device.

`(dev != NULL)`

for scalar types of [netopt_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)`value_len` must be of exactly that length (see [netopt documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt) for type) 

for array types of [netopt_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)`value_len` must lesser or equal the required length (see [netopt documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt) for type) 

`value` must have the natural alignment of its type (see [netopt documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt) for type)

#### Parameters
* `dev` network device descriptor 

* `opt` option type 

* `value` value to set 

* `value_len` the length of `value`

#### Returns
number of bytes written to `value`

#### Parameters
* `-ENOTSUP` if `opt` is not configurable for the device 

* `-EINVAL` if `value` is an invalid value with regards to `opt`

