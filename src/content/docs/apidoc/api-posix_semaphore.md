---
title: api-posix_semaphore.md
description: api-posix_semaphore.md
---
# group `posix_semaphore` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SEM_FAILED`](#group__posix__semaphore_1ga2ef55dcb46a51cb0f879f4c1724bdded)            | Value returned if sem_open failed.
`public inline static int `[`sem_init`](#group__posix__semaphore_1ga77e321a5c305de05288c0cb7c4b23d61)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem,int pshared,unsigned value)`            | Initialize an unnamed semaphore.
`public inline static int `[`sem_destroy`](#group__posix__semaphore_1gaac8f466c14e0978adb70837cd596ff54)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)`            | destroy an unnamed semaphore
`public inline static int `[`sem_post`](#group__posix__semaphore_1gabed4c0b3486cef29ccac5feef117a30a)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)`            | Unlock a semaphore.
`public inline static int `[`sem_wait`](#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)`            | Lock a semaphore.
`public inline static `[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * `[`sem_open`](#group__posix__semaphore_1ga32ec2fa580100788d68a4f83880f3f24)`(const char * name,int oflag,...)`            | Open a named semaphore `name` with open flags `oflag`.
`public inline static int `[`sem_close`](#group__posix__semaphore_1gae2fe7304d1e0dbf1462accbcbd1fc1c3)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)`            | Close descriptor for named semaphore `sem`.
`public inline static int `[`sem_unlink`](#group__posix__semaphore_1ga3403a59db7cf8a932995b9fa0ffc3097)`(const char * name)`            | Remove named semaphore `name`.
`public int `[`sem_timedwait`](#group__posix__semaphore_1ga9fa286fcc7ddce4e32fa449f34a494c6)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem,const struct timespec * abstime)`            | Similar to sem_wait but wait only until `abstime`.
`public inline static int `[`sem_trywait`](#group__posix__semaphore_1ga7c348ef6d69b4b871d912588af6900e3)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)`            | Test whether `sem` is posted.
`public inline static int `[`sem_getvalue`](#group__posix__semaphore_1ga58ebf139e806c7a25fe385ec657208d8)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem,int * sval)`            | Get current value of `sem` and store it in `sval`.

## Members

#### `define `[`SEM_FAILED`](#group__posix__semaphore_1ga2ef55dcb46a51cb0f879f4c1724bdded) 

Value returned if sem_open failed.

#### `public inline static int `[`sem_init`](#group__posix__semaphore_1ga77e321a5c305de05288c0cb7c4b23d61)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem,int pshared,unsigned value)` 

Initialize an unnamed semaphore.

**See also**: [The Open Group Base Specifications Issue 7, sem_init() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_init.html)

The [sem_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga77e321a5c305de05288c0cb7c4b23d61) function shall initialize the unnamed semaphore referred to by `sem`. The value of the initialized semaphore shall be `value`. Following a successful call to [sem_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga77e321a5c305de05288c0cb7c4b23d61), the semaphore may be used in subsequent calls to [sem_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103), [sem_timedwait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga9fa286fcc7ddce4e32fa449f34a494c6), [sem_trywait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga7c348ef6d69b4b871d912588af6900e3), [sem_post()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gabed4c0b3486cef29ccac5feef117a30a), and [sem_destroy()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gaac8f466c14e0978adb70837cd596ff54). This semaphore shall remain usable until the semaphore is destroyed.

#### Parameters
* `sem` Semaphore to initialize. 

* `pshared` **(unused, since RIOT only has threads)** Semaphore is shared between processes not threads. 

* `value` Value to set.

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

#### `public inline static int `[`sem_destroy`](#group__posix__semaphore_1gaac8f466c14e0978adb70837cd596ff54)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)` 

destroy an unnamed semaphore

**See also**: [The Open Group Base Specifications Issue 7, sem_destroy() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_destroy.html)

The [sem_destroy()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gaac8f466c14e0978adb70837cd596ff54) function shall destroy the unnamed semaphore indicated by `sem`. Only a semaphore that was created using [sem_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga77e321a5c305de05288c0cb7c4b23d61) may be destroyed using [sem_destroy()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gaac8f466c14e0978adb70837cd596ff54); the effect of calling [sem_destroy()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gaac8f466c14e0978adb70837cd596ff54) with a named semaphore is undefined. The effect of subsequent use of the semaphore `sem` is undefined until sem is reinitialized by another call to [sem_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga77e321a5c305de05288c0cb7c4b23d61).

It is safe to destroy an initialized semaphore upon which no threads are currently blocked. The effect of destroying a semaphore upon which other threads are currently blocked is undefined.

#### Parameters
* `sem` A semaphore.

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

#### `public inline static int `[`sem_post`](#group__posix__semaphore_1gabed4c0b3486cef29ccac5feef117a30a)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)` 

Unlock a semaphore.

**See also**: [The Open Group Base Specifications Issue 7, sem_post() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_post.html)

The [sem_post()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gabed4c0b3486cef29ccac5feef117a30a) function shall unlock the semaphore referenced by `sem` by performing a semaphore unlock operation on that semaphore.

If the semaphore value resulting from this operation is positive, then no threads were blocked waiting for the semaphore to become unlocked; the semaphore value is simply incremented.

If the value of the semaphore resulting from this operation is zero, then one of the threads blocked waiting for the semaphore shall be allowed to return successfully from its call to [sem_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103).

#### Parameters
* `sem` A semaphore

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

#### `public inline static int `[`sem_wait`](#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)` 

Lock a semaphore.

**See also**: [The Open Group Base Specifications Issue 7, sem_wait() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_wait.html)

The [sem_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103) function shall lock the semaphore referenced by `sem` by performing a semaphore lock operation on that semaphore. If the semaphore value is currently zero, then the calling thread shall not return from the call to [sem_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103) until it either locks the semaphore or the call is interrupted by a signal.

#### Parameters
* `sem` A semaphore.

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

#### `public inline static `[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * `[`sem_open`](#group__posix__semaphore_1ga32ec2fa580100788d68a4f83880f3f24)`(const char * name,int oflag,...)` 

Open a named semaphore `name` with open flags `oflag`.

**See also**: [The Open Group Base Specifications Issue 7, sem_open() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_open.html)

> Todo: named semaphore are currently not supported

#### Parameters
* `name` Name to set. 

* `oflag` Flags to set.

#### Returns
Always [SEM_FAILED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga2ef55dcb46a51cb0f879f4c1724bdded), since it is not implemented currently.

#### `public inline static int `[`sem_close`](#group__posix__semaphore_1gae2fe7304d1e0dbf1462accbcbd1fc1c3)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)` 

Close descriptor for named semaphore `sem`.

**See also**: [The Open Group Base Specifications Issue 7, sem_close() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_close.html)

> Todo: named semaphore are currently not supported

#### Parameters
* `sem` Semaphore to close.

#### Returns
Always -1, since it is not implemented currently.

#### `public inline static int `[`sem_unlink`](#group__posix__semaphore_1ga3403a59db7cf8a932995b9fa0ffc3097)`(const char * name)` 

Remove named semaphore `name`.

**See also**: [The Open Group Base Specifications Issue 7, sem_unlink() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_unlink.html)

> Todo: named semaphore are currently not supported

#### Parameters
* `name` Name to unlink.

#### Returns
Always -1, since it is not implemented currently.

#### `public int `[`sem_timedwait`](#group__posix__semaphore_1ga9fa286fcc7ddce4e32fa449f34a494c6)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem,const struct timespec * abstime)` 

Similar to sem_wait but wait only until `abstime`.

**See also**: [The Open Group Base Specifications Issue 7, sem_timedwait() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_timedwait.html)

The [sem_timedwait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga9fa286fcc7ddce4e32fa449f34a494c6) function shall lock the semaphore referenced by `sem` as in the [sem_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gac1961c654dbba3a7b6a337c9696eb103) function. However, if the semaphore cannot be locked without waiting for another process or thread to unlock the semaphore by performing a [sem_post()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1gabed4c0b3486cef29ccac5feef117a30a) function, this wait shall be terminated when the specified timeout expires.

#### Parameters
* `sem` Semaphore to wait on. 

* `abstime` Absolute time (that is when the clock on which temouts are based equals this value) the timeout for the wait shall expire. If the value specified has already passed the timeout expires immediately.

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

#### `public inline static int `[`sem_trywait`](#group__posix__semaphore_1ga7c348ef6d69b4b871d912588af6900e3)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem)` 

Test whether `sem` is posted.

**See also**: [The Open Group Base Specifications Issue 7, sem_trywait() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_trywait.html)

#### Parameters
* `sem` Semaphore to try to wait on

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

#### `public inline static int `[`sem_getvalue`](#group__posix__semaphore_1ga58ebf139e806c7a25fe385ec657208d8)`(`[`sem_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__semaphore_1ga634a03f9d2c7240d7cdecc9effa28e15)` * sem,int * sval)` 

Get current value of `sem` and store it in `sval`.

**See also**: [The Open Group Base Specifications Issue 7, sem_getvalue() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_getvalue.html)

#### Parameters
* `sem` Semaphore to get the value from. 

* `sval` Place where value goes to.

#### Returns
0 on success. 

#### Returns
-1, on error and errno set to indicate the error.

