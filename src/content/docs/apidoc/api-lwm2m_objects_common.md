---
title: api-lwm2m_objects_common.md
description: api-lwm2m_objects_common.md
---
# group `lwm2m_objects_common` 

Common functionalities to interact with LwM2M objects.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static lwm2m_object_t * `[`lwm2m_get_object_by_id`](#group__lwm2m__objects__common_1gae97902a7fbacafc25e38a6282bc0a7de)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t id)`            | Get the handle for an object type of the client by its ID.
`public int `[`lwm2m_get_string`](#group__lwm2m__objects__common_1gac4157c5806469ec4922779ce92f987e6)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,char * out,size_t * out_len)`            | Get the value of a string-type resource, specified by `uri`.
`public int `[`lwm2m_get_string_by_path`](#group__lwm2m__objects__common_1ga52fd2a24ee48aca0078e8e5649f95886)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,char * out,size_t * out_len)`            | Get the value of a string-type resource, specified by a path `path`.
`public int `[`lwm2m_get_opaque`](#group__lwm2m__objects__common_1gacc135caefd24e19e0249e5996c3d198c)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint8_t * out,size_t * out_len)`            | Get the value of an opaque-type resource, specified by `uri`.
`public int `[`lwm2m_get_opaque_by_path`](#group__lwm2m__objects__common_1gaf58dfb26c990a43806ea98a400549e77)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint8_t * out,size_t * out_len)`            | Get the value of an opaque-type resource, specified by a path `path`.
`public int `[`lwm2m_get_int`](#group__lwm2m__objects__common_1ga0927dd81fcf7b4d83ecfa7abd2e6cb85)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,int64_t * out)`            | Get the value of an integer-type resource, specified by `uri`.
`public int `[`lwm2m_get_int_by_path`](#group__lwm2m__objects__common_1gad50b85b7c81f873938cc632067461838)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,int64_t * out)`            | Get the value of an integer-type resource, specified by a path `path`.
`public int `[`lwm2m_get_float`](#group__lwm2m__objects__common_1ga9c1ca6439d4ce7bda40b2099ce802e7e)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,double * out)`            | Get the value of an float-type resource, specified by `uri`.
`public int `[`lwm2m_get_float_by_path`](#group__lwm2m__objects__common_1gac310baa9a6c7524cacb82a34de32221d)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,double * out)`            | Get the value of an float-type resource, specified by a path `path`.
`public int `[`lwm2m_get_bool`](#group__lwm2m__objects__common_1gaa583cd1e1449c771cbfd127b68daca55)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,bool * out)`            | Get the value of an boolean-type resource, specified by `uri`.
`public int `[`lwm2m_get_bool_by_path`](#group__lwm2m__objects__common_1ga09437ea7e898d0250a8270a6a5d28ec2)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,bool * out)`            | Get the value of an float-type resource, specified by a path `path`.
`public int `[`lwm2m_get_objlink`](#group__lwm2m__objects__common_1ga8c8a9bd50b639112b28b6c7444311eaf)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint16_t * object_id_out,uint16_t * instance_id_out)`            | Get the value of an objectlink-type resource, specified by `uri`.
`public int `[`lwm2m_get_objlink_by_path`](#group__lwm2m__objects__common_1ga59baa28f7ce704872db9173c383fdb75)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint16_t * object_id_out,uint16_t * instance_id_out)`            | Get the value of an objectlink-type resource, specified by a path `path`.
`public int `[`lwm2m_set_string`](#group__lwm2m__objects__common_1ga2579d1ab88bb069d5a8a29a7c5bb1a07)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,char * val,size_t val_len)`            | Set the value of a string-type resource, specified by `uri`.
`public int `[`lwm2m_set_string_by_path`](#group__lwm2m__objects__common_1gac5fbaca0399e46e5c4ea88cbf4ee4cc3)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,char * val,size_t val_len)`            | Set the value of a string-type resource, specified by a path `path`.
`public int `[`lwm2m_set_opaque`](#group__lwm2m__objects__common_1gae952b70405b9e980a44a5fa0ff7fb69c)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint8_t * val,size_t val_len)`            | Set the value of an opaque-type resource, specified by `uri`.
`public int `[`lwm2m_set_opaque_by_path`](#group__lwm2m__objects__common_1gadc90d4fc548f894724c0eefc95cdc6ff)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint8_t * val,size_t val_len)`            | Set the value of an opaque-type resource, specified by a path `path`.
`public int `[`lwm2m_set_int`](#group__lwm2m__objects__common_1ga4fcb4f993d8bbfb78bf5102f913bbd4a)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,int64_t val)`            | Set the value of an integer-type resource, specified by `uri`.
`public int `[`lwm2m_set_int_by_path`](#group__lwm2m__objects__common_1ga8c21667a4409b20d57e56ea2e5a6acc0)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,int64_t val)`            | Set the value of an integer-type resource, specified by a path `path`.
`public int `[`lwm2m_set_float`](#group__lwm2m__objects__common_1gab5519e36b2535114034540f337a4b1a3)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,double val)`            | Set the value of an float-type resource, specified by `uri`.
`public int `[`lwm2m_set_float_by_path`](#group__lwm2m__objects__common_1ga7ef67859879c235ae68f682192cc37d9)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,double val)`            | Set the value of an float-type resource, specified by a path `path`.
`public int `[`lwm2m_set_bool`](#group__lwm2m__objects__common_1ga1c7e665484d2b26c64c7d575911ffe83)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,bool val)`            | Set the value of an boolean-type resource, specified by `uri`.
`public int `[`lwm2m_set_bool_by_path`](#group__lwm2m__objects__common_1ga2b548540cf5a82e92d01c01862fabe56)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,bool val)`            | Set the value of an float-type resource, specified by a path `path`.
`public int `[`lwm2m_set_objlink`](#group__lwm2m__objects__common_1gaace328152c9dc9e6347ded0b639d9ffa)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint16_t object_id_in,uint16_t instance_id_in)`            | Set the value of an objectlink-type resource, specified by `uri`.
`public int `[`lwm2m_set_objlink_by_path`](#group__lwm2m__objects__common_1ga329827b35b0c26fd037dd6a515ce5346)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint16_t object_id_in,uint16_t instance_id_in)`            | Set the value of an objectlink-type resource, specified by a path `path`.
`struct `[`lwm2m_uri_t`](#structlwm2m__uri__t) | Representation of an URI in a LwM2M client (defined in `liblwm2m.h`).

## Members

#### `public inline static lwm2m_object_t * `[`lwm2m_get_object_by_id`](#group__lwm2m__objects__common_1gae97902a7fbacafc25e38a6282bc0a7de)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t id)` 

Get the handle for an object type of the client by its ID.

This is not a single instance of a given object, but the object type representation.

#### Parameters
* `client_data` Pointer to the client data 

* `id` ID of the object to get

#### Returns
Pointer to the object type

#### `public int `[`lwm2m_get_string`](#group__lwm2m__objects__common_1gac4157c5806469ec4922779ce92f987e6)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,char * out,size_t * out_len)` 

Get the value of a string-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to get. 

* `out` Buffer to place the resource in. Must not be NULL. 

* `out_len` Available space in `out`, returns the amount of read bytes.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_string_by_path`](#group__lwm2m__objects__common_1ga52fd2a24ee48aca0078e8e5649f95886)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,char * out,size_t * out_len)` 

Get the value of a string-type resource, specified by a path `path`.

Convenience function to call [lwm2m_get_string](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1gac4157c5806469ec4922779ce92f987e6) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to get. 

* `path_len` Length of `path`. 

* `out` Buffer to place the resource in. Must not be NULL. 

* `out_len` Available space in `out`, returns the amount of read bytes.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` if the path is malformed, the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_opaque`](#group__lwm2m__objects__common_1gacc135caefd24e19e0249e5996c3d198c)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint8_t * out,size_t * out_len)` 

Get the value of an opaque-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to get. 

* `out` Buffer to place the resource in. Must not be NULL. 

* `out_len` Available space in `out`, returns the amount of read bytes.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_opaque_by_path`](#group__lwm2m__objects__common_1gaf58dfb26c990a43806ea98a400549e77)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint8_t * out,size_t * out_len)` 

Get the value of an opaque-type resource, specified by a path `path`.

Convenience function to call [lwm2m_get_opaque](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1gacc135caefd24e19e0249e5996c3d198c) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to get. 

* `path_len` Length of `path`. 

* `out` Buffer to place the resource in. Must not be NULL. 

* `out_len` Available space in `out`, returns the amount of read bytes.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` if the path is malformed, the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_int`](#group__lwm2m__objects__common_1ga0927dd81fcf7b4d83ecfa7abd2e6cb85)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,int64_t * out)` 

Get the value of an integer-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to get. 

* `out` Pointer where to place the value.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_int_by_path`](#group__lwm2m__objects__common_1gad50b85b7c81f873938cc632067461838)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,int64_t * out)` 

Get the value of an integer-type resource, specified by a path `path`.

Convenience function to call [lwm2m_get_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1ga0927dd81fcf7b4d83ecfa7abd2e6cb85) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to get. 

* `path_len` Length of `path`. 

* `out` Pointer where to place the value.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` if the path is malformed, the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_float`](#group__lwm2m__objects__common_1ga9c1ca6439d4ce7bda40b2099ce802e7e)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,double * out)` 

Get the value of an float-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to get. 

* `out` Pointer where to place the value.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_float_by_path`](#group__lwm2m__objects__common_1gac310baa9a6c7524cacb82a34de32221d)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,double * out)` 

Get the value of an float-type resource, specified by a path `path`.

Convenience function to call [lwm2m_get_float](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1ga9c1ca6439d4ce7bda40b2099ce802e7e) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to get. 

* `path_len` Length of `path`. 

* `out` Pointer where to place the value.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` if the path is malformed, the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_bool`](#group__lwm2m__objects__common_1gaa583cd1e1449c771cbfd127b68daca55)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,bool * out)` 

Get the value of an boolean-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to get. 

* `out` Pointer where to place the value.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_bool_by_path`](#group__lwm2m__objects__common_1ga09437ea7e898d0250a8270a6a5d28ec2)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,bool * out)` 

Get the value of an float-type resource, specified by a path `path`.

Convenience function to call [lwm2m_get_bool](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1gaa583cd1e1449c771cbfd127b68daca55) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to get. 

* `path_len` Length of `path`. 

* `out` Pointer where to place the value.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` if the path is malformed, the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_objlink`](#group__lwm2m__objects__common_1ga8c8a9bd50b639112b28b6c7444311eaf)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint16_t * object_id_out,uint16_t * instance_id_out)` 

Get the value of an objectlink-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (object_id_out != NULL) && (instance_id_out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to get. 

* `object_id_out` Pointer where to place the object ID. 

* `instance_id_out` Pointer where to place the instance ID.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_get_objlink_by_path`](#group__lwm2m__objects__common_1ga59baa28f7ce704872db9173c383fdb75)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint16_t * object_id_out,uint16_t * instance_id_out)` 

Get the value of an objectlink-type resource, specified by a path `path`.

Convenience function to call [lwm2m_get_objlink](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1ga8c8a9bd50b639112b28b6c7444311eaf) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (object_id_out != NULL) && (instance_id_out != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to get. 

* `path_len` Length of `path`. 

* `object_id_out` Pointer where to place the object ID. 

* `instance_id_out` Pointer where to place the instance ID.

#### Parameters
* `0` on success 

* `-ENOMEM` when there is not enough space in buffer or can not allocate a data structure 

* `-ENOENT` when the resource is not found 

* `-EINVAL` if the path is malformed, the resource cannot be read or has an unexpected type

#### `public int `[`lwm2m_set_string`](#group__lwm2m__objects__common_1ga2579d1ab88bb069d5a8a29a7c5bb1a07)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,char * val,size_t val_len)` 

Set the value of a string-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (val != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to set. 

* `val` Buffer with the value to set. Must not be NULL. 

* `val_len` Length of `val`.

#### Parameters
* `0` on success 

* `-ENOMEM` when data structure can not be allocated 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the value can not be set

#### `public int `[`lwm2m_set_string_by_path`](#group__lwm2m__objects__common_1gac5fbaca0399e46e5c4ea88cbf4ee4cc3)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,char * val,size_t val_len)` 

Set the value of a string-type resource, specified by a path `path`.

Convenience function to call [lwm2m_set_string](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1ga2579d1ab88bb069d5a8a29a7c5bb1a07) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (val != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to set. 

* `path_len` Length of `path`. 

* `val` Buffer with the value to set. Must not be NULL. 

* `val_len` Length of `val`.

#### Parameters
* `0` on success 

* `-EINVAL` when the path is malformed, the value can not be set 

* `-ENOENT` when the resource is not found 

* `-ENOMEM` when data structure can not be allocated

#### `public int `[`lwm2m_set_opaque`](#group__lwm2m__objects__common_1gae952b70405b9e980a44a5fa0ff7fb69c)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint8_t * val,size_t val_len)` 

Set the value of an opaque-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL) && (val != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to set. 

* `val` Buffer with the value to set. Must not be NULL. 

* `val_len` Length of `val`.

#### Parameters
* `0` on success 

* `-ENOMEM` when data structure can not be allocated 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the value can not be set

#### `public int `[`lwm2m_set_opaque_by_path`](#group__lwm2m__objects__common_1gadc90d4fc548f894724c0eefc95cdc6ff)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint8_t * val,size_t val_len)` 

Set the value of an opaque-type resource, specified by a path `path`.

Convenience function to call [lwm2m_set_opaque](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1gae952b70405b9e980a44a5fa0ff7fb69c) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL) && (val != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to set. 

* `path_len` Length of `path`. 

* `val` Buffer with the value to set. Must not be NULL. 

* `val_len` Length of `val`.

#### Parameters
* `0` on success 

* `-EINVAL` when the path is malformed, the value can not be set 

* `-ENOENT` when the resource is not found 

* `-ENOMEM` when data structure can not be allocated

#### `public int `[`lwm2m_set_int`](#group__lwm2m__objects__common_1ga4fcb4f993d8bbfb78bf5102f913bbd4a)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,int64_t val)` 

Set the value of an integer-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to set. 

* `val` Value to set.

#### Parameters
* `0` on success 

* `-ENOMEM` when data structure can not be allocated 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the value can not be set

#### `public int `[`lwm2m_set_int_by_path`](#group__lwm2m__objects__common_1ga8c21667a4409b20d57e56ea2e5a6acc0)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,int64_t val)` 

Set the value of an integer-type resource, specified by a path `path`.

Convenience function to call [lwm2m_set_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1ga4fcb4f993d8bbfb78bf5102f913bbd4a) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to set. 

* `path_len` Length of `path`. 

* `val` Value to set.

#### Parameters
* `0` on success 

* `-EINVAL` when the path is malformed, the value can not be set 

* `-ENOENT` when the resource is not found 

* `-ENOMEM` when data structure can not be allocated

#### `public int `[`lwm2m_set_float`](#group__lwm2m__objects__common_1gab5519e36b2535114034540f337a4b1a3)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,double val)` 

Set the value of an float-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to set. 

* `val` Value to set.

#### Parameters
* `0` on success 

* `-ENOMEM` when data structure can not be allocated 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the value can not be set

#### `public int `[`lwm2m_set_float_by_path`](#group__lwm2m__objects__common_1ga7ef67859879c235ae68f682192cc37d9)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,double val)` 

Set the value of an float-type resource, specified by a path `path`.

Convenience function to call [lwm2m_set_float](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1gab5519e36b2535114034540f337a4b1a3) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to set. 

* `path_len` Length of `path`. 

* `val` Value to set.

#### Parameters
* `0` on success 

* `-EINVAL` when the path is malformed, the value can not be set 

* `-ENOENT` when the resource is not found 

* `-ENOMEM` when data structure can not be allocated

#### `public int `[`lwm2m_set_bool`](#group__lwm2m__objects__common_1ga1c7e665484d2b26c64c7d575911ffe83)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,bool val)` 

Set the value of an boolean-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to set. 

* `val` Value to set.

#### Parameters
* `0` on success 

* `-ENOMEM` when data structure can not be allocated 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the value can not be set

#### `public int `[`lwm2m_set_bool_by_path`](#group__lwm2m__objects__common_1ga2b548540cf5a82e92d01c01862fabe56)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,bool val)` 

Set the value of an float-type resource, specified by a path `path`.

Convenience function to call [lwm2m_set_bool](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1ga1c7e665484d2b26c64c7d575911ffe83) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to set. 

* `path_len` Length of `path`. 

* `val` Value to set.

#### Parameters
* `0` on success 

* `-EINVAL` when the path is malformed, the value can not be set 

* `-ENOENT` when the resource is not found 

* `-ENOMEM` when data structure can not be allocated

#### `public int `[`lwm2m_set_objlink`](#group__lwm2m__objects__common_1gaace328152c9dc9e6347ded0b639d9ffa)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_uri_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_common.md#structlwm2m__uri__t)` * uri,uint16_t object_id_in,uint16_t instance_id_in)` 

Set the value of an objectlink-type resource, specified by `uri`.

`(client_data != NULL) && (uri != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `uri` Initialized URI structure specifying the resource to set. 

* `object_id_in` Object ID value to set. 

* `instance_id_in` Instance ID value to set.

#### Parameters
* `0` on success 

* `-ENOMEM` when data structure can not be allocated 

* `-ENOENT` when the resource is not found 

* `-EINVAL` when the value can not be set

#### `public int `[`lwm2m_set_objlink_by_path`](#group__lwm2m__objects__common_1ga329827b35b0c26fd037dd6a515ce5346)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const char * path,size_t path_len,uint16_t object_id_in,uint16_t instance_id_in)` 

Set the value of an objectlink-type resource, specified by a path `path`.

Convenience function to call [lwm2m_set_objlink](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__common_1gaace328152c9dc9e6347ded0b639d9ffa) with a string representing the resource's path.

`(client_data != NULL) && (path != NULL)`

#### Parameters
* `client_data` Pointer to the LwM2M client data. 

* `path` Array containing the path to the resource to set. 

* `path_len` Length of `path`. 

* `object_id_in` Object ID value to set. 

* `instance_id_in` Instance ID value to set.

#### Parameters
* `0` on success 

* `-EINVAL` when the path is malformed, the value can not be set 

* `-ENOENT` when the resource is not found 

* `-ENOMEM` when data structure can not be allocated

# struct `lwm2m_uri_t` 

Representation of an URI in a LwM2M client (defined in `liblwm2m.h`).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`flag`](#structlwm2m__uri__t_1a699d3efbe7d12cd1279db13828453581) | indicates which segments are present
`public uint16_t `[`objectId`](#structlwm2m__uri__t_1a523ba3196b091044f57b794bbe3db921) | object ID
`public uint16_t `[`instanceId`](#structlwm2m__uri__t_1a35356d12de9a4e7e898b8fd3c50747e8) | instance ID
`public uint16_t `[`resourceId`](#structlwm2m__uri__t_1a379a36e4e8b3ce79ff75373ff85f9198) | resource ID

## Members

#### `public uint8_t `[`flag`](#structlwm2m__uri__t_1a699d3efbe7d12cd1279db13828453581) 

indicates which segments are present

#### `public uint16_t `[`objectId`](#structlwm2m__uri__t_1a523ba3196b091044f57b794bbe3db921) 

object ID

#### `public uint16_t `[`instanceId`](#structlwm2m__uri__t_1a35356d12de9a4e7e898b8fd3c50747e8) 

instance ID

#### `public uint16_t `[`resourceId`](#structlwm2m__uri__t_1a379a36e4e8b3ce79ff75373ff85f9198) 

resource ID

