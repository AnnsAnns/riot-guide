---
title: api-net_sixlowpan.md
description: api-net_sixlowpan.md
---
# group `net_sixlowpan` 

Provides 6LoWPAN dispatch types and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`sixlowpan_print`](#group__net__sixlowpan_1ga80bf8d6638d755b5f35a2f025d93b6c6)`(uint8_t * data,size_t size)`            | Prints 6LoWPAN dispatch to stdout.
`struct `[`sixlowpan_frag_t`](#structsixlowpan__frag__t) | General and 1st 6LoWPAN fragmentation header.
`struct `[`sixlowpan_frag_n_t`](#structsixlowpan__frag__n__t) | Subsequent 6LoWPAN fragmentation header.

## Members

#### `public void `[`sixlowpan_print`](#group__net__sixlowpan_1ga80bf8d6638d755b5f35a2f025d93b6c6)`(uint8_t * data,size_t size)` 

Prints 6LoWPAN dispatch to stdout.

#### Parameters
* `data` A 6LoWPAN frame. 

* `size` Size of `data`.

# struct `sixlowpan_frag_t` 

General and 1st 6LoWPAN fragmentation header.

The general 6LoWPAN fragmentation header refers to the first 4 bytes of a `FRAG0` or `FRAGN` fragmentation header, which are identical.

**See also**: [RFC 4944, section 5.3 ](https://tools.ietf.org/html/rfc4944#section-5.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`disp_size`](#structsixlowpan__frag__t_1a8ec3affdb2456584e7fcfc9d8cc4154b) | Dispatch and datagram size.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`tag`](#structsixlowpan__frag__t_1ad967241393267e9f31dd52b64b456883) | datagram tag

## Members

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`disp_size`](#structsixlowpan__frag__t_1a8ec3affdb2456584e7fcfc9d8cc4154b) 

Dispatch and datagram size.

The 5 most significant bits are the dispatch, the remaining bits are the size.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`tag`](#structsixlowpan__frag__t_1ad967241393267e9f31dd52b64b456883) 

datagram tag

# struct `sixlowpan_frag_n_t` 

```
struct sixlowpan_frag_n_t
  : public sixlowpan_frag_t
```  

Subsequent 6LoWPAN fragmentation header.

**See also**: [RFC 4944, section 5.3 ](https://tools.ietf.org/html/rfc4944#section-5.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`disp_size`](#structsixlowpan__frag__n__t_1a46c6dc898bf0bf59ac38698bba714899) | Dispatch and datagram size.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`tag`](#structsixlowpan__frag__n__t_1a7780ee7700e54764632329f70cf96d72) | datagram tag
`public uint8_t `[`offset`](#structsixlowpan__frag__n__t_1aab88cb30a4c00e36ebed08f9fdcaf991) | offset

## Members

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`disp_size`](#structsixlowpan__frag__n__t_1a46c6dc898bf0bf59ac38698bba714899) 

Dispatch and datagram size.

The 5 most significant bits are the dispatch, the remaining bits are the size.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`tag`](#structsixlowpan__frag__n__t_1a7780ee7700e54764632329f70cf96d72) 

datagram tag

#### `public uint8_t `[`offset`](#structsixlowpan__frag__n__t_1aab88cb30a4c00e36ebed08f9fdcaf991) 

offset

