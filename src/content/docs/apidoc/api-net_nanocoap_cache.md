---
title: api-net_nanocoap_cache.md
description: api-net_nanocoap_cache.md
---
# group `net_nanocoap_cache` 

A cache implementation for nanocoap response messages.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_NANOCOAP_CACHE_ENTRIES`](#group__net__nanocoap__cache_1gab89e9de907e221b0d0b108648869a223)            | The number of maximum cache entries.
`define `[`CONFIG_NANOCOAP_CACHE_KEY_LENGTH`](#group__net__nanocoap__cache_1gad60bd944954e7a04e43bb6d449151881)            | The length of the cache key in bytes.
`define `[`CONFIG_NANOCOAP_CACHE_RESPONSE_SIZE`](#group__net__nanocoap__cache_1ga6b007e5a8ab72790c385b9546dd6751a)            | Size of the buffer to store responses in the cache.
`public inline static void `[`nanocoap_cache_init`](#group__net__nanocoap__cache_1gaa204a73cc1b4b00438731c10dedc04ee)`(void)`            | Initializes the internal state of the nanocoap cache.
`public size_t `[`nanocoap_cache_used_count`](#group__net__nanocoap__cache_1ga00b32eeaa384bc60e65cd3df6b1b10fe)`(void)`            | Returns the number of cached entries.
`public size_t `[`nanocoap_cache_free_count`](#group__net__nanocoap__cache_1ga6b941a63a12a3b8ba1c585d9f1dce65d)`(void)`            | Returns the number of unused cache entries.
`public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_process`](#group__net__nanocoap__cache_1gac48510cd71fceaf42a0be39e6c5a7267)`(const uint8_t * cache_key,unsigned request_method,const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * resp,size_t resp_len)`            | Determines if a response is cacheable and modifies the cache as reflected in RFC7252, Section 5.9.
`public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_add_by_req`](#group__net__nanocoap__cache_1ga0db42807ae97c71561f1fbc14b5bdc63)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * resp,size_t resp_len)`            | Creates a new or gets an existing cache entry using the request packet.
`public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_add_by_key`](#group__net__nanocoap__cache_1ga92ab254c0cb43d4d3609570a39147144)`(const uint8_t * cache_key,unsigned request_method,const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * resp,size_t resp_len)`            | Creates a new or gets an existing cache entry using the cache key.
`public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_request_lookup`](#group__net__nanocoap__cache_1ga35341728a48c025cc4a4fdda0fb11540)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req)`            | Performs a cache lookup based on the `req`.
`public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_key_lookup`](#group__net__nanocoap__cache_1gaca2a0f1ed1cd3dc89bd502c8b5bf6fde)`(const uint8_t * cache_key)`            | Performs a cache lookup based on the cache key of a request.
`public int `[`nanocoap_cache_del`](#group__net__nanocoap__cache_1ga5187c915a24de6c887ce3055292a8cb9)`(const `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * ce)`            | Deletes the provided cache entry `ce`.
`public void `[`nanocoap_cache_key_generate`](#group__net__nanocoap__cache_1ga982c45398e73c76d62caf866e6bcc64f)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,uint8_t * cache_key)`            | Generates a cache key based on the request `req`.
`public void `[`nanocoap_cache_key_options_generate`](#group__net__nanocoap__cache_1ga68f0c88434b3798030483b8e9fbe7df3)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,void * cache_key)`            | Generates a cache key based on only the options in `req`.
`public void `[`nanocoap_cache_key_blockreq_options_generate`](#group__net__nanocoap__cache_1ga31f818d1a85b74cda0f51e946a5b4d83)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,void * cache_key)`            | Generates a cache key based on only the options in `req` without any of the blockwise options included in the key.
`public ssize_t `[`nanocoap_cache_key_compare`](#group__net__nanocoap__cache_1ga9b8457adc312b526dddacccd5bb56cfe)`(uint8_t * cache_key1,uint8_t * cache_key2)`            | Compares two cache keys.
`public inline static bool `[`nanocoap_cache_entry_is_stale`](#group__net__nanocoap__cache_1gad53bc48ad561006c97b4eed841c2521e)`(const `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * ce,uint32_t now)`            | Check if the Max-Age of a cache entry has passed.
`struct `[`nanocoap_cache_entry_t`](#structnanocoap__cache__entry__t) | Cache container that holds a `[coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` struct.

## Members

#### `define `[`CONFIG_NANOCOAP_CACHE_ENTRIES`](#group__net__nanocoap__cache_1gab89e9de907e221b0d0b108648869a223) 

The number of maximum cache entries.

#### `define `[`CONFIG_NANOCOAP_CACHE_KEY_LENGTH`](#group__net__nanocoap__cache_1gad60bd944954e7a04e43bb6d449151881) 

The length of the cache key in bytes.

#### `define `[`CONFIG_NANOCOAP_CACHE_RESPONSE_SIZE`](#group__net__nanocoap__cache_1ga6b007e5a8ab72790c385b9546dd6751a) 

Size of the buffer to store responses in the cache.

#### `public inline static void `[`nanocoap_cache_init`](#group__net__nanocoap__cache_1gaa204a73cc1b4b00438731c10dedc04ee)`(void)` 

Initializes the internal state of the nanocoap cache.

#### `public size_t `[`nanocoap_cache_used_count`](#group__net__nanocoap__cache_1ga00b32eeaa384bc60e65cd3df6b1b10fe)`(void)` 

Returns the number of cached entries.

#### Returns
Number of cached entries

#### `public size_t `[`nanocoap_cache_free_count`](#group__net__nanocoap__cache_1ga6b941a63a12a3b8ba1c585d9f1dce65d)`(void)` 

Returns the number of unused cache entries.

#### Returns
Number of unused cache entries

#### `public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_process`](#group__net__nanocoap__cache_1gac48510cd71fceaf42a0be39e6c5a7267)`(const uint8_t * cache_key,unsigned request_method,const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * resp,size_t resp_len)` 

Determines if a response is cacheable and modifies the cache as reflected in RFC7252, Section 5.9.

#### Parameters
* `cache_key` The cache key of the request 

* `request_method` The method of the initial request 

* `resp` The response to operate on 

* `resp_len` The actual length of the response in `resp`

#### Returns
The cache entry on successfully handling the response 

#### Returns
NULL on error

#### `public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_add_by_req`](#group__net__nanocoap__cache_1ga0db42807ae97c71561f1fbc14b5bdc63)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * resp,size_t resp_len)` 

Creates a new or gets an existing cache entry using the request packet.

#### Parameters
* `req` The request to calculate the cache-key 

* `resp` The response to add to the cache 

* `resp_len` The actual length of the response message in `resp`

#### Returns
The previously existing or newly added cache entry on success 

#### Returns
NULL, if there is no space left

#### `public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_add_by_key`](#group__net__nanocoap__cache_1ga92ab254c0cb43d4d3609570a39147144)`(const uint8_t * cache_key,unsigned request_method,const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * resp,size_t resp_len)` 

Creates a new or gets an existing cache entry using the cache key.

#### Parameters
* `cache_key` The cache key of the request 

* `request_method` The method of the initial request 

* `resp` The response to add to the cache 

* `resp_len` The actual length of the response in `resp`

#### Returns
The previously existing or newly added cache entry on success 

#### Returns
NULL, if there is no space left

#### `public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_request_lookup`](#group__net__nanocoap__cache_1ga35341728a48c025cc4a4fdda0fb11540)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req)` 

Performs a cache lookup based on the `req`.

#### Parameters
* `req` The request to calculate the cache-key

#### Returns
An existing cache entry on cache hit 

#### Returns
NULL on cache miss

#### `public `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * `[`nanocoap_cache_key_lookup`](#group__net__nanocoap__cache_1gaca2a0f1ed1cd3dc89bd502c8b5bf6fde)`(const uint8_t * cache_key)` 

Performs a cache lookup based on the cache key of a request.

#### Parameters
* `cache_key` The cache key of a request

#### Returns
An existing cache entry on cache hit 

#### Returns
NULL on cache miss

#### `public int `[`nanocoap_cache_del`](#group__net__nanocoap__cache_1ga5187c915a24de6c887ce3055292a8cb9)`(const `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * ce)` 

Deletes the provided cache entry `ce`.

#### Parameters
* `ce` The cache entry to delete

#### Returns
0 on success 

#### Returns
-1 if entry is not available in the cache

#### `public void `[`nanocoap_cache_key_generate`](#group__net__nanocoap__cache_1ga982c45398e73c76d62caf866e6bcc64f)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,uint8_t * cache_key)` 

Generates a cache key based on the request `req`.

#### Parameters
* `req` The request to generate the cache key from 

* `cache_key` The generated cache key

#### `public void `[`nanocoap_cache_key_options_generate`](#group__net__nanocoap__cache_1ga68f0c88434b3798030483b8e9fbe7df3)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,void * cache_key)` 

Generates a cache key based on only the options in `req`.

#### Parameters
* `req` The request to generate the cache key from 

* `cache_key` The generated cache key of SHA256_DIGEST_LENGTH bytes

#### `public void `[`nanocoap_cache_key_blockreq_options_generate`](#group__net__nanocoap__cache_1ga31f818d1a85b74cda0f51e946a5b4d83)`(const `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * req,void * cache_key)` 

Generates a cache key based on only the options in `req` without any of the blockwise options included in the key.

This function can be used to correlate individual requests that are part of a blockwise transfer with each other.

#### Parameters
* `req` The request to generate the cache key from 

* `cache_key` The generated cache key of SHA256_DIGEST_LENGTH bytes

#### `public ssize_t `[`nanocoap_cache_key_compare`](#group__net__nanocoap__cache_1ga9b8457adc312b526dddacccd5bb56cfe)`(uint8_t * cache_key1,uint8_t * cache_key2)` 

Compares two cache keys.

#### Parameters
* `cache_key1` The first cache key in the comparison 

* `cache_key2` The second cache key in the comparison

#### Returns
0 if cache keys are equal 

#### Returns
<0 or 0> (see memcmp()) for unequal cache keys

#### `public inline static bool `[`nanocoap_cache_entry_is_stale`](#group__net__nanocoap__cache_1gad53bc48ad561006c97b4eed841c2521e)`(const `[`nanocoap_cache_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap_cache.md#structnanocoap__cache__entry__t)` * ce,uint32_t now)` 

Check if the Max-Age of a cache entry has passed.

#### Parameters
* `ce` A cache entry 

* `now` The current time

#### Returns
true, if Max-Age of cache entry has passed. 

#### Returns
false, if Max-Age of cache entry has not yet passed.

# struct `nanocoap_cache_entry_t` 

Cache container that holds a `[coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`node`](#structnanocoap__cache__entry__t_1a64ffe1f5e4dc4215d969874d4f2c7e25) | needed for clist_t, must be the first struct member!
`public uint8_t `[`cache_key`](#structnanocoap__cache__entry__t_1a544c1bd70b7d0abd576bb4ff012ccc94) | the calculated cache key, see [nanocoap_cache_key_generate()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__cache_1ga982c45398e73c76d62caf866e6bcc64f).
`public `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` `[`response_pkt`](#structnanocoap__cache__entry__t_1a38187c780203fc1a8971ddc2f153fa01) | packet representation of the response
`public uint8_t `[`response_buf`](#structnanocoap__cache__entry__t_1ad549ab12b0d216864d1872d1ec29bbc0) | buffer to hold the response message.
`public size_t `[`response_len`](#structnanocoap__cache__entry__t_1a5b2662e6a63bdfa6fedfcd6db397e5cc) | length of the message in `response`
`public uint8_t `[`request_method`](#structnanocoap__cache__entry__t_1a0f432a9906f3ae8109f73630dfcf32a9) | the method of the initial request
`public bool `[`truncated`](#structnanocoap__cache__entry__t_1ab21a054d1a81ce26a50346a98aa70bfe) | the cached response is truncated
`public uint32_t `[`max_age`](#structnanocoap__cache__entry__t_1a459a5b5d9c7652d8ab0837a3ebfc7947) | absolute system time in seconds until which this cache entry is considered valid.

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`node`](#structnanocoap__cache__entry__t_1a64ffe1f5e4dc4215d969874d4f2c7e25) 

needed for clist_t, must be the first struct member!

#### `public uint8_t `[`cache_key`](#structnanocoap__cache__entry__t_1a544c1bd70b7d0abd576bb4ff012ccc94) 

the calculated cache key, see [nanocoap_cache_key_generate()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__cache_1ga982c45398e73c76d62caf866e6bcc64f).

#### `public `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` `[`response_pkt`](#structnanocoap__cache__entry__t_1a38187c780203fc1a8971ddc2f153fa01) 

packet representation of the response

#### `public uint8_t `[`response_buf`](#structnanocoap__cache__entry__t_1ad549ab12b0d216864d1872d1ec29bbc0) 

buffer to hold the response message.

#### `public size_t `[`response_len`](#structnanocoap__cache__entry__t_1a5b2662e6a63bdfa6fedfcd6db397e5cc) 

length of the message in `response`

#### `public uint8_t `[`request_method`](#structnanocoap__cache__entry__t_1a0f432a9906f3ae8109f73630dfcf32a9) 

the method of the initial request

#### `public bool `[`truncated`](#structnanocoap__cache__entry__t_1ab21a054d1a81ce26a50346a98aa70bfe) 

the cached response is truncated

#### `public uint32_t `[`max_age`](#structnanocoap__cache__entry__t_1a459a5b5d9c7652d8ab0837a3ebfc7947) 

absolute system time in seconds until which this cache entry is considered valid.

