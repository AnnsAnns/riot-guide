---
title: api-drivers_periph_wdt.md
description: api-drivers_periph_wdt.md
---
# group `drivers_periph_wdt` 

Watchdog timer peripheral driver.

A watchdog timer (WDT) is an electronic or software timer that is used to detect and recover from unusual or suspect behaviour as well as software malfunctions. During `NORMAL` operation the application will reset [wdt_kick()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga17282fdbc67f2150ddb989b910f751a1) the timer counter preventing it from hitting 0. If due to software or hardware error the WDT counter isn't reset, it will trigger corrective actions, i.e. a system reboot or callback (not supported by all platforms).

This interface defines two operation modes `NORMAL` and `WINDOW`. In `NORMAL` operation if the WDT counter isn't reset before `max_time` then a reboot/callback is triggered. In `WINDOW` operation if a reset isn't triggered or if it's triggered outside of the time `window = [min_time, max_time]` a reboot is triggered.

NORMAL operationIn the code snippet and diagram `time` is an arbitrary value such that `time < MAX_TIME`.

* 0(ms)                                            MAX_TIME(ms)
* |----------------------------------------------------|
*
*                          time(ms)
* |--------------------------| - - - - - - - - - - - - |
*
*                            ^
*                            |
*                        wdt_kick()
* 

```cpp
#include <stdio.h>

#include "periph/wdt.h"
#include "xtimer.h"

int main(void)
{
    wdt_setup_reboot(0, MAX_TIME);
    wdt_start();

    while (1) {
        xtimer_usleep(time);
        wdt_kick();
    }
    return 0;
}
```

WINDOW operationIn the code snippet and diagram `time` is an arbitrary value such that `time < (MAX_TIME - MIN_TIME)`.

* 0(ms)                 MIN_TIME(ms)                MAX_TIME(ms)
*  |-------------------------|-----------WINDOW----------|
*
*                                  time(ms)
*                            |--------| - - - - - - - - -|
*                                     ^
*                                     |
*                                wdt_kick()
* 

```cpp
#include <stdio.h>

#include "periph/wdt.h"
#include "xtimer.h"

int main(void)
{
    wdt_setup_reboot(MIN_TIME, MAX_TIME);
    wdt_start();

    while (1) {
        xtimer_usleep(MIN_TIME + time);
        wdt_kick();
    }
    return 0;
}
```

WDT callbackBefore reboot WDT can trigger Early Wakeup Interrupt and execute a callback to perform specific safety operations of data logging before the actual reboot. This function is highly platform dependent so check the platform documentation for details on its constraints.

The callback will be executed CONFIG_WDT_WARNING_PERIOD before the actual reboot. The value of CONFIG_WDT_WARNING_PERIOD may be configurable or a fixed value. If a platform allows this value to be configured, the feature `periph_wdt_warning_period` is provided. But is in any case defined at compile time. Specific platform implementation should assert improper values.

In the code snippet and diagram `time` is an arbitrary value such that `time < MAX_TIME`.

```cpp
#include <stdio.h>

#include "periph/wdt.h"
#include "xtimer.h"

static void wdt_cb(void *arg)
{
    (void) arg;
     puts("wdt cb called, doing something now...");
}

int main(void)
{
    wdt_setup_reboot_with_callback(0, MAX_TIME, wdt_cb, arg);
    wdt_start();
    while (1) {
        xtimer_usleep(time);
        wdt_kick();
    }
    return 0;
}
```

* |---------------------MAX_TIME-----------------------|
*                      |---CONFIG_WDT_WARNING_PERIOD---|
*                      ^                               ^
*                      |                               |
*                   wdt_cb()                        reboot
* 

To include this feature, (If your platform supports it) in your application Makefile add:

```cpp
USEMODULE += periph_wdt_cb
```

WDT Auto-StartIt is possible to enable the Watchdog in early boot, before application startup:

```cpp
USEMODULE += periph_wdt_auto_start
```

The watchdog will automatically be initialized with the parameters [CONFIG_PERIPH_WDT_WIN_MIN_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1gabb6325491b846199cdf6d75349b7ed27) and [CONFIG_PERIPH_WDT_WIN_MAX_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga7db90f174edbc02c89674dcd3dabd3f9)

It is also possible to automatically kick the watchdog. This is a very non-invasive way of using the watchdog, but it is also very weak as it can only detect situations where low-priority threads are starved from execution and may even trigger wrongly in situations where the system just experiences high load, but would otherwise have recovered on it's own.

If you want to enable it anyway, select this module:

```cpp
USEMODULE += auto_init_wdt_thread
```

If you are using an event thread, you can also use the watchdog to ensure that events are processed in time. To do so, add

```cpp
USEMODULE += auto_init_wdt_event
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NWDT_TIME_LOWER_LIMIT`](#group__drivers__periph__wdt_1ga5265674ed64e5865196727196ef8265b)            | Lower limit in ms for wdt operating in NORMAL mode.
`define `[`NWDT_TIME_UPPER_LIMIT`](#group__drivers__periph__wdt_1ga04d8ac7c09912d8ac89d5ba4cc06b08c)            | Upper limit in ms for wdt operating in NORMAL mode.
`define `[`WWDT_TIME_LOWER_LIMIT`](#group__drivers__periph__wdt_1ga2adfbe7779c27a649bc67f4b09280d7f)            | Lower limit in ms for wdt operating in WINDOW mode.
`define `[`WWDT_TIME_UPPER_LIMIT`](#group__drivers__periph__wdt_1ga6cba16c50cd54b51b13a96077461b8b2)            | Upper limit in ms for wdt operating in WINDOW mode.
`define `[`WDT_HAS_STOP`](#group__drivers__periph__wdt_1gaeb358111eba1eb3ba04b65fe1fad0749)            | Set to 1 if the platform supports [wdt_stop()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga9765d6feb6010e6c7878b5b8af5e37d0), 0 otherwise.
`define `[`WDT_HAS_INIT`](#group__drivers__periph__wdt_1ga7513ced84868c0d8853a3ad09e3c5908)            | Set to 1 if the platform implements [wdt_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1gadef69697e0f9fc455ecb560f7d2fbe59), 0 otherwise.
`define `[`CONFIG_PERIPH_WDT_WIN_MIN_MS`](#group__drivers__periph__wdt_1gabb6325491b846199cdf6d75349b7ed27)            | If `periph_wdt_auto_start` is used, this will be the lower bound of when the WDT can be kicked.
`define `[`CONFIG_PERIPH_WDT_WIN_MAX_MS`](#group__drivers__periph__wdt_1ga7db90f174edbc02c89674dcd3dabd3f9)            | If `periph_wdt_auto_start` is used, this will be the max period after which the WDT must be kicked or else it will reboot the system.
`public void `[`wdt_start`](#group__drivers__periph__wdt_1gad903b703e17d721209d90540b7a9dd23)`(void)`            | Start watchdog timer.
`public void `[`wdt_stop`](#group__drivers__periph__wdt_1ga9765d6feb6010e6c7878b5b8af5e37d0)`(void)`            | Stop watchdog timer.
`public void `[`wdt_kick`](#group__drivers__periph__wdt_1ga17282fdbc67f2150ddb989b910f751a1)`(void)`            | Reset the watchdog timer counter, delay system reset.
`public void `[`wdt_setup_reboot`](#group__drivers__periph__wdt_1ga916389aa3426dd2e681895de51b60e1d)`(uint32_t min_time,uint32_t max_time)`            | Set up the wdt timer.
`public void `[`wdt_init`](#group__drivers__periph__wdt_1gadef69697e0f9fc455ecb560f7d2fbe59)`(void)`            | Initialize WDT module.
`public void `[`wdt_setup_reboot_with_callback`](#group__drivers__periph__wdt_1gaa8053b35c8fca081a813339029a483f4)`(uint32_t min_time,uint32_t max_time,`[`wdt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga997382d1544f2e8384d8418350973457)` wdt_cb,void * arg)`            | Set up the wdt timer with callback.

## Members

#### `define `[`NWDT_TIME_LOWER_LIMIT`](#group__drivers__periph__wdt_1ga5265674ed64e5865196727196ef8265b) 

Lower limit in ms for wdt operating in NORMAL mode.

#### `define `[`NWDT_TIME_UPPER_LIMIT`](#group__drivers__periph__wdt_1ga04d8ac7c09912d8ac89d5ba4cc06b08c) 

Upper limit in ms for wdt operating in NORMAL mode.

#### `define `[`WWDT_TIME_LOWER_LIMIT`](#group__drivers__periph__wdt_1ga2adfbe7779c27a649bc67f4b09280d7f) 

Lower limit in ms for wdt operating in WINDOW mode.

#### `define `[`WWDT_TIME_UPPER_LIMIT`](#group__drivers__periph__wdt_1ga6cba16c50cd54b51b13a96077461b8b2) 

Upper limit in ms for wdt operating in WINDOW mode.

#### `define `[`WDT_HAS_STOP`](#group__drivers__periph__wdt_1gaeb358111eba1eb3ba04b65fe1fad0749) 

Set to 1 if the platform supports [wdt_stop()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga9765d6feb6010e6c7878b5b8af5e37d0), 0 otherwise.

#### `define `[`WDT_HAS_INIT`](#group__drivers__periph__wdt_1ga7513ced84868c0d8853a3ad09e3c5908) 

Set to 1 if the platform implements [wdt_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1gadef69697e0f9fc455ecb560f7d2fbe59), 0 otherwise.

#### `define `[`CONFIG_PERIPH_WDT_WIN_MIN_MS`](#group__drivers__periph__wdt_1gabb6325491b846199cdf6d75349b7ed27) 

If `periph_wdt_auto_start` is used, this will be the lower bound of when the WDT can be kicked.

#### `define `[`CONFIG_PERIPH_WDT_WIN_MAX_MS`](#group__drivers__periph__wdt_1ga7db90f174edbc02c89674dcd3dabd3f9) 

If `periph_wdt_auto_start` is used, this will be the max period after which the WDT must be kicked or else it will reboot the system.

#### `public void `[`wdt_start`](#group__drivers__periph__wdt_1gad903b703e17d721209d90540b7a9dd23)`(void)` 

Start watchdog timer.

#### `public void `[`wdt_stop`](#group__drivers__periph__wdt_1ga9765d6feb6010e6c7878b5b8af5e37d0)`(void)` 

Stop watchdog timer.

Not all platforms support stopping the WDT. if WDT_HAS_STOP = 0 once the wdt timer is enabled it can't be stopped.

#### `public void `[`wdt_kick`](#group__drivers__periph__wdt_1ga17282fdbc67f2150ddb989b910f751a1)`(void)` 

Reset the watchdog timer counter, delay system reset.

#### `public void `[`wdt_setup_reboot`](#group__drivers__periph__wdt_1ga916389aa3426dd2e681895de51b60e1d)`(uint32_t min_time,uint32_t max_time)` 

Set up the wdt timer.

If NORMAL watchdog only use max_time (min_time=0).
 If WINDOW watchdog set min_time and max_time.

#### Parameters
* `min_time` lower bound for WINDOW watchdog in ms, has to be 0 for NORMAL watchdog operation 

* `max_time` upper bound for WINDOW watchdog in ms, time before reset for NORMAL watchdog

#### `public void `[`wdt_init`](#group__drivers__periph__wdt_1gadef69697e0f9fc455ecb560f7d2fbe59)`(void)` 

Initialize WDT module.

Only implemented and called for platforms with WDT_HAS_INIT = 1.

#### `public void `[`wdt_setup_reboot_with_callback`](#group__drivers__periph__wdt_1gaa8053b35c8fca081a813339029a483f4)`(uint32_t min_time,uint32_t max_time,`[`wdt_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga997382d1544f2e8384d8418350973457)` wdt_cb,void * arg)` 

Set up the wdt timer with callback.

If NORMAL watchdog only use max_time (min_time=0).
 If WINDOW watchdog set min_time and max_time.

#### Parameters
* `min_time` lower bound for WINDOW watchdog in ms, has to be 0 for NORMAL watchdog. 

* `max_time` upper bound for WINDOW watchdog in ms, time before reset for NORMAL watchdog. 

* `wdt_cb` wdt callback, can be NULL 

* `arg` optional argument which is passed to the callback, can be NULL

