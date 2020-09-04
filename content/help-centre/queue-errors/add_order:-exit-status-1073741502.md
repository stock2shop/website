---
title: "add_order: exit status 1073741502"
heading: ""
description: ""
tags:
  - Sage Evolution
  - Queue Error
  - add_order
draft: true
---

## What does the queue error mean

This means that S2S attempted to create an order at source but was rejected by Evolution.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error which means you could still receive other orders if its only an issue with this particular order. You will will still receive product and customer updates, however, this order will not be raised into Sage Evolution until you have fixed the issue. 

## How to confirm the source of the queue error

1. Click on the three dots of the queue error > view item
2. Confirm Instruction > "add_order"
3. Confirm message > "exit status -1073741502: "

## How to resolve the queue error

This error is a result of there being an issue with the Evolution SDK.

1. Confirm by testing the SDK > [https://[tunnel_host].apifact.com:8000/evolution/testSdk](https://[tunnel_host].apifact.com:8000/evolution/testSdk) / (User and password in console source settings)
2. If status false (exit status -1073741502) > then the issue is that SDK is non-functional. 
3. Reach out to Evolution support for further assistance