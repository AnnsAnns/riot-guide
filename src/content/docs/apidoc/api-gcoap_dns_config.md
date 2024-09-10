---
title: api-gcoap_dns_config.md
description: api-gcoap_dns_config.md
---
# group `gcoap_dns_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GCOAP_DNS_SERVER_URI_LEN`](#group__gcoap__dns__config_1gaecfdec2f2f6662339b5f3860a63df66a)            | maximum length of the URI for the DNS server
`define `[`CONFIG_GCOAP_DNS_CREDS_MAX`](#group__gcoap__dns__config_1ga6ef7cb949375e1f52aaf9346fa6d3490)            | maximum number of credentials that can be added with [gcoap_dns_cred_add()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap__dns_1ga47fef7e608bf9c84b877b6026719dd7c)
`define `[`CONFIG_GCOAP_DNS_PDU_BUF_SIZE`](#group__gcoap__dns__config_1ga30a7ba18f30d94704fd90abf252018fb)            | size of the buffer used to build a CoAP request
`define `[`CONFIG_GCOAP_DNS_BLOCK_SIZE`](#group__gcoap__dns__config_1gaeb104323687314ee7b03e649c3211733)            | block-size used for requests (both Block2 control and Block1)

## Members

#### `define `[`CONFIG_GCOAP_DNS_SERVER_URI_LEN`](#group__gcoap__dns__config_1gaecfdec2f2f6662339b5f3860a63df66a) 

maximum length of the URI for the DNS server

#### `define `[`CONFIG_GCOAP_DNS_CREDS_MAX`](#group__gcoap__dns__config_1ga6ef7cb949375e1f52aaf9346fa6d3490) 

maximum number of credentials that can be added with [gcoap_dns_cred_add()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap__dns_1ga47fef7e608bf9c84b877b6026719dd7c)

#### `define `[`CONFIG_GCOAP_DNS_PDU_BUF_SIZE`](#group__gcoap__dns__config_1ga30a7ba18f30d94704fd90abf252018fb) 

size of the buffer used to build a CoAP request

#### `define `[`CONFIG_GCOAP_DNS_BLOCK_SIZE`](#group__gcoap__dns__config_1gaeb104323687314ee7b03e649c3211733) 

block-size used for requests (both Block2 control and Block1)

Should be less than [CONFIG_GCOAP_DNS_PDU_BUF_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__gcoap__dns__config_1ga30a7ba18f30d94704fd90abf252018fb) or [CONFIG_GCOAP_PDU_BUF_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap__conf_1ga6e17d0741db5fa6da38b769ecdd4c80d) and must be a power of 2

