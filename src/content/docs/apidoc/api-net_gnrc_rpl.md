---
title: api-net_gnrc_rpl.md
description: api-net_gnrc_rpl.md
---
# group `net_gnrc_rpl` 

RPL implementation for GNRC.

ConfigurationUSEMODULE

* RPL (Storing Mode) 
```cpp
USEMODULE += gnrc_rpl
```

* RPL auto-initialization on interface 
```cpp
USEMODULE += auto_init_gnrc_rpl
```

Auto-InitializationIf the application defines only one interface ([gnrc_netif_highlander()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gaf7f4305f1d02f1ea9c14e0d4b3e0b2d4) returns true), then RPL will be initialized on this interface.

If the application defines several interfaces ([gnrc_netif_highlander()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gaf7f4305f1d02f1ea9c14e0d4b3e0b2d4) returns false), then RPL will be initialized on the interface `CONFIG_GNRC_RPL_DEFAULT_NETIF`. Your application is responsible for setting `CONFIG_GNRC_RPL_DEFAULT_NETIF` to a valid interface PID, e.g. via `CFLAGS` or menuconfig.

Initializing RPL on multiple interfaces automatically is currently not supported. Call `[gnrc_rpl_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl_1gae8ab2a9620466139008b48106a5bc657)` manually from your application for the desired interfaces in this case.

CFLAGS

* Exclude Prefix Information Options from DIOs 
```cpp
CFLAGS += -DCONFIG_GNRC_RPL_WITHOUT_PIO
```

* Modify trickle parameters 
```cpp
CFLAGS += -DCONFIG_GNRC_RPL_DEFAULT_DIO_INTERVAL_DOUBLINGS=20
CFLAGS += -DCONFIG_GNRC_RPL_DEFAULT_DIO_INTERVAL_MIN=3
CFLAGS += -DCONFIG_GNRC_RPL_DEFAULT_DIO_REDUNDANCY_CONSTANT=10
```

* Make reception of DODAG_CONF optional when joining a DODAG. This will use the default trickle parameters until a DODAG_CONF is received from the parent. The DODAG_CONF is requested once from the parent while joining the DODAG. The standard behaviour is to request a DODAG_CONF and join only a DODAG once a DODAG_CONF is received. 
```cpp
CFLAGS += -DCONFIG_GNRC_RPL_DODAG_CONF_OPTIONAL_ON_JOIN
```

* Set interface for auto-initialization if more than one interface exists ([gnrc_netif_highlander()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gaf7f4305f1d02f1ea9c14e0d4b3e0b2d4) returns false) 
```cpp
CFLAGS += -DCONFIG_GNRC_RPL_DEFAULT_NETIF=6
```

* By default, all incoming control messages get checked for validation. This validation can be disabled in case the involved RPL implementations are known to produce valid messages. 
```cpp
CFLAGS += -DCONFIG_GNRC_RPL_WITHOUT_VALIDATION
```

* This RPL implementation currently only supports storing mode. That means, in order to have downwards routes to all nodes the storage space within [`gnrc_ipv6's` Neighbor Information Base](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib) must be big enough to store information for each node.

For a random topology of n nodes, to ensure you can reach every node from the root, set `CONFIG_GNRC_IPV6_NIB_NUMOF` == `CONFIG_GNRC_IPV6_NIB_OFFL_NUMOF` == n.

e.g. for n = 50 set 
```cpp
CFLAGS += -DCONFIG_GNRC_IPV6_NIB_NUMOF=50
CFLAGS += -DCONFIG_GNRC_IPV6_NIB_OFFL_NUMOF=50
```

* If you want to allow for alternative parents, increase the number of default routers in the NIB.

e.g. for one alternative parent, set 
```cpp
CFLAGS += -DCONFIG_GNRC_IPV6_NIB_DEFAULT_ROUTER_NUMOF=2
```

TODOThe GNRC RPL implementation only implements storing mode with OF0 ([RFC6552](https://tools.ietf.org/html/rfc6552)). The RPL routing header is parsed by the nodes when the [`gnrc_rpl_srh`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl__srh)module is used, but anything else for non-storing mode is missing. For interoperability with other RPL implementations, open task include:

* IPv6 Hop-by-hop RPL option (see [#7231](https://github.com/RIOT-OS/RIOT/pull/7231#issuecomment-651237343))

* Metric based routing ([RFC6551](https://tools.ietf.org/html/rfc6551) and [RFC6719](https://tools.ietf.org/html/rfc6719)) (see [14448](https://github.com/RIOT-OS/RIOT/pull/14448) and [#14623](https://github.com/RIOT-OS/RIOT/pull/14623))

* Non-Storing mode

* DAG-Metric Container ([RFC6550#6.7.4](https://tools.ietf.org/html/rfc6550#section-6.7.4) and [RFC6551](https://tools.ietf.org/html/rfc6551))

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_RPL_STACK_SIZE`](#group__net__gnrc__rpl_1gac589226f6b32ba9b6abd98e2e954d424)            | Default stack size to use for the RPL thread.
`define `[`GNRC_RPL_PRIO`](#group__net__gnrc__rpl_1ga2f813145c63778748ddabdadc77e15a2)            | Default priority for the RPL thread.
`define `[`CONFIG_GNRC_RPL_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__rpl_1ga30886df75f9cae367d757737aa80b634)            | Default message queue size to use for the RPL thread (as exponent of 2^n).
`define `[`GNRC_RPL_MSG_QUEUE_SIZE`](#group__net__gnrc__rpl_1gae42f5c42c85e1d38d25f8e65c5e79de0)            | Message queue size to use for the RPL thread.
`define `[`GNRC_RPL_ALL_NODES_ADDR`](#group__net__gnrc__rpl_1gaab131f23d0ff798e550b74a3e06e7025)            | Static initializer for the all-RPL-nodes multicast IPv6 address (ff02::1a)
`define `[`GNRC_RPL_MSG_TYPE_LIFETIME_UPDATE`](#group__net__gnrc__rpl_1ga55fe88138b928d282d4da6c768ad688c)            | Message type for lifetime updates.
`define `[`GNRC_RPL_MSG_TYPE_TRICKLE_MSG`](#group__net__gnrc__rpl_1gacf9f5c0c1390aedcefc23d5b7c4a7cbe)            | Message type for trickle.
`define `[`GNRC_RPL_MSG_TYPE_DAO_HANDLE`](#group__net__gnrc__rpl_1gac457646f5893f4ff8f3ef1dda64180e2)            | Message type for handling DAO sending.
`define `[`GNRC_RPL_INFINITE_RANK`](#group__net__gnrc__rpl_1gaa3990a6b940768a1c26119d51697c5fb)            | Infinite rank.
`define `[`CONFIG_GNRC_RPL_DEFAULT_MIN_HOP_RANK_INCREASE`](#group__net__gnrc__rpl_1ga0263f173175b3a0d0bc7f2405acbc7bf)            | Default minimum hop rank increase.
`define `[`CONFIG_GNRC_RPL_DEFAULT_MAX_RANK_INCREASE`](#group__net__gnrc__rpl_1gab48376dcfdc94fab50032153aebfbfc7)            | Maximum rank increase.
`define `[`GNRC_RPL_IMPLEMENTED_OFS_NUMOF`](#group__net__gnrc__rpl_1gab23c7e5badae5fb2c245b1e5061fc601)            | Number of implemented Objective Functions.
`define `[`GNRC_RPL_DEFAULT_OCP`](#group__net__gnrc__rpl_1ga55f264f70357cdd22f653a18cd4054cd)            | Default Objective Code Point (OF0)
`define `[`CONFIG_GNRC_RPL_DEFAULT_INSTANCE`](#group__net__gnrc__rpl_1ga18bfbc96d7a5a92ab4292f0e73e4dc0f)            | Default Instance ID.
`define `[`GNRC_RPL_DEFAULT_PREFIX_LEN`](#group__net__gnrc__rpl_1ga8001203e341e5aae77d94e6c511aec5d)            | Default prefix length for the DODAG id.
`define `[`GNRC_RPL_DEFAULT_PREFIX_LIFETIME`](#group__net__gnrc__rpl_1gadc9cfc0adda754a94cc1b9e695d9b52e)            | Default prefix valid and preferred time for the DODAG id.
`define `[`GNRC_RPL_GROUNDED`](#group__net__gnrc__rpl_1ga33436242b4bc3611eb97cd456ec2b6aa)            | A DODAG can be grounded or floating.
`define `[`CONFIG_GNRC_RPL_CLEANUP_TIME`](#group__net__gnrc__rpl_1gad81939581c70ea4eca480d3440399ada)            | Cleanup interval in milliseconds.
`define `[`GNRC_RPL_ROOT_RANK`](#group__net__gnrc__rpl_1ga78497459be101d573fc8c4874ac07b15)            | Rank of the root node.
`define `[`GNRC_RPL_ICMPV6_CODE_DIS`](#group__net__gnrc__rpl_1gac38a20d931f54ecfbc8e333aaa793870)            | DIS ICMPv6 code.
`define `[`GNRC_RPL_ICMPV6_CODE_DIO`](#group__net__gnrc__rpl_1gacdcf507b1b1b50ff914c7d7cbe1afa23)            | DIO ICMPv6 code.
`define `[`GNRC_RPL_ICMPV6_CODE_DAO`](#group__net__gnrc__rpl_1ga9145cd866ce8ccaf090338b049aeda9f)            | DAO ICMPv6 code.
`define `[`GNRC_RPL_ICMPV6_CODE_DAO_ACK`](#group__net__gnrc__rpl_1gafbd3cce755d91d785032c088991d4c85)            | DAO ACK ICMPv6 code.
`define `[`GNRC_RPL_LIFETIME_UPDATE_STEP`](#group__net__gnrc__rpl_1ga3410f8f3091610a51a3dec46015383f2)            | Update interval of the lifetime update function.
`define `[`DAGRANK`](#group__net__gnrc__rpl_1ga1734a4a2444660a2bed5cce4ae301454)            | Rank part of the DODAG.
`define `[`CONFIG_GNRC_RPL_PARENT_TIMEOUT_DIS_RETRIES`](#group__net__gnrc__rpl_1ga3b1dbb50d9cf1b7a149ec76d546b81e4)            | Number of DIS retries before parent times out.
`define `[`CONFIG_GNRC_RPL_DEFAULT_NETIF`](#group__net__gnrc__rpl_1gafa7ea250e344e18e4c15bad6f5971df3)            | Default network interface for GNRC RPL.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_rpl_init`](#group__net__gnrc__rpl_1gae8ab2a9620466139008b48106a5bc657)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` if_pid)`            | Initialization of the RPL thread.
`public `[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * `[`gnrc_rpl_root_init`](#group__net__gnrc__rpl_1ga686477e33641c53a2b2e1c10cf02ad9f)`(uint8_t instance_id,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id,bool gen_inst_id,bool local_inst_id)`            | Initialization of a node as root.
`public void `[`gnrc_rpl_send_DIO`](#group__net__gnrc__rpl_1ga20e01086e56e643c8a486c72dc073bb6)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination)`            | Send a DIO of the `instance` to the `destination`.
`public void `[`gnrc_rpl_send_DIS`](#group__net__gnrc__rpl_1ga092a485687d9981defcc1f59d33f2f91)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination,`[`gnrc_rpl_internal_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__internal__opt__t)` ** options,size_t num_opts)`            | Send a DIS of the `instance` to the `destination`.
`public void `[`gnrc_rpl_send_DAO`](#group__net__gnrc__rpl_1ga4d927bfae1b119ee51bdfe3fbcedc242)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination,uint8_t lifetime)`            | Send a DAO of the `dodag` to the `destination`.
`public void `[`gnrc_rpl_send_DAO_ACK`](#group__net__gnrc__rpl_1ga292d3829b2489a2ff6fc0246b3e39438)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination,uint8_t seq)`            | Send a DAO-ACK of the `instance` to the `destination`.
`public void `[`gnrc_rpl_recv_DIS`](#group__net__gnrc__rpl_1gace9db4af36afdc9b537bd5ec6be8d331)`(`[`gnrc_rpl_dis_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dis__t)` * dis,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)`            | Parse a DIS.
`public void `[`gnrc_rpl_recv_DIO`](#group__net__gnrc__rpl_1ga5e8eb704be961c5f4ad6229c198619d3)`(`[`gnrc_rpl_dio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dio__t)` * dio,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)`            | Parse a DIO.
`public void `[`gnrc_rpl_recv_DAO`](#group__net__gnrc__rpl_1gacd174d2e4c4427d9fc8d5e92c45e0d4f)`(`[`gnrc_rpl_dao_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dao__t)` * dao,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)`            | Parse a DAO.
`public void `[`gnrc_rpl_recv_DAO_ACK`](#group__net__gnrc__rpl_1ga913b03caf1f99ef596891f695e65e7c7)`(`[`gnrc_rpl_dao_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dao__ack__t)` * dao_ack,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)`            | Parse a DAO-ACK.
`public void `[`gnrc_rpl_delay_dao`](#group__net__gnrc__rpl_1gaffbff2e5ea66ab4a467637a6a26658c0)`(`[`gnrc_rpl_dodag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1aa420d1ff2b7cdc7269a1b6b2063282d1)` * dodag)`            | Delay the DAO sending interval.
`public void `[`gnrc_rpl_long_delay_dao`](#group__net__gnrc__rpl_1gaf18fba60788c26da276472c958c16e0a)`(`[`gnrc_rpl_dodag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1aa420d1ff2b7cdc7269a1b6b2063282d1)` * dodag)`            | Long delay the DAO sending interval.
`public `[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * `[`gnrc_rpl_root_instance_init`](#group__net__gnrc__rpl_1ga9f9515c05c707821027d53d2a4250b0a)`(uint8_t instance_id,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id,uint8_t mop)`            | Create a new RPL instance and RPL DODAG.
`public void `[`gnrc_rpl_send`](#group__net__gnrc__rpl_1ga3909531b56ab427812e660c394269859)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id)`            | Send a control message.
`public uint8_t `[`gnrc_rpl_gen_instance_id`](#group__net__gnrc__rpl_1ga9330c1e9f5605bda0166370f4d13c42a)`(bool local)`            | Generate a local or global instance id.
`public inline static void `[`gnrc_rpl_config_pio`](#group__net__gnrc__rpl_1gabaa0fe93b6166d01473451680770a8cf)`(`[`gnrc_rpl_dodag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1aa420d1ff2b7cdc7269a1b6b2063282d1)` * dodag,bool status)`            | (De-)Activate the transmission of Prefix Information Options within DIOs for a particular DODAG.
`public void `[`gnrc_rpl_configure_root`](#group__net__gnrc__rpl_1gaecd5fc7f8788293f44e3ed341319b4cb)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id)`            | Convenience function to start a RPL root using the default configuration.

## Members

#### `define `[`GNRC_RPL_STACK_SIZE`](#group__net__gnrc__rpl_1gac589226f6b32ba9b6abd98e2e954d424) 

Default stack size to use for the RPL thread.

#### `define `[`GNRC_RPL_PRIO`](#group__net__gnrc__rpl_1ga2f813145c63778748ddabdadc77e15a2) 

Default priority for the RPL thread.

#### `define `[`CONFIG_GNRC_RPL_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__rpl_1ga30886df75f9cae367d757737aa80b634) 

Default message queue size to use for the RPL thread (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the queue.

#### `define `[`GNRC_RPL_MSG_QUEUE_SIZE`](#group__net__gnrc__rpl_1gae42f5c42c85e1d38d25f8e65c5e79de0) 

Message queue size to use for the RPL thread.

#### `define `[`GNRC_RPL_ALL_NODES_ADDR`](#group__net__gnrc__rpl_1gaab131f23d0ff798e550b74a3e06e7025) 

Static initializer for the all-RPL-nodes multicast IPv6 address (ff02::1a)

**See also**: [RFC 6550, section 6 ](https://tools.ietf.org/html/rfc6550#section-6)

#### `define `[`GNRC_RPL_MSG_TYPE_LIFETIME_UPDATE`](#group__net__gnrc__rpl_1ga55fe88138b928d282d4da6c768ad688c) 

Message type for lifetime updates.

#### `define `[`GNRC_RPL_MSG_TYPE_TRICKLE_MSG`](#group__net__gnrc__rpl_1gacf9f5c0c1390aedcefc23d5b7c4a7cbe) 

Message type for trickle.

#### `define `[`GNRC_RPL_MSG_TYPE_DAO_HANDLE`](#group__net__gnrc__rpl_1gac457646f5893f4ff8f3ef1dda64180e2) 

Message type for handling DAO sending.

#### `define `[`GNRC_RPL_INFINITE_RANK`](#group__net__gnrc__rpl_1gaa3990a6b940768a1c26119d51697c5fb) 

Infinite rank.

**See also**: [RFC 6550, section 17 ](https://tools.ietf.org/html/rfc6550#section-17)

#### `define `[`CONFIG_GNRC_RPL_DEFAULT_MIN_HOP_RANK_INCREASE`](#group__net__gnrc__rpl_1ga0263f173175b3a0d0bc7f2405acbc7bf) 

Default minimum hop rank increase.

**See also**: [RFC 6550, section 17 ](https://tools.ietf.org/html/rfc6550#section-17)

#### `define `[`CONFIG_GNRC_RPL_DEFAULT_MAX_RANK_INCREASE`](#group__net__gnrc__rpl_1gab48376dcfdc94fab50032153aebfbfc7) 

Maximum rank increase.

#### `define `[`GNRC_RPL_IMPLEMENTED_OFS_NUMOF`](#group__net__gnrc__rpl_1gab23c7e5badae5fb2c245b1e5061fc601) 

Number of implemented Objective Functions.

#### `define `[`GNRC_RPL_DEFAULT_OCP`](#group__net__gnrc__rpl_1ga55f264f70357cdd22f653a18cd4054cd) 

Default Objective Code Point (OF0)

#### `define `[`CONFIG_GNRC_RPL_DEFAULT_INSTANCE`](#group__net__gnrc__rpl_1ga18bfbc96d7a5a92ab4292f0e73e4dc0f) 

Default Instance ID.

#### `define `[`GNRC_RPL_DEFAULT_PREFIX_LEN`](#group__net__gnrc__rpl_1ga8001203e341e5aae77d94e6c511aec5d) 

Default prefix length for the DODAG id.

#### `define `[`GNRC_RPL_DEFAULT_PREFIX_LIFETIME`](#group__net__gnrc__rpl_1gadc9cfc0adda754a94cc1b9e695d9b52e) 

Default prefix valid and preferred time for the DODAG id.

Currently not used, but needed for RIOs 

**See also**: [Route Information ](https://tools.ietf.org/html/rfc6550#section-6.7.5)

#### `define `[`GNRC_RPL_GROUNDED`](#group__net__gnrc__rpl_1ga33436242b4bc3611eb97cd456ec2b6aa) 

A DODAG can be grounded or floating.

**See also**: [Grounded and Floating DODAGs ](https://tools.ietf.org/html/rfc6550#section-3.2.4)

#### `define `[`CONFIG_GNRC_RPL_CLEANUP_TIME`](#group__net__gnrc__rpl_1gad81939581c70ea4eca480d3440399ada) 

Cleanup interval in milliseconds.

#### `define `[`GNRC_RPL_ROOT_RANK`](#group__net__gnrc__rpl_1ga78497459be101d573fc8c4874ac07b15) 

Rank of the root node.

#### `define `[`GNRC_RPL_ICMPV6_CODE_DIS`](#group__net__gnrc__rpl_1gac38a20d931f54ecfbc8e333aaa793870) 

DIS ICMPv6 code.

**See also**: [RFC 6550, section 6 ](https://tools.ietf.org/html/rfc6550#section-6)

#### `define `[`GNRC_RPL_ICMPV6_CODE_DIO`](#group__net__gnrc__rpl_1gacdcf507b1b1b50ff914c7d7cbe1afa23) 

DIO ICMPv6 code.

**See also**: [RFC 6550, section 6 ](https://tools.ietf.org/html/rfc6550#section-6)

#### `define `[`GNRC_RPL_ICMPV6_CODE_DAO`](#group__net__gnrc__rpl_1ga9145cd866ce8ccaf090338b049aeda9f) 

DAO ICMPv6 code.

**See also**: [RFC 6550, section 6 ](https://tools.ietf.org/html/rfc6550#section-6)

#### `define `[`GNRC_RPL_ICMPV6_CODE_DAO_ACK`](#group__net__gnrc__rpl_1gafbd3cce755d91d785032c088991d4c85) 

DAO ACK ICMPv6 code.

**See also**: [RFC 6550, section 6 ](https://tools.ietf.org/html/rfc6550#section-6)

#### `define `[`GNRC_RPL_LIFETIME_UPDATE_STEP`](#group__net__gnrc__rpl_1ga3410f8f3091610a51a3dec46015383f2) 

Update interval of the lifetime update function.

#### `define `[`DAGRANK`](#group__net__gnrc__rpl_1ga1734a4a2444660a2bed5cce4ae301454) 

Rank part of the DODAG.

**See also**: [RFC 6550, section 3.5.1, Rank Comparison (DAGRank()) ](https://tools.ietf.org/html/rfc6550#section-3.5.1)

#### `define `[`CONFIG_GNRC_RPL_PARENT_TIMEOUT_DIS_RETRIES`](#group__net__gnrc__rpl_1ga3b1dbb50d9cf1b7a149ec76d546b81e4) 

Number of DIS retries before parent times out.

#### `define `[`CONFIG_GNRC_RPL_DEFAULT_NETIF`](#group__net__gnrc__rpl_1gafa7ea250e344e18e4c15bad6f5971df3) 

Default network interface for GNRC RPL.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_rpl_init`](#group__net__gnrc__rpl_1gae8ab2a9620466139008b48106a5bc657)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` if_pid)` 

Initialization of the RPL thread.

#### Parameters
* `if_pid` PID of the interface

#### Returns
The PID of the RPL thread, on success. 

#### Returns
a negative errno on error.

#### `public `[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * `[`gnrc_rpl_root_init`](#group__net__gnrc__rpl_1ga686477e33641c53a2b2e1c10cf02ad9f)`(uint8_t instance_id,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id,bool gen_inst_id,bool local_inst_id)` 

Initialization of a node as root.

#### Parameters
* `instance_id` Id of the instance 

* `dodag_id` Id of the DODAG 

* `gen_inst_id` Flag indicating whether to generate an instance id. If true, `instance_id` will be ignored 

* `local_inst_id` Flag indicating whether a local or global instance id should be generatad

#### Returns
Pointer to the new RPL Instance, on success. 

#### Returns
NULL, otherwise.

#### `public void `[`gnrc_rpl_send_DIO`](#group__net__gnrc__rpl_1ga20e01086e56e643c8a486c72dc073bb6)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination)` 

Send a DIO of the `instance` to the `destination`.

#### Parameters
* `instance` Pointer to the RPL instance. 

* `destination` IPv6 address of the destination.

#### `public void `[`gnrc_rpl_send_DIS`](#group__net__gnrc__rpl_1ga092a485687d9981defcc1f59d33f2f91)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination,`[`gnrc_rpl_internal_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__internal__opt__t)` ** options,size_t num_opts)` 

Send a DIS of the `instance` to the `destination`.

#### Parameters
* `instance` Pointer to the RPL instance, optional. 

* `destination` IPv6 address of the destination. 

* `options` Pointer to the first option to be attached. 

* `num_opts` The number of options to attach.

#### `public void `[`gnrc_rpl_send_DAO`](#group__net__gnrc__rpl_1ga4d927bfae1b119ee51bdfe3fbcedc242)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination,uint8_t lifetime)` 

Send a DAO of the `dodag` to the `destination`.

#### Parameters
* `instance` Pointer to the instance. 

* `destination` IPv6 address of the destination. 

* `lifetime` Lifetime of the route to announce.

#### `public void `[`gnrc_rpl_send_DAO_ACK`](#group__net__gnrc__rpl_1ga292d3829b2489a2ff6fc0246b3e39438)`(`[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * instance,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * destination,uint8_t seq)` 

Send a DAO-ACK of the `instance` to the `destination`.

#### Parameters
* `instance` Pointer to the RPL instance. 

* `destination` IPv6 address of the destination. 

* `seq` Sequence number to be acknowledged.

#### `public void `[`gnrc_rpl_recv_DIS`](#group__net__gnrc__rpl_1gace9db4af36afdc9b537bd5ec6be8d331)`(`[`gnrc_rpl_dis_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dis__t)` * dis,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)` 

Parse a DIS.

#### Parameters
* `dis` Pointer to the DIS message. 

* `iface` Interface PID of the incoming DIS. 

* `src` Pointer to the source address of the IPv6 packet. 

* `dst` Pointer to the destination address of the IPv6 packet. 

* `len` Length of the IPv6 packet.

#### `public void `[`gnrc_rpl_recv_DIO`](#group__net__gnrc__rpl_1ga5e8eb704be961c5f4ad6229c198619d3)`(`[`gnrc_rpl_dio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dio__t)` * dio,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)` 

Parse a DIO.

#### Parameters
* `dio` Pointer to the DIO message. 

* `iface` Interface PID of the incoming DIO. 

* `src` Pointer to the source address of the IPv6 packet. 

* `dst` Pointer to the destination address of the IPv6 packet. 

* `len` Length of the IPv6 packet.

#### `public void `[`gnrc_rpl_recv_DAO`](#group__net__gnrc__rpl_1gacd174d2e4c4427d9fc8d5e92c45e0d4f)`(`[`gnrc_rpl_dao_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dao__t)` * dao,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)` 

Parse a DAO.

#### Parameters
* `dao` Pointer to the DAO message. 

* `iface` Interface PID of the incoming DIO. 

* `src` Pointer to the source address of the IPv6 packet. 

* `dst` Pointer to the destination address of the IPv6 packet. 

* `len` Length of the IPv6 packet.

#### `public void `[`gnrc_rpl_recv_DAO_ACK`](#group__net__gnrc__rpl_1ga913b03caf1f99ef596891f695e65e7c7)`(`[`gnrc_rpl_dao_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__rpl__dao__ack__t)` * dao_ack,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,uint16_t len)` 

Parse a DAO-ACK.

#### Parameters
* `dao_ack` Pointer to the DAO-ACK message. 

* `iface` Interface PID of the incoming DIO. 

* `src` Pointer to the source address of the IPv6 packet. 

* `dst` Pointer to the destination address of the IPv6 packet. 

* `len` Length of the IPv6 packet.

#### `public void `[`gnrc_rpl_delay_dao`](#group__net__gnrc__rpl_1gaffbff2e5ea66ab4a467637a6a26658c0)`(`[`gnrc_rpl_dodag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1aa420d1ff2b7cdc7269a1b6b2063282d1)` * dodag)` 

Delay the DAO sending interval.

#### Parameters
* `dodag` The DODAG of the DAO

#### `public void `[`gnrc_rpl_long_delay_dao`](#group__net__gnrc__rpl_1gaf18fba60788c26da276472c958c16e0a)`(`[`gnrc_rpl_dodag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1aa420d1ff2b7cdc7269a1b6b2063282d1)` * dodag)` 

Long delay the DAO sending interval.

#### Parameters
* `dodag` The DODAG of the DAO

#### `public `[`gnrc_rpl_instance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1a2c0bd2531e36daf4b08b825dcc7e16ae)` * `[`gnrc_rpl_root_instance_init`](#group__net__gnrc__rpl_1ga9f9515c05c707821027d53d2a4250b0a)`(uint8_t instance_id,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id,uint8_t mop)` 

Create a new RPL instance and RPL DODAG.

#### Parameters
* `instance_id` Id of the instance 

* `dodag_id` Id of the DODAG 

* `mop` Mode of Operation

#### Returns
Pointer to the new RPL instance, on success. 

#### Returns
NULL, otherwise.

#### `public void `[`gnrc_rpl_send`](#group__net__gnrc__rpl_1ga3909531b56ab427812e660c394269859)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id)` 

Send a control message.

#### Parameters
* `pkt` gnrc_pktnsip_t to send 

* `iface` Interface PID to send this pkt to 

* `src` Source address of the packet 

* `dst` Destination address of the packet 

* `dodag_id` Id of the DODAG

#### `public uint8_t `[`gnrc_rpl_gen_instance_id`](#group__net__gnrc__rpl_1ga9330c1e9f5605bda0166370f4d13c42a)`(bool local)` 

Generate a local or global instance id.

#### Parameters
* `local` flag to indicate whether a local or global instance id is requested

#### Returns
Local instance id, if `local` is true 

#### Returns
Global instance id, otherwise.

#### `public inline static void `[`gnrc_rpl_config_pio`](#group__net__gnrc__rpl_1gabaa0fe93b6166d01473451680770a8cf)`(`[`gnrc_rpl_dodag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structs_8h_1aa420d1ff2b7cdc7269a1b6b2063282d1)` * dodag,bool status)` 

(De-)Activate the transmission of Prefix Information Options within DIOs for a particular DODAG.

This function has no effect if CONFIG_GNRC_RPL_WITHOUT_PIO is set.

#### Parameters
* `dodag` Pointer to the DODAG 

* `status` true for activating PIOs and false for deactivating them

#### `public void `[`gnrc_rpl_configure_root`](#group__net__gnrc__rpl_1gaecd5fc7f8788293f44e3ed341319b4cb)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dodag_id)` 

Convenience function to start a RPL root using the default configuration.

#### Parameters
* `netif` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface to use as RPL root 

* `dodag_id` Id of the DODAG

