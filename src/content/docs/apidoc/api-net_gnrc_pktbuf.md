---
title: api-net_gnrc_pktbuf.md
description: api-net_gnrc_pktbuf.md
---
# group `net_gnrc_pktbuf` 

A global network packet buffer.

**WARNING!!** Do not store data structures that are not packed (defined with `__attribute__((packed))`) or enforce alignment in in any way in here if [CONFIG_GNRC_PKTBUF_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf__conf_1ga3d31ccb6c133c6c4c91d60f5e420a83c) > 0. On some RISC architectures this *will* lead to alignment problems and can potentially result in segmentation/hard faults and other unexpected behaviour.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gnrc_pktbuf_init`](#group__net__gnrc__pktbuf_1gaab1dff47c0eecdad43f511425e1341e7)`(void)`            | Initializes packet buffer module.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_add`](#group__net__gnrc__pktbuf_1ga658aed0ce2b31d784e32849eb0f60d27)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next,const void * data,size_t size,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)`            | Adds a new gnrc_pktsnip_t and its packet to the packet buffer.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_mark`](#group__net__gnrc__pktbuf_1ga3d7c5274101df3fa6eff69edf46f347f)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t size,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)`            | Marks the first `size` bytes in a received packet with a new packet snip that is appended to the packet.
`public int `[`gnrc_pktbuf_realloc_data`](#group__net__gnrc__pktbuf_1ga3d9a8b1307f8971680299b2f86ac4a3e)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t size)`            | Reallocates [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt` in the packet buffer, without changing the content.
`public void `[`gnrc_pktbuf_hold`](#group__net__gnrc__pktbuf_1gac679dd478531a503852093f4c044c65c)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,unsigned int num)`            | Increases [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` atomically.
`public void `[`gnrc_pktbuf_release_error`](#group__net__gnrc__pktbuf_1ga39c4489933328ddabcf87d5940df9807)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint32_t err)`            | Decreases [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` atomically and removes it if it reaches 0 and reports a possible error through an error code, if [Error reporting](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__neterr) is included.
`public inline static void `[`gnrc_pktbuf_release`](#group__net__gnrc__pktbuf_1gaed632f849e2ae54b8ec22990967ca38a)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Decreases [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` atomically and removes it if it reaches 0 and reports [GNRC_NETERR_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__neterr_1ga6e512f593ce094228a5697d4d224dc0f).
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_start_write`](#group__net__gnrc__pktbuf_1ga640418467294ae3d408c109ab27bd617)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Must be called once before there is a write operation on a [packet snip](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) in a thread.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_remove_snip`](#group__net__gnrc__pktbuf_1gafbb055c2d0ef263bf0ed38b392761719)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)`            | Deletes a snip from a packet and the packet buffer.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_reverse_snips`](#group__net__gnrc__pktbuf_1ga7f104a81ca707558dc5192e39ad7b5cd)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Reverses snip order of a packet in a write-protected manner.
`public int `[`gnrc_pktbuf_merge`](#group__net__gnrc__pktbuf_1gae41835e987f693706a388a3d9e14f83a)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Merge pktsnip chain to single pktsnip.
`public void `[`gnrc_pktbuf_stats`](#group__net__gnrc__pktbuf_1gaf4e7cccaa0d94f9ccaefdceab382d396)`(void)`            | Prints some statistics about the packet buffer to stdout.
`public bool `[`gnrc_pktbuf_is_empty`](#group__net__gnrc__pktbuf_1ga3c89a6668a1fae81ff8a37f011fadd12)`(void)`            | Checks if packet buffer is empty.
`public bool `[`gnrc_pktbuf_is_sane`](#group__net__gnrc__pktbuf_1ga382dff5b57c2954c7dffbf3b37b4eee3)`(void)`            | Checks if the implementation's internal invariants still uphold.

## Members

#### `public void `[`gnrc_pktbuf_init`](#group__net__gnrc__pktbuf_1gaab1dff47c0eecdad43f511425e1341e7)`(void)` 

Initializes packet buffer module.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_add`](#group__net__gnrc__pktbuf_1ga658aed0ce2b31d784e32849eb0f60d27)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next,const void * data,size_t size,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)` 

Adds a new gnrc_pktsnip_t and its packet to the packet buffer.

**Do not** change the fields of the gnrc_pktsnip_t created by this function externally. This will most likely create memory leaks or not allowed memory access.

size < CONFIG_GNRC_PKTBUF_SIZE

#### Parameters
* `next` Next gnrc_pktsnip_t in the packet. Leave NULL if you want to create a new packet. 

* `data` Data of the new gnrc_pktsnip_t. If `data` is NULL no data will be inserted into `result`. 

* `size` Length of `data`. If this value is 0 the [gnrc_pktsnip::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) field of the newly created snip will be NULL. 

* `type` Protocol type of the gnrc_pktsnip_t.

#### Returns
Pointer to the packet part that represents the new gnrc_pktsnip_t. 

#### Returns
NULL, if no space is left in the packet buffer.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_mark`](#group__net__gnrc__pktbuf_1ga3d7c5274101df3fa6eff69edf46f347f)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t size,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)` 

Marks the first `size` bytes in a received packet with a new packet snip that is appended to the packet.

Graphically this can be represented as follows:

```cpp
Before                                    After
======                                    =====
                                                      (next)
 pkt->data                                 result->data <== pkt->data
 v                                         v                v
+--------------------------------+        +----------------+---------------+
+--------------------------------+        +----------------+---------------+
 \__________pkt->size___________/          \_result->size_/ \__pkt->size__/
```

If `size == pkt->size` then the resulting snip will point to NULL in its [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) field and its [gnrc_pktsnip_t::size](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a0718f2cde3411a4833f82c10f8ea8d71) field will be 0.

`pkt` != NULL && `size` != 0

#### Parameters
* `pkt` A received packet. 

* `size` The size of the new packet snip. 

* `type` The type of the new packet snip.

It's not guaranteed that `result->data` points to the same address as the original `pkt->data`.

#### Returns
The new packet snip in `pkt` on success. 

#### Returns
NULL, if pkt == NULL or size == 0 or size > pkt->size or pkt->data == NULL. 

#### Returns
NULL, if no space is left in the packet buffer.

#### `public int `[`gnrc_pktbuf_realloc_data`](#group__net__gnrc__pktbuf_1ga3d9a8b1307f8971680299b2f86ac4a3e)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t size)` 

Reallocates [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt` in the packet buffer, without changing the content.

`pkt != NULL`

`(pkt->size > 0) <=> (pkt->data != NULL)`

[gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt` is in the packet buffer if it is not NULL.

If enough memory is available behind it or `size` is smaller than the original size of the packet then [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt` will not be moved. Otherwise, it will be moved. If no space is available nothing happens.

#### Parameters
* `pkt` A packet part. 

* `size` The size for `pkt`.

#### Returns
0, on success 

#### Returns
ENOMEM, if no space is left in the packet buffer.

#### `public void `[`gnrc_pktbuf_hold`](#group__net__gnrc__pktbuf_1gac679dd478531a503852093f4c044c65c)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,unsigned int num)` 

Increases [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` atomically.

#### Parameters
* `pkt` A packet. 

* `num` Number you want to increment [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` by.

#### `public void `[`gnrc_pktbuf_release_error`](#group__net__gnrc__pktbuf_1ga39c4489933328ddabcf87d5940df9807)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint32_t err)` 

Decreases [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` atomically and removes it if it reaches 0 and reports a possible error through an error code, if [Error reporting](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__neterr) is included.

All snips of `pkt` must be in the packet buffer.

#### Parameters
* `pkt` A packet. 

* `err` An error code.

#### `public inline static void `[`gnrc_pktbuf_release`](#group__net__gnrc__pktbuf_1gaed632f849e2ae54b8ec22990967ca38a)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Decreases [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` atomically and removes it if it reaches 0 and reports [GNRC_NETERR_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__neterr_1ga6e512f593ce094228a5697d4d224dc0f).

#### Parameters
* `pkt` A packet.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_start_write`](#group__net__gnrc__pktbuf_1ga640418467294ae3d408c109ab27bd617)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Must be called once before there is a write operation on a [packet snip](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) in a thread.

This function duplicates a packet snip in the packet buffer (both the instance of the gnrc_pktsnip_t and its data) if [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` > 1.

#### Parameters
* `pkt` The packet snip you want to write into.

#### Returns
The (new) pointer to the packet snip. 

#### Returns
NULL, if [gnrc_pktsnip_t::users](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) of `pkt` > 1 and if there is not enough space in the packet buffer.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_remove_snip`](#group__net__gnrc__pktbuf_1gafbb055c2d0ef263bf0ed38b392761719)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)` 

Deletes a snip from a packet and the packet buffer.

#### Parameters
* `pkt` A packet. 

* `snip` A snip in the packet.

#### Returns
The new reference to `pkt`.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktbuf_reverse_snips`](#group__net__gnrc__pktbuf_1ga7f104a81ca707558dc5192e39ad7b5cd)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Reverses snip order of a packet in a write-protected manner.

This can be used to change the send/receive order of a packet (see [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63))

`pkt` is released on failure.

#### Parameters
* `pkt` A packet. When this function fails (due to a full packet packet buffer) `pkt` will be released.

#### Returns
The reversed version of `pkt` on success 

#### Returns
NULL, when there is not enough space in the packet buffer to reverse the packet in a write-protected manner. `pkt` is released in that case.

#### `public int `[`gnrc_pktbuf_merge`](#group__net__gnrc__pktbuf_1gae41835e987f693706a388a3d9e14f83a)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Merge pktsnip chain to single pktsnip.

Specifically it calls [gnrc_pktbuf_realloc_data()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf_1ga3d9a8b1307f8971680299b2f86ac4a3e) on `pkt`, then copies the data of all following packet snips into that reallocated space, and removes the packet snip the data was copied from afterwards.

ExampleInput                                                    buffer
+---------------------------+                      +------+
| size = 8                  | data       +-------->|      |
| type = NETTYPE_IPV6       |------------+         +------+
+---------------------------+                      .      .
      | next                                       .      .
      v                                            .      .
+---------------------------+                      +------+
| size = 40                 | data    +----------->|      |
| type = NETTYPE_UDP        |---------+            +------+
+---------------------------+                      .      .
      | next                                       .      .
      v
+---------------------------+                      +------+
| size = 14                 | data +-------------->|      |
| type = NETTYPE_UNDEF      |------+               +------+
+---------------------------+                      .      .

Output                                                    buffer
+---------------------------+                      +------+
| size = 62                 | data       +-------->|      |
| type = NETTYPE_IPV6       |------------+         |      |
+---------------------------+                      |      |
                                                   |      |
                                                   |      |
                                                   |      |
                                                   +------+
                                                            .      .
`pkt` needs to write protected before calling this function. 

Packets in receive order need to call [gnrc_pktbuf_reverse_snips()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf_1ga7f104a81ca707558dc5192e39ad7b5cd) first to get the data in the correct order.

#### Parameters
* `pkt` The snip to merge.

#### Returns
0, on success 

#### Returns
ENOMEM, if no space is left in the packet buffer.

#### `public void `[`gnrc_pktbuf_stats`](#group__net__gnrc__pktbuf_1gaf4e7cccaa0d94f9ccaefdceab382d396)`(void)` 

Prints some statistics about the packet buffer to stdout.

Only available with DEVELHELP defined.

Statistics include maximum number of reserved bytes.

#### `public bool `[`gnrc_pktbuf_is_empty`](#group__net__gnrc__pktbuf_1ga3c89a6668a1fae81ff8a37f011fadd12)`(void)` 

Checks if packet buffer is empty.

#### Returns
true, if packet buffer is empty 

#### Returns
false, if packet buffer is not empty

#### `public bool `[`gnrc_pktbuf_is_sane`](#group__net__gnrc__pktbuf_1ga382dff5b57c2954c7dffbf3b37b4eee3)`(void)` 

Checks if the implementation's internal invariants still uphold.

#### Returns
true, the packet buffer is sane. 

#### Returns
false, the packet buffer is insane.

