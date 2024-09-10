---
title: api-sys_memarray.md
description: api-sys_memarray.md
---
# group `sys_memarray` 

memory array allocator

pseudo dynamic allocation in static memory arrays Tobias Heider [heidert@nm.ifi.lmu.de](mailto:heidert@nm.ifi.lmu.de)

Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`memarray_init`](#group__sys__memarray_1ga909c3b3b5ae072abb2bb538ead44128d)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * data,size_t size,size_t num)`            | Initialize memarray pool with free list.
`public inline static void * `[`memarray_alloc`](#group__sys__memarray_1ga494e849500f569f233cacac15479fd2e)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem)`            | Allocate memory chunk in memarray pool.
`public inline static void * `[`memarray_calloc`](#group__sys__memarray_1ga2ed250c6b850055238418c5326e44215)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem)`            | Allocate and clear memory chunk in memarray pool.
`public inline static void `[`memarray_free`](#group__sys__memarray_1gac48c1df6dba9c365a3a04ecf07207581)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * ptr)`            | Free memory chunk in memarray pool.
`public void `[`memarray_extend`](#group__sys__memarray_1gafc794fb227ab2055aba0151cc732868c)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * data,size_t num)`            | Extend the memarray with a new memory region.
`public int `[`memarray_reduce`](#group__sys__memarray_1gaae3e3838130cb4081c56b029f50558f2)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * data,size_t num)`            | Reduce the memarray space, subtracting the memory pool.
`public size_t `[`memarray_available`](#group__sys__memarray_1ga9d880e76416369679653a9829ae2c815)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem)`            | Returns the number of blocks available.
`struct `[`memarray_t`](#structmemarray__t) | Memory pool.
`struct `[`memarray_element`](#structmemarray__element) | Memory pool element.

## Members

#### `public void `[`memarray_init`](#group__sys__memarray_1ga909c3b3b5ae072abb2bb538ead44128d)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * data,size_t size,size_t num)` 

Initialize memarray pool with free list.

`mem != NULL`

`data != NULL`

`size >= sizeof(void*)`

`num != 0`

#### Parameters
* `mem` memarray pool to initialize 

* `data` pointer to user-allocated data 

* `size` size of a single element in data 

* `num` number of elements in `data`

#### `public inline static void * `[`memarray_alloc`](#group__sys__memarray_1ga494e849500f569f233cacac15479fd2e)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem)` 

Allocate memory chunk in memarray pool.

`mem != NULL`

Allocated structure is not cleared before returned

#### Parameters
* `mem` memarray pool to allocate block in

#### Returns
pointer to allocated structure, if enough memory was available 

#### Returns
NULL, on failure

#### `public inline static void * `[`memarray_calloc`](#group__sys__memarray_1ga2ed250c6b850055238418c5326e44215)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem)` 

Allocate and clear memory chunk in memarray pool.

`mem != NULL`

#### Parameters
* `mem` memarray pool to allocate block in

#### Returns
pointer to allocated structure, if enough memory was available 

#### Returns
NULL, on failure

#### `public inline static void `[`memarray_free`](#group__sys__memarray_1gac48c1df6dba9c365a3a04ecf07207581)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * ptr)` 

Free memory chunk in memarray pool.

`mem != NULL`

`ptr != NULL`

#### Parameters
* `mem` memarray pool to free block in 

* `ptr` pointer to memarray chunk

#### `public void `[`memarray_extend`](#group__sys__memarray_1gafc794fb227ab2055aba0151cc732868c)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * data,size_t num)` 

Extend the memarray with a new memory region.

This function extends the memarray pool with a new memory region. The region must be able to fit the supplied number of elements of the size used when initializing this memarray.

`mem != NULL`

`data != NULL`

`num != 0`

#### Parameters
* `mem` memarray pool to extend 

* `data` pointer to user-allocated data 

* `num` number of elements in `data`

#### `public int `[`memarray_reduce`](#group__sys__memarray_1gaae3e3838130cb4081c56b029f50558f2)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem,void * data,size_t num)` 

Reduce the memarray space, subtracting the memory pool.

It is up to the user to free all chunks in the reduced pool. The function will check if all elements in the pool are freed.

#### Parameters
* `mem` memarray pool to reduce 

* `data` pointer to the user-allocated data to reduce 

* `num` number of elements to reduce the data pool with

#### `public size_t `[`memarray_available`](#group__sys__memarray_1ga9d880e76416369679653a9829ae2c815)`(`[`memarray_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_memarray.md#structmemarray__t)` * mem)` 

Returns the number of blocks available.

#### Parameters
* `mem` memarray pool

#### Returns
Number of elements available in the memarray pool

# struct `memarray_t` 

Memory pool.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void * `[`free_data`](#structmemarray__t_1a0d79965bb7617fd2386faf0dcc48fa49) | memory pool data / head of the free list
`public size_t `[`size`](#structmemarray__t_1a548499923fe28b111e8fb8fbe3aa66b2) | size of single list element

## Members

#### `public void * `[`free_data`](#structmemarray__t_1a0d79965bb7617fd2386faf0dcc48fa49) 

memory pool data / head of the free list

#### `public size_t `[`size`](#structmemarray__t_1a548499923fe28b111e8fb8fbe3aa66b2) 

size of single list element

# struct `memarray_element` 

Memory pool element.

Internal memarray element struct to increase code readability

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`memarray_element`](#structmemarray__element)` * `[`next`](#structmemarray__element_1a9ff6ded5fc7d0a15298e3c5f2bb70419) | Pointer to the next element.

## Members

#### `public struct `[`memarray_element`](#structmemarray__element)` * `[`next`](#structmemarray__element_1a9ff6ded5fc7d0a15298e3c5f2bb70419) 

Pointer to the next element.

