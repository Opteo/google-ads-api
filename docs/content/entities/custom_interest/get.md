---
title: Get CustomInterest
order: 2
type: get
entity: CustomInterest
---

The `customer.customInterests.get()` method returns all fields for one CustomInterest, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript


// Getting the entity
let result = await customer.customInterests.get('customers/1234567890/customInterests/123123123')


// Here's what the result might look like
result === // Todo: add example get() return here

```
