---
title: "Trying to get property of non-object"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["shopify",]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-28T13:50:59+02:00
---

#### Error description
The system can not find the products on Shopify as ID of the products in the channels have been removed or there is no ID to update the variant.

#### Error solution

Confirm the source of this error:

1. Navigate to Queue -> View
2. On the left, in the listing of failed queue items, click the 3 dots -> View item
3. Under "Instruction" the instruction should be "Update variant"
4. Under "message" the message should be "Trying to get property of non-object"
5. Click "View Product" -> "Channels"
6. Confirm if there are any values entered for Channel product code or Channel variant code.
7. If values are entered, compare to the product and variant codes on the website for a mismatch.

##### How to resolve the queue error 



1. Reset the product in S2S: 
    - Products >View > Search > 3 dots > Edit > CHANNELS tab
    - Click REMOVE ALL on channel that needs resetting 
    - Click Save on GENERAL and VARIANTS tab 
2. This will prompt S2S to scan the website database for a matching sku to establish new links to update against.
3. You will need to skip the "Trying to get property of non-object and skip any further updates for this specific product if they were already in the queue (It can be multiple skus depending on the skus connected to the product).
4. A new "Add" to Shopify queue item will appear at the back of the queue to re add the product to the website.
