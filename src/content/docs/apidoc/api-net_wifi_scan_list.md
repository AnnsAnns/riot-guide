---
title: api-net_wifi_scan_list.md
description: api-net_wifi_scan_list.md
---
# group `net_wifi_scan_list` 

Wrapper around l2scan list for WiFi scan results.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`wifi_scan_list_empty`](#group__net__wifi__scan__list_1ga68b3ce80c36b9f1166d285d0f4cb6c5d)`(`[`wifi_scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8)` * list,`[`wifi_scan_list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga08e9913e583b698951fa73d8b6a3571e)` * nodes,unsigned nodes_numof)`            | Empty the WiFi scan list to start a new scan.
`public inline static void `[`wifi_scan_list_insert`](#group__net__wifi__scan__list_1ga8720d396ddc1f8e767604f0d2d71dfd0)`(`[`wifi_scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8)` * list,`[`wifi_scan_list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga08e9913e583b698951fa73d8b6a3571e)` * nodes,unsigned nodes_numof,const `[`wifi_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735)` * result)`            | Insert a new WiFi scan result into the list.
`public inline static unsigned `[`wifi_scan_list_to_array`](#group__net__wifi__scan__list_1gad6c3a34623aa8b64beea03c4c4bc1220)`(const `[`wifi_scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8)` * list,`[`wifi_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735)` * array,unsigned numof)`            | Copy the content of a WiFi scan list to an array to get rid of the list overhead.

## Members

#### `public inline static void `[`wifi_scan_list_empty`](#group__net__wifi__scan__list_1ga68b3ce80c36b9f1166d285d0f4cb6c5d)`(`[`wifi_scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8)` * list,`[`wifi_scan_list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga08e9913e583b698951fa73d8b6a3571e)` * nodes,unsigned nodes_numof)` 

Empty the WiFi scan list to start a new scan.

#### Parameters
* `list` Pointer to WiFi scan result list 

* `nodes` Pointer to WiFi scan result nodes array 

* `nodes_numof` Number of nodes in the array

#### `public inline static void `[`wifi_scan_list_insert`](#group__net__wifi__scan__list_1ga8720d396ddc1f8e767604f0d2d71dfd0)`(`[`wifi_scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8)` * list,`[`wifi_scan_list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga08e9913e583b698951fa73d8b6a3571e)` * nodes,unsigned nodes_numof,const `[`wifi_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735)` * result)` 

Insert a new WiFi scan result into the list.

#### Parameters
* `list` Pointer to WiFi scan result list 

* `nodes` Pointer to WiFi scan result nodes array 

* `nodes_numof` Number of nodes in the array 

* `result` New WiFi scan result to insert

#### `public inline static unsigned `[`wifi_scan_list_to_array`](#group__net__wifi__scan__list_1gad6c3a34623aa8b64beea03c4c4bc1220)`(const `[`wifi_scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga3d7c9dc5242576b451814c110681aff8)` * list,`[`wifi_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__wifi_1ga0942ac8e7e1f5493170ef797cb410735)` * array,unsigned numof)` 

Copy the content of a WiFi scan list to an array to get rid of the list overhead.

#### Parameters
* `list` Pointer to list 

* `array` Buffer of nodes to store the result 

* `numof` Maximum number of nodes that can be copied

#### Returns
Number of copied nodes

