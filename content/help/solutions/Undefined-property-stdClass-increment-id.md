---
title: "Undefined Property StdClass Increment Id"
type: "solution"
seoTitle: "Magento: Undefined Property StdClass Increment Id"
seoDescription: "S2S is trying to sync an order from Magento with an external order number that already exists in S2S."
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-29T13:30:57+02:00
---

#### Error description
S2S is trying to sync an order from Magento with an external order number (passed on the increment ID field) that already exists in S2S.

#### Error solution
1. Navigate to Queue -> View
2. 3 dots > View Item
3. Search for and copy "increment_id" value
4. Navigate to Orders -> View
5. Search the increment id, which in S2S is displayed as "Channel Code"
6. If increment_id is found, then order number already exists in S2S.

Once the error is confirmed, it is likely that the order is a duplicate. Confirm order details against those found in S2S, and the order can be skipped.

If you need to process the order and the same order number in Stock2Shop has different details then please create the order manually in your ERP / Accounting System or/and fulfillment service as our system won't accept an order number that is already taken by another customer

