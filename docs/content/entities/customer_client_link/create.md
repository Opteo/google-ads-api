---
title: Create CustomerClientLink
order: 4
type: create
entity: CustomerClientLink
---

### Create CustomerClientLink

This section describes how to create a CustomerClientLink.

```javascript
// Creating the entity

const customer_client_link = {
  // Your CustomerClientLink here, without immutable fields such as resource_name
}

const result = await customer.customerClientLinks.create(customer_client_link)
```

```javascript
// Example result
;['customers/1234567890/customerClientLinks/123123123']
```
