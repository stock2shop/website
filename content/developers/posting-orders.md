---
title: "How to Manually an Order to Stock2Shop"
description: "Instructions on how to send orders manually into Stock2Shop"
weight: 20
draft: false
---

## Scenario

You would like to replay or re-post an order to Stock2Shop

* * *

## Solution

Post an order on behalf of the sales channel.
To do this you need your client id and the sales channel id you are posting to. 

You are going to POST a valid JSON payload to the sales channel.
Depending on the sales channel, the payload will look different.
For example, a Shopify order will follow the format of the [shopify webhook](https://shopify.dev/docs/admin-api/rest/reference/events/webhook) and 
a Woocommerce order will follow the [Woocommerce format](https://docs.woocommerce.com/document/webhooks/).
You are replicating what the channel would normally send you via POST.

### Step 1 Authenticate

```
https://api.stock2shop.com/v2-queue/order?client_id=123&channel_id=123&token=x
```

### Step 2: Get Channel & Client ID 

```
{
    "my woocommercce order": {}
}
```

### Step 3: Post Order

```
{
    "my woocommercce order": {}
}
```

* * *