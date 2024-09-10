---
title: api-net_gnrc_sixlowpan_config.md
description: api-net_gnrc_sixlowpan_config.md
---
# group `net_gnrc_sixlowpan_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SIXLOWPAN_STACK_SIZE`](#group__net__gnrc__sixlowpan__config_1gafda0f30679301e03fd3035e24497b05c)            | Default stack size to use for the 6LoWPAN thread.
`define `[`GNRC_SIXLOWPAN_PRIO`](#group__net__gnrc__sixlowpan__config_1ga394abb39f199270051899ec29ec1a3da)            | Default priority for the 6LoWPAN thread.
`define `[`CONFIG_GNRC_SIXLOWPAN_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__sixlowpan__config_1ga1219804b3c712e48de4908355fb82aea)            | Default message queue size to use for the 6LoWPAN thread (as exponent of 2^n).
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_FB_SIZE`](#group__net__gnrc__sixlowpan__config_1ga5ba6c4be8d7c93d505ed6e10106f211e)            | Number of datagrams that can be fragmented simultaneously.
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_SIZE`](#group__net__gnrc__sixlowpan__config_1gaf7b60cbdad319a842372ed2ebb2d106c)            | Size of the reassembly buffer.
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_TIMEOUT_US`](#group__net__gnrc__sixlowpan__config_1gae8bad8e0e4b8f49baec22202ce3bfc63)            | Timeout for reassembly buffer entries in microseconds.
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_DO_NOT_OVERRIDE`](#group__net__gnrc__sixlowpan__config_1ga6cec9c28d972913ac6810b8d44e26690)            | Do not override oldest datagram when reassembly buffer is full.
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_DEL_TIMER`](#group__net__gnrc__sixlowpan__config_1ga4d97583d18fef7abe0cfff8ad0a848b0)            | Deletion timer for reassembly buffer entries in microseconds.
`define `[`CONFIG_GNRC_SIXLOWPAN_ND_AR_LTIME`](#group__net__gnrc__sixlowpan__config_1ga15dd2e19541dd74baf294e9c22f47c7e)            | Registration lifetime in minutes for the address registration option.
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_VRB_SIZE`](#group__net__gnrc__sixlowpan__config_1ga194b309b611687ad86cf094b1c763d23)            | Size of the virtual reassembly buffer.
`define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_VRB_TIMEOUT_US`](#group__net__gnrc__sixlowpan__config_1ga57dbb6eb24c259bc461ab168c4630a63)            | Timeout for a VRB entry in microseconds.
`define `[`GNRC_SIXLOWPAN_MSG_QUEUE_SIZE`](#group__net__gnrc__sixlowpan__config_1ga7823a7ea8ee8c89c95f67df6cf0aa347)            | Message queue size to use for the 6LoWPAN thread.

## Members

#### `define `[`GNRC_SIXLOWPAN_STACK_SIZE`](#group__net__gnrc__sixlowpan__config_1gafda0f30679301e03fd3035e24497b05c) 

Default stack size to use for the 6LoWPAN thread.

The message queue was previously allocated on the stack. The default number of messages is 2³. Given sizeof(msg_t) == 8, the stack size is reduced by 64 bytes.

#### `define `[`GNRC_SIXLOWPAN_PRIO`](#group__net__gnrc__sixlowpan__config_1ga394abb39f199270051899ec29ec1a3da) 

Default priority for the 6LoWPAN thread.

#### `define `[`CONFIG_GNRC_SIXLOWPAN_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__sixlowpan__config_1ga1219804b3c712e48de4908355fb82aea) 

Default message queue size to use for the 6LoWPAN thread (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the queue.

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_FB_SIZE`](#group__net__gnrc__sixlowpan__config_1ga5ba6c4be8d7c93d505ed6e10106f211e) 

Number of datagrams that can be fragmented simultaneously.

This determines the number of [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) instances available.

Only applicable with [gnrc_sixlowpan_frag_fb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__fb) module

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_SIZE`](#group__net__gnrc__sixlowpan__config_1gaf7b60cbdad319a842372ed2ebb2d106c) 

Size of the reassembly buffer.

Only applicable with [gnrc_sixlowpan_frag_rb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb) module

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_TIMEOUT_US`](#group__net__gnrc__sixlowpan__config_1gae8bad8e0e4b8f49baec22202ce3bfc63) 

Timeout for reassembly buffer entries in microseconds.

Only applicable with [gnrc_sixlowpan_frag_rb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb) module

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_DO_NOT_OVERRIDE`](#group__net__gnrc__sixlowpan__config_1ga6cec9c28d972913ac6810b8d44e26690) 

Do not override oldest datagram when reassembly buffer is full.

Only applicable with [gnrc_sixlowpan_frag_rb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb) module

When not set, it will cause the reassembly buffer to override the oldest entry when a fragment for a new datagram is received. When set, only the oldest entry that is older than [CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_TIMEOUT_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1gae8bad8e0e4b8f49baec22202ce3bfc63) will be overwritten (they will still timeout normally if reassembly buffer is not full).

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_RBUF_DEL_TIMER`](#group__net__gnrc__sixlowpan__config_1ga4d97583d18fef7abe0cfff8ad0a848b0) 

Deletion timer for reassembly buffer entries in microseconds.

Only applicable with [gnrc_sixlowpan_frag_rb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb) module

Time to pass between completion of a datagram and the deletion of its reassembly buffer entry. If this value is 0, the entry is dropped immediately. Use this value to prevent re-creation of a reassembly buffer entry on late arriving link-layer duplicates.

#### `define `[`CONFIG_GNRC_SIXLOWPAN_ND_AR_LTIME`](#group__net__gnrc__sixlowpan__config_1ga15dd2e19541dd74baf294e9c22f47c7e) 

Registration lifetime in minutes for the address registration option.

This value should be adapted to the devices power-lifecycle so that it is greater than the time the device spends sleeping.

**See also**: [RFC 6775, section 5.8.1](https://tools.ietf.org/html/rfc6775#section-5.8.1)

Only applicable with [gnrc_ipv6_nib](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib) and [gnrc_sixlowpan_nd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__nd) modules. The first provides automatic sending of neighbor solicitations, the latter provides capabilities to build the address registration option as a [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_VRB_SIZE`](#group__net__gnrc__sixlowpan__config_1ga194b309b611687ad86cf094b1c763d23) 

Size of the virtual reassembly buffer.

**See also**: [https://tools.ietf.org/html/draft-ietf-lwig-6lowpan-virtual-reassembly-01](https://tools.ietf.org/html/draft-ietf-lwig-6lowpan-virtual-reassembly-01)

Only applicable with [gnrc_sixlowpan_frag_vrb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__vrb) module, but has also a direct influence on the number of available gnrc_sixlowpan_frag_rb_int_t entries.

#### `define `[`CONFIG_GNRC_SIXLOWPAN_FRAG_VRB_TIMEOUT_US`](#group__net__gnrc__sixlowpan__config_1ga57dbb6eb24c259bc461ab168c4630a63) 

Timeout for a VRB entry in microseconds.

**See also**: [https://tools.ietf.org/html/draft-ietf-lwig-6lowpan-virtual-reassembly-01](https://tools.ietf.org/html/draft-ietf-lwig-6lowpan-virtual-reassembly-01)

Only applicable with [gnrc_sixlowpan_frag_vrb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__vrb) module.

#### `define `[`GNRC_SIXLOWPAN_MSG_QUEUE_SIZE`](#group__net__gnrc__sixlowpan__config_1ga7823a7ea8ee8c89c95f67df6cf0aa347) 

Message queue size to use for the 6LoWPAN thread.

