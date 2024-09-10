---
title: api-sys_ptrtag.md
description: api-sys_ptrtag.md
---
# group `sys_ptrtag` 

ConceptData structures are often aligned in memory to the word size. On 32 bit machines, this often results in the two least significant bits containing no information (as they have to be zero, due to this alignment). In many cases gaining two bits of information storage in RAM is all you need. In these case, pointer tagging can come in handy.

The tricky part is however to get this working portable on all architectures, possibly even on 8 bit machines that have no alignment requirements. This utility provides helpers to enforce alignment requirements for all platforms, so that pointer tagging can be used everywhere.

Usage
```cpp
 // Use the PTRTAG attribute to ensure that pointers to this structure can
 // be tagged, even if structure would not have a suitable alignment
 // otherwise
 typedef struct [PTRTAG](./doc/starlight-docs/src/content/docs/apidoc/api-sys_event.md#structPTRTAG) {
    uint32_t bar;
} foo_t;

 void isr_callback(void *data) {
     // extract pointer
     struct foo *ptr = [ptrtag_ptr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ptrtag_1ga3f6d9bd0e57ca157a7c79d0ccc0287b4)(data);
     // extract tag
     uint8_t tag = [ptrtag_tag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ptrtag_1ga31600722dd3fa9490e2b8fbf9ce21de6)(data);
     work_on_data(ptr, tag);
 }

 int main(void) {
     foo_t data;
     uint8_t tag = 3;
     // pack pointer and tag into tagged pointer
     void *ptr_and_tag = [ptrtag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ptrtag_1ga83a6297cd0935d4d14510c8adfa8e407)(&data, tag);
     init_isr(params, isr_callback, ptr_and_tag);
 }
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PTRTAG`](#group__sys__ptrtag_1gadf582752ab291dd35ccf02c188f65d16)            | Pointers to data marked with this attribute will be tag-able.
`public inline static void * `[`ptrtag`](#group__sys__ptrtag_1ga83a6297cd0935d4d14510c8adfa8e407)`(void * ptr,uint8_t tag)`            | Create a tagged pointer.
`public inline static void * `[`ptrtag_ptr`](#group__sys__ptrtag_1ga3f6d9bd0e57ca157a7c79d0ccc0287b4)`(void * tagged_ptr)`            | Extract the original pointer from a tagged pointer.
`public inline static uint8_t `[`ptrtag_tag`](#group__sys__ptrtag_1ga31600722dd3fa9490e2b8fbf9ce21de6)`(void * tagged_ptr)`            | Extract the tag from a tagged pointer.

## Members

#### `define `[`PTRTAG`](#group__sys__ptrtag_1gadf582752ab291dd35ccf02c188f65d16) 

Pointers to data marked with this attribute will be tag-able.

This will ensure a minimum alignment of 4 bytes

#### `public inline static void * `[`ptrtag`](#group__sys__ptrtag_1ga83a6297cd0935d4d14510c8adfa8e407)`(void * ptr,uint8_t tag)` 

Create a tagged pointer.

#### Parameters
* `ptr` Pointer to tag 

* `tag` Tag to add 

#### Returns
Tagged pointer encoding both `ptr` and `tag`

`ptr` points to data marked with [PTRTAG](./doc/starlight-docs/src/content/docs/apidoc/api-sys_event.md#structPTRTAG)

`tag` contains a two bit value (its numeric value 0, 1, 2, or 3)

Expect assertions blowing up when the preconditions are not met.

#### `public inline static void * `[`ptrtag_ptr`](#group__sys__ptrtag_1ga3f6d9bd0e57ca157a7c79d0ccc0287b4)`(void * tagged_ptr)` 

Extract the original pointer from a tagged pointer.

#### Parameters
* `tagged_ptr` The tagged pointer to extract the original pointer from 

#### Returns
The original "un-tagged" pointer encoded in `tagged_ptr`

#### `public inline static uint8_t `[`ptrtag_tag`](#group__sys__ptrtag_1ga31600722dd3fa9490e2b8fbf9ce21de6)`(void * tagged_ptr)` 

Extract the tag from a tagged pointer.

#### Parameters
* `tagged_ptr` The tagged pointer to extract the original pointer from 

#### Returns
The tag encoded into `tagged_ptr`

