---
title: api-net_gnrc_sixlowpan_iphc.md
description: api-net_gnrc_sixlowpan_iphc.md
---
# group `net_gnrc_sixlowpan_iphc` 

IPv6 header compression for 6LoWPAN.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gnrc_sixlowpan_iphc_recv`](#group__net__gnrc__sixlowpan__iphc_1ga446d79cfae3078a263afcb4c0d9e7a79)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)`            | Decompresses a received 6LoWPAN IPHC frame.
`public void `[`gnrc_sixlowpan_iphc_send`](#group__net__gnrc__sixlowpan__iphc_1gac20050744071e0fb404fd29d8e294af1)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)`            | Compresses a 6LoWPAN for IPHC.

## Members

#### `public void `[`gnrc_sixlowpan_iphc_recv`](#group__net__gnrc__sixlowpan__iphc_1ga446d79cfae3078a263afcb4c0d9e7a79)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)` 

Decompresses a received 6LoWPAN IPHC frame.

(pkt != NULL)

#### Parameters
* `pkt` A received 6LoWPAN IPHC frame. The first snip is to be expected to start with the IPHC dispatch. 

* `ctx` Context for the packet. May be NULL. If not NULL it is expected to be of type [gnrc_sixlowpan_frag_rb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t). This function might change the content of that. 

* `page` Current 6Lo dispatch parsing page.

#### `public void `[`gnrc_sixlowpan_iphc_send`](#group__net__gnrc__sixlowpan__iphc_1gac20050744071e0fb404fd29d8e294af1)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)` 

Compresses a 6LoWPAN for IPHC.

(pkt != NULL)

#### Parameters
* `pkt` A 6LoWPAN frame with an uncompressed IPv6 header to send. Will be translated to an 6LoWPAN IPHC frame. 

* `ctx` Context for the packet. May be NULL. If not NULL it is expected to be of type [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) to provide initial information for possible fragmentation after compression (see net_gnrc_sixlowpan_frag_hint). This function might change the content of that. Depending on the compile configuration it might be ignored completely. 

* `page` Current 6Lo dispatch parsing page.

