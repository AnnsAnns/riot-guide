---
title: api-net_fib.md
description: api-net_fib.md
---
# group `net_fib` 

FIB implementation.

This module is unused by RIOT's networking stacks, see [Forwarding table](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib__ft) instead.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`FIB_MSG_RP_SIGNAL_UNREACHABLE_DESTINATION`](#group__net__fib_1ga3e5b41b796f4b6cace8167ce23656158)            | message type for RP notification: no route to destination available, start route discovery if appropriate
`define `[`FIB_MSG_RP_SIGNAL_DESTINATION_USED`](#group__net__fib_1gaafa04e3de0c61273f1760c90f20a9cb3)            | message type for RP notification: entry used
`define `[`FIB_MSG_RP_SIGNAL_SOURCE_ROUTE_CREATED`](#group__net__fib_1ga132387be1b9e788816ea2531e7876951)            | message type for RP notification: source route created
`define `[`FIB_LIFETIME_NO_EXPIRE`](#group__net__fib_1gaf139d9341f52cb6805a6f90a00b196a7)            | indicator of a lifetime that does not expire (2^64 - 1)
`define `[`FIB_FLAG_RPL_ROUTE`](#group__net__fib_1ga7df5150547e4bcc617da744ce566de2c)            | flag to identify if a route was set by RPL
`define `[`FIB_FLAG_NET_PREFIX_SHIFT`](#group__net__fib_1gac84f4aaf5c9fd39db14202f90e1c24e3)            | flag used as shift for the net prefix length in bits
`define `[`FIB_FLAG_NET_PREFIX_MASK`](#group__net__fib_1gac1e07b8040a5c63c56d3cadf8ce61a59)            | flag used as mask for the net prefix length in bits
`public void `[`fib_init`](#group__net__fib_1ga19a0ca4ab7759dd445dbee753fb14ddf)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)`            | initializes all FIB entries with 0
`public void `[`fib_deinit`](#group__net__fib_1ga647bc4ce56522f846b1e1cff52ff52b9)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)`            | de-initializes the FIB entries and source route entries
`public int `[`fib_register_rp`](#group__net__fib_1gab0c9ff15456d62c80ad110c21987fc9b)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * prefix,size_t prefix_addr_type_size)`            | Registration of a routing protocol handler function.
`public int `[`fib_add_entry`](#group__net__fib_1gad16e13ec99caf2fde361449ad1160ea2)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface_id,uint8_t * dst,size_t dst_size,uint32_t dst_flags,uint8_t * next_hop,size_t next_hop_size,uint32_t next_hop_flags,uint32_t lifetime)`            | Adds a new entry in the corresponding FIB table for global destination and next hop.
`public int `[`fib_update_entry`](#group__net__fib_1ga8c416d5dfd72671d721327a510340b4d)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * dst,size_t dst_size,uint8_t * next_hop,size_t next_hop_size,uint32_t next_hop_flags,uint32_t lifetime)`            | Updates an entry in the FIB table with next hop and lifetime.
`public void `[`fib_remove_entry`](#group__net__fib_1gaf15695655783e449e2361376adf516e2)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * dst,size_t dst_size)`            | removes an entry from the corresponding FIB table
`public void `[`fib_flush`](#group__net__fib_1ga8f0ce3373b5c21c39c412e1c7a6a64d0)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` interface)`            | removes all entries from the corresponding FIB table and interface combination
`public int `[`fib_get_next_hop`](#group__net__fib_1gad9b8641e5058bc2fd3619c658be25fcc)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * iface_id,uint8_t * next_hop,size_t * next_hop_size,uint32_t * next_hop_flags,uint8_t * dst,size_t dst_size,uint32_t dst_flags)`            | provides a next hop for a given destination
`public int `[`fib_get_destination_set`](#group__net__fib_1ga892c26c86d51cd7d23512116b5abd602)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * prefix,size_t prefix_size,`[`fib_destination_set_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_fib.md#structfib__destination__set__entry__t)` * dst_set,size_t * dst_set_size)`            | provides a set of destination addresses matching the given prefix If the out buffer is insufficient low or passed as NULL, the function will continue to count the number of matching entries and provide the number to the caller.
`public int `[`fib_sr_create`](#group__net__fib_1gae78ca56e6923b98c3dc74765c2f5a426)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` ** fib_sr,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` sr_iface_id,uint32_t sr_flags,uint32_t sr_lifetime)`            | creates a new source route
`public int `[`fib_sr_read_head`](#group__net__fib_1gaca0c905319b8fb37e353a642759a299a)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * sr_iface_id,uint32_t * sr_flags,uint32_t * sr_lifetime)`            | reads the information from the sr head to the given locations
`public int `[`fib_sr_read_destination`](#group__net__fib_1gab7a770c54a9bc36109d7c2b24d616778)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * dst,size_t * dst_size)`            | reads the destination address from the sr head to the given location
`public int `[`fib_sr_set`](#group__net__fib_1ga772cc48710e8689c15c335378c37fc86)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * sr_iface_id,uint32_t * sr_flags,uint32_t * sr_lifetime)`            | sets the provided parameters in the given sr header if a given parameter is NULL its considered not to be changed
`public int `[`fib_sr_delete`](#group__net__fib_1gaced4773885bc744a1ab3d086a4b21778)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr)`            | deletes the sr
`public int `[`fib_sr_next`](#group__net__fib_1ga29d9a9cebc31dcdc14ab5044a3fa5d33)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` ** sr_path_entry)`            | iterates to the next entry in the sr_path
`public int `[`fib_sr_search`](#group__net__fib_1ga3bf2de2ebe3c93fa2cf4351648a50635)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * addr,size_t addr_size,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` ** sr_path_entry)`            | searches the entry containing the given address
`public int `[`fib_sr_entry_append`](#group__net__fib_1ga2b54993ed77d919aa7048d54c58fdda7)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * dst,size_t dst_size)`            | append a new entry at the end of the source route, i.e.
`public int `[`fib_sr_entry_add`](#group__net__fib_1gab706bd2a14e2d93c5a010c8136975917)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` * sr_path_entry,uint8_t * addr,size_t addr_size,bool keep_remaining_route)`            | adds a new entry behind a given sr entry
`public int `[`fib_sr_entry_delete`](#group__net__fib_1gae3a33699097ac80d0aa2b94097e3e718)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * addr,size_t addr_size,bool keep_remaining_route)`            | removes an entry from a source route
`public int `[`fib_sr_entry_overwrite`](#group__net__fib_1ga20b547769a7971b1da3548e115bc3d87)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * addr_old,size_t addr_old_size,uint8_t * addr_new,size_t addr_new_size)`            | overwrites the address of an entry with a new address
`public int `[`fib_sr_entry_get_address`](#group__net__fib_1ga4c3039d1463bbf44ea04422f2f231fd3)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` * sr_path_entry,uint8_t * addr,size_t * addr_size)`            | writes the address of an entry to the given out pointers
`public int `[`fib_sr_get_route`](#group__net__fib_1ga37a2acef985e4768788e5840e1f6a040)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * dst,size_t dst_size,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * sr_iface_id,uint32_t * sr_flags,uint8_t * addr_list,size_t * addr_list_size,size_t * element_size,bool reverse,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` ** fib_sr)`            | copies a source route to the given destination
`public int `[`fib_get_num_used_entries`](#group__net__fib_1ga9c845e2c21ab5a126c53c82226ac76f8)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)`            | returns the actual number of used FIB entries
`public void `[`fib_print_notify_rrp`](#group__net__fib_1ga82bb45f6253525490451c2102754f490)`(void)`            | Prints the kernel_pid_t for all registered RRPs.
`public void `[`fib_print_fib_table`](#group__net__fib_1ga2f0e3dd11d7ff74c26f66b1b29e8666e)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)`            | Prints the FIB content (does not print the entries)
`public void `[`fib_print_routes`](#group__net__fib_1ga9311bfdbf3cff9ac37e593a638883f6b)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)`            | Prints the FIB content.
`public void `[`fib_print_sr`](#group__net__fib_1ga4832ca9ba009ee11909342caac134f7a)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * sr)`            | Prints the given FIB sourceroute.
`struct `[`rp_address_msg_t`](#structrp__address__msg__t) | Routing Protocol (RP) message content to request/reply notification.
`struct `[`fib_destination_set_entry_t`](#structfib__destination__set__entry__t) | entry used to collect available destinations

## Members

#### `define `[`FIB_MSG_RP_SIGNAL_UNREACHABLE_DESTINATION`](#group__net__fib_1ga3e5b41b796f4b6cace8167ce23656158) 

message type for RP notification: no route to destination available, start route discovery if appropriate

#### `define `[`FIB_MSG_RP_SIGNAL_DESTINATION_USED`](#group__net__fib_1gaafa04e3de0c61273f1760c90f20a9cb3) 

message type for RP notification: entry used

#### `define `[`FIB_MSG_RP_SIGNAL_SOURCE_ROUTE_CREATED`](#group__net__fib_1ga132387be1b9e788816ea2531e7876951) 

message type for RP notification: source route created

#### `define `[`FIB_LIFETIME_NO_EXPIRE`](#group__net__fib_1gaf139d9341f52cb6805a6f90a00b196a7) 

indicator of a lifetime that does not expire (2^64 - 1)

#### `define `[`FIB_FLAG_RPL_ROUTE`](#group__net__fib_1ga7df5150547e4bcc617da744ce566de2c) 

flag to identify if a route was set by RPL

#### `define `[`FIB_FLAG_NET_PREFIX_SHIFT`](#group__net__fib_1gac84f4aaf5c9fd39db14202f90e1c24e3) 

flag used as shift for the net prefix length in bits

#### `define `[`FIB_FLAG_NET_PREFIX_MASK`](#group__net__fib_1gac1e07b8040a5c63c56d3cadf8ce61a59) 

flag used as mask for the net prefix length in bits

#### `public void `[`fib_init`](#group__net__fib_1ga19a0ca4ab7759dd445dbee753fb14ddf)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)` 

initializes all FIB entries with 0

#### Parameters
* `table` the fib instance to initialize

#### `public void `[`fib_deinit`](#group__net__fib_1ga647bc4ce56522f846b1e1cff52ff52b9)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)` 

de-initializes the FIB entries and source route entries

#### Parameters
* `table` the fib instance to de-initialize

#### `public int `[`fib_register_rp`](#group__net__fib_1gab0c9ff15456d62c80ad110c21987fc9b)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * prefix,size_t prefix_addr_type_size)` 

Registration of a routing protocol handler function.

#### Parameters
* `table` the fib table the RP should be registered to 

* `prefix` the prefix handled by the according RP 

* `prefix_addr_type_size` the size of the address type used for the prefix

#### Returns
0 on success -ENOMEM if the entry cannot be registered (mximum registrations reached) -EINVAL if the prefix is NULL or the provided size is 0

#### `public int `[`fib_add_entry`](#group__net__fib_1gad16e13ec99caf2fde361449ad1160ea2)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` iface_id,uint8_t * dst,size_t dst_size,uint32_t dst_flags,uint8_t * next_hop,size_t next_hop_size,uint32_t next_hop_flags,uint32_t lifetime)` 

Adds a new entry in the corresponding FIB table for global destination and next hop.

#### Parameters
* `table` the fib table the entry should be added to 

* `iface_id` the interface ID 

* `dst` the destination address 

* `dst_size` the destination address size 

* `dst_flags` the destination address flags 

* `next_hop` the next hop address to be updated 

* `next_hop_size` the next hop address size 

* `next_hop_flags` the next-hop address flags 

* `lifetime` the lifetime in ms to be updates

#### Returns
0 on success -ENOMEM if the entry cannot be created due to insufficient RAM -EFAULT if dst and/or next_hop is not a valid pointer

#### `public int `[`fib_update_entry`](#group__net__fib_1ga8c416d5dfd72671d721327a510340b4d)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * dst,size_t dst_size,uint8_t * next_hop,size_t next_hop_size,uint32_t next_hop_flags,uint32_t lifetime)` 

Updates an entry in the FIB table with next hop and lifetime.

#### Parameters
* `table` the fib table containing the entry to update 

* `dst` the destination address 

* `dst_size` the destination address size 

* `next_hop` the next hop address to be updated 

* `next_hop_size` the next hop address size 

* `next_hop_flags` the next-hop address flags 

* `lifetime` the lifetime in ms to be updates

#### Returns
0 on success -ENOMEM if the entry cannot be updated due to insufficient RAM -EFAULT if dst and/or next_hop is not a valid pointer

#### `public void `[`fib_remove_entry`](#group__net__fib_1gaf15695655783e449e2361376adf516e2)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * dst,size_t dst_size)` 

removes an entry from the corresponding FIB table

#### Parameters
* `table` the fib table containing the entry to remove 

* `dst` the destination address 

* `dst_size` the destination address size

#### `public void `[`fib_flush`](#group__net__fib_1ga8f0ce3373b5c21c39c412e1c7a6a64d0)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` interface)` 

removes all entries from the corresponding FIB table and interface combination

if interface is KERNEL_PID_UNDEF, then all entries regardless of the interface will be removed.

#### Parameters
* `table` the fib table to flush 

* `interface` entries associated with this interface will be removed

#### `public int `[`fib_get_next_hop`](#group__net__fib_1gad9b8641e5058bc2fd3619c658be25fcc)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * iface_id,uint8_t * next_hop,size_t * next_hop_size,uint32_t * next_hop_flags,uint8_t * dst,size_t dst_size,uint32_t dst_flags)` 

provides a next hop for a given destination

#### Parameters
* `table` the fib table that should be searched 

* `iface_id` pointer to store the interface ID for the next hop 

* `next_hop` pointer where the next hop address should be stored 

* `next_hop_size` the next hop address size. The value is overwritten with the actual next hop size 

* `next_hop_flags` the next-hop address flags, e.g. compression type 

* `dst` the destination address 

* `dst_size` the destination address size 

* `dst_flags` the destination address flags

#### Returns
0 on success -EHOSTUNREACH if no next hop is available in any FIB table all RRPs are notified before the return -ENOBUFS if the size for the next hop address is insufficient low -EFAULT if dst and/or next_hop is not a valid pointer -EINVAL if one of the other passed out pointers is NULL

#### `public int `[`fib_get_destination_set`](#group__net__fib_1ga892c26c86d51cd7d23512116b5abd602)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * prefix,size_t prefix_size,`[`fib_destination_set_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_fib.md#structfib__destination__set__entry__t)` * dst_set,size_t * dst_set_size)` 

provides a set of destination addresses matching the given prefix If the out buffer is insufficient low or passed as NULL, the function will continue to count the number of matching entries and provide the number to the caller.

#### Parameters
* `table` the fib table that should be searched 

* `prefix` the destination address 

* `prefix_size` the destination address size 

* `dst_set` the destination addresses matching the prefix 

* `dst_set_size` the number of entries available on in and used on out

#### Returns
0 on success -EHOSTUNREACH if no entry matches the type in the FIB -ENOBUFS if the size for the found entries is insufficient low The actual needed size is stored then in dst_set_size, however the required size may change in between calls.

#### `public int `[`fib_sr_create`](#group__net__fib_1gae78ca56e6923b98c3dc74765c2f5a426)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` ** fib_sr,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` sr_iface_id,uint32_t sr_flags,uint32_t sr_lifetime)` 

creates a new source route

#### Parameters
* `table` the table the new source route belongs to 

* `fib_sr` pointer to store the new created source route pointer 

* `sr_iface_id` the interface ID used for the created source route 

* `sr_flags` the flags for the source route 

* `sr_lifetime` the lifetime in ms of the source route

#### Returns
0 on success -EFAULT on wrong parameters, i.e. fib_sr is NULL and/or sr_lifetime is 0 -ENOBUFS on insufficient memory, i.e. all source route fields are in use

#### `public int `[`fib_sr_read_head`](#group__net__fib_1gaca0c905319b8fb37e353a642759a299a)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * sr_iface_id,uint32_t * sr_flags,uint32_t * sr_lifetime)` 

reads the information from the sr head to the given locations

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to read from 

* `sr_iface_id` pointer to store the iface_id 

* `sr_flags` pointer to store the flags 

* `sr_lifetime` pointer to store the current left lifetime

#### Returns
0 on success -ENOENT on expired lifetime of the source route -EFAULT on fib_sr is NULL

#### `public int `[`fib_sr_read_destination`](#group__net__fib_1gab7a770c54a9bc36109d7c2b24d616778)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * dst,size_t * dst_size)` 

reads the destination address from the sr head to the given location

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to read from 

* `dst` pointer to the store destination address bytes 

* `dst_size` pointer to store the destination address size

#### Returns
0 on success -ENOENT on expired lifetime of the source route -EFAULT on one of the parameter pointers is NULL -ENOBUFS if the size to store the destination is insufficient low -EHOSTUNREACH on the destination address is not set

#### `public int `[`fib_sr_set`](#group__net__fib_1ga772cc48710e8689c15c335378c37fc86)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * sr_iface_id,uint32_t * sr_flags,uint32_t * sr_lifetime)` 

sets the provided parameters in the given sr header if a given parameter is NULL its considered not to be changed

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to write to 

* `sr_iface_id` pointer to the new iface_id 

* `sr_flags` pointer to the new flags 

* `sr_lifetime` pointer to store the new lifetime

#### Returns
0 on success -ENOENT on expired lifetime of the source route -EFAULT on passed fib_sr is NULL

#### `public int `[`fib_sr_delete`](#group__net__fib_1gaced4773885bc744a1ab3d086a4b21778)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr)` 

deletes the sr

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the source route to be deleted

#### Returns
0 on success -EFAULT on fib_sr pointer is NULL

#### `public int `[`fib_sr_next`](#group__net__fib_1ga29d9a9cebc31dcdc14ab5044a3fa5d33)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` ** sr_path_entry)` 

iterates to the next entry in the sr_path

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to iterate 

* `sr_path_entry` pointer to the entry for iterating to the next entry

#### Returns
0 on success 1 on success, end reached -ENOENT on expired lifetime of the source route -EFAULT on fib_sr and/or sr_path_entry is NULL

#### `public int `[`fib_sr_search`](#group__net__fib_1ga3bf2de2ebe3c93fa2cf4351648a50635)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * addr,size_t addr_size,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` ** sr_path_entry)` 

searches the entry containing the given address

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to search for a hop address 

* `addr` pointer to the searched address bytes 

* `addr_size` the size in bytes of the searched address type 

* `sr_path_entry` pointer to the found address entry

#### Returns
0 on success -EHOSTUNREACH when no address matches on the path -ENOENT on expired lifetime of the source route -EFAULT on one of the given parameter pointer is NULL

#### `public int `[`fib_sr_entry_append`](#group__net__fib_1ga2b54993ed77d919aa7048d54c58fdda7)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * dst,size_t dst_size)` 

append a new entry at the end of the source route, i.e.

a new destination

#### Parameters
* `table` the table with the source route to append the new entry 

* `fib_sr` pointer to the sr to append a hop address 

* `dst` pointer to the new destination address bytes 

* `dst_size` the size in bytes of the destination address type

#### Returns
0 on success -EINVAL on the given destination is already on the path in the source route -ENOENT on expired lifetime of the source route -EFAULT on fib_sr and/or dst is NULL

#### `public int `[`fib_sr_entry_add`](#group__net__fib_1gab706bd2a14e2d93c5a010c8136975917)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` * sr_path_entry,uint8_t * addr,size_t addr_size,bool keep_remaining_route)` 

adds a new entry behind a given sr entry

#### Parameters
* `table` the table with the source route to add the new entry 

* `fib_sr` pointer to the sr to add a hop address 

* `sr_path_entry` pointer to the entry after which we add the new one 

* `addr` pointer to the new address bytes 

* `addr_size` the size in bytes of the address type 

* `keep_remaining_route` indicate if the remaining route after sr_path_entry should be kept and appended after the new entry

#### Returns
0 on success -EFAULT on fib_sr and/or sr_path_entry and/or addr is NULL -ENOENT on expired lifetime of the source route -EINVAL on the given address is already present in the path

#### `public int `[`fib_sr_entry_delete`](#group__net__fib_1gae3a33699097ac80d0aa2b94097e3e718)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * addr,size_t addr_size,bool keep_remaining_route)` 

removes an entry from a source route

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to delete a hop address 

* `addr` pointer to the address bytes to delete 

* `addr_size` the size in bytes of the address type 

* `keep_remaining_route` indicate if the remaining route should be kept and appended after the predecessor of the removed entry

#### Returns
0 on success -EFAULT on one of the passed pointers is NULL -ENOENT on expired lifetime of the source route

#### `public int `[`fib_sr_entry_overwrite`](#group__net__fib_1ga20b547769a7971b1da3548e115bc3d87)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,uint8_t * addr_old,size_t addr_old_size,uint8_t * addr_new,size_t addr_new_size)` 

overwrites the address of an entry with a new address

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to overwrite a hop address 

* `addr_old` pointer to the address bytes to overwrite 

* `addr_old_size` the size in bytes of the address type 

* `addr_new` pointer to the new address bytes 

* `addr_new_size` the size in bytes of the address type

#### Returns
0 on success -EINVAL on the given address is already present in the path -ENOMEM on no memory left to create a new address entry to overwrite the old one -EFAULT on one of the passed pointers is NULL -ENOENT on expired lifetime of the source route

#### `public int `[`fib_sr_entry_get_address`](#group__net__fib_1ga4c3039d1463bbf44ea04422f2f231fd3)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * fib_sr,`[`fib_sr_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#table_8h_1a060c57dcbaa47030e00abe6b347adfe9)` * sr_path_entry,uint8_t * addr,size_t * addr_size)` 

writes the address of an entry to the given out pointers

#### Parameters
* `table` the fib instance to access 

* `fib_sr` pointer to the sr to get a hop address 

* `sr_path_entry` pointer to the entry with the address 

* `addr` pointer to store the address bytes 

* `addr_size` the size in bytes of the address type

#### Returns
0 on success -ENOMEM on insufficient memory provided to store the address -EFAULT on one of the passed pointers is NULL -ENOENT on expired lifetime of the source route

#### `public int `[`fib_sr_get_route`](#group__net__fib_1ga37a2acef985e4768788e5840e1f6a040)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,uint8_t * dst,size_t dst_size,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` * sr_iface_id,uint32_t * sr_flags,uint8_t * addr_list,size_t * addr_list_size,size_t * element_size,bool reverse,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` ** fib_sr)` 

copies a source route to the given destination

#### Parameters
* `table` table to search for a source route 

* `dst` pointer to the destination address bytes 

* `dst_size` the size in bytes of the destination address type 

* `sr_iface_id` pointer to the store the iface_id for this route 

* `sr_flags` pointer to store the flags of this route 

* `addr_list` pointer to the location for storing the source route addresses 

* `addr_list_size` the number of elements available in addr_list 

* `element_size` the provided size for one element in addr_list 

* `reverse` indicator if the hops should be stored in reverse order 

* `fib_sr` pointer for cosecutive receiving matching source routes. If NULL only the first matching source route is returned. If !NULL the pointer will be overwritten with the current returned fib_sr. The FIB skips all entries until the provided fib_sr+1. The fib_sr pointer is only overwritten when a further matching sr has been found.

The actual needed size for an element and the number of elements is stored in addr_list_elements and element_size respectively when the return value is NOT -EFAULT or NOT -EHOSTUNREACH. However,the required size for may change in between calls.

#### Returns
0 on success, path to destination with equal flags 1 on success, path to destination with distinct flags -EFAULT on one of the provided parameter pointers is NULL -EHOSTUNREACH if no sr for the destination exists in the FIB -ENOBUFS if the size to store all hops is insufficient low

#### `public int `[`fib_get_num_used_entries`](#group__net__fib_1ga9c845e2c21ab5a126c53c82226ac76f8)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)` 

returns the actual number of used FIB entries

#### Parameters
* `table` the fib instance to check

#### `public void `[`fib_print_notify_rrp`](#group__net__fib_1ga82bb45f6253525490451c2102754f490)`(void)` 

Prints the kernel_pid_t for all registered RRPs.

#### `public void `[`fib_print_fib_table`](#group__net__fib_1ga2f0e3dd11d7ff74c26f66b1b29e8666e)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)` 

Prints the FIB content (does not print the entries)

#### Parameters
* `table` the fib instance to print

#### `public void `[`fib_print_routes`](#group__net__fib_1ga9311bfdbf3cff9ac37e593a638883f6b)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table)` 

Prints the FIB content.

#### Parameters
* `table` the fib instance to print

#### `public void `[`fib_print_sr`](#group__net__fib_1ga4832ca9ba009ee11909342caac134f7a)`(`[`fib_table_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__table__t)` * table,`[`fib_sr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfib__sr__t)` * sr)` 

Prints the given FIB sourceroute.

#### Parameters
* `table` the fib instance to print 

* `sr` the source route to print

# struct `rp_address_msg_t` 

Routing Protocol (RP) message content to request/reply notification.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`address`](#structrp__address__msg__t_1adb6e3774232d7f845c0aeac8d5e80f31) | The pointer to the address.
`public uint8_t `[`address_size`](#structrp__address__msg__t_1a323aa6816b5e4ad27c2880708f524036) | The address size.
`public uint32_t `[`address_flags`](#structrp__address__msg__t_1ae02f9128d5b3e6142e936ca8d316e3f0) | The flags for the given address.

## Members

#### `public uint8_t * `[`address`](#structrp__address__msg__t_1adb6e3774232d7f845c0aeac8d5e80f31) 

The pointer to the address.

#### `public uint8_t `[`address_size`](#structrp__address__msg__t_1a323aa6816b5e4ad27c2880708f524036) 

The address size.

#### `public uint32_t `[`address_flags`](#structrp__address__msg__t_1ae02f9128d5b3e6142e936ca8d316e3f0) 

The flags for the given address.

# struct `fib_destination_set_entry_t` 

entry used to collect available destinations

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`dest`](#structfib__destination__set__entry__t_1ab12bcd020862a7b9a4934efd9421dfa8) | The destination address.
`public size_t `[`dest_size`](#structfib__destination__set__entry__t_1ad4427c09e073b0e7cb0f5bb744c1522e) | The destination address size.

## Members

#### `public uint8_t `[`dest`](#structfib__destination__set__entry__t_1ab12bcd020862a7b9a4934efd9421dfa8) 

The destination address.

#### `public size_t `[`dest_size`](#structfib__destination__set__entry__t_1ad4427c09e073b0e7cb0f5bb744c1522e) 

The destination address size.

