---
title: api-sys_uri_parser.md
description: api-sys_uri_parser.md
---
# group `sys_uri_parser` 

A minimal, non-destructive parser for URI references.

This module acts on URI references, and thus process both relative references and URIs.

Note that fragment identifiers are not handled by the implementation.

**See also**: [https://tools.ietf.org/html/rfc3986](https://tools.ietf.org/html/rfc3986)

Handler functions for uri_parser Cenk Gündoğan [cenk.guendogan@haw-hamburg.de](mailto:cenk.guendogan@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`uri_parser_is_absolute`](#group__sys__uri__parser_1gafd24e49920b50f2b497e08741c49eec9)`(const char * uri,size_t uri_len)`            | Checks whether `uri` is in absolute form.
`public bool `[`uri_parser_is_absolute_string`](#group__sys__uri__parser_1gaf4a8cc43860021dc3d687eaa2819ea8e)`(const char * uri)`            | Checks whether `uri` is in absolute form.
`public int `[`uri_parser_process`](#group__sys__uri__parser_1ga75b5c66965f3451eefb274569ce1147b)`(`[`uri_parser_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t)` * result,const char * uri,size_t uri_len)`            | Parse a URI reference.
`public int `[`uri_parser_process_string`](#group__sys__uri__parser_1ga4876944783543416891f67c5457c4c97)`(`[`uri_parser_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t)` * result,const char * uri)`            | Parse a URI reference.
`public int `[`uri_parser_split_query`](#group__sys__uri__parser_1gad370292728b0290311388894bb7d2342)`(const `[`uri_parser_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t)` * uri_parsed,`[`uri_parser_query_param_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t)` * params,size_t params_len)`            | Provides a list of URI query parameters from a given URI parser result.
`struct `[`uri_parser_result_t`](#structuri__parser__result__t) | container that holds all results
`struct `[`uri_parser_query_param_t`](#structuri__parser__query__param__t) | Container to represent a query parameter.

## Members

#### `public bool `[`uri_parser_is_absolute`](#group__sys__uri__parser_1gafd24e49920b50f2b497e08741c49eec9)`(const char * uri,size_t uri_len)` 

Checks whether `uri` is in absolute form.

#### Parameters
* `uri` URI reference to check. Must not be `NULL`

* `uri_len` Length of `uri`

`uri != NULL`

#### Returns
true if `uri` is a URI 

#### Returns
false if `uri` is a relative reference

#### `public bool `[`uri_parser_is_absolute_string`](#group__sys__uri__parser_1gaf4a8cc43860021dc3d687eaa2819ea8e)`(const char * uri)` 

Checks whether `uri` is in absolute form.

#### Parameters
* `uri` Zero-terminated URI reference to check. Must not be `Null`

`uri != NULL`

#### Returns
true if `uri` is a URI 

#### Returns
false if `uri` is a relative reference

#### `public int `[`uri_parser_process`](#group__sys__uri__parser_1ga75b5c66965f3451eefb274569ce1147b)`(`[`uri_parser_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t)` * result,const char * uri,size_t uri_len)` 

Parse a URI reference.

#### Parameters
* `result` pointer to a container that will hold the result 

* `uri` URI to parse. Must not be `NULL`

* `uri_len` Length of `uri`

`uri != NULL`

#### Returns
0 on success 

#### Returns
-1 on parsing error

#### `public int `[`uri_parser_process_string`](#group__sys__uri__parser_1ga4876944783543416891f67c5457c4c97)`(`[`uri_parser_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t)` * result,const char * uri)` 

Parse a URI reference.

#### Parameters
* `result` pointer to a container that will hold the result 

* `uri` Zero-terminated URI to parse. Must not be `NULL`

`uri != NULL`

#### Returns
0 on success 

#### Returns
-1 on parsing error

#### `public int `[`uri_parser_split_query`](#group__sys__uri__parser_1gad370292728b0290311388894bb7d2342)`(const `[`uri_parser_result_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t)` * uri_parsed,`[`uri_parser_query_param_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t)` * params,size_t params_len)` 

Provides a list of URI query parameters from a given URI parser result.

The function **DOES NOT** check for duplicate query parameters.

`uri_parsed != NULL`

`params != NULL` and all its elements are set to zero.

#### Parameters
* `uri_parsed` A parsed URI result. Must not be NULL. 

* `params` An array of [uri_parser_query_param_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t). Must not be NULL and all zero-valued on call. Will be filled with the name-value-pairs in [uri_parser_result_t::query](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c) of `uri_parsed`. If the number of query parameters in `uri_parsed` exceeds `params_len`, the list will be truncated and the function returns -2. 

* `params_len` The length of `params`

#### Returns
number of filled entries in `params` on success. Might be 0 if [uri_parser_result_t::query](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c) is NULL. 

#### Returns
-1 on parsing error. 

#### Returns
-2 when the number of query parameters exceeds `params_len`. In that case, the array is filled with the first `params_len` name-value-pairs in [uri_parser_result_t::query](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c) of `uri_parsed`.

# struct `uri_parser_result_t` 

container that holds all results

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`scheme`](#structuri__parser__result__t_1a017d5ff36127167ec60ee6ee254ee2fa) | scheme
`public const char * `[`userinfo`](#structuri__parser__result__t_1a2a963c5b4fc56996e2c1024f3c68f361) | userinfo
`public const char * `[`host`](#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) | host part
`public const char * `[`ipv6addr`](#structuri__parser__result__t_1ae8cf38311f4582d339524603fe0f4105) | Pointer to the start of the address, if [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) is an IPv6 address and NULL otherwise.
`public const char * `[`zoneid`](#structuri__parser__result__t_1ac0f9b1556af4806f15a9a85a4beea761) | zoneid if [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) is IPv6 address, NULL otherwise
`public const char * `[`port_str`](#structuri__parser__result__t_1a875ed730e095223aaae4cb786bced5ca) | port as str
`public const char * `[`path`](#structuri__parser__result__t_1ab95f3a39b5110a9d318b435206a8c2bf) | path
`public const char * `[`query`](#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c) | query
`public uint16_t `[`port`](#structuri__parser__result__t_1a999d3641eb320b3714f8a383d97adc5a) | port as uint16_t
`public uint16_t `[`scheme_len`](#structuri__parser__result__t_1a0102a05b60801ee5f03f8cc7fbc960f9) | length of [scheme](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a017d5ff36127167ec60ee6ee254ee2fa)
`public uint16_t `[`userinfo_len`](#structuri__parser__result__t_1a36f00aa15d0ad2d995a817db208fe7a3) | length of [userinfo](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a2a963c5b4fc56996e2c1024f3c68f361)
`public uint16_t `[`host_len`](#structuri__parser__result__t_1ae89f1b565ff75a1406d4071ca17a8b35) | length of [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e)
`public uint16_t `[`ipv6addr_len`](#structuri__parser__result__t_1a8595922ba848a921442d72fb29940fc5) | length of [ipv6addr](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ae8cf38311f4582d339524603fe0f4105)
`public uint16_t `[`zoneid_len`](#structuri__parser__result__t_1a062814ef7261afd64007aad39f2d68da) | length of [zoneid](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ac0f9b1556af4806f15a9a85a4beea761)
`public uint16_t `[`port_str_len`](#structuri__parser__result__t_1a540b59383376bb2dd13b3fff838dc68f) | length of [port_str](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a875ed730e095223aaae4cb786bced5ca)
`public uint16_t `[`path_len`](#structuri__parser__result__t_1a228b45249254745ecf61e6d5f0c6850d) | length of [path](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ab95f3a39b5110a9d318b435206a8c2bf)
`public uint16_t `[`query_len`](#structuri__parser__result__t_1a4f155d5a5a202c097a5014edacf043fc) | length of [query](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c)

## Members

#### `public const char * `[`scheme`](#structuri__parser__result__t_1a017d5ff36127167ec60ee6ee254ee2fa) 

scheme

#### `public const char * `[`userinfo`](#structuri__parser__result__t_1a2a963c5b4fc56996e2c1024f3c68f361) 

userinfo

#### `public const char * `[`host`](#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) 

host part

for IPv6 addresses, [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) also includes the brackets '[' and ']' as well as the zoneid (with leading ''), if present.

#### `public const char * `[`ipv6addr`](#structuri__parser__result__t_1ae8cf38311f4582d339524603fe0f4105) 

Pointer to the start of the address, if [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) is an IPv6 address and NULL otherwise.

[ipv6addr](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ae8cf38311f4582d339524603fe0f4105) does not include the brackets '[' and ']' and the zoneid part.

#### `public const char * `[`zoneid`](#structuri__parser__result__t_1ac0f9b1556af4806f15a9a85a4beea761) 

zoneid if [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e) is IPv6 address, NULL otherwise

**See also**: [https://tools.ietf.org/html/rfc6874](https://tools.ietf.org/html/rfc6874)

#### `public const char * `[`port_str`](#structuri__parser__result__t_1a875ed730e095223aaae4cb786bced5ca) 

port as str

#### `public const char * `[`path`](#structuri__parser__result__t_1ab95f3a39b5110a9d318b435206a8c2bf) 

path

#### `public const char * `[`query`](#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c) 

query

#### `public uint16_t `[`port`](#structuri__parser__result__t_1a999d3641eb320b3714f8a383d97adc5a) 

port as uint16_t

#### `public uint16_t `[`scheme_len`](#structuri__parser__result__t_1a0102a05b60801ee5f03f8cc7fbc960f9) 

length of [scheme](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a017d5ff36127167ec60ee6ee254ee2fa)

#### `public uint16_t `[`userinfo_len`](#structuri__parser__result__t_1a36f00aa15d0ad2d995a817db208fe7a3) 

length of [userinfo](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a2a963c5b4fc56996e2c1024f3c68f361)

#### `public uint16_t `[`host_len`](#structuri__parser__result__t_1ae89f1b565ff75a1406d4071ca17a8b35) 

length of [host](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a257ca5000f0dafa9449a2b9bb2aa533e)

#### `public uint16_t `[`ipv6addr_len`](#structuri__parser__result__t_1a8595922ba848a921442d72fb29940fc5) 

length of [ipv6addr](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ae8cf38311f4582d339524603fe0f4105)

#### `public uint16_t `[`zoneid_len`](#structuri__parser__result__t_1a062814ef7261afd64007aad39f2d68da) 

length of [zoneid](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ac0f9b1556af4806f15a9a85a4beea761)

#### `public uint16_t `[`port_str_len`](#structuri__parser__result__t_1a540b59383376bb2dd13b3fff838dc68f) 

length of [port_str](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a875ed730e095223aaae4cb786bced5ca)

#### `public uint16_t `[`path_len`](#structuri__parser__result__t_1a228b45249254745ecf61e6d5f0c6850d) 

length of [path](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1ab95f3a39b5110a9d318b435206a8c2bf)

#### `public uint16_t `[`query_len`](#structuri__parser__result__t_1a4f155d5a5a202c097a5014edacf043fc) 

length of [query](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__result__t_1a39a2b6ca48518b155deb9d8dc51e719c)

# struct `uri_parser_query_param_t` 

Container to represent a query parameter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structuri__parser__query__param__t_1a88a325e6299d9910a36f79e7b81063a3) | name of the query parameter
`public const char * `[`value`](#structuri__parser__query__param__t_1a3edd902258e49999a7115f542d33cd74) | value of the query parameter
`public uint16_t `[`name_len`](#structuri__parser__query__param__t_1ac3b839514da781893263e911a85bab12) | length of [name](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t_1a88a325e6299d9910a36f79e7b81063a3)
`public uint16_t `[`value_len`](#structuri__parser__query__param__t_1ad618a29df8b71e7c52032ba4c288868c) | length of [value](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t_1a3edd902258e49999a7115f542d33cd74)

## Members

#### `public const char * `[`name`](#structuri__parser__query__param__t_1a88a325e6299d9910a36f79e7b81063a3) 

name of the query parameter

#### `public const char * `[`value`](#structuri__parser__query__param__t_1a3edd902258e49999a7115f542d33cd74) 

value of the query parameter

#### `public uint16_t `[`name_len`](#structuri__parser__query__param__t_1ac3b839514da781893263e911a85bab12) 

length of [name](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t_1a88a325e6299d9910a36f79e7b81063a3)

#### `public uint16_t `[`value_len`](#structuri__parser__query__param__t_1ad618a29df8b71e7c52032ba4c288868c) 

length of [value](./doc/starlight-docs/src/content/docs/apidoc/api-sys_uri_parser.md#structuri__parser__query__param__t_1a3edd902258e49999a7115f542d33cd74)

