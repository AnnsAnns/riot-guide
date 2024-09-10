---
title: api-net_l2scanlist.md
description: api-net_l2scanlist.md
---
# group `net_l2scanlist` 

Internal list data structure of scanned access points [NETOPT_SCAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a52e51c81e5979a17a6e064478d272f72).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`l2scan_list_empty`](#group__net__l2scanlist_1ga9e7627e0ccf9a9c194c2d1cd48bf8f0e)`(`[`l2scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2scanlist_1ga8d0c317a99498244d029b3ca4227bfc2)` * list,`[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` * nodes,unsigned nodes_numof,size_t node_size)`            | Empty the list to start a new scan.
`public void `[`l2scan_list_insert`](#group__net__l2scanlist_1gad78c82b40995c84d0f3132afafc68a03)`(`[`l2scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2scanlist_1ga8d0c317a99498244d029b3ca4227bfc2)` * list,`[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` * nodes,unsigned nodes_numof,size_t node_size,const `[`netopt_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gad70998ba273274bf9359e65d2fadaa69)` * result)`            | Insert a new scan result into the list.
`public unsigned `[`l2scan_list_to_array`](#group__net__l2scanlist_1ga4ffd6f0f7bc031d7c00fd16f0526c240)`(const `[`l2scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2scanlist_1ga8d0c317a99498244d029b3ca4227bfc2)` * list,void * nodes_array,unsigned nodes_numof,size_t node_size)`            | Copy the content of a L2 scan list to an array to get rid of the list overhead.
`struct `[`l2scan_list`](#structl2scan__list) | Type of a Link Layer scan list.

## Members

#### `public void `[`l2scan_list_empty`](#group__net__l2scanlist_1ga9e7627e0ccf9a9c194c2d1cd48bf8f0e)`(`[`l2scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2scanlist_1ga8d0c317a99498244d029b3ca4227bfc2)` * list,`[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` * nodes,unsigned nodes_numof,size_t node_size)` 

Empty the list to start a new scan.

#### Parameters
* `list` Pointer to list 

* `nodes` Pointer to nodes array 

* `nodes_numof` Number of nodes in the array 

* `node_size` Size of one node element in the array

#### `public void `[`l2scan_list_insert`](#group__net__l2scanlist_1gad78c82b40995c84d0f3132afafc68a03)`(`[`l2scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2scanlist_1ga8d0c317a99498244d029b3ca4227bfc2)` * list,`[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` * nodes,unsigned nodes_numof,size_t node_size,const `[`netopt_scan_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gad70998ba273274bf9359e65d2fadaa69)` * result)` 

Insert a new scan result into the list.

#### Parameters
* `list` Pointer to list 

* `nodes` Pointer to nodes array 

* `nodes_numof` Number of nodes in the array 

* `node_size` Size of one node element in the array 

* `result` New result to insert

#### `public unsigned `[`l2scan_list_to_array`](#group__net__l2scanlist_1ga4ffd6f0f7bc031d7c00fd16f0526c240)`(const `[`l2scan_list_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2scanlist_1ga8d0c317a99498244d029b3ca4227bfc2)` * list,void * nodes_array,unsigned nodes_numof,size_t node_size)` 

Copy the content of a L2 scan list to an array to get rid of the list overhead.

#### Parameters
* `list` Pointer to list 

* `nodes_array` Buffer of nodes to store the result 

* `nodes_numof` Maximum number of nodes that can be copied 

* `node_size` Size of one node element in the array

#### Returns
Number of copied nodes

# struct `l2scan_list` 

Type of a Link Layer scan list.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`head`](#structl2scan__list_1a5cbab9d4604cdde69d7202cc63a53e28) | List head, where head->next is the first element.

## Members

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`head`](#structl2scan__list_1a5cbab9d4604cdde69d7202cc63a53e28) 

List head, where head->next is the first element.

