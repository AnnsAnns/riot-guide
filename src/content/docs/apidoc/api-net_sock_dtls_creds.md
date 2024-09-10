---
title: api-net_sock_dtls_creds.md
description: api-net_sock_dtls_creds.md
---
# group `net_sock_dtls_creds` 

Credential handling for DTLS sock.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sock_dtls_set_server_psk_id_hint`](#group__net__sock__dtls__creds_1ga0023a4097d185cd6ee21e5097f51a49a)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,const char * hint)`            | Sets the PSK Identity hint to be sent to clients during handshake.
`public int `[`sock_dtls_add_credential`](#group__net__sock__dtls__creds_1gae9388932dba7c8ade1245ff296e810f7)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)`            | Adds a credential tag to list of available credentials for `sock`.
`public int `[`sock_dtls_remove_credential`](#group__net__sock__dtls__creds_1gad9d8b4af474253a60dc78078835a6e4d)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)`            | Removes a credential tag of the list of available credentials for `sock`.
`public size_t `[`sock_dtls_get_credentials`](#group__net__sock__dtls__creds_1ga8921e4c83550f94f282ef1be52f500f2)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,const `[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` ** out)`            | Returns an array of tags of the registered credentials in `sock`.
`public void `[`sock_dtls_set_client_psk_cb`](#group__net__sock__dtls__creds_1ga14d2d11e9dcf19049f330ad5c667580e)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_client_psk_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga4eef3fb74fcf8177a60778546f5993c2)` cb)`            | Sets the callback function for clients to specify a credential to use for a given connection.
`public void `[`sock_dtls_set_rpk_cb`](#group__net__sock__dtls__creds_1ga7524206606ab503113c5ffa83df1a2af)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_rpk_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gae6a237dda8ee23b7adc1c8e8ad700288)` cb)`            | Sets the callback function to specify a credential to use for a given connection, when using Raw Public Keys.

## Members

#### `public int `[`sock_dtls_set_server_psk_id_hint`](#group__net__sock__dtls__creds_1ga0023a4097d185cd6ee21e5097f51a49a)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,const char * hint)` 

Sets the PSK Identity hint to be sent to clients during handshake.

This hint is optional. It helps clients to decide which PSK Identity to use.

#### Parameters
* `sock` The DTLS sock object to set the hint to. 

* `hint` PSK Identity hint as NULL-terminated string.

#### Parameters
* `0` on success 

* `-1` on error

#### `public int `[`sock_dtls_add_credential`](#group__net__sock__dtls__creds_1gae9388932dba7c8ade1245ff296e810f7)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)` 

Adds a credential tag to list of available credentials for `sock`.

sock != NULL

#### Parameters
* `sock` DTLS sock object 

* `tag` Tag of the credential to add

#### Parameters
* `0` on success 

* `-1` otherwise

#### `public int `[`sock_dtls_remove_credential`](#group__net__sock__dtls__creds_1gad9d8b4af474253a60dc78078835a6e4d)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)` 

Removes a credential tag of the list of available credentials for `sock`.

sock != NULL

#### Parameters
* `sock` DTLS sock object 

* `tag` Tag of the credential to remove

#### Parameters
* `0` on success 

* `-1` otherwise

#### `public size_t `[`sock_dtls_get_credentials`](#group__net__sock__dtls__creds_1ga8921e4c83550f94f282ef1be52f500f2)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,const `[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` ** out)` 

Returns an array of tags of the registered credentials in `sock`.

#### Parameters
* `sock` DTLS sock object 

* `out` Pointer to place the reference to a read-only array of [credman_tag_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)

#### Returns
Number of registered credentials

#### `public void `[`sock_dtls_set_client_psk_cb`](#group__net__sock__dtls__creds_1ga14d2d11e9dcf19049f330ad5c667580e)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_client_psk_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga4eef3fb74fcf8177a60778546f5993c2)` cb)` 

Sets the callback function for clients to specify a credential to use for a given connection.

#### Parameters
* `sock` The DTLS sock object to set the callback to. 

* `cb` Callback to set.

#### `public void `[`sock_dtls_set_rpk_cb`](#group__net__sock__dtls__creds_1ga7524206606ab503113c5ffa83df1a2af)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_rpk_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gae6a237dda8ee23b7adc1c8e8ad700288)` cb)` 

Sets the callback function to specify a credential to use for a given connection, when using Raw Public Keys.

#### Parameters
* `sock` The DTLS sock object to set the callback to. 

* `cb` Callback to set.

