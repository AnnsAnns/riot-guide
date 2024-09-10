---
title: api-net_sock_dtls_conf.md
description: api-net_sock_dtls_conf.md
---
# group `net_sock_dtls_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DTLS_HANDSHAKE_BUFSIZE_EXP`](#group__net__sock__dtls__conf_1ga0cbc6d1ac3648c3e4b6803d0272535ef)            | Default buffer size for DTLS handshake (as exponent of 2^n)

## Members

#### `define `[`CONFIG_DTLS_HANDSHAKE_BUFSIZE_EXP`](#group__net__sock__dtls__conf_1ga0cbc6d1ac3648c3e4b6803d0272535ef) 

Default buffer size for DTLS handshake (as exponent of 2^n)

As the buffer size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the buffer ( [DTLS_HANDSHAKE_BUFSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gad77967da0dcabd6ceea9e523897b6798) ).

