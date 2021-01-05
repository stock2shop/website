---
title: "Failed to establish a new connection"
seoTitle: "Failed to establish a new connection"
seoDescription: "No connection could be made because the target machine actively refused it."
type: "solution"
sources: [ "omni-accounts" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T16:31:00+02:00
---

#### Error description
Failed to raise orders in Omni Accounts

#### Error solution

The OmniWebServiceREST service not running on the Omni Accounts server at the time of the order.
No connection could be made because the target machine actively refused it.

1. Find the OmniWebServiceREST and open it. This is usually located in C:/Omni/System
2. Do not close rest service, just minimize.
3. If needed, stop and restart this service.
4. Return the S2S queue and retry the order error and confirm the order has been processed.

![queue errors failed to establish a new connection](/uploads/queue-errors-Failed-to-establish-a-new-connection-1.png)
![queue errors failed to establish a new connection](/uploads/queue-errors-Failed-to-establish-a-new-connection-2.png)



