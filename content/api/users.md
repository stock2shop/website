---
weight: 11
title: API Reference
---

# Users

Hundreds of distributors, wholesalers and retailers use Stock2Shop to manage inventory and orders from their ERP/Warehouse. 

You may be a developer wanting to code some customisation for your existing workflow or someone wanting to integrate a retail or wholesale channel with one of our existing merchants.

## GET Valid Token

## POST Authenticate

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
