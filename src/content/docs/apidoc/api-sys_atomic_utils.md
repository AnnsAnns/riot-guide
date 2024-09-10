---
title: api-sys_atomic_utils.md
description: api-sys_atomic_utils.md
---
# group `sys_atomic_utils` 

This modules adds some utility functions to perform atomic accesses.

UsageThe atomic utilitys allow atomic access to regular variables.

```cpp
uint32_t global_counter;

void irq_handler(void)
{
    // No need to use atomic access in IRQ handlers, if other IRQ handlers
    // never touch global_counter: At the beginning and at the end of every
    // ISR a memory barrier is in place, so that at the end of the ISR the
    // memory will be in a state as if all memory accesses within the ISR
    // took place in sequential order.
    //
    // Extra detail only RIOT kernel hackers need to know: If all ISRs
    // accessing the same variable cannot interrupt each other, atomic
    // access is still not needed. (Currently only PendSV on ARM can be
    // interrupted by other IRQs with RIOTs default IRQ priorities. If
    // application developers modifies those, they can be assumed to know
    // what they are doing - or to happily face the consequences otherwise.)
    global_counter++;
}

void called_by_thread_a(void) {
    if ([atomic_load_u32](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__atomic__utils_1ga398731da7ac71e7cee0fc749c74e33cf)(&global_counter) > THRESHOLD) {
        on_threshold_reached();
        [atomic_store_u32](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__atomic__utils_1gaa662e27310799fc5aabd6d625fb274bc)(&global_counter, 0);
    }
}

void called_by_thread_b(void) {
    atomic_add_u32(&global_counter, 42);
}
```

MotivationThere are some reasons why these functions might be chosen over the [C11 Atomic Operations Library](https://en.cppreference.com/w/c/atomic) in some advanced use cases:

* The functions allow mixing of atomic and non-atomic accesses. E.g. while IRQs are disabled anyway, even plain accesses cannot be interrupted but are often more efficient.

* On platforms not supporting lock-free access, a library call is generated instead. The fallback implementation used here is more efficient in terms of both CPU instructions and ROM size.

* On platforms where some operations can be implemented lock free while others can't, at least LLVM will use the library call even for those accesses that can be implemented lock-free. This is because without assuming how the library call implements atomic access for the other functions, mixing library calls and lock free accesses could result in data corruption. But this implementation resorts to disabling IRQs when lock-free implementations are not possible, which mixes well with lock-free accesses. Thus, additional overhead for atomic accesses is only spent where needed.

* In some cases the fallback implementation performs better than the lock free implementation. E.g. if a specific platform has an atomic compare and swap instruction, this could be used to perform a read-modify-write in a loop until the value initially read was not changed in between. Just disabling IRQs to implement an atomic read-modify-write operation is likely more efficient. C11 atomics will however always use the lock free implementation (if such exists), assuming that this is more efficient. This assumption was made with desktop class hardware in mind, but is not generally true for bare metal targets. These function allow to optimize for the actual hardware RIOT is running on.

* This library provides "semi-atomic" read-modify-write operations, which are useful when at most one thread is ever writing to memory. In that case, only the write part of the read-modify-write operation needs to be performed in an atomic fashion in order for the reading threads to perceive atomic updates of the variable. This is significantly cheaper than atomic read-modify-write operations for many platforms

Guarantees

* Every utility function here acts as a barrier for code reordering regarding

* For the `atomic_*()` family of functions: The whole operation will be done in an non-interruptible fashion

* For the `semi_atomic_*()` family of functions: The write part of the operation is done atomically. If at most one thread is ever performing changes to a variable using the `semi_atomic_()` functions, those changes will appear as if they were atomic to all other threads.

Porting to new CPUsAt the bare minimum, create an empty `atomic_utils_arch.h` file. This will result in the fallback implementations being used.

To expose lock-free atomic operations, add an implementation to the `atomic_utils_arch.h` file and disable the fallback implementation by defining `HAS_<FN_NAME_ALL_CAPS>`, where `<FN_NAME_ALL_CAPS>` is the name of the function provided in all upper case. E.g. most platforms will be able to provide lock-free reads and writes up to their word size and can expose this as follows for GCC:

```cpp
// All the user header boilerplate
#define HAS_ATOMIC_LOAD_U8
static inline uint8_t [atomic_load_u8](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__atomic__utils_1ga8616a09c88eb59cd547c4909c0276308)(const uint8_t *var)
{
    return __atomic_load_1(var, __ATOMIC_SEQ_CST);
}

#define HAS_ATOMIC_STORE_U8
static inline void [atomic_store_u8](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__atomic__utils_1ga0db129499ac65230ff2ff03212e959f4)(uint8_t *dest, uint8_t val)
{
    __atomic_store_1(dest, val, __ATOMIC_SEQ_CST);
}
```

Note: The `semi_atomic_*()` family of functions is always provided using `atomic_*()` functions in the cheapest way possible.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ATOMIC_LOAD_IMPL`](#group__sys__atomic__utils_1ga32397410318abfee61e671826748e6dd)            | Generates a static inline function implementing `atomic_load_u<width>()`
`define `[`ATOMIC_STORE_IMPL`](#group__sys__atomic__utils_1gaaeb8122ae7b12f7ae585b3b2a1940fbf)            | Generates a static inline function implementing `atomic_store_u<width>()`
`define `[`ATOMIC_FETCH_OP_IMPL`](#group__sys__atomic__utils_1ga1b761cea579753804788001139cf123f)            | Generates a static inline function implementing `atomic_fecth_<op>_u<width>()`
`struct `[`atomic_bit_u8_t`](#structatomic__bit__u8__t) | Type specifying a bit in an `uint8_t`
`struct `[`atomic_bit_u16_t`](#structatomic__bit__u16__t) | Type specifying a bit in an `uint16_t`
`struct `[`atomic_bit_u32_t`](#structatomic__bit__u32__t) | Type specifying a bit in an `uint32_t`
`struct `[`atomic_bit_u64_t`](#structatomic__bit__u64__t) | Type specifying a bit in an `uint64_t`

## Members

#### `define `[`ATOMIC_LOAD_IMPL`](#group__sys__atomic__utils_1ga32397410318abfee61e671826748e6dd) 

Generates a static inline function implementing `atomic_load_u<width>()`

#### Parameters
* `name` Name of the variable type, e.g. "u8" 

* `type` Variable type, e.g. `uint8_t`

#### `define `[`ATOMIC_STORE_IMPL`](#group__sys__atomic__utils_1gaaeb8122ae7b12f7ae585b3b2a1940fbf) 

Generates a static inline function implementing `atomic_store_u<width>()`

#### Parameters
* `name` Name of the variable type, e.g. "u8" 

* `type` Variable type, e.g. `uint8_t`

#### `define `[`ATOMIC_FETCH_OP_IMPL`](#group__sys__atomic__utils_1ga1b761cea579753804788001139cf123f) 

Generates a static inline function implementing `atomic_fecth_<op>_u<width>()`

#### Parameters
* `opname` Name of the operator in `op`, e.g. "and" for `+`

* `op` Operator to implement atomically, e.g. `+`

* `name` Name of the variable type, e.g. "u8" 

* `type` Variable type, e.g. `uint8_t`

# struct `atomic_bit_u8_t` 

Type specifying a bit in an `uint8_t`

This is an implementation specific type!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`dest`](#structatomic__bit__u8__t_1aa097a4651c0d347170fe4b52042c5352) | Memory containing the bit to set/clear.
`public uint8_t `[`mask`](#structatomic__bit__u8__t_1a5f186fa960a9d5c5118d768d9fe4f69b) | Bitmask used for setting the bit.

## Members

#### `public uint8_t * `[`dest`](#structatomic__bit__u8__t_1aa097a4651c0d347170fe4b52042c5352) 

Memory containing the bit to set/clear.

#### `public uint8_t `[`mask`](#structatomic__bit__u8__t_1a5f186fa960a9d5c5118d768d9fe4f69b) 

Bitmask used for setting the bit.

# struct `atomic_bit_u16_t` 

Type specifying a bit in an `uint16_t`

This is an implementation specific type!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t * `[`dest`](#structatomic__bit__u16__t_1affd2e3903fb6095a55e44af43e42c8e3) | Memory containing the bit to set/clear.
`public uint16_t `[`mask`](#structatomic__bit__u16__t_1a14477df4a4e9b040809976731cc7317b) | Bitmask used for setting the bit.

## Members

#### `public uint16_t * `[`dest`](#structatomic__bit__u16__t_1affd2e3903fb6095a55e44af43e42c8e3) 

Memory containing the bit to set/clear.

#### `public uint16_t `[`mask`](#structatomic__bit__u16__t_1a14477df4a4e9b040809976731cc7317b) 

Bitmask used for setting the bit.

# struct `atomic_bit_u32_t` 

Type specifying a bit in an `uint32_t`

This is an implementation specific type!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t * `[`dest`](#structatomic__bit__u32__t_1acfd20f77e8b7612211c609ac9231bbd3) | Memory containing the bit to set/clear.
`public uint32_t `[`mask`](#structatomic__bit__u32__t_1adc13faf3fcc123da102c87e28854fdb4) | Bitmask used for setting the bit.

## Members

#### `public uint32_t * `[`dest`](#structatomic__bit__u32__t_1acfd20f77e8b7612211c609ac9231bbd3) 

Memory containing the bit to set/clear.

#### `public uint32_t `[`mask`](#structatomic__bit__u32__t_1adc13faf3fcc123da102c87e28854fdb4) 

Bitmask used for setting the bit.

# struct `atomic_bit_u64_t` 

Type specifying a bit in an `uint64_t`

This is an implementation specific type!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint64_t * `[`dest`](#structatomic__bit__u64__t_1a4383f143d7698b01d18a6c14e2d41e84) | Memory containing the bit to set/clear.
`public uint64_t `[`mask`](#structatomic__bit__u64__t_1a9d27c39752574d59addef4a7aa0c14ec) | Bitmask used for setting the bit.

## Members

#### `public uint64_t * `[`dest`](#structatomic__bit__u64__t_1a4383f143d7698b01d18a6c14e2d41e84) 

Memory containing the bit to set/clear.

#### `public uint64_t `[`mask`](#structatomic__bit__u64__t_1a9d27c39752574d59addef4a7aa0c14ec) 

Bitmask used for setting the bit.

