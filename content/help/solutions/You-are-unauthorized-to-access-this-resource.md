---
title: "You are unauthorized to access this resource"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T12:04:00+02:00
---
<!-- Action: fulfill_order -->
#### Error description
S2S attempted to create a fulfillment but was rejected by ParcelNinja.

#### Error solution
This error results from S2S being provided with the incorrect API keys to sync to ParcelNinja. Correct keys would need to be provided to S2S or created by: 

1. In ParcelNinja Navigate to "User Management"
2. Scroll down to "API Keys" > "Add Key"
3. Set the description to “Stock2Shop”
4. Select (tick) all the roles, except for (View Virtual / Update Virtual / Delete Virtual)
5. Click "Add Key"
6. Copy the API "Username" and "Password" and send to Stock2Shop
