---
title: "sync_order: Duplicate line items are not allowed"
heading: ""
description: ""
tags: ["WooCommerce","sync_order"]
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "sync_order: Duplicate line items are not allowed wp"
---

## What does the queue error mean

This order error occurs when the sales channel that the order is syncing from has a single sku listed twice on an order, if a sku is ordered twice it should display as one line item on the shopping cart with a qty of "2".

Another reason this could occur is when the sales channel has a specific discount process, in which the system adds the same sku to the order as a negative value to display the discount.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error which means you could still receive other orders if it's only an issue with this particular order. You will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

In order to confirm which of the above is causing the error, follow the below steps

1. Login to S2S 
2. Click on the three dots of the order error > click "View Item"
3. Scroll down on the payload and find the order number ("order_number":)

{{< highlight go >}}
{
  "order": {
    "order": {
      "id": 443,
      "order_number": "443",
      "order_key": "wc_order_6KyJndyBGpu7O",
      "created_at": "2020-01-16T15:39:44Z",
      "updated_at": "2020-01-16T15:41:02Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "status": "processing",
      "currency": "ZAR",
      "total": "3298.00",
      "subtotal": "3298.00",
      "total_line_items_quantity": 3,
      "total_tax": "0.00",
      "total_shipping": "0.00",
      "cart_tax": "0.00",
      "shipping_tax": "0.00",
      "total_discount": "0.00",
      "shipping_methods": "",
{{< /highlight >}}

4. Login to the admin portal of your WooCommerce Store/website
5. Navigate to orders > search for the above order number
6. Check order for either duplicate SKU's on different line items or 2 line items with blank skus

## How to resolve the queue error

If it is the discount app causing the order to duplicate the sku, you will have to contact Support@stock2shop.com to assist in adding a setting to combine the line items. Note Stock2Shop needs to combine them or the order will fail when sending it to the accounting system.

Because the order has been created incorrectly, for whichever cause, the order, unfortunately, will need to be manually captured and fulfillment manually created if you don't want Stock2Shop to automatically combine both line items.

Should anything be unclear please send a mail to support@stock2shop.com