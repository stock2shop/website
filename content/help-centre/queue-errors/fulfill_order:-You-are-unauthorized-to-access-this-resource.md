---
title: "fulfill_order: You are unauthorized to access this resource"
heading: ""
description: ""
tags: 
  - ParcelNinja
  - fulfill_order
draft: true
---

## What does the queue error mean

This means that S2S attempted to create a fulfillment but was rejected by ParcelNinja.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error, until the error is resolved, the orders will not process through to ParcelNinja to be fulfilled.

## How to confirm the source of the queue error

Navigate to:

1. Click on the three dots of the queue error > view item
2. Confirm Instruction > typically will be "fulfill_order"
3. Confirm message contains/ends with "You are unauthorized to access this resource"

## How to resolve the queue error

This error results from S2S being provided with the incorrect API keys to sync to ParcelNinja. Correct keys would need to be provided to S2S or created by: 

1. In ParcelNinja Navigate to "User Management"
2. Scroll down to "API Keys" > "Add Key"
3. Set the description to “Stock2Shop”
4. Select (tick) all the roles, except for (View Virtual / Update Virtual / Delete Virtual)
5. Click "Add Key"
6. Copy the API "Username" and "Password" and send to Stock2Shop
