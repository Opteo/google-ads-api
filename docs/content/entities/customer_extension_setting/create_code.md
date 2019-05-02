---
title: Create CustomerExtensionSetting
order: 4.1
type: create_code
entity: CustomerExtensionSetting
---

```javascript
// Creating the entity

const customer_extension_setting = {
  // Your CustomerExtensionSetting here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerExtensionSettings.create(customer_extension_setting)

// Passing in an array of entities to create, validating only
const result = await customer.customerExtensionSettings.create(
  [customer_extension_setting, other_customer_extension_setting],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
