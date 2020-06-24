---
title: "Managing Bulk Image Uploads"
menu: "main"
---
## Contents

1. Requirements
2. Preparing images
3. Upload
4. Check product images

## Requirements

Stock2Shop has requirements in order for images to be uploaded and used, below is a list of those requirements and points to be aware of: 
1. Only ".jpg", ".jpeg" and ".png" images are accepted by S2S (Note that .JPG can cause issues, ensure that the file extensions are all small caps) 
2. Images can be no larger than 2mb, recommended size is 500kb for web 
3. Although this is not a requirement try to ensure your images are all the same resolution for a uniform display
To read more on best image practices see here.

## Preparing images

Preparing your images for upload to S2S, the below list is to ensure that images are uploaded and applied to the correct products, pay special attention to the points when working with multiple images for one product:
1. Save the image name as the sku/item code of the product you wish to upload the product to
2. When working with multiple images for one product, there are two ways to do this:
a) Add a unique character to the sku code to adjust the name of each image ( you will use the find and replace feature on S2S to replace the character with blank so the image matches the sku), ie if sku is abc then image 1 name will be abc-1.jpg, image 2 name will be abc-2.jpg, image 3 name will be abc-3.jpg etc.  You will need to Find -1, -2 and -3 and replace them with blank/nothing to match your skus
b) Name each image the exact same as the sku but save them in separate folders, ie all image 1's in a folder call image 1 / Front view, all image 2's in a folder called image 2 / side view etc
If you are going to use method 2a then remember to use a symbol that is not used in your sku's note that you can use more than one character to differentiate the images.
The next step is uploading the images to S2S, keep note of the special characters that may be used in the different skus.
Should you computer not allow you to save the image as the sku because it has a forward slash as an example, then replace that symbol with one that is accepted and take note of it for the next step.

## Upload

Once your images are ready and named accordingly, proceed to login into your S2S console, navigate to "Products" > "Import Images"
Before selecting the images you want to upload there are a couple points to take note of:
1. Source - Make sure that your ERP/Accounting System is selected
2. Field - This is the field in S2S that relates to what you have named your images
3. Find Replace - this directly relates to whether you have replaced characters in your image names in order to save them and if you have used method 2a in preparing your images

![Bulk image uploads](/images/howto1.png)

## Find Replace:

To understand how the find and replace function works, think about example in 2a, if sku is abc and image one name is abc-1.jpg and image 2 is abc-2.jpg and image 3 abc-3.jpg
Then you would need to setup three find and replace rules: 
1. Fill the find block with "-1" and leave the replace block blank so that it removes the "-1" from the image name when searching for the sku
2. Fill the find block with "-2" and leave the replace block blank so that it removes the "-2" from the image name when searching for the sku
3. Fill the find block with "-3" and leave the replace block blank so that it removes the "-3" from the image name when searching for the sku

The same principle would apply if you had to replace a forward slash, think about the following example:
Sku is abc/1 and you have saved the image name as abc+1.jpg, the rule to setup would be:
Fill find block with "+" and fill the replace block with "/" , this will then search for the sku abc/1 in stead of abc+1
Now you are ready to import your images, click the "SELECT FILES" button, a window to your folder explorer will open, select all the images that you wish to import and click ok, remember if you are using method 2b to do one folder at a time.
This will then start to create a list in the queue, if the image uploaded did not match a sku it will provide an error showing you which image it was as well as if the image format is not compatible, if you are happy with the list, scroll to the bottom of the page and click upload all

## Check Product Images
 
Once the queue has completed the image sync, you can open a few of the products that should have images to ensure that they have uploaded correctly, if they have not try the process again for the images that did not upload and monitor for any errors in the queue before clicking upload all