---
title: "Failed to establish a new connection"
heading: "Failed to establish a new connection: [WinError 10061] No connection could be made because the target machine actively refused it"
description: ""
tags:
  - Omni Accounts
  - Queue Error
draft: true
---

## What does the queue error mean

**Instruction**: "add_order"  
**Message**: "requests.exceptions.ConnectionError: HTTPConnectionPool(host='127.0.0.1', port=8080): Max retries exceeded with url: /Sales%20Order/?UserName=Guest&amp;Password=&amp;CompanyName=Client++%28PTY%29LTD (Caused by NewConnectionError('&lt;urllib3.connection.HTTPConnection object at 0x04658850&gt;: Failed to establish a new connection: [WinError 10061] No connection could be made because the target machine actively refused it',)) "  
**The Important Bits**: No connection could be made because the target machine actively refused it

This means that S2S was unable to process an order to Omni Accounts.

This issue is a result of the OmniWebServiceREST service not running on the Omni Accounts server at the time of the order.

## What issue(s) does the queue error cause

This error is a non-blocking queue error which means you could still receive other orders if its only an issue with this particular order. You will will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error > View Item 

## How to resolve the queue error

1. Find the OmniWebServiceREST and open it. This is usually located in C:/Omni/System
2. Do not close rest service, just minimize.
3. If needed, stop and restart this service.
4. Return the S2S queue and retry the order error and confirm the order has been processed.

![queue errors failed to establish a new connection](/uploads/queue-errors-Failed-to-establish-a-new-connection-1.png)
![queue errors failed to establish a new connection](/uploads/queue-errors-Failed-to-establish-a-new-connection-2.png)