---
title: "Flat File"
type: feature
sources: ["flatfile"]
---

<!-- ***NOT IN USE***

get_images_limit
get_products_limit
google_sheet_header
ftp_host
ftp_port
ftp_file_path
ftp_username
ftp_password
remove_file_enabled
file_extension
file_url
deliminator
queue_fetch_images
xml_product_tag
xml_product_xslt
xml_image_xslt
sync_mode
order_template
ftp_order_path
ftp_order_host
ftp_order_username
ftp_order_password
ftp_order_port
order_send_method
csv_header
image_field_map
-->

<!-- cron_get_products_schedule -->
### Update Stock2Shop hourly with Product data changes
When changes are made to your Parcel Ninja Inventory, we can set an hourly time to check for changes.
This can be set for which ever minute on the hour best suits your workflow.

<!-- create_order_enabled -->
### Process Orders from Webstore
If you are using an FTP server to Host your Spreadsheet field, we can setup your integation to process Orders to your FTP server.

<!-- get_images_enabled -->
### Title here
Text Body here

<!-- product_field_map -->
### Title here
We can update Product data as needed from a Spreadsheet file. You can tell us which columns are relevant to sync to Stock2Shop.
This is useful for when you have columns in place to be used for internal processes. We can map the specific data required.

<!-- transfer_protocol -->
### Supported Protocols
We will be able to Integrate with the following Protocols:

- FTP (Hosted Spreadsheet files)
- URL (Google Sheets)
- SFTP (SSH FTP)

<!-- flatfile_format -->
### Supported File Types
We will be able to Integrate with the following file types:

- XML
- CSV
- Google Sheet