---
title: "installing Stock2Shop for sage 50cloud pastel partner"
heading: "installing Stock2Shop for sage 50cloud pastel partner (formerly sage pastel partner)"
description: "Stock2Shop integrates Sage Live to Magento, Shopify, WooCommerce and our B2B ordering platform. Find out more!"
aliases: "/documentation/getting-started/sage-pastel-partner-installation/"
toc: true
menu:
  docside:
    parent: Sage 50cloud Pastel Partner
    name: Getting Started
    weight: 10
---

## Introduction
Sage 50cloud Pastel Partner is a client-side accounting system. This means the Sage 50cloud Pastel Partner application is installed on a server at your office, on your actual work computer or on a server in the cloud. In order for Stock2Shop to provide you with the full integration capabilities and link your Sage 50cloud Pastel Partner system to other sales channels and fulfilment services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store and Parcelninja, we need to install software on the server or computer where your Sage 50cloud Pastel Partner is set up.

## For accessing your database

In order to communicate with your Sage 50cloud Pastel Partner database, we require the following information:

- Database Path (c:\Pastel18\abc)
- Source Version (Pastel 18)

## For accessing your server
In order for Stock2Shop to access the data inside of your Sage 50cloud Pastel Partner database and integrate this into other applications, our software has to be installed on the server or computer that has direct access to the Sage 50cloud Pastel Partner database. There are three ways for you to grant us access to install our software on your server:

- Microsoft Remote Desktop [(See here)](https://support.microsoft.com/en-za/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection)
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

- Phone Sage 50cloud Pastel Partner Sales and request the “Pastel Partner SDK client connector”.
- They will send you an indemnity form. Fill this form out and send it back to them. They will then send you a registration code.
- Phone Sage 50cloud Pastel Partner registrations and ask them to “register” the SDK connector.

Once this is done you should see the module available in your Sage 50cloud Pastel Partner by viewing “help > about”.

## What’s next
Below is an overview outlining the next steps:

1. Data Discussion
    - Discuss product configuration
    - Discuss customer configuration
    - Discuss order configuration
    - Prerequisite for raising orders in Sage 50cloud Pastel Partner
2. Install Stock2Shop Software
3. Initiate Sync to Stock2Shop
4. est channel integration (products / orders)

{{< class alert alert-primary >}}
Data Discussion **(Step 1)** will be scheduled by one of our technicians
{{< /class >}}

Any questions? [Contact us](/contact-us) – we’re happy to help.