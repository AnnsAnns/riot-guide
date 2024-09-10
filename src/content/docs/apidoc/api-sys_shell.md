---
title: api-sys_shell.md
description: api-sys_shell.md
---
# group `sys_shell` 

Simple shell interpreter.

Security expectationsAccess to the shell grants access to the system that may exercise any power the firmware can exercise. While some commands only provide limited access to the system, and it is best practice for commands to validate their input, there is no expectation of security of the system when an attacker gains access to the shell.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHELL_DEFAULT_BUFSIZE`](#group__sys__shell_1gac6ce9a12c394d101eb934286106ed2ee)            | Default shell buffer size (maximum line length shell can handle)
`define `[`SHELL_COMMAND`](#group__sys__shell_1gaafec93867eb7af5bedfe2dcfb8d8120e)            | Define shell command.
`public void `[`shell_post_readline_hook`](#group__sys__shell_1ga58012536a8c7a12b37cd82b0ffddbc47)`(void)`            | Optional hook after readline has triggered.
`public void `[`shell_pre_command_hook`](#group__sys__shell_1ga06b6793cabe83ec1e30db3bfcafa8ac5)`(int argc,char ** argv)`            | Optional hook before shell command is called.
`public void `[`shell_post_command_hook`](#group__sys__shell_1ga80aaccb8dd5ee218b6dcae8175444afd)`(int ret,int argc,char ** argv)`            | Optional hook after shell command is called.
`public void `[`shell_run_once`](#group__sys__shell_1ga3d3d8dea426c6c5fa188479e53286aec)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line_buf,int len)`            | Start a shell and exit once EOF is reached.
`public inline static void `[`shell_run_forever`](#group__sys__shell_1ga51ab5e366fa7797e8529071abd68f68b)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line_buf,int len)`            | Start a shell and restart it if it exits.
`public inline static void `[`shell_run`](#group__sys__shell_1ga6e7970d4823d1624837c9e7ddc6accf0)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line_buf,int len)`            | Back-porting alias for [shell_run_forever](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga51ab5e366fa7797e8529071abd68f68b).
`public int `[`shell_handle_input_line`](#group__sys__shell_1ga3cff0292efc7d2c7cad01708064a444e)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line)`            | Parse and run a line of text as a shell command with arguments.
`public int `[`shell_parse_file`](#group__sys__shell_1ga9581ba9058c4dbcb09468055a83bcde6)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,const char * filename,unsigned * line_nr)`            | Read shell commands from a file and run them.
`struct `[`shell_command_t`](#structshell__command__t) | A single command in the list of the supported commands.
`struct `[`shell_command_xfa_t`](#structshell__command__xfa__t) | A single command in the list of the supported commands.

## Members

#### `define `[`SHELL_DEFAULT_BUFSIZE`](#group__sys__shell_1gac6ce9a12c394d101eb934286106ed2ee) 

Default shell buffer size (maximum line length shell can handle)

When terminals that buffer input and send the full command line in one go are used on stdin implementations with fast bursts of data, it may be necessary to increase the [STDIO_RX_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__stdio_1ga0435de87ff46b82a46f4007b2a462237) to make practical use of this buffer, especially because the current mechanism of passing stdin (`[isrpipe_t](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t) stdin_isrpipe`) does not support backpressure and overflows silently. As a consequence, commands through such terminals appear to be truncated at [STDIO_RX_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__stdio_1ga0435de87ff46b82a46f4007b2a462237) bytes (defaulting to 64) unless the command is sent in parts (on many terminals, by presing Ctrl-D half way through the command).

For example, this affects systems with direct USB stdio ([STDIO over CDC ACM (usbus)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usbus__cdc__acm__stdio)) with the default terminal `pyterm`.

#### `define `[`SHELL_COMMAND`](#group__sys__shell_1gaafec93867eb7af5bedfe2dcfb8d8120e) 

Define shell command.

This is not available from C++, but a trivial C file can easily hook up a `extern "C"` function implemented in C++.

This macro is a helper for defining a shell command and adding it to the shell commands XFA (cross file array).

Shell commands added using this macros will be sorted *after* builtins and commands passed via parameter to `[shell_run_once()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga3d3d8dea426c6c5fa188479e53286aec)`. If a command with the same name exists in any of those, they will make a command added via this macro inaccassible.

Commands added with this macro will be sorted alphanumerically by `name`.

**This feature is experimental!**
 This should be considered experimental API, subject to change without notice!

Example:

```cpp
#include "[shell.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#shell_8h)"
static int _my_command(int argc, char **argv) {
  // ...
}
[SHELL_COMMAND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1gaafec93867eb7af5bedfe2dcfb8d8120e)(my_command, "my command help text", _my_command);
```

#### `public void `[`shell_post_readline_hook`](#group__sys__shell_1ga58012536a8c7a12b37cd82b0ffddbc47)`(void)` 

Optional hook after readline has triggered.

User implemented function gets called after the shell readline is complete. Only executed with the `shell_hooks` module.

#### `public void `[`shell_pre_command_hook`](#group__sys__shell_1ga06b6793cabe83ec1e30db3bfcafa8ac5)`(int argc,char ** argv)` 

Optional hook before shell command is called.

User implemented function gets called before a valid shell command will be called. Only executed with the `shell_hooks` module.

#### Parameters
* `argc` Number of arguments supplied to the function invocation. 

* `argv` The supplied argument list.

#### `public void `[`shell_post_command_hook`](#group__sys__shell_1ga80aaccb8dd5ee218b6dcae8175444afd)`(int ret,int argc,char ** argv)` 

Optional hook after shell command is called.

User implemented function gets called before a valid shell command will be called. Only executed with the `shell_hooks` module.

#### Parameters
* `ret` Return value of the shell command. 

* `argc` Number of arguments supplied to the function invocation. 

* `argv` The supplied argument list.

#### `public void `[`shell_run_once`](#group__sys__shell_1ga3d3d8dea426c6c5fa188479e53286aec)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line_buf,int len)` 

Start a shell and exit once EOF is reached.

#### Parameters
* `commands` ptr to array of command structs 

* `line_buf` Buffer that will be used for reading a line 

* `len` nr of bytes that fit in line_buf

#### `public inline static void `[`shell_run_forever`](#group__sys__shell_1ga51ab5e366fa7797e8529071abd68f68b)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line_buf,int len)` 

Start a shell and restart it if it exits.

If `CONFIG_SHELL_SHUTDOWN_ON_EXIT` is set (e.g. on native)
             the shell will instead shut down RIOT once EOF is reached.

#### Parameters
* `commands` ptr to array of command structs 

* `line_buf` Buffer that will be used for reading a line 

* `len` nr of bytes that fit in line_buf

#### `public inline static void `[`shell_run`](#group__sys__shell_1ga6e7970d4823d1624837c9e7ddc6accf0)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line_buf,int len)` 

Back-porting alias for [shell_run_forever](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga51ab5e366fa7797e8529071abd68f68b).

#### Parameters
* `commands` ptr to array of command structs 

* `line_buf` Buffer that will be used for reading a line 

* `len` nr of bytes that fit in line_buf

#### `public int `[`shell_handle_input_line`](#group__sys__shell_1ga3cff0292efc7d2c7cad01708064a444e)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,char * line)` 

Parse and run a line of text as a shell command with arguments.

#### Parameters
* `commands` ptr to array of command structs 

* `line` The input line to parse

#### Returns
return value of the found command 

#### Returns
-ENOEXEC if no valid command could be found

#### `public int `[`shell_parse_file`](#group__sys__shell_1ga9581ba9058c4dbcb09468055a83bcde6)`(const `[`shell_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_shell.md#structshell__command__t)` * commands,const char * filename,unsigned * line_nr)` 

Read shell commands from a file and run them.

This requires the `vfs` module.

#### Parameters
* `commands` ptr to array of command structs 

* `filename` file to read shell commands from 

* `line_nr` line on which an error occurred, may be NULL

#### Returns
0 if all commands were executed successful error return of failed command otherwise

# struct `shell_command_t` 

A single command in the list of the supported commands.

The list of commands is NULL terminated, i.e. the last element must be `{ NULL, NULL, NULL }`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structshell__command__t_1aca72232a2f1848131bd0238991478df3) | Name of the function.
`public const char * `[`desc`](#structshell__command__t_1ae42a6658af9f41c405936655f629510e) | Description to print in the "help" command.
`public `[`shell_command_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga6cf265eee7d4bf93b186d6aaadd659a5)` `[`handler`](#structshell__command__t_1ab9e626b70c34603cf06cc0d82ee25e6b) | The callback function.

## Members

#### `public const char * `[`name`](#structshell__command__t_1aca72232a2f1848131bd0238991478df3) 

Name of the function.

#### `public const char * `[`desc`](#structshell__command__t_1ae42a6658af9f41c405936655f629510e) 

Description to print in the "help" command.

#### `public `[`shell_command_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga6cf265eee7d4bf93b186d6aaadd659a5)` `[`handler`](#structshell__command__t_1ab9e626b70c34603cf06cc0d82ee25e6b) 

The callback function.

# struct `shell_command_xfa_t` 

A single command in the list of the supported commands.

This type is used internally by the [SHELL_COMMAND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1gaafec93867eb7af5bedfe2dcfb8d8120e) macro.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * `[`name`](#structshell__command__xfa__t_1a1ade46eb0323a92fb891dc5c9e13f6ac) | Name of the function.
`public `[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * `[`desc`](#structshell__command__xfa__t_1a5bf5750a4dbd670787e3fd23c77ed2f9) | Description to print in the "help" command.
`public `[`shell_command_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga6cf265eee7d4bf93b186d6aaadd659a5)` `[`handler`](#structshell__command__xfa__t_1a28ae36d89fefd0d4462c3310d99c9feb) | The callback function.

## Members

#### `public `[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * `[`name`](#structshell__command__xfa__t_1a1ade46eb0323a92fb891dc5c9e13f6ac) 

Name of the function.

#### `public `[`FLASH_ATTR`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__flash__utils_1ga6ac949979ebabc3d7130779422ead49a)` const char * `[`desc`](#structshell__command__xfa__t_1a5bf5750a4dbd670787e3fd23c77ed2f9) 

Description to print in the "help" command.

#### `public `[`shell_command_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__shell_1ga6cf265eee7d4bf93b186d6aaadd659a5)` `[`handler`](#structshell__command__xfa__t_1a28ae36d89fefd0d4462c3310d99c9feb) 

The callback function.

