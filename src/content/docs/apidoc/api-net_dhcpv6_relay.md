---
title: api-net_dhcpv6_relay.md
description: api-net_dhcpv6_relay.md
---
# group `net_dhcpv6_relay` 

DHCPv6 relay agent implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`dhcpv6_relay_auto_init`](#group__net__dhcpv6__relay_1gabbcbd09b7258e23f0c5897f49855dfb3)`(void)`            | Auto-initializes the relay agent in its own thread or event thread when available.
`public void `[`dhcpv6_relay_init`](#group__net__dhcpv6__relay_1ga7a7fcb66a33fadc888fac3cdb806a459)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * event_queue,uint16_t listen_netif,uint16_t fwd_netif)`            | Initializes the relay agent.

## Members

#### `public void `[`dhcpv6_relay_auto_init`](#group__net__dhcpv6__relay_1gabbcbd09b7258e23f0c5897f49855dfb3)`(void)` 

Auto-initializes the relay agent in its own thread or event thread when available.

Only used with `auto_init_dhcpv6_relay`.

#### `public void `[`dhcpv6_relay_init`](#group__net__dhcpv6__relay_1ga7a7fcb66a33fadc888fac3cdb806a459)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * event_queue,uint16_t listen_netif,uint16_t fwd_netif)` 

Initializes the relay agent.

`event_queue->waiter != NULL` (event queue is initialized)

#### Parameters
* `event_queue` Event queue to use with the relay agent. Needs to be initialized in the handler thread. 

* `listen_netif` The network interface the relay agent listens on for incoming client or relay forward messages from other relay agents. 

* `fwd_netif` The network interface the relay agent relays messages upstreams and listens for relay replies on.

