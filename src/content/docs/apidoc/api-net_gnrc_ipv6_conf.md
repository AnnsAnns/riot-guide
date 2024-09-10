---
title: api-net_gnrc_ipv6_conf.md
description: api-net_gnrc_ipv6_conf.md
---
# group `net_gnrc_ipv6_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_IPV6_STACK_SIZE`](#group__net__gnrc__ipv6__conf_1ga2326b53a03c6e2ddc9036bf020b11b99)            | Default stack size to use for the IPv6 thread.
`define `[`GNRC_IPV6_PRIO`](#group__net__gnrc__ipv6__conf_1ga8f22df988032dbd4e6684e63bcdd90e1)            | Default priority for the IPv6 thread.
`define `[`CONFIG_GNRC_IPV6_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__ipv6__conf_1gac0ad13d6978be9acb268d0410ef7e073)            | Default message queue size to use for the IPv6 thread (as exponent of 2^n).
`define `[`CONFIG_GNRC_IPV6_STATIC_LLADDR`](#group__net__gnrc__ipv6__conf_1gaec599c645f567b0b6970995aec4a4aed)            | Add a static IPv6 link local address to any network interface.

## Members

#### `define `[`GNRC_IPV6_STACK_SIZE`](#group__net__gnrc__ipv6__conf_1ga2326b53a03c6e2ddc9036bf020b11b99) 

Default stack size to use for the IPv6 thread.

The message queue was previously allocated on the stack. The default number of messages is 2³. Given sizeof(msg_t) == 8, the stack size is reduced by 64 bytes.

#### `define `[`GNRC_IPV6_PRIO`](#group__net__gnrc__ipv6__conf_1ga8f22df988032dbd4e6684e63bcdd90e1) 

Default priority for the IPv6 thread.

#### `define `[`CONFIG_GNRC_IPV6_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__ipv6__conf_1gac0ad13d6978be9acb268d0410ef7e073) 

Default message queue size to use for the IPv6 thread (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the queue.

#### `define `[`CONFIG_GNRC_IPV6_STATIC_LLADDR`](#group__net__gnrc__ipv6__conf_1gaec599c645f567b0b6970995aec4a4aed) 

Add a static IPv6 link local address to any network interface.

This macro allows to specify a certain link local IPv6 address to be assigned to a network interface on startup, which might be handy for testing. Note: a) a interface will keep its auto-generated link local address, too b) the address is incremented by the interface PID unless `CONFIG_GNRC_IPV6_STATIC_LLADDR_IS_FIXED` is set.

To use the macro just add it to `CFLAGS` in the application's Makefile, like:

```cpp
IPV6_STATIC_LLADDR ?= '"fe80::cafe:cafe:cafe:1"'
CFLAGS += -DCONFIG_GNRC_IPV6_STATIC_LLADDR=$(STATIC_IPV6_LLADDR)
```

