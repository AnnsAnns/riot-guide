---
title: api-sys_ut_process.md
description: api-sys_ut_process.md
---
# group `sys_ut_process` 

URI template processor.

A parser and processor for URI templates up to level 3 expression types according to [RFC 6570](https://tools.ietf.org/html/rfc6570).

**See also**: [RFC 6570](https://tools.ietf.org/html/rfc6570)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`ut_process_expand`](#group__sys__ut__process_1gaf60700b0fa5d117af9b9820e976c4f8e)`(const char * ut,size_t ut_len,const `[`ut_process_var_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ut_process.md#structut__process__var__t)` * vars,size_t vars_len,char * uri,size_t * uri_len)`            | Expands a URI template by a given value set.
`public inline static int `[`ut_process_str_expand`](#group__sys__ut__process_1ga09af8125ef9a9c7ac2d7b2262f3886ff)`(const char * ut,const `[`ut_process_var_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ut_process.md#structut__process__var__t)` * vars,size_t vars_len,char * uri,size_t * uri_len)`            | Expands a URI template by a given value set.
`struct `[`ut_process_var_t`](#structut__process__var__t) | Name-value-pair of a variable for URI template expansion.

## Members

#### `public int `[`ut_process_expand`](#group__sys__ut__process_1gaf60700b0fa5d117af9b9820e976c4f8e)`(const char * ut,size_t ut_len,const `[`ut_process_var_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ut_process.md#structut__process__var__t)` * vars,size_t vars_len,char * uri,size_t * uri_len)` 

Expands a URI template by a given value set.

`(vars_len == 0) || (vars != NULL)`

`(uri != NULL) && (uri_len > 0)`

#### Parameters
* `ut` A URI template. 

* `ut_len` Length of `ut`. 

* `vars` A set of variable-value pairs. 

* `vars_len` The length of `vars`. 

* `uri` The resulting URI. 

* `uri_len` The maximum length for `uri` on in, the actual length of `uri` on out.

#### Returns
The length of `uri` on success 

#### Returns
-EINVAL, when `ut` is not parseable. 

#### Returns
-ENOBUFS, when `uri_len` is too small to fit the resulting URI. Potentially broken data will be written to `uri`.

#### `public inline static int `[`ut_process_str_expand`](#group__sys__ut__process_1ga09af8125ef9a9c7ac2d7b2262f3886ff)`(const char * ut,const `[`ut_process_var_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ut_process.md#structut__process__var__t)` * vars,size_t vars_len,char * uri,size_t * uri_len)` 

Expands a URI template by a given value set.

`(vars_len == 0) || (vars != NULL)`

`(uri != NULL) && (uri_len > 0)`

#### Parameters
* `ut` A `\0`-terminated URI template. 

* `vars` A set of variable-value pairs. 

* `vars_len` The length of `vars`. 

* `uri` The resulting URI. 

* `uri_len` The maximum length for `uri` on in, the actual length of `uri` on out.

#### Returns
The length of `uri` on success 

#### Returns
-EINVAL, when `ut` is not parseable. 

#### Returns
-ENOENT, when any [ut_process_var_t::name](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ut_process.md#structut__process__var__t_1a2ecbe8beed674d1fec1e5a2bffb8ed59) in `vars` contains an invalid character. 

#### Returns
-ENOBUFS, when `uri_len` is too small to fit the resulting URI. A truncated version of the resulting URI will then be stored in `uri`.

# struct `ut_process_var_t` 

Name-value-pair of a variable for URI template expansion.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structut__process__var__t_1a2ecbe8beed674d1fec1e5a2bffb8ed59) | name of the variable
`public const char * `[`value`](#structut__process__var__t_1a9ff451abb4b9c1dad1a47c4d883f947e) | value for the variable

## Members

#### `public const char * `[`name`](#structut__process__var__t_1a2ecbe8beed674d1fec1e5a2bffb8ed59) 

name of the variable

#### `public const char * `[`value`](#structut__process__var__t_1a9ff451abb4b9c1dad1a47c4d883f947e) 

value for the variable

