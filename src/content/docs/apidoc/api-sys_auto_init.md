---
title: api-sys_auto_init.md
description: api-sys_auto_init.md
---
# group `sys_auto_init` 

Auto initialize modules.

This feature can be enabled in any application by adding the `auto_init` module to the application's `Makefile`:

```cpp
USEMODULE += auto_init
```

`auto_init` initializes any included module that provides auto-initialization capabilities. This concerns first any other included module that does not require a parameter in its init function, i.e. if the init prototype looks like this: `void MODULE_init(void)`. Most timer modules or simple drivers can be initialized by `auto_init`. The modules will be initialized in the context of the main thread right before the main function gets called. Be aware that most modules expect to be initialized only once, so do not call a module's init function when using `auto_init` unless you know what you're doing.

More complex device [drivers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers), for example [SAUL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) drivers or [network device drivers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev), can also be initialized automatically using the `auto_init` module. To do so, each driver implementation must provide default initialization parameters in the `DRIVER_params.h` file. These parameters can be overridden from the application code in several ways (examples with the [BMP180 temperature and pressure sensor](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmp180) oversampling parameter `BMP180_PARAM_OVERSAMPLING`):

* by passing them via the `CFLAGS` variable on the build command line:

```cpp
CFLAGS=-DBMP180_PARAM_OVERSAMPLING=1 USEMODULE=bmp180 make BOARD=arduino-zero -C examples/default
```

* by setting the `CFLAGS` variable in the application `Makefile`:

```cpp
CFLAGS += -DBMP180_PARAM_OVERSAMPLING=1
```

* by copying the `[bmp180_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bmp180__params_8h)` header to the application directory and editing it there with the desired values. This file is be included first and thus the one from the driver implementation is skipped.

From low-level CPU peripheral, the default initialization parameters are defined in each board configuration that provides them.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

