---
title: Create CustomerLabel 
---

This section describes how to create a CustomerLabel.



```javascript

// Creating the entity

const customer_label = {
    // Your CustomerLabel here 
}

const results = await customer.customerLabels.create(customer_label)

console.log(results) // ['customers/1234567890/customerLabels/9765432177']

```