---
title: api-net_dsm.md
description: api-net_dsm.md
---
# group `net_dsm` 

This module provides functionality to store and retrieve session information of DTLS connections.

dsm allows to store necessary session information so that not every application has to provide the potentially maximum number of possible session objects. Session storage can be offloaded to this generic module.

\

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DSM_PEER_MAX`](#group__net__dsm_1gafa785b64ae532ea3ed37843e6f7b425c)            | Maximum number of maintained DTLS sessions (tinyDTLS)
`enum `[`dsm_state_t`](#group__net__dsm_1gafbaad5916a5a49f19956c318fa7002a2)            | Session management states.
`public void `[`dsm_init`](#group__net__dsm_1gac95eba0e2838d42fe8c959c35a7f609e)`(void)`            | Initialize the DTLS session management.
`public `[`dsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dsm_1gafbaad5916a5a49f19956c318fa7002a2)` `[`dsm_store`](#group__net__dsm_1ga30d3de52abfbf0c764d54167720a327f)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,`[`dsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dsm_1gafbaad5916a5a49f19956c318fa7002a2)` new_state,bool restore)`            | Stores a session.
`public void `[`dsm_remove`](#group__net__dsm_1ga0cd232410dd27e7e5e6f89180fca1172)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session)`            | Removes a session.
`public uint8_t `[`dsm_get_num_maximum_slots`](#group__net__dsm_1ga3e756b78d00f329407767970408ba8ae)`(void)`            | Returns the maximum number of sessions slots.
`public uint8_t `[`dsm_get_num_available_slots`](#group__net__dsm_1ga83019d6c4f32f6d3094def373315ff04)`(void)`            | Returns the number of available session slots.
`public ssize_t `[`dsm_get_least_recently_used_session`](#group__net__dsm_1gac6b40c4d39ad2687ae36cbeec878c3bc)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session)`            | Returns the least recently used session.

## Members

#### `define `[`CONFIG_DSM_PEER_MAX`](#group__net__dsm_1gafa785b64ae532ea3ed37843e6f7b425c) 

Maximum number of maintained DTLS sessions (tinyDTLS)

#### `enum `[`dsm_state_t`](#group__net__dsm_1gafbaad5916a5a49f19956c318fa7002a2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NO_SPACE            | 
SESSION_STATE_NONE            | 
SESSION_STATE_HANDSHAKE            | 
SESSION_STATE_ESTABLISHED            | 

Session management states.

#### `public void `[`dsm_init`](#group__net__dsm_1gac95eba0e2838d42fe8c959c35a7f609e)`(void)` 

Initialize the DTLS session management.

Must call once before first use.

#### `public `[`dsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dsm_1gafbaad5916a5a49f19956c318fa7002a2)` `[`dsm_store`](#group__net__dsm_1ga30d3de52abfbf0c764d54167720a327f)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,`[`dsm_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dsm_1gafbaad5916a5a49f19956c318fa7002a2)` new_state,bool restore)` 

Stores a session.

Stores a given session in the internal storage of the session management. If the session is already stored only the state will be updated when the session gets established.

#### Parameters
* `sock` [sock_dtls_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaa63acc71681400dd4b856ce09e27cafb), which the session is created on 

* `session` Session to store 

* `new_state` New state of the session 

* `restore` Indicates, whether the session object should be restored when an already established session is found

#### Returns
Previous state of the session. If no session existed before it returns SESSION_STATE_NONE. If no space is available it returns NO_SPACE.

#### `public void `[`dsm_remove`](#group__net__dsm_1ga0cd232410dd27e7e5e6f89180fca1172)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session)` 

Removes a session.

Removes a given session in the internal storage of the session management.

#### Parameters
* `sock` [sock_dtls_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaa63acc71681400dd4b856ce09e27cafb), which the session is created on 

* `session` Session to store

#### `public uint8_t `[`dsm_get_num_maximum_slots`](#group__net__dsm_1ga3e756b78d00f329407767970408ba8ae)`(void)` 

Returns the maximum number of sessions slots.

#### Returns
Number of session slots.

#### `public uint8_t `[`dsm_get_num_available_slots`](#group__net__dsm_1ga83019d6c4f32f6d3094def373315ff04)`(void)` 

Returns the number of available session slots.

#### Returns
Number of available session slots in the session management.

#### `public ssize_t `[`dsm_get_least_recently_used_session`](#group__net__dsm_1gac6b40c4d39ad2687ae36cbeec878c3bc)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session)` 

Returns the least recently used session.

#### Parameters
* `sock` [sock_dtls_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaa63acc71681400dd4b856ce09e27cafb), which the session is created on 

* `session` Oldest used session

#### Returns
1, on success 

#### Returns
-1, when no session is stored

