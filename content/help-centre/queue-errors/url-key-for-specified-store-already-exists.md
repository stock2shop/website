---
title: "URL key for specified store already exists"
heading: ""
description: ""
errorgroup: Magento2 
tags: 
  - Magento2
  - Queue Error
draft: true
---
## 1. How to confirm the source of the queue error
The steps below are to confirm that you are dealing with this exact queue error. It may be more detrimental to the integration to try and resolve this queue error using the steps for a separate queue error.

1. On the console click Queue > View  
2. Under Search Results locate the queue error 
3. Click on the 3 vertical dots > View Item

## 2. What does the queue error mean
**Instruction**: "sync_channel_products " 
**Message**: message":"URL key for specified store already exists." 

The title of the product needs to be checked and updated/ corrected to resolve the error message.

## 3. What issue(s) does the queue error cause
This is a blocking queue error meaning it affects all the other updates to Magento. All other queue errors will not be processed.

## 4. How to resolve it
Update any duplicate product titles (Magento does not allow duplicate product names, as it uses them to create url keys) then retry any errors in the queue with a similar message.