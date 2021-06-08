---
title: " Sage 50cloud Pastel Xpress - getting started"
seoTitle: "Installing Stock2Shop for Sage 50cloud Pastel Xpress (formerly Sage Pastel Partner Xpress)"
seoDescription: "Stock2Shop integrates Sage Live to Magento, Shopify, WooCommerce and our B2B ordering platform. Find out more!"
draft: true
aliases: "/documentation/getting-started/sage-50cloud-pastel-xpress-installation/"
---

## Introduction
Sage 50cloud Pastel Xpress is a client side accounting system. This means the Sage 50cloud Pastel Xpress application is installed on a server at your office, on your actual work computer or on a server in the cloud. In order for Stock2Shop to provide you with the full integration capabilities and link your Sage 50cloud Pastel Xpress system to other sales channels and fulfillments services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, Parcelninja and Takealot, we need to install software on the server or computer where your Sage 50cloud Pastel Xpress is set up.

## For accessing your database
In order to communicate with your Sage 50cloud Pastel Xpress database, we require the following information:

- Database Path (c:\Pastel18\abc)
- Version of Sage 50cloud Pastel Xpress (Pastel 18)
- DDF Path (DBQ) from the DDF Builder

How to get DBQ name :
1. Search on Windows for DDF Builder and click on DDF Builder
2. Expand the arrow next to Server and the arrow next to Databases
3. Give the full name of the item pointing to your current database (DBQ)

## For accessing your server
In order for Stock2Shop to access the data inside of your Sage 50cloud Pastel Xpress database and integrate this into other applications, our software has to be installed on the server or computer that has direct access to the Sage 50cloud Pastel Xpress database. There are two ways for you to grant us access to install our software on your server:

- Microsoft Remote Desktop [(See here)](https://support.microsoft.com/en-za/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection))
- AnyDesk [(See here)](https://anydesk.com/en/downloads/)
- Teamviewer [(See here)](https://www.teamviewer.com/en/)

{{< class alert alert-primary >}}
The below must be taken into consideration to ensure we can manage information on a continual basis:
{{< /class >}}

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

## For raising orders

If you require Stock2Shop to insert sales orders or invoices into Sage 50cloud Pastel Partner, then we need you to install the Pastel Partner SDK (Software Developers’ Kit) client connector. This process is done directly with Sage and is fairly straightforward. They will ask for a valid Pastel account. The SDK client connector is free for Pastel Partner. The process is:

- Phone Sage Sage 50cloud Pastel Xpress Sales and request the “Pastel Partner SDK client connector”.
- They will send you an indemnity form. Fill this form out and send it back to them. They will then send you a registration code.
- Phone Sage Sage 50cloud Pastel Xpress registrations and ask them to “register” the SDK connector.

Once this is done you should see the module available in your Sage 50cloud Pastel Xpress by viewing “help > about”.

## What’s next
Below is an overview outlining the next steps:

1. Data Discussion
    - Discuss product configuration
    - Discuss customer configuration
    - Discuss order configuration
    - Prerequisite for raising orders in Sage 50cloud Pastel Xpress
2. Install Stock2Shop Software
3. Initiate Sync to Stock2Shop
4. Test channel integration (products / orders)

{{< class alert alert-primary >}}
Data Discussion **(Step 1)** will be scheduled by one of our technicians
{{< /class >}}

Any questions? [Contact us](/contact-us) – we’re happy to help.