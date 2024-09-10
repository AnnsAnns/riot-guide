---
title: api-net_gnrc_sixlowpan_frag.md
description: api-net_gnrc_sixlowpan_frag.md
---
# group `net_gnrc_sixlowpan_frag` 

6LoWPAN Fragmentation headers and functionality

**See also**: [RFC 4944, section 5.3 ](https://tools.ietf.org/html/rfc4944#section-5.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gnrc_sixlowpan_frag_send`](#group__net__gnrc__sixlowpan__frag_1ga537ce73a17fd5959699c206c45d94c27)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)`            | Sends a packet fragmented.
`public void `[`gnrc_sixlowpan_frag_recv`](#group__net__gnrc__sixlowpan__frag_1ga12c448caeb8ebc35b7fad621b362d419)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)`            | Handles a packet containing a fragment header.

## Members

#### `public void `[`gnrc_sixlowpan_frag_send`](#group__net__gnrc__sixlowpan__frag_1ga537ce73a17fd5959699c206c45d94c27)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)` 

Sends a packet fragmented.

`ctx != NULL`

[gnrc_sixlowpan_frag_fb_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t_1a22e57218870be84de10b9b2ca1f77186) of `ctx` is equal to `pkt` or `pkt == NULL`.

#### Parameters
* `pkt` A packet. May be NULL. 

* `ctx` A fragmentation buffer entry. Expected to be of type [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t), with [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) set to `pkt`. Must not be NULL. 

* `page` Current 6Lo dispatch parsing page.

#### `public void `[`gnrc_sixlowpan_frag_recv`](#group__net__gnrc__sixlowpan__frag_1ga12c448caeb8ebc35b7fad621b362d419)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)` 

Handles a packet containing a fragment header.

#### Parameters
* `pkt` The packet to handle 

* `ctx` Context for the packet. May be NULL. 

* `page` Current 6Lo dispatch parsing page.

