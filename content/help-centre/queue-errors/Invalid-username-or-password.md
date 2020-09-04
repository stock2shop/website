---
title: "Invalid username or password"
heading: ""
description: ""
tags:
  - Omni Accounts
  - Queue Error
draft: true
---

## What does the queue error mean

**Instruction**: "add_order"  
**Message**: "Invalid username or password"  
**The Important Bits**: Failed to add order at source.

This means that S2S was unable to process an order to Omni Accounts. 

This error is a result of S2S's Apifact software no longer being able to contact the Omni Accounts database, or the user credentials used are no longer valid.

## What issue(s) does the queue error cause

This error is a non-blocking queue error which means you could still receive other orders if its only an issue with this particular order. You will will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error > View Item 

## How to resolve the queue error

To resolve this issue:

1. Reach out to Omni Accounts specialists to confirm if any changes have been made to the server configuration.
2. Ensure credentials issued to S2S are still valid and granted sufficient access level to the database
3. Ensure all necessary services are running on the server.

Contact support@stock2shop.com if your details have changed or need further assistance