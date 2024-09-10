---
title: api-sys_stdio_udp.md
description: api-sys_stdio_udp.md
---
# group `sys_stdio_udp` 

STDIO over UDP implementation.

This file implements STDIO via a UDP that can be used with e.g. netcat:  nc -u fe80::7837:fcff:fe7d:1aaf%tapbr0 2323
 It can be enabled with  USEMODULE += stdio_udp
 and will listen on `CONFIG_STDIO_UDP_PORT` for incoming connections.

You will also have to set `I_UNDERSTAND_THAT_STDIO_UDP_IS_INSECURE = 1` to acknowledge that you will only use this for debugging in an isolated network.

This is entirely unsecured, only use this for debugging in an isolated network!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

