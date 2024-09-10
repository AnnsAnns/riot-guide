---
title: api-net_telnet_stdio.md
description: api-net_telnet_stdio.md
---
# group `net_telnet_stdio` 

Standard input/output via telnet.

This will make RIOT's stdio available over telnet.

To enable it, add USEMODULE += stdio_telnet
 to your application. You will also have to set `I_UNDERSTAND_THAT_TELNET_IS_INSECURE = 1` to acknowledge that you will only use this for debugging in an isolated network.

You can then use any standard `telnet` client to connect to your node.

**See also**: [basic Telnet server implementation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__telnet)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

