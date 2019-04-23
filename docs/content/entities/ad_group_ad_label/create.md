---
title: Create AdGroupAdLabel 
---

This section describes how to create a AdGroupAdLabel.



```javascript

// Creating the entity

const ad_group_ad_label = {
    // Your AdGroupAdLabel here 
}

const results = await customer.adGroupAdLabels.create(ad_group_ad_label)

console.log(results) // ['customers/1234567890/adGroupAdLabels/9765432177']

```