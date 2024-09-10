---
title: api-unittests_cpp.md
description: api-unittests_cpp.md
---
# group `unittests_cpp` 

RIOT unit tests for C++.

The C++ unit test framework syntax is loosely based on GoogleTest, but offers far less functionality. For mocking the package [Fake Functions Framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__fff) can be used.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CPPUNIT_SUITE_CNT`](#group__unittests__cpp_1ga9f3f95cf05499e59ff1a067a3bb86158)            | Maximum amount of tests in one test suite.
`define `[`RUN_SUITE`](#group__unittests__cpp_1gae9f9e059eec3359ec565a80be5232772)            | Run the test suite *name*.
`define `[`TEST_SUITE_F`](#group__unittests__cpp_1ga723dab7c38a17e63879ace89c44dd4b4)            | Instantiate a test suite with custom test fixture.
`define `[`TEST_SUITE`](#group__unittests__cpp_1ga1dcc30e04987b50d0b98ad113ef0e6fc)            | Instantiate a test suite.
`define `[`TEST`](#group__unittests__cpp_1ga01650a6a471983b296a562fb062bc912)            | Begin the definition of a test.
`define `[`EXPECT_EQ`](#group__unittests__cpp_1gafece6bde0bafb94b691224f0c830194d)            | Expect equality of the *actual* and *expected* value.
`define `[`EXPECT_STREQ`](#group__unittests__cpp_1ga06375af4606f3023b0beb4f36a29bb0d)            | Expect string equality of the *actual* and *expected* value.
`define `[`EXPECT_FFF_CALL_COUNT`](#group__unittests__cpp_1gadd13aac90ef676376e2c51516e560d9c)            | Expect *count* calls to *name* mock.
`define `[`EXPECT_FFF_CALL_PARAMS`](#group__unittests__cpp_1ga28268ce2e2f4075da6cd1ce694a0d68a)            | Expect that the last call to *mock* was made with the given parameters.

## Members

#### `define `[`CPPUNIT_SUITE_CNT`](#group__unittests__cpp_1ga9f3f95cf05499e59ff1a067a3bb86158) 

Maximum amount of tests in one test suite.

#### `define `[`RUN_SUITE`](#group__unittests__cpp_1gae9f9e059eec3359ec565a80be5232772) 

Run the test suite *name*.

#### Parameters
* `name` Name of the suite

#### `define `[`TEST_SUITE_F`](#group__unittests__cpp_1ga723dab7c38a17e63879ace89c44dd4b4) 

Instantiate a test suite with custom test fixture.

#### Parameters
* `suite` Name of the custom test fixture class 

* `name` Instantiation name of the suite

#### `define `[`TEST_SUITE`](#group__unittests__cpp_1ga1dcc30e04987b50d0b98ad113ef0e6fc) 

Instantiate a test suite.

#### Parameters
* `name` Instantiation name of the suite

#### `define `[`TEST`](#group__unittests__cpp_1ga01650a6a471983b296a562fb062bc912) 

Begin the definition of a test.

Insert the test body after the macro

#### Parameters
* `suite` Name of the suite to add the test to 

* `name` Instantiation name of the test

#### `define `[`EXPECT_EQ`](#group__unittests__cpp_1gafece6bde0bafb94b691224f0c830194d) 

Expect equality of the *actual* and *expected* value.

#### Parameters
* `expected` Expected value 

* `actual` Actual value 

* `msg` Message to print in case of failure

#### `define `[`EXPECT_STREQ`](#group__unittests__cpp_1ga06375af4606f3023b0beb4f36a29bb0d) 

Expect string equality of the *actual* and *expected* value.

Interprets both values as const char* string

#### Parameters
* `expected` Expected value 

* `actual` Actual value 

* `msg` Message to print in case of failure

#### `define `[`EXPECT_FFF_CALL_COUNT`](#group__unittests__cpp_1gadd13aac90ef676376e2c51516e560d9c) 

Expect *count* calls to *name* mock.

Needs the [Fake Functions Framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__fff) for mocks

#### Parameters
* `name` Name of the mock 

* `count` Expected calls

#### `define `[`EXPECT_FFF_CALL_PARAMS`](#group__unittests__cpp_1ga28268ce2e2f4075da6cd1ce694a0d68a) 

Expect that the last call to *mock* was made with the given parameters.

Needs the [Fake Functions Framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__fff) for mocks

#### Parameters
* `mock` Name of the mock 

* `...` params

