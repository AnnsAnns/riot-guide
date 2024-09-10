---
title: api-sys_suit_transport_worker.md
description: api-sys_suit_transport_worker.md
---
# group `sys_suit_transport_worker` 

SUIT secure firmware updates worker thread.

SUIT CoAP helper API Kaspar Schleiser [kaspar@schleiser.de](mailto:kaspar@schleiser.de)

Francisco Molina [francois-xavier.molina@inria.fr](mailto:francois-xavier.molina@inria.fr)

Alexandre Abadie [alexandre.abadie@inria.fr](mailto:alexandre.abadie@inria.fr)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`suit_worker_trigger`](#group__sys__suit__transport__worker_1ga222c45a299368adbae9739edfc6e117b)`(const char * url,size_t len)`            | Trigger a SUIT update via a worker thread.
`public void `[`suit_worker_trigger_prepared`](#group__sys__suit__transport__worker_1gaa593cf1f675d5eb7e2ef5974e272d89f)`(const uint8_t * manifest,size_t size)`            | Trigger a SUIT update via a worker thread.
`public int `[`suit_worker_try_prepare`](#group__sys__suit__transport__worker_1ga8d10ce8382779b76a769fd72574e6f42)`(uint8_t ** buffer,size_t * size)`            | Prepare for a worker run with a preloaded manifest.
`public void `[`suit_worker_done_cb`](#group__sys__suit__transport__worker_1gaaf6c35b2b76767a2b4be72f99f8440b1)`(int res)`            | Callback that is executed after the SUIT process has finished.
`public int `[`suit_handle_url`](#group__sys__suit__transport__worker_1ga04d316381b1b9450b34c5e3a0030aed9)`(const char * url)`            | Trigger a SUIT update.
`public int `[`suit_handle_manifest_buf`](#group__sys__suit__transport__worker_1ga821811966ddb35304ec40445c890c010)`(const uint8_t * buffer,size_t size)`            | Trigger a SUIT update on an in-memory manifest.

## Members

#### `public void `[`suit_worker_trigger`](#group__sys__suit__transport__worker_1ga222c45a299368adbae9739edfc6e117b)`(const char * url,size_t len)` 

Trigger a SUIT update via a worker thread.

#### Parameters
* `url` url pointer containing the full coap url to the manifest 

* `len` length of the url

#### `public void `[`suit_worker_trigger_prepared`](#group__sys__suit__transport__worker_1gaa593cf1f675d5eb7e2ef5974e272d89f)`(const uint8_t * manifest,size_t size)` 

Trigger a SUIT update via a worker thread.

The caller called [suit_worker_try_prepare](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1ga8d10ce8382779b76a769fd72574e6f42) to obtain the `buf`, and populated `size` bytes into it.

This can be called with a size of 0 when writing a manifest was started, but could not be completed.

#### Parameters
* `manifest` Pointer to the manifest. This must be the return value of a previous call to [suit_worker_try_prepare](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1ga8d10ce8382779b76a769fd72574e6f42), and is invalidated at some point during or after the call. 

* `size` Number of bytes that have been prepared in the buffer before the call.

#### `public int `[`suit_worker_try_prepare`](#group__sys__suit__transport__worker_1ga8d10ce8382779b76a769fd72574e6f42)`(uint8_t ** buffer,size_t * size)` 

Prepare for a worker run with a preloaded manifest.

This obtains a lock on the SUIT worker, and provides a pointer to a memory area into which the manifest is to be written. The lock must be released by calling [suit_worker_trigger_prepared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1gaa593cf1f675d5eb7e2ef5974e272d89f) later.

#### Parameters
* `buffer` On success, buffer into which the image may be written. 

* `size` Requested buffer size. On some errors, this will be decreased to a size that would be acceptable.

#### Returns
0 on success 

#### Returns
-EAGAIN if the worker is currently busy. 

#### Returns
-ENOMEM if the worker is available but the requested size is too large. (In this case, an acceptable size is indicated in size).

There is no blocking version of this (it behaves like [mutex_trylock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe), not like [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)). This allows a simpler implementation on the thread handling side , and is also what typical use cases need.

#### `public void `[`suit_worker_done_cb`](#group__sys__suit__transport__worker_1gaaf6c35b2b76767a2b4be72f99f8440b1)`(int res)` 

Callback that is executed after the SUIT process has finished.

#### Parameters
* `res` Result of the SUIT update, 0 on success

By default this will reboot the board, can be overwritten by the application.

#### `public int `[`suit_handle_url`](#group__sys__suit__transport__worker_1ga04d316381b1b9450b34c5e3a0030aed9)`(const char * url)` 

Trigger a SUIT update.

Make sure the thread calling this function has enough stack space to fit a whole flash page.

This function accesses global state shared with [suit_handle_manifest_buf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1ga821811966ddb35304ec40445c890c010); only one of those may be called at the same time. You may use [suit_worker_trigger](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1ga222c45a299368adbae9739edfc6e117b) instead, which manages locking and also does away with the stack space requirement by being executed on an own stack.

#### Parameters
* `url` url pointer containing the full coap url to the manifest

#### Returns
0 on success <0 on error

#### `public int `[`suit_handle_manifest_buf`](#group__sys__suit__transport__worker_1ga821811966ddb35304ec40445c890c010)`(const uint8_t * buffer,size_t size)` 

Trigger a SUIT update on an in-memory manifest.

Make sure the thread calling this function has enough stack space to fit a whole flash page.

This function accesses global state shared with [suit_handle_url](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1ga04d316381b1b9450b34c5e3a0030aed9); only one of those may be called at the same time. You may use [suit_worker_try_prepare](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1ga8d10ce8382779b76a769fd72574e6f42) / [suit_worker_trigger_prepared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__transport__worker_1gaa593cf1f675d5eb7e2ef5974e272d89f) instead, which manage locking and also do away with the stack space requirement by being executed on an own stack.

#### Parameters
* `buffer` Memory area containing a SUIT manifest. 

* `size` Size of the manifest in `buffer`.

#### Returns
0 on success <0 on error

