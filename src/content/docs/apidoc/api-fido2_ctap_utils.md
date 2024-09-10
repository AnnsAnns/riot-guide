---
title: api-fido2_ctap_utils.md
description: api-fido2_ctap_utils.md
---
# group `fido2_ctap_utils` 

FIDO2 CTAP utility helper.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`fido2_ctap_utils_led_animation`](#group__fido2__ctap__utils_1gaa403b2898427d9aeaa476c55f4747997)`(void)`            | LED animation to indicate that user action is required.
`public int `[`fido2_ctap_utils_init_gpio_pin`](#group__fido2__ctap__utils_1gac0419572f9b5a2b910ab47f7c66a422b)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode,`[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` flank)`            | Initialize button to be used for user presence test.
`public int `[`fido2_ctap_utils_user_presence_test`](#group__fido2__ctap__utils_1ga9556106eaeb1985e0cd88e16e639e6f0)`(void)`            | Test user presence.
`public inline static int `[`fido2_ctap_utils_cred_cmp`](#group__fido2__ctap__utils_1ga43f63ca188f554fc7ffdc391eb2555ab)`(const void * k1,const void * k2)`            | Compare fido2 credentials based on id to find more recent one.
`public inline static bool `[`fido2_ctap_utils_ks_equal`](#group__fido2__ctap__utils_1gaa871da2e594fa1178d4aa2634d554670)`(const `[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * k1,const `[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * k2)`            | Check equality of resident keys based on rp_id_hash and user_id.

## Members

#### `public void `[`fido2_ctap_utils_led_animation`](#group__fido2__ctap__utils_1gaa403b2898427d9aeaa476c55f4747997)`(void)` 

LED animation to indicate that user action is required.

#### `public int `[`fido2_ctap_utils_init_gpio_pin`](#group__fido2__ctap__utils_1gac0419572f9b5a2b910ab47f7c66a422b)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode,`[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` flank)` 

Initialize button to be used for user presence test.

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_utils_user_presence_test`](#group__fido2__ctap__utils_1ga9556106eaeb1985e0cd88e16e639e6f0)`(void)` 

Test user presence.

Successful if user clicks button in less than [CTAP_UP_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1gabd960f9d81b350fc259dbd0eac553dca)

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public inline static int `[`fido2_ctap_utils_cred_cmp`](#group__fido2__ctap__utils_1ga43f63ca188f554fc7ffdc391eb2555ab)`(const void * k1,const void * k2)` 

Compare fido2 credentials based on id to find more recent one.

The more recent credential has a higher id. Therefore we sort in descending order.

#### Parameters
* `k1` first resident key 

* `k2` second resident key

#### Returns
<0 if k1 > k2 

#### Returns
>0 if k1 < k2

#### `public inline static bool `[`fido2_ctap_utils_ks_equal`](#group__fido2__ctap__utils_1gaa871da2e594fa1178d4aa2634d554670)`(const `[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * k1,const `[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * k2)` 

Check equality of resident keys based on rp_id_hash and user_id.

#### Parameters
* `k1` first resident key 

* `k2` second resident key

#### Returns
true if equal false otherwise

