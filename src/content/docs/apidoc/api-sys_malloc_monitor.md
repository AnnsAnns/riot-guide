---
title: api-sys_malloc_monitor.md
description: api-sys_malloc_monitor.md
---
# group `sys_malloc_monitor` 

This module allows to monitor the dynamic memory usage of a certain piece of code.

This module automatically selects [Thread-safe wrappers for malloc and friends](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__ts) and naturally incurs a certain runtime overhead. It is not meant for production usage. 

Mikolai Gütschow [mikolai.guetschow@tu-dresden.de](mailto:mikolai.guetschow@tu-dresden.de)

DescriptionThis module allows to monitor the dynamic memory usage of a certain piece of code. It works by hooking into (wrappers to) [malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392), [calloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga57ec1f2580107f2f42684e77bf2a6d7c), [realloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga1a6b5e8d2f1c37e5b43e4345586075be), and [free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1gafbedc913aa4651b3c3b4b3aecd9b4711) calls to internally record the current and all-time maximum heap memory usage.

Note that in general dynamic memory management is a bad idea on the constrained devices RIOT is targeting. So maybe it is better to just adapt your code to use static memory management instead.

UsageEnable the module with `USEMODULE += malloc_monitor`.

Add `#include "malloc_monitor.h"` to the file in which you want to monitor dynamic memory usage. Use [malloc_monitor_get_usage_current()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1gab9f58450ed54755a5235860a5dab4404) to retrieve the size of the currently allocated heap memory in bytes. [malloc_monitor_get_usage_high_watermark()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1ga743882f0584698616b02c30ae735f6b7) returns the all-time maximum since startup or the last call to [malloc_monitor_reset_high_watermark()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1gaa09f0da764e5c7f1de4db627c8b427b4).

Note that `malloc_monitor` currently has no notion of threads and will at any point in time report the global dynamic memory usage, not the one used by the currently running thread. Thread-safety is achieved through usage of [Thread-safe wrappers for malloc and friends](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__ts), though.

ExampleImagine you want to investigate the dynamic memory consumption of a certain function `func()`. The following snippet could get you started:

```cpp
#include <stddef.h>
#include <[stdio.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#stdio_8h)>

#include "malloc_monitor.h"

int main(void)
{
    size_t before = [malloc_monitor_get_usage_current](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1gab9f58450ed54755a5235860a5dab4404)();
    size_t before_max = [malloc_monitor_get_usage_high_watermark](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1ga743882f0584698616b02c30ae735f6b7)();
    func();
    size_t after = [malloc_monitor_get_usage_current](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1gab9f58450ed54755a5235860a5dab4404)();
    size_t after_max = [malloc_monitor_get_usage_high_watermark](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__malloc__monitor_1ga743882f0584698616b02c30ae735f6b7)();

    if (after != before) {
        puts("func() " (after < before ? "decreased" : "increased") " global dynamic memory usage.");
    }
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("The maximal dynamic memory usage of func() was %d bytes.", after_max - before_max);
}
```

For further usage examples, refer to the corresponding tests in `tests/sys/malloc_monitor`.

ConfigurationThe maximum number of pointers that can be monitored at once can be set with Kconfig in System > Heap Memory Usage Monitor > Monitor Size or by setting the corresponding CFlag in your application's Makefile as `CFLAGS += CONFIG_MODULE_SYS_MALLOC_MONITOR_SIZE=42`. It defaults to 100.

For more fine-grained debugging of invalid calls to [free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1gafbedc913aa4651b3c3b4b3aecd9b4711), duplicated calls to [free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1gafbedc913aa4651b3c3b4b3aecd9b4711), or memory leaks, the module can be configured to print information on every call to [malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392), [calloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga57ec1f2580107f2f42684e77bf2a6d7c), [realloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga1a6b5e8d2f1c37e5b43e4345586075be), or [free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1gafbedc913aa4651b3c3b4b3aecd9b4711) by setting System > Heap Memory Usage Monitor > Verbose or adding `CFLAGS += CONFIG_MODULE_SYS_MALLOC_MONITOR_VERBOSE=1` to your Makefile. `malloc_monitor` defaults to be non-verbose.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

