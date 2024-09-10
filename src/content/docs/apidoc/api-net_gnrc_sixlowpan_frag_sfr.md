---
title: api-net_gnrc_sixlowpan_frag_sfr.md
description: api-net_gnrc_sixlowpan_frag_sfr.md
---
# group `net_gnrc_sixlowpan_frag_sfr` 

6LoWPAN selective fragment recovery implementation for GNRC

6LoWPAN selective fragment recovery is an alternative fragmentation specification to [classic 6LoWPAN fragmentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag). It can be run in parallel to classic fragmentation, but is incompatible with its message formats.

How nodes can exchange that they are able to communicate using selective fragment recovery is currently not specified, so this feature should only be used if the operator of a network can ensure that all 6LoWPAN nodes within that network can communicate using selective fragment recovery.

**See also**: [RFC 8931](https://tools.ietf.org/html/rfc8931)

**This feature is experimental!**

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SIXLOWPAN_FRAG_SFR_ARQ_TIMEOUT_MSG`](#group__net__gnrc__sixlowpan__frag__sfr_1gae2888310774495e91d8c6d93b48ad921)            | Message type to signal an acknowledgement request timeout.
`define `[`GNRC_SIXLOWPAN_FRAG_SFR_INTER_FRAG_GAP_MSG`](#group__net__gnrc__sixlowpan__frag__sfr_1ga3d12d57fddf0b2ab8a6fc83b71a9b86f)            | Message type to signal the sending of the next frame.
`public void `[`gnrc_sixlowpan_frag_sfr_init`](#group__net__gnrc__sixlowpan__frag__sfr_1ga7cfb03e964527d2549f1c8c4f1396491)`(void)`            | Initialize selective fragment recovery.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_init_iface`](#group__net__gnrc__sixlowpan__frag__sfr_1gacbf6a042c264c60dc6ae6add48247122)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Initialize a network interface for selective fragment recovery.
`public inline static bool `[`gnrc_sixlowpan_frag_sfr_netif`](#group__net__gnrc__sixlowpan__frag__sfr_1gaa8838a05ea4551f58508eb2831dfe1f3)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Checks if a network interface is configured for selective fragment recovery.
`public void `[`gnrc_sixlowpan_frag_sfr_send`](#group__net__gnrc__sixlowpan__frag__sfr_1ga7b9be832c39eb39dc84e9e5c659a8b73)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)`            | Sends a packet via selective fragment recovery.
`public void `[`gnrc_sixlowpan_frag_sfr_recv`](#group__net__gnrc__sixlowpan__frag__sfr_1ga7b8ee9de5e7faca34b9c9700170b608a)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)`            | Handles a packet containing a selective fragment recovery header.
`public int `[`gnrc_sixlowpan_frag_sfr_forward`](#group__net__gnrc__sixlowpan__frag__sfr_1ga32abfddc05a8a52b7e37d60244d84911)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * rfrag,`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrbe,unsigned page)`            | Forward a fragment via selective fragment recovery.
`public void `[`gnrc_sixlowpan_frag_sfr_arq_timeout`](#group__net__gnrc__sixlowpan__frag__sfr_1ga33f9695966ead2b6e026c3455378ce8c)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)`            | Handles an Acknowledgment request timeout.
`public void `[`gnrc_sixlowpan_frag_sfr_inter_frame_gap`](#group__net__gnrc__sixlowpan__frag__sfr_1gabed229f03e0cff940a24e271082ab4f3)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)`            | Handles inter frame gap.
`struct `[`gnrc_sixlowpan_frag_sfr_stats_t`](#structgnrc__sixlowpan__frag__sfr__stats__t) | Stats on selective fragment recovery.
`struct `[`gnrc_sixlowpan_frag_sfr_fb`](#structgnrc__sixlowpan__frag__sfr__fb) | Extension for [6LoWPAN fragmentation buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__fb) for selective fragment recovery.
`union `[`gnrc_sixlowpan_frag_sfr_bitmap_t`](#uniongnrc__sixlowpan__frag__sfr__bitmap__t) | Bitmap type to simplify comparisons.

## Members

#### `define `[`GNRC_SIXLOWPAN_FRAG_SFR_ARQ_TIMEOUT_MSG`](#group__net__gnrc__sixlowpan__frag__sfr_1gae2888310774495e91d8c6d93b48ad921) 

Message type to signal an acknowledgement request timeout.

#### `define `[`GNRC_SIXLOWPAN_FRAG_SFR_INTER_FRAG_GAP_MSG`](#group__net__gnrc__sixlowpan__frag__sfr_1ga3d12d57fddf0b2ab8a6fc83b71a9b86f) 

Message type to signal the sending of the next frame.

#### `public void `[`gnrc_sixlowpan_frag_sfr_init`](#group__net__gnrc__sixlowpan__frag__sfr_1ga7cfb03e964527d2549f1c8c4f1396491)`(void)` 

Initialize selective fragment recovery.

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_init_iface`](#group__net__gnrc__sixlowpan__frag__sfr_1gacbf6a042c264c60dc6ae6add48247122)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Initialize a network interface for selective fragment recovery.

This is a NOP without module `gnrc_sixlowpan_frag_sfr`

#### Parameters
* `netif` A network interface

#### `public inline static bool `[`gnrc_sixlowpan_frag_sfr_netif`](#group__net__gnrc__sixlowpan__frag__sfr_1gaa8838a05ea4551f58508eb2831dfe1f3)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Checks if a network interface is configured for selective fragment recovery.

#### Parameters
* `netif` A network interface.

#### Returns
true, if `netif` supports selective fragment recovery and has it enabled. 

#### Returns
false, if `netif` does not support selective fragment recovery or does not have it enabled.

#### `public void `[`gnrc_sixlowpan_frag_sfr_send`](#group__net__gnrc__sixlowpan__frag__sfr_1ga7b9be832c39eb39dc84e9e5c659a8b73)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)` 

Sends a packet via selective fragment recovery.

`ctx != NULL`

[gnrc_sixlowpan_frag_fb_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t_1a22e57218870be84de10b9b2ca1f77186) of `ctx` is equal to `pkt` or `pkt == NULL`.

#### Parameters
* `pkt` A packet. May be NULL. 

* `ctx` Fragmentation buffer entry of. Expected to be of type [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t), with [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) set to `pkt`. Must not be NULL. 

* `page` Current 6Lo dispatch parsing page.

#### `public void `[`gnrc_sixlowpan_frag_sfr_recv`](#group__net__gnrc__sixlowpan__frag__sfr_1ga7b8ee9de5e7faca34b9c9700170b608a)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,void * ctx,unsigned page)` 

Handles a packet containing a selective fragment recovery header.

#### Parameters
* `pkt` The packet to handle. 

* `ctx` Context for the packet. May be NULL. 

* `page` Current 6Lo dispatch parsing page.

#### `public int `[`gnrc_sixlowpan_frag_sfr_forward`](#group__net__gnrc__sixlowpan__frag__sfr_1ga32abfddc05a8a52b7e37d60244d84911)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * rfrag,`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrbe,unsigned page)` 

Forward a fragment via selective fragment recovery.

#### Parameters
* `pkt` The fragment to forward (without RFRAG header). Is consumed by this function. 

* `rfrag` The originally received RFRAG header. 

* `vrbe` Virtual reassembly buffer containing the forwarding information. 

* `page` Current 6Lo dispatch parsing page.

#### Returns
0, on success. 

#### Returns
-ENOMEM, when packet buffer is too full to prepare packet for forwarding. `pkt` is released in that case.

#### `public void `[`gnrc_sixlowpan_frag_sfr_arq_timeout`](#group__net__gnrc__sixlowpan__frag__sfr_1ga33f9695966ead2b6e026c3455378ce8c)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)` 

Handles an Acknowledgment request timeout.

#### Parameters
* `fbuf` The fragmentation buffer representing the datagram for which fragments the Acknowledgment request timed out.

#### `public void `[`gnrc_sixlowpan_frag_sfr_inter_frame_gap`](#group__net__gnrc__sixlowpan__frag__sfr_1gabed229f03e0cff940a24e271082ab4f3)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)` 

Handles inter frame gap.

#### Parameters
* `fbuf` The fragmentation buffer representing the datagram for which the next frame should uphold the inter frame gap

# struct `gnrc_sixlowpan_frag_sfr_stats_t` 

Stats on selective fragment recovery.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`datagram_resends`](#structgnrc__sixlowpan__frag__sfr__stats__t_1abb51329faa46143ca9d2f4777d0f5622) | datagrams resent
`public uint32_t `[`usual`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a13dbe8df74fa610a8b1b94090d9ecce9) | non-abort fragments sent
`public uint32_t `[`aborts`](#structgnrc__sixlowpan__frag__sfr__stats__t_1ae7ccb3f6d5c63d1a97d480055a77c568) | abort pseudo-fragments sent
`public uint32_t `[`forwarded`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a35122981f2feda9a75a81a9284a0adb4) | forwarded fragments
`public struct gnrc_sixlowpan_frag_sfr_stats_t::@371 `[`fragments_sent`](#structgnrc__sixlowpan__frag__sfr__stats__t_1af73585c05353d6b3f1933db8a4edef8e) | RFRAG packets sent.
`public uint32_t `[`by_nack`](#structgnrc__sixlowpan__frag__sfr__stats__t_1abc739de41b8e842f253427f409335858) | fragments resent due to a 0 in ACK's bitmap
`public uint32_t `[`by_timeout`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a9ea3cd57fede04dbd8c45aafbb9b5478) | fragments resent due to an ARQ timeout
`public struct gnrc_sixlowpan_frag_sfr_stats_t::@372 `[`fragment_resends`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a090aacd781463df71f5c0796b3557283) | fragments resent
`public uint32_t `[`full`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a1b4d5438e089c9bbe302cb16cd1c64ab) | full RFRAGs ACKs sent
`public uint32_t `[`partly`](#structgnrc__sixlowpan__frag__sfr__stats__t_1ac520df0b3cf7369489414cd733bb04ff) | partly ACKing RFRAGs sent
`public struct gnrc_sixlowpan_frag_sfr_stats_t::@373 `[`acks`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a35c19a6caeb239451973f0be0c4bd84d) | ACKs stats.

## Members

#### `public uint32_t `[`datagram_resends`](#structgnrc__sixlowpan__frag__sfr__stats__t_1abb51329faa46143ca9d2f4777d0f5622) 

datagrams resent

#### `public uint32_t `[`usual`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a13dbe8df74fa610a8b1b94090d9ecce9) 

non-abort fragments sent

#### `public uint32_t `[`aborts`](#structgnrc__sixlowpan__frag__sfr__stats__t_1ae7ccb3f6d5c63d1a97d480055a77c568) 

abort pseudo-fragments sent

abort RFRAG ACKs sent

#### `public uint32_t `[`forwarded`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a35122981f2feda9a75a81a9284a0adb4) 

forwarded fragments

forwarded ACKs

#### `public struct gnrc_sixlowpan_frag_sfr_stats_t::@371 `[`fragments_sent`](#structgnrc__sixlowpan__frag__sfr__stats__t_1af73585c05353d6b3f1933db8a4edef8e) 

RFRAG packets sent.

#### `public uint32_t `[`by_nack`](#structgnrc__sixlowpan__frag__sfr__stats__t_1abc739de41b8e842f253427f409335858) 

fragments resent due to a 0 in ACK's bitmap

#### `public uint32_t `[`by_timeout`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a9ea3cd57fede04dbd8c45aafbb9b5478) 

fragments resent due to an ARQ timeout

#### `public struct gnrc_sixlowpan_frag_sfr_stats_t::@372 `[`fragment_resends`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a090aacd781463df71f5c0796b3557283) 

fragments resent

#### `public uint32_t `[`full`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a1b4d5438e089c9bbe302cb16cd1c64ab) 

full RFRAGs ACKs sent

#### `public uint32_t `[`partly`](#structgnrc__sixlowpan__frag__sfr__stats__t_1ac520df0b3cf7369489414cd733bb04ff) 

partly ACKing RFRAGs sent

#### `public struct gnrc_sixlowpan_frag_sfr_stats_t::@373 `[`acks`](#structgnrc__sixlowpan__frag__sfr__stats__t_1a35c19a6caeb239451973f0be0c4bd84d) 

ACKs stats.

# struct `gnrc_sixlowpan_frag_sfr_fb` 

Extension for [6LoWPAN fragmentation buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__fb) for selective fragment recovery.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * `[`congure`](#structgnrc__sixlowpan__frag__sfr__fb_1a708e770f63455cc50c3f749c035c6fb1) | state object for [CongURE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure)
`public `[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` `[`arq_timeout_event`](#structgnrc__sixlowpan__frag__sfr__fb_1a99d74de74a23627e6637df96275dd18b) | Acknowledgment request timeout event.
`public uint32_t `[`arq_timeout`](#structgnrc__sixlowpan__frag__sfr__fb_1a550eef193a9b054543937d46b88b0f4a) | Time in microseconds the sender should wait for an RFRAG Acknowledgment.
`public uint8_t `[`cur_seq`](#structgnrc__sixlowpan__frag__sfr__fb_1ac6e47532c0820d863d783f3571028559) | Sequence number for next fragment.
`public uint8_t `[`frags_sent`](#structgnrc__sixlowpan__frag__sfr__fb_1a3dbe045f38a31d545de257970fce07f1) | Number of fragments sent.
`public uint8_t `[`retrans`](#structgnrc__sixlowpan__frag__sfr__fb_1a979000b78ac24451753f075af3025c03) | Datagram retransmissions.
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`window`](#structgnrc__sixlowpan__frag__sfr__fb_1aabc2932e958533c9baf0d3fa165638ad) | Sent fragments of the current window.

## Members

#### `public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * `[`congure`](#structgnrc__sixlowpan__frag__sfr__fb_1a708e770f63455cc50c3f749c035c6fb1) 

state object for [CongURE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure)

#### `public `[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` `[`arq_timeout_event`](#structgnrc__sixlowpan__frag__sfr__fb_1a99d74de74a23627e6637df96275dd18b) 

Acknowledgment request timeout event.

#### `public uint32_t `[`arq_timeout`](#structgnrc__sixlowpan__frag__sfr__fb_1a550eef193a9b054543937d46b88b0f4a) 

Time in microseconds the sender should wait for an RFRAG Acknowledgment.

#### `public uint8_t `[`cur_seq`](#structgnrc__sixlowpan__frag__sfr__fb_1ac6e47532c0820d863d783f3571028559) 

Sequence number for next fragment.

#### `public uint8_t `[`frags_sent`](#structgnrc__sixlowpan__frag__sfr__fb_1a3dbe045f38a31d545de257970fce07f1) 

Number of fragments sent.

#### `public uint8_t `[`retrans`](#structgnrc__sixlowpan__frag__sfr__fb_1a979000b78ac24451753f075af3025c03) 

Datagram retransmissions.

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`window`](#structgnrc__sixlowpan__frag__sfr__fb_1aabc2932e958533c9baf0d3fa165638ad) 

Sent fragments of the current window.

