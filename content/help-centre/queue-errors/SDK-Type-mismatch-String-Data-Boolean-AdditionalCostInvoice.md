---
title: "SDK Type mismatch (String Data, Boolean& AdditionalCostInvoice)"
heading: ""
description: ""
tags: 
  - Sage 50cloud Pastel Partner
  - Queue Error
  - SDK Type mismatch
draft: true
---

## What does the queue error mean

When trying to raise an order at source Apifact is trying to send values with a " , " in it instead of a " . ". This causes a long-running task which inevitably fails. 

## What issue(s) does the queue error cause

This error is a non-blocking queue error which means you could still receive other orders if it's only an issue with this particular order. You will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

To confirm if the error is, in fact, a type mismatch follow the below steps:

1. Navigate to Queue > View on your console
2. Click on the three dots of the queue error > view item
3. View the line item error which will read: SDK Type mismatch (String Data, Boolean& AdditionalCostInvoice)

## How to resolve the queue error

This change will need to be made on the server Sage 50cloud Pastel Partner is installed on. Follow the steps below to resolve the queue error:

1. Go to Windows search and click "Run..." 
2. In the search box or Run window, type the following "regedit" and press enter
3. Go to HKEY_USERS > DEFAULT > Control Panel > International 
4. Look for "sMonDecimalSep"
5. Double click on "sMonDecimalSep" and edit it from a " , " to a " . "

Depending on your version of Windows, and how it's configured, you may see a User Account Control dialogue box where you'll need to confirm that you want to open Registry Editor.

6. Go to Windows search and type in "services"
7. Click on the service's icon
8. Find the two services named "Apifact Tunnel" & "Apifact Connector".
9. Restart both services.
10. Confirm that the services are both running

Once the Apifact services have been restarted, you will need to retry any queue errors that have accumulated.