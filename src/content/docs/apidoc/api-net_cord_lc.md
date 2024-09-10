---
title: api-net_cord_lc.md
description: api-net_cord_lc.md
---
# group `net_cord_lc` 

Library for using RIOT as CoRE Resource Directory (RD) lookup client.

This module implements a CoRE Resource Directory lookup client library, that allows RIOT nodes to lookup resources, endpoints and groups with resource directories. It implements the standard lookup functionality as defined in draft-ietf-core-resource-directory-27. 
**See also**: [https://tools.ietf.org/html/draft-ietf-core-resource-directory-27](https://tools.ietf.org/html/draft-ietf-core-resource-directory-27)

Lookup modesThe module defines two types of lookup for interacting with a RD server:

* raw: result of the lookup is returned as is. No `page` or `count` filter is applied by default. Use [cord_lc_raw()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga417cf995f0097422380f3f8427f267bb) for this mode.

* pre-parsed: result of the lookup is parsed and returned in a [cord_lc_res_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga7c4af49abfb90e41627cbf9b77bf59ae) or [cord_lc_ep_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1gacdd878279d8e993f010232680b164c16) depending on the type of the lookup. The default `count` filter is set to `1` and `page` filter is incremented after each successful call and resets to `0` when lookup result is empty. Use [cord_lc_res()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga1c8285178cd7d1877ccd1c3ec92d2cf0) or [cord_lc_ep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga5b7faacd77694322abd537b08be6acc3) for this mode.

LimitationsCurrently, this module cannot do more than a single request concurrently and the request is fully synchronous. The client can only connects to one RD server at a time. The client will disconnect when a connection to a new RD server is made, regardless of whether the connection attempt is successful or not.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@347`](#group__net__cord__lc_1ga7c35be1de655e733eaac059ccd76f796)            | Return values and error codes used by this module.
`enum `[`@348`](#group__net__cord__lc_1ga2a5937706f1724c8f06a0396bdc87855)            | RD lookup types.
`public int `[`cord_lc_rd_init`](#group__net__cord__lc_1ga24955e5c820c17ded9466abf542d5c62)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,void * buf,size_t maxlen,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Discover the lookup interfaces of a RD server.
`public ssize_t `[`cord_lc_raw`](#group__net__cord__lc_1ga417cf995f0097422380f3f8427f267bb)`(const `[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,unsigned content_format,unsigned lookup_type,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * result,size_t maxlen)`            | Raw lookup for registered resources/endpoints at a RD server.
`public ssize_t `[`_lookup_result`](#group__net__cord__lc_1ga119a686fc587eb6f618b2d77676054ad)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,`[`cord_lc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga7c4af49abfb90e41627cbf9b77bf59ae)` * result,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * buf,size_t maxlen,unsigned type)`            | Get one resource from RD server.
`public inline static ssize_t `[`cord_lc_res`](#group__net__cord__lc_1ga1c8285178cd7d1877ccd1c3ec92d2cf0)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,`[`cord_lc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga7c4af49abfb90e41627cbf9b77bf59ae)` * resource,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * buf,size_t maxlen)`            | Get one resource from RD server.
`public inline static ssize_t `[`cord_lc_ep`](#group__net__cord__lc_1ga5b7faacd77694322abd537b08be6acc3)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,`[`cord_lc_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1gacdd878279d8e993f010232680b164c16)` * endpoint,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * buf,size_t maxlen)`            | Get one endpoint from RD server.
`struct `[`cord_lc_rd_t`](#structcord__lc__rd__t) | Information about RD server and its lookup interface resources.
`struct `[`cord_lc_result`](#structcord__lc__result) | Result of lookup.
`struct `[`cord_lc_filter`](#structcord__lc__filter) | Filters to use for a lookup.

## Members

#### `enum `[`@347`](#group__net__cord__lc_1ga7c35be1de655e733eaac059ccd76f796) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CORD_LC_OK            | everything went as expected
CORD_LC_TIMEOUT            | no response from the network
CORD_LC_ERR            | internal error or invalid reply
CORD_LC_OVERFLOW            | internal buffers can not handle input
CORD_LC_NORSC            | lookup interface not found

Return values and error codes used by this module.

#### `enum `[`@348`](#group__net__cord__lc_1ga2a5937706f1724c8f06a0396bdc87855) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CORD_LC_RES            | Resource lookup type.
CORD_LC_EP            | Endpoint lookup type.

RD lookup types.

#### `public int `[`cord_lc_rd_init`](#group__net__cord__lc_1ga24955e5c820c17ded9466abf542d5c62)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,void * buf,size_t maxlen,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Discover the lookup interfaces of a RD server.

#### Parameters
* `rd` Information about RD server at `remote`

* `buf` Buffer to store found lookup interfaces 

* `maxlen` Maximum memory available at `lookif`

* `remote` Remote endpoint of RD server

#### Returns
bytes used on success 

#### Returns
CORD_LC_TIMEOUT if the discovery request times out 

#### Returns
CORD_LC_NORSC if no lookup interfaces found for all types of lookups 

#### Returns
CORD_LC_OVERFLOW if not enough memory available for result 

#### Returns
CORD_LC_ERR on any other internal error

#### `public ssize_t `[`cord_lc_raw`](#group__net__cord__lc_1ga417cf995f0097422380f3f8427f267bb)`(const `[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,unsigned content_format,unsigned lookup_type,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * result,size_t maxlen)` 

Raw lookup for registered resources/endpoints at a RD server.

To specify the number of resources/endpoints to search for, `count` and `page` attributes can be used as the filter. If the same filter used multiple times with different values, only the last filter will be applied.

Content format (e.g. link-format, coral) must be set through filters. If none defined, link-format will be used.

#### Parameters
* `rd` RD server to query 

* `content_format` Data format wanted from RD server 

* `lookup_type` Lookup type to use 

* `filters` Filters for the lookup. Can be NULL. 

* `result` Buffer holding the raw response 

* `maxlen` Max length of `result`

#### Returns
bytes used on success 

#### Returns
CORD_LC_NORSC if there is no lookup interface for `lookup_type` at `rd`

#### Returns
CORD_LC_TIMEOUT if lookup timed out 

#### Returns
CORD_LC_OVERFLOW if not enough memory available for result 

#### Returns
CORD_LC_ERR on any other internal error

#### `public ssize_t `[`_lookup_result`](#group__net__cord__lc_1ga119a686fc587eb6f618b2d77676054ad)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,`[`cord_lc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga7c4af49abfb90e41627cbf9b77bf59ae)` * result,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * buf,size_t maxlen,unsigned type)` 

Get one resource from RD server.

Gets only one resource from specified RD server each time called. Can be called iteratively to get all the resources on the server. If there is no more resource on the server, it will return CORD_LC_NORSC.

#### Parameters
* `rd` RD server to query 

* `result` Result link 

* `filters` Filters for the lookup 

* `buf` Result buffer 

* `maxlen` Maximum memory available at `buf`

* `type` Type of resource to query either CORD_LC_EP or CORD_LC_RES

#### Returns
bytes used on success 

#### Returns
CORD_LC_INVALIF if the resource lookup interface at `rd` is invalid 

#### Returns
CORD_LC_NORSC if there is no resource (anymore) at `rd`

#### Returns
CORD_LC_TIMEOUT if lookup timed out 

#### Returns
CORD_LC_OVERFLOW if not enough memory available for result 

#### Returns
CORD_LC_ERR on any other internal error

#### `public inline static ssize_t `[`cord_lc_res`](#group__net__cord__lc_1ga1c8285178cd7d1877ccd1c3ec92d2cf0)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,`[`cord_lc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga7c4af49abfb90e41627cbf9b77bf59ae)` * resource,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * buf,size_t maxlen)` 

Get one resource from RD server.

Gets only one resource from specified RD server each time called. Can be called iteratively to get all the resources on the server. If there is no more resource on the server, it will return CORD_LC_NORSC.

#### Parameters
* `rd` RD server to query 

* `resource` Resource link 

* `filters` Filters for the lookup 

* `buf` Result buffer 

* `maxlen` Maximum memory available at `buf`

#### Returns
bytes used on success 

#### Returns
CORD_LC_INVALIF if the resource lookup interface at `rd` is invalid 

#### Returns
CORD_LC_NORSC if there is no resource (anymore) at `rd`

#### Returns
CORD_LC_TIMEOUT if lookup timed out 

#### Returns
CORD_LC_OVERFLOW if not enough memory available for result 

#### Returns
CORD_LC_ERR on any other internal error

#### `public inline static ssize_t `[`cord_lc_ep`](#group__net__cord__lc_1ga5b7faacd77694322abd537b08be6acc3)`(`[`cord_lc_rd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_cord_lc.md#structcord__lc__rd__t)` * rd,`[`cord_lc_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1gacdd878279d8e993f010232680b164c16)` * endpoint,`[`cord_lc_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__lc_1ga9b20dd477e8662328c34d678b2c1c570)` * filters,void * buf,size_t maxlen)` 

Get one endpoint from RD server.

Gets only one endpoint from specified RD server each time called. Can be called iteratively to get all the endpoints on the server. If there is no more endpoint on the server, it will return CORD_LC_NORSC.

#### Parameters
* `rd` RD server to query 

* `endpoint` Resource link 

* `filters` Filters for the lookup 

* `buf` Result buffer 

* `maxlen` Maximum memory available at `buf`

#### Returns
bytes used on success 

#### Returns
CORD_LC_INVALIF if the endpoint lookup interface at `rd` is invalid 

#### Returns
CORD_LC_NORSC if there is no endpoints (anymore) at `rd`

#### Returns
CORD_LC_TIMEOUT if lookup timed out 

#### Returns
CORD_LC_OVERFLOW if not enough memory available for result 

#### Returns
CORD_LC_ERR on any other internal error

# struct `cord_lc_rd_t` 

Information about RD server and its lookup interface resources.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`remote`](#structcord__lc__rd__t_1a96774f0334ecb0e81b1ff620a81a1fec) | Remote endpoint of RD server.
`public char * `[`res_lookif`](#structcord__lc__rd__t_1ab1ea14fd1c0ab4184a6105c258fe29a3) | Resource lookup interface.
`public char * `[`ep_lookif`](#structcord__lc__rd__t_1ad081ed630748e3df48f856660d77bc53) | Endpoint lookup interface.
`public unsigned `[`res_last_page`](#structcord__lc__rd__t_1a20152ce84f1b60ee48cb954fd11a65d4) | Page of last resource lookup.
`public unsigned `[`ep_last_page`](#structcord__lc__rd__t_1abde3d06b339f8558f288c52dc175fd3f) | Page of last endpoint lookup.

## Members

#### `public const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`remote`](#structcord__lc__rd__t_1a96774f0334ecb0e81b1ff620a81a1fec) 

Remote endpoint of RD server.

#### `public char * `[`res_lookif`](#structcord__lc__rd__t_1ab1ea14fd1c0ab4184a6105c258fe29a3) 

Resource lookup interface.

#### `public char * `[`ep_lookif`](#structcord__lc__rd__t_1ad081ed630748e3df48f856660d77bc53) 

Endpoint lookup interface.

#### `public unsigned `[`res_last_page`](#structcord__lc__rd__t_1a20152ce84f1b60ee48cb954fd11a65d4) 

Page of last resource lookup.

#### `public unsigned `[`ep_last_page`](#structcord__lc__rd__t_1abde3d06b339f8558f288c52dc175fd3f) 

Page of last endpoint lookup.

# struct `cord_lc_result` 

Result of lookup.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t)` `[`link`](#structcord__lc__result_1ac79df0a44db9cd74b8e841a9ae36842c) | Resource link.
`public `[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * `[`attrs`](#structcord__lc__result_1a6d1051e2f50bf80567bddd09e928dde8) | Array of Link Format parameters.
`public size_t `[`max_attrs`](#structcord__lc__result_1a66ed434cf88c2998dde79e345d382374) | Max parameters at `params`.

## Members

#### `public `[`clif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t)` `[`link`](#structcord__lc__result_1ac79df0a44db9cd74b8e841a9ae36842c) 

Resource link.

#### `public `[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * `[`attrs`](#structcord__lc__result_1a6d1051e2f50bf80567bddd09e928dde8) 

Array of Link Format parameters.

#### `public size_t `[`max_attrs`](#structcord__lc__result_1a66ed434cf88c2998dde79e345d382374) 

Max parameters at `params`.

# struct `cord_lc_filter` 

Filters to use for a lookup.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * `[`array`](#structcord__lc__filter_1a49055624f6e7c805d8241288618f81c3) | Array of filter(s)
`public size_t `[`len`](#structcord__lc__filter_1a0bb02e00c3206192c51d3b58dfe60004) | No.
`public struct `[`cord_lc_filter`](#structcord__lc__filter)` * `[`next`](#structcord__lc__filter_1a012fe326ff35416c14e67bb7dce73c6e) | Next set of filters.

## Members

#### `public `[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * `[`array`](#structcord__lc__filter_1a49055624f6e7c805d8241288618f81c3) 

Array of filter(s)

#### `public size_t `[`len`](#structcord__lc__filter_1a0bb02e00c3206192c51d3b58dfe60004) 

No.

of filters at `array`

#### `public struct `[`cord_lc_filter`](#structcord__lc__filter)` * `[`next`](#structcord__lc__filter_1a012fe326ff35416c14e67bb7dce73c6e) 

Next set of filters.

