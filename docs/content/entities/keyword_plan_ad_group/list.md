---
type: list
entity: KeywordPlanAdGroup
title: List KeywordPlanAdGroup
order: 3
---

This `customer.keywordPlanAdGroups.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript

// Listing all the keywordPlanAdGroups in the account
let result = await customer.keywordPlanAdGroups.list()

// Listing with constraints and a limited number of results
let result = await customer.keywordPlanAdGroups.list({
    constraints: [{
    	key : 'keyword_plan_ad_group.some_field',
    	op : '=',
    	val : 'yellow submarine'
	}],
    limit: 15,
})


// Here's what the result might look like
result === [// Todo: add example list() return here]

```
