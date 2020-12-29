---
title: "Field Map Transform Error"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-29T11:36:34+02:00
---

#### Error description
 Related to attributes that contain special characters that have been added into the fields.
 
This error has two sub messages:

- *Field map transform error: Unexpected control character found.*
- *Syntax error, malformed JSON*


#### Error solution
Special charters are used for computer programs and might break the program if used out of context. In general all Stock2Shop fields should only contain the letters from a-z, numbers 0-9 and basic punctuation. Avoid slashes and other characters.

1. Investigate which field that could be causing the product to to break when trying to update it on Magento. This is could be in the General or Attributes tab
2. If you not sure, cut and paste the field to notepad and then change the field text to a test value.  
3. Retry queue error
4. Repeat steps if failed


Remember if you are copying text from other sources you should always add it to a text editor, to remove any styles that may have been copied.


