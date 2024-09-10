---
title: api-net_sntp.md
description: api-net_sntp.md
---
# group `net_sntp` 

Simple [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Time Protocol (SNTP) implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sntp_sync`](#group__net__sntp_1gaaa1aa1f2aa5b493f75f50325686be0b5)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server,uint32_t timeout)`            | Synchronize with time server.
`public int64_t `[`sntp_get_offset`](#group__net__sntp_1gaee49acb31c60d6a9e6bbf1db0ea898ed)`(void)`            | Get real time offset from system time as returned by [xtimer_now64()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga4064fa62ba625bb103fa836f78fc6ed9)
`public inline static uint64_t `[`sntp_get_unix_usec`](#group__net__sntp_1ga64e942167310252631718cd1647acbe4)`(void)`            | Get time in microseconds from 1970-01-01 00:00:00 UTC.

## Members

#### `public int `[`sntp_sync`](#group__net__sntp_1gaaa1aa1f2aa5b493f75f50325686be0b5)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * server,uint32_t timeout)` 

Synchronize with time server.

#### Parameters
* `server` The time server 

* `timeout` Timeout for the server response in microseconds

#### Returns
0 on success 

#### Returns
Negative number on error

#### `public int64_t `[`sntp_get_offset`](#group__net__sntp_1gaee49acb31c60d6a9e6bbf1db0ea898ed)`(void)` 

Get real time offset from system time as returned by [xtimer_now64()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga4064fa62ba625bb103fa836f78fc6ed9)

#### Returns
Real time offset in microseconds relative to 1900-01-01 00:00 UTC

#### `public inline static uint64_t `[`sntp_get_unix_usec`](#group__net__sntp_1ga64e942167310252631718cd1647acbe4)`(void)` 

Get time in microseconds from 1970-01-01 00:00:00 UTC.

#### Returns
Time in microseconds from 1970-01-01 00:00:00 UTC

