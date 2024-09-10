---
title: api-net_gnrc_mac_conf.md
description: api-net_gnrc_mac_conf.md
---
# group `net_gnrc_mac_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_MAC_RX_QUEUE_SIZE_EXP`](#group__net__gnrc__mac__conf_1ga98cd6f3a6efd01ff9c3d36ae63f7bfde)            | Default message queue size to use for the incoming packets (as exponent of 2^n).
`define `[`CONFIG_GNRC_MAC_DISPATCH_BUFFER_SIZE_EXP`](#group__net__gnrc__mac__conf_1gabc79ff9ad9ec8bc82ee7b75f01ccd2ad)            | Default buffer size to use for storing dispatching packets (as exponent of 2^n).
`define `[`CONFIG_GNRC_MAC_NEIGHBOR_COUNT`](#group__net__gnrc__mac__conf_1gafc13e67a8eef0c38efe1258c2cc1433f)            | Count of neighbor nodes in one-hop distance.
`define `[`CONFIG_GNRC_MAC_TX_QUEUE_SIZE_EXP`](#group__net__gnrc__mac__conf_1ga8dd2c7b791ebb546ff245c85657206ec)            | Default queue size for transmission packets coming from higher layers (as exponent of 2^n).
`define `[`CONFIG_GNRC_MAC_DISABLE_DUTYCYCLE_RECORD`](#group__net__gnrc__mac__conf_1ga38490b5cf62a9b50574cab9012d4759d)            | Disable MAC radio duty-cycle recording and displaying.
`define `[`GNRC_MAC_ENABLE_DUTYCYCLE_RECORD`](#group__net__gnrc__mac__conf_1gafebdd1a1361fd8dbeb16a1cdab252642)            | Enable/disable MAC radio duty-cycle recording and displaying.

## Members

#### `define `[`CONFIG_GNRC_MAC_RX_QUEUE_SIZE_EXP`](#group__net__gnrc__mac__conf_1ga98cd6f3a6efd01ff9c3d36ae63f7bfde) 

Default message queue size to use for the incoming packets (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the queue.

#### `define `[`CONFIG_GNRC_MAC_DISPATCH_BUFFER_SIZE_EXP`](#group__net__gnrc__mac__conf_1gabc79ff9ad9ec8bc82ee7b75f01ccd2ad) 

Default buffer size to use for storing dispatching packets (as exponent of 2^n).

As the buffer size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the buffer.

#### `define `[`CONFIG_GNRC_MAC_NEIGHBOR_COUNT`](#group__net__gnrc__mac__conf_1gafc13e67a8eef0c38efe1258c2cc1433f) 

Count of neighbor nodes in one-hop distance.

#### `define `[`CONFIG_GNRC_MAC_TX_QUEUE_SIZE_EXP`](#group__net__gnrc__mac__conf_1ga8dd2c7b791ebb546ff245c85657206ec) 

Default queue size for transmission packets coming from higher layers (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the buffer.

#### `define `[`CONFIG_GNRC_MAC_DISABLE_DUTYCYCLE_RECORD`](#group__net__gnrc__mac__conf_1ga38490b5cf62a9b50574cab9012d4759d) 

Disable MAC radio duty-cycle recording and displaying.

#### `define `[`GNRC_MAC_ENABLE_DUTYCYCLE_RECORD`](#group__net__gnrc__mac__conf_1gafebdd1a1361fd8dbeb16a1cdab252642) 

Enable/disable MAC radio duty-cycle recording and displaying.

Set "1" to enable, set "0" to disable. 
> Deprecated: Use inverse [CONFIG_GNRC_MAC_DISABLE_DUTYCYCLE_RECORD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__mac__conf_1ga38490b5cf62a9b50574cab9012d4759d) instead. Will be removed after 2021.01 release.

