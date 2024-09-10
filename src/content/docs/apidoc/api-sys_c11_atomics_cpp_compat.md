---
title: api-sys_c11_atomics_cpp_compat.md
description: api-sys_c11_atomics_cpp_compat.md
---
# group `sys_c11_atomics_cpp_compat` 

C++ compatibility of default C11 atomics types.

This module provides opaque `typedef`s for each standard C11 atomic type with the same size and alignment requirements. The contents of types are not accessible to C++ code, but this allows `struct`s to be defined with the same memory layout as the C version, so that they can be allocated from C++.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ATOMIC_VAR_INIT`](#group__sys__c11__atomics__cpp__compat_1ga4ff4b67e9d999a657aabe04ce9263b69)            | Initialize an atomic variable.
`struct `[`atomic_bool`](#structatomic__bool) | Type with the same alignment and size as `[atomic_bool](#structatomic__bool)`
`struct `[`atomic_char`](#structatomic__char) | Type with the same alignment and size as `[atomic_char](#structatomic__char)`
`struct `[`atomic_schar`](#structatomic__schar) | Type with the same alignment and size as `[atomic_schar](#structatomic__schar)`
`struct `[`atomic_uchar`](#structatomic__uchar) | Type with the same alignment and size as `[atomic_uchar](#structatomic__uchar)`
`struct `[`atomic_short`](#structatomic__short) | Type with the same alignment and size as `[atomic_short](#structatomic__short)`
`struct `[`atomic_ushort`](#structatomic__ushort) | Type with the same alignment and size as `[atomic_ushort](#structatomic__ushort)`
`struct `[`atomic_int`](#structatomic__int) | Type with the same alignment and size as `[atomic_int](#structatomic__int)`
`struct `[`atomic_uint`](#structatomic__uint) | Type with the same alignment and size as `[atomic_uint](#structatomic__uint)`
`struct `[`atomic_long`](#structatomic__long) | Type with the same alignment and size as `[atomic_long](#structatomic__long)`
`struct `[`atomic_ulong`](#structatomic__ulong) | Type with the same alignment and size as `[atomic_ulong](#structatomic__ulong)`
`struct `[`atomic_llong`](#structatomic__llong) | Type with the same alignment and size as `[atomic_llong](#structatomic__llong)`
`struct `[`atomic_ullong`](#structatomic__ullong) | Type with the same alignment and size as `[atomic_ullong](#structatomic__ullong)`
`struct `[`atomic_int_least8_t`](#structatomic__int__least8__t) | Type with the same alignment and size as `[atomic_int_least8_t](#structatomic__int__least8__t)`
`struct `[`atomic_uint_least8_t`](#structatomic__uint__least8__t) | Type with the same alignment and size as `[atomic_uint_least8_t](#structatomic__uint__least8__t)`
`struct `[`atomic_int_least16_t`](#structatomic__int__least16__t) | Type with the same alignment and size as `[atomic_int_least16_t](#structatomic__int__least16__t)`
`struct `[`atomic_uint_least16_t`](#structatomic__uint__least16__t) | Type with the same alignment and size as `[atomic_uint_least16_t](#structatomic__uint__least16__t)`
`struct `[`atomic_int_least32_t`](#structatomic__int__least32__t) | Type with the same alignment and size as `[atomic_int_least32_t](#structatomic__int__least32__t)`
`struct `[`atomic_uint_least32_t`](#structatomic__uint__least32__t) | Type with the same alignment and size as `[atomic_uint_least32_t](#structatomic__uint__least32__t)`
`struct `[`atomic_int_least64_t`](#structatomic__int__least64__t) | Type with the same alignment and size as `[atomic_int_least64_t](#structatomic__int__least64__t)`
`struct `[`atomic_uint_least64_t`](#structatomic__uint__least64__t) | Type with the same alignment and size as `[atomic_uint_least64_t](#structatomic__uint__least64__t)`
`struct `[`atomic_int_fast8_t`](#structatomic__int__fast8__t) | Type with the same alignment and size as `[atomic_int_fast8_t](#structatomic__int__fast8__t)`
`struct `[`atomic_uint_fast8_t`](#structatomic__uint__fast8__t) | Type with the same alignment and size as `[atomic_uint_fast8_t](#structatomic__uint__fast8__t)`
`struct `[`atomic_int_fast16_t`](#structatomic__int__fast16__t) | Type with the same alignment and size as `[atomic_int_fast16_t](#structatomic__int__fast16__t)`
`struct `[`atomic_uint_fast16_t`](#structatomic__uint__fast16__t) | Type with the same alignment and size as `[atomic_uint_fast16_t](#structatomic__uint__fast16__t)`
`struct `[`atomic_int_fast32_t`](#structatomic__int__fast32__t) | Type with the same alignment and size as `[atomic_int_fast32_t](#structatomic__int__fast32__t)`
`struct `[`atomic_uint_fast32_t`](#structatomic__uint__fast32__t) | Type with the same alignment and size as `[atomic_uint_fast32_t](#structatomic__uint__fast32__t)`
`struct `[`atomic_int_fast64_t`](#structatomic__int__fast64__t) | Type with the same alignment and size as `[atomic_int_fast64_t](#structatomic__int__fast64__t)`
`struct `[`atomic_uint_fast64_t`](#structatomic__uint__fast64__t) | Type with the same alignment and size as `[atomic_uint_fast64_t](#structatomic__uint__fast64__t)`
`struct `[`atomic_intptr_t`](#structatomic__intptr__t) | Type with the same alignment and size as `[atomic_intptr_t](#structatomic__intptr__t)`
`struct `[`atomic_uintptr_t`](#structatomic__uintptr__t) | Type with the same alignment and size as `[atomic_uintptr_t](#structatomic__uintptr__t)`
`struct `[`atomic_size_t`](#structatomic__size__t) | Type with the same alignment and size as `[atomic_size_t](#structatomic__size__t)`
`struct `[`atomic_intmax_t`](#structatomic__intmax__t) | Type with the same alignment and size as `[atomic_intmax_t](#structatomic__intmax__t)`
`struct `[`atomic_uintmax_t`](#structatomic__uintmax__t) | Type with the same alignment and size as `[atomic_uintmax_t](#structatomic__uintmax__t)`

## Members

#### `define `[`ATOMIC_VAR_INIT`](#group__sys__c11__atomics__cpp__compat_1ga4ff4b67e9d999a657aabe04ce9263b69) 

Initialize an atomic variable.

Usage (same syntax as the real C11 atomic initializer): 
```cpp
atomic_int foo = ATOMIC_VAR_INIT(42);
```

# struct `atomic_bool` 

Type with the same alignment and size as `[atomic_bool](#structatomic__bool)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_BOOL_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__bool_1a95db0a067ad9879bf1e641374c984d28) | Opaque content placeholder.

## Members

#### `public ATOMIC_BOOL_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__bool_1a95db0a067ad9879bf1e641374c984d28) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_char` 

Type with the same alignment and size as `[atomic_char](#structatomic__char)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_CHAR_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__char_1aebc4345207d9e1c0352cb3d89c172b6c) | Opaque content placeholder.

## Members

#### `public ATOMIC_CHAR_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__char_1aebc4345207d9e1c0352cb3d89c172b6c) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_schar` 

Type with the same alignment and size as `[atomic_schar](#structatomic__schar)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_SCHAR_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__schar_1ae174c8f84396e0f231730d925749a7ca) | Opaque content placeholder.

## Members

#### `public ATOMIC_SCHAR_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__schar_1ae174c8f84396e0f231730d925749a7ca) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uchar` 

Type with the same alignment and size as `[atomic_uchar](#structatomic__uchar)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UCHAR_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uchar_1a9e5f5ad7e73d07efb424eac1607b079e) | Opaque content placeholder.

## Members

#### `public ATOMIC_UCHAR_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uchar_1a9e5f5ad7e73d07efb424eac1607b079e) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_short` 

Type with the same alignment and size as `[atomic_short](#structatomic__short)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_SHORT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__short_1a7c6558e6dcc1445969cf2eb0c55d36d5) | Opaque content placeholder.

## Members

#### `public ATOMIC_SHORT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__short_1a7c6558e6dcc1445969cf2eb0c55d36d5) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_ushort` 

Type with the same alignment and size as `[atomic_ushort](#structatomic__ushort)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_USHORT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__ushort_1a5aa343edfa5a3a678b3a0a8b9270f3d9) | Opaque content placeholder.

## Members

#### `public ATOMIC_USHORT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__ushort_1a5aa343edfa5a3a678b3a0a8b9270f3d9) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int` 

Type with the same alignment and size as `[atomic_int](#structatomic__int)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int_1adbb06f293eee29493c028df274cb6d0b) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int_1adbb06f293eee29493c028df274cb6d0b) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint` 

Type with the same alignment and size as `[atomic_uint](#structatomic__uint)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint_1a8e60856442a7394fa2b09d13548ebd6c) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint_1a8e60856442a7394fa2b09d13548ebd6c) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_long` 

Type with the same alignment and size as `[atomic_long](#structatomic__long)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_LONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__long_1a0d2226bbf7e52a3b22c8ed349e0ad982) | Opaque content placeholder.

## Members

#### `public ATOMIC_LONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__long_1a0d2226bbf7e52a3b22c8ed349e0ad982) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_ulong` 

Type with the same alignment and size as `[atomic_ulong](#structatomic__ulong)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_ULONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__ulong_1a7da847dd718103e7de9529e4bd8e298d) | Opaque content placeholder.

## Members

#### `public ATOMIC_ULONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__ulong_1a7da847dd718103e7de9529e4bd8e298d) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_llong` 

Type with the same alignment and size as `[atomic_llong](#structatomic__llong)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_LLONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__llong_1acf968b8ee6993a1372b99f22682daeba) | Opaque content placeholder.

## Members

#### `public ATOMIC_LLONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__llong_1acf968b8ee6993a1372b99f22682daeba) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_ullong` 

Type with the same alignment and size as `[atomic_ullong](#structatomic__ullong)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_ULLONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__ullong_1ab59c97a73ce8164778050137547a5dc0) | Opaque content placeholder.

## Members

#### `public ATOMIC_ULLONG_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__ullong_1ab59c97a73ce8164778050137547a5dc0) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_least8_t` 

Type with the same alignment and size as `[atomic_int_least8_t](#structatomic__int__least8__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_LEAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least8__t_1a215643b0f66f305ea57995b7fe7fee87) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_LEAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least8__t_1a215643b0f66f305ea57995b7fe7fee87) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_least8_t` 

Type with the same alignment and size as `[atomic_uint_least8_t](#structatomic__uint__least8__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_LEAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least8__t_1a158640f7bffca095aa8d3c4121fa96d8) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_LEAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least8__t_1a158640f7bffca095aa8d3c4121fa96d8) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_least16_t` 

Type with the same alignment and size as `[atomic_int_least16_t](#structatomic__int__least16__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_LEAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least16__t_1ad38be487dae9fb0732bfc335fe7e2f76) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_LEAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least16__t_1ad38be487dae9fb0732bfc335fe7e2f76) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_least16_t` 

Type with the same alignment and size as `[atomic_uint_least16_t](#structatomic__uint__least16__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_LEAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least16__t_1ad9f0f48dcd69a6b259ad4fd7c058ce51) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_LEAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least16__t_1ad9f0f48dcd69a6b259ad4fd7c058ce51) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_least32_t` 

Type with the same alignment and size as `[atomic_int_least32_t](#structatomic__int__least32__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_LEAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least32__t_1a1f75f2fe7091afefa0fdf9b953bea39b) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_LEAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least32__t_1a1f75f2fe7091afefa0fdf9b953bea39b) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_least32_t` 

Type with the same alignment and size as `[atomic_uint_least32_t](#structatomic__uint__least32__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_LEAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least32__t_1a2a950f77feb6523de01dbb28258cccb2) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_LEAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least32__t_1a2a950f77feb6523de01dbb28258cccb2) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_least64_t` 

Type with the same alignment and size as `[atomic_int_least64_t](#structatomic__int__least64__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_LEAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least64__t_1a5ddcf68ff0576a2b2adb218767462b6d) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_LEAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__least64__t_1a5ddcf68ff0576a2b2adb218767462b6d) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_least64_t` 

Type with the same alignment and size as `[atomic_uint_least64_t](#structatomic__uint__least64__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_LEAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least64__t_1a746bd79c1cf2504dab1abfd3667a5cdb) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_LEAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__least64__t_1a746bd79c1cf2504dab1abfd3667a5cdb) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_fast8_t` 

Type with the same alignment and size as `[atomic_int_fast8_t](#structatomic__int__fast8__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_FAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast8__t_1a5eca6481532e93534a38fde097c14617) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_FAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast8__t_1a5eca6481532e93534a38fde097c14617) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_fast8_t` 

Type with the same alignment and size as `[atomic_uint_fast8_t](#structatomic__uint__fast8__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_FAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast8__t_1a29d15c954bbea12b2ea741d404156ba1) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_FAST8_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast8__t_1a29d15c954bbea12b2ea741d404156ba1) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_fast16_t` 

Type with the same alignment and size as `[atomic_int_fast16_t](#structatomic__int__fast16__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_FAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast16__t_1a6d0001839f7580c5b80ed8ef307778e4) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_FAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast16__t_1a6d0001839f7580c5b80ed8ef307778e4) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_fast16_t` 

Type with the same alignment and size as `[atomic_uint_fast16_t](#structatomic__uint__fast16__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_FAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast16__t_1a494f3d0866d61b5bcccefee3f29f2e54) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_FAST16_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast16__t_1a494f3d0866d61b5bcccefee3f29f2e54) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_fast32_t` 

Type with the same alignment and size as `[atomic_int_fast32_t](#structatomic__int__fast32__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_FAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast32__t_1ad47d6c24fcf127cef23d5cc3d1a7a265) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_FAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast32__t_1ad47d6c24fcf127cef23d5cc3d1a7a265) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_fast32_t` 

Type with the same alignment and size as `[atomic_uint_fast32_t](#structatomic__uint__fast32__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_FAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast32__t_1ac0a7cc3dadf640daf102aa5767c4f760) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_FAST32_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast32__t_1ac0a7cc3dadf640daf102aa5767c4f760) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_int_fast64_t` 

Type with the same alignment and size as `[atomic_int_fast64_t](#structatomic__int__fast64__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INT_FAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast64__t_1a1ce008297fd14a914e762b9b85720880) | Opaque content placeholder.

## Members

#### `public ATOMIC_INT_FAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__int__fast64__t_1a1ce008297fd14a914e762b9b85720880) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uint_fast64_t` 

Type with the same alignment and size as `[atomic_uint_fast64_t](#structatomic__uint__fast64__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINT_FAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast64__t_1a5847b8baf5c1f78a83fe688ad4e378b2) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINT_FAST64_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uint__fast64__t_1a5847b8baf5c1f78a83fe688ad4e378b2) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_intptr_t` 

Type with the same alignment and size as `[atomic_intptr_t](#structatomic__intptr__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INTPTR_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__intptr__t_1a84d73065b6b2b40f71f4a8ae386726f2) | Opaque content placeholder.

## Members

#### `public ATOMIC_INTPTR_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__intptr__t_1a84d73065b6b2b40f71f4a8ae386726f2) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uintptr_t` 

Type with the same alignment and size as `[atomic_uintptr_t](#structatomic__uintptr__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINTPTR_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uintptr__t_1aacdca001a28f76c3b6383b2804073d36) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINTPTR_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uintptr__t_1aacdca001a28f76c3b6383b2804073d36) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_size_t` 

Type with the same alignment and size as `[atomic_size_t](#structatomic__size__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_SIZE_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__size__t_1a48e43e33080fa1b19f73229a1c072abb) | Opaque content placeholder.

## Members

#### `public ATOMIC_SIZE_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__size__t_1a48e43e33080fa1b19f73229a1c072abb) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_intmax_t` 

Type with the same alignment and size as `[atomic_intmax_t](#structatomic__intmax__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_INTMAX_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__intmax__t_1a3f1af54d765c1ddd4a3e364dde750065) | Opaque content placeholder.

## Members

#### `public ATOMIC_INTMAX_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__intmax__t_1a3f1af54d765c1ddd4a3e364dde750065) 

Opaque content placeholder.

Access only for initializing from C++

# struct `atomic_uintmax_t` 

Type with the same alignment and size as `[atomic_uintmax_t](#structatomic__uintmax__t)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public ATOMIC_UINTMAX_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uintmax__t_1afbc06a7b28c6cc6b59625f14f3ba06d1) | Opaque content placeholder.

## Members

#### `public ATOMIC_UINTMAX_T_SAME_SIZED_TYPE `[`do_not_access_from_cpp`](#structatomic__uintmax__t_1afbc06a7b28c6cc6b59625f14f3ba06d1) 

Opaque content placeholder.

Access only for initializing from C++

