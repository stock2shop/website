---
title: Variable Products
type: how-to
---

## Variable Products
 
A variant contains information about each product option such as SKU, weight, price and availability (stock levels).
In the above shoe example, you may hold 3 different sizes in 2 colours. The variants would look like this:

// Example table of some variable products...
### Example of a single product with multiple variations

SKU  |  Option 1<br>(Size)  |  Option 2<br>(Colour)  |  Quantity  |  Weight
------------ | ------------- | ------------- | ------------- | -------------
ABC-1 |  Content cell 2  |  Content cell 3  |  Content cell 2  |  Content cell 3
ABC-2 | Content column 2 | content cell 3 | Content cell 2 | Content cell 3
ABC-3 | Content cell 2 | Content cell 3 | Content cell 2 | Content cell 3
ABC-4 | Content column 2 | content cell 3 | Content cell 2 | Content cell 3
ABC-5 | Content cell 2 | Content cell 3 | Content cell 2 | Content cell 3
ABC-6 | Content column 2 | content cell 3 | Content cell 2 | Content cell 3



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




SKU: ABC-1	SKU: ABC-2	SKU: ABC-3
QTY: 5	QTY: 0	QTY: 15
Weight: 100g	Weight: 105g	Weight: 110g
Price: 80	Price: 80	Price: 80
Option1: size 8	Option1: size 9	Option1: size 10
Option2: red	Option2: red	Option2: red
SKU: ABC-4	SKU: ABC-5	SKU: ABC-6
QTY: 2	QTY: 6	QTY: 5
Weight: 100g	Weight: 105g	Weight: 110g
Price: 80	Price: 80	Price: 80
Option1: size 8	Option1: size 9	Option1: size 10
Option2: blue	Option2: blue	Option2: blue
