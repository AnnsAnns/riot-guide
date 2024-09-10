---
title: api-sys_cpp_new_delete.md
description: api-sys_cpp_new_delete.md
---
# group `sys_cpp_new_delete` 

This module provides the `new` and `delete` operators for platforms that do not use `libstdc++`.

This module is automatically selected, if needed. Never add it manually.

BackgroundOn some platforms `libstdc++` is not used or not available, like on the AVR. Such platforms can use this module to implement the C++ `new` and `delete` operators using `malloc` and `free` respectively. However, to be thread-safe, a thread-safe implementation of `malloc` and `free` must be present.

UsageThis module is intended to be use by platforms that not providing the required operators. Hence, application developers and users should never select this module by hand.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

