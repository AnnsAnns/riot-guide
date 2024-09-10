---
title: api-net_sock_dtls.md
description: api-net_sock_dtls.md
---
# group `net_sock_dtls` 

Sock submodule for DTLS.

DTLS sock acts as a wrapper for the underlying DTLS module to provide encryption for applications using the UDP sock API.

How To UseSummary

* Include module implementing the DTLS sock API in the Makefile

* Add credentials* Fill [credman_credential_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t) with the credential information

* Add the credential using [credman_add()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga541badb0086366236a741db3f50eb3dc)

* Server operation* Create UDP sock [sock_udp_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga20fa4b890dff1c97a63075090e6f9d7d)

* Create DTLS sock [sock_dtls_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682) using role [SOCK_DTLS_SERVER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gga2397dacb6bf5299415d295e773dfeb44af8548d1d8748a66e59667582bed23a17).

* Optionally:

* when using PSK ciphersuites, set a hint [sock_dtls_set_server_psk_id_hint()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga0023a4097d185cd6ee21e5097f51a49a)

* add extra credentials [sock_dtls_add_credential()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gae9388932dba7c8ade1245ff296e810f7)

* when using ECC ciphersuites, set a callback for credential selection [sock_dtls_set_rpk_cb()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga7524206606ab503113c5ffa83df1a2af)

* Start listening with [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69)

* Client operation* Create UDP sock [sock_udp_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga20fa4b890dff1c97a63075090e6f9d7d)

* Create DTLS sock [sock_dtls_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682) using role [SOCK_DTLS_CLIENT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gga2397dacb6bf5299415d295e773dfeb44a5d0ebcac70c848b4c09c9a35e40cfdaf)

* Optionally:

* add extra credentials [sock_dtls_add_credential()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gae9388932dba7c8ade1245ff296e810f7)

* when using PSK ciphersuites, set a callback for hint reception and credential selection [sock_dtls_set_client_psk_cb()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga14d2d11e9dcf19049f330ad5c667580e)

* when using ECC ciphersuites, set a callback for credential selection [sock_dtls_set_rpk_cb()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga7524206606ab503113c5ffa83df1a2af)

* Start handshake session to server [sock_dtls_session_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga6ebde4fba6fd184710d1ec1c6285e7a2)

* Handle incoming handshake packets with [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69)

* Send packet to server [sock_dtls_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e)

Makefile IncludesFirst, we need to [include](#creating-an-application_1including-modules) a module that implements this API in our applications Makefile. For example the module that implements this API for [tinydtls](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tinydtls) is called tinydtls_sock_dtls.

The corresponding [pkg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg) providing the DTLS implementation will be automatically included so there is no need to use `USEPKG` to add the pkg manually.

Each DTLS implementation may have its own configuration options and caveat. This can be found at [DTLS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dtls).

Adding credentialsBefore using this API, either as a server or a client, we first need to add the credentials to be used for the encryption using [credman](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman). Note that credman does not copy the credentials given into the system, it only has information about the credentials and where it is located at. So it is your responsibility to make sure that the credential is valid during the lifetime of your application.

```cpp
#include <stdio.h>

#include "net/credman.h"

#define SOCK_DTLS_SERVER_TAG (10)
#define SOCK_DTLS_CLIENT_TAG (20)

static char *psk_key = "secretPSK";
static char *psk_id = "secretID";

static const unsigned char server_ecdsa_priv_key[] = {...};
static const unsigned char server_ecdsa_pub_key_x[] = {...};
static const unsigned char server_ecdsa_pub_key_y[] = {...};
static const unsigned char client_pubkey_x[] = {...};
static const unsigned char client_pubkey_y[] = {...};

static ecdsa_public_key_t other_pubkeys[] = {
    { .x = client_pubkey_x, .y = client_pubkey_y },
};

int main(void)
{
    credman_credential_t psk_credential = {
        .type = CREDMAN_TYPE_PSK,
        .tag = SOCK_DTLS_SERVER_TAG,
        .params = {
            .psk = {
                .key = { .s = psk_key, .len = sizeof(psk_key), },
                .id = { .s = psk_id, .len = sizeof(psk_id), },
            },
        },
    };

    if (credman_add(&psk_credential) < 0) {
        puts("Error cannot add credential");
    }

    credman_credential_t ecc_credential = {
        .type = CREDMAN_TYPE_ECDSA,
        .tag = SOCK_DTLS_SERVER_TAG,
        .params = {
            .ecdsa = {
                .private_key = server_ecdsa_priv_key,
                .public_key = {
                    .x = server_ecdsa_pub_key_x,
                    .y = server_ecdsa_pub_key_y,
                },
                .client_keys = other_pubkeys,
                .client_keys_size = ARRAY_SIZE(other_pubkeys),
            },
        },
    };

    if (credman_add(&ecc_credential) < 0) {
        puts("Error cannot add credential");
    }

    // start server/client
    // [...]
}
```

Above we see an example of how to register a PSK and an ECC credential.

First, we need to include the header file for the API.

```cpp
#include "net/credman.h"

int main(void)
{
    credman_credential_t psk_credential = {
        .type = CREDMAN_TYPE_PSK,
        .tag = SOCK_DTLS_SERVER_TAG,
        .params = {
            .psk = {
                .key = { .s = psk_key, .len = sizeof(psk_key), },
                .id = { .s = psk_id, .len = sizeof(psk_id), },
            },
        },
    };

    [...]
}
```

We tell [credman](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) which credential to add by filling in the credentials information in a struct [credman_credential_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t). For PSK credentials, we use enum [CREDMAN_TYPE_PSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1gga9b3a1809012813b046937832b80a4ffdadec85d3ad6545265cb1cef0165a8aec3) for the [type](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701).

Next, we must assign a [tag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7) for the credential. Tags are unsigned integer values used to identify which DTLS sock has access to which credentials. Each DTLS sock will also be assigned a list of tags. As a result, a sock can only use credentials that have the same tag as the ones in the list.

```cpp
if (credman_add(&psk_credential) < 0) {
    puts("Error cannot add credential");
}
```

After credential information is filled, we can add it to the credential pool using [credman_add()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga541badb0086366236a741db3f50eb3dc).

For adding credentials of other types, you can follow the steps above except [credman_credential_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701) and [credman_credential_t::params](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a88361bff5ce2f9f08e2c09f8ec91cfa5) depend on the type of credential used.

Server OperationAfter credentials are added, we can start the server.

```cpp
#include <stdio.h>

#include "net/sock/dtls.h"

#define SOCK_DTLS_SERVER_TAG (10)

int main(void)
{
    // Add credentials
    // [...]

    // initialize server
    sock_udp_t udp_sock;
    sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
    local.port = 20220;
    if (sock_udp_create(&udp_sock, &local, NULL, 0) < 0) {
        puts("Error creating UDP sock");
        return -1;
    }

    sock_dtls_t dtls_sock;
    if (sock_dtls_create(&dtls_sock, &udp_sock,
                         SOCK_DTLS_SERVER_TAG,
                         SOCK_DTLS_1_2, SOCK_DTLS_SERVER) < 0) {
        puts("Error creating DTLS sock");
        return -1;
    }

    while (1) {
        int res;
        char buf[128];
        sock_dtls_session_t session;

        res = sock_dtls_recv(&dtls_sock, &session, buf, sizeof(buf),
                             SOCK_NO_TIMEOUT);
        if (res > 0) {
            printf("Received %d bytes\n", res);
            if (sock_dtls_send(&dtls_sock, &session, buf, res) < 0) {
                puts("Error sending reply");
            }
        }
    }
    return 0;
}
```

This is an example of a DTLS echo server.

DTLS sock uses an initialized UDP sock to send and receive encrypted packets. Therefore, the listening port for the server also needs to be set here.

```cpp
sock_udp_t udp_sock;
sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
local.port = 20220;
if (sock_udp_create(&udp_sock, &local, NULL, 0) < 0) {
    puts("Error creating UDP sock");
    return -1;
}
```

Using the initialized UDP sock, we can then create our DTLS sock. We use SOCK_DTLS_SERVER_TAG, which is defined as `10` in our application code beforehand, as our tag. Using [SOCK_DTLS_1_2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ggad99ad19d954966f46d918c3610ee987ca3d86ab5555dcad0072067eeca3db9696) and [SOCK_DTLS_SERVER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gga2397dacb6bf5299415d295e773dfeb44af8548d1d8748a66e59667582bed23a17), we set our DTLS endpoint to use DTLS version 1.2 and act as a DTLS server.

Note that some DTLS implementation do not support earlier versions of DTLS. In this case, [sock_dtls_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682) will return an error. A list of supported DTLS version for each DTLS implementation can be found at this [page](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dtls). In case of error, the program is stopped.

```cpp
#define SOCK_DTLS_SERVER_TAG (10)

[...]

sock_dtls_t dtls_sock;
if (sock_dtls_create(&dtls_sock, &udp_sock,
                     SOCK_DTLS_SERVER_TAG,
                     SOCK_DTLS_1_2, SOCK_DTLS_SERVER) < 0) {
    puts("Error creating DTLS sock");
    return -1;
}
```

Now we can listen to incoming packets using [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69). The application waits indefinitely for new packets. If we want to timeout this wait period we could alternatively set the `timeout` parameter of the function to a value != [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e). If an error occurs we just ignore it and continue looping. We can reply to an incoming message using its `session`.

```cpp
while (1) {
    int res;
    char buf[128];
    sock_dtls_session_t session;

    res = sock_dtls_recv(&dtls_sock, &session, buf, sizeof(buf),
                         SOCK_NO_TIMEOUT);
    if (res > 0) {
        printf("Received %d bytes -- echo!\n", res);
        if (sock_dtls_send(&dtls_sock, &session, buf, res) < 0) {
            puts("Error sending reply");
        }
    }
}
return 0;
```

Client Operation
```cpp
#include "net/sock/udp.h"
#include "net/sock/dtls.h"
#include "net/ipv6/addr.h"
#include "net/credman.h"

#define SOCK_DTLS_CLIENT_TAG (20)

#ifndef SERVER_ADDR
#define SERVER_ADDR "fe80::aa:bb:cc:dd" // replace with the server address
#endif

int main(void)
{
    // Add credentials
    // [...]

    // initialize client
    char rcv[128];
    sock_udp_t udp_sock;
    sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
    local.port = 12345;

    sock_udp_ep_t remote = SOCK_IPV6_EP_ANY;
    remote.port = DTLS_DEFAULT_PORT;
    remote.netif = gnrc_netif_iter(NULL)->pid;   // only if gnrc_netif_highlander() returns true

    sock_dtls_t dtls_sock;
    sock_dtls_session_t session;

    if (!ipv6_addr_from_str((ipv6_addr_t *)remote.addr.ipv6, SERVER_ADDR)) {
        puts("Error parsing destination address");
        return -1;
    }

    if (sock_udp_create(&udp_sock, &local, NULL, 0) < 0) {
        puts("Error creating UDP sock");
        return -1;
    }

    if (sock_dtls_create(&dtls_sock, &udp_sock,
                         SOCK_DTLS_CLIENT_TAG,
                         SOCK_DTLS_1_2, SOCK_DTLS_CLIENT) < 0) {
        puts("Error creating DTLS sock");
        sock_udp_close(&udp_sock);
        return -1;
    }

    if (sock_dtls_session_init(&dtls_sock, &remote, &session) < 0) {
        puts("Error initiating session");
        sock_dtls_close(&dtls_sock);
        sock_udp_close(&udp_sock);
        return -1;
    }

    if (sock_dtls_recv(&dtls_sock, &session, rcv, sizeof(rcv),
                       SOCK_NO_TIMEOUT) != -SOCK_DTLS_HANDSHAKE) {
        puts("Error completing handshake");
        sock_dtls_close(&dtls_sock);
        sock_udp_close(&udp_sock);
        return -1;
    }

    const char data[] = "HELLO";
    int res = sock_dtls_send(&dtls_sock, &session, data, sizeof(data), 0);
    if (res >= 0) {
        printf("Sent %d bytes\n", res);
        res = sock_dtls_recv(&dtls_sock, &session, rcv, sizeof(rcv),
                             SOCK_NO_TIMEOUT);
        if (res > 0) {
            printf("Received %d bytes\n", res);
        }
    }
    else {
        puts("Error sending data");
    }

    sock_dtls_session_destroy(&dtls_sock, &session);
    sock_dtls_close(&dtls_sock);
    sock_udp_close(&udp_sock);
    return 0;
}
```
 This is an example of a DTLS echo client.

Like the server, we must first create the UDP sock.

```cpp
sock_udp_t udp_sock;
sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
local.port = 12345;
sock_udp_create(&udp_sock, &local, NULL, 0);
```

After that, we set the address of the remote endpoint and its listening port, which is DTLS_DEFAULT_PORT (20220).

```cpp
sock_udp_ep_t remote = SOCK_IPV6_EP_ANY;
remote.port = DTLS_DEFAULT_PORT;
remote.netif = gnrc_netif_iter(NULL)->pid;   // only if gnrc_netif_highlander() returns true

if (!ipv6_addr_from_str((ipv6_addr_t *)remote.addr.ipv6, SERVER_ADDR)) {
    puts("Error parsing destination address");
    return -1;
}
```

After the UDP sock is created, we can proceed with creating the DTLS sock. Before sending the packet, we must first initiate a session handshake with the remote endpoint using [sock_dtls_session_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga6ebde4fba6fd184710d1ec1c6285e7a2). We will need to call [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) to receive and process all the handshake packets. If the handshake is successful and the session is created, we send packets to it using [sock_dtls_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e). As we already know the session exists, we can set the timeout to `0` and listen to the reply with [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69).

Alternatively, set the timeout to of [sock_dtls_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e) to the duration we want to wait for the handshake process. We can also set the timeout to [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) to block indefinitely until handshake is complete. After handshake completes, the packet will be sent.

[sock_dtls_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga53b88f47412139d54c8e480404435ea8), [sock_dtls_recv](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) and [sock_dtls_close()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga47fde8af808ceed2db7fefbb05bbd04c) only manages the DTLS layer. That means we still have to clean up the created UDP sock from before by calling [sock_udp_close()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga9bab7d0998b2c49e66bab0f03367298a) on our UDP sock in case of error or we reached the end of the application.

```cpp
char rcv[128];
sock_dtls_t dtls_sock;
sock_dtls_session_t session;

[...]

if (sock_dtls_create(&dtls_sock, &udp_sock,
                     SOCK_DTLS_CLIENT_TAG,
                     SOCK_DTLS_1_2, SOCK_DTLS_CLIENT) < 0) {
    puts("Error creating DTLS sock");
    sock_udp_close(&udp_sock);
    return -1;
}

if (sock_dtls_session_init(&dtls_sock, &remote, &session) < 0) {
    puts("Error initiating session");
    sock_dtls_close(&dtls_sock);
    sock_udp_close(&udp_sock);
    return -1;
}

if (sock_dtls_recv(&dtls_sock, &session, rcv, sizeof(rcv),
                   SOCK_NO_TIMEOUT) != -SOCK_DTLS_HANDSHAKE) {
    puts("Error completing handshake");
    sock_dtls_close(&dtls_sock);
    sock_udp_close(&udp_sock);
    return -1;
}

const char data[] = "HELLO";
int res = sock_dtls_send(&dtls_sock, &session, data, sizeof(data), 0);
if (res >= 0) {
    printf("Sent %d bytes: %*.s\n", res, res, data);
    res = sock_dtls_recv(&dtls_sock, &session, rcv, sizeof(rcv),
                         SOCK_NO_TIMEOUT);
    if (res > 0) {
        printf("Received %d bytes: %*.s\n", res, res, rcv);
    }
}
else {
    puts("Error sending data");
}

sock_dtls_session_destroy(&dtls_sock, &session);
sock_dtls_close(&dtls_sock);
sock_udp_close(&udp_sock);
return 0;
```

Multi-credential handlingEach sock needs at least one credential tag to operate. `sock_dtls_create` allows to optionally assign an initial credential. Extra credentials can be added and removed using [sock_dtls_add_credential](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gae9388932dba7c8ade1245ff296e810f7) and [sock_dtls_remove_credential](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gad9d8b4af474253a60dc78078835a6e4d) respectively (found in `[net/sock/dtls/creds.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#creds_8h)`).

Pre-shared Keys Cipher SuitesIn the case of PSK, a server can optionally indicate a hint to help the client to decide which PSK Identity to use, using [sock_dtls_set_server_psk_id_hint](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga0023a4097d185cd6ee21e5097f51a49a) (see [https://tools.ietf.org/html/rfc4279#section-5.2](https://tools.ietf.org/html/rfc4279#section-5.2)). The client application can decide which credential to use based on the sent hint and/or the session information, by registering a callback with [sock_dtls_set_client_psk_cb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga14d2d11e9dcf19049f330ad5c667580e). If no callback is registered, or fails to chose a tag (i.e. it returns [CREDMAN_TAG_EMPTY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1gaef3b87d09d3032ab13e653756f34da92)), the credential is chosen as follows: if a hint is sent by the server, all credentials registered to the sock are checked for a matching [hint](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structpsk__params__t_1a2995108ed4d4a1a50651d6af4d609ef0). A credential is selected on matching hint. If no credential matches the hint or no hint is provided, the first PSK credential registered in the sock is used.

Elliptic Curve Cryptography Cipher SuitesWhen using ECC both client and server applications can register a callback to decide which of the registered credentials should be used, based on the session information. This is done using [sock_dtls_set_rpk_cb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1ga7524206606ab503113c5ffa83df1a2af).

In both cases, if no callbacks are registered, the sock implementation will try to find a registered credential in the Sock's credential list, that matches the needed type. The first one that matches is used.

Public key verification when using ECCBy enabling the pseudomodule `sock_dtls_verify_public_key` the DTLS sock will verify the public key of the remote peer. When enabled, the DTLS sock will only accept a connection if the provided public key is in the list of public keys assigned to the specified sock. This only applies when using ECC ciphersuites (i.e., not PSK).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DTLS_HANDSHAKE_BUFSIZE`](#group__net__sock__dtls_1gad77967da0dcabd6ceea9e523897b6798)            | Size buffer used in handshake to hold credentials.
`define `[`SOCK_DTLS_HANDSHAKE`](#group__net__sock__dtls_1ga3f7ccb93f455150d01aad0295d398762)            | Return value for a successful handshake.
`define `[`CONFIG_DTLS_FORCE_EXTENDED_MASTER_SECRET`](#group__net__sock__dtls_1gad41621093a9a2d9e7830e372125cb8fd)            | Force extended master secret extension.
`define `[`CONFIG_DTLS_FORCE_RENEGOTIATION_INFO`](#group__net__sock__dtls_1ga05770995cf620f04210dc5517517db70)            | Force renegotiation info extension.
`public void `[`sock_dtls_init`](#group__net__sock__dtls_1ga53b88f47412139d54c8e480404435ea8)`(void)`            | Called exactly once during `auto_init`.
`public int `[`sock_dtls_create`](#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * udp_sock,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,unsigned version,unsigned role)`            | Creates a new DTLS sock object.
`public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * `[`sock_dtls_get_udp_sock`](#group__net__sock__dtls_1ga3ff1ae03ea628694d6133fd603212c4c)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock)`            | Get underlying UDP sock.
`public int `[`sock_dtls_session_init`](#group__net__sock__dtls_1ga6ebde4fba6fd184710d1ec1c6285e7a2)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote)`            | Initialize session handshake.
`public void `[`sock_dtls_session_destroy`](#group__net__sock__dtls_1ga5e2688dd03fe5d365ec81c4f82ff03ed)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote)`            | Destroys an existing DTLS session.
`public void `[`sock_dtls_session_get_udp_ep`](#group__net__sock__dtls_1gaceffefc3c421cb696560e87ecf040161)`(const `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)`            | Get the remote UDP endpoint from a session.
`public void `[`sock_dtls_session_set_udp_ep`](#group__net__sock__dtls_1gaddac5bc68779c993cc613042a2515b12)`(`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)`            | Set the remote UDP endpoint from a session.
`public ssize_t `[`sock_dtls_recv_aux`](#group__net__sock__dtls_1ga91476f35b5ea85b789e19cb3fd256f42)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void * data,size_t maxlen,uint32_t timeout,`[`sock_dtls_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga9512682d85257239769e4f62d3968839)` * aux)`            | Receive handshake messages and application data from remote peer.
`public inline static ssize_t `[`sock_dtls_recv`](#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void * data,size_t maxlen,uint32_t timeout)`            | Receive handshake messages and application data from remote peer.
`public ssize_t `[`sock_dtls_recv_buf_aux`](#group__net__sock__dtls_1ga208fb85350aa404db39305d6fe6cc0a9)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_dtls_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga9512682d85257239769e4f62d3968839)` * aux)`            | Decrypts and provides stack-internal buffer space containing a message from a remote peer.
`public inline static ssize_t `[`sock_dtls_recv_buf`](#group__net__sock__dtls_1ga026748dd9ad74a8a216eaad086551a7d)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void ** data,void ** buf_ctx,uint32_t timeout)`            | Decrypts and provides stack-internal buffer space containing a message from a remote peer.
`public ssize_t `[`sock_dtls_sendv_aux`](#group__net__sock__dtls_1gaebdaa80fe988205e8aa2106898095e8c)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,uint32_t timeout,`[`sock_dtls_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gac7bc6f25016a05b5b793eb5d4745166a)` * aux)`            | Encrypts and sends a message to a remote peer with non-continous payload.
`public inline static ssize_t `[`sock_dtls_send_aux`](#group__net__sock__dtls_1ga1abd23c69aef1066a139cfc2ffb0d3e7)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const void * data,size_t len,uint32_t timeout,`[`sock_dtls_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gac7bc6f25016a05b5b793eb5d4745166a)` * aux)`            | Encrypts and sends a message to a remote peer.
`public inline static ssize_t `[`sock_dtls_send`](#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const void * data,size_t len,uint32_t timeout)`            | Encrypts and sends a message to a remote peer.
`public inline static ssize_t `[`sock_dtls_sendv`](#group__net__sock__dtls_1ga16197978f12dc0efd521e8dba2853c45)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,uint32_t timeout)`            | Encrypts and sends a message to a remote peer with non-continous payload.
`public void `[`sock_dtls_close`](#group__net__sock__dtls_1ga47fde8af808ceed2db7fefbb05bbd04c)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock)`            | Closes a DTLS sock.

## Members

#### `define `[`DTLS_HANDSHAKE_BUFSIZE`](#group__net__sock__dtls_1gad77967da0dcabd6ceea9e523897b6798) 

Size buffer used in handshake to hold credentials.

#### `define `[`SOCK_DTLS_HANDSHAKE`](#group__net__sock__dtls_1ga3f7ccb93f455150d01aad0295d398762) 

Return value for a successful handshake.

#### `define `[`CONFIG_DTLS_FORCE_EXTENDED_MASTER_SECRET`](#group__net__sock__dtls_1gad41621093a9a2d9e7830e372125cb8fd) 

Force extended master secret extension.

#### `define `[`CONFIG_DTLS_FORCE_RENEGOTIATION_INFO`](#group__net__sock__dtls_1ga05770995cf620f04210dc5517517db70) 

Force renegotiation info extension.

#### `public void `[`sock_dtls_init`](#group__net__sock__dtls_1ga53b88f47412139d54c8e480404435ea8)`(void)` 

Called exactly once during `auto_init`.

Calls the initialization function required by the DTLS stack used.

#### `public int `[`sock_dtls_create`](#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * udp_sock,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,unsigned version,unsigned role)` 

Creates a new DTLS sock object.

Takes an initialized UDP sock and uses it for the transport. Memory allocation functions required by the underlying DTLS stack can be called in this function.

**See also**: [(D)TLS Credential Manager](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman).

#### Parameters
* `sock` The resulting DTLS sock object 

* `udp_sock` Existing UDP sock initialized with [sock_udp_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga20fa4b890dff1c97a63075090e6f9d7d) to be used underneath. 

* `tag` Credential tag of `sock`. The sock will only use credentials with the tags registered to it (see [sock_dtls_add_credential](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds_1gae9388932dba7c8ade1245ff296e810f7)). Set to [CREDMAN_TAG_EMPTY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1gaef3b87d09d3032ab13e653756f34da92) to create a sock with an empty tag list. 

* `version` [DTLS version](#group__net__sock__dtls_1sock_dtls_prot_version) to use. 

* `role` [Role](#group__net__sock__dtls_1sock_dtls_role) of the endpoint.

#### Returns
0 on success. 

#### Returns
-1 on error

#### `public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * `[`sock_dtls_get_udp_sock`](#group__net__sock__dtls_1ga3ff1ae03ea628694d6133fd603212c4c)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock)` 

Get underlying UDP sock.

`sock != NULL`.

#### Parameters
* `sock` DTLS sock to get UDP sock from.

#### Returns
The underlying UDP sock.

#### `public int `[`sock_dtls_session_init`](#group__net__sock__dtls_1ga6ebde4fba6fd184710d1ec1c6285e7a2)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote)` 

Initialize session handshake.

Sends a ClientHello message to initialize the handshake. Call [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) to finish the handshake.

#### Parameters
* `sock` DTLS sock to use 

* `ep` Remote endpoint to start a handshake with 

* `remote` Resulting session

#### Returns
1, if new handshake is started 

#### Returns
0, if there is an existing session 

#### Returns
-ENOMEM, not enough memory to allocate for new peer 

#### Returns
-EADDRNOTAVAIL, if the local endpoint of `sock` is not set. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) blocks).

#### `public void `[`sock_dtls_session_destroy`](#group__net__sock__dtls_1ga5e2688dd03fe5d365ec81c4f82ff03ed)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote)` 

Destroys an existing DTLS session.

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `sock` [sock_dtls_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaa63acc71681400dd4b856ce09e27cafb), which the session is created on 

* `remote` Remote session to destroy

For tinyDTLS this function destroys the session object right after notifying the remote peer about the closing. This is an interim solution, preventing endlessly blocked session slots, but allows as a consequence truncation attacks. More details in the [issue](https://github.com/eclipse/tinydtls/issues/95).

#### `public void `[`sock_dtls_session_get_udp_ep`](#group__net__sock__dtls_1gaceffefc3c421cb696560e87ecf040161)`(const `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)` 

Get the remote UDP endpoint from a session.

`(session != NULL) && (ep != NULL)`

#### Parameters
* `session` DTLS session 

* `ep` UDP endpoint

#### `public void `[`sock_dtls_session_set_udp_ep`](#group__net__sock__dtls_1gaddac5bc68779c993cc613042a2515b12)`(`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)` 

Set the remote UDP endpoint from a session.

`(session != NULL) && (ep != NULL)`

#### Parameters
* `session` DTLS session 

* `ep` UDP endpoint

Function should only be needed when doing a blocking handshake with [sock_dtls_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e) to set the remote UDP endpoint.

#### `public ssize_t `[`sock_dtls_recv_aux`](#group__net__sock__dtls_1ga91476f35b5ea85b789e19cb3fd256f42)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void * data,size_t maxlen,uint32_t timeout,`[`sock_dtls_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga9512682d85257239769e4f62d3968839)` * aux)` 

Receive handshake messages and application data from remote peer.

#### Parameters
* `sock` DTLS sock to use. 

* `remote` Remote DTLS session of the received data. Cannot be NULL. 

* `data` Pointer where the received data should be stored. 

* `maxlen` Maximum space available at `data`. 

* `timeout` Receive timeout in microseconds. If 0 and no data is available, the function returns immediately. May be SOCK_NO_TIMEOUT to wait until data is available. 

* `aux` Auxiliary data about the received datagram. May be `NULL`, if it is not required by the application.

Function may block if data is not available and `timeout` != 0

#### Returns
The number of bytes received on success 

#### Returns
-SOCK_DTLS_HANDSHAKE when new handshake is completed 

#### Returns
-EADDRNOTAVAIL, if the local endpoint of `sock` is not set. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) blocks). 

#### Returns
-ENOBUFS, if buffer space is not large enough to store received data. 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public inline static ssize_t `[`sock_dtls_recv`](#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void * data,size_t maxlen,uint32_t timeout)` 

Receive handshake messages and application data from remote peer.

#### Parameters
* `sock` DTLS sock to use. 

* `remote` Remote DTLS session of the received data. Cannot be NULL. 

* `data` Pointer where the received data should be stored. 

* `maxlen` Maximum space available at `data`. 

* `timeout` Receive timeout in microseconds. If 0 and no data is available, the function returns immediately. May be SOCK_NO_TIMEOUT to wait until data is available.

Function may block if data is not available and `timeout` != 0

#### Returns
The number of bytes received on success 

#### Returns
-SOCK_DTLS_HANDSHAKE when new handshake is completed 

#### Returns
-EADDRNOTAVAIL, if the local endpoint of `sock` is not set. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) blocks). 

#### Returns
-ENOBUFS, if buffer space is not large enough to store received data. 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_dtls_recv_buf_aux`](#group__net__sock__dtls_1ga208fb85350aa404db39305d6fe6cc0a9)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_dtls_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga9512682d85257239769e4f62d3968839)` * aux)` 

Decrypts and provides stack-internal buffer space containing a message from a remote peer.

#### Parameters
* `sock` DTLS sock to use. 

* `remote` Remote DTLS session of the received data. Cannot be NULL. 

* `data` Pointer to a stack-internal buffer space containing the received data. 

* `buf_ctx` Stack-internal buffer context. If it points to a `NULL` pointer, the stack returns a new buffer space for a new packet. If it does not point to a `NULL` pointer, an existing context is assumed to get a next segment in a buffer. 

* `timeout` Receive timeout in microseconds. If 0 and no data is available, the function returns immediately. May be SOCK_NO_TIMEOUT to wait until data is available. 

* `aux` Auxiliary data about the received datagram. May be `NULL`, if it is not required by the application.

**This feature is experimental!**
 This function is quite new, not implemented for all stacks yet, and may be subject to sudden API changes. Do not use in production if this is unacceptable.

Function may block if data is not available and `timeout` != 0

Function blocks if no packet is currently waiting.

#### Returns
The number of bytes received on success. May not be the complete payload. Continue calling with the returned `buf_ctx` to get more buffers until result is 0 or an error. 

#### Returns
0, if no received data is available, but everything is in order. If `buf_ctx` was provided, it was released. 

#### Returns
-EADDRNOTAVAIL, if the local endpoint of `sock` is not set. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) blocks). 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public inline static ssize_t `[`sock_dtls_recv_buf`](#group__net__sock__dtls_1ga026748dd9ad74a8a216eaad086551a7d)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,void ** data,void ** buf_ctx,uint32_t timeout)` 

Decrypts and provides stack-internal buffer space containing a message from a remote peer.

#### Parameters
* `sock` DTLS sock to use. 

* `remote` Remote DTLS session of the received data. Cannot be NULL. 

* `data` Pointer to a stack-internal buffer space containing the received data. 

* `buf_ctx` Stack-internal buffer context. If it points to a `NULL` pointer, the stack returns a new buffer space for a new packet. If it does not point to a `NULL` pointer, an existing context is assumed to get a next segment in a buffer. 

* `timeout` Receive timeout in microseconds. If 0 and no data is available, the function returns immediately. May be SOCK_NO_TIMEOUT to wait until data is available.

**This feature is experimental!**
 This function is quite new, not implemented for all stacks yet, and may be subject to sudden API changes. Do not use in production if this is unacceptable.

Function may block if data is not available and `timeout` != 0

Function blocks if no packet is currently waiting.

#### Returns
The number of bytes received on success. May not be the complete payload. Continue calling with the returned `buf_ctx` to get more buffers until result is 0 or an error. 

#### Returns
0, if no received data is available, but everything is in order. If `buf_ctx` was provided, it was released. 

#### Returns
-EADDRNOTAVAIL, if the local endpoint of `sock` is not set. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) blocks). 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_dtls_sendv_aux`](#group__net__sock__dtls_1gaebdaa80fe988205e8aa2106898095e8c)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,uint32_t timeout,`[`sock_dtls_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gac7bc6f25016a05b5b793eb5d4745166a)` * aux)` 

Encrypts and sends a message to a remote peer with non-continous payload.

#### Parameters
* `sock` DTLS sock to use 

* `remote` DTLS session to use. A new session will be created if no session exist between client and server. 

* `snips` List of payload chunks, will be processed in order. May be `NULL`. 

* `timeout` Handshake timeout in microseconds. If `timeout > 0`, will start a new handshake if no session exists yet. The function will block until handshake completed or timed out. May be SOCK_NO_TIMEOUT to block indefinitely until handshake complete. 

* `aux` Auxiliary data about the transmission. May be `NULL`, if it is not required by the application.

When blocking, we will need an extra thread to call [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) function to handle the incoming handshake messages.

#### Returns
The number of bytes sent on success 

#### Returns
-ENOTCONN, if `timeout == 0` and no existing session exists with `remote`

#### Returns
-EADDRINUSE, if [sock_dtls_t::udp_sock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsock__dtls_1a71b7e51c4a802f947f347e837f800612) has no local end-point. 

#### Returns
-EAFNOSUPPORT, if `remote->ep != NULL` and sock_dtls_session_t::ep::family of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote->ep` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote->ep` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ETIMEDOUT, `0 < timeout < SOCK_NO_TIMEOUT` and timed out.

#### `public inline static ssize_t `[`sock_dtls_send_aux`](#group__net__sock__dtls_1ga1abd23c69aef1066a139cfc2ffb0d3e7)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const void * data,size_t len,uint32_t timeout,`[`sock_dtls_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gac7bc6f25016a05b5b793eb5d4745166a)` * aux)` 

Encrypts and sends a message to a remote peer.

#### Parameters
* `sock` DTLS sock to use 

* `remote` DTLS session to use. A new session will be created if no session exist between client and server. 

* `data` Pointer where the data to be send are stored 

* `len` Length of `data` to be send 

* `timeout` Handshake timeout in microseconds. If `timeout > 0`, will start a new handshake if no session exists yet. The function will block until handshake completed or timed out. May be SOCK_NO_TIMEOUT to block indefinitely until handshake complete. 

* `aux` Auxiliary data about the transmission. May be `NULL`, if it is not required by the application.

When blocking, we will need an extra thread to call [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) function to handle the incoming handshake messages.

#### Returns
The number of bytes sent on success 

#### Returns
-ENOTCONN, if `timeout == 0` and no existing session exists with `remote`

#### Returns
-EADDRINUSE, if [sock_dtls_t::udp_sock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsock__dtls_1a71b7e51c4a802f947f347e837f800612) has no local end-point. 

#### Returns
-EAFNOSUPPORT, if `remote->ep != NULL` and sock_dtls_session_t::ep::family of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote->ep` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote->ep` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ETIMEDOUT, `0 < timeout < SOCK_NO_TIMEOUT` and timed out.

#### `public inline static ssize_t `[`sock_dtls_send`](#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const void * data,size_t len,uint32_t timeout)` 

Encrypts and sends a message to a remote peer.

#### Parameters
* `sock` DTLS sock to use 

* `remote` DTLS session to use. A new session will be created if no session exist between client and server. 

* `data` Pointer where the data to be send are stored 

* `len` Length of `data` to be send 

* `timeout` Handshake timeout in microseconds. If `timeout > 0`, will start a new handshake if no session exists yet. The function will block until handshake completed or timed out. May be SOCK_NO_TIMEOUT to block indefinitely until handshake complete.

When blocking, we will need an extra thread to call [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) function to handle the incoming handshake messages. An example for a blocking handshake is:* Create an empty [sock_dtls_session_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649) object.

* Set the UDP endpoint of the peer you want to connect to in the session object with [sock_dtls_session_set_udp_ep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaddac5bc68779c993cc613042a2515b12).

* Call [sock_dtls_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e) with a timeout greater than 0. The send function blocks until the handshake completes or the timeout expires. If the handshake was successful the data has been sent.

#### Returns
The number of bytes sent on success 

#### Returns
-ENOTCONN, if `timeout == 0` and no existing session exists with `remote`

#### Returns
-EADDRINUSE, if [sock_dtls_t::udp_sock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsock__dtls_1a71b7e51c4a802f947f347e837f800612) has no local end-point. 

#### Returns
-EAFNOSUPPORT, if `remote->ep != NULL` and sock_dtls_session_t::ep::family of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote->ep` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote->ep` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ETIMEDOUT, `0 < timeout < SOCK_NO_TIMEOUT` and timed out.

#### `public inline static ssize_t `[`sock_dtls_sendv`](#group__net__sock__dtls_1ga16197978f12dc0efd521e8dba2853c45)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * remote,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,uint32_t timeout)` 

Encrypts and sends a message to a remote peer with non-continous payload.

#### Parameters
* `sock` DTLS sock to use 

* `remote` DTLS session to use. A new session will be created if no session exist between client and server. 

* `snips` List of payload chunks, will be processed in order. May be `NULL`. 

* `timeout` Handshake timeout in microseconds. If `timeout > 0`, will start a new handshake if no session exists yet. The function will block until handshake completed or timed out. May be SOCK_NO_TIMEOUT to block indefinitely until handshake complete.

When blocking, we will need an extra thread to call [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) function to handle the incoming handshake messages. An example for a blocking handshake is:* Create an empty [sock_dtls_session_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649) object.

* Set the UDP endpoint of the peer you want to connect to in the session object with [sock_dtls_session_set_udp_ep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaddac5bc68779c993cc613042a2515b12).

* Call [sock_dtls_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga630360b12614e2b57fca0cd81cdf9e4e) with a timeout greater than 0. The send function blocks until the handshake completes or the timeout expires. If the handshake was successful the data has been sent.

#### Returns
The number of bytes sent on success 

#### Returns
-ENOTCONN, if `timeout == 0` and no existing session exists with `remote`

#### Returns
-EADDRINUSE, if [sock_dtls_t::udp_sock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsock__dtls_1a71b7e51c4a802f947f347e837f800612) has no local end-point. 

#### Returns
-EAFNOSUPPORT, if `remote->ep != NULL` and sock_dtls_session_t::ep::family of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote->ep` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote->ep` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ETIMEDOUT, `0 < timeout < SOCK_NO_TIMEOUT` and timed out.

#### `public void `[`sock_dtls_close`](#group__net__sock__dtls_1ga47fde8af808ceed2db7fefbb05bbd04c)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock)` 

Closes a DTLS sock.

Releases any memory allocated by [sock_dtls_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga10998fac05f15688f9dd34a22c7bb682). This function does NOT close the UDP sock used by the DTLS sock. After the call to this function, user will have to call [sock_udp_close()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga9bab7d0998b2c49e66bab0f03367298a) to close the UDP sock.

`(sock != NULL)`

#### Parameters
* `sock` DTLS sock to close

