---
title: "Sync_order Trying to Get Property of Non Object"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: [b2b-trade-store"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T16:42:40+02:00
---

#### Error description
Orders fail to sync

#### Error solution
When the API sends the order to S2S our system does a couple of checks:
- Does the SKU exist in S2S
- Is the product correctly linked on the channel to the ID saved on S2S

In order to confirm the source of the queue error, follow the below steps, noting the channel ID's during the process:



1. Login to the S2S console  
2. Navigate to the Queue > View
3. Click on the three dots of the order error > click "View Item"
4. Scroll down on the payload to (line_items":)
5. For each item on the order, write down the "channel_product_code"; "channel_variant_code" and "sku" (See below example payload, note this may vary depending on how your system posts the order to the S2S API)



{
  "channel_type": null,
  "order": {
    "system_order": {
      "customer": {
        "first_name": "Customer First Name",
        "last_name": "Customer Last Name",
        "meta": [],
        "addresses": [],
        "meta_delete": [],
        "system_customer_id": 149774,
        "id": 149774,
        "email": "customers@email.com"
      },
      "line_items": [
        {
          "sku": "abc123",
          "tax_lines": [
            {
              "rate": 15,
              "code": "taxed",
              "price": 0,
              "title": "VAT"
            }
          ],
          "title": "Online Sample Pack",
          "price": 0,
          "channel_variant_code": "12345",
          "qty": 1,
          "channel_product_code": "67899"
        },
        {
JavaScript


6. Once the ID's have been written down, navigate to "Products" > "View"
7. Search for the sku's on the order one at a time > Once you find a sku, click on the three dots > click "Edit"
8. Navigate to the "CHANNELS" tab
9. Compare the ID's for the sku with the ID's stored on the product







10. If the ID's match then move onto the next sku
11. If the ID's do not match then see below to resolve the error


