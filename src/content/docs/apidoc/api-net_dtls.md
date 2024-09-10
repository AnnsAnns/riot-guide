---
title: api-net_dtls.md
description: api-net_dtls.md
---
# group `net_dtls` 

DTLS support in RIOT.

**See also**: [RFC 6347 ](https://tools.ietf.org/html/rfc6347)

There are two ways of using DTLS in RIOT. First is directly using the third party libraries available offering DTLS implementation with the pkg system. Supported DTLS implementations are:

* [TinyDTLS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tinydtls)

* [WolfSSL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__wolfssl)

The other way of using DTLS is through the [DTLS sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls).

For further instructions, please refer to the corresponding page.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DTLS_PEER_MAX`](#group__net__dtls_1ga06081012304f9c126ec960a415516b93)            | The maximum number DTLS peers (i.e.

## Members

#### `define `[`CONFIG_DTLS_PEER_MAX`](#group__net__dtls_1ga06081012304f9c126ec960a415516b93) 

The maximum number DTLS peers (i.e.

sessions)

