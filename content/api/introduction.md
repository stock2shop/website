---
weight: 10
title: API Reference
---

# Introduction

Distributors, wholesalers and retailers use Stock2Shop to manage inventory and orders from their ERP/Warehouse. 

If you are developer wanting to code some customisation into your existing workflow or someone wanting to integrate with one of our existing merchants, read on!

There are many use cases for connecting to our API, see our [tutorials](?#tutorials "ERP ecommerce API tutorials") for further examples.
 
 ## Using the API
 
 Our API is a JSON based RESTful web service.
 
 Currently we only support json. 
 For each request sent a query parameter `format=json` must be sent. 
 
 In order to keep transactions secure requests need to be authenticated.
 We use token based authentication. 
 
 For each request you send, you must include a `token=xyz` query parameter.
 To obtain a token, first [authenticate](?#post-authenticate "Authenticating on Stock2Shop") and then pass this token back on future requests.
 
 You need to treat this token as ephemeral, meaning it could expire, in which case you should authenticate again.
 Keep this in mind when designing your application.
 
 ## Base URLs
 
 Stock2Shop has 2 API's.
 
 `https://app.stock2shop.com/v1/{end point}`   
 `https://api.stock2shop.com/v2-queue/{end point}`
 
 The former is our original monolith based API that performs mainly CRUD based operations.
 The later uses our microservices architecture and is normally used for asynchronous operations that invlove queue and processing.    
 
 ## Rate Limits
 
 Stock2Shop may rate limit requests per client. 
 If you receive:- 
 
 `429 Too Many Requests` 
 
  you have been rate limited.
 
 We recommend not more than 1 request per second. 