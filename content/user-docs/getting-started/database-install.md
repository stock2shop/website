---
title: "dolfin - getting started"
heading: "installing Stock2Shop for a generic database"
description: "Stock2Shop integrates My SQL, MS SQL and other databases to Magento, Shopify, WooCommerce and our B2B ordering platform. Find out more!"
aliases: "/documentation/getting-started/database-install/"
toc: true
menu:
  docside:
    parent: Getting Started
    name: Generic Database
---

## Introduction
Stock2Shop can pull inventory data from multiple databases. The only prerequisite is that the database can be accessed via ODBC. We therefore support Microsoft SQL Server, MySQL Server, Pervasive SQL, Hana and many other databases.

## What we need from you

### For accessing your database
In order to communicate with your Generic Database via ODBC, we require the following information:

- Server Name / IP Address (The Windows name of the server)
- Database Name (The name of the database (company) we will be connecting to)
- Database Username (read-only)
- Database Password (read-only)

### For accessing your server
In order to sync the information in your accounting system with your online sales channels, Stock2Shop needs to access your database. We do this by installing our software on your server which reads the relevant data. There are three ways our Devlopers carry out this installation:

- Microsoft Remote Desktop (See here)
- AnyDesk (See here)
- Teamviewer (See here)

Your data is then sent to your cloud-based Stock2Shop console where it can be distributed to various online channels, including e-commerce websites (Shopify, Magento 1.x, Magento 2.x or WooCommerce), B2B trade stores and marketplaces such as Takealot.

{{< class alert alert-primary >}}
The below must be taken into consideration to ensure we can manage information on a continual basis:
{{< /class >}}

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

### For raising orders
During the data discussion one of our Developers will confirm how orders should be raised, if this is a requirment of yours.

## What’s next
Below is an overview outlining the next steps:

1. Data Discussion
    - Discuss product configuration
    - Discuss customer configuration
    - Discuss order configuration
    - Prerequisite for raising orders in Sage Evolution
2. Install Stock2Shop Software
3. Initiate Sync to Stock2Shop
4. Test channel integration (products / orders)

{{< class alert alert-primary >}}
Data Discussion **(Step 1)** will be scheduled by one of our technicians
{{< /class >}}

Any questions? [Contact us](/contact-us) – we’re happy to help.