---
title: "Could Not Connect to Host"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T11:13:59+02:00
---

#### Error description
The tunnel or network between Stock2Shop and your ERP is down or giving errors.

#### Error solution
1. Check that the ERP server can access the internet.
2.Check if services  "Apifact Tunnel" & "Apifact Connector" are running on the server:
   - Go to Windows search and type in "services" (On the source server where our Apifact software is installed)
   - Click on the services icon
   - Find the two services named "Apifact Tunnel" & "Apifact Connector".
   - Restart both services.
   - Confirm that the services are both running
2. If on Syspro, confirm that the Enet Web services are running 
3. Confirm if the Firewall is not blocking S2S.  
3. Retry  the queue error


If the issue is not resolved, please contact support@stock2shop.com