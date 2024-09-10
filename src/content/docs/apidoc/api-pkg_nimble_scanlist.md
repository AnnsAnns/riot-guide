---
title: api-pkg_nimble_scanlist.md
description: api-pkg_nimble_scanlist.md
---
# group `pkg_nimble_scanlist` 

List for storing and printing BLE scan results.

This scanlist implementation is not thread safe. So calling [nimble_scanlist_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__scanlist_1ga214e218487850d27baf23b7a6796b4a9) in between nimble_scanlist_get*() calls is not a good idea.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_SCANLIST_SIZE`](#group__pkg__nimble__scanlist_1ga48cbc896e2004c9763c1b0ffc24f0dab)            | Default number of list entries that are allocated in RAM.
`public void `[`nimble_scanlist_init`](#group__pkg__nimble__scanlist_1gae01b196e8e96c5f8919a7816b1cebd8b)`(void)`            | Initialize the scanlist.
`public void `[`nimble_scanlist_update`](#group__pkg__nimble__scanlist_1ga214e218487850d27baf23b7a6796b4a9)`(uint8_t type,const ble_addr_t * addr,const `[`nimble_scanner_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanner.md#structnimble__scanner__info__t)` * info,const uint8_t * ad,size_t len)`            | Add/update the entry for the a scanned node.
`public `[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * `[`nimble_scanlist_get_by_pos`](#group__pkg__nimble__scanlist_1ga5e9d556c0c583ad00fcedcb321704119)`(unsigned pos)`            | Get an entry of the scanlist by its position.
`public `[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * `[`nimble_scanlist_get_next`](#group__pkg__nimble__scanlist_1gadd0ea9b627ed04078273bba801bcdb1e)`(`[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * e)`            | Get the next entry from the list, pass NULL for getting the first entry.
`public void `[`nimble_scanlist_clear`](#group__pkg__nimble__scanlist_1ga0387f8c6a40aa6b2d16d9722f479445b)`(void)`            | Clear all entries in the list.
`public void `[`nimble_scanlist_print`](#group__pkg__nimble__scanlist_1gae307bc2541ebc620abf7112bd2f61c05)`(void)`            | Dump the entire scanlist to STDIO using [nimble_scanlist_print_entry()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__scanlist_1ga89c32ffe181212932549c55f9c11ff53)
`public void `[`nimble_scanlist_print_entry`](#group__pkg__nimble__scanlist_1ga89c32ffe181212932549c55f9c11ff53)`(`[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * e)`            | Dump a single scanlist entry to STDIO.
`struct `[`nimble_scanlist_entry_t`](#structnimble__scanlist__entry__t) | Data structure for holding a single scanlist entry.

## Members

#### `define `[`NIMBLE_SCANLIST_SIZE`](#group__pkg__nimble__scanlist_1ga48cbc896e2004c9763c1b0ffc24f0dab) 

Default number of list entries that are allocated in RAM.

#### `public void `[`nimble_scanlist_init`](#group__pkg__nimble__scanlist_1gae01b196e8e96c5f8919a7816b1cebd8b)`(void)` 

Initialize the scanlist.

#### `public void `[`nimble_scanlist_update`](#group__pkg__nimble__scanlist_1ga214e218487850d27baf23b7a6796b4a9)`(uint8_t type,const ble_addr_t * addr,const `[`nimble_scanner_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanner.md#structnimble__scanner__info__t)` * info,const uint8_t * ad,size_t len)` 

Add/update the entry for the a scanned node.

If the list is already full, the scanned node is simply ignored.

#### Parameters
* `type` type of the advertising packet received 

* `addr` BLE address of the scanned node 

* `info` Additional information on received advertising event 

* `ad` the payload of the advertising packet 

* `len` length of `ad`

#### `public `[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * `[`nimble_scanlist_get_by_pos`](#group__pkg__nimble__scanlist_1ga5e9d556c0c583ad00fcedcb321704119)`(unsigned pos)` 

Get an entry of the scanlist by its position.

#### Parameters
* `pos` position in the list

#### Returns
the scanlist entry at position `pos`

#### Returns
NULL if there is no entry a the given position

#### `public `[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * `[`nimble_scanlist_get_next`](#group__pkg__nimble__scanlist_1gadd0ea9b627ed04078273bba801bcdb1e)`(`[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * e)` 

Get the next entry from the list, pass NULL for getting the first entry.

#### Parameters
* `e` any entry in the list

#### Returns
the entry following `e`

#### Returns
NULL if `e` was the last entry

#### `public void `[`nimble_scanlist_clear`](#group__pkg__nimble__scanlist_1ga0387f8c6a40aa6b2d16d9722f479445b)`(void)` 

Clear all entries in the list.

#### `public void `[`nimble_scanlist_print`](#group__pkg__nimble__scanlist_1gae307bc2541ebc620abf7112bd2f61c05)`(void)` 

Dump the entire scanlist to STDIO using [nimble_scanlist_print_entry()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__scanlist_1ga89c32ffe181212932549c55f9c11ff53)

#### `public void `[`nimble_scanlist_print_entry`](#group__pkg__nimble__scanlist_1ga89c32ffe181212932549c55f9c11ff53)`(`[`nimble_scanlist_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_scanlist.md#structnimble__scanlist__entry__t)` * e)` 

Dump a single scanlist entry to STDIO.

#### Parameters
* `e` entry to dump

# struct `nimble_scanlist_entry_t` 

Data structure for holding a single scanlist entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`node`](#structnimble__scanlist__entry__t_1ae750f686244e8c6101a6ec730bdf4f84) | list node
`public ble_addr_t `[`addr`](#structnimble__scanlist__entry__t_1a933fa3ec1692e3b33610a2016fef8c2d) | a node's BLE address
`public uint8_t `[`ad`](#structnimble__scanlist__entry__t_1aeb033f4425201fc8a4548865cd64339a) | the received raw advertising data
`public uint8_t `[`ad_len`](#structnimble__scanlist__entry__t_1af7ed9ebb47b9781a4a8950278d4b6e15) | length of the advertising data
`public int8_t `[`last_rssi`](#structnimble__scanlist__entry__t_1a292bf105f8432497c471d3507c1c1651) | last RSSI of a scanned node
`public uint32_t `[`adv_msg_cnt`](#structnimble__scanlist__entry__t_1a19587bec7aecd6e9e84c5aa56a6ff542) | number of adv packets by a node
`public uint32_t `[`first_update`](#structnimble__scanlist__entry__t_1a81926bb50ed24c77c96a3a40d366184b) | first packet timestamp
`public uint32_t `[`last_update`](#structnimble__scanlist__entry__t_1af99b8df6c847feb5773d47fb4f513f65) | last packet timestamp
`public uint8_t `[`type`](#structnimble__scanlist__entry__t_1a31a48aa46b35cc00fd0ff046120a38fa) | advertising packet type
`public uint8_t `[`phy_pri`](#structnimble__scanlist__entry__t_1af1434025b70212b91a606a44e761158b) | primary PHY used
`public uint8_t `[`phy_sec`](#structnimble__scanlist__entry__t_1a764e69ed40b4905d8c99dd0858c6c3a9) | secondary PHY advertised

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`node`](#structnimble__scanlist__entry__t_1ae750f686244e8c6101a6ec730bdf4f84) 

list node

#### `public ble_addr_t `[`addr`](#structnimble__scanlist__entry__t_1a933fa3ec1692e3b33610a2016fef8c2d) 

a node's BLE address

#### `public uint8_t `[`ad`](#structnimble__scanlist__entry__t_1aeb033f4425201fc8a4548865cd64339a) 

the received raw advertising data

#### `public uint8_t `[`ad_len`](#structnimble__scanlist__entry__t_1af7ed9ebb47b9781a4a8950278d4b6e15) 

length of the advertising data

#### `public int8_t `[`last_rssi`](#structnimble__scanlist__entry__t_1a292bf105f8432497c471d3507c1c1651) 

last RSSI of a scanned node

#### `public uint32_t `[`adv_msg_cnt`](#structnimble__scanlist__entry__t_1a19587bec7aecd6e9e84c5aa56a6ff542) 

number of adv packets by a node

#### `public uint32_t `[`first_update`](#structnimble__scanlist__entry__t_1a81926bb50ed24c77c96a3a40d366184b) 

first packet timestamp

#### `public uint32_t `[`last_update`](#structnimble__scanlist__entry__t_1af99b8df6c847feb5773d47fb4f513f65) 

last packet timestamp

#### `public uint8_t `[`type`](#structnimble__scanlist__entry__t_1a31a48aa46b35cc00fd0ff046120a38fa) 

advertising packet type

#### `public uint8_t `[`phy_pri`](#structnimble__scanlist__entry__t_1af1434025b70212b91a606a44e761158b) 

primary PHY used

#### `public uint8_t `[`phy_sec`](#structnimble__scanlist__entry__t_1a764e69ed40b4905d8c99dd0858c6c3a9) 

secondary PHY advertised

