---
title: "Qty Field Is Not an Integer"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["shopify",]
fulfillments: []
draft: true
date: 2020-12-28T12:50:59+02:00
---

#### Error description
A sku within the product is failing to be updated in the back-end of Shopify


#### Error solution
This error is caused by a mismatch between the warehouse used for the Shopify channel and the warehouse assigned to a particular sku. In the case that a particular sku does not pull stock from the warehouse assigned to the Shopify channel, but the product is set to sync to Shopify, it will create an error as attempts to sync a value that does not  exist.

Check that the SKU is in the warehouse assigned to the Shopify Channel

{{/* Instruction: add variant, update variant */}}