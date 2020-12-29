---
weight: 11
title: API Reference
---

# Users

Different users have different permissions, for more on users, [see this]("#" "TODO link to users").

## POST Authenticate

> Example
```shell script
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{
          "system_user_auth": {
            "username": "barry",
            "password": "indo2000"
          }
        }' \
    https://app.stock2shop.com/v1/users/authenticate?format=json
```

> Example Response
```json
{
  "system_user": {
    "id": 1,
    "created": "2015-03-03T07:30:06+0000",
    "name": "Bob",
    "surname": "Seger",
    "email": "bob@example.com",
    "username": "bob",
    "modified": "2020-12-29T13:46:44+0000",
    "client_id": 1,
    "active": 1,
    "admin": 0,
    "token": "aXYZABC",
    "client_name": "Cleitn Name",
    "fulfillment_services": [],
    "channels": [],
    "sources": [],
    "customers": [],
    "roles": [
      {
        "id": 1,
        "description": "product_meta_editor"
      }
    ],
    "role_description": "product_meta_editor"
  }
}
```

Authenticate a user to retrieve a token.

### HTTP Request

`POST https://app.stock2shop.com/v1/users/authenticate`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
format | json | webservice data format






## GET Valid Token


In order to access our API you need a username and password. This will be supplied to you once you have signed up with us.

Different users have different permissions, for more on users, [see this]("#" "TODO link to users").
    

Read up on how to [authenticate here](/help/api/users/authenticate "API authentication").

> this is a test
```shell
# Using curl 
```
```php
// Using php 
```

> To authorize, use this code:

```go
package main

import "github.com/bep/kittn/auth"

func main() {
	api := auth.Authorize("meowmeowmeow")

	// Just to make it compile
	_ = api
}
```

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>
