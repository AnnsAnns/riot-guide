---
title: api-net_gnrc_tcp_conf.md
description: api-net_gnrc_tcp_conf.md
---
# group `net_gnrc_tcp_conf` 

Calculating RTOTo calculate retransmission timeout (RTO), Round Trip Time (RTT) needs to be taken into account. SRTT (smoothed round-trip time) and RTTVAR (round-trip time variation) are hence calculated as follows: RTTVAR <- (1 - beta) * RTTVAR + beta * |SRTT - R'|
SRTT <- (1 - alpha) * SRTT + alpha * R'
 where alpha ( 1 / [CONFIG_GNRC_TCP_RTO_A_DIV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp__conf_1ga0ab1b2085285086c66b7a8150d8b45ee) ) and beta ( 1 / [CONFIG_GNRC_TCP_RTO_B_DIV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp__conf_1ga8867b567116db2ee3ad3141a5de54939)) are constants, and R' is the instantaneous RTT value.

RTO is then calculated as : RTO <- SRTT + max (G, K*RTTVAR)
 where K is a constant, and G is clock granularity in seconds ( [CONFIG_GNRC_TCP_RTO_GRANULARITY_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp__conf_1ga7a496d05c981d36e5fa242393286278f)). For more information refer to [https://tools.ietf.org/html/rfc6298](https://tools.ietf.org/html/rfc6298)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

