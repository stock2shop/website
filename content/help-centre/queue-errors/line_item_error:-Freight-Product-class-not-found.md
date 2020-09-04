---
title: "line_item_error: Freight Product class not found"
heading: ""
description: ""
tags: 
  - Syspro
  - Queue Error
  - line_item_error
draft: true
---

## What does the queue error mean

This queue error occurs when a shipping service line item has not been set up in Syspro and has not been added to the source configuration in Stock2Shop. When Stock2Shop tries to raise the order in Syspro it is trying to add a shipping line item that does not exist, therefore fails.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error which means you will still receive product and customer updates, however, the order will not be raised into Syspro until you have fixed the Shipping line item issue.

## How to confirm the source of the queue error

To confirm if the error is, in fact, an invalid product error follow the below steps:

1. On your console navigate to Queue > View
2. View the line item error which will read: Line Item Error: Freight - Product class ' ' not found

## How to resolve the queue error

The following things need to be done in order to resolve this issue. You will need to create a service line item in Syspro and provide Stock2Shop with the item code for the service line item. Stock2Shop will then add it as a parameter to your source configuration.

param_shipping_code:  (Service line item SKU)

You will then need to retry the failed order.