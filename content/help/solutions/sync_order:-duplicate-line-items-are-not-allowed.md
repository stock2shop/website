---
title: "sync_order: Duplicate line items are not allowed"
heading: ""
description: ""
errorgroup: Shopify
tags: 
  - Shopify
  - Queue Error
  - sync_order
draft: true
---

## What does the queue error mean

This order error occurs when the sales channel that the order is syncing from has a single sku listed twice on an order, if a sku is ordered twice it should display as one line item on the shopping cart with a qty of "2".

Another reason this could occur is when the sales channel has a specific discount process, in which the system adds the same sku to the order as a negative value to display the discount.

## What issue(s) does the queue error cause

This error is a non-blocking queue error which means you could still receive other orders if its only an issue with this particular order. You will will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

In order to confirm which of the above is causing the error, follow the below steps

1. Login to S2S 
2. Click on the three dots of the order error > click "View Item"
3. Scroll down on the payload and find the order number ("name":)

{{< highlight go >}}

{
  "order": {
    "id": 1974199156794,
    "email": "",
    "closed_at": null,
    "created_at": "2020-01-16T10:14:37-05:00",
    "updated_at": "2020-01-16T10:14:38-05:00",
    "number": 550,
    "note": "",
    "token": "ec072cfd2a99be5b1b84a7cc9b83a661",
    "gateway": "Bank Deposit",
    "test": false,
    "total_price": "227.70",
    "subtotal_price": "198.00",
    "total_weight": 0,
    "total_tax": "29.70",
    "taxes_included": false,
    "currency": "ZAR",
    "financial_status": "paid",
    "confirmed": true,
    "total_discounts": "0.00",
    "total_line_items_price": "198.00",
    "cart_token": null,
    "buyer_accepts_marketing": false,
    "name": "shopify-order-1550",
    "referring_site": null,
    "landing_site": null,
    "cancelled_at": null,
    "cancel_reason": null,
    "total_price_usd": "15.83",
    "checkout_token": null,
    "reference": null,
    "user_id": 99220744,
    "location_id": 9406152,
    "source_identifier": null,
    "source_url": null,
    "processed_at": "2020-01-16T10:14:37-05:00",
    "device_id": null,
    "phone": null,
    "customer_locale": null,
    "app_id": 1354745,
    "browser_ip": null,
    "landing_site_ref": null,
    "order_number": 1550,
    "discount_applications": [],
    "discount_codes": [],
    "note_attributes": [],
    
{{< /highlight >}}

4. Login to the admin portal of your Shopify Store/website
5. Navigate to orders > search for the above order number
6. Check order for either duplicate SKU's on different line items or 2 line items with blank skus

![queue errors duplicate line items](/uploads/queue-errors-duplicate-line-items.png?classes=border)

## How to resolve the queue error

If it is the discount app causing the order to duplicate the sku, you will have to contact Support@stock2shop.com to assist in adding a setting to combine the line items. Note Stock2Shop needs to combine them or the order will fail when sending it to the accounting system.

Because the order has been created incorrectly, for whichever cause, the order, unfortunately, will need to be manually captured and fulfillment manually created if you don't want Stock2Shop to automatically combine both line items.

Should anything be unclear please send a mail to support@stock2shop.com