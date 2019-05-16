---
title: Update CustomerExtensionSetting
order: 5.1
type: update_code
entity: CustomerExtensionSetting
---

```javascript
// Updating the entity

const customer_extension_setting = {
  resource_name: 'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.customerExtensionSettings.update(customer_extension_setting)

// Passing in an array of entities to update, validating only
const result = await customer.customerExtensionSettings.update(
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
