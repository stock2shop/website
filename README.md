# Website

Stock2Shop website and api documentation built with Hugo.

## Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo -D server```
- View in your browser with http://localhost:1313/


## themes and content

The site uses two themes (s2s and [docuapi](https://github.com/bep/docuapi/)).
docuapi is used for documenting our api and has it's own config file `config-docuapi.toml`.
The publish and content directory is set to `/api`
To run the api docs use

```shell script
hugo -D --config=config-docuapi.toml server
```
Otherwise
```shell script
hugo -D server
```
s
## Front Matter Glossary

|Term|Description| 
|---|---|
|title|Page meta title for SEO|  
|heading|Page heading when different from title|  
|titleList|Displayed on list page|  
|linkTitle|Hardcoded menu item title|  
|description|Page Meta Description for SEO|  
|summary|Page summary displayed in the articles list page|  
|summary2|Additional summary parameter for different styling eg. bold|   
|lead|Lead paragraph|  
|lead2|Second lead paragraph|  
|toc|Show page table of content|  
|image|Image used from social media sharing and for list page|
|imageAlt|Alt tag assigned to image  
|date|Used for sorting with yyyy-mm-dd format|  
|weight|The default menu item and listing sort order|
|aliases|Old URL to redirect|
|author|Displayed underneath the title on some article pages|
|type|Layout type as per the theme|
|tags|Used for listing eg. footer|
|menu|Name assigned to specific menu|
|parent|Page name used in menu to nest under|
|name|Unique name for menu item when different to title|