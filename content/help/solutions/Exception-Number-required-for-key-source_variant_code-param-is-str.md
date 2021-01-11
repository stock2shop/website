---
title: "Exception: Number Required for Key Source_variant_code, Param Is Str"
type: "solution"
seoTitle: "No Quantity available for Order item"
seoDescription: "There is no quantity available for the Ordered item in Stock2Shop"
sources: ["sage-200-evolution", "sage-evolution", "sage-pastel-evolution" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T14:20:02+02:00
---

#### Error description
When trying to raise an order, the system can't find a qty for the product.

#### Error solution
Stock2Shop validates the qty available before raising the order. If this amount is not returned if the source_variant_code is not found.

In order to resolve this error you will need to contact Support@stock2shop.com for assistance:
- Ensure the SKU is in your ERP
- You may require development to update the field that is syncing for the source_variant_code 
- Adjust the setting "param_negative_stock_disabled" to be FALSE so the system will not check the stock