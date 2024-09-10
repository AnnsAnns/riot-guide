---
title: api-net_gnrc_pktdump_conf.md
description: api-net_gnrc_pktdump_conf.md
---
# group `net_gnrc_pktdump_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_PKTDUMP_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__pktdump__conf_1gac64430e450e30907c6b6a22d6b1519fb)            | Default message queue size for the PKTDUMP thread (as exponent of 2^n).

## Members

#### `define `[`CONFIG_GNRC_PKTDUMP_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__pktdump__conf_1gac64430e450e30907c6b6a22d6b1519fb) 

Default message queue size for the PKTDUMP thread (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the queue.

