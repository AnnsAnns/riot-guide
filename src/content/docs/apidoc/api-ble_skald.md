---
title: api-ble_skald.md
description: api-ble_skald.md
---
# group `ble_skald` 

Skald, a minimalistic BLE advertising stack.

AboutSkald is a very minimalistic BLE implementation, implementing the `broadcaster` role only. With this focus, the stack allows for setting up different kind of beacons using an extremely low memory footprint.

Design Decisions and Limitations

* support for local addresses only (using `luid` to generate them)

* advertising interval is configured during compile time, override by setting `CFLAGS+=-DCONFIG_SKALD_INTERVAL=xxx`

* advertising channels are configured during compile time, override by setting `CFLAGS+=-DSKALD_ADV_CHAN={37,39}`

Implementation stateSupported:

* advertising of custom GAP payloads

* iBeacon (full support)

* Eddystone (partly supported)

Limitations:

* currently Skald supports random static addresses only (generated using the `luid` module)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SKALD_ADV_CHAN`](#group__ble__skald_1gaa63f27cc07724ee6f804f725511cd1ba)            | List of advertising channels.
`public void `[`skald_init`](#group__ble__skald_1gadf41e167fc8fc8418a7cee9bc14d5c29)`(void)`            | Initialize Skald and the underlying radio.
`public void `[`skald_adv_start`](#group__ble__skald_1ga5e8e394c7ccee712fab3f30629a07346)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx)`            | Start advertising the given packet.
`public void `[`skald_adv_stop`](#group__ble__skald_1gaf8f70841bd1265f8f5a8d1c858ac3d8e)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx)`            | Stop the ongoing advertisement.
`public void `[`skald_generate_random_addr`](#group__ble__skald_1gae33964f370c344557e7ae6e28b55d75b)`(uint8_t * buf)`            | Generate a random public address.
`struct `[`skald_uuid_t`](#structskald__uuid__t) | UUID representation format used by Skald.
`struct `[`skald_ctx_t`](#structskald__ctx__t) | Advertising context holding the advertising data and state.

## Members

#### `define `[`SKALD_ADV_CHAN`](#group__ble__skald_1gaa63f27cc07724ee6f804f725511cd1ba) 

List of advertising channels.

#### `public void `[`skald_init`](#group__ble__skald_1gadf41e167fc8fc8418a7cee9bc14d5c29)`(void)` 

Initialize Skald and the underlying radio.

#### `public void `[`skald_adv_start`](#group__ble__skald_1ga5e8e394c7ccee712fab3f30629a07346)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx)` 

Start advertising the given packet.

The packet will be send out each advertising interval (see CONFIG_SKALD_INTERVAL) on each of the defined advertising channels (see SKALD_ADV_CHAN).

#### Parameters
* `ctx` start advertising this context

#### `public void `[`skald_adv_stop`](#group__ble__skald_1gaf8f70841bd1265f8f5a8d1c858ac3d8e)`(`[`skald_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-ble_skald.md#structskald__ctx__t)` * ctx)` 

Stop the ongoing advertisement.

#### Parameters
* `ctx` stop advertising this context

#### `public void `[`skald_generate_random_addr`](#group__ble__skald_1gae33964f370c344557e7ae6e28b55d75b)`(uint8_t * buf)` 

Generate a random public address.

`buf` must be able to hold BLE_ADDR_LEN (6) bytes

#### Parameters
* `buf` the generated address is written to this buffer

# struct `skald_uuid_t` 

UUID representation format used by Skald.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`u8`](#structskald__uuid__t_1a14af4eb9ab4292bae66b19785b2de2ad) | UUID with byte-wise access.

## Members

#### `public uint8_t `[`u8`](#structskald__uuid__t_1a14af4eb9ab4292bae66b19785b2de2ad) 

UUID with byte-wise access.

# struct `skald_ctx_t` 

Advertising context holding the advertising data and state.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_ble_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__pkt__t)` `[`pkt`](#structskald__ctx__t_1ad820e2d0e94dea14e3fac048ef27e6ca) | packet holding the advertisement (GAP) data
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timer`](#structskald__ctx__t_1a0b5a258d3b813e63eb615448cbdb50ae) | timer for scheduling advertising events
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`last`](#structskald__ctx__t_1afc4ffd1c3011c68b2f906e97b6abca9f) | last timer trigger (for offset compensation)
`public uint8_t `[`cur_chan`](#structskald__ctx__t_1a2726e58f7d1ee2b4a4cbd75c21efed2d) | keep track of advertising channels
`public uint32_t `[`adv_itvl_ms`](#structskald__ctx__t_1a1bd1441cce0dae121c89bc662c65d1b6) | advertising interval [ms]

## Members

#### `public `[`netdev_ble_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ble.md#structnetdev__ble__pkt__t)` `[`pkt`](#structskald__ctx__t_1ad820e2d0e94dea14e3fac048ef27e6ca) 

packet holding the advertisement (GAP) data

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timer`](#structskald__ctx__t_1a0b5a258d3b813e63eb615448cbdb50ae) 

timer for scheduling advertising events

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`last`](#structskald__ctx__t_1afc4ffd1c3011c68b2f906e97b6abca9f) 

last timer trigger (for offset compensation)

#### `public uint8_t `[`cur_chan`](#structskald__ctx__t_1a2726e58f7d1ee2b4a4cbd75c21efed2d) 

keep track of advertising channels

#### `public uint32_t `[`adv_itvl_ms`](#structskald__ctx__t_1a1bd1441cce0dae121c89bc662c65d1b6) 

advertising interval [ms]

