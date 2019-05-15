---
title: Mutate Resources
order: 5.1
type: mutateresources_code
entity: Customer
---

```javascript
const response = await customer.mutateResources([
	// Create new budget
	{
		_resource: 'CampaignBudget',
		_operation: 'create',
		resource_name: 'customers/3827277046/campaignBudgets/-1',
		name: 'My new budget',
		amount_micros: 3000000,
		explicitly_shared: true,
	},
	// Update campaign to use the new budget and have a new name
	{
		_resource: 'Campaign',
		_operation: 'update',
		name: 'New name for my campaign with a new budget'
		resource_name: 'customers/3827277046/campaigns/456456456',
		campaign_budget: 'customers/3827277046/campaignBudgets/-1',
	},
	// Delete old budget
	{
		_resource: 'CampaignBudget',
		_operation: 'delete',
		resource_name: 'customers/3827277046/campaignBudgets/123123',
	},
])
```

```javascript

{
	results : [
		'customers/3827277046/campaignBudgets/265265547' // created
		'customers/3827277046/campaigns/456456456' // updated
		'customers/3827277046/campaignBugets/123123' // deleted
	],
	partial_failure_error : null,
	request: { /* your request object */ }
}
```

