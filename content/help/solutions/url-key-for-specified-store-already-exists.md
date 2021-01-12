---
title: "URL key for specified store already exists"
type: "solution"
seoTitle: "`Magento: URL key for specified store already exists"
seoDescription: "A product is trying to use the same url of an existing product."
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_2"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T09:41:49+02:00
---
<!-- Action: add_product -->
#### Error description
A product is trying to use the same url of an existing product.

#### Error solution
Magento does not allow duplicate product names, as it uses them to create url keys.

Update any duplicate product titles then retry any errors in the queue with a similar message.
