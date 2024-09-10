---
title: api-drivers_at.md
description: api-drivers_at.md
---
# group `drivers_at` 

AT (Hayes) command set library.

This module provides functions to interact with devices using AT commands.

Most functions compare the bytes echoed by the device with what they intended to send, and bail out if there's no match.

Furthermore, the library tries to cope with difficulties regarding different line endings. It usually sends `<command><CR>`, but expects `<command>\LF\CR` as echo.

As a debugging aid, when compiled with `-DAT_PRINT_INCOMING=1`, every input byte gets printed.

Command echoingMost DCEs (Data Circuit-terminating Equipment, aka modem) support command echoing and enable it by default, and so does this driver. If you disabled echoing on the DCE, you can compile this driver NOT to expect echoing by defining CONFIG_AT_SEND_SKIP_ECHO. Note, if the driver is NOT expecting command echoing but the DCE is echoing, it should work just fine if and only if the EOL sequences of both DCE and DTE (Data Terminal Equipmend - i.e. the device using this driver) match, i.e. `AT_RECV_EOL_1 AT_RECV_EOL_2 == AT_SEND_EOL`. In other words, if you are unsure about the echoing behavior of the DCE or want to support both, set AT_SEND_EOL = AT_RECV_EOL_1 AT_RECV_EOL_2 and define CONFIG_AT_SEND_SKIP_ECHO. This works because the URC (Unsolicited Result Code) logic will intercept the echoes (see below).

Unsolicited Result Codes (URC)An unsolicited result code is a string message that is not triggered as a information text response to a previous AT command and can be output at any time to inform a specific event or status change.

Some DCEs (Data Circuit-terminating Equipment, aka modem), like the LTE modules from uBlox define a grace period where URCs are guaranteed NOT to be sent as the time span between:

* the command EOL character reception AND command being internally accepted

* the EOL character of the last response line

As follows, there is an indeterminate amount of time between:

* the command EOL character being sent

* the command EOL character reception AND command being internally accepted, i.e. the begin of the grace period

In other words, we can get a URC (or more?) just after issuing the command and before the first line of response. The net effect is that such URCs will appear to be the first line of response to the last issued command.

Regardless of whether URC handling is enabled or not, URC interception mechanics depend on command echoing:* echo enabled: by observation, it seems that the grace period begins BEFORE the echoed command. This has the advantage that we ALWAYS know what the first line of response must look like and so if it doesn't, then it's a URC. Thus, any procedure that calls [at_send_cmd()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga702914edf074a4fa28769d47c66e5fbf) internally will catch any URC.

* echo disabled: commands that expect a particular type of response (e.g. [at_send_cmd_get_resp_wait_ok()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga81db2cf0d221f8114e21286ccbfa1c25) with a non-trivial prefix, [at_send_cmd_wait_ok()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga78c3e2c3c058f89a19d2602d95e71df5) etc.) will catch any URC. For the rest, it is the application's responsibility to decide whether the received answer is an URC or not and if yes, then [at_postprocess_urc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897) can be called with the response as parameter.

URC handling can be enabled by adding the `at_urc` module to the application. This allows to [register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga062f9c2edf31ed42305296a1baa46f78) and [de-register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gaee82b66a03dd98a32986f467a6572274) URC strings to check. Later, URCs can be processed in three different ways:

* automatically, whenever any at_* method that intercepts URCs is called. Such methods are marked in their docstring

* manually, by calling [at_process_urc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga62bde713e9dbb260e83dd469cf2d527e) periodically

* manually, by calling [at_postprocess_urc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897) with an URC as parameter. The URC is assumed to have been obtained from the device through methods that do not automatically handle URCs (for example through [at_recv_bytes()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga67070402b981624b5a2388140aa8cca9)) If a registered URC has been detected the correspondent [callback function](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__urc__t_1a345f0cc6969759ff2512c316f68290af) is called.

Error reportingMost DCEs (Data Circuit-terminating Equipment, aka modem) can return extra error information instead of the rather opaque "ERROR" message. They have the form:

* `+CMS ERROR: err_code>` for SMS-related commands

* `+CME ERROR: <err_code>` for other commands

For `+CME`, this behavior is usually off by default and can be toggled with: `AT+CMEE=<type>` where `<type>` may be:

* 0 disable extended error reporting, return `ERROR`

* 1 enable extended error reporting, with `<err_code>` integer

* 2 enable extended error reporting, with `<err_code>` as string Check your DCE's manual for more information.

Some of the API calls below support detailed error reporting. Whenever they detect extended error responses, -AT_ERR_EXTENDED is returned and `<err_code>` can be retrieved by calling [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`AT_ERR_EXTENDED`](#group__drivers__at_1gac74d49891315253dca949e62c1e04708)            | Error cause can be further investigated.
`define `[`AT_SEND_EOL_LEN`](#group__drivers__at_1gaf8e6a8d90e09b66b4d1e804f29ca6be7)            | Shortcut for getting send end of line length.
`public inline static char const  * `[`at_get_err_info`](#group__drivers__at_1ga971b7c2595770aa95a583762bf205001)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` const * dev)`            | Get extended error information of the last command sent.
`public int `[`at_dev_init`](#group__drivers__at_1gae3bf3c6216f1f373fa21764baebf017a)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,`[`at_dev_init_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__init__t)` const * init)`            | Initialize AT device struct.
`public int `[`at_send_cmd_wait_ok`](#group__drivers__at_1ga78c3e2c3c058f89a19d2602d95e71df5)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,uint32_t timeout)`            | Simple command helper.
`public int `[`at_send_cmd_wait_prompt`](#group__drivers__at_1gab7a8b9904fdd9abc425555cb206484c1)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,uint32_t timeout)`            | Send AT command, wait for a prompt.
`public int `[`at_wait_prompt`](#group__drivers__at_1gae6b22e12bf39c82f1b8ad5b7d3af89fa)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,uint32_t timeout)`            | Waits for the prompt character (>).
`public ssize_t `[`at_send_cmd_get_resp`](#group__drivers__at_1ga5bae602f53c99cc87435847f194240d3)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,char * resp_buf,size_t len,uint32_t timeout)`            | Send AT command, wait for response.
`public ssize_t `[`at_get_resp_with_prefix`](#group__drivers__at_1ga56734544e510149d62ab0545df459332)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * resp_prefix,char * resp_buf,size_t len,uint32_t timeout)`            | Wait for a response with a specific prefix.
`public ssize_t `[`at_send_cmd_get_resp_wait_ok`](#group__drivers__at_1ga81db2cf0d221f8114e21286ccbfa1c25)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,const char * resp_prefix,char * resp_buf,size_t len,uint32_t timeout)`            | Send AT command, wait for response plus OK.
`public ssize_t `[`at_send_cmd_get_lines`](#group__drivers__at_1ga87da7deaa6e4c154eee3c46171589647)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,char * resp_buf,size_t len,uint32_t timeout)`            | Send AT command, wait for multiline response.
`public int `[`at_expect_bytes`](#group__drivers__at_1ga850f8f93386aacbcac9d892b9feb9ce9)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * bytes,uint32_t timeout)`            | Expect bytes from device.
`public int `[`at_wait_bytes`](#group__drivers__at_1ga27efd32488e44c79bc46e9e45535213b)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * bytes,uint32_t timeout)`            | Repeatedly calls [at_expect_bytes()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga850f8f93386aacbcac9d892b9feb9ce9) until a match or timeout occurs.
`public int `[`at_recv_bytes_until_string`](#group__drivers__at_1ga9fd4b47989b8f65589bd3ecb9b7fc7da)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * string,char * bytes,size_t * bytes_len,uint32_t timeout)`            | Receives bytes into `bytes` buffer until the string pattern `string` is received or the buffer is full.
`public void `[`at_send_bytes`](#group__drivers__at_1ga3ade40e3504355ca3b476e7a5ffa625b)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * bytes,size_t len)`            | Send raw bytes to a device.
`public ssize_t `[`at_recv_bytes`](#group__drivers__at_1ga67070402b981624b5a2388140aa8cca9)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * bytes,size_t len,uint32_t timeout)`            | Receive raw bytes from a device.
`public int `[`at_send_cmd`](#group__drivers__at_1ga702914edf074a4fa28769d47c66e5fbf)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,uint32_t timeout)`            | Send command to device.
`public int `[`at_parse_resp`](#group__drivers__at_1gabd7c38b7afa3b2a1eb22320403a6c30f)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char const * resp)`            | Parse a response from the device.
`public ssize_t `[`at_readline`](#group__drivers__at_1ga87d80aec5bc08debe3ca57dd8797ca23)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * resp_buf,size_t len,bool keep_eol,uint32_t timeout)`            | Read a line from device.
`public ssize_t `[`at_readline_skip_empty`](#group__drivers__at_1gabf0eab5fda71168d0f4c184b52b52372)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * resp_buf,size_t len,bool keep_eol,uint32_t timeout)`            | Read a line from device, skipping a possibly empty line.
`public int `[`at_wait_ok`](#group__drivers__at_1ga3984bb2bf4be28283254897e4f760b1b)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,uint32_t timeout)`            | Wait for an OK response.
`public void `[`at_drain`](#group__drivers__at_1gadb4e5f6e898307259621fe477ab7dd31)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev)`            | Drain device input buffer.
`public void `[`at_dev_poweron`](#group__drivers__at_1gaf4a86b03a552052d944daeafcfc4e4fd)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev)`            | Power device on.
`public void `[`at_dev_poweroff`](#group__drivers__at_1ga7f51e9b72ea42a731ecdb6906114ada0)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev)`            | Power device off.
`public void `[`at_add_urc`](#group__drivers__at_1ga062f9c2edf31ed42305296a1baa46f78)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,`[`at_urc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__urc__t)` * urc)`            | Add a callback for an unsolicited response code.
`public void `[`at_remove_urc`](#group__drivers__at_1gaee82b66a03dd98a32986f467a6572274)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,`[`at_urc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__urc__t)` * urc)`            | Remove an unsolicited response code from the list.
`public void `[`at_process_urc`](#group__drivers__at_1ga62bde713e9dbb260e83dd469cf2d527e)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,uint32_t timeout)`            | Process out-of-band data received from the device.
`public void `[`at_postprocess_urc`](#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * buf)`            | Process one URC from the provided buffer.
`public void `[`at_postprocess_urc_all`](#group__drivers__at_1gae9b0300aa156d0489e21a69dbe5d0698)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * buf)`            | Process all URCs from the provided buffer.
`struct `[`at_urc_t`](#structat__urc__t) | Unsolicited result code data structure.
`struct `[`at_dev_t`](#structat__dev__t) | AT device structure.
`struct `[`at_dev_init_t`](#structat__dev__init__t) | AT device initialization parameters.

## Members

#### `define `[`AT_ERR_EXTENDED`](#group__drivers__at_1gac74d49891315253dca949e62c1e04708) 

Error cause can be further investigated.

#### `define `[`AT_SEND_EOL_LEN`](#group__drivers__at_1gaf8e6a8d90e09b66b4d1e804f29ca6be7) 

Shortcut for getting send end of line length.

#### `public inline static char const  * `[`at_get_err_info`](#group__drivers__at_1ga971b7c2595770aa95a583762bf205001)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` const * dev)` 

Get extended error information of the last command sent.

If a previous at_* method returned with -AT_ERR_EXTENDED, you can retrieve a pointer to the error string with this.

#### Parameters
* `dev` device to operate on

#### Parameters
* `string` containing the error value.

#### `public int `[`at_dev_init`](#group__drivers__at_1gae3bf3c6216f1f373fa21764baebf017a)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,`[`at_dev_init_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__init__t)` const * init)` 

Initialize AT device struct.

#### Parameters
* `dev` struct to initialize 

* `init` init struct, may be destroyed after return

#### Parameters
* `success` code UART_OK on success 

* `error` code UART_NODEV or UART_NOBAUD otherwise

#### `public int `[`at_send_cmd_wait_ok`](#group__drivers__at_1ga78c3e2c3c058f89a19d2602d95e71df5)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,uint32_t timeout)` 

Simple command helper.

This function sends an AT command to the device and waits for "OK".

URCs are automatically handled

#### Parameters
* `dev` device to operate on 

* `command` command string to send 

* `timeout` timeout (in usec)

#### Parameters
* `0` when device answers "OK" 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `<0` other failures

#### `public int `[`at_send_cmd_wait_prompt`](#group__drivers__at_1gab7a8b9904fdd9abc425555cb206484c1)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,uint32_t timeout)` 

Send AT command, wait for a prompt.

This function sends the supplied `command`, then waits for the prompt (>) character and returns

URCs are automatically handled

#### Parameters
* `dev` device to operate on 

* `command` command string to send 

* `timeout` timeout (in usec)

#### Parameters
* `0` when prompt is received 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `<0` other failures

#### `public int `[`at_wait_prompt`](#group__drivers__at_1gae6b22e12bf39c82f1b8ad5b7d3af89fa)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,uint32_t timeout)` 

Waits for the prompt character (>).

#### Parameters
* `dev` device to operate on 

* `timeout` timeout (in usec)

#### Parameters
* `0` when prompt is received 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `<0` other failures

#### `public ssize_t `[`at_send_cmd_get_resp`](#group__drivers__at_1ga5bae602f53c99cc87435847f194240d3)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,char * resp_buf,size_t len,uint32_t timeout)` 

Send AT command, wait for response.

This function sends the supplied `command`, then waits and returns one line of response. The response is guaranteed null-terminated.

Some URCs are automatically handled. The response returned can be an URC. In that case, [at_postprocess_urc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897) can be called with the response as parameter.

A possible empty line will be skipped.

#### Parameters
* `dev` device to operate on 

* `command` command to send 

* `resp_buf` buffer for storing response 

* `len` len of `buffer`

* `timeout` timeout (in usec)

#### Parameters
* `n` length of response on success 

* `-ENOBUFS` if the supplied buffer was to small. 

* `<0` on error

#### `public ssize_t `[`at_get_resp_with_prefix`](#group__drivers__at_1ga56734544e510149d62ab0545df459332)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * resp_prefix,char * resp_buf,size_t len,uint32_t timeout)` 

Wait for a response with a specific prefix.

If the provided prefix is NULL or empty, this behaves just like [at_readline_skip_empty()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gabf0eab5fda71168d0f4c184b52b52372). Otherwise, it repeatedly calls [at_readline_skip_empty()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gabf0eab5fda71168d0f4c184b52b52372) and:

* if the prefix matches: discards the prefix from the response, copies the rest to `resp_buf`, stops and returns the resulting response length

* if the prefix does not match:

* if the response is OK: stops and returns 0

* if the response is ERROR/CMx ERROR: stops and returns <0

* none of the above: handles response as URC and repeats with the next line

#### Parameters
* `dev` device to operate on 

* `resp_prefix` expected prefix in the response 

* `resp_buf` buffer for storing response 

* `len` len of `buffer`

* `timeout` timeout (in usec)

#### Parameters
* `n` response length if the prefix of the response matches 

* `0` if the response was OK 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `<0` on error

#### `public ssize_t `[`at_send_cmd_get_resp_wait_ok`](#group__drivers__at_1ga81db2cf0d221f8114e21286ccbfa1c25)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,const char * resp_prefix,char * resp_buf,size_t len,uint32_t timeout)` 

Send AT command, wait for response plus OK.

This function sends the supplied `command`, then waits and returns one line of response. The response is guaranteed null-terminated.

Calls following in order:

* [at_send_cmd()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga702914edf074a4fa28769d47c66e5fbf)

* [at_get_resp_with_prefix()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga56734544e510149d62ab0545df459332)

* [at_wait_ok()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga3984bb2bf4be28283254897e4f760b1b)

URCs are automatically handled. If no prefix is provided, the response may be an URC. In that case, [at_postprocess_urc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897) can be called with the response as parameter.

#### Parameters
* `dev` device to operate on 

* `command` command to send 

* `resp_prefix` expected prefix in the response 

* `resp_buf` buffer for storing response 

* `len` len of `buffer`

* `timeout` timeout (in usec)

#### Parameters
* `n` length of response on success 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `-ENOBUFS` if the supplied buffer was to small. 

* `<0` other failures

#### `public ssize_t `[`at_send_cmd_get_lines`](#group__drivers__at_1ga87da7deaa6e4c154eee3c46171589647)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,char * resp_buf,size_t len,uint32_t timeout)` 

Send AT command, wait for multiline response.

This function sends the supplied `command`, then returns all response lines until the device sends "OK". The response is guaranteed null-terminated.

Some URCs are automatically handled. The first m response lines can be URCs. In that case, [at_postprocess_urc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897) can be called with each line as parameter.

If a line contains a DTE error response, this function stops and returns accordingly. Any lines received prior to that are considered to be URCs and thus handled.

#### Parameters
* `dev` device to operate on 

* `command` command to send 

* `resp_buf` buffer for storing response 

* `len` len of `resp_buf`

* `timeout` timeout (in usec)

#### Parameters
* `n` length of response on success 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `-ENOBUFS` if the supplied buffer was to small. 

* `<0` other failures

#### `public int `[`at_expect_bytes`](#group__drivers__at_1ga850f8f93386aacbcac9d892b9feb9ce9)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * bytes,uint32_t timeout)` 

Expect bytes from device.

#### Parameters
* `dev` device to operate on 

* `bytes` buffer containing bytes to expect (NULL-terminated) 

* `timeout` timeout (in usec)

#### Parameters
* `0` on success 

* `<0` otherwise

#### `public int `[`at_wait_bytes`](#group__drivers__at_1ga27efd32488e44c79bc46e9e45535213b)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * bytes,uint32_t timeout)` 

Repeatedly calls [at_expect_bytes()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga850f8f93386aacbcac9d892b9feb9ce9) until a match or timeout occurs.

#### Parameters
* `dev` device to operate on 

* `bytes` buffer containing bytes to expect (NULL-terminated) 

* `timeout` timeout (in usec)

#### Parameters
* `0` on success 

* `<0` otherwise

#### `public int `[`at_recv_bytes_until_string`](#group__drivers__at_1ga9fd4b47989b8f65589bd3ecb9b7fc7da)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * string,char * bytes,size_t * bytes_len,uint32_t timeout)` 

Receives bytes into `bytes` buffer until the string pattern `string` is received or the buffer is full.

#### Parameters
* `dev` device to operate on 

* `string` string pattern to expect 

* `bytes` buffer to store received bytes 

* `bytes_len` pointer to the maximum number of bytes to receive. On return stores the amount of received bytes. 

* `timeout` timeout (in usec) of inactivity to finish read

#### Parameters
* `0` on success 

* `<0` on error

#### `public void `[`at_send_bytes`](#group__drivers__at_1ga3ade40e3504355ca3b476e7a5ffa625b)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * bytes,size_t len)` 

Send raw bytes to a device.

#### Parameters
* `dev` device to operate on 

* `bytes` buffer containing bytes to send 

* `len` number of bytes to send

#### `public ssize_t `[`at_recv_bytes`](#group__drivers__at_1ga67070402b981624b5a2388140aa8cca9)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * bytes,size_t len,uint32_t timeout)` 

Receive raw bytes from a device.

#### Parameters
* `dev` device to operate on 

* `bytes` buffer where store received bytes 

* `len` maximum number of bytes to receive 

* `timeout` timeout (in usec) of inactivity to finish read

#### Parameters
* `n` Number of bytes read, eventually zero if no bytes available

#### `public int `[`at_send_cmd`](#group__drivers__at_1ga702914edf074a4fa28769d47c66e5fbf)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,const char * command,uint32_t timeout)` 

Send command to device.

Some URCs may be handled.

#### Parameters
* `dev` device to operate on 

* `command` command to send 

* `timeout` timeout (in usec)

#### Parameters
* `0` on success 

* `<0` otherwise

#### `public int `[`at_parse_resp`](#group__drivers__at_1gabd7c38b7afa3b2a1eb22320403a6c30f)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char const * resp)` 

Parse a response from the device.

This is always called automatically in functions that may return -AT_ERR_EXTENDED. However, if you read the response by other methods (e.g. with [at_recv_bytes()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga67070402b981624b5a2388140aa8cca9)), you might want to call this on the response so that you don't have to parse it yourself.

#### Parameters
* `0` if the response is "OK" 

* `-AT_ERR_EXTENDED` if the response is `+CMx ERROR: <err>`, and `<err>` has been successfully copied to `dev->rp_buf`

* `-1` if the response is "ERROR", or `+CMx ERROR: <err>` but `<err>` could not be copied 

* `1` otherwise

#### `public ssize_t `[`at_readline`](#group__drivers__at_1ga87d80aec5bc08debe3ca57dd8797ca23)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * resp_buf,size_t len,bool keep_eol,uint32_t timeout)` 

Read a line from device.

Stops at the first DCE EOL sequence. The response is guaranteed null-terminated.

#### Parameters
* `dev` device to operate on 

* `resp_buf` buffer to store line 

* `len` size of `resp_buf`

* `keep_eol` true to keep the trailing EOL sequence in the response 

* `timeout` timeout (in usec)

#### Parameters
* `n` line length on success 

* `-ENOBUFS` if the supplied buffer was to small. 

* `<0` on error

#### `public ssize_t `[`at_readline_skip_empty`](#group__drivers__at_1gabf0eab5fda71168d0f4c184b52b52372)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * resp_buf,size_t len,bool keep_eol,uint32_t timeout)` 

Read a line from device, skipping a possibly empty line.

Stops at the first DCE EOL sequence AFTER any non-EOL sequence. The response is guaranteed null-terminated.

#### Parameters
* `dev` device to operate on 

* `resp_buf` buffer to store line 

* `len` size of `resp_buf`

* `keep_eol` true to keep the trailing EOL sequence in the response 

* `timeout` timeout (in usec)

#### Parameters
* `n` line length on success 

* `-ENOBUFS` if the supplied buffer was to small. 

* `<0` on error

#### `public int `[`at_wait_ok`](#group__drivers__at_1ga3984bb2bf4be28283254897e4f760b1b)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,uint32_t timeout)` 

Wait for an OK response.

Useful when crafting the command-response sequence by yourself.

URCs are automatically handled

#### Parameters
* `dev` device to operate on 

* `timeout` timeout (in usec)

#### Parameters
* `0` when device answers "OK" 

* `-AT_ERR_EXTENDED` if failed and a error code can be retrieved with [at_get_err_info()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga971b7c2595770aa95a583762bf205001) (i.e. DCE answered with `CMx ERROR`) 

* `<0` other failures

#### `public void `[`at_drain`](#group__drivers__at_1gadb4e5f6e898307259621fe477ab7dd31)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev)` 

Drain device input buffer.

This function drains any possible bytes waiting in the device's input buffer.

#### Parameters
* `dev` device to operate on

#### `public void `[`at_dev_poweron`](#group__drivers__at_1gaf4a86b03a552052d944daeafcfc4e4fd)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev)` 

Power device on.

#### Parameters
* `dev` device to power on

#### `public void `[`at_dev_poweroff`](#group__drivers__at_1ga7f51e9b72ea42a731ecdb6906114ada0)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev)` 

Power device off.

#### Parameters
* `dev` device to power off

#### `public void `[`at_add_urc`](#group__drivers__at_1ga062f9c2edf31ed42305296a1baa46f78)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,`[`at_urc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__urc__t)` * urc)` 

Add a callback for an unsolicited response code.

#### Parameters
* `dev` device to operate on 

* `urc` unsolicited result code to register

#### `public void `[`at_remove_urc`](#group__drivers__at_1gaee82b66a03dd98a32986f467a6572274)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,`[`at_urc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__urc__t)` * urc)` 

Remove an unsolicited response code from the list.

#### Parameters
* `dev` device to operate on 

* `urc` unsolicited result code to remove

#### `public void `[`at_process_urc`](#group__drivers__at_1ga62bde713e9dbb260e83dd469cf2d527e)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,uint32_t timeout)` 

Process out-of-band data received from the device.

#### Parameters
* `dev` device to operate on 

* `timeout` timeout (in usec)

#### `public void `[`at_postprocess_urc`](#group__drivers__at_1gad7ccb4f94e1dbdf6e3309472df7ae897)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * buf)` 

Process one URC from the provided buffer.

Useful if you e.g. called [at_send_cmd_get_lines()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga87da7deaa6e4c154eee3c46171589647) and the first lines are URCs.

#### Parameters
* `dev` device to operate on 

* `buf` buffer containing an URC

#### `public void `[`at_postprocess_urc_all`](#group__drivers__at_1gae9b0300aa156d0489e21a69dbe5d0698)`(`[`at_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at.md#structat__dev__t)` * dev,char * buf)` 

Process all URCs from the provided buffer.

Useful if you e.g. called [at_recv_bytes()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga67070402b981624b5a2388140aa8cca9), found what you were interested in, and there might be some URCs left in the buffer.

#### Parameters
* `dev` device to operate on 

* `buf` buffer containing URCs

# struct `at_urc_t` 

Unsolicited result code data structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_node`](#structat__urc__t_1a7ec45852cd9829889772df7ceff00f41) | node list
`public `[`at_urc_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga7d1acdacf996c040a54c7fa1ea018f29)` `[`cb`](#structat__urc__t_1a345f0cc6969759ff2512c316f68290af) | callback
`public const char * `[`code`](#structat__urc__t_1adb535769a191508bc89f79f19bb70627) | URC string which must match.
`public void * `[`arg`](#structat__urc__t_1ace8c1eb731078837966294c84a849eb1) | optional argument

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_node`](#structat__urc__t_1a7ec45852cd9829889772df7ceff00f41) 

node list

#### `public `[`at_urc_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at_1ga7d1acdacf996c040a54c7fa1ea018f29)` `[`cb`](#structat__urc__t_1a345f0cc6969759ff2512c316f68290af) 

callback

#### `public const char * `[`code`](#structat__urc__t_1adb535769a191508bc89f79f19bb70627) 

URC string which must match.

#### `public void * `[`arg`](#structat__urc__t_1ace8c1eb731078837966294c84a849eb1) 

optional argument

# struct `at_dev_t` 

AT device structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` `[`isrpipe`](#structat__dev__t_1a5213ffb7f8cb5aad22e93fe4a12d5775) | isrpipe used for getting data from uart
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structat__dev__t_1a06eb6056e3fe390783b0e095a4cd726b) | UART device where the AT device is attached.
`public char * `[`rp_buf`](#structat__dev__t_1a91ead8d7c6f477ce0bde37b70f5f717e) | response parsing buffer
`public size_t `[`rp_buf_size`](#structat__dev__t_1a55b52ad5f7a4060e3d9936a389671f2f) | response parsing buffer size

## Members

#### `public `[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` `[`isrpipe`](#structat__dev__t_1a5213ffb7f8cb5aad22e93fe4a12d5775) 

isrpipe used for getting data from uart

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structat__dev__t_1a06eb6056e3fe390783b0e095a4cd726b) 

UART device where the AT device is attached.

#### `public char * `[`rp_buf`](#structat__dev__t_1a91ead8d7c6f477ce0bde37b70f5f717e) 

response parsing buffer

#### `public size_t `[`rp_buf_size`](#structat__dev__t_1a55b52ad5f7a4060e3d9936a389671f2f) 

response parsing buffer size

# struct `at_dev_init_t` 

AT device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structat__dev__init__t_1adbf7d0bd7b64e1491b044861261f248b) | UART device where the AT device is attached.
`public uint32_t `[`baudrate`](#structat__dev__init__t_1aa73910666bcb550c7f98d411576e9b30) | UART device baudrate.
`public char * `[`rx_buf`](#structat__dev__init__t_1aea7a7e5ca2d3b8b1f46fd1f53df45ebb) | UART rx buffer.
`public size_t `[`rx_buf_size`](#structat__dev__init__t_1af09fadb917c9ca2b64ff1085d3d52ea2) | UART rx buffer size.
`public char * `[`rp_buf`](#structat__dev__init__t_1a43714faf8aff9c42e9cd43dba889be82) | Response parsing buffer - used for classifying DCE responses and holding detailed error information.
`public size_t `[`rp_buf_size`](#structat__dev__init__t_1aa4f309bd695a7053dacc5df4a893144d) | response parsing buffer size

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structat__dev__init__t_1adbf7d0bd7b64e1491b044861261f248b) 

UART device where the AT device is attached.

#### `public uint32_t `[`baudrate`](#structat__dev__init__t_1aa73910666bcb550c7f98d411576e9b30) 

UART device baudrate.

#### `public char * `[`rx_buf`](#structat__dev__init__t_1aea7a7e5ca2d3b8b1f46fd1f53df45ebb) 

UART rx buffer.

#### `public size_t `[`rx_buf_size`](#structat__dev__init__t_1af09fadb917c9ca2b64ff1085d3d52ea2) 

UART rx buffer size.

#### `public char * `[`rp_buf`](#structat__dev__init__t_1a43714faf8aff9c42e9cd43dba889be82) 

Response parsing buffer - used for classifying DCE responses and holding detailed error information.

Must be at least 16 bytes. If you don't care about URCs (MODULE_AT_URC is undefined) this must only be large enough to hold responses like `OK`, `ERROR` or `+CME ERROR: <err_code>`. Otherwise adapt its size to the maximum length of the URCs you are expecting and actually care about.

#### `public size_t `[`rp_buf_size`](#structat__dev__init__t_1aa4f309bd695a7053dacc5df4a893144d) 

response parsing buffer size

