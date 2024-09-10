---
title: api-net_gnrc_rpl_p2p.md
description: api-net_gnrc_rpl_p2p.md
---
# group `net_gnrc_rpl_p2p` 

Implementation of P2P-RPL.

**See also**: [RFC 6997 ](https://tools.ietf.org/html/rfc6997)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_RPL_P2P_MOP`](#group__net__gnrc__rpl__p2p_1gab7e311f049596af615f905a083c5a7ca)            | P2P-RPL Mode of Operation.
`define `[`GNRC_RPL_P2P_LIFETIME`](#group__net__gnrc__rpl__p2p_1gaa1915d8751cb2f82d0a3aee49e7fce87)            | Default lifetime of the P2P-RPL DODAG, encoded.
`define `[`GNRC_RPL_P2P_COMPR`](#group__net__gnrc__rpl__p2p_1gab6c24c92705e770b23d82875bae31b56)            | Number of elided prefix octets from the target field and address vector.
`define `[`GNRC_RPL_P2P_MAX_RANK`](#group__net__gnrc__rpl__p2p_1gab036cb64a5f409fa7e16dbba7e722c05)            | Maximum rank in the DODAG during the route discovery.
`define `[`GNRC_RPL_P2P_OPT_RDO`](#group__net__gnrc__rpl__p2p_1ga132e04c6d1b611644ba9d9586c595437)            | P2P-RPL RDO DIO option type.
`define `[`GNRC_RPL_P2P_ICMPV6_CODE_DRO`](#group__net__gnrc__rpl__p2p_1ga2ccee32eeeef7e81582d07a33f2ef690)            | DRO ICMPv6 code.
`define `[`GNRC_RPL_P2P_ICMPV6_CODE_DRO_ACK`](#group__net__gnrc__rpl__p2p_1gaa984b2ec2f62b0253f706b698045c322)            | DRO-ACK ICMPv6 code.
`define `[`GNRC_RPL_P2P_DRO_DELAY`](#group__net__gnrc__rpl__p2p_1gae615a4bc1ba54f6b3f0a0d056d69fcbd)            | Time in seconds to wait before sending a DRO.
`define `[`GNRC_RPL_P2P_MSG_TYPE_DRO_HANDLE`](#group__net__gnrc__rpl__p2p_1ga5c631c84b14c85028610ef7cce211f00)            | Message type for handling DRO sending.
`public `[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * `[`gnrc_rpl_p2p_root_init`](#group__net__gnrc__rpl__p2p_1gaa76a098a9b11a401a6e71c7a248588b2)`(uint8_t instance_id,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * target,bool gen_inst_id)`            | Initialization of a P2P-RPL Instance as root node.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_rpl_p2p_rdo_build`](#group__net__gnrc__rpl__p2p_1ga8fb700f998915ee7d0143743bd5103d3)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_rpl_p2p_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__ext__t)` * p2p_ext)`            | Build an RDO.
`public void `[`gnrc_rpl_p2p_rdo_parse`](#group__net__gnrc__rpl__p2p_1gab1afdf5e321bfbed16464c1c936600fb)`(`[`gnrc_rpl_p2p_opt_rdo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__opt__rdo__t)` * rdo,`[`gnrc_rpl_p2p_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__ext__t)` * p2p_ext)`            | Parse an RDO.
`public void `[`gnrc_rpl_p2p_send_DRO`](#group__net__gnrc__rpl__p2p_1gabc40a75d37ebad9200efeb497f8fae9c)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_rpl_p2p_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__ext__t)` * p2p_ext)`            | Send a DRO control message.
`public void `[`gnrc_rpl_p2p_recv_DRO`](#group__net__gnrc__rpl__p2p_1ga3ee15eae4cbfe22e0c44247913b10a21)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src)`            | Receive and parse a DRO control message.
`public void `[`gnrc_rpl_p2p_update`](#group__net__gnrc__rpl__p2p_1gacb9f96c2492e31569ed07a03f8f9431d)`(void)`            | Updates the lifetime of the P2P Dodag and the delay of the DRO.

## Members

#### `define `[`GNRC_RPL_P2P_MOP`](#group__net__gnrc__rpl__p2p_1gab7e311f049596af615f905a083c5a7ca) 

P2P-RPL Mode of Operation.

#### `define `[`GNRC_RPL_P2P_LIFETIME`](#group__net__gnrc__rpl__p2p_1gaa1915d8751cb2f82d0a3aee49e7fce87) 

Default lifetime of the P2P-RPL DODAG, encoded.

**See also**: [RFC 6997, section 7, P2P Route Discovery Option (P2P-RDO) ](https://tools.ietf.org/html/rfc6997#section-7)

#### `define `[`GNRC_RPL_P2P_COMPR`](#group__net__gnrc__rpl__p2p_1gab6c24c92705e770b23d82875bae31b56) 

Number of elided prefix octets from the target field and address vector.

**See also**: [RFC 6997, section 7, P2P Route Discovery Option (P2P-RDO) ](https://tools.ietf.org/html/rfc6997#section-7)

#### `define `[`GNRC_RPL_P2P_MAX_RANK`](#group__net__gnrc__rpl__p2p_1gab036cb64a5f409fa7e16dbba7e722c05) 

Maximum rank in the DODAG during the route discovery.

**See also**: [RFC 6997, section 7, P2P Route Discovery Option (P2P-RDO) ](https://tools.ietf.org/html/rfc6997#section-7)

#### `define `[`GNRC_RPL_P2P_OPT_RDO`](#group__net__gnrc__rpl__p2p_1ga132e04c6d1b611644ba9d9586c595437) 

P2P-RPL RDO DIO option type.

**See also**: [RFC 6997, section 7, P2P Route Discovery Option (P2P-RDO) ](https://tools.ietf.org/html/rfc6997#section-7)

#### `define `[`GNRC_RPL_P2P_ICMPV6_CODE_DRO`](#group__net__gnrc__rpl__p2p_1ga2ccee32eeeef7e81582d07a33f2ef690) 

DRO ICMPv6 code.

**See also**: [RFC 6997, section 8, The P2P Discovery Reply Object (P2P-DRO) ](https://tools.ietf.org/html/rfc6997#section-8)

#### `define `[`GNRC_RPL_P2P_ICMPV6_CODE_DRO_ACK`](#group__net__gnrc__rpl__p2p_1gaa984b2ec2f62b0253f706b698045c322) 

DRO-ACK ICMPv6 code.

**See also**: [RFC 6997, section 10, The P2P Discovery Reply Object Acknowledgement (P2P-DRO-ACK) ](https://tools.ietf.org/html/rfc6997#section-10)

#### `define `[`GNRC_RPL_P2P_DRO_DELAY`](#group__net__gnrc__rpl__p2p_1gae615a4bc1ba54f6b3f0a0d056d69fcbd) 

Time in seconds to wait before sending a DRO.

#### `define `[`GNRC_RPL_P2P_MSG_TYPE_DRO_HANDLE`](#group__net__gnrc__rpl__p2p_1ga5c631c84b14c85028610ef7cce211f00) 

Message type for handling DRO sending.

#### `public `[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * `[`gnrc_rpl_p2p_root_init`](#group__net__gnrc__rpl__p2p_1gaa76a098a9b11a401a6e71c7a248588b2)`(uint8_t instance_id,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * target,bool gen_inst_id)` 

Initialization of a P2P-RPL Instance as root node.

#### Parameters
* `instance_id` Id of the instance 

* `dodag_id` Id of the DODAG 

* `target` Target of the P2P-RPL routes discovery 

* `gen_inst_id` Flag indicating whether to generate a local instance id. If true, `instance_id` will be ignored

#### Returns
Pointer to the new Instance, on success. 

#### Returns
NULL, otherwise.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_rpl_p2p_rdo_build`](#group__net__gnrc__rpl__p2p_1ga8fb700f998915ee7d0143743bd5103d3)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_rpl_p2p_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__ext__t)` * p2p_ext)` 

Build an RDO.

#### Parameters
* `pkt` The RDO will be added to the `pkt`

* `p2p_ext` Pointer to the P2P-RPL DODAG extension

#### `public void `[`gnrc_rpl_p2p_rdo_parse`](#group__net__gnrc__rpl__p2p_1gab1afdf5e321bfbed16464c1c936600fb)`(`[`gnrc_rpl_p2p_opt_rdo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__opt__rdo__t)` * rdo,`[`gnrc_rpl_p2p_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__ext__t)` * p2p_ext)` 

Parse an RDO.

#### Parameters
* `rdo` The RDO to parse from. 

* `p2p_ext` Pointer to the P2P-RPL DODAG extension

#### `public void `[`gnrc_rpl_p2p_send_DRO`](#group__net__gnrc__rpl__p2p_1gabc40a75d37ebad9200efeb497f8fae9c)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_rpl_p2p_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__p2p__ext__t)` * p2p_ext)` 

Send a DRO control message.

#### Parameters
* `pkt` The ICMPv6 packet to send. Can be NULL. 

* `p2p_ext` Pointer to the P2P-RPL DODAG extension

#### `public void `[`gnrc_rpl_p2p_recv_DRO`](#group__net__gnrc__rpl__p2p_1ga3ee15eae4cbfe22e0c44247913b10a21)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src)` 

Receive and parse a DRO control message.

#### Parameters
* `pkt` The ICMPv6 packet to parse. 

* `src` The source address of the IPv6 packet.

#### `public void `[`gnrc_rpl_p2p_update`](#group__net__gnrc__rpl__p2p_1gacb9f96c2492e31569ed07a03f8f9431d)`(void)` 

Updates the lifetime of the P2P Dodag and the delay of the DRO.

