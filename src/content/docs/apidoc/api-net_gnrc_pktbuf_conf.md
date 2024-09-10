---
title: api-net_gnrc_pktbuf_conf.md
description: api-net_gnrc_pktbuf_conf.md
---
# group `net_gnrc_pktbuf_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_PKTBUF_SIZE`](#group__net__gnrc__pktbuf__conf_1ga3d31ccb6c133c6c4c91d60f5e420a83c)            | Maximum size of the static packet buffer.

## Members

#### `define `[`CONFIG_GNRC_PKTBUF_SIZE`](#group__net__gnrc__pktbuf__conf_1ga3d31ccb6c133c6c4c91d60f5e420a83c) 

Maximum size of the static packet buffer.

The rational here is to have at least space for 4 full-MTU IPv6 packages (2 incoming, 2 outgoing; 2 * 2 * 1280 B = 5 KiB) + Meta-Data (roughly estimated to 1 KiB; might be smaller). If [CONFIG_GNRC_PKTBUF_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf__conf_1ga3d31ccb6c133c6c4c91d60f5e420a83c) is 0 the packet buffer will use dynamic memory management to allocate packets.

