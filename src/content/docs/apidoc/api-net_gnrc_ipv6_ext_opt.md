---
title: api-net_gnrc_ipv6_ext_opt.md
description: api-net_gnrc_ipv6_ext_opt.md
---
# group `net_gnrc_ipv6_ext_opt` 

GNRC implementation of IPv6 hop-by-hop and destination option header extension.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_opt_process`](#group__net__gnrc__ipv6__ext__opt_1ga0d7afe497dc0e351b06c3fc0f476e8ea)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t protnum)`            | Processes all options within an IPv6 option header.

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_opt_process`](#group__net__gnrc__ipv6__ext__opt_1ga0d7afe497dc0e351b06c3fc0f476e8ea)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t protnum)` 

Processes all options within an IPv6 option header.

`pkt != NULL`

`(protnum == PROTNUM_IPV6_EXT_HOPOPT) || (protnum == PROTNUM_IPV6_EXT_DST)`

#### Parameters
* `pkt` The packet containing the option header. The option must be contained in the first snip, with all preceding headers marked (in receive order). Must not be NULL. 

* `protnum` The protocol number of the option header. Must be [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09) or [PROTNUM_IPV6_EXT_DST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga786212723c89cca63161c9d31583619d)

#### Returns
`pkt` with the option header marked on success. 

#### Returns
NULL, if the packet was consumed by the option handling. 

#### Returns
NULL, on error. `pkt` is released with EINVAL in that case and if necessary and [`gnrc_icmpv6_error`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__icmpv6__error) is used, the according ICMPv6 error message is sent.

