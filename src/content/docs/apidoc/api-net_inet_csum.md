---
title: api-net_inet_csum.md
description: api-net_inet_csum.md
---
# group `net_inet_csum` 

Provides a function to calculate the Internet Checksum.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`inet_csum_slice`](#group__net__inet__csum_1gab17d9eeabbbb0e7e5260e56f176a49d0)`(uint16_t sum,const uint8_t * buf,uint16_t len,size_t accum_len)`            | Calculates the unnormalized Internet Checksum of `buf`, where the buffer provides a slice of the full checksum domain, calculated in order.
`public inline static uint16_t `[`inet_csum`](#group__net__inet__csum_1ga41bfc4999e924a74122aeb4c20d61746)`(uint16_t sum,const uint8_t * buf,uint16_t len)`            | Calculates the unnormalized Internet Checksum of `buf`, where the buffer provides a standalone domain for the checksum.

## Members

#### `public uint16_t `[`inet_csum_slice`](#group__net__inet__csum_1gab17d9eeabbbb0e7e5260e56f176a49d0)`(uint16_t sum,const uint8_t * buf,uint16_t len,size_t accum_len)` 

Calculates the unnormalized Internet Checksum of `buf`, where the buffer provides a slice of the full checksum domain, calculated in order.

**See also**: [RFC 1071 ](https://tools.ietf.org/html/rfc1071)

The Internet Checksum is not normalized (i. e. its 1's complement was not taken of the result) to use it for further calculation. This function handles padding an odd number of bytes across the full domain.

#### Parameters
* `sum` An initial value for the checksum. 

* `buf` A buffer. 

* `len` Length of `buf` in byte. 

* `accum_len` Accumulated length of checksum domain that has already been checksummed.

#### Returns
The unnormalized Internet Checksum of `buf`.

#### `public inline static uint16_t `[`inet_csum`](#group__net__inet__csum_1ga41bfc4999e924a74122aeb4c20d61746)`(uint16_t sum,const uint8_t * buf,uint16_t len)` 

Calculates the unnormalized Internet Checksum of `buf`, where the buffer provides a standalone domain for the checksum.

**See also**: [RFC 1071 ](https://tools.ietf.org/html/rfc1071)

The Internet Checksum is not normalized (i. e. its 1's complement was not taken of the result) to use it for further calculation. This function, rather than [inet_csum_slice()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__inet__csum_1gab17d9eeabbbb0e7e5260e56f176a49d0), has been used historically when we are not concerned with padding for an odd number of bytes.

#### Parameters
* `sum` An initial value for the checksum. 

* `buf` A buffer. 

* `len` Length of `buf` in byte.

#### Returns
The unnormalized Internet Checksum of `buf`.

