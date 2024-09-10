---
title: api-sys_clif.md
description: api-sys_clif.md
---
# group `sys_clif` 

Simple encoding and decoding of CoRE Link Format (RFC 6690) strings.

**See also**: RFC 6690: [https://tools.ietf.org/html/rfc6690](https://tools.ietf.org/html/rfc6690)

clif provides a high-level API for CoRE Link Format encoding and decoding of links, through the [clif_encode_link](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1gaee6e4e90a7fa04a2382b9cfda5eebff7) and [clif_decode_link](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga34e06cd7b46af940a401f8960b40db27) respectively.

The high-level API is built on top of low-level functions provided by clif, such as [clif_add_target](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga64bff762fe47c265b22d2aeb68bc9488), [clif_add_attr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1gaf8dc42338d1803aaa6ff52ac2867bc07), and [clif_get_attr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1gace6bb544828672a1ed5ee37bfb7fb7f6). Also, some convenience functions like [clif_get_attr_type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1gae2121fe08acabfbdd028a4df2544318c), [clif_attr_type_to_str](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga2de9d1863bc8f638a311d8e83e258dee) and [clif_init_attr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga8dddd9a82a434717cfc318b153bbbaf1) are provided, to facilitate the work with links.

Decoding[clif_decode_link](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga34e06cd7b46af940a401f8960b40db27) takes a buffer which contains an encoded link and returns the information of it in a [clif_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t) structure and each attribute in a [clif_attr_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t) structure of a given array.

```cpp
// A buffer 'input_buf' of length 'input_len' contains the links to decode
clif_attr_t out_attrs[ATTRS_NUM];
clif_t out_links[LINKS_NUM];

const char *pos = input_buf;
unsigned links_numof = 0;
unsigned attrs_numof = 0;

while (pos < &input_buf[input_len]) {
     ssize_t res = clif_decode_link(&out_links[links_numof],
                                    &out_attrs[attrs_numof],
                                    ATTRS_NUM - attrs_numof, pos,
                                    &input_buf[input_len]- pos);
     if (res < 0) {
         break;
     }
     pos += res;
     attrs_numof += out_links[links_numof].attrs_len;
     links_numof++;
}
```

Encoding[clif_encode_link](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1gaee6e4e90a7fa04a2382b9cfda5eebff7) encodes a given link into a buffer, it can be called with a NULL pointer, in that case it will only calculate the amount of bytes needed to encode the link. After every call to this function a separator needs to be added to the buffer.

```cpp
// A 'links' array of clif_t, of length 'links_len' contains the links to encode
char out[OUT_SIZE];
ssize_t res;
size_t pos = 0;

for (unsigned i = 0; i < links_len; i++) {
     if (i) {
         res = clif_add_link_separator(&out[pos], OUT_SIZE - pos);
         if (res <= 0) {
             break;
         }
         pos += res;
     }

     res = clif_encode_link(&links[i], &out[pos], OUT_SIZE - pos);
     if (res <= 0) {
         break;
     }
     pos += res;
}
```

'attribute', in this module, extends to the term 'link-param' on the ABNF in [section 2 of RFC 6690](https://tools.ietf.org/html/rfc6690#section-2).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@328`](#group__sys__clif_1gaf96be3e9de53e065a22cd7978e05dc5c)            | Return types for the [CoRE Link Format](#group__sys__clif) API.
`enum `[`clif_attr_type_t`](#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)            | Types of link format attributes.
`public ssize_t `[`clif_encode_link`](#group__sys__clif_1gaee6e4e90a7fa04a2382b9cfda5eebff7)`(const `[`clif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t)` * link,char * buf,size_t maxlen)`            | Encodes a given link in link format into a given buffer.
`public ssize_t `[`clif_decode_link`](#group__sys__clif_1ga34e06cd7b46af940a401f8960b40db27)`(`[`clif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t)` * link,`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attrs,unsigned attrs_len,const char * buf,size_t maxlen)`            | Decodes a string of link format.
`public ssize_t `[`clif_add_target_from_buffer`](#group__sys__clif_1ga85db09f71cf7a4db16dccda40ceb347e)`(const char * target,size_t target_len,char * buf,size_t maxlen)`            | Adds a given `target` to a given buffer `buf` using link format.
`public ssize_t `[`clif_add_target`](#group__sys__clif_1ga64bff762fe47c265b22d2aeb68bc9488)`(const char * target,char * buf,size_t maxlen)`            | Adds a given `target` to a given buffer `buf` using link format.
`public ssize_t `[`clif_add_attr`](#group__sys__clif_1gaf8dc42338d1803aaa6ff52ac2867bc07)`(`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attr,char * buf,size_t maxlen)`            | Adds a given `attr` to a given buffer `buf` using link format.
`public ssize_t `[`clif_add_link_separator`](#group__sys__clif_1gaf702a47253923be822ea1dea10f62dca)`(char * buf,size_t maxlen)`            | Adds the link separator character to a given `buf`, using link format.
`public ssize_t `[`clif_get_target`](#group__sys__clif_1gac37239f73ea9405321dcfe1b57246bee)`(const char * input,size_t input_len,char ** output)`            | Looks for a the target URI of a given link.
`public ssize_t `[`clif_get_attr`](#group__sys__clif_1gace6bb544828672a1ed5ee37bfb7fb7f6)`(const char * input,size_t input_len,`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attr)`            | Looks for the first attribute in a given link.
`public `[`clif_attr_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)` `[`clif_get_attr_type`](#group__sys__clif_1gae2121fe08acabfbdd028a4df2544318c)`(const char * input,size_t input_len)`            | Returns the attribute type of a given string.
`public ssize_t `[`clif_attr_type_to_str`](#group__sys__clif_1ga2de9d1863bc8f638a311d8e83e258dee)`(`[`clif_attr_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)` type,const char ** str)`            | Returns a constant string of a given attribute type.
`public int `[`clif_init_attr`](#group__sys__clif_1ga8dddd9a82a434717cfc318b153bbbaf1)`(`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attr,`[`clif_attr_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)` type)`            | Initializes the key of a given attribute according to a given type.
`struct `[`clif_attr_t`](#structclif__attr__t) | Link format attribute descriptor.
`struct `[`clif_t`](#structclif__t) | Link format descriptor.

## Members

#### `enum `[`@328`](#group__sys__clif_1gaf96be3e9de53e065a22cd7978e05dc5c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CLIF_OK            | success
CLIF_NO_SPACE            | not enough space in the buffer
CLIF_NOT_FOUND            | could not find a component in a buffer

Return types for the [CoRE Link Format](#group__sys__clif) API.

#### `enum `[`clif_attr_type_t`](#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CLIF_ATTR_ANCHOR            | anchor
CLIF_ATTR_REL            | rel
CLIF_ATTR_LANG            | hreflang
CLIF_ATTR_MEDIA            | media
CLIF_ATTR_TITLE            | title
CLIF_ATTR_TITLE_EXT            | title*
CLIF_ATTR_TYPE            | type
CLIF_ATTR_RT            | rt
CLIF_ATTR_IF            | if
CLIF_ATTR_SZ            | sz
CLIF_ATTR_CT            | ct
CLIF_ATTR_OBS            | obs
CLIF_ATTR_EXT            | extensions

Types of link format attributes.

#### `public ssize_t `[`clif_encode_link`](#group__sys__clif_1gaee6e4e90a7fa04a2382b9cfda5eebff7)`(const `[`clif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t)` * link,char * buf,size_t maxlen)` 

Encodes a given link in link format into a given buffer.

`link != NULL`

#### Parameters
* `link` link to encode.Must not be NULL. 

* `buf` buffer to output the encoded link. Can be NULL 

* `maxlen` size of `buf`

If `buf` is NULL this will return the amount of bytes that would be needed

#### Returns
amount of bytes used from `buf` in success 

#### Returns
CLIF_NO_SPACE if there is not enough space in the buffer

#### `public ssize_t `[`clif_decode_link`](#group__sys__clif_1ga34e06cd7b46af940a401f8960b40db27)`(`[`clif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__t)` * link,`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attrs,unsigned attrs_len,const char * buf,size_t maxlen)` 

Decodes a string of link format.

It decodes the first occurrence of a link.

`(link != NULL) && (buf != NULL)`

#### Parameters
* `link` link to populate. Must not be NULL. 

* `attrs` array of attrs to populate 

* `attrs_len` length of `attrs`

* `buf` string to decode. Must not be NULL. 

* `maxlen` size of `buf`

#### Returns
number of bytes parsed from `buf` in success 

#### Returns
CLIF_NOT_FOUND if the string is malformed

#### `public ssize_t `[`clif_add_target_from_buffer`](#group__sys__clif_1ga85db09f71cf7a4db16dccda40ceb347e)`(const char * target,size_t target_len,char * buf,size_t maxlen)` 

Adds a given `target` to a given buffer `buf` using link format.

`target != NULL`

#### Parameters
* `target` buffer containing the path to the resource. Must not be NULL. 

* `target_len` size of `target`

* `buf` buffer to output the formatted path. Can be NULL 

* `maxlen` size of `buf`

If `buf` is NULL this will return the amount of bytes that would be needed

#### Returns
in success the amount of bytes used in the buffer 

#### Returns
CLIF_NO_SPACE if there is not enough space in the buffer

#### `public ssize_t `[`clif_add_target`](#group__sys__clif_1ga64bff762fe47c265b22d2aeb68bc9488)`(const char * target,char * buf,size_t maxlen)` 

Adds a given `target` to a given buffer `buf` using link format.

`target != NULL`

#### Parameters
* `target` zero terminated string containing the path to the resource. Must not be NULL. 

* `buf` buffer to output the formatted path. Can be NULL 

* `maxlen` size of `buf`

If `buf` is NULL this will return the amount of bytes that would be needed

#### Returns
in success the amount of bytes used in the buffer 

#### Returns
CLIF_NO_SPACE if there is not enough space in the buffer

#### `public ssize_t `[`clif_add_attr`](#group__sys__clif_1gaf8dc42338d1803aaa6ff52ac2867bc07)`(`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attr,char * buf,size_t maxlen)` 

Adds a given `attr` to a given buffer `buf` using link format.

`(attr != NULL) && (attr->key != NULL)`

#### Parameters
* `attr` pointer to the attribute to add. Must not be NULL, and must contain a key. 

* `buf` buffer to add the attribute to. Can be NULL 

* `maxlen` size of `buf`

* If `buf` is NULL this will return the amount of bytes that would be needed.

* The length of the key must be set in `attr->key_len`.

#### Returns
amount of bytes used from the buffer if successful 

#### Returns
CLIF_NO_SPACE if there is not enough space in the buffer

#### `public ssize_t `[`clif_add_link_separator`](#group__sys__clif_1gaf702a47253923be822ea1dea10f62dca)`(char * buf,size_t maxlen)` 

Adds the link separator character to a given `buf`, using link format.

#### Parameters
* `buf` buffer to add the separator to. Can be NULL 

* `maxlen` size of `buf`

If `buf` is NULL this will return the amount of bytes that would be needed

#### Returns
amount of bytes used from buffer if successful 

#### Returns
CLIF_NO_SPACE if there is not enough space in the buffer

#### `public ssize_t `[`clif_get_target`](#group__sys__clif_1gac37239f73ea9405321dcfe1b57246bee)`(const char * input,size_t input_len,char ** output)` 

Looks for a the target URI of a given link.

`input != NULL`

#### Parameters
* `input` string where to look for the target. It should only be ONE link. Must not be NULL. 

* `input_len` length of `input`. 

* `output` if a target is found this will point to the beginning of it

#### Returns
length of the target if found 

#### Returns
CLIF_NOT_FOUND if no valid target is found

#### `public ssize_t `[`clif_get_attr`](#group__sys__clif_1gace6bb544828672a1ed5ee37bfb7fb7f6)`(const char * input,size_t input_len,`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attr)` 

Looks for the first attribute in a given link.

`(input != NULL) && (attr != NULL)`

In order to consider that the string contains a valid attribute, `input` should start with the attribute separator character ';'.

#### Parameters
* `input` string where to look for the attribute. It should only be ONE link. Must not be NULL. 

* `input_len` length of `input`

* `attr` pointer to store the found attribute information. Must not be NULL.

#### Returns
length of the attribute in the buffer if found 

#### Returns
CLIF_NOT_FOUND if no valid attribute is found

#### `public `[`clif_attr_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)` `[`clif_get_attr_type`](#group__sys__clif_1gae2121fe08acabfbdd028a4df2544318c)`(const char * input,size_t input_len)` 

Returns the attribute type of a given string.

`(input != NULL) && (input_len > 0)`

#### Parameters
* `input` string containing the attribute name. Must not be NULL. 

* `input_len` length of `input`. Must be greater than 0.

#### Returns
type of the attribute

#### `public ssize_t `[`clif_attr_type_to_str`](#group__sys__clif_1ga2de9d1863bc8f638a311d8e83e258dee)`(`[`clif_attr_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)` type,const char ** str)` 

Returns a constant string of a given attribute type.

#### Parameters
* `type` type of the attribute 

* `str` pointer to store the string pointer

#### Returns
length of the string 

#### Returns
CLIF_NOT_FOUND if the type is an extension or unknown

#### `public int `[`clif_init_attr`](#group__sys__clif_1ga8dddd9a82a434717cfc318b153bbbaf1)`(`[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * attr,`[`clif_attr_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__clif_1ga3ef132533546b0080d61fe16051b2219)` type)` 

Initializes the key of a given attribute according to a given type.

#### Parameters
* `attr` attribute to initialize 

* `type` type of the attribute

#### Returns
0 if successful 

#### Returns
<0 otherwise

# struct `clif_attr_t` 

Link format attribute descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char * `[`value`](#structclif__attr__t_1a81cfadb4cdc114ab8a2412f002603a7c) | string with the value
`public unsigned `[`value_len`](#structclif__attr__t_1a24beea68475d685ff769c980cbe566e0) | length of the value
`public const char * `[`key`](#structclif__attr__t_1a6c421521a13674fb61eec3f3f55aadec) | attribute name
`public unsigned `[`key_len`](#structclif__attr__t_1a102e9ef3d8951a714130e263db341120) | length of the attribute name

## Members

#### `public char * `[`value`](#structclif__attr__t_1a81cfadb4cdc114ab8a2412f002603a7c) 

string with the value

#### `public unsigned `[`value_len`](#structclif__attr__t_1a24beea68475d685ff769c980cbe566e0) 

length of the value

#### `public const char * `[`key`](#structclif__attr__t_1a6c421521a13674fb61eec3f3f55aadec) 

attribute name

#### `public unsigned `[`key_len`](#structclif__attr__t_1a102e9ef3d8951a714130e263db341120) 

length of the attribute name

# struct `clif_t` 

Link format descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char * `[`target`](#structclif__t_1a71f7d21f6b65bcb5b7ca5cc795ba4681) | target string
`public unsigned `[`target_len`](#structclif__t_1a180fd03a5b3424338229d7befb090b3d) | length of target string
`public `[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * `[`attrs`](#structclif__t_1a85e560a573363b96b10572f7344a9c2e) | array of attributes
`public unsigned `[`attrs_len`](#structclif__t_1a457f91e6a8cae6fe1e3ba8a11ea6d8bd) | size of array of attributes

## Members

#### `public char * `[`target`](#structclif__t_1a71f7d21f6b65bcb5b7ca5cc795ba4681) 

target string

#### `public unsigned `[`target_len`](#structclif__t_1a180fd03a5b3424338229d7befb090b3d) 

length of target string

#### `public `[`clif_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_clif.md#structclif__attr__t)` * `[`attrs`](#structclif__t_1a85e560a573363b96b10572f7344a9c2e) 

array of attributes

#### `public unsigned `[`attrs_len`](#structclif__t_1a457f91e6a8cae6fe1e3ba8a11ea6d8bd) 

size of array of attributes

