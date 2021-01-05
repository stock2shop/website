---
weight: 13
title: Products
---

# Products

Products are made up of one or more variants. 
A variant is the unique SKU (sometimes called barcode or GTIN) found in the ERP.

Products are usually associated with marketing related meta data, such as images, categories, titles and so on.
Whereas a variant is associated with warehouses, pricing and is the unit which is ordered, invoiced and shipped.
For more information on this relationship [*** see here (verify link)***](/ "products and variants")   

For both products and variants, Stock2shop usually stores 3 different identifiers.
- Id (the Stock2Shop internal Id)
- Source code (the Id from the ERP, e.g. `source_product_code`)
- Channel code (the Id from the sales channel e.g. `channel_product_code`)

In some cases the id could be missing, depending if the product/variant has been synced with channels and sources.

## POST Elastic Search

> Example
```shell script
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{
          "query": {
            "bool": {
              "filter": [
                {
                  "range": {
                    "modified": {
                      "gt": "2018-07-16 08:23:04"
                    }
                  }
                }
              ]
            }
          },
          "size": 1,
          "from": 0,
          "sort": {
            "modified": {
              "unmapped_type":"date",
              "order": "desc"
            }
          }
        }' \
    https://app.stock2shop.com/v1/products/elastic_search?token=xxx
```

> Example Response
```json
{
  "took": 3,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": 27,
    "max_score": null,
    "hits": [
      {
        "_index": "products--------2020-09-02-08-31-08",
        "_type": "_doc",
        "_id": "62777",
        "_score": null,
        "_source": {
          ...
        },
        "sort": [
          1609835104000
        ]
      }
    ]
  },
  "request": {
    "url": "https:\/\/vpc-stock2shop-647vemf3m3u22fhny7f7dqjs4m.eu-west-1.es.amazonaws.com\/products\/_search",
    "method": "POST",
    "body": {
      "aggs": {},
      "query": {
        "bool": {
          "filter": [
            {
              "range": {
                "modified": {
                  "gt": "2018-07-16 08:23:04"
                }
              }
            },
            {
              "term": {
                "client_id": 21
              }
            },
            {
              "term": {
                "active": true
              }
            }
          ]
        }
      },
      "size": 2,
      "from": 0,
      "sort": {
        "modified": {
          "unmapped_type": "date",
          "order": "desc"
        }
      }
    }
  },
  "system_products": [
    {
      "id": 62777,
      "created": "2015-03-03 12:37:51",
      "active": true,
      "source_product_code": "CDROM",
      "modified": "2021-01-05 08:25:04",
      "client_id": 21,
      "source_id": 57,
      "body_html": "<p>No one uses CDs in computers anymore. Why is this here? Testing for Wilson.<\/p>",
      "collection": "Storage",
      "title": "CD ROMs",
      "product_type": "Media",
      "vendor": "",
      "hash": "a22d32a40b598f2fcec0f80e23c06c34",
      "channels": [
        {
          "channel_id": "47",
          "channel_product_code": "62777"
        },
        {
          "channel_id": "255",
          "channel_product_code": "51"
        },
        {
          "channel_id": "254",
          "channel_product_code": "141"
        },
        {
          "channel_id": "435",
          "channel_product_code": "25"
        },
        {
          "channel_id": "197",
          "channel_product_code": "48125870097"
        },
        {
          "channel_id": "631",
          "channel_product_code": "291"
        },
        {
          "channel_id": "924",
          "channel_product_code": "4514548220037"
        }
      ],
      "tags": "",
      "options": [
        {
          "name": "Selection",
          "position": 1
        }
      ],
      "meta": [
        {
          "id": 244931,
          "created": "2016-02-15 10:08:04",
          "key": "release_date",
          "value": "",
          "modified": "2020-10-28 14:10:47",
          "template_name": null,
          "client_id": 21
        },
        {
          "id": 1068975,
          "created": "2017-02-14 07:16:46",
          "key": "Dimensions",
          "value": "<a href=\"http:\/\/www.stock2shop.com\">test<\/a>",
          "modified": "2020-10-28 14:10:47",
          "template_name": null,
          "client_id": 21
        },
        {
          "id": 3235454,
          "created": "2018-10-21 17:49:08",
          "key": "channel_b2b",
          "value": "TRUE",
          "modified": "2020-10-28 14:10:47",
          "template_name": null,
          "client_id": 21
        }
      ],
      "images": [
        {
          "src_50x50": "https:\/\/s2s-image.s3.amazonaws.com\/thumb\/50x50\/adf8ded854495aedb72edefaaab4209b.jpg",
          "src_160x160": "https:\/\/s2s-image.s3.amazonaws.com\/thumb\/160x160\/adf8ded854495aedb72edefaaab4209b.jpg",
          "id": 271528,
          "created": "2018-06-12 04:55:30",
          "source_image_code": null,
          "storage_code": "adf8ded854495aedb72edefaaab4209b.jpg",
          "src": "https:\/\/s2s-image.s3.amazonaws.com\/adf8ded854495aedb72edefaaab4209b.jpg",
          "modified": "2020-01-30 08:32:19",
          "client_id": 21,
          "product_id": 62777,
          "active": true,
          "hash": "adf8ded854495aedb72edefaaab4209b"
        }
      ],
      "variants": [
        {
          "id": 67841,
          "source_variant_code": "4317647",
          "price": 10,
          "barcode": "",
          "sku": "CD003",
          "qty": 38,
          "grams": 0,
          "inventory_management": true,
          "active": true,
          "product_id": 62777,
          "image_id": 271528,
          "client_id": 21,
          "option1": "Pack of 25",
          "price_tiers": [
            {
              "tier": "Wholesale",
              "price": 28
            },
            {
              "tier": "Was",
              "price": 0
            }
          ],
          "qty_availability": []
        },
        {
          "id": 67842,
          "source_variant_code": "4317716",
          "price": 55,
          "barcode": "",
          "sku": "CD004",
          "qty": 39,
          "grams": 0,
          "inventory_management": true,
          "active": true,
          "product_id": 62777,
          "image_id": 235461,
          "client_id": 21,
          "option1": "Pack of 50",
          "price_tiers": [
            {
              "tier": "Wholesale",
              "price": 50
            },
            {
              "tier": "Was",
              "price": 0
            }
          ],
          "qty_availability": []
        }
      ]
    }
  ],
  "took_s2s": 7
}
```

Stock2Shop uses Elastic Search to search products. 

To build a search query you need to understand [how Elastic Search bool queries work](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-bool-query.html "elastic Search")

To see the query that is used internally look at the `request` response property.

The example query on the right shows all products modified since a certain date. 
It returns only 1 product and sorts the results by date modified descending.
The perfect query if you want to page through products getting most recent updates, see our [tutorials](#tutorials "Stock2Shop tutorials") for examples of this. 

Use the data inside of the `system_products` response property has a complete list of product information as stored on Stock2Shop, not on Elastic Search.
This is important, since there may be a delay in indexing product changes to Elastic Search and `system_products` will give you a live view.

There are numerous ways the product Elastic Search endpoint can be used, you can view our [*** Console or B2B trade store - verify link ***](/ "B2B trade store") with your browsers inspector open to see the types of aggregations and requests used.

## POST Products Queue

> Example
```shell script
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{
          "query": {
            "bool": {
              "filter": [
                {
                  "range": {
                    "modified": {
                      "gt": "2018-07-16 08:23:04"
                    }
                  }
                }
              ]
            }
          },
          "size": 1,
          "from": 0,
          "sort": {
            "modified": {
              "unmapped_type":"date",
              "order": "desc"
            }
          }
        }' \
    https://app.stock2shop.com/v1/products/queue?token=xxx
```

> Example Response
```json


```

