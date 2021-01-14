---
title: Variable Products
type: how-to
draft: true
---

## Variable Products
 
A variant contains information about each product option such as SKU, weight, price and availability (stock levels).
In the above shoe example, you may hold 3 different sizes in 2 colours. The variants would look like this:

// Example table of some variable products...
### Example of a single product with multiple variations

SKU  |  Option 1<br>(Size)  |  Option 2<br>(Colour)  |  Quantity  |  Weight (g)
------------ | ------------- | ------------- | ------------- | -------------
ABC-1 |  8  |  Red  |  10  |  100
ABC-2 | 9 | Red | 14 | 105
ABC-3 | 10 | Red | 50 | 110
ABC-4 | 8 | Blue | 10 | 100
ABC-5 | 9 | Blue | 0 | 105
ABC-6 | 10 | Blue | 3 | 110



As you can see in the above example, the red and blue shoes come in 3 different sizes.
It is important that each variant has a unique combination of options.

When importing data into Stock2Shop, we need to be able to define the above “parent/child” relationship in a flat data structure (spreadsheet).

In order to do this, we have some field conventions, namely:
- source_product_code: This is the unique identifier for each parent product.
- source_variant_code: This is the unique identifier for each child variant.
- option1_name: Describing the option (e.g. size)
- option1_value: The value for this variant (e.g. size 8)
- option2_name: Describing the option (e.g. colour)
- option2_value: The value for this variant (e.g. red)
We can have a maximum of 3 options only.

