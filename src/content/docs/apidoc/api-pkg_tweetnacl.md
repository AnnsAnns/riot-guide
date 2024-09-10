---
title: api-pkg_tweetnacl.md
description: api-pkg_tweetnacl.md
---
# group `pkg_tweetnacl` 

Provides the TweetNaCl high-security cryptographic library.

TweetNaCl RIOT packageTweetNaCl is the world's first auditable high-security cryptographic library. TweetNaCl fits into just 100 tweets while supporting all 25 of the C NaCl functions used by applications. TweetNaCl is a self-contained public-domain C library, so it can easily be integrated into applications.

NaCl (pronounced "salt") is a new easy-to-use high-speed software library for network communication, encryption, decryption, signatures, etc. NaCl's goal is to provide all of the core operations needed to build higher-level cryptographic tools.

Of course, other libraries already exist for these core operations. NaCl advances the state of the art by improving security, by improving usability, and by improving speed.

(from [https://nacl.cr.yp.to/](https://nacl.cr.yp.to/) and [http://tweetnacl.cr.yp.to/](http://tweetnacl.cr.yp.to/))

You can find the API and more information [here](https://nacl.cr.yp.to/), since the sources are not documented due to the aim for fitting in 100 tweets.

RequirementsTweetNaCl requires more than 2K of stack, so beware that you're allocating at least `THREAD_STACKSIZE_DEFAULT + 2048` bytes.

You can do it easily by adding:

```cpp
CFLAGS += '-DTHREAD_STACKSIZE_MAIN=(THREAD_STACKSIZE_DEFAULT + 2048)'
```

to your makefile.

UsageJust add it as a package in your application:

```cpp
USEPKG += tweetnacl
```

And don't forget to include the header:

```cpp
#include <tweetnacl.h>
```

**See also**: [https://tweetnacl.cr.yp.to/](https://tweetnacl.cr.yp.to/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

