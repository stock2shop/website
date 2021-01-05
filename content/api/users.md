---
weight: 11
title: Users
---

# Users

Different users have different roles, for more on users, [*** see here (verify link)***]("#" "TODO link to users").

## POST Authenticate

> Example
```shell script
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{
          "system_user_auth": {
            "username": "barry",
            "password": "*****"
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
    "token": "xxx",
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

## GET Valid Token

> Example
```shell script
curl -X GET \
    -H 'Content-Type: application/json' \
    https://app.stock2shop.com/v1/users/valid_token/xxx?format=json
```

> Example Response
```json
{
  "system_user": {
    "id": 1,
    "created": "2015-03-03T07:30:06+0000",
    "name": "Bob",
    "surname": "Seager",
    "email": "bob@example.com",
    "username": "bob",
    "modified": "2021-01-05T08:07:57+0000",
    "client_id": 1,
    "active": 1,
    "admin": 0,
    "token": "xxx"
  }
}
```

Check to see if a token is valid.   

### HTTP Request

`GET https://app.stock2shop.com/v1/users/valid_token/{token}`

### Query Parameters

Parameter | type | Description
--------- | ---- | -----------
token | url path | token for authentication
