---
title: api-net_sock_dodtls.md
description: api-net_sock_dodtls.md
---
# group `net_sock_dodtls` 

Sock DNS over DTLS client.

**See also**: [RFC 8094](https://datatracker.ietf.org/doc/html/rfc8094)

**This feature is experimental!**
 This implementation is in an experimental state. RFC 8094 requires DNS over TLS (DoT) as a fall-back for the [PMTU issues](https://datatracker.ietf.org/doc/html/rfc8094#section-5)). This fallback is not in place in this implementation. Consequently, [EDNS(0)](https://datatracker.ietf.org/doc/html/rfc6891) to negotiate maximum response size is also not in place.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sock_dodtls_query`](#group__net__sock__dodtls_1ga3e9fb31e4907dcffaa3718aac628fcb5)`(const char * domain_name,void * addr_out,int family)`            | Get IP address for DNS name.
`public int `[`sock_dodtls_get_server`](#group__net__sock__dodtls_1ga85d3b14a5f75ee0efd6dd7d5283bde5b)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server)`            | Get currently configured DNS over DTLS server endpoint.
`public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * `[`sock_dodtls_get_dtls_sock`](#group__net__sock__dodtls_1ga548e02abf8648d092338ea6db19f9953)`(void)`            | Return the sock used by the DNS over DTLS client.
`public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * `[`sock_dodtls_get_server_session`](#group__net__sock__dodtls_1ga3e9f23e1933f86f3230c0893c06df577)`(void)`            | Return the DTLS ssession used by the DNS over DTLS client.
`public int `[`sock_dodtls_set_server`](#group__net__sock__dodtls_1ga2311e49c94c78b8aefff845e7219a66c)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server,const `[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * creds)`            | Configure and establish session with DNS over DTLS server.

## Members

#### `public int `[`sock_dodtls_query`](#group__net__sock__dodtls_1ga3e9fb31e4907dcffaa3718aac628fcb5)`(const char * domain_name,void * addr_out,int family)` 

Get IP address for DNS name.

This function will synchronously try to resolve a DNS A or AAAA record by contacting the DNS server specified in the global variable [sock_dns_server](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns_1ga99ea302f97897ac95d47f1cb83b2ac91).

By supplying AF_INET, AF_INET6 or AF_UNSPEC in `family` requesting of A records (IPv4), AAAA records (IPv6) or both can be selected.

This function will return the first DNS record it receives. IF both A and AAAA are requested, AAAA will be preferred.

`addr_out` needs to provide space for any possible result! (4byte when family==AF_INET, 16byte otherwise)

#### Parameters
* `domain_name` DNS name to resolve into address 

* `addr_out` buffer to write result into 

* `family` Either AF_INET, AF_INET6 or AF_UNSPEC

#### Returns
the size of the resolved address on success 

#### Returns
-ECONNREFUSED, when a DNS over DTLS server is not configured. 

#### Returns
-ENOSPC, when the length of `domain_name` is greater than [SOCK_DODTLS_MAX_NAME_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dodtls__conf_1ga3bf2261b6c618389f16bc1fc5e513b14). 

#### Returns
-EBADSG, when the DNS reply is not parseable.

#### `public int `[`sock_dodtls_get_server`](#group__net__sock__dodtls_1ga85d3b14a5f75ee0efd6dd7d5283bde5b)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server)` 

Get currently configured DNS over DTLS server endpoint.

#### Parameters
* `server` The currently configured DNS over DTLS server endpoint. May not be NULL on input.

#### Returns
0 if `server` was set. 

#### Returns
-ENOTCONN, when currently no server is configured.

#### `public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * `[`sock_dodtls_get_dtls_sock`](#group__net__sock__dodtls_1ga548e02abf8648d092338ea6db19f9953)`(void)` 

Return the sock used by the DNS over DTLS client.

#### Returns
The sock used by the DNS over DTLS client

#### `public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * `[`sock_dodtls_get_server_session`](#group__net__sock__dodtls_1ga3e9f23e1933f86f3230c0893c06df577)`(void)` 

Return the DTLS ssession used by the DNS over DTLS client.

#### Returns
The DTLS session used by the DNS over DTLS client

#### `public int `[`sock_dodtls_set_server`](#group__net__sock__dodtls_1ga2311e49c94c78b8aefff845e7219a66c)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server,const `[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * creds)` 

Configure and establish session with DNS over DTLS server.

#### Parameters
* `server` A DNS over DTLS server endpoint. May be NULL to destroy the session with and unset the currently configured server. 

* `creds` DTLS credentials for the server (see [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman)). May be NULL, when `server` is also NULL.

#### Returns
0 on success. 

#### Returns
-EINVAL, if `cred` contains invalid values. 

#### Returns
-ENOSPC, if `cred` does not fit into [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman). 

#### Returns
Any other negative errno potentially returned by [sock_udp_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga20fa4b890dff1c97a63075090e6f9d7d), [sock_dtls_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682), [sock_dtls_session_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga6ebde4fba6fd184710d1ec1c6285e7a2) or [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69).

