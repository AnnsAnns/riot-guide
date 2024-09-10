---
title: api-net_sock_util.md
description: api-net_sock_util.md
---
# group `net_sock_util` 

sock utility function

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sock_tl_ep_fmt`](#group__net__sock__util_1ga893a8b109c0bf63140c552079637979c)`(const struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * endpoint,char * addr_str,uint16_t * port)`            | Format common IP-based transport layer endpoint to string and port.
`public inline static int `[`sock_tcp_ep_fmt`](#group__net__sock__util_1ga16f400aa9b1effd50cc6b417c76db7b4)`(const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * endpoint,char * addr_str,uint16_t * port)`            | Format TCP endpoint to string and port.
`public inline static int `[`sock_udp_ep_fmt`](#group__net__sock__util_1ga773cc2884544fb2121fed14edf0a31ff)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * endpoint,char * addr_str,uint16_t * port)`            | Format UDP endpoint to string and port.
`public int `[`sock_urlsplit`](#group__net__sock__util_1ga8aaf86cf785fe7b51ea90c495ba354a6)`(const char * url,char * hostport,char * urlpath)`            | Split url to host:port and url path.
`public const char * `[`sock_urlpath`](#group__net__sock__util_1ga05a9d44db342155c49680284d1699f29)`(const char * url)`            | Returns a pointer to the path component in `url`.
`public int `[`sock_tl_str2ep`](#group__net__sock__util_1ga1c1471483f0602717719b4b7d83ac591)`(struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * ep_out,const char * str)`            | Convert string to common IP-based transport layer endpoint.
`public int `[`sock_tl_name2ep`](#group__net__sock__util_1ga5c7720200f8363e79fa6bad0d551bf86)`(struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * ep_out,const char * str)`            | Convert string to common IP-based transport layer endpoint If the `sock_dns` module is used, this will do a DNS lookup if `str` is not an IP address.
`public inline static int `[`sock_tcp_str2ep`](#group__net__sock__util_1gaa83b329920a2d141ac2f17adb6bbf5ad)`(`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep_out,const char * str)`            | Convert string to TCP endpoint.
`public inline static int `[`sock_tcp_name2ep`](#group__net__sock__util_1gae3f121dcefd5f782fb25b5fccb0a6d4c)`(`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep_out,const char * str)`            | Convert string to TCP endpoint If the `sock_dns` module is used, this will do a DNS lookup if `str` is not an IP address.
`public inline static int `[`sock_udp_str2ep`](#group__net__sock__util_1gac069478954fde9632e20bbfc84e85493)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep_out,const char * str)`            | Convert string to UDP endpoint.
`public inline static int `[`sock_udp_name2ep`](#group__net__sock__util_1ga24f9ddccad0938fc478c6dbceacfcf39)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep_out,const char * str)`            | Convert string to UDP endpoint If the `sock_dns` module is used, this will do a DNS lookup if `str` is not an IP address.
`public bool `[`sock_tl_ep_equal`](#group__net__sock__util_1ga13e6bb67ca49ebe28feb21f93328d3cf)`(const struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * a,const struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * b)`            | Compare the two given common IP-based transport layer endpoints.
`public inline static bool `[`sock_tcp_ep_equal`](#group__net__sock__util_1gab12a788006a924df09f49b910cacc3c0)`(const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * a,const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * b)`            | Compare the two given TCP endpoints.
`public inline static bool `[`sock_udp_ep_equal`](#group__net__sock__util_1ga523f8321bb63ca0f8df393d3dd438939)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * a,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * b)`            | Compare the two given UDP endpoints.
`public int `[`sock_dtls_establish_session`](#group__net__sock__util_1ga883f963cb4cd43170077c7cc52ae8381)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock_udp,`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock_dtls,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,void * work_buf,size_t work_buf_len)`            | Helper function to establish a DTLS connection.

## Members

#### `public int `[`sock_tl_ep_fmt`](#group__net__sock__util_1ga893a8b109c0bf63140c552079637979c)`(const struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * endpoint,char * addr_str,uint16_t * port)` 

Format common IP-based transport layer endpoint to string and port.

#### Parameters
* `endpoint` endpoint to format 

* `addr_str` where to write address as string 

* `port` where to write port number as uint16_t

#### Returns
number of bytes written to `addr_str` on success 

#### Returns
<0 otherwise

#### `public inline static int `[`sock_tcp_ep_fmt`](#group__net__sock__util_1ga16f400aa9b1effd50cc6b417c76db7b4)`(const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * endpoint,char * addr_str,uint16_t * port)` 

Format TCP endpoint to string and port.

#### Parameters
* `endpoint` endpoint to format 

* `addr_str` where to write address as string 

* `port` where to write port number as uint16_t

#### Returns
number of bytes written to `addr_str` on success 

#### Returns
<0 otherwise

#### `public inline static int `[`sock_udp_ep_fmt`](#group__net__sock__util_1ga773cc2884544fb2121fed14edf0a31ff)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * endpoint,char * addr_str,uint16_t * port)` 

Format UDP endpoint to string and port.

#### Parameters
* `endpoint` endpoint to format 

* `addr_str` where to write address as string 

* `port` where to write port number as uint16_t

#### Returns
number of bytes written to `addr_str` on success 

#### Returns
<0 otherwise

#### `public int `[`sock_urlsplit`](#group__net__sock__util_1ga8aaf86cf785fe7b51ea90c495ba354a6)`(const char * url,char * hostport,char * urlpath)` 

Split url to host:port and url path.

Will split e.g., "https://host.name:1234/url/path" into "host.name:1234" and "/url/path".

Caller has to make sure hostport and urlpath can hold the results! Make sure to provide space for [CONFIG_SOCK_HOSTPORT_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util__conf_1gae3f60c29bd322f00e3638ad293fad50b) respectively [CONFIG_SOCK_URLPATH_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util__conf_1gad90280b1a26f189c13b65400ae14af37) bytes, if pointers are not NULL. Scheme part of the URL is limited to [CONFIG_SOCK_SCHEME_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util__conf_1ga51c1e9e5482c6143c66e75cc0018f196) length.

`url != NULL`

#### Parameters
* `url` URL to split. Must not be NULL. 

* `hostport` where to write host:port. Can be NULL. 

* `urlpath` where to write url path. Can be NULL.

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public const char * `[`sock_urlpath`](#group__net__sock__util_1ga05a9d44db342155c49680284d1699f29)`(const char * url)` 

Returns a pointer to the path component in `url`.

#### Parameters
* `url` URL to examine. Must not be NULL.

#### Returns
pointer to the start of the path component in `url`

#### Returns
NULL if `url` is invalid

#### `public int `[`sock_tl_str2ep`](#group__net__sock__util_1ga1c1471483f0602717719b4b7d83ac591)`(struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * ep_out,const char * str)` 

Convert string to common IP-based transport layer endpoint.

Takes eg., "[2001:db8::1]:1234" and converts it into the corresponding UDP endpoint structure.

#### Parameters
* `ep_out` endpoint structure to fill 

* `str` string to read from

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public int `[`sock_tl_name2ep`](#group__net__sock__util_1ga5c7720200f8363e79fa6bad0d551bf86)`(struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * ep_out,const char * str)` 

Convert string to common IP-based transport layer endpoint If the `sock_dns` module is used, this will do a DNS lookup if `str` is not an IP address.

Takes eg., "riot-os.org:1234" and converts it into the corresponding endpoint structure.

#### Parameters
* `ep_out` endpoint structure to fill 

* `str` string to read from

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public inline static int `[`sock_tcp_str2ep`](#group__net__sock__util_1gaa83b329920a2d141ac2f17adb6bbf5ad)`(`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep_out,const char * str)` 

Convert string to TCP endpoint.

Takes eg., "[2001:db8::1]:1234" and converts it into the corresponding UDP endpoint structure.

#### Parameters
* `ep_out` endpoint structure to fill 

* `str` string to read from

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public inline static int `[`sock_tcp_name2ep`](#group__net__sock__util_1gae3f121dcefd5f782fb25b5fccb0a6d4c)`(`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep_out,const char * str)` 

Convert string to TCP endpoint If the `sock_dns` module is used, this will do a DNS lookup if `str` is not an IP address.

Takes eg., "exampl.com:80" or "[2001:db8::1]:1234" and converts it into the corresponding UDP endpoint structure.

#### Parameters
* `ep_out` endpoint structure to fill 

* `str` string to read from

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public inline static int `[`sock_udp_str2ep`](#group__net__sock__util_1gac069478954fde9632e20bbfc84e85493)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep_out,const char * str)` 

Convert string to UDP endpoint.

Takes eg., "[2001:db8::1]:1234" and converts it into the corresponding UDP endpoint structure.

#### Parameters
* `ep_out` endpoint structure to fill 

* `str` string to read from

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public inline static int `[`sock_udp_name2ep`](#group__net__sock__util_1ga24f9ddccad0938fc478c6dbceacfcf39)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep_out,const char * str)` 

Convert string to UDP endpoint If the `sock_dns` module is used, this will do a DNS lookup if `str` is not an IP address.

Takes eg., "exampl.com:80" or "[2001:db8::1]:1234" and converts it into the corresponding UDP endpoint structure.

#### Parameters
* `ep_out` endpoint structure to fill 

* `str` string to read from

#### Returns
0 on success 

#### Returns
<0 otherwise

#### `public bool `[`sock_tl_ep_equal`](#group__net__sock__util_1ga13e6bb67ca49ebe28feb21f93328d3cf)`(const struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * a,const struct `[`_sock_tl_ep`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep)` * b)` 

Compare the two given common IP-based transport layer endpoints.

The given endpoint identifiers are compared by checking their address family, their addresses, and their port value.

#### Parameters
* `a` Endpoint A 

* `b` Endpoint B

#### Returns
true if given endpoint identifiers point to the same destination 

#### Returns
false if given endpoint identifiers do not point to the same destination, or if the address family is unknown

#### `public inline static bool `[`sock_tcp_ep_equal`](#group__net__sock__util_1gab12a788006a924df09f49b910cacc3c0)`(const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * a,const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * b)` 

Compare the two given TCP endpoints.

The given endpoint identifiers are compared by checking their address family, their addresses, and their port value.

#### Parameters
* `a` Endpoint A 

* `b` Endpoint B

#### Returns
true if given endpoint identifiers point to the same destination 

#### Returns
false if given endpoint identifiers do not point to the same destination, or if the address family is unknown

#### `public inline static bool `[`sock_udp_ep_equal`](#group__net__sock__util_1ga523f8321bb63ca0f8df393d3dd438939)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * a,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * b)` 

Compare the two given UDP endpoints.

The given endpoint identifiers are compared by checking their address family, their addresses, and their port value.

#### Parameters
* `a` Endpoint A 

* `b` Endpoint B

#### Returns
true if given endpoint identifiers point to the same destination 

#### Returns
false if given endpoint identifiers do not point to the same destination, or if the address family is unknown

#### `public int `[`sock_dtls_establish_session`](#group__net__sock__util_1ga883f963cb4cd43170077c7cc52ae8381)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock_udp,`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock_dtls,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,void * work_buf,size_t work_buf_len)` 

Helper function to establish a DTLS connection.

#### Parameters
* `[sock_udp](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__udp)` Struct to store the underlying UDP socket 

* `[sock_dtls](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsock__dtls)` Struct for the actual DTLS socket 

* `session` Struct to store DTLS session information 

* `tag` Credential tag to use 

* `local` Local endpoint, must not be NULL 

* `remote` Server endpoint to connect to 

* `work_buf` Buffer used to negotiate connection 

* `work_buf_len` Size of `work` buf. Should be at least 160 bytes for AES_128_CCM_8 with PSK

#### Returns
0 on success 

#### Returns
negative error otherwise (see [sock_dtls_recv_aux](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga91476f35b5ea85b789e19cb3fd256f42))

