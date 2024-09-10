---
title: api-net_gcoap_dns.md
description: api-net_gcoap_dns.md
---
# group `net_gcoap_dns` 

A DNS over CoAP client prototype based on gCoAP.

Enable [DNS over CoAP client implementation](#group__net__gcoap__dns).

DNS over CoAP allows a node to use a CoAP server to resolve DNS request, following [draft-ietf-core-dns-over-coap](https://datatracker.ietf.org/doc/draft-ietf-core-dns-over-coap/).

The `gcoap_dns` module does not replace the [sock_dns_query](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns_1ga508b47ec287a3846ca8f8fc2c0bbe9bd) function when built, and is not used as a back-end to [netutils_get_ipv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__utils_1ga602ddb0b10821c5e6ae592abca644fdb) automatically. It does, however, provide a drop-in replacement for [sock_dns_query](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns_1ga508b47ec287a3846ca8f8fc2c0bbe9bd) in its [gcoap_dns_query](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap__dns_1gaadb30532f0d6ed65b528df575e05ab9f) function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gcoap_dns_query`](#group__net__gcoap__dns_1gaadb30532f0d6ed65b528df575e05ab9f)`(const char * domain_name,void * addr_out,int family)`            | Query a domain name via CoAP synchronously.
`public int `[`gcoap_dns_server_uri_set`](#group__net__gcoap__dns_1gac86d1963fadee9385dce0f1463d4fbf6)`(const char * uri)`            | Sets and checks a URI for a DoC server.
`public bool `[`gcoap_dns_server_uri_is_set`](#group__net__gcoap__dns_1ga3c508b439095e29b2c7fb540408050ea)`(void)`            | Checks if the URI for the DoC server is set.
`public ssize_t `[`gcoap_dns_server_uri_get`](#group__net__gcoap__dns_1ga82129a1e6a6d64d63d16d29bf5e611e0)`(char * uri,size_t uri_len)`            | Gets the URI for the DoC server.
`public void `[`gcoap_dns_cred_reset`](#group__net__gcoap__dns_1gafb92a4faab33919e700ec779e95a66ae)`(void)`            | Deletes all added credentials.
`public int `[`gcoap_dns_cred_add`](#group__net__gcoap__dns_1ga47fef7e608bf9c84b877b6026719dd7c)`(`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * creds)`            | Adds a credential for the use with the configured DoC server.
`public void `[`gcoap_dns_cred_remove`](#group__net__gcoap__dns_1gae33c8e7f6a9cbdc632f56b6f8d556e89)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` type)`            | Remove a credential for the use with the configured DoC server.
`public void `[`gcoap_dns_server_proxy_reset`](#group__net__gcoap__dns_1ga94fe266bb2a87effc3c55c58f76b49bc)`(void)`            | Deletes the proxy URI.
`public int `[`gcoap_dns_server_proxy_set`](#group__net__gcoap__dns_1ga9b79f31ead91bcee1409d7a1c805f00c)`(const char * proxy)`            | Sets and checks a proxy URI.
`public bool `[`gcoap_dns_server_proxy_is_set`](#group__net__gcoap__dns_1gaf72e55c33b8c945a2ddd1180947ff1c6)`(void)`            | Checks if a proxy URI is set.
`public ssize_t `[`gcoap_dns_server_proxy_get`](#group__net__gcoap__dns_1gaf5560c6a14d4789bbb6b1c13fc594b4d)`(char * proxy,size_t proxy_len)`            | Gets the proxy URI.

## Members

#### `public int `[`gcoap_dns_query`](#group__net__gcoap__dns_1gaadb30532f0d6ed65b528df575e05ab9f)`(const char * domain_name,void * addr_out,int family)` 

Query a domain name via CoAP synchronously.

#### Parameters
* `domain_name` A '\0'-terminated domain name. Must not be NULL. 

* `addr_out` The resolved address. Must not be NULL. 

* `family` The desired address family for `addr_out`. [AF_UNSPEC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af_1ggad825d553b53d96e75e002bc6f64642e1aa0641a57327aef3ea3aef5bda8355c25) for any address family (an IPv6 address will take preference over an IPv4 address).

#### Returns
length of `addr_out` in bytes on success 

#### Returns
-EAFNOSUPPORT, if the hostname of the URI resolves to an unknown address family. 

#### Returns
-EBADMSG, when receiving erroneous response or response containing an error code. 

#### Returns
-ECONNABORTED, if CoAP request cannot be sent. 

#### Returns
-ECONNREFUSED, if no URI is set for the client (see [gcoap_dns_server_uri_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap__dns_1gac86d1963fadee9385dce0f1463d4fbf6)). 

#### Returns
-EDESTADDRREQ, if CoAP response was received from an unexpected remote. 

#### Returns
-EHOSTUNREACH, if the hostname of the URI can not be resolved 

#### Returns
-ENOBUFS, if there was not enough buffer space for the request. 

#### Returns
-ENOBUFS, if length of received CoAP body is greater than [CONFIG_DNS_MSG_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dns__msg__conf_1ga9530cd696fa9efb6052c27fcdf76020f). 

#### Returns
-ENOENT, if Zone-ID of the URI can not be found locally. 

#### Returns
-ENOMSG, if CoAP response did not contain a DNS response. 

#### Returns
-ENOTRECOVERABLE, on gCoAP-internal error. 

#### Returns
-ENOTSUP, if credential can not be added for to client. 

#### Returns
-ETIMEDOUT, if CoAP request timed out.

#### `public int `[`gcoap_dns_server_uri_set`](#group__net__gcoap__dns_1gac86d1963fadee9385dce0f1463d4fbf6)`(const char * uri)` 

Sets and checks a URI for a DoC server.

#### Parameters
* `uri` A URI. May be NULL to remove the URI. Unless the [DNS sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dns) module is also used, the host component of the URI needs to be an IP literal.

#### Returns
length of `uri` on success (0 when URI is removed). 

#### Returns
-EINVAL, if `uri` is not a valid URI for DNS over CoAP. 

#### Returns
-ENOBUFS, if the client implementation has not enough buffer space to process the URI.

#### `public bool `[`gcoap_dns_server_uri_is_set`](#group__net__gcoap__dns_1ga3c508b439095e29b2c7fb540408050ea)`(void)` 

Checks if the URI for the DoC server is set.

#### Parameters
* `true` A URI for the DoC server is set. 

* `false` There is no URI set for the DoC server.

#### `public ssize_t `[`gcoap_dns_server_uri_get`](#group__net__gcoap__dns_1ga82129a1e6a6d64d63d16d29bf5e611e0)`(char * uri,size_t uri_len)` 

Gets the URI for the DoC server.

#### Parameters
* `uri` The current URI for the DoC server 

* `uri_len` Maximum length for `uri`

#### Returns
Length of the `uri` on return. 0, if no URI is set. 

#### Returns
-ENOBUFS, if the configured URI is longer than `uri_len`.

#### `public void `[`gcoap_dns_cred_reset`](#group__net__gcoap__dns_1gafb92a4faab33919e700ec779e95a66ae)`(void)` 

Deletes all added credentials.

This also removes the credentials from the [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) and the GCoAP DTLS sock.

#### `public int `[`gcoap_dns_cred_add`](#group__net__gcoap__dns_1ga47fef7e608bf9c84b877b6026719dd7c)`(`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * creds)` 

Adds a credential for the use with the configured DoC server.

creds != NULL.

#### Parameters
* `creds` A crential. May not be NULL.

#### Returns
0 on success 

#### Returns
-ENOTSUP if DTLS is not supported (because `gcoap_dtls` is not compiled in) 

#### Returns
-ENOMEM if [CONFIG_GCOAP_DNS_CREDS_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__gcoap__dns__config_1ga6ef7cb949375e1f52aaf9346fa6d3490) is exceeded (duplicates may be added). 

#### Returns
-EBADF if the credential can not be added to [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) or the GCoAP DTLS sock.

#### `public void `[`gcoap_dns_cred_remove`](#group__net__gcoap__dns_1gae33c8e7f6a9cbdc632f56b6f8d556e89)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` type)` 

Remove a credential for the use with the configured DoC server.

This also removes the credentials from the [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) and the GCoAP DTLS sock.

#### Parameters
* `tag` The tag of the credential. 

* `type` The type of the credential.

#### `public void `[`gcoap_dns_server_proxy_reset`](#group__net__gcoap__dns_1ga94fe266bb2a87effc3c55c58f76b49bc)`(void)` 

Deletes the proxy URI.

#### `public int `[`gcoap_dns_server_proxy_set`](#group__net__gcoap__dns_1ga9b79f31ead91bcee1409d7a1c805f00c)`(const char * proxy)` 

Sets and checks a proxy URI.

#### Parameters
* `proxy` A proxy URI. Must contain a `dns` query variable.

#### Returns
length of `proxy` on success. 

#### Returns
-ENOBUFS, if the client implementation has not enough buffer space to process the proxy URI. 

#### Returns
-ENOSUP, if module `gcoap_dns_proxied` is not compiled in.

#### `public bool `[`gcoap_dns_server_proxy_is_set`](#group__net__gcoap__dns_1gaf72e55c33b8c945a2ddd1180947ff1c6)`(void)` 

Checks if a proxy URI is set.

#### Parameters
* `true` A proxy URI is set. 

* `false` There is no URI set for the DoC server.

#### `public ssize_t `[`gcoap_dns_server_proxy_get`](#group__net__gcoap__dns_1gaf5560c6a14d4789bbb6b1c13fc594b4d)`(char * proxy,size_t proxy_len)` 

Gets the proxy URI.

#### Parameters
* `proxy` The current proxy URI 

* `proxy_len` Maximum length for `proxy`

#### Returns
Length of the `proxy` on return. 0, if no URI is set. 

#### Returns
-ENOBUFS, if the configured URI is longer than `proxy_len`.

