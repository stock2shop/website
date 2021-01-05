---
title: "The specified resource name cannot be found in the image file"
seoTitle: "The specified resource name cannot be found in the image file"
seoDescription: "The SAP license server cannot be reached, either due to a temporary lapse in connectivity or an issue with the SAP One server."
type: "solution"
sources: ["sap" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T16:13:00+02:00
---

#### Error description
Failed to create order at source

#### Error solution
The SAP license server cannot be reached, either due to a temporary lapse in connectivity or an issue with the SAP One server.

To resolve this issue, simply attempt to reprocess the order in the S2S console.  S2S Console > Queue > View > Find queue error -> Retry.

In the event that this does not resolve the issue, you may need to reach out to your SAP consultant in order to:

1. Start the license server or verify the license server address and TCP IP port. 
2. Disable IPv6.
2. Make sure the SLD Address is correct.
2. Flush the DNS with the command ipconfig / flushdns
2. Restart SAP Business One Integration Service.
2. Retry the order



