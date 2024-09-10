---
title: api-drivers_xbee.md
description: api-drivers_xbee.md
---
# group `drivers_xbee` 

High-level driver for the XBee S1 802.15.4 modem.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`XBEE_MAX_PAYLOAD_LENGTH`](#group__drivers__xbee_1ga43200d8f708adcee77cc2b654bbdbc4d)            | Maximum payload length that can be send.
`define `[`XBEE_MAX_PKT_LENGTH`](#group__drivers__xbee_1ga8b74371146a15ce669fde57df7512312)            | Maximum packet length, including XBee API frame overhead.
`define `[`XBEE_MAX_RESP_LENGTH`](#group__drivers__xbee_1ga639d8ca4e87f5185493193a1cbf9b0b3)            | Maximum length of a command response.
`define `[`XBEE_MAX_TXHDR_LENGTH`](#group__drivers__xbee_1gad4ca77d9126900bb43efb4e94bc67d4d)            | Maximal possible size of a TX header.
`define `[`XBEE_DEFAULT_PROTOCOL`](#group__drivers__xbee_1ga8412c986add844bdd724863f5a9c12e9)            | Default protocol for data that is coming in.
`define `[`XBEE_DEFAULT_PANID`](#group__drivers__xbee_1gad2dbe1fa7c91cc2dfc101046fff9393c)            | Default PAN ID used after initialization.
`define `[`XBEE_DEFAULT_CHANNEL`](#group__drivers__xbee_1ga46d4f19cbb1eaab56c9afb587be13bd8)            | Default channel used after initialization.
`enum `[`xbee_rx_state_t`](#group__drivers__xbee_1gacaab6b6ba03d4dc6d8113dd36689b0db)            | States of the internal FSM for handling incoming UART frames.
`public void `[`xbee_setup`](#group__drivers__xbee_1gaf75b399a7662e676209310635e9b07f0)`(`[`xbee_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__t)` * dev,const `[`xbee_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__params__t)` * params)`            | Prepare the given Xbee device.
`public int `[`xbee_build_hdr`](#group__drivers__xbee_1gacbe3382aa193ab5993854edef58bfc27)`(`[`xbee_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__t)` * dev,uint8_t * xhdr,size_t payload_len,void * dst_addr,size_t addr_len)`            | Put together the internal proprietary XBee header.
`public int `[`xbee_parse_hdr`](#group__drivers__xbee_1ga08ea75bd0c8d3d58b8c580d716bb6d4d)`(`[`xbee_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__t)` * dev,const uint8_t * xhdr,`[`xbee_l2hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__l2hdr__t)` * l2hdr)`            | Extract IEEE802.15.4 L2 header information from the XBee header.
`struct `[`xbee_params_t`](#structxbee__params__t) | Configuration parameters for XBee devices.
`struct `[`xbee_t`](#structxbee__t) | XBee device descriptor.
`struct `[`xbee_l2hdr_t`](#structxbee__l2hdr__t) | Data structure for extraction L2 information of received packets.

## Members

#### `define `[`XBEE_MAX_PAYLOAD_LENGTH`](#group__drivers__xbee_1ga43200d8f708adcee77cc2b654bbdbc4d) 

Maximum payload length that can be send.

#### `define `[`XBEE_MAX_PKT_LENGTH`](#group__drivers__xbee_1ga8b74371146a15ce669fde57df7512312) 

Maximum packet length, including XBee API frame overhead.

#### `define `[`XBEE_MAX_RESP_LENGTH`](#group__drivers__xbee_1ga639d8ca4e87f5185493193a1cbf9b0b3) 

Maximum length of a command response.

#### `define `[`XBEE_MAX_TXHDR_LENGTH`](#group__drivers__xbee_1gad4ca77d9126900bb43efb4e94bc67d4d) 

Maximal possible size of a TX header.

#### `define `[`XBEE_DEFAULT_PROTOCOL`](#group__drivers__xbee_1ga8412c986add844bdd724863f5a9c12e9) 

Default protocol for data that is coming in.

#### `define `[`XBEE_DEFAULT_PANID`](#group__drivers__xbee_1gad2dbe1fa7c91cc2dfc101046fff9393c) 

Default PAN ID used after initialization.

#### `define `[`XBEE_DEFAULT_CHANNEL`](#group__drivers__xbee_1ga46d4f19cbb1eaab56c9afb587be13bd8) 

Default channel used after initialization.

#### `enum `[`xbee_rx_state_t`](#group__drivers__xbee_1gacaab6b6ba03d4dc6d8113dd36689b0db) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
XBEE_INT_STATE_IDLE            | waiting for the beginning of a new frame
XBEE_INT_STATE_SIZE1            | waiting for the first byte (MSB) of the frame size field
XBEE_INT_STATE_SIZE2            | waiting for the second byte (LSB) of the frame size field
XBEE_INT_STATE_TYPE            | waiting for the frame type field
XBEE_INT_STATE_RESP            | handling incoming data for AT command responses
XBEE_INT_STATE_RX            | handling incoming data when receiving radio packets

States of the internal FSM for handling incoming UART frames.

Incoming data frames on the UART interfaces are handled using a finite state machine (FSM) in the UARTs RX interrupt handler. The FSM is needed to extract frame specific data as the frame size, frame type, and checksums.

#### `public void `[`xbee_setup`](#group__drivers__xbee_1gaf75b399a7662e676209310635e9b07f0)`(`[`xbee_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__t)` * dev,const `[`xbee_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__params__t)` * params)` 

Prepare the given Xbee device.

#### Parameters
* `dev` Xbee device to initialize 

* `params` parameters for device initialization

#### Returns
0 on success 

#### Returns
-ENODEV on invalid device descriptor 

#### Returns
-ENXIO on invalid UART or GPIO pins

#### `public int `[`xbee_build_hdr`](#group__drivers__xbee_1gacbe3382aa193ab5993854edef58bfc27)`(`[`xbee_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__t)` * dev,uint8_t * xhdr,size_t payload_len,void * dst_addr,size_t addr_len)` 

Put together the internal proprietary XBee header.

#### Parameters
* `dev` Xbee device to initialize 

* `xhdr` buffer to write the header into, MUST be at least of length XBEE_MAX_TXHDR_LENGTH 

* `payload_len` actual payload length (without the XBee header) 

* `dst_addr` link layer (L2) destination address 

* `addr_len` length of `dst_addr` in byte (MUST be 2 or 8)

#### Returns
the length of the created header in byte 

#### Returns
-EOVERFLOW if `payload_len` is greater than XBEE_MAX_PAYLOAD_LENGTH 

#### Returns
-ENOMSG if the given destination address has an invalid length

#### `public int `[`xbee_parse_hdr`](#group__drivers__xbee_1ga08ea75bd0c8d3d58b8c580d716bb6d4d)`(`[`xbee_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__t)` * dev,const uint8_t * xhdr,`[`xbee_l2hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__l2hdr__t)` * l2hdr)` 

Extract IEEE802.15.4 L2 header information from the XBee header.

#### Parameters
* `dev` Xbee device to initialize 

* `xhdr` XBee header, starting with the API identifier 

* `l2hdr` the L2 header information is written here

#### Returns
the length of the XBee header 

#### Returns
-ENOMST if the given XBee header is invalid

# struct `xbee_params_t` 

Configuration parameters for XBee devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structxbee__params__t_1a517d2cb931f0525950a3ca61eb5f9c8b) | UART interfaced the device is connected to.
`public uint32_t `[`br`](#structxbee__params__t_1a1d553e354d858af51f83acaba7c1e662) | baudrate to use
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_sleep`](#structxbee__params__t_1a05335eb13a0d477f1346248c5dcb3bdc) | GPIO pin that is connected to the SLEEP pin set to GPIO_UNDEF if not used.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_reset`](#structxbee__params__t_1ac51a84a2da32b7dc4da47f7eb85c2ffd) | GPIO pin that is connected to the STATUS pin set to GPIO_UNDEF if not used.

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structxbee__params__t_1a517d2cb931f0525950a3ca61eb5f9c8b) 

UART interfaced the device is connected to.

#### `public uint32_t `[`br`](#structxbee__params__t_1a1d553e354d858af51f83acaba7c1e662) 

baudrate to use

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_sleep`](#structxbee__params__t_1a05335eb13a0d477f1346248c5dcb3bdc) 

GPIO pin that is connected to the SLEEP pin set to GPIO_UNDEF if not used.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_reset`](#structxbee__params__t_1ac51a84a2da32b7dc4da47f7eb85c2ffd) 

GPIO pin that is connected to the STATUS pin set to GPIO_UNDEF if not used.

# struct `xbee_t` 

XBee device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const struct `[`netdev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver)` * `[`driver`](#structxbee__t_1a756d8fc387d1c80f35cb524d37f0fc55) | ptr to that driver's interface.
`public `[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` `[`event_callback`](#structxbee__t_1a3a764dc506ac5121bbc95e563a8d733c) | callback for device events
`public void * `[`context`](#structxbee__t_1a60ce905f049e1106789ae1fbbf443216) | ptr to network stack context
`public `[`xbee_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__params__t)` `[`p`](#structxbee__t_1a199bd9861854ca66f74407b5adfc9837) | configuration parameters
`public uint8_t `[`options`](#structxbee__t_1a08999ba72b216525d24f0edbfa841deb) | options field
`public uint8_t `[`addr_flags`](#structxbee__t_1ac9b45eb5c9603f775525ed6b5c7a799c) | address flags as defined above
`public uint8_t `[`addr_short`](#structxbee__t_1aae56989de1fd62f259b871095dcbcfbe) | own 802.15.4 short address
`public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`addr_long`](#structxbee__t_1a81ad3e776e40b2838b8d4ea7a905c10a) | own 802.15.4 long address
`public `[`xbee_rx_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__xbee_1gacaab6b6ba03d4dc6d8113dd36689b0db)` `[`int_state`](#structxbee__t_1a5ef676a9cc09b87df92e069b19302030) | current state if the UART RX FSM
`public uint16_t `[`int_size`](#structxbee__t_1afb34cec08542ea046964e7ff37d9815f) | temporary space for parsing the frame size
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`tx_lock`](#structxbee__t_1a947b886eb60b3c1f1c900db1ccdd13c0) | mutex to allow only one transmission at a time
`public uint8_t `[`cmd_buf`](#structxbee__t_1a67fc55e63bdbe828c54c6a88f992f0e5) | command data buffer
`public uint8_t `[`tx_fid`](#structxbee__t_1a1ced10d1daa62378a0778cc15b5e1a0f) | TX frame ID.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`resp_lock`](#structxbee__t_1a45d582f81a90f9a061c2b0ab650cd74b) | mutex for waiting for AT command response frames
`public uint8_t `[`resp_buf`](#structxbee__t_1a33576a90c3dcf80c1feaf55b03580e5e) | AT response data buffer.
`public uint16_t `[`resp_count`](#structxbee__t_1a8149f7cfa5efbac113583b9ebbccb37d) | counter for ongoing transmission
`public uint16_t `[`resp_limit`](#structxbee__t_1a061a77ce3abef6a9c5ee163412dfa01c) | size RESP frame in transferred
`public uint8_t `[`rx_buf`](#structxbee__t_1a7071c0833060caff8334a432fe3aa7e4) | receiving data buffer
`public uint16_t `[`rx_count`](#structxbee__t_1ae669bea2c4efaff2f2f4677a26756463) | counter for ongoing transmission
`public uint16_t `[`rx_limit`](#structxbee__t_1aedb288ef6be1fdf2f9ae20623a8c6aa7) | size RX frame transferred

## Members

#### `public const struct `[`netdev_driver`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver)` * `[`driver`](#structxbee__t_1a756d8fc387d1c80f35cb524d37f0fc55) 

ptr to that driver's interface.

#### `public `[`netdev_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gad323355be0487ba68c16dea102740275)` `[`event_callback`](#structxbee__t_1a3a764dc506ac5121bbc95e563a8d733c) 

callback for device events

#### `public void * `[`context`](#structxbee__t_1a60ce905f049e1106789ae1fbbf443216) 

ptr to network stack context

#### `public `[`xbee_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_xbee.md#structxbee__params__t)` `[`p`](#structxbee__t_1a199bd9861854ca66f74407b5adfc9837) 

configuration parameters

#### `public uint8_t `[`options`](#structxbee__t_1a08999ba72b216525d24f0edbfa841deb) 

options field

#### `public uint8_t `[`addr_flags`](#structxbee__t_1ac9b45eb5c9603f775525ed6b5c7a799c) 

address flags as defined above

#### `public uint8_t `[`addr_short`](#structxbee__t_1aae56989de1fd62f259b871095dcbcfbe) 

own 802.15.4 short address

#### `public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`addr_long`](#structxbee__t_1a81ad3e776e40b2838b8d4ea7a905c10a) 

own 802.15.4 long address

#### `public `[`xbee_rx_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__xbee_1gacaab6b6ba03d4dc6d8113dd36689b0db)` `[`int_state`](#structxbee__t_1a5ef676a9cc09b87df92e069b19302030) 

current state if the UART RX FSM

#### `public uint16_t `[`int_size`](#structxbee__t_1afb34cec08542ea046964e7ff37d9815f) 

temporary space for parsing the frame size

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`tx_lock`](#structxbee__t_1a947b886eb60b3c1f1c900db1ccdd13c0) 

mutex to allow only one transmission at a time

#### `public uint8_t `[`cmd_buf`](#structxbee__t_1a67fc55e63bdbe828c54c6a88f992f0e5) 

command data buffer

#### `public uint8_t `[`tx_fid`](#structxbee__t_1a1ced10d1daa62378a0778cc15b5e1a0f) 

TX frame ID.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`resp_lock`](#structxbee__t_1a45d582f81a90f9a061c2b0ab650cd74b) 

mutex for waiting for AT command response frames

#### `public uint8_t `[`resp_buf`](#structxbee__t_1a33576a90c3dcf80c1feaf55b03580e5e) 

AT response data buffer.

#### `public uint16_t `[`resp_count`](#structxbee__t_1a8149f7cfa5efbac113583b9ebbccb37d) 

counter for ongoing transmission

#### `public uint16_t `[`resp_limit`](#structxbee__t_1a061a77ce3abef6a9c5ee163412dfa01c) 

size RESP frame in transferred

#### `public uint8_t `[`rx_buf`](#structxbee__t_1a7071c0833060caff8334a432fe3aa7e4) 

receiving data buffer

#### `public uint16_t `[`rx_count`](#structxbee__t_1ae669bea2c4efaff2f2f4677a26756463) 

counter for ongoing transmission

#### `public uint16_t `[`rx_limit`](#structxbee__t_1aedb288ef6be1fdf2f9ae20623a8c6aa7) 

size RX frame transferred

# struct `xbee_l2hdr_t` 

Data structure for extraction L2 information of received packets.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`addr_len`](#structxbee__l2hdr__t_1ac23252f61bd82d1e3aae51b8e1fa5d31) | L2 address length (SRC and DST)
`public uint8_t `[`bcast`](#structxbee__l2hdr__t_1a9ec0532a38bbd39d94260d0410fbfbdf) | 0 := unicast, 1:=broadcast
`public uint8_t `[`rssi`](#structxbee__l2hdr__t_1a3b7e745565cd55295776cf3be5e6f10a) | RSSI value.
`public uint8_t `[`src_addr`](#structxbee__l2hdr__t_1a1317bc6321e659ff40c140eb9e5e215a) | L2 source address.
`public uint8_t `[`dst_addr`](#structxbee__l2hdr__t_1aac81fae7fe180deee180f30d05ceb822) | L2 dst address.

## Members

#### `public uint8_t `[`addr_len`](#structxbee__l2hdr__t_1ac23252f61bd82d1e3aae51b8e1fa5d31) 

L2 address length (SRC and DST)

#### `public uint8_t `[`bcast`](#structxbee__l2hdr__t_1a9ec0532a38bbd39d94260d0410fbfbdf) 

0 := unicast, 1:=broadcast

#### `public uint8_t `[`rssi`](#structxbee__l2hdr__t_1a3b7e745565cd55295776cf3be5e6f10a) 

RSSI value.

#### `public uint8_t `[`src_addr`](#structxbee__l2hdr__t_1a1317bc6321e659ff40c140eb9e5e215a) 

L2 source address.

#### `public uint8_t `[`dst_addr`](#structxbee__l2hdr__t_1aac81fae7fe180deee180f30d05ceb822) 

L2 dst address.

