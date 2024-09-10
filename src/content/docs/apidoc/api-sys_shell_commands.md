---
title: api-sys_shell_commands.md
description: api-sys_shell_commands.md
---
# group `sys_shell_commands` 

Shell CommandsCertain modules such as `ps`, `[saul_reg](./doc/starlight-docs/src/content/docs/apidoc/api-sys_saul_reg.md#structsaul__reg)`, or `gnrc_icmpv6_echo` can expose (some of) their functionality not only as C-API, but also as shell command. Using the module `shell_cmds_default` will enable the shell integration of the used modules, if it exists.

A few rarely needed shell commands that needs to be used in addition to the `shell_cmds_default` and the module providing the C-API. Examples include `shell_cmd_nice`, `shell_cmd_gnrc_udp`, or `shell_random_cmd`. Consult the documentation of the modules to find out whether they have a shell integration and how to enable it.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

