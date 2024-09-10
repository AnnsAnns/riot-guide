---
title: api-net_nanocoap_fileserver.md
description: api-net_nanocoap_fileserver.md
---
# group `net_nanocoap_fileserver` 

Library for serving files from the VFS to CoAP clients.

AboutThis maps files in the local file system onto a resources in CoAP. In that, it is what is called a static web server in the unconstrained web.

As usual, GET operations are used to read files and PUT writes to files. In the current implementation, PUTs are expressed as random-access, meaning that files are not updated atomically, although files are created atomically. The Content-Format option is not checked in the current implementation. Conditional file modification and deletion is supported using the If-Match option. The If-Match option carries a previously received Etag or in case of zero length, requires a request to be processed only if the resource exists. In opposite, the If-None-Match option requires a request to be processed, only if the resource does not yet exist, and is most useful for file creation.

Directories are expressed to URIs with trailing slashes. Directories and their content are deleted as if one would do an `$rm -r`. If you only would like to delete a directory if it is empty, you must supply an If-Match option with the special value [COAPFILESERVER_DIR_DELETE_ETAG](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__fileserver_1ga6361921051a327323fed06922e0182fd).

The file server uses ETag for cache validation. The ETags are built from the file system stat values. As clients rely on the ETag to differ when the file changes, it is important that file modification times are set. The precise time values do not matter, but if a file is changed in place and neither its length nor its modification time is varied, then clients will not become aware of the change or may even mix up the versions half way through if they have a part of the old version cached.

Usage

* `USEMODULE += nanocoap_fileserver`

* Enter a [nanocoap_fileserver_handler](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__fileserver_1ga91de066181db9756bf9f1a7bad973480) handler into your CoAP server's resource list like this:

```cpp
static const coap_resource_t _resources[] = {
    ...
    {
       .path = "/files/sd",
       .methods = COAP_GET | COAP_MATCH_SUBTREE,
       .handler = nanocoap_fileserver_handler,
       .context = "/sd0"
    },
    ...
}
```

The path argument specifies under which path the folder is served via CoAP while the context argument contains the path on the local filesystem that will be served.

The allowed methods dictate whether it's read-only (`COAP_GET`) or read-write (`COAP_GET | COAP_PUT | COAP_DELETE`). If you want to support `PUT` and `DELETE`, you need to enable the modules `nanocoap_fileserver_put` and `nanocoap_fileserver_delete`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`COAPFILESERVER_DIR_DELETE_ETAG`](#group__net__nanocoap__fileserver_1ga6361921051a327323fed06922e0182fd)            | Randomly generated Etag, used by a client when a directory should only be deleted, if it is empty.
`enum `[`nanocoap_fileserver_event_t`](#group__net__nanocoap__fileserver_1gaee86edf6c8a4db7d3f57fdebeef22316)            | GCoAP fileserver event types.
`public void `[`nanocoap_fileserver_set_event_cb`](#group__net__nanocoap__fileserver_1gadcb19e6b5b0b0a4b641cfb848aff22c9)`(`[`nanocoap_fileserver_event_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__fileserver_1ga212a3e5e439f0c9a9f80ac247bb6807e)` cb,void * arg)`            | Register a consumer for GCoAP fileserver events Requires the `nanocoap_fileserver_callback` module.
`public ssize_t `[`nanocoap_fileserver_handler`](#group__net__nanocoap__fileserver_1ga91de066181db9756bf9f1a7bad973480)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,`[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)`            | File server handler.
`struct `[`nanocoap_fileserver_event_ctx_t`](#structnanocoap__fileserver__event__ctx__t) | GCoAP fileserver event context.

## Members

#### `define `[`COAPFILESERVER_DIR_DELETE_ETAG`](#group__net__nanocoap__fileserver_1ga6361921051a327323fed06922e0182fd) 

Randomly generated Etag, used by a client when a directory should only be deleted, if it is empty.

#### `enum `[`nanocoap_fileserver_event_t`](#group__net__nanocoap__fileserver_1gaee86edf6c8a4db7d3f57fdebeef22316) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NANOCOAP_FILESERVER_GET_FILE_START            | file download started
NANOCOAP_FILESERVER_GET_FILE_END            | file download finished
NANOCOAP_FILESERVER_PUT_FILE_START            | file upload started
NANOCOAP_FILESERVER_PUT_FILE_END            | file upload finished
NANOCOAP_FILESERVER_DELETE_FILE            | file deletion requested (called before file is deleted)

GCoAP fileserver event types.

This requires the nanocoap_fileserver_callback module.

#### `public void `[`nanocoap_fileserver_set_event_cb`](#group__net__nanocoap__fileserver_1gadcb19e6b5b0b0a4b641cfb848aff22c9)`(`[`nanocoap_fileserver_event_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__fileserver_1ga212a3e5e439f0c9a9f80ac247bb6807e)` cb,void * arg)` 

Register a consumer for GCoAP fileserver events Requires the `nanocoap_fileserver_callback` module.

The Callback is called on each fileserver event and executed within the GCoAP thread.

#### Parameters
* `cb` The callback function to be called on events 

* `arg` Custom callback function context

#### `public ssize_t `[`nanocoap_fileserver_handler`](#group__net__nanocoap__fileserver_1ga91de066181db9756bf9f1a7bad973480)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,`[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)` 

File server handler.

Serve a directory from the VFS as a CoAP resource tree. 
**See also**: [CoAP file server](#group__net__nanocoap__fileserver)

#### Parameters
* `pdu` CoAP request package 

* `buf` Buffer for the response 

* `len` Response buffer length 

* `ctx` pointer to a [coap_request_ctx_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)

#### Returns
size of the response on success negative error

# struct `nanocoap_fileserver_event_ctx_t` 

GCoAP fileserver event context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`path`](#structnanocoap__fileserver__event__ctx__t_1a0d4f57c6b64f43d046fd91b7adf24f91) | VFS path of the affected file
`public void * `[`user_ctx`](#structnanocoap__fileserver__event__ctx__t_1a1e4acbad05c8c1275b736f0da209468d) | Optional user supplied context.

## Members

#### `public const char * `[`path`](#structnanocoap__fileserver__event__ctx__t_1a0d4f57c6b64f43d046fd91b7adf24f91) 

VFS path of the affected file

#### `public void * `[`user_ctx`](#structnanocoap__fileserver__event__ctx__t_1a1e4acbad05c8c1275b736f0da209468d) 

Optional user supplied context.

