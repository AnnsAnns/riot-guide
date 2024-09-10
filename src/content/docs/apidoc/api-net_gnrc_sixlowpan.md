---
title: api-net_gnrc_sixlowpan.md
description: api-net_gnrc_sixlowpan.md
---
# group `net_gnrc_sixlowpan` 

GNRC's 6LoWPAN implementation.

Internal API and sub-modulesInternally, [6LoWPAN](#group__net__gnrc__sixlowpan) is sub-divided into several sub-modules. They implement certain features of the 6LoWPAN standard. Currently implemented are

* [Fragmentation](https://tools.ietf.org/html/rfc4944#section-5.3) ([gnrc_sixlowpan_frag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag))

* [Uncompressed IPv6](https://tools.ietf.org/html/rfc4944#section-5.1) (as part of the main [6LoWPAN](#group__net__gnrc__sixlowpan) module)

* IPv6 datagram compression according to [RFC 6282](https://tools.ietf.org/html/rfc6282) aka IPHC ([gnrc_sixlowpan_iphc](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__iphc), IPv6 extension header NHC currently missing)

Each sub-module has a `send` and `recv` function prefixed by their respective sub-module name with the following signatures

```cpp
void send(gnrc_pktsnip_t *pkt, void *ctx, uint8_t page);
void recv(gnrc_pktsnip_t *pkt, void *ctx, uint8_t page);
```

A 6LoWPAN frame `pkt` must pass the sub-modules sequentially in the order of its dispatches on receive or the step that makes most sense next on send. After it was passed into another sub-module using the respective `send`/`recv` function a sub-module must not operate on the `pkt` anymore.

The `ctx` parameter can be used to provide data structures of a sub-module to the next sub-module if that needs to modify or read them (e.g. reassembly buffer state for IPHC) otherwise, leave it `NULL`.

Finally, the `page` parameter is to provide a sub-module the current parsing page context according to [RFC 8025](https://tools.ietf.org/html/rfc8025).

Supported NETAPI commandsTo interact with other modules this module handles the following [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) message types:

<tt>GNRC_NETAPI_MSG_TYPE_RCV</tt>[GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) expects a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) (referred to as "packet" in the following) in receive order (link-layer payload first, [Generic network interface header](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr) last) with the payload marked with [GNRC_NETTYPE_SIXLOWPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902ae3db3bc6ba0636854f94574d7eba0a99). Every other packet will be silently discarded.

If the first byte of the payload is [SIXLOWPAN_UNCOMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga40387ee7a068a40ce08bffdff6af628e) this byte will be removed by marking it with a new [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) and then removing this [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63), the remaining payload will be marked with [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) and this module will issue a [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) to all subscribers registered to [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) with demultiplex context [GNRC_NETREG_DEMUX_CTX_ALL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1a6359efa13b3bfed70af55deacde7ae) in the [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg) with the packet. Otherwise, the packet will be silently discarded (except for the cases documented below).

Depending on which other modules are included the behavior can be a little different:

* If [6LoWPAN Fragmentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag) is included and [sixlowpan_frag_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gab08118b367c7e56e8f0474020fd7156d) is true for the packet, the fragmentation header will be removed and its remaining data will be added to the reassembly buffer (using [gnrc_sixlowpan_frag_rb_add()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb_1ga0679e4d25cef6dbe7080a6f9ef4f90da)) in accordance to the fragmentation header. The packet containing the fragment will be discarded. When the fragmented datagram is complete, its payload will be marked with [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) and issued via a [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) to all subscribers registered to [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) with demultiplex context [GNRC_NETREG_DEMUX_CTX_ALL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1a6359efa13b3bfed70af55deacde7ae) in the [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg). If reassembly times out or if fragments overlap the datagram will be silently discarded.

* If [IPv6 header compression (IPHC)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__iphc) is included the packet will not be send to the subscribers to [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) with demultiplex context [GNRC_NETREG_DEMUX_CTX_ALL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1a6359efa13b3bfed70af55deacde7ae) immediately, but it will be checked first if [sixlowpan_iphc_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga49acf596aa5c85128ec25571c77d5181) is true for its payload. If false it will be send to the [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) subscribers as usual. If true the IPHC dispatch will be decompressed to a full IPv6 header first. The IPHC dispatch will be replaced by the uncompressed IPHC header, any NHC dispatch will be replaced by their respective uncompressed header. The resulting packet will then be issued to the [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) subscribers as usual.

* If both [6LoWPAN Fragmentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag) and [IPv6 header compression (IPHC)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__iphc) are included the and [sixlowpan_frag_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gab08118b367c7e56e8f0474020fd7156d) is true for the packet, the fragmented datagram will be reassembled as described in (1). If for the remainder (after removal of the fragment header) of the first fragment [sixlowpan_iphc_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga49acf596aa5c85128ec25571c77d5181) is true, it will be decompressed as described in (2), with the exception that the packet will only be send to all receivers of [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) as soon as the datagram was completely reassembled and not after directly after decompression. If [sixlowpan_iphc_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga49acf596aa5c85128ec25571c77d5181) is false, reassembly is handled completely as described in (1). It is assumed that a fragment can fit a full compression header (including inlined fields and possibly NHC/GHC headers) as specified in [RFC 6282, section 2](https://tools.ietf.org/html/rfc6282#section-2).

<tt>GNRC_NETAPI_MSG_TYPE_SND</tt>[GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) expects a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) (referred to as "packet" in the following) in send order (headers first, payload last) with the first header being a valid [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3) header and the second a [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) header. Every other packet will be silently discarded.

The [GNRC_NETTYPE_SIXLOWPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902ae3db3bc6ba0636854f94574d7eba0a99) header must at least have the [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) field set to a legal, 6LoWPAN compatible interface referred to as `netif` in the following, otherwise the packet will be discarded.

If [IPv6 header compression (IPHC)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__iphc) is included and [GNRC_NETIF_FLAGS_6LO_HC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#flags_8h_1abac3987a0e22590d861339e7693a7a17) is enabled for `netif` the [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) header will be compressed according to [RFC 6282, section 3](https://tools.ietf.org/html/rfc6282#section-3). If it is false the [SIXLOWPAN_UNCOMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga40387ee7a068a40ce08bffdff6af628e) dispatch will be appended as a new [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) to the packet. The false case also applies if [IPv6 header compression (IPHC)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__iphc) is not included.

If the packet without [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3) header is shorter than gnrc_netif_t::sixlo::max_frag_size of `netif` the packet will be send to the `netif`'s thread. Otherwise if [6LoWPAN Fragmentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag) is included the packet will be fragmented according to [RFC 4944, section 5.3](https://tools.ietf.org/html/rfc4944#section-5.3) if the packet is without [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3) header shorter than [SIXLOWPAN_FRAG_MAX_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga95be475c8d0d9102bc00b902f6f9262e). If none of these cases apply, the packet will be discarded silently.

<tt>GNRC_NETAPI_MSG_TYPE_SET</tt>`GNRC_NETAPI_MSG_TYPE_SET` is not supported.

<tt>GNRC_NETAPI_MSG_TYPE_GET</tt>`GNRC_NETAPI_MSG_TYPE_GET` is not supported.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_sixlowpan_init`](#group__net__gnrc__sixlowpan_1gacd05c49a69c32d29720bb87758eac003)`(void)`            | Initialization of the 6LoWPAN thread.

## Members

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_sixlowpan_init`](#group__net__gnrc__sixlowpan_1gacd05c49a69c32d29720bb87758eac003)`(void)` 

Initialization of the 6LoWPAN thread.

If 6LoWPAN was already initialized, it will just return the PID of the 6LoWPAN thread.

#### Returns
The PID to the 6LoWPAN thread, on success. 

#### Returns
-EINVAL, if [GNRC_SIXLOWPAN_PRIO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga394abb39f199270051899ec29ec1a3da) was greater than or equal to [SCHED_PRIO_LEVELS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga1868da7c35ae4ff66fc899793d283dd6)

#### Returns
-EOVERFLOW, if there are too many threads running already in general

