---
title: "Takealot Marketplace"
type: feature
channels: [takealot]
---

<!-- 

key
url
gtin_map
log_enabled
check_order_items_linked

-->

<!-- offer_map -->
### Synchronize Product data
With Takealot being used as a Webstore, we can sync the following fields from Stock2Shop:

- Price (RRP/Selling Price)
- Lead Time Days
- Lead Time Stock
- GTIN (Barcode)

Stock2Shop will link to your Offer and keep the above fields up to date. (See the 
[API Docs](https://docs.google.com/document/d/e/2PACX-1vQe4bMaLKaqmtokWWPApbERX1snEpAbwQKKZm23-zhkJ8iPKNsXfVvvkKKaa1Hhq7cE-31NhnqynHnQ/pub))

<!-- order_map -->
### Process Orders on Sales
When Sales are made, Stock2Shop will receive the Order, and process it to your ERP.
Orders will be fulfilled automatically by Takealot if there is stock at their warehouse, or a Lead Time Order will be created.

