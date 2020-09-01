---
title: "update_variant: Syntax error malformed JSON"
heading: ""
description: ""
tags: ["WooCommerce","update_variant","Syntax error, malformed JSON"]
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "update_variant: Syntax error malformed JSON"
---

## What does the queue error mean

**Instruction**: "update_variant"  
**Message**: Invalid response from Woocommerce: - Syntax error, malformed JSON response was: \*Followed by a long string of HTML\*  
**Key point**: Failed to update a variant on Woocommerce.  

This means that a sku within the product is failing to update on the Woocommerce backend, due to an issue with the server.

## What issue(s) does the queue error cause

This is a blocking queue error, meaning it will block any further updates to the website until resolved 

## How to confirm the source of the queue error

Navigate to:

1. Click on the three dots of the queue error > view item
2. Confirm Instruction > typically will be "update_variant"
3. Confirm message > If message contains "Syntax error, malformed JSON response was: " > The error originates on the website server

## How to resolve error

Some steps below to help investigate and resolve the server issue (a developer may be needed)

1. Confirm that API URL is still valid.
2. Contact WooCommerce hosting company to get server error logs at the time of the error
3. View error logs to see the error when trying to update variant and resolve
4. Log in to Woocommerce backend and confirm that API keys are still in place
5. If updates still dont work,  investigate if there have been any recent website updates, server changes, hosting changes, plugin updates and revert back to when it was working
6. Ask hosting company support for assistance in resolving API issues
7. Clear Cloudflare cache and plugins

Testing

1. Test POSTMan to see if your server works with API requests
2. Test GET, POST, and PUT requests manually via POSTMan (General How To: Testing with Postman)

Retry queue errors once the API issues are resolved.