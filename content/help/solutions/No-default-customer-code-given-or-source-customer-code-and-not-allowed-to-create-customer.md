---
title: "No Default Customer Code Given or Source Customer Code and Not Allowed to Create Customer"
seoTitle: "No Default Customer Code Given or Source Customer Code and Not Allowed to Create Customer"
seoDescription: "Failed to create order on Sage One No Default Customer Code/Source Customer Code."
type: "solution"
sources: ["sage-one", ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-31T08:38:42+02:00
---

#### Error description
Failed to create order on Sage One

#### Error solution
As a result of the customer code, as specified in the accounting system, not having been entered in the required field in the sales channel, or the customer account not actually existing in Sage One, the order can not sync through to the correct customer.

1. Confirm whether you use a default customer code setup in Stock2Shop or if you use a field from your website for customer codes.
2. If you use customers codes from your website for each customer >  Navigate to the customer on the website
3. Confirm that the customer code has been entered correctly in the requisite field
3. Either recreate the order or update the source customer code field on the customer in Stock2Shop and retry the order.
4. If the customer code setup from website is correct on the order, make sure the customer is active in Sage One.
5. Retry the order errors if customer was created in Sage One after the error.