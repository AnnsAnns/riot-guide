---
title: api-net_sock_util_conf.md
description: api-net_sock_util_conf.md
---
# group `net_sock_util_conf` 

sock utility configuration values

Kaspar Schleiser [kaspar@schleiser.de](mailto:kaspar@schleiser.de)

Hauke Petersen [hauke.petersen@fu-berlin.de](mailto:hauke.petersen@fu-berlin.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SOCK_SCHEME_MAXLEN`](#group__net__sock__util__conf_1ga51c1e9e5482c6143c66e75cc0018f196)            | maximum length of the scheme part for sock_urlsplit.
`define `[`CONFIG_SOCK_HOSTPORT_MAXLEN`](#group__net__sock__util__conf_1gae3f60c29bd322f00e3638ad293fad50b)            | maximum length of host:port part for [sock_urlsplit()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga8aaf86cf785fe7b51ea90c495ba354a6)
`define `[`CONFIG_SOCK_URLPATH_MAXLEN`](#group__net__sock__util__conf_1gad90280b1a26f189c13b65400ae14af37)            | maximum length path for [sock_urlsplit()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga8aaf86cf785fe7b51ea90c495ba354a6)
`define `[`CONFIG_SOCK_DTLS_TIMEOUT_MS`](#group__net__sock__util__conf_1gafeab84c4686e6384dc5648157dde0bca)            | Timeout in milliseconds for [sock_dtls_establish_session()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga883f963cb4cd43170077c7cc52ae8381)
`define `[`CONFIG_SOCK_DTLS_RETRIES`](#group__net__sock__util__conf_1gad8e315ea01c89ef1ce886e2f25333e59)            | Number of DTLS handshake retries for [sock_dtls_establish_session()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga883f963cb4cd43170077c7cc52ae8381)

## Members

#### `define `[`CONFIG_SOCK_SCHEME_MAXLEN`](#group__net__sock__util__conf_1ga51c1e9e5482c6143c66e75cc0018f196) 

maximum length of the scheme part for sock_urlsplit.

Ensures a hard limit on the string iterator

#### `define `[`CONFIG_SOCK_HOSTPORT_MAXLEN`](#group__net__sock__util__conf_1gae3f60c29bd322f00e3638ad293fad50b) 

maximum length of host:port part for [sock_urlsplit()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga8aaf86cf785fe7b51ea90c495ba354a6)

#### `define `[`CONFIG_SOCK_URLPATH_MAXLEN`](#group__net__sock__util__conf_1gad90280b1a26f189c13b65400ae14af37) 

maximum length path for [sock_urlsplit()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga8aaf86cf785fe7b51ea90c495ba354a6)

#### `define `[`CONFIG_SOCK_DTLS_TIMEOUT_MS`](#group__net__sock__util__conf_1gafeab84c4686e6384dc5648157dde0bca) 

Timeout in milliseconds for [sock_dtls_establish_session()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga883f963cb4cd43170077c7cc52ae8381)

#### `define `[`CONFIG_SOCK_DTLS_RETRIES`](#group__net__sock__util__conf_1gad8e315ea01c89ef1ce886e2f25333e59) 

Number of DTLS handshake retries for [sock_dtls_establish_session()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__util_1ga883f963cb4cd43170077c7cc52ae8381)

