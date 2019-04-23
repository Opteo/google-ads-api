---
title: Create CustomerManagerLink 
---

This section describes how to create a CustomerManagerLink.



```javascript

// Creating the entity

const customer_manager_link = {
    // Your CustomerManagerLink here 
}

const results = await customer.customerManagerLinks.create(customer_manager_link)

console.log(results) // ['customers/1234567890/customerManagerLinks/9765432177']

```