---
title: api-pseudomodule_board_software_reset.md
description: api-pseudomodule_board_software_reset.md
---
# group `pseudomodule_board_software_reset` 

Use any software-only reset button on the board to reboot.

Some boards have reset buttons that are not wired to the MCU's reset line, but merely are configured to cause a reset by convention.

If this module is active, the button will be configured thusly (and then not be advertised in any other capacity, e.g. through [SAUL drivers auto-initialization](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__auto__init__saul)).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

