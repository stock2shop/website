---
title: "Duplicate line items are not allowed"
type: "solution"
seoTitle: "Duplicate Line items are not allowed"
seoDescription: "The sales channel that the order is syncing from has a single sku listed twice on an order"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["shopify", "woocommerce"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-28T14:18:59+02:00
---

#### Error description
This order error occurs when the sales channel that the order is syncing from has a single sku listed twice on an order, if a sku is ordered twice it should display as one line item on the shopping cart with a qty of "2".

Another reason this could occur is when the sales channel has a specific discount process, in which the system adds the same sku to the order as a negative value to display the discount.

#### Error solution

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
6. Check order for either duplicate SKU's on different line items or 2 line items with blank SKUs.


If it is the discount app causing the order to duplicate the SKU, you will have to contact ***Stock2Shop Support*** to assist in adding a setting to combine the line items. Note Stock2Shop needs to combine them or the order will fail when sending it to the accounting system.

Because the order has been created incorrectly, for whichever cause, the order, unfortunately, will need to be manually captured and fulfillment manually created if you don't want Stock2Shop to automatically combine both line items.

