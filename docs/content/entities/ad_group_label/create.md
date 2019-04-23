---
title: Create AdGroupLabel 
---

This section describes how to create a AdGroupLabel.



```javascript

// Creating the entity

const ad_group_label = {
    // Your AdGroupLabel here 
}

const results = await customer.adGroupLabels.create(ad_group_label)

console.log(results) // ['customers/1234567890/adGroupLabels/9765432177']

```