---
title: "SDK Type mismatch (String Data, Boolean& AdditionalCostInvoice)"
type: "solution"
sources: ["pastel-partner", "sage-50cloud-pastel-xpress" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T14:29:00+02:00
---

#### Error description
Orders fail to be raised at the source after a long running task. W

#### Error solution
hen trying to raise an order at source Apifact is trying to send values with a " , " in it instead of a " . ". This causes a long-running task which inevitably fails. 

A change will need to be made on the server Sage 50cloud Pastel Partner is installed on. Follow the steps below to resolve the queue error:

1. Go to Windows search and click "Run..." 
2. In the search box or Run window, type the following "regedit" and press enter
3. Go to HKEY_USERS > DEFAULT > Control Panel > International 
4. Look for "sMonDecimalSep"
5. Double click on "sMonDecimalSep" and edit it from a " , " to a " . "

Depending on your version of Windows, and how it's configured, you may see a User Account Control dialogue box where you'll need to confirm that you want to open Registry Editor.

6. Go to Windows search and type in "services"
7. Click on the service's icon
8. Find the two services named "Apifact Tunnel" & "Apifact Connector".
9. Restart both services.
10. Confirm that the services are both running

Once the Apifact services have been restarted, you will need to retry any queue errors that have accumulated.

