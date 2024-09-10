---
title: api-sys_shell_lock.md
description: api-sys_shell_lock.md
---
# group `sys_shell_lock` 

Simple module to provide a password protection for the shell.

**This feature is experimental!**
 This module is an experimental feature and only shows as a proof of concept how the shell could be protected with a password. Do not expect relevant security from it for production, since Man-in-the-Middle attacks are possible depending on the used connection method!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SHELL_LOCK_ATTEMPTS_BEFORE_TIME_LOCK`](#group__sys__shell__lock_1ga4b082660cbba6a425b9ad78035d0ab77)            | Lock the login process after given attempts of failed logins for a few seconds.
`define `[`CONFIG_SHELL_LOCK_AUTO_LOCK_TIMEOUT_MS`](#group__sys__shell__lock_1gada66f1db2cac3e02c43f43a7fc6905fa)            | Lock the shell after this time span without user input Defaults to 5 minutes but can be overwritten in the applications Makefile.
`public void `[`shell_lock_checkpoint`](#group__sys__shell__lock_1ga5fdf19ae3e6b10e34570d5e6af8de620)`(char * line_buf,int buf_size)`            | Entry point for the lock mechanism.
`public bool `[`shell_lock_is_locked`](#group__sys__shell__lock_1gac6681d31ce72eab4712247eefe63f991)`(void)`            | Returns true, if the shell is in the locked state.
`public void `[`shell_lock_do_lock`](#group__sys__shell__lock_1ga7fb9592bb4e25c2e7b57753e852c8586)`(void)`            | Lock the shell.

## Members

#### `define `[`CONFIG_SHELL_LOCK_ATTEMPTS_BEFORE_TIME_LOCK`](#group__sys__shell__lock_1ga4b082660cbba6a425b9ad78035d0ab77) 

Lock the login process after given attempts of failed logins for a few seconds.

#### `define `[`CONFIG_SHELL_LOCK_AUTO_LOCK_TIMEOUT_MS`](#group__sys__shell__lock_1gada66f1db2cac3e02c43f43a7fc6905fa) 

Lock the shell after this time span without user input Defaults to 5 minutes but can be overwritten in the applications Makefile.

#### `public void `[`shell_lock_checkpoint`](#group__sys__shell__lock_1ga5fdf19ae3e6b10e34570d5e6af8de620)`(char * line_buf,int buf_size)` 

Entry point for the lock mechanism.

If locked, the user will be asked for a password. This function won't return until the correct password has been entered.

#### Parameters
* `line_buf` Buffer for reading in the password from stdin 

* `buf_size` Buffer size

#### `public bool `[`shell_lock_is_locked`](#group__sys__shell__lock_1gac6681d31ce72eab4712247eefe63f991)`(void)` 

Returns true, if the shell is in the locked state.

#### Returns
Whether the shell is locked or not.

#### `public void `[`shell_lock_do_lock`](#group__sys__shell__lock_1ga7fb9592bb4e25c2e7b57753e852c8586)`(void)` 

Lock the shell.

