---
title: api-net_gnrc_sixlowpan_frag_minfwd.md
description: api-net_gnrc_sixlowpan_frag_minfwd.md
---
# group `net_gnrc_sixlowpan_frag_minfwd` 

Provides minimal fragment forwarding using the VRB.

**See also**: [RFC 8930](https://tools.ietf.org/html/rfc8930)

**See also**: [Virtual reassembly buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__vrb)

**This feature is experimental!**

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_sixlowpan_frag_minfwd_forward`](#group__net__gnrc__sixlowpan__frag__minfwd_1ga2b3153e7c29eb0167287d951b6e68538)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,const `[`sixlowpan_frag_n_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan.md#structsixlowpan__frag__n__t)` * frag,`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrbe,unsigned page)`            | Forwards a fragment according to a VRB entry.
`public int `[`gnrc_sixlowpan_frag_minfwd_frag_iphc`](#group__net__gnrc__sixlowpan__frag__minfwd_1gaf223333296ac83424e791042009f13c4)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t orig_datagram_size,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6_addr,`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)`            | Fragments a packet with just the IPHC (and padding payload to get to 8 byte) as the first fragment.

## Members

#### `public int `[`gnrc_sixlowpan_frag_minfwd_forward`](#group__net__gnrc__sixlowpan__frag__minfwd_1ga2b3153e7c29eb0167287d951b6e68538)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,const `[`sixlowpan_frag_n_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan.md#structsixlowpan__frag__n__t)` * frag,`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrbe,unsigned page)` 

Forwards a fragment according to a VRB entry.

#### Parameters
* `pkt` The fragment to forward (without fragmentation header). Is consumed by this function. 

* `frag` The originally received fragmentation header. 

* `vrbe` Virtual reassembly buffer containing the forwarding information. Removed when datagram was completely forwarded. 

* `page` Current 6Lo dispatch parsing page.

`vrbe != NULL`

`pkt != NULL`

`frag != NULL`

#### Returns
0 on success. 

#### Returns
-ENOMEM, when packet buffer is too full to prepare packet for forwarding.

#### `public int `[`gnrc_sixlowpan_frag_minfwd_frag_iphc`](#group__net__gnrc__sixlowpan__frag__minfwd_1gaf223333296ac83424e791042009f13c4)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t orig_datagram_size,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * ipv6_addr,`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)` 

Fragments a packet with just the IPHC (and padding payload to get to 8 byte) as the first fragment.

`(frag_msg != NULL)`

`(pkt != NULL) && (pkt->type == GNRC_NETTYPE_NETIF)`

`(pkt->next != NULL) && (pkt->next->type == GNRC_NETTYPE_SIXLOWPAN)`

#### Parameters
* `pkt` The compressed packet to be sent. Must be in send order with a packet snip of type [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3) first, [GNRC_NETTYPE_SIXLOWPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902ae3db3bc6ba0636854f94574d7eba0a99) (the IPHC header including NHC) second, and 0 or more snips of payload. 

* `orig_datagram_size` The size of the `pkt` before compression (without [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3) snip). This can differ from `frag_msg's` gnrc_sixlowpan_msg_frag_t::datagram_size as it might just be a fragment in forwarding that is re-compressed in `pkt`. 

* `ipv6_addr` The (uncompressed) destination address of `pkt`. 

* `fbuf` A fragmentation buffer entry.

#### Returns
0, when fragmentation was successful 

#### Returns
-1, on error. `pkt` is **not** released in that case and *should* be handled by normal fragmentation.

