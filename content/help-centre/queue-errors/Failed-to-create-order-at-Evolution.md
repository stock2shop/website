---
title: "Failed to create order at Evolution"
heading: ""
description: ""
tags:
  - Sage Evolution
draft: true
---

## What does the queue error mean

**Instruction**: "Create Order"  
**Message**: apifact/Proxy CURL Error: 52, Empty reply from server  
**The Important Bits**: Failed to create order at source  

This means an order failed to create in Evolution.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error which means you could still receive other orders if its only an issue with this particular order. You will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error > View Item 

## How to resolve it

This error means that the communication between the Evolution server or Apifact services is offline.

1. Attempt to retry the queue item after a brief period, as it may stem from a temporary loss of communication. 
2. Check if communication with server works using the following endpoint:  `https://[client_name].apifact.com:8000/` 
    - Update client_name with the tunnel name for the client, which can be found on the advanced source settings on the client's console in the tunnel_host setting. 
    - Settings > Manage Sources > 3 Dot menu on the source > Edit - Advanced > tunnel_host  
3. If this does not resolve the error, then the Apifact services would likely need to be restarted:
    1. Go to Windows search and type in "services" (On the source server where our Apifact software is installed)
    2. Click on the services icon
    3. Find the two services named "Apifact Tunnel" & "Apifact Connector".
    4. Restart both services.
    5. Confirm that the services are both running

Contact support@stock2shop.com if the issue still persists.