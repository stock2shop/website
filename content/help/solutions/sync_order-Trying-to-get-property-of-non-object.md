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
6. Once the ID's have been written down, navigate to "Products" > "View"
7. Search for the sku's on the order one at a time > Once you find a sku, click on the three dots > click "Edit"
8. Navigate to the "CHANNELS" tab
9. Compare the ID's for the sku with the ID's stored on the product
10. If the ID's match then move onto the next sku
11. If the ID's do not match then see below to resolve the error



Once the sku's that are not linked have been found, follow the link to a guide to re-link the product accordingly

1. Reset the product in S2S: 
    - Products >View > Search > 3 dots > Edit > CHANNELS tab
    - Click REMOVE ALL on channel that needs resetting 
    - Click Save on GENERAL and VARIANTS tab 
2. This will prompt S2S to scan the website database for a matching SKU to establish new links to update against.
3. You will need to skip the "Trying to get property of non-object and skip any further updates for this specific product if they were already in the queue (It can be multiple SKUs depending on the SKUs connected to the product).
4. A new "Add" to channle queue item will appear at the back of the queue to re add the product to the website.
2. Once the sku has been re-linked accordingly, navigate to "Orders" > "View"
3. Search for the order number found in the payload ( near the top of the payload labelled "name":)
4. Click on the three dots of the order > click "View"
5. Click "EDIT" near the top right of the order screen
6. Then click "RESET" near the bottom left of the order
7. Navigate back to the "Queue" > "View"
8. Click on the three dots of the order error > Click "Try Again"
9. The order should now process accordingly
