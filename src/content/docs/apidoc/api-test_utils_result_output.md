---
title: api-test_utils_result_output.md
description: api-test_utils_result_output.md
---
# group `test_utils_result_output` 

Utility function for abstraction of test result output format.

The TURO module provides an abstraction layer allowing salient data to be provided for tests independent of format or medium. The intention is to have a test that expects some data, for example, reading some registers, output the results in a know way, for example json. This should help keeping the test results stable and not lock anyone into a particular format. If JSON is too heavy all tests using this can be swapped out for something lighter, for example CBOR. Then the tests should not have to be adapted. There can also be python layers that coordinate the output results, ideally done with riotctrl.

Only one implementation should be selected, for example, test_utils_result_output_json.

Some of the design decisions include:

* ability to flush immediately to prevent the need for large buffers

* selectable output format based on `USEMODULE`:

* `test_utils_result_output_check`: [Test result output structure](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__test__utils__result__output__check)

* `test_utils_result_output_json`: [Test result output with JSON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__test__utils__result__output__json)

* `test_utils_result_output_txt`: [Test result output plain text](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__test__utils__result__output__txt)

* exit status similar to a linux exit status.

* readable raw output used in the CI to assist with reproducing errors

* structure doesn't need to be enforced in every implementation to save bytes, see test_utils_result_output_check for structure assertions

Some limitations are:

* Only one type of result output implementation can be used at a time

* Errors may be caused by the specific result output implementation making it difficult to debug

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

